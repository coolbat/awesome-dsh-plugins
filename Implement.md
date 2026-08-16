# Execution Rules

## Execution Policy

Workspace isolation: dedicated-branch
Workspace isolation reason: the user approved a dedicated review branch so the 292-record catalog change remains isolated from main and production
Delivery scope: branch_pr
S0 command: npm run validate && node scripts/validate-review-ledger.mjs
S1 command: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
S2 command: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
S3 command: none
Needs-decision WIP limit: 3

## Selected Milestone

- Milestone: M2
- Approved scope boundary: next selection may statically review frozen records 76 through 150 and update only their ledger dispositions plus evidence-complete catalog records
- Required validation gate: npm run check && NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build
- Stop conditions: stop before executing third-party code, guessing evidence, publishing an unresolved record as reviewed, or changing methodology

## Decision Rules

- Resume the single valid `in_progress` milestone before selecting runnable work.
- Mark the selected milestone `in_progress` in `Plan.md` before modifying
  implementation or review-data files.
- Repair a failed gate only within approved scope and record every failure.
- Continue independent runnable work only after synchronizing all four control
  surfaces.
- Never exceed `branch_pr`; merging and production remain human-owned.

## Attempt Record

### Attempt 1

- Selected milestone: M0
- Changed assumptions: none
- Action: freeze the approved PR #2 payload and initialize its review ledger
- Command or observation: contract checker returned ready with M0 first in the
  runnable order; branch is `codex/review-remaining-292`
- Test level and environment: preflight; local dedicated branch
- Result: pass; M0 acceptance verified with 292 unique ready candidates and
  292 matching ledger records, all source commits pinned
- Known failure: none
- Blocker class: none
- Next action: select M1 after the synchronized contract checker releases it
- Synchronized status: Plan.md=done; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 2

- Selected milestone: M1
- Changed assumptions: none
- Action: review frozen ledger records 1 through 75
- Command or observation: contract checker returned ready with M1 first in the
  runnable order after M0 verification
- Test level and environment: preflight; local dedicated branch
- Result: M1 selected and persisted as in_progress
- Known failure: first read-only npm registry inventory command exited 1 because
  a temporary Node script mixed CommonJS `require` with top-level `await`;
  the corrected command then produced incomplete evidence for five packages
  because it treated a null repository field as an object; both repairs now
  pass and the full 52-package inventory is complete
- Blocker class: none; M1-F1 and M1-F2 repaired
- Next action: complete source-capability, license, and install-documentation
  review for the 52 distinct bundles and disposition all 75 records
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 3

- Selected milestone: M1
- Changed assumptions: none; one canonical catalog record per repository remains
  authoritative, with every additional manifest still dispositioned in the
  frozen ledger
- Action: collect fixed-source metadata and reconcile monorepo components with
  the existing repository-level catalog identity rule
- Command or observation: static package, README, license, peer, lifecycle, and
  capability inspection across the first source groups
- Test level and environment: diagnostic; local dedicated branch
- Result: pass after repairing a jq expression that assumed every repository
  field was an object; string and object variants now both emit correctly
- Known failure: M1-F3 and M1-F4 repaired and retained
- Blocker class: none
- Next action: complete remaining representative reviews and update the M1
  catalog and ledger
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 4

- Selected milestone: M1
- Changed assumptions: none
- Action: write the 17 canonical catalog records and disposition frozen ledger
  sequences 1 through 75
- Command or observation: applied an explicit M1 decision artifact, performed a
  mechanical ledger rewrite, and ran the S0 validation route
- Test level and environment: S0; local dedicated branch
- Result: pass; 101 catalog records and 292 ledger records validate, with 217
  ledger records still pending for later milestones
- Known failure: M1-F5 through M1-F7 repaired; M1-F8 is formatting-only drift
- Blocker class: repo_fixable
- Next action: include the decision artifact in the format scope, run Prettier,
  then rerun S1 and prove the production build
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 4 verification

- Selected milestone: M1
- Changed assumptions: none
- Action: format, validate, test, lint, and production-build the completed first
  review wave
- Command or observation: `npm run format`, `npm run check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build`
- Test level and environment: S1; local dedicated branch
- Result: pass; 34 tests, lint, and 214 generated static pages
- Known failure: M1-F1 through M1-F8 repaired and retained
- Blocker class: none
- Next action: select M2 after contract validation
- Synchronized status: Plan.md=M1 done and M2 runnable;
  Documentation.md=updated; agent-loop-state.md=updated;
  release-evidence.md=updated

### Attempt 5

- Selected milestone: M2
- Changed assumptions: none
- Action: review frozen ledger records 76 through 150
- Command or observation: checker returned M2 first in runnable order after the
  verified M1 completion
- Test level and environment: preflight; local dedicated branch
- Result: M2 selected and persisted as in_progress
- Known failure: none
- Blocker class: none
- Next action: inventory M2 repositories and fixed-source evidence
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 6

- Selected milestone: M2
- Changed assumptions: none
- Action: acquire fixed source for records 76 through 150 without executing code
- Command or observation: parallel exact-commit git fetches into
  `/tmp/dsh-review-wave2`
