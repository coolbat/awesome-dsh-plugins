<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Awesome DSH Plugins——带固定源码快照的证据型插件目录">
</p>

<p align="center">
  <a href="./README.md">English</a> · <strong>简体中文</strong>
</p>

# Awesome DSH Plugins

一个独立、证据优先的
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
插件目录。每个列出项目都在不可变提交上核对了 bundle manifest、引用的
patch、许可证线索、包身份、生命周期脚本和重要能力信号。

它不是对 `dsh-plugin` topic 的整站镜像，而是一组经过固定源码检查的精简样本。
本仓库与覆盖面更广的
[Awesome DeepSeek Harness Plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)
形成互补：前者负责发现，这里负责记录证据、保留不确定性和暂缓原因。

> [!CAUTION]
> 结构核验不等于安全审计，也不等于运行兼容性测试。DSH 插件会以你的本机权限
> 执行第三方代码。安装前请阅读源码、检查生命周期脚本，并优先使用不可变版本。

## 网站

本仓库同时也是双语静态网站的源码。网站、自动生成的 README 目录、插件详情页、
审核记录、sitemap 和统计数字全部读取
[`data/plugins.json`](./data/plugins.json)，因此目录修改与展示页面会在同一个提交中
发布，不需要跨仓库同步。

```bash
npm install
npm run dev
```

生产校验使用 `npm run check && npm run build`，静态文件输出到 `out/`，可直接部署到
Cloudflare Pages。参见[部署说明](./docs/DEPLOYMENT.md)。网站不包含 AI、登录、
数据库、支付，也不会执行任何第三方插件代码。

## 自动发现候选

GitHub Actions 每 6 小时执行一次有预算上限的 GitHub API 增量发现，每周再执行一次
完整查询。流程会把命中仓库解析到 40 位提交，只读取 `package.json` 和其引用的
patch 路径，不 clone、不安装、也不执行第三方代码。只有候选队列发生实质变化时
才会创建或刷新审核 PR；增量水位保存在独立 bot 分支，因此空运行不会制造审核 PR
噪音。候选绝不会自动写入 `data/plugins.json`。

查询词与请求预算位于 [`config/discovery.json`](./config/discovery.json)。维护者也可
在本地运行 `GITHUB_TOKEN=... npm run discover -- --dry-run`。

## 这里有什么不同

- **固定证据：** 每个判断都链接到完整的 40 位提交。
- **原生 bundle 检查：** `package.json` 必须声明 `dsh.bundle.patch`，且引用
  的 patch 必须存在。
- **事实分离：** 结构、许可证、身份、兼容性、生命周期与能力信号不会被压成一个
  “安全分”。
- **不确定性可见：** 身份冲突、结构缺失或兼容性落后的候选会进入暂缓队列。
- **不拿热度当证明：** Star 和 topic 只用于发现，不代表可信、兼容或可安装。

## 状态模型

| 状态 | 含义 |
| --- | --- |
| **已核验** | 在链接提交上确认了原生 bundle 结构；运行行为与安全性仍未验证。 |
| **暂缓** | 面向 DSH，但存在明确的身份、结构或兼容性阻塞。 |
| **排除** | 固定源码证据显示其目前不符合原生 DSH bundle 的收录条件。 |

## 插件目录

<!-- CATALOG:START -->
快照：**2026-08-16** · **269 个候选** · **235 个已核验** · **33 个暂缓** · **1 个排除**

### 已核验的原生 bundles

#### 界面与工作区

