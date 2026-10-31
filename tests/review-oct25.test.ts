import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const report = JSON.parse(
  readFileSync("reports/review/2026-10-25.json", "utf8"),
);
const catalog = JSON.parse(
  readFileSync("data/review-catalog-m85.json", "utf8"),
).catalogRecords;

test("October 25 records the complete fixed-source delta without recertifying retained snapshots", () => {
  assert.equal(report.sourceCommit, "963a82c1fa737227d42bc368e62e219c8cab5b51");
  assert.equal(report.freshCount, 188);
  assert.equal(report.newKeys, 106);
  assert.equal(report.changedSource, 82);
  assert.equal(report.reusedExact, 5670);
  assert.equal(report.pending, 0);
  assert.deepEqual(report.queue, {
    "already-listed": 1653,
    "ready-for-review": 5858,
    held: 43,
  });
  assert.deepEqual(report.freshDispositions, {
    "source-conflict": 52,
    "catalog-held": 67,
    "duplicate-or-superseded": 44,
    "catalog-reviewed": 4,
    "example-fixture-or-archive": 18,
    unavailable: 1,
    "non-plugin-package": 2,
  });
  assert.deepEqual(report.catalog, { reviewed: 1382, held: 2610, excluded: 5 });
  for (const row of report.evidence) {
    assert.match(row.candidate.commit, /^[a-f0-9]{40}$/);
    assert.equal(row.candidate.commit, row.decision.commit);
    assert.notEqual(row.decision.disposition, "pending");
    if (row.decision.disposition !== "unavailable") {
      assert.equal(row.manifest.status, 200);
      assert.equal(row.patch.status, 200);
      assert.equal(row.patch.matchesCandidate, true);
    }
  }
  assert.match(report.discovery.coverage, /Partial.*3|Partial.*gmh5225/s);
  assert.match(report.discovery.coverage, /Not exhaustive/);
});

test("October 25 separates configuration and probes while retaining substantive native bundles", () => {
  assert.equal(report.structuralOverrides.length, 11);
  for (const repository of ["esengine/DeepSeek-Reasonix", "xerj-org/xerj"]) {
    assert.equal(
      report.structuralOverrides.find(
        (r: { repository: string }) => r.repository === repository,
      ).disposition,
      "non-plugin-package",
    );
    assert.equal(
      catalog.some((r: { repository: string }) => r.repository === repository),
      false,
    );
  }
  const probes = report.structuralOverrides.filter((r: { manifest: string }) =>
    r.manifest.startsWith("scripts/probes/"),
  );
  assert.equal(probes.length, 2);
  assert.ok(
    probes.every(
      (r: { disposition: string }) =>
        r.disposition === "example-fixture-or-archive",
    ),
  );
  for (const id of [
    "lindakun-dsh-local-fast-mode",
    "citydirector-ui-locate-mcp",
    "qinluza-dsh-aisketch",
    "unknowbug-re-framework",
  ]) {
    const row = catalog.find((r: { id: string }) => r.id === id);
    assert.equal(row.status, "held");
    assert.ok(row.signals.includes("native-bundle"));
  }
  const corn = catalog.find(
    (r: { id: string }) => r.id === "xingyingyuzhui-dsh-corn-bench",
  );
  assert.equal(corn.repoLicense, "PolyForm-Noncommercial-1.0.0");
  assert.equal(corn.packageLicense, corn.repoLicense);
  assert.equal(corn.signals.includes("license-scope-unresolved"), false);
  assert.ok(corn.signals.includes("source-truncated"));
});

test("October 25 admissions require archive mapping and holds preserve documented host versions", () => {
  const reviewed = catalog.filter(
    (r: { status: string }) => r.status === "reviewed",
  );
  assert.deepEqual(
    reviewed.map((r: { id: string }) => r.id).sort(),
    [
      "chaser-star-dsh-eda-review",
      "ck-epsilon-aura",
      "greatv-dsh-trace-waterfall",
      "wooxi-dsh-session-delete",
    ].sort(),
  );
  for (const row of reviewed) {
    const archive = report.archiveVerification.find(
      (a: { id: string }) => a.id === row.id,
    );
    assert.equal(archive.manifestMatch, true);
    assert.equal(archive.patchMatch, true);
    assert.notEqual(row.compatibility, "unknown");
    assert.ok(row.signals.includes("git-source-identity"));
    assert.match(row.noteEn, /runtime safety and compatibility are unproven/);
  }
  for (const id of [
    "512475656-dot-nraness-chajian",
    "a7m0sphere-dsh-chem-editor",
    "awenforever-dsh-ustc-quota",
    "donyue7-dsh-aoci-panel",
    "huachabobo-dsh-balance-badge",
    "voltarenyah-dsh-automation-suite",
  ]) {
    const row = catalog.find((r: { id: string }) => r.id === id);
    if (id === "huachabobo-dsh-balance-badge")
      assert.equal(row.compatibility, "unknown");
    else assert.notEqual(row.compatibility, "unknown");
  }
  for (const id of [
    "wlllyj-dsh-prompt-forge",
    "xiaoxiaomoyu-dsh-next-suggestion",
    "ysyxh-0827-dsh-search-contrl",
  ]) {
    const row = catalog.find((r: { id: string }) => r.id === id);
    assert.equal(row.status, "held");
    assert.ok(row.signals.includes("authorization-boundary-unresolved"));
  }
});
