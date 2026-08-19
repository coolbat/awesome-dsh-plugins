# Executable Milestone Queue

## Milestone M0: Freeze and inventory the candidate queue
Status: done
Priority: P0
Dependencies: none
Scope: Store the PR #2 candidate payload at head 24654ed5260cfef3ca11568487d69c5bf9f1c42a, verify its schema and counts, and create a one-record-one-disposition review ledger without changing catalog publication status.
Acceptance: The frozen payload contains exactly 292 ready-for-review records, its source commit is recorded, and the initial ledger accounts for all 292 unique candidate keys.
Validation: npm run validate:candidates && node scripts/validate-review-ledger.mjs
Stop conditions: Stop if PR #2 no longer exposes the approved commit, candidate keys are duplicated, the ready count differs from 292, or the queue cannot be reproduced without executing candidate code.
Evidence: 2026-08-16T22:40:51+08:00; M0-A1-VERIFY; 16 focused tests passed; frozen source 24654ed reproduced with 292 unique ready records and 292 matching ledger records

## Milestone M1: Review frozen records 1 through 75
Status: done
Priority: P1
Dependencies: M0
Scope: Statically review frozen ledger records 1 through 75, separate noncurrent or repeated manifests from distinct bundles, and add evidence-complete reviewed or held catalog records.
Acceptance: Every record in the wave has one evidence-backed disposition and every added catalog record satisfies the fixed-source schema and publication boundary.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing identity or license facts, publishing an unresolved record as reviewed, or changing catalog methodology.
Evidence: 2026-08-16T22:58:03+08:00; M1-A4-S1-PASS; 75 dispositions complete, catalog 101 total with 87 reviewed, 13 held, and 1 excluded, 34 of 34 tests pass, lint passes, and Next.js generated 214 static pages

## Milestone M2: Review frozen records 76 through 150
Status: done
Priority: P1
Dependencies: M1
Scope: Statically review frozen ledger records 76 through 150 under the same evidence and publication boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every added catalog record satisfies the fixed-source schema and publication boundary.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing identity or license facts, publishing an unresolved record as reviewed, or changing catalog methodology.
Evidence: 2026-08-16T23:09:16+08:00; M2-A7-S1-PASS; all 75 dispositions complete, catalog 162 total with 140 reviewed, 21 held, and 1 excluded, ledger 142 pending, 34 of 34 tests pass, lint passes, and Next.js generated 336 static pages

## Milestone M3: Review frozen records 151 through 225
Status: done
Priority: P1
Dependencies: M2
Scope: Statically review frozen ledger records 151 through 225 under the same evidence and publication boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every added catalog record satisfies the fixed-source schema and publication boundary.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing identity or license facts, publishing an unresolved record as reviewed, or changing catalog methodology.
Evidence: 2026-08-16T23:15:03+08:00; M3-A9-S1-PASS; all 75 dispositions complete, catalog 224 total with 196 reviewed, 27 held, and 1 excluded, ledger 67 pending, 34 of 34 tests pass, lint passes, and Next.js generated 460 static pages

## Milestone M4: Review frozen records 226 through 292
Status: done
Priority: P1
Dependencies: M3
Scope: Statically review frozen ledger records 226 through 292 under the same evidence and publication boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every added catalog record satisfies the fixed-source schema and publication boundary.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing identity or license facts, publishing an unresolved record as reviewed, or changing catalog methodology.
Evidence: 2026-08-16T23:19:10+08:00; M4-A11-S1-PASS; all 67 final-wave dispositions complete, catalog 269 total with 235 reviewed, 33 held, and 1 excluded, completion mode reports 0 pending, 34 tests pass, lint passes, and Next.js generated 550 static pages

