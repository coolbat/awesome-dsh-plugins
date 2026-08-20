export function buildFrozenReview(input: {
  queue: { candidates: any[] };
  sourceCommit: string;
  capturedAt: string;
}): { snapshot: any; ledger: any };

export function applyReviewWave(input: {
  ledger: any;
  catalog: any;
  priorLedger: any;
  decisions: any[];
  catalogRecords: any[];
  start: number;
  end: number;
  reviewedAt: string;
}): { ledger: any; catalog: any };

export function validateReviewLedger(input: {
  snapshot: any;
  ledger: any;
  catalog: any[];
  requireComplete?: boolean;
}): string[];
