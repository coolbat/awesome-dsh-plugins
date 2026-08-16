# Review log

## 2026-08-15 — Initial evidence set

- Discovery inputs:
  - GitHub `dsh-plugin` topic.
  - `awesome-dsh-plugin/awesome-dsh-plugin` at
    `058f81cd29923e5e00fd60c02dedc834d5c1bbb4`.
- DSH publishing contract:
  - `deepseek-ai/deepseek-harness` at
    `47f943859bef60e4160492346772ded9b24f765a`.
- Reviewed candidates: 34.
- Decisions: 28 reviewed, 5 held, 1 excluded.
- Execution boundary: read-only repository metadata and fixed-source files;
  no candidate package, hook, plugin, setup command, helper, browser, server,
  Python code, or test suite executed.

The initial set combines two focused samples: a topic-led capability sample and
a follow-up sample drawn from the broad Awesome DSH list. Stars were observed
during discovery but deliberately omitted from this catalog because they are
volatile and do not establish trust, compatibility, or installability.

## 2026-08-16 — Automated queue review batch 1

- Input: the fixed-source candidate queue maintained on
  `bot/catalog-discovery` and surfaced by PR #2.
- Scope: ten high-signal root-level bundles, selected after separating repeated
  archive/example/test manifests from distinct repositories.
- Decisions: 9 reviewed, 1 held.
- Held: `zuorn/Tydora` because the root package is a desktop application, the
  bundle loads local TypeScript source, `postinstall` runs `patch-package`, the
  package license is undeclared, and a separate install identity was not
  confirmed.
- Execution boundary: GitHub metadata and fixed-commit manifests, patches,
  repository trees, and source text only; no package, lifecycle hook, plugin,
  helper, browser, server, native dependency, or test suite was executed.

## 2026-08-16 — Automated queue review batch 2

- Input: PR #2 at candidate head
  `bfb31d901feabc4e79033ed2973e2096899f0825`.
- Scope: twenty distinct current bundles selected after separating archive
  versions, examples, fixtures, core mirrors, and duplicate manifests.
- Decisions: 19 reviewed, 1 held.
- Held: `abab996/dsh-autonomy` because its documented unscoped npm name
  resolves to another public repository even though local source installation
  is separately documented.
- Identity notes: Git-source evidence, rather than colliding npm names, is
  recorded for `2160039878-cyber/dsh-plugin-market` and
  `Aisland-SJL/dsh-usage`.
- Unpublished blocker: `apbigking-cell/dsh-plugin-square` became unavailable
  after discovery and could not be reproduced, so it was not added to the
  catalog or counted in the twenty fixed-source decisions.
- Execution boundary: fixed-commit manifests, patches, licenses, documentation,
  source text, repository metadata, and registry metadata only; no package,
  lifecycle hook, plugin, installer, remote binary, browser, server,
  subprocess, native helper, or test suite was executed.
