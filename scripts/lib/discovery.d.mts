export function isSafeRepositoryPath(value: unknown): boolean;
export function buildSearchQueries(
  config: any,
  state: any,
  now: Date,
  full?: boolean,
): string[];
export function normalizeRepository(
  item: any,
  query: string,
  observedAt: string,
): any;
export function mergeRepositories(repositories: any[]): any[];
export function interleaveRepositoryBatches<T>(batches: T[][]): T[];
export function inspectRepositoryTree(
  repository: any,
  commit: string,
  tree: any[],
  manifests: any[],
): any[];
export function mergeCandidateQueue(input: {
  existing: any[];
  discovered: any[];
  listedBundles: Set<string>;
  tombstones: any[];
}): any[];
export function getBundleIdentity(repository: string, manifest: string): string;
export function buildDiscoveryState(
  state: any,
  observedAt: string,
  partial: boolean,
): any;
