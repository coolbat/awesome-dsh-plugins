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
Status: in_progress
Priority: P1
Dependencies: M4
Scope: Prove complete ledger coverage, regenerate derived catalogs, run final branch gates, push the dedicated branch, and open or refresh its review pull request.
Acceptance: All 292 keys are dispositioned exactly once, final tests and build pass, branch CI is green, and a review PR exists without merge or production deployment.
Validation: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
Stop conditions: Stop before merge, production deployment, deleting evidence, or claiming runtime safety or compatibility.
Evidence: 2026-08-16T23:21:31+08:00; M5-A13-PR-OPEN; commit 5f01b10526e6b32472bd7290492728ec6ee5ddd9 is pushed on codex/review-remaining-292 and review PR #4 is open; remote CI remains to be verified

## Queue Notes

- A `done` milestone requires fresh, non-pending evidence.
- Downstream milestones become `runnable` only after their dependency is `done`.
- Every attempt synchronizes this queue with `Documentation.md`,
  `docs/agent-loop-state.md`, and `docs/release-evidence.md`.