## Milestone M5: Reconcile, deliver, and verify the review branch
Status: done
Priority: P1
Dependencies: M4
Scope: Prove complete ledger coverage, regenerate derived catalogs, run final branch gates, push the dedicated branch, and open or refresh its review pull request.
Acceptance: All 292 keys are dispositioned exactly once, final tests and build pass, branch CI is green, and a review PR exists without merge or production deployment.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before merge, production deployment, deleting evidence, or claiming runtime safety or compatibility.
Evidence: 2026-08-16T23:24:04+08:00; M5-A14-CI-PASS; PR #4 at 29c02d0fa5c47db2df670a8c444f81da56111b9e is clean, quality and Cloudflare Pages checks pass, and the branch preview returns HTTP 200 without merge or production deployment

## Queue Notes

- A `done` milestone requires fresh, non-pending evidence.
- Downstream milestones become `runnable` only after their dependency is `done`.
- Every attempt synchronizes this queue with `Documentation.md`,
  `docs/agent-loop-state.md`, and `docs/release-evidence.md`.

## Milestone M6: Freeze and inventory the current unreviewed queue
Status: done
Priority: P0
Dependencies: M5
Scope: Freeze the 210 ready-for-review records from PR #2 head e5fb3f0ab8186d4d25974d1b0e88a2eab16e76f0, initialize a new one-record-one-disposition ledger, and retain the partial-discovery limitation without changing catalog publication status.
Acceptance: The frozen snapshot contains exactly 210 unique ready records across 122 repositories, all source commits are full SHAs, and the new ledger accounts for every key exactly once with 210 pending dispositions.
Validation: npm run validate:candidates && node scripts/validate-review-ledger.mjs
Stop conditions: Stop if PR #2 head changes before freezing, candidate keys are duplicated, ready count differs from 210, a source commit is not pinned, or initialization would overwrite reviewed decisions without an explicit archive in Git history.
Evidence: 2026-08-18T00:26:20+08:00; M6-A3-S1-PASS; PR #2 head e5fb3f0 frozen with 210 unique ready records across 122 repositories, 210 matching pending ledger records, 35 tests pass, formatting passes, and 550 static pages build

## Milestone M7: Review frozen records 1 through 70
Status: done
Priority: P1
Dependencies: M6
Scope: Statically review frozen ledger records 1 through 70 under the existing fixed-source evidence and fail-closed catalog boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every catalog addition satisfies source, structure, license, install-identity, recency, and risk requirements.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing identity or license facts, publishing unresolved records as reviewed, or changing catalog methodology.
Evidence: 2026-08-18T00:34:37+08:00; M7-A6-S1-PASS; all 70 records dispositioned as 8 reviewed, 3 held, 40 duplicates, 8 fixtures, 10 non-plugin packages, and 1 unavailable; catalog 280 total with 243 reviewed, 36 held, and 1 excluded; 37 tests and 572-page build pass

## Milestone M8: Review frozen records 71 through 140
Status: done
Priority: P1
Dependencies: M7
Scope: Statically review frozen ledger records 71 through 140 under the same evidence and publication boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every catalog addition satisfies the fixed-source catalog schema.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing evidence, publishing unresolved records as reviewed, or changing methodology.
Evidence: 2026-08-18T00:47:23+08:00; M8-A11-S1-PASS; all 70 records dispositioned as 23 reviewed, 11 held, 16 duplicates, 5 fixtures, 8 non-plugin packages, 6 source conflicts, and 1 unavailable; catalog 314 total with 266 reviewed, 47 held, and 1 excluded; 37 tests and 640-page build pass

## Milestone M9: Review frozen records 141 through 210
Status: done
Priority: P1
Dependencies: M8
Scope: Statically review frozen ledger records 141 through 210 under the same evidence and publication boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every catalog addition satisfies the fixed-source catalog schema.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing evidence, publishing unresolved records as reviewed, or changing methodology.
Evidence: 2026-08-18T00:56:44+08:00; M9-A14-S1-PASS; all 70 records dispositioned as 19 reviewed, 12 held, 19 duplicates, 12 fixtures, 3 non-plugin packages, 4 source conflicts, and 1 unavailable; catalog 345 total with 285 reviewed, 59 held, and 1 excluded; completion mode reports 0 pending; 37 tests and 702-page build pass

