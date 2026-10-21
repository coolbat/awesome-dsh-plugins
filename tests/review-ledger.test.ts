import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";

import * as reviewLedger from "../scripts/lib/review-ledger.mjs";
import { validateReviewLedger } from "../scripts/lib/review-ledger.mjs";

const sourceCommit = "0123456789abcdef0123456789abcdef01234567";
const candidateCommit = "89abcdef0123456789abcdef0123456789abcdef";

const snapshot = {
  schemaVersion: 1,
  source: {
    repository: "coolbat/awesome-dsh-plugins",
    pullRequest: 2,
    commit: sourceCommit,
    readyCount: 1,
  },
  candidates: [
    {
      key: "42:package.json",
      repository: "example/plugin",
      manifest: "package.json",
      patch: "cordis.patch.yml",
      patchExists: true,
      commit: candidateCommit,
      status: "ready-for-review",
    },
  ],
};

const ledger = {
  schemaVersion: 1,
  sourceCommit,
  records: [
    {
      sequence: 1,
      key: "42:package.json",
      repository: "example/plugin",
      manifest: "package.json",
      commit: candidateCommit,
      disposition: "pending",
      catalogId: null,
      reason: null,
    },
  ],
};

test("freezing a candidate queue retains only ready records in stable order", () => {
  assert.equal(typeof reviewLedger.buildFrozenReview, "function");

  const firstReady = snapshot.candidates[0];
  const secondReady = {
    ...firstReady,
    key: "99:packages/plugin/package.json",
    repository: "example/second-plugin",
    manifest: "packages/plugin/package.json",
  };
  const result = reviewLedger.buildFrozenReview({
    queue: {
      candidates: [
        firstReady,
        { ...firstReady, key: "77:package.json", status: "already-listed" },
        secondReady,
      ],
    },
    sourceCommit,
    capturedAt: "2026-08-18T00:00:00.000Z",
  });

  assert.deepEqual(result.snapshot, {
    schemaVersion: 1,
    source: {
      repository: "coolbat/awesome-dsh-plugins",
      pullRequest: 2,
      commit: sourceCommit,
      readyCount: 2,
      capturedAt: "2026-08-18T00:00:00.000Z",
    },
    candidates: [firstReady, secondReady],
  });
  assert.deepEqual(result.ledger, {
    schemaVersion: 1,
    sourceCommit,
    records: [
      {
        sequence: 1,
        key: firstReady.key,
        repository: firstReady.repository,
        manifest: firstReady.manifest,
        commit: firstReady.commit,
        disposition: "pending",
        catalogId: null,
        reason: null,
        reviewedAt: null,
      },
      {
        sequence: 2,
        key: secondReady.key,
        repository: secondReady.repository,
        manifest: secondReady.manifest,
        commit: secondReady.commit,
        disposition: "pending",
        catalogId: null,
        reason: null,
        reviewedAt: null,
      },
    ],
  });
});

test("applying a review wave combines explicit and exact historical decisions", () => {
  assert.equal(typeof reviewLedger.applyReviewWave, "function");

  const secondRecord = {
    ...ledger.records[0],
    sequence: 2,
    key: "99:package.json",
    repository: "example/second-plugin",
  };
  const catalogRecord = {
    id: "example-second-plugin",
    repository: secondRecord.repository,
  };
  const result = reviewLedger.applyReviewWave({
    ledger: { ...ledger, records: [ledger.records[0], secondRecord] },
    catalog: { snapshot: { reviewedAt: "2026-08-16" }, plugins: [] },
    priorLedger: {
      records: [
        {
          ...ledger.records[0],
          disposition: "duplicate-or-superseded",
          reason: "Exact historical duplicate.",
          reviewedAt: "2026-08-16",
        },
      ],
    },
    decisions: [
      {
        sequence: 2,
        disposition: "catalog-reviewed",
        catalogId: catalogRecord.id,
        reason: null,
      },
    ],
    catalogRecords: [catalogRecord],
    start: 1,
    end: 2,
    reviewedAt: "2026-08-18",
  });

  assert.deepEqual(result.ledger.records, [
    {
      ...ledger.records[0],
      disposition: "duplicate-or-superseded",
      reason: "Exact historical duplicate.",
      reviewedAt: "2026-08-18",
    },
    {
      ...secondRecord,
      disposition: "catalog-reviewed",
      catalogId: catalogRecord.id,
      reason: null,
      reviewedAt: "2026-08-18",
    },
  ]);
  assert.deepEqual(result.catalog, {
    snapshot: { reviewedAt: "2026-08-18" },
    plugins: [catalogRecord],
  });
});

