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