## Milestone M10: Reconcile and deliver the current review branch
Status: done
Priority: P1
Dependencies: M9
Scope: Prove complete 210-record ledger coverage, regenerate catalog and READMEs, run final branch gates, push the dedicated branch, and open a review PR.
Acceptance: All 210 keys are dispositioned exactly once, final tests and build pass, branch CI is green, and a review PR exists without merge or production deployment.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before merge, production deployment, deleting evidence, or claiming runtime safety, compatibility, or discovery completeness.
Evidence: 2026-08-18T01:02:21+08:00; M10-A16-CI-PASS; PR #5 at 47515f13379dd66a3b344eda297aa2021876f772 is CLEAN, GitHub quality and Cloudflare Pages checks pass, the branch preview returns HTTP 200, and merge and production deployment remain untouched

## Milestone M11: Freeze and reconcile the latest discovery queue
Status: done
Priority: P0
Dependencies: M10
Scope: Freeze the 355 ready-for-review records from PR #2 head 5f4afa34c293b0c79c16fd6a1d92baf46c11eade, initialize a new one-record-one-disposition ledger, and distinguish 190 exact historical matches from 165 new or changed fixed-source records.
Acceptance: The snapshot contains exactly 355 unique ready records with full source SHAs, the ledger accounts for every key once, and the 190 exact versus 165 fresh reconciliation is reproducible.
Validation: npm run validate:candidates && node scripts/validate-review-ledger.mjs
Stop conditions: Stop if PR #2 head changes before freezing, ready count differs from 355, candidate keys are duplicated, a source commit is unpinned, or prior decisions would be reused across a changed commit.
Evidence: 2026-08-18T23:44:00+08:00; M11-A2-S1-PASS; PR #2 head 5f4afa34 frozen with 355 unique ready records, 190 exact historical matches and 165 fresh records across 96 repositories; 37 tests, formatting, typecheck, and 702-page build pass

## Milestone M12: Review frozen records 1 through 120
Status: done
Priority: P1
Dependencies: M11
Scope: Statically review frozen ledger records 1 through 120, reusing only exact fixed-source evidence and freshly reviewing every new or changed record.
Acceptance: Every record in the wave has one evidence-backed disposition and every catalog addition satisfies source, structure, license, identity, lifecycle, capability, recency, and risk requirements.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing evidence, publishing unresolved records as reviewed, or changing catalog methodology.
Evidence: 2026-08-18T23:58:00+08:00; M12-A4-S1-PASS; 120 records complete as 30 reviewed, 7 held, 54 duplicates, 9 fixtures, 16 non-plugin packages, 3 source conflicts, and 1 unavailable; catalog 362 total with 299 reviewed, 62 held, and 1 excluded; 37 tests and 736-page build pass

## Milestone M13: Review frozen records 121 through 240
Status: done
Priority: P1
Dependencies: M12
Scope: Statically review frozen ledger records 121 through 240 under the same fixed-source evidence and fail-closed publication boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every catalog addition satisfies the fixed-source catalog schema.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing evidence, publishing unresolved records as reviewed, or changing catalog methodology.
Evidence: 2026-08-19T00:08:00+08:00; M13-A6-S1-PASS; 120 records complete as 35 reviewed, 15 held, 37 duplicates, 14 fixtures, 8 non-plugin packages, 10 source conflicts, and 1 unavailable; catalog 384 total with 317 reviewed, 66 held, and 1 excluded; 37 tests and 780-page build pass

