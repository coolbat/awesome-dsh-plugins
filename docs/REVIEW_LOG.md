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
