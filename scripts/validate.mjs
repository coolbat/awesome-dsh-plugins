import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "data", "plugins.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

const allowedStatuses = new Set(["reviewed", "held", "excluded"]);
const allowedCompatibility = new Set([
  "declared-rc6",
  "mixed",
  "unknown",
  "behind-baseline",
  "unsupported",
]);
const allowedCategories = new Set([
  "Agent & Workflow",
  "Developer Tools",
  "Discovery & Management",
  "Files & Data",
  "Integrations",
  "Memory",
  "Safety & Approvals",
  "Search & Research",
  "Skills & Methods",
  "UI & Workspace",
  "Vision & Media",
]);
const allowedLifecycle = new Set([
  "none",
  "prepack",
  "prepublishOnly",
  "prepare",
  "postinstall",
]);

const errors = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);
const isCommit = (value) =>
  typeof value === "string" && /^[0-9a-f]{40}$/.test(value);
const isText = (value) => typeof value === "string" && value.trim().length > 0;
const isSafePath = (value) =>
  isText(value) &&
  /^[A-Za-z0-9_./-]+$/.test(value) &&
  !value.startsWith("/") &&
  !value.split("/").includes("..");
const containsMarkupInjection = (value) =>
  typeof value === "string" &&
  (value.includes("<") || value.includes(">") || /javascript:/i.test(value));

if (catalog.schemaVersion !== 1) {
  fail("schemaVersion", "must equal 1");
}

if (
  !catalog.snapshot ||
  !/^\d{4}-\d{2}-\d{2}$/.test(catalog.snapshot.reviewedAt ?? "")
) {
  fail("snapshot.reviewedAt", "must be an ISO date");
}

if (!isCommit(catalog.snapshot?.dshContract?.commit)) {
  fail("snapshot.dshContract.commit", "must be a full 40-character SHA");
}

if (!Array.isArray(catalog.plugins) || catalog.plugins.length === 0) {
  fail("plugins", "must be a non-empty array");
}

const ids = new Set();
const repositories = new Set();

for (const [index, plugin] of (catalog.plugins ?? []).entries()) {
  const where = `plugins[${index}]`;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(plugin.id ?? "")) {
    fail(`${where}.id`, "must be a lowercase hyphenated identifier");
  } else if (ids.has(plugin.id)) {
    fail(`${where}.id`, `duplicate id ${plugin.id}`);
  } else {
    ids.add(plugin.id);
  }

  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(plugin.repository ?? "")) {
    fail(`${where}.repository`, "must be owner/repository");
  } else if (repositories.has(plugin.repository.toLowerCase())) {
    fail(`${where}.repository`, `duplicate repository ${plugin.repository}`);
  } else {
    repositories.add(plugin.repository.toLowerCase());
  }

  for (const field of [
    "name",
    "summaryEn",
    "summaryZh",
    "branch",
    "manifest",
    "noteEn",
    "noteZh",
  ]) {
    if (!isText(plugin[field])) {
      fail(`${where}.${field}`, "must be non-empty text");
    } else if (plugin[field].includes("\n")) {
      fail(`${where}.${field}`, "must stay on one line");
    }
    if (containsMarkupInjection(plugin[field])) {
      fail(
        `${where}.${field}`,
        "must not contain HTML or scriptable URL markup",
      );
    }
  }

  if (!allowedStatuses.has(plugin.status)) {
    fail(`${where}.status`, "has an unsupported value");
  }
  if (!allowedCompatibility.has(plugin.compatibility)) {
    fail(`${where}.compatibility`, "has an unsupported value");
  }
  if (!allowedCategories.has(plugin.category)) {
    fail(`${where}.category`, "has an unsupported value");
  }
  if (!isCommit(plugin.commit)) {
    fail(`${where}.commit`, "must be a full 40-character SHA");
  }
  if (!isSafePath(plugin.manifest)) {
    fail(`${where}.manifest`, "must be a safe repository-relative path");
  }
  if (plugin.status === "reviewed" && !isText(plugin.patch)) {
    fail(`${where}.patch`, "reviewed entries require a referenced patch");
  }
  if (plugin.patch !== null && !isText(plugin.patch)) {
    fail(`${where}.patch`, "must be non-empty text or null");
  } else if (plugin.patch !== null && !isSafePath(plugin.patch)) {
    fail(`${where}.patch`, "must be a safe repository-relative path");
  }
  if (!isText(plugin.repoLicense) || !isText(plugin.packageLicense)) {
    fail(
      `${where}.license`,
      "repository and package license fields are required",
    );
  }
  if (plugin.package !== null && !isText(plugin.package)) {
    fail(`${where}.package`, "must be non-empty text or null");
  } else if (
    plugin.package !== null &&
    !/^[@A-Za-z0-9_.\/-]+$/.test(plugin.package)
  ) {
    fail(
      `${where}.package`,
      "contains unsupported package identity characters",
    );
  }
  if (!allowedLifecycle.has(plugin.lifecycle)) {
    fail(`${where}.lifecycle`, "has an unsupported install lifecycle value");
  }
  if (!Array.isArray(plugin.signals) || plugin.signals.length === 0) {
    fail(`${where}.signals`, "must contain at least one observed signal");
  } else if (new Set(plugin.signals).size !== plugin.signals.length) {
    fail(`${where}.signals`, "must not contain duplicates");
  } else if (
    plugin.signals.some((signal) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(signal))
  ) {
    fail(`${where}.signals`, "must use lowercase hyphenated values");
  }
  if ("installCommand" in plugin) {
    fail(
      `${where}.installCommand`,
      "floating install recommendations are intentionally disallowed",
    );
  }
}

const markdownFiles = [
  "README.md",
  "README.zh-CN.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "docs/METHODOLOGY.md",
  "docs/REVIEW_LOG.md",
];

for (const relativeFile of markdownFiles) {
  const filePath = path.join(root, relativeFile);
  const markdown = fs.readFileSync(filePath, "utf8");
  const localLink = /\]\((\.{1,2}\/[^)\s#?]+)(?:[#?][^)]*)?\)/g;
  for (const match of markdown.matchAll(localLink)) {
    const target = path.resolve(path.dirname(filePath), match[1]);
    if (!fs.existsSync(target)) {
      fail(relativeFile, `missing local link target ${match[1]}`);
    }
  }
}

const counts = Object.fromEntries(
  [...allowedStatuses].map((status) => [
    status,
    (catalog.plugins ?? []).filter((plugin) => plugin.status === status).length,
  ]),
);

if (errors.length > 0) {
  console.error(`Catalog validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Catalog valid: ${catalog.plugins.length} candidates (${counts.reviewed} reviewed, ${counts.held} held, ${counts.excluded} excluded).`,
);