## Milestone M14: Review frozen records 241 through 355
Status: done
Priority: P1
Dependencies: M13
Scope: Statically review frozen ledger records 241 through 355 under the same fixed-source evidence and fail-closed publication boundary.
Acceptance: Every record in the wave has one evidence-backed disposition and every catalog addition satisfies the fixed-source catalog schema.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing evidence, publishing unresolved records as reviewed, or changing catalog methodology.
Evidence: 2026-08-19T00:28:00+08:00; M14-A8-S1-PASS; 115 records complete as 42 reviewed, 21 held, 28 duplicates, 9 fixtures, 3 non-plugin packages, 9 source conflicts, and 3 unavailable; catalog 419 total with 342 reviewed, 76 held, and 1 excluded; completion mode, 37 tests, and 850-page build pass

## Milestone M15: Reconcile and refresh the review pull request
Status: done
Priority: P1
Dependencies: M14
Scope: Prove complete 355-record ledger coverage, regenerate catalog and READMEs, run final branch gates, push the dedicated branch, and refresh PR #5.
Acceptance: All 355 keys are dispositioned exactly once, final tests and build pass, branch CI is green, and PR #5 contains the review without merge or production deployment.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before merge, production deployment, deleting evidence, or claiming runtime safety, compatibility, or discovery completeness.
Evidence: 2026-08-19T00:42:00+08:00; M15-A10-CI-PASS; PR #5 at f3f0a1fd17c35b3122ee8b24f86f2093e00cd631 is CLEAN, GitHub quality and Cloudflare Pages checks pass, both immutable and branch previews return HTTP 200, and merge and production deployment remain untouched

## Milestone M16: Freeze the 2026-08-19 daily queue
Status: done
Priority: P0
Dependencies: M15
Scope: Freeze the 388 ready records from PR #2 head 19a696b8a0e70c68873a7200a015901916e7220b, retain the partial-discovery limitation, and reconcile 345 exact historical matches against 43 new or changed records.
Acceptance: The snapshot contains 388 unique ready records with full source SHAs, the ledger accounts for every key once, and the exact-versus-fresh reconciliation is reproducible.
Validation: npm run validate:candidates && node scripts/validate-review-ledger.mjs
Stop conditions: Stop if PR #2 head changes before freezing, counts differ, keys are duplicated, a source commit is unpinned, or changed commits would inherit old evidence.
Evidence: 2026-08-19T09:13:00+08:00; M16-A5-VERIFY; PR #2 head 19a696b8 frozen with 388 unique full-SHA ready records and matching pending ledger rows, reproducing 345 exact plus 43 fresh records across 28 repositories; 37 tests, formatting, typecheck, 850-page build, acceptance assertions, and git diff check pass

## Milestone M17: Review the 43 daily additions
Status: done
Priority: P1
Dependencies: M16
Scope: Statically review all new or changed fixed-source records while mechanically reusing only exact key-and-commit decisions.
Acceptance: Every one of the 388 frozen records has an evidence-backed disposition and every catalog addition satisfies the fixed-source catalog schema.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before executing third-party code, guessing evidence, publishing unresolved records as reviewed, or claiming discovery completeness.
Evidence: 2026-08-19T09:44:00+08:00; M17-A11-VERIFY; all 43 fresh records complete as 12 reviewed, 5 held, 14 source conflicts, 9 duplicates, and 3 templates; full ledger 388/0 and catalog 435/353/81/1; 37 tests, formatting, typecheck, 882-page build, completion mode, generated-doc check, ten acceptance assertions, catalog mappings, and git diff check pass

## Milestone M18: Reconcile and refresh the daily review PR
Status: in_progress
Priority: P1
Dependencies: M17
Scope: Prove complete 388-record ledger coverage, regenerate derived catalogs, run final branch gates, push the existing dedicated review branch, and refresh PR #5.
Acceptance: All 388 keys are dispositioned exactly once, final tests and build pass, branch CI is green, and PR #5 contains the daily review without merge or production deployment.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before merge, production deployment, deleting evidence, or claiming runtime safety, compatibility, or discovery completeness.
Evidence: pending
