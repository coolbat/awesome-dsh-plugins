import assert from "node:assert/strict";
import test from "node:test";

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
} from "../scripts/lib/discovery.mjs";

const config = {
  github: {
    queries: ["topic:dsh-plugin", '"dsh.bundle.patch" in:readme'],
    incrementalLookbackHours: 48,
    firstRunLookbackDays: 30,
  },
};

test("incremental discovery overlaps the previous success window", () => {
  const queries = buildSearchQueries(
    config,
    { lastSuccessfulAt: "2026-08-15T12:00:00.000Z" },
    new Date("2026-08-16T00:00:00.000Z"),
  );

  assert.deepEqual(queries, [
    "topic:dsh-plugin pushed:>=2026-08-13",
    '"dsh.bundle.patch" in:readme pushed:>=2026-08-13',
  ]);
});

test("repository discovery deduplicates by GitHub numeric id", () => {
  const first = normalizeRepository(
    {
      id: 42,
      node_id: "R_42",
      full_name: "example/plugin",
      default_branch: "main",
      stargazers_count: 3,
      topics: ["dsh-plugin"],
    },
    "topic:dsh-plugin",
    "2026-08-15T12:00:00.000Z",
  );
  const second = { ...first, discoveredBy: ["keyword-query"], stars: 4 };
  const merged = mergeRepositories([first, second]);

  assert.equal(merged.length, 1);
  assert.deepEqual(merged[0].discoveredBy, [
    "keyword-query",
    "topic:dsh-plugin",
  ]);
  assert.equal(merged[0].stars, 4);
});

test("repository discovery stores a stable query without its date watermark", () => {
  const item = {
    id: 42,
    node_id: "R_42",
    full_name: "example/plugin",
    default_branch: "main",
    stargazers_count: 0,
  };
  const first = normalizeRepository(
    item,
    "topic:dsh-plugin pushed:>=2026-08-13",
    "2026-08-15T12:00:00.000Z",
  );
  const second = normalizeRepository(
    item,
    "topic:dsh-plugin pushed:>=2026-08-14",
    "2026-08-16T12:00:00.000Z",
  );

  assert.deepEqual(first.discoveredBy, ["topic:dsh-plugin"]);
  assert.deepEqual(second.discoveredBy, first.discoveredBy);
});

test("repository discovery preserves recency order instead of re-sorting by stars", () => {
  const recent = { repositoryId: 1, discoveredBy: ["query"], stars: 0 };
  const olderPopular = {
    repositoryId: 2,
    discoveredBy: ["query"],
    stars: 10_000,
  };

  assert.deepEqual(
    mergeRepositories([recent, olderPopular]).map((item) => item.repositoryId),
    [1, 2],
  );
});

test("repository query batches are interleaved before applying the run budget", () => {
  assert.deepEqual(
    interleaveRepositoryBatches([
      ["topic-new", "topic-old"],
      ["keyword-new", "keyword-old"],
    ]),
    ["topic-new", "keyword-new", "topic-old", "keyword-old"],
  );
});

test("static inspection binds manifest and patch to one commit", () => {
  const repository = normalizeRepository(
    {
      id: 42,
      node_id: "R_42",
      full_name: "example/plugin",
      default_branch: "main",
      stargazers_count: 3,
    },
    "topic:dsh-plugin",
    "2026-08-15T12:00:00.000Z",
  );
  const candidates = inspectRepositoryTree(
    repository,
    "0123456789abcdef0123456789abcdef01234567",
    [
      { path: "packages/dsh/package.json", type: "blob" },
      { path: "packages/dsh/cordis.patch.yml", type: "blob" },
    ],
    [
      {
        path: "packages/dsh/package.json",
        payload: {
          name: "example-dsh-plugin",
          version: "1.0.0",
          dsh: { bundle: { patch: "cordis.patch.yml" } },
        },
      },
    ],
  );

  assert.equal(candidates.length, 1);
  assert.equal(candidates[0].key, "42:packages/dsh/package.json");
  assert.equal(candidates[0].patch, "packages/dsh/cordis.patch.yml");
  assert.equal(candidates[0].status, "ready-for-review");
});

