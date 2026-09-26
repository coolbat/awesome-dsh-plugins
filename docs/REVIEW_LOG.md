# Review log

## 2026-09-26 — Daily fixed-source review

- Beijing Saturday; no Monday reconciliation was due. The original dirty
  checkout was preserved; this dated isolated worktree began at origin/main
  and fast-forwarded the previous audit checkpoint. PR #28 is updated in place.
- Source PR #2: `31b95d3d6c3146beb19aef173054a547056f203e`.
  Previous audit: `77a387a5dbe083b6d0e0949d5663eaa88fdd6889`.
  Queue: 4,925 = 1,657 already-listed + 3,247 ready + 21 discovery-held.
- Processed 191 fixed-source changes: 80 new keys and 111 changed commits;
  reused 3,056 exact key-and-commit dispositions. All identities use full
  40-character commits. 190 manifests and same-commit patches returned HTTP 200
  and matched the frozen queue. The older Kaede0614 history-fictionologists
  repository identity returned 404; the recreated repository has a different
  discovery key and was assessed at its own available commit.
- Increment: 11 catalog-reviewed + 37 catalog-held + 55 duplicate/superseded
  + 48 source-conflict + 35 example/fixture/archive + 4 non-plugin-package
  + 1 unavailable. Zero new structural-rejected or catalog-excluded decisions.
  Duplicates/newer source snapshots do not re-certify or replace retained
  historical catalog snapshots.
- Complete ready-queue ledger: 3,247 = 177 catalog-reviewed + 519 catalog-held
  + 3 catalog-excluded + 1,129 duplicate/superseded + 859 source-conflict
  + 315 example/fixture/archive + 182 non-plugin-package + 61 unavailable
  + 2 structural-rejected. Pending: 0. The 21 discovery-held records are not
  additional pending records in this ready-queue ledger.
- Catalog: 2,565 = 1,243 reviewed + 1,318 held + 4 excluded. All 2,517 previous
  catalog records remain unchanged; 48 repository-level entries were added.
  Only reviewed entries enter the public plugin directory.
- Reviewed additions cover auto-memory, Chinese-language reminders, Git
  worktrees, adaptive context, an adversarial-review preset, token statistics,
  a developer persona, stream folding, desktop injection bridging, turn retries
  and repetition guards. Exact npm or documented Git identity, licenses,
  fixed manifests/patches, lifecycle metadata and versioned host declarations
  were inspected. Reviewed does not mean harmless: curl's credential-bearing
  argv, irreversible Git actions, cross-session memory, prompt overrides and
  a persistent global monkey-patch are recorded explicitly.
- Holds identify installation/build/companion gaps, missing host-version
  contracts, license scope, direct shell policy and raw HTTP authorization.
  A confirmation string is not authentication for permanent session deletion.
  A status-only KDocs panel remains held because its companion core has a
  different npm source commit. Game/model assets are not assumed to inherit
  the code license. The private desktop app and Tack startup composition are
  non-plugin packages; patch-only presets are not rejected for guessed JS 404s.