test("applying a review wave rejects a record without reproducible evidence", () => {
  assert.equal(typeof reviewLedger.applyReviewWave, "function");

  assert.throws(
    () =>
      reviewLedger.applyReviewWave({
        ledger,
        catalog: { snapshot: { reviewedAt: "2026-08-16" }, plugins: [] },
        priorLedger: { records: [] },
        decisions: [],
        catalogRecords: [],
        start: 1,
        end: 1,
        reviewedAt: "2026-08-18",
      }),
    /missing an explicit or exact historical decision/,
  );
});

test("a matching frozen candidate and ledger record validate", async () => {
  assert.deepEqual(validateReviewLedger({ snapshot, ledger, catalog: [] }), []);
});

test("a frozen candidate missing from the ledger is rejected", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: { ...ledger, records: [] },
      catalog: [],
    }),
    ["ledger is missing candidate key 42:package.json"],
  );
});

test("a candidate cannot be dispositioned twice", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: { ...ledger, records: [ledger.records[0], ledger.records[0]] },
      catalog: [],
    }),
    ["ledger contains duplicate candidate key 42:package.json"],
  );
});

test("ledger records cannot change a candidate's pinned source", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: {
        ...ledger,
        records: [
          {
            ...ledger.records[0],
            commit: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
        ],
      },
      catalog: [],
    }),
    ["ledger record 42:package.json commit does not match snapshot"],
  );
});

test("a catalog disposition must resolve to the matching catalog record", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: {
        ...ledger,
        records: [
          {
            ...ledger.records[0],
            disposition: "catalog-reviewed",
            catalogId: "example-plugin",
          },
        ],
      },
      catalog: [],
    }),
    [
      "ledger record 42:package.json catalog-reviewed does not resolve to catalog id example-plugin",
    ],
  );
});

test("the frozen snapshot must contain its declared ready count", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot: {
        ...snapshot,
        source: { ...snapshot.source, readyCount: 2 },
      },
      ledger,
      catalog: [],
    }),
    ["snapshot declares 2 ready candidates but contains 1"],
  );
});

test("completion mode rejects undispositioned records", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger,
      catalog: [],
      requireComplete: true,
    }),
    ["ledger record 42:package.json is still pending"],
  );
});

test("the frozen snapshot cannot contain duplicate candidate keys", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot: {
        ...snapshot,
        source: { ...snapshot.source, readyCount: 2 },
        candidates: [snapshot.candidates[0], snapshot.candidates[0]],
      },
      ledger,
      catalog: [],
    }),
    ["snapshot contains duplicate candidate key 42:package.json"],
  );
});

test("the frozen queue cannot include a non-ready candidate", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot: {
        ...snapshot,
        candidates: [{ ...snapshot.candidates[0], status: "already-listed" }],
      },
      ledger,
      catalog: [],
    }),
    ["snapshot candidate 42:package.json must be ready-for-review"],
  );
});

test("every frozen candidate stays pinned to a full commit", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot: {
        ...snapshot,
        candidates: [{ ...snapshot.candidates[0], commit: "89abcdef" }],
      },
      ledger: {
        ...ledger,
        records: [{ ...ledger.records[0], commit: "89abcdef" }],
      },
      catalog: [],
    }),
    ["snapshot candidate 42:package.json requires a full commit SHA"],
  );
});

