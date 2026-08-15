import rawCatalog from "../../data/plugins.json";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export type CatalogStatus = "reviewed" | "held" | "excluded";
export type Compatibility =
  "declared-rc6" | "mixed" | "unknown" | "behind-baseline" | "unsupported";

interface CatalogSourcePlugin {
  id: string;
  name: string;
  repository: string;
  package: string | null;
  category: string;
  status: CatalogStatus;
  summaryEn: string;
  summaryZh: string;
  branch: string;
  commit: string;
  manifest: string;
  patch: string | null;
  repoLicense: string;
  packageLicense: string;
  compatibility: Compatibility;
  lifecycle: string;
  signals: string[];
  noteEn: string;
  noteZh: string;
}

interface CatalogSource {
  schemaVersion: number;
  snapshot: {
    reviewedAt: string;
    dshContract: {
      repository: string;
      commit: string;
      path: string;
      baseline: string;
      disclosure: string;
    };
  };
  plugins: CatalogSourcePlugin[];
}

export interface CatalogPlugin extends CatalogSourcePlugin {
  author: string;
  shortCommit: string;
  repositoryUrl: string;
  commitUrl: string;
  manifestUrl: string;
  patchUrl: string | null;
  sourceUrl: string;
}

export interface CatalogStats {
  total: number;
  reviewed: number;
  held: number;
  excluded: number;
  categories: number;
}

const catalog = rawCatalog as CatalogSource;

function githubBlobUrl(plugin: CatalogSourcePlugin, path: string) {
  return `https://github.com/${plugin.repository}/blob/${plugin.commit}/${path}`;
}

function toCatalogPlugin(plugin: CatalogSourcePlugin): CatalogPlugin {
  const repositoryUrl = `https://github.com/${plugin.repository}`;

  return Object.freeze({
    ...plugin,
    signals: Object.freeze([...plugin.signals]) as unknown as string[],
    author: plugin.repository.split("/")[0] ?? plugin.repository,
    shortCommit: plugin.commit.slice(0, 7),
    repositoryUrl,
    commitUrl: `${repositoryUrl}/commit/${plugin.commit}`,
    manifestUrl: githubBlobUrl(plugin, plugin.manifest),
    patchUrl: plugin.patch ? githubBlobUrl(plugin, plugin.patch) : null,
    sourceUrl: `${repositoryUrl}/tree/${plugin.commit}`,
  });
}

const records = Object.freeze(catalog.plugins.map(toCatalogPlugin));

export const catalogSnapshot = Object.freeze({
  schemaVersion: catalog.schemaVersion,
  reviewedAt: catalog.snapshot.reviewedAt,
  baseline: catalog.snapshot.dshContract.baseline,
  disclosure: catalog.snapshot.dshContract.disclosure,
  dshRepository: catalog.snapshot.dshContract.repository,
  dshCommit: catalog.snapshot.dshContract.commit,
  dshContractUrl: `https://github.com/${catalog.snapshot.dshContract.repository}/blob/${catalog.snapshot.dshContract.commit}/${catalog.snapshot.dshContract.path}`,
});

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getEvidenceRecords(): readonly CatalogPlugin[] {
  return records;
}

export function getPublishedPlugins(): readonly CatalogPlugin[] {
  return records.filter((plugin) => plugin.status === "reviewed");
}

export function getPluginBySlug(slug: string): CatalogPlugin | null {
  return records.find((plugin) => plugin.id === slug) ?? null;
}

export function getCategories(): readonly string[] {
  return Object.freeze(
    [...new Set(getPublishedPlugins().map((plugin) => plugin.category))].sort(
      (left, right) => left.localeCompare(right),
    ),
  );
}

export function getCatalogStats(): CatalogStats {
  return {
    total: records.length,
    reviewed: records.filter((plugin) => plugin.status === "reviewed").length,
    held: records.filter((plugin) => plugin.status === "held").length,
    excluded: records.filter((plugin) => plugin.status === "excluded").length,
    categories: getCategories().length,
  };
}

export function localizedSummary(plugin: CatalogPlugin, locale: Locale) {
  return locale === "zh" ? plugin.summaryZh : plugin.summaryEn;
}

export function localizedNote(plugin: CatalogPlugin, locale: Locale) {
  return locale === "zh" ? plugin.noteZh : plugin.noteEn;
}