test("unsafe patch traversal is rejected", () => {
  assert.equal(isSafeRepositoryPath("../secret.yml"), false);
  assert.equal(isSafeRepositoryPath("/absolute/patch.yml"), false);
  assert.equal(isSafeRepositoryPath("packages/dsh/patch.yml"), true);
});

test("only GitHub's explicit empty-repository response is skippable", () => {
  assert.equal(
    isEmptyRepositoryError({
      status: 409,
      message: "GitHub request failed (409): Git Repository is empty.",
    }),
    true,
  );
  assert.equal(
    isEmptyRepositoryError({
      status: 409,
      message: "GitHub request failed (409): another conflict",
    }),
    false,
  );
  assert.equal(
    isEmptyRepositoryError({
      status: 403,
      message: "GitHub request failed (403): rate limit exceeded",
    }),
    false,
  );
});

test("candidate queue never re-adds tombstoned entries", () => {
  const candidate = {
    key: "42:package.json",
    repository: "example/plugin",
    manifest: "package.json",
    status: "ready-for-review",
  };
  const queue = mergeCandidateQueue({
    existing: [],
    discovered: [candidate],
    listedBundles: new Set(),
    tombstones: [{ key: "42:package.json" }],
  });

  assert.deepEqual(queue, []);
});

test("candidate queue removes old tombstones and refreshes listed status", () => {
  const tombstoned = {
    key: "42:package.json",
    repository: "example/rejected",
    manifest: "package.json",
    status: "ready-for-review",
  };
  const nowListed = {
    ...tombstoned,
    key: "43:package.json",
    repository: "example/listed",
  };
  const queue = mergeCandidateQueue({
    existing: [tombstoned, nowListed],
    discovered: [],
    listedBundles: new Set([
      getBundleIdentity("example/listed", "package.json"),
    ]),
    tombstones: [{ key: tombstoned.key }],
  });

  assert.equal(queue.length, 1);
  assert.equal(queue[0].key, nowListed.key);
  assert.equal(queue[0].status, "already-listed");
});

test("listed status is scoped to a repository manifest, not the whole repository", () => {
  const queue = mergeCandidateQueue({
    existing: [],
    discovered: [
      {
        key: "42:packages/new/package.json",
        repository: "example/monorepo",
        manifest: "packages/new/package.json",
        status: "ready-for-review",
      },
    ],
    listedBundles: new Set([
      getBundleIdentity("example/monorepo", "packages/existing/package.json"),
    ]),
    tombstones: [],
  });

  assert.equal(queue[0].status, "ready-for-review");
});

test("candidate queue ignores popularity-only metadata changes", () => {
  const candidate = {
    key: "42:package.json",
    repository: "example/plugin",
    manifest: "package.json",
    status: "ready-for-review",
    discoveredBy: ["topic:dsh-plugin"],
    metadata: { stars: 10 },
  };
  const queue = mergeCandidateQueue({
    existing: [candidate],
    discovered: [{ ...candidate, metadata: { stars: 11 } }],
    listedBundles: new Set(),
    tombstones: [],
  });

  assert.strictEqual(queue[0], candidate);
});

test("successful discovery advances its watermark even without candidate changes", () => {
  const state = buildDiscoveryState(
    {
      schemaVersion: 1,
      lastSuccessfulAt: "2026-08-15T00:00:00.000Z",
      lastAttemptedAt: "2026-08-15T00:00:00.000Z",
    },
    "2026-08-16T00:00:00.000Z",
    false,
  );

  assert.equal(state.lastSuccessfulAt, "2026-08-16T00:00:00.000Z");
  assert.equal(state.lastAttemptedAt, "2026-08-16T00:00:00.000Z");
});