test("review dispositions use the closed ledger vocabulary", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: {
        ...ledger,
        records: [{ ...ledger.records[0], disposition: "looks-good-to-me" }],
      },
      catalog: [],
    }),
    [
      "ledger record 42:package.json has unsupported disposition looks-good-to-me",
    ],
  );
});

test("a non-catalog disposition records its evidence-based reason", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: {
        ...ledger,
        records: [
          {
            ...ledger.records[0],
            disposition: "example-fixture-or-archive",
          },
        ],
      },
      catalog: [],
    }),
    [
      "ledger record 42:package.json example-fixture-or-archive requires a reason",
    ],
  );
});

test("the ledger is bound to the frozen queue commit", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: {
        ...ledger,
        sourceCommit: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      catalog: [],
    }),
    ["ledger source commit does not match the frozen snapshot"],
  );
});

test("ledger sequence numbers preserve the frozen queue order", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: {
        ...ledger,
        records: [{ ...ledger.records[0], sequence: 2 }],
      },
      catalog: [],
    }),
    ["ledger record 42:package.json sequence must be 1"],
  );
});

test("the ledger cannot introduce a candidate outside the snapshot", () => {
  assert.deepEqual(
    validateReviewLedger({
      snapshot,
      ledger: {
        ...ledger,
        records: [
          ledger.records[0],
          {
            ...ledger.records[0],
            sequence: 2,
            key: "99:package.json",
            repository: "example/other",
          },
        ],
      },
      catalog: [],
    }),
    ["ledger contains candidate key outside snapshot 99:package.json"],
  );
});

test("the repository review ledger passes its CLI gate", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/validate-review-ledger.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr);
  assert.equal(
    result.stdout.trim(),
    "Review ledger valid: 5336 records (0 pending).",
  );
});

test("October 20 separates empty scaffolds, skill compositions and published source conflicts", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  for (const [repository, manifest, disposition] of [
    ["dxww123/dsh-alphasolve", "package.json", "source-conflict"],
    [
      "EJYDOvO/Character-Agent-V1",
      "bundles/character-extras/package.json",
      "non-plugin-package",
    ],
    ["QingyunA/answer-me-with-html", "package.json", "non-plugin-package"],
    [
      "KCNyu/clawock",
      "examples/dsh/packages/clawock-dsh/package.json",
      "source-conflict",
    ],
    [
      "volcengine/OpenViking",
      "examples/dsh-memory-plugin/package.json",
      "source-conflict",
    ],
  ]) {
    const record = current.records.find(
      (item: { repository: string; manifest: string }) =>
        item.repository.toLowerCase() === repository.toLowerCase() &&
        item.manifest === manifest,
    );
    assert.equal(record?.disposition, disposition);
    assert.equal(record?.catalogId, null);
    assert.match(record?.commit ?? "", /^[a-f0-9]{40}$/);
    assert.ok(record?.reason.length > 80);
  }
  assert.equal(
    current.records.filter(
      (item: { disposition: string }) => item.disposition === "pending",
    ).length,
    0,
  );
});

test("October 19 distinguishes renamed repositories, actual templates and patch identities", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  assert.equal(
    current.sourceCommit,
    "4dcbebe8e5b98c8d193ab8d85e2bae9500970c66",
  );
  for (const [key, disposition, catalogId] of [
    [
      "1373676024:packages/deepseekbot/package.json",
      "duplicate-or-superseded",
      "botharness-botharness",
    ],
    [
      "1373676024:packages/todo/package.json",
      "example-fixture-or-archive",
      null,
    ],
    [
      "1216785679:integrations/dsh-plugin/package.json",
      "non-plugin-package",
      null,
    ],
    ["1359659239:package.json", "structural-rejected", null],
    [
      "1351850830:scene-template/package.json",
      "duplicate-or-superseded",
      "wuzhiping-cordis-plugins",
    ],
  ]) {
    const record = current.records.find(
      (item: { key: string }) => item.key === key,
    );
    assert.equal(record?.disposition, disposition);
    assert.equal(record?.catalogId, catalogId);
    assert.match(record?.commit ?? "", /^[a-f0-9]{40}$/);
  }
});

