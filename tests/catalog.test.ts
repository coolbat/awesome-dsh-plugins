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

  assert.equal(plugins.length, 1260);
  assert.ok(plugins.every((plugin) => plugin.status === "reviewed"));
  assert.ok(
    !plugins.some((plugin) => plugin.id === "sandbaseai-sandbase-harness"),
  );
});

test("the evidence index preserves held and excluded records", () => {
  const stats = getCatalogStats();

  assert.deepEqual(stats, {
    total: 2717,
    reviewed: 1260,
    held: 1453,
    excluded: 4,
    categories: 11,
  });
  assert.equal(getEvidenceRecords().length, 2717);
});

test("September 30 admitted native integrations keep fixed-source evidence", () => {
  for (const id of [
    "alanzhao0128-dsh-balance-monitor",
    "drscrewdriver-dsh-date-wrapper",
    "linbin-mk-dsh-workspace-prompt",
    "railgun52-dsh-mcp-servers",
    "teagnes-dsh-xxnerv-telegram",
    "zhourenke-dsh-tool-everything",
  ]) {
    const plugin = getPluginBySlug(id);
    assert.ok(plugin);
    assert.equal(plugin.status, "reviewed");
    assert.match(plugin.commit, /^[a-f0-9]{40}$/);
    assert.ok(plugin.patchUrl);
    assert.ok(plugin.patchUrl.includes(plugin.commit));
  }
});

