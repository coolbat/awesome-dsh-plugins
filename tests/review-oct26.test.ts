import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const report = JSON.parse(
  readFileSync("reports/review/2026-10-26.json", "utf8"),
);
const catalog = JSON.parse(
  readFileSync("data/review-catalog-m86.json", "utf8"),
).catalogRecords;
const byId = (id: string) => catalog.find((r: { id: string }) => r.id === id);

test("October 26 closes the fixed-source delta and retains partial discovery limitations", () => {
  assert.equal(report.sourceCommit, "95793221767fbf429d701f6cd164a999c8040260");
  assert.equal(report.freshCount, 228);
  assert.equal(report.newKeys, 121);
  assert.equal(report.changedSource, 107);
  assert.equal(report.reusedExact, 5750);
  assert.equal(report.pending, 0);
  assert.deepEqual(report.freshDispositions, {
    "catalog-reviewed": 10,
    "catalog-held": 80,
    "duplicate-or-superseded": 86,
    "source-conflict": 33,
    "example-fixture-or-archive": 15,
    unavailable: 2,
    "non-plugin-package": 2,
  });
  assert.deepEqual(report.catalog, { reviewed: 1392, held: 2690, excluded: 5 });
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
  assert.match(report.discovery.coverage, /Partial.*OmniRoute.*orca/s);
  assert.match(report.discovery.coverage, /Not exhaustive/);
});

test("October 26 distinguishes MCP configuration and explicit mocks from native managers and bridges", () => {
  for (const repository of [
    "vicTop-cw/FIST-Mbt",
    "YailPeralta/ast-mcp-server",
  ]) {
    const override = report.structuralOverrides.find(
      (r: { repository: string }) =>
        r.repository.toLowerCase() === repository.toLowerCase(),
    );
    assert.equal(override.disposition, "non-plugin-package");
    assert.equal(
      catalog.some(
        (r: { repository: string }) =>
          r.repository.toLowerCase() === repository.toLowerCase(),
      ),
      false,
    );
  }
  assert.equal(
    report.structuralOverrides.find(
      (r: { manifest: string }) =>
        r.manifest === "packages/sdlc-mock-llm/package.json",
    ).disposition,
    "example-fixture-or-archive",
  );
  assert.equal(byId("xiaogangtang-dsh-mcp-bar").status, "reviewed");
  assert.equal(byId("chinwe-dsh-compound-memory").status, "held");
  assert.equal(byId("miniyang9-dsh-qq-bridge").status, "held");
  assert.ok(byId("miniyang9-dsh-qq-bridge").signals.includes("native-bundle"));
});

test("October 26 admissions require exact artifacts and resolve license and type-only false positives", () => {
  for (const row of catalog.filter(
    (r: { status: string }) => r.status === "reviewed",
  )) {
    const archive = report.archiveVerification.find(
      (a: { id: string }) => a.id === row.id,
    );
    assert.equal(archive.manifestMatch, true);
    assert.equal(archive.patchMatch, true);
    assert.notEqual(row.compatibility, "unknown");
    assert.ok(row.signals.includes("native-bundle"));
    assert.match(row.noteEn, /runtime safety and compatibility are unproven/);
  }
  assert.equal(byId("1838601405-dsh-fish-world").repoLicense, "GPL-3.0");
  assert.equal(byId("nanqing233-dsh-rimlight").repoLicense, "MPL-2.0");
  assert.equal(byId("mooling0602-dsh-mloader").repoLicense, "LGPL-3.0-only");
  assert.equal(byId("leolee9086-dsh-context-care").status, "reviewed");
  assert.match(byId("leolee9086-dsh-context-care").noteEn, /JSDoc types/);
  for (const id of [
    "aleksvega-dsh-tg-bridge",
    "lexvolkov-dsh-ledger-kitty",
    "ready-player-zero-dsh-lan-relay",
    "regrevia-dsh-lite-memory",
  ]) {
    const row = byId(id);
    assert.equal(row.status, "held");
    assert.ok(row.signals.includes("authorization-boundary-unresolved"));
    assert.notEqual(row.compatibility, "unknown");
  }
});