test("October 18 treats the empty Git core patch as infrastructure", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  const record = current.records.find(
    (item: { key: string }) => item.key === "1422787299:package.json",
  );
  assert.equal(record?.disposition, "non-plugin-package");
  assert.equal(record?.catalogId, null);
  assert.equal(record?.commit, "70ca459d3e1b3bc7a66e5461d75ab281aef7cd63");
  assert.match(record?.reason ?? "", /empty cordis.patch.yml/);
});

test("October 17 retains rename identity and separates compositions from fixtures", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  for (const [key, disposition, catalogId] of [
    [
      "1373676024:packages/deepseekbot/package.json",
      "duplicate-or-superseded",
      "botharness-botharness",
    ],
    [
      "1373676024:packages/todo/package.json",
      "example-fixture-or-archive",
      null,
    ],
    ["1420587336:package.json", "source-conflict", null],
    ["1350325702:package.json", "non-plugin-package", null],
    [
      "1133901637:integrations/dsh-plugin/package.json",
      "non-plugin-package",
      null,
    ],
    ["1422216485:package.json", "non-plugin-package", null],
    ["1416779498:selfcheck/package.json", "example-fixture-or-archive", null],
    [
      "1374007757:plugins/dsh-semi-ui-showcase-plugin/package.json",
      "example-fixture-or-archive",
      null,
    ],
  ]) {
    const record = current.records.find(
      (item: { key: string }) => item.key === key,
    );
    assert.equal(record?.disposition, disposition);
    assert.equal(record?.catalogId, catalogId);
    assert.match(record?.commit ?? "", /^[a-f0-9]{40}$/);
  }
});

test("October 15 distinguishes skill-only bundles and development playgrounds", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  for (const [key, disposition] of [
    ["1401476500:package.json", "non-plugin-package"],
    ["1413798525:package.json", "non-plugin-package"],
    [
      "1333718792:packages/dsh-tauri-ui-playground/package.json",
      "example-fixture-or-archive",
    ],
  ]) {
    const record = current.records.find(
      (item: { key: string }) => item.key === key,
    );
    assert.equal(record?.disposition, disposition);
    assert.equal(record?.catalogId, null);
    assert.match(record?.commit, /^[a-f0-9]{40}$/);
  }
  assert.equal(
    current.sourceCommit,
    "4dcbebe8e5b98c8d193ab8d85e2bae9500970c66",
  );
});

test("October 16 distinguishes live scene templates, fixtures and conflicting forks", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  for (const [key, disposition] of [
    ["1416779498:selfcheck/package.json", "example-fixture-or-archive"],
    [
      "1414558945:packages/sdlc-mock-llm/package.json",
      "example-fixture-or-archive",
    ],
    [
      "1412464741:.snapshot-backup-before-npm-install/package.json",
      "example-fixture-or-archive",
    ],
    ["1351850830:scene-template/package.json", "duplicate-or-superseded"],
    ["1351850830:no-browser-auth/package.json", "duplicate-or-superseded"],
    ["1333130694:package.json", "source-conflict"],
  ]) {
    const record = current.records.find(
      (item: { key: string }) => item.key === key,
    );
    assert.equal(record?.disposition, disposition);
    assert.equal(
      record?.catalogId,
      key === "1351850830:scene-template/package.json"
        ? "wuzhiping-cordis-plugins"
        : null,
    );
    assert.match(record?.commit ?? "", /^[a-f0-9]{40}$/);
    assert.ok(record?.reason.length > 40);
  }
});

