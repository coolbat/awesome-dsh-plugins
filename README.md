<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Awesome DSH Plugins — an evidence-led directory with fixed source snapshots">
</p>

<p align="center">
  <strong>English</strong> · <a href="./README.zh-CN.md">简体中文</a>
</p>

# Awesome DSH Plugins

An independent, evidence-led directory for
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) plugins.
Every listed entry was inspected at an immutable commit for its bundle
manifest, referenced patch, license signals, package identity, lifecycle
scripts, and material capability signals.

This is a compact reviewed subset, not a mirror of every repository carrying
the `dsh-plugin` topic. It complements the broad
[Awesome DeepSeek Harness Plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)
discovery list with fixed-source evidence and an explicit hold queue.

> [!CAUTION]
> A structural review is not a security audit or a runtime compatibility test.
> DSH plugins execute third-party code with your permissions. Read the source,
> inspect lifecycle scripts, and prefer immutable versions before installing.

## Website

This repository is also the source for the bilingual static website. The site,
generated README catalogs, plugin detail pages, review log, sitemap, and counts
all read from [`data/plugins.json`](./data/plugins.json), so a reviewed catalog
change and its presentation ship in the same commit.

```bash
npm install
npm run dev
```

Production verification uses `npm run check && npm run build`. The static
export is written to `out/` and is ready for Cloudflare Pages. See the
[deployment guide](./docs/DEPLOYMENT.md). No AI, authentication, database,
payment, or third-party plugin execution is part of the website.

## Automatic candidate discovery

GitHub Actions runs bounded GitHub API discovery every six hours and a full
query pass weekly. It resolves each matching repository to a 40-character
commit, inspects `package.json` and the referenced patch path without cloning,
installing, or executing third-party code, and opens a review PR only when the
candidate queue materially changes. A separate bot branch stores the incremental
checkpoint, so empty runs do not create or churn review PRs. Candidates are
never promoted into `data/plugins.json` automatically.

The query set and request budgets live in
[`config/discovery.json`](./config/discovery.json). A maintainer can also run
`GITHUB_TOKEN=... npm run discover -- --dry-run` locally.

## What is different here

- **Immutable evidence:** every decision links to a full 40-character commit.
- **Native bundle check:** `package.json` must declare `dsh.bundle.patch` and
  the referenced patch must exist.
- **Separate facts:** structure, license, identity, compatibility, lifecycle,
  and capability signals are not collapsed into a single “safe” score.
- **Visible uncertainty:** incomplete or conflicting candidates stay in the
  hold queue instead of receiving an install recommendation.
- **No popularity theater:** stars and topic membership are discovery hints,
  not proof of trust or compatibility.

## Status model

| Status | Meaning |
| --- | --- |
| **Reviewed** | Native bundle structure was confirmed at the linked commit. Runtime behavior and security remain unverified. |
| **Held** | DSH-oriented candidate with a specific identity, structure, or compatibility blocker. |
| **Excluded** | Fixed-source evidence says it is not currently eligible as a native DSH bundle. |

## Catalog

<!-- CATALOG:START -->
Snapshot: **2026-08-16** · **44 candidates** · **37 reviewed** · **6 held** · **1 excluded**

### Reviewed native bundles

#### UI & Workspace