test("September 30 incomplete artifacts and policy boundaries stay held", () => {
  for (const id of [
    "cheshireez-dsh-skill-hub",
    "coency-dsh-session-delete",
    "neptune810-dsh-model-router",
    "movingelated-dsh-local-ollama-models",
  ]) {
    assert.equal(getPluginBySlug(id)?.status, "held");
    assert.ok(!getPublishedPlugins().some((plugin) => plugin.id === id));
  }
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

test("the September 29 audit resolves source installs without duplicating renamed repositories", () => {
  const theme = getPluginBySlug("zouwj16-dsh-bg-theme");
  const memory = getPluginBySlug("syyr1987-dsh-linghun");
  assert.ok(theme);
  assert.ok(memory);
  assert.equal(theme.status, "reviewed");
  assert.ok(theme.signals.includes("documented-git-source-install"));
  assert.equal(memory.status, "reviewed");
  assert.ok(memory.noteEn.includes("below 0.2.0"));
  assert.equal(getPluginBySlug("anywhere-labs-dsh-desktop"), null);
  assert.equal(getPluginBySlug("reactive-resume-reactive-resume"), null);
  assert.ok(getPluginBySlug("anywhere-labs-dsh-plugin-desktop"));
  assert.ok(getPluginBySlug("amruthpillai-reactive-resume"));
});

test("the September 29 audit preserves license scopes and execution-policy holds", () => {
  const blueprint = getPluginBySlug("klarkxy-dsh-plugins");
  const grok = getPluginBySlug("baroncyrus-dsh-grok-subscription");
  const caveman = getPluginBySlug("xz-dev-dsh-caveman");
  assert.ok(blueprint);
  assert.ok(grok);
  assert.ok(caveman);
  assert.equal(blueprint.repoLicense, "SATA-2.1 (custom)");
  assert.equal(blueprint.packageLicense, "MIT");
  assert.equal(blueprint.status, "held");
  assert.equal(grok.status, "held");
  assert.ok(grok.signals.includes("release-age-override"));
  assert.equal(caveman.status, "held");
  assert.ok(caveman.signals.includes("shell-command-rewrite"));
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

test("the September 26 audit distinguishes declarative presets from host applications", () => {
  const preset = getPluginBySlug("ink-dark-dsh-adversarial-review-preset");
  assert.ok(preset);
  assert.equal(preset.status, "reviewed");
  assert.ok(preset.signals.includes("declarative-preset"));
  assert.equal(getPluginBySlug("anywhere-labs-dsh-desktop"), null);
  assert.equal(getPluginBySlug("roy-kid-tack"), null);
});

test("the September 26 audit preserves irreversible-action authorization holds", () => {
  const purge = getPluginBySlug("hunlongbaize-dsh-deep-purge");
  const bridge = getPluginBySlug("silenzerorz-obsidian-dsh-acp");
  assert.ok(purge);
  assert.ok(bridge);
  assert.equal(purge.status, "held");
  assert.equal(bridge.status, "held");
  assert.ok(purge.signals.includes("authorization-boundary-unresolved"));
  assert.ok(purge.signals.includes("permanent-deletion"));
  assert.ok(bridge.signals.includes("authorization-boundary-unresolved"));
});

test("the September 27 audit distinguishes shim tokens from raw route authorization", () => {
  const comate = getPluginBySlug("dier-toushou-dsh-connect-comate");
  const sidebar = getPluginBySlug("sailoumili-dsh-sidebar-plus");
  const recall = getPluginBySlug("kittimzhe-dsh-session-recall");
  assert.ok(comate);
  assert.ok(sidebar);
  assert.ok(recall);
  assert.equal(comate.status, "held");
  assert.equal(sidebar.status, "held");
  assert.equal(recall.status, "held");
  assert.ok(comate.signals.includes("authorization-boundary-unresolved"));
  assert.ok(sidebar.signals.includes("dynamic-code-load"));
  assert.ok(recall.signals.includes("lineage-fail-open"));
});

test("the September 27 audit retains authenticated boundaries and source mappings", () => {
  const compact = getPluginBySlug("aa2246740-dsh-compact-saviour");
  const data = getPluginBySlug("tomowang-dsh-data-agent");
  assert.ok(compact);
  assert.ok(data);
  assert.equal(compact.status, "reviewed");
  assert.equal(data.status, "reviewed");
  assert.ok(compact.signals.includes("authenticated-host-route"));
  assert.ok(data.signals.includes("native-canvas-dependency"));
  assert.equal(getPluginBySlug("monthu56-taimen"), null);
});

test("the September 28 audit preserves authorization and install artifact holds", () => {
  const deletion = getPluginBySlug("miuzel-dsh-subagent-ui");
  const workspace = getPluginBySlug("sen70s-dsh-workspace-plus");
  const theme = getPluginBySlug("kenz1117-dsh-ui-rainbowspeak");
  assert.ok(deletion);
  assert.ok(workspace);
  assert.ok(theme);
  assert.equal(deletion.status, "held");
  assert.equal(workspace.status, "held");
  assert.equal(theme.status, "held");
  assert.ok(deletion.signals.includes("unauthenticated-session-deletion"));
  assert.ok(workspace.signals.includes("admission-fail-open"));
  assert.ok(theme.signals.includes("sibling-checkout-required"));
});

test("the September 28 audit distinguishes opted-in cost from unresolved runtime policies", () => {
  const warmer = getPluginBySlug("yoggu-dsh-cache-warmer");
  const browser = getPluginBySlug("lyp88997-dsh-browser-service");
  const editor = getPluginBySlug("vano1254-dsh-booster");
  assert.ok(warmer);
  assert.ok(browser);
  assert.ok(editor);
  assert.equal(warmer.status, "reviewed");
  assert.ok(warmer.signals.includes("authenticated-host-route"));
  assert.ok(warmer.signals.includes("opt-in-model-cost"));
  assert.equal(browser.status, "held");
  assert.ok(browser.signals.includes("browser-no-sandbox"));
  assert.equal(editor.status, "held");
  assert.ok(editor.signals.includes("code-server-auth-none"));
});

test("all evidence and the DSH contract use immutable commits", () => {
  assert.match(catalogSnapshot.dshCommit, /^[0-9a-f]{40}$/);
  for (const plugin of getEvidenceRecords()) {
    assert.match(plugin.commit, /^[0-9a-f]{40}$/);
    assert.ok(plugin.sourceUrl.endsWith(plugin.commit));
  }
});
