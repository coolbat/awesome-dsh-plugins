import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { isSafeRepositoryPath } from "./lib/discovery.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const candidates = JSON.parse(
  fs.readFileSync(path.join(root, "data", "candidates.json"), "utf8"),
);
const state = JSON.parse(
  fs.readFileSync(path.join(root, "data", "discovery-state.json"), "utf8"),
);
const tombstones = JSON.parse(
  fs.readFileSync(path.join(root, "data", "tombstones.json"), "utf8"),
);
const errors = [];
const keys = new Set();
const statuses = new Set(["ready-for-review", "held", "already-listed"]);

if (candidates.schemaVersion !== 1)
  errors.push("candidates schemaVersion must be 1");
if (!Array.isArray(candidates.candidates))
  errors.push("candidates must be an array");
if (state.schemaVersion !== 1)
  errors.push("discovery state schemaVersion must be 1");
if (tombstones.schemaVersion !== 1 || !Array.isArray(tombstones.entries)) {
  errors.push("tombstones must contain a versioned entries array");
}

for (const [index, candidate] of (candidates.candidates ?? []).entries()) {
  const where = `candidates[${index}]`;
  if (typeof candidate.key !== "string" || keys.has(candidate.key)) {
    errors.push(`${where}.key must be unique text`);
  } else {
    keys.add(candidate.key);
  }
  if (
    !Number.isSafeInteger(candidate.repositoryId) ||
    candidate.repositoryId <= 0
  ) {
    errors.push(`${where}.repositoryId must be a positive GitHub numeric id`);
  }
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(candidate.repository ?? "")) {
    errors.push(`${where}.repository must be owner/repository`);
  }
  if (!/^[0-9a-f]{40}$/.test(candidate.commit ?? "")) {
    errors.push(`${where}.commit must be a full SHA`);
  }
  if (!isSafeRepositoryPath(candidate.manifest)) {
    errors.push(`${where}.manifest must be a safe relative path`);
  }
  if (!isSafeRepositoryPath(candidate.patch)) {
    errors.push(`${where}.patch must be a safe relative path`);
  }
  if (!statuses.has(candidate.status)) {
    errors.push(`${where}.status is unsupported`);
  }
  if (
    candidate.status === "ready-for-review" &&
    candidate.patchExists !== true
  ) {
    errors.push(`${where} cannot be ready without an existing patch`);
  }
}

if (errors.length) {
  process.stderr.write(
    `Candidate validation failed with ${errors.length} issue(s):\n${errors.map((error) => `- ${error}`).join("\n")}\n`,
  );
  process.exit(1);
}

process.stdout.write(
  `Candidate queue valid: ${candidates.candidates.length} structural leads.\n`,
);
