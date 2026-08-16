import path from "node:path";

const SAFE_PATH = /^[A-Za-z0-9_./@-]+$/;

export function isSafeRepositoryPath(value) {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    value.length <= 500 &&
    SAFE_PATH.test(value) &&
    !value.startsWith("/") &&
    !value.split("/").includes("..")
  );
}

export function isEmptyRepositoryError(error) {
  return (
    error?.status === 409 &&
    error?.message === "GitHub request failed (409): Git Repository is empty."
  );
}

export function buildSearchQueries(config, state, now, full = false) {
  const queries = config.github.queries;
  if (full) return queries;

  const fallback = new Date(now);
  fallback.setUTCDate(
    fallback.getUTCDate() - config.github.firstRunLookbackDays,
  );
  const prior = state.lastSuccessfulAt
    ? new Date(state.lastSuccessfulAt)
    : fallback;
  prior.setUTCHours(
    prior.getUTCHours() - config.github.incrementalLookbackHours,
  );
  const pushedAfter = prior.toISOString().slice(0, 10);

  return queries.map((query) => `${query} pushed:>=${pushedAfter}`);
}

export function normalizeRepository(item, query, observedAt) {
  if (!Number.isSafeInteger(item?.id) || item.id <= 0) {
    throw new Error("GitHub repository result is missing a numeric id.");
  }
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(item.full_name ?? "")) {
    throw new Error("GitHub repository result has an invalid full_name.");
  }

  return {
    repositoryId: item.id,
    repositoryNodeId:
      typeof item.node_id === "string" ? item.node_id : "unknown",
    repository: item.full_name,
    repositoryUrl: `https://github.com/${item.full_name}`,
    defaultBranch:
      typeof item.default_branch === "string" ? item.default_branch : "main",
    archived: item.archived === true,
    fork: item.fork === true,
    pushedAt: typeof item.pushed_at === "string" ? item.pushed_at : null,
    description: typeof item.description === "string" ? item.description : null,
    topics: Array.isArray(item.topics)
      ? item.topics.filter((topic) => typeof topic === "string").sort()
      : [],
    stars: Number.isFinite(item.stargazers_count) ? item.stargazers_count : 0,
    discoveredBy: [query.replace(/\s+pushed:>=\d{4}-\d{2}-\d{2}$/, "")],
    observedAt,
  };
}

export function mergeRepositories(repositories) {
  const byId = new Map();

  for (const repository of repositories) {
    const existing = byId.get(repository.repositoryId);
    if (!existing) {
      byId.set(repository.repositoryId, repository);
      continue;
    }
    byId.set(repository.repositoryId, {
      ...existing,
      ...repository,
      discoveredBy: [
        ...new Set([...existing.discoveredBy, ...repository.discoveredBy]),
      ].sort(),
    });
  }

  return [...byId.values()];
}

export function interleaveRepositoryBatches(batches) {
  const interleaved = [];
  const longestBatch = Math.max(0, ...batches.map((batch) => batch.length));

  for (let index = 0; index < longestBatch; index += 1) {
    for (const batch of batches) {
      if (index < batch.length) interleaved.push(batch[index]);
    }
  }

  return interleaved;
}

export function inspectRepositoryTree(repository, commit, tree, manifests) {
  if (!/^[0-9a-f]{40}$/.test(commit)) {
    throw new Error("Repository inspection requires a full commit SHA.");
  }
  const treePaths = new Set(
    tree
      .filter(
        (entry) => entry.type === "blob" && isSafeRepositoryPath(entry.path),
      )
      .map((entry) => entry.path),
  );
  const candidates = [];

  for (const manifest of manifests) {
    const patch = manifest.payload?.dsh?.bundle?.patch;
    if (typeof patch !== "string" || !isSafeRepositoryPath(patch)) continue;

    const manifestDirectory = path.posix.dirname(manifest.path);
    const resolvedPatch = path.posix.normalize(
      manifestDirectory === "." ? patch : `${manifestDirectory}/${patch}`,
    );
    const patchExists =
      isSafeRepositoryPath(resolvedPatch) && treePaths.has(resolvedPatch);
    const key = `${repository.repositoryId}:${manifest.path}`;

    candidates.push({
      key,
      repositoryId: repository.repositoryId,
      repository: repository.repository,
      repositoryUrl: repository.repositoryUrl,
      repositoryNodeId: repository.repositoryNodeId,
      manifest: manifest.path,
      patch: resolvedPatch,
      patchExists,
      package:
        typeof manifest.payload.name === "string"
          ? manifest.payload.name
          : null,
      version:
        typeof manifest.payload.version === "string"
          ? manifest.payload.version
          : null,
      commit,
      defaultBranch: repository.defaultBranch,
      status: patchExists ? "ready-for-review" : "held",
      blocker: patchExists ? null : "referenced-patch-missing",
      discoveredBy: repository.discoveredBy,
      observedAt: repository.observedAt,
      metadata: {
        archived: repository.archived,
        fork: repository.fork,
        pushedAt: repository.pushedAt,
        stars: repository.stars,
        topics: repository.topics,
      },
    });
  }

  return candidates;
}

export function mergeCandidateQueue({
  existing,
  discovered,
  listedBundles,
  tombstones,
}) {
  const tombstoneKeys = new Set(tombstones.map((entry) => entry.key));
  const queue = new Map(
    existing
      .filter((candidate) => !tombstoneKeys.has(candidate.key))
      .map((candidate) => [
        candidate.key,
        listedBundles.has(
          getBundleIdentity(candidate.repository, candidate.manifest),
        )
          ? { ...candidate, status: "already-listed" }
          : candidate,
      ]),
  );

  for (const candidate of discovered) {
    if (tombstoneKeys.has(candidate.key)) continue;
    const listed = listedBundles.has(
      getBundleIdentity(candidate.repository, candidate.manifest),
    );
    const next = {
      ...queue.get(candidate.key),
      ...candidate,
      status: listed ? "already-listed" : candidate.status,
    };
    const previous = queue.get(candidate.key);
    queue.set(
      candidate.key,
      previous && sameCandidateEvidence(previous, next) ? previous : next,
    );
  }

  return [...queue.values()].sort(
    (left, right) =>
      left.repository.localeCompare(right.repository) ||
      left.manifest.localeCompare(right.manifest),
  );
}

export function getBundleIdentity(repository, manifest) {
  return `${repository.toLowerCase()}:${manifest}`;
}

export function buildDiscoveryState(state, observedAt, partial) {
  return {
    schemaVersion: 1,
    lastSuccessfulAt: partial ? state.lastSuccessfulAt : observedAt,
    lastAttemptedAt: observedAt,
  };
}

function sameCandidateEvidence(previous, next) {
  const fields = [
    "repositoryId",
    "repository",
    "repositoryNodeId",
    "manifest",
    "patch",
    "patchExists",
    "package",
    "version",
    "commit",
    "defaultBranch",
    "status",
    "blocker",
  ];
  return (
    fields.every((field) => previous[field] === next[field]) &&
    JSON.stringify(previous.discoveredBy) === JSON.stringify(next.discoveredBy)
  );
}