- **DSH WSL Workspace** · [6Mikao9/dsh-wsl-workspace@89905a8](https://github.com/6Mikao9/dsh-wsl-workspace/commit/89905a82ebbff7881b586554a72ebeb0d78f93bf) — Workspace support for using DeepSeek Harness across Windows and WSL paths.
  - **Evidence:** [manifest](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/package.json) → [patch](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/cordis.patch.yml) · **Identity:** `dsh-wsl-workspace`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem` `cross-platform-paths` · **Review:** Broad DSH peer ranges leave runtime compatibility unknown.

- **DSH Context** · [bowenliang123/dsh-context@aca38b2](https://github.com/bowenliang123/dsh-context/commit/aca38b24d714106f7256280dc8f9c9ec5b8e4552) — A context insight panel for request history, compactions, injections, model switches, and composition changes.
  - **Evidence:** [manifest](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/package.json) → [patch](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/cordis.patch.yml) · **Identity:** `dsh-context`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `session-data` `client-injection` `browser` · **Review:** The host/client bundle structure is confirmed; the prepare hook invokes Husky and the package declares no DSH peer range.

- **DSH TUI** · [ccch1mneyyy/dsh-TUI@ee83376](https://github.com/ccch1mneyyy/dsh-TUI/commit/ee83376b549814f236ea2ab90682bb8f482dc826) — A full-screen terminal client with live status, streaming thoughts, tools, approvals, and filesystem access.
  - **Evidence:** [manifest](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/package.json) → [patch](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/cordis.patch.yml) · **Identity:** `@deepseek-harness-tui/dsh-tui`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `terminal` `subprocess` `filesystem` `credentials` `broad-agent-surface` · **Review:** The bundle exposes a broad agent surface; structure confirmation is not a runtime endorsement.

- **DSH Sticky Note** · [Meredith2328/dsh-sticky-note@ebabb6c](https://github.com/Meredith2328/dsh-sticky-note/commit/ebabb6c746b1495c5f077e440d98b6665d7a61b9) — A Web sticky-note panel that saves notes and TODO items into an archive directory.
  - **Evidence:** [manifest](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/package.json) → [patch](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/cordis.patch.yml) · **Identity:** `dsh-sticky-note`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `filesystem-write` `persistent-data` `client-injection` · **Review:** The host and Web client faces are structurally confirmed; wildcard DSH peers and persistent note writes were not runtime-tested.

- **DSH Visualize** · [Nagi-ovo/dsh-visualize@e3254f7](https://github.com/Nagi-ovo/dsh-visualize/commit/e3254f762cbe4dbf796eca05d73a293f0e8e4a87) — In-conversation generative UI with streaming interactive HTML cards and sandboxed rendering.
  - **Evidence:** [manifest](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/package.json) → [patch](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · compatibility unknown
  - **Signals:** `github-only` `dynamic-content` `sandbox` · **Review:** The package is private; only GitHub-source evidence was observed.

- **DSH Annotation** · [omdsh-dev/dsh-annotation@0b0ceb6](https://github.com/omdsh-dev/dsh-annotation/commit/0b0ceb6415c5c1204b9f73716e905b392acd729b) — Adds numbered annotations to selected assistant text and carries them into the next message.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/dsh-annotation/blob/0b0ceb6415c5c1204b9f73716e905b392acd729b/package.json) → [patch](https://github.com/omdsh-dev/dsh-annotation/blob/0b0ceb6415c5c1204b9f73716e905b392acd729b/cordis.patch.yml) · **Identity:** `@omdsh-dev/dsh-annotation`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `client-injection` `conversation-data` · **Review:** The Web client injection and native bundle row are fixed-source confirmed; no DSH package peer range establishes runtime compatibility.

- **DSH Better Sidebar** · [omdsh-dev/DSH-better-sidebar@5d2d6e5](https://github.com/omdsh-dev/DSH-better-sidebar/commit/5d2d6e580143dc6ad95c015feb2909ec60afdf77) — A sidebar workbench with file editing, terminal, Git, media, and extensible tabs.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/DSH-better-sidebar/blob/5d2d6e580143dc6ad95c015feb2909ec60afdf77/package.json) → [patch](https://github.com/omdsh-dev/DSH-better-sidebar/blob/5d2d6e580143dc6ad95c015feb2909ec60afdf77/cordis.patch.yml) · **Identity:** `dsh-better-sidebar`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `terminal` `filesystem-write` `git` `native-build` `remote-installer` · **Review:** Direct package installation exists, but remote installer scripts and native builds warrant review.

- **DSH GenUI** · [omdsh-dev/dsh-genui@0e756ef](https://github.com/omdsh-dev/dsh-genui/commit/0e756efb7671e6b8413dde3d8e199c68fa89cbeb) — Interactive inline UI for layouts, charts, forms, quizzes, Mermaid, 3D scenes, and action events.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/dsh-genui/blob/0e756efb7671e6b8413dde3d8e199c68fa89cbeb/package.json) → [patch](https://github.com/omdsh-dev/dsh-genui/blob/0e756efb7671e6b8413dde3d8e199c68fa89cbeb/cordis.patch.yml) · **Identity:** `dsh-genui`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `git-source` `dynamic-content` `client-injection` `web-routes` · **Review:** Git-source install and dynamic client rendering are explicit review surfaces.

- **DSH Web UI All** · [zhu1090093659/dsh-web-ui@5153e9a](https://github.com/zhu1090093659/dsh-web-ui/commit/5153e9ad487bb597f45095503b9aa50f4faa4add) — An aggregate Web UI bundle combining task board, Git, terminal, remote UI, stats, pets, and skins.
  - **Evidence:** [manifest](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/cordis.patch.yml) · **Identity:** `@linxin666/dsh-web-ui-all`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `aggregate-scope` `terminal` `ssh` `git` `native-build` · **Review:** Broad aggregate scope and a prepare build require elevated review before use.

#### Developer Tools

- **DSH Eval Harness** · [BiBoyang/dsh-eval-harness@035d1c6](https://github.com/BiBoyang/dsh-eval-harness/commit/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693) — A headless evaluation harness for measuring agent behavior and task outcomes.
  - **Evidence:** [manifest](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/package.json) → [patch](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/cordis.patch.yml) · **Identity:** `dsh-eval-harness`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `headless` `evaluation` · **Review:** A README owner spelling defect was observed; only a broad Cordis peer is declared.

- **DSH Ops Kit** · [LeslieWylie/dsh-ops-kit@c4ba835](https://github.com/LeslieWylie/dsh-ops-kit/commit/c4ba8353cb5825c4ca971836a260ec8f9af7be83) — Operational tools and skills for development workflows inside DeepSeek Harness.
  - **Evidence:** [manifest](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/package.json) → [patch](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/cordis.patch.yml) · **Identity:** `dsh-ops-kit`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `tools` `skills` · **Review:** DSH skill and tools peers declare rc.6; runtime compatibility was not tested.

- **Archify** · [tt-a1i/archify@cffdd42](https://github.com/tt-a1i/archify/commit/cffdd42eed0ebf013aa070378d94facdd3d56b10) — Architecture knowledge and diagrams exposed to DSH through a nested integration bundle.
  - **Evidence:** [manifest](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/package.json) → [patch](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/cordis.patch.yml) · **Identity:** `@tt-a1i/archify-dsh`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `nested-bundle` `filesystem-skill` `dynamic-yaml` · **Review:** Native structure confirmed in a nested package; runtime compatibility was not tested.

- **DSH Git Graph** · [WhitePlusMS/dsh-git-graph@4e4621a](https://github.com/WhitePlusMS/dsh-git-graph/commit/4e4621aa02cd8f88e2c7dabc421d2399d10299a4) — A read-only Git graph view with refs, worktree state, search, filtering, and history pagination.
  - **Evidence:** [manifest](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/package.json) → [patch](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/cordis.patch.yml) · **Identity:** `dsh-git-graph`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `git` `workspace-read` · **Review:** Exact rc.6 DSH peers were declared; runtime compatibility was not tested.

#### Agent & Workflow

- **DSH Computer Use** · [Anionex/dsh-computer-use@76bfe86](https://github.com/Anionex/dsh-computer-use/commit/76bfe8607f61945c1cbb84e73976e601100c13a2) — Computer-use tooling for screen perception and controlled desktop actions.
  - **Evidence:** [manifest](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/package.json) → [patch](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/cordis.patch.yml) · **Identity:** `@anionex/dsh-computer-use`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `computer-use` `browser` `native-artifacts` · **Review:** Exact rc.6 DSH peers were declared; broad computer control remains a high-trust capability.

- **DSH Prompt Enhancer** · [Fishsb/dsh-prompt-enhancer@d42b2b4](https://github.com/Fishsb/dsh-prompt-enhancer/commit/d42b2b41503743a946696312b55001d6a452a0ef) — Uses an independent LLM call to rewrite draft prompts in the DSH composer with undo support.
  - **Evidence:** [manifest](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/package.json) → [patch](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/cordis.patch.yml) · **Identity:** `dsh-prompt-enhancer`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `llm-call` `client-injection` `external-network` `credentials` · **Review:** The client peers declare rc.6 and the native patch is present; prompt disclosure to a configured model and updater network behavior were not executed.

- **DSH LLM Fallbacks** · [omdsh-dev/dsh-llm-fallbacks@69ec1fe](https://github.com/omdsh-dev/dsh-llm-fallbacks/commit/69ec1fe19660cd465f610890e2f1366cd418f86c) — Adds configurable provider and model fallback chains after retry, authentication, quota, or rate-limit failures.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/package.json) → [patch](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/bundle/cordis.patch.yml) · **Identity:** `dsh-llm-fallbacks`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `llm-routing` `client-injection` `prepare-build` · **Review:** The DSH peers declare rc.6 and the fallback row is fixed-source confirmed; prepare builds code and provider switching was not runtime-tested.

#### Files & Data

- **DSH Session Export** · [bwndlct/dsh-session-export@eb18389](https://github.com/bwndlct/dsh-session-export/commit/eb18389192e36934718877fd7c6eb397f5cf1cd4) — Exports DeepSeek Harness sessions into portable files for reuse or archival.
  - **Evidence:** [manifest](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/package.json) → [patch](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/cordis.patch.yml) · **Identity:** `dsh-session-export`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `session-data` `filesystem-write` · **Review:** Command, session, and tools peers declare rc.6; exported data may contain sensitive context.

- **DSH Drag-and-Drop Upload** · [GLFzr/dsh-file-upload@54891a4](https://github.com/GLFzr/dsh-file-upload/commit/54891a4a3632900fd333c40b00e142a2b349c538) — Adds drag-and-drop uploads to the DSH Web composer and stores files in a local dropbox directory.
  - **Evidence:** [manifest](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/package.json) → [patch](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/cordis.patch.yml) · **Identity:** `dsh-file-upload`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `file-upload` `filesystem-write` `web-routes` `client-injection` · **Review:** The dual host/client bundle is structurally confirmed; upload routes and filesystem writes were not runtime-tested.

- **DSH File Upload** · [HongMing-Huang/dsh-file-upload@7aac111](https://github.com/HongMing-Huang/dsh-file-upload/commit/7aac111b00f5a3172a9fc093ec7f69bebdf65aac) — Composer file upload with removable chips, content sniffing, Markdown conversion, and document tools.
  - **Evidence:** [manifest](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/package.json) → [patch](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/cordis.patch.yml) · **Identity:** `dsh-file-upload`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `file-upload` `filesystem-write` `document-parsing` · **Review:** DSH peers declare rc.6 while Cordis is broad; runtime compatibility was not tested.

- **DSH At File** · [omdsh-dev/dsh-at-file@9c71e52](https://github.com/omdsh-dev/dsh-at-file/commit/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4) — Codex-style @file mentions that search workspace paths and attach file contents to prompts.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/package.json) → [patch](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/cordis.patch.yml) · **Identity:** `dsh-at-file`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `workspace-read` `data-disclosure` · **Review:** Workspace contents can be attached to prompts; users should review disclosure boundaries.

- **DSH Files** · [taxueseek/dsh-files@43887e2](https://github.com/taxueseek/dsh-files/commit/43887e2dca25fad9d7b23049fe1674f0af00c5cf) — File upload cards, session-scoped storage, deduplication, cleanup, and document reading tools.
  - **Evidence:** [manifest](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/package.json) → [patch](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/cordis.patch.yml) · **Identity:** `dsh-files`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `file-upload` `filesystem-write` `document-parsing` · **Review:** DSH peers declare rc.6 while Cordis is broad; repository license detection was unavailable.

#### Vision & Media

- **DSH Vision Toolkit** · [Anionex/dsh-vision-toolkit@29850a8](https://github.com/Anionex/dsh-vision-toolkit/commit/29850a83871d4b7a7cc13e251420c5a440e2f69e) — Vision tools for image Q&A, long-screenshot OCR, UI reproduction, grounding, and pixel diff.
  - **Evidence:** [manifest](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/package.json) → [patch](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/cordis.patch.yml) · **Identity:** `@anionex/dsh-vision-toolkit`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `browser` `subprocess` `credentials` `python-environment` · **Review:** High-privilege runtime preparation is visible; compatibility requires a separate check.

- **DSH Blender** · [CheshireJCat/blender@3d641da](https://github.com/CheshireJCat/blender/commit/3d641dae1c84248f213095f322f6beace0631409) — A Blender integration that exposes 3D scene authoring through DSH tools.
  - **Evidence:** [manifest](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/package.json) → [patch](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/cordis.patch.yml) · **Identity:** `dsh-blender`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `external-application` `subprocess` `setup-command` · **Review:** DSH tools rc.6 is declared; Blender execution and setup were not tested.

- **DSH Diagram** · [hanzhangzzz/dsh-diagram@480d3b3](https://github.com/hanzhangzzz/dsh-diagram/commit/480d3b3e81a583648595ec60cdcf834a8b7593cc) — Editable Excalidraw diagrams embedded in DeepSeek Harness conversations.
  - **Evidence:** [manifest](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/package.json) → [patch](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/cordis.patch.yml) · **Identity:** `dsh-diagram`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `interactive-content` · **Review:** Exact rc.6 DSH peers were declared; runtime compatibility was not tested.

- **ModLens** · [liustack/modlens@2818192](https://github.com/liustack/modlens/commit/28181920f6b064e33c6b235221e1a3a5d360a897) — A vision bridge that turns images into structured OCR, layout, and semantic evidence for text-only models.
  - **Evidence:** [manifest](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/package.json) → [patch](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/cordis.patch.yml) · **Identity:** `@liustack/modlens`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `external-network` `credentials` `external-installer` · **Review:** External vision engines and credentials are capability facts, not a safety judgment.

- **DSH Vision Router** · [ysr666/dsh-vision-router@d805a71](https://github.com/ysr666/dsh-vision-router/commit/d805a71a3de75b624c733babc422df7d0eac6403) — A vision routing bundle with image Q&A, grounding, OCR, pixel inspection, screenshots, and provider chains.
  - **Evidence:** [manifest](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/package.json) → [patch](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/cordis.patch.yml) · **Identity:** `dsh-vision-router`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `external-network` `browser` `file-upload` `filesystem-write` `native-code` · **Review:** The fixed manifest and patch declare rc.6 DSH peers; network providers, browser automation, file writes, and native image dependencies were not executed.

#### Search & Research

- **DSH Search Boost** · [Mr-remon219/dsh-search-boost@af80be8](https://github.com/Mr-remon219/dsh-search-boost/commit/af80be8b5a0da2b74511dbb74f1acce601b11bf3) — Fuses multiple Web and X search engines with page fetching and parallel research workflows.
  - **Evidence:** [manifest](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/package.json) → [patch](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/cordis.patch.yml) · **Identity:** `dsh-search-boost`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `external-network` `credentials` `subprocess` `browser` `multi-agent` · **Review:** The bundle row and search-provider override are fixed-source confirmed; external engines, credentials, subprocesses, and research fan-out were not executed.

- **DSH Web Search Exa** · [TonyDua/dsh-web-search-exa@083706b](https://github.com/TonyDua/dsh-web-search-exa/commit/083706bae60af8e1f3776b02448f17c140c3f571) — Exa-powered web search exposed to DSH as agent tools and Web settings.
  - **Evidence:** [manifest](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/package.json) → [patch](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/cordis.patch.yml) · **Identity:** `@tonydua/dsh-web-search-exa`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `external-network` `credentials` · **Review:** DSH peers declare rc.6 while the Cordis range remains rc.1; runtime was not tested.

#### Memory

- **Unified Agent Memory** · [Noelune/unified-agent-memory@b6a879c](https://github.com/Noelune/unified-agent-memory/commit/b6a879cc73364f24c08160dda2f53140c82ebec7) — A unified memory layer for retaining and retrieving agent knowledge across work.
  - **Evidence:** [manifest](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/package.json) → [patch](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/cordis.patch.yml) · **Identity:** `dsh-unified-agent-memory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `persistent-memory` · **Review:** Manifest declares DSH tools rc.6 peers; runtime compatibility was not tested.

#### Safety & Approvals

- **DSH Turn Approval** · [arrow949/dsh-turn-approval@5b4cbfd](https://github.com/arrow949/dsh-turn-approval/commit/5b4cbfd425885ed3f3ed93c796d5113847cc93b8) — Turn-scoped approval rules that expire after the current task.
  - **Evidence:** [manifest](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/package.json) → [patch](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/cordis.patch.yml) · **Identity:** `dsh-turn-approval`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `permission-control` · **Review:** Only a Cordis peer is declared, so DSH compatibility remains unknown.

- **DSH Approval LLM** · [Letter2025/dsh-approval-llm@af70355](https://github.com/Letter2025/dsh-approval-llm/commit/af70355a3c48c15f1ec8ac31c39fa279e895c168) — An LLM-assisted approval layer for evaluating sensitive tool actions.
  - **Evidence:** [manifest](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/package.json) → [patch](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/cordis.patch.yml) · **Identity:** `dsh-approval-llm`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `permission-control` `llm-call` · **Review:** Broad peer ranges leave compatibility unknown; repository license detection was unavailable.

#### Integrations

- **DSH MCP Bridge** · [Edge-Echo/dsh-mcp-bridge@7768dc3](https://github.com/Edge-Echo/dsh-mcp-bridge/commit/7768dc3d3b7d65bca896a7c4eece170cb004439e) — A bridge for exposing MCP servers and tools through a DSH Web bundle.
  - **Evidence:** [manifest](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/package.json) → [patch](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/cordis.patch.yml) · **Identity:** `dsh-mcp-bridge`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `mcp` `subprocess` `external-tools` · **Review:** Web bundle structure was confirmed; the README records a separate headless dependency limitation.

- **DSH ChatNode WeChat** · [Jesse-njx/dsh-chatnode-wechat@a724da3](https://github.com/Jesse-njx/dsh-chatnode-wechat/commit/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745) — A WeChat chat-node integration for connecting conversations to DeepSeek Harness.
  - **Evidence:** [manifest](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/package.json) → [patch](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/cordis.patch.yml) · **Identity:** `dsh-chatnode-wechat`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `external-network` `messaging` `source-build` · **Review:** A prepare build can execute on source install; rc.6 support is documented but not declared as peers.

- **DSH Codex** · [Yan-Zero/dsh-codex@621b218](https://github.com/Yan-Zero/dsh-codex/commit/621b218f51080413094bc1d16e37f37142afd89d) — Connects ChatGPT OAuth, Codex models, search, remote image reading, and image generation to DSH.
  - **Evidence:** [manifest](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/package.json) → [patch](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/cordis.patch.yml) · **Identity:** `dsh-codex`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `external-network` `credentials` `llm-call` `web-search` `image-generation` · **Review:** The fixed bundle is structurally valid; broad wildcard DSH peers and OAuth/model network access require independent compatibility and trust review.

#### Skills & Methods

- **Creght Skills** · [creght-dev/skills@5e20ab3](https://github.com/creght-dev/skills/commit/5e20ab3ab57643b2c50461d8e7007f927ff489df) — A repository of agent skills packaged with a native DSH bundle.
  - **Evidence:** [manifest](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/package.json) → [patch](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `skills` `git-source` · **Review:** No DSH peers are declared, so compatibility remains unknown.

- **Aegis** · [GanyuanRan/Aegis@21b27d2](https://github.com/GanyuanRan/Aegis/commit/21b27d23598ef492834427e2a1381b744f66b787) — A software-engineering method pack for planning, debugging, prompt hygiene, verification, and repair tracking.
  - **Evidence:** [manifest](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/package.json) → [patch](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/extensions/dsh/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-skill` `missing-package-license` · **Review:** Repository license is MIT; the fixed package manifest has no license field.

#### Discovery & Management

- **DSH Market** · [dsh-market/dsh-market@3188f46](https://github.com/dsh-market/dsh-market/commit/3188f465779d25dc2d41f53cdf21334bef517ac3) — An in-harness plugin market that can browse, install, update, and remove third-party packages.
  - **Evidence:** [manifest](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/package.json) → [patch](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/cordis.patch.yml) · **Identity:** `dshmarket`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `package-management` `remote-registry` `high-trust-surface` · **Review:** Package-manager control makes this a high-trust surface; listing is not an endorsement.

### Hold queue

These entries are relevant to DSH but do not receive install recommendations until the recorded blocker is repaired.

- **SandBase Harness** · [sandbaseai/sandbase-harness@2bb788d](https://github.com/sandbaseai/sandbase-harness/commit/2bb788d9ec847d5af8996c6f682a33f9f0734b73) — A managed-agent integration with a DSH patch example and external service credentials.
  - **Evidence:** [manifest](https://github.com/sandbaseai/sandbase-harness/blob/2bb788d9ec847d5af8996c6f682a33f9f0734b73/package.json) → [patch](https://github.com/sandbaseai/sandbase-harness/blob/2bb788d9ec847d5af8996c6f682a33f9f0734b73/examples/deepseek-harness/cordis.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · compatibility unknown
  - **Signals:** `mcp` `external-network` `credentials` `identity-collision` · **Review:** Held because the public distribution identity is ambiguous and name-colliding.

- **DSH Agent Teams** · [NanmiCoder/dsh-agent-teams@99b1e8a](https://github.com/NanmiCoder/dsh-agent-teams/commit/99b1e8a01b15eaca74f8adc3e8730db18f8d3912) — Team-style agent orchestration with persisted state and child-process coordination.
  - **Evidence:** [manifest](https://github.com/NanmiCoder/dsh-agent-teams/blob/99b1e8a01b15eaca74f8adc3e8730db18f8d3912/package.json) → [patch](https://github.com/NanmiCoder/dsh-agent-teams/blob/99b1e8a01b15eaca74f8adc3e8730db18f8d3912/cordis.patch.yml) · **Identity:** `@nanmicoder/dsh-agent-teams`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · behind rc.6 baseline
  - **Signals:** `subprocess` `filesystem-write` `stale-peer-range` · **Review:** Held because most declared DSH peer ranges target rc.1 rather than the rc.6 review baseline.

- **DSH Memory Evolve** · [csyangwen/dsh-memory-evolve@ce7f0fa](https://github.com/csyangwen/dsh-memory-evolve/commit/ce7f0faa0e0240f117c29795e9224c0d9ed18183) — A DSH-oriented memory and orchestration client whose fixed manifest lacks a native bundle declaration.
  - **Evidence:** [manifest](https://github.com/csyangwen/dsh-memory-evolve/blob/ce7f0faa0e0240f117c29795e9224c0d9ed18183/package.json) → no patch · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `missing-bundle` `private-package` `external-ai` · **Review:** Held because dsh.client is present but dsh.bundle and a referenced patch are absent.

- **DSH GitHub Login** · [Noob-stupid/dsh-github-login@0057f05](https://github.com/Noob-stupid/dsh-github-login/commit/0057f05396bb8eaf2c64505a8f50f905c50f0126) — A GitHub login integration whose package name and patch row identity disagree.
  - **Evidence:** [manifest](https://github.com/Noob-stupid/dsh-github-login/blob/0057f05396bb8eaf2c64505a8f50f905c50f0126/package.json) → [patch](https://github.com/Noob-stupid/dsh-github-login/blob/0057f05396bb8eaf2c64505a8f50f905c50f0126/cordis.patch.yml) · **Identity:** `dsh-github-login`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `identity-mismatch` `authentication` `private-package` · **Review:** Held until dsh-github-login and @deepseek-ai/dsh-github-login are aligned and rechecked.

- **DSH Find Plugin** · [awesome-dsh-plugin/dsh-find-plugin@e75dc2e](https://github.com/awesome-dsh-plugin/dsh-find-plugin/commit/e75dc2e865c3cfbfd336f7b4bb753fec25d373e1) — An agent tool for searching the DSH plugin ecosystem from inside a conversation.
  - **Evidence:** [manifest](https://github.com/awesome-dsh-plugin/dsh-find-plugin/blob/e75dc2e865c3cfbfd336f7b4bb753fec25d373e1/package.json) → [patch](https://github.com/awesome-dsh-plugin/dsh-find-plugin/blob/e75dc2e865c3cfbfd336f7b4bb753fec25d373e1/cordis.patch.yml) · **Identity:** `dsh-find-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · behind rc.6 baseline
  - **Signals:** `external-network` `stale-peer-range` · **Review:** Held because @deepseek-ai/dsh-tools still targets rc.1 rather than the rc.6 review baseline.

- **Tydora** · [zuorn/Tydora@23c4546](https://github.com/zuorn/Tydora/commit/23c45464a280876ad85317edbd9cbe517157872c) — A Tauri Markdown workspace containing an embedded DSH bundle entry.
  - **Evidence:** [manifest](https://github.com/zuorn/Tydora/blob/23c45464a280876ad85317edbd9cbe517157872c/package.json) → [patch](https://github.com/zuorn/Tydora/blob/23c45464a280876ad85317edbd9cbe517157872c/cordis.patch.yml) · **Identity:** `tydora`
  - **Licenses:** repo `Apache-2.0` / package `unknown` · lifecycle `postinstall` · compatibility unknown
  - **Signals:** `embedded-source` `external-application` `filesystem` `subprocess` · **Review:** Held because the root package is a desktop application, the patch loads local TypeScript source, postinstall runs patch-package, and a separate install identity was not confirmed.

### Excluded after review

- **DSH Project Organizer** · [caoqinnan-web/dsh-project-organizer@1bfb6d0](https://github.com/caoqinnan-web/dsh-project-organizer/commit/1bfb6d08f8be66aaebeec9062463682504364f9d) — A conversation organizer whose fixed documentation says DSH is not currently supported.
  - **Evidence:** [manifest](https://github.com/caoqinnan-web/dsh-project-organizer/blob/1bfb6d08f8be66aaebeec9062463682504364f9d/package.json) → [patch](https://github.com/caoqinnan-web/dsh-project-organizer/blob/1bfb6d08f8be66aaebeec9062463682504364f9d/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · author says unsupported
  - **Signals:** `deprecated-package` `author-retracted-support` · **Review:** Excluded because the author says DSH installation is not recommended and npm versions are deprecated.
<!-- CATALOG:END -->

## How reviews work

The minimum evidence chain is:

```text
repository@full-commit
  → package.json::dsh.bundle.patch
  → referenced patch exists
  → package identity + license + lifecycle facts
  → reviewed / held / excluded
```

Read the complete [methodology](./docs/METHODOLOGY.md), the
[review log](./docs/REVIEW_LOG.md), or the machine-readable
[catalog](./data/plugins.json).

The review baseline follows DeepSeek Harness's own bundle contract: a bundle
declares `dsh.bundle`, and a profile composes ordered bundles. The current
catalog deliberately does not convert README snippets into copy-paste install
commands because floating branches, dist-tags, and Git sources can change or
execute build hooks.

## Contributing

Plugin authors and reviewers are welcome. Start with
[CONTRIBUTING.md](./CONTRIBUTING.md) and use the plugin-submission issue form.
A submission needs an immutable commit, manifest path, referenced patch path,
license evidence, package identity, and disclosed lifecycle/capability signals.

Run the local checks before opening a pull request:

```bash
npm run check
```

## Scope and attribution

This project is independent and is not affiliated with or endorsed by
DeepSeek. Initial discovery used the public `dsh-plugin` topic and the
CC0-licensed Awesome DeepSeek Harness Plugin list. Inclusion here is an
editorial record of source facts at one commit, not an endorsement.

## License

[MIT](./LICENSE)
