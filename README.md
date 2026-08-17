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
Snapshot: **2026-08-18** · **345 candidates** · **285 reviewed** · **59 held** · **1 excluded**

### Reviewed native bundles

#### UI & Workspace

- **DSH Progress Viz** · [2008924/dsh-progress-viz@0be31d8](https://github.com/2008924/dsh-progress-viz/commit/0be31d89bff49807991ded4e0be0d6db83f76810) — A headless-session progress plugin that writes live stage and timeline JSON for a local dashboard.
  - **Evidence:** [manifest](https://github.com/2008924/dsh-progress-viz/blob/0be31d89bff49807991ded4e0be0d6db83f76810/plugin/package.json) → [patch](https://github.com/2008924/dsh-progress-viz/blob/0be31d89bff49807991ded4e0be0d6db83f76810/plugin/cordis.patch.yml) · **Identity:** `dsh-progress-viz-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `session-events` `filesystem-write` `progress-data` `headless` `local-install` · **Review:** The nested plugin documents a local profile install and rc.6 session peer; no event stream or progress file was read or written.

- **DSH WSL Workspace** · [6Mikao9/dsh-wsl-workspace@89905a8](https://github.com/6Mikao9/dsh-wsl-workspace/commit/89905a82ebbff7881b586554a72ebeb0d78f93bf) — Workspace support for using DeepSeek Harness across Windows and WSL paths.
  - **Evidence:** [manifest](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/package.json) → [patch](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/cordis.patch.yml) · **Identity:** `dsh-wsl-workspace`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem` `cross-platform-paths` · **Review:** Broad DSH peer ranges leave runtime compatibility unknown.

- **DSH Toolbox Web** · [AbcdefgXW/dsh-toolbox-web@322c260](https://github.com/AbcdefgXW/dsh-toolbox-web/commit/322c2602a98cac7521af147b9becb78bb332303b) — A Web toolbox for session, trash, workspace-directory, search, preset, configuration, archive, and scheduled-heartbeat management.
  - **Evidence:** [manifest](https://github.com/AbcdefgXW/dsh-toolbox-web/blob/322c2602a98cac7521af147b9becb78bb332303b/package.json) → [patch](https://github.com/AbcdefgXW/dsh-toolbox-web/blob/322c2602a98cac7521af147b9becb78bb332303b/cordis.patch.yml) · **Identity:** `dsh-toolbox-web`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `filesystem-write` `scheduled-tasks` `external-messaging` `client-injection` · **Review:** The public package maps to this repository; session and configuration writes plus optional IM heartbeat delivery are visible and were not executed.

- **DSH Effort** · [AI-Galaxy-GPU/dsh-effort@edbb063](https://github.com/AI-Galaxy-GPU/dsh-effort/commit/edbb063eefb05e33aa970a4b9ec8cbaad08e8641) — Adds a Web control for selecting the current session model's supported reasoning-effort level.
  - **Evidence:** [manifest](https://github.com/AI-Galaxy-GPU/dsh-effort/blob/edbb063eefb05e33aa970a4b9ec8cbaad08e8641/package.json) → [patch](https://github.com/AI-Galaxy-GPU/dsh-effort/blob/edbb063eefb05e33aa970a4b9ec8cbaad08e8641/cordis.patch.yml) · **Identity:** `dsh-effort`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `model-selection` `client-injection` `local-storage` · **Review:** The fixed source uses session model RPCs and browser storage; the repository has no detected license file and declares no DSH peer range.

- **DSH Sound** · [AI-Galaxy-GPU/dsh-sound@f5f25dc](https://github.com/AI-Galaxy-GPU/dsh-sound/commit/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32) — Plays configurable browser sounds for task completion, approvals, questions, plan review, blocking, and failures.
  - **Evidence:** [manifest](https://github.com/AI-Galaxy-GPU/dsh-sound/blob/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32/package.json) → [patch](https://github.com/AI-Galaxy-GPU/dsh-sound/blob/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32/cordis.patch.yml) · **Identity:** `dsh-sound`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-events` `local-file` `browser-storage` `client-injection` · **Review:** The fixed source stores configuration in localStorage and audio in IndexedDB; the documented npm target currently exposes no published version and no runtime behavior was tested.

- **DSH Plugin Desktop** · [anywhere-labs/deepseek-harness-desktop@77c7f96](https://github.com/anywhere-labs/deepseek-harness-desktop/commit/77c7f9609a24ec42775831c9a2ffd783c2ccae79) — An Electron desktop shell composed as a DSH Cordis plugin with terminal, profile, diagnostics, and update surfaces.
  - **Evidence:** [manifest](https://github.com/anywhere-labs/deepseek-harness-desktop/blob/77c7f9609a24ec42775831c9a2ffd783c2ccae79/dsh-plugin-desktop/package.json) → [patch](https://github.com/anywhere-labs/deepseek-harness-desktop/blob/77c7f9609a24ec42775831c9a2ffd783c2ccae79/dsh-plugin-desktop/cordis.patch.yml) · **Identity:** `dsh-plugin-desktop`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `desktop-shell` `electron` `terminal` `filesystem-write` `auto-update` `prepack-build` · **Review:** The fixed source is 2.0.1 while npm exposes 2.0.0 from the same repository; desktop, terminal, updater, filesystem, and prepack behavior were not executed.

- **DSH Context** · [bowenliang123/dsh-context@aca38b2](https://github.com/bowenliang123/dsh-context/commit/aca38b24d714106f7256280dc8f9c9ec5b8e4552) — A context insight panel for request history, compactions, injections, model switches, and composition changes.
  - **Evidence:** [manifest](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/package.json) → [patch](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/cordis.patch.yml) · **Identity:** `dsh-context`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `session-data` `client-injection` `browser` · **Review:** The host/client bundle structure is confirmed; the prepare hook invokes Husky and the package declares no DSH peer range.

- **DSH Stop Server** · [caozhikun/dsh-stop-server@baa9b9c](https://github.com/caozhikun/dsh-stop-server/commit/baa9b9cbc10e947486ae530c1c8fed5a61a314d4) — Adds a Web action that calls a host shutdown route to stop the DSH process and close the current interface.
  - **Evidence:** [manifest](https://github.com/caozhikun/dsh-stop-server/blob/baa9b9cbc10e947486ae530c1c8fed5a61a314d4/package.json) → [patch](https://github.com/caozhikun/dsh-stop-server/blob/baa9b9cbc10e947486ae530c1c8fed5a61a314d4/cordis.patch.yml) · **Identity:** `dsh-stop-server`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `process-exit` `web-route` `client-injection` · **Review:** The fixed host source registers a shutdown route with appExit, process.exit, and SIGTERM fallbacks; the repository has no detected license file and shutdown was not executed.

- **Captain DSH Web UI All** · [CAPTAIN1275/dsh-ui-web@04422dd](https://github.com/CAPTAIN1275/dsh-ui-web/commit/04422dd2d447044537f404747adbc7c0c8a86cd4) — An aggregate Web UI bundle for task boards, Git views, pets, remote access, live statistics, settings, and bundled skins.
  - **Evidence:** [manifest](https://github.com/CAPTAIN1275/dsh-ui-web/blob/04422dd2d447044537f404747adbc7c0c8a86cd4/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/CAPTAIN1275/dsh-ui-web/blob/04422dd2d447044537f404747adbc7c0c8a86cd4/packages/dsh-web-ui-all/cordis.patch.yml) · **Identity:** `@captain1275/dsh-web-ui-all`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · compatibility unknown
  - **Signals:** `aggregate-scope` `remote-access` `filesystem-write` `git` `client-injection` · **Review:** The public aggregate identity maps to this repository and represents its component candidates; broad remote, file, Git, session, and UI surfaces were not executed.

- **DSH TUI** · [ccch1mneyyy/dsh-TUI@ee83376](https://github.com/ccch1mneyyy/dsh-TUI/commit/ee83376b549814f236ea2ab90682bb8f482dc826) — A full-screen terminal client with live status, streaming thoughts, tools, approvals, and filesystem access.
  - **Evidence:** [manifest](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/package.json) → [patch](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/cordis.patch.yml) · **Identity:** `@deepseek-harness-tui/dsh-tui`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `terminal` `subprocess` `filesystem` `credentials` `broad-agent-surface` · **Review:** The bundle exposes a broad agent surface; structure confirmation is not a runtime endorsement.

- **DSH Cerrda Theme** · [Cerrda/dsh-cerrda-theme@7390edf](https://github.com/Cerrda/dsh-cerrda-theme/commit/7390edfc7c49314de944dffbc306a255d5c574d8) — A dark rose and purple visual theme for DSH Web with a custom composer and animated background.
  - **Evidence:** [manifest](https://github.com/Cerrda/dsh-cerrda-theme/blob/7390edfc7c49314de944dffbc306a255d5c574d8/package.json) → [patch](https://github.com/Cerrda/dsh-cerrda-theme/blob/7390edfc7c49314de944dffbc306a255d5c574d8/cordis.patch.yml) · **Identity:** `dsh-cerrda-theme`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `web-theme` `client-injection` `webgl` `npm-package` · **Review:** The fixed source is 0.1.0 while npm exposes 0.1.1 from the same repository; no CSS, fonts, animation, or WebGL behavior was loaded.

- **DSH Sticky Notes** · [charrywhite/dsh-sticky-notes@e2653fc](https://github.com/charrywhite/dsh-sticky-notes/commit/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851) — A persistent sticky-note panel with host-side JSON storage, browser UI, and model-facing note tools.
  - **Evidence:** [manifest](https://github.com/charrywhite/dsh-sticky-notes/blob/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851/package.json) → [patch](https://github.com/charrywhite/dsh-sticky-notes/blob/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-write` `web-route` `client-injection` `model-tools` `private-package` · **Review:** Local-link and source installation are documented for the private package; note storage, HTTP routes, and model tools were not exercised.

- **Castorice Theme** · [chemicalcat250/dsh-theme-castorice@c55e467](https://github.com/chemicalcat250/dsh-theme-castorice/commit/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2) — Applies a violet dark Castorice-inspired visual theme to the DSH Web interface.
  - **Evidence:** [manifest](https://github.com/chemicalcat250/dsh-theme-castorice/blob/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2/package.json) → [patch](https://github.com/chemicalcat250/dsh-theme-castorice/blob/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2/cordis.patch.yml) · **Identity:** `dsh-theme-castorice`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `client-injection` `theme` `browser-storage` · **Review:** GitHub-source installation is documented and the client code injects theme styles and browser preferences; it was not loaded in a browser.

- **DSH DeepSeek Balance** · [Choi-Peng/dsh-deepseek-balance@45d7444](https://github.com/Choi-Peng/dsh-deepseek-balance/commit/45d7444b67c65bea2aee5b18e0ffefd25f0f23e1) — Displays DeepSeek account balance and editable warning thresholds in the DSH Web sidebar.
  - **Evidence:** [manifest](https://github.com/Choi-Peng/dsh-deepseek-balance/blob/45d7444b67c65bea2aee5b18e0ffefd25f0f23e1/package.json) → [patch](https://github.com/Choi-Peng/dsh-deepseek-balance/blob/45d7444b67c65bea2aee5b18e0ffefd25f0f23e1/cordis.patch.yml) · **Identity:** `@choi-p/dsh-deepseek-balance`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `account-balance` `credentials` `external-network` `settings-write` `web-ui` · **Review:** The fixed source is 0.3.2 while npm exposes 0.3.1 from the same repository; balance requests and profile setting writes were not executed.

- **DSH DeepCompute** · [cipher2026/dsh-idle-deepcompute@619dbef](https://github.com/cipher2026/dsh-idle-deepcompute/commit/619dbef0d002073f7276769d24de7b1a7b24c59f) — A terminal-styled idle laboratory game embedded as a full-width DSH Web page.
  - **Evidence:** [manifest](https://github.com/cipher2026/dsh-idle-deepcompute/blob/619dbef0d002073f7276769d24de7b1a7b24c59f/package.json) → [patch](https://github.com/cipher2026/dsh-idle-deepcompute/blob/619dbef0d002073f7276769d24de7b1a7b24c59f/cordis.patch.yml) · **Identity:** `dsh-deepcompute`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · compatibility unknown
  - **Signals:** `web-ui` `idle-game` `client-injection` `github-only` · **Review:** The repository documents a commit-pinnable GitHub install; no client module, game state, or browser storage behavior was loaded.

- **DSH Browser Notify** · [classfieldseason-cmd/dsh-notify-plugin@8f386ca](https://github.com/classfieldseason-cmd/dsh-notify-plugin/commit/8f386ca5d66e8549119466c4a2ede15154aad577) — Shows browser desktop notifications when a DSH conversation turn completes.
  - **Evidence:** [manifest](https://github.com/classfieldseason-cmd/dsh-notify-plugin/blob/8f386ca5d66e8549119466c4a2ede15154aad577/package.json) → [patch](https://github.com/classfieldseason-cmd/dsh-notify-plugin/blob/8f386ca5d66e8549119466c4a2ede15154aad577/cordis.patch.yml) · **Identity:** `dsh-browser-notify-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `browser-notification` `session-events` `client-injection` · **Review:** The public package identity matches this repository and the client listens for session completion before calling the browser Notification API; no notification was triggered.

- **DSH Glassmorphism** · [czw63/dsh-glassmorphism@e1f0466](https://github.com/czw63/dsh-glassmorphism/commit/e1f0466dac2dbbd1dc4e9f465f8819436672e648) — Adds a mobile-aware liquid-glass theme with optional wallpaper, blur, and refraction effects.
  - **Evidence:** [manifest](https://github.com/czw63/dsh-glassmorphism/blob/e1f0466dac2dbbd1dc4e9f465f8819436672e648/package.json) → [patch](https://github.com/czw63/dsh-glassmorphism/blob/e1f0466dac2dbbd1dc4e9f465f8819436672e648/cordis.patch.yml) · **Identity:** `@local/dsh-glass-theme`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `client-injection` `theme` `browser-storage` · **Review:** A local-file installation path is documented and the client stores visual preferences in the browser; no style bundle was loaded.

- **DSH Delete Session** · [dream12347/dsh-delete-session@e0f052a](https://github.com/dream12347/dsh-delete-session/commit/e0f052ac7cff776df72cdc58e8c42c94a1843c55) — A Web session manager for trash, restore, permanent deletion, archived sessions, activity statistics, pause, and log-folder access.
  - **Evidence:** [manifest](https://github.com/dream12347/dsh-delete-session/blob/e0f052ac7cff776df72cdc58e8c42c94a1843c55/package.json) → [patch](https://github.com/dream12347/dsh-delete-session/blob/e0f052ac7cff776df72cdc58e8c42c94a1843c55/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `session-data` `filesystem-delete` `archive-registry` `client-injection` `browser-storage` · **Review:** Pinned GitHub installation and rc.6 peers are documented; destructive session and workspace actions remain user-triggered and were not executed.

- **DSH Unarchive** · [edfrey0044/dsh-unarchive@52a5194](https://github.com/edfrey0044/dsh-unarchive/commit/52a51946f9b48c1f97eb965b3050aab124355d51) — Restores archived DSH sessions through a command and tool that update the global archive registry.
  - **Evidence:** [manifest](https://github.com/edfrey0044/dsh-unarchive/blob/52a51946f9b48c1f97eb965b3050aab124355d51/package.json) → [patch](https://github.com/edfrey0044/dsh-unarchive/blob/52a51946f9b48c1f97eb965b3050aab124355d51/cordis.patch.yml) · **Identity:** `dsh-unarchive`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `session-data` `archive-registry` `workspace-state` · **Review:** Git-source installation is documented and the bundle removes session identifiers from the global archive set; no registry or session state was changed.

- **DSH OpenCode Palette** · [FeatherHunter/dsh-opencode-palette@4c3660a](https://github.com/FeatherHunter/dsh-opencode-palette/commit/4c3660a40229f3e661dd8cb7e67610b2d932e575) — Adds a persistent selector for dozens of OpenCode-inspired color themes in the DSH Web interface.
  - **Evidence:** [manifest](https://github.com/FeatherHunter/dsh-opencode-palette/blob/4c3660a40229f3e661dd8cb7e67610b2d932e575/package/package.json) → [patch](https://github.com/FeatherHunter/dsh-opencode-palette/blob/4c3660a40229f3e661dd8cb7e67610b2d932e575/package/cordis.patch.yml) · **Identity:** `dsh-opencode-palette`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `client-injection` `theme` `browser-storage` · **Review:** The fixed source version is older than the observed registry release but maps to the same public identity; theme injection and persistent browser settings were not executed.

- **DeepSeek Harness Wallet** · [feibi-mochi/deepseek-harness-control-center@1a3b34b](https://github.com/feibi-mochi/deepseek-harness-control-center/commit/1a3b34b2b421344e608d9e30079621bff727d515) — A local-first account, usage, recharge, completion, layout, and session control center for DSH Web.
  - **Evidence:** [manifest](https://github.com/feibi-mochi/deepseek-harness-control-center/blob/1a3b34b2b421344e608d9e30079621bff727d515/package.json) → [patch](https://github.com/feibi-mochi/deepseek-harness-control-center/blob/1a3b34b2b421344e608d9e30079621bff727d515/cordis.patch.yml) · **Identity:** `deepseek-harness-wallet`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `account-balance` `usage-accounting` `credentials` `external-network` `session-control` `web-ui` · **Review:** The fixed source and npm identity both expose 0.1.4 from the same repository; no credential request, accounting, recharge link, notification, or session action was executed.

- **StyleVault** · [GptsApp/dsh-stylevault@26eee2d](https://github.com/GptsApp/dsh-stylevault/commit/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8) — A theme vault with configurable styles and shareable appearance packs for DSH Web.
  - **Evidence:** [manifest](https://github.com/GptsApp/dsh-stylevault/blob/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8/package.json) → [patch](https://github.com/GptsApp/dsh-stylevault/blob/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `theme` `client-injection` `browser-storage` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH OMC TUI** · [ipromise2021/dsh-omc-tui@d2307dc](https://github.com/ipromise2021/dsh-omc-tui/commit/d2307dc2b2fe057fcbb82be245da394214c7865f) — A keyboard-first terminal interface that composes DSH sessions, approvals, jobs, tools, skills, and model selection.
  - **Evidence:** [manifest](https://github.com/ipromise2021/dsh-omc-tui/blob/d2307dc2b2fe057fcbb82be245da394214c7865f/package.json) → [patch](https://github.com/ipromise2021/dsh-omc-tui/blob/d2307dc2b2fe057fcbb82be245da394214c7865f/cordis.patch.yml) · **Identity:** `dsh-omc-tui`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `terminal-ui` `session-control` `approvals` `model-tools` `profile-overrides` `github-only` · **Review:** The patch replaces several base tool and prompt rows to compose the TUI; no terminal, profile override, session, approval, or tool was run.

- **DSH RPG Workstation** · [Jay-R-J/dsh-rpg-workstation@84fc0de](https://github.com/Jay-R-J/dsh-rpg-workstation/commit/84fc0dec315470f4ede619223a79d2f64e103515) — Adds conversation XP, levels, achievements, streaks, and a floating RPG dashboard to DSH Web.
  - **Evidence:** [manifest](https://github.com/Jay-R-J/dsh-rpg-workstation/blob/84fc0dec315470f4ede619223a79d2f64e103515/package.json) → [patch](https://github.com/Jay-R-J/dsh-rpg-workstation/blob/84fc0dec315470f4ede619223a79d2f64e103515/cordis.patch.yml) · **Identity:** `dsh-rpg-workstation`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `gamification` `session-events` `filesystem-write` `web-ui` `npm-package` `prepublish-build` · **Review:** The fixed source matches npm 0.3.0; no build, session event, XP state, filesystem write, or dashboard rendering was executed.

- **DSH Session Admin** · [Jemius/dsh-session-manager@191a1f3](https://github.com/Jemius/dsh-session-manager/commit/191a1f3a991a3ff0b1694e18ec6486b4ddb81d03) — Adds archive, restore, export, and permanent deletion controls for DSH sessions.
  - **Evidence:** [manifest](https://github.com/Jemius/dsh-session-manager/blob/191a1f3a991a3ff0b1694e18ec6486b4ddb81d03/package.json) → [patch](https://github.com/Jemius/dsh-session-manager/blob/191a1f3a991a3ff0b1694e18ec6486b4ddb81d03/cordis.patch.yml) · **Identity:** `dsh-session-admin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `session-archive` `session-delete` `data-export` `web-ui` `prepare-build` `repository-renamed` · **Review:** GitHub confirms dsh-session-manager redirects to the same repository ID now named dsh-session-admin; the fixed source is 0.1.2 while npm exposes 0.1.3, and no session mutation was executed.

- **DSH Balance Bubble** · [Jescoi/dsh-balance-bubble@dbfaef5](https://github.com/Jescoi/dsh-balance-bubble/commit/dbfaef5ea65ac380833bbc7c6f6423e69ef595e2) — A persistent floating DeepSeek account-balance bubble backed by a host endpoint.
  - **Evidence:** [manifest](https://github.com/Jescoi/dsh-balance-bubble/blob/dbfaef5ea65ac380833bbc7c6f6423e69ef595e2/package.json) → [patch](https://github.com/Jescoi/dsh-balance-bubble/blob/dbfaef5ea65ac380833bbc7c6f6423e69ef595e2/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `account-balance` `credentials` `local-web-server` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **La Feng UI** · [JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-.@bfd81d8](https://github.com/JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-./commit/bfd81d879daf3dd899f7db67f2e6c33f88a7460d) — A customizable Web UI pack with skins, animated wallpapers, music, audio visualization, and personas.
  - **Evidence:** [manifest](https://github.com/JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-./blob/bfd81d879daf3dd899f7db67f2e6c33f88a7460d/package.json) → [patch](https://github.com/JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-./blob/bfd81d879daf3dd899f7db67f2e6c33f88a7460d/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `theme` `audio` `client-injection` `browser-storage` `persona` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Survey** · [jinhuang712/dsh-survey@9f36ef1](https://github.com/jinhuang712/dsh-survey/commit/9f36ef12e23607e6ad8a11853931c7c83d0e1d7a) — A model tool and rich Web form for multi-question surveys, skips, Markdown answers, and recaps.
  - **Evidence:** [manifest](https://github.com/jinhuang712/dsh-survey/blob/9f36ef12e23607e6ad8a11853931c7c83d0e1d7a/package.json) → [patch](https://github.com/jinhuang712/dsh-survey/blob/9f36ef12e23607e6ad8a11853931c7c83d0e1d7a/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `model-tools` `interactive-form` `session-data` `client-injection` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Memes** · [kagura-agent/dsh-memes@68a528d](https://github.com/kagura-agent/dsh-memes/commit/68a528d1c6d710a801d2402c8b86ecc0cced40f0) — Lets agents select reaction media by semantic tags and render it in DSH conversations.
  - **Evidence:** [manifest](https://github.com/kagura-agent/dsh-memes/blob/68a528d1c6d710a801d2402c8b86ecc0cced40f0/package.json) → [patch](https://github.com/kagura-agent/dsh-memes/blob/68a528d1c6d710a801d2402c8b86ecc0cced40f0/cordis.patch.yml) · **Identity:** `dsh-memes`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `media-picker` `model-tools` `external-media` `web-ui` `github-only` · **Review:** Plugin code is MIT but reaction media is fetched from a separate library under its own source rights; no tag fetch, selection, or media render was executed.

- **DSH Bottom Bar** · [kc0ed/dsh-bottom-bar@01d8433](https://github.com/kc0ed/dsh-bottom-bar/commit/01d843306e7d3f0819b9e8ac28f0478be2b2d801) — A configurable input-footer statistics row with cost estimates and a persistent local usage ledger.
  - **Evidence:** [manifest](https://github.com/kc0ed/dsh-bottom-bar/blob/01d843306e7d3f0819b9e8ac28f0478be2b2d801/package.json) → [patch](https://github.com/kc0ed/dsh-bottom-bar/blob/01d843306e7d3f0819b9e8ac28f0478be2b2d801/cordis.patch.yml) · **Identity:** `@kc0ed/dsh-bottom-bar`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `token-meter` `cost-estimation` `browser-storage` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH WhaleGirl** · [KLnormal/dsh_whalegirl@6cf1b30](https://github.com/KLnormal/dsh_whalegirl/commit/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf) — A desktop-native animated companion driven by DSH session events.
  - **Evidence:** [manifest](https://github.com/KLnormal/dsh_whalegirl/blob/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf/package.json) → [patch](https://github.com/KLnormal/dsh_whalegirl/blob/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `SEE LICENSE IN ASSET_LICENSE.md` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-app` `session-data` `audio` `subprocess` `external-model-download` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Bell Notify** · [Laplace-bit/dsh-bell-notify@943e178](https://github.com/Laplace-bit/dsh-bell-notify/commit/943e178bd7bdc15628fdcfc5125e058cc0974dee) — Synthesized Web Audio bells and status cues for agent lifecycle events.
  - **Evidence:** [manifest](https://github.com/Laplace-bit/dsh-bell-notify/blob/943e178bd7bdc15628fdcfc5125e058cc0974dee/package.json) → [patch](https://github.com/Laplace-bit/dsh-bell-notify/blob/943e178bd7bdc15628fdcfc5125e058cc0974dee/cordis.patch.yml) · **Identity:** `dsh-bell-notify`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `audio` `agent-events` `client-injection` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Client UI Android** · [LeMonXi-i/dsh-client-ui-android@2dccd80](https://github.com/LeMonXi-i/dsh-client-ui-android/commit/2dccd8033f7510233510b916da9502ef0bc9bb1d) — Adds Android detection and a touch-first responsive layout to the DSH Web interface.
  - **Evidence:** [manifest](https://github.com/LeMonXi-i/dsh-client-ui-android/blob/2dccd8033f7510233510b916da9502ef0bc9bb1d/package.json) → [patch](https://github.com/LeMonXi-i/dsh-client-ui-android/blob/2dccd8033f7510233510b916da9502ef0bc9bb1d/cordis.patch.yml) · **Identity:** `dsh-client-ui-android`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `mobile-layout` `android` `client-injection` `responsive-ui` `github-only` · **Review:** The fixed source documents npm and GitHub installation but npm has no matching package; no user-agent detection, layout mutation, or browser rendering was executed.

- **DSH Keyboard** · [lhf6623/dsh-keyboard@4ecb1b7](https://github.com/lhf6623/dsh-keyboard/commit/4ecb1b77a2b1900331d6ce003f6047e8ed3ad198) — An on-screen keyboard and mouse visualizer that highlights live input events.
  - **Evidence:** [manifest](https://github.com/lhf6623/dsh-keyboard/blob/4ecb1b77a2b1900331d6ce003f6047e8ed3ad198/package.json) → [patch](https://github.com/lhf6623/dsh-keyboard/blob/4ecb1b77a2b1900331d6ce003f6047e8ed3ad198/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `input-events` `client-injection` `keyboard-visualizer` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Neu Theme** · [Lhy723/dsh-neu-theme@c6ecbe4](https://github.com/Lhy723/dsh-neu-theme/commit/c6ecbe421298b0e89791655b153cfb3287a5c522) — A light and dark neumorphic theme for DSH Web.
  - **Evidence:** [manifest](https://github.com/Lhy723/dsh-neu-theme/blob/c6ecbe421298b0e89791655b153cfb3287a5c522/package.json) → [patch](https://github.com/Lhy723/dsh-neu-theme/blob/c6ecbe421298b0e89791655b153cfb3287a5c522/cordis.patch.yml) · **Identity:** `dsh-neu-theme`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `theme` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Prompt Recall** · [liguanyu/dsh_PromptRecall@6040210](https://github.com/liguanyu/dsh_PromptRecall/commit/6040210ed1895a093060395eb61337a45baba712) — Codex-style up and down history recall for the Web prompt input.
  - **Evidence:** [manifest](https://github.com/liguanyu/dsh_PromptRecall/blob/6040210ed1895a093060395eb61337a45baba712/package.json) → [patch](https://github.com/liguanyu/dsh_PromptRecall/blob/6040210ed1895a093060395eb61337a45baba712/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `input-history` `client-injection` `browser-storage` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **My Better DSH** · [lilwhich/my_better-dsh@b903e95](https://github.com/lilwhich/my_better-dsh/commit/b903e955d4e735eccc9d519c4345d072f53904ae) — A beginner-oriented Web bundle combining file navigation, session tools, UI packs, checkpoints, and global settings.
  - **Evidence:** [manifest](https://github.com/lilwhich/my_better-dsh/blob/b903e955d4e735eccc9d519c4345d072f53904ae/package.json) → [patch](https://github.com/lilwhich/my_better-dsh/blob/b903e955d4e735eccc9d519c4345d072f53904ae/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `aggregate-bundle` `filesystem-write` `session-data` `client-injection` `configuration-edit` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Frosted Glass** · [makuralymi/dsh-webUI-Glass-Theme@9822e4a](https://github.com/makuralymi/dsh-webUI-Glass-Theme/commit/9822e4a4d6c4e700da2520c47a37d1da87692764) — A global frosted-glass theme with animated light/dark switching and scheduling.
  - **Evidence:** [manifest](https://github.com/makuralymi/dsh-webUI-Glass-Theme/blob/9822e4a4d6c4e700da2520c47a37d1da87692764/package.json) → [patch](https://github.com/makuralymi/dsh-webUI-Glass-Theme/blob/9822e4a4d6c4e700da2520c47a37d1da87692764/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `theme` `client-injection` `timer` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH CoT Summarization** · [MeowLynxSea/dsh-cot-summerization@dd69071](https://github.com/MeowLynxSea/dsh-cot-summerization/commit/dd69071e134a797a574ded3d576a36fa4ce31272) — Hides raw reasoning and displays a summary generated through a configurable Chat Completions endpoint.
  - **Evidence:** [manifest](https://github.com/MeowLynxSea/dsh-cot-summerization/blob/dd69071e134a797a574ded3d576a36fa4ce31272/package.json) → [patch](https://github.com/MeowLynxSea/dsh-cot-summerization/blob/dd69071e134a797a574ded3d576a36fa4ce31272/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `reasoning-data` `external-network` `credentials` `model-request` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Sticky Note** · [Meredith2328/dsh-sticky-note@ebabb6c](https://github.com/Meredith2328/dsh-sticky-note/commit/ebabb6c746b1495c5f077e440d98b6665d7a61b9) — A Web sticky-note panel that saves notes and TODO items into an archive directory.
  - **Evidence:** [manifest](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/package.json) → [patch](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/cordis.patch.yml) · **Identity:** `dsh-sticky-note`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `filesystem-write` `persistent-data` `client-injection` · **Review:** The host and Web client faces are structurally confirmed; wildcard DSH peers and persistent note writes were not runtime-tested.

- **DSH Visualize** · [Nagi-ovo/dsh-visualize@e3254f7](https://github.com/Nagi-ovo/dsh-visualize/commit/e3254f762cbe4dbf796eca05d73a293f0e8e4a87) — In-conversation generative UI with streaming interactive HTML cards and sandboxed rendering.
  - **Evidence:** [manifest](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/package.json) → [patch](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · compatibility unknown
  - **Signals:** `github-only` `dynamic-content` `sandbox` · **Review:** The package is private; only GitHub-source evidence was observed.

- **DSH Pet Whale** · [nzl153/dsh-pet-whale@952551a](https://github.com/nzl153/dsh-pet-whale/commit/952551ac1268617eb8ceffdf4e16751bfd645eb3) — A Web desktop whale pet whose animation reacts to agent state.
  - **Evidence:** [manifest](https://github.com/nzl153/dsh-pet-whale/blob/952551ac1268617eb8ceffdf4e16751bfd645eb3/package.json) → [patch](https://github.com/nzl153/dsh-pet-whale/blob/952551ac1268617eb8ceffdf4e16751bfd645eb3/cordis.patch.yml) · **Identity:** `pet-whale`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-pet` `agent-events` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

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

- **DSH Task Control** · [p2coder/dsh-task-control@a20e79b](https://github.com/p2coder/dsh-task-control/commit/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339) — Composer controls for pausing, resuming, or cancelling the active conversation task.
  - **Evidence:** [manifest](https://github.com/p2coder/dsh-task-control/blob/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339/package.json) → [patch](https://github.com/p2coder/dsh-task-control/blob/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `task-control` `session-data` `client-injection` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Harness UI Enhancer** · [Physicolor/harness-ui-enhancer@3357651](https://github.com/Physicolor/harness-ui-enhancer/commit/3357651927f22bc5913d2fa09199660212484488) — Polishes DSH Web styles and exposes live controls for layout scale, typography, and chat width.
  - **Evidence:** [manifest](https://github.com/Physicolor/harness-ui-enhancer/blob/3357651927f22bc5913d2fa09199660212484488/package.json) → [patch](https://github.com/Physicolor/harness-ui-enhancer/blob/3357651927f22bc5913d2fa09199660212484488/cordis.patch.yml) · **Identity:** `harness-ui-enhancer`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `client-injection` `theme` `settings-write` `browser-storage` `prepare-build` · **Review:** The fixed source and npm identity both expose 0.4.0 from the same repository; no prepare build, style injection, setting write, or browser rendering was executed.

- **DSH BigFish** · [QCYTSN/dsh-dafeiyu@fba38c1](https://github.com/QCYTSN/dsh-dafeiyu/commit/fba38c18da2d275333691986763b4914e533b6b3) — A desktop-native BigFish companion driven by DSH session events.
  - **Evidence:** [manifest](https://github.com/QCYTSN/dsh-dafeiyu/blob/fba38c18da2d275333691986763b4914e533b6b3/package.json) → [patch](https://github.com/QCYTSN/dsh-dafeiyu/blob/fba38c18da2d275333691986763b4914e533b6b3/cordis.patch.yml) · **Identity:** `dsh-dafeiyu`
  - **Licenses:** repo `MIT` / package `SEE LICENSE IN ASSET_LICENSE.md` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-app` `session-data` `audio` `subprocess` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **MyPet** · [qiqikuaidianpao/mypet@f9de0bf](https://github.com/qiqikuaidianpao/mypet/commit/f9de0bfa15b3a461187d637ddc3e1f6037b84b58) — A browser Tamagotchi-style pet that reacts to coding sessions, levels up, and collects skins.
  - **Evidence:** [manifest](https://github.com/qiqikuaidianpao/mypet/blob/f9de0bfa15b3a461187d637ddc3e1f6037b84b58/package.json) → [patch](https://github.com/qiqikuaidianpao/mypet/blob/f9de0bfa15b3a461187d637ddc3e1f6037b84b58/cordis.patch.yml) · **Identity:** `mypet`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `desktop-pet` `session-data` `browser-storage` `client-injection` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Rhine Lab Theme** · [ReLuckyLucy/dsh_Rhine_Lab_themo@54c2f26](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_themo/commit/54c2f2611f6bc6e36a784cc33908ad29bccef2b7) — A reversible Arknights Rhine Lab archive-terminal theme for DSH Web.
  - **Evidence:** [manifest](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_themo/blob/54c2f2611f6bc6e36a784cc33908ad29bccef2b7/package.json) → [patch](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_themo/blob/54c2f2611f6bc6e36a784cc33908ad29bccef2b7/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `theme` `client-injection` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Codex Pet** · [skr311/dsh-codex-pet@6aa7b86](https://github.com/skr311/dsh-codex-pet/commit/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d) — Imports sprite-sheet pets and renders them as agent-state-linked Web overlays.
  - **Evidence:** [manifest](https://github.com/skr311/dsh-codex-pet/blob/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d/packages/dsh-codex-pet/package.json) → [patch](https://github.com/skr311/dsh-codex-pet/blob/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d/packages/dsh-codex-pet/cordis.patch.yml) · **Identity:** `dsh-codex-pet`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-pet` `image-assets` `agent-events` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Worktime Board** · [spacexun2/dsh-worktime-board@8fe6243](https://github.com/spacexun2/dsh-worktime-board/commit/8fe62434514e7d4aff3668da08f10c1280111ae7) — Daily, weekly, monthly, and academic-calendar work-time statistics with a cultivation-style progression system.
  - **Evidence:** [manifest](https://github.com/spacexun2/dsh-worktime-board/blob/8fe62434514e7d4aff3668da08f10c1280111ae7/package.json) → [patch](https://github.com/spacexun2/dsh-worktime-board/blob/8fe62434514e7d4aff3668da08f10c1280111ae7/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · mixed peer ranges
  - **Signals:** `time-tracking` `gamification` `client-injection` `browser-storage` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Message Index** · [stnt04/dsh-msg-index@8b9834b](https://github.com/stnt04/dsh-msg-index/commit/8b9834bd97067531b3a030fa3461a371945a450f) — A floating frosted control that indexes user messages and jumps to them in the current session.
  - **Evidence:** [manifest](https://github.com/stnt04/dsh-msg-index/blob/8b9834bd97067531b3a030fa3461a371945a450f/package.json) → [patch](https://github.com/stnt04/dsh-msg-index/blob/8b9834bd97067531b3a030fa3461a371945a450f/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `message-navigation` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Picture in Picture** · [syncended/deepseek-harness-picture-in-picture@591e7d1](https://github.com/syncended/deepseek-harness-picture-in-picture/commit/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20) — A picture-in-picture mini chat surface for DSH Web.
  - **Evidence:** [manifest](https://github.com/syncended/deepseek-harness-picture-in-picture/blob/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20/package.json) → [patch](https://github.com/syncended/deepseek-harness-picture-in-picture/blob/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20/cordis.patch.yml) · **Identity:** `@syncended/dsh-pip`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `picture-in-picture` `session-data` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH macOS Desktop** · [Taylor-Cat/dsh-macos-desktop@c56f308](https://github.com/Taylor-Cat/dsh-macos-desktop/commit/c56f308014b8bda509c36bd80e8475b0bd1026d0) — A retro System 7 and Mac OS 9 desktop shell containing chat, files, terminal, browser, docs, and knowledge views.
  - **Evidence:** [manifest](https://github.com/Taylor-Cat/dsh-macos-desktop/blob/c56f308014b8bda509c36bd80e8475b0bd1026d0/package.json) → [patch](https://github.com/Taylor-Cat/dsh-macos-desktop/blob/c56f308014b8bda509c36bd80e8475b0bd1026d0/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-shell` `terminal` `filesystem-read` `client-injection` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Pet Companion** · [ToBeWin/DSH-Pet-Companion@53fc630](https://github.com/ToBeWin/DSH-Pet-Companion/commit/53fc630ecb186169622f0ebca5267aae125484dc) — Adds animated local-only desktop pets to DSH Web using artwork bundled by the author.
  - **Evidence:** [manifest](https://github.com/ToBeWin/DSH-Pet-Companion/blob/53fc630ecb186169622f0ebca5267aae125484dc/package.json) → [patch](https://github.com/ToBeWin/DSH-Pet-Companion/blob/53fc630ecb186169622f0ebca5267aae125484dc/cordis.patch.yml) · **Identity:** `@tobewin/dsh-pet-companion`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `desktop-pet` `bundled-media` `client-injection` `browser-storage` `prepack-build` `github-only` · **Review:** The unpublished package documents a fixed GitHub source install and describes its bundled pet artwork as original; no build, media load, browser state, or animation was executed.

- **DSH Conversation Nav** · [UlaBe/dsh-conversation-nav@df424f6](https://github.com/UlaBe/dsh-conversation-nav/commit/df424f663deb86fd8e8868c65aa650b1283f2e14) — A right-edge drawer that lists user messages and jumps to their positions in the conversation.
  - **Evidence:** [manifest](https://github.com/UlaBe/dsh-conversation-nav/blob/df424f663deb86fd8e8868c65aa650b1283f2e14/package.json) → [patch](https://github.com/UlaBe/dsh-conversation-nav/blob/df424f663deb86fd8e8868c65aa650b1283f2e14/cordis.patch.yml) · **Identity:** `@ulabe/dsh-conversation-nav`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `message-navigation` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Archived Chats** · [Ultronen/dsh-archived-chats@8a6912e](https://github.com/Ultronen/dsh-archived-chats/commit/8a6912e1f39f992e2d8bdf955b456b01e8927948) — A settings page for browsing, searching, restoring, and deleting archived sessions by workspace.
  - **Evidence:** [manifest](https://github.com/Ultronen/dsh-archived-chats/blob/8a6912e1f39f992e2d8bdf955b456b01e8927948/package.json) → [patch](https://github.com/Ultronen/dsh-archived-chats/blob/8a6912e1f39f992e2d8bdf955b456b01e8927948/cordis.patch.yml) · **Identity:** `dsh-archived-chats`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `archive-registry` `filesystem-delete` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Unarchive** · [uwu9039/dsh-unarchive@5f10e58](https://github.com/uwu9039/dsh-unarchive/commit/5f10e58188d808a12414ff134216f87fdb2d2ca9) — An archived-session recycle bin with previews, restoration, and optional archive confirmation.
  - **Evidence:** [manifest](https://github.com/uwu9039/dsh-unarchive/blob/5f10e58188d808a12414ff134216f87fdb2d2ca9/package.json) → [patch](https://github.com/uwu9039/dsh-unarchive/blob/5f10e58188d808a12414ff134216f87fdb2d2ca9/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `archive-registry` `filesystem-write` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Chatflow Rail** · [veritas501/dsh-chatflow-rail@485a978](https://github.com/veritas501/dsh-chatflow-rail/commit/485a978e34d9847005036acba80347d4fc249d13) — A left-side conversation-flow rail with position navigation and a docked previous-message card.
  - **Evidence:** [manifest](https://github.com/veritas501/dsh-chatflow-rail/blob/485a978e34d9847005036acba80347d4fc249d13/package.json) → [patch](https://github.com/veritas501/dsh-chatflow-rail/blob/485a978e34d9847005036acba80347d4fc249d13/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `session-data` `message-navigation` `client-injection` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Compact Activity** · [wallpap/dsh-compact-activity@6ef1278](https://github.com/wallpap/dsh-compact-activity/commit/6ef1278f453f8428866402f5658d7a62565dbb0a) — Codex-style one-line disclosures for reasoning and tool activity.
  - **Evidence:** [manifest](https://github.com/wallpap/dsh-compact-activity/blob/6ef1278f453f8428866402f5658d7a62565dbb0a/package.json) → [patch](https://github.com/wallpap/dsh-compact-activity/blob/6ef1278f453f8428866402f5658d7a62565dbb0a/cordis.patch.yml) · **Identity:** `dsh-compact-activity`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `reasoning-data` `tool-activity` `client-injection` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Billing Community Bundle** · [Wanbinyu/dsh-billing@198e54d](https://github.com/Wanbinyu/dsh-billing/commit/198e54d5cb8a1cc28aecda97d41cd0fe1d4f5ff7) — Aggregates host-side billing projections and a DSH Web usage and cost interface.
  - **Evidence:** [manifest](https://github.com/Wanbinyu/dsh-billing/blob/198e54d5cb8a1cc28aecda97d41cd0fe1d4f5ff7/package.json) → [patch](https://github.com/Wanbinyu/dsh-billing/blob/198e54d5cb8a1cc28aecda97d41cd0fe1d4f5ff7/cordis.patch.yml) · **Identity:** `dsh-billing-community-bundle`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `billing-data` `usage-accounting` `session-data` `filesystem-write` `client-injection` `github-only` · **Review:** The repository provides a fixed GitHub aggregate bundle over local component packages; no build, session projection, ledger write, or browser UI was executed.

- **DSH Achievements** · [WJNCT55555/dsh-achievements@ce6ceb3](https://github.com/WJNCT55555/dsh-achievements/commit/ce6ceb3f3231648565cadcd598edbe50e41eda26) — A Web achievement gallery with toasts, trophies, dock integration, crossovers, and opt-in anonymous statistics.
  - **Evidence:** [manifest](https://github.com/WJNCT55555/dsh-achievements/blob/ce6ceb3f3231648565cadcd598edbe50e41eda26/package.json) → [patch](https://github.com/WJNCT55555/dsh-achievements/blob/ce6ceb3f3231648565cadcd598edbe50e41eda26/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `gamification` `client-injection` `browser-storage` `optional-telemetry` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Model Balance** · [wycto/dsh-model-balance@79e0903](https://github.com/wycto/dsh-model-balance/commit/79e0903093378f49713f4650fa827cc66690737f) — Displays balances for configured model providers in a DSH Web sidebar panel.
  - **Evidence:** [manifest](https://github.com/wycto/dsh-model-balance/blob/79e0903093378f49713f4650fa827cc66690737f/package.json) → [patch](https://github.com/wycto/dsh-model-balance/blob/79e0903093378f49713f4650fa827cc66690737f/cordis.patch.yml) · **Identity:** `@wycto/dsh-balance-panel`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `account-balance` `credentials` `external-network` `custom-endpoints` `web-route` `client-injection` · **Review:** The fixed source and npm identity both expose 0.1.1 from the same repository; no credential resolution, provider request, custom endpoint, or browser panel was executed.

- **DSH Session Timeline** · [XiLuovo/dsh-session-timeline@55f3268](https://github.com/XiLuovo/dsh-session-timeline/commit/55f32688719aaf918de7e4bfe5099d9282309acb) — A collapsible conversation timeline with scroll tracking, message jumps, and preview tooltips.
  - **Evidence:** [manifest](https://github.com/XiLuovo/dsh-session-timeline/blob/55f32688719aaf918de7e4bfe5099d9282309acb/package.json) → [patch](https://github.com/XiLuovo/dsh-session-timeline/blob/55f32688719aaf918de7e4bfe5099d9282309acb/cordis.patch.yml) · **Identity:** `dsh-session-timeline`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `session-data` `message-navigation` `scroll-spy` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Context Panel** · [zhangxiang1993621/dsh-context-panel@aa2c80c](https://github.com/zhangxiang1993621/dsh-context-panel/commit/aa2c80c02a02af9ace46e22adb504ace45bdca8b) — Displays skills, rules, and files used by the active conversation inside a layout pane.
  - **Evidence:** [manifest](https://github.com/zhangxiang1993621/dsh-context-panel/blob/aa2c80c02a02af9ace46e22adb504ace45bdca8b/package.json) → [patch](https://github.com/zhangxiang1993621/dsh-context-panel/blob/aa2c80c02a02af9ace46e22adb504ace45bdca8b/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `filesystem-read` `client-injection` `local-install` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Web UI All** · [zhu1090093659/dsh-web-ui@5153e9a](https://github.com/zhu1090093659/dsh-web-ui/commit/5153e9ad487bb597f45095503b9aa50f4faa4add) — An aggregate Web UI bundle combining task board, Git, terminal, remote UI, stats, pets, and skins.
  - **Evidence:** [manifest](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/cordis.patch.yml) · **Identity:** `@linxin666/dsh-web-ui-all`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `aggregate-scope` `terminal` `ssh` `git` `native-build` · **Review:** Broad aggregate scope and a prepare build require elevated review before use.

#### Developer Tools

- **DSH Request Flight Recorder** · [abinzhao/dsh-request-flight-recorder@319e3bf](https://github.com/abinzhao/dsh-request-flight-recorder/commit/319e3bf0981b5cb03352c7c97cd94c75f37cefb0) — Records bounded content-free diagnostics for request timing, streaming phases, failures, and session correlation.
  - **Evidence:** [manifest](https://github.com/abinzhao/dsh-request-flight-recorder/blob/319e3bf0981b5cb03352c7c97cd94c75f37cefb0/package.json) → [patch](https://github.com/abinzhao/dsh-request-flight-recorder/blob/319e3bf0981b5cb03352c7c97cd94c75f37cefb0/cordis.patch.yml) · **Identity:** `dsh-request-flight-recorder`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `request-metadata` `session-data` `stream-diagnostics` `client-injection` · **Review:** Exact rc.6 DSH peers and the native bundle are fixed-source confirmed; privacy properties, timing hooks, and the prepack build were not runtime-tested.

- **DSH Python Tempfile Shim** · [AngelosZou/dsh-python-tempfile-shim@20b84cd](https://github.com/AngelosZou/dsh-python-tempfile-shim/commit/20b84cdc91516fbf51a782214ba8d88a3f083d34) — A temporary Windows sandbox shim that injects a local sitecustomize path into confined Python command process trees.
  - **Evidence:** [manifest](https://github.com/AngelosZou/dsh-python-tempfile-shim/blob/20b84cdc91516fbf51a782214ba8d88a3f083d34/package.json) → [patch](https://github.com/AngelosZou/dsh-python-tempfile-shim/blob/20b84cdc91516fbf51a782214ba8d88a3f083d34/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `windows-only` `environment-injection` `shell-runtime` `python-environment` `github-only` · **Review:** The author documents local-clone installation and removal after an upstream fix; no shell resolver, environment, or Python process was modified.

- **DSH Eval Harness** · [BiBoyang/dsh-eval-harness@035d1c6](https://github.com/BiBoyang/dsh-eval-harness/commit/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693) — A headless evaluation harness for measuring agent behavior and task outcomes.
  - **Evidence:** [manifest](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/package.json) → [patch](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/cordis.patch.yml) · **Identity:** `dsh-eval-harness`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `headless` `evaluation` · **Review:** A README owner spelling defect was observed; only a broad Cordis peer is declared.

- **DSH Change Center** · [Chance-Wu/dsh-change-center@fbe60fc](https://github.com/Chance-Wu/dsh-change-center/commit/fbe60fc21757ff36249c5609d6fe615db5c9b544) — Captures tool-driven file changes for diff review, verification, rollback, and optional Git staging or publication.
  - **Evidence:** [manifest](https://github.com/Chance-Wu/dsh-change-center/blob/fbe60fc21757ff36249c5609d6fe615db5c9b544/package.json) → [patch](https://github.com/Chance-Wu/dsh-change-center/blob/fbe60fc21757ff36249c5609d6fe615db5c9b544/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `filesystem-write` `git-write` `session-data` `tool-results` `llm-review` `high-trust-surface` · **Review:** The fixed source can persist file-change evidence, apply or roll back edits, and invoke Git add, commit, and push; no filesystem, Git, or model action was executed.

- **DSH Reviewer Bot** · [chaojixinren/dsh-reviewer-bot@77228ae](https://github.com/chaojixinren/dsh-reviewer-bot/commit/77228ae61cda1c621b84edbeb330d5e223047434) — Automates repository review workflows across GitHub and GitLab with configurable trust, diagnostics, and write controls.
  - **Evidence:** [manifest](https://github.com/chaojixinren/dsh-reviewer-bot/blob/77228ae61cda1c621b84edbeb330d5e223047434/bundle/package.json) → [patch](https://github.com/chaojixinren/dsh-reviewer-bot/blob/77228ae61cda1c621b84edbeb330d5e223047434/bundle/cordis.patch.yml) · **Identity:** `@dshrb/bundle`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `credentials` `external-network` `repository-write` `subprocess` `ci-data` `review-automation` · **Review:** The bundle declares exact DSH rc.6 compatibility and supports forge credentials plus optional repository writes; its automation, subprocesses, and remote calls were not executed.

- **DSH EasySSH Workspace** · [chenw2759-wq/dsh-IDE@607ff87](https://github.com/chenw2759-wq/dsh-IDE/commit/607ff875e8220c0c4069b37bfe60d76288bdea03) — An SSH workspace mode that routes file and subprocess operations to remote hosts while exposing remote browsing and agent tools.
  - **Evidence:** [manifest](https://github.com/chenw2759-wq/dsh-IDE/blob/607ff875e8220c0c4069b37bfe60d76288bdea03/packages/dsh-easyssh/package.json) → [patch](https://github.com/chenw2759-wq/dsh-IDE/blob/607ff875e8220c0c4069b37bfe60d76288bdea03/packages/dsh-easyssh/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `ssh` `credentials` `remote-execution` `filesystem-write` `prepare-build` · **Review:** Source-link installation and exact rc.6 peers are documented; remote mode bypasses the local kernel sandbox, and no credential, SSH, SFTP, or process action was executed.

- **DSH Git Ops** · [codehz/dsh-git-ops@bab93cf](https://github.com/codehz/dsh-git-ops/commit/bab93cf93dfb38d050e8fa6f0c3081551ff491be) — Adds Git recommendations, local branch switching, status and diff views, and agent intent shortcuts.
  - **Evidence:** [manifest](https://github.com/codehz/dsh-git-ops/blob/bab93cf93dfb38d050e8fa6f0c3081551ff491be/package.json) → [patch](https://github.com/codehz/dsh-git-ops/blob/bab93cf93dfb38d050e8fa6f0c3081551ff491be/cordis.patch.yml) · **Identity:** `dsh-git-ops`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `git-read` `git-write` `branch-switch` `subprocess` `client-injection` `agent-intent` · **Review:** The fixed source invokes Git through the DSH subprocess surface and can stage changes or switch branches; no command or UI action was executed.

- **Arch Doc** · [duyanta123/arch-doc@76fcfaf](https://github.com/duyanta123/arch-doc/commit/76fcfafada67c6eaa25c86769271eae19dcc4132) — A filesystem skill that analyzes a codebase and produces architecture documentation for modules, dependencies, entry points, and run methods.
  - **Evidence:** [manifest](https://github.com/duyanta123/arch-doc/blob/76fcfafada67c6eaa25c86769271eae19dcc4132/package.json) → [patch](https://github.com/duyanta123/arch-doc/blob/76fcfafada67c6eaa25c86769271eae19dcc4132/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-read` `filesystem-write` `code-analysis` `documentation-generation` `github-only` · **Review:** Pinned GitHub installation is documented; the wildcard skill-filesystem peer leaves compatibility unproven, and no codebase was read or documented.

- **DSH Workbench** · [ghbhiee/dsh-plugins@2017411](https://github.com/ghbhiee/dsh-plugins/commit/2017411fca73e4294335eb25ea1ddaf6a5cb986b) — A browser workbench combining a terminal, file explorer, and file preview.
  - **Evidence:** [manifest](https://github.com/ghbhiee/dsh-plugins/blob/2017411fca73e4294335eb25ea1ddaf6a5cb986b/packages/workbench/package.json) → [patch](https://github.com/ghbhiee/dsh-plugins/blob/2017411fca73e4294335eb25ea1ddaf6a5cb986b/packages/workbench/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `terminal` `subprocess` `filesystem-read` `filesystem-write` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Console** · [Isanti2016/dsh-console@8d31014](https://github.com/Isanti2016/dsh-console/commit/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4) — Console commands for Web service and SSH-tunnel management, one-shot prompts, and TUI launch.
  - **Evidence:** [manifest](https://github.com/Isanti2016/dsh-console/blob/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4/package.json) → [patch](https://github.com/Isanti2016/dsh-console/blob/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4/cordis.patch.yml) · **Identity:** `dsh-console`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `command-line` `ssh` `subprocess` `service-management` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Ops Kit** · [LeslieWylie/dsh-ops-kit@c4ba835](https://github.com/LeslieWylie/dsh-ops-kit/commit/c4ba8353cb5825c4ca971836a260ec8f9af7be83) — Operational tools and skills for development workflows inside DeepSeek Harness.
  - **Evidence:** [manifest](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/package.json) → [patch](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/cordis.patch.yml) · **Identity:** `dsh-ops-kit`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `tools` `skills` · **Review:** DSH skill and tools peers declare rc.6; runtime compatibility was not tested.

- **DSH Proxy Config** · [lhf6623/dsh-proxy-config@e3d5934](https://github.com/lhf6623/dsh-proxy-config/commit/e3d5934d62884170af6fe36fdac8cb1ebb1cd5e3) — A settings panel that persists HTTP or SOCKS proxy values into the host process environment.
  - **Evidence:** [manifest](https://github.com/lhf6623/dsh-proxy-config/blob/e3d5934d62884170af6fe36fdac8cb1ebb1cd5e3/package.json) → [patch](https://github.com/lhf6623/dsh-proxy-config/blob/e3d5934d62884170af6fe36fdac8cb1ebb1cd5e3/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `proxy` `process-environment` `configuration-write` `credentials` `subprocess` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH SCNet** · [lql341/dsh-scnet@24070df](https://github.com/lql341/dsh-scnet/commit/24070dfb9aa00c9707683b0bf68000198c8b32dc) — SSH and Slurm tooling for SCNet and similar domestic HPC clusters.
  - **Evidence:** [manifest](https://github.com/lql341/dsh-scnet/blob/24070dfb9aa00c9707683b0bf68000198c8b32dc/package.json) → [patch](https://github.com/lql341/dsh-scnet/blob/24070dfb9aa00c9707683b0bf68000198c8b32dc/cordis.patch.yml) · **Identity:** `dsh-scnet`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `ssh` `hpc` `remote-execution` `filesystem-write` `subprocess` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Bash Terminal** · [MAXeaglet/dsh-bash-terminal@6894913](https://github.com/MAXeaglet/dsh-bash-terminal/commit/6894913d71098f2ea24120d3a1afd5771f9ccd4a) — A Windows shell tool that routes commands through PowerShell, Git Bash, or WSL with a configurable default.
  - **Evidence:** [manifest](https://github.com/MAXeaglet/dsh-bash-terminal/blob/6894913d71098f2ea24120d3a1afd5771f9ccd4a/package.json) → [patch](https://github.com/MAXeaglet/dsh-bash-terminal/blob/6894913d71098f2ea24120d3a1afd5771f9ccd4a/cordis.patch.yml) · **Identity:** `dsh-bash-terminal`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `subprocess` `shell` `windows` `configuration-write` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Large Project Performance** · [orangeofcarl0-sys/dsh-large-proj-perf@cb957b4](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/commit/cb957b4c3dfdf39c762f8912c3463c34a652287e) — Large-session optimizations for fork initialization, projection warming, cache refill, materialization, LRU pruning, and heap detection.
  - **Evidence:** [manifest](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/blob/cb957b4c3dfdf39c762f8912c3463c34a652287e/package.json) → [patch](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/blob/cb957b4c3dfdf39c762f8912c3463c34a652287e/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `performance-patch` `session-data` `cache` `memory-management` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH UE Assets Operator** · [QSWWLTN/dsh-UEAssetsOperator@2dbb683](https://github.com/QSWWLTN/dsh-UEAssetsOperator/commit/2dbb6833c9b7e556131dbbe05b070a7e0f535576) — Native tools for Unreal Engine uasset inspection and Blueprint edits through built-in UE Python.
  - **Evidence:** [manifest](https://github.com/QSWWLTN/dsh-UEAssetsOperator/blob/2dbb6833c9b7e556131dbbe05b070a7e0f535576/package.json) → [patch](https://github.com/QSWWLTN/dsh-UEAssetsOperator/blob/2dbb6833c9b7e556131dbbe05b070a7e0f535576/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `unreal-engine` `asset-inspection` `filesystem-write` `subprocess` `python` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH NeoForge** · [r05En1cU/dsh-neoforge@7bbee40](https://github.com/r05En1cU/dsh-neoforge/commit/7bbee4096ecf563aab5cfff29c4b65f5d36790aa) — A plugin API layer with runtime mixins, snapshot and restore, and a Cordis-native event bus.
  - **Evidence:** [manifest](https://github.com/r05En1cU/dsh-neoforge/blob/7bbee4096ecf563aab5cfff29c4b65f5d36790aa/package.json) → [patch](https://github.com/r05En1cU/dsh-neoforge/blob/7bbee4096ecf563aab5cfff29c4b65f5d36790aa/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `plugin-api` `runtime-mixin` `snapshot` `event-bus` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Structured Output** · [royenheart/dsh-plugin-structured-output@1116e33](https://github.com/royenheart/dsh-plugin-structured-output/commit/1116e33d7dc06267e54acc2b310f79399b22ea18) — JSON Schema structured-output tools, a command, and native result validation.
  - **Evidence:** [manifest](https://github.com/royenheart/dsh-plugin-structured-output/blob/1116e33d7dc06267e54acc2b310f79399b22ea18/package.json) → [patch](https://github.com/royenheart/dsh-plugin-structured-output/blob/1116e33d7dc06267e54acc2b310f79399b22ea18/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `structured-output` `json-schema` `model-tools` `validation` `local-installer` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Restart Systemd** · [RoyougiShiki/dsh-restart-systemd@90ab7ea](https://github.com/RoyougiShiki/dsh-restart-systemd/commit/90ab7ea416e50a49861130d9e329b3af9a349746) — A Web and command trigger for safely restarting a user systemd service and resuming the session.
  - **Evidence:** [manifest](https://github.com/RoyougiShiki/dsh-restart-systemd/blob/90ab7ea416e50a49861130d9e329b3af9a349746/package.json) → [patch](https://github.com/RoyougiShiki/dsh-restart-systemd/blob/90ab7ea416e50a49861130d9e329b3af9a349746/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `service-restart` `systemd` `subprocess` `session-data` `local-install` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Code IDE** · [SakalioLabs/dsh-code-ide@51d49f4](https://github.com/SakalioLabs/dsh-code-ide/commit/51d49f405a4e0d28592b6add36548fe0c28b68fa) — Adds an optional browser IDE with file editing, search, terminals, and language-aware CodeMirror surfaces.
  - **Evidence:** [manifest](https://github.com/SakalioLabs/dsh-code-ide/blob/51d49f405a4e0d28592b6add36548fe0c28b68fa/package.json) → [patch](https://github.com/SakalioLabs/dsh-code-ide/blob/51d49f405a4e0d28592b6add36548fe0c28b68fa/cordis.patch.yml) · **Identity:** `dsh-code-ide`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-read` `filesystem-write` `terminal` `subprocess` `native-dependencies` `websocket` `client-injection` `alpha-release` `github-only` · **Review:** The alpha bundle has a fixed GitHub identity and native terminal, ripgrep, FFI, and browser surfaces; none was built, installed, or executed.

- **DSH Lean** · [sjh9714/dsh-lean@df646af](https://github.com/sjh9714/dsh-lean/commit/df646af7ab39c12cf0024874f5ebe466f683153c) — Audits prompt-prefix token usage and proposes reductions to lower model cost.
  - **Evidence:** [manifest](https://github.com/sjh9714/dsh-lean/blob/df646af7ab39c12cf0024874f5ebe466f683153c/package.json) → [patch](https://github.com/sjh9714/dsh-lean/blob/df646af7ab39c12cf0024874f5ebe466f683153c/cordis.patch.yml) · **Identity:** `dsh-lean`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `token-audit` `cost-optimization` `prompt-analysis` `filesystem-read` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Minimal PowerShell** · [skydog221/dsh-minimal-powershell@aa53185](https://github.com/skydog221/dsh-minimal-powershell/commit/aa53185e4d69d97dcb3107dd15ea1dafd992c673) — Keeps minimal-mode shell calls working through PowerShell on Windows.
  - **Evidence:** [manifest](https://github.com/skydog221/dsh-minimal-powershell/blob/aa53185e4d69d97dcb3107dd15ea1dafd992c673/package.json) → [patch](https://github.com/skydog221/dsh-minimal-powershell/blob/aa53185e4d69d97dcb3107dd15ea1dafd992c673/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `powershell` `shell` `sandbox-policy` `windows` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Vimina** · [Sunse666/dsh-vimina@85b04c9](https://github.com/Sunse666/dsh-vimina/commit/85b04c969d6af8a6a1c3f70a4a9387b477a0042b) — Exposes Windows GUI scanning, input, screenshots, windows, mouse, and VMA scripting through native tools.
  - **Evidence:** [manifest](https://github.com/Sunse666/dsh-vimina/blob/85b04c969d6af8a6a1c3f70a4a9387b477a0042b/package.json) → [patch](https://github.com/Sunse666/dsh-vimina/blob/85b04c969d6af8a6a1c3f70a4a9387b477a0042b/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `gui-automation` `windows` `subprocess` `screenshot` `model-tools` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Git** · [taontech/dsh-git@bbe81b5](https://github.com/taontech/dsh-git/commit/bbe81b59264f8daf4f7b5abd53960bde7420a8b4) — A Git tab for repository status, history, branches, initialization, and operations.
  - **Evidence:** [manifest](https://github.com/taontech/dsh-git/blob/bbe81b59264f8daf4f7b5abd53960bde7420a8b4/package.json) → [patch](https://github.com/taontech/dsh-git/blob/bbe81b59264f8daf4f7b5abd53960bde7420a8b4/cordis.patch.yml) · **Identity:** `@taontech/dsh-git`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `git` `filesystem-write` `subprocess` `client-injection` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Archify** · [tt-a1i/archify@cffdd42](https://github.com/tt-a1i/archify/commit/cffdd42eed0ebf013aa070378d94facdd3d56b10) — Architecture knowledge and diagrams exposed to DSH through a nested integration bundle.
  - **Evidence:** [manifest](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/package.json) → [patch](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/cordis.patch.yml) · **Identity:** `@tt-a1i/archify-dsh`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `nested-bundle` `filesystem-skill` `dynamic-yaml` · **Review:** Native structure confirmed in a nested package; runtime compatibility was not tested.

- **DSH Plugin Git Inspect** · [Wanbinyu/dsh-plugin-git-inspect@51e98c3](https://github.com/Wanbinyu/dsh-plugin-git-inspect/commit/51e98c3780fe29e92c029d8359a22adf1ddf8c23) — Exposes read-only Git status, diff, log, branch, and repository inspection tools to DSH.
  - **Evidence:** [manifest](https://github.com/Wanbinyu/dsh-plugin-git-inspect/blob/51e98c3780fe29e92c029d8359a22adf1ddf8c23/package.json) → [patch](https://github.com/Wanbinyu/dsh-plugin-git-inspect/blob/51e98c3780fe29e92c029d8359a22adf1ddf8c23/cordis.patch.yml) · **Identity:** `dsh-plugin-git-inspect`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · mixed peer ranges
  - **Signals:** `git-read` `subprocess` `filesystem-read` `model-tools` `prepare-build` `github-only` · **Review:** The fixed GitHub bundle invokes Git through the DSH subprocess service and accepts rc.5 through rc.6 peers; no prepare build, command, or tool was executed.

- **DSH Git Graph** · [WhitePlusMS/dsh-git-graph@4e4621a](https://github.com/WhitePlusMS/dsh-git-graph/commit/4e4621aa02cd8f88e2c7dabc421d2399d10299a4) — A read-only Git graph view with refs, worktree state, search, filtering, and history pagination.
  - **Evidence:** [manifest](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/package.json) → [patch](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/cordis.patch.yml) · **Identity:** `dsh-git-graph`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `git` `workspace-read` · **Review:** Exact rc.6 DSH peers were declared; runtime compatibility was not tested.

- **DSH Git Worktree** · [wloops/dsh-git-worktree@17945c5](https://github.com/wloops/dsh-git-worktree/commit/17945c59ea7a574e27acb6d41591222722a7f1b1) — Experimental worktree-backed session targets with isolated sessions, review views, confirmed delivery, and cleanup.
  - **Evidence:** [manifest](https://github.com/wloops/dsh-git-worktree/blob/17945c59ea7a574e27acb6d41591222722a7f1b1/package.json) → [patch](https://github.com/wloops/dsh-git-worktree/blob/17945c59ea7a574e27acb6d41591222722a7f1b1/cordis.patch.yml) · **Identity:** `dsh-git-worktree`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `git-worktree` `session-data` `approval-gate` `filesystem-delete` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Hooks Ordering** · [xinyuehtx/dsh-plugin-hooks-ordering@3f9f79f](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering/commit/3f9f79ff1162782a74ebe425e15bf5d84df8895a) — Coordinates deterministic before-and-after ordering across independently contributed Cordis hooks.
  - **Evidence:** [manifest](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering/blob/3f9f79ff1162782a74ebe425e15bf5d84df8895a/package.json) → [patch](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering/blob/3f9f79ff1162782a74ebe425e15bf5d84df8895a/cordis.patch.yml) · **Identity:** `@tengxiaohtx/dsh-plugin-hooks-ordering`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `hook-ordering` `agent-events` `tool-events` `model-stream` `filesystem-write` `prepublish-build` · **Review:** The fixed source and npm identity both expose 0.2.0 from the same repository; no hook takeover, ordering graph, log write, build, or test was executed.

- **DSH Launcher** · [XQ-rxslcq/dsh-launcher@046acfb](https://github.com/XQ-rxslcq/dsh-launcher/commit/046acfb4619bf49bb6854ab2a476c10bb127e067) — A configurable launcher for hidden command-line startup and an animated desktop companion window.
  - **Evidence:** [manifest](https://github.com/XQ-rxslcq/dsh-launcher/blob/046acfb4619bf49bb6854ab2a476c10bb127e067/package.json) → [patch](https://github.com/XQ-rxslcq/dsh-launcher/blob/046acfb4619bf49bb6854ab2a476c10bb127e067/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `application-launcher` `subprocess` `configuration-write` `desktop-app` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Remote SSH** · [Yan-Zero/dsh-remote-ssh@21d727c](https://github.com/Yan-Zero/dsh-remote-ssh/commit/21d727cbe24fbae283196e5101adb3de2bdd9157) — Transparent local and remote SSH workspaces spanning files, subprocesses, settings, and Web UI.
  - **Evidence:** [manifest](https://github.com/Yan-Zero/dsh-remote-ssh/blob/21d727cbe24fbae283196e5101adb3de2bdd9157/package.json) → [patch](https://github.com/Yan-Zero/dsh-remote-ssh/blob/21d727cbe24fbae283196e5101adb3de2bdd9157/cordis.patch.yml) · **Identity:** `dsh-remote-ssh`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `ssh` `remote-execution` `filesystem-write` `credentials` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Git Bash Tool** · [zeroa234/dsh-preset-minimal-windows@5e33b0f](https://github.com/zeroa234/dsh-preset-minimal-windows/commit/5e33b0f22c2696a5a66c993dc3a5007397658c81) — A Windows Git Bash execution tool using the host subprocess seam with output spill and timeouts.
  - **Evidence:** [manifest](https://github.com/zeroa234/dsh-preset-minimal-windows/blob/5e33b0f22c2696a5a66c993dc3a5007397658c81/gitbash-tool/package.json) → [patch](https://github.com/zeroa234/dsh-preset-minimal-windows/blob/5e33b0f22c2696a5a66c993dc3a5007397658c81/gitbash-tool/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `git-bash` `subprocess` `windows` `filesystem-write` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

#### Agent & Workflow

- **DSH Plan Lattice** · [1052326311/dsh-plan-lattice@e764f70](https://github.com/1052326311/dsh-plan-lattice/commit/e764f70b5b33a76d1a89624241347ffc9e87459b) — Adaptive execution contracts and evidence-gated work graphs for long-running DSH agents.
  - **Evidence:** [manifest](https://github.com/1052326311/dsh-plan-lattice/blob/e764f70b5b33a76d1a89624241347ffc9e87459b/package.json) → [patch](https://github.com/1052326311/dsh-plan-lattice/blob/e764f70b5b33a76d1a89624241347ffc9e87459b/cordis.patch.yml) · **Identity:** `dsh-plan-lattice`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · mixed peer ranges
  - **Signals:** `agent-planning` `filesystem-write` `model-tools` `github-release` `prepack-build` · **Review:** GitHub release tarballs provide a fixed install identity; peers mix rc.5 and rc.6, and the prepack build and workflow behavior were not executed.

- **DSH Forge** · [alex04130/dsh-forge@fae36ff](https://github.com/alex04130/dsh-forge/commit/fae36ff9577ece3d60bd629bb06142fd681e3745) — A broad extension bundle for cross-session mail, agent teams, model routing, runtime injection, skills, and plugin management.
  - **Evidence:** [manifest](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/package.json) → [patch](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/cordis.npm.yml) · **Identity:** `@dsh-forge/bundle`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `multi-agent` `dynamic-loading` `package-management` `filesystem-write` `high-trust-surface` · **Review:** The distributable npm bundle, rather than the private root source manifest, declares rc.6 peers; its broad runtime injection and management surfaces were not executed.

- **DSH Computer Use** · [Anionex/dsh-computer-use@76bfe86](https://github.com/Anionex/dsh-computer-use/commit/76bfe8607f61945c1cbb84e73976e601100c13a2) — Computer-use tooling for screen perception and controlled desktop actions.
  - **Evidence:** [manifest](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/package.json) → [patch](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/cordis.patch.yml) · **Identity:** `@anionex/dsh-computer-use`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `computer-use` `browser` `native-artifacts` · **Review:** Exact rc.6 DSH peers were declared; broad computer control remains a high-trust capability.

- **DH Multiagents** · [atesahmet0/dh-workspace@fb1f22c](https://github.com/atesahmet0/dh-workspace/commit/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e) — A role-bound multi-agent bundle with enforced tool matrices, persisted delegation, reusable presets, philosophy skills, and worktree operations.
  - **Evidence:** [manifest](https://github.com/atesahmet0/dh-workspace/blob/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e/package.json) → [patch](https://github.com/atesahmet0/dh-workspace/blob/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e/cordis.patch.yml) · **Identity:** `@dh-multiagents/bundle`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `postinstall` · declares rc.6 peers
  - **Signals:** `multi-agent` `filesystem-write` `git-worktree` `model-routing` `postinstall` · **Review:** The public bundle identity resolves and documentation targets rc.6; its approved postinstall mirrors presets, and no lifecycle or agent action was run.

- **DSH CC Agents** · [Bcy2020/dsh-cc-ecosystem@486441b](https://github.com/Bcy2020/dsh-cc-ecosystem/commit/486441ba06baddbc29b7f82431a795541d2c0369) — An adapter that turns Claude Code agent definitions into DSH subagents with persona, tool filters, skills, and model aliases.
  - **Evidence:** [manifest](https://github.com/Bcy2020/dsh-cc-ecosystem/blob/486441ba06baddbc29b7f82431a795541d2c0369/packages/cc-agents/package.json) → [patch](https://github.com/Bcy2020/dsh-cc-ecosystem/blob/486441ba06baddbc29b7f82431a795541d2c0369/packages/cc-agents/cordis.patch.yml) · **Identity:** `dsh-cc-agents`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `multi-agent` `filesystem-read` `prompt-injection` `tool-filtering` `model-routing` · **Review:** The public package maps to this monorepo; wildcard DSH peers leave compatibility unproven, and no Claude asset or subagent was loaded.

- **DSH Captain Call** · [Daisy2048/dsh-captain-call@d2b7406](https://github.com/Daisy2048/dsh-captain-call/commit/d2b740660b97b1189a5cadc769955e90b0b00706) — A desktop call-style notifier for AgentTeams completions with local speech synthesis, optional microphone replies, and archived conversations.
  - **Evidence:** [manifest](https://github.com/Daisy2048/dsh-captain-call/blob/d2b740660b97b1189a5cadc769955e90b0b00706/package.json) → [patch](https://github.com/Daisy2048/dsh-captain-call/blob/d2b740660b97b1189a5cadc769955e90b0b00706/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `session-data` `filesystem-read` `audio` `microphone` `external-model-download` · **Review:** Local source installation is documented for the private package; audio, model download, microphone, and AgentTeams state access were not executed.

- **DSH AE Team** · [ddddjaak/dsh-ae-team@35a7494](https://github.com/ddddjaak/dsh-ae-team/commit/35a74945db2efd6f4425cdc5e4f611f7d05aee38) — An application-engineering team pack with seven role definitions, professional skills, and Mermaid graph templates for DSH Web.
  - **Evidence:** [manifest](https://github.com/ddddjaak/dsh-ae-team/blob/35a74945db2efd6f4425cdc5e4f611f7d05aee38/package.json) → [patch](https://github.com/ddddjaak/dsh-ae-team/blob/35a74945db2efd6f4425cdc5e4f611f7d05aee38/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `multi-agent` `filesystem-skill` `prompt-injection` `dynamic-mermaid` `github-only` · **Review:** Source-link installation is documented; the manifest declares no DSH peer range, and no role, skill, prompt, or graph template was loaded.

- **DSH AUX** · [DoloresCaritasAngelus/DSH-AUX@8c1ef2c](https://github.com/DoloresCaritasAngelus/DSH-AUX/commit/8c1ef2c3117c8cdaf380a6feea3669d5753b3374) — Routes auxiliary LLM tasks for vision, Web extraction, and text compression with fallback, concurrency, and session status controls.
  - **Evidence:** [manifest](https://github.com/DoloresCaritasAngelus/DSH-AUX/blob/8c1ef2c3117c8cdaf380a6feea3669d5753b3374/dsh-aux/package.json) → [patch](https://github.com/DoloresCaritasAngelus/DSH-AUX/blob/8c1ef2c3117c8cdaf380a6feea3669d5753b3374/dsh-aux/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `official-looking-namespace` `core-patch` `installer-script` `external-network` `credentials` `llm-routing` `session-data` · **Review:** The independent Git source uses an official-looking unpublished package name and an installer that symlinks files and patches DSH core for image, session, and settings bridges; no installer, patch, or model request was executed.

- **DSH TaskSwarm** · [february2015/dsh-taskswarm@bec7d32](https://github.com/february2015/dsh-taskswarm/commit/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38) — Persistent multi-agent task orchestration with dependency waves, isolated worktrees, cross-model review, merge handling, and a live dashboard.
  - **Evidence:** [manifest](https://github.com/february2015/dsh-taskswarm/blob/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38/package.json) → [patch](https://github.com/february2015/dsh-taskswarm/blob/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38/cordis.patch.yml) · **Identity:** `dsh-taskswarm`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `multi-agent` `git-worktree` `filesystem-write` `local-web-server` `prepare-build` · **Review:** The public package maps to this repository, but wildcard DSH peers leave compatibility unproven; no build, agent, Git, merge, or dashboard action was run.

- **DSH Prompt Enhancer** · [Fishsb/dsh-prompt-enhancer@d42b2b4](https://github.com/Fishsb/dsh-prompt-enhancer/commit/d42b2b41503743a946696312b55001d6a452a0ef) — Uses an independent LLM call to rewrite draft prompts in the DSH composer with undo support.
  - **Evidence:** [manifest](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/package.json) → [patch](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/cordis.patch.yml) · **Identity:** `dsh-prompt-enhancer`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `llm-call` `client-injection` `external-network` `credentials` · **Review:** The client peers declare rc.6 and the native patch is present; prompt disclosure to a configured model and updater network behavior were not executed.

- **LinkHealth Intake Triage** · [fmlin0429712024/linkhealth-triage@fa89c59](https://github.com/fmlin0429712024/linkhealth-triage/commit/fa89c595c17f4a3504cf6d711f0590ee3548ff38) — A healthcare business-intake workflow with role prompts, scoring, routing, and a deterministic PHI review guardrail.
  - **Evidence:** [manifest](https://github.com/fmlin0429712024/linkhealth-triage/blob/fa89c595c17f4a3504cf6d711f0590ee3548ff38/triage-dsh-plugin/package.json) → [patch](https://github.com/fmlin0429712024/linkhealth-triage/blob/fa89c595c17f4a3504cf6d711f0590ee3548ff38/triage-dsh-plugin/cordis.patch.yml) · **Identity:** `linkhealth-intake-triage-dsh`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `healthcare-workflow` `skills` `filesystem-write` `human-review` `sensitive-data` `github-only` · **Review:** The canonical nested source includes a PHI-to-human-review invariant and writes a local triage log; no health data, role prompt, guardrail, or log write was processed.

- **DSH Timer Scheduler** · [GMH13552/dsh-timer-scheduler@5b9c563](https://github.com/GMH13552/dsh-timer-scheduler/commit/5b9c563832ac4fabf136acfb503bde0e442dd2cf) — Lets an agent schedule a future wake-up and shows reminders in a DSH Web panel.
  - **Evidence:** [manifest](https://github.com/GMH13552/dsh-timer-scheduler/blob/5b9c563832ac4fabf136acfb503bde0e442dd2cf/package.json) → [patch](https://github.com/GMH13552/dsh-timer-scheduler/blob/5b9c563832ac4fabf136acfb503bde0e442dd2cf/cordis.patch.yml) · **Identity:** `dsh-timer-scheduler-ui`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `scheduled-wakeup` `agent-events` `local-http-server` `web-ui` `github-only` · **Review:** The source documents local installation and a future npm release; no timer, wake-up, reminder API, or browser panel was started.

- **DSH Nudge** · [huangmouren2023/deepseek-harness-toolkit@ea3ed50](https://github.com/huangmouren2023/deepseek-harness-toolkit/commit/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4) — Automatically follows up after terminal failures or interruptions so the agent explains or resumes.
  - **Evidence:** [manifest](https://github.com/huangmouren2023/deepseek-harness-toolkit/blob/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4/tools/dsh-nudge/package.json) → [patch](https://github.com/huangmouren2023/deepseek-harness-toolkit/blob/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4/tools/dsh-nudge/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `agent-steering` `terminal-events` `prompt-injection` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Team** · [huxint/dsh-team@66835a7](https://github.com/huxint/dsh-team/commit/66835a7920eefb4c051ddf233ca582231e80dbce) — Persistent named agent teams with shared tasks, mailboxes, virtual workspaces, and a live team room.
  - **Evidence:** [manifest](https://github.com/huxint/dsh-team/blob/66835a7920eefb4c051ddf233ca582231e80dbce/package.json) → [patch](https://github.com/huxint/dsh-team/blob/66835a7920eefb4c051ddf233ca582231e80dbce/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `multi-agent` `session-data` `filesystem-write` `mailbox` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Discussion Intent** · [JinPLu/dsh-plugin-discussion-intent@f81b5d1](https://github.com/JinPLu/dsh-plugin-discussion-intent/commit/f81b5d1fc1ac56b4167c7385d8238d827040ca27) — An intent-calibrated discussion mode that keeps complex conversations evidence-led and action-oriented.
  - **Evidence:** [manifest](https://github.com/JinPLu/dsh-plugin-discussion-intent/blob/f81b5d1fc1ac56b4167c7385d8238d827040ca27/package.json) → [patch](https://github.com/JinPLu/dsh-plugin-discussion-intent/blob/f81b5d1fc1ac56b4167c7385d8238d827040ca27/cordis.patch.yml) · **Identity:** `@jinplu/dsh-plugin-discussion-intent`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `agent-steering` `system-prompt` `session-data` `client-injection` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Clawock DSH** · [KCNyu/clawock@428320b](https://github.com/KCNyu/clawock/commit/428320b7476fa9852a4070c4e99bcf423b0f3bfe) — An investment-decision workflow with evidence, an opposing case, deterministic settlement, and a scorecard tab.
  - **Evidence:** [manifest](https://github.com/KCNyu/clawock/blob/428320b7476fa9852a4070c4e99bcf423b0f3bfe/examples/dsh/plugin/package.json) → [patch](https://github.com/KCNyu/clawock/blob/428320b7476fa9852a4070c4e99bcf423b0f3bfe/examples/dsh/plugin/cordis.patch.yml) · **Identity:** `clawock-dsh`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `investment-workflow` `skills` `external-network` `filesystem-read` `filesystem-write` `web-ui` `source-behind-registry` · **Review:** The nested integration is a real published package, not a fixture; the fixed source is 0.1.6 while npm exposes 0.1.8, and no market fetch, decision, or settlement ran.

- **Orcana Runtime Pack** · [Leo-Ayh-Oday/dsh-orcana@abf4b60](https://github.com/Leo-Ayh-Oday/dsh-orcana/commit/abf4b602b2f2057980640dbb8cd43f157ee4ae57) — A general Orcana runtime profile bundle for DSH.
  - **Evidence:** [manifest](https://github.com/Leo-Ayh-Oday/dsh-orcana/blob/abf4b602b2f2057980640dbb8cd43f157ee4ae57/packages/dsh-bundle/package.json) → [patch](https://github.com/Leo-Ayh-Oday/dsh-orcana/blob/abf4b602b2f2057980640dbb8cd43f157ee4ae57/packages/dsh-bundle/cordis.patch.yml) · **Identity:** `@leooday/dsh-bundle`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `profile-bundle` `workflow-runtime` `package-bundle` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plan Execute** · [leotangjc/plan-execute@f236fde](https://github.com/leotangjc/plan-execute/commit/f236fde11b996392efb41889de7505a27d712da0) — A three-stage workflow that grills decisions, compiles plans, and executes with acceptance checks.
  - **Evidence:** [manifest](https://github.com/leotangjc/plan-execute/blob/f236fde11b996392efb41889de7505a27d712da0/package.json) → [patch](https://github.com/leotangjc/plan-execute/blob/f236fde11b996392efb41889de7505a27d712da0/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `workflow-orchestration` `model-tools` `agent-steering` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Voice** · [meomeo-dev/dsh-voice@b4b989c](https://github.com/meomeo-dev/dsh-voice/commit/b4b989c0bc8b942752086d910933e43b53cfbf54) — Session, workspace, and user-level conversation-tone switching with bundled voice skills.
  - **Evidence:** [manifest](https://github.com/meomeo-dev/dsh-voice/blob/b4b989c0bc8b942752086d910933e43b53cfbf54/package.json) → [patch](https://github.com/meomeo-dev/dsh-voice/blob/b4b989c0bc8b942752086d910933e43b53cfbf54/cordis.patch.yml) · **Identity:** `@meomeo-dev/dsh-voice`
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `prepare` · mixed peer ranges
  - **Signals:** `system-prompt` `filesystem-skill` `client-injection` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Agency Agents** · [MichengAI/dsh-agency-agents@9770f19](https://github.com/MichengAI/dsh-agency-agents/commit/9770f195040af75a9c71a4a7060634234678f304) — A summonable roster of bundled domain experts with remote and DSH Web integration surfaces.
  - **Evidence:** [manifest](https://github.com/MichengAI/dsh-agency-agents/blob/9770f195040af75a9c71a4a7060634234678f304/package.json) → [patch](https://github.com/MichengAI/dsh-agency-agents/blob/9770f195040af75a9c71a4a7060634234678f304/cordis.patch.yml) · **Identity:** `@michengai/dsh-agency-agents`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `expert-agents` `subagents` `remote-api` `client-injection` `web-ui` `prepublish-build` `source-behind-registry` · **Review:** The fixed source is 0.1.17 while npm exposes 0.1.19 from the same repository; no build, expert invocation, remote request, subagent, or UI was executed.

- **DSH Waker Trigger** · [msilita/dsh-waker-trigger@b10322d](https://github.com/msilita/dsh-waker-trigger/commit/b10322d46bd29c713830cc5fbdcb94f54de0a608) — Durable any/all triggers over schedules, files, commands, HTTP, processes, and ports that wake an agent at a safe boundary.
  - **Evidence:** [manifest](https://github.com/msilita/dsh-waker-trigger/blob/b10322d46bd29c713830cc5fbdcb94f54de0a608/package.json) → [patch](https://github.com/msilita/dsh-waker-trigger/blob/b10322d46bd29c713830cc5fbdcb94f54de0a608/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `scheduler` `filesystem-watch` `subprocess` `external-network` `agent-events` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Cron** · [omdsh-dev/dsh-cron@9c4b5fa](https://github.com/omdsh-dev/dsh-cron/commit/9c4b5fada700ea25c1c22f55e21144a69cfe2c35) — Durable cross-session jobs driven by five-field cron rules and injected into agent sessions.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/dsh-cron/blob/9c4b5fada700ea25c1c22f55e21144a69cfe2c35/package.json) → [patch](https://github.com/omdsh-dev/dsh-cron/blob/9c4b5fada700ea25c1c22f55e21144a69cfe2c35/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · mixed peer ranges
  - **Signals:** `scheduler` `session-data` `agent-steering` `filesystem-write` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH LLM Fallbacks** · [omdsh-dev/dsh-llm-fallbacks@69ec1fe](https://github.com/omdsh-dev/dsh-llm-fallbacks/commit/69ec1fe19660cd465f610890e2f1366cd418f86c) — Adds configurable provider and model fallback chains after retry, authentication, quota, or rate-limit failures.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/package.json) → [patch](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/bundle/cordis.patch.yml) · **Identity:** `dsh-llm-fallbacks`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `llm-routing` `client-injection` `prepare-build` · **Review:** The DSH peers declare rc.6 and the fallback row is fixed-source confirmed; prepare builds code and provider switching was not runtime-tested.

- **DSH Rules** · [rj-jiangyichen/dsh-rules@dd5d211](https://github.com/rj-jiangyichen/dsh-rules/commit/dd5d211edadf4c10ffd4673f7896cea46ea183e1) — Activates rule prompts and Markdown documents when agent file activity matches configured globs.
  - **Evidence:** [manifest](https://github.com/rj-jiangyichen/dsh-rules/blob/dd5d211edadf4c10ffd4673f7896cea46ea183e1/package.json) → [patch](https://github.com/rj-jiangyichen/dsh-rules/blob/dd5d211edadf4c10ffd4673f7896cea46ea183e1/cordis.patch.yml) · **Identity:** `dsh-rules`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `filesystem-read` `file-globs` `prompt-injection` `agent-events` `prepublish-check` · **Review:** The fixed source and npm identity both expose 0.1.0, though registry metadata does not map the repository; no file matching, rule load, prompt injection, or test was executed.

- **HA Orchestrator** · [Saktawdi/ha-orchestrator@83b80a6](https://github.com/Saktawdi/ha-orchestrator/commit/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799) — Model failover and subagent fanout, pipeline, and supervisor orchestration.
  - **Evidence:** [manifest](https://github.com/Saktawdi/ha-orchestrator/blob/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799/package.json) → [patch](https://github.com/Saktawdi/ha-orchestrator/blob/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `model-failover` `multi-agent` `workflow-orchestration` `external-network` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Taskboard** · [shengsheng90/DSH-taskboard@e4eb7ef](https://github.com/shengsheng90/DSH-taskboard/commit/e4eb7ef1301f7817b734e802fb2831cb6105969f) — Provides a local project taskboard with cards, attachments, automations, agent tools, and a DSH Web UI.
  - **Evidence:** [manifest](https://github.com/shengsheng90/DSH-taskboard/blob/e4eb7ef1301f7817b734e802fb2831cb6105969f/package.json) → [patch](https://github.com/shengsheng90/DSH-taskboard/blob/e4eb7ef1301f7817b734e802fb2831cb6105969f/cordis.patch.yml) · **Identity:** `@shengsheng/dsh-taskboard`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `task-management` `filesystem-write` `sqlite` `attachments` `automation` `model-tools` `client-injection` · **Review:** The fixed source and npm package expose 0.1.0 from the same identity; no database, attachment, automation, tool, or browser action was executed.

- **DSH Swift Cycle** · [Solismuchengxue/dsh_plugin_swift_cycle@d44bee7](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/commit/d44bee70c109bb1d772d26ee790d6de9aadce9cc) — A DSH adapter for the Swift Cycle governance skill.
  - **Evidence:** [manifest](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/blob/d44bee70c109bb1d772d26ee790d6de9aadce9cc/package.json) → [patch](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/blob/d44bee70c109bb1d772d26ee790d6de9aadce9cc/cordis.patch.yml) · **Identity:** `dsh-plugin-swift-cycle`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `governance` `filesystem-skill` `workflow` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Octie DSH** · [StarChen-Cycler/octie-dsh-plugin@457bc4e](https://github.com/StarChen-Cycler/octie-dsh-plugin/commit/457bc4e3fcd64597ef8e77a5e5d739105feb490b) — A persistent task-graph state machine with model tools, a client panel, presets, skills, and immutable snapshots.
  - **Evidence:** [manifest](https://github.com/StarChen-Cycler/octie-dsh-plugin/blob/457bc4e3fcd64597ef8e77a5e5d739105feb490b/octie/package.json) → [patch](https://github.com/StarChen-Cycler/octie-dsh-plugin/blob/457bc4e3fcd64597ef8e77a5e5d739105feb490b/octie/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `task-graph` `model-tools` `filesystem-write` `snapshot` `identity-collision` · **Review:** The npm identity maps to the upstream Octie repository, so this record is pinned to the author's documented Git plugin source and does not claim the npm package.

- **DSH Project Kanban** · [StruggleYang/dsh-project-kanban@1337489](https://github.com/StruggleYang/dsh-project-kanban/commit/1337489eb1eb4056eac8b6a478075606a89eb449) — A workspace-isolated persistent Kanban board with browser UI and model tools.
  - **Evidence:** [manifest](https://github.com/StruggleYang/dsh-project-kanban/blob/1337489eb1eb4056eac8b6a478075606a89eb449/package.json) → [patch](https://github.com/StruggleYang/dsh-project-kanban/blob/1337489eb1eb4056eac8b6a478075606a89eb449/cordis.patch.yml) · **Identity:** `dsh-project-kanban`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `kanban` `model-tools` `filesystem-write` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Yogacara** · [tancheng33/dsh-yogacara@daa16f8](https://github.com/tancheng33/dsh-yogacara/commit/daa16f81b9326e3a4ff19d7feee77e940100c738) — A Yogacara self-model with consciousness states, mental factors, durable seeds, and a self-grasping meter.
  - **Evidence:** [manifest](https://github.com/tancheng33/dsh-yogacara/blob/daa16f81b9326e3a4ff19d7feee77e940100c738/package.json) → [patch](https://github.com/tancheng33/dsh-yogacara/blob/daa16f81b9326e3a4ff19d7feee77e940100c738/cordis.patch.yml) · **Identity:** `dsh-yogacara`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `self-model` `long-term-memory` `system-prompt` `model-tools` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Expert Team** · [tipus0731/dsh-expert-team@0d08ec9](https://github.com/tipus0731/dsh-expert-team/commit/0d08ec9992669d372d2aeb9d69236d25adc02b46) — Role-bounded expert agents with acceptance-driven dispatch and unanimous cross-validation.
  - **Evidence:** [manifest](https://github.com/tipus0731/dsh-expert-team/blob/0d08ec9992669d372d2aeb9d69236d25adc02b46/package.json) → [patch](https://github.com/tipus0731/dsh-expert-team/blob/0d08ec9992669d372d2aeb9d69236d25adc02b46/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `multi-agent` `task-dispatch` `cross-validation` `model-tools` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Subagent Roles** · [trynewthin/dsh-subagent-roles@83f118c](https://github.com/trynewthin/dsh-subagent-roles/commit/83f118cfc217c7388d542bcdd63b01b60f77fa21) — Role-based model routing and Web configuration for subagent delegation.
  - **Evidence:** [manifest](https://github.com/trynewthin/dsh-subagent-roles/blob/83f118cfc217c7388d542bcdd63b01b60f77fa21/package.json) → [patch](https://github.com/trynewthin/dsh-subagent-roles/blob/83f118cfc217c7388d542bcdd63b01b60f77fa21/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `multi-agent` `model-routing` `configuration-write` `client-injection` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Computer Use Win** · [Yu-tao-Li/computer-use-win@27d0e28](https://github.com/Yu-tao-Li/computer-use-win/commit/27d0e2822b21edfb14bb97737d9723e18ae47768) — Connects DSH to Windows desktop automation through an MCP server and PowerShell UI Automation backend.
  - **Evidence:** [manifest](https://github.com/Yu-tao-Li/computer-use-win/blob/27d0e2822b21edfb14bb97737d9723e18ae47768/package.json) → [patch](https://github.com/Yu-tao-Li/computer-use-win/blob/27d0e2822b21edfb14bb97737d9723e18ae47768/cordis.patch.yml) · **Identity:** `computer-use-win`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `windows-only` `computer-use` `mcp` `powershell` `subprocess` `screenshots` `ocr` `keyboard-input` `mouse-input` `high-trust-surface` `github-only` · **Review:** Pinned GitHub installation is documented for the Windows-only MCP bundle; no server, PowerShell process, screenshot, OCR, mouse, keyboard, or desktop action was executed.

#### Files & Data

- **DSH Usage Billing** · [940842546/dsh-usage-billing@96ff9fc](https://github.com/940842546/dsh-usage-billing/commit/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c) — Aggregates model token usage and estimated DeepSeek charges into persistent session and time-range dashboards.
  - **Evidence:** [manifest](https://github.com/940842546/dsh-usage-billing/blob/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c/package.json) → [patch](https://github.com/940842546/dsh-usage-billing/blob/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c/cordis.patch.yml) · **Identity:** `dsh-usage-billing`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `session-data` `usage-metrics` `filesystem-write` `client-injection` · **Review:** The DSH tools peer declares rc.6 and the fixed source writes aggregated usage data; pricing accuracy and runtime behavior were not verified.

- **DSH Input File Ref** · [AFAP/dsh-input-file-ref@fe62f66](https://github.com/AFAP/dsh-input-file-ref/commit/fe62f66cf183a5645eafcd43dcf88526f5066aaa) — An at-mention file picker that browses and searches relative workspace paths before inserting the selected path into chat.
  - **Evidence:** [manifest](https://github.com/AFAP/dsh-input-file-ref/blob/fe62f66cf183a5645eafcd43dcf88526f5066aaa/package.json) → [patch](https://github.com/AFAP/dsh-input-file-ref/blob/fe62f66cf183a5645eafcd43dcf88526f5066aaa/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-metadata` `workspace-read` `client-injection` `web-route` `github-only` · **Review:** GitHub installation is documented; the host lists relative path metadata behind a same-origin trust fence, and no filesystem access was exercised.

- **DSH Usage** · [Aisland-SJL/dsh-usage@4b9a952](https://github.com/Aisland-SJL/dsh-usage/commit/4b9a9522cfd9f07b054f96525cbff95faaf03a59) — Shows persistent balances and token-usage dashboards across DSH sessions and optional Claude Code usage logs.
  - **Evidence:** [manifest](https://github.com/Aisland-SJL/dsh-usage/blob/4b9a9522cfd9f07b054f96525cbff95faaf03a59/package.json) → [patch](https://github.com/Aisland-SJL/dsh-usage/blob/4b9a9522cfd9f07b054f96525cbff95faaf03a59/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `credentials` `external-network` `filesystem-write` `identity-collision` · **Review:** The author documents GitHub-source installation; the private manifest name collides with another npm repository, so no npm identity is listed and usage, balance, and file access were not executed.

- **DSH Session Export** · [bwndlct/dsh-session-export@eb18389](https://github.com/bwndlct/dsh-session-export/commit/eb18389192e36934718877fd7c6eb397f5cf1cd4) — Exports DeepSeek Harness sessions into portable files for reuse or archival.
  - **Evidence:** [manifest](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/package.json) → [patch](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/cordis.patch.yml) · **Identity:** `dsh-session-export`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `session-data` `filesystem-write` · **Review:** Command, session, and tools peers declare rc.6; exported data may contain sensitive context.

- **DSH File** · [chengzhi43/dsh-file@ae933f7](https://github.com/chengzhi43/dsh-file/commit/ae933f70273397c925410da42e302a7968e7c2a1) — A VS Code-style browser, editor, and markdown viewer for files in the current DSH workspace.
  - **Evidence:** [manifest](https://github.com/chengzhi43/dsh-file/blob/ae933f70273397c925410da42e302a7968e7c2a1/package.json) → [patch](https://github.com/chengzhi43/dsh-file/blob/ae933f70273397c925410da42e302a7968e7c2a1/cordis.patch.yml) · **Identity:** `dsh-file`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `filesystem-read` `filesystem-write` `web-ui` `markdown` `source-ahead-registry` · **Review:** The fixed source is 0.1.0 while npm exposes 0.0.1 without repository metadata; file reads, edits, markdown rendering, and browser loading were not executed.

- **DSH Cloud Sync** · [dickpy/dsh-cloud-sync@fa3dfa5](https://github.com/dickpy/dsh-cloud-sync/commit/fa3dfa57955d5c54344c21012c6e3d71f09fe920) — Synchronizes portable DSH profiles and local plugin sources through WebDAV or object storage.
  - **Evidence:** [manifest](https://github.com/dickpy/dsh-cloud-sync/blob/fa3dfa57955d5c54344c21012c6e3d71f09fe920/package.json) → [patch](https://github.com/dickpy/dsh-cloud-sync/blob/fa3dfa57955d5c54344c21012c6e3d71f09fe920/cordis.patch.yml) · **Identity:** `@dickpy/dsh-cloud-sync`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `cloud-sync` `filesystem-read` `filesystem-write` `credentials` `external-network` `release-check` · **Review:** The fixed source is 0.20.0 while npm exposes 0.20.5 without repository metadata; no profile upload, download, credential use, or release check was executed.

- **DSH Drag to Attachment** · [djt889/dsh-drag-to-attachment@620ad6e](https://github.com/djt889/dsh-drag-to-attachment/commit/620ad6e4c23a4454fb078104fa37a6e3f7ca3145) — Turns dropped or pasted host files and folders into DSH attachments or absolute filesystem paths.
  - **Evidence:** [manifest](https://github.com/djt889/dsh-drag-to-attachment/blob/620ad6e4c23a4454fb078104fa37a6e3f7ca3145/package.json) → [patch](https://github.com/djt889/dsh-drag-to-attachment/blob/620ad6e4c23a4454fb078104fa37a6e3f7ca3145/cordis.patch.yml) · **Identity:** `@dsh-external/dsh-drag-to-attachment`
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · compatibility unknown
  - **Signals:** `native-executable` `subprocess` `filesystem` `folder-attachment` `absolute-path` `client-injection` · **Review:** GitHub installation is documented and the package bundles an Everything helper executable for local path discovery; no binary, subprocess, or file operation was executed.

- **GEML DSH Plugin** · [geml-spec/geml@6048f6e](https://github.com/geml-spec/geml/commit/6048f6ef7c47b6975124cc752bf84f986d1590e3) — Adds addressable document blocks to DSH through the GEML MCP server and bundled authoring skills.
  - **Evidence:** [manifest](https://github.com/geml-spec/geml/blob/6048f6ef7c47b6975124cc752bf84f986d1590e3/integrations/dsh-plugin/package.json) → [patch](https://github.com/geml-spec/geml/blob/6048f6ef7c47b6975124cc752bf84f986d1590e3/integrations/dsh-plugin/cordis.patch.yml) · **Identity:** `@geml/dsh-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `mcp-stdio` `subprocess` `document-editing` `skills` `filesystem-read` `filesystem-write` `source-ahead-registry` · **Review:** The fixed integration is 1.0.1 while npm exposes 1.0.0 from the same repository; no npx subprocess, MCP request, skill, or document edit was executed.

- **DSH Drag-and-Drop Upload** · [GLFzr/dsh-file-upload@54891a4](https://github.com/GLFzr/dsh-file-upload/commit/54891a4a3632900fd333c40b00e142a2b349c538) — Adds drag-and-drop uploads to the DSH Web composer and stores files in a local dropbox directory.
  - **Evidence:** [manifest](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/package.json) → [patch](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/cordis.patch.yml) · **Identity:** `dsh-file-upload`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `file-upload` `filesystem-write` `web-routes` `client-injection` · **Review:** The dual host/client bundle is structurally confirmed; upload routes and filesystem writes were not runtime-tested.

- **DSH File Upload** · [HongMing-Huang/dsh-file-upload@7aac111](https://github.com/HongMing-Huang/dsh-file-upload/commit/7aac111b00f5a3172a9fc093ec7f69bebdf65aac) — Composer file upload with removable chips, content sniffing, Markdown conversion, and document tools.
  - **Evidence:** [manifest](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/package.json) → [patch](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/cordis.patch.yml) · **Identity:** `dsh-file-upload`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `file-upload` `filesystem-write` `document-parsing` · **Review:** DSH peers declare rc.6 while Cordis is broad; runtime compatibility was not tested.

- **DSH File Picker** · [JackeyWilder/dsh-file-picker@a8741fb](https://github.com/JackeyWilder/dsh-file-picker/commit/a8741fb8cd8b46dab10a16fe0fc26a3d8f46c455) — A native Windows file picker and attachment rail that injects selected paths into the session.
  - **Evidence:** [manifest](https://github.com/JackeyWilder/dsh-file-picker/blob/a8741fb8cd8b46dab10a16fe0fc26a3d8f46c455/package.json) → [patch](https://github.com/JackeyWilder/dsh-file-picker/blob/a8741fb8cd8b46dab10a16fe0fc26a3d8f46c455/cordis.patch.yml) · **Identity:** `@jackeywilder/dsh-file-picker`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `native-dialog` `filesystem-read` `session-data` `client-injection` `windows` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH FileScope** · [KunIsMe/dsh-filescope@e84692e](https://github.com/KunIsMe/dsh-filescope/commit/e84692ed79d765fe06c40eabf1c7360e53b1b172) — A workspace file-explorer drawer with live file previews.
  - **Evidence:** [manifest](https://github.com/KunIsMe/dsh-filescope/blob/e84692ed79d765fe06c40eabf1c7360e53b1b172/package.json) → [patch](https://github.com/KunIsMe/dsh-filescope/blob/e84692ed79d765fe06c40eabf1c7360e53b1b172/cordis.patch.yml) · **Identity:** `dsh-filescope`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-read` `file-preview` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Download Progress** · [nanshanzhaoji/dsh-download-progress@052917d](https://github.com/nanshanzhaoji/dsh-download-progress/commit/052917db31285668140a85e14cd5e4636ab644e1) — Adds a download tool with percentage tracking and a floating progress panel in DSH Web.
  - **Evidence:** [manifest](https://github.com/nanshanzhaoji/dsh-download-progress/blob/052917db31285668140a85e14cd5e4636ab644e1/package.json) → [patch](https://github.com/nanshanzhaoji/dsh-download-progress/blob/052917db31285668140a85e14cd5e4636ab644e1/cordis.patch.yml) · **Identity:** `dsh-download-progress`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `file-download` `external-network` `filesystem-write` `model-tools` `client-injection` `github-only` · **Review:** A fixed GitHub source identity is available while npm has no matching package; no download, file write, HTTP route, or browser panel was executed.

- **DSH Explorer** · [No-PRM/dsh-explorer@2b21a68](https://github.com/No-PRM/dsh-explorer/commit/2b21a68866c5ddb4a0ae79328e6dde96b34399bb) — An aggregate host and browser file explorer with tree browsing, search, Git status, media preview, and drag-to-reference.
  - **Evidence:** [manifest](https://github.com/No-PRM/dsh-explorer/blob/2b21a68866c5ddb4a0ae79328e6dde96b34399bb/package.json) → [patch](https://github.com/No-PRM/dsh-explorer/blob/2b21a68866c5ddb4a0ae79328e6dde96b34399bb/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-read` `file-search` `git-status` `media-preview` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Chat Import** · [Nwflower/dsh-chat-import@3c751ce](https://github.com/Nwflower/dsh-chat-import/commit/3c751ce8dbff52a75c62b10f714993f39be33e84) — Imports conversation histories from major coding agents and chat products as resumable DSH sessions.
  - **Evidence:** [manifest](https://github.com/Nwflower/dsh-chat-import/blob/3c751ce8dbff52a75c62b10f714993f39be33e84/package.json) → [patch](https://github.com/Nwflower/dsh-chat-import/blob/3c751ce8dbff52a75c62b10f714993f39be33e84/cordis.patch.yml) · **Identity:** `dsh-chat-import`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `session-import` `filesystem-read` `session-data` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH At File** · [omdsh-dev/dsh-at-file@9c71e52](https://github.com/omdsh-dev/dsh-at-file/commit/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4) — Codex-style @file mentions that search workspace paths and attach file contents to prompts.
  - **Evidence:** [manifest](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/package.json) → [patch](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/cordis.patch.yml) · **Identity:** `dsh-at-file`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `workspace-read` `data-disclosure` · **Review:** Workspace contents can be attached to prompts; users should review disclosure boundaries.

- **DSH Files** · [taxueseek/dsh-files@43887e2](https://github.com/taxueseek/dsh-files/commit/43887e2dca25fad9d7b23049fe1674f0af00c5cf) — File upload cards, session-scoped storage, deduplication, cleanup, and document reading tools.
  - **Evidence:** [manifest](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/package.json) → [patch](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/cordis.patch.yml) · **Identity:** `dsh-files`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `file-upload` `filesystem-write` `document-parsing` · **Review:** DSH peers declare rc.6 while Cordis is broad; repository license detection was unavailable.

- **DSH Browser FS** · [whitefirer/dsh-browser-fs@d144aaf](https://github.com/whitefirer/dsh-browser-fs/commit/d144aaf8960442558897e5600be00366f40d812d) — Lets agents list, read, and write within a browser-authorized local directory over a WebSocket relay.
  - **Evidence:** [manifest](https://github.com/whitefirer/dsh-browser-fs/blob/d144aaf8960442558897e5600be00366f40d812d/package.json) → [patch](https://github.com/whitefirer/dsh-browser-fs/blob/d144aaf8960442558897e5600be00366f40d812d/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `browser-filesystem` `filesystem-read` `filesystem-write` `websocket` `model-tools` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH DeepSeek Attach** · [wqx-txdsyl/dsh-ds-attach@9cc7bab](https://github.com/wqx-txdsyl/dsh-ds-attach/commit/9cc7babf8ce8996daf011299ac2b805525dfb96f) — DeepSeek-style file cards, drag-and-drop, document text extraction, and message injection for DSH attachments.
  - **Evidence:** [manifest](https://github.com/wqx-txdsyl/dsh-ds-attach/blob/9cc7babf8ce8996daf011299ac2b805525dfb96f/package.json) → [patch](https://github.com/wqx-txdsyl/dsh-ds-attach/blob/9cc7babf8ce8996daf011299ac2b805525dfb96f/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `file-upload` `document-extraction` `filesystem-write` `session-data` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Cordis Transfer Plugin** · [zby1211/cordis-transfer-plugin@c99f767](https://github.com/zby1211/cordis-transfer-plugin/commit/c99f767edbea444b12019bf934448983fb9d6327) — Imports and exports dynamic Cordis plugins as ZIP packages through the browser.
  - **Evidence:** [manifest](https://github.com/zby1211/cordis-transfer-plugin/blob/c99f767edbea444b12019bf934448983fb9d6327/package.json) → [patch](https://github.com/zby1211/cordis-transfer-plugin/blob/c99f767edbea444b12019bf934448983fb9d6327/cordis.patch.yml) · **Identity:** `cordis-transfer-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `plugin-export` `plugin-import` `file-upload` `filesystem-write` `model-tools` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

#### Vision & Media

- **DSH LLM Vision** · [1710782766/dsh-llm-vision@8ff56db](https://github.com/1710782766/dsh-llm-vision/commit/8ff56db2e40cb7053dbe8602522ea1d6734c1e9c) — Image description and OCR tools backed by an OpenAI-compatible vision endpoint.
  - **Evidence:** [manifest](https://github.com/1710782766/dsh-llm-vision/blob/8ff56db2e40cb7053dbe8602522ea1d6734c1e9c/package.json) → [patch](https://github.com/1710782766/dsh-llm-vision/blob/8ff56db2e40cb7053dbe8602522ea1d6734c1e9c/cordis.patch.yml) · **Identity:** `dsh-llm-vision`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · compatibility unknown
  - **Signals:** `vision` `ocr` `external-network` `credentials` `filesystem-cache` `client-injection` · **Review:** The fixed source matches npm 0.1.0; endpoint calls, image processing, credentials, cache writes, and client injection were not executed.

- **DSH Vision Toolkit** · [Anionex/dsh-vision-toolkit@29850a8](https://github.com/Anionex/dsh-vision-toolkit/commit/29850a83871d4b7a7cc13e251420c5a440e2f69e) — Vision tools for image Q&A, long-screenshot OCR, UI reproduction, grounding, and pixel diff.
  - **Evidence:** [manifest](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/package.json) → [patch](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/cordis.patch.yml) · **Identity:** `@anionex/dsh-vision-toolkit`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `browser` `subprocess` `credentials` `python-environment` · **Review:** High-privilege runtime preparation is visible; compatibility requires a separate check.

- **DSH Codex Media** · [binsarjr/dsh-codex-media@4dba264](https://github.com/binsarjr/dsh-codex-media/commit/4dba264473d00dc75c1e100e8de56a291a9d3441) — Adds local image and document analysis plus image generation through Codex CLI or configurable API transports.
  - **Evidence:** [manifest](https://github.com/binsarjr/dsh-codex-media/blob/4dba264473d00dc75c1e100e8de56a291a9d3441/package.json) → [patch](https://github.com/binsarjr/dsh-codex-media/blob/4dba264473d00dc75c1e100e8de56a291a9d3441/cordis.patch.yml) · **Identity:** `dsh-codex-media`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `local-file` `subprocess` `external-network` `credentials` `image-generation` · **Review:** The native row loads source that can read files, spawn the local Codex CLI, call APIs, and write generated images; none of those paths were executed.

- **DSH Blender** · [CheshireJCat/blender@3d641da](https://github.com/CheshireJCat/blender/commit/3d641dae1c84248f213095f322f6beace0631409) — A Blender integration that exposes 3D scene authoring through DSH tools.
  - **Evidence:** [manifest](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/package.json) → [patch](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/cordis.patch.yml) · **Identity:** `dsh-blender`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `external-application` `subprocess` `setup-command` · **Review:** DSH tools rc.6 is declared; Blender execution and setup were not tested.

- **DSH Chat Imagine** · [corrinehu/dsh-chat-imagine@419e39b](https://github.com/corrinehu/dsh-chat-imagine/commit/419e39b30f6932064e7744036f7975d761fd93a0) — Image-generation tools that use configured OpenAI-compatible providers or a detected local MiniMax CLI and render results in chat.
  - **Evidence:** [manifest](https://github.com/corrinehu/dsh-chat-imagine/blob/419e39b30f6932064e7744036f7975d761fd93a0/package.json) → [patch](https://github.com/corrinehu/dsh-chat-imagine/blob/419e39b30f6932064e7744036f7975d761fd93a0/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `image-generation` `external-network` `credentials` `subprocess` `in-memory-media` · **Review:** GitHub installation and rc.6 tools are documented; provider requests, CLI discovery, subprocesses, and image generation were not executed.

- **DSH ChatVoice** · [FuzzySoul/dsh-chatvoice@34b4a18](https://github.com/FuzzySoul/dsh-chatvoice/commit/34b4a183c92c31fcea454d65c16c15f00bc4537b) — Browser-native speech input and reply read-aloud without a separate API key.
  - **Evidence:** [manifest](https://github.com/FuzzySoul/dsh-chatvoice/blob/34b4a183c92c31fcea454d65c16c15f00bc4537b/package.json) → [patch](https://github.com/FuzzySoul/dsh-chatvoice/blob/34b4a183c92c31fcea454d65c16c15f00bc4537b/cordis.patch.yml) · **Identity:** `dsh-chatvoice`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `microphone` `browser-speech` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Image Bridge** · [haitang1/dsh-image-bridge@4c7e7a9](https://github.com/haitang1/dsh-image-bridge/commit/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b) — Writes pasted images into the workspace and exposes hidden paths so text models can call vision tools.
  - **Evidence:** [manifest](https://github.com/haitang1/dsh-image-bridge/blob/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b/package.json) → [patch](https://github.com/haitang1/dsh-image-bridge/blob/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `image-input` `filesystem-write` `prompt-injection` `model-tools` `session-data` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Diagram** · [hanzhangzzz/dsh-diagram@480d3b3](https://github.com/hanzhangzzz/dsh-diagram/commit/480d3b3e81a583648595ec60cdcf834a8b7593cc) — Editable Excalidraw diagrams embedded in DeepSeek Harness conversations.
  - **Evidence:** [manifest](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/package.json) → [patch](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/cordis.patch.yml) · **Identity:** `dsh-diagram`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `interactive-content` · **Review:** Exact rc.6 DSH peers were declared; runtime compatibility was not tested.

- **DSH DashScope Media** · [hisonWarren/deepseekharness-alter@efb651d](https://github.com/hisonWarren/deepseekharness-alter/commit/efb651d1e2f28e2169839ee946e856903aee6150) — DashScope-backed image, video, and speech tools with in-chat media cards.
  - **Evidence:** [manifest](https://github.com/hisonWarren/deepseekharness-alter/blob/efb651d1e2f28e2169839ee946e856903aee6150/plugins-local/dsh-dashscope-media/package.json) → [patch](https://github.com/hisonWarren/deepseekharness-alter/blob/efb651d1e2f28e2169839ee946e856903aee6150/plugins-local/dsh-dashscope-media/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `image-generation` `video-generation` `text-to-speech` `credentials` `external-network` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DirectorX** · [LaplaceYoung/dsh-directorx@5553398](https://github.com/LaplaceYoung/dsh-directorx/commit/5553398fafcdb8e263f54e19203c1c56fbd43e43) — AI video generation, editing, quality review, storyboard canvas, and a director knowledge library.
  - **Evidence:** [manifest](https://github.com/LaplaceYoung/dsh-directorx/blob/5553398fafcdb8e263f54e19203c1c56fbd43e43/package.json) → [patch](https://github.com/LaplaceYoung/dsh-directorx/blob/5553398fafcdb8e263f54e19203c1c56fbd43e43/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · compatibility unknown
  - **Signals:** `video-generation` `video-editing` `quality-control` `filesystem-write` `external-network` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **ModLens** · [liustack/modlens@2818192](https://github.com/liustack/modlens/commit/28181920f6b064e33c6b235221e1a3a5d360a897) — A vision bridge that turns images into structured OCR, layout, and semantic evidence for text-only models.
  - **Evidence:** [manifest](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/package.json) → [patch](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/cordis.patch.yml) · **Identity:** `@liustack/modlens`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `external-network` `credentials` `external-installer` · **Review:** External vision engines and credentials are capability facts, not a safety judgment.

- **DSH MMX Bridge** · [welsione/dsh-mmx-bridge@03a8789](https://github.com/welsione/dsh-mmx-bridge/commit/03a878985cd6ed0aeb7b87d5e87cee427c4e67a0) — Bridges MiniMax multimodal image, video, speech, music, search, quota, and preview capabilities into DSH.
  - **Evidence:** [manifest](https://github.com/welsione/dsh-mmx-bridge/blob/03a878985cd6ed0aeb7b87d5e87cee427c4e67a0/package.json) → [patch](https://github.com/welsione/dsh-mmx-bridge/blob/03a878985cd6ed0aeb7b87d5e87cee427c4e67a0/cordis.patch.yml) · **Identity:** `dsh-mmx-bridge`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `multimodal` `credentials` `external-network` `web-search` `image-generation` `audio` `video` `model-tools` `client-injection` · **Review:** The fixed source and npm identity both expose 1.0.3 from the same repository; no credential, request, generation, search, media load, or client enhancement was executed.

- **DeepSee** · [WUBING2023/deepsee@7431a43](https://github.com/WUBING2023/deepsee/commit/7431a430783105df9e40e740bb818c957cace6e7) — Vision reading, model-capability discovery, and multi-model routing with optional OCR installation.
  - **Evidence:** [manifest](https://github.com/WUBING2023/deepsee/blob/7431a430783105df9e40e740bb818c957cace6e7/package.json) → [patch](https://github.com/WUBING2023/deepsee/blob/7431a430783105df9e40e740bb818c957cace6e7/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `vision` `model-routing` `external-download` `subprocess` `install-script` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DeepSeek Visionary DSH** · [xlight/deepseek-visionary@e3cf51c](https://github.com/xlight/deepseek-visionary/commit/e3cf51c09c12eea2da7762c715202be4ac0320c5) — Native vision, status, login, and logout tools backed by a Visionary server CLI and an image bridge.
  - **Evidence:** [manifest](https://github.com/xlight/deepseek-visionary/blob/e3cf51c09c12eea2da7762c715202be4ac0320c5/packages/dsh-plugin/package.json) → [patch](https://github.com/xlight/deepseek-visionary/blob/e3cf51c09c12eea2da7762c715202be4ac0320c5/packages/dsh-plugin/cordis.patch.yml) · **Identity:** `@xlight-oss/visionary-dsh`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `vision` `subprocess` `credentials` `external-network` `model-tools` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Vision Router** · [ysr666/dsh-vision-router@d805a71](https://github.com/ysr666/dsh-vision-router/commit/d805a71a3de75b624c733babc422df7d0eac6403) — A vision routing bundle with image Q&A, grounding, OCR, pixel inspection, screenshots, and provider chains.
  - **Evidence:** [manifest](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/package.json) → [patch](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/cordis.patch.yml) · **Identity:** `dsh-vision-router`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `external-network` `browser` `file-upload` `filesystem-write` `native-code` · **Review:** The fixed manifest and patch declare rc.6 DSH peers; network providers, browser automation, file writes, and native image dependencies were not executed.

- **DSH Realtime Voice** · [zfu691531-hash/dsh-realtime-voice@91aae22](https://github.com/zfu691531-hash/dsh-realtime-voice/commit/91aae229357e647964bbf2e50ec7602c4ce55d4a) — Realtime speech-to-speech using Qwen or OpenAI-compatible providers.
  - **Evidence:** [manifest](https://github.com/zfu691531-hash/dsh-realtime-voice/blob/91aae229357e647964bbf2e50ec7602c4ce55d4a/package.json) → [patch](https://github.com/zfu691531-hash/dsh-realtime-voice/blob/91aae229357e647964bbf2e50ec7602c4ce55d4a/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · mixed peer ranges
  - **Signals:** `microphone` `audio` `credentials` `external-network` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

#### Search & Research

- **DSH Search** · [2982136527/dsh-plugins@b8b03b1](https://github.com/2982136527/dsh-plugins/commit/b8b03b1e3d72729f70bcab68835abefaf27c8da5) — Provides model-callable Web search through Bing RSS with a DuckDuckGo fallback and no required API key.
  - **Evidence:** [manifest](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/package.json) → [patch](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/cordis.patch.yml) · **Identity:** `dsh-search`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `web-search` `external-network` `git-source` · **Review:** The fixed monorepo subdirectory and patch are confirmed; the author documents clone-plus-local-path installation, and the repository has no detected license file.

- **DSH Web Tools** · [A3Boy/dsh-web-tools@ff35019](https://github.com/A3Boy/dsh-web-tools/commit/ff35019e3be679b6d62e866c462bbd801fd12110) — Unifies multiple Web search and fetch providers with credential pools, quotas, health tracking, and deterministic fallback.
  - **Evidence:** [manifest](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/package.json) → [patch](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/cordis.patch.yml) · **Identity:** `dsh-web-tools`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `external-network` `credentials` `web-search` `remote-content` `client-injection` · **Review:** The fixed peers declare rc.6; provider calls, credential handling, quota logic, fallback behavior, and the prepare build were not executed.

- **DSH KB RAG** · [Breeze136/dsh-kb-rag@2ba96b7](https://github.com/Breeze136/dsh-kb-rag/commit/2ba96b785b154dec2fe76e64eb4a17516def92e1) — Local literature RAG with hybrid retrieval, reranking, citations, and a SQLite-backed Python engine.
  - **Evidence:** [manifest](https://github.com/Breeze136/dsh-kb-rag/blob/2ba96b785b154dec2fe76e64eb4a17516def92e1/npm-package/package.json) → [patch](https://github.com/Breeze136/dsh-kb-rag/blob/2ba96b785b154dec2fe76e64eb4a17516def92e1/npm-package/cordis.patch.yml) · **Identity:** `dsh-kb-rag`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `literature-search` `filesystem-read` `filesystem-write` `python-subprocess` `model-download` `source-behind-registry` · **Review:** The fixed source is 1.0.7 while npm now exposes 1.1.0 from the same repository; no Python daemon, file ingestion, model download, index mutation, or search was executed.

- **DSH Web Search Multi** · [cinob/dsh-web-search-multi@ea1c2d0](https://github.com/cinob/dsh-web-search-multi/commit/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465) — Provides multi-provider Web search with automatic fallback, credentials, and a settings interface.
  - **Evidence:** [manifest](https://github.com/cinob/dsh-web-search-multi/blob/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465/package.json) → [patch](https://github.com/cinob/dsh-web-search-multi/blob/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465/cordis.patch.yml) · **Identity:** `dsh-web-search-multi`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `external-network` `credentials` `workspace-write` `provider-fallback` `settings-ui` · **Review:** Wildcard DSH peers and multiple external search providers are declared, with documented workspace-write capability; no provider request or write was executed.

- **DSH Web Access** · [haibinwang9/dsh-web-access@1eaffaf](https://github.com/haibinwang9/dsh-web-access/commit/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b) — Multi-provider Web search and URL extraction with fallback across SearXNG, Tavily, Brave, and DuckDuckGo.
  - **Evidence:** [manifest](https://github.com/haibinwang9/dsh-web-access/blob/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b/package.json) → [patch](https://github.com/haibinwang9/dsh-web-access/blob/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `web-search` `content-extraction` `credentials` `external-network` `provider-fallback` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH PCB Parts Search** · [Huaqiu-Electronics/dsh-pcb-parts-search@7b02c04](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/commit/7b02c0492e06530c3c58638639351ea7878dde3e) — A model tool for searching electronic components and ICs from the LCSC/EDA parts service.
  - **Evidence:** [manifest](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/blob/7b02c0492e06530c3c58638639351ea7878dde3e/package.json) → [patch](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/blob/7b02c0492e06530c3c58638639351ea7878dde3e/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · mixed peer ranges
  - **Signals:** `parts-search` `model-tools` `external-network` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Search Boost** · [Mr-remon219/dsh-search-boost@af80be8](https://github.com/Mr-remon219/dsh-search-boost/commit/af80be8b5a0da2b74511dbb74f1acce601b11bf3) — Fuses multiple Web and X search engines with page fetching and parallel research workflows.
  - **Evidence:** [manifest](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/package.json) → [patch](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/cordis.patch.yml) · **Identity:** `dsh-search-boost`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `external-network` `credentials` `subprocess` `browser` `multi-agent` · **Review:** The bundle row and search-provider override are fixed-source confirmed; external engines, credentials, subprocesses, and research fan-out were not executed.

- **DSH Journal Monitor** · [SIMON-WORLD/dsh-journal-monitor@a97982e](https://github.com/SIMON-WORLD/dsh-journal-monitor/commit/a97982e3349666afde0a1069a54587c7ab388e0d) — Monitors economics journals and working papers, filters new items, persists deduplication state, and sends scheduled digests.
  - **Evidence:** [manifest](https://github.com/SIMON-WORLD/dsh-journal-monitor/blob/a97982e3349666afde0a1069a54587c7ab388e0d/package.json) → [patch](https://github.com/SIMON-WORLD/dsh-journal-monitor/blob/a97982e3349666afde0a1069a54587c7ab388e0d/cordis.patch.yml) · **Identity:** `dsh-journal-monitor`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `research-monitoring` `external-network` `rss` `webhook` `filesystem-write` `scheduler` `model-tools` `github-only` · **Review:** A fixed GitHub source identity is documented; no journal request, feed parse, state write, webhook, scheduler, probe, or test was executed.

- **DSH Web Search Exa** · [TonyDua/dsh-web-search-exa@083706b](https://github.com/TonyDua/dsh-web-search-exa/commit/083706bae60af8e1f3776b02448f17c140c3f571) — Exa-powered web search exposed to DSH as agent tools and Web settings.
  - **Evidence:** [manifest](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/package.json) → [patch](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/cordis.patch.yml) · **Identity:** `@tonydua/dsh-web-search-exa`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `external-network` `credentials` · **Review:** DSH peers declare rc.6 while the Cordis range remains rc.1; runtime was not tested.

- **DSH Free Search** · [zhouzhencheng07/dsh-free-search@2336dad](https://github.com/zhouzhencheng07/dsh-free-search/commit/2336dadd0c8ef593d6e8af2897327e4725b9c01e) — A keyless multi-source Web search provider wired into the native DSH Web seam.
  - **Evidence:** [manifest](https://github.com/zhouzhencheng07/dsh-free-search/blob/2336dadd0c8ef593d6e8af2897327e4725b9c01e/package.json) → [patch](https://github.com/zhouzhencheng07/dsh-free-search/blob/2336dadd0c8ef593d6e8af2897327e4725b9c01e/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `web-search` `external-network` `provider-fallback` `identity-collision` · **Review:** The npm identity maps to another repository, so this record is pinned to the author's documented Git source and does not claim that package.

#### Memory

- **DSH Memory** · [chenhw7/dsh-memory@e5e35ce](https://github.com/chenhw7/dsh-memory/commit/e5e35cedb0a77d8df63c5e29188743d7e27c27b9) — A persistent cross-session memory bundle with storage, tools, extraction, review, and context injection.
  - **Evidence:** [manifest](https://github.com/chenhw7/dsh-memory/blob/e5e35cedb0a77d8df63c5e29188743d7e27c27b9/package.json) → [patch](https://github.com/chenhw7/dsh-memory/blob/e5e35cedb0a77d8df63c5e29188743d7e27c27b9/cordis.patch.yml) · **Identity:** `@chenhw7/dsh-memory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · mixed peer ranges
  - **Signals:** `persistent-memory` `filesystem-write` `model-tools` `context-injection` `prepare-build` `github-only` · **Review:** GitHub installation requires an explicitly allowed prepare build and mixed rc.5 peer declarations; no build, storage, extraction, or context injection was executed.

- **DSH Self Memory** · [cyanxi69-jpg/dsh-self-memory@5c58b33](https://github.com/cyanxi69-jpg/dsh-self-memory/commit/5c58b335dcfdb05bf01259492c032db42759a9b4) — A file-backed memory plugin with weighted keyword recall, generalized problems, and contradiction-aware solutions.
  - **Evidence:** [manifest](https://github.com/cyanxi69-jpg/dsh-self-memory/blob/5c58b335dcfdb05bf01259492c032db42759a9b4/package.json) → [patch](https://github.com/cyanxi69-jpg/dsh-self-memory/blob/5c58b335dcfdb05bf01259492c032db42759a9b4/cordis.patch.yml) · **Identity:** `dsh-self-memory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `persistent-memory` `filesystem-write` `keyword-search` `context-injection` `local-install` · **Review:** The fixed source documents local-directory installation and stores generalized problem history on disk; no memory import, retrieval, or write was performed.

- **DSH AgentMemory** · [elementor-i/dsh-agentmemory@4a4c124](https://github.com/elementor-i/dsh-agentmemory/commit/4a4c124cf93b977117d89c1a132643f6c73fd24f) — Bridges DSH memory tools, activity capture, and context injection to a local AgentMemory REST server.
  - **Evidence:** [manifest](https://github.com/elementor-i/dsh-agentmemory/blob/4a4c124cf93b977117d89c1a132643f6c73fd24f/package.json) → [patch](https://github.com/elementor-i/dsh-agentmemory/blob/4a4c124cf93b977117d89c1a132643f6c73fd24f/cordis.patch.yml) · **Identity:** `@dsh-external/dsh-agentmemory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `persistent-memory` `local-http-client` `model-tools` `activity-capture` `context-injection` `github-only` · **Review:** The plugin requires a separately running local AgentMemory service and exposes a broad HTTP escape tool; no service call, capture hook, or prompt injection was executed.

- **DSH Native Memory** · [highland0971/dsh-native-memory@270e235](https://github.com/highland0971/dsh-native-memory/commit/270e235bf00a1211f1fd31fdf91d9a1f70f57df9) — Workspace-scoped long-term memory with native storage, cross-session recall, approvals, and provenance.
  - **Evidence:** [manifest](https://github.com/highland0971/dsh-native-memory/blob/270e235bf00a1211f1fd31fdf91d9a1f70f57df9/package.json) → [patch](https://github.com/highland0971/dsh-native-memory/blob/270e235bf00a1211f1fd31fdf91d9a1f70f57df9/cordis.patch.yml) · **Identity:** `dsh-native-memory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `long-term-memory` `session-data` `approval-gate` `storage-domain` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **iHow Memory** · [iHow1/dsh-ihow-memory@c530943](https://github.com/iHow1/dsh-ihow-memory/commit/c5309437c5549a31c1aa6ba38d20b82752209986) — A local-first shared memory plugin exposed to DSH through an MCP client.
  - **Evidence:** [manifest](https://github.com/iHow1/dsh-ihow-memory/blob/c5309437c5549a31c1aa6ba38d20b82752209986/package.json) → [patch](https://github.com/iHow1/dsh-ihow-memory/blob/c5309437c5549a31c1aa6ba38d20b82752209986/cordis.patch.yml) · **Identity:** `dsh-ihow-memory`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `long-term-memory` `mcp` `local-service` `filesystem-write` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Session Summarizer** · [KhalilYamber/dsh-session-summarizer@7a115c3](https://github.com/KhalilYamber/dsh-session-summarizer/commit/7a115c32c869c608ed690a155fec6609ea2cb049) — Reads recent or selected sessions and generates a compact context summary.
  - **Evidence:** [manifest](https://github.com/KhalilYamber/dsh-session-summarizer/blob/7a115c32c869c608ed690a155fec6609ea2cb049/package.json) → [patch](https://github.com/KhalilYamber/dsh-session-summarizer/blob/7a115c32c869c608ed690a155fec6609ea2cb049/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `summarization` `model-request` `local-install` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Context Structurer** · [kkkkkklze/dsh-context-structurer@0420f4c](https://github.com/kkkkkklze/dsh-context-structurer/commit/0420f4cbef56fcd3060e0e1e95e05796c6c08051) — Splits conversations into typed subcontexts and indexes them with a structured table of contents.
  - **Evidence:** [manifest](https://github.com/kkkkkklze/dsh-context-structurer/blob/0420f4cbef56fcd3060e0e1e95e05796c6c08051/package.json) → [patch](https://github.com/kkkkkklze/dsh-context-structurer/blob/0420f4cbef56fcd3060e0e1e95e05796c6c08051/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `context-index` `filesystem-write` `local-install` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Unified Agent Memory** · [Noelune/unified-agent-memory@b6a879c](https://github.com/Noelune/unified-agent-memory/commit/b6a879cc73364f24c08160dda2f53140c82ebec7) — A unified memory layer for retaining and retrieving agent knowledge across work.
  - **Evidence:** [manifest](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/package.json) → [patch](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/cordis.patch.yml) · **Identity:** `dsh-unified-agent-memory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `persistent-memory` · **Review:** Manifest declares DSH tools rc.6 peers; runtime compatibility was not tested.

- **Folio DSH Tools** · [nyantused-cpun/folio@91f3d36](https://github.com/nyantused-cpun/folio/commit/91f3d366c4654d70ed2f39e2f62a1e38eab8ff3b) — Model tools and guards that expose the Folio memory and quality CLI through a Python subprocess.
  - **Evidence:** [manifest](https://github.com/nyantused-cpun/folio/blob/91f3d366c4654d70ed2f39e2f62a1e38eab8ff3b/plugins/folio-tools/package.json) → [patch](https://github.com/nyantused-cpun/folio/blob/91f3d366c4654d70ed2f39e2f62a1e38eab8ff3b/plugins/folio-tools/cordis.patch.yml) · **Identity:** `@nyantused/folio-dsh-tools`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `long-term-memory` `model-tools` `subprocess` `filesystem-write` `guard` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Recall** · [Relistencode/dsh-recall@23f9103](https://github.com/Relistencode/dsh-recall/commit/23f9103a2d588936bb3847c1cb443ad24efa7477) — Local offline literal, fuzzy, and semantic search over original conversation history.
  - **Evidence:** [manifest](https://github.com/Relistencode/dsh-recall/blob/23f9103a2d588936bb3847c1cb443ad24efa7477/package.json) → [patch](https://github.com/Relistencode/dsh-recall/blob/23f9103a2d588936bb3847c1cb443ad24efa7477/cordis.patch.yml) · **Identity:** `dsh-recall`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `local-search` `semantic-search` `filesystem-read` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Knowledge** · [Soren-ABT/dsh-knowledge@a0ad107](https://github.com/Soren-ABT/dsh-knowledge/commit/a0ad107c0febf751796c0a686c08979eeb62eab3) — Manages document knowledge bases with chunking, embeddings, retrieval, model tools, and a browser panel.
  - **Evidence:** [manifest](https://github.com/Soren-ABT/dsh-knowledge/blob/a0ad107c0febf751796c0a686c08979eeb62eab3/package.json) → [patch](https://github.com/Soren-ABT/dsh-knowledge/blob/a0ad107c0febf751796c0a686c08979eeb62eab3/cordis.patch.yml) · **Identity:** `dsh-knowledge`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `knowledge-base` `document-processing` `filesystem-write` `embeddings` `external-network` `model-tools` `client-injection` `prepare-build` · **Review:** The fixed source is 0.2.11 while npm exposes 0.2.12 from the same repository; no build, parsing, embedding, retrieval, storage, or tool ran.

- **DSH Engramory** · [tinqiao-oss/engramory@4a9b392](https://github.com/tinqiao-oss/engramory/commit/4a9b3925554e3ae2aaa7205bd842c21ca72f8626) — Curated file-based long-term memory with Markdown notes, a shared plain-file store, and a deterministic index cap.
  - **Evidence:** [manifest](https://github.com/tinqiao-oss/engramory/blob/4a9b3925554e3ae2aaa7205bd842c21ca72f8626/adapters/dsh/plugin/package.json) → [patch](https://github.com/tinqiao-oss/engramory/blob/4a9b3925554e3ae2aaa7205bd842c21ca72f8626/adapters/dsh/plugin/cordis.patch.yml) · **Identity:** `dsh-engramory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `long-term-memory` `filesystem-read` `filesystem-write` `guard` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **W117C DSH Memory** · [W117C/dsh-memory@78fce61](https://github.com/W117C/dsh-memory/commit/78fce61abb0792706020516ff643ca208852ad63) — Implements a cognitive memory system with SQLite vector storage, local embeddings, tools, and a web panel.
  - **Evidence:** [manifest](https://github.com/W117C/dsh-memory/blob/78fce61abb0792706020516ff643ca208852ad63/package.json) → [patch](https://github.com/W117C/dsh-memory/blob/78fce61abb0792706020516ff643ca208852ad63/cordis.patch.yml) · **Identity:** `@dsh-plugins/memory`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `persistent-memory` `sqlite` `native-dependencies` `local-embeddings` `filesystem-write` `model-tools` `client-injection` `github-only` · **Review:** A fixed GitHub source identity is documented; no native dependency, database, embedding model, memory tool, or browser panel was loaded.

#### Safety & Approvals

- **DSH Popper** · [1473382/dsh-popper@d6130c0](https://github.com/1473382/dsh-popper/commit/d6130c052068147af9b9ac87b9f8c3729bb02f5b) — A falsification-driven session loop with claim gates, competing hypotheses, and an append-only evidence ledger.
  - **Evidence:** [manifest](https://github.com/1473382/dsh-popper/blob/d6130c052068147af9b9ac87b9f8c3729bb02f5b/package.json) → [patch](https://github.com/1473382/dsh-popper/blob/d6130c052068147af9b9ac87b9f8c3729bb02f5b/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `system-prompt` `tool-gating` `session-data` `filesystem-write` `github-only` · **Review:** Git-source installation is documented, but the unpublished scoped package name and manifest repository field do not establish an official npm identity; no gate or session write was executed.

- **DSH Turn Approval** · [arrow949/dsh-turn-approval@5b4cbfd](https://github.com/arrow949/dsh-turn-approval/commit/5b4cbfd425885ed3f3ed93c796d5113847cc93b8) — Turn-scoped approval rules that expire after the current task.
  - **Evidence:** [manifest](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/package.json) → [patch](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/cordis.patch.yml) · **Identity:** `dsh-turn-approval`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `permission-control` · **Review:** Only a Cordis peer is declared, so DSH compatibility remains unknown.

- **DSH Island** · [cdxiaodong/dsh-island@c7cd407](https://github.com/cdxiaodong/dsh-island/commit/c7cd407be48b731d910af946a81a6dc58aa690ca) — A macOS menu-bar island and whale companion that displays DSH sessions, tools, progress, and approval requests.
  - **Evidence:** [manifest](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/package.json) → [patch](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/cordis.patch.yml) · **Identity:** `dsh-island`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `native-executable` `subprocess` `tool-arguments` `approval` `session-data` · **Review:** The source spawns a bundled macOS panel and forwards tool arguments, session paths, and approval decisions over a local socket; no native code or prepublish hook was executed.

- **DSH Workspace Only** · [CsBpRd/dsh-workspace-only-plugin@a2682d3](https://github.com/CsBpRd/dsh-workspace-only-plugin/commit/a2682d35c390b2443b0371d5db925ee71e744715) — Adds a policy switch intended to confine file access for every sandbox mode to the session workspace.
  - **Evidence:** [manifest](https://github.com/CsBpRd/dsh-workspace-only-plugin/blob/a2682d35c390b2443b0371d5db925ee71e744715/package.json) → [patch](https://github.com/CsBpRd/dsh-workspace-only-plugin/blob/a2682d35c390b2443b0371d5db925ee71e744715/cordis.patch.yml) · **Identity:** `dsh-workspace-only-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `approval-hook` `core-patch` `remote-installer` `filesystem-write` `policy-control` · **Review:** The documented setup downloads an installer and patches DSH core plus another plugin to alter approval policy; the installer and patch scripts were not executed.

- **DSH Auth** · [hxy91819/dsh-auth@ea8e827](https://github.com/hxy91819/dsh-auth/commit/ea8e82707167ef5bb8036370ea0e618caacd9da4) — A single-account authentication bundle designed to run behind Nginx for DSH Web.
  - **Evidence:** [manifest](https://github.com/hxy91819/dsh-auth/blob/ea8e82707167ef5bb8036370ea0e618caacd9da4/package.json) → [patch](https://github.com/hxy91819/dsh-auth/blob/ea8e82707167ef5bb8036370ea0e618caacd9da4/cordis.patch.yml) · **Identity:** `dsh-auth`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · mixed peer ranges
  - **Signals:** `authentication` `credentials` `reverse-proxy` `session-data` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Approval LLM** · [Letter2025/dsh-approval-llm@af70355](https://github.com/Letter2025/dsh-approval-llm/commit/af70355a3c48c15f1ec8ac31c39fa279e895c168) — An LLM-assisted approval layer for evaluating sensitive tool actions.
  - **Evidence:** [manifest](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/package.json) → [patch](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/cordis.patch.yml) · **Identity:** `dsh-approval-llm`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `permission-control` `llm-call` · **Review:** Broad peer ranges leave compatibility unknown; repository license detection was unavailable.

- **Upstream Radar** · [MicroMilo/upstream-radar@0519c00](https://github.com/MicroMilo/upstream-radar/commit/0519c00d8fb77b375748151dcb6365d25e04c86c) — Dependency security monitoring for vulnerable transitive paths and breaking plugin updates.
  - **Evidence:** [manifest](https://github.com/MicroMilo/upstream-radar/blob/0519c00d8fb77b375748151dcb6365d25e04c86c/package.json) → [patch](https://github.com/MicroMilo/upstream-radar/blob/0519c00d8fb77b375748151dcb6365d25e04c86c/cordis.patch.yml) · **Identity:** `upstream-radar`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `dependency-audit` `vulnerability-data` `external-network` `filesystem-read` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Check** · [stimQQ/dshplugins@b48002d](https://github.com/stimQQ/dshplugins/commit/b48002d5ff6b78d5a205250d4f4920d5d0f2a66d) — Audits installed plugins for broken packages, stale DSH pins, and install-time code, then drafts repair issues.
  - **Evidence:** [manifest](https://github.com/stimQQ/dshplugins/blob/b48002d5ff6b78d5a205250d4f4920d5d0f2a66d/packages/dsh-plugin-check/package.json) → [patch](https://github.com/stimQQ/dshplugins/blob/b48002d5ff6b78d5a205250d4f4920d5d0f2a66d/packages/dsh-plugin-check/cordis.patch.yml) · **Identity:** `dsh-plugin-check`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-audit` `dependency-audit` `lifecycle-scan` `issue-drafting` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Prior Probe** · [SuTang-vain/dsh-self-harness-tools@373b454](https://github.com/SuTang-vain/dsh-self-harness-tools/commit/373b4548bba62872cf25748b04f5407e00e75882) — Frozen probe batteries with deterministic offline scoring and optional single-shot provider calls.
  - **Evidence:** [manifest](https://github.com/SuTang-vain/dsh-self-harness-tools/blob/373b4548bba62872cf25748b04f5407e00e75882/plugins/prior-probe/package.json) → [patch](https://github.com/SuTang-vain/dsh-self-harness-tools/blob/373b4548bba62872cf25748b04f5407e00e75882/plugins/prior-probe/cordis.patch.yml) · **Identity:** `dsh-prior-probe`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `evaluation` `regex-scoring` `model-tools` `external-network` `credentials` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DeepSeek Harness Auth** · [taichuy/deepseek-harness-auth@5399726](https://github.com/taichuy/deepseek-harness-auth/commit/539972671d1ba2c2d1fa12d5a2b2d53617249de5) — A fail-closed password authentication proxy bundle for the DSH Web profile.
  - **Evidence:** [manifest](https://github.com/taichuy/deepseek-harness-auth/blob/539972671d1ba2c2d1fa12d5a2b2d53617249de5/package.json) → [patch](https://github.com/taichuy/deepseek-harness-auth/blob/539972671d1ba2c2d1fa12d5a2b2d53617249de5/cordis.patch.yml) · **Identity:** `deepseek-harness-auth`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · mixed peer ranges
  - **Signals:** `authentication` `reverse-proxy` `credentials` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Trust Center** · [TonyWang-hub/dsh-plugin-trust-center@ba0b0aa](https://github.com/TonyWang-hub/dsh-plugin-trust-center/commit/ba0b0aa2e3a895704eeff0a04dda3d5fbb60a84a) — Evidence-first static inspection, compatibility checks, quarantine, receipts, snapshots, and controlled promotion for DSH plugins.
  - **Evidence:** [manifest](https://github.com/TonyWang-hub/dsh-plugin-trust-center/blob/ba0b0aa2e3a895704eeff0a04dda3d5fbb60a84a/package.json) → [patch](https://github.com/TonyWang-hub/dsh-plugin-trust-center/blob/ba0b0aa2e3a895704eeff0a04dda3d5fbb60a84a/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `plugin-audit` `quarantine` `sbom` `snapshot` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Defensive Prompt Injection** · [Tough-Respawn/defensive-prompt-injection@7384be5](https://github.com/Tough-Respawn/defensive-prompt-injection/commit/7384be59f6380d047014fb99f348cab137759d70) — A fail-closed action gate that applies defensive prompt-injection rules inside DSH.
  - **Evidence:** [manifest](https://github.com/Tough-Respawn/defensive-prompt-injection/blob/7384be59f6380d047014fb99f348cab137759d70/packages/deepseek-harness/package.json) → [patch](https://github.com/Tough-Respawn/defensive-prompt-injection/blob/7384be59f6380d047014fb99f348cab137759d70/packages/deepseek-harness/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `prompt-injection-defense` `approval-gate` `filesystem-read` `local-install` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH AutoGate** · [wangxing-git/dsh-autogate@dad7c04](https://github.com/wangxing-git/dsh-autogate/commit/dad7c04a3a435fcdeca67e29deabc46b7a4c718f) — A workspace-sandboxed automatic approval tier using deterministic rules, LLM adjudication, and human escalation.
  - **Evidence:** [manifest](https://github.com/wangxing-git/dsh-autogate/blob/dad7c04a3a435fcdeca67e29deabc46b7a4c718f/package.json) → [patch](https://github.com/wangxing-git/dsh-autogate/blob/dad7c04a3a435fcdeca67e29deabc46b7a4c718f/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `approval-gate` `sandbox-policy` `model-request` `human-escalation` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Whale Status** · [WhaleHarness/WhaleHarness@1bf6c4c](https://github.com/WhaleHarness/WhaleHarness/commit/1bf6c4c4047565e524fef6f554a9edc4940fbd8d) — Checks site health, TLS, DNS, tarball integrity, local plugin verification, and update state.
  - **Evidence:** [manifest](https://github.com/WhaleHarness/WhaleHarness/blob/1bf6c4c4047565e524fef6f554a9edc4940fbd8d/plugins/whale-status/package.json) → [patch](https://github.com/WhaleHarness/WhaleHarness/blob/1bf6c4c4047565e524fef6f554a9edc4940fbd8d/plugins/whale-status/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `site-health` `tls` `dependency-audit` `integrity-check` `external-network` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Vet** · [wulun811/dsh-plugin-vet@2ef0b8d](https://github.com/wulun811/dsh-plugin-vet/commit/2ef0b8ded090723cab83134cc7c536e7f9e5ee26) — A plugin trust pipeline combining deterministic scans, runtime sentinels, audit skills, and a GUI shield.
  - **Evidence:** [manifest](https://github.com/wulun811/dsh-plugin-vet/blob/2ef0b8ded090723cab83134cc7c536e7f9e5ee26/package.json) → [patch](https://github.com/wulun811/dsh-plugin-vet/blob/2ef0b8ded090723cab83134cc7c536e7f9e5ee26/cordis.patch.yml) · **Identity:** `@jieai/dsh-plugin-vet`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `plugin-audit` `runtime-monitor` `filesystem-skill` `client-injection` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Remote** · [xgone/dsh-remote@92e59d1](https://github.com/xgone/dsh-remote/commit/92e59d1e41dfe50b0c4975788ff3a40200044c91) — Adds a login gate, MFA, signed sessions, role controls, and remote-friendly directory selection to DSH Web.
  - **Evidence:** [manifest](https://github.com/xgone/dsh-remote/blob/92e59d1e41dfe50b0c4975788ff3a40200044c91/package.json) → [patch](https://github.com/xgone/dsh-remote/blob/92e59d1e41dfe50b0c4975788ff3a40200044c91/cordis.patch.yml) · **Identity:** `@xgone/dsh-remote`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `authentication` `password-storage` `totp` `session-cookies` `role-based-access` `filesystem-write` `web-route` `client-injection` `high-trust-surface` · **Review:** The fixed source is 0.1.4 while npm exposes 0.1.5 from the same repository; no bootstrap account, password hash, MFA, cookie, access gate, or filesystem action was executed.

- **DeepSeek Peak Blocker** · [zisekongling/deepseek-peak-blocker@db54633](https://github.com/zisekongling/deepseek-peak-blocker/commit/db54633ce5e251f9427d12c1366a9eff6314cfc9) — Intercepts DeepSeek Official requests during configured peak windows and asks the user to continue or cancel.
  - **Evidence:** [manifest](https://github.com/zisekongling/deepseek-peak-blocker/blob/db54633ce5e251f9427d12c1366a9eff6314cfc9/package.json) → [patch](https://github.com/zisekongling/deepseek-peak-blocker/blob/db54633ce5e251f9427d12c1366a9eff6314cfc9/cordis.patch.yml) · **Identity:** `deepseek-peak-blocker`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `model-interrupt` `request-gating` `user-confirmation` `agent-events` `web-route` `client-injection` `github-only` · **Review:** The repository documents fixed GitHub-source installation; no request interception, bypass command, user decision, HTTP endpoint, or browser UI was executed.

- **DSH Poison Guard** · [zoahdev/dsh-poison-guard@7be8ffd](https://github.com/zoahdev/dsh-poison-guard/commit/7be8ffd0470e47145f0fe9dd7cc1ba4982646811) — A pre-install supply-chain scanner using AST analysis, deobfuscation, and heuristics for exfiltration and dynamic code.
  - **Evidence:** [manifest](https://github.com/zoahdev/dsh-poison-guard/blob/7be8ffd0470e47145f0fe9dd7cc1ba4982646811/package.json) → [patch](https://github.com/zoahdev/dsh-poison-guard/blob/7be8ffd0470e47145f0fe9dd7cc1ba4982646811/cordis.patch.yml) · **Identity:** `dsh-poison-guard`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `supply-chain-scan` `ast-analysis` `deobfuscation` `filesystem-read` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

#### Integrations

- **Chicheng Gate** · [534119219/chicheng-gate@155dbf6](https://github.com/534119219/chicheng-gate/commit/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876) — Adds LAN and tunneled DSH panel access with a password gate, trusted-host configuration, and managed frpc connectivity.
  - **Evidence:** [manifest](https://github.com/534119219/chicheng-gate/blob/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876/package.json) → [patch](https://github.com/534119219/chicheng-gate/blob/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876/cordis.patch.yml) · **Identity:** `chicheng-gate`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `remote-access` `credentials` `remote-binary-download` `subprocess` `filesystem-write` · **Review:** Static source shows frpc download with checksum verification, archive extraction, credential storage, subprocess launch, and DSH restart paths; none were executed.

- **DSH Custom Provider Reasoning** · [534119219/dsh-custom-provider-reasoning@86ae352](https://github.com/534119219/dsh-custom-provider-reasoning/commit/86ae352b91237b1274bf76a642d645dfd1fba276) — Adds selectable reasoning-effort metadata to hand-declared custom provider models.
  - **Evidence:** [manifest](https://github.com/534119219/dsh-custom-provider-reasoning/blob/86ae352b91237b1274bf76a642d645dfd1fba276/package.json) → [patch](https://github.com/534119219/dsh-custom-provider-reasoning/blob/86ae352b91237b1274bf76a642d645dfd1fba276/cordis.patch.yml) · **Identity:** `dsh-custom-provider-reasoning`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `model-routing` `provider-metadata` `settings-write` `client-injection` `github-only` · **Review:** GitHub dependency installation is documented; provider metadata and settings changes were reviewed statically and were not applied.

- **DSH Notify Win** · [Andyqwe44/dsh-notify-win@a26c182](https://github.com/Andyqwe44/dsh-notify-win/commit/a26c1825a02dd077ef68b40095f6d33d91550e49) — Shows native Windows task and question notifications, flashes the taskbar, and can return toast answers to DSH.
  - **Evidence:** [manifest](https://github.com/Andyqwe44/dsh-notify-win/blob/a26c1825a02dd077ef68b40095f6d33d91550e49/package.json) → [patch](https://github.com/Andyqwe44/dsh-notify-win/blob/a26c1825a02dd077ef68b40095f6d33d91550e49/cordis.patch.yml) · **Identity:** `dsh-notify-win`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `native-executable` `powershell` `subprocess` `question-data` `filesystem` · **Review:** The package ships an executable plus PowerShell and VBScript helpers and spawns notification processes; no native helper, subprocess, question flow, or prepublish hook was executed.

- **DSH QQ Remote** · [ASAKAFENG/dsh-qq-remote@b724335](https://github.com/ASAKAFENG/dsh-qq-remote/commit/b724335a194d217f51dedbfd799d02ae67559d3b) — Controls DSH over a OneBot QQ bridge with remote commands, task dispatch, screenshots, chat, sessions, and progress events.
  - **Evidence:** [manifest](https://github.com/ASAKAFENG/dsh-qq-remote/blob/b724335a194d217f51dedbfd799d02ae67559d3b/package.json) → [patch](https://github.com/ASAKAFENG/dsh-qq-remote/blob/b724335a194d217f51dedbfd799d02ae67559d3b/cordis.patch.yml) · **Identity:** `@dsh-external/dsh-qq-remote`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `remote-command-execution` `external-network` `credentials` `screenshot` `session-data` `subprocess` · **Review:** The fixed source exposes remote command, screenshot, session, file, credential, and subprocess surfaces through QQ; its separate installer and all runtime paths were not executed.

- **DSH WeChat Pro** · [bwhite55/dsh-wechat-pro@c726696](https://github.com/bwhite55/dsh-wechat-pro/commit/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357) — Connects WeChat contacts to real DSH workspaces, sessions, prompts, approvals, event streams, and media transfers.
  - **Evidence:** [manifest](https://github.com/bwhite55/dsh-wechat-pro/blob/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357/package.json) → [patch](https://github.com/bwhite55/dsh-wechat-pro/blob/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357/cordis.patch.yml) · **Identity:** `dsh-wechat-pro`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `external-network` `credentials` `session-data` `approval` `file-transfer` `filesystem-write` · **Review:** The package uses wildcard DSH peers and handles WeChat credentials, prompts, approvals, session events, and media files; none were runtime-tested.

- **DSH OpenCode** · [chiro2001/dsh-oc@1ed1c51](https://github.com/chiro2001/dsh-oc/commit/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b) — Bridges DSH sessions to an OpenCode terminal interface with model credentials, filesystem access, and native runtime support.
  - **Evidence:** [manifest](https://github.com/chiro2001/dsh-oc/blob/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b/package.json) → [patch](https://github.com/chiro2001/dsh-oc/blob/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b/cordis.patch.yml) · **Identity:** `@chiro2001/dsh-oc`
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `external-application` `remote-binary-download` `subprocess` `credentials` `filesystem` `session-data` · **Review:** The Git-source bundle declares rc.6 peers and can download or launch an OpenCode runtime while exposing credentials, files, and sessions; none of those paths was executed.

- **DSH Collab Sync** · [cxxy161/dsh-collab-sync@22945f8](https://github.com/cxxy161/dsh-collab-sync/commit/22945f8a3a43199f76d82836a40d75c3744762ad) — Coordinates multiple clients on one DSH backend with writer locks, session-log repair, remote access settings, and collaboration partitions.
  - **Evidence:** [manifest](https://github.com/cxxy161/dsh-collab-sync/blob/22945f8a3a43199f76d82836a40d75c3744762ad/package.json) → [patch](https://github.com/cxxy161/dsh-collab-sync/blob/22945f8a3a43199f76d82836a40d75c3744762ad/cordis.patch.yml) · **Identity:** `dsh-collab-sync`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-data` `filesystem-write` `data-repair` `remote-access` `configuration-write` · **Review:** Broad DSH version ranges are declared and the source can repair compressed session logs, change host exposure, and write configuration; none was executed.

- **DSH QQBot Community** · [DLive/dsh-qqbot-community@c65813f](https://github.com/DLive/dsh-qqbot-community/commit/c65813fff5185f76e37f459f4daef575deaa8e6f) — Connects QQ Official Bot conversations to DSH sessions, prompts, event streams, and media handling.
  - **Evidence:** [manifest](https://github.com/DLive/dsh-qqbot-community/blob/c65813fff5185f76e37f459f4daef575deaa8e6f/package.json) → [patch](https://github.com/DLive/dsh-qqbot-community/blob/c65813fff5185f76e37f459f4daef575deaa8e6f/cordis.patch.yml) · **Identity:** `dsh-qqbot-community`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `external-network` `credentials` `websocket` `session-data` `file-transfer` `prepublish-build` · **Review:** The public package maps to this repository and the source connects to QQ with credentials while forwarding messages and media; no network, file, session, or prepublish action was executed.

- **DSH MCP Bridge** · [Edge-Echo/dsh-mcp-bridge@7768dc3](https://github.com/Edge-Echo/dsh-mcp-bridge/commit/7768dc3d3b7d65bca896a7c4eece170cb004439e) — A bridge for exposing MCP servers and tools through a DSH Web bundle.
  - **Evidence:** [manifest](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/package.json) → [patch](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/cordis.patch.yml) · **Identity:** `dsh-mcp-bridge`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `mcp` `subprocess` `external-tools` · **Review:** Web bundle structure was confirmed; the README records a separate headless dependency limitation.

- **DSH Voice Info** · [flyingtimes/dsh-voice-info@819bd53](https://github.com/flyingtimes/dsh-voice-info/commit/819bd534a00c810a7f72d9b787e71a760875eb12) — Context-aware turn summaries and alerts spoken through a Bluetooth speaker using a local CLI.
  - **Evidence:** [manifest](https://github.com/flyingtimes/dsh-voice-info/blob/819bd534a00c810a7f72d9b787e71a760875eb12/package.json) → [patch](https://github.com/flyingtimes/dsh-voice-info/blob/819bd534a00c810a7f72d9b787e71a760875eb12/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `audio` `bluetooth` `subprocess` `session-data` `filesystem-write` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH API Quota** · [ganfne123/dsh-plugin-api-quota@a571a35](https://github.com/ganfne123/dsh-plugin-api-quota/commit/a571a35773d517aca7a3e2f3c28876919c9ea3eb) — A sidebar panel that checks and displays DeepSeek API-key balance and quota.
  - **Evidence:** [manifest](https://github.com/ganfne123/dsh-plugin-api-quota/blob/a571a35773d517aca7a3e2f3c28876919c9ea3eb/package.json) → [patch](https://github.com/ganfne123/dsh-plugin-api-quota/blob/a571a35773d517aca7a3e2f3c28876919c9ea3eb/cordis.patch.yml) · **Identity:** `dsh-plugin-api-quota`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `credentials` `external-network` `account-balance` `client-injection` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Web Remote** · [godchen520/dsh-web-remote@c852cee](https://github.com/godchen520/dsh-web-remote/commit/c852cee2a882cc29544c9ceaef1844410246a042) — Remote Web access through Cloudflare Quick Tunnels or local HTTP, with token proxying and a mobile control panel.
  - **Evidence:** [manifest](https://github.com/godchen520/dsh-web-remote/blob/c852cee2a882cc29544c9ceaef1844410246a042/package.json) → [patch](https://github.com/godchen520/dsh-web-remote/blob/c852cee2a882cc29544c9ceaef1844410246a042/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `remote-access` `external-network` `authentication` `local-web-server` `cloudflare` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Notion Manager** · [Graffiti-yH/dsh-notion-manager@4cc011a](https://github.com/Graffiti-yH/dsh-notion-manager/commit/4cc011aedb18f619a15c1cddb38a264376080637) — Exposes Notion search, pages, databases, blocks, comments, and users as DSH agent tools.
  - **Evidence:** [manifest](https://github.com/Graffiti-yH/dsh-notion-manager/blob/4cc011aedb18f619a15c1cddb38a264376080637/package.json) → [patch](https://github.com/Graffiti-yH/dsh-notion-manager/blob/4cc011aedb18f619a15c1cddb38a264376080637/cordis.patch.yml) · **Identity:** `dsh-notion-manager`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `notion-api` `credentials` `external-network` `model-tools` `content-write` `github-only` · **Review:** The fixed source supports credential references and broad Notion read and write tools; no token, workspace request, or content mutation was performed.

- **DSH YZJ Bridge** · [GuoxinShan/dsh-yzj@1415eae](https://github.com/GuoxinShan/dsh-yzj/commit/1415eaed78d170d90a4a7a1133373a03d6dcf612) — A profile bundle connecting Yunzhijia CLI capabilities, model tools, rich cards, and a workspace panel.
  - **Evidence:** [manifest](https://github.com/GuoxinShan/dsh-yzj/blob/1415eaed78d170d90a4a7a1133373a03d6dcf612/packages/bundle/package.json) → [patch](https://github.com/GuoxinShan/dsh-yzj/blob/1415eaed78d170d90a4a7a1133373a03d6dcf612/packages/bundle/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `enterprise-messaging` `model-tools` `client-injection` `credentials` `subprocess` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Minecraft Launcher** · [hellosky983/dsh-mc-launcher@f68a7cd](https://github.com/hellosky983/dsh-mc-launcher/commit/f68a7cd5e9e8bec778c8db2550980edbe2ef87d3) — A full-screen Minecraft launcher with Microsoft login, version installation, and game launch.
  - **Evidence:** [manifest](https://github.com/hellosky983/dsh-mc-launcher/blob/f68a7cd5e9e8bec778c8db2550980edbe2ef87d3/package.json) → [patch](https://github.com/hellosky983/dsh-mc-launcher/blob/f68a7cd5e9e8bec778c8db2550980edbe2ef87d3/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `external-network` `credentials` `filesystem-write` `subprocess` `game-launcher` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Orbis Remote DSH** · [icodesign/orbis@b9a8aad](https://github.com/icodesign/orbis/commit/b9a8aad0caeb54a209edb884b1e6c9b96c4f7d6e) — Remote DSH workspace access through Orbis, including session, directory, credential, and provider integration.
  - **Evidence:** [manifest](https://github.com/icodesign/orbis/blob/b9a8aad0caeb54a209edb884b1e6c9b96c4f7d6e/packages/orbis-remote-dsh/package.json) → [patch](https://github.com/icodesign/orbis/blob/b9a8aad0caeb54a209edb884b1e6c9b96c4f7d6e/packages/orbis-remote-dsh/cordis.patch.yml) · **Identity:** `@orbisapp/remote-dsh`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `remote-access` `credentials` `session-data` `filesystem-write` `external-network` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH ChatNode WeChat** · [Jesse-njx/dsh-chatnode-wechat@a724da3](https://github.com/Jesse-njx/dsh-chatnode-wechat/commit/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745) — A WeChat chat-node integration for connecting conversations to DeepSeek Harness.
  - **Evidence:** [manifest](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/package.json) → [patch](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/cordis.patch.yml) · **Identity:** `dsh-chatnode-wechat`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `external-network` `messaging` `source-build` · **Review:** A prepare build can execute on source install; rc.6 support is documented but not declared as peers.

- **DSH DeepSeek Billing** · [Jolly-J/dsh-deepseek-billing@1c4642a](https://github.com/Jolly-J/dsh-deepseek-billing/commit/1c4642aeb13df1c06f80f76fbb73a926bb8f593e) — A sidebar balance display and per-session DeepSeek cost estimator.
  - **Evidence:** [manifest](https://github.com/Jolly-J/dsh-deepseek-billing/blob/1c4642aeb13df1c06f80f76fbb73a926bb8f593e/package.json) → [patch](https://github.com/Jolly-J/dsh-deepseek-billing/blob/1c4642aeb13df1c06f80f76fbb73a926bb8f593e/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `account-balance` `credentials` `session-data` `external-network` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Provider Quick Config** · [lo2589/deepseek-harness-provider@bff762a](https://github.com/lo2589/deepseek-harness-provider/commit/bff762ad720a8613a3283480fb120d602891685d) — A send-button panel for configuring provider routes, models, API keys, and local-model synchronization.
  - **Evidence:** [manifest](https://github.com/lo2589/deepseek-harness-provider/blob/bff762ad720a8613a3283480fb120d602891685d/dsh-provider-quick-config/package.json) → [patch](https://github.com/lo2589/deepseek-harness-provider/blob/bff762ad720a8613a3283480fb120d602891685d/dsh-provider-quick-config/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `provider-config` `credentials` `external-network` `configuration-write` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **MMX Quota Tool** · [mtty-ai/mmx-quota-tool@4b3a534](https://github.com/mtty-ai/mmx-quota-tool/commit/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c) — A MiniMax token-plan quota indicator and detail panel for DSH Web.
  - **Evidence:** [manifest](https://github.com/mtty-ai/mmx-quota-tool/blob/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c/package.json) → [patch](https://github.com/mtty-ai/mmx-quota-tool/blob/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `account-quota` `credentials` `external-network` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Open Design DSH Runtime** · [nexu-io/open-design@62483a1](https://github.com/nexu-io/open-design/commit/62483a1947b5c5e7b3fffe24b52b685d93ad9209) — An integrity-pinned profile runtime that connects Open Design to a user-installed DSH over JSONL stdio.
  - **Evidence:** [manifest](https://github.com/nexu-io/open-design/blob/62483a1947b5c5e7b3fffe24b52b685d93ad9209/packages/dsh-runtime/package.json) → [patch](https://github.com/nexu-io/open-design/blob/62483a1947b5c5e7b3fffe24b52b685d93ad9209/packages/dsh-runtime/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `stdio` `subprocess` `profile-bundle` `session-data` `integrity-check` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Gauge** · [noone89A/dsh-gauge@ca176d7](https://github.com/noone89A/dsh-gauge/commit/ca176d7658661c91bdea666102a51692fc3d88d6) — Cache-hit, token-usage, price-window, and session cost statistics for DSH Web.
  - **Evidence:** [manifest](https://github.com/noone89A/dsh-gauge/blob/ca176d7658661c91bdea666102a51692fc3d88d6/package.json) → [patch](https://github.com/noone89A/dsh-gauge/blob/ca176d7658661c91bdea666102a51692fc3d88d6/cordis.patch.yml) · **Identity:** `dsh-gauge`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `token-meter` `cost-estimation` `session-data` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Lark Bot** · [PlutoKeating/dsh-lark-bot@6a5be5b](https://github.com/PlutoKeating/dsh-lark-bot/commit/6a5be5b9b98fc2bb18395ea7c05d70a12fc6db53) — A Feishu and Lark bridge with streaming cards, project workspaces, approvals, and schedules.
  - **Evidence:** [manifest](https://github.com/PlutoKeating/dsh-lark-bot/blob/6a5be5b9b98fc2bb18395ea7c05d70a12fc6db53/package.json) → [patch](https://github.com/PlutoKeating/dsh-lark-bot/blob/6a5be5b9b98fc2bb18395ea7c05d70a12fc6db53/cordis.patch.yml) · **Identity:** `dsh-lark-bot`
  - **Licenses:** repo `AGPL-3.0` / package `AGPL-3.0` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `enterprise-messaging` `credentials` `session-data` `approval-forwarding` `external-network` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH WebGate** · [pppolf/dsh-webgate@9ac449a](https://github.com/pppolf/dsh-webgate/commit/9ac449aac9777879857dd67c9d827774c6df9413) — Remote access over LAN QR links, Cloudflare tunnels, or FRP reverse proxy with a login portal.
  - **Evidence:** [manifest](https://github.com/pppolf/dsh-webgate/blob/9ac449aac9777879857dd67c9d827774c6df9413/package.json) → [patch](https://github.com/pppolf/dsh-webgate/blob/9ac449aac9777879857dd67c9d827774c6df9413/cordis.patch.yml) · **Identity:** `dsh-webgate`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `remote-access` `cloudflare` `reverse-proxy` `authentication` `external-network` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH XiaoTangYuan Game** · [qimidandapigu/dsh-xiaotangyuan-game@52baef4](https://github.com/qimidandapigu/dsh-xiaotangyuan-game/commit/52baef4df34c961ee7914e75c02eba84b8838db9) — A game AI runtime that detects and installs supported game adapters from verified releases.
  - **Evidence:** [manifest](https://github.com/qimidandapigu/dsh-xiaotangyuan-game/blob/52baef4df34c961ee7914e75c02eba84b8838db9/apps/harness-plugin/package.json) → [patch](https://github.com/qimidandapigu/dsh-xiaotangyuan-game/blob/52baef4df34c961ee7914e75c02eba84b8838db9/apps/harness-plugin/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `game-integration` `external-download` `filesystem-write` `subprocess` `credentials` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Call Me** · [radres/dsh-plugin-call-me@af1a21b](https://github.com/radres/dsh-plugin-call-me/commit/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c) — Places a real phone call so spoken questions and replies can steer the active agent run.
  - **Evidence:** [manifest](https://github.com/radres/dsh-plugin-call-me/blob/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c/package.json) → [patch](https://github.com/radres/dsh-plugin-call-me/blob/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `telephony` `audio` `credentials` `external-network` `agent-steering` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Notify Center** · [SingleOne/dsh-notify-center@50778f7](https://github.com/SingleOne/dsh-notify-center/commit/50778f749e6fe55f731767fb79c2b0f2158ad61e) — Native desktop and webhook notifications for agent, session, title, and approval events.
  - **Evidence:** [manifest](https://github.com/SingleOne/dsh-notify-center/blob/50778f749e6fe55f731767fb79c2b0f2158ad61e/package.json) → [patch](https://github.com/SingleOne/dsh-notify-center/blob/50778f749e6fe55f731767fb79c2b0f2158ad61e/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `desktop-notification` `webhook` `session-data` `approval-events` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Godot Bridge** · [Smalldy/godot-bridge@ac81927](https://github.com/Smalldy/godot-bridge/commit/ac81927d66d872db8f00a12431e748345b92dfc6) — Launches and drives a running Godot game through its TCP interaction server using native agent tools.
  - **Evidence:** [manifest](https://github.com/Smalldy/godot-bridge/blob/ac81927d66d872db8f00a12431e748345b92dfc6/package.json) → [patch](https://github.com/Smalldy/godot-bridge/blob/ac81927d66d872db8f00a12431e748345b92dfc6/cordis.patch.yml) · **Identity:** `godot-bridge`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `godot` `tcp` `game-integration` `subprocess` `model-tools` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Bottom Info Bar** · [songoao25/bottom-info-bar@06a554e](https://github.com/songoao25/bottom-info-bar/commit/06a554e6862fa4194e48eda83626f09b449d89f6) — A composer status bar for provider, model, live balance, peak pricing, countdowns, and spend totals.
  - **Evidence:** [manifest](https://github.com/songoao25/bottom-info-bar/blob/06a554e6862fa4194e48eda83626f09b449d89f6/plugin/package.json) → [patch](https://github.com/songoao25/bottom-info-bar/blob/06a554e6862fa4194e48eda83626f09b449d89f6/plugin/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `account-balance` `cost-estimation` `credentials` `session-data` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH MoodBall** · [sundusk/dsh-moodball@f6d1640](https://github.com/sundusk/dsh-moodball/commit/f6d1640e12232e21f71438ac7a6e68533e8af57f) — Serves agent activity state to a companion macOS desktop mood indicator.
  - **Evidence:** [manifest](https://github.com/sundusk/dsh-moodball/blob/f6d1640e12232e21f71438ac7a6e68533e8af57f/package.json) → [patch](https://github.com/sundusk/dsh-moodball/blob/f6d1640e12232e21f71438ac7a6e68533e8af57f/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `desktop-app` `session-data` `local-web-server` `macos` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH LLM USTC** · [USTC-XeF2/dsh-llm-ustc@6290fbb](https://github.com/USTC-XeF2/dsh-llm-ustc/commit/6290fbbebb05d0d3658af8fbc388c0918106714b) — A USTC language-model provider with a provider-scoped iWAN tunnel.
  - **Evidence:** [manifest](https://github.com/USTC-XeF2/dsh-llm-ustc/blob/6290fbbebb05d0d3658af8fbc388c0918106714b/package.json) → [patch](https://github.com/USTC-XeF2/dsh-llm-ustc/blob/6290fbbebb05d0d3658af8fbc388c0918106714b/cordis.patch.yml) · **Identity:** `dsh-llm-ustc`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `model-provider` `credentials` `network-tunnel` `external-network` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH OpenCode Go Usage** · [Xenia0922/dsh-opencode-go-usage@f7a7192](https://github.com/Xenia0922/dsh-opencode-go-usage/commit/f7a71928f0c5040a58cf45f6e41e4ac05da43317) — A draggable dashboard for OpenCode Go quota, per-request usage, and spending.
  - **Evidence:** [manifest](https://github.com/Xenia0922/dsh-opencode-go-usage/blob/f7a71928f0c5040a58cf45f6e41e4ac05da43317/package.json) → [patch](https://github.com/Xenia0922/dsh-opencode-go-usage/blob/f7a71928f0c5040a58cf45f6e41e4ac05da43317/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `account-quota` `cost-estimation` `external-network` `client-injection` `identity-collision` · **Review:** The npm identity maps to another repository, so this record is pinned only to the documented local source and does not claim the npm package.

- **DSH Codex** · [Yan-Zero/dsh-codex@621b218](https://github.com/Yan-Zero/dsh-codex/commit/621b218f51080413094bc1d16e37f37142afd89d) — Connects ChatGPT OAuth, Codex models, search, remote image reading, and image generation to DSH.
  - **Evidence:** [manifest](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/package.json) → [patch](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/cordis.patch.yml) · **Identity:** `dsh-codex`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `external-network` `credentials` `llm-call` `web-search` `image-generation` · **Review:** The fixed bundle is structurally valid; broad wildcard DSH peers and OAuth/model network access require independent compatibility and trust review.

- **DSH Bridges** · [yhlooo/dsh-bridges@3110789](https://github.com/yhlooo/dsh-bridges/commit/311078914fcb46d7008da56641501a984472c432) — Imports project conventions from Claude Code, Codex, OpenCode, CodeBuddy, Pi, Gemini CLI, and Cursor.
  - **Evidence:** [manifest](https://github.com/yhlooo/dsh-bridges/blob/311078914fcb46d7008da56641501a984472c432/package.json) → [patch](https://github.com/yhlooo/dsh-bridges/blob/311078914fcb46d7008da56641501a984472c432/cordis.patch.yml) · **Identity:** `dsh-bridges`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `project-import` `filesystem-read` `filesystem-skill` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Cost Usage Status** · [Zenjibad/deepseek-cost-usage-status-plugin@3d6f68e](https://github.com/Zenjibad/deepseek-cost-usage-status-plugin/commit/3d6f68e569bdd74d974dc75544601dbe738dda3d) — A live composer dashboard for model, peak pricing, session cost, burn rate, and account balance.
  - **Evidence:** [manifest](https://github.com/Zenjibad/deepseek-cost-usage-status-plugin/blob/3d6f68e569bdd74d974dc75544601dbe738dda3d/package.json) → [patch](https://github.com/Zenjibad/deepseek-cost-usage-status-plugin/blob/3d6f68e569bdd74d974dc75544601dbe738dda3d/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `account-balance` `cost-estimation` `credentials` `session-data` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH IM Gateway** · [zhuiyueya/dsh-im-gateway@f4b166d](https://github.com/zhuiyueya/dsh-im-gateway/commit/f4b166d5bb896d640515d7bfd887db37cc735f4a) — A unified session, approval, allowlist, and configuration gateway for more than twenty messaging channels.
  - **Evidence:** [manifest](https://github.com/zhuiyueya/dsh-im-gateway/blob/f4b166d5bb896d640515d7bfd887db37cc735f4a/package.json) → [patch](https://github.com/zhuiyueya/dsh-im-gateway/blob/f4b166d5bb896d640515d7bfd887db37cc735f4a/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `instant-messaging` `credentials` `session-data` `approval-forwarding` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Model Profile** · [ztlovelsw/dsh-model-profile@1e3ddd5](https://github.com/ztlovelsw/dsh-model-profile/commit/1e3ddd5eaca411cabee2b8b5b15fae3bf4b9e521) — Edits per-model image support and reasoning efforts in the DSH Web model catalog.
  - **Evidence:** [manifest](https://github.com/ztlovelsw/dsh-model-profile/blob/1e3ddd5eaca411cabee2b8b5b15fae3bf4b9e521/package.json) → [patch](https://github.com/ztlovelsw/dsh-model-profile/blob/1e3ddd5eaca411cabee2b8b5b15fae3bf4b9e521/cordis.patch.yml) · **Identity:** `@ztlovelsw/dsh-model-profile`
  - **Licenses:** repo `unknown` / package `BSD-3-Clause` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `model-config` `configuration-write` `client-injection` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Notify Bell** · [ZYar-er/dsh-notify-bell@21c0747](https://github.com/ZYar-er/dsh-notify-bell/commit/21c0747d520635b54b771cca5107468f7ccba920) — Semantic BEL or WAV notifications for completion, blocking, permission, questions, and errors.
  - **Evidence:** [manifest](https://github.com/ZYar-er/dsh-notify-bell/blob/21c0747d520635b54b771cca5107468f7ccba920/package.json) → [patch](https://github.com/ZYar-er/dsh-notify-bell/blob/21c0747d520635b54b771cca5107468f7ccba920/cordis.patch.yml) · **Identity:** `dsh-notify-bell`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `audio` `desktop-notification` `agent-events` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH LAN Fix** · [zynieie/dsh-lan-plugin@1b16999](https://github.com/zynieie/dsh-lan-plugin/commit/1b169996787d222c217dde2ccb932b904087638c) — A LAN compatibility patch that provides a cryptographic RPC-ID fallback for insecure browser contexts.
  - **Evidence:** [manifest](https://github.com/zynieie/dsh-lan-plugin/blob/1b169996787d222c217dde2ccb932b904087638c/packages/dsh-lan-fix/package.json) → [patch](https://github.com/zynieie/dsh-lan-plugin/blob/1b169996787d222c217dde2ccb932b904087638c/packages/dsh-lan-fix/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `lan-access` `client-patch` `cryptography` `local-install` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

#### Skills & Methods

- **Creght Skills** · [creght-dev/skills@5e20ab3](https://github.com/creght-dev/skills/commit/5e20ab3ab57643b2c50461d8e7007f927ff489df) — A repository of agent skills packaged with a native DSH bundle.
  - **Evidence:** [manifest](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/package.json) → [patch](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `skills` `git-source` · **Review:** No DSH peers are declared, so compatibility remains unknown.

- **DSH Plugin Guide** · [Fectivnfy112357/dsh-plugin-guide@48da363](https://github.com/Fectivnfy112357/dsh-plugin-guide/commit/48da36336f64a0d7f331ccdfbad1339649e84ff0) — A dual-format guide and filesystem skill for building DSH and Agent Plugins packages.
  - **Evidence:** [manifest](https://github.com/Fectivnfy112357/dsh-plugin-guide/blob/48da36336f64a0d7f331ccdfbad1339649e84ff0/package.json) → [patch](https://github.com/Fectivnfy112357/dsh-plugin-guide/blob/48da36336f64a0d7f331ccdfbad1339649e84ff0/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-skill` `plugin-development` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Aegis** · [GanyuanRan/Aegis@21b27d2](https://github.com/GanyuanRan/Aegis/commit/21b27d23598ef492834427e2a1381b744f66b787) — A software-engineering method pack for planning, debugging, prompt hygiene, verification, and repair tracking.
  - **Evidence:** [manifest](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/package.json) → [patch](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/extensions/dsh/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-skill` `missing-package-license` · **Review:** Repository license is MIT; the fixed package manifest has no license field.

- **Project AI Docs** · [igugyj/project-ai-docs@811e729](https://github.com/igugyj/project-ai-docs/commit/811e7294177a8769b3f2bcebf43e237058ba8e40) — A project-local AI documentation protocol that maintains a docs/.ai knowledge base.
  - **Evidence:** [manifest](https://github.com/igugyj/project-ai-docs/blob/811e7294177a8769b3f2bcebf43e237058ba8e40/package.json) → [patch](https://github.com/igugyj/project-ai-docs/blob/811e7294177a8769b3f2bcebf43e237058ba8e40/cordis.patch.yml) · **Identity:** `project-ai-docs`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `filesystem-skill` `filesystem-read` `filesystem-write` `documentation-generation` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Ten Methods Tutor** · [jmwasky-creative/ten-methods-tutor@5e76ea2](https://github.com/jmwasky-creative/ten-methods-tutor/commit/5e76ea229179a3d3c1c1c86a1a3c78bf2c953722) — A deterministic local arithmetic tutor with guided exercises and parent-facing recaps.
  - **Evidence:** [manifest](https://github.com/jmwasky-creative/ten-methods-tutor/blob/5e76ea229179a3d3c1c1c86a1a3c78bf2c953722/package.json) → [patch](https://github.com/jmwasky-creative/ten-methods-tutor/blob/5e76ea229179a3d3c1c1c86a1a3c78bf2c953722/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `education` `local-web-server` `session-data` `model-tools` `filesystem-write` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH LookatStudy** · [Kaiji-Z/dsh-plugin-lookatstudy@298dde9](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy/commit/298dde9258ea9a84b03cc719e508212044227ad9) — Turns markdown, folders, or GitHub learning repositories into guided courses with mastery and spaced repetition.
  - **Evidence:** [manifest](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy/blob/298dde9258ea9a84b03cc719e508212044227ad9/package.json) → [patch](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy/blob/298dde9258ea9a84b03cc719e508212044227ad9/cordis.patch.yml) · **Identity:** `dsh-plugin-lookatstudy`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `guided-learning` `filesystem-read` `github-import` `persistent-state` `model-tools` `web-ui` · **Review:** The fixed source matches npm 0.9.0 and declares broad peer ranges; no repository import, course generation, learner state, tool, or dashboard was executed.

- **Gongwen Skill** · [linhut/gongwen-skill@e5a277e](https://github.com/linhut/gongwen-skill/commit/e5a277ea685e3462608d3f3f8c02f108fada642a) — A Chinese official-document workflow for GB/T 9704 checks, repair, optimization, templates, and layout injection.
  - **Evidence:** [manifest](https://github.com/linhut/gongwen-skill/blob/e5a277ea685e3462608d3f3f8c02f108fada642a/package.json) → [patch](https://github.com/linhut/gongwen-skill/blob/e5a277ea685e3462608d3f3f8c02f108fada642a/cordis.patch.yml) · **Identity:** `gongwen-skill`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-skill` `document-processing` `subprocess` `filesystem-write` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Agent Skills** · [minivv/dsh-agent-skills@f753b09](https://github.com/minivv/dsh-agent-skills/commit/f753b0992564202dda6da0ab71fa2179054137a4) — Discovers and manages Agent Skills for Claude Code, Codex, Gemini CLI, and other tools from DSH.
  - **Evidence:** [manifest](https://github.com/minivv/dsh-agent-skills/blob/f753b0992564202dda6da0ab71fa2179054137a4/package.json) → [patch](https://github.com/minivv/dsh-agent-skills/blob/f753b0992564202dda6da0ab71fa2179054137a4/cordis.patch.yml) · **Identity:** `dsh-agent-skills`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `skill-management` `filesystem-read` `filesystem-write` `client-injection` `prepare-build` · **Review:** The fixed source is 0.1.2 while npm exposes 0.1.7 from the same repository; no build, skill scan, or preset write was executed.

- **DSH HTB Skills** · [qingsiweisan/dsh-htb-skills@d04c3d0](https://github.com/qingsiweisan/dsh-htb-skills/commit/d04c3d04385cff83eb5db27a77faa7b3d0342125) — A versioned Hack The Box penetration-testing skill library with tiered routing and hidden references.
  - **Evidence:** [manifest](https://github.com/qingsiweisan/dsh-htb-skills/blob/d04c3d04385cff83eb5db27a77faa7b3d0342125/package.json) → [patch](https://github.com/qingsiweisan/dsh-htb-skills/blob/d04c3d04385cff83eb5db27a77faa7b3d0342125/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-skill` `security-testing` `prompt-injection` `local-install` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Wiki** · [skillre/dsh-wiki@b6dfa3a](https://github.com/skillre/dsh-wiki/commit/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4) — A DSH bundle that exposes a repository-backed wiki skill and documentation workflow.
  - **Evidence:** [manifest](https://github.com/skillre/dsh-wiki/blob/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4/package.json) → [patch](https://github.com/skillre/dsh-wiki/blob/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4/cordis.patch.yml) · **Identity:** `dsh-wiki`
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-skill` `documentation` `package-bundle` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Lazeword** · [xczhanjun/lazeword@c65f598](https://github.com/xczhanjun/lazeword/commit/c65f59886eecbf8ba7ce29d522493321a81c63a0) — Offline vocabulary learning with FSRS scheduling, Anki sync, subject decks, and learning games.
  - **Evidence:** [manifest](https://github.com/xczhanjun/lazeword/blob/c65f59886eecbf8ba7ce29d522493321a81c63a0/package.json) → [patch](https://github.com/xczhanjun/lazeword/blob/c65f59886eecbf8ba7ce29d522493321a81c63a0/cordis.patch.yml) · **Identity:** `dsh-lazeword`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · mixed peer ranges
  - **Signals:** `education` `spaced-repetition` `anki` `browser-storage` `prepublish-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Math Research DSH** · [xsoc1/math-research-dsh@a5e6373](https://github.com/xsoc1/math-research-dsh/commit/a5e63739cd446c76258c050d9b053781dae9bae6) — A rigorous mathematics research suite with four agent skills, Lean verification, tests, and environment diagnostics.
  - **Evidence:** [manifest](https://github.com/xsoc1/math-research-dsh/blob/a5e63739cd446c76258c050d9b053781dae9bae6/package.json) → [patch](https://github.com/xsoc1/math-research-dsh/blob/a5e63739cd446c76258c050d9b053781dae9bae6/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `filesystem-skill` `mathematics` `formal-verification` `environment-diagnostics` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Furrhaven Toolbox** · [YJLZSL/dsh-furrhaven-toolbox@473cdd6](https://github.com/YJLZSL/dsh-furrhaven-toolbox/commit/473cdd68f3271bab5db783b204d58ed01bbe3243) — Character-card authoring, validation, worldbook simulation, regex testing, vision, and roleplay tools.
  - **Evidence:** [manifest](https://github.com/YJLZSL/dsh-furrhaven-toolbox/blob/473cdd68f3271bab5db783b204d58ed01bbe3243/dsh/plugin/fh-tools/package.json) → [patch](https://github.com/YJLZSL/dsh-furrhaven-toolbox/blob/473cdd68f3271bab5db783b204d58ed01bbe3243/dsh/plugin/fh-tools/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · mixed peer ranges
  - **Signals:** `character-authoring` `model-tools` `vision` `subprocess` `filesystem-write` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

#### Discovery & Management

- **DSH Plugin Market** · [2160039878-cyber/dsh-plugin-market@e897f67](https://github.com/2160039878-cyber/dsh-plugin-market/commit/e897f674cf1ef3f97d0afcac047542984a8b64d8) — A verified-first Web catalog that searches GitHub plugin leads and gates install-command copying behind structural checks.
  - **Evidence:** [manifest](https://github.com/2160039878-cyber/dsh-plugin-market/blob/e897f674cf1ef3f97d0afcac047542984a8b64d8/package.json) → [patch](https://github.com/2160039878-cyber/dsh-plugin-market/blob/e897f674cf1ef3f97d0afcac047542984a8b64d8/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `github-search` `external-network` `install-command-copy` `client-injection` `identity-collision` · **Review:** The fixed Git-source bundle is confirmed; the unscoped npm name resolves to a different repository, so no npm identity is listed and no remote check or install action was executed.

- **DSH Plugin Hot Toggle** · [5102a/dsh-plugin-hot-toggle@15b5f24](https://github.com/5102a/dsh-plugin-hot-toggle/commit/15b5f24250b72b9028e89a5eed37d13cf7ce37e0) — Starts and stops installed Cordis plugin entries from DSH Web and persists the selected state across restarts.
  - **Evidence:** [manifest](https://github.com/5102a/dsh-plugin-hot-toggle/blob/15b5f24250b72b9028e89a5eed37d13cf7ce37e0/package.json) → [patch](https://github.com/5102a/dsh-plugin-hot-toggle/blob/15b5f24250b72b9028e89a5eed37d13cf7ce37e0/cordis.patch.yml) · **Identity:** `dsh-plugin-hot-toggle`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `dynamic-loading` `package-management` `configuration-write` `client-injection` `high-trust-surface` · **Review:** The package and patch identities align; dynamic loader control, persisted configuration writes, and the prepare build were not executed.

- **DSH Capability Index** · [777-Zen/dsh-capability-index@08a4f48](https://github.com/777-Zen/dsh-capability-index/commit/08a4f488009d0e28f45f797a8c43296df4a9c8bc) — Injects per-step capability hints so agents can select installed plugins from an indexed trigger table before acting.
  - **Evidence:** [manifest](https://github.com/777-Zen/dsh-capability-index/blob/08a4f488009d0e28f45f797a8c43296df4a9c8bc/package.json) → [patch](https://github.com/777-Zen/dsh-capability-index/blob/08a4f488009d0e28f45f797a8c43296df4a9c8bc/cordis.patch.yml) · **Identity:** `dsh-capability-index`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `runtime-context` `prompt-injection` `plugin-inventory` · **Review:** The root bundle is distinct from the repository's demo fixture; no DSH peer range establishes runtime compatibility.

- **DSH Plugin Audit** · [863683348/dsh-plugin-audit@2cbd6ab](https://github.com/863683348/dsh-plugin-audit/commit/2cbd6abf4ff6fe042464b6fa42455e84bf353d2f) — Audits DSH plugin health through GitHub discovery, npm probes, static scanning, scoring, and a leaderboard.
  - **Evidence:** [manifest](https://github.com/863683348/dsh-plugin-audit/blob/2cbd6abf4ff6fe042464b6fa42455e84bf353d2f/package.json) → [patch](https://github.com/863683348/dsh-plugin-audit/blob/2cbd6abf4ff6fe042464b6fa42455e84bf353d2f/cordis.patch.yml) · **Identity:** `dsh-audit`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `external-network` `filesystem-read` `static-analysis` `web-ui` `model-tools` `source-behind-registry` · **Review:** The fixed source is version 0.2.0 while npm now exposes 0.4.0 from the same identity; no repository sync, registry probe, scan, or model tool was executed.

- **DSH Safe Plugin Manager** · [AI-Scarlett/dsh-safe-plugin-manager@993cfd3](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/commit/993cfd3fe33227b422dba316c3d2f7d4fa1db565) — A GitHub-only plugin catalog and guarded profile lifecycle manager with plans, confirmations, backups, checks, and rollback.
  - **Evidence:** [manifest](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/blob/993cfd3fe33227b422dba316c3d2f7d4fa1db565/package.json) → [patch](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/blob/993cfd3fe33227b422dba316c3d2f7d4fa1db565/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `UNLICENSED` · lifecycle `none` · mixed peer ranges
  - **Signals:** `package-management` `filesystem-write` `subprocess` `external-network` `high-trust-surface` · **Review:** The private, UNLICENSED package is documented as GitHub-only; profile mutation, backups, subprocess execution, remote catalogs, and rollback were not executed.

- **DSH Web Billing** · [bpc-oss/dsh-web-billing@1e6c3e6](https://github.com/bpc-oss/dsh-web-billing/commit/1e6c3e608ce0050bc5b28eb07b91a71d5e31893e) — Tracks token cost, pricing windows, message ledgers, and provider account balance in DSH Web.
  - **Evidence:** [manifest](https://github.com/bpc-oss/dsh-web-billing/blob/1e6c3e608ce0050bc5b28eb07b91a71d5e31893e/package.json) → [patch](https://github.com/bpc-oss/dsh-web-billing/blob/1e6c3e608ce0050bc5b28eb07b91a71d5e31893e/cordis.patch.yml) · **Identity:** `dsh-web-billing`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `billing-data` `token-meter` `external-network` `credentials` `filesystem-write` `client-injection` · **Review:** GitHub installation is documented; pricing fetches, provider credential resolution, balance requests, ledger writes, and the prepublish check were not executed.

- **DSH Hub Search** · [coderPerseus/dsh-hub@4dc755a](https://github.com/coderPerseus/dsh-hub/commit/4dc755a4e300d0994158405e86e6e0d9a9b7df09) — Adds tools for searching and inspecting plugin records in the remote DSH Hub catalog.
  - **Evidence:** [manifest](https://github.com/coderPerseus/dsh-hub/blob/4dc755a4e300d0994158405e86e6e0d9a9b7df09/packages/dsh-plugin/package.json) → [patch](https://github.com/coderPerseus/dsh-hub/blob/4dc755a4e300d0994158405e86e6e0d9a9b7df09/packages/dsh-plugin/cordis.patch.yml) · **Identity:** `@dshhubs/plugin-search`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `external-network` `remote-catalog` `plugin-metadata` `install-command-data` · **Review:** The public package identity matches the source bundle and its tools read remote catalog metadata and installation text; no request or install was executed.

- **DSH Desktop Plugin Installer** · [deronghe/dsh-plugin-desktop-installer@210522b](https://github.com/deronghe/dsh-plugin-desktop-installer/commit/210522b440c6bd433206787e7ea5095728d4c14f) — Adds desktop settings controls for installing, enabling, disabling, removing, and restarting DSH plugins.
  - **Evidence:** [manifest](https://github.com/deronghe/dsh-plugin-desktop-installer/blob/210522b440c6bd433206787e7ea5095728d4c14f/package.json) → [patch](https://github.com/deronghe/dsh-plugin-desktop-installer/blob/210522b440c6bd433206787e7ea5095728d4c14f/cordis.patch.yml) · **Identity:** `dsh-plugin-desktop-installer`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-management` `subprocess` `profile-write` `desktop-restart` `local-http-server` `github-only` · **Review:** GitHub installation is documented; its command execution, profile mutation, uninstall, and desktop restart surfaces were reviewed statically and not invoked.

- **DSH Market** · [dsh-market/dsh-market@3188f46](https://github.com/dsh-market/dsh-market/commit/3188f465779d25dc2d41f53cdf21334bef517ac3) — An in-harness plugin market that can browse, install, update, and remove third-party packages.
  - **Evidence:** [manifest](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/package.json) → [patch](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/cordis.patch.yml) · **Identity:** `dshmarket`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `package-management` `remote-registry` `high-trust-surface` · **Review:** Package-manager control makes this a high-trust surface; listing is not an endorsement.

- **DSH Skill Viewer** · [Fishquito7/dsh-skill-viewer@55c16e4](https://github.com/Fishquito7/dsh-skill-viewer/commit/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94) — A Web settings panel and CLI for listing, scoping, enabling, disabling, adding, and deleting skills.
  - **Evidence:** [manifest](https://github.com/Fishquito7/dsh-skill-viewer/blob/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94/package.json) → [patch](https://github.com/Fishquito7/dsh-skill-viewer/blob/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `skill-management` `filesystem-write` `client-injection` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Index** · [GGigHub/dsh-plugin-index@41fcb76](https://github.com/GGigHub/dsh-plugin-index/commit/41fcb7688e6d58d09dd953c87dfe1af54ce9a883) — A GitHub-star-backed plugin browser with install, remove, update, and repair controls.
  - **Evidence:** [manifest](https://github.com/GGigHub/dsh-plugin-index/blob/41fcb7688e6d58d09dd953c87dfe1af54ce9a883/package.json) → [patch](https://github.com/GGigHub/dsh-plugin-index/blob/41fcb7688e6d58d09dd953c87dfe1af54ce9a883/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-management` `external-network` `filesystem-write` `package-install` `github-only` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **Harness Flow Hub** · [Harzva/harness-flow-hub@25b23c2](https://github.com/Harzva/harness-flow-hub/commit/25b23c25198c8fafef166060bf054870511fc2fd) — An in-DSH flow hub prototype with transactional plugin installation, rollback, and browser UI.
  - **Evidence:** [manifest](https://github.com/Harzva/harness-flow-hub/blob/25b23c25198c8fafef166060bf054870511fc2fd/package.json) → [patch](https://github.com/Harzva/harness-flow-hub/blob/25b23c25198c8fafef166060bf054870511fc2fd/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `plugin-management` `package-install` `filesystem-write` `rollback` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Toggle** · [huntersxy/dsh-plugin-toggle@e11d57c](https://github.com/huntersxy/dsh-plugin-toggle/commit/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea) — A settings-page switchboard that edits profile patches to hot-enable or disable third-party plugins.
  - **Evidence:** [manifest](https://github.com/huntersxy/dsh-plugin-toggle/blob/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea/package.json) → [patch](https://github.com/huntersxy/dsh-plugin-toggle/blob/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea/cordis.patch.yml) · **Identity:** `dsh-plugin-toggle`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-management` `filesystem-write` `configuration-edit` `hot-reload` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH 1024 Store** · [imsai-sh/awesome-deepseek-harness-plugins@7b58110](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/commit/7b58110d9faa35c31c49c634b3d69236c1331b28) — An in-product browser and installer for the 1024 Store plugin catalog.
  - **Evidence:** [manifest](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/blob/7b58110d9faa35c31c49c634b3d69236c1331b28/packages/dsh-1024store/package.json) → [patch](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/blob/7b58110d9faa35c31c49c634b3d69236c1331b28/packages/dsh-1024store/cordis.patch.yml) · **Identity:** `dsh-1024store`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `plugin-marketplace` `package-install` `external-network` `filesystem-write` `prepack-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Web Hot** · [jifeng15/dsh-web-restart@8ae1421](https://github.com/jifeng15/dsh-web-restart/commit/8ae14211b89e45d398236ad678e356606df9584a) — A host lifecycle layer for installing, updating, enabling, disabling, and self-healing Web plugins without restart.
  - **Evidence:** [manifest](https://github.com/jifeng15/dsh-web-restart/blob/8ae14211b89e45d398236ad678e356606df9584a/hot-plugin/package.json) → [patch](https://github.com/jifeng15/dsh-web-restart/blob/8ae14211b89e45d398236ad678e356606df9584a/hot-plugin/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `plugin-management` `package-install` `filesystem-write` `hot-reload` `self-heal` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Market** · [losebird/dsh-plugin-market@e441cdb](https://github.com/losebird/dsh-plugin-market/commit/e441cdb14c6152c44c3bd7e573f7796695fe96cb) — A community plugin-market dialog with bundle and ZIP-based one-click installation.
  - **Evidence:** [manifest](https://github.com/losebird/dsh-plugin-market/blob/e441cdb14c6152c44c3bd7e573f7796695fe96cb/package.json) → [patch](https://github.com/losebird/dsh-plugin-market/blob/e441cdb14c6152c44c3bd7e573f7796695fe96cb/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-marketplace` `package-install` `filesystem-write` `identity-collision` `client-injection` · **Review:** The npm name maps to another repository, so this record is pinned to the author's documented Git source and does not claim that npm identity; installation was not executed.

- **Catalog Capabilities ZH** · [MeowTnT3r/catalog-capabilities-zh@1843ac3](https://github.com/MeowTnT3r/catalog-capabilities-zh/commit/1843ac3db8f4b437ed62866cdba3c9fe08158cd5) — A Chinese capability catalog and orchestration adapter for inspecting and installing DSH plugins and skills.
  - **Evidence:** [manifest](https://github.com/MeowTnT3r/catalog-capabilities-zh/blob/1843ac3db8f4b437ed62866cdba3c9fe08158cd5/package.json) → [patch](https://github.com/MeowTnT3r/catalog-capabilities-zh/blob/1843ac3db8f4b437ed62866cdba3c9fe08158cd5/cordis.patch.yml) · **Identity:** `catalog-capabilities-zh`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `capability-catalog` `plugin-management` `skill-management` `subprocess` `filesystem-write` `github-only` · **Review:** The fixed source delegates installation to environment-provided plugin or skill managers and includes a Python catalog script; no inspection, subprocess, or install was run.

- **DSH Plugin Hub** · [qomob/dsh@9b80e51](https://github.com/qomob/dsh/commit/9b80e51ff4371d41b33e5497b82f51ae08fe1699) — Embedded and live GitHub plugin search, detail inspection, approval-gated installation, and a catalog tab.
  - **Evidence:** [manifest](https://github.com/qomob/dsh/blob/9b80e51ff4371d41b33e5497b82f51ae08fe1699/plugin/package.json) → [patch](https://github.com/qomob/dsh/blob/9b80e51ff4371d41b33e5497b82f51ae08fe1699/plugin/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-marketplace` `external-network` `package-install` `approval-gate` `identity-collision` · **Review:** The npm name maps to another repository, so this record is pinned only to the documented Git subdirectory source and does not claim that package identity.

- **DSH Extension Hub** · [Relistencode/dsh-extension-hub@3f9726e](https://github.com/Relistencode/dsh-extension-hub/commit/3f9726ea1ffe8cf12f274ce69ff02713807418a6) — A Web and CLI hub for skills, MCP servers, plugins, imports, marketplace discovery, and updates.
  - **Evidence:** [manifest](https://github.com/Relistencode/dsh-extension-hub/blob/3f9726ea1ffe8cf12f274ce69ff02713807418a6/package.json) → [patch](https://github.com/Relistencode/dsh-extension-hub/blob/3f9726ea1ffe8cf12f274ce69ff02713807418a6/cordis.patch.yml) · **Identity:** `dsh-extension-hub`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-management` `skill-management` `mcp` `package-install` `filesystem-write` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Marketplace** · [Scorp1o117/dsh-plugin-marketplace@d4f8b24](https://github.com/Scorp1o117/dsh-plugin-marketplace/commit/d4f8b245f00142024328bc4804e1f8b93882a236) — A settings-page marketplace that browses, searches, and ranks the GitHub dsh-plugin topic.
  - **Evidence:** [manifest](https://github.com/Scorp1o117/dsh-plugin-marketplace/blob/d4f8b245f00142024328bc4804e1f8b93882a236/package.json) → [patch](https://github.com/Scorp1o117/dsh-plugin-marketplace/blob/d4f8b245f00142024328bc4804e1f8b93882a236/cordis.patch.yml) · **Identity:** `dsh-plugin-marketplace`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `plugin-marketplace` `github-search` `external-network` `client-injection` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Guardian** · [songoao25/dsh-plugin-guardian@bb49179](https://github.com/songoao25/dsh-plugin-guardian/commit/bb491797ab4a1b78dfbcab87821d6f8f59f24caf) — Offers graphical plugin uninstall, residue cleanup, snapshot rollback, and recovery controls.
  - **Evidence:** [manifest](https://github.com/songoao25/dsh-plugin-guardian/blob/bb491797ab4a1b78dfbcab87821d6f8f59f24caf/package.json) → [patch](https://github.com/songoao25/dsh-plugin-guardian/blob/bb491797ab4a1b78dfbcab87821d6f8f59f24caf/cordis.patch.yml) · **Identity:** `dsh-plugin-guardian`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-management` `filesystem-write` `file-delete` `rollback` `configuration-edit` `client-injection` `github-only` · **Review:** The repository provides a fixed GitHub source identity; no plugin removal, residue cleanup, configuration write, rollback, or browser action was executed.

- **DSH Fish Hub** · [stvlynn/dsh.fish@d81793b](https://github.com/stvlynn/dsh.fish/commit/d81793bcf57a8949ae9b24f2c935e01c222e4ce6) — Authenticated dsh.fish search and install tools for Harness artifacts.
  - **Evidence:** [manifest](https://github.com/stvlynn/dsh.fish/blob/d81793bcf57a8949ae9b24f2c935e01c222e4ce6/packages/dsh-plugin-hub/package.json) → [patch](https://github.com/stvlynn/dsh.fish/blob/d81793bcf57a8949ae9b24f2c935e01c222e4ce6/packages/dsh-plugin-hub/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepare` · mixed peer ranges
  - **Signals:** `artifact-registry` `credentials` `external-network` `package-install` `prepare-build` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Suite All** · [whyihaveyou/dsh-suite@0165407](https://github.com/whyihaveyou/dsh-suite/commit/01654079afbde1d62c45fac3cc49716e16f27996) — An all-in-one bundle aggregating the suite's plugin manager, notifications, session export, and team board.
  - **Evidence:** [manifest](https://github.com/whyihaveyou/dsh-suite/blob/01654079afbde1d62c45fac3cc49716e16f27996/packages/all/package.json) → [patch](https://github.com/whyihaveyou/dsh-suite/blob/01654079afbde1d62c45fac3cc49716e16f27996/packages/all/cordis.patch.yml) · **Identity:** `@dsh-suite/all`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `aggregate-bundle` `plugin-management` `notification` `session-export` `kanban` · **Review:** Fixed source, manifest, patch, available license evidence, and documented install identity were reviewed statically; plugin code and declared capabilities were not executed.

- **DSH Plugin Store** · [ZASENJC/dsh-plugins-store@fa5829a](https://github.com/ZASENJC/dsh-plugins-store/commit/fa5829a4568ce0822de578424b53faf0c4fd6cb2) — A native catalog browser with fixed-source validation, risk confirmation, install plans, updates, and removal.
  - **Evidence:** [manifest](https://github.com/ZASENJC/dsh-plugins-store/blob/fa5829a4568ce0822de578424b53faf0c4fd6cb2/packages/dsh-plugin-store/package.json) → [patch](https://github.com/ZASENJC/dsh-plugins-store/blob/fa5829a4568ce0822de578424b53faf0c4fd6cb2/packages/dsh-plugin-store/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · declares rc.6 peers
  - **Signals:** `plugin-marketplace` `package-install` `approval-gate` `external-network` `identity-collision` · **Review:** The npm identity maps to another repository, so this record is pinned to the documented Git subdirectory source and does not claim that package.

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

- **DSH Autonomy** · [abab996/dsh-autonomy@94f64d3](https://github.com/abab996/dsh-autonomy/commit/94f64d33135f9fce19b7d6a00491ed4ce83e5da4) — Adds per-session autonomy levels that alter system-prompt directives from strict through more exploratory behavior.
  - **Evidence:** [manifest](https://github.com/abab996/dsh-autonomy/blob/94f64d33135f9fce19b7d6a00491ed4ce83e5da4/packages/dsh-autonomy/package.json) → [patch](https://github.com/abab996/dsh-autonomy/blob/94f64d33135f9fce19b7d6a00491ed4ce83e5da4/packages/dsh-autonomy/cordis.patch.yml) · **Identity:** `dsh-autonomy`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `system-prompt` `session-data` `client-injection` `identity-collision` · **Review:** Held because the documented unscoped npm identity currently resolves to JinkaiLiu/dsh-autonomy, not this repository; local source installation remains separately documented.

- **DSH Habits** · [DimitriLIAN/dsh-habits@f5e9c6f](https://github.com/DimitriLIAN/dsh-habits/commit/f5e9c6f718fa5b34fcce0fcb432573bbde666303) — Edits the user-global AGENTS.md instructions from DSH Web settings so habits are injected into every session.
  - **Evidence:** [manifest](https://github.com/DimitriLIAN/dsh-habits/blob/f5e9c6f718fa5b34fcce0fcb432573bbde666303/package.json) → [patch](https://github.com/DimitriLIAN/dsh-habits/blob/f5e9c6f718fa5b34fcce0fcb432573bbde666303/cordis.patch.yml) · **Identity:** `dsh-habits`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `global-instructions` `filesystem-write` `client-injection` `prepare-build` `unresolved-install-identity` · **Review:** Held because the README installation target still contains a placeholder owner and the npm identity does not resolve; its prepare build and global instruction writes were not executed.

- **DSH Path Browser** · [dkjsiogu/dsh-path-browser@471496f](https://github.com/dkjsiogu/dsh-path-browser/commit/471496f786657a2dedd9280a6a77acf8e30cc122) — Browses host files and folders from the Web composer and inserts selected absolute paths.
  - **Evidence:** [manifest](https://github.com/dkjsiogu/dsh-path-browser/blob/471496f786657a2dedd9280a6a77acf8e30cc122/package.json) → [patch](https://github.com/dkjsiogu/dsh-path-browser/blob/471496f786657a2dedd9280a6a77acf8e30cc122/cordis.patch.yml) · **Identity:** `dsh-path-browser`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `filesystem` `absolute-path` `client-injection` `prepare-build` `unresolved-install-identity` · **Review:** Held because the fixed source has no README or author-documented public installation identity and its npm name does not resolve; the prepare hook and filesystem access were not executed.

- **DSH Shutup** · [DosterBool/dsh-shutup@cc19b87](https://github.com/DosterBool/dsh-shutup/commit/cc19b8744c7c6520bc764b7678861746d8331c87) — Adds a configurable shortcut that interrupts model generation and steers the active turn with a correction prompt.
  - **Evidence:** [manifest](https://github.com/DosterBool/dsh-shutup/blob/cc19b8744c7c6520bc764b7678861746d8331c87/package.json) → [patch](https://github.com/DosterBool/dsh-shutup/blob/cc19b8744c7c6520bc764b7678861746d8331c87/cordis.patch.yml) · **Identity:** `dsh-shutup`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `model-interrupt` `prompt-steering` `session-data` `browser-storage` `unresolved-install-identity` · **Review:** Held because no public installation documentation or resolvable package target was found at the fixed commit; prompt steering, session access, and browser storage were not exercised.

- **DSH Precedent** · [dshplugin-me/dsh-precedent@1a84adf](https://github.com/dshplugin-me/dsh-precedent/commit/1a84adf50a126b6869db111cc8bceba90f141ceb) — Builds a cited working-memory ledger from the existing DSH session log to surface prior successful approaches.
  - **Evidence:** [manifest](https://github.com/dshplugin-me/dsh-precedent/blob/1a84adf50a126b6869db111cc8bceba90f141ceb/package.json) → [patch](https://github.com/dshplugin-me/dsh-precedent/blob/1a84adf50a126b6869db111cc8bceba90f141ceb/cordis.patch.yml) · **Identity:** Git source / unknown
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-log` `working-memory` `private-package` `unreleased-tag` `unresolved-install-identity` · **Review:** Held because the author states that the documented v0.1.0 Git target is not tagged and will not currently resolve; session-log access was not executed.

- **DSH Diff Approval** · [9087/dsh-diff-approval@5966410](https://github.com/9087/dsh-diff-approval/commit/5966410671b3daa8ee92f63b7082e8a949b4db0d) — A pending-change panel that records edit and write results, shows whole-file diffs, and supports independent keep or revert decisions.
  - **Evidence:** [manifest](https://github.com/9087/dsh-diff-approval/blob/5966410671b3daa8ee92f63b7082e8a949b4db0d/package.json) → [patch](https://github.com/9087/dsh-diff-approval/blob/5966410671b3daa8ee92f63b7082e8a949b4db0d/cordis.patch.yml) · **Identity:** `dsh-diff-approval`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `filesystem-write` `file-delete` `session-data` `client-injection` `unresolved-install-identity` · **Review:** Held because the documented npm target did not resolve and no separate public Git-source installation command was found; revert can overwrite or remove files and was not executed.

- **Helm-D Security Router** · [ADWMC/helm-d@beef627](https://github.com/ADWMC/helm-d/commit/beef627794e518e19a2a3c6937efb7ebaecb7d72) — The routing component of a nine-bundle security-analysis suite covering Android, Web, native, protocol, malware, AI security, and evidence workflows.
  - **Evidence:** [manifest](https://github.com/ADWMC/helm-d/blob/beef627794e518e19a2a3c6937efb7ebaecb7d72/packages/router/package.json) → [patch](https://github.com/ADWMC/helm-d/blob/beef627794e518e19a2a3c6937efb7ebaecb7d72/packages/router/cordis.patch.yml) · **Identity:** `@dsh-security/router`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `prepare` · declares rc.6 peers
  - **Signals:** `security-analysis` `filesystem-read` `tool-routing` `prepare-build` `unresolved-install-identity` · **Review:** Held because the nine documented scoped npm packages did not resolve during review; package manifests also omit license fields, and installers or tools were not run.

- **FlowDeck DSH** · [heidi-dang/flowdeck-dsh@225f080](https://github.com/heidi-dang/flowdeck-dsh/commit/225f0806d92a818f71d8b2c618cf41ea6eed3c7d) — A DSH integration and execution host for FlowDeck workflows.
  - **Evidence:** [manifest](https://github.com/heidi-dang/flowdeck-dsh/blob/225f0806d92a818f71d8b2c618cf41ea6eed3c7d/package.json) → [patch](https://github.com/heidi-dang/flowdeck-dsh/blob/225f0806d92a818f71d8b2c618cf41ea6eed3c7d/cordis.patch.yml) · **Identity:** `@heidi-dang/flowdeck-dsh`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · compatibility unknown
  - **Signals:** `workflow-runtime` `subprocess` `filesystem-write` `prepublish-build` · **Review:** Held because the claimed npm identity did not resolve and the fixed documentation did not provide a reproducible public Git-source DSH install.

- **DSH Desktop** · [IriskaDev/dsh-desktop@9ad9be1](https://github.com/IriskaDev/dsh-desktop/commit/9ad9be1dfa866115990933abdf94ee67e8f0d542) — A desktop application wrapper that embeds a DSH bundle and patch.
  - **Evidence:** [manifest](https://github.com/IriskaDev/dsh-desktop/blob/9ad9be1dfa866115990933abdf94ee67e8f0d542/package.json) → [patch](https://github.com/IriskaDev/dsh-desktop/blob/9ad9be1dfa866115990933abdf94ee67e8f0d542/cordis.patch.yml) · **Identity:** `dsh-desktop`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `desktop-app` `private-package` `prepare-build` `identity-collision` · **Review:** Held because the npm name maps to another repository, the root is a private desktop application, and its prepare hook was not executed.

- **DSH Windows Manager Bridge** · [kanneiren/dsh-windows-manager@e9bb4c0](https://github.com/kanneiren/dsh-windows-manager/commit/e9bb4c02faad513b5c49928ae0c06b5c6fafb843) — An authenticated named-pipe runtime bridge embedded in the DSH Windows Manager application.
  - **Evidence:** [manifest](https://github.com/kanneiren/dsh-windows-manager/blob/e9bb4c02faad513b5c49928ae0c06b5c6fafb843/plugins/deepseek-harness-web/package.json) → [patch](https://github.com/kanneiren/dsh-windows-manager/blob/e9bb4c02faad513b5c49928ae0c06b5c6fafb843/plugins/deepseek-harness-web/cordis.patch.yml) · **Identity:** `dsh-windows-manager-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-app` `named-pipe` `authentication` `embedded-bundle` · **Review:** Held because the bridge is distributed inside a manager application and no independent public package-to-source installation identity was confirmed.

- **DSH Zhihu Dashboard** · [kexuejin/dsh-zhihu-dashboard@791cfd3](https://github.com/kexuejin/dsh-zhihu-dashboard/commit/791cfd394d61fbed2899fc3c9264befdad3a2682) — A Zhihu dashboard and tool set for hot topics, feeds, posts, search, and idea distillation.
  - **Evidence:** [manifest](https://github.com/kexuejin/dsh-zhihu-dashboard/blob/791cfd394d61fbed2899fc3c9264befdad3a2682/package.json) → [patch](https://github.com/kexuejin/dsh-zhihu-dashboard/blob/791cfd394d61fbed2899fc3c9264befdad3a2682/cordis.patch.yml) · **Identity:** `dsh-zhihu-dashboard`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `web-search` `external-network` `model-tools` `client-injection` · **Review:** Held because the documented npm identity did not resolve and no separate reproducible Git-source install command was found.

- **DSH Processes** · [liuqh16/dsh-processes@a4dd651](https://github.com/liuqh16/dsh-processes/commit/a4dd6511a9d6aaea38625f7054ab5c0d0877cc4c) — Background-process tools, commands, output inspection, and completion notifications.
  - **Evidence:** [manifest](https://github.com/liuqh16/dsh-processes/blob/a4dd6511a9d6aaea38625f7054ab5c0d0877cc4c/package.json) → [patch](https://github.com/liuqh16/dsh-processes/blob/a4dd6511a9d6aaea38625f7054ab5c0d0877cc4c/cordis.patch.yml) · **Identity:** `dsh-processes`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · behind rc.6 baseline
  - **Signals:** `subprocess` `process-management` `session-data` `prepare-build` · **Review:** Held because its DSH peer dependencies target rc.5 rather than the rc.6 review baseline.

- **DSH Marketplace** · [lmy414/dshregistry@c558602](https://github.com/lmy414/dshregistry/commit/c558602e21ff1c7554a15e318544304e3f7838e0) — An embedded marketplace UI for browsing, risk-reviewing, installing, and removing indexed plugins.
  - **Evidence:** [manifest](https://github.com/lmy414/dshregistry/blob/c558602e21ff1c7554a15e318544304e3f7838e0/plugin/package.json) → [patch](https://github.com/lmy414/dshregistry/blob/c558602e21ff1c7554a15e318544304e3f7838e0/plugin/cordis.patch.yml) · **Identity:** `dsh-marketplace`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-marketplace` `package-install` `filesystem-write` `private-package` · **Review:** Held because the published package has no repository mapping and the private nested source lacks an independently documented public installation path.

- **DSH Desktop Hub** · [MarecGents/deepseek-harness-hub@43f64fb](https://github.com/MarecGents/deepseek-harness-hub/commit/43f64fb69736944a47deed139297929dc0f8491e) — A WebView2 desktop shell with tray controls, theme sync, window memory, and a side panel.
  - **Evidence:** [manifest](https://github.com/MarecGents/deepseek-harness-hub/blob/43f64fb69736944a47deed139297929dc0f8491e/package.json) → [patch](https://github.com/MarecGents/deepseek-harness-hub/blob/43f64fb69736944a47deed139297929dc0f8491e/cordis.patch.yml) · **Identity:** `@marecgents/dsh-hub`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `postinstall` · behind rc.6 baseline
  - **Signals:** `desktop-app` `native-shell` `postinstall` `filesystem-write` `client-injection` · **Review:** Held because several DSH peers target rc.1 and installation runs native desktop setup through postinstall.

- **DSH API Usage** · [marvina/dsh-api-usage@bc47b5d](https://github.com/marvina/dsh-api-usage/commit/bc47b5dc87a559e50177878097146e2d3652bcce) — A sidebar panel for API balance and token-usage visibility.
  - **Evidence:** [manifest](https://github.com/marvina/dsh-api-usage/blob/bc47b5dc87a559e50177878097146e2d3652bcce/package.json) → [patch](https://github.com/marvina/dsh-api-usage/blob/bc47b5dc87a559e50177878097146e2d3652bcce/cordis.patch.yml) · **Identity:** `dsh-api-usage`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepublishOnly` · declares rc.6 peers
  - **Signals:** `credentials` `account-balance` `token-meter` `external-network` `prepublish-build` · **Review:** Held because the documented npm identity did not resolve and no separate reproducible Git-source install command was found.

- **DSH Feishu Bridge** · [minyang2020/dsh-feishu-bridge@034f5f6](https://github.com/minyang2020/dsh-feishu-bridge/commit/034f5f6f38b0780665690d5c1fc4bfc95c6308d2) — A bidirectional Feishu bot bridge with per-user sessions, approvals, questions, and long-connection delivery.
  - **Evidence:** [manifest](https://github.com/minyang2020/dsh-feishu-bridge/blob/034f5f6f38b0780665690d5c1fc4bfc95c6308d2/package.json) → [patch](https://github.com/minyang2020/dsh-feishu-bridge/blob/034f5f6f38b0780665690d5c1fc4bfc95c6308d2/cordis.patch.yml) · **Identity:** `feishu-dsh-bridge`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `enterprise-messaging` `credentials` `session-data` `approval-forwarding` `external-network` · **Review:** Held because the documented DSH package identity did not resolve; the source checkout instructions cover a standalone sidecar but not a reproducible Git-source DSH bundle install.

- **DSH MCP Adapter** · [NexusAgentX/dsh-mcp-adapter@39c5aab](https://github.com/NexusAgentX/dsh-mcp-adapter/commit/39c5aab08d273b23ad61e7a1a75acdc768dbfefe) — A single proxy tool that exposes MCP servers without injecting every server schema into context.
  - **Evidence:** [manifest](https://github.com/NexusAgentX/dsh-mcp-adapter/blob/39c5aab08d273b23ad61e7a1a75acdc768dbfefe/package.json) → [patch](https://github.com/NexusAgentX/dsh-mcp-adapter/blob/39c5aab08d273b23ad61e7a1a75acdc768dbfefe/cordis.patch.yml) · **Identity:** `dsh-mcp-adapter`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · behind rc.6 baseline
  - **Signals:** `mcp` `model-tools` `context-reduction` `prepack-build` · **Review:** Held because its DSH command and tool peers target rc.1 rather than the rc.6 review baseline.

- **DSH Codex Shim** · [OpenTritium/dsh-codex-shim@2522f9a](https://github.com/OpenTritium/dsh-codex-shim/commit/2522f9a77fb03f15f36b32c158f4238fadf82462) — A route-aware Codex environment simulation intended to improve tool-call reliability for adapted models.
  - **Evidence:** [manifest](https://github.com/OpenTritium/dsh-codex-shim/blob/2522f9a77fb03f15f36b32c158f4238fadf82462/package.json) → [patch](https://github.com/OpenTritium/dsh-codex-shim/blob/2522f9a77fb03f15f36b32c158f4238fadf82462/cordis.patch.yml) · **Identity:** `@opentritium/dsh-codex-shim`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · behind rc.6 baseline
  - **Signals:** `environment-simulation` `agent-steering` `sandbox-policy` `prepare-build` · **Review:** Held because every DSH peer targets rc.5 and installation requires a prepared tarball plus an exact host patch.

- **DSH MCP Support** · [royenheart/dsh-plugin-mcp-support@e0e95e4](https://github.com/royenheart/dsh-plugin-mcp-support/commit/e0e95e4bd155694898353d3e030f31a507a5d853) — A thin settings-driven wrapper over the native DSH MCP client.
  - **Evidence:** [manifest](https://github.com/royenheart/dsh-plugin-mcp-support/blob/e0e95e4bd155694898353d3e030f31a507a5d853/package.json) → [patch](https://github.com/royenheart/dsh-plugin-mcp-support/blob/e0e95e4bd155694898353d3e030f31a507a5d853/cordis.patch.yml) · **Identity:** `@royenheart/dsh-plugin-mcp-support`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `mcp` `configuration-write` `local-installer` · **Review:** Held because its native dsh-mcp-client peer targets rc.5 while the surrounding settings peer targets rc.6, and the public package identity is unresolved.

- **DSH Yi** · [Sanchaji/dsh-yi@e634e91](https://github.com/Sanchaji/dsh-yi/commit/e634e9198f08a8517a20d76cb6c4bfdb178b9408) — An I Ching divination tool with a Web entry and session-aware results.
  - **Evidence:** [manifest](https://github.com/Sanchaji/dsh-yi/blob/e634e9198f08a8517a20d76cb6c4bfdb178b9408/package.json) → [patch](https://github.com/Sanchaji/dsh-yi/blob/e634e9198f08a8517a20d76cb6c4bfdb178b9408/cordis.patch.yml) · **Identity:** `dsh-yi`
  - **Licenses:** repo `BSD-3-Clause` / package `BSD-3-Clause` · lifecycle `none` · mixed peer ranges
  - **Signals:** `divination` `model-tools` `session-data` `client-injection` · **Review:** Held because the npm identity did not resolve and the Git installation target remains an author placeholder rather than this fixed repository.

- **DSH Wallpaper Engine** · [TianYa-DAO/dsh-wallpaper-engine@f8f5fa4](https://github.com/TianYa-DAO/dsh-wallpaper-engine/commit/f8f5fa47170d2b6b2cca257be98a02da671d5ab6) — A local Wallpaper Engine library, background layer, and native scene panel for the desktop shell.
  - **Evidence:** [manifest](https://github.com/TianYa-DAO/dsh-wallpaper-engine/blob/f8f5fa47170d2b6b2cca257be98a02da671d5ab6/package.json) → [patch](https://github.com/TianYa-DAO/dsh-wallpaper-engine/blob/f8f5fa47170d2b6b2cca257be98a02da671d5ab6/cordis.patch.yml) · **Identity:** `dsh-wallpaper-engine`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · behind rc.6 baseline
  - **Signals:** `desktop-app` `filesystem-read` `native-bridge` `theme` `prepare-build` · **Review:** Held because all DSH Web peers target rc.5 rather than the rc.6 review baseline and the package identity is unpublished.

- **DSH HTML Parse** · [uckkk/dsh-html-parse@69fc2c5](https://github.com/uckkk/dsh-html-parse/commit/69fc2c5362dfd4beaae94f02e8c9f2f3e7f05643) — A model tool that extracts titles, metadata, headings, links, tables, and text from HTML.
  - **Evidence:** [manifest](https://github.com/uckkk/dsh-html-parse/blob/69fc2c5362dfd4beaae94f02e8c9f2f3e7f05643/package.json) → [patch](https://github.com/uckkk/dsh-html-parse/blob/69fc2c5362dfd4beaae94f02e8c9f2f3e7f05643/cordis.patch.yml) · **Identity:** `dsh-html-parse`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `html-parsing` `model-tools` `content-extraction` · **Review:** Held because the only documented install command uses an unpublished npm identity and no reproducible Git-source alternative is provided.

- **DSH Handoff** · [WeiYe6/dsh-handoff@08dc59d](https://github.com/WeiYe6/dsh-handoff/commit/08dc59d0ec061152bc2b61e47be7db2aff0e7571) — Summarizes a long session into a fresh same-workspace session while preserving the original.
  - **Evidence:** [manifest](https://github.com/WeiYe6/dsh-handoff/blob/08dc59d0ec061152bc2b61e47be7db2aff0e7571/package.json) → [patch](https://github.com/WeiYe6/dsh-handoff/blob/08dc59d0ec061152bc2b61e47be7db2aff0e7571/cordis.patch.yml) · **Identity:** `dsh-handoff`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · behind rc.6 baseline
  - **Signals:** `session-data` `summarization` `model-request` `session-create` `prepack-build` · **Review:** Held because its DSH LLM and session peers are fixed to rc.5 rather than the rc.6 review baseline.

- **DSH Tool Diagnose** · [xu-kai-quan/dsh-tool-diagnose@a0e4aad](https://github.com/xu-kai-quan/dsh-tool-diagnose/commit/a0e4aad55da508c46880be2ed59de874e4d70f52) — An extensible diagnostics registry exposed through a model-facing diagnose tool.
  - **Evidence:** [manifest](https://github.com/xu-kai-quan/dsh-tool-diagnose/blob/a0e4aad55da508c46880be2ed59de874e4d70f52/package.json) → [patch](https://github.com/xu-kai-quan/dsh-tool-diagnose/blob/a0e4aad55da508c46880be2ed59de874e4d70f52/cordis.patch.yml) · **Identity:** `dsh-tool-diagnose`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · behind rc.6 baseline
  - **Signals:** `diagnostics` `model-tools` `credentials` `session-data` `prepare-build` · **Review:** Held because all DSH peers target rc.5 rather than the rc.6 review baseline.

- **DSH Plugin Marketplace** · [YELEBAI/dsh-plugin-marketplace@f4d5bbe](https://github.com/YELEBAI/dsh-plugin-marketplace/commit/f4d5bbe8592fa76afd8d80d35613e4160e17c760) — A validation-oriented marketplace with guided install agents, self-update, discovery, and installed-plugin management.
  - **Evidence:** [manifest](https://github.com/YELEBAI/dsh-plugin-marketplace/blob/f4d5bbe8592fa76afd8d80d35613e4160e17c760/package.json) → [patch](https://github.com/YELEBAI/dsh-plugin-marketplace/blob/f4d5bbe8592fa76afd8d80d35613e4160e17c760/cordis.patch.yml) · **Identity:** `dsh-plugin-marketplace`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · behind rc.6 baseline
  - **Signals:** `plugin-marketplace` `package-install` `self-update` `identity-collision` `agent-delegation` · **Review:** Held because its npm identity maps to the separately cataloged Scorp1o117 source and its DSH peers target rc.5.

- **DSH Vision Plugin** · [zcma11/dsh-vision-plugin@b418a5f](https://github.com/zcma11/dsh-vision-plugin/commit/b418a5f8e4373bb4e53556b8071ad6990f95de7c) — Uploads images, transcribes them through DashScope or offline Windows OCR, and injects descriptions into messages.
  - **Evidence:** [manifest](https://github.com/zcma11/dsh-vision-plugin/blob/b418a5f8e4373bb4e53556b8071ad6990f95de7c/package.json) → [patch](https://github.com/zcma11/dsh-vision-plugin/blob/b418a5f8e4373bb4e53556b8071ad6990f95de7c/cordis.patch.yml) · **Identity:** `dsh-vision-plugin`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · mixed peer ranges
  - **Signals:** `vision` `ocr` `credentials` `external-network` `identity-collision` · **Review:** Held because the npm identity maps to Xin-Zhang-IceMan/dsh-vision-plugin while the Git command in this source still contains a placeholder owner.

- **DSH Model Redactor** · [zerodegress/dsh-model-redactor@90af946](https://github.com/zerodegress/dsh-model-redactor/commit/90af9464c980ce96e746f860c0e964121c74d1a2) — Redacts secrets from model-visible input, output, reasoning, tool arguments, and stored session surfaces.
  - **Evidence:** [manifest](https://github.com/zerodegress/dsh-model-redactor/blob/90af9464c980ce96e746f860c0e964121c74d1a2/package.json) → [patch](https://github.com/zerodegress/dsh-model-redactor/blob/90af9464c980ce96e746f860c0e964121c74d1a2/cordis.patch.yml) · **Identity:** `dsh-model-redactor`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `secret-redaction` `session-data` `reasoning-data` `tool-arguments` · **Review:** Held because the fixed source documents manual Cordis composition but no reproducible public DSH package or Git-source installation identity.

- **DSH Thinking Notifier** · [6-debug-6/dsh-thinking-notifier@d97ab09](https://github.com/6-debug-6/dsh-thinking-notifier/commit/d97ab09f21568e22b47e02d036ef678212d2d137) — A desktop popup for thinking, permission, and completion status events.
  - **Evidence:** [manifest](https://github.com/6-debug-6/dsh-thinking-notifier/blob/d97ab09f21568e22b47e02d036ef678212d2d137/package.json) → [patch](https://github.com/6-debug-6/dsh-thinking-notifier/blob/d97ab09f21568e22b47e02d036ef678212d2d137/cordis.patch.yml) · **Identity:** `dsh-thinking-notifier`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-notification` `approval-events` `subprocess` `local-http-server` `placeholder-identity` · **Review:** Held because npm has no matching package and the manifest points to a placeholder repository identity; its PowerShell or Python subprocess and local status server were not started.

- **DSH Manager** · [as1350/dsh-manager@2733d86](https://github.com/as1350/dsh-manager/commit/2733d868662d15e203d61ead57f8889b04f74943) — A skills and deployment-patch manager with transactional enablement, rollback, and script-backed patch types.
  - **Evidence:** [manifest](https://github.com/as1350/dsh-manager/blob/2733d868662d15e203d61ead57f8889b04f74943/package.json) → [patch](https://github.com/as1350/dsh-manager/blob/2733d868662d15e203d61ead57f8889b04f74943/cordis.patch.yml) · **Identity:** `@deepseek-ai/dsh-manager`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `official-looking-namespace` `identity-unresolved` `filesystem-write` `script-execution` `patch-management` `wildcard-peers` · **Review:** Held because the official-looking npm scope is unpublished, no repository license file was found, wildcard peers do not establish compatibility, and the documented tarball version differs from the manifest.

- **DSH WxAuto** · [br1nosense/dsh-wxauto-plugin@37f4b9e](https://github.com/br1nosense/dsh-wxauto-plugin/commit/37f4b9e6e25c8b95bed17255ca4c79457d721489) — Windows WeChat automation for DSH progress reports, message polling, and a two-way task bridge.
  - **Evidence:** [manifest](https://github.com/br1nosense/dsh-wxauto-plugin/blob/37f4b9e6e25c8b95bed17255ca4c79457d721489/package.json) → [patch](https://github.com/br1nosense/dsh-wxauto-plugin/blob/37f4b9e6e25c8b95bed17255ca4c79457d721489/cordis.patch.yml) · **Identity:** `@dsh-user/dsh-wxauto`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `windows-only` `wechat-automation` `subprocess` `core-patch` `external-dependencies` `usage-restriction` · **Review:** Held because installation patches a DSH core namespace, pulls Python UI-automation dependencies, and the documented upstream usage restriction excludes production use; no installer, WeChat action, or bridge was run.

- **DSH WHU Plugin** · [daoxiang0520/dsh-plugin-whu@e4124f5](https://github.com/daoxiang0520/dsh-plugin-whu/commit/e4124f5b3587dd0f9008f30f89fedf74f0b7281b) — Connects Wuhan University library, timetable, grades, exams, and weather services through tools and a local UI.
  - **Evidence:** [manifest](https://github.com/daoxiang0520/dsh-plugin-whu/blob/e4124f5b3587dd0f9008f30f89fedf74f0b7281b/package/package.json) → [patch](https://github.com/daoxiang0520/dsh-plugin-whu/blob/e4124f5b3587dd0f9008f30f89fedf74f0b7281b/package/cordis.patch.yml) · **Identity:** `dsh-plugin-whu`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `campus-services` `python-subprocess` `local-http-server` `credentials` `web-ui` `license-unresolved` · **Review:** Held because no repository license file was found and the Python campus-service bridge handles login and academic data; no subprocess, login, or service request was started.

- **Edtechools DSH Plugins** · [edtechools/dsh-plugins@5e68ba5](https://github.com/edtechools/dsh-plugins/commit/5e68ba504626c0dc0a5e854b6699dde9a014137d) — A two-plugin workspace providing conversation turn navigation and credential-backed Bocha web search.
  - **Evidence:** [manifest](https://github.com/edtechools/dsh-plugins/blob/5e68ba504626c0dc0a5e854b6699dde9a014137d/packages/turn-nav/package.json) → [patch](https://github.com/edtechools/dsh-plugins/blob/5e68ba504626c0dc0a5e854b6699dde9a014137d/packages/turn-nav/cordis.patch.yml) · **Identity:** `dsh-plugin-turn-nav`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `web-ui` `web-search` `credentials` `external-network` `prepare-build` `workspace-dependencies` `license-unresolved` · **Review:** Held because the repository has no license file, both packages are unpublished, wildcard peers do not establish compatibility, and Git installation requires an allowed prepare build.

- **DSH Cross Collaboration** · [gameswu/dsh-cross-collaboration@a816775](https://github.com/gameswu/dsh-cross-collaboration/commit/a8167757de10c55167e547c8fc011290fae34ce4) — Discovers DSH peers over LAN or relay and delegates agent tasks to remote devices.
  - **Evidence:** [manifest](https://github.com/gameswu/dsh-cross-collaboration/blob/a8167757de10c55167e547c8fc011290fae34ce4/package.json) → [patch](https://github.com/gameswu/dsh-cross-collaboration/blob/a8167757de10c55167e547c8fc011290fae34ce4/cordis.patch.yml) · **Identity:** `dsh-cross-collaboration`
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `lan-discovery` `remote-task-execution` `udp` `websocket` `relay-network` `private-package` `license-unresolved` · **Review:** Held because the private package and repository declare no license, while the plugin exposes LAN discovery and remote delegated execution; no socket, relay, or task was started.

- **DSH Whale Button** · [hhj2714/dsh-whale-btn@c3386c4](https://github.com/hhj2714/dsh-whale-btn/commit/c3386c434bceeeab5e320769b6c12f3d4b515381) — A draggable always-on-top whale button that focuses or opens the DSH desktop window.
  - **Evidence:** [manifest](https://github.com/hhj2714/dsh-whale-btn/blob/c3386c434bceeeab5e320769b6c12f3d4b515381/package.json) → [patch](https://github.com/hhj2714/dsh-whale-btn/blob/c3386c434bceeeab5e320769b6c12f3d4b515381/cordis.patch.yml) · **Identity:** `dsh-whale-btn`
  - **Licenses:** repo `MIT` / package `unknown` · lifecycle `none` · compatibility unknown
  - **Signals:** `desktop-window-control` `subprocess` `always-on-top` `private-package` `github-only` · **Review:** Held because the package is private and omits its package license while spawning a native window helper; the repository MIT license and GitHub install are present, but no helper was started.

- **DSH Plugins 4U** · [honghudavy-star/DSH_plugins_4U@1868796](https://github.com/honghudavy-star/DSH_plugins_4U/commit/1868796c12d9ce212c4f12ba89783385fe7678a9) — An aggregate plugin suite for vision input, wallpaper customization, WeChat bridging, and a settings catalog.
  - **Evidence:** [manifest](https://github.com/honghudavy-star/DSH_plugins_4U/blob/1868796c12d9ce212c4f12ba89783385fe7678a9/package.json) → [patch](https://github.com/honghudavy-star/DSH_plugins_4U/blob/1868796c12d9ce212c4f12ba89783385fe7678a9/cordis.patch.yml) · **Identity:** `@dsh-plugins/4u`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `vision` `credentials` `external-network` `filesystem-write` `wechat-bridge` `local-http-server` `license-unresolved` · **Review:** Held because no repository license file was found and the unpublished suite combines credentialed vision, filesystem wallpaper changes, and a WeChat bridge; none was executed.

- **DSH Preset Switcher** · [jeffcwj/dsh-preset-switcher@ec337bf](https://github.com/jeffcwj/dsh-preset-switcher/commit/ec337bf2b9cc54e354256804c8ae1528a8d79dbc) — Adds a session-header control and local API for changing an active session's agent preset.
  - **Evidence:** [manifest](https://github.com/jeffcwj/dsh-preset-switcher/blob/ec337bf2b9cc54e354256804c8ae1528a8d79dbc/package.json) → [patch](https://github.com/jeffcwj/dsh-preset-switcher/blob/ec337bf2b9cc54e354256804c8ae1528a8d79dbc/cordis.patch.yml) · **Identity:** `dsh-preset-switcher`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `session-control` `preset-switching` `local-http-server` `web-ui` `local-install` `license-unresolved` · **Review:** Held because no repository license file or remote package identity was found and installation is documented only from an absolute local path; no session preset was changed.

- **DSH Claude Code Plugins** · [jianxx/dsh-cc-plugins@f5407cb](https://github.com/jianxx/dsh-cc-plugins/commit/f5407cbf9baf1f2dc47d9fba5186933c144ec0ce) — A large Claude Code parity workspace with permission rules, settings cascade, tools, hooks, MCP, memory, and profile bundles.
  - **Evidence:** [manifest](https://github.com/jianxx/dsh-cc-plugins/blob/f5407cbf9baf1f2dc47d9fba5186933c144ec0ce/packages/bundle/cc-permissions/package.json) → [patch](https://github.com/jianxx/dsh-cc-plugins/blob/f5407cbf9baf1f2dc47d9fba5186933c144ec0ce/packages/bundle/cc-permissions/cordis.patch.yml) · **Identity:** `@jianxx/dsh-cc-bundle-permissions`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · mixed peer ranges
  - **Signals:** `permission-engine` `settings-write` `hooks` `subprocess` `external-network` `workspace-dependencies` `identity-unresolved` · **Review:** Held because the documented repository install targets a private root with no bundle, nested packages are unpublished, and workspace dependencies do not provide an external install identity; no hook or tool ran.

- **DSH Lan Memory** · [kiefeng/dsh-lan-memory@ae0efa5](https://github.com/kiefeng/dsh-lan-memory/commit/ae0efa5e74a88fc852e344607502faeeaf170161) — A memory and persona system with pinned facts, JSONL retrieval, experience, soul, mood, settings, and sidebar cards.
  - **Evidence:** [manifest](https://github.com/kiefeng/dsh-lan-memory/blob/ae0efa5e74a88fc852e344607502faeeaf170161/package.json) → [patch](https://github.com/kiefeng/dsh-lan-memory/blob/ae0efa5e74a88fc852e344607502faeeaf170161/cordis.patch.yml) · **Identity:** `dsh-lan-memory`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `persistent-memory` `filesystem-write` `persona-injection` `web-ui` `local-install` `license-unresolved` · **Review:** Held because no repository license file or remote package identity was found and only local-directory installation is documented; no memory, persona, or mood state was written.

- **DSH QQ Bot** · [leliln52/dsh-qqbot@ff2d9f7](https://github.com/leliln52/dsh-qqbot/commit/ff2d9f71bd244d9420d06237a9fee22a6fc03bf5) — Connects DSH agents to QQ through OneBot WebSocket or the official QQ bot platform.
  - **Evidence:** [manifest](https://github.com/leliln52/dsh-qqbot/blob/ff2d9f71bd244d9420d06237a9fee22a6fc03bf5/package.json) → [patch](https://github.com/leliln52/dsh-qqbot/blob/ff2d9f71bd244d9420d06237a9fee22a6fc03bf5/cordis.patch.yml) · **Identity:** `dsh-qqbot`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `qq-bot` `websocket` `credentials` `external-network` `persistent-session` `identity-unresolved` · **Review:** Held because npm exposes 1.0.1 without repository metadata while the fixed source is 0.2.0 and documents only local installation; no bot login, message, or agent session was started.

- **DSH Freebuff** · [liceses/dsh-freebuff@308f365](https://github.com/liceses/dsh-freebuff/commit/308f365021d4b2cb6a8c12269a8e69a9c10ced86) — Adapts the unofficial Freebuff desktop protocol into a DSH model provider.
  - **Evidence:** [manifest](https://github.com/liceses/dsh-freebuff/blob/308f365021d4b2cb6a8c12269a8e69a9c10ced86/package.json) → [patch](https://github.com/liceses/dsh-freebuff/blob/308f365021d4b2cb6a8c12269a8e69a9c10ced86/cordis.patch.yml) · **Identity:** `dsh-freebuff`
  - **Licenses:** repo `Apache-2.0` / package `Apache-2.0` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `model-provider` `unofficial-protocol` `external-network` `anonymous-identity` `reverse-proxy` `compliance-unresolved` · **Review:** Held because it reimplements an undocumented third-party desktop protocol and free service without confirmed API authorization; no request, identity, or model response was sent.

- **DSH Firefly Theme** · [Liu-ZA-81/dsh-theme-firefly@edbee71](https://github.com/Liu-ZA-81/dsh-theme-firefly/commit/edbee7165956153e48162d095ea539627e5cb416) — A Firefly character theme with wallpapers, GIFs, music, neon styling, and a startup transformation animation.
  - **Evidence:** [manifest](https://github.com/Liu-ZA-81/dsh-theme-firefly/blob/edbee7165956153e48162d095ea539627e5cb416/package.json) → [patch](https://github.com/Liu-ZA-81/dsh-theme-firefly/blob/edbee7165956153e48162d095ea539627e5cb416/cordis.patch.yml) · **Identity:** `dsh-theme-firefly`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `web-theme` `client-injection` `bundled-media` `copyrighted-assets` `audio` `video` · **Review:** Held because the MIT license covers code while the repository redistributes HoYoverse character art, GIFs, and music whose copyright remains with third parties; no media was loaded.

- **DSH UI Sidebar** · [nicklin99/dsh-ui-sidebar@c31e512](https://github.com/nicklin99/dsh-ui-sidebar/commit/c31e5121e4d3508c69ed8a27a91dbe6ad64c3b58) — Replaces the DSH Web sidebar with custom branding, session search, grouping, and workspace navigation.
  - **Evidence:** [manifest](https://github.com/nicklin99/dsh-ui-sidebar/blob/c31e5121e4d3508c69ed8a27a91dbe6ad64c3b58/package.json) → [patch](https://github.com/nicklin99/dsh-ui-sidebar/blob/c31e5121e4d3508c69ed8a27a91dbe6ad64c3b58/cordis.patch.yml) · **Identity:** `dsh-ui-sidebar`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `client-injection` `session-data` `sidebar-replacement` `unresolved-install-identity` `license-unresolved` · **Review:** Held because no repository license file, repository mapping, published package, or author-documented public install identity was found; the replacement sidebar was not loaded.

- **PicGo DSH Plugin** · [PicGo/dsh-plugin@8616305](https://github.com/PicGo/dsh-plugin/commit/8616305583fde0d02f2cf9bcfc8b957e81f36476) — Uploads images and files from DSH through PicGo image-host configurations.
  - **Evidence:** [manifest](https://github.com/PicGo/dsh-plugin/blob/8616305583fde0d02f2cf9bcfc8b957e81f36476/package.json) → [patch](https://github.com/PicGo/dsh-plugin/blob/8616305583fde0d02f2cf9bcfc8b957e81f36476/cordis.patch.yml) · **Identity:** `@picgo/dsh-plugin`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `file-upload` `filesystem-read` `credentials` `external-network` `model-tools` `prepare-build` `license-unresolved` · **Review:** Held because no repository license file was found for the published package; no prepare build, file read, credential use, or upload was executed.

- **DSH Skin Studio** · [realMisakaMikoto/dsh-skin-studio@8a66d01](https://github.com/realMisakaMikoto/dsh-skin-studio/commit/8a66d01b7e11a96915f367e9330dfd01c5576352) — Creates, imports, manages, and shares portable visual skins for DSH Web.
  - **Evidence:** [manifest](https://github.com/realMisakaMikoto/dsh-skin-studio/blob/8a66d01b7e11a96915f367e9330dfd01c5576352/package.json) → [patch](https://github.com/realMisakaMikoto/dsh-skin-studio/blob/8a66d01b7e11a96915f367e9330dfd01c5576352/cordis.patch.yml) · **Identity:** `dsh-skin-studio`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepack` · compatibility unknown
  - **Signals:** `theme` `client-injection` `file-import` `browser-storage` `prepack-build` `identity-unresolved` · **Review:** Held because npm exposes 0.4.4 without repository metadata while the fixed source is 0.3.5; no build, skin import, storage, or rendering was executed.

- **Riesbri DSH TUI** · [riesbri/dsh-tui@bf65139](https://github.com/riesbri/dsh-tui/commit/bf65139df12452921b966198087aae7ec50016c6) — Provides an in-process terminal interface over DSH agent, command, session, and approval services.
  - **Evidence:** [manifest](https://github.com/riesbri/dsh-tui/blob/bf65139df12452921b966198087aae7ec50016c6/packages/tui/package.json) → [patch](https://github.com/riesbri/dsh-tui/blob/bf65139df12452921b966198087aae7ec50016c6/packages/tui/cordis.patch.yml) · **Identity:** `@riesbri/dsh-tui`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `prepare` · compatibility unknown
  - **Signals:** `terminal` `session-data` `approval-flow` `prepare-build` `workspace-dependencies` `identity-unresolved` · **Review:** Held because the nested package is unpublished, lacks repository metadata, depends on a local workspace renderer, and the documented Git root is not an installable bundle; no build or TUI ran.

- **DSH Plugin Surgery** · [ruimin251204/dsh-plugin-surgery@11249e0](https://github.com/ruimin251204/dsh-plugin-surgery/commit/11249e08f60acf7a078b67cadc5278479de67381) — Previews plugin impact, performs uninstall cleanup, creates rollback snapshots, and diagnoses plugin state.
  - **Evidence:** [manifest](https://github.com/ruimin251204/dsh-plugin-surgery/blob/11249e08f60acf7a078b67cadc5278479de67381/package.json) → [patch](https://github.com/ruimin251204/dsh-plugin-surgery/blob/11249e08f60acf7a078b67cadc5278479de67381/cordis.patch.yml) · **Identity:** `dsh-plugin-surgery`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-management` `filesystem-write` `file-delete` `rollback` `configuration-edit` `identity-unresolved` · **Review:** Held because npm exposes 0.2.0 without repository metadata while the fixed source is 0.1.4; no uninstall, cleanup, snapshot, rollback, or diagnosis was executed.

- **DSH QoL** · [shifan3/dsh-QoL@5830544](https://github.com/shifan3/dsh-QoL/commit/58305445e1ef13530c15e306d55c0ccfa823dea4) — Changes composer shortcuts, supports editing and branching earlier messages, and adds code-aware file editing.
  - **Evidence:** [manifest](https://github.com/shifan3/dsh-QoL/blob/58305445e1ef13530c15e306d55c0ccfa823dea4/package.json) → [patch](https://github.com/shifan3/dsh-QoL/blob/58305445e1ef13530c15e306d55c0ccfa823dea4/cordis.patch.yml) · **Identity:** `dsh-qol`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `client-injection` `message-edit` `session-data` `filesystem-write` `private-package` `license-unresolved` `identity-unresolved` · **Review:** Held because the package is private, no repository license file or public distribution identity was found, and its immediate client injection can edit files and session history; none was loaded.

- **DSH Memory Hermes** · [SipengXie2024/dsh-memory-hermes@a79f49f](https://github.com/SipengXie2024/dsh-memory-hermes/commit/a79f49f607c4df49ee344ff8ec3b86d80f33a387) — Implements bounded curated Hermes-style memory with tools, storage, context injection, and a web surface.
  - **Evidence:** [manifest](https://github.com/SipengXie2024/dsh-memory-hermes/blob/a79f49f607c4df49ee344ff8ec3b86d80f33a387/package.json) → [patch](https://github.com/SipengXie2024/dsh-memory-hermes/blob/a79f49f607c4df49ee344ff8ec3b86d80f33a387/cordis.patch.yml) · **Identity:** `dsh-memory-hermes`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `persistent-memory` `filesystem-write` `context-injection` `model-tools` `client-injection` `local-package` `identity-unresolved` · **Review:** Held because the package is unpublished, lacks repository metadata, uses wildcard DSH peers, and documents a local tarball install rather than a public source identity; no memory operation ran.

- **DSH CLI Interactive** · [studyinglx/dsh-cli@83d1538](https://github.com/studyinglx/dsh-cli/commit/83d1538c83a630cc5989a2cb3c238c0956ba4ef5) — Provides a Claude Code-style interactive terminal profile over DSH agent, command, LLM, and session services.
  - **Evidence:** [manifest](https://github.com/studyinglx/dsh-cli/blob/83d1538c83a630cc5989a2cb3c238c0956ba4ef5/package.json) → [patch](https://github.com/studyinglx/dsh-cli/blob/83d1538c83a630cc5989a2cb3c238c0956ba4ef5/cordis.patch.yml) · **Identity:** `dsh-cli-interactive`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `terminal` `session-data` `model-request` `profile-bundle` `local-install` `identity-unresolved` · **Review:** Held because the package is unpublished, lacks repository metadata, and the documentation says npm publication is future work while using a locally built distribution; no build or terminal session ran.

- **DSH Marketplaces Nexus** · [TeaClearInkII/DSH-Marketplaces-Nexus@835a12c](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus/commit/835a12cc0f298713e197b24c2c92f3bde1533b44) — Aggregates DSH marketplaces and curated directories into a searchable browser panel with install-command metadata.
  - **Evidence:** [manifest](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus/blob/835a12cc0f298713e197b24c2c92f3bde1533b44/plugin/package.json) → [patch](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus/blob/835a12cc0f298713e197b24c2c92f3bde1533b44/plugin/cordis.patch.yml) · **Identity:** `dsh-marketplaces-nexus`
  - **Licenses:** repo `unknown` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `plugin-marketplace` `external-network` `remote-catalog` `install-command-data` `client-injection` `license-unresolved` `identity-unresolved` · **Review:** Held because the published package has no repository metadata and no repository license file was found; no remote catalog fetch or install command was executed.

- **DSH Live2D MyGO** · [U1s1-king/dsh-live2d-mygo@0605eeb](https://github.com/U1s1-king/dsh-live2d-mygo/commit/0605eeb15cc58a7bcb2f926e6ec90467ce74f6d7) — Adds a MyGO-themed Live2D desktop character with dress-up, dragging, snapshots, and speech bubbles.
  - **Evidence:** [manifest](https://github.com/U1s1-king/dsh-live2d-mygo/blob/0605eeb15cc58a7bcb2f926e6ec90467ce74f6d7/package.json) → [patch](https://github.com/U1s1-king/dsh-live2d-mygo/blob/0605eeb15cc58a7bcb2f926e6ec90467ce74f6d7/cordis.patch.yml) · **Identity:** `dsh-live2d-mygo`
  - **Licenses:** repo `unknown` / package `CC-BY-NC-SA-4.0` · lifecycle `none` · compatibility unknown
  - **Signals:** `live2d` `desktop-pet` `bundled-media` `third-party-assets` `client-injection` `license-unresolved` `identity-unresolved` · **Review:** Held because no repository license file or public distribution identity was found and the repository bundles 82 MyGO character images whose reuse rights were not independently established; no asset was loaded.

- **DSH UX Writing** · [uckkk/dsh-ux-writing@ecf5e64](https://github.com/uckkk/dsh-ux-writing/commit/ecf5e64fd2023bdfe24b3d368fd33a5e0f604e3f) — Provides model tools and guidelines for writing interface microcopy, buttons, and error messages.
  - **Evidence:** [manifest](https://github.com/uckkk/dsh-ux-writing/blob/ecf5e64fd2023bdfe24b3d368fd33a5e0f604e3f/package.json) → [patch](https://github.com/uckkk/dsh-ux-writing/blob/ecf5e64fd2023bdfe24b3d368fd33a5e0f604e3f/cordis.patch.yml) · **Identity:** `dsh-ux-writing`
  - **Licenses:** repo `MIT` / package `MIT` · lifecycle `none` · compatibility unknown
  - **Signals:** `ux-writing` `model-tools` `prompt-guidance` `unresolved-install-identity` · **Review:** Held because the documented dsh plugin add target is not published and no separate Git-source install command or package repository mapping was found; no tool or prompt guidance ran.

- **DSH Config Manager** · [xiajiajun516/dsh-config-manager@732eb3e](https://github.com/xiajiajun516/dsh-config-manager/commit/732eb3e3ebf74fdcb496be15e1b0bb33a5c15534) — Backs up, exports, imports, and migrates DSH configuration through host tools and a web interface.
  - **Evidence:** [manifest](https://github.com/xiajiajun516/dsh-config-manager/blob/732eb3e3ebf74fdcb496be15e1b0bb33a5c15534/package.json) → [patch](https://github.com/xiajiajun516/dsh-config-manager/blob/732eb3e3ebf74fdcb496be15e1b0bb33a5c15534/cordis.patch.yml) · **Identity:** `dsh-config-manager`
  - **Licenses:** repo `unknown` / package `unknown` · lifecycle `none` · declares rc.6 peers
  - **Signals:** `configuration-backup` `filesystem-read` `filesystem-write` `credentials` `settings-write` `model-tools` `client-injection` `license-unresolved` · **Review:** Held because neither the repository nor package declares a license; no configuration read, backup, import, migration, credential access, tool, or browser action was executed.

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