- **DSH WSL Workspace** · [6Mikao9/dsh-wsl-workspace@89905a8](https://github.com/6Mikao9/dsh-wsl-workspace/commit/89905a82ebbff7881b586554a72ebeb0d78f93bf) — 为 DeepSeek Harness 提供 Windows 与 WSL 路径之间的工作区支持。
  - **证据:** [manifest](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/package.json) → [patch](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/cordis.patch.yml) · **身份:** `dsh-wsl-workspace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem` `cross-platform-paths` · **核验备注:** DSH peer range 较宽，运行兼容性仍未知。

- **DSH Toolbox Web** · [AbcdefgXW/dsh-toolbox-web@322c260](https://github.com/AbcdefgXW/dsh-toolbox-web/commit/322c2602a98cac7521af147b9becb78bb332303b) — 面向会话、回收站、工作区目录、搜索、预设、配置、归档与定时心跳管理的 Web 工具箱。
  - **证据:** [manifest](https://github.com/AbcdefgXW/dsh-toolbox-web/blob/322c2602a98cac7521af147b9becb78bb332303b/package.json) → [patch](https://github.com/AbcdefgXW/dsh-toolbox-web/blob/322c2602a98cac7521af147b9becb78bb332303b/cordis.patch.yml) · **身份:** `dsh-toolbox-web`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `filesystem-write` `scheduled-tasks` `external-messaging` `client-injection` · **核验备注:** 公开包映射到该仓库；源码可见会话与配置写入以及可选 IM 心跳推送，均未执行。

- **DSH Effort** · [AI-Galaxy-GPU/dsh-effort@edbb063](https://github.com/AI-Galaxy-GPU/dsh-effort/commit/edbb063eefb05e33aa970a4b9ec8cbaad08e8641) — 在 Web 界面中增加当前会话模型所支持的推理强度选择控件。
  - **证据:** [manifest](https://github.com/AI-Galaxy-GPU/dsh-effort/blob/edbb063eefb05e33aa970a4b9ec8cbaad08e8641/package.json) → [patch](https://github.com/AI-Galaxy-GPU/dsh-effort/blob/edbb063eefb05e33aa970a4b9ec8cbaad08e8641/cordis.patch.yml) · **身份:** `dsh-effort`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `model-selection` `client-injection` `local-storage` · **核验备注:** 固定源码使用会话模型 RPC 与浏览器存储；仓库未检测到许可证文件，且没有声明 DSH peer 范围。

- **DSH Sound** · [AI-Galaxy-GPU/dsh-sound@f5f25dc](https://github.com/AI-Galaxy-GPU/dsh-sound/commit/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32) — 为任务完成、审批、提问、计划审核、阻塞和失败播放可配置的浏览器提示音。
  - **证据:** [manifest](https://github.com/AI-Galaxy-GPU/dsh-sound/blob/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32/package.json) → [patch](https://github.com/AI-Galaxy-GPU/dsh-sound/blob/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32/cordis.patch.yml) · **身份:** `dsh-sound`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-events` `local-file` `browser-storage` `client-injection` · **核验备注:** 固定源码把配置存入 localStorage、音频存入 IndexedDB；文档所列 npm 目标目前没有可用版本，且未测试运行行为。

- **DSH Context** · [bowenliang123/dsh-context@aca38b2](https://github.com/bowenliang123/dsh-context/commit/aca38b24d714106f7256280dc8f9c9ec5b8e4552) — 展示请求历史、压缩、注入、模型切换与上下文组成变化的洞察面板。
  - **证据:** [manifest](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/package.json) → [patch](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/cordis.patch.yml) · **身份:** `dsh-context`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `session-data` `client-injection` `browser` · **核验备注:** 已确认 host/client bundle 结构；prepare hook 会调用 Husky，且包未声明 DSH peer 范围。

- **DSH Stop Server** · [caozhikun/dsh-stop-server@baa9b9c](https://github.com/caozhikun/dsh-stop-server/commit/baa9b9cbc10e947486ae530c1c8fed5a61a314d4) — 增加一个调用宿主关闭路由的 Web 操作，用于停止 DSH 进程并关闭当前界面。
  - **证据:** [manifest](https://github.com/caozhikun/dsh-stop-server/blob/baa9b9cbc10e947486ae530c1c8fed5a61a314d4/package.json) → [patch](https://github.com/caozhikun/dsh-stop-server/blob/baa9b9cbc10e947486ae530c1c8fed5a61a314d4/cordis.patch.yml) · **身份:** `dsh-stop-server`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `process-exit` `web-route` `client-injection` · **核验备注:** 固定宿主源码注册了带 appExit、process.exit 与 SIGTERM 回退的关闭路由；仓库未检测到许可证文件，且未执行关闭。

- **Captain DSH Web UI All** · [CAPTAIN1275/dsh-ui-web@04422dd](https://github.com/CAPTAIN1275/dsh-ui-web/commit/04422dd2d447044537f404747adbc7c0c8a86cd4) — 聚合任务看板、Git 视图、桌宠、远程访问、实时统计、设置与内置皮肤的 Web UI bundle。
  - **证据:** [manifest](https://github.com/CAPTAIN1275/dsh-ui-web/blob/04422dd2d447044537f404747adbc7c0c8a86cd4/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/CAPTAIN1275/dsh-ui-web/blob/04422dd2d447044537f404747adbc7c0c8a86cd4/packages/dsh-web-ui-all/cordis.patch.yml) · **身份:** `@captain1275/dsh-web-ui-all`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `aggregate-scope` `remote-access` `filesystem-write` `git` `client-injection` · **核验备注:** 公开聚合包身份映射到该仓库并代表其组件候选；未执行远程、文件、Git、会话或 UI 能力面。

- **DSH TUI** · [ccch1mneyyy/dsh-TUI@ee83376](https://github.com/ccch1mneyyy/dsh-TUI/commit/ee83376b549814f236ea2ab90682bb8f482dc826) — 带实时状态、流式思考、工具、审批与文件系统能力的全屏终端客户端。
  - **证据:** [manifest](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/package.json) → [patch](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/cordis.patch.yml) · **身份:** `@deepseek-harness-tui/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `terminal` `subprocess` `filesystem` `credentials` `broad-agent-surface` · **核验备注:** 该 bundle 暴露较广的 Agent 能力面；结构确认不代表运行背书。

- **DSH Sticky Notes** · [charrywhite/dsh-sticky-notes@e2653fc](https://github.com/charrywhite/dsh-sticky-notes/commit/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851) — 带宿主 JSON 持久化、浏览器界面与模型便签工具的常驻便签面板。
  - **证据:** [manifest](https://github.com/charrywhite/dsh-sticky-notes/blob/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851/package.json) → [patch](https://github.com/charrywhite/dsh-sticky-notes/blob/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-write` `web-route` `client-injection` `model-tools` `private-package` · **核验备注:** 私有包文档记录了本地 link 与源码安装；未执行便签存储、HTTP 路由或模型工具。

- **Castorice Theme** · [chemicalcat250/dsh-theme-castorice@c55e467](https://github.com/chemicalcat250/dsh-theme-castorice/commit/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2) — 为 DSH Web 界面应用紫罗兰暗色的遐蝶风格视觉主题。
  - **证据:** [manifest](https://github.com/chemicalcat250/dsh-theme-castorice/blob/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2/package.json) → [patch](https://github.com/chemicalcat250/dsh-theme-castorice/blob/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2/cordis.patch.yml) · **身份:** `dsh-theme-castorice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `browser-storage` · **核验备注:** 文档记录了 GitHub 源安装，客户端代码会注入主题样式并保存浏览器偏好；未在浏览器中加载。

- **DSH Browser Notify** · [classfieldseason-cmd/dsh-notify-plugin@8f386ca](https://github.com/classfieldseason-cmd/dsh-notify-plugin/commit/8f386ca5d66e8549119466c4a2ede15154aad577) — 在 DSH 对话回合完成时显示浏览器桌面通知。
  - **证据:** [manifest](https://github.com/classfieldseason-cmd/dsh-notify-plugin/blob/8f386ca5d66e8549119466c4a2ede15154aad577/package.json) → [patch](https://github.com/classfieldseason-cmd/dsh-notify-plugin/blob/8f386ca5d66e8549119466c4a2ede15154aad577/cordis.patch.yml) · **身份:** `dsh-browser-notify-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `browser-notification` `session-events` `client-injection` · **核验备注:** 公开包身份与本仓库一致，客户端监听会话完成事件后调用浏览器 Notification API；未触发通知。

- **DSH Glassmorphism** · [czw63/dsh-glassmorphism@e1f0466](https://github.com/czw63/dsh-glassmorphism/commit/e1f0466dac2dbbd1dc4e9f465f8819436672e648) — 增加适配移动端的液态玻璃主题，并提供可选壁纸、模糊与折射效果。
  - **证据:** [manifest](https://github.com/czw63/dsh-glassmorphism/blob/e1f0466dac2dbbd1dc4e9f465f8819436672e648/package.json) → [patch](https://github.com/czw63/dsh-glassmorphism/blob/e1f0466dac2dbbd1dc4e9f465f8819436672e648/cordis.patch.yml) · **身份:** `@local/dsh-glass-theme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `browser-storage` · **核验备注:** 文档记录了本地文件安装路径，客户端会在浏览器保存视觉偏好；未加载样式 bundle。

- **DSH Delete Session** · [dream12347/dsh-delete-session@e0f052a](https://github.com/dream12347/dsh-delete-session/commit/e0f052ac7cff776df72cdc58e8c42c94a1843c55) — 提供回收站、恢复、永久删除、归档会话、活动统计、暂停与日志目录访问的 Web 会话管理器。
  - **证据:** [manifest](https://github.com/dream12347/dsh-delete-session/blob/e0f052ac7cff776df72cdc58e8c42c94a1843c55/package.json) → [patch](https://github.com/dream12347/dsh-delete-session/blob/e0f052ac7cff776df72cdc58e8c42c94a1843c55/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-delete` `archive-registry` `client-injection` `browser-storage` · **核验备注:** 文档记录了固定 GitHub 安装与 rc.6 peer；破坏性的会话和工作区操作仍需用户触发，未执行。

- **DSH Unarchive** · [edfrey0044/dsh-unarchive@52a5194](https://github.com/edfrey0044/dsh-unarchive/commit/52a51946f9b48c1f97eb965b3050aab124355d51) — 通过命令和工具更新全局归档注册表，以恢复已归档的 DSH 会话。
  - **证据:** [manifest](https://github.com/edfrey0044/dsh-unarchive/blob/52a51946f9b48c1f97eb965b3050aab124355d51/package.json) → [patch](https://github.com/edfrey0044/dsh-unarchive/blob/52a51946f9b48c1f97eb965b3050aab124355d51/cordis.patch.yml) · **身份:** `dsh-unarchive`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `session-data` `archive-registry` `workspace-state` · **核验备注:** 文档记录了 Git 源安装，该 bundle 会从全局归档集合移除会话标识；未改变注册表或会话状态。

- **DSH OpenCode Palette** · [FeatherHunter/dsh-opencode-palette@4c3660a](https://github.com/FeatherHunter/dsh-opencode-palette/commit/4c3660a40229f3e661dd8cb7e67610b2d932e575) — 为 DSH Web 界面增加可持久保存的数十款 OpenCode 风格配色主题选择器。
  - **证据:** [manifest](https://github.com/FeatherHunter/dsh-opencode-palette/blob/4c3660a40229f3e661dd8cb7e67610b2d932e575/package/package.json) → [patch](https://github.com/FeatherHunter/dsh-opencode-palette/blob/4c3660a40229f3e661dd8cb7e67610b2d932e575/package/cordis.patch.yml) · **身份:** `dsh-opencode-palette`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `browser-storage` · **核验备注:** 固定源码版本早于观察到的 registry 发布版本，但对应同一公开身份；未执行主题注入或浏览器持久设置。

- **StyleVault** · [GptsApp/dsh-stylevault@26eee2d](https://github.com/GptsApp/dsh-stylevault/commit/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8) — 面向 DSH Web 的主题库、样式设置与可分享外观配置包。
  - **证据:** [manifest](https://github.com/GptsApp/dsh-stylevault/blob/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8/package.json) → [patch](https://github.com/GptsApp/dsh-stylevault/blob/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `theme` `client-injection` `browser-storage` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Balance Bubble** · [Jescoi/dsh-balance-bubble@dbfaef5](https://github.com/Jescoi/dsh-balance-bubble/commit/dbfaef5ea65ac380833bbc7c6f6423e69ef595e2) — 由宿主接口提供数据的持久 DeepSeek 账户余额悬浮气泡。
  - **证据:** [manifest](https://github.com/Jescoi/dsh-balance-bubble/blob/dbfaef5ea65ac380833bbc7c6f6423e69ef595e2/package.json) → [patch](https://github.com/Jescoi/dsh-balance-bubble/blob/dbfaef5ea65ac380833bbc7c6f6423e69ef595e2/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-balance` `credentials` `local-web-server` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **La Feng UI** · [JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-.@bfd81d8](https://github.com/JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-./commit/bfd81d879daf3dd899f7db67f2e6c33f88a7460d) — 集皮肤、动态壁纸、音乐、声浪和人设于一体的可定制 Web UI 包。
  - **证据:** [manifest](https://github.com/JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-./blob/bfd81d879daf3dd899f7db67f2e6c33f88a7460d/package.json) → [patch](https://github.com/JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis-./blob/bfd81d879daf3dd899f7db67f2e6c33f88a7460d/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `theme` `audio` `client-injection` `browser-storage` `persona` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Survey** · [jinhuang712/dsh-survey@9f36ef1](https://github.com/jinhuang712/dsh-survey/commit/9f36ef12e23607e6ad8a11853931c7c83d0e1d7a) — 支持批量问卷、跳过、Markdown 回答和总结的模型工具与富 Web 表单。
  - **证据:** [manifest](https://github.com/jinhuang712/dsh-survey/blob/9f36ef12e23607e6ad8a11853931c7c83d0e1d7a/package.json) → [patch](https://github.com/jinhuang712/dsh-survey/blob/9f36ef12e23607e6ad8a11853931c7c83d0e1d7a/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `model-tools` `interactive-form` `session-data` `client-injection` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Bottom Bar** · [kc0ed/dsh-bottom-bar@01d8433](https://github.com/kc0ed/dsh-bottom-bar/commit/01d843306e7d3f0819b9e8ac28f0478be2b2d801) — 可配置的输入框底部统计栏，含费用估算与本地持久用量账本。
  - **证据:** [manifest](https://github.com/kc0ed/dsh-bottom-bar/blob/01d843306e7d3f0819b9e8ac28f0478be2b2d801/package.json) → [patch](https://github.com/kc0ed/dsh-bottom-bar/blob/01d843306e7d3f0819b9e8ac28f0478be2b2d801/cordis.patch.yml) · **身份:** `@kc0ed/dsh-bottom-bar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `token-meter` `cost-estimation` `browser-storage` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH WhaleGirl** · [KLnormal/dsh_whalegirl@6cf1b30](https://github.com/KLnormal/dsh_whalegirl/commit/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf) — 由 DSH 会话事件驱动的桌面原生动态 WhaleGirl 伴侣。
  - **证据:** [manifest](https://github.com/KLnormal/dsh_whalegirl/blob/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf/package.json) → [patch](https://github.com/KLnormal/dsh_whalegirl/blob/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `SEE LICENSE IN ASSET_LICENSE.md` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-app` `session-data` `audio` `subprocess` `external-model-download` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Bell Notify** · [Laplace-bit/dsh-bell-notify@943e178](https://github.com/Laplace-bit/dsh-bell-notify/commit/943e178bd7bdc15628fdcfc5125e058cc0974dee) — 为 Agent 生命周期事件提供 Web Audio 合成铃声与状态提示。
  - **证据:** [manifest](https://github.com/Laplace-bit/dsh-bell-notify/blob/943e178bd7bdc15628fdcfc5125e058cc0974dee/package.json) → [patch](https://github.com/Laplace-bit/dsh-bell-notify/blob/943e178bd7bdc15628fdcfc5125e058cc0974dee/cordis.patch.yml) · **身份:** `dsh-bell-notify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `audio` `agent-events` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Keyboard** · [lhf6623/dsh-keyboard@4ecb1b7](https://github.com/lhf6623/dsh-keyboard/commit/4ecb1b77a2b1900331d6ce003f6047e8ed3ad198) — 实时高亮键盘与鼠标输入事件的屏幕可视化组件。
  - **证据:** [manifest](https://github.com/lhf6623/dsh-keyboard/blob/4ecb1b77a2b1900331d6ce003f6047e8ed3ad198/package.json) → [patch](https://github.com/lhf6623/dsh-keyboard/blob/4ecb1b77a2b1900331d6ce003f6047e8ed3ad198/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `input-events` `client-injection` `keyboard-visualizer` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Neu Theme** · [Lhy723/dsh-neu-theme@c6ecbe4](https://github.com/Lhy723/dsh-neu-theme/commit/c6ecbe421298b0e89791655b153cfb3287a5c522) — 面向 DSH Web 的浅色与深色轻拟物主题。
  - **证据:** [manifest](https://github.com/Lhy723/dsh-neu-theme/blob/c6ecbe421298b0e89791655b153cfb3287a5c522/package.json) → [patch](https://github.com/Lhy723/dsh-neu-theme/blob/c6ecbe421298b0e89791655b153cfb3287a5c522/cordis.patch.yml) · **身份:** `dsh-neu-theme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `theme` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Prompt Recall** · [liguanyu/dsh_PromptRecall@6040210](https://github.com/liguanyu/dsh_PromptRecall/commit/6040210ed1895a093060395eb61337a45baba712) — 为 Web 提示词输入框提供类似 Codex 的上下键历史召回。
  - **证据:** [manifest](https://github.com/liguanyu/dsh_PromptRecall/blob/6040210ed1895a093060395eb61337a45baba712/package.json) → [patch](https://github.com/liguanyu/dsh_PromptRecall/blob/6040210ed1895a093060395eb61337a45baba712/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `input-history` `client-injection` `browser-storage` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **My Better DSH** · [lilwhich/my_better-dsh@b903e95](https://github.com/lilwhich/my_better-dsh/commit/b903e955d4e735eccc9d519c4345d072f53904ae) — 面向新手的一体化 Web bundle，整合文件导航、会话工具、界面包、检查点和全局设置。
  - **证据:** [manifest](https://github.com/lilwhich/my_better-dsh/blob/b903e955d4e735eccc9d519c4345d072f53904ae/package.json) → [patch](https://github.com/lilwhich/my_better-dsh/blob/b903e955d4e735eccc9d519c4345d072f53904ae/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `aggregate-bundle` `filesystem-write` `session-data` `client-injection` `configuration-edit` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Frosted Glass** · [makuralymi/dsh-webUI-Glass-Theme@9822e4a](https://github.com/makuralymi/dsh-webUI-Glass-Theme/commit/9822e4a4d6c4e700da2520c47a37d1da87692764) — 带动态明暗切换与定时功能的全局毛玻璃主题。
  - **证据:** [manifest](https://github.com/makuralymi/dsh-webUI-Glass-Theme/blob/9822e4a4d6c4e700da2520c47a37d1da87692764/package.json) → [patch](https://github.com/makuralymi/dsh-webUI-Glass-Theme/blob/9822e4a4d6c4e700da2520c47a37d1da87692764/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `theme` `client-injection` `timer` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH CoT Summarization** · [MeowLynxSea/dsh-cot-summerization@dd69071](https://github.com/MeowLynxSea/dsh-cot-summerization/commit/dd69071e134a797a574ded3d576a36fa4ce31272) — 隐藏原始推理，并通过可配置的 Chat Completions 接口展示摘要。
  - **证据:** [manifest](https://github.com/MeowLynxSea/dsh-cot-summerization/blob/dd69071e134a797a574ded3d576a36fa4ce31272/package.json) → [patch](https://github.com/MeowLynxSea/dsh-cot-summerization/blob/dd69071e134a797a574ded3d576a36fa4ce31272/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `reasoning-data` `external-network` `credentials` `model-request` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Sticky Note** · [Meredith2328/dsh-sticky-note@ebabb6c](https://github.com/Meredith2328/dsh-sticky-note/commit/ebabb6c746b1495c5f077e440d98b6665d7a61b9) — 把笔记与 TODO 保存到归档目录的 Web 便签面板。
  - **证据:** [manifest](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/package.json) → [patch](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/cordis.patch.yml) · **身份:** `dsh-sticky-note`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem-write` `persistent-data` `client-injection` · **核验备注:** 已确认 host 与 Web client 双端结构；未运行测试通配 DSH peer 与持久化便签写入。

- **DSH Visualize** · [Nagi-ovo/dsh-visualize@e3254f7](https://github.com/Nagi-ovo/dsh-visualize/commit/e3254f762cbe4dbf796eca05d73a293f0e8e4a87) — 在对话中生成可流式预览的交互式 HTML 卡片，并使用沙箱渲染。
  - **证据:** [manifest](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/package.json) → [patch](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `github-only` `dynamic-content` `sandbox` · **核验备注:** 包标记为 private；目前只观察到 GitHub 源安装证据。

- **DSH Pet Whale** · [nzl153/dsh-pet-whale@952551a](https://github.com/nzl153/dsh-pet-whale/commit/952551ac1268617eb8ceffdf4e16751bfd645eb3) — 动画随 Agent 状态变化的 Web 桌面小鲸鱼。
  - **证据:** [manifest](https://github.com/nzl153/dsh-pet-whale/blob/952551ac1268617eb8ceffdf4e16751bfd645eb3/package.json) → [patch](https://github.com/nzl153/dsh-pet-whale/blob/952551ac1268617eb8ceffdf4e16751bfd645eb3/cordis.patch.yml) · **身份:** `pet-whale`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-pet` `agent-events` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Annotation** · [omdsh-dev/dsh-annotation@0b0ceb6](https://github.com/omdsh-dev/dsh-annotation/commit/0b0ceb6415c5c1204b9f73716e905b392acd729b) — 为选中的助手文本添加编号批注，并把批注带入下一条消息。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-annotation/blob/0b0ceb6415c5c1204b9f73716e905b392acd729b/package.json) → [patch](https://github.com/omdsh-dev/dsh-annotation/blob/0b0ceb6415c5c1204b9f73716e905b392acd729b/cordis.patch.yml) · **身份:** `@omdsh-dev/dsh-annotation`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `client-injection` `conversation-data` · **核验备注:** 已在固定源码确认 Web 客户端注入与原生 bundle 行；没有 DSH 包 peer 范围可用于确认运行兼容性。

- **DSH Better Sidebar** · [omdsh-dev/DSH-better-sidebar@5d2d6e5](https://github.com/omdsh-dev/DSH-better-sidebar/commit/5d2d6e580143dc6ad95c015feb2909ec60afdf77) — 集文件编辑、终端、Git、媒体预览和可扩展标签页于一体的侧边工作台。
  - **证据:** [manifest](https://github.com/omdsh-dev/DSH-better-sidebar/blob/5d2d6e580143dc6ad95c015feb2909ec60afdf77/package.json) → [patch](https://github.com/omdsh-dev/DSH-better-sidebar/blob/5d2d6e580143dc6ad95c015feb2909ec60afdf77/cordis.patch.yml) · **身份:** `dsh-better-sidebar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `terminal` `filesystem-write` `git` `native-build` `remote-installer` · **核验备注:** 虽提供直接包安装，远程安装脚本与原生构建仍需重点审查。

- **DSH GenUI** · [omdsh-dev/dsh-genui@0e756ef](https://github.com/omdsh-dev/dsh-genui/commit/0e756efb7671e6b8413dde3d8e199c68fa89cbeb) — 在回复中渲染布局、图表、表单、测验、Mermaid、3D 场景和交互事件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-genui/blob/0e756efb7671e6b8413dde3d8e199c68fa89cbeb/package.json) → [patch](https://github.com/omdsh-dev/dsh-genui/blob/0e756efb7671e6b8413dde3d8e199c68fa89cbeb/cordis.patch.yml) · **身份:** `dsh-genui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `git-source` `dynamic-content` `client-injection` `web-routes` · **核验备注:** Git 源安装与动态客户端渲染是明确的重点审查面。

- **DSH Task Control** · [p2coder/dsh-task-control@a20e79b](https://github.com/p2coder/dsh-task-control/commit/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339) — 在输入区暂停、恢复或取消当前会话任务的控制组件。
  - **证据:** [manifest](https://github.com/p2coder/dsh-task-control/blob/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339/package.json) → [patch](https://github.com/p2coder/dsh-task-control/blob/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `task-control` `session-data` `client-injection` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH BigFish** · [QCYTSN/dsh-dafeiyu@fba38c1](https://github.com/QCYTSN/dsh-dafeiyu/commit/fba38c18da2d275333691986763b4914e533b6b3) — 由 DSH 会话事件驱动的桌面原生大飞鱼伴侣。
  - **证据:** [manifest](https://github.com/QCYTSN/dsh-dafeiyu/blob/fba38c18da2d275333691986763b4914e533b6b3/package.json) → [patch](https://github.com/QCYTSN/dsh-dafeiyu/blob/fba38c18da2d275333691986763b4914e533b6b3/cordis.patch.yml) · **身份:** `dsh-dafeiyu`
  - **许可证:** repo `MIT` / package `SEE LICENSE IN ASSET_LICENSE.md` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-app` `session-data` `audio` `subprocess` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **MyPet** · [qiqikuaidianpao/mypet@f9de0bf](https://github.com/qiqikuaidianpao/mypet/commit/f9de0bfa15b3a461187d637ddc3e1f6037b84b58) — 会响应编程会话、升级并收集皮肤的浏览器电子宠物。
  - **证据:** [manifest](https://github.com/qiqikuaidianpao/mypet/blob/f9de0bfa15b3a461187d637ddc3e1f6037b84b58/package.json) → [patch](https://github.com/qiqikuaidianpao/mypet/blob/f9de0bfa15b3a461187d637ddc3e1f6037b84b58/cordis.patch.yml) · **身份:** `mypet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `desktop-pet` `session-data` `browser-storage` `client-injection` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Rhine Lab Theme** · [ReLuckyLucy/dsh_Rhine_Lab_themo@54c2f26](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_themo/commit/54c2f2611f6bc6e36a784cc33908ad29bccef2b7) — 可逆的明日方舟莱茵生命档案终端风格 DSH Web 主题。
  - **证据:** [manifest](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_themo/blob/54c2f2611f6bc6e36a784cc33908ad29bccef2b7/package.json) → [patch](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_themo/blob/54c2f2611f6bc6e36a784cc33908ad29bccef2b7/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `theme` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Codex Pet** · [skr311/dsh-codex-pet@6aa7b86](https://github.com/skr311/dsh-codex-pet/commit/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d) — 导入精灵图宠物并将其渲染为与 Agent 状态联动的 Web 悬浮层。
  - **证据:** [manifest](https://github.com/skr311/dsh-codex-pet/blob/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d/packages/dsh-codex-pet/package.json) → [patch](https://github.com/skr311/dsh-codex-pet/blob/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d/packages/dsh-codex-pet/cordis.patch.yml) · **身份:** `dsh-codex-pet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-pet` `image-assets` `agent-events` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Worktime Board** · [spacexun2/dsh-worktime-board@8fe6243](https://github.com/spacexun2/dsh-worktime-board/commit/8fe62434514e7d4aff3668da08f10c1280111ae7) — 带修仙境界体系的日、周、月与学年工时统计看板。
  - **证据:** [manifest](https://github.com/spacexun2/dsh-worktime-board/blob/8fe62434514e7d4aff3668da08f10c1280111ae7/package.json) → [patch](https://github.com/spacexun2/dsh-worktime-board/blob/8fe62434514e7d4aff3668da08f10c1280111ae7/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `time-tracking` `gamification` `client-injection` `browser-storage` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Message Index** · [stnt04/dsh-msg-index@8b9834b](https://github.com/stnt04/dsh-msg-index/commit/8b9834bd97067531b3a030fa3461a371945a450f) — 为当前会话建立用户消息索引并点击跳转的磨砂悬浮控件。
  - **证据:** [manifest](https://github.com/stnt04/dsh-msg-index/blob/8b9834bd97067531b3a030fa3461a371945a450f/package.json) → [patch](https://github.com/stnt04/dsh-msg-index/blob/8b9834bd97067531b3a030fa3461a371945a450f/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `message-navigation` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Picture in Picture** · [syncended/deepseek-harness-picture-in-picture@591e7d1](https://github.com/syncended/deepseek-harness-picture-in-picture/commit/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20) — 面向 DSH Web 的画中画迷你聊天界面。
  - **证据:** [manifest](https://github.com/syncended/deepseek-harness-picture-in-picture/blob/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20/package.json) → [patch](https://github.com/syncended/deepseek-harness-picture-in-picture/blob/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20/cordis.patch.yml) · **身份:** `@syncended/dsh-pip`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `picture-in-picture` `session-data` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH macOS Desktop** · [Taylor-Cat/dsh-macos-desktop@c56f308](https://github.com/Taylor-Cat/dsh-macos-desktop/commit/c56f308014b8bda509c36bd80e8475b0bd1026d0) — 以复古 System 7 与 Mac OS 9 桌面整合聊天、文件、终端、浏览器、文档和知识视图。
  - **证据:** [manifest](https://github.com/Taylor-Cat/dsh-macos-desktop/blob/c56f308014b8bda509c36bd80e8475b0bd1026d0/package.json) → [patch](https://github.com/Taylor-Cat/dsh-macos-desktop/blob/c56f308014b8bda509c36bd80e8475b0bd1026d0/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-shell` `terminal` `filesystem-read` `client-injection` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Conversation Nav** · [UlaBe/dsh-conversation-nav@df424f6](https://github.com/UlaBe/dsh-conversation-nav/commit/df424f663deb86fd8e8868c65aa650b1283f2e14) — 在右侧抽屉列出用户消息并跳转到对话位置。
  - **证据:** [manifest](https://github.com/UlaBe/dsh-conversation-nav/blob/df424f663deb86fd8e8868c65aa650b1283f2e14/package.json) → [patch](https://github.com/UlaBe/dsh-conversation-nav/blob/df424f663deb86fd8e8868c65aa650b1283f2e14/cordis.patch.yml) · **身份:** `@ulabe/dsh-conversation-nav`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `message-navigation` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Archived Chats** · [Ultronen/dsh-archived-chats@8a6912e](https://github.com/Ultronen/dsh-archived-chats/commit/8a6912e1f39f992e2d8bdf955b456b01e8927948) — 按工作区浏览、搜索、恢复和删除已归档会话的设置页。
  - **证据:** [manifest](https://github.com/Ultronen/dsh-archived-chats/blob/8a6912e1f39f992e2d8bdf955b456b01e8927948/package.json) → [patch](https://github.com/Ultronen/dsh-archived-chats/blob/8a6912e1f39f992e2d8bdf955b456b01e8927948/cordis.patch.yml) · **身份:** `dsh-archived-chats`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `archive-registry` `filesystem-delete` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Unarchive** · [uwu9039/dsh-unarchive@5f10e58](https://github.com/uwu9039/dsh-unarchive/commit/5f10e58188d808a12414ff134216f87fdb2d2ca9) — 带预览、恢复与可选归档确认的会话回收站。
  - **证据:** [manifest](https://github.com/uwu9039/dsh-unarchive/blob/5f10e58188d808a12414ff134216f87fdb2d2ca9/package.json) → [patch](https://github.com/uwu9039/dsh-unarchive/blob/5f10e58188d808a12414ff134216f87fdb2d2ca9/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `archive-registry` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Chatflow Rail** · [veritas501/dsh-chatflow-rail@485a978](https://github.com/veritas501/dsh-chatflow-rail/commit/485a978e34d9847005036acba80347d4fc249d13) — 带位置导航与顶部上一消息卡片的左侧对话流程轨道。
  - **证据:** [manifest](https://github.com/veritas501/dsh-chatflow-rail/blob/485a978e34d9847005036acba80347d4fc249d13/package.json) → [patch](https://github.com/veritas501/dsh-chatflow-rail/blob/485a978e34d9847005036acba80347d4fc249d13/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `session-data` `message-navigation` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Compact Activity** · [wallpap/dsh-compact-activity@6ef1278](https://github.com/wallpap/dsh-compact-activity/commit/6ef1278f453f8428866402f5658d7a62565dbb0a) — 以类似 Codex 的单行形式折叠展示推理与工具活动。
  - **证据:** [manifest](https://github.com/wallpap/dsh-compact-activity/blob/6ef1278f453f8428866402f5658d7a62565dbb0a/package.json) → [patch](https://github.com/wallpap/dsh-compact-activity/blob/6ef1278f453f8428866402f5658d7a62565dbb0a/cordis.patch.yml) · **身份:** `dsh-compact-activity`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `reasoning-data` `tool-activity` `client-injection` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Achievements** · [WJNCT55555/dsh-achievements@ce6ceb3](https://github.com/WJNCT55555/dsh-achievements/commit/ce6ceb3f3231648565cadcd598edbe50e41eda26) — 带画廊、Toast、奖杯、Dock 联动、跨插件成就和可选匿名统计的 Web 成就系统。
  - **证据:** [manifest](https://github.com/WJNCT55555/dsh-achievements/blob/ce6ceb3f3231648565cadcd598edbe50e41eda26/package.json) → [patch](https://github.com/WJNCT55555/dsh-achievements/blob/ce6ceb3f3231648565cadcd598edbe50e41eda26/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `gamification` `client-injection` `browser-storage` `optional-telemetry` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Session Timeline** · [XiLuovo/dsh-session-timeline@55f3268](https://github.com/XiLuovo/dsh-session-timeline/commit/55f32688719aaf918de7e4bfe5099d9282309acb) — 带滚动定位、消息跳转与预览提示的可折叠对话时间轴。
  - **证据:** [manifest](https://github.com/XiLuovo/dsh-session-timeline/blob/55f32688719aaf918de7e4bfe5099d9282309acb/package.json) → [patch](https://github.com/XiLuovo/dsh-session-timeline/blob/55f32688719aaf918de7e4bfe5099d9282309acb/cordis.patch.yml) · **身份:** `dsh-session-timeline`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `message-navigation` `scroll-spy` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Context Panel** · [zhangxiang1993621/dsh-context-panel@aa2c80c](https://github.com/zhangxiang1993621/dsh-context-panel/commit/aa2c80c02a02af9ace46e22adb504ace45bdca8b) — 在布局面板中展示当前会话使用的技能、规则与文件。
  - **证据:** [manifest](https://github.com/zhangxiang1993621/dsh-context-panel/blob/aa2c80c02a02af9ace46e22adb504ace45bdca8b/package.json) → [patch](https://github.com/zhangxiang1993621/dsh-context-panel/blob/aa2c80c02a02af9ace46e22adb504ace45bdca8b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `filesystem-read` `client-injection` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Web UI All** · [zhu1090093659/dsh-web-ui@5153e9a](https://github.com/zhu1090093659/dsh-web-ui/commit/5153e9ad487bb597f45095503b9aa50f4faa4add) — 聚合任务看板、Git、终端、远程 UI、统计、桌宠与皮肤的 Web UI bundle。
  - **证据:** [manifest](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/cordis.patch.yml) · **身份:** `@linxin666/dsh-web-ui-all`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `aggregate-scope` `terminal` `ssh` `git` `native-build` · **核验备注:** 聚合范围很广且包含 prepare 构建，使用前需要更高强度的审查。

#### 开发者工具

- **DSH Request Flight Recorder** · [abinzhao/dsh-request-flight-recorder@319e3bf](https://github.com/abinzhao/dsh-request-flight-recorder/commit/319e3bf0981b5cb03352c7c97cd94c75f37cefb0) — 记录有界且不含内容的请求耗时、流式阶段、失败和会话关联诊断信息。
  - **证据:** [manifest](https://github.com/abinzhao/dsh-request-flight-recorder/blob/319e3bf0981b5cb03352c7c97cd94c75f37cefb0/package.json) → [patch](https://github.com/abinzhao/dsh-request-flight-recorder/blob/319e3bf0981b5cb03352c7c97cd94c75f37cefb0/cordis.patch.yml) · **身份:** `dsh-request-flight-recorder`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `request-metadata` `session-data` `stream-diagnostics` `client-injection` · **核验备注:** 已在固定源码确认精确 rc.6 DSH peer 与原生 bundle；未运行测试隐私属性、计时 hook 或 prepack 构建。

- **DSH Python Tempfile Shim** · [AngelosZou/dsh-python-tempfile-shim@20b84cd](https://github.com/AngelosZou/dsh-python-tempfile-shim/commit/20b84cdc91516fbf51a782214ba8d88a3f083d34) — 面向 Windows 沙箱的临时兼容 shim，把本地 sitecustomize 路径注入受限 Python 命令进程树。
  - **证据:** [manifest](https://github.com/AngelosZou/dsh-python-tempfile-shim/blob/20b84cdc91516fbf51a782214ba8d88a3f083d34/package.json) → [patch](https://github.com/AngelosZou/dsh-python-tempfile-shim/blob/20b84cdc91516fbf51a782214ba8d88a3f083d34/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `windows-only` `environment-injection` `shell-runtime` `python-environment` `github-only` · **核验备注:** 作者记录了本地 clone 安装，并建议上游修复后移除；未修改 shell 解析器、环境或 Python 进程。

- **DSH Eval Harness** · [BiBoyang/dsh-eval-harness@035d1c6](https://github.com/BiBoyang/dsh-eval-harness/commit/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693) — 用于衡量 Agent 行为与任务结果的无头评估 Harness。
  - **证据:** [manifest](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/package.json) → [patch](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/cordis.patch.yml) · **身份:** `dsh-eval-harness`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `headless` `evaluation` · **核验备注:** README 中存在 owner 拼写缺陷，且仅声明宽泛的 Cordis peer。

- **DSH Change Center** · [Chance-Wu/dsh-change-center@fbe60fc](https://github.com/Chance-Wu/dsh-change-center/commit/fbe60fc21757ff36249c5609d6fe615db5c9b544) — 捕获工具引发的文件变更，用于差异审查、验证、回滚以及可选的 Git 暂存或发布。
  - **证据:** [manifest](https://github.com/Chance-Wu/dsh-change-center/blob/fbe60fc21757ff36249c5609d6fe615db5c9b544/package.json) → [patch](https://github.com/Chance-Wu/dsh-change-center/blob/fbe60fc21757ff36249c5609d6fe615db5c9b544/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem-write` `git-write` `session-data` `tool-results` `llm-review` `high-trust-surface` · **核验备注:** 固定源码可持久化文件变更证据、应用或回滚编辑，并调用 Git add、commit 与 push；未执行文件系统、Git 或模型操作。

- **DSH Reviewer Bot** · [chaojixinren/dsh-reviewer-bot@77228ae](https://github.com/chaojixinren/dsh-reviewer-bot/commit/77228ae61cda1c621b84edbeb330d5e223047434) — 跨 GitHub 与 GitLab 自动化仓库审查流程，并提供可配置的信任、诊断和写入控制。
  - **证据:** [manifest](https://github.com/chaojixinren/dsh-reviewer-bot/blob/77228ae61cda1c621b84edbeb330d5e223047434/bundle/package.json) → [patch](https://github.com/chaojixinren/dsh-reviewer-bot/blob/77228ae61cda1c621b84edbeb330d5e223047434/bundle/cordis.patch.yml) · **身份:** `@dshrb/bundle`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `external-network` `repository-write` `subprocess` `ci-data` `review-automation` · **核验备注:** 该 bundle 声明精确兼容 DSH rc.6，并支持代码托管凭据与可选仓库写入；未执行其自动化、子进程或远程调用。

- **DSH EasySSH Workspace** · [chenw2759-wq/dsh-IDE@607ff87](https://github.com/chenw2759-wq/dsh-IDE/commit/607ff875e8220c0c4069b37bfe60d76288bdea03) — 把文件与子进程操作路由到远程主机，并提供远程浏览与 Agent 工具的 SSH 工作区模式。
  - **证据:** [manifest](https://github.com/chenw2759-wq/dsh-IDE/blob/607ff875e8220c0c4069b37bfe60d76288bdea03/packages/dsh-easyssh/package.json) → [patch](https://github.com/chenw2759-wq/dsh-IDE/blob/607ff875e8220c0c4069b37bfe60d76288bdea03/packages/dsh-easyssh/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `ssh` `credentials` `remote-execution` `filesystem-write` `prepare-build` · **核验备注:** 文档记录了源码 link 安装与精确 rc.6 peer；远程模式不受本地内核沙箱约束，未执行凭据、SSH、SFTP 或进程操作。

- **DSH Git Ops** · [codehz/dsh-git-ops@bab93cf](https://github.com/codehz/dsh-git-ops/commit/bab93cf93dfb38d050e8fa6f0c3081551ff491be) — 增加 Git 建议、本地分支切换、状态与差异视图以及 Agent 意图快捷操作。
  - **证据:** [manifest](https://github.com/codehz/dsh-git-ops/blob/bab93cf93dfb38d050e8fa6f0c3081551ff491be/package.json) → [patch](https://github.com/codehz/dsh-git-ops/blob/bab93cf93dfb38d050e8fa6f0c3081551ff491be/cordis.patch.yml) · **身份:** `dsh-git-ops`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `git-read` `git-write` `branch-switch` `subprocess` `client-injection` `agent-intent` · **核验备注:** 固定源码通过 DSH 子进程接口调用 Git，并可暂存变更或切换分支；未执行命令或 UI 操作。

- **Arch Doc** · [duyanta123/arch-doc@76fcfaf](https://github.com/duyanta123/arch-doc/commit/76fcfafada67c6eaa25c86769271eae19dcc4132) — 分析代码库并生成模块职责、依赖关系、入口点与运行方式架构文档的文件系统技能。
  - **证据:** [manifest](https://github.com/duyanta123/arch-doc/blob/76fcfafada67c6eaa25c86769271eae19dcc4132/package.json) → [patch](https://github.com/duyanta123/arch-doc/blob/76fcfafada67c6eaa25c86769271eae19dcc4132/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `filesystem-write` `code-analysis` `documentation-generation` `github-only` · **核验备注:** 文档记录了固定 GitHub 安装；通配 skill-filesystem peer 无法证明兼容性，未读取代码库或生成文档。

- **DSH Workbench** · [ghbhiee/dsh-plugins@2017411](https://github.com/ghbhiee/dsh-plugins/commit/2017411fca73e4294335eb25ea1ddaf6a5cb986b) — 集成终端、文件浏览器与文件预览的 Web 工作台。
  - **证据:** [manifest](https://github.com/ghbhiee/dsh-plugins/blob/2017411fca73e4294335eb25ea1ddaf6a5cb986b/packages/workbench/package.json) → [patch](https://github.com/ghbhiee/dsh-plugins/blob/2017411fca73e4294335eb25ea1ddaf6a5cb986b/packages/workbench/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `terminal` `subprocess` `filesystem-read` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Console** · [Isanti2016/dsh-console@8d31014](https://github.com/Isanti2016/dsh-console/commit/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4) — 用于 Web 服务、SSH 隧道、单次问答和 TUI 启动的控制台命令。
  - **证据:** [manifest](https://github.com/Isanti2016/dsh-console/blob/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4/package.json) → [patch](https://github.com/Isanti2016/dsh-console/blob/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4/cordis.patch.yml) · **身份:** `dsh-console`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `command-line` `ssh` `subprocess` `service-management` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Ops Kit** · [LeslieWylie/dsh-ops-kit@c4ba835](https://github.com/LeslieWylie/dsh-ops-kit/commit/c4ba8353cb5825c4ca971836a260ec8f9af7be83) — 为 DeepSeek Harness 内的开发流程提供运维工具与技能。
  - **证据:** [manifest](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/package.json) → [patch](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/cordis.patch.yml) · **身份:** `dsh-ops-kit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `tools` `skills` · **核验备注:** DSH skill 与 tools peer 声明 rc.6；未做运行兼容性测试。

- **DSH Proxy Config** · [lhf6623/dsh-proxy-config@e3d5934](https://github.com/lhf6623/dsh-proxy-config/commit/e3d5934d62884170af6fe36fdac8cb1ebb1cd5e3) — 把 HTTP 或 SOCKS 代理持久化到宿主进程环境的设置面板。
  - **证据:** [manifest](https://github.com/lhf6623/dsh-proxy-config/blob/e3d5934d62884170af6fe36fdac8cb1ebb1cd5e3/package.json) → [patch](https://github.com/lhf6623/dsh-proxy-config/blob/e3d5934d62884170af6fe36fdac8cb1ebb1cd5e3/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `proxy` `process-environment` `configuration-write` `credentials` `subprocess` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH SCNet** · [lql341/dsh-scnet@24070df](https://github.com/lql341/dsh-scnet/commit/24070dfb9aa00c9707683b0bf68000198c8b32dc) — 面向 SCNet 等国产 HPC 集群的 SSH、Slurm 与节点探测工具。
  - **证据:** [manifest](https://github.com/lql341/dsh-scnet/blob/24070dfb9aa00c9707683b0bf68000198c8b32dc/package.json) → [patch](https://github.com/lql341/dsh-scnet/blob/24070dfb9aa00c9707683b0bf68000198c8b32dc/cordis.patch.yml) · **身份:** `dsh-scnet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `ssh` `hpc` `remote-execution` `filesystem-write` `subprocess` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Bash Terminal** · [MAXeaglet/dsh-bash-terminal@6894913](https://github.com/MAXeaglet/dsh-bash-terminal/commit/6894913d71098f2ea24120d3a1afd5771f9ccd4a) — 在 Windows 上按配置把命令路由到 PowerShell、Git Bash 或 WSL 的 Shell 工具。
  - **证据:** [manifest](https://github.com/MAXeaglet/dsh-bash-terminal/blob/6894913d71098f2ea24120d3a1afd5771f9ccd4a/package.json) → [patch](https://github.com/MAXeaglet/dsh-bash-terminal/blob/6894913d71098f2ea24120d3a1afd5771f9ccd4a/cordis.patch.yml) · **身份:** `dsh-bash-terminal`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `subprocess` `shell` `windows` `configuration-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Large Project Performance** · [orangeofcarl0-sys/dsh-large-proj-perf@cb957b4](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/commit/cb957b4c3dfdf39c762f8912c3463c34a652287e) — 针对大会话的 fork 初始化、投影预热、缓存回填、物化、LRU 裁剪与堆检测优化。
  - **证据:** [manifest](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/blob/cb957b4c3dfdf39c762f8912c3463c34a652287e/package.json) → [patch](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/blob/cb957b4c3dfdf39c762f8912c3463c34a652287e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `performance-patch` `session-data` `cache` `memory-management` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH UE Assets Operator** · [QSWWLTN/dsh-UEAssetsOperator@2dbb683](https://github.com/QSWWLTN/dsh-UEAssetsOperator/commit/2dbb6833c9b7e556131dbbe05b070a7e0f535576) — 通过 UE 内置 Python 检查 Unreal uasset 并编辑 Blueprint 节点的原生工具。
  - **证据:** [manifest](https://github.com/QSWWLTN/dsh-UEAssetsOperator/blob/2dbb6833c9b7e556131dbbe05b070a7e0f535576/package.json) → [patch](https://github.com/QSWWLTN/dsh-UEAssetsOperator/blob/2dbb6833c9b7e556131dbbe05b070a7e0f535576/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `unreal-engine` `asset-inspection` `filesystem-write` `subprocess` `python` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH NeoForge** · [r05En1cU/dsh-neoforge@7bbee40](https://github.com/r05En1cU/dsh-neoforge/commit/7bbee4096ecf563aab5cfff29c4b65f5d36790aa) — 带运行时 mixin、快照恢复与 Cordis 原生事件总线的插件 API 层。
  - **证据:** [manifest](https://github.com/r05En1cU/dsh-neoforge/blob/7bbee4096ecf563aab5cfff29c4b65f5d36790aa/package.json) → [patch](https://github.com/r05En1cU/dsh-neoforge/blob/7bbee4096ecf563aab5cfff29c4b65f5d36790aa/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `plugin-api` `runtime-mixin` `snapshot` `event-bus` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Structured Output** · [royenheart/dsh-plugin-structured-output@1116e33](https://github.com/royenheart/dsh-plugin-structured-output/commit/1116e33d7dc06267e54acc2b310f79399b22ea18) — 提供 JSON Schema 结构化输出工具、命令与原生结果校验。
  - **证据:** [manifest](https://github.com/royenheart/dsh-plugin-structured-output/blob/1116e33d7dc06267e54acc2b310f79399b22ea18/package.json) → [patch](https://github.com/royenheart/dsh-plugin-structured-output/blob/1116e33d7dc06267e54acc2b310f79399b22ea18/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `structured-output` `json-schema` `model-tools` `validation` `local-installer` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Restart Systemd** · [RoyougiShiki/dsh-restart-systemd@90ab7ea](https://github.com/RoyougiShiki/dsh-restart-systemd/commit/90ab7ea416e50a49861130d9e329b3af9a349746) — 通过 Web 与命令安全重启用户 systemd 服务并恢复会话。
  - **证据:** [manifest](https://github.com/RoyougiShiki/dsh-restart-systemd/blob/90ab7ea416e50a49861130d9e329b3af9a349746/package.json) → [patch](https://github.com/RoyougiShiki/dsh-restart-systemd/blob/90ab7ea416e50a49861130d9e329b3af9a349746/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `service-restart` `systemd` `subprocess` `session-data` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Lean** · [sjh9714/dsh-lean@df646af](https://github.com/sjh9714/dsh-lean/commit/df646af7ab39c12cf0024874f5ebe466f683153c) — 审计提示词前缀的 Token 消耗并提出缩减建议以降低模型成本。
  - **证据:** [manifest](https://github.com/sjh9714/dsh-lean/blob/df646af7ab39c12cf0024874f5ebe466f683153c/package.json) → [patch](https://github.com/sjh9714/dsh-lean/blob/df646af7ab39c12cf0024874f5ebe466f683153c/cordis.patch.yml) · **身份:** `dsh-lean`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `token-audit` `cost-optimization` `prompt-analysis` `filesystem-read` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Minimal PowerShell** · [skydog221/dsh-minimal-powershell@aa53185](https://github.com/skydog221/dsh-minimal-powershell/commit/aa53185e4d69d97dcb3107dd15ea1dafd992c673) — 让 Windows 上的最小模式 Shell 调用通过 PowerShell 正常工作。
  - **证据:** [manifest](https://github.com/skydog221/dsh-minimal-powershell/blob/aa53185e4d69d97dcb3107dd15ea1dafd992c673/package.json) → [patch](https://github.com/skydog221/dsh-minimal-powershell/blob/aa53185e4d69d97dcb3107dd15ea1dafd992c673/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `powershell` `shell` `sandbox-policy` `windows` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Vimina** · [Sunse666/dsh-vimina@85b04c9](https://github.com/Sunse666/dsh-vimina/commit/85b04c969d6af8a6a1c3f70a4a9387b477a0042b) — 通过原生工具暴露 Windows GUI 扫描、输入、截图、窗口、鼠标与 VMA 脚本。
  - **证据:** [manifest](https://github.com/Sunse666/dsh-vimina/blob/85b04c969d6af8a6a1c3f70a4a9387b477a0042b/package.json) → [patch](https://github.com/Sunse666/dsh-vimina/blob/85b04c969d6af8a6a1c3f70a4a9387b477a0042b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `gui-automation` `windows` `subprocess` `screenshot` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Git** · [taontech/dsh-git@bbe81b5](https://github.com/taontech/dsh-git/commit/bbe81b59264f8daf4f7b5abd53960bde7420a8b4) — 用于查看仓库状态、历史、分支并执行初始化和 Git 操作的标签页。
  - **证据:** [manifest](https://github.com/taontech/dsh-git/blob/bbe81b59264f8daf4f7b5abd53960bde7420a8b4/package.json) → [patch](https://github.com/taontech/dsh-git/blob/bbe81b59264f8daf4f7b5abd53960bde7420a8b4/cordis.patch.yml) · **身份:** `@taontech/dsh-git`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `git` `filesystem-write` `subprocess` `client-injection` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Archify** · [tt-a1i/archify@cffdd42](https://github.com/tt-a1i/archify/commit/cffdd42eed0ebf013aa070378d94facdd3d56b10) — 通过仓库内的嵌套集成 bundle，为 DSH 提供架构知识与图表能力。
  - **证据:** [manifest](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/package.json) → [patch](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/cordis.patch.yml) · **身份:** `@tt-a1i/archify-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `nested-bundle` `filesystem-skill` `dynamic-yaml` · **核验备注:** 已确认嵌套包中的原生结构；未做运行兼容性测试。

- **DSH Git Graph** · [WhitePlusMS/dsh-git-graph@4e4621a](https://github.com/WhitePlusMS/dsh-git-graph/commit/4e4621aa02cd8f88e2c7dabc421d2399d10299a4) — 只读 Git 图谱视图，展示 refs、工作树状态、搜索、筛选与分页历史。
  - **证据:** [manifest](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/package.json) → [patch](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/cordis.patch.yml) · **身份:** `dsh-git-graph`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `git` `workspace-read` · **核验备注:** 声明了精确的 DSH rc.6 peer；未做运行兼容性测试。

- **DSH Git Worktree** · [wloops/dsh-git-worktree@17945c5](https://github.com/wloops/dsh-git-worktree/commit/17945c59ea7a574e27acb6d41591222722a7f1b1) — 基于 Git worktree 的实验性会话目标，包含隔离会话、审核视图、确认交付与清理。
  - **证据:** [manifest](https://github.com/wloops/dsh-git-worktree/blob/17945c59ea7a574e27acb6d41591222722a7f1b1/package.json) → [patch](https://github.com/wloops/dsh-git-worktree/blob/17945c59ea7a574e27acb6d41591222722a7f1b1/cordis.patch.yml) · **身份:** `dsh-git-worktree`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `git-worktree` `session-data` `approval-gate` `filesystem-delete` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Launcher** · [XQ-rxslcq/dsh-launcher@046acfb](https://github.com/XQ-rxslcq/dsh-launcher/commit/046acfb4619bf49bb6854ab2a476c10bb127e067) — 可配置隐藏命令行启动方式与动画桌面伴侣窗口的启动器。
  - **证据:** [manifest](https://github.com/XQ-rxslcq/dsh-launcher/blob/046acfb4619bf49bb6854ab2a476c10bb127e067/package.json) → [patch](https://github.com/XQ-rxslcq/dsh-launcher/blob/046acfb4619bf49bb6854ab2a476c10bb127e067/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `application-launcher` `subprocess` `configuration-write` `desktop-app` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Remote SSH** · [Yan-Zero/dsh-remote-ssh@21d727c](https://github.com/Yan-Zero/dsh-remote-ssh/commit/21d727cbe24fbae283196e5101adb3de2bdd9157) — 覆盖文件、子进程、设置与 Web UI 的透明本地和远程 SSH 工作区。
  - **证据:** [manifest](https://github.com/Yan-Zero/dsh-remote-ssh/blob/21d727cbe24fbae283196e5101adb3de2bdd9157/package.json) → [patch](https://github.com/Yan-Zero/dsh-remote-ssh/blob/21d727cbe24fbae283196e5101adb3de2bdd9157/cordis.patch.yml) · **身份:** `dsh-remote-ssh`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `ssh` `remote-execution` `filesystem-write` `credentials` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Git Bash Tool** · [zeroa234/dsh-preset-minimal-windows@5e33b0f](https://github.com/zeroa234/dsh-preset-minimal-windows/commit/5e33b0f22c2696a5a66c993dc3a5007397658c81) — 通过宿主子进程接口调用 Windows Git Bash，并支持输出落盘与超时。
  - **证据:** [manifest](https://github.com/zeroa234/dsh-preset-minimal-windows/blob/5e33b0f22c2696a5a66c993dc3a5007397658c81/gitbash-tool/package.json) → [patch](https://github.com/zeroa234/dsh-preset-minimal-windows/blob/5e33b0f22c2696a5a66c993dc3a5007397658c81/gitbash-tool/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `git-bash` `subprocess` `windows` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### Agent 与工作流

- **DSH Forge** · [alex04130/dsh-forge@fae36ff](https://github.com/alex04130/dsh-forge/commit/fae36ff9577ece3d60bd629bb06142fd681e3745) — 一个广泛的扩展 bundle，覆盖跨会话邮件、Agent 团队、模型路由、运行时注入、技能与插件管理。
  - **证据:** [manifest](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/package.json) → [patch](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/cordis.npm.yml) · **身份:** `@dsh-forge/bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `dynamic-loading` `package-management` `filesystem-write` `high-trust-surface` · **核验备注:** 收录的是声明 rc.6 peer 的可分发 npm bundle，而非 private 根源码 manifest；未执行其广泛的运行时注入与管理能力。

- **DSH Computer Use** · [Anionex/dsh-computer-use@76bfe86](https://github.com/Anionex/dsh-computer-use/commit/76bfe8607f61945c1cbb84e73976e601100c13a2) — 用于屏幕感知与受控桌面操作的 Computer Use 工具。
  - **证据:** [manifest](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/package.json) → [patch](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/cordis.patch.yml) · **身份:** `@anionex/dsh-computer-use`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `computer-use` `browser` `native-artifacts` · **核验备注:** 声明了精确的 DSH rc.6 peer；广泛电脑控制仍属于高信任能力。

- **DH Multiagents** · [atesahmet0/dh-workspace@fb1f22c](https://github.com/atesahmet0/dh-workspace/commit/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e) — 带工具矩阵强制、持久化委派、可复用预设、方法技能与 worktree 操作的角色化多 Agent bundle。
  - **证据:** [manifest](https://github.com/atesahmet0/dh-workspace/blob/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e/package.json) → [patch](https://github.com/atesahmet0/dh-workspace/blob/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e/cordis.patch.yml) · **身份:** `@dh-multiagents/bundle`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `postinstall` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `filesystem-write` `git-worktree` `model-routing` `postinstall` · **核验备注:** 公开 bundle 身份可解析且文档面向 rc.6；其需批准的 postinstall 会镜像预设，未运行生命周期或 Agent 操作。

- **DSH CC Agents** · [Bcy2020/dsh-cc-ecosystem@486441b](https://github.com/Bcy2020/dsh-cc-ecosystem/commit/486441ba06baddbc29b7f82431a795541d2c0369) — 把 Claude Code Agent 定义转换为带 persona、工具过滤、技能与模型别名的 DSH 子 Agent 适配器。
  - **证据:** [manifest](https://github.com/Bcy2020/dsh-cc-ecosystem/blob/486441ba06baddbc29b7f82431a795541d2c0369/packages/cc-agents/package.json) → [patch](https://github.com/Bcy2020/dsh-cc-ecosystem/blob/486441ba06baddbc29b7f82431a795541d2c0369/packages/cc-agents/cordis.patch.yml) · **身份:** `dsh-cc-agents`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `multi-agent` `filesystem-read` `prompt-injection` `tool-filtering` `model-routing` · **核验备注:** 公开包映射到该 monorepo；通配 DSH peer 无法证明兼容性，未加载 Claude 资产或子 Agent。

- **DSH Captain Call** · [Daisy2048/dsh-captain-call@d2b7406](https://github.com/Daisy2048/dsh-captain-call/commit/d2b740660b97b1189a5cadc769955e90b0b00706) — 面向 AgentTeams 完成事件的桌面来电式通知器，支持本地语音合成、可选麦克风回复与对话归档。
  - **证据:** [manifest](https://github.com/Daisy2048/dsh-captain-call/blob/d2b740660b97b1189a5cadc769955e90b0b00706/package.json) → [patch](https://github.com/Daisy2048/dsh-captain-call/blob/d2b740660b97b1189a5cadc769955e90b0b00706/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-read` `audio` `microphone` `external-model-download` · **核验备注:** 私有包文档记录了本地源码安装；未执行音频、模型下载、麦克风或 AgentTeams 状态访问。

- **DSH AE Team** · [ddddjaak/dsh-ae-team@35a7494](https://github.com/ddddjaak/dsh-ae-team/commit/35a74945db2efd6f4425cdc5e4f611f7d05aee38) — 面向 DSH Web 的应用工程团队包，包含七个角色定义、专业技能与 Mermaid 图模板。
  - **证据:** [manifest](https://github.com/ddddjaak/dsh-ae-team/blob/35a74945db2efd6f4425cdc5e4f611f7d05aee38/package.json) → [patch](https://github.com/ddddjaak/dsh-ae-team/blob/35a74945db2efd6f4425cdc5e4f611f7d05aee38/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `multi-agent` `filesystem-skill` `prompt-injection` `dynamic-mermaid` `github-only` · **核验备注:** 文档记录了源码 link 安装；manifest 未声明 DSH peer 范围，未加载角色、技能、提示词或图模板。

- **DSH AUX** · [DoloresCaritasAngelus/DSH-AUX@8c1ef2c](https://github.com/DoloresCaritasAngelus/DSH-AUX/commit/8c1ef2c3117c8cdaf380a6feea3669d5753b3374) — 为视觉、网页提取和文本压缩路由辅助 LLM 任务，并提供回退、并发和会话状态控制。
  - **证据:** [manifest](https://github.com/DoloresCaritasAngelus/DSH-AUX/blob/8c1ef2c3117c8cdaf380a6feea3669d5753b3374/dsh-aux/package.json) → [patch](https://github.com/DoloresCaritasAngelus/DSH-AUX/blob/8c1ef2c3117c8cdaf380a6feea3669d5753b3374/dsh-aux/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `official-looking-namespace` `core-patch` `installer-script` `external-network` `credentials` `llm-routing` `session-data` · **核验备注:** 该独立 Git 源使用类似官方但未发布的包名，安装器会创建符号链接并修改 DSH 核心以桥接图片、会话和设置；未执行安装器、补丁或模型请求。

- **DSH TaskSwarm** · [february2015/dsh-taskswarm@bec7d32](https://github.com/february2015/dsh-taskswarm/commit/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38) — 带依赖波次、隔离 worktree、跨模型审核、合并处理与实时仪表盘的持久化多 Agent 任务编排。
  - **证据:** [manifest](https://github.com/february2015/dsh-taskswarm/blob/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38/package.json) → [patch](https://github.com/february2015/dsh-taskswarm/blob/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38/cordis.patch.yml) · **身份:** `dsh-taskswarm`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `multi-agent` `git-worktree` `filesystem-write` `local-web-server` `prepare-build` · **核验备注:** 公开包映射到该仓库，但通配 DSH peer 无法证明兼容性；未运行构建、Agent、Git、合并或仪表盘操作。

- **DSH Prompt Enhancer** · [Fishsb/dsh-prompt-enhancer@d42b2b4](https://github.com/Fishsb/dsh-prompt-enhancer/commit/d42b2b41503743a946696312b55001d6a452a0ef) — 通过独立 LLM 调用改写 DSH 输入框中的草稿提示词，并支持撤销。
  - **证据:** [manifest](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/package.json) → [patch](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/cordis.patch.yml) · **身份:** `dsh-prompt-enhancer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `llm-call` `client-injection` `external-network` `credentials` · **核验备注:** 客户端 peer 声明 rc.6 且存在原生 patch；未执行向配置模型披露提示词或更新器网络行为。

- **DSH Nudge** · [huangmouren2023/deepseek-harness-toolkit@ea3ed50](https://github.com/huangmouren2023/deepseek-harness-toolkit/commit/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4) — 在终端失败或任务中断后自动追问，让 Agent 解释错误或继续执行。
  - **证据:** [manifest](https://github.com/huangmouren2023/deepseek-harness-toolkit/blob/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4/tools/dsh-nudge/package.json) → [patch](https://github.com/huangmouren2023/deepseek-harness-toolkit/blob/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4/tools/dsh-nudge/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `agent-steering` `terminal-events` `prompt-injection` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Team** · [huxint/dsh-team@66835a7](https://github.com/huxint/dsh-team/commit/66835a7920eefb4c051ddf233ca582231e80dbce) — 提供持久命名成员、共享任务、邮箱、虚拟工作区和实时团队房间的 Agent 团队系统。
  - **证据:** [manifest](https://github.com/huxint/dsh-team/blob/66835a7920eefb4c051ddf233ca582231e80dbce/package.json) → [patch](https://github.com/huxint/dsh-team/blob/66835a7920eefb4c051ddf233ca582231e80dbce/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `session-data` `filesystem-write` `mailbox` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Discussion Intent** · [JinPLu/dsh-plugin-discussion-intent@f81b5d1](https://github.com/JinPLu/dsh-plugin-discussion-intent/commit/f81b5d1fc1ac56b4167c7385d8238d827040ca27) — 让复杂讨论保持证据导向并收敛到后续行动的意图校准模式。
  - **证据:** [manifest](https://github.com/JinPLu/dsh-plugin-discussion-intent/blob/f81b5d1fc1ac56b4167c7385d8238d827040ca27/package.json) → [patch](https://github.com/JinPLu/dsh-plugin-discussion-intent/blob/f81b5d1fc1ac56b4167c7385d8238d827040ca27/cordis.patch.yml) · **身份:** `@jinplu/dsh-plugin-discussion-intent`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `agent-steering` `system-prompt` `session-data` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Orcana Runtime Pack** · [Leo-Ayh-Oday/dsh-orcana@abf4b60](https://github.com/Leo-Ayh-Oday/dsh-orcana/commit/abf4b602b2f2057980640dbb8cd43f157ee4ae57) — 面向 DSH 的通用 Orcana 运行时 profile bundle。
  - **证据:** [manifest](https://github.com/Leo-Ayh-Oday/dsh-orcana/blob/abf4b602b2f2057980640dbb8cd43f157ee4ae57/packages/dsh-bundle/package.json) → [patch](https://github.com/Leo-Ayh-Oday/dsh-orcana/blob/abf4b602b2f2057980640dbb8cd43f157ee4ae57/packages/dsh-bundle/cordis.patch.yml) · **身份:** `@leooday/dsh-bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `profile-bundle` `workflow-runtime` `package-bundle` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plan Execute** · [leotangjc/plan-execute@f236fde](https://github.com/leotangjc/plan-execute/commit/f236fde11b996392efb41889de7505a27d712da0) — 依次进行决策拷问、计划编译与验收执行的三阶段工作流。
  - **证据:** [manifest](https://github.com/leotangjc/plan-execute/blob/f236fde11b996392efb41889de7505a27d712da0/package.json) → [patch](https://github.com/leotangjc/plan-execute/blob/f236fde11b996392efb41889de7505a27d712da0/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `workflow-orchestration` `model-tools` `agent-steering` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Voice** · [meomeo-dev/dsh-voice@b4b989c](https://github.com/meomeo-dev/dsh-voice/commit/b4b989c0bc8b942752086d910933e43b53cfbf54) — 支持会话、工作区和用户三级切换的对话语气与声音技能包。
  - **证据:** [manifest](https://github.com/meomeo-dev/dsh-voice/blob/b4b989c0bc8b942752086d910933e43b53cfbf54/package.json) → [patch](https://github.com/meomeo-dev/dsh-voice/blob/b4b989c0bc8b942752086d910933e43b53cfbf54/cordis.patch.yml) · **身份:** `@meomeo-dev/dsh-voice`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `system-prompt` `filesystem-skill` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Waker Trigger** · [msilita/dsh-waker-trigger@b10322d](https://github.com/msilita/dsh-waker-trigger/commit/b10322d46bd29c713830cc5fbdcb94f54de0a608) — 对定时、文件、命令、HTTP、进程和端口条件进行持久 any/all 组合，并在安全边界唤醒 Agent。
  - **证据:** [manifest](https://github.com/msilita/dsh-waker-trigger/blob/b10322d46bd29c713830cc5fbdcb94f54de0a608/package.json) → [patch](https://github.com/msilita/dsh-waker-trigger/blob/b10322d46bd29c713830cc5fbdcb94f54de0a608/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `scheduler` `filesystem-watch` `subprocess` `external-network` `agent-events` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Cron** · [omdsh-dev/dsh-cron@9c4b5fa](https://github.com/omdsh-dev/dsh-cron/commit/9c4b5fada700ea25c1c22f55e21144a69cfe2c35) — 使用五字段 Cron 规则跨会话持久调度并向 Agent 会话注入任务。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-cron/blob/9c4b5fada700ea25c1c22f55e21144a69cfe2c35/package.json) → [patch](https://github.com/omdsh-dev/dsh-cron/blob/9c4b5fada700ea25c1c22f55e21144a69cfe2c35/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `scheduler` `session-data` `agent-steering` `filesystem-write` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH LLM Fallbacks** · [omdsh-dev/dsh-llm-fallbacks@69ec1fe](https://github.com/omdsh-dev/dsh-llm-fallbacks/commit/69ec1fe19660cd465f610890e2f1366cd418f86c) — 在重试、认证、额度或限流失败后启用可配置的提供商与模型回退链。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/package.json) → [patch](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/bundle/cordis.patch.yml) · **身份:** `dsh-llm-fallbacks`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `llm-routing` `client-injection` `prepare-build` · **核验备注:** DSH peer 声明 rc.6 且已在固定源码确认回退行；prepare 会构建代码，未运行测试提供商切换。

- **HA Orchestrator** · [Saktawdi/ha-orchestrator@83b80a6](https://github.com/Saktawdi/ha-orchestrator/commit/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799) — 提供模型故障转移与子 Agent 扇出、流水线和监督者编排。
  - **证据:** [manifest](https://github.com/Saktawdi/ha-orchestrator/blob/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799/package.json) → [patch](https://github.com/Saktawdi/ha-orchestrator/blob/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `model-failover` `multi-agent` `workflow-orchestration` `external-network` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Swift Cycle** · [Solismuchengxue/dsh_plugin_swift_cycle@d44bee7](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/commit/d44bee70c109bb1d772d26ee790d6de9aadce9cc) — 面向 Swift Cycle 治理技能的 DSH 适配器。
  - **证据:** [manifest](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/blob/d44bee70c109bb1d772d26ee790d6de9aadce9cc/package.json) → [patch](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/blob/d44bee70c109bb1d772d26ee790d6de9aadce9cc/cordis.patch.yml) · **身份:** `dsh-plugin-swift-cycle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `governance` `filesystem-skill` `workflow` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Octie DSH** · [StarChen-Cycler/octie-dsh-plugin@457bc4e](https://github.com/StarChen-Cycler/octie-dsh-plugin/commit/457bc4e3fcd64597ef8e77a5e5d739105feb490b) — 带模型工具、客户端面板、预设、技能与不可变快照的持久任务图状态机。
  - **证据:** [manifest](https://github.com/StarChen-Cycler/octie-dsh-plugin/blob/457bc4e3fcd64597ef8e77a5e5d739105feb490b/octie/package.json) → [patch](https://github.com/StarChen-Cycler/octie-dsh-plugin/blob/457bc4e3fcd64597ef8e77a5e5d739105feb490b/octie/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `task-graph` `model-tools` `filesystem-write` `snapshot` `identity-collision` · **核验备注:** npm 身份映射到上游 Octie 仓库，因此本记录固定到作者文档中的 Git 插件源码，不主张该 npm 包。

- **DSH Project Kanban** · [StruggleYang/dsh-project-kanban@1337489](https://github.com/StruggleYang/dsh-project-kanban/commit/1337489eb1eb4056eac8b6a478075606a89eb449) — 按工作区隔离并持久化的项目看板，包含浏览器界面与模型工具。
  - **证据:** [manifest](https://github.com/StruggleYang/dsh-project-kanban/blob/1337489eb1eb4056eac8b6a478075606a89eb449/package.json) → [patch](https://github.com/StruggleYang/dsh-project-kanban/blob/1337489eb1eb4056eac8b6a478075606a89eb449/cordis.patch.yml) · **身份:** `dsh-project-kanban`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `kanban` `model-tools` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Yogacara** · [tancheng33/dsh-yogacara@daa16f8](https://github.com/tancheng33/dsh-yogacara/commit/daa16f81b9326e3a4ff19d7feee77e940100c738) — 包含识、心所、持久种子与我执度量的唯识自我模型。
  - **证据:** [manifest](https://github.com/tancheng33/dsh-yogacara/blob/daa16f81b9326e3a4ff19d7feee77e940100c738/package.json) → [patch](https://github.com/tancheng33/dsh-yogacara/blob/daa16f81b9326e3a4ff19d7feee77e940100c738/cordis.patch.yml) · **身份:** `dsh-yogacara`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `self-model` `long-term-memory` `system-prompt` `model-tools` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Expert Team** · [tipus0731/dsh-expert-team@0d08ec9](https://github.com/tipus0731/dsh-expert-team/commit/0d08ec9992669d372d2aeb9d69236d25adc02b46) — 带角色边界、验收驱动派发与一致性交叉验证的专家 Agent 团队。
  - **证据:** [manifest](https://github.com/tipus0731/dsh-expert-team/blob/0d08ec9992669d372d2aeb9d69236d25adc02b46/package.json) → [patch](https://github.com/tipus0731/dsh-expert-team/blob/0d08ec9992669d372d2aeb9d69236d25adc02b46/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `task-dispatch` `cross-validation` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Subagent Roles** · [trynewthin/dsh-subagent-roles@83f118c](https://github.com/trynewthin/dsh-subagent-roles/commit/83f118cfc217c7388d542bcdd63b01b60f77fa21) — 用于子 Agent 委派的角色化模型路由与 Web 配置。
  - **证据:** [manifest](https://github.com/trynewthin/dsh-subagent-roles/blob/83f118cfc217c7388d542bcdd63b01b60f77fa21/package.json) → [patch](https://github.com/trynewthin/dsh-subagent-roles/blob/83f118cfc217c7388d542bcdd63b01b60f77fa21/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `model-routing` `configuration-write` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 文件与数据

- **DSH Usage Billing** · [940842546/dsh-usage-billing@96ff9fc](https://github.com/940842546/dsh-usage-billing/commit/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c) — 聚合模型 Token 用量与 DeepSeek 费用估算，并提供持久化的会话和时间范围面板。
  - **证据:** [manifest](https://github.com/940842546/dsh-usage-billing/blob/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c/package.json) → [patch](https://github.com/940842546/dsh-usage-billing/blob/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c/cordis.patch.yml) · **身份:** `dsh-usage-billing`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `usage-metrics` `filesystem-write` `client-injection` · **核验备注:** DSH tools peer 声明 rc.6，固定源码会写入聚合用量数据；未验证计价准确性或运行行为。

- **DSH Input File Ref** · [AFAP/dsh-input-file-ref@fe62f66](https://github.com/AFAP/dsh-input-file-ref/commit/fe62f66cf183a5645eafcd43dcf88526f5066aaa) — 通过 @ 引用浏览和搜索工作区相对路径，并把所选路径插入对话输入框的文件选择器。
  - **证据:** [manifest](https://github.com/AFAP/dsh-input-file-ref/blob/fe62f66cf183a5645eafcd43dcf88526f5066aaa/package.json) → [patch](https://github.com/AFAP/dsh-input-file-ref/blob/fe62f66cf183a5645eafcd43dcf88526f5066aaa/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-metadata` `workspace-read` `client-injection` `web-route` `github-only` · **核验备注:** 文档记录了 GitHub 安装；宿主在同源信任边界后列出相对路径元数据，未实际访问文件系统。

- **DSH Usage** · [Aisland-SJL/dsh-usage@4b9a952](https://github.com/Aisland-SJL/dsh-usage/commit/4b9a9522cfd9f07b054f96525cbff95faaf03a59) — 展示持久化余额与 Token 用量面板，覆盖 DSH 会话及可选的 Claude Code 用量日志。
  - **证据:** [manifest](https://github.com/Aisland-SJL/dsh-usage/blob/4b9a9522cfd9f07b054f96525cbff95faaf03a59/package.json) → [patch](https://github.com/Aisland-SJL/dsh-usage/blob/4b9a9522cfd9f07b054f96525cbff95faaf03a59/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `credentials` `external-network` `filesystem-write` `identity-collision` · **核验备注:** 作者记录了 GitHub 源安装；private manifest 名称与另一 npm 仓库冲突，因此不列 npm 身份，且未执行用量、余额或文件访问。

- **DSH Session Export** · [bwndlct/dsh-session-export@eb18389](https://github.com/bwndlct/dsh-session-export/commit/eb18389192e36934718877fd7c6eb397f5cf1cd4) — 把 DeepSeek Harness 会话导出为便于复用或归档的文件。
  - **证据:** [manifest](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/package.json) → [patch](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/cordis.patch.yml) · **身份:** `dsh-session-export`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-write` · **核验备注:** command、session 与 tools peer 声明 rc.6；导出数据可能包含敏感上下文。

- **DSH Drag to Attachment** · [djt889/dsh-drag-to-attachment@620ad6e](https://github.com/djt889/dsh-drag-to-attachment/commit/620ad6e4c23a4454fb078104fa37a6e3f7ca3145) — 把拖放或粘贴的主机文件与文件夹转换为 DSH 附件或绝对文件系统路径。
  - **证据:** [manifest](https://github.com/djt889/dsh-drag-to-attachment/blob/620ad6e4c23a4454fb078104fa37a6e3f7ca3145/package.json) → [patch](https://github.com/djt889/dsh-drag-to-attachment/blob/620ad6e4c23a4454fb078104fa37a6e3f7ca3145/cordis.patch.yml) · **身份:** `@dsh-external/dsh-drag-to-attachment`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `native-executable` `subprocess` `filesystem` `folder-attachment` `absolute-path` `client-injection` · **核验备注:** 文档记录了 GitHub 安装，包内附带 Everything 辅助程序用于查找本地路径；未执行二进制、子进程或文件操作。

- **DSH Drag-and-Drop Upload** · [GLFzr/dsh-file-upload@54891a4](https://github.com/GLFzr/dsh-file-upload/commit/54891a4a3632900fd333c40b00e142a2b349c538) — 为 DSH Web 输入框增加拖放上传，并把文件保存到本地 dropbox 目录。
  - **证据:** [manifest](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/package.json) → [patch](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/cordis.patch.yml) · **身份:** `dsh-file-upload`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `file-upload` `filesystem-write` `web-routes` `client-injection` · **核验备注:** 已确认 host/client 双端 bundle 结构；未运行测试上传路由或文件系统写入。

- **DSH File Upload** · [HongMing-Huang/dsh-file-upload@7aac111](https://github.com/HongMing-Huang/dsh-file-upload/commit/7aac111b00f5a3172a9fc093ec7f69bebdf65aac) — 在输入区提供可移除的文件卡片、内容识别、Markdown 转换与文档工具。
  - **证据:** [manifest](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/package.json) → [patch](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/cordis.patch.yml) · **身份:** `dsh-file-upload`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `file-upload` `filesystem-write` `document-parsing` · **核验备注:** DSH peer 声明 rc.6，Cordis range 较宽；未做运行兼容性测试。

- **DSH File Picker** · [JackeyWilder/dsh-file-picker@a8741fb](https://github.com/JackeyWilder/dsh-file-picker/commit/a8741fb8cd8b46dab10a16fe0fc26a3d8f46c455) — 调用 Windows 原生文件选择器，并把选中文件路径注入会话附件栏。
  - **证据:** [manifest](https://github.com/JackeyWilder/dsh-file-picker/blob/a8741fb8cd8b46dab10a16fe0fc26a3d8f46c455/package.json) → [patch](https://github.com/JackeyWilder/dsh-file-picker/blob/a8741fb8cd8b46dab10a16fe0fc26a3d8f46c455/cordis.patch.yml) · **身份:** `@jackeywilder/dsh-file-picker`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-dialog` `filesystem-read` `session-data` `client-injection` `windows` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH FileScope** · [KunIsMe/dsh-filescope@e84692e](https://github.com/KunIsMe/dsh-filescope/commit/e84692ed79d765fe06c40eabf1c7360e53b1b172) — 带实时文件预览的工作区文件浏览抽屉。
  - **证据:** [manifest](https://github.com/KunIsMe/dsh-filescope/blob/e84692ed79d765fe06c40eabf1c7360e53b1b172/package.json) → [patch](https://github.com/KunIsMe/dsh-filescope/blob/e84692ed79d765fe06c40eabf1c7360e53b1b172/cordis.patch.yml) · **身份:** `dsh-filescope`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `file-preview` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Explorer** · [No-PRM/dsh-explorer@2b21a68](https://github.com/No-PRM/dsh-explorer/commit/2b21a68866c5ddb4a0ae79328e6dde96b34399bb) — 聚合宿主与浏览器两端的文件树、搜索、Git 状态、媒体预览和拖拽引用。
  - **证据:** [manifest](https://github.com/No-PRM/dsh-explorer/blob/2b21a68866c5ddb4a0ae79328e6dde96b34399bb/package.json) → [patch](https://github.com/No-PRM/dsh-explorer/blob/2b21a68866c5ddb4a0ae79328e6dde96b34399bb/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `file-search` `git-status` `media-preview` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Chat Import** · [Nwflower/dsh-chat-import@3c751ce](https://github.com/Nwflower/dsh-chat-import/commit/3c751ce8dbff52a75c62b10f714993f39be33e84) — 把主流编程 Agent 与聊天产品的历史记录导入为可恢复的 DSH 会话。
  - **证据:** [manifest](https://github.com/Nwflower/dsh-chat-import/blob/3c751ce8dbff52a75c62b10f714993f39be33e84/package.json) → [patch](https://github.com/Nwflower/dsh-chat-import/blob/3c751ce8dbff52a75c62b10f714993f39be33e84/cordis.patch.yml) · **身份:** `dsh-chat-import`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `session-import` `filesystem-read` `session-data` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH At File** · [omdsh-dev/dsh-at-file@9c71e52](https://github.com/omdsh-dev/dsh-at-file/commit/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4) — 提供类似 Codex 的 @file 引用，搜索工作区路径并把文件内容附加到提示词。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/package.json) → [patch](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/cordis.patch.yml) · **身份:** `dsh-at-file`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `workspace-read` `data-disclosure` · **核验备注:** 工作区内容可能被附加到提示词，需审查数据披露边界。

- **DSH Files** · [taxueseek/dsh-files@43887e2](https://github.com/taxueseek/dsh-files/commit/43887e2dca25fad9d7b23049fe1674f0af00c5cf) — 提供文件上传卡片、会话隔离存储、去重清理与文档读取工具。
  - **证据:** [manifest](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/package.json) → [patch](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/cordis.patch.yml) · **身份:** `dsh-files`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `file-upload` `filesystem-write` `document-parsing` · **核验备注:** DSH peer 声明 rc.6，Cordis range 较宽；仓库许可证检测结果未知。

- **DSH Browser FS** · [whitefirer/dsh-browser-fs@d144aaf](https://github.com/whitefirer/dsh-browser-fs/commit/d144aaf8960442558897e5600be00366f40d812d) — 通过 WebSocket 中继，让 Agent 在浏览器授权的本地目录中列出、读取和写入文件。
  - **证据:** [manifest](https://github.com/whitefirer/dsh-browser-fs/blob/d144aaf8960442558897e5600be00366f40d812d/package.json) → [patch](https://github.com/whitefirer/dsh-browser-fs/blob/d144aaf8960442558897e5600be00366f40d812d/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `browser-filesystem` `filesystem-read` `filesystem-write` `websocket` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH DeepSeek Attach** · [wqx-txdsyl/dsh-ds-attach@9cc7bab](https://github.com/wqx-txdsyl/dsh-ds-attach/commit/9cc7babf8ce8996daf011299ac2b805525dfb96f) — 为 DSH 附件提供 DeepSeek 风格文件卡片、拖拽、文档文本提取与消息注入。
  - **证据:** [manifest](https://github.com/wqx-txdsyl/dsh-ds-attach/blob/9cc7babf8ce8996daf011299ac2b805525dfb96f/package.json) → [patch](https://github.com/wqx-txdsyl/dsh-ds-attach/blob/9cc7babf8ce8996daf011299ac2b805525dfb96f/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `file-upload` `document-extraction` `filesystem-write` `session-data` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Cordis Transfer Plugin** · [zby1211/cordis-transfer-plugin@c99f767](https://github.com/zby1211/cordis-transfer-plugin/commit/c99f767edbea444b12019bf934448983fb9d6327) — 通过浏览器把动态 Cordis 插件导入或导出为 ZIP 包。
  - **证据:** [manifest](https://github.com/zby1211/cordis-transfer-plugin/blob/c99f767edbea444b12019bf934448983fb9d6327/package.json) → [patch](https://github.com/zby1211/cordis-transfer-plugin/blob/c99f767edbea444b12019bf934448983fb9d6327/cordis.patch.yml) · **身份:** `cordis-transfer-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-export` `plugin-import` `file-upload` `filesystem-write` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 视觉与媒体

- **DSH Vision Toolkit** · [Anionex/dsh-vision-toolkit@29850a8](https://github.com/Anionex/dsh-vision-toolkit/commit/29850a83871d4b7a7cc13e251420c5a440e2f69e) — 提供图像问答、长截图 OCR、UI 复刻、视觉定位与像素差异分析。
  - **证据:** [manifest](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/package.json) → [patch](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/cordis.patch.yml) · **身份:** `@anionex/dsh-vision-toolkit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `browser` `subprocess` `credentials` `python-environment` · **核验备注:** 源码显示高权限运行准备；兼容性仍需单独核验。

- **DSH Codex Media** · [binsarjr/dsh-codex-media@4dba264](https://github.com/binsarjr/dsh-codex-media/commit/4dba264473d00dc75c1e100e8de56a291a9d3441) — 通过 Codex CLI 或可配置 API 传输增加本地图像与文档分析以及图像生成。
  - **证据:** [manifest](https://github.com/binsarjr/dsh-codex-media/blob/4dba264473d00dc75c1e100e8de56a291a9d3441/package.json) → [patch](https://github.com/binsarjr/dsh-codex-media/blob/4dba264473d00dc75c1e100e8de56a291a9d3441/cordis.patch.yml) · **身份:** `dsh-codex-media`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `local-file` `subprocess` `external-network` `credentials` `image-generation` · **核验备注:** 原生条目加载的源码可读取文件、启动本地 Codex CLI、调用 API 并写入生成图片；这些路径均未执行。

- **DSH Blender** · [CheshireJCat/blender@3d641da](https://github.com/CheshireJCat/blender/commit/3d641dae1c84248f213095f322f6beace0631409) — 通过 DSH 工具暴露 3D 场景创作能力的 Blender 集成。
  - **证据:** [manifest](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/package.json) → [patch](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/cordis.patch.yml) · **身份:** `dsh-blender`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-application` `subprocess` `setup-command` · **核验备注:** 声明了 DSH tools rc.6；未执行 Blender 或其安装设置。

- **DSH Chat Imagine** · [corrinehu/dsh-chat-imagine@419e39b](https://github.com/corrinehu/dsh-chat-imagine/commit/419e39b30f6932064e7744036f7975d761fd93a0) — 调用已配置的 OpenAI 兼容服务或检测到的本地 MiniMax CLI 生图，并在对话中展示结果。
  - **证据:** [manifest](https://github.com/corrinehu/dsh-chat-imagine/blob/419e39b30f6932064e7744036f7975d761fd93a0/package.json) → [patch](https://github.com/corrinehu/dsh-chat-imagine/blob/419e39b30f6932064e7744036f7975d761fd93a0/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `image-generation` `external-network` `credentials` `subprocess` `in-memory-media` · **核验备注:** 文档记录了 GitHub 安装与 rc.6 tools；未执行服务请求、CLI 探测、子进程或图像生成。

- **DSH ChatVoice** · [FuzzySoul/dsh-chatvoice@34b4a18](https://github.com/FuzzySoul/dsh-chatvoice/commit/34b4a183c92c31fcea454d65c16c15f00bc4537b) — 使用浏览器原生语音能力提供免额外 API Key 的语音输入与回复朗读。
  - **证据:** [manifest](https://github.com/FuzzySoul/dsh-chatvoice/blob/34b4a183c92c31fcea454d65c16c15f00bc4537b/package.json) → [patch](https://github.com/FuzzySoul/dsh-chatvoice/blob/34b4a183c92c31fcea454d65c16c15f00bc4537b/cordis.patch.yml) · **身份:** `dsh-chatvoice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `microphone` `browser-speech` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Image Bridge** · [haitang1/dsh-image-bridge@4c7e7a9](https://github.com/haitang1/dsh-image-bridge/commit/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b) — 把粘贴图片写入工作区并提供隐藏路径，让文本模型调用视觉工具识别。
  - **证据:** [manifest](https://github.com/haitang1/dsh-image-bridge/blob/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b/package.json) → [patch](https://github.com/haitang1/dsh-image-bridge/blob/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `image-input` `filesystem-write` `prompt-injection` `model-tools` `session-data` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Diagram** · [hanzhangzzz/dsh-diagram@480d3b3](https://github.com/hanzhangzzz/dsh-diagram/commit/480d3b3e81a583648595ec60cdcf834a8b7593cc) — 在 DeepSeek Harness 对话中嵌入可编辑的 Excalidraw 图表。
  - **证据:** [manifest](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/package.json) → [patch](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/cordis.patch.yml) · **身份:** `dsh-diagram`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `interactive-content` · **核验备注:** 声明了精确的 DSH rc.6 peer；未做运行兼容性测试。

- **DSH DashScope Media** · [hisonWarren/deepseekharness-alter@efb651d](https://github.com/hisonWarren/deepseekharness-alter/commit/efb651d1e2f28e2169839ee946e856903aee6150) — 调用 DashScope 的图像、视频与语音工具，并在对话中展示媒体卡片。
  - **证据:** [manifest](https://github.com/hisonWarren/deepseekharness-alter/blob/efb651d1e2f28e2169839ee946e856903aee6150/plugins-local/dsh-dashscope-media/package.json) → [patch](https://github.com/hisonWarren/deepseekharness-alter/blob/efb651d1e2f28e2169839ee946e856903aee6150/plugins-local/dsh-dashscope-media/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `image-generation` `video-generation` `text-to-speech` `credentials` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DirectorX** · [LaplaceYoung/dsh-directorx@5553398](https://github.com/LaplaceYoung/dsh-directorx/commit/5553398fafcdb8e263f54e19203c1c56fbd43e43) — 集 AI 视频生成、剪辑、质检、分镜画布和导演知识库于一体。
  - **证据:** [manifest](https://github.com/LaplaceYoung/dsh-directorx/blob/5553398fafcdb8e263f54e19203c1c56fbd43e43/package.json) → [patch](https://github.com/LaplaceYoung/dsh-directorx/blob/5553398fafcdb8e263f54e19203c1c56fbd43e43/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `video-generation` `video-editing` `quality-control` `filesystem-write` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **ModLens** · [liustack/modlens@2818192](https://github.com/liustack/modlens/commit/28181920f6b064e33c6b235221e1a3a5d360a897) — 把图片转换为 OCR、布局和语义证据，为纯文本模型补充视觉能力。
  - **证据:** [manifest](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/package.json) → [patch](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/cordis.patch.yml) · **身份:** `@liustack/modlens`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `external-installer` · **核验备注:** 外部视觉引擎与凭据属于能力事实，不代表安全性判断。

- **DeepSee** · [WUBING2023/deepsee@7431a43](https://github.com/WUBING2023/deepsee/commit/7431a430783105df9e40e740bb818c957cace6e7) — 提供视觉读取、模型能力发现、多模型路由与可选 OCR 安装。
  - **证据:** [manifest](https://github.com/WUBING2023/deepsee/blob/7431a430783105df9e40e740bb818c957cace6e7/package.json) → [patch](https://github.com/WUBING2023/deepsee/blob/7431a430783105df9e40e740bb818c957cace6e7/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `vision` `model-routing` `external-download` `subprocess` `install-script` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DeepSeek Visionary DSH** · [xlight/deepseek-visionary@e3cf51c](https://github.com/xlight/deepseek-visionary/commit/e3cf51c09c12eea2da7762c715202be4ac0320c5) — 由 Visionary Server CLI 与图片桥接支持的视觉、状态、登录和登出原生工具。
  - **证据:** [manifest](https://github.com/xlight/deepseek-visionary/blob/e3cf51c09c12eea2da7762c715202be4ac0320c5/packages/dsh-plugin/package.json) → [patch](https://github.com/xlight/deepseek-visionary/blob/e3cf51c09c12eea2da7762c715202be4ac0320c5/packages/dsh-plugin/cordis.patch.yml) · **身份:** `@xlight-oss/visionary-dsh`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `vision` `subprocess` `credentials` `external-network` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Vision Router** · [ysr666/dsh-vision-router@d805a71](https://github.com/ysr666/dsh-vision-router/commit/d805a71a3de75b624c733babc422df7d0eac6403) — 提供图像问答、定位、OCR、像素检查、截图与多提供商路由的视觉 bundle。
  - **证据:** [manifest](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/package.json) → [patch](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/cordis.patch.yml) · **身份:** `dsh-vision-router`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `browser` `file-upload` `filesystem-write` `native-code` · **核验备注:** 固定 manifest 与 patch 声明了 DSH rc.6 peer；未执行网络提供商、浏览器自动化、文件写入或原生图像依赖。

- **DSH Realtime Voice** · [zfu691531-hash/dsh-realtime-voice@91aae22](https://github.com/zfu691531-hash/dsh-realtime-voice/commit/91aae229357e647964bbf2e50ec7602c4ce55d4a) — 通过 Qwen 或 OpenAI 兼容 Provider 提供实时语音对话。
  - **证据:** [manifest](https://github.com/zfu691531-hash/dsh-realtime-voice/blob/91aae229357e647964bbf2e50ec7602c4ce55d4a/package.json) → [patch](https://github.com/zfu691531-hash/dsh-realtime-voice/blob/91aae229357e647964bbf2e50ec7602c4ce55d4a/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `microphone` `audio` `credentials` `external-network` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 搜索与研究

- **DSH Search** · [2982136527/dsh-plugins@b8b03b1](https://github.com/2982136527/dsh-plugins/commit/b8b03b1e3d72729f70bcab68835abefaf27c8da5) — 通过 Bing RSS 与 DuckDuckGo 回退提供模型可调用的网页搜索，无需 API Key。
  - **证据:** [manifest](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/package.json) → [patch](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/cordis.patch.yml) · **身份:** `dsh-search`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-search` `external-network` `git-source` · **核验备注:** 已确认固定提交中的单仓库子目录与 patch；作者记录的是克隆后本地路径安装，仓库未检测到许可证文件。

- **DSH Web Tools** · [A3Boy/dsh-web-tools@ff35019](https://github.com/A3Boy/dsh-web-tools/commit/ff35019e3be679b6d62e866c462bbd801fd12110) — 统一多个网页搜索与抓取提供商，并提供凭据池、额度、健康监控和确定性回退。
  - **证据:** [manifest](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/package.json) → [patch](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/cordis.patch.yml) · **身份:** `dsh-web-tools`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `web-search` `remote-content` `client-injection` · **核验备注:** 固定 peer 声明 rc.6；未执行提供商调用、凭据处理、额度逻辑、回退行为或 prepare 构建。

- **DSH Web Search Multi** · [cinob/dsh-web-search-multi@ea1c2d0](https://github.com/cinob/dsh-web-search-multi/commit/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465) — 提供多供应商 Web 搜索、自动回退、凭据配置和设置界面。
  - **证据:** [manifest](https://github.com/cinob/dsh-web-search-multi/blob/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465/package.json) → [patch](https://github.com/cinob/dsh-web-search-multi/blob/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465/cordis.patch.yml) · **身份:** `dsh-web-search-multi`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `workspace-write` `provider-fallback` `settings-ui` · **核验备注:** 该包声明通配 DSH peer 和多个外部搜索供应商，并披露工作区写入能力；未执行供应商请求或写入。

- **DSH Web Access** · [haibinwang9/dsh-web-access@1eaffaf](https://github.com/haibinwang9/dsh-web-access/commit/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b) — 在 SearXNG、Tavily、Brave 与 DuckDuckGo 间回退的多源网页搜索和内容提取。
  - **证据:** [manifest](https://github.com/haibinwang9/dsh-web-access/blob/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b/package.json) → [patch](https://github.com/haibinwang9/dsh-web-access/blob/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `web-search` `content-extraction` `credentials` `external-network` `provider-fallback` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH PCB Parts Search** · [Huaqiu-Electronics/dsh-pcb-parts-search@7b02c04](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/commit/7b02c0492e06530c3c58638639351ea7878dde3e) — 从立创商城与 EDA 元件服务搜索电子器件和 IC 的模型工具。
  - **证据:** [manifest](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/blob/7b02c0492e06530c3c58638639351ea7878dde3e/package.json) → [patch](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/blob/7b02c0492e06530c3c58638639351ea7878dde3e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `parts-search` `model-tools` `external-network` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Search Boost** · [Mr-remon219/dsh-search-boost@af80be8](https://github.com/Mr-remon219/dsh-search-boost/commit/af80be8b5a0da2b74511dbb74f1acce601b11bf3) — 融合多个 Web 与 X 搜索引擎，并提供页面抓取与并行研究流程。
  - **证据:** [manifest](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/package.json) → [patch](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/cordis.patch.yml) · **身份:** `dsh-search-boost`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `browser` `multi-agent` · **核验备注:** 已在固定源码确认 bundle 行与搜索提供商覆盖；未执行外部引擎、凭据、子进程或研究并发。

- **DSH Web Search Exa** · [TonyDua/dsh-web-search-exa@083706b](https://github.com/TonyDua/dsh-web-search-exa/commit/083706bae60af8e1f3776b02448f17c140c3f571) — 把 Exa 网络搜索接入 DSH 的 Agent 工具与 Web 设置。
  - **证据:** [manifest](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/package.json) → [patch](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/cordis.patch.yml) · **身份:** `@tonydua/dsh-web-search-exa`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` · **核验备注:** DSH peer 声明 rc.6，但 Cordis range 仍为 rc.1；未做运行测试。

- **DSH Free Search** · [zhouzhencheng07/dsh-free-search@2336dad](https://github.com/zhouzhencheng07/dsh-free-search/commit/2336dadd0c8ef593d6e8af2897327e4725b9c01e) — 接入 DSH 原生 Web seam 的免 Key 多源网页搜索 Provider。
  - **证据:** [manifest](https://github.com/zhouzhencheng07/dsh-free-search/blob/2336dadd0c8ef593d6e8af2897327e4725b9c01e/package.json) → [patch](https://github.com/zhouzhencheng07/dsh-free-search/blob/2336dadd0c8ef593d6e8af2897327e4725b9c01e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-search` `external-network` `provider-fallback` `identity-collision` · **核验备注:** npm 身份映射到其他仓库，因此本记录固定到作者文档中的 Git 源，不主张该包。

#### 记忆

- **DSH Native Memory** · [highland0971/dsh-native-memory@270e235](https://github.com/highland0971/dsh-native-memory/commit/270e235bf00a1211f1fd31fdf91d9a1f70f57df9) — 基于原生存储、支持跨会话召回、审批写入与来源追踪的工作区长期记忆。
  - **证据:** [manifest](https://github.com/highland0971/dsh-native-memory/blob/270e235bf00a1211f1fd31fdf91d9a1f70f57df9/package.json) → [patch](https://github.com/highland0971/dsh-native-memory/blob/270e235bf00a1211f1fd31fdf91d9a1f70f57df9/cordis.patch.yml) · **身份:** `dsh-native-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `long-term-memory` `session-data` `approval-gate` `storage-domain` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **iHow Memory** · [iHow1/dsh-ihow-memory@c530943](https://github.com/iHow1/dsh-ihow-memory/commit/c5309437c5549a31c1aa6ba38d20b82752209986) — 通过 MCP 客户端接入 DSH 的本地优先共享记忆插件。
  - **证据:** [manifest](https://github.com/iHow1/dsh-ihow-memory/blob/c5309437c5549a31c1aa6ba38d20b82752209986/package.json) → [patch](https://github.com/iHow1/dsh-ihow-memory/blob/c5309437c5549a31c1aa6ba38d20b82752209986/cordis.patch.yml) · **身份:** `dsh-ihow-memory`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `long-term-memory` `mcp` `local-service` `filesystem-write` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Session Summarizer** · [KhalilYamber/dsh-session-summarizer@7a115c3](https://github.com/KhalilYamber/dsh-session-summarizer/commit/7a115c32c869c608ed690a155fec6609ea2cb049) — 读取近期或指定会话并生成紧凑的上下文摘要。
  - **证据:** [manifest](https://github.com/KhalilYamber/dsh-session-summarizer/blob/7a115c32c869c608ed690a155fec6609ea2cb049/package.json) → [patch](https://github.com/KhalilYamber/dsh-session-summarizer/blob/7a115c32c869c608ed690a155fec6609ea2cb049/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `summarization` `model-request` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Context Structurer** · [kkkkkklze/dsh-context-structurer@0420f4c](https://github.com/kkkkkklze/dsh-context-structurer/commit/0420f4cbef56fcd3060e0e1e95e05796c6c08051) — 把对话拆分为带类型的子上下文，并用结构化目录索引。
  - **证据:** [manifest](https://github.com/kkkkkklze/dsh-context-structurer/blob/0420f4cbef56fcd3060e0e1e95e05796c6c08051/package.json) → [patch](https://github.com/kkkkkklze/dsh-context-structurer/blob/0420f4cbef56fcd3060e0e1e95e05796c6c08051/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `context-index` `filesystem-write` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Unified Agent Memory** · [Noelune/unified-agent-memory@b6a879c](https://github.com/Noelune/unified-agent-memory/commit/b6a879cc73364f24c08160dda2f53140c82ebec7) — 用于跨任务保存与检索 Agent 知识的统一记忆层。
  - **证据:** [manifest](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/package.json) → [patch](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/cordis.patch.yml) · **身份:** `dsh-unified-agent-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `persistent-memory` · **核验备注:** manifest 声明 DSH tools rc.6 peer；未做运行兼容性测试。

- **Folio DSH Tools** · [nyantused-cpun/folio@91f3d36](https://github.com/nyantused-cpun/folio/commit/91f3d366c4654d70ed2f39e2f62a1e38eab8ff3b) — 通过 Python 子进程把 Folio 记忆与质量 CLI 暴露为模型工具和守卫。
  - **证据:** [manifest](https://github.com/nyantused-cpun/folio/blob/91f3d366c4654d70ed2f39e2f62a1e38eab8ff3b/plugins/folio-tools/package.json) → [patch](https://github.com/nyantused-cpun/folio/blob/91f3d366c4654d70ed2f39e2f62a1e38eab8ff3b/plugins/folio-tools/cordis.patch.yml) · **身份:** `@nyantused/folio-dsh-tools`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `long-term-memory` `model-tools` `subprocess` `filesystem-write` `guard` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Recall** · [Relistencode/dsh-recall@23f9103](https://github.com/Relistencode/dsh-recall/commit/23f9103a2d588936bb3847c1cb443ad24efa7477) — 对原始对话历史进行本地离线字面、模糊与语义检索。
  - **证据:** [manifest](https://github.com/Relistencode/dsh-recall/blob/23f9103a2d588936bb3847c1cb443ad24efa7477/package.json) → [patch](https://github.com/Relistencode/dsh-recall/blob/23f9103a2d588936bb3847c1cb443ad24efa7477/cordis.patch.yml) · **身份:** `dsh-recall`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `local-search` `semantic-search` `filesystem-read` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Engramory** · [tinqiao-oss/engramory@4a9b392](https://github.com/tinqiao-oss/engramory/commit/4a9b3925554e3ae2aaa7205bd842c21ca72f8626) — 基于 Markdown 笔记、共享纯文件存储与确定性索引上限的精选长期记忆。
  - **证据:** [manifest](https://github.com/tinqiao-oss/engramory/blob/4a9b3925554e3ae2aaa7205bd842c21ca72f8626/adapters/dsh/plugin/package.json) → [patch](https://github.com/tinqiao-oss/engramory/blob/4a9b3925554e3ae2aaa7205bd842c21ca72f8626/adapters/dsh/plugin/cordis.patch.yml) · **身份:** `dsh-engramory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `long-term-memory` `filesystem-read` `filesystem-write` `guard` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 安全与审批

- **DSH Popper** · [1473382/dsh-popper@d6130c0](https://github.com/1473382/dsh-popper/commit/d6130c052068147af9b9ac87b9f8c3729bb02f5b) — 通过主张门禁、竞争假设与只追加证据台账，为会话提供证伪驱动的纠错循环。
  - **证据:** [manifest](https://github.com/1473382/dsh-popper/blob/d6130c052068147af9b9ac87b9f8c3729bb02f5b/package.json) → [patch](https://github.com/1473382/dsh-popper/blob/d6130c052068147af9b9ac87b9f8c3729bb02f5b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `system-prompt` `tool-gating` `session-data` `filesystem-write` `github-only` · **核验备注:** 文档记录了 Git 源安装，但未发布的 scoped 包名与 manifest 仓库字段不能证明官方 npm 身份；未执行门禁或会话写入。

- **DSH Turn Approval** · [arrow949/dsh-turn-approval@5b4cbfd](https://github.com/arrow949/dsh-turn-approval/commit/5b4cbfd425885ed3f3ed93c796d5113847cc93b8) — 仅在当前任务内生效并随后过期的回合级审批规则。
  - **证据:** [manifest](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/package.json) → [patch](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/cordis.patch.yml) · **身份:** `dsh-turn-approval`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` · **核验备注:** 仅声明 Cordis peer，因此 DSH 兼容性仍未知。

- **DSH Island** · [cdxiaodong/dsh-island@c7cd407](https://github.com/cdxiaodong/dsh-island/commit/c7cd407be48b731d910af946a81a6dc58aa690ca) — 一个 macOS 菜单栏灵动岛与鲸鱼桌宠，用于显示 DSH 会话、工具、进度和审批请求。
  - **证据:** [manifest](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/package.json) → [patch](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/cordis.patch.yml) · **身份:** `dsh-island`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `native-executable` `subprocess` `tool-arguments` `approval` `session-data` · **核验备注:** 源码会启动随包 macOS 面板，并通过本地 Socket 转发工具参数、会话路径和审批决定；未执行原生代码或 prepublish hook。

- **DSH Workspace Only** · [CsBpRd/dsh-workspace-only-plugin@a2682d3](https://github.com/CsBpRd/dsh-workspace-only-plugin/commit/a2682d35c390b2443b0371d5db925ee71e744715) — 增加一个策略开关，旨在把所有沙箱模式的文件访问限制在会话工作区内。
  - **证据:** [manifest](https://github.com/CsBpRd/dsh-workspace-only-plugin/blob/a2682d35c390b2443b0371d5db925ee71e744715/package.json) → [patch](https://github.com/CsBpRd/dsh-workspace-only-plugin/blob/a2682d35c390b2443b0371d5db925ee71e744715/cordis.patch.yml) · **身份:** `dsh-workspace-only-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `approval-hook` `core-patch` `remote-installer` `filesystem-write` `policy-control` · **核验备注:** 文档中的设置会下载安装器，并修改 DSH 核心及另一个插件以改变审批策略；未执行安装器或补丁脚本。

- **DSH Auth** · [hxy91819/dsh-auth@ea8e827](https://github.com/hxy91819/dsh-auth/commit/ea8e82707167ef5bb8036370ea0e618caacd9da4) — 为 DSH Web 提供 Nginx 前置的单账户认证 bundle。
  - **证据:** [manifest](https://github.com/hxy91819/dsh-auth/blob/ea8e82707167ef5bb8036370ea0e618caacd9da4/package.json) → [patch](https://github.com/hxy91819/dsh-auth/blob/ea8e82707167ef5bb8036370ea0e618caacd9da4/cordis.patch.yml) · **身份:** `dsh-auth`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `authentication` `credentials` `reverse-proxy` `session-data` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Approval LLM** · [Letter2025/dsh-approval-llm@af70355](https://github.com/Letter2025/dsh-approval-llm/commit/af70355a3c48c15f1ec8ac31c39fa279e895c168) — 使用 LLM 辅助评估敏感工具动作的审批层。
  - **证据:** [manifest](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/package.json) → [patch](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/cordis.patch.yml) · **身份:** `dsh-approval-llm`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` `llm-call` · **核验备注:** peer range 较宽，兼容性未知；仓库许可证检测结果不可用。

- **Upstream Radar** · [MicroMilo/upstream-radar@0519c00](https://github.com/MicroMilo/upstream-radar/commit/0519c00d8fb77b375748151dcb6365d25e04c86c) — 监测插件传递依赖漏洞路径与破坏性升级的依赖安全工具。
  - **证据:** [manifest](https://github.com/MicroMilo/upstream-radar/blob/0519c00d8fb77b375748151dcb6365d25e04c86c/package.json) → [patch](https://github.com/MicroMilo/upstream-radar/blob/0519c00d8fb77b375748151dcb6365d25e04c86c/cordis.patch.yml) · **身份:** `upstream-radar`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `dependency-audit` `vulnerability-data` `external-network` `filesystem-read` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Check** · [stimQQ/dshplugins@b48002d](https://github.com/stimQQ/dshplugins/commit/b48002d5ff6b78d5a205250d4f4920d5d0f2a66d) — 检查已装插件的损坏包、过期 DSH 版本与安装期代码，并生成修复 Issue 草案。
  - **证据:** [manifest](https://github.com/stimQQ/dshplugins/blob/b48002d5ff6b78d5a205250d4f4920d5d0f2a66d/packages/dsh-plugin-check/package.json) → [patch](https://github.com/stimQQ/dshplugins/blob/b48002d5ff6b78d5a205250d4f4920d5d0f2a66d/packages/dsh-plugin-check/cordis.patch.yml) · **身份:** `dsh-plugin-check`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-audit` `dependency-audit` `lifecycle-scan` `issue-drafting` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Prior Probe** · [SuTang-vain/dsh-self-harness-tools@373b454](https://github.com/SuTang-vain/dsh-self-harness-tools/commit/373b4548bba62872cf25748b04f5407e00e75882) — 带确定性离线评分与可选单次模型调用的固定探针电池。
  - **证据:** [manifest](https://github.com/SuTang-vain/dsh-self-harness-tools/blob/373b4548bba62872cf25748b04f5407e00e75882/plugins/prior-probe/package.json) → [patch](https://github.com/SuTang-vain/dsh-self-harness-tools/blob/373b4548bba62872cf25748b04f5407e00e75882/plugins/prior-probe/cordis.patch.yml) · **身份:** `dsh-prior-probe`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `evaluation` `regex-scoring` `model-tools` `external-network` `credentials` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DeepSeek Harness Auth** · [taichuy/deepseek-harness-auth@5399726](https://github.com/taichuy/deepseek-harness-auth/commit/539972671d1ba2c2d1fa12d5a2b2d53617249de5) — 面向 DSH Web profile 的失败关闭式密码认证代理 bundle。
  - **证据:** [manifest](https://github.com/taichuy/deepseek-harness-auth/blob/539972671d1ba2c2d1fa12d5a2b2d53617249de5/package.json) → [patch](https://github.com/taichuy/deepseek-harness-auth/blob/539972671d1ba2c2d1fa12d5a2b2d53617249de5/cordis.patch.yml) · **身份:** `deepseek-harness-auth`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `authentication` `reverse-proxy` `credentials` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Trust Center** · [TonyWang-hub/dsh-plugin-trust-center@ba0b0aa](https://github.com/TonyWang-hub/dsh-plugin-trust-center/commit/ba0b0aa2e3a895704eeff0a04dda3d5fbb60a84a) — 面向 DSH 插件的证据优先静态检查、兼容性验证、隔离、收据、快照与受控提升工具。
  - **证据:** [manifest](https://github.com/TonyWang-hub/dsh-plugin-trust-center/blob/ba0b0aa2e3a895704eeff0a04dda3d5fbb60a84a/package.json) → [patch](https://github.com/TonyWang-hub/dsh-plugin-trust-center/blob/ba0b0aa2e3a895704eeff0a04dda3d5fbb60a84a/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `plugin-audit` `quarantine` `sbom` `snapshot` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Defensive Prompt Injection** · [Tough-Respawn/defensive-prompt-injection@7384be5](https://github.com/Tough-Respawn/defensive-prompt-injection/commit/7384be59f6380d047014fb99f348cab137759d70) — 在 DSH 内应用防御性提示词注入规则的失败关闭式操作门禁。
  - **证据:** [manifest](https://github.com/Tough-Respawn/defensive-prompt-injection/blob/7384be59f6380d047014fb99f348cab137759d70/packages/deepseek-harness/package.json) → [patch](https://github.com/Tough-Respawn/defensive-prompt-injection/blob/7384be59f6380d047014fb99f348cab137759d70/packages/deepseek-harness/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `prompt-injection-defense` `approval-gate` `filesystem-read` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH AutoGate** · [wangxing-git/dsh-autogate@dad7c04](https://github.com/wangxing-git/dsh-autogate/commit/dad7c04a3a435fcdeca67e29deabc46b7a4c718f) — 在工作区沙箱内结合确定性规则、LLM 裁决与人工升级的自动审批档位。
  - **证据:** [manifest](https://github.com/wangxing-git/dsh-autogate/blob/dad7c04a3a435fcdeca67e29deabc46b7a4c718f/package.json) → [patch](https://github.com/wangxing-git/dsh-autogate/blob/dad7c04a3a435fcdeca67e29deabc46b7a4c718f/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `approval-gate` `sandbox-policy` `model-request` `human-escalation` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Whale Status** · [WhaleHarness/WhaleHarness@1bf6c4c](https://github.com/WhaleHarness/WhaleHarness/commit/1bf6c4c4047565e524fef6f554a9edc4940fbd8d) — 检查站点健康、TLS、DNS、tarball 完整性、本地插件核验与更新状态。
  - **证据:** [manifest](https://github.com/WhaleHarness/WhaleHarness/blob/1bf6c4c4047565e524fef6f554a9edc4940fbd8d/plugins/whale-status/package.json) → [patch](https://github.com/WhaleHarness/WhaleHarness/blob/1bf6c4c4047565e524fef6f554a9edc4940fbd8d/plugins/whale-status/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `site-health` `tls` `dependency-audit` `integrity-check` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Vet** · [wulun811/dsh-plugin-vet@2ef0b8d](https://github.com/wulun811/dsh-plugin-vet/commit/2ef0b8ded090723cab83134cc7c536e7f9e5ee26) — 结合确定性扫描、运行时哨兵、审计技能与 GUI 防护层的插件信任流水线。
  - **证据:** [manifest](https://github.com/wulun811/dsh-plugin-vet/blob/2ef0b8ded090723cab83134cc7c536e7f9e5ee26/package.json) → [patch](https://github.com/wulun811/dsh-plugin-vet/blob/2ef0b8ded090723cab83134cc7c536e7f9e5ee26/cordis.patch.yml) · **身份:** `@jieai/dsh-plugin-vet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `plugin-audit` `runtime-monitor` `filesystem-skill` `client-injection` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Poison Guard** · [zoahdev/dsh-poison-guard@7be8ffd](https://github.com/zoahdev/dsh-poison-guard/commit/7be8ffd0470e47145f0fe9dd7cc1ba4982646811) — 使用 AST、去混淆与启发式规则检测外传和动态代码的安装前供应链扫描器。
  - **证据:** [manifest](https://github.com/zoahdev/dsh-poison-guard/blob/7be8ffd0470e47145f0fe9dd7cc1ba4982646811/package.json) → [patch](https://github.com/zoahdev/dsh-poison-guard/blob/7be8ffd0470e47145f0fe9dd7cc1ba4982646811/cordis.patch.yml) · **身份:** `dsh-poison-guard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `supply-chain-scan` `ast-analysis` `deobfuscation` `filesystem-read` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 外部集成

- **Chicheng Gate** · [534119219/chicheng-gate@155dbf6](https://github.com/534119219/chicheng-gate/commit/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876) — 为 DSH 面板增加局域网和隧道访问、密码门禁、可信主机配置与托管 frpc 连接。
  - **证据:** [manifest](https://github.com/534119219/chicheng-gate/blob/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876/package.json) → [patch](https://github.com/534119219/chicheng-gate/blob/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876/cordis.patch.yml) · **身份:** `chicheng-gate`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `remote-access` `credentials` `remote-binary-download` `subprocess` `filesystem-write` · **核验备注:** 静态源码显示 frpc 下载与校验、解压、凭据存储、子进程启动及 DSH 重启路径；均未执行。

- **DSH Notify Win** · [Andyqwe44/dsh-notify-win@a26c182](https://github.com/Andyqwe44/dsh-notify-win/commit/a26c1825a02dd077ef68b40095f6d33d91550e49) — 显示原生 Windows 任务与提问通知、闪烁任务栏，并可把 Toast 回答传回 DSH。
  - **证据:** [manifest](https://github.com/Andyqwe44/dsh-notify-win/blob/a26c1825a02dd077ef68b40095f6d33d91550e49/package.json) → [patch](https://github.com/Andyqwe44/dsh-notify-win/blob/a26c1825a02dd077ef68b40095f6d33d91550e49/cordis.patch.yml) · **身份:** `dsh-notify-win`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `native-executable` `powershell` `subprocess` `question-data` `filesystem` · **核验备注:** 包内携带可执行文件、PowerShell 与 VBScript 辅助程序并启动通知进程；未执行原生程序、子进程、提问流程或 prepublish hook。

- **DSH QQ Remote** · [ASAKAFENG/dsh-qq-remote@b724335](https://github.com/ASAKAFENG/dsh-qq-remote/commit/b724335a194d217f51dedbfd799d02ae67559d3b) — 通过 OneBot QQ 桥远程控制 DSH，提供命令执行、任务派发、截图、聊天、会话和进度事件。
  - **证据:** [manifest](https://github.com/ASAKAFENG/dsh-qq-remote/blob/b724335a194d217f51dedbfd799d02ae67559d3b/package.json) → [patch](https://github.com/ASAKAFENG/dsh-qq-remote/blob/b724335a194d217f51dedbfd799d02ae67559d3b/cordis.patch.yml) · **身份:** `@dsh-external/dsh-qq-remote`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `remote-command-execution` `external-network` `credentials` `screenshot` `session-data` `subprocess` · **核验备注:** 固定源码通过 QQ 暴露远程命令、截图、会话、文件、凭据和子进程能力；独立安装脚本及所有运行路径均未执行。

- **DSH WeChat Pro** · [bwhite55/dsh-wechat-pro@c726696](https://github.com/bwhite55/dsh-wechat-pro/commit/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357) — 把微信联系人接入真实 DSH 工作区、会话、提示、审批、事件流和媒体传输。
  - **证据:** [manifest](https://github.com/bwhite55/dsh-wechat-pro/blob/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357/package.json) → [patch](https://github.com/bwhite55/dsh-wechat-pro/blob/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357/cordis.patch.yml) · **身份:** `dsh-wechat-pro`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `session-data` `approval` `file-transfer` `filesystem-write` · **核验备注:** 该包使用通配 DSH peer，并处理微信凭据、提示、审批、会话事件和媒体文件；均未运行测试。

- **DSH OpenCode** · [chiro2001/dsh-oc@1ed1c51](https://github.com/chiro2001/dsh-oc/commit/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b) — 把 DSH 会话桥接到 OpenCode 终端界面，并支持模型凭据、文件系统访问和原生运行时。
  - **证据:** [manifest](https://github.com/chiro2001/dsh-oc/blob/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b/package.json) → [patch](https://github.com/chiro2001/dsh-oc/blob/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b/cordis.patch.yml) · **身份:** `@chiro2001/dsh-oc`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-application` `remote-binary-download` `subprocess` `credentials` `filesystem` `session-data` · **核验备注:** 该 Git 源 bundle 声明 rc.6 peer，可下载或启动 OpenCode 运行时，并接触凭据、文件与会话；这些路径均未执行。

- **DSH Collab Sync** · [cxxy161/dsh-collab-sync@22945f8](https://github.com/cxxy161/dsh-collab-sync/commit/22945f8a3a43199f76d82836a40d75c3744762ad) — 通过单写者锁、会话日志修复、远程访问设置和协作分区，让多个客户端共享一个 DSH 后端。
  - **证据:** [manifest](https://github.com/cxxy161/dsh-collab-sync/blob/22945f8a3a43199f76d82836a40d75c3744762ad/package.json) → [patch](https://github.com/cxxy161/dsh-collab-sync/blob/22945f8a3a43199f76d82836a40d75c3744762ad/cordis.patch.yml) · **身份:** `dsh-collab-sync`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `filesystem-write` `data-repair` `remote-access` `configuration-write` · **核验备注:** 该包声明宽泛的 DSH 版本范围，源码可修复压缩会话日志、改变主机暴露范围并写入配置；均未执行。

- **DSH QQBot Community** · [DLive/dsh-qqbot-community@c65813f](https://github.com/DLive/dsh-qqbot-community/commit/c65813fff5185f76e37f459f4daef575deaa8e6f) — 把 QQ 官方机器人对话接入 DSH 会话、提示、事件流和媒体处理。
  - **证据:** [manifest](https://github.com/DLive/dsh-qqbot-community/blob/c65813fff5185f76e37f459f4daef575deaa8e6f/package.json) → [patch](https://github.com/DLive/dsh-qqbot-community/blob/c65813fff5185f76e37f459f4daef575deaa8e6f/cordis.patch.yml) · **身份:** `dsh-qqbot-community`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `websocket` `session-data` `file-transfer` `prepublish-build` · **核验备注:** 公开包指向本仓库，源码使用凭据连接 QQ 并转发消息与媒体；未执行网络、文件、会话或 prepublish 操作。

- **DSH MCP Bridge** · [Edge-Echo/dsh-mcp-bridge@7768dc3](https://github.com/Edge-Echo/dsh-mcp-bridge/commit/7768dc3d3b7d65bca896a7c4eece170cb004439e) — 通过 DSH Web bundle 暴露 MCP servers 与工具的桥接层。
  - **证据:** [manifest](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/package.json) → [patch](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/cordis.patch.yml) · **身份:** `dsh-mcp-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `mcp` `subprocess` `external-tools` · **核验备注:** 已确认 Web bundle 结构；README 另有 headless 依赖限制记录。

- **DSH Voice Info** · [flyingtimes/dsh-voice-info@819bd53](https://github.com/flyingtimes/dsh-voice-info/commit/819bd534a00c810a7f72d9b787e71a760875eb12) — 通过本地 CLI 和蓝牙音箱播报带上下文的回合摘要与任务提醒。
  - **证据:** [manifest](https://github.com/flyingtimes/dsh-voice-info/blob/819bd534a00c810a7f72d9b787e71a760875eb12/package.json) → [patch](https://github.com/flyingtimes/dsh-voice-info/blob/819bd534a00c810a7f72d9b787e71a760875eb12/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `audio` `bluetooth` `subprocess` `session-data` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH API Quota** · [ganfne123/dsh-plugin-api-quota@a571a35](https://github.com/ganfne123/dsh-plugin-api-quota/commit/a571a35773d517aca7a3e2f3c28876919c9ea3eb) — 在侧栏查询并展示 DeepSeek API Key 余额与额度。
  - **证据:** [manifest](https://github.com/ganfne123/dsh-plugin-api-quota/blob/a571a35773d517aca7a3e2f3c28876919c9ea3eb/package.json) → [patch](https://github.com/ganfne123/dsh-plugin-api-quota/blob/a571a35773d517aca7a3e2f3c28876919c9ea3eb/cordis.patch.yml) · **身份:** `dsh-plugin-api-quota`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `credentials` `external-network` `account-balance` `client-injection` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Web Remote** · [godchen520/dsh-web-remote@c852cee](https://github.com/godchen520/dsh-web-remote/commit/c852cee2a882cc29544c9ceaef1844410246a042) — 通过 Cloudflare Quick Tunnel 或局域网 HTTP 提供带令牌代理和移动面板的远程访问。
  - **证据:** [manifest](https://github.com/godchen520/dsh-web-remote/blob/c852cee2a882cc29544c9ceaef1844410246a042/package.json) → [patch](https://github.com/godchen520/dsh-web-remote/blob/c852cee2a882cc29544c9ceaef1844410246a042/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `remote-access` `external-network` `authentication` `local-web-server` `cloudflare` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH YZJ Bridge** · [GuoxinShan/dsh-yzj@1415eae](https://github.com/GuoxinShan/dsh-yzj/commit/1415eaed78d170d90a4a7a1133373a03d6dcf612) — 连接云之家 CLI、模型工具、富卡片与工作区面板的 profile bundle。
  - **证据:** [manifest](https://github.com/GuoxinShan/dsh-yzj/blob/1415eaed78d170d90a4a7a1133373a03d6dcf612/packages/bundle/package.json) → [patch](https://github.com/GuoxinShan/dsh-yzj/blob/1415eaed78d170d90a4a7a1133373a03d6dcf612/packages/bundle/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `enterprise-messaging` `model-tools` `client-injection` `credentials` `subprocess` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Minecraft Launcher** · [hellosky983/dsh-mc-launcher@f68a7cd](https://github.com/hellosky983/dsh-mc-launcher/commit/f68a7cd5e9e8bec778c8db2550980edbe2ef87d3) — 带微软登录、版本安装与游戏启动能力的全屏 Minecraft 启动器。
  - **证据:** [manifest](https://github.com/hellosky983/dsh-mc-launcher/blob/f68a7cd5e9e8bec778c8db2550980edbe2ef87d3/package.json) → [patch](https://github.com/hellosky983/dsh-mc-launcher/blob/f68a7cd5e9e8bec778c8db2550980edbe2ef87d3/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `filesystem-write` `subprocess` `game-launcher` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Orbis Remote DSH** · [icodesign/orbis@b9a8aad](https://github.com/icodesign/orbis/commit/b9a8aad0caeb54a209edb884b1e6c9b96c4f7d6e) — 通过 Orbis 远程访问 DSH 工作区，并集成会话、目录、凭据与模型服务。
  - **证据:** [manifest](https://github.com/icodesign/orbis/blob/b9a8aad0caeb54a209edb884b1e6c9b96c4f7d6e/packages/orbis-remote-dsh/package.json) → [patch](https://github.com/icodesign/orbis/blob/b9a8aad0caeb54a209edb884b1e6c9b96c4f7d6e/packages/orbis-remote-dsh/cordis.patch.yml) · **身份:** `@orbisapp/remote-dsh`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `remote-access` `credentials` `session-data` `filesystem-write` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH ChatNode WeChat** · [Jesse-njx/dsh-chatnode-wechat@a724da3](https://github.com/Jesse-njx/dsh-chatnode-wechat/commit/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745) — 把微信聊天节点连接到 DeepSeek Harness 的集成。
  - **证据:** [manifest](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/package.json) → [patch](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/cordis.patch.yml) · **身份:** `dsh-chatnode-wechat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `messaging` `source-build` · **核验备注:** 源码安装可能执行 prepare 构建；README 声称支持 rc.6，但 manifest 未声明相关 peer。

- **DSH DeepSeek Billing** · [Jolly-J/dsh-deepseek-billing@1c4642a](https://github.com/Jolly-J/dsh-deepseek-billing/commit/1c4642aeb13df1c06f80f76fbb73a926bb8f593e) — 侧栏中的 DeepSeek 余额展示与会话费用估算器。
  - **证据:** [manifest](https://github.com/Jolly-J/dsh-deepseek-billing/blob/1c4642aeb13df1c06f80f76fbb73a926bb8f593e/package.json) → [patch](https://github.com/Jolly-J/dsh-deepseek-billing/blob/1c4642aeb13df1c06f80f76fbb73a926bb8f593e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-balance` `credentials` `session-data` `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Provider Quick Config** · [lo2589/deepseek-harness-provider@bff762a](https://github.com/lo2589/deepseek-harness-provider/commit/bff762ad720a8613a3283480fb120d602891685d) — 在发送键旁快速配置 Provider 路由、模型、API Key 与本地模型同步。
  - **证据:** [manifest](https://github.com/lo2589/deepseek-harness-provider/blob/bff762ad720a8613a3283480fb120d602891685d/dsh-provider-quick-config/package.json) → [patch](https://github.com/lo2589/deepseek-harness-provider/blob/bff762ad720a8613a3283480fb120d602891685d/dsh-provider-quick-config/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `provider-config` `credentials` `external-network` `configuration-write` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **MMX Quota Tool** · [mtty-ai/mmx-quota-tool@4b3a534](https://github.com/mtty-ai/mmx-quota-tool/commit/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c) — 面向 DSH Web 的 MiniMax Token 套餐额度指示器与详情面板。
  - **证据:** [manifest](https://github.com/mtty-ai/mmx-quota-tool/blob/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c/package.json) → [patch](https://github.com/mtty-ai/mmx-quota-tool/blob/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-quota` `credentials` `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Open Design DSH Runtime** · [nexu-io/open-design@62483a1](https://github.com/nexu-io/open-design/commit/62483a1947b5c5e7b3fffe24b52b685d93ad9209) — 通过 JSONL stdio 把 Open Design 连接到用户自有 DSH 的完整性固定 profile 运行时。
  - **证据:** [manifest](https://github.com/nexu-io/open-design/blob/62483a1947b5c5e7b3fffe24b52b685d93ad9209/packages/dsh-runtime/package.json) → [patch](https://github.com/nexu-io/open-design/blob/62483a1947b5c5e7b3fffe24b52b685d93ad9209/packages/dsh-runtime/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `stdio` `subprocess` `profile-bundle` `session-data` `integrity-check` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Gauge** · [noone89A/dsh-gauge@ca176d7](https://github.com/noone89A/dsh-gauge/commit/ca176d7658661c91bdea666102a51692fc3d88d6) — 面向 DSH Web 的缓存命中、Token、峰谷价格和会话费用统计。
  - **证据:** [manifest](https://github.com/noone89A/dsh-gauge/blob/ca176d7658661c91bdea666102a51692fc3d88d6/package.json) → [patch](https://github.com/noone89A/dsh-gauge/blob/ca176d7658661c91bdea666102a51692fc3d88d6/cordis.patch.yml) · **身份:** `dsh-gauge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `token-meter` `cost-estimation` `session-data` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Lark Bot** · [PlutoKeating/dsh-lark-bot@6a5be5b](https://github.com/PlutoKeating/dsh-lark-bot/commit/6a5be5b9b98fc2bb18395ea7c05d70a12fc6db53) — 带流式卡片、项目工作区、审批与调度的飞书和 Lark 桥接。
  - **证据:** [manifest](https://github.com/PlutoKeating/dsh-lark-bot/blob/6a5be5b9b98fc2bb18395ea7c05d70a12fc6db53/package.json) → [patch](https://github.com/PlutoKeating/dsh-lark-bot/blob/6a5be5b9b98fc2bb18395ea7c05d70a12fc6db53/cordis.patch.yml) · **身份:** `dsh-lark-bot`
  - **许可证:** repo `AGPL-3.0` / package `AGPL-3.0` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `enterprise-messaging` `credentials` `session-data` `approval-forwarding` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH WebGate** · [pppolf/dsh-webgate@9ac449a](https://github.com/pppolf/dsh-webgate/commit/9ac449aac9777879857dd67c9d827774c6df9413) — 通过局域网二维码、Cloudflare 隧道或带登录门户的 FRP 反向代理提供远程访问。
  - **证据:** [manifest](https://github.com/pppolf/dsh-webgate/blob/9ac449aac9777879857dd67c9d827774c6df9413/package.json) → [patch](https://github.com/pppolf/dsh-webgate/blob/9ac449aac9777879857dd67c9d827774c6df9413/cordis.patch.yml) · **身份:** `dsh-webgate`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `remote-access` `cloudflare` `reverse-proxy` `authentication` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH XiaoTangYuan Game** · [qimidandapigu/dsh-xiaotangyuan-game@52baef4](https://github.com/qimidandapigu/dsh-xiaotangyuan-game/commit/52baef4df34c961ee7914e75c02eba84b8838db9) — 从经校验的 Release 探测并安装受支持游戏适配器的游戏 AI 运行时。
  - **证据:** [manifest](https://github.com/qimidandapigu/dsh-xiaotangyuan-game/blob/52baef4df34c961ee7914e75c02eba84b8838db9/apps/harness-plugin/package.json) → [patch](https://github.com/qimidandapigu/dsh-xiaotangyuan-game/blob/52baef4df34c961ee7914e75c02eba84b8838db9/apps/harness-plugin/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `game-integration` `external-download` `filesystem-write` `subprocess` `credentials` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Call Me** · [radres/dsh-plugin-call-me@af1a21b](https://github.com/radres/dsh-plugin-call-me/commit/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c) — 拨打真实电话，让语音提问与回答能够引导当前 Agent 运行。
  - **证据:** [manifest](https://github.com/radres/dsh-plugin-call-me/blob/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c/package.json) → [patch](https://github.com/radres/dsh-plugin-call-me/blob/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `telephony` `audio` `credentials` `external-network` `agent-steering` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Notify Center** · [SingleOne/dsh-notify-center@50778f7](https://github.com/SingleOne/dsh-notify-center/commit/50778f749e6fe55f731767fb79c2b0f2158ad61e) — 面向 Agent、会话、标题与审批事件的原生桌面和 Webhook 通知。
  - **证据:** [manifest](https://github.com/SingleOne/dsh-notify-center/blob/50778f749e6fe55f731767fb79c2b0f2158ad61e/package.json) → [patch](https://github.com/SingleOne/dsh-notify-center/blob/50778f749e6fe55f731767fb79c2b0f2158ad61e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `desktop-notification` `webhook` `session-data` `approval-events` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Godot Bridge** · [Smalldy/godot-bridge@ac81927](https://github.com/Smalldy/godot-bridge/commit/ac81927d66d872db8f00a12431e748345b92dfc6) — 通过 TCP 交互服务和原生 Agent 工具启动并操控运行中的 Godot 游戏。
  - **证据:** [manifest](https://github.com/Smalldy/godot-bridge/blob/ac81927d66d872db8f00a12431e748345b92dfc6/package.json) → [patch](https://github.com/Smalldy/godot-bridge/blob/ac81927d66d872db8f00a12431e748345b92dfc6/cordis.patch.yml) · **身份:** `godot-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `godot` `tcp` `game-integration` `subprocess` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Bottom Info Bar** · [songoao25/bottom-info-bar@06a554e](https://github.com/songoao25/bottom-info-bar/commit/06a554e6862fa4194e48eda83626f09b449d89f6) — 在输入框下展示 Provider、模型、余额、峰谷价格、倒计时与费用汇总的状态栏。
  - **证据:** [manifest](https://github.com/songoao25/bottom-info-bar/blob/06a554e6862fa4194e48eda83626f09b449d89f6/plugin/package.json) → [patch](https://github.com/songoao25/bottom-info-bar/blob/06a554e6862fa4194e48eda83626f09b449d89f6/plugin/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `account-balance` `cost-estimation` `credentials` `session-data` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH MoodBall** · [sundusk/dsh-moodball@f6d1640](https://github.com/sundusk/dsh-moodball/commit/f6d1640e12232e21f71438ac7a6e68533e8af57f) — 把 Agent 活动状态提供给配套 macOS 桌面心情球。
  - **证据:** [manifest](https://github.com/sundusk/dsh-moodball/blob/f6d1640e12232e21f71438ac7a6e68533e8af57f/package.json) → [patch](https://github.com/sundusk/dsh-moodball/blob/f6d1640e12232e21f71438ac7a6e68533e8af57f/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `desktop-app` `session-data` `local-web-server` `macos` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH LLM USTC** · [USTC-XeF2/dsh-llm-ustc@6290fbb](https://github.com/USTC-XeF2/dsh-llm-ustc/commit/6290fbbebb05d0d3658af8fbc388c0918106714b) — 带 Provider 级 iWAN 隧道的 USTC 大模型服务接入。
  - **证据:** [manifest](https://github.com/USTC-XeF2/dsh-llm-ustc/blob/6290fbbebb05d0d3658af8fbc388c0918106714b/package.json) → [patch](https://github.com/USTC-XeF2/dsh-llm-ustc/blob/6290fbbebb05d0d3658af8fbc388c0918106714b/cordis.patch.yml) · **身份:** `dsh-llm-ustc`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `model-provider` `credentials` `network-tunnel` `external-network` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH OpenCode Go Usage** · [Xenia0922/dsh-opencode-go-usage@f7a7192](https://github.com/Xenia0922/dsh-opencode-go-usage/commit/f7a71928f0c5040a58cf45f6e41e4ac05da43317) — 展示 OpenCode Go 配额、逐请求用量与费用的可拖拽仪表盘。
  - **证据:** [manifest](https://github.com/Xenia0922/dsh-opencode-go-usage/blob/f7a71928f0c5040a58cf45f6e41e4ac05da43317/package.json) → [patch](https://github.com/Xenia0922/dsh-opencode-go-usage/blob/f7a71928f0c5040a58cf45f6e41e4ac05da43317/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-quota` `cost-estimation` `external-network` `client-injection` `identity-collision` · **核验备注:** npm 身份映射到其他仓库，因此本记录仅固定到文档中的本地源码，不主张该 npm 包。

- **DSH Codex** · [Yan-Zero/dsh-codex@621b218](https://github.com/Yan-Zero/dsh-codex/commit/621b218f51080413094bc1d16e37f37142afd89d) — 把 ChatGPT OAuth、Codex 模型、搜索、远程图片读取与图像生成接入 DSH。
  - **证据:** [manifest](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/package.json) → [patch](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/cordis.patch.yml) · **身份:** `dsh-codex`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `external-network` `credentials` `llm-call` `web-search` `image-generation` · **核验备注:** 固定 bundle 结构有效；宽泛的 DSH 通配 peer 以及 OAuth/模型网络访问仍需独立兼容性与信任审查。

- **DSH Bridges** · [yhlooo/dsh-bridges@3110789](https://github.com/yhlooo/dsh-bridges/commit/311078914fcb46d7008da56641501a984472c432) — 把 Claude Code、Codex、OpenCode、CodeBuddy、Pi、Gemini CLI 与 Cursor 的项目约定桥接到 DSH。
  - **证据:** [manifest](https://github.com/yhlooo/dsh-bridges/blob/311078914fcb46d7008da56641501a984472c432/package.json) → [patch](https://github.com/yhlooo/dsh-bridges/blob/311078914fcb46d7008da56641501a984472c432/cordis.patch.yml) · **身份:** `dsh-bridges`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `project-import` `filesystem-read` `filesystem-skill` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Cost Usage Status** · [Zenjibad/deepseek-cost-usage-status-plugin@3d6f68e](https://github.com/Zenjibad/deepseek-cost-usage-status-plugin/commit/3d6f68e569bdd74d974dc75544601dbe738dda3d) — 在输入区实时展示模型、峰谷价格、会话费用、烧钱速率与账户余额。
  - **证据:** [manifest](https://github.com/Zenjibad/deepseek-cost-usage-status-plugin/blob/3d6f68e569bdd74d974dc75544601dbe738dda3d/package.json) → [patch](https://github.com/Zenjibad/deepseek-cost-usage-status-plugin/blob/3d6f68e569bdd74d974dc75544601dbe738dda3d/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `account-balance` `cost-estimation` `credentials` `session-data` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH IM Gateway** · [zhuiyueya/dsh-im-gateway@f4b166d](https://github.com/zhuiyueya/dsh-im-gateway/commit/f4b166d5bb896d640515d7bfd887db37cc735f4a) — 统一接入二十余种消息渠道的会话、审批、白名单与配置网关。
  - **证据:** [manifest](https://github.com/zhuiyueya/dsh-im-gateway/blob/f4b166d5bb896d640515d7bfd887db37cc735f4a/package.json) → [patch](https://github.com/zhuiyueya/dsh-im-gateway/blob/f4b166d5bb896d640515d7bfd887db37cc735f4a/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `instant-messaging` `credentials` `session-data` `approval-forwarding` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Model Profile** · [ztlovelsw/dsh-model-profile@1e3ddd5](https://github.com/ztlovelsw/dsh-model-profile/commit/1e3ddd5eaca411cabee2b8b5b15fae3bf4b9e521) — 在 DSH Web 模型目录中编辑各模型的图像支持与推理强度。
  - **证据:** [manifest](https://github.com/ztlovelsw/dsh-model-profile/blob/1e3ddd5eaca411cabee2b8b5b15fae3bf4b9e521/package.json) → [patch](https://github.com/ztlovelsw/dsh-model-profile/blob/1e3ddd5eaca411cabee2b8b5b15fae3bf4b9e521/cordis.patch.yml) · **身份:** `@ztlovelsw/dsh-model-profile`
  - **许可证:** repo `unknown` / package `BSD-3-Clause` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `model-config` `configuration-write` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Notify Bell** · [ZYar-er/dsh-notify-bell@21c0747](https://github.com/ZYar-er/dsh-notify-bell/commit/21c0747d520635b54b771cca5107468f7ccba920) — 为完成、阻塞、权限、提问与错误提供语义化 BEL 或 WAV 通知。
  - **证据:** [manifest](https://github.com/ZYar-er/dsh-notify-bell/blob/21c0747d520635b54b771cca5107468f7ccba920/package.json) → [patch](https://github.com/ZYar-er/dsh-notify-bell/blob/21c0747d520635b54b771cca5107468f7ccba920/cordis.patch.yml) · **身份:** `dsh-notify-bell`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `audio` `desktop-notification` `agent-events` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH LAN Fix** · [zynieie/dsh-lan-plugin@1b16999](https://github.com/zynieie/dsh-lan-plugin/commit/1b169996787d222c217dde2ccb932b904087638c) — 为不安全浏览器上下文提供加密 RPC ID 回退的局域网兼容补丁。
  - **证据:** [manifest](https://github.com/zynieie/dsh-lan-plugin/blob/1b169996787d222c217dde2ccb932b904087638c/packages/dsh-lan-fix/package.json) → [patch](https://github.com/zynieie/dsh-lan-plugin/blob/1b169996787d222c217dde2ccb932b904087638c/packages/dsh-lan-fix/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `lan-access` `client-patch` `cryptography` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 技能与方法

- **Creght Skills** · [creght-dev/skills@5e20ab3](https://github.com/creght-dev/skills/commit/5e20ab3ab57643b2c50461d8e7007f927ff489df) — 以原生 DSH bundle 打包的 Agent skills 仓库。
  - **证据:** [manifest](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/package.json) → [patch](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `skills` `git-source` · **核验备注:** 未声明 DSH peer，因此兼容性仍未知。

- **DSH Plugin Guide** · [Fectivnfy112357/dsh-plugin-guide@48da363](https://github.com/Fectivnfy112357/dsh-plugin-guide/commit/48da36336f64a0d7f331ccdfbad1339649e84ff0) — 面向 DSH 与 Agent Plugins 双格式插件开发的指南与文件系统技能。
  - **证据:** [manifest](https://github.com/Fectivnfy112357/dsh-plugin-guide/blob/48da36336f64a0d7f331ccdfbad1339649e84ff0/package.json) → [patch](https://github.com/Fectivnfy112357/dsh-plugin-guide/blob/48da36336f64a0d7f331ccdfbad1339649e84ff0/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `plugin-development` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Aegis** · [GanyuanRan/Aegis@21b27d2](https://github.com/GanyuanRan/Aegis/commit/21b27d23598ef492834427e2a1381b744f66b787) — 面向规划、调试、提示词卫生、完成前验证与修复追踪的软件工程方法包。
  - **证据:** [manifest](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/package.json) → [patch](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/extensions/dsh/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `missing-package-license` · **核验备注:** 仓库许可证为 MIT；固定提交的包 manifest 未声明 license 字段。

- **Project AI Docs** · [igugyj/project-ai-docs@811e729](https://github.com/igugyj/project-ai-docs/commit/811e7294177a8769b3f2bcebf43e237058ba8e40) — 维护项目内 docs/.ai 知识库的 AI 文档协议技能。
  - **证据:** [manifest](https://github.com/igugyj/project-ai-docs/blob/811e7294177a8769b3f2bcebf43e237058ba8e40/package.json) → [patch](https://github.com/igugyj/project-ai-docs/blob/811e7294177a8769b3f2bcebf43e237058ba8e40/cordis.patch.yml) · **身份:** `project-ai-docs`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `filesystem-skill` `filesystem-read` `filesystem-write` `documentation-generation` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Ten Methods Tutor** · [jmwasky-creative/ten-methods-tutor@5e76ea2](https://github.com/jmwasky-creative/ten-methods-tutor/commit/5e76ea229179a3d3c1c1c86a1a3c78bf2c953722) — 使用确定性规则生成练习并向家长复盘的本地十法数学教练。
  - **证据:** [manifest](https://github.com/jmwasky-creative/ten-methods-tutor/blob/5e76ea229179a3d3c1c1c86a1a3c78bf2c953722/package.json) → [patch](https://github.com/jmwasky-creative/ten-methods-tutor/blob/5e76ea229179a3d3c1c1c86a1a3c78bf2c953722/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `education` `local-web-server` `session-data` `model-tools` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Gongwen Skill** · [linhut/gongwen-skill@e5a277e](https://github.com/linhut/gongwen-skill/commit/e5a277ea685e3462608d3f3f8c02f108fada642a) — 用于 GB/T 9704 格式检查、修复、优化、模板生成与版式注入的中文公文流程。
  - **证据:** [manifest](https://github.com/linhut/gongwen-skill/blob/e5a277ea685e3462608d3f3f8c02f108fada642a/package.json) → [patch](https://github.com/linhut/gongwen-skill/blob/e5a277ea685e3462608d3f3f8c02f108fada642a/cordis.patch.yml) · **身份:** `gongwen-skill`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `document-processing` `subprocess` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH HTB Skills** · [qingsiweisan/dsh-htb-skills@d04c3d0](https://github.com/qingsiweisan/dsh-htb-skills/commit/d04c3d04385cff83eb5db27a77faa7b3d0342125) — 带分层路由与隐藏参考层的 Hack The Box 渗透测试技能库。
  - **证据:** [manifest](https://github.com/qingsiweisan/dsh-htb-skills/blob/d04c3d04385cff83eb5db27a77faa7b3d0342125/package.json) → [patch](https://github.com/qingsiweisan/dsh-htb-skills/blob/d04c3d04385cff83eb5db27a77faa7b3d0342125/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `security-testing` `prompt-injection` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Wiki** · [skillre/dsh-wiki@b6dfa3a](https://github.com/skillre/dsh-wiki/commit/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4) — 把仓库型 Wiki 技能与文档流程接入 DSH 的 bundle。
  - **证据:** [manifest](https://github.com/skillre/dsh-wiki/blob/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4/package.json) → [patch](https://github.com/skillre/dsh-wiki/blob/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4/cordis.patch.yml) · **身份:** `dsh-wiki`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `documentation` `package-bundle` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Lazeword** · [xczhanjun/lazeword@c65f598](https://github.com/xczhanjun/lazeword/commit/c65f59886eecbf8ba7ce29d522493321a81c63a0) — 带 FSRS 调度、Anki 同步、学科词库与学习游戏的离线背词工具。
  - **证据:** [manifest](https://github.com/xczhanjun/lazeword/blob/c65f59886eecbf8ba7ce29d522493321a81c63a0/package.json) → [patch](https://github.com/xczhanjun/lazeword/blob/c65f59886eecbf8ba7ce29d522493321a81c63a0/cordis.patch.yml) · **身份:** `dsh-lazeword`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `education` `spaced-repetition` `anki` `browser-storage` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Math Research DSH** · [xsoc1/math-research-dsh@a5e6373](https://github.com/xsoc1/math-research-dsh/commit/a5e63739cd446c76258c050d9b053781dae9bae6) — 包含四个 Agent 技能、Lean 验证、测试与环境诊断的严谨数学研究套件。
  - **证据:** [manifest](https://github.com/xsoc1/math-research-dsh/blob/a5e63739cd446c76258c050d9b053781dae9bae6/package.json) → [patch](https://github.com/xsoc1/math-research-dsh/blob/a5e63739cd446c76258c050d9b053781dae9bae6/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `mathematics` `formal-verification` `environment-diagnostics` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Furrhaven Toolbox** · [YJLZSL/dsh-furrhaven-toolbox@473cdd6](https://github.com/YJLZSL/dsh-furrhaven-toolbox/commit/473cdd68f3271bab5db783b204d58ed01bbe3243) — 提供角色卡创作、校验、世界书模拟、正则测试、识图与扮演工具。
  - **证据:** [manifest](https://github.com/YJLZSL/dsh-furrhaven-toolbox/blob/473cdd68f3271bab5db783b204d58ed01bbe3243/dsh/plugin/fh-tools/package.json) → [patch](https://github.com/YJLZSL/dsh-furrhaven-toolbox/blob/473cdd68f3271bab5db783b204d58ed01bbe3243/dsh/plugin/fh-tools/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `character-authoring` `model-tools` `vision` `subprocess` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 发现与管理

- **DSH Plugin Market** · [2160039878-cyber/dsh-plugin-market@e897f67](https://github.com/2160039878-cyber/dsh-plugin-market/commit/e897f674cf1ef3f97d0afcac047542984a8b64d8) — 一个优先验证的 Web 插件目录，可搜索 GitHub 候选，并在结构检查后才允许复制安装命令。
  - **证据:** [manifest](https://github.com/2160039878-cyber/dsh-plugin-market/blob/e897f674cf1ef3f97d0afcac047542984a8b64d8/package.json) → [patch](https://github.com/2160039878-cyber/dsh-plugin-market/blob/e897f674cf1ef3f97d0afcac047542984a8b64d8/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `github-search` `external-network` `install-command-copy` `client-injection` `identity-collision` · **核验备注:** 已确认固定 Git 源 bundle；同名 npm 包指向另一仓库，因此不列 npm 身份，且未执行远程检查或安装操作。

- **DSH Plugin Hot Toggle** · [5102a/dsh-plugin-hot-toggle@15b5f24](https://github.com/5102a/dsh-plugin-hot-toggle/commit/15b5f24250b72b9028e89a5eed37d13cf7ce37e0) — 在 DSH Web 中启动或停止已安装的 Cordis 插件条目，并跨重启保存选择状态。
  - **证据:** [manifest](https://github.com/5102a/dsh-plugin-hot-toggle/blob/15b5f24250b72b9028e89a5eed37d13cf7ce37e0/package.json) → [patch](https://github.com/5102a/dsh-plugin-hot-toggle/blob/15b5f24250b72b9028e89a5eed37d13cf7ce37e0/cordis.patch.yml) · **身份:** `dsh-plugin-hot-toggle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `dynamic-loading` `package-management` `configuration-write` `client-injection` `high-trust-surface` · **核验备注:** 包与 patch 身份一致；未执行动态 Loader 控制、持久化配置写入或 prepare 构建。

- **DSH Capability Index** · [777-Zen/dsh-capability-index@08a4f48](https://github.com/777-Zen/dsh-capability-index/commit/08a4f488009d0e28f45f797a8c43296df4a9c8bc) — 向运行上下文注入逐步能力提示，让 Agent 在执行前从触发表索引中选择已安装插件。
  - **证据:** [manifest](https://github.com/777-Zen/dsh-capability-index/blob/08a4f488009d0e28f45f797a8c43296df4a9c8bc/package.json) → [patch](https://github.com/777-Zen/dsh-capability-index/blob/08a4f488009d0e28f45f797a8c43296df4a9c8bc/cordis.patch.yml) · **身份:** `dsh-capability-index`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `runtime-context` `prompt-injection` `plugin-inventory` · **核验备注:** 根 bundle 已与仓库中的演示夹具区分；没有 DSH peer 范围可用于确认运行兼容性。

- **DSH Safe Plugin Manager** · [AI-Scarlett/dsh-safe-plugin-manager@993cfd3](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/commit/993cfd3fe33227b422dba316c3d2f7d4fa1db565) — 一个仅面向 GitHub 的插件目录和受控 Profile 生命周期管理器，提供计划、确认、备份、检查与回滚。
  - **证据:** [manifest](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/blob/993cfd3fe33227b422dba316c3d2f7d4fa1db565/package.json) → [patch](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/blob/993cfd3fe33227b422dba316c3d2f7d4fa1db565/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `UNLICENSED` · 生命周期 `none` · peer range 混合
  - **能力信号:** `package-management` `filesystem-write` `subprocess` `external-network` `high-trust-surface` · **核验备注:** 该 private、UNLICENSED 包被记录为仅 GitHub 来源；未执行 Profile 修改、备份、子进程、远程目录或回滚。

- **DSH Hub Search** · [coderPerseus/dsh-hub@4dc755a](https://github.com/coderPerseus/dsh-hub/commit/4dc755a4e300d0994158405e86e6e0d9a9b7df09) — 增加用于搜索和检查远程 DSH Hub 目录中插件记录的工具。
  - **证据:** [manifest](https://github.com/coderPerseus/dsh-hub/blob/4dc755a4e300d0994158405e86e6e0d9a9b7df09/packages/dsh-plugin/package.json) → [patch](https://github.com/coderPerseus/dsh-hub/blob/4dc755a4e300d0994158405e86e6e0d9a9b7df09/packages/dsh-plugin/cordis.patch.yml) · **身份:** `@dshhubs/plugin-search`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `remote-catalog` `plugin-metadata` `install-command-data` · **核验备注:** 公开包身份与源码 bundle 一致，其工具读取远程目录元数据和安装文本；未执行请求或安装。

- **DSH Market** · [dsh-market/dsh-market@3188f46](https://github.com/dsh-market/dsh-market/commit/3188f465779d25dc2d41f53cdf21334bef517ac3) — 可在 Harness 内浏览、安装、更新和移除第三方包的插件市场。
  - **证据:** [manifest](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/package.json) → [patch](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/cordis.patch.yml) · **身份:** `dshmarket`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `package-management` `remote-registry` `high-trust-surface` · **核验备注:** 包管理控制使其成为高信任能力面；收录不代表背书。

- **DSH Skill Viewer** · [Fishquito7/dsh-skill-viewer@55c16e4](https://github.com/Fishquito7/dsh-skill-viewer/commit/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94) — 在 Web 设置页与 CLI 中列出、分域、启停、添加和删除技能。
  - **证据:** [manifest](https://github.com/Fishquito7/dsh-skill-viewer/blob/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94/package.json) → [patch](https://github.com/Fishquito7/dsh-skill-viewer/blob/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `skill-management` `filesystem-write` `client-injection` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Index** · [GGigHub/dsh-plugin-index@41fcb76](https://github.com/GGigHub/dsh-plugin-index/commit/41fcb7688e6d58d09dd953c87dfe1af54ce9a883) — 基于 GitHub 星标的插件浏览器，提供安装、卸载、更新与修复操作。
  - **证据:** [manifest](https://github.com/GGigHub/dsh-plugin-index/blob/41fcb7688e6d58d09dd953c87dfe1af54ce9a883/package.json) → [patch](https://github.com/GGigHub/dsh-plugin-index/blob/41fcb7688e6d58d09dd953c87dfe1af54ce9a883/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `external-network` `filesystem-write` `package-install` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Harness Flow Hub** · [Harzva/harness-flow-hub@25b23c2](https://github.com/Harzva/harness-flow-hub/commit/25b23c25198c8fafef166060bf054870511fc2fd) — 带事务式插件安装、回滚与浏览器界面的 DSH 内置流程中心原型。
  - **证据:** [manifest](https://github.com/Harzva/harness-flow-hub/blob/25b23c25198c8fafef166060bf054870511fc2fd/package.json) → [patch](https://github.com/Harzva/harness-flow-hub/blob/25b23c25198c8fafef166060bf054870511fc2fd/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-management` `package-install` `filesystem-write` `rollback` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Toggle** · [huntersxy/dsh-plugin-toggle@e11d57c](https://github.com/huntersxy/dsh-plugin-toggle/commit/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea) — 通过修改 profile patch 在设置页热启停第三方插件。
  - **证据:** [manifest](https://github.com/huntersxy/dsh-plugin-toggle/blob/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea/package.json) → [patch](https://github.com/huntersxy/dsh-plugin-toggle/blob/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea/cordis.patch.yml) · **身份:** `dsh-plugin-toggle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `filesystem-write` `configuration-edit` `hot-reload` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH 1024 Store** · [imsai-sh/awesome-deepseek-harness-plugins@7b58110](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/commit/7b58110d9faa35c31c49c634b3d69236c1331b28) — 在产品内浏览和安装 1024 Store 插件目录。
  - **证据:** [manifest](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/blob/7b58110d9faa35c31c49c634b3d69236c1331b28/packages/dsh-1024store/package.json) → [patch](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/blob/7b58110d9faa35c31c49c634b3d69236c1331b28/packages/dsh-1024store/cordis.patch.yml) · **身份:** `dsh-1024store`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `package-install` `external-network` `filesystem-write` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Web Hot** · [jifeng15/dsh-web-restart@8ae1421](https://github.com/jifeng15/dsh-web-restart/commit/8ae14211b89e45d398236ad678e356606df9584a) — 无需重启即可安装、更新、启停并自愈 Web 插件的宿主生命周期层。
  - **证据:** [manifest](https://github.com/jifeng15/dsh-web-restart/blob/8ae14211b89e45d398236ad678e356606df9584a/hot-plugin/package.json) → [patch](https://github.com/jifeng15/dsh-web-restart/blob/8ae14211b89e45d398236ad678e356606df9584a/hot-plugin/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-management` `package-install` `filesystem-write` `hot-reload` `self-heal` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Market** · [losebird/dsh-plugin-market@e441cdb](https://github.com/losebird/dsh-plugin-market/commit/e441cdb14c6152c44c3bd7e573f7796695fe96cb) — 支持 bundle 与 ZIP 一键安装的社区插件市场弹窗。
  - **证据:** [manifest](https://github.com/losebird/dsh-plugin-market/blob/e441cdb14c6152c44c3bd7e573f7796695fe96cb/package.json) → [patch](https://github.com/losebird/dsh-plugin-market/blob/e441cdb14c6152c44c3bd7e573f7796695fe96cb/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `package-install` `filesystem-write` `identity-collision` `client-injection` · **核验备注:** npm 名称映射到其他仓库，因此本记录仅固定到作者文档中的 Git 源且不主张该 npm 身份；未执行安装。

- **DSH Plugin Hub** · [qomob/dsh@9b80e51](https://github.com/qomob/dsh/commit/9b80e51ff4371d41b33e5497b82f51ae08fe1699) — 提供内嵌与在线 GitHub 插件搜索、详情核验、审批安装和目录标签页。
  - **证据:** [manifest](https://github.com/qomob/dsh/blob/9b80e51ff4371d41b33e5497b82f51ae08fe1699/plugin/package.json) → [patch](https://github.com/qomob/dsh/blob/9b80e51ff4371d41b33e5497b82f51ae08fe1699/plugin/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `external-network` `package-install` `approval-gate` `identity-collision` · **核验备注:** npm 名称映射到其他仓库，因此本记录仅固定到文档中的 Git 子目录源码，不主张该包身份。

- **DSH Extension Hub** · [Relistencode/dsh-extension-hub@3f9726e](https://github.com/Relistencode/dsh-extension-hub/commit/3f9726ea1ffe8cf12f274ce69ff02713807418a6) — 管理技能、MCP 服务、插件、导入、市场发现与更新的 Web 和 CLI 中心。
  - **证据:** [manifest](https://github.com/Relistencode/dsh-extension-hub/blob/3f9726ea1ffe8cf12f274ce69ff02713807418a6/package.json) → [patch](https://github.com/Relistencode/dsh-extension-hub/blob/3f9726ea1ffe8cf12f274ce69ff02713807418a6/cordis.patch.yml) · **身份:** `dsh-extension-hub`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `skill-management` `mcp` `package-install` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Marketplace** · [Scorp1o117/dsh-plugin-marketplace@d4f8b24](https://github.com/Scorp1o117/dsh-plugin-marketplace/commit/d4f8b245f00142024328bc4804e1f8b93882a236) — 在设置页浏览、搜索并按热度排列 GitHub dsh-plugin topic 的插件市场。
  - **证据:** [manifest](https://github.com/Scorp1o117/dsh-plugin-marketplace/blob/d4f8b245f00142024328bc4804e1f8b93882a236/package.json) → [patch](https://github.com/Scorp1o117/dsh-plugin-marketplace/blob/d4f8b245f00142024328bc4804e1f8b93882a236/cordis.patch.yml) · **身份:** `dsh-plugin-marketplace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-marketplace` `github-search` `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Fish Hub** · [stvlynn/dsh.fish@d81793b](https://github.com/stvlynn/dsh.fish/commit/d81793bcf57a8949ae9b24f2c935e01c222e4ce6) — 通过认证访问 dsh.fish 并搜索、安装 Harness 工件的工具。
  - **证据:** [manifest](https://github.com/stvlynn/dsh.fish/blob/d81793bcf57a8949ae9b24f2c935e01c222e4ce6/packages/dsh-plugin-hub/package.json) → [patch](https://github.com/stvlynn/dsh.fish/blob/d81793bcf57a8949ae9b24f2c935e01c222e4ce6/packages/dsh-plugin-hub/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `artifact-registry` `credentials` `external-network` `package-install` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Suite All** · [whyihaveyou/dsh-suite@0165407](https://github.com/whyihaveyou/dsh-suite/commit/01654079afbde1d62c45fac3cc49716e16f27996) — 聚合插件管理、通知、会话导出与团队看板的一体化 DSH Suite bundle。
  - **证据:** [manifest](https://github.com/whyihaveyou/dsh-suite/blob/01654079afbde1d62c45fac3cc49716e16f27996/packages/all/package.json) → [patch](https://github.com/whyihaveyou/dsh-suite/blob/01654079afbde1d62c45fac3cc49716e16f27996/packages/all/cordis.patch.yml) · **身份:** `@dsh-suite/all`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `aggregate-bundle` `plugin-management` `notification` `session-export` `kanban` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Store** · [ZASENJC/dsh-plugins-store@fa5829a](https://github.com/ZASENJC/dsh-plugins-store/commit/fa5829a4568ce0822de578424b53faf0c4fd6cb2) — 带固定来源核验、风险确认、安装计划、更新与卸载的原生插件目录浏览器。
  - **证据:** [manifest](https://github.com/ZASENJC/dsh-plugins-store/blob/fa5829a4568ce0822de578424b53faf0c4fd6cb2/packages/dsh-plugin-store/package.json) → [patch](https://github.com/ZASENJC/dsh-plugins-store/blob/fa5829a4568ce0822de578424b53faf0c4fd6cb2/packages/dsh-plugin-store/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `plugin-marketplace` `package-install` `approval-gate` `external-network` `identity-collision` · **核验备注:** npm 身份映射到其他仓库，因此本记录固定到文档中的 Git 子目录源码，不主张该包。

### 暂缓队列

这些候选与 DSH 有关，但在记录的阻塞修复前不会获得安装推荐。

- **SandBase Harness** · [sandbaseai/sandbase-harness@2bb788d](https://github.com/sandbaseai/sandbase-harness/commit/2bb788d9ec847d5af8996c6f682a33f9f0734b73) — 带 DSH patch 示例并连接外部服务凭据的托管 Agent 集成。
  - **证据:** [manifest](https://github.com/sandbaseai/sandbase-harness/blob/2bb788d9ec847d5af8996c6f682a33f9f0734b73/package.json) → [patch](https://github.com/sandbaseai/sandbase-harness/blob/2bb788d9ec847d5af8996c6f682a33f9f0734b73/examples/deepseek-harness/cordis.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `mcp` `external-network` `credentials` `identity-collision` · **核验备注:** 因公开分发身份不明确且存在名称冲突而暂缓。

- **DSH Agent Teams** · [NanmiCoder/dsh-agent-teams@99b1e8a](https://github.com/NanmiCoder/dsh-agent-teams/commit/99b1e8a01b15eaca74f8adc3e8730db18f8d3912) — 带持久化状态与子进程协调的团队式 Agent 编排。
  - **证据:** [manifest](https://github.com/NanmiCoder/dsh-agent-teams/blob/99b1e8a01b15eaca74f8adc3e8730db18f8d3912/package.json) → [patch](https://github.com/NanmiCoder/dsh-agent-teams/blob/99b1e8a01b15eaca74f8adc3e8730db18f8d3912/cordis.patch.yml) · **身份:** `@nanmicoder/dsh-agent-teams`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 落后于 rc.6 基线
  - **能力信号:** `subprocess` `filesystem-write` `stale-peer-range` · **核验备注:** 大多数 DSH peer range 仍指向 rc.1，落后于 rc.6 核验基线，因此暂缓。

- **DSH Memory Evolve** · [csyangwen/dsh-memory-evolve@ce7f0fa](https://github.com/csyangwen/dsh-memory-evolve/commit/ce7f0faa0e0240f117c29795e9224c0d9ed18183) — 面向 DSH 的记忆与编排客户端，但固定 manifest 缺少原生 bundle 声明。
  - **证据:** [manifest](https://github.com/csyangwen/dsh-memory-evolve/blob/ce7f0faa0e0240f117c29795e9224c0d9ed18183/package.json) → 无 patch · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `missing-bundle` `private-package` `external-ai` · **核验备注:** 存在 dsh.client，但缺少 dsh.bundle 与引用 patch，因此暂缓。

- **DSH GitHub Login** · [Noob-stupid/dsh-github-login@0057f05](https://github.com/Noob-stupid/dsh-github-login/commit/0057f05396bb8eaf2c64505a8f50f905c50f0126) — GitHub 登录集成，但 package 名称与 patch row 身份不一致。
  - **证据:** [manifest](https://github.com/Noob-stupid/dsh-github-login/blob/0057f05396bb8eaf2c64505a8f50f905c50f0126/package.json) → [patch](https://github.com/Noob-stupid/dsh-github-login/blob/0057f05396bb8eaf2c64505a8f50f905c50f0126/cordis.patch.yml) · **身份:** `dsh-github-login`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `identity-mismatch` `authentication` `private-package` · **核验备注:** 需先统一 dsh-github-login 与 @deepseek-ai/dsh-github-login 的身份并复核，故暂缓。

- **DSH Find Plugin** · [awesome-dsh-plugin/dsh-find-plugin@e75dc2e](https://github.com/awesome-dsh-plugin/dsh-find-plugin/commit/e75dc2e865c3cfbfd336f7b4bb753fec25d373e1) — 让 Agent 在对话内搜索 DSH 插件生态的工具。
  - **证据:** [manifest](https://github.com/awesome-dsh-plugin/dsh-find-plugin/blob/e75dc2e865c3cfbfd336f7b4bb753fec25d373e1/package.json) → [patch](https://github.com/awesome-dsh-plugin/dsh-find-plugin/blob/e75dc2e865c3cfbfd336f7b4bb753fec25d373e1/cordis.patch.yml) · **身份:** `dsh-find-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `stale-peer-range` · **核验备注:** @deepseek-ai/dsh-tools 仍指向 rc.1，落后于 rc.6 核验基线，因此暂缓。

- **Tydora** · [zuorn/Tydora@23c4546](https://github.com/zuorn/Tydora/commit/23c45464a280876ad85317edbd9cbe517157872c) — 包含嵌入式 DSH bundle 入口的 Tauri Markdown 工作区。
  - **证据:** [manifest](https://github.com/zuorn/Tydora/blob/23c45464a280876ad85317edbd9cbe517157872c/package.json) → [patch](https://github.com/zuorn/Tydora/blob/23c45464a280876ad85317edbd9cbe517157872c/cordis.patch.yml) · **身份:** `tydora`
  - **许可证:** repo `Apache-2.0` / package `unknown` · 生命周期 `postinstall` · 兼容性未知
  - **能力信号:** `embedded-source` `external-application` `filesystem` `subprocess` · **核验备注:** 暂缓：根包是桌面应用，patch 加载本地 TypeScript 源码，postinstall 会运行 patch-package，且未确认独立安装身份。

- **DSH Autonomy** · [abab996/dsh-autonomy@94f64d3](https://github.com/abab996/dsh-autonomy/commit/94f64d33135f9fce19b7d6a00491ed4ce83e5da4) — 为每个会话增加自主程度档位，通过系统提示指令从严格行为调整到更探索性的行为。
  - **证据:** [manifest](https://github.com/abab996/dsh-autonomy/blob/94f64d33135f9fce19b7d6a00491ed4ce83e5da4/packages/dsh-autonomy/package.json) → [patch](https://github.com/abab996/dsh-autonomy/blob/94f64d33135f9fce19b7d6a00491ed4ce83e5da4/packages/dsh-autonomy/cordis.patch.yml) · **身份:** `dsh-autonomy`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `system-prompt` `session-data` `client-injection` `identity-collision` · **核验备注:** 暂缓：文档中的无作用域 npm 身份目前指向 JinkaiLiu/dsh-autonomy，而非本仓库；本地源码安装另有记录。

- **DSH Habits** · [DimitriLIAN/dsh-habits@f5e9c6f](https://github.com/DimitriLIAN/dsh-habits/commit/f5e9c6f718fa5b34fcce0fcb432573bbde666303) — 从 DSH Web 设置中编辑用户全局 AGENTS.md 指令，使习惯内容注入每个会话。
  - **证据:** [manifest](https://github.com/DimitriLIAN/dsh-habits/blob/f5e9c6f718fa5b34fcce0fcb432573bbde666303/package.json) → [patch](https://github.com/DimitriLIAN/dsh-habits/blob/f5e9c6f718fa5b34fcce0fcb432573bbde666303/cordis.patch.yml) · **身份:** `dsh-habits`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `global-instructions` `filesystem-write` `client-injection` `prepare-build` `unresolved-install-identity` · **核验备注:** 暂缓：README 安装目标仍含占位作者，且 npm 身份无法解析；未执行其 prepare 构建或全局指令写入。

- **DSH Path Browser** · [dkjsiogu/dsh-path-browser@471496f](https://github.com/dkjsiogu/dsh-path-browser/commit/471496f786657a2dedd9280a6a77acf8e30cc122) — 从 Web 输入区浏览主机文件与文件夹，并插入选中的绝对路径。
  - **证据:** [manifest](https://github.com/dkjsiogu/dsh-path-browser/blob/471496f786657a2dedd9280a6a77acf8e30cc122/package.json) → [patch](https://github.com/dkjsiogu/dsh-path-browser/blob/471496f786657a2dedd9280a6a77acf8e30cc122/cordis.patch.yml) · **身份:** `dsh-path-browser`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `filesystem` `absolute-path` `client-injection` `prepare-build` `unresolved-install-identity` · **核验备注:** 暂缓：固定源码没有 README 或作者记录的公开安装身份，且 npm 名称无法解析；未执行 prepare hook 或文件系统访问。

- **DSH Shutup** · [DosterBool/dsh-shutup@cc19b87](https://github.com/DosterBool/dsh-shutup/commit/cc19b8744c7c6520bc764b7678861746d8331c87) — 增加可配置快捷键，用于中断模型生成并以修正提示引导当前回合。
  - **证据:** [manifest](https://github.com/DosterBool/dsh-shutup/blob/cc19b8744c7c6520bc764b7678861746d8331c87/package.json) → [patch](https://github.com/DosterBool/dsh-shutup/blob/cc19b8744c7c6520bc764b7678861746d8331c87/cordis.patch.yml) · **身份:** `dsh-shutup`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `model-interrupt` `prompt-steering` `session-data` `browser-storage` `unresolved-install-identity` · **核验备注:** 暂缓：固定提交中未找到公开安装文档或可解析的包目标；未执行提示引导、会话访问或浏览器存储。

- **DSH Precedent** · [dshplugin-me/dsh-precedent@1a84adf](https://github.com/dshplugin-me/dsh-precedent/commit/1a84adf50a126b6869db111cc8bceba90f141ceb) — 从现有 DSH 会话日志构建带引用的工作记忆台账，以呈现过去成功的方法。
  - **证据:** [manifest](https://github.com/dshplugin-me/dsh-precedent/blob/1a84adf50a126b6869db111cc8bceba90f141ceb/package.json) → [patch](https://github.com/dshplugin-me/dsh-precedent/blob/1a84adf50a126b6869db111cc8bceba90f141ceb/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-log` `working-memory` `private-package` `unreleased-tag` `unresolved-install-identity` · **核验备注:** 暂缓：作者明确说明文档中的 v0.1.0 Git 目标尚未打 tag、当前无法解析；未执行会话日志访问。

- **DSH Diff Approval** · [9087/dsh-diff-approval@5966410](https://github.com/9087/dsh-diff-approval/commit/5966410671b3daa8ee92f63b7082e8a949b4db0d) — 记录 edit 与 write 结果、展示整文件差异并支持逐项保留或回退的待处理改动面板。
  - **证据:** [manifest](https://github.com/9087/dsh-diff-approval/blob/5966410671b3daa8ee92f63b7082e8a949b4db0d/package.json) → [patch](https://github.com/9087/dsh-diff-approval/blob/5966410671b3daa8ee92f63b7082e8a949b4db0d/cordis.patch.yml) · **身份:** `dsh-diff-approval`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem-write` `file-delete` `session-data` `client-injection` `unresolved-install-identity` · **核验备注:** 暂缓：文档中的 npm 目标无法解析，且未找到独立的公开 Git 源安装命令；回退可能覆盖或删除文件，未执行该操作。

- **Helm-D Security Router** · [ADWMC/helm-d@beef627](https://github.com/ADWMC/helm-d/commit/beef627794e518e19a2a3c6937efb7ebaecb7d72) — 九 bundle 安全分析套件的路由组件，覆盖 Android、Web、原生、协议、恶意软件、AI 安全与证据工作流。
  - **证据:** [manifest](https://github.com/ADWMC/helm-d/blob/beef627794e518e19a2a3c6937efb7ebaecb7d72/packages/router/package.json) → [patch](https://github.com/ADWMC/helm-d/blob/beef627794e518e19a2a3c6937efb7ebaecb7d72/packages/router/cordis.patch.yml) · **身份:** `@dsh-security/router`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `security-analysis` `filesystem-read` `tool-routing` `prepare-build` `unresolved-install-identity` · **核验备注:** 暂缓：审核时文档所列九个 scoped npm 包均无法解析，包 manifest 也未声明许可证；未运行安装器或工具。

- **FlowDeck DSH** · [heidi-dang/flowdeck-dsh@225f080](https://github.com/heidi-dang/flowdeck-dsh/commit/225f0806d92a818f71d8b2c618cf41ea6eed3c7d) — 面向 FlowDeck 工作流的 DSH 集成与执行宿主。
  - **证据:** [manifest](https://github.com/heidi-dang/flowdeck-dsh/blob/225f0806d92a818f71d8b2c618cf41ea6eed3c7d/package.json) → [patch](https://github.com/heidi-dang/flowdeck-dsh/blob/225f0806d92a818f71d8b2c618cf41ea6eed3c7d/cordis.patch.yml) · **身份:** `@heidi-dang/flowdeck-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `workflow-runtime` `subprocess` `filesystem-write` `prepublish-build` · **核验备注:** 因声明的 npm 身份无法解析，且固定版本文档未提供可复现的公开 Git 源 DSH 安装方式而暂缓。

- **DSH Desktop** · [IriskaDev/dsh-desktop@9ad9be1](https://github.com/IriskaDev/dsh-desktop/commit/9ad9be1dfa866115990933abdf94ee67e8f0d542) — 内嵌 DSH bundle 与 patch 的桌面应用封装。
  - **证据:** [manifest](https://github.com/IriskaDev/dsh-desktop/blob/9ad9be1dfa866115990933abdf94ee67e8f0d542/package.json) → [patch](https://github.com/IriskaDev/dsh-desktop/blob/9ad9be1dfa866115990933abdf94ee67e8f0d542/cordis.patch.yml) · **身份:** `dsh-desktop`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `desktop-app` `private-package` `prepare-build` `identity-collision` · **核验备注:** 因 npm 名称映射到其他仓库、根包属于私有桌面应用且未执行 prepare 钩子而暂缓。

- **DSH Windows Manager Bridge** · [kanneiren/dsh-windows-manager@e9bb4c0](https://github.com/kanneiren/dsh-windows-manager/commit/e9bb4c02faad513b5c49928ae0c06b5c6fafb843) — 嵌入 DSH Windows Manager 应用的带认证命名管道运行时桥接。
  - **证据:** [manifest](https://github.com/kanneiren/dsh-windows-manager/blob/e9bb4c02faad513b5c49928ae0c06b5c6fafb843/plugins/deepseek-harness-web/package.json) → [patch](https://github.com/kanneiren/dsh-windows-manager/blob/e9bb4c02faad513b5c49928ae0c06b5c6fafb843/plugins/deepseek-harness-web/cordis.patch.yml) · **身份:** `dsh-windows-manager-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-app` `named-pipe` `authentication` `embedded-bundle` · **核验备注:** 因该桥接随管理器应用分发，且未确认独立的公开包到源码安装身份而暂缓。

- **DSH Zhihu Dashboard** · [kexuejin/dsh-zhihu-dashboard@791cfd3](https://github.com/kexuejin/dsh-zhihu-dashboard/commit/791cfd394d61fbed2899fc3c9264befdad3a2682) — 用于知乎热榜、关注流、内容追踪、搜索和选题提炼的仪表盘与工具集。
  - **证据:** [manifest](https://github.com/kexuejin/dsh-zhihu-dashboard/blob/791cfd394d61fbed2899fc3c9264befdad3a2682/package.json) → [patch](https://github.com/kexuejin/dsh-zhihu-dashboard/blob/791cfd394d61fbed2899fc3c9264befdad3a2682/cordis.patch.yml) · **身份:** `dsh-zhihu-dashboard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `web-search` `external-network` `model-tools` `client-injection` · **核验备注:** 因文档中的 npm 身份无法解析，且未找到独立可复现的 Git 源安装命令而暂缓。

- **DSH Processes** · [liuqh16/dsh-processes@a4dd651](https://github.com/liuqh16/dsh-processes/commit/a4dd6511a9d6aaea38625f7054ab5c0d0877cc4c) — 用于后台进程管理、输出检查和完成通知的工具与命令。
  - **证据:** [manifest](https://github.com/liuqh16/dsh-processes/blob/a4dd6511a9d6aaea38625f7054ab5c0d0877cc4c/package.json) → [patch](https://github.com/liuqh16/dsh-processes/blob/a4dd6511a9d6aaea38625f7054ab5c0d0877cc4c/cordis.patch.yml) · **身份:** `dsh-processes`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 落后于 rc.6 基线
  - **能力信号:** `subprocess` `process-management` `session-data` `prepare-build` · **核验备注:** 因其 DSH peer 依赖面向 rc.5 而非 rc.6 审核基线而暂缓。

- **DSH Marketplace** · [lmy414/dshregistry@c558602](https://github.com/lmy414/dshregistry/commit/c558602e21ff1c7554a15e318544304e3f7838e0) — 用于浏览、风险确认、安装和卸载索引插件的内嵌市场界面。
  - **证据:** [manifest](https://github.com/lmy414/dshregistry/blob/c558602e21ff1c7554a15e318544304e3f7838e0/plugin/package.json) → [patch](https://github.com/lmy414/dshregistry/blob/c558602e21ff1c7554a15e318544304e3f7838e0/plugin/cordis.patch.yml) · **身份:** `dsh-marketplace`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `package-install` `filesystem-write` `private-package` · **核验备注:** 因已发布包缺少仓库映射，且私有嵌套源码没有独立说明的公开安装路径而暂缓。

- **DSH Desktop Hub** · [MarecGents/deepseek-harness-hub@43f64fb](https://github.com/MarecGents/deepseek-harness-hub/commit/43f64fb69736944a47deed139297929dc0f8491e) — 带托盘控制、主题同步、窗口记忆与侧边栏的 WebView2 桌面外壳。
  - **证据:** [manifest](https://github.com/MarecGents/deepseek-harness-hub/blob/43f64fb69736944a47deed139297929dc0f8491e/package.json) → [patch](https://github.com/MarecGents/deepseek-harness-hub/blob/43f64fb69736944a47deed139297929dc0f8491e/cordis.patch.yml) · **身份:** `@marecgents/dsh-hub`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `postinstall` · 落后于 rc.6 基线
  - **能力信号:** `desktop-app` `native-shell` `postinstall` `filesystem-write` `client-injection` · **核验备注:** 因多个 DSH peer 仍面向 rc.1，且安装会通过 postinstall 执行原生桌面设置而暂缓。

- **DSH API Usage** · [marvina/dsh-api-usage@bc47b5d](https://github.com/marvina/dsh-api-usage/commit/bc47b5dc87a559e50177878097146e2d3652bcce) — 用于展示 API 余额与 Token 用量的侧栏面板。
  - **证据:** [manifest](https://github.com/marvina/dsh-api-usage/blob/bc47b5dc87a559e50177878097146e2d3652bcce/package.json) → [patch](https://github.com/marvina/dsh-api-usage/blob/bc47b5dc87a559e50177878097146e2d3652bcce/cordis.patch.yml) · **身份:** `dsh-api-usage`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `credentials` `account-balance` `token-meter` `external-network` `prepublish-build` · **核验备注:** 因文档中的 npm 身份无法解析，且未找到独立可复现的 Git 源安装命令而暂缓。

- **DSH Feishu Bridge** · [minyang2020/dsh-feishu-bridge@034f5f6](https://github.com/minyang2020/dsh-feishu-bridge/commit/034f5f6f38b0780665690d5c1fc4bfc95c6308d2) — 支持独立用户会话、审批、提问和长连接消息的飞书双向桥接。
  - **证据:** [manifest](https://github.com/minyang2020/dsh-feishu-bridge/blob/034f5f6f38b0780665690d5c1fc4bfc95c6308d2/package.json) → [patch](https://github.com/minyang2020/dsh-feishu-bridge/blob/034f5f6f38b0780665690d5c1fc4bfc95c6308d2/cordis.patch.yml) · **身份:** `feishu-dsh-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `enterprise-messaging` `credentials` `session-data` `approval-forwarding` `external-network` · **核验备注:** 因文档中的 DSH 包身份无法解析，源码检出说明只覆盖独立 sidecar，未提供可复现的 Git 源 DSH bundle 安装而暂缓。

- **DSH MCP Adapter** · [NexusAgentX/dsh-mcp-adapter@39c5aab](https://github.com/NexusAgentX/dsh-mcp-adapter/commit/39c5aab08d273b23ad61e7a1a75acdc768dbfefe) — 用单个代理工具暴露 MCP 服务，避免把所有服务 schema 注入上下文。
  - **证据:** [manifest](https://github.com/NexusAgentX/dsh-mcp-adapter/blob/39c5aab08d273b23ad61e7a1a75acdc768dbfefe/package.json) → [patch](https://github.com/NexusAgentX/dsh-mcp-adapter/blob/39c5aab08d273b23ad61e7a1a75acdc768dbfefe/cordis.patch.yml) · **身份:** `dsh-mcp-adapter`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `mcp` `model-tools` `context-reduction` `prepack-build` · **核验备注:** 因其 DSH command 与 tool peer 面向 rc.1 而非 rc.6 审核基线而暂缓。

- **DSH Codex Shim** · [OpenTritium/dsh-codex-shim@2522f9a](https://github.com/OpenTritium/dsh-codex-shim/commit/2522f9a77fb03f15f36b32c158f4238fadf82462) — 为适配模型模拟路由感知的 Codex 环境，以改善工具调用可靠性。
  - **证据:** [manifest](https://github.com/OpenTritium/dsh-codex-shim/blob/2522f9a77fb03f15f36b32c158f4238fadf82462/package.json) → [patch](https://github.com/OpenTritium/dsh-codex-shim/blob/2522f9a77fb03f15f36b32c158f4238fadf82462/cordis.patch.yml) · **身份:** `@opentritium/dsh-codex-shim`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 落后于 rc.6 基线
  - **能力信号:** `environment-simulation` `agent-steering` `sandbox-policy` `prepare-build` · **核验备注:** 因全部 DSH peer 面向 rc.5，且安装需要预构建 tarball 与精确宿主补丁而暂缓。

- **DSH MCP Support** · [royenheart/dsh-plugin-mcp-support@e0e95e4](https://github.com/royenheart/dsh-plugin-mcp-support/commit/e0e95e4bd155694898353d3e030f31a507a5d853) — 基于设置驱动、封装 DSH 原生 MCP 客户端的轻量桥接。
  - **证据:** [manifest](https://github.com/royenheart/dsh-plugin-mcp-support/blob/e0e95e4bd155694898353d3e030f31a507a5d853/package.json) → [patch](https://github.com/royenheart/dsh-plugin-mcp-support/blob/e0e95e4bd155694898353d3e030f31a507a5d853/cordis.patch.yml) · **身份:** `@royenheart/dsh-plugin-mcp-support`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `mcp` `configuration-write` `local-installer` · **核验备注:** 因原生 dsh-mcp-client peer 面向 rc.5、周边设置 peer 面向 rc.6，且公开包身份未解析而暂缓。

- **DSH Yi** · [Sanchaji/dsh-yi@e634e91](https://github.com/Sanchaji/dsh-yi/commit/e634e9198f08a8517a20d76cb6c4bfdb178b9408) — 带 Web 入口和会话结果的易经占卜工具。
  - **证据:** [manifest](https://github.com/Sanchaji/dsh-yi/blob/e634e9198f08a8517a20d76cb6c4bfdb178b9408/package.json) → [patch](https://github.com/Sanchaji/dsh-yi/blob/e634e9198f08a8517a20d76cb6c4bfdb178b9408/cordis.patch.yml) · **身份:** `dsh-yi`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `divination` `model-tools` `session-data` `client-injection` · **核验备注:** 因 npm 身份无法解析，且 Git 安装目标仍是作者占位符而非当前固定仓库而暂缓。

- **DSH Wallpaper Engine** · [TianYa-DAO/dsh-wallpaper-engine@f8f5fa4](https://github.com/TianYa-DAO/dsh-wallpaper-engine/commit/f8f5fa47170d2b6b2cca257be98a02da671d5ab6) — 面向桌面外壳的本地 Wallpaper Engine 库、背景层与原生场景面板。
  - **证据:** [manifest](https://github.com/TianYa-DAO/dsh-wallpaper-engine/blob/f8f5fa47170d2b6b2cca257be98a02da671d5ab6/package.json) → [patch](https://github.com/TianYa-DAO/dsh-wallpaper-engine/blob/f8f5fa47170d2b6b2cca257be98a02da671d5ab6/cordis.patch.yml) · **身份:** `dsh-wallpaper-engine`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 落后于 rc.6 基线
  - **能力信号:** `desktop-app` `filesystem-read` `native-bridge` `theme` `prepare-build` · **核验备注:** 因全部 DSH Web peer 面向 rc.5 而非 rc.6 审核基线，且包身份尚未发布而暂缓。

- **DSH HTML Parse** · [uckkk/dsh-html-parse@69fc2c5](https://github.com/uckkk/dsh-html-parse/commit/69fc2c5362dfd4beaae94f02e8c9f2f3e7f05643) — 从 HTML 提取标题、元数据、标题层级、链接、表格与纯文本的模型工具。
  - **证据:** [manifest](https://github.com/uckkk/dsh-html-parse/blob/69fc2c5362dfd4beaae94f02e8c9f2f3e7f05643/package.json) → [patch](https://github.com/uckkk/dsh-html-parse/blob/69fc2c5362dfd4beaae94f02e8c9f2f3e7f05643/cordis.patch.yml) · **身份:** `dsh-html-parse`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `html-parsing` `model-tools` `content-extraction` · **核验备注:** 因唯一安装命令使用未发布的 npm 身份，且未提供可复现的 Git 源替代方案而暂缓。

- **DSH Handoff** · [WeiYe6/dsh-handoff@08dc59d](https://github.com/WeiYe6/dsh-handoff/commit/08dc59d0ec061152bc2b61e47be7db2aff0e7571) — 把长会话摘要交接到同工作区的新会话，同时保留原会话。
  - **证据:** [manifest](https://github.com/WeiYe6/dsh-handoff/blob/08dc59d0ec061152bc2b61e47be7db2aff0e7571/package.json) → [patch](https://github.com/WeiYe6/dsh-handoff/blob/08dc59d0ec061152bc2b61e47be7db2aff0e7571/cordis.patch.yml) · **身份:** `dsh-handoff`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `session-data` `summarization` `model-request` `session-create` `prepack-build` · **核验备注:** 因其 DSH LLM 与 session peer 固定为 rc.5 而非 rc.6 审核基线而暂缓。

- **DSH Tool Diagnose** · [xu-kai-quan/dsh-tool-diagnose@a0e4aad](https://github.com/xu-kai-quan/dsh-tool-diagnose/commit/a0e4aad55da508c46880be2ed59de874e4d70f52) — 通过模型诊断工具暴露可扩展检查注册表。
  - **证据:** [manifest](https://github.com/xu-kai-quan/dsh-tool-diagnose/blob/a0e4aad55da508c46880be2ed59de874e4d70f52/package.json) → [patch](https://github.com/xu-kai-quan/dsh-tool-diagnose/blob/a0e4aad55da508c46880be2ed59de874e4d70f52/cordis.patch.yml) · **身份:** `dsh-tool-diagnose`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 落后于 rc.6 基线
  - **能力信号:** `diagnostics` `model-tools` `credentials` `session-data` `prepare-build` · **核验备注:** 因全部 DSH peer 面向 rc.5 而非 rc.6 审核基线而暂缓。

- **DSH Plugin Marketplace** · [YELEBAI/dsh-plugin-marketplace@f4d5bbe](https://github.com/YELEBAI/dsh-plugin-marketplace/commit/f4d5bbe8592fa76afd8d80d35613e4160e17c760) — 带引导安装 Agent、自更新、发现与已装插件管理的核验型市场。
  - **证据:** [manifest](https://github.com/YELEBAI/dsh-plugin-marketplace/blob/f4d5bbe8592fa76afd8d80d35613e4160e17c760/package.json) → [patch](https://github.com/YELEBAI/dsh-plugin-marketplace/blob/f4d5bbe8592fa76afd8d80d35613e4160e17c760/cordis.patch.yml) · **身份:** `dsh-plugin-marketplace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `plugin-marketplace` `package-install` `self-update` `identity-collision` `agent-delegation` · **核验备注:** 因其 npm 身份映射到已另行收录的 Scorp1o117 源，且 DSH peer 面向 rc.5 而暂缓。

- **DSH Vision Plugin** · [zcma11/dsh-vision-plugin@b418a5f](https://github.com/zcma11/dsh-vision-plugin/commit/b418a5f8e4373bb4e53556b8071ad6990f95de7c) — 上传图片，经 DashScope 或 Windows 离线 OCR 转写后把描述注入消息。
  - **证据:** [manifest](https://github.com/zcma11/dsh-vision-plugin/blob/b418a5f8e4373bb4e53556b8071ad6990f95de7c/package.json) → [patch](https://github.com/zcma11/dsh-vision-plugin/blob/b418a5f8e4373bb4e53556b8071ad6990f95de7c/cordis.patch.yml) · **身份:** `dsh-vision-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `vision` `ocr` `credentials` `external-network` `identity-collision` · **核验备注:** 因 npm 身份映射到 Xin-Zhang-IceMan/dsh-vision-plugin，且当前源码中的 Git 命令仍含占位作者而暂缓。

- **DSH Model Redactor** · [zerodegress/dsh-model-redactor@90af946](https://github.com/zerodegress/dsh-model-redactor/commit/90af9464c980ce96e746f860c0e964121c74d1a2) — 从模型可见输入、输出、推理、工具参数与会话表面中脱敏秘密。
  - **证据:** [manifest](https://github.com/zerodegress/dsh-model-redactor/blob/90af9464c980ce96e746f860c0e964121c74d1a2/package.json) → [patch](https://github.com/zerodegress/dsh-model-redactor/blob/90af9464c980ce96e746f860c0e964121c74d1a2/cordis.patch.yml) · **身份:** `dsh-model-redactor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `secret-redaction` `session-data` `reasoning-data` `tool-arguments` · **核验备注:** 因固定源码只说明手工 Cordis 组合，未提供可复现的公开 DSH 包或 Git 源安装身份而暂缓。

### 核验后排除

- **DSH Project Organizer** · [caoqinnan-web/dsh-project-organizer@1bfb6d0](https://github.com/caoqinnan-web/dsh-project-organizer/commit/1bfb6d08f8be66aaebeec9062463682504364f9d) — 对话整理工具，但固定提交的文档明确表示目前不支持 DSH。
  - **证据:** [manifest](https://github.com/caoqinnan-web/dsh-project-organizer/blob/1bfb6d08f8be66aaebeec9062463682504364f9d/package.json) → [patch](https://github.com/caoqinnan-web/dsh-project-organizer/blob/1bfb6d08f8be66aaebeec9062463682504364f9d/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 作者声明不支持
  - **能力信号:** `deprecated-package` `author-retracted-support` · **核验备注:** 作者明确不建议安装到 DSH，且 npm 版本已弃用，因此排除。
<!-- CATALOG:END -->

## 核验方法

最低证据链如下：

```text
repository@完整提交
  → package.json::dsh.bundle.patch
  → 引用的 patch 确实存在
  → 包身份 + 许可证 + 生命周期事实
  → 已核验 / 暂缓 / 排除
```

详见[完整方法](./docs/METHODOLOGY.md)、[核验日志](./docs/REVIEW_LOG.md)
和机器可读的[插件数据](./data/plugins.json)。

核验基线来自 DeepSeek Harness 自身的 bundle 约定：bundle 声明
`dsh.bundle`，profile 按顺序组合 bundles。本目录不会把 README 片段直接变成
可复制安装命令，因为浮动分支、dist-tag 和 Git 源可能变化，也可能触发构建脚本。

## 参与贡献

欢迎插件作者与审查者参与。请先阅读
[CONTRIBUTING.md](./CONTRIBUTING.md)，再使用插件提交 Issue 模板。提交必须包含：
不可变 commit、manifest 路径、patch 路径、许可证证据、包身份，以及生命周期/
能力信号披露。

提交 PR 前运行：

```bash
npm run check
```

## 范围与署名

本项目是独立社区项目，与 DeepSeek 无隶属或背书关系。初始发现来自公开的
`dsh-plugin` topic 和采用 CC0 许可证的 Awesome DeepSeek Harness Plugin
列表。这里的收录只代表某个提交上的源码事实记录，不代表推荐或背书。

## 许可证

[MIT](./LICENSE)
