import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import {
  buildDiscoveryState,
  buildSearchQueries,
  getBundleIdentity,
  inspectRepositoryTree,
  interleaveRepositoryBatches,
  isEmptyRepositoryError,
  isSafeRepositoryPath,
  mergeCandidateQueue,
  mergeRepositories,
  normalizeRepository,
} from "./lib/discovery.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = {
  config: path.join(root, "config", "discovery.json"),
  catalog: path.join(root, "data", "plugins.json"),
  candidates: path.join(root, "data", "candidates.json"),
  state: path.join(root, "data", "discovery-state.json"),
  tombstones: path.join(root, "data", "tombstones.json"),
  report: path.join(root, "reports", "discovery", "latest.json"),
};

class GithubRequestError extends Error {
  constructor(message, status = 0) {
    super(message);
    this.name = "GithubRequestError";
    this.status = status;
  }
}

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, "utf8"));
}

async function writeJsonAtomic(file, value) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  const temporary = `${file}.tmp`;
  await fs.writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await fs.rename(temporary, file);
}

function createGithubClient(token, settings) {
  return async function github(endpoint) {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      settings.requestTimeoutMs,
    );
    try {
      const response = await fetch(`https://api.github.com${endpoint}`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "User-Agent": "awesome-dsh-plugins-discovery",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        signal: controller.signal,
      });
      const declaredSize = Number(response.headers.get("content-length") ?? 0);
      if (declaredSize > settings.maxResponseBytes) {
        throw new GithubRequestError(
          `GitHub response exceeded ${settings.maxResponseBytes} bytes.`,
          response.status,
        );
      }
      const text = await response.text();
      if (Buffer.byteLength(text, "utf8") > settings.maxResponseBytes) {
        throw new GithubRequestError(
          `GitHub response exceeded ${settings.maxResponseBytes} bytes.`,
          response.status,
        );
      }
      let payload;
      try {
        payload = text ? JSON.parse(text) : null;
      } catch {
        throw new GithubRequestError(
          "GitHub returned an invalid JSON response.",
          response.status,
        );
      }
      if (!response.ok) {
        throw new GithubRequestError(
          `GitHub request failed (${response.status}): ${payload?.message ?? "unknown error"}`,
          response.status,
        );
      }
      return payload;
    } catch (error) {
      if (error?.name === "AbortError") {
        throw new GithubRequestError("GitHub request timed out.");
      }
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  };
}

async function searchRepositories(github, queries, settings, observedAt) {
  const repositoryBatches = [];
  const errors = [];
  let incomplete = false;

  for (const query of queries) {
    const queryRepositories = [];
    for (let page = 1; page <= settings.maxPagesPerQuery; page += 1) {
      try {
        const params = new URLSearchParams({
          q: query,
          sort: "updated",
          order: "desc",
          per_page: "100",
          page: String(page),
        });
        const payload = await github(`/search/repositories?${params}`);
        incomplete ||= payload.incomplete_results === true;
        const items = Array.isArray(payload.items) ? payload.items : [];
        for (const item of items) {
          try {
            queryRepositories.push(
              normalizeRepository(item, query, observedAt),
            );
          } catch (error) {
            errors.push({
              query,
              repository: item?.full_name ?? null,
              message: String(error),
            });
          }
        }
        if (items.length < 100) break;
      } catch (error) {
        errors.push({ query, repository: null, message: String(error) });
        break;
      }
    }
    repositoryBatches.push(queryRepositories);
  }

  return {
    repositories: mergeRepositories(
      interleaveRepositoryBatches(repositoryBatches),
    ).slice(0, settings.maxRepositoriesPerRun),
    incomplete,
    errors,
  };
}

function decodeManifest(blob, maxResponseBytes) {
  if (blob?.encoding !== "base64" || typeof blob.content !== "string") {
    throw new Error("Manifest blob is not base64 encoded.");
  }
  const decoded = Buffer.from(blob.content.replace(/\n/g, ""), "base64");
  if (decoded.length > maxResponseBytes) {
    throw new Error("Manifest exceeds the response-size budget.");
  }
  return JSON.parse(decoded.toString("utf8"));
}

