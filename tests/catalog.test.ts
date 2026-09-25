import assert from "node:assert/strict";
import test from "node:test";

import {
  catalogSnapshot,
  getCatalogStats,
  getCategories,
  getEvidenceRecords,
  getPluginBySlug,
  getPublishedPlugins,
} from "../src/lib/catalog";

test("the public directory exposes reviewed records only", () => {
  const plugins = getPublishedPlugins();

  assert.equal(plugins.length, 1232);
  assert.ok(plugins.every((plugin) => plugin.status === "reviewed"));
  assert.ok(
    !plugins.some((plugin) => plugin.id === "sandbaseai-sandbase-harness"),
  );
});

test("the evidence index preserves held and excluded records", () => {
  const stats = getCatalogStats();

  assert.deepEqual(stats, {
    total: 2517,
    reviewed: 1232,
    held: 1281,
    excluded: 4,
    categories: 11,
  });
  assert.equal(getEvidenceRecords().length, 2517);
});

test("plugin detail links remain pinned to the reviewed commit", () => {
  const plugin = getPluginBySlug("tt-a1i-archify");

  assert.ok(plugin);
  assert.equal(plugin.shortCommit, "cffdd42");
  assert.equal(
    plugin.manifestUrl,
    "https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/package.json",
  );
  assert.equal(
    plugin.patchUrl,
    "https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/cordis.patch.yml",
  );
});

test("install lifecycle evidence is retained on the held secretary bundle", () => {
  const plugin = getPluginBySlug("liangl1985-work-personal-secretary");
  assert.ok(plugin);
  assert.equal(plugin.status, "held");
  assert.equal(plugin.lifecycle, "install");
  assert.ok(plugin.noteEn.includes("scripts/install-test.mjs"));
});

test("the public category interface is deterministic", () => {
  const categories = getCategories();

  assert.equal(categories.length, 11);
  assert.deepEqual([...categories], [...categories].sort());
  assert.ok(categories.includes("Developer Tools"));
});

test("the September 24 audit preserves source-build and lifecycle evidence", () => {
  const stash = getPluginBySlug("wine-red-dsh-prompt-stash");
  const search = getPluginBySlug("foreveryoungpp-dsh-web-search");
  assert.ok(stash);
  assert.ok(search);
  assert.equal(stash.status, "reviewed");
  assert.equal(search.status, "reviewed");
  assert.ok(stash.noteEn.includes("No npm artifact equivalence is asserted"));
  assert.ok(search.signals.includes("prepare-hook"));
});

test("the September 24 audit holds unresolved module and HTTP boundaries", () => {
  const spec = getPluginBySlug("cyning12-specwave");
  const wallet = getPluginBySlug(
    "thinkofrain1213-deepseek-harness-wallet-patched",
  );
  assert.ok(spec);
  assert.ok(wallet);
  assert.equal(spec.status, "held");
  assert.equal(wallet.status, "held");
  assert.ok(spec.signals.includes("patch-module-identity-mismatch"));
  assert.ok(wallet.signals.includes("authorization-boundary-unresolved"));
});

test("the September 25 audit retains source builds and exact worker artifacts", () => {
  const git = getPluginBySlug("cherrchen-dsh-plugin-git");
  const usage = getPluginBySlug("xie-tj-dsh-token-usage-ledger");
  assert.ok(git);
  assert.ok(usage);
  assert.equal(git.status, "reviewed");
  assert.equal(usage.status, "reviewed");
  assert.ok(git.signals.includes("prepare-hook"));
  assert.ok(git.noteEn.includes("no npm artifact equivalence is asserted"));
  assert.ok(usage.noteEn.includes("backfill-worker"));
});

test("the September 25 audit preserves custom license and HTTP boundary holds", () => {
  const editor = getPluginBySlug("klarkxy-dsh-editor");
  const relay = getPluginBySlug("archaofan-dsh-notify-relay");
  assert.ok(editor);
  assert.ok(relay);
  assert.equal(editor.status, "held");
  assert.equal(editor.repoLicense, "SATA-2.1 (custom)");
  assert.equal(relay.status, "held");
  assert.ok(relay.signals.includes("authorization-boundary-unresolved"));
});

test("all evidence and the DSH contract use immutable commits", () => {
  assert.match(catalogSnapshot.dshCommit, /^[0-9a-f]{40}$/);
  for (const plugin of getEvidenceRecords()) {
    assert.match(plugin.commit, /^[0-9a-f]{40}$/);
    assert.ok(plugin.sourceUrl.endsWith(plugin.commit));
  }
});