test("October 14 separates source conflicts, host distributions, wrappers and showcases", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  for (const [key, disposition] of [
    ["1414971193:plugins/dsh-memory-evolve/package.json", "source-conflict"],
    ["1338524047:packages/desktop/package.json", "non-plugin-package"],
    ["1357732445:.dsh/fist-mbt-plugin/package.json", "non-plugin-package"],
    [
      "1374007757:plugins/dsh-semi-ui-showcase-plugin/package.json",
      "example-fixture-or-archive",
    ],
  ]) {
    const record = current.records.find(
      (item: { key: string }) => item.key === key,
    );
    assert.equal(record?.disposition, disposition);
    assert.equal(record?.catalogId, null);
    assert.match(record?.commit, /^[a-f0-9]{40}$/);
  }
});

test("October 21 distinguishes shipped vendor components, probes and skill-only composition", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  for (const [repository, manifest, disposition] of [
    ["Memory175/blender-mentor", "package.json", "non-plugin-package"],
    [
      "codezzzsleep/dsh-local-global",
      "packages/dsh-lg-global/probe/package.json",
      "example-fixture-or-archive",
    ],
    [
      "Max-Null/seek-soul-in-darkness",
      "shell/profile-template/vendor/dsh-better-sidebar/package.json",
      "source-conflict",
    ],
    [
      "Max-Null/seek-soul-in-darkness",
      "shell/profile-template/vendor/dsh-capture/package.json",
      "source-conflict",
    ],
    [
      "Max-Null/seek-soul-in-darkness",
      "shell/profile-template/vendor/dsh-ssid-panels/package.json",
      "duplicate-or-superseded",
    ],
    ["mindie-agent/mindie-agent-dsh", "package.json", "catalog-held"],
  ]) {
    const row = current.records.find(
      (item: { repository: string; manifest: string }) =>
        item.repository.toLowerCase() === repository.toLowerCase() &&
        item.manifest === manifest,
    );
    assert.equal(row?.disposition, disposition);
    assert.match(row?.commit ?? "", /^[a-f0-9]{40}$/);
  }
});

test("October 21 preserves trust-boundary holds and code versus artwork licensing", () => {
  const catalog = JSON.parse(readFileSync("data/plugins.json", "utf8"));
  for (const id of [
    "xbbkok-dsh-user-profile",
    "severuszh-dsh-ollama-usage",
    "zneoxlab-dsh-deepseek-webdesk",
    "klienkross-dsh-reverie",
  ]) {
    const row = catalog.plugins.find((item: { id: string }) => item.id === id);
    assert.equal(row?.status, "held");
    assert.ok(row?.signals.includes("authorization-boundary-unresolved"));
  }
  const theme = catalog.plugins.find(
    (item: { id: string }) => item.id === "kurosawageeker-dsh-moe-clean",
  );
  assert.equal(theme?.status, "reviewed");
  assert.equal(theme?.license, "MIT (code); CC BY-NC-SA-4.0 (artwork)");
  const report = JSON.parse(
    readFileSync("reports/review/2026-10-21.json", "utf8"),
  );
  assert.equal(report.freshCount, 225);
  assert.equal(report.newKeys, 109);
  assert.equal(report.changedSource, 116);
  assert.equal(report.pending, 0);
  const patch = report.archiveVerification.find(
    (item: { id: string }) => item.id === "phocinae-dsh-evidence",
  );
  assert.equal(patch.patchRawExactMatch, false);
  assert.equal(patch.patchMatch, true);
  assert.match(patch.decodingNormalization, /Leading UTF-8 BOM only/);
});

test("October 13 separates the hello template and desktop host from native plugins", () => {
  const current = JSON.parse(readFileSync("data/review-ledger.json", "utf8"));
  for (const [key, disposition] of [
    ["1414177871:plugins/hello/package.json", "example-fixture-or-archive"],
    ["1346337331:apps/acryl-desktop/package.json", "non-plugin-package"],
  ]) {
    const record = current.records.find(
      (item: { key: string }) => item.key === key,
    );
    assert.ok(record);
    assert.equal(record.disposition, disposition);
    assert.equal(record.catalogId, null);
    assert.match(record.commit, /^[a-f0-9]{40}$/);
    assert.ok(record.reason.length > 40);
  }
});