async function inspectRepository(github, repository, settings) {
  const encodedRepository = repository.repository
    .split("/")
    .map(encodeURIComponent)
    .join("/");
  const commitPayload = await github(
    `/repos/${encodedRepository}/commits/${encodeURIComponent(repository.defaultBranch)}`,
  );
  const commit = commitPayload?.sha;
  if (!/^[0-9a-f]{40}$/.test(commit ?? "")) {
    throw new Error("GitHub did not resolve the default branch to a full SHA.");
  }
  const treePayload = await github(
    `/repos/${encodedRepository}/git/trees/${commit}?recursive=1`,
  );
  if (treePayload?.truncated === true) {
    throw new Error("Repository tree was truncated; inspection is incomplete.");
  }
  const tree = Array.isArray(treePayload?.tree) ? treePayload.tree : [];
  if (tree.length > settings.maxRepositoryTreeEntries) {
    throw new Error("Repository tree exceeds the configured entry budget.");
  }
  const manifestEntries = tree
    .filter(
      (entry) =>
        entry?.type === "blob" &&
        typeof entry.path === "string" &&
        (entry.path === "package.json" ||
          entry.path.endsWith("/package.json")) &&
        !entry.path.split("/").includes("node_modules") &&
        isSafeRepositoryPath(entry.path) &&
        typeof entry.sha === "string" &&
        (entry.size ?? 0) <= settings.maxResponseBytes,
    )
    .slice(0, settings.maxManifestsPerRepository);

  const manifests = [];
  for (const entry of manifestEntries) {
    const blob = await github(
      `/repos/${encodedRepository}/git/blobs/${encodeURIComponent(entry.sha)}`,
    );
    try {
      manifests.push({
        path: entry.path,
        payload: decodeManifest(blob, settings.maxResponseBytes),
      });
    } catch {
      // One malformed package.json cannot turn the rest of the repository into
      // a successful structural match.
    }
  }

  return inspectRepositoryTree(repository, commit, tree, manifests);
}

async function run() {
  const args = new Set(process.argv.slice(2));
  const full = args.has("--full");
  const dryRun = args.has("--dry-run");
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is required for bounded GitHub discovery.");
  }

  const [config, catalog, candidateData, state, tombstoneData] =
    await Promise.all([
      readJson(files.config),
      readJson(files.catalog),
      readJson(files.candidates),
      readJson(files.state),
      readJson(files.tombstones),
    ]);
  const now = new Date();
  const observedAt = now.toISOString();
  const github = createGithubClient(token, config.github);
  const queries = buildSearchQueries(config, state, now, full);
  const search = await searchRepositories(
    github,
    queries,
    config.github,
    observedAt,
  );
  const candidates = [];
  const errors = [...search.errors];

  for (const repository of search.repositories) {
    if (repository.archived || repository.fork) continue;
    try {
      candidates.push(
        ...(await inspectRepository(github, repository, config.github)),
      );
    } catch (error) {
      if (isEmptyRepositoryError(error)) continue;
      errors.push({
        query: null,
        repository: repository.repository,
        message: String(error),
      });
    }
  }

  const listedBundles = new Set(
    catalog.plugins.map((plugin) =>
      getBundleIdentity(plugin.repository, plugin.manifest),
    ),
  );
  const merged = mergeCandidateQueue({
    existing: candidateData.candidates,
    discovered: candidates,
    listedBundles,
    tombstones: tombstoneData.entries,
  });
  const partial = search.incomplete || errors.length > 0;
  const changed =
    JSON.stringify(merged) !== JSON.stringify(candidateData.candidates);
  const runSummary = {
    repositoriesObserved: search.repositories.length,
    bundleManifestsFound: candidates.length,
    errors: errors.length,
  };
  const output = {
    schemaVersion: 1,
    generatedAt: changed ? observedAt : candidateData.generatedAt,
    candidates: merged,
  };
  const nextState = buildDiscoveryState(state, observedAt, partial);
  const report = {
    schemaVersion: 1,
    mode: full ? "full" : "incremental",
    observedAt,
    partial,
    queries,
    summary: runSummary,
    errors,
  };

  if (!dryRun) {
    await Promise.all([
      writeJsonAtomic(files.candidates, output),
      writeJsonAtomic(files.state, nextState),
      writeJsonAtomic(files.report, report),
    ]);
  }

  process.stdout.write(
    `${JSON.stringify({ ...runSummary, partial, changed, dryRun })}\n`,
  );
  if (partial) process.exitCode = 2;
}

run().catch((error) => {
  process.stderr.write(`Discovery failed: ${String(error)}\n`);
  process.exitCode = 1;
});