- Test level and environment: diagnostic; local dedicated branch
- Result: pass after exact retry; 74 records have parseable static metadata and
  one candidate repository remains unavailable
- Known failure: transient portion of M2-F1 repaired; unavailable row retained;
  M2-F2 repaired
- Blocker class: none for review progress
- Next action: collect registry identity evidence and finish M2 decisions
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 7

- Selected milestone: M2
- Changed assumptions: none
- Action: reconcile package install identities for records 76 through 150
- Command or observation: read-only npm registry inventory for every declared
  package name
- Test level and environment: diagnostic; local dedicated branch
- Result: pass; matching, null-mapped, conflicting, and unpublished package
  identities are distinguished without running third-party code
- Known failure: none
- Blocker class: none
- Next action: apply the explicit M2 catalog and ledger decisions
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 7 verification

- Selected milestone: M2
- Changed assumptions: none
- Action: apply all M2 decisions and catalog records, regenerate documentation,
  and run the complete milestone verification route
- Test level and environment: S1; local dedicated branch
- Result: pass; 162 catalog records, 142 pending ledger rows, 34 passing tests,
  clean formatting, and 336 generated static pages
- Known failure: M2-F1 and M2-F2 repaired and retained
- Blocker class: none
- Next action: select M3
- Synchronized status: Plan.md=M2 done; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 8

- Selected milestone: M3
- Changed assumptions: none
- Action: review frozen ledger records 151 through 225
- Command or observation: dependency release after M2 S1 verification
- Test level and environment: preflight; local dedicated branch
- Result: M3 selected and persisted as in_progress
- Known failure: none
- Blocker class: none
- Next action: inventory exact M3 source and registry evidence
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 9

- Selected milestone: M3
- Changed assumptions: none
- Action: acquire and classify fixed-source and registry evidence for records
  151 through 225
- Command or observation: exact-commit Git fetches, static metadata and README
  inspection, and read-only npm registry queries
- Test level and environment: diagnostic; local dedicated branch
- Result: pass; all 75 M3 rows have reproducible evidence
- Known failure: none
- Blocker class: none
- Next action: apply explicit M3 decisions and catalog records
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 9 verification

- Selected milestone: M3
- Changed assumptions: none
- Action: apply M3 decisions and run the full milestone verification route
- Test level and environment: S1; local dedicated branch
- Result: pass; 224 catalog records, 67 pending ledger rows, 34 tests, clean
  formatting, and 460 generated static pages
- Known failure: none
- Blocker class: none
- Next action: select M4
- Synchronized status: Plan.md=M3 done; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 10

- Selected milestone: M4
- Changed assumptions: none
- Action: review frozen ledger records 226 through 292
- Command or observation: dependency release after M3 S1 verification
- Test level and environment: preflight; local dedicated branch
- Result: M4 selected and persisted as in_progress
- Known failure: none
- Blocker class: none
- Next action: inventory exact M4 source and registry evidence
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 11

- Selected milestone: M4
- Changed assumptions: none
- Action: acquire and classify fixed-source and registry evidence for records
  226 through 292
- Command or observation: exact-commit fetches, static metadata inspection, and
  read-only registry queries
- Test level and environment: diagnostic; local dedicated branch
- Result: pass for 66 records; one unavailable repository retained for explicit
  disposition without blocking the remaining queue
- Known failure: M4-F1 candidate_unavailable
- Blocker class: none for completion
- Next action: apply all M4 decisions and catalog records
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 11 verification

- Selected milestone: M4
- Changed assumptions: none
- Action: apply final-wave decisions and run completion-mode plus S1 gates
- Test level and environment: S1; local dedicated branch
- Result: pass; 292 of 292 complete, catalog 269, 34 tests, clean formatting,
  and 550 generated static pages
- Known failure: M4-F1 candidate unavailable and explicitly dispositioned
- Blocker class: none
- Next action: select M5
- Synchronized status: Plan.md=M4 done; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 12

- Selected milestone: M5
- Changed assumptions: none
- Action: reconcile the final data and diff before delivery
- Command or observation: diff whitespace check plus aggregate jq summary
- Test level and environment: S2 diagnostic; local dedicated branch
- Result: diff check passed; jq summary failed to compile
- Known failure: M5-F1 malformed jq expression
- Blocker class: repo_fixable
- Next action: correct the read-only query and complete delivery validation
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

### Attempt 12 repair

- Selected milestone: M5
- Changed assumptions: none
- Action: rerun corrected final reconciliation
- Command or observation: aggregate decision coverage, catalog uniqueness, diff
  whitespace, and worktree inventory
- Test level and environment: S2 diagnostic; local dedicated branch
- Result: pass; 292 unique decisions, 269 unique catalog records, zero pending
- Known failure: M5-F1 repaired and retained
- Blocker class: none
- Next action: commit, push, open the review PR, and verify CI
- Synchronized status: Plan.md=in_progress; Documentation.md=updated;
  agent-loop-state.md=updated; release-evidence.md=updated

## Closure

- Final required levels: S1 and S2
- Final delivery state: dedicated branch and review PR only
- Change explainer / post-change quiz: pending final scope assessment
- User confirmation: pending
- Cleanup candidates: dedicated branch after user accepts or rejects the PR
- Cleanup status: retained
