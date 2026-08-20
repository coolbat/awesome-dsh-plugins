const dispositions = new Set([
  "pending",
  "catalog-reviewed",
  "catalog-held",
  "catalog-excluded",
  "duplicate-or-superseded",
  "example-fixture-or-archive",
  "non-plugin-package",
  "unavailable",
  "structural-rejected",
  "source-conflict",
]);

export function buildFrozenReview({ queue, sourceCommit, capturedAt }) {
  const candidates = queue.candidates.filter(
    (candidate) => candidate.status === "ready-for-review",
  );

  return {
    snapshot: {
      schemaVersion: 1,
      source: {
        repository: "coolbat/awesome-dsh-plugins",
        pullRequest: 2,
        commit: sourceCommit,
        readyCount: candidates.length,
        capturedAt,
      },
      candidates,
    },
    ledger: {
      schemaVersion: 1,
      sourceCommit,
      records: candidates.map((candidate, index) => ({
        sequence: index + 1,
        key: candidate.key,
        repository: candidate.repository,
        manifest: candidate.manifest,
        commit: candidate.commit,
        disposition: "pending",
        catalogId: null,
        reason: null,
        reviewedAt: null,
      })),
    },
  };
}

export function applyReviewWave({
  ledger,
  catalog,
  priorLedger,
  decisions,
  catalogRecords,
  start,
  end,
  reviewedAt,
}) {
  const explicitBySequence = new Map();
  for (const decision of decisions) {
    if (
      decision.sequence < start ||
      decision.sequence > end ||
      explicitBySequence.has(decision.sequence)
    ) {
      throw new Error(
        `invalid explicit decision sequence ${decision.sequence}`,
      );
    }
    explicitBySequence.set(decision.sequence, decision);
  }

  const records = ledger.records.map((record) => {
    if (record.sequence < start || record.sequence > end) return record;

    const historical = priorLedger.records.find(
      (prior) =>
        prior.key === record.key &&
        prior.commit === record.commit &&
        prior.disposition !== "pending" &&
        !prior.disposition.startsWith("catalog-"),
    );
    const decision = explicitBySequence.get(record.sequence) ?? historical;
    if (!decision) {
      throw new Error(
        `record ${record.sequence} is missing an explicit or exact historical decision`,
      );
    }

    return {
      ...record,
      disposition: decision.disposition,
      catalogId: decision.catalogId ?? null,
      reason: decision.reason ?? null,
      reviewedAt,
    };
  });

  const plugins = [...catalog.plugins];
  for (const catalogRecord of catalogRecords) {
    const existing = plugins.findIndex(
      (plugin) => plugin.id === catalogRecord.id,
    );
    if (existing === -1) plugins.push(catalogRecord);
    else plugins[existing] = catalogRecord;
  }

  return {
    ledger: { ...ledger, records },
    catalog: {
      ...catalog,
      snapshot: { ...catalog.snapshot, reviewedAt },
      plugins,
    },
  };
}

export function validateReviewLedger({
  snapshot,
  ledger,
  catalog,
  requireComplete = false,
}) {
  const errors = [];
  if (ledger.sourceCommit !== snapshot.source.commit) {
    errors.push("ledger source commit does not match the frozen snapshot");
  }
  if (snapshot.source.readyCount !== snapshot.candidates.length) {
    errors.push(
      `snapshot declares ${snapshot.source.readyCount} ready candidates but contains ${snapshot.candidates.length}`,
    );
  }
  const candidateKeys = new Set();
  for (const candidate of snapshot.candidates) {
    if (!/^[0-9a-f]{40}$/.test(candidate.commit ?? "")) {
      errors.push(
        `snapshot candidate ${candidate.key} requires a full commit SHA`,
      );
    }
    if (candidate.status !== "ready-for-review") {
      errors.push(
        `snapshot candidate ${candidate.key} must be ready-for-review`,
      );
    }
    if (candidateKeys.has(candidate.key)) {
      errors.push(`snapshot contains duplicate candidate key ${candidate.key}`);
    }
    candidateKeys.add(candidate.key);
  }
  const ledgerKeys = new Set();
  const recordsByKey = new Map();

  for (const record of ledger.records) {
    if (!candidateKeys.has(record.key)) {
      errors.push(
        `ledger contains candidate key outside snapshot ${record.key}`,
      );
    }
    if (ledgerKeys.has(record.key)) {
      errors.push(`ledger contains duplicate candidate key ${record.key}`);
    }
    ledgerKeys.add(record.key);
    if (!recordsByKey.has(record.key)) recordsByKey.set(record.key, record);

    if (!dispositions.has(record.disposition)) {
      errors.push(
        `ledger record ${record.key} has unsupported disposition ${record.disposition}`,
      );
    }

    if (
      dispositions.has(record.disposition) &&
      record.disposition !== "pending" &&
      !record.disposition.startsWith("catalog-") &&
      (typeof record.reason !== "string" || record.reason.trim() === "")
    ) {
      errors.push(
        `ledger record ${record.key} ${record.disposition} requires a reason`,
      );
    }

    if (requireComplete && record.disposition === "pending") {
      errors.push(`ledger record ${record.key} is still pending`);
    }

    if (record.disposition.startsWith("catalog-")) {
      const expectedStatus = record.disposition.slice("catalog-".length);
      const catalogRecord = catalog.find(
        (plugin) =>
          plugin.id === record.catalogId &&
          plugin.status === expectedStatus &&
          plugin.repository === record.repository &&
          plugin.manifest === record.manifest &&
          plugin.commit === record.commit,
      );
      if (!catalogRecord) {
        errors.push(
          `ledger record ${record.key} ${record.disposition} does not resolve to catalog id ${record.catalogId}`,
        );
      }
    }
  }

  const matchedCandidateKeys = new Set();
  for (const [index, candidate] of snapshot.candidates.entries()) {
    if (matchedCandidateKeys.has(candidate.key)) continue;
    matchedCandidateKeys.add(candidate.key);
    if (!ledgerKeys.has(candidate.key)) {
      errors.push(`ledger is missing candidate key ${candidate.key}`);
      continue;
    }
    const record = recordsByKey.get(candidate.key);
    if (record.sequence !== index + 1) {
      errors.push(
        `ledger record ${candidate.key} sequence must be ${index + 1}`,
      );
    }
    for (const field of ["repository", "manifest", "commit"]) {
      if (record[field] !== candidate[field]) {
        errors.push(
          `ledger record ${candidate.key} ${field} does not match snapshot`,
        );
      }
    }
  }

  return errors;
}
