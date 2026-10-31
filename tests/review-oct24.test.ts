import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const report = JSON.parse(
  readFileSync("reports/review/2026-10-24.json", "utf8"),
);
const catalog = JSON.parse(
  readFileSync("data/review-catalog-m84.json", "utf8"),
).catalogRecords;

test("October 24 reconciles the frozen delta and keeps every disposition explicit", () => {
  assert.equal(report.sourceCommit, "9b0a5b58470ad003b60389ba6d45c4389c1df70f");
  assert.equal(report.freshCount, 255);
  assert.equal(report.newKeys, 160);
  assert.equal(report.changedSource, 95);
  assert.equal(report.reusedExact, 5497);
  assert.equal(report.pending, 0);
  assert.deepEqual(report.queue, {
    "already-listed": 1654,
    "ready-for-review": 5752,
    held: 41,
  });
  assert.deepEqual(report.freshDispositions, {
    "catalog-held": 53,
    "catalog-reviewed": 4,
    "duplicate-or-superseded": 77,
    "source-conflict": 41,
    "non-plugin-package": 10,
    unavailable: 1,
    "example-fixture-or-archive": 69,
  });
  assert.deepEqual(report.catalog, { reviewed: 1378, held: 2543, excluded: 5 });
  for (const item of report.evidence) {
    assert.match(item.candidate.commit, /^[a-f0-9]{40}$/);
    assert.equal(item.decision.commit, item.candidate.commit);
    assert.notEqual(item.decision.disposition, "pending");
    if (item.decision.disposition !== "unavailable") {
      assert.equal(item.manifest.status, 200);
      assert.equal(item.patch.status, 200);
      assert.equal(item.patch.matchesCandidate, true);
    }
  }
  assert.match(report.discovery.coverage, /Partial.*Not exhaustive/s);
});

test("October 24 separates official configuration and no-op scaffolds from native plugins", () => {
  for (const repository of [
    "chenxiang6663635/job-workbench",
    "esengine/DeepSeek-Reasonix",
    "jcaiagent7143-ui/linkdigest-mcp",
    "JeaBai/CodeGuard",
    "Lixiang9716/dsh-presets",
    "Q00/ouroboros",
    "SESZFY/dsh-structchem",
  ]) {
    const row = report.structuralOverrides.find(
      (r: { repository: string }) => r.repository === repository,
    );
    assert.equal(row?.disposition, "non-plugin-package", repository);
    assert.equal(
      catalog.some((r: { repository: string }) => r.repository === repository),
      false,
    );
  }
  const scaffolds = report.structuralOverrides.filter(
    (r: { repository: string }) => r.repository === "ntars/NT-Dpet",
  );
  assert.equal(scaffolds.length, 23);
  assert.ok(
    scaffolds.every(
      (r: { disposition: string }) =>
        r.disposition === "example-fixture-or-archive",
    ),
  );
  assert.equal(
    catalog.find((r: { id: string }) => r.id === "ntars-nt-dpet").manifest,
    "packages/memory/package.json",
  );
  assert.equal(
    catalog.find(
      (r: { id: string }) => r.id === "huip1830-debug-dsh-extensions",
    ).manifest,
    "plugins/subagent-model-pin/package.json",
  );
  const archives = report.structuralOverrides.filter(
    (r: { manifest: string }) => r.manifest.startsWith("_snapshot-"),
  );
  assert.equal(archives.length, 22);
});

test("October 24 admissions have archive identity and preserve declared DSH and scoped licenses", () => {
  const reviewed = catalog.filter(
    (r: { status: string }) => r.status === "reviewed",
  );
  assert.deepEqual(
    reviewed.map((r: { id: string }) => r.id).sort(),
    [
      "exschwi-dsh-river-provider",
      "jidekaixin2dian-dsh-file-actions",
      "light-ei-dsh-chat-perf-css",
      "vi0let-dev-dsh-ui-beautify",
    ].sort(),
  );
  for (const row of reviewed) {
    const archive = report.archiveVerification.find(
      (a: { id: string }) => a.id === row.id,
    );
    assert.equal(archive.manifestMatch, true);
    assert.equal(archive.patchMatch, true);
    assert.notEqual(row.compatibility, "unknown");
    assert.ok(row.signals.includes("native-bundle"));
    assert.match(row.noteEn, /runtime safety and compatibility are unproven/);
  }
  for (const id of [
    "2357678297-dsh-image",
    "copylee711-dsh-office",
    "landasika-dshell",
    "windfarer-dsh-wechat-ai-bridge",
    "review977-dsh-remote",
  ]) {
    const row = catalog.find((r: { id: string }) => r.id === id);
    assert.notEqual(row.compatibility, "unknown");
    assert.equal(row.signals.includes("compatibility-unresolved"), false);
  }
  assert.equal(
    catalog.find((r: { id: string }) => r.id === "lingyesoul-dsh-soulmojito")
      .repoLicense,
    "GPL-3.0",
  );
  assert.equal(
    catalog.find(
      (r: { id: string }) => r.id === "windfarer-dsh-wechat-ai-bridge",
    ).repoLicense,
    "GPL-3.0",
  );
  assert.equal(
    catalog.find((r: { id: string }) => r.id === "hugefiver-dsmm").repoLicense,
    "LicenseRef-AAAPL",
  );
  for (const [id, signal] of [
    ["huip1830-debug-dsh-extensions", "sandbox-mode-events"],
    ["realmisakamikoto-dsh-purge", "hooks-deny-bypass"],
    ["favktoxic-dsh-theme-liquid-glass", "authorization-boundary-unresolved"],
  ]) {
    const row = catalog.find((r: { id: string }) => r.id === id);
    assert.equal(row.status, "held");
    assert.ok(row.signals.includes(signal));
  }
});
