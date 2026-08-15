# Review methodology

## Goal

Record reproducible source facts about DeepSeek Harness plugin candidates
without executing third-party plugin code.

## Eligibility

A native bundle normally has:

1. a package manifest containing `dsh.bundle.patch`;
2. a referenced patch file at the same immutable commit;
3. patch rows that contribute to a DSH profile;
4. a non-ambiguous package or Git-source identity.

The contract is based on the DeepSeek Harness publishing guide at the fixed
official source commit recorded in the review log.

## Evidence dimensions

Each dimension stays separate:

- **Source:** repository, default branch, full commit, observation date.
- **Structure:** manifest path, patch path, and identity chain.
- **License:** repository detection and package manifest field.
- **Distribution:** npm identity, Git source, or unknown.
- **Compatibility:** declared peer ranges or documentation claims only.
- **Lifecycle:** install-time hooks and source-build requirements.
- **Capabilities:** static signals such as filesystem, network, credentials,
  subprocess, browser, native code, dynamic content, or package management.

No weighted score converts these facts into a safety claim.

## Decision states

### Reviewed

The native manifest-to-patch chain exists at the fixed commit. This state says
nothing about runtime behavior, vulnerabilities, authorship, package integrity,
or future commits.

### Held

The candidate is relevant but one or more blockers prevent listing:

- package and patch identities disagree;
- no safe public distribution identity is known;
- the required bundle declaration or patch is missing;
- declared DSH peer ranges trail the review baseline;
- the author's fixed documentation says support is unavailable.

### Excluded

The fixed source establishes a category error or explicit lack of support.
Excluded entries remain visible so the same stale lead is not repeatedly
rediscovered.

## Safety boundary

Reviewers do not run package lifecycle hooks, plugin entrypoints, setup scripts,
native helpers, browsers, MCP servers, Python environments, or test suites.
Static review can surface capabilities but cannot establish benign behavior.

## Refresh policy

Every material update must record a new commit and observation date. Existing
entries are historical snapshots; they are not silently moved to a new branch
head. Runtime verification, package-integrity verification, and author identity
require separate evidence fields when introduced.