- Discovery [36196812476](https://github.com/coolbat/awesome-dsh-plugins/actions/runs/36196812476)
  is partial: 60 repositories, 82 bundle manifests, five incremental queries,
  one oversized GitHub response (ashfordeOU/aero-agent-skills). Valid results
  were retained; last successful watermark: `2026-09-25T12:49:07.775Z`.
  No exhaustive-discovery claim is made.
- Evidence: [September 26 fixed-source report](../reports/review/2026-09-26.json),
  fixed source/patch/license/registry metadata, bounded source hashes and manual
  dispositions. Truncated hashes describe captured samples only. No candidate
  package, lifecycle hook, test, installer, binary, browser, server, Python
  environment, MCP server or native helper was executed.
- Local verification, exact-head quality/preview, merge and production remain
  separate gates. The existing Cloudflare preview file-limit failure does not
  authorize export redesign, a hosting-plan change, bypass or production retry.
  Static review does not establish runtime safety or compatibility.

- Local gates passed under Node 22.23.1: `npm run check` (50 tests), complete
  ledger validation (3,247 records, 0 pending), bilingual README checks,
  `git diff --check` and production-origin build (5,142 static pages).
  The candidate JSON equals fixed PR #2 data semantically; catalog ids and
  repository identities are unique. Output: 25,716 files, largest 4,105,909
  bytes. The output exceeds the previously confirmed 20,000-file Cloudflare
  limit; a local build is not a preview or production deployment success.

## 2026-09-25 — Daily fixed-source review

- Beijing Friday; no Monday reconciliation was due. The original dirty
  checkout was preserved. A dated isolated worktree began at origin/main
  and fast-forwarded the previous audit checkpoint; PR #28 is updated in place.
- Source PR #2: `e20a2a9d2a89d99a3b02fab4d4e8bf81616588aa`.
  Previous audit: `fd1efaa227c4f57666aad28abd01a2815d67986a`.
  Queue: 4,844 = 1,656 already-listed + 3,167 ready + 21 discovery-held.
- Processed 241 fixed-source changes: 115 new keys and 126 changed commits;
  reused 2,926 exact key-and-commit dispositions. All source identities are
  full 40-character commits. 240 manifests and same-SHA patches returned
  HTTP 200 and matched the frozen identity. The yzbenyu-wq/dsh-pentest-maintained
  manifest returned 404 and is recorded as unavailable.
- Increment: 7 catalog-reviewed + 38 catalog-held + 139 duplicate/superseded
  + 24 source-conflict + 32 example/fixture/archive + 1 unavailable.
  Zero new non-plugin, structural-rejected or catalog-excluded decisions.
  A duplicate/newer-source decision does not re-certify a retained historical
  catalog snapshot or count multiple workspace manifests as separate repositories.
- Complete ready-queue ledger: 3,167 = 170 catalog-reviewed + 488 catalog-held
  + 3 catalog-excluded + 1,116 duplicate/superseded + 835 source-conflict
  + 314 example/fixture/archive + 179 non-plugin-package + 60 unavailable
  + 2 structural-rejected. Pending: 0. The 21 discovery-held candidates are
  outside this ready-queue ledger, not an additional pending review count.
- Catalog: 2,517 = 1,232 reviewed + 1,281 held + 4 excluded. All previous
  2,472 catalog snapshots remain unchanged; 45 unique repositories were added.
  Only reviewed records enter the public directory.
- Reviewed additions: midtalk, Git panels, reasoning-level settings, prompt
  switcher, Catppuccin themes, schedule tab and token usage ledger. Source/build
  mappings, hook metadata, host contracts, licenses and installation identity
  were inspected. Git installs do not imply npm artifact equivalence. The usage
  ledger's actual backfill-worker and shared protocol files are present; a
  guessed worker.js 404 is not evidence that the real worker is absent.
- Holds name concrete unresolved evidence: publication/companion mappings,
  versioned host contracts, license scope, raw HTTP authorization and expanded
  runtime policy. A PRTS theme excludes third-party image assets from MIT.
  The editor root LICENSE is custom SATA 2.1, not plain MIT. A hub's postinstall
  can install DSH/pnpm globally and invoke PowerShell, while prepare writes
  Git hooks. Header-only same-origin checks do not establish authenticated
  remote access. Loopback checks are described precisely, not certified.
- Discovery [36067640779](https://github.com/coolbat/awesome-dsh-plugins/actions/runs/36067640779)
  is partial: 60 repositories, 74 bundle manifests, five incremental queries,
  one oversized GitHub response (ultrametricai/productarena). Valid results
  were retained; last successful watermark: `2026-09-24T06:13:55.501Z`.
  No claim of exhaustive discovery is made.
- Evidence: [September 25 fixed-source report](../reports/review/2026-09-25.json),
  immutable source/patch/license/registry metadata, bounded source hashes and
  per-record manual decisions. No candidate package, hook, test, installer,
  binary, browser, server, Python environment, MCP server or native helper ran.
- Local validation, exact-head quality/preview, merge and production are
  separate gates. The existing Cloudflare preview file-limit failure does not
  authorize a plan change, export redesign, bypass or production retry. Static
  review does not establish runtime safety or compatibility.

- Local gates passed under Node 22.23.1: `npm run check` (48 tests), complete
  ledger validation (3,167 records, 0 pending), generated bilingual README
  checks, `git diff --check` and production-origin build (5,046 static pages).
  Candidate JSON equals the exact PR #2 source semantically; catalog ids and
  repository identities are unique. The output has 25,236 files; largest file
  is 4,062,460 bytes. This exceeds the previously confirmed Cloudflare limit
  of 20,000 files and is not evidence of a successful preview or deployment.

## 2026-09-24 — Daily fixed-source review

- Beijing Thursday; no Monday reconciliation was due. The original dirty
  checkout was preserved. This dated isolated worktree began at origin/main
  and fast-forwarded the previous audit checkpoint.
- Source PR #2: `886f14f714220f36696ccf0bfdd2e1aa5381d367`.
  Previous audit: `7c4f26ddc80252f11443676bf71c7e20afebc1db`.
  Queue: 4,729 = 1,657 already-listed + 3,052 ready + 20 discovery-held.
- Processed 220 fixed-source changes: 89 new keys and 131 changed commits;
  reused 2,832 exact key-and-commit dispositions. All 220 fixed manifests
  and same-SHA patch files returned HTTP 200 and matched the frozen identity.
- Increment: 7 catalog-reviewed + 37 catalog-held + 106 duplicate/superseded
  + 39 source-conflict + 25 example/fixture/archive + 6 non-plugin-package.
  Zero new unavailable, structural-rejected or catalog-excluded decisions.
  Updated sources classified as duplicates do not re-certify retained
  historical catalog snapshots.
- Complete ready-queue ledger: 3,052 = 166 catalog-reviewed + 461 catalog-held
  + 3 catalog-excluded + 1,049 duplicate/superseded + 821 source-conflict
  + 311 example/fixture/archive + 180 non-plugin-package + 59 unavailable
  + 2 structural-rejected. Pending: 0. Discovery-held candidates are outside
  this ready-queue ledger.
- Catalog: 2,472 = 1,225 reviewed + 1,243 held + 4 excluded. All previous
  2,428 catalog snapshots remain unchanged; 44 unique repositories added.
  Only reviewed records enter the public directory.
- Reviewed additions: process guard, web search, session colors, OpenCode
  Go pool, PTC/Cordis preset, prompt stash and token tracker. Documented Git
  build/install mappings can establish source identity when npm is absent;
  they do not prove npm artifact equivalence. Host connection/Typert usage,
  lifecycle scripts, credentials and filesystem capabilities were inspected.
- Held records identify concrete missing evidence: unversioned host contracts,
  unresolved public installation, missing or unpinned companion outputs,
  license scope, and HTTP authorization boundaries. SpecWave's patch module
  name differs from package.name; a CLI alias is not a loader alias. DeepBlend's
  companions use unpinned Git path dependencies. A2A explicitly configures
  noAuthentication and defaults to disabled/loopback; that is not verified
  authorization for an externally exposed deployment. Origin headers and local
  key encryption do not establish authenticated access to sensitive routes.
- Discovery [35927858178](https://github.com/coolbat/awesome-dsh-plugins/actions/runs/35927858178)
  retained valid results but is partial: 60 repositories, 76 bundle manifests,
  five incremental queries, two oversized GitHub responses (awesome-game-security
  and ExploitHunter.app). Last successful watermark:
  `2026-09-23T06:04:15.434Z`. No complete-internet-discovery claim is made.
- Evidence: [September 24 fixed-source report](../reports/review/2026-09-24.json),
  immutable manifest/patch/license/registry data, bounded source hashes and
  per-record manual decisions. No candidate package, hook, test, installer,
  binary, browser, server, Python environment, MCP server or native helper ran.
- Audit, local gates, exact-head quality/preview, merge and production are
  separate stages. PR #28 is updated in place. The previous Cloudflare preview
  hit its 20,000-file limit; this audit does not authorize bypassing it,
  changing hosting plans or redesigning the export. Static review does not
  establish runtime safety or compatibility.

- Local gates passed under Node 22.23.1: `npm run check` (46 tests), complete
  ledger validation (3,052 records, 0 pending), generated bilingual README
  checks, `git diff --check` and the production-origin build (4,956 static
  pages). Frozen candidate JSON equals the exact PR #2 source semantically.
  The output contains 24,786 files; largest is 4,033,950 bytes. This exceeds
  the previously confirmed Cloudflare 20,000-file limit; a successful local
  build is not a successful provider preview or production deployment.

## 2026-09-23 — Daily fixed-source review

- Beijing Wednesday; no full Monday reconciliation was due. The original
  dirty September 10 checkout was preserved. A dated isolated worktree
  began at origin/main and fast-forwarded the prior audit checkpoint.
- PR #2 source: `0d9a81f10c06b098012f53040d3fe53f4c2a2e6f`.
  Prior audit: `5acec9288a91c1e136f21d3cb86ec9d222aa64c9`.
  Queue: 4,642 = 1,659 already-listed + 2,963 ready + 20 discovery-held.
- Reviewed 209 fixed-source changes: 100 new keys and 109 changed commits;
  reused 2,754 exact key-and-commit dispositions. All source identities are
  full 40-character commits. 207 manifests and same-SHA patch files were
  retrieved; two fixed manifests returned 404 and were marked unavailable.
- Increment dispositions: 6 catalog-reviewed, 43 catalog-held, 64
  duplicate-or-superseded, 62 source-conflict, 32 example/fixture/archive
  and 2 unavailable. No new non-plugin, structural-rejected or
  catalog-excluded dispositions. Eight Web Relay release copies are archives,
  not independent plugins. New source versions of retained catalog entries
  classified as duplicates do not re-certify those historical snapshots.
- Full ledger: 2,963 = 161 catalog-reviewed + 433 catalog-held + 3
  catalog-excluded + 1,009 duplicate/superseded + 807 source-conflict +
  309 example/fixture/archive + 180 non-plugin + 59 unavailable + 2
  structural-rejected. Pending: 0. The ready-queue ledger is not the
  historical directory; discovery-held records are outside this ready queue.
- Catalog: 2,428 = 1,218 reviewed + 1,206 held + 4 excluded. All 2,379
  previous directory snapshots remain unchanged; 49 unique repositories
  were added. Only reviewed entries enter the public plugin directory.
- Reviewed additions: reparse escape guard, model proxy, remote explorer,
  system monitor, MCP panel and context trim. Their source/build mappings,
  versioned host declarations, licenses and installation identity were
  inspected. The system monitor uses a direct socket-loopback fence;
  Remote Explorer uses connection.fetch. Neither is a runtime security proof.
- Holds explicitly include raw HTTP/RPC authorization boundaries, missing
  exported or companion artifacts, absent/publication-mismatched install
  identities, missing license scope and unversioned compatibility. Python
  CodeAct documents shell-equivalent, non-sandboxed model execution and is
  held for operator risk acceptance; its UI-only profile patch does not
  itself enable the separate CodeAct preset. Test Account is a real bundle,
  not a fixture by repository name, and requests unrestricted file access.
- Stepwise Distill has an actual postinstall hook which extracts installed
  DSH host modules from app.asar; it was inspected, not executed. Path and
  README edge cases were handled manually: TaskFlow/gh-watch main entries
  without a leading dot exist; WX Preview has explicit multiline Git release
  and checkout installation instructions. Sampled large bundles remain
  bounded evidence, not full-code coverage.
- Discovery run
  [35791468625](https://github.com/coolbat/awesome-dsh-plugins/actions/runs/35791468625)
  retained valid results but was partial: 60 repositories observed, 58
  bundle manifests and two oversized GitHub responses for ExploitHunter.app
  and Deepseek-Harness-Desktop. Last-success watermark remains
  `2026-09-22T17:39:36.046Z`; this is not complete internet discovery.
- Evidence: [September 23 fixed-source report](../reports/review/2026-09-23.json),
  manifest/patch/license/registry records, source sample hashes and manual
  decisions. No candidate package, code, hook, test, installer, binary,
  browser, server, Python environment, MCP server or native helper ran.
- Audit, local validation, exact-head remote quality/preview, merge and
  production deployment are separate gates. PR #28 is updated in place.
  The prior preview failed at the provider's 20,000-file limit; there is
  no permission to bypass checks, change the hosting plan or redesign the
  export in this static-review change. No empty or duplicate PR is created.
  Static review does not establish runtime safety or compatibility.
- Local gates passed under Node 22.23.1: `npm run check` including all 44
  tests, complete-ledger validation (2,963 records, 0 pending), generated
  bilingual README checks, `git diff --check` and the production-origin
  build (4,868 static pages). The frozen candidate JSON is semantically
  identical to the exact PR #2 source. Output has 24,346 files; largest
  file is 4,004,820 bytes. This still exceeds the prior confirmed provider
  file-count limit; local build success is not preview or production success.

## 2026-09-20 — Daily fixed-source review

- Beijing Sunday; no full weekly reconciliation was due. Original user changes
  in the September 10 checkout were preserved. A clean dated worktree started
  from origin/main and fast-forwarded the prior verified review checkpoint.
- Source PR #2: `7c7ef584f9da0e18099763a56ad323d7acad7a5f`; prior audit:
  `aaf36f0cccb3d441dc53524cf61f21fc44a5db08`. Queue: 4,324 records =
  1,661 already-listed + 2,644 ready-for-review + 19 discovery-held.
- Reviewed 205 fixed-source changes: 103 new keys and 102 changed commits.
  Reused 2,439 exact key-and-commit decisions. Every source uses a full
  40-character SHA; candidate code and hooks were not executed.
- Increment dispositions: 15 catalog-reviewed, 38 catalog-held, 70
  duplicate-or-superseded, 42 source-conflict and 40 example/fixture/archive;
  zero new non-plugin, unavailable, structural-rejected or catalog-excluded.
- Full ledger: 2,644 = 149 catalog-reviewed + 348 catalog-held + 3
  catalog-excluded + 910 duplicate-or-superseded + 763 source-conflict +
  241 example/fixture/archive + 174 non-plugin + 54 unavailable + 2
  structural-rejected. Pending: 0.
- Catalog: 2,292 = 1,191 reviewed + 1,097 held + 4 excluded. The prior
  2,239 catalog snapshots are unchanged; 53 repository-unique records added.
- Manual evidence checks supersede heuristic suggestions: wildcard-only
  peers are not versioned compatibility; explicit fixed README/manifest
  host declarations can supplement missing peers. The full Team Link README
  supplies Git-source installation beyond the initial excerpt.
- Held findings include HTTP authorization boundaries for ZCode Import,
  Viewtune, Interviewer and Skill Links; Viewtune's small host entry spawns
  OS file-reveal processes and is not display-only. Jev's exact npm endpoint
  returned 404 despite publication claims and its source uses a workspace
  companion. Aggregate bundles do not prove all component source mappings.
- MUV Table and CentricMem preserve actual noncommercial license headings;
  CentricMem's adapter-only MIT license does not relicense its skill content.
  Project Navigation reserves original-code rights; Purge's MIT file and
  additional README termination terms remain an unresolved license conflict.
  The auto-update bundle retains its actual `install: bash install.sh` hook.
- Discovery run
  [35470530885](https://github.com/coolbat/awesome-dsh-plugins/actions/runs/35470530885)
  was partial: 60 repositories observed, 57 bundle manifests, one oversized
  GitHub response for `gmh5225/awesome-game-security`. Valid results were
  retained; success watermark remains `2026-09-19T16:32:33.054Z`.
  Discovery completeness is not claimed.
- Evidence: [September 20 report](../reports/review/2026-09-20.json),
  fixed manifests/patch hashes, registry identity, lifecycle declarations,
  source entrypoint hashes and supplemental license/source hashes.
- Required release gates remain full local checks/build, zero pending,
  unchanged source/head identities, GitHub quality SUCCESS and Cloudflare
  preview SUCCESS. Preview is not production. No merge is permitted while
  any required check is missing, failed or drifting.
- Local gates passed: `npm run check` (44 tests), complete-ledger validation
  (2,644 records, zero pending), generated README checks, diff whitespace
  checks and a production-origin build (4,596 static routes). Formatting
  preserves semantic equality to the frozen PR #2 queue.
- Build output contains 22,986 files (largest 3,902,446 bytes). This exceeds
  the documented [Pages Free plan file limit](https://developers.cloudflare.com/pages/platform/limits/#files)
  of 20,000, but project plan and detailed provider logs are not confirmed;
  this is a deployment-failure lead, not a proven cause or permission to
  change hosting plans. The prior review head's preview had failed.
- No candidate package, lifecycle hook, test, installer, binary, browser,
  server, Python environment, MCP server, helper or candidate process ran.
  Static review does not prove runtime safety or compatibility.

## 2026-09-19 — Daily fixed-source review

- Beijing Saturday; no Monday full reconciliation is due.
- PR #2 source: `f98ce488e3b1eda35835d40c5eefad19005aca81`.
  Queue: 4,222 = 1,662 already listed + 2,541 ready + 19 discovery-held.
- Relative to the last completed review at
  `52540ce951ccb3f9bdfa91df04ea752b340a6116`, 111 keys are new and 104
  have changed source revisions. All 215 received a static disposition:
  14 reviewed, 31 held, 64 duplicate/superseded, 56 source-conflict,
  29 example/fixture/archive, 20 non-plugin and 1 unavailable.
  No new catalog-excluded or structural-rejected records were added.
- Ledger: 2,541 records, **0 pending**. Dispositions: 139 catalog-reviewed,
  318 catalog-held, 3 catalog-excluded, 878 duplicate/superseded,
  740 source-conflict, 233 example/fixture/archive, 174 non-plugin,
  54 unavailable and 2 structural-rejected. This is the current ready-queue
  ledger, not the complete historical catalog.
- Catalog: **2,239 = 1,176 reviewed + 1,059 held + 4 excluded**.
  Added 45 repository-level entries; all 2,194 prior catalog entries remain
  unchanged. Only reviewed records enter the public directory and sitemap.
- Notable decisions: empty DSH APP component patches and the Balbes host
  deployment bundle are non-plugin records. The raw terminal and archive
  handlers lack an established request-authorization boundary in inspected
  code and remain held. Voice/character asset restrictions, monorepo-root
  install drift, unpublished versions, local-only distribution and missing
  host-version declarations are recorded as explicit holds.
- The secretary integration declares an actual `scripts.install` hook.
  Its hook and installer were read as source only; their fixture writes,
  profile-stat reads and module/profile mutations were not executed.
  The lifecycle validator now accepts the literal `install` value so the
  catalog does not mislabel this package as lifecycle `none`; a regression
  assertion preserves that evidence. No existing lifecycle values changed.
- Latest discovery run `35398194992` succeeded. Report observed
  `2026-09-18T21:43:56.161Z`: 60 repositories, 50 bundle manifests,
  0 query errors, `partial=false`. Earlier failed runs still exist; this
  bounded incremental query pass is not complete internet coverage.
- Evidence: [September 19 review](../reports/review/2026-09-19.json),
  fixed manifests/patch hashes, license and npm metadata, source snippets,
  explicit manual decisions and supplementary source-file hashes.
- Work is isolated on `codex/review-new-candidates-20260919`; the original
  dirty checkout is preserved. PR #28's previous Cloudflare preview failed.
  Current-head local checks, remote quality/preview, merge and production
  acceptance are separate gates and are not asserted by this review log.
- No candidate code, package, lifecycle hook, test, installer, native helper,
  browser, server, Python environment or MCP server was executed. Static
  review does not establish runtime safety or compatibility.

## 2026-09-18 — Daily review and September 16–17 backlog completion

- Beijing Friday; no Monday full reconciliation was scheduled.
- Source: PR #2 at `1bd39b98a7ac573ba3beb1f6f8192766e302865b`.
  Queue: 4,111 records = 1,662 already listed + 2,430 ready + 19 discovery-held.
- Since September 17: 96 new keys and 72 changed source revisions, 168
  fixed-source decisions: 18 catalog-reviewed, 38 catalog-held, 59 duplicate or
  superseded, 36 source-conflict, 15 example/fixture/archive, 2 non-plugin.
  No new catalog-excluded, unavailable or structural-rejected records today.
- The September 17 source backlog was finalized today: 174 decisions and 55
  catalog additions (14 reviewed, 41 held). The September 16 backlog had been
  completed in checkpoint `30ea9aeba65ed41056910058dff270d1442d02f4`:
  493 decisions with 52 reviewed, 106 held and 1 excluded catalog addition.
  Wave decision totals are not unique plugins: a key may have different SHAs
  across daily snapshots. Unchanged historical catalog records are preserved.
- Complete current ledger: 128 catalog-reviewed, 294 catalog-held,
  3 catalog-excluded, 850 duplicate/superseded, 718 source-conflict,
  225 example/fixture/archive, 157 non-plugin, 53 unavailable,
  2 structural-rejected; **0 pending**. The ledger covers the ready queue,
  not all historical catalog entries.
- Catalog: **2,194 = 1,162 reviewed + 1,028 held + 4 excluded**.
  Only reviewed records are published in the plugin directory.
- Latest discovery run `35281005105` succeeded; state-branch report observed
  `2026-09-17T22:14:43.341Z`, 60 repositories, 62 bundle manifests, 0 errors,
  `partial=false`. This is a bounded incremental pass, not complete coverage
  of the internet. Earlier failed runs are not erased by this recovery.
- Evidence: [September 17 backlog](../reports/review/2026-09-17.json) and
  [September 18 review](../reports/review/2026-09-18.json), including fixed
  manifests, patch hashes, licenses, installation identities, lifecycle
  declarations, capability notes and explicit dispositions. Supplemental
  source-file hashes are readings, not execution or whole-package audits.
- Notable holds include Apache/MIT declaration conflicts, additional
  noncommercial/artwork restrictions, unresolved native binary distribution,
  floating nested package mappings and absent host version declarations.
  Reviewed entries with approval-bypass, remote SSH, subprocess, personal-data
  or health/genome capabilities retain explicit risk notes, not safety claims.
- Original uncommitted September 10 and September 17 worktrees were preserved;
  changes are isolated in `codex/review-new-candidates-20260918` based on latest
  main with prior review-only checkpoints fast-forwarded.
- Local/remote validation, merge and production deployment are independent
  gates. This log records the review; it does not claim those later gates passed.
- Static review does **not** establish runtime safety or compatibility. No
  candidate code, lifecycle hook, test, installer, browser, server, Python
  environment, MCP server, native helper or third-party subprocess was executed.

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

## 2026-08-16 — Automated queue review batch 3

- Input: PR #2 at candidate head
  `0ebcdc0a64534b6a1ef66b30a00f50329afc567e`.
- Scope: twenty distinct current bundles selected after separating archive,
  example, test, and duplicate manifests from installable plugin candidates.
- Decisions: 16 reviewed, 4 held.
- Held: `DimitriLIAN/dsh-habits` because its README uses a placeholder owner
  in the installation target and the npm identity does not resolve.
- Held: `dkjsiogu/dsh-path-browser` because the fixed source has no README or
  author-documented public installation identity and the npm name does not
  resolve.
- Held: `DosterBool/dsh-shutup` because no public installation documentation
  or resolvable package target was found at the fixed commit.
- Held: `dshplugin-me/dsh-precedent` because its author states that the
  documented `v0.1.0` Git target is not tagged and will not currently resolve.
- Execution boundary: fixed-commit manifests, patches, licenses, documentation,
  source text, repository metadata, and registry metadata only; no package,
  lifecycle hook, plugin, installer, remote binary, browser, server,
  subprocess, native helper, file operation, model request, or test suite was
  executed.

## 2026-08-20 — Daily fixed-source review

- Input: PR #2 candidate head
  `cd1778b0fd84f911c35990c57b35134306f73848`, generated at
  `2026-08-19T19:43:44.594Z`.
- Queue: 800 structural leads: 239 already listed, 5 discovery-held, and 556
  ready for review. Every ready record used a full 40-character commit.
- Increment: 189 records required new evidence: 168 new keys and 21 keys whose
  fixed commit changed. The other 367 records reused only exact key-and-commit
  history.
- Decisions for the 189-record increment: 51 catalog-reviewed, 37
  catalog-held, 50 duplicate or superseded, 17 example/fixture/template, 32
  source conflicts, and 2 unavailable. No records remain pending.
- Catalog after review: 518 repository-unique records: 401 reviewed, 116 held,
  and 1 excluded.
- Evidence boundary: fixed manifests, same-commit patches, license and README
  files, repository metadata, npm version metadata, lifecycle declarations,
  DSH peer ranges, and capability/risk signals were read statically. No
  candidate package, hook, plugin, candidate test, installer, binary, browser,
  server, Python environment, MCP server, native helper, or candidate process
  was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 37 tests
  and 1,048 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-21 — Daily fixed-source review

- Input: PR #2 candidate head
  `84c847ffc43128a269ea6b51c4ef6a55bb41e253`, generated at
  `2026-08-20T19:49:11.941Z`.
- Queue: 928 structural leads: 489 already listed, 5 discovery-held, and 434
  ready for review. Every ready record used a full 40-character commit.
- Increment: 164 records required new evidence: 128 new keys and 36 keys whose
  fixed commit changed. The other 270 records reused only exact key-and-commit
  history.
- Decisions for the 164-record increment: 50 catalog-reviewed, 38
  catalog-held, 39 duplicate or superseded, 9 example/fixture/template, 4
  non-plugin packages, 22 source conflicts, and 2 unavailable. No records
  remain pending.
- Catalog after review: 606 repository-unique records: 451 reviewed, 154 held,
  and 1 excluded.
- Discovery health: the latest run was partial with 60 repositories observed,
  33 bundle manifests found, and two oversized GitHub responses; valid results
  were retained, but discovery completeness is not claimed and the success
  watermark remains `2026-08-20T14:03:04.378Z`.
- Evidence boundary: fixed manifests, same-commit patches, license and README
  files, repository metadata, npm version metadata, lifecycle declarations,
  DSH peer ranges, and capability/risk signals were read statically. No
  candidate package, hook, plugin, candidate test, installer, binary, browser,
  server, Python environment, MCP server, native helper, or candidate process
  was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 37 tests
  and 1,224 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-22 — Daily fixed-source review

- Input: PR #2 candidate head
  `2538885f6665b3e43f29d28984b83c955f44f091`, generated at
  `2026-08-21T19:41:30.037Z`.
- Queue: 1,057 structural leads: 576 already listed, 5 discovery-held, and 476
  ready for review. Every ready record used a full 40-character commit.
- Increment: 141 records required new evidence: 129 new keys and 12 keys whose
  fixed commit changed. The other 335 records reused only exact key-and-commit
  history.
- Decisions for the 141-record increment: 49 catalog-reviewed, 33
  catalog-held, 12 duplicate or superseded, 8 example/fixture/template, 7
  non-plugin packages, and 32 source conflicts. No records remain pending.
- Catalog after review: 688 repository-unique records: 500 reviewed, 187 held,
  and 1 excluded.
- Discovery health: the discovery state records a successful run at
  `2026-08-21T19:41:30.037Z`; the queue contains 1,057 retained structural
  leads. This timestamp does not prove that every relevant GitHub result was
  returned.
- Evidence boundary: fixed manifests, same-commit patches, license and README
  files, repository metadata, exact npm version metadata, lifecycle
  declarations, DSH peer ranges, and capability/risk signals were read
  statically. No candidate package, hook, plugin, candidate test, installer,
  binary, browser, server, Python environment, MCP server, native helper, or
  candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 37 tests
  and 1,388 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-24 — Daily fixed-source review

- Input: PR #2 candidate head
  `256b86dbd50c892ce5c26c3216fb80d36ededfb8`, generated at
  `2026-08-23T19:40:13.388Z`.
- Queue: 1,307 structural leads: 657 already listed, 6 discovery-held, and 644
  ready for review. Every ready record used a full 40-character commit.
- Increment: 301 records required new evidence: 249 new keys and 52 keys whose
  fixed commit changed. The other 343 records matched exact key-and-commit
  history.
- Decisions for the 301-record increment: 81 catalog-reviewed, 66
  catalog-held, 51 duplicate or superseded, 20 example/fixture/reference or
  archive records, 13 non-plugin packages, 59 source conflicts, and 11
  unavailable records. No records remain pending.
- Catalog after review: 835 repository-unique records: 581 reviewed, 253 held,
  and 1 excluded.
- Discovery health: the latest scheduled run succeeded with 60 repositories
  observed, 55 bundle manifests found, 0 query errors, and `partial=false`.
  The queue contains 1,307 retained structural leads; neither the run result
  nor the watermark proves complete GitHub discovery coverage.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. Eleven missing manifests were confirmed with a
  second GitHub Contents API read at the frozen commit. No candidate package,
  hook, plugin, candidate test, installer, binary, browser, server, Python
  environment, MCP server, native helper, or candidate process was installed
  or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 37 tests
  and 1,682 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

### Weekly reconciliation

- Candidate state reconciles to 1,307 records: 644 ready for review, 657
  already listed, and 6 discovery-held. The frozen review snapshot and ledger
  both contain the same 644 keys from PR #2 head `256b86d`.
- Ledger dispositions reconcile to 644 records: 81 catalog-reviewed, 66
  catalog-held, 214 duplicate or superseded, 66 example/fixture/reference or
  archive, 48 non-plugin packages, 149 source conflicts, and 20 unavailable.
- Catalog state reconciles to 835 unique IDs and repositories: 581 reviewed,
  253 held, and 1 excluded. No duplicate candidate keys, duplicate catalog
  IDs or repositories, missing ledger rows, catalog mappings, or non-40-byte
  source commits remain.
- `README.md` and `README.zh-CN.md` were regenerated from the catalog and have
  no generation drift. At reconciliation start, the only open remote PR was
  candidate queue PR #2; its head matched the frozen source commit and its
  Cloudflare branch preview was successful.
- Discovery's latest scheduled run succeeded, but earlier scheduled attempts
  included intermittent failures followed by successful refreshes. Valid
  retained results were preserved; discovery completeness is not claimed.
- The incomplete local Sunday evidence draft was superseded by Monday's newer
  PR #2 snapshot before any commit or PR was published. No repository repair
  or manual method decision remained after the static dispositions above.

## 2026-08-25 — Daily fixed-source review

- Input: PR #2 candidate head
  `43989a53f12f274c4e03f8a496c5e2f4b051131e`, generated at
  `2026-08-24T19:48:06.501Z`.
- Queue: 1,457 structural leads: 803 already listed, 8 discovery-held, and 646
  ready for review. Every ready record used a full 40-character commit.
- Increment: 154 records required new evidence: 149 new keys and 5 keys whose
  fixed commit changed. The other 492 records matched exact key-and-commit
  history.
- Decisions for the 154-record increment: 49 catalog-reviewed, 32
  catalog-held, 26 duplicate or superseded, 3 example/fixture records, 1
  non-plugin package, 42 source conflicts, and 1 unavailable record. No
  records remain pending.
- Catalog after review: 916 repository-unique records: 630 reviewed, 285 held,
  and 1 excluded.
- Discovery health: the latest scheduled run was partial with 60 repositories
  observed, 29 bundle manifests found, and 2 oversized GitHub repository
  responses. Valid queue updates were retained, but the success watermark
  remains `2026-08-24T14:05:47.151Z` and discovery completeness is not claimed.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. The unavailable commit was independently
  confirmed as absent through the GitHub Contents API. No candidate package,
  hook, plugin, candidate test, installer, binary, browser, server, Python
  environment, MCP server, native helper, or candidate process was installed
  or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 1,844 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-26 — Daily fixed-source review

- Input: PR #2 candidate head
  `bc4b0b7ff350ca60ce8febad2bfd1da87829b277`, generated at
  `2026-08-25T19:48:52.578Z`.
- Queue: 1,583 structural leads: 883 already listed, 8 discovery-held, and 692
  ready for review. Every ready record used a full 40-character commit.
- Increment: 156 records required new evidence: 127 new keys and 29 keys whose
  fixed commit changed. The other 536 records matched exact key-and-commit
  history.
- Decisions for the 156-record increment: 30 catalog-reviewed, 36
  catalog-held, 22 duplicate or superseded, 16 example/fixture/template or
  experimental records, 50 source conflicts, and 2 unavailable records. No
  records remain pending.
- Catalog after review: 982 repository-unique records: 660 reviewed, 321 held,
  and 1 excluded.
- Discovery health: the latest scheduled run completed with 60 repositories
  observed, 65 bundle manifests found, no query errors, and no partial-result
  watermark. Discovery coverage still is not claimed to be exhaustive.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. Both unavailable manifests were independently
  confirmed absent through the GitHub Contents API. No candidate package,
  hook, plugin, candidate test, installer, binary, browser, server, Python
  environment, MCP server, native helper, or candidate process was installed
  or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 1,976 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-27 — Daily fixed-source review

- Input: PR #2 candidate head
  `dc1496bb964014550b4196bf5a63df2a020e324e`, generated at
  `2026-08-26T22:17:49.667Z`.
- Queue: 1,735 structural leads: 949 already listed, 8 discovery-held, and 778
  ready for review. Every ready record used a full 40-character commit.
- Increment: 195 records required new evidence: 152 new keys and 43 keys whose
  fixed commit changed. The other 583 records matched exact key-and-commit
  history.
- Decisions for the 195-record increment: 35 catalog-reviewed, 32
  catalog-held, 47 duplicate or superseded, 9 example/fixture/template
  records, 4 non-plugin host packages, 37 source conflicts, and 31 unavailable
  records. No records remain pending.
- Catalog after review: 1,049 repository-unique records: 695 reviewed, 353
  held, and 1 excluded.
- Discovery health: the latest scheduled run completed with 60 repositories
  observed, 32 bundle manifests found, no query errors, and no partial-result
  watermark. Two earlier runs were partial with one query error each and did
  not advance the success watermark. Discovery coverage is not claimed to be
  exhaustive.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. All 31 unavailable manifests were independently
  confirmed absent through the GitHub Contents API. No candidate package,
  hook, plugin, candidate test, installer, binary, browser, server, Python
  environment, MCP server, native helper, or candidate process was installed
  or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,110 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-28 — Daily fixed-source review

- Input: PR #2 candidate head
  `e06e29cbeae6d1a5f5ba2944256f5a2a65180e6e`, generated at
  `2026-08-27T22:59:06.605Z`.
- Queue: 1,807 structural leads: 1,017 already listed, 8 discovery-held, and
  782 ready for review. Every ready record used a full 40-character commit.
- Increment: 92 records required new evidence: 72 new keys and 20 keys whose
  fixed commit changed. The other 690 records matched exact key-and-commit
  history.
- Decisions for the 92-record increment: 14 catalog-reviewed, 16
  catalog-held, 38 duplicate or superseded, 2 example/fixture records, 1
  non-plugin package, and 21 source conflicts. No records remain pending.
- Catalog after review: 1,079 repository-unique records: 709 reviewed, 369
  held, and 1 excluded.
- Discovery health: the latest scheduled run was partial with 60 repositories
  observed, 28 bundle manifests found, and one oversized GitHub repository
  response. Valid queue updates were retained, but the success watermark
  remains `2026-08-26T22:17:49.667Z` and discovery completeness is not claimed.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,170 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-29 — Daily fixed-source review

- Input: PR #2 candidate head
  `4179a3569b270bcc84f85a0016bc278cc0b4bcd4`, generated at
  `2026-08-28T23:04:43.462Z`.
- Queue: 1,884 structural leads: 1,047 already listed, 8 discovery-held, and
  829 ready for review. Every ready record used a full 40-character commit.
- Increment: 78 records required new evidence: 77 new keys and 1 key whose
  fixed commit changed. The other 751 records matched exact key-and-commit
  history.
- Decisions for the 78-record increment: 16 catalog-reviewed, 14
  catalog-held, 28 duplicate or superseded, 5 example/fixture/template
  records, and 15 source conflicts. No records remain pending.
- Catalog after review: 1,109 repository-unique records: 725 reviewed, 383
  held, and 1 excluded.
- Discovery health: the latest scheduled run completed with 60 repositories
  observed, 59 bundle manifests found, no query errors, and no partial-result
  watermark. Discovery coverage still is not claimed to be exhaustive.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,230 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-30 — Daily fixed-source review

- Input: PR #2 candidate head
  `740696c53d95899910240917c7b58514392cb429`, generated at
  `2026-08-29T21:47:58.267Z`.
- Queue: 1,976 structural leads: 1,078 already listed, 8 discovery-held, and
  890 ready for review. Every ready record used a full 40-character commit.
- Increment: 113 records required new evidence: 91 new keys and 22 keys whose
  fixed commit changed. The other 777 records matched exact key-and-commit
  history.
- Decisions for the 113-record increment: 20 catalog-reviewed, 30
  catalog-held, 19 duplicate or superseded, 8 example/fixture/template
  records, 6 non-plugin packages, and 30 source conflicts. No records remain
  pending.
- Catalog after review: 1,159 repository-unique records: 745 reviewed, 413
  held, and 1 excluded.
- Discovery health: the latest scheduled run completed with 60 repositories
  observed, 55 bundle manifests found, no query errors, and no partial-result
  watermark. Discovery coverage still is not claimed to be exhaustive.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,330 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-08-31 — Daily fixed-source review and weekly reconciliation

- Input: PR #2 candidate head
  `256bbff0079bbee1acb1ac0c1d35ad8c63646255`, generated at
  `2026-08-30T21:55:06.289Z`.
- Queue: 2,145 structural leads: 1,126 already listed, 8 discovery-held, and
  1,011 ready for review. Every ready record used a full 40-character commit.
- Increment: 243 records required new evidence: 121 new keys and 122 keys whose
  fixed commit changed. The other 768 records matched exact key-and-commit
  history.
- Decisions for the 243-record increment: 40 catalog-reviewed, 48
  catalog-held, 73 duplicate or superseded, 41 example/fixture/template
  records, 10 non-plugin packages, and 31 source conflicts. No records remain
  pending.
- Catalog after review: 1,247 repository-unique records: 785 reviewed, 461
  held, and 1 excluded.
- Discovery health: the latest scheduled run observed 60 repositories and 32
  bundle manifests but retained a partial-result watermark after one GitHub
  response exceeded the 5 MB limit. Valid results were retained; discovery is
  not claimed to be complete.
- Weekly reconciliation: PR #2, the frozen snapshot, ledger, catalog, generated
  bilingual READMEs, and the sole open pull request were compared. Candidate,
  disposition, and catalog totals reconcile; duplicate keys, duplicate catalog
  ids or repositories, missing ledger records, catalog mapping failures,
  non-40-character commits, and generated README drift were all absent.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,506 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-01 — Daily fixed-source review

- Input: PR #2 candidate head
  `8b3ab26daab0cb37e37661cd07c1fe5ae85306ba`, generated at
  `2026-08-31T23:14:18.101Z`.
- Queue: 2,233 structural leads: 1,214 already listed, 8 discovery-held, and
  1,011 ready for review. Every ready record used a full 40-character commit.
- Increment: 136 records required new evidence: 88 new keys and 48 keys whose
  fixed commit changed. The other 875 records matched exact key-and-commit
  history.
- Decisions for the 136-record increment: 24 catalog-reviewed, 19
  catalog-held, 41 duplicate or superseded, 3 example/fixture/template
  records, 3 non-plugin packages, and 46 source conflicts. No records remain
  pending.
- Catalog after review: 1,290 repository-unique records: 809 reviewed, 480
  held, and 1 excluded.
- Discovery health: the latest scheduled run observed 60 repositories and 46
  bundle manifests but retained a partial-result watermark after one GitHub
  response exceeded the 5 MB limit. Valid results were retained; discovery is
  not claimed to be complete.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,592 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-03 — Daily fixed-source review

- Input: PR #2 candidate head
  `ae0a166ea5612af3b74fac46c3f244dfaa00c093`, generated at
  `2026-09-02T21:52:26.512Z`.
- Queue: 2,517 structural leads: 1,256 already listed, 13 discovery-held, and
  1,248 ready for review. Every ready record used a full 40-character commit.
- Increment: 341 records required new evidence: 280 new keys and 61 keys whose
  fixed commit changed. The other 907 records matched exact key-and-commit
  history.
- Decisions for the 341-record increment: 56 catalog-reviewed, 50
  catalog-held, 72 duplicate or superseded, 43 example/fixture/template or
  benchmark records, 15 non-plugin packages, 104 source conflicts, and 1
  unavailable record. No records remain pending.
- Catalog after review: 1,396 repository-unique records: 865 reviewed, 530
  held, and 1 excluded.
- Discovery health: the latest scheduled run observed 60 repositories and 40
  bundle manifests but retained a partial-result watermark after one fetch
  failed. Valid results were retained; discovery is not claimed to be complete.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,804 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-04 — Daily fixed-source review

- Input: PR #2 candidate head
  `166ad7bedfe662ee94c5e1769eabd8cd54ef86ae`, generated at
  `2026-09-03T21:44:40.372Z`.
- Queue: 2,633 structural leads: 1,362 already listed, 13 discovery-held, and
  1,258 ready for review. Every ready record used a full 40-character commit.
- Increment: 167 records required new evidence: 116 new keys and 51 keys whose
  fixed commit changed. The other 1,091 records matched exact key-and-commit
  history.
- Decisions for the 167-record increment: 34 catalog-reviewed, 24
  catalog-held, 51 duplicate or superseded, 11 example/fixture/template,
  experiment, or rollback records, 10 non-plugin packages, and 37 source
  conflicts. No records remain pending.
- Catalog after review: 1,454 repository-unique records: 899 reviewed, 554
  held, and 1 excluded.
- Discovery health: the latest incremental run observed 60 repositories and 56
  bundle manifests with zero query errors and no partial-result watermark.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 2,920 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-05 — Daily fixed-source review

- Input: PR #2 candidate head
  `354a73b300a29c0a9ec1c8097e9392ced6ae16a9`, generated at
  `2026-09-04T21:33:18.095Z`.
- Queue: 2,773 structural leads: 1,418 already listed, 14 discovery-held, and
  1,341 ready for review. Every ready record used a full 40-character commit.
- Increment: 221 records required new evidence: 141 new keys and 80 keys whose
  fixed commit changed. The other 1,120 records matched exact key-and-commit
  history.
- Decisions for the 221-record increment: 31 catalog-reviewed, 30
  catalog-held, 86 duplicate or superseded, 11 example/fixture/template
  records, 21 non-plugin packages, and 42 source conflicts. No records remain
  pending.
- Catalog after review: 1,515 repository-unique records: 930 reviewed, 584
  held, and 1 excluded.
- Discovery health: the latest incremental run observed 60 repositories and 48
  bundle manifests with zero query errors and no partial-result watermark.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 3,042 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-06 — Daily fixed-source review

- Input: PR #2 candidate head
  `8a282835c20d452a1b755a78381346539f667c60`, generated at
  `2026-09-05T21:19:41.102Z`.
- Queue: 2,882 structural leads: 1,477 already listed, 16 discovery-held, and
  1,389 ready for review. Every ready record used a full 40-character commit.
- Increment: 146 records required new evidence: 109 new keys and 37 keys whose
  fixed commit changed. The other 1,243 records matched exact key-and-commit
  history.
- Decisions for the 146-record increment: 25 catalog-reviewed, 25
  catalog-held, 30 duplicate or superseded, 20 example/fixture/template,
  scaffold, experiment, or benchmark records, and 46 source conflicts. No
  records remain pending.
- Catalog after review: 1,565 repository-unique records: 955 reviewed, 609
  held, and 1 excluded.
- Discovery health: the latest incremental run observed 60 repositories and 51
  bundle manifests with zero query errors and no partial-result watermark.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 3,142 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-07 — Daily fixed-source review and weekly reconciliation

- Input: PR #2 candidate head
  `b4a95883b333b8a83f6d8f0824a025d5c66acf44`, generated at
  `2026-09-06T21:25:40.063Z`.
- Queue: 3,007 structural leads: 1,525 already listed, 16 discovery-held, and
  1,466 ready for review. Every ready record used a full 40-character commit.
- Increment: 243 records required new evidence: 126 new keys and 117 keys whose
  fixed commit changed. The other 1,223 records matched exact key-and-commit
  history.
- Decisions for the 243-record increment: 25 catalog-reviewed, 31
  catalog-held, 76 duplicate or superseded, 22 example/fixture/template,
  test-plugin, or benchmark records, 17 non-plugin packages, 71 source
  conflicts, and 1 unavailable record. No records remain pending.
- Catalog after review: 1,621 repository-unique records: 980 reviewed, 640
  held, and 1 excluded.
- Discovery health: the latest incremental attempt observed 60 repositories
  and 64 bundle manifests but retained a partial-result watermark after one
  oversized response from `gmh5225/awesome-game-security`. The last complete
  success was `2026-09-06T16:19:51.866Z`; valid queue results were retained,
  but discovery is not claimed to be complete.
- Weekly reconciliation: `origin/main`, PR #2, the frozen snapshot, ledger,
  catalog, generated bilingual READMEs, and all open pull requests were
  compared. Candidate, disposition, and catalog totals reconcile; duplicate
  keys, duplicate catalog ids or repositories, missing ledger records, catalog
  mapping failures, non-40-character commits, and generated README drift were
  absent after classifying a `deploy/testplugin` package as a test fixture. PR
  #20 is an unrelated dirty external proposal and was left untouched.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 3,254 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-08 — Daily fixed-source review

- Input: PR #2 candidate head
  `5fa973997b42d4f0fb81d18a895549d667c8b281`, generated at
  `2026-09-07T22:04:46.718Z`.
- Queue: 3,080 structural leads: 1,580 already listed, 17 discovery-held, and
  1,483 ready for review. Every ready record used a full 40-character commit.
- Increment: 116 records required new evidence: 73 new keys and 43 keys whose
  fixed commit changed. The other 1,367 records matched exact key-and-commit
  history.
- Decisions for the 116-record increment: 20 catalog-reviewed, 20
  catalog-held, 24 duplicate or superseded, 20 example/fixture/template,
  archive, or test-plugin records, 2 non-plugin packages, and 30 source
  conflicts. No records remain pending.
- Catalog after review: 1,661 repository-unique records: 1,000 reviewed, 660
  held, and 1 excluded.
- Discovery health: the latest incremental run observed 60 repositories and 52
  bundle manifests with zero query errors and no partial-result watermark. This
  complete run recovered from the previous partial attempt.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 3,334 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-09 — Daily fixed-source review

- Input: PR #2 candidate head
  `f7a33ae53d8b5a05051edc95a25c0689a3977b39`, generated at
  `2026-09-08T21:54:51.677Z`.
- Queue: 3,152 structural leads: 1,618 already listed, 17 discovery-held, and
  1,517 ready for review. Every ready record used a full 40-character commit.
- Increment: 140 records required new evidence: 74 new keys and 66 keys whose
  fixed commit changed. The other 1,377 records matched exact key-and-commit
  history.
- Decisions for the 140-record increment: 20 catalog-reviewed, 28
  catalog-held, 37 duplicate or superseded, 8 example/fixture/template or test
  records, 4 non-plugin packages, and 43 source conflicts. No records remain
  pending.
- Catalog after review: 1,709 repository-unique records: 1,020 reviewed, 688
  held, and 1 excluded.
- Discovery health: the latest incremental attempt observed 60 repositories
  and 37 bundle manifests but retained a partial-result watermark after one
  oversized response from `Arnon-hs/open-source`. The last complete success was
  `2026-09-08T17:17:10.992Z`; valid queue results were retained, but discovery
  is not claimed to be complete.
- Evidence boundary: fixed manifests, same-commit patches, repository and
  package licenses, exact npm version metadata or documented Git installation
  identity, lifecycle declarations, DSH peer ranges, and capability/risk
  signals were read statically. No candidate package, hook, plugin, candidate
  test, installer, binary, browser, server, Python environment, MCP server,
  native helper, or candidate process was installed or executed.
- Verification: `npm run check`, completion-mode ledger validation, generated
  bilingual README checks, `git diff --check`, and
  `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build` passed; 43 tests
  and 3,430 static pages completed.
- Limitation: static review does not prove runtime safety, runtime compatibility,
  or complete discovery coverage.

## 2026-09-11 — Daily fixed-source review, including unpublished September 10 leads

- Input: PR #2 head `4989a5dae0a28a2109f489a0a26236b2494ad54f`, generated
  at `2026-09-10T21:40:59.689Z`, against main
  `6dee785987fb983e4d585afd95abc155d112e3ab`.
- Workspace isolation: the unfinished September 10 draft was preserved without
  modification. This wave uses a separate worktree based on current origin/main;
  no unvalidated draft decision was reused as completed history.
- Queue: 3,387 leads = 1,665 already listed + 1,704 ready + 18 discovery-held.
  All ready records have full 40-character source commits and unique keys.
- Increment: 372 records across 165 repositories required evidence: 234 new
  keys and 138 changed source commits. The other 1,332 dispositions match exact
  historical key-and-commit identities.
- Increment decisions: 30 catalog-reviewed, 65 catalog-held, 135 duplicate or
  superseded, 35 example/fixture/archive, 19 non-plugin packages, and 88 source
  conflicts. No increment records are unavailable or structurally rejected.
- Complete ledger: 1,704 records = 30 catalog-reviewed + 65 catalog-held + 615
  duplicate/superseded + 195 fixture/example/archive + 138 non-plugin + 610
  source-conflict + 51 historical unavailable; 0 pending.
- Catalog: 1,804 repository-unique historical snapshots = 1,050 reviewed + 753
  held + 1 excluded. Existing catalog source commits and decisions are retained.
- Evidence: every increment manifest and its referenced fixed-commit patch
  returned HTTP 200. Repository/package licenses, exact-version npm metadata,
  documented Git distribution, lifecycle declarations, DSH peers/engines or
  versioned compatibility claims and capability signals were checked. The
  per-record evidence index is [the September 11 report](../reports/review/2026-09-11.json).
  Entry-point source sampling is bounded and explicitly records truncation;
  it is not a whole-code security audit or tarball byte-integrity verification.
- Notable holds: explicit Git-install limitations in Model Advisor and the
  Obsidian monorepo bridge; floating release identity for XingTu skills;
  wildcard/workspace compatibility declarations; undeclared TUI composition
  packages; a prerelease engine-range mismatch in File Explorer Kit; and
  unestablished artwork/lyric rights in the email and VAE theme packages.
  The `Minglink/dsh-infinite-gen-4` manifest's `dsh.repo` points to gen-3 and is
  therefore a source conflict rather than a new catalog entry.
- Risk disclosure: loopback authentication bypass, permission-preset replacement,
  robot motion, browser/daemon control, Python/MCP processes, configuration
  exports and filesystem rollback remain visible capabilities, not safety claims.
- Discovery remains partial: the last attempt observed 60 repositories and 61
  bundle manifests with one oversized response from `Arnon-hs/open-source`.
  Last complete success: `2026-09-10T17:01:42.952Z`. Valid queue results were
  retained; no complete discovery coverage is claimed.
- Execution boundary: no candidate package, hook, plugin, test, installer,
  binary, browser, server, Python environment, MCP server, native helper or
  candidate subprocess was installed or executed.
- Local verification passed: `npm run check` (43 tests), complete-ledger
  validation (1,704 records, 0 pending), generated bilingual README verification,
  `git diff --check`, and `NEXT_PUBLIC_SITE_URL=https://dshplugin.net npm run build`
  (3,620 static pages).
- Publication gates: exact PR heads, GitHub quality and Cloudflare preview must
  pass before squash merge. The main production deployment and public snapshot
  are checked separately after merge.
- Static review does not establish runtime safety or runtime compatibility.

## 2026-09-12 — Daily review, refreshing the unpublished September 11 PR

- Frozen PR #2 head: `ae6e3add5f051699162a1620ba2a5860f94746fd`;
  queue generated at `2026-09-11T21:46:00.169Z`.
- Base main remains `6dee785987fb983e4d585afd95abc155d112e3ab`.
  Continue PR #28 from `273608f09bb38e5345e4a0d4b868e562444bb2fd` in its
  clean isolated worktree. The original September 10 draft remains untouched.
  The prior PR was not merged; its completed fixed-source records are reused
  only for exact candidate key and commit matches.
- Queue: 3,508 leads = 1,665 already listed + 1,825 ready + 18 discovery-held.
  Every ready candidate has a unique key and a complete 40-character commit.
- Daily increment: 229 records across 105 repositories, comprising 121 new
  keys and 108 changed commits. Reuse 1,596 exact historical dispositions.
  Relative to main, 550 current candidates differ; earlier and daily source
  reports retain separate provenance rather than treating them as one batch.
- Daily outcomes: 13 catalog-reviewed, 48 catalog-held, 1 catalog-excluded,
  97 duplicate/superseded, 9 example/fixture/archive, 2 non-plugin packages,
  58 source conflicts and 1 structural rejection; 0 unavailable and 0 pending.
- Full ledger: 1,825 records = 41 catalog-reviewed + 110 catalog-held + 1
  catalog-excluded + 654 duplicate/superseded + 197 example/fixture/archive +
  140 non-plugin + 630 source-conflict + 51 historical unavailable + 1
  structural-rejected. Catalog: 1,866 = 1,063 reviewed + 801 held + 2 excluded.
  All previous 1,804 catalog snapshots remain unchanged.
- Evidence: all 229 fixed manifests and same-commit patches returned HTTP 200;
  exact npm metadata returned 109 HTTP 200 and 120 HTTP 404 responses.
  Repository/package licenses, distribution identities, DSH declarations,
  lifecycle scripts and capability signals were checked separately. See
  [the September 12 evidence report](../reports/review/2026-09-12.json).
- Manual corrections: the DeepDeck build smoke fixture is not a product
  plugin; select its private Bun Builder as a held desktop-coupled record.
  The VAE canary scaffold is an example. Balance Chart intentionally provides
  an empty patch and requires external profile edits, so it is structurally
  rejected. Pasumao Workbench is excluded following the author's September 11
  discontinuation and removal recommendation, not a claim that old releases
  cannot run. Brave's source SPDX and README establish GPL-3.0-or-later despite
  the generic GPL-3.0 license detector output.
- Unresolved installation/build artifacts, repository licenses, wildcard-only
  compatibility claims and desktop-native distribution remain held. QQ's open
  access defaults, session-wide shell consent, OAuth publishing/message scopes,
  native process control, context replacement and dynamic strategy code are
  capability warnings; none was enabled or executed.
- Discovery: the latest bounded incremental run succeeded with 60 repositories,
  51 bundle manifests and 0 query errors. Attempt and success watermarks are
  both `2026-09-11T21:46:00.169Z`; this is not exhaustive internet coverage.
- Publication requires fresh local checks and production build, exact head
  identity, GitHub quality and Cloudflare preview SUCCESS before squash merge;
  production deployment and live snapshot acceptance are separate gates.
- Local gates passed: `npm run check` (43 tests), complete-ledger validation
  (1,825 records, 0 pending), `git diff --check`, and the production-origin
  build (3,744 static pages). README generation and type checks passed.
- No candidate package, hook, plugin, test, installer, binary, browser, server,
  Python environment, MCP server, native helper or candidate subprocess ran.
  Source sampling is bounded and records truncation. Static review is not
  proof of runtime safety, runtime compatibility or tarball byte equivalence.

## 2026-09-13 — Daily review, updating the unpublished September 11–12 PR

- Frozen PR #2 head: `b59a6356d5b74ff63a3faa354cc6caf21e3da81b`;
  queue generated at `2026-09-12T21:28:55.930Z`.
- Main remains `6dee785987fb983e4d585afd95abc155d112e3ab`. Update PR #28
  from its validated `e7715e6c1adde307004955e123545008e36a7cbc` head in the
  isolated worktree. The original September 10 draft is preserved untouched.
- Queue: 3,598 = 1,665 already listed + 1,915 ready + 18 discovery-held.
  Ready keys are unique and all commits are full 40-character identities.
- Daily increment: 175 records across 100 repositories, comprising 90 new
  keys and 85 changed commits. Reuse 1,740 exact key/commit dispositions.
- Daily outcomes: 15 catalog-reviewed, 42 catalog-held, 1 catalog-excluded,
  43 duplicate/superseded, 12 example/fixture/archive, 7 non-plugin and 55
  source-conflict; no new unavailable/structural-rejected and 0 pending.
- Full ledger: 1,915 = 56 catalog-reviewed + 147 catalog-held + 2
  catalog-excluded + 674 duplicate/superseded + 198 example/fixture/archive +
  143 non-plugin + 643 source-conflict + 51 historical unavailable + 1
  historical structural-rejected. Catalog: 1,924 = 1,078 reviewed + 843 held
  + 3 excluded. All 1,866 previous catalog snapshots remain unchanged.
- All 175 fixed manifests and same-commit patches returned HTTP 200. License,
  installation identity, DSH compatibility, lifecycle hooks and capability
  evidence are recorded separately in
  [the September 13 report](../reports/review/2026-09-13.json).
- The private CodeBuddy indicator patch names its parent package, whose exact
  npm source commit conflicts with discovery; the child cannot bypass that
  conflict. DSH File Edit is excluded following the author's explicit
  discontinuation/migration statement, not a claim that old code cannot run.
- Explicit README host versions supplement missing peer declarations for IM
  Companion, Session Manager, Usage Monitor, Step Clock and Clipboard Menu.
  IM Companion and Goal lack npm gitHead, so source/tarball byte equivalence
  is not established. Build-only packages were inspected at original source
  entrypoints where available; no build hook from a candidate was executed.
- Held records retain unresolved licenses, standalone installation/build
  evidence, versioned compatibility or asset/corpus licensing scope. Warnings
  include session deletion, file restoration, autonomous follow-ups, external
  credentials, real billed probes, sandbox overrides and native process use.
- Discovery run 34720061036 was partial: 60 repositories, 37 bundle manifests,
  1 error (`99apps-id/termigo`, GitHub response exceeded 5,000,000 bytes).
  Valid results were retained. The last-success watermark remains
  `2026-09-12T16:21:54.179Z`; do not claim exhaustive discovery.
- Required release gates: `npm run check`, complete-ledger validation,
  `git diff --check`, production-origin build, exact PR head identity and
  explicit GitHub quality/Cloudflare preview SUCCESS. Squash merge and the
  matching main production deployment require independent verification.
- Local validation passed: 43 tests, complete ledger with 1,915 records and
  0 pending, generated bilingual README checks, type/format checks and a
  production-origin build containing 3,860 static pages.
- No candidate package, hook, plugin, test, installer, binary, browser, server,
  Python environment, MCP server, native helper or candidate subprocess ran.
  Static review does not prove runtime safety or runtime compatibility.

## 2026-09-22 — Daily fixed-source review

- Frozen PR #2: `9d4e8939d285c2501c895e2275caf7096eeaee32`; previous
  review: `f19fc4114944d69ffaf8a759281047a285f2e670`. Main remains
  `6dee785987fb983e4d585afd95abc155d112e3ab`. The original dirty checkout
  is preserved; work proceeds in an isolated dated branch to update PR #28.
- Queue: 4,542 = 1,659 already listed + 2,863 ready + 20 discovery-held.
  Processed 213 records (84 new keys, 129 changed source commits); reused
  2,650 exact key/commit outcomes. Every fresh manifest and same-commit patch
  returned HTTP 200 and matched its discovery identity.
- Fresh dispositions: 7 catalog-reviewed, 29 catalog-held, 76 duplicate or
  superseded, 55 example/fixture/archive, 45 source-conflict, 1 non-plugin,
  0 unavailable, 0 structural-rejected and 0 catalog-excluded; 0 pending.
- Full ledger: 2,863 = 163 catalog-reviewed + 398 catalog-held + 3
  catalog-excluded + 977 duplicate/superseded + 302 fixtures/archives + 180
  non-plugin + 781 source-conflict + 57 unavailable + 2 structural-rejected.
  Catalog: 2,379 = 1,212 reviewed + 1,163 held + 4 excluded. The previous
  2,343 catalog snapshots remain unchanged, including their pinned commits.
  Newer duplicate snapshots do not re-certify the retained older catalog code.
- Actual GPL-3.0 license headings resolve two heuristic false positives that
  matched an AGPL compatibility paragraph. These packages remain held for
  install/artifact closure, not a fabricated license conflict. Eight committed
  web-relay release copies are archives; the full Acryl desktop/CLI host is
  non-plugin. Native adapters are not rejected merely for using Python or MCP.
- Held HTTP boundaries include conditional/fail-open connection checks,
  unprotected LAN defaults, same-origin-only destructive worktree routes,
  unauthenticated shell configuration and Host-only backup settings. Missing
  licensing, public install identity, artifact closure and versioned host
  contracts remain held. Static permission checks do not prove safety.
- Discovery run [35663589746](https://github.com/coolbat/awesome-dsh-plugins/actions/runs/35663589746)
  succeeded: 60 repositories, 57 bundle manifests, 5 incremental queries and
  0 reported errors. Success watermark: `2026-09-21T22:37:16.255Z`.
  This is bounded incremental coverage, not exhaustive internet discovery.
- See [daily fixed-source evidence](../reports/review/2026-09-22.json).
- Local gates passed with Node 22.23.1: `npm run check` (44 tests),
  complete-ledger validation, README generation, types/format and
  `git diff --check`. The production-origin build generated 4,770 static
  pages and 23,856 files, still above the observed Cloudflare 20,000-file
  preview limit. Fresh-head quality and preview SUCCESS remain mandatory;
  local build success is not a successful deployment.
- Read-only production checks: root/plugins/review return HTTP 200 and
  `/en/` returns 301 to `/`. The 1,020 public directory URLs match main
  exactly; this is the old production snapshot, not today's 2,379 entries.
  No candidate package, hook, plugin, test, installer, binary, browser, server,
  Python environment, MCP server, native helper or candidate subprocess ran.
  Bounded/truncated source samples and npm metadata do not establish complete
  tarball equivalence. Static review does not prove runtime safety or compatibility.

## 2026-09-21 — Daily fixed-source review and Monday reconciliation

- Source PR #2: `b3a6c3430fb6acd0e28b3c75c14187db89ac85b0`; previous
  review checkpoint: `e5131f6aa5d7d024822d76c3068b1fc17642cf5c`.
- Processed 269 fresh records (135 new keys, 134 changed commits), retaining
  2,510 exact key/commit decisions. New dispositions: 14 catalog-reviewed,
  37 catalog-held, 104 duplicate/superseded, 47 source-conflict, 58 fixtures,
  6 non-plugin and 3 unavailable. Full ledger: 2,779 records, 0 pending.
- Queue: 4,458 = 1,659 already listed + 2,779 ready + 20 discovery-held.
  Catalog: 2,343 = 1,205 reviewed + 1,134 held + 4 excluded. All previous
  2,292 catalog records are unchanged; the 51 new records cite fixed sources.
- Licenses, public install identity, same-commit bundle patches, compatibility,
  lifecycle scripts and risk signals were inspected without candidate execution.
  Unresolved licensing/asset scope, build artifacts, HTTP authorization and
  version compatibility remain held. A recreated repository name is tracked by
  separate repository ids and commits, preserving the unavailable older source.
- Weekly reconciliation covers main, PR #2, the existing PR #28 checkpoint and
  today's result. No duplicate keys/catalog ids/repositories, invalid commit
  lengths, missing own-snapshot ledger or catalog mapping errors were found.
  PR #2 retains main's historical ledger; the fresh audit, not that old ledger,
  proves zero pending for the current ready queue.
- Local validation: `npm run check` (44 tests), complete ledger, README checks,
  `git diff --check`, and the production-origin build pass. Output: 4,698 static
  pages and 23,496 files. The previously verified Cloudflare preview failure
  enforces a 20,000-file limit; fresh remote gates must pass before any merge.
- Current production is still main `6dee785987fb983e4d585afd95abc155d112e3ab`:
  root/plugins/review HTTP 200, legacy `/en/` HTTP 301, and all 1,020 public
  directory URLs match main. No production release is claimed for this audit.
- Discovery is partial (60 repositories, 64 manifests, 2 oversized responses);
  valid results were retained and the last-success watermark was not advanced.
- See [daily evidence](../reports/review/2026-09-21.json) and
  [weekly reconciliation](../reports/review/2026-09-21-weekly.md).
  Static review does not prove runtime safety or runtime compatibility.
