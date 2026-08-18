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

  assert.equal(plugins.length, 342);
  assert.ok(plugins.every((plugin) => plugin.status === "reviewed"));
  assert.ok(
    !plugins.some((plugin) => plugin.id === "sandbaseai-sandbase-harness"),
  );
});

test("the evidence index preserves held and excluded records", () => {
  const stats = getCatalogStats();

  assert.deepEqual(stats, {
    total: 419,
    reviewed: 342,
    held: 76,
    excluded: 1,
    categories: 11,
  });
  assert.equal(getEvidenceRecords().length, 419);
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

test("the public category interface is deterministic", () => {
  const categories = getCategories();

  assert.equal(categories.length, 11);
  assert.deepEqual([...categories], [...categories].sort());
  assert.ok(categories.includes("Developer Tools"));
});

test("all evidence and the DSH contract use immutable commits", () => {
  assert.match(catalogSnapshot.dshCommit, /^[0-9a-f]{40}$/);
  for (const plugin of getEvidenceRecords()) {
    assert.match(plugin.commit, /^[0-9a-f]{40}$/);
    assert.ok(plugin.sourceUrl.endsWith(plugin.commit));
  }
});
