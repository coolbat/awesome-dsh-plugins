# Frozen Goal Contract

## Background

The public DSH Plugin Index is built from evidence records in this repository.
Automated discovery maintains a review-only queue in PR #2; the user approved
running another static review against candidate head
`5f4afa34c293b0c79c16fd6a1d92baf46c11eade`. Its 355
`ready-for-review` rows contain 190 exact key-and-commit matches from the prior
completed ledger and 165 new or changed fixed-source records across 96
repositories.

## Goal

Process every one of the 355 frozen queue records into a reproducible static
review disposition, reusing prior evidence only for exact key-and-commit
matches, publish evidence-complete distinct plugin bundles to the catalog
branch, and leave duplicates, examples, archives, broken structures, or
unresolved install identities explicitly accounted for.

## Non-goals

- Do not execute candidate packages, lifecycle hooks, plugins, installers,
  binaries, browsers, servers, subprocesses, native helpers, tests, or model
  requests.
- Do not claim runtime compatibility, safety, authorship, or package integrity
  from static evidence.
- Do not merge the review branch or deploy it to production.
- Do not copy third-party catalog descriptions or website source.

## Deliverables

- A frozen copy of the 355-record source queue with its PR commit recorded.
- A disposition ledger covering every frozen record exactly once.
- Catalog and review-log updates for evidence-complete distinct bundles.
- Fixed-source identity, structure, license, lifecycle, compatibility, and
  material capability evidence for each published or held catalog record.
- Passing repository validation, tests, formatting checks, and production
  build on the review branch.
- A pushed review branch and pull request for human review.

## Constraints

- Use immutable 40-character source commits.
- Treat topics, search results, stars, and Awesome lists as discovery leads
  only.
- Keep `reviewed`, `held`, `excluded`, and `ready-for-review` meanings separate.
- Preserve fail-closed behavior when source, license, patch, install identity,
  or verification evidence cannot be reproduced.
- Work only in `/Users/coolbat/awesome-dsh-plugins` on the dedicated review
  branch.

## Done Conditions

- Every frozen ready record has one documented disposition.
- No evidence-incomplete record is publicly marked `reviewed`.
- Generated READMEs, catalog tests, `npm run check`, and the production build
  pass after the final catalog change.
- The review branch and PR contain the complete diff and fresh CI evidence.
- Production remains unchanged pending human merge approval.

## Human-owned Decisions

- Merging the review pull request.
- Production deployment caused by merging to `main`.
- Accepting a disputed identity, license, or compatibility interpretation.
- Any change to repository permissions, secrets, billing, security policy, or
  legal representation.

## Forbidden Actions

- Do not exceed the approved Delivery scope in `Implement.md`.
- Do not publish, send external messages, alter secrets, or make billing, auth,
  permission, legal, public-launch, or destructive data changes without explicit
  approval.
- Do not expand scope, replace a missing decision, or invent work to consume
  time.

## Approved Assumptions

- PR #2 head `5f4afa34c293b0c79c16fd6a1d92baf46c11eade` is the approved frozen discovery
  input for this run.
- The source discovery run completed with zero query errors and produced 598
  structurally valid leads: 238 already listed, 5 held, and 355 ready. This run
  still does not claim discovery completeness beyond those frozen records.
- GitHub and npm registry metadata may be read without executing candidate code.
- The existing catalog methodology and schema remain authoritative.
- Pushing a dedicated review branch and opening a pull request are approved;
  merging and production deployment are not.
