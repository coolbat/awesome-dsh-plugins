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

| 状态       | 含义                                                           |
| ---------- | -------------------------------------------------------------- |
| **已核验** | 在链接提交上确认了原生 bundle 结构；运行行为与安全性仍未验证。 |
| **暂缓**   | 面向 DSH，但存在明确的身份、结构或兼容性阻塞。                 |
| **排除**   | 固定源码证据显示其目前不符合原生 DSH bundle 的收录条件。       |

## 插件目录

<!-- CATALOG:START -->
快照：**2026-08-28** · **1079 个候选** · **709 个已核验** · **369 个暂缓** · **1 个排除**

### 已核验的原生 bundles

#### 界面与工作区

- **Status Rotator** · [01Virex/dsh-status-rotator@88ba67b](https://github.com/01Virex/dsh-status-rotator/commit/88ba67b897fb1842859f3f25dd1408f70f866721) — Status Rotator 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/01Virex/dsh-status-rotator/blob/88ba67b897fb1842859f3f25dd1408f70f866721/package.json) → [patch](https://github.com/01Virex/dsh-status-rotator/blob/88ba67b897fb1842859f3f25dd1408f70f866721/cordis.patch.yml) · **身份:** `dsh-status-rotator`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `browser` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Progress Viz** · [2008924/dsh-progress-viz@0be31d8](https://github.com/2008924/dsh-progress-viz/commit/0be31d89bff49807991ded4e0be0d6db83f76810) — 监听 Headless 会话并为本地看板写入实时阶段与时间线 JSON。
  - **证据:** [manifest](https://github.com/2008924/dsh-progress-viz/blob/0be31d89bff49807991ded4e0be0d6db83f76810/plugin/package.json) → [patch](https://github.com/2008924/dsh-progress-viz/blob/0be31d89bff49807991ded4e0be0d6db83f76810/plugin/cordis.patch.yml) · **身份:** `dsh-progress-viz-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-events` `filesystem-write` `progress-data` `headless` `local-install` · **核验备注:** 嵌套插件记录了本地 Profile 安装方式及 rc.6 Session Peer；未读取事件流或写入进度文件。

- **DSH WSL Workspace** · [6Mikao9/dsh-wsl-workspace@89905a8](https://github.com/6Mikao9/dsh-wsl-workspace/commit/89905a82ebbff7881b586554a72ebeb0d78f93bf) — 为 DeepSeek Harness 提供 Windows 与 WSL 路径之间的工作区支持。
  - **证据:** [manifest](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/package.json) → [patch](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/cordis.patch.yml) · **身份:** `dsh-wsl-workspace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem` `cross-platform-paths` · **核验备注:** DSH peer range 较宽，运行兼容性仍未知。

- **DSH Toolbox Web** · [AbcdefgXW/dsh-toolbox-web@322c260](https://github.com/AbcdefgXW/dsh-toolbox-web/commit/322c2602a98cac7521af147b9becb78bb332303b) — 面向会话、回收站、工作区目录、搜索、预设、配置、归档与定时心跳管理的 Web 工具箱。
  - **证据:** [manifest](https://github.com/AbcdefgXW/dsh-toolbox-web/blob/322c2602a98cac7521af147b9becb78bb332303b/package.json) → [patch](https://github.com/AbcdefgXW/dsh-toolbox-web/blob/322c2602a98cac7521af147b9becb78bb332303b/cordis.patch.yml) · **身份:** `dsh-toolbox-web`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `filesystem-write` `scheduled-tasks` `external-messaging` `client-injection` · **核验备注:** 公开包映射到该仓库；源码可见会话与配置写入以及可选 IM 心跳推送，均未执行。

- **Visualizer Bundle** · [abidhmuhsin/dsh-visualizer@07fd8c1](https://github.com/abidhmuhsin/dsh-visualizer/commit/07fd8c1f3ed543f5df7dda97175f0ea45d8937d1) — Visualizer Bundle 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/abidhmuhsin/dsh-visualizer/blob/07fd8c1f3ed543f5df7dda97175f0ea45d8937d1/packages/bundle/package.json) → [patch](https://github.com/abidhmuhsin/dsh-visualizer/blob/07fd8c1f3ed543f5df7dda97175f0ea45d8937d1/packages/bundle/cordis.patch.yml) · **身份:** `dsh-visualizer-bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `browser` `session-data` `package-install` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Workspace Status Badge** · [AFAP/dsh-workspace-status-badge@824fde0](https://github.com/AFAP/dsh-workspace-status-badge/commit/824fde061956f376bb55f831b89601577c78f895) — 工作区状态徽标插件 for the DeepSeek Harness Web GUI: 在左侧边栏把工作区折叠时，文件夹行上直接显示聚合状态点（等待处理=琥珀 / 进行中=蓝色 / 已完成=绿色），展开后任务行自带状态点，无需重复显示。
  - **证据:** [manifest](https://github.com/AFAP/dsh-workspace-status-badge/blob/824fde061956f376bb55f831b89601577c78f895/package.json) → [patch](https://github.com/AFAP/dsh-workspace-status-badge/blob/824fde061956f376bb55f831b89601577c78f895/cordis.patch.yml) · **身份:** `dsh-workspace-status-badge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Client UI Aqua Unofficial** · [afrel1024/dsh-client-ui-aqua-unofficial@a175ff4](https://github.com/afrel1024/dsh-client-ui-aqua-unofficial/commit/a175ff40853e43c11451383cecd1e52a3d824bb3) — 为 DSH Web 提供可配置的玻璃拟态主题、动态界面与壁纸控制。
  - **证据:** [manifest](https://github.com/afrel1024/dsh-client-ui-aqua-unofficial/blob/a175ff40853e43c11451383cecd1e52a3d824bb3/package.json) → [patch](https://github.com/afrel1024/dsh-client-ui-aqua-unofficial/blob/a175ff40853e43c11451383cecd1e52a3d824bb3/cordis.patch.yml) · **身份:** `dsh-client-ui-aqua-unofficial`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `theme` `browser-storage` `dynamic-wallpaper` `settings-write` · **核验备注:** 固定源码与同仓库 npm 身份均为 1.4.1；未执行浏览器效果、设置写入、壁纸加载或构建。

- **DSH Effort** · [AI-Galaxy-GPU/dsh-effort@edbb063](https://github.com/AI-Galaxy-GPU/dsh-effort/commit/edbb063eefb05e33aa970a4b9ec8cbaad08e8641) — 在 Web 界面中增加当前会话模型所支持的推理强度选择控件。
  - **证据:** [manifest](https://github.com/AI-Galaxy-GPU/dsh-effort/blob/edbb063eefb05e33aa970a4b9ec8cbaad08e8641/package.json) → [patch](https://github.com/AI-Galaxy-GPU/dsh-effort/blob/edbb063eefb05e33aa970a4b9ec8cbaad08e8641/cordis.patch.yml) · **身份:** `dsh-effort`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `model-selection` `client-injection` `local-storage` · **核验备注:** 固定源码使用会话模型 RPC 与浏览器存储；仓库未检测到许可证文件，且没有声明 DSH peer 范围。

- **DSH Sound** · [AI-Galaxy-GPU/dsh-sound@f5f25dc](https://github.com/AI-Galaxy-GPU/dsh-sound/commit/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32) — 为任务完成、审批、提问、计划审核、阻塞和失败播放可配置的浏览器提示音。
  - **证据:** [manifest](https://github.com/AI-Galaxy-GPU/dsh-sound/blob/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32/package.json) → [patch](https://github.com/AI-Galaxy-GPU/dsh-sound/blob/f5f25dc3e2ffee29fad4872d8b00aaac7738ce32/cordis.patch.yml) · **身份:** `dsh-sound`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-events` `local-file` `browser-storage` `client-injection` · **核验备注:** 固定源码把配置存入 localStorage、音频存入 IndexedDB；文档所列 npm 目标目前没有可用版本，且未测试运行行为。

- **DSH Update Checker** · [Airmetro/dsh-update-checker@bea57c0](https://github.com/Airmetro/dsh-update-checker/commit/bea57c020bb8a32889079b8f3a04182bc94e4982) — DSH Update Checker 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Airmetro/dsh-update-checker/blob/bea57c020bb8a32889079b8f3a04182bc94e4982/package.json) → [patch](https://github.com/Airmetro/dsh-update-checker/blob/bea57c020bb8a32889079b8f3a04182bc94e4982/cordis.patch.yml) · **身份:** `dsh-update-checker`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Sidor UI** · [AKI2253/Sidor_UI@89fbabe](https://github.com/AKI2253/Sidor_UI/commit/89fbabe1801f4802b362349ddd3094fa7c727b2d) — Sidor UI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AKI2253/Sidor_UI/blob/89fbabe1801f4802b362349ddd3094fa7c727b2d/package.json) → [patch](https://github.com/AKI2253/Sidor_UI/blob/89fbabe1801f4802b362349ddd3094fa7c727b2d/cordis.patch.yml) · **身份:** `sidor-ui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Balance Chip** · [AKUSH99/dsh-balance-chip@427cc6e](https://github.com/AKUSH99/dsh-balance-chip/commit/427cc6e8935a7c3aa44a92b1f72ec66c2e58dcd7) — Balance Chip 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AKUSH99/dsh-balance-chip/blob/427cc6e8935a7c3aa44a92b1f72ec66c2e58dcd7/package.json) → [patch](https://github.com/AKUSH99/dsh-balance-chip/blob/427cc6e8935a7c3aa44a92b1f72ec66c2e58dcd7/cordis.patch.yml) · **身份:** `dsh-balance-chip`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Kanban** · [alpacachen/dsh-kanban@9f6de7d](https://github.com/alpacachen/dsh-kanban/commit/9f6de7dfa1e7f40e28f84f994da40a115ad16115) — DSH Kanban 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/alpacachen/dsh-kanban/blob/9f6de7dfa1e7f40e28f84f994da40a115ad16115/package.json) → [patch](https://github.com/alpacachen/dsh-kanban/blob/9f6de7dfa1e7f40e28f84f994da40a115ad16115/cordis.patch.yml) · **身份:** `@alpacachen/dsh-kanban`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Desktop** · [anywhere-labs/deepseek-harness-desktop@6074088](https://github.com/anywhere-labs/deepseek-harness-desktop/commit/6074088f5b660206e404b3591fab51fb99c69add) — 以 DSH Cordis 插件形式组合的 Electron 桌面外壳，包含终端、Profile、诊断、包管理与更新界面。
  - **证据:** [manifest](https://github.com/anywhere-labs/deepseek-harness-desktop/blob/6074088f5b660206e404b3591fab51fb99c69add/dsh-plugin-desktop/package.json) → [patch](https://github.com/anywhere-labs/deepseek-harness-desktop/blob/6074088f5b660206e404b3591fab51fb99c69add/dsh-plugin-desktop/cordis.patch.yml) · **身份:** `dsh-plugin-desktop`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `subprocess` `external-network` `credentials` `client-injection` `process-control` `system-prompt` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Summary Sidebar** · [az790871109/dsh-summary-sidebar@5588f55](https://github.com/az790871109/dsh-summary-sidebar/commit/5588f551a86b59b2976a238464d292177917bae0) — 独立的「摘要 + 侧边栏」插件：摘要只列每个对话输出的文档/网页/图片与来源，侧边栏提供文件夹、终端、浏览器、文档阅读器、图片阅读器，可点击文件进行预览与编辑。
  - **证据:** [manifest](https://github.com/az790871109/dsh-summary-sidebar/blob/5588f551a86b59b2976a238464d292177917bae0/package.json) → [patch](https://github.com/az790871109/dsh-summary-sidebar/blob/5588f551a86b59b2976a238464d292177917bae0/cordis.patch.yml) · **身份:** `dsh-summary-sidebar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `subprocess` `browser` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **CC DSH Notifier** · [baobaolaodie/cc-dsh-notifier@8f93b37](https://github.com/baobaolaodie/cc-dsh-notifier/commit/8f93b37759d6a057062c4f1c2abce1ec6a6bd61d) — Claude Code + DeepSeek Harness Windows 通知系统:Toast + 点击跳转
  - **证据:** [manifest](https://github.com/baobaolaodie/cc-dsh-notifier/blob/8f93b37759d6a057062c4f1c2abce1ec6a6bd61d/package.json) → [patch](https://github.com/baobaolaodie/cc-dsh-notifier/blob/8f93b37759d6a057062c4f1c2abce1ec6a6bd61d/plugins/dsh-notifier/cordis-root.patch.yml) · **身份:** `cc-dsh-notifier`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `session-data` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Context** · [bowenliang123/dsh-context@aca38b2](https://github.com/bowenliang123/dsh-context/commit/aca38b24d714106f7256280dc8f9c9ec5b8e4552) — 展示请求历史、压缩、注入、模型切换与上下文组成变化的洞察面板。
  - **证据:** [manifest](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/package.json) → [patch](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/cordis.patch.yml) · **身份:** `dsh-context`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `session-data` `client-injection` `browser` · **核验备注:** 已确认 host/client bundle 结构；prepare hook 会调用 Husky，且包未声明 DSH peer 范围。

- **DSH Client UI Skins** · [caoyiwei850/dsh-client-ui-skins@21ad7f5](https://github.com/caoyiwei850/dsh-client-ui-skins/commit/21ad7f52b3d2481daeca224f5c579b9c3253597b) — 通过设置界面为 DSH Web Client 提供内置与自定义图片皮肤。
  - **证据:** [manifest](https://github.com/caoyiwei850/dsh-client-ui-skins/blob/21ad7f52b3d2481daeca224f5c579b9c3253597b/package.json) → [patch](https://github.com/caoyiwei850/dsh-client-ui-skins/blob/21ad7f52b3d2481daeca224f5c579b9c3253597b/cordis.patch.yml) · **身份:** `dsh-client-ui-skins`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `theme` `browser-storage` `settings-write` · **核验备注:** 固定源码与 npm 包均为 0.1.10，但 npm 元数据未映射仓库；未执行皮肤渲染、存储或设置写入。

- **DSH Stop Server** · [caozhikun/dsh-stop-server@baa9b9c](https://github.com/caozhikun/dsh-stop-server/commit/baa9b9cbc10e947486ae530c1c8fed5a61a314d4) — 增加一个调用宿主关闭路由的 Web 操作，用于停止 DSH 进程并关闭当前界面。
  - **证据:** [manifest](https://github.com/caozhikun/dsh-stop-server/blob/baa9b9cbc10e947486ae530c1c8fed5a61a314d4/package.json) → [patch](https://github.com/caozhikun/dsh-stop-server/blob/baa9b9cbc10e947486ae530c1c8fed5a61a314d4/cordis.patch.yml) · **身份:** `dsh-stop-server`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `process-exit` `web-route` `client-injection` · **核验备注:** 固定宿主源码注册了带 appExit、process.exit 与 SIGTERM 回退的关闭路由；仓库未检测到许可证文件，且未执行关闭。

- **Captain DSH Web UI All** · [CAPTAIN1275/dsh-ui-web@04422dd](https://github.com/CAPTAIN1275/dsh-ui-web/commit/04422dd2d447044537f404747adbc7c0c8a86cd4) — 聚合任务看板、Git 视图、桌宠、远程访问、实时统计、设置与内置皮肤的 Web UI bundle。
  - **证据:** [manifest](https://github.com/CAPTAIN1275/dsh-ui-web/blob/04422dd2d447044537f404747adbc7c0c8a86cd4/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/CAPTAIN1275/dsh-ui-web/blob/04422dd2d447044537f404747adbc7c0c8a86cd4/packages/dsh-web-ui-all/cordis.patch.yml) · **身份:** `@captain1275/dsh-web-ui-all`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `aggregate-scope` `remote-access` `filesystem-write` `git` `client-injection` · **核验备注:** 公开聚合包身份映射到该仓库并代表其组件候选；未执行远程、文件、Git、会话或 UI 能力面。

- **DSH Pomodoro** · [causebefore/dsh-pomodoro@5ce97fa](https://github.com/causebefore/dsh-pomodoro/commit/5ce97fabad64acc1ced3c372d55ca06567a603e7) — 为 DSH Web 提供可配置的专注与休息计时器、侧栏入口和可拖动面板。
  - **证据:** [manifest](https://github.com/causebefore/dsh-pomodoro/blob/5ce97fabad64acc1ced3c372d55ca06567a603e7/package.json) → [patch](https://github.com/causebefore/dsh-pomodoro/blob/5ce97fabad64acc1ced3c372d55ca06567a603e7/cordis.patch.yml) · **身份:** `dsh-pomodoro`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `settings-write` `timer` `browser-ui` `prepublish-check` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.4.0；未执行计时器、面板、设置或发布前行为。

- **DSH TUI** · [ccch1mneyyy/dsh-TUI@ee83376](https://github.com/ccch1mneyyy/dsh-TUI/commit/ee83376b549814f236ea2ab90682bb8f482dc826) — 带实时状态、流式思考、工具、审批与文件系统能力的全屏终端客户端。
  - **证据:** [manifest](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/package.json) → [patch](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/cordis.patch.yml) · **身份:** `@deepseek-harness-tui/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `terminal` `subprocess` `filesystem` `credentials` `broad-agent-surface` · **核验备注:** 该 bundle 暴露较广的 Agent 能力面；结构确认不代表运行背书。

- **DSH Cerrda Theme** · [Cerrda/dsh-cerrda-theme@7390edf](https://github.com/Cerrda/dsh-cerrda-theme/commit/7390edfc7c49314de944dffbc306a255d5c574d8) — 为 DSH Web 提供暗色玫紫视觉主题、自定义输入区与动态背景。
  - **证据:** [manifest](https://github.com/Cerrda/dsh-cerrda-theme/blob/7390edfc7c49314de944dffbc306a255d5c574d8/package.json) → [patch](https://github.com/Cerrda/dsh-cerrda-theme/blob/7390edfc7c49314de944dffbc306a255d5c574d8/cordis.patch.yml) · **身份:** `dsh-cerrda-theme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-theme` `client-injection` `webgl` `npm-package` · **核验备注:** 固定源码为 0.1.0，同仓库 npm 已发布 0.1.1；未加载 CSS、字体、动画或 WebGL 行为。

- **DSH Sticky Notes** · [charrywhite/dsh-sticky-notes@e2653fc](https://github.com/charrywhite/dsh-sticky-notes/commit/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851) — 带宿主 JSON 持久化、浏览器界面与模型便签工具的常驻便签面板。
  - **证据:** [manifest](https://github.com/charrywhite/dsh-sticky-notes/blob/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851/package.json) → [patch](https://github.com/charrywhite/dsh-sticky-notes/blob/e2653fc9b09c2d4cb7ea21ff1cc58ff08d6ec851/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-write` `web-route` `client-injection` `model-tools` `private-package` · **核验备注:** 私有包文档记录了本地 link 与源码安装；未执行便签存储、HTTP 路由或模型工具。

- **Castorice Theme** · [chemicalcat250/dsh-theme-castorice@c55e467](https://github.com/chemicalcat250/dsh-theme-castorice/commit/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2) — 为 DSH Web 界面应用紫罗兰暗色的遐蝶风格视觉主题。
  - **证据:** [manifest](https://github.com/chemicalcat250/dsh-theme-castorice/blob/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2/package.json) → [patch](https://github.com/chemicalcat250/dsh-theme-castorice/blob/c55e467aed3d02cffcc1c7f2de284ce98eab9bc2/cordis.patch.yml) · **身份:** `dsh-theme-castorice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `browser-storage` · **核验备注:** 文档记录了 GitHub 源安装，客户端代码会注入主题样式并保存浏览器偏好；未在浏览器中加载。

- **DSH Security Doctor** · [ChenChen913/dsh-security-doctor@abaa3f5](https://github.com/ChenChen913/dsh-security-doctor/commit/abaa3f5e29c5b2105503b2596c200e99ab13f16b) — DSH Security Doctor 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ChenChen913/dsh-security-doctor/blob/abaa3f5e29c5b2105503b2596c200e99ab13f16b/package.json) → [patch](https://github.com/ChenChen913/dsh-security-doctor/blob/abaa3f5e29c5b2105503b2596c200e99ab13f16b/cordis.patch.yml) · **身份:** `dsh-security-doctor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH DeepSeek Balance** · [Choi-Peng/dsh-deepseek-balance@45d7444](https://github.com/Choi-Peng/dsh-deepseek-balance/commit/45d7444b67c65bea2aee5b18e0ffefd25f0f23e1) — 在 DSH Web 侧栏显示 DeepSeek 账户余额及可编辑的预警阈值。
  - **证据:** [manifest](https://github.com/Choi-Peng/dsh-deepseek-balance/blob/45d7444b67c65bea2aee5b18e0ffefd25f0f23e1/package.json) → [patch](https://github.com/Choi-Peng/dsh-deepseek-balance/blob/45d7444b67c65bea2aee5b18e0ffefd25f0f23e1/cordis.patch.yml) · **身份:** `@choi-p/dsh-deepseek-balance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-balance` `credentials` `external-network` `settings-write` `web-ui` · **核验备注:** 固定源码为 0.3.2，同仓库 npm 为 0.3.1；未执行余额请求或 Profile 设置写入。

- **DSH DeepCompute** · [cipher2026/dsh-idle-deepcompute@619dbef](https://github.com/cipher2026/dsh-idle-deepcompute/commit/619dbef0d002073f7276769d24de7b1a7b24c59f) — 嵌入 DSH Web 全宽页面的终端风 AI 实验室挂机游戏。
  - **证据:** [manifest](https://github.com/cipher2026/dsh-idle-deepcompute/blob/619dbef0d002073f7276769d24de7b1a7b24c59f/package.json) → [patch](https://github.com/cipher2026/dsh-idle-deepcompute/blob/619dbef0d002073f7276769d24de7b1a7b24c59f/cordis.patch.yml) · **身份:** `dsh-deepcompute`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-ui` `idle-game` `client-injection` `github-only` · **核验备注:** 仓库记录了可固定提交的 GitHub 安装方式；未加载客户端模块、游戏状态或浏览器存储行为。

- **DSH Browser Notify** · [classfieldseason-cmd/dsh-notify-plugin@8f386ca](https://github.com/classfieldseason-cmd/dsh-notify-plugin/commit/8f386ca5d66e8549119466c4a2ede15154aad577) — 在 DSH 对话回合完成时显示浏览器桌面通知。
  - **证据:** [manifest](https://github.com/classfieldseason-cmd/dsh-notify-plugin/blob/8f386ca5d66e8549119466c4a2ede15154aad577/package.json) → [patch](https://github.com/classfieldseason-cmd/dsh-notify-plugin/blob/8f386ca5d66e8549119466c4a2ede15154aad577/cordis.patch.yml) · **身份:** `dsh-browser-notify-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `browser-notification` `session-events` `client-injection` · **核验备注:** 公开包身份与本仓库一致，客户端监听会话完成事件后调用浏览器 Notification API；未触发通知。

- **Gate Game** · [CochraneK/dsh-gate-game-plugin@5080ada](https://github.com/CochraneK/dsh-gate-game-plugin/commit/5080ada2a141c96cafa6d7338ae9ea6c736549ca) — Gate Game 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/CochraneK/dsh-gate-game-plugin/blob/5080ada2a141c96cafa6d7338ae9ea6c736549ca/package.json) → [patch](https://github.com/CochraneK/dsh-gate-game-plugin/blob/5080ada2a141c96cafa6d7338ae9ea6c736549ca/cordis.patch.yml) · **身份:** `dsh-gate-game`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Wallpaper** · [codeMonkey-Pine/dsh-wallpaper@6ab97b2](https://github.com/codeMonkey-Pine/dsh-wallpaper/commit/6ab97b2b48278f3044df65a14680ce6efd760e01) — 扫描本地 Wallpaper Engine 资源库，并在 DSH Web 中提供壁纸选择、配置与渲染。
  - **证据:** [manifest](https://github.com/codeMonkey-Pine/dsh-wallpaper/blob/6ab97b2b48278f3044df65a14680ce6efd760e01/package.json) → [patch](https://github.com/codeMonkey-Pine/dsh-wallpaper/blob/6ab97b2b48278f3044df65a14680ce6efd760e01/cordis.patch.yml) · **身份:** `dsh-wallpaper`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `filesystem-read` `subprocess` `local-http` `client-injection` `model-tools` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.1.2；未执行资源库扫描、预览进程、路由、浏览器渲染或 Agent 工具。

- **DSH Web UI Skin** · [crack-time/dsh-web-ui-skin@1124dea](https://github.com/crack-time/dsh-web-ui-skin/commit/1124deacfccbf2309fc05f07e92e05d0b321b581) — 为 DSH Web Client 提供田园小屋壁纸与磨砂玻璃视觉。
  - **证据:** [manifest](https://github.com/crack-time/dsh-web-ui-skin/blob/1124deacfccbf2309fc05f07e92e05d0b321b581/package.json) → [patch](https://github.com/crack-time/dsh-web-ui-skin/blob/1124deacfccbf2309fc05f07e92e05d0b321b581/cordis.patch.yml) · **身份:** `@crack/dsh-web-ui-skin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `browser-ui` `github-only` · **核验备注:** 存在可固定的根目录 Git 源码身份，但 npm 无匹配 scoped 包；未执行构建、资源加载、DOM 注入或浏览器渲染。

- **DSH Glassmorphism** · [czw63/dsh-glassmorphism@e1f0466](https://github.com/czw63/dsh-glassmorphism/commit/e1f0466dac2dbbd1dc4e9f465f8819436672e648) — 增加适配移动端的液态玻璃主题，并提供可选壁纸、模糊与折射效果。
  - **证据:** [manifest](https://github.com/czw63/dsh-glassmorphism/blob/e1f0466dac2dbbd1dc4e9f465f8819436672e648/package.json) → [patch](https://github.com/czw63/dsh-glassmorphism/blob/e1f0466dac2dbbd1dc4e9f465f8819436672e648/cordis.patch.yml) · **身份:** `@local/dsh-glass-theme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `browser-storage` · **核验备注:** 文档记录了本地文件安装路径，客户端会在浏览器保存视觉偏好；未加载样式 bundle。

- **MY GO** · [daizihan233/dsh-my-go@cf2d802](https://github.com/daizihan233/dsh-my-go/commit/cf2d80236d2c596a68ce6d8409357836f0258696) — MY GO 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/daizihan233/dsh-my-go/blob/cf2d80236d2c596a68ce6d8409357836f0258696/package.json) → [patch](https://github.com/daizihan233/dsh-my-go/blob/cf2d80236d2c596a68ce6d8409357836f0258696/cordis.patch.yml) · **身份:** `dsh-my-go`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Harness UI Enhancer** · [dcrzsy/dsh-harness-ui-enhancer@da56d14](https://github.com/dcrzsy/dsh-harness-ui-enhancer/commit/da56d14ba30dd3a4c9a7335d69b64ffac8bf0146) — Harness UI Enhancer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dcrzsy/dsh-harness-ui-enhancer/blob/da56d14ba30dd3a4c9a7335d69b64ffac8bf0146/package.json) → [patch](https://github.com/dcrzsy/dsh-harness-ui-enhancer/blob/da56d14ba30dd3a4c9a7335d69b64ffac8bf0146/cordis.patch.yml) · **身份:** `harness-ui-enhancer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `mcp` `session-data` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Oled Care** · [domparent/OLEDCare@8999fa8](https://github.com/domparent/OLEDCare/commit/8999fa87ed2dea0e3079c1e5c71a69260e1e4c74) — Oled Care 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/domparent/OLEDCare/blob/8999fa87ed2dea0e3079c1e5c71a69260e1e4c74/package.json) → [patch](https://github.com/domparent/OLEDCare/blob/8999fa87ed2dea0e3079c1e5c71a69260e1e4c74/cordis.patch.yml) · **身份:** `dsh-oled-care`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `financial` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Delete Session** · [dream12347/dsh-delete-session@e0f052a](https://github.com/dream12347/dsh-delete-session/commit/e0f052ac7cff776df72cdc58e8c42c94a1843c55) — 提供回收站、恢复、永久删除、归档会话、活动统计、暂停与日志目录访问的 Web 会话管理器。
  - **证据:** [manifest](https://github.com/dream12347/dsh-delete-session/blob/e0f052ac7cff776df72cdc58e8c42c94a1843c55/package.json) → [patch](https://github.com/dream12347/dsh-delete-session/blob/e0f052ac7cff776df72cdc58e8c42c94a1843c55/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-delete` `archive-registry` `client-injection` `browser-storage` · **核验备注:** 文档记录了固定 GitHub 安装与 rc.6 peer；破坏性的会话和工作区操作仍需用户触发，未执行。

- **DSH Popout Sidebar** · [e2mcc/dsh-popout-sidebar@7485171](https://github.com/e2mcc/dsh-popout-sidebar/commit/748517180dd4828f2a0307ff0b21ba92e39693bb) — 提供 Artifact 侧边栏，并可将内容弹出到更大的浏览器标签页。
  - **证据:** [manifest](https://github.com/e2mcc/dsh-popout-sidebar/blob/748517180dd4828f2a0307ff0b21ba92e39693bb/package.json) → [patch](https://github.com/e2mcc/dsh-popout-sidebar/blob/748517180dd4828f2a0307ff0b21ba92e39693bb/cordis.patch.yml) · **身份:** `dsh-popout-sidebar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `browser-ui` `external-window` `github-only` · **核验备注:** 存在可固定的根目录 Git 源码，npm 无同名包；未执行构建、浏览器面板、Artifact 渲染或弹出窗口。

- **DSH Unarchive** · [edfrey0044/dsh-unarchive@52a5194](https://github.com/edfrey0044/dsh-unarchive/commit/52a51946f9b48c1f97eb965b3050aab124355d51) — 通过命令和工具更新全局归档注册表，以恢复已归档的 DSH 会话。
  - **证据:** [manifest](https://github.com/edfrey0044/dsh-unarchive/blob/52a51946f9b48c1f97eb965b3050aab124355d51/package.json) → [patch](https://github.com/edfrey0044/dsh-unarchive/blob/52a51946f9b48c1f97eb965b3050aab124355d51/cordis.patch.yml) · **身份:** `dsh-unarchive`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `session-data` `archive-registry` `workspace-state` · **核验备注:** 文档记录了 Git 源安装，该 bundle 会从全局归档集合移除会话标识；未改变注册表或会话状态。

- **DSH Balance** · [eka3os/dsh-balance@0ffde6c](https://github.com/eka3os/dsh-balance/commit/0ffde6cc21ca4feae483ccd6e5577891eacfb0ff) — DSH Balance 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/eka3os/dsh-balance/blob/0ffde6cc21ca4feae483ccd6e5577891eacfb0ff/package.json) → [patch](https://github.com/eka3os/dsh-balance/blob/0ffde6cc21ca4feae483ccd6e5577891eacfb0ff/cordis.patch.yml) · **身份:** `@ek3os/dsh-balance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Notes** · [ErrorLst/dsh-notes@1e0bda1](https://github.com/ErrorLst/dsh-notes/commit/1e0bda1db01d3bfd21743160888d700efbe1f030) — 提供全高随记栏，包含 Session 卡片以及全局或 Workspace Todo。
  - **证据:** [manifest](https://github.com/ErrorLst/dsh-notes/blob/1e0bda1db01d3bfd21743160888d700efbe1f030/package.json) → [patch](https://github.com/ErrorLst/dsh-notes/blob/1e0bda1db01d3bfd21743160888d700efbe1f030/cordis.patch.yml) · **身份:** `@dsh-external/dsh-notes`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `session-data` `workspace-data` `browser-ui` `github-only` · **核验备注:** 根 Manifest 标记为 Private 且 npm 无匹配包，但存在固定根目录 Git Bundle；未执行随记持久化、Session 卡片或浏览器 UI。

- **DSH OpenCode Palette** · [FeatherHunter/dsh-opencode-palette@4c3660a](https://github.com/FeatherHunter/dsh-opencode-palette/commit/4c3660a40229f3e661dd8cb7e67610b2d932e575) — 为 DSH Web 界面增加可持久保存的数十款 OpenCode 风格配色主题选择器。
  - **证据:** [manifest](https://github.com/FeatherHunter/dsh-opencode-palette/blob/4c3660a40229f3e661dd8cb7e67610b2d932e575/package/package.json) → [patch](https://github.com/FeatherHunter/dsh-opencode-palette/blob/4c3660a40229f3e661dd8cb7e67610b2d932e575/package/cordis.patch.yml) · **身份:** `dsh-opencode-palette`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `browser-storage` · **核验备注:** 固定源码版本早于观察到的 registry 发布版本，但对应同一公开身份；未执行主题注入或浏览器持久设置。

- **DeepSeek Harness Wallet** · [feibi-mochi/deepseek-harness-control-center@1a3b34b](https://github.com/feibi-mochi/deepseek-harness-control-center/commit/1a3b34b2b421344e608d9e30079621bff727d515) — 面向 DSH Web 的本地优先账户、用量、充值、完成提醒、布局与会话控制中心。
  - **证据:** [manifest](https://github.com/feibi-mochi/deepseek-harness-control-center/blob/1a3b34b2b421344e608d9e30079621bff727d515/package.json) → [patch](https://github.com/feibi-mochi/deepseek-harness-control-center/blob/1a3b34b2b421344e608d9e30079621bff727d515/cordis.patch.yml) · **身份:** `deepseek-harness-wallet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `account-balance` `usage-accounting` `credentials` `external-network` `session-control` `web-ui` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.1.4；未执行凭据请求、用量记账、充值链接、通知或会话操作。

- **DSH Balance Widget** · [FeilongRong/dsh-balance-widget@79cd46d](https://github.com/FeilongRong/dsh-balance-widget/commit/79cd46dd4a4106768af15c6d99ffa8d7566bd37e) — DSH Balance Widget 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/FeilongRong/dsh-balance-widget/blob/79cd46dd4a4106768af15c6d99ffa8d7566bd37e/package.json) → [patch](https://github.com/FeilongRong/dsh-balance-widget/blob/79cd46dd4a4106768af15c6d99ffa8d7566bd37e/cordis.patch.yml) · **身份:** `@feilongrong/dsh-balance-widget`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Apply Patch** · [fonlan/dsh-apply-patch@1b039c8](https://github.com/fonlan/dsh-apply-patch/commit/1b039c8a9b80e8052cbafb73680503a69337ce59) — Apply Patch 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fonlan/dsh-apply-patch/blob/1b039c8a9b80e8052cbafb73680503a69337ce59/package.json) → [patch](https://github.com/fonlan/dsh-apply-patch/blob/1b039c8a9b80e8052cbafb73680503a69337ce59/cordis.patch.yml) · **身份:** `@fonlan/dsh-apply-patch`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `model-tools` `package-install` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Font Settings** · [fuzz1og/dsh-font-settings@640ca4b](https://github.com/fuzz1og/dsh-font-settings/commit/640ca4bf9d371f3c83fce30ceb0d06a5e15e8298) — Font Settings 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fuzz1og/dsh-font-settings/blob/640ca4bf9d371f3c83fce30ceb0d06a5e15e8298/package.json) → [patch](https://github.com/fuzz1og/dsh-font-settings/blob/640ca4bf9d371f3c83fce30ceb0d06a5e15e8298/cordis.patch.yml) · **身份:** `dsh-font-settings`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH UI Crystal** · [gityanglijun/dsh-ui-crystal@37e321c](https://github.com/gityanglijun/dsh-ui-crystal/commit/37e321c2a53cf924ce9278c3ca0b6827cf3bcca0) — 为 DSH Web Shell 提供蓝紫色 Crystal 主题与鲸鱼娘背景。
  - **证据:** [manifest](https://github.com/gityanglijun/dsh-ui-crystal/blob/37e321c2a53cf924ce9278c3ca0b6827cf3bcca0/package.json) → [patch](https://github.com/gityanglijun/dsh-ui-crystal/blob/37e321c2a53cf924ce9278c3ca0b6827cf3bcca0/cordis.patch.yml) · **身份:** `dsh-ui-crystal`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `large-assets` `browser-ui` `github-only` · **核验备注:** 包声明 MIT，但未发现仓库许可证文件或 npm 包；未执行构建、资源加载、DOM 注入或浏览器渲染。

- **StyleVault** · [GptsApp/dsh-stylevault@26eee2d](https://github.com/GptsApp/dsh-stylevault/commit/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8) — 面向 DSH Web 的主题库、样式设置与可分享外观配置包。
  - **证据:** [manifest](https://github.com/GptsApp/dsh-stylevault/blob/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8/package.json) → [patch](https://github.com/GptsApp/dsh-stylevault/blob/26eee2d412f38b7a570cc84bfaac3a09f72a8ec8/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `theme` `client-injection` `browser-storage` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Macos Skin** · [hero-goblins/dsh-macos-skin@da6eebb](https://github.com/hero-goblins/dsh-macos-skin/commit/da6eebb494f53eec2dc6e1f335c6a1866ac023a4) — Macos Skin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/hero-goblins/dsh-macos-skin/blob/da6eebb494f53eec2dc6e1f335c6a1866ac023a4/package.json) → [patch](https://github.com/hero-goblins/dsh-macos-skin/blob/da6eebb494f53eec2dc6e1f335c6a1866ac023a4/cordis.patch.yml) · **身份:** `dsh-macos-skin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `browser` `package-install` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Remote QR Button** · [huaxiren6/dsh-remote-qr-button@8427d46](https://github.com/huaxiren6/dsh-remote-qr-button/commit/8427d4613a587bb947e8e7eb69fbdba1e435b402) — DSH Remote QR Button 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/huaxiren6/dsh-remote-qr-button/blob/8427d4613a587bb947e8e7eb69fbdba1e435b402/package.json) → [patch](https://github.com/huaxiren6/dsh-remote-qr-button/blob/8427d4613a587bb947e8e7eb69fbdba1e435b402/cordis.patch.yml) · **身份:** `dsh-remote-qr-button`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Clean Desktop Shell** · [Icather/dsh-clean-desktop-shell@352820e](https://github.com/Icather/dsh-clean-desktop-shell/commit/352820e53ddd6fb9db749d61faf4869866c50eb1) — DSH Clean Desktop Shell 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Icather/dsh-clean-desktop-shell/blob/352820e53ddd6fb9db749d61faf4869866c50eb1/package.json) → [patch](https://github.com/Icather/dsh-clean-desktop-shell/blob/352820e53ddd6fb9db749d61faf4869866c50eb1/cordis.patch.yml) · **身份:** `dsh-clean-desktop-shell`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH OMC TUI** · [ipromise2021/dsh-omc-tui@d2307dc](https://github.com/ipromise2021/dsh-omc-tui/commit/d2307dc2b2fe057fcbb82be245da394214c7865f) — 以键盘优先的终端界面组合 DSH 会话、审批、任务、工具、Skills 与模型选择。
  - **证据:** [manifest](https://github.com/ipromise2021/dsh-omc-tui/blob/d2307dc2b2fe057fcbb82be245da394214c7865f/package.json) → [patch](https://github.com/ipromise2021/dsh-omc-tui/blob/d2307dc2b2fe057fcbb82be245da394214c7865f/cordis.patch.yml) · **身份:** `dsh-omc-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `terminal-ui` `session-control` `approvals` `model-tools` `profile-overrides` `github-only` · **核验备注:** 补丁会替换多个基础工具与提示行以组合 TUI；未运行终端、Profile 覆盖、会话、审批或工具。

- **DSH RPG Workstation** · [Jay-R-J/dsh-rpg-workstation@84fc0de](https://github.com/Jay-R-J/dsh-rpg-workstation/commit/84fc0dec315470f4ede619223a79d2f64e103515) — 为 DSH Web 增加会话经验、等级、成就、连续记录与悬浮 RPG 面板。
  - **证据:** [manifest](https://github.com/Jay-R-J/dsh-rpg-workstation/blob/84fc0dec315470f4ede619223a79d2f64e103515/package.json) → [patch](https://github.com/Jay-R-J/dsh-rpg-workstation/blob/84fc0dec315470f4ede619223a79d2f64e103515/cordis.patch.yml) · **身份:** `dsh-rpg-workstation`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `gamification` `session-events` `filesystem-write` `web-ui` `npm-package` `prepublish-build` · **核验备注:** 固定源码与 npm 0.3.0 一致；未执行构建、会话事件、经验状态、文件写入或面板渲染。

- **DSH Session Admin** · [Jemius/dsh-session-manager@191a1f3](https://github.com/Jemius/dsh-session-manager/commit/191a1f3a991a3ff0b1694e18ec6486b4ddb81d03) — 为 DSH 会话增加归档、恢复、导出与永久删除控制。
  - **证据:** [manifest](https://github.com/Jemius/dsh-session-manager/blob/191a1f3a991a3ff0b1694e18ec6486b4ddb81d03/package.json) → [patch](https://github.com/Jemius/dsh-session-manager/blob/191a1f3a991a3ff0b1694e18ec6486b4ddb81d03/cordis.patch.yml) · **身份:** `dsh-session-admin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `session-archive` `session-delete` `data-export` `web-ui` `prepare-build` `repository-renamed` · **核验备注:** GitHub 确认 dsh-session-manager 重定向到同一仓库 ID，现名 dsh-session-admin；固定源码为 0.1.2、npm 为 0.1.3，未修改会话。

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

- **Liquid Glass Input** · [jkamkk/dsh-liquid-glass-input@cdd0bac](https://github.com/jkamkk/dsh-liquid-glass-input/commit/cdd0bac5cf14621de752a069d8dc80c4b457cfd5) — Liquid Glass Input 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/jkamkk/dsh-liquid-glass-input/blob/cdd0bac5cf14621de752a069d8dc80c4b457cfd5/package.json) → [patch](https://github.com/jkamkk/dsh-liquid-glass-input/blob/cdd0bac5cf14621de752a069d8dc80c4b457cfd5/cordis.patch.yml) · **身份:** `dsh-liquid-glass-input`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `browser` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Strata** · [jsdvjx/dsh-strata@e2f8585](https://github.com/jsdvjx/dsh-strata/commit/e2f8585c73a54e73ea7056fff216532da8410ae5) — DSH Strata 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/jsdvjx/dsh-strata/blob/e2f8585c73a54e73ea7056fff216532da8410ae5/package.json) → [patch](https://github.com/jsdvjx/dsh-strata/blob/e2f8585c73a54e73ea7056fff216532da8410ae5/cordis.patch.yml) · **身份:** `dsh-strata`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Memes** · [kagura-agent/dsh-memes@68a528d](https://github.com/kagura-agent/dsh-memes/commit/68a528d1c6d710a801d2402c8b86ecc0cced40f0) — 让 Agent 按语义标签选择反应图片并在 DSH 会话中呈现。
  - **证据:** [manifest](https://github.com/kagura-agent/dsh-memes/blob/68a528d1c6d710a801d2402c8b86ecc0cced40f0/package.json) → [patch](https://github.com/kagura-agent/dsh-memes/blob/68a528d1c6d710a801d2402c8b86ecc0cced40f0/cordis.patch.yml) · **身份:** `dsh-memes`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `media-picker` `model-tools` `external-media` `web-ui` `github-only` · **核验备注:** 插件代码为 MIT，但反应素材来自另一个库并受各自来源权利约束；未执行标签获取、选择或素材渲染。

- **DSH App** · [Karbo123/DSH-EvoResearch@ea6d4df](https://github.com/Karbo123/DSH-EvoResearch/commit/ea6d4df404f57cdcecb19ea1f740f65d7919c30b) — DSH App 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Karbo123/DSH-EvoResearch/blob/ea6d4df404f57cdcecb19ea1f740f65d7919c30b/packages/evoresearch-app/package.json) → [patch](https://github.com/Karbo123/DSH-EvoResearch/blob/ea6d4df404f57cdcecb19ea1f740f65d7919c30b/packages/evoresearch-app/cordis.patch.yml) · **身份:** `@evoresearch/dsh-app`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `database` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Bottom Bar** · [kc0ed/dsh-bottom-bar@01d8433](https://github.com/kc0ed/dsh-bottom-bar/commit/01d843306e7d3f0819b9e8ac28f0478be2b2d801) — 可配置的输入框底部统计栏，含费用估算与本地持久用量账本。
  - **证据:** [manifest](https://github.com/kc0ed/dsh-bottom-bar/blob/01d843306e7d3f0819b9e8ac28f0478be2b2d801/package.json) → [patch](https://github.com/kc0ed/dsh-bottom-bar/blob/01d843306e7d3f0819b9e8ac28f0478be2b2d801/cordis.patch.yml) · **身份:** `@kc0ed/dsh-bottom-bar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `token-meter` `cost-estimation` `browser-storage` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH WhaleGirl** · [KLnormal/dsh_whalegirl@6cf1b30](https://github.com/KLnormal/dsh_whalegirl/commit/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf) — 由 DSH 会话事件驱动的桌面原生动态 WhaleGirl 伴侣。
  - **证据:** [manifest](https://github.com/KLnormal/dsh_whalegirl/blob/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf/package.json) → [patch](https://github.com/KLnormal/dsh_whalegirl/blob/6cf1b30e151e7a3c5f849860acf0a5c010b47fbf/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `SEE LICENSE IN ASSET_LICENSE.md` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-app` `session-data` `audio` `subprocess` `external-model-download` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Workspace Drag** · [lanscer/dsh-workspace-drag@d134d9c](https://github.com/lanscer/dsh-workspace-drag/commit/d134d9c5c62aa447c4e1de5489c426ae3a94aa61) — DSH Workspace Drag 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lanscer/dsh-workspace-drag/blob/d134d9c5c62aa447c4e1de5489c426ae3a94aa61/package.json) → [patch](https://github.com/lanscer/dsh-workspace-drag/blob/d134d9c5c62aa447c4e1de5489c426ae3a94aa61/cordis.patch.yml) · **身份:** `dsh-workspace-drag`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Bell Notify** · [Laplace-bit/dsh-bell-notify@943e178](https://github.com/Laplace-bit/dsh-bell-notify/commit/943e178bd7bdc15628fdcfc5125e058cc0974dee) — 为 Agent 生命周期事件提供 Web Audio 合成铃声与状态提示。
  - **证据:** [manifest](https://github.com/Laplace-bit/dsh-bell-notify/blob/943e178bd7bdc15628fdcfc5125e058cc0974dee/package.json) → [patch](https://github.com/Laplace-bit/dsh-bell-notify/blob/943e178bd7bdc15628fdcfc5125e058cc0974dee/cordis.patch.yml) · **身份:** `dsh-bell-notify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `audio` `agent-events` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Stats HUD** · [lauytgary/dsh_hud_plugin@e3285fc](https://github.com/lauytgary/dsh_hud_plugin/commit/e3285fc9981e91cb2e022d054adb05f5e6f10d2a) — DSH Stats HUD 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lauytgary/dsh_hud_plugin/blob/e3285fc9981e91cb2e022d054adb05f5e6f10d2a/package.json) → [patch](https://github.com/lauytgary/dsh_hud_plugin/blob/e3285fc9981e91cb2e022d054adb05f5e6f10d2a/cordis.patch.yml) · **身份:** `dsh-stats-hud`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Token DAY** · [lemon49/dsh-token-day@b84bc72](https://github.com/lemon49/dsh-token-day/commit/b84bc726a6636095dd27a24d9d6ebeb7488bd4ff) — Token DAY 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lemon49/dsh-token-day/blob/b84bc726a6636095dd27a24d9d6ebeb7488bd4ff/package.json) → [patch](https://github.com/lemon49/dsh-token-day/blob/b84bc726a6636095dd27a24d9d6ebeb7488bd4ff/cordis.patch.yml) · **身份:** `dsh-token-day`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `session-data` `model-tools` `package-install` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Client UI Android** · [LeMonXi-i/dsh-client-ui-android@2dccd80](https://github.com/LeMonXi-i/dsh-client-ui-android/commit/2dccd8033f7510233510b916da9502ef0bc9bb1d) — 为 DSH Web 界面增加 Android 识别与触控优先的响应式布局。
  - **证据:** [manifest](https://github.com/LeMonXi-i/dsh-client-ui-android/blob/2dccd8033f7510233510b916da9502ef0bc9bb1d/package.json) → [patch](https://github.com/LeMonXi-i/dsh-client-ui-android/blob/2dccd8033f7510233510b916da9502ef0bc9bb1d/cordis.patch.yml) · **身份:** `dsh-client-ui-android`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `mobile-layout` `android` `client-injection` `responsive-ui` `github-only` · **核验备注:** 固定源码记录了 npm 与 GitHub 安装，但 npm 无匹配包；未执行 UA 检测、布局修改或浏览器渲染。

- **Routed Subagent** · [leonardoxr/dsh-routed-subagent@e596e8b](https://github.com/leonardoxr/dsh-routed-subagent/commit/e596e8bbffb4a88b34a7ace82068e6518ad2833f) — Routed Subagent 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/leonardoxr/dsh-routed-subagent/blob/e596e8bbffb4a88b34a7ace82068e6518ad2833f/package.json) → [patch](https://github.com/leonardoxr/dsh-routed-subagent/blob/e596e8bbffb4a88b34a7ace82068e6518ad2833f/cordis.patch.yml) · **身份:** `dsh-routed-subagent`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `model-tools` `multi-agent` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **Workbench** · [LingYuYue1/dsh-workbench@cc89934](https://github.com/LingYuYue1/dsh-workbench/commit/cc89934ed45b7d54b4b069feb41c83d92ab87c06) — VSCode 风格工作台面板：文件树 / 多标签预览 / CodeMirror 编辑 / 终端 / Git / 全库搜索 / 变更审查。VSCode-style workbench sidebar panel for DeepSeek Harness.
  - **证据:** [manifest](https://github.com/LingYuYue1/dsh-workbench/blob/cc89934ed45b7d54b4b069feb41c83d92ab87c06/package.json) → [patch](https://github.com/LingYuYue1/dsh-workbench/blob/cc89934ed45b7d54b4b069feb41c83d92ab87c06/cordis.patch.yml) · **身份:** `dsh-workbench`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Pelican** · [Little-Star888/dsh-pelican@f5bb404](https://github.com/Little-Star888/dsh-pelican/commit/f5bb404eaef95dc5d768ccf67ad18fa13134f6ca) — 为 DSH Web 提供鹈鹕骑行动画与全局消息状态提示。
  - **证据:** [manifest](https://github.com/Little-Star888/dsh-pelican/blob/f5bb404eaef95dc5d768ccf67ad18fa13134f6ca/package.json) → [patch](https://github.com/Little-Star888/dsh-pelican/blob/f5bb404eaef95dc5d768ccf67ad18fa13134f6ca/cordis.patch.yml) · **身份:** `dsh-pelican`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `animation` `session-state` `browser-ui` · **核验备注:** 固定源码为 0.1.0，而同仓库 npm 已发布 0.1.1；未执行动画、消息观察、Session 状态或浏览器渲染。

- **DSH Session Rewind** · [LiuJunheng/DeepSeekHarnessGreen@b352856](https://github.com/LiuJunheng/DeepSeekHarnessGreen/commit/b352856b2069c5045b71abee030e9acc9c52324b) — DSH Session Rewind 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/LiuJunheng/DeepSeekHarnessGreen/blob/b352856b2069c5045b71abee030e9acc9c52324b/plugins/dsh-session-rewind/package.json) → [patch](https://github.com/LiuJunheng/DeepSeekHarnessGreen/blob/b352856b2069c5045b71abee030e9acc9c52324b/plugins/dsh-session-rewind/cordis.patch.yml) · **身份:** `dsh-session-rewind`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Quick TOC** · [LyaxZ/dsh-quick-toc@e211d4d](https://github.com/LyaxZ/dsh-quick-toc/commit/e211d4d9d6e19c8bc37889bc1e6e36b391d97ccb) — Quick TOC 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/LyaxZ/dsh-quick-toc/blob/e211d4d9d6e19c8bc37889bc1e6e36b391d97ccb/package.json) → [patch](https://github.com/LyaxZ/dsh-quick-toc/blob/e211d4d9d6e19c8bc37889bc1e6e36b391d97ccb/cordis.patch.yml) · **身份:** `dsh-quick-toc`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `process-control` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Balance** · [lynnss-ai/dsh-balance@685bb40](https://github.com/lynnss-ai/dsh-balance/commit/685bb40a8f53643f35086ec0e94e1bbf585c7a7e) — DSH Balance 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lynnss-ai/dsh-balance/blob/685bb40a8f53643f35086ec0e94e1bbf585c7a7e/package.json) → [patch](https://github.com/lynnss-ai/dsh-balance/blob/685bb40a8f53643f35086ec0e94e1bbf585c7a7e/cordis.patch.yml) · **身份:** `@lynnss-ai/dsh-balance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Frosted Glass** · [makuralymi/dsh-webUI-Glass-Theme@9822e4a](https://github.com/makuralymi/dsh-webUI-Glass-Theme/commit/9822e4a4d6c4e700da2520c47a37d1da87692764) — 带动态明暗切换与定时功能的全局毛玻璃主题。
  - **证据:** [manifest](https://github.com/makuralymi/dsh-webUI-Glass-Theme/blob/9822e4a4d6c4e700da2520c47a37d1da87692764/package.json) → [patch](https://github.com/makuralymi/dsh-webUI-Glass-Theme/blob/9822e4a4d6c4e700da2520c47a37d1da87692764/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `theme` `client-injection` `timer` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Chat Rail** · [Max-Null/dsh-chat-rail@a75058b](https://github.com/Max-Null/dsh-chat-rail/commit/a75058b925d4869065dd879563ab2f07c68ca7db) — 为 DSH 会话加入感知滚动位置的右侧消息导航画卷。
  - **证据:** [manifest](https://github.com/Max-Null/dsh-chat-rail/blob/a75058b925d4869065dd879563ab2f07c68ca7db/package.json) → [patch](https://github.com/Max-Null/dsh-chat-rail/blob/a75058b925d4869065dd879563ab2f07c68ca7db/cordis.patch.yml) · **身份:** `@max-null/dsh-chat-rail`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `conversation-ui` `session-projection` `client-injection` `filesystem-read` · **核验备注:** 已静态核对固定源码、patch、许可证、精确 npm gitHead 与文档安装身份；未运行会话 UI 行为。

- **DSH CoT Summarization** · [MeowLynxSea/dsh-cot-summerization@dd69071](https://github.com/MeowLynxSea/dsh-cot-summerization/commit/dd69071e134a797a574ded3d576a36fa4ce31272) — 隐藏原始推理，并通过可配置的 Chat Completions 接口展示摘要。
  - **证据:** [manifest](https://github.com/MeowLynxSea/dsh-cot-summerization/blob/dd69071e134a797a574ded3d576a36fa4ce31272/package.json) → [patch](https://github.com/MeowLynxSea/dsh-cot-summerization/blob/dd69071e134a797a574ded3d576a36fa4ce31272/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `reasoning-data` `external-network` `credentials` `model-request` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Sticky Note** · [Meredith2328/dsh-sticky-note@ebabb6c](https://github.com/Meredith2328/dsh-sticky-note/commit/ebabb6c746b1495c5f077e440d98b6665d7a61b9) — 把笔记与 TODO 保存到归档目录的 Web 便签面板。
  - **证据:** [manifest](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/package.json) → [patch](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/cordis.patch.yml) · **身份:** `dsh-sticky-note`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem-write` `persistent-data` `client-injection` · **核验备注:** 已确认 host 与 Web client 双端结构；未运行测试通配 DSH peer 与持久化便签写入。

- **Whale PET** · [miku00039-01/dsh-whale-pet@486ef80](https://github.com/miku00039-01/dsh-whale-pet/commit/486ef800e72c4b6be9b5ddf00979f2d145c7bdbd) — 🐋 DSH 鲸鱼娘桌宠插件:/whalepet 命令启动 DeepSeek Harness 桌面宠物(启动/停止/监测服务、双击唤起 GUI)
  - **证据:** [manifest](https://github.com/miku00039-01/dsh-whale-pet/blob/486ef800e72c4b6be9b5ddf00979f2d145c7bdbd/package.json) → [patch](https://github.com/miku00039-01/dsh-whale-pet/blob/486ef800e72c4b6be9b5ddf00979f2d145c7bdbd/cordis.patch.yml) · **身份:** `dsh-whale-pet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Fovea** · [monotykamary/dsh-fovea@92fc987](https://github.com/monotykamary/dsh-fovea/commit/92fc987570aab8e8e4cdb9be6dc9697984d240e0) — Fovea 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/monotykamary/dsh-fovea/blob/92fc987570aab8e8e4cdb9be6dc9697984d240e0/package.json) → [patch](https://github.com/monotykamary/dsh-fovea/blob/92fc987570aab8e8e4cdb9be6dc9697984d240e0/cordis.patch.yml) · **身份:** `dsh-fovea`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-read` `process-control` `session-data` `model-tools` `package-install` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Tool Repair** · [monotykamary/dsh-tool-repair@bbfdff5](https://github.com/monotykamary/dsh-tool-repair/commit/bbfdff52ece52729214390623a057ebae9682624) — Tool Repair 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/monotykamary/dsh-tool-repair/blob/bbfdff52ece52729214390623a057ebae9682624/package.json) → [patch](https://github.com/monotykamary/dsh-tool-repair/blob/bbfdff52ece52729214390623a057ebae9682624/cordis.patch.yml) · **身份:** `dsh-tool-repair`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-write` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `financial` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Visualize** · [Nagi-ovo/dsh-visualize@e3254f7](https://github.com/Nagi-ovo/dsh-visualize/commit/e3254f762cbe4dbf796eca05d73a293f0e8e4a87) — 在对话中生成可流式预览的交互式 HTML 卡片，并使用沙箱渲染。
  - **证据:** [manifest](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/package.json) → [patch](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `github-only` `dynamic-content` `sandbox` · **核验备注:** 包标记为 private；目前只观察到 GitHub 源安装证据。

- **DSH Simplified Chinese UI** · [ngk3pori/dsh-zh-cn-ui@ea388ec](https://github.com/ngk3pori/dsh-zh-cn-ui/commit/ea388ec1ba8a19973ee6f38c6ce309d0d11f6d94) — 通过客户端数据层与 DOM 文本翻译将 DSH 浏览器界面汉化为简体中文。
  - **证据:** [manifest](https://github.com/ngk3pori/dsh-zh-cn-ui/blob/ea388ec1ba8a19973ee6f38c6ce309d0d11f6d94/package.json) → [patch](https://github.com/ngk3pori/dsh-zh-cn-ui/blob/ea388ec1ba8a19973ee6f38c6ce309d0d11f6d94/cordis.patch.yml) · **身份:** `dsh-zh-cn-ui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `localization` `dom-mutation` `client-injection` `manual-git-install` · **核验备注:** 已静态核对固定源码、patch、许可证与文档 Git 克隆安装身份；未运行浏览器汉化代码。

- **Webview Wrapper** · [no1xsyzy/dsh-webview-wrapper@93c78a3](https://github.com/no1xsyzy/dsh-webview-wrapper/commit/93c78a37cdcbfec98cb9794b0be321d7449e8d89) — Webview Wrapper 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/no1xsyzy/dsh-webview-wrapper/blob/93c78a37cdcbfec98cb9794b0be321d7449e8d89/package.json) → [patch](https://github.com/no1xsyzy/dsh-webview-wrapper/blob/93c78a37cdcbfec98cb9794b0be321d7449e8d89/cordis.patch.yml) · **身份:** `dsh-webview-wrapper`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `browser` `model-tools` `package-install` `plugin-management` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Claude** · [Norman-else/dsh-claude@7c7f289](https://github.com/Norman-else/dsh-claude/commit/7c7f289412fe1dec11f26e554210e65a11497d70) — Claude 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Norman-else/dsh-claude/blob/7c7f289412fe1dec11f26e554210e65a11497d70/package.json) → [patch](https://github.com/Norman-else/dsh-claude/blob/7c7f289412fe1dec11f26e554210e65a11497d70/cordis.patch.yml) · **身份:** `@norman-else/dsh-claude`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `mcp` `session-data` `model-tools` `package-install` `multi-agent` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **Ostar DSH Left Sidebar** · [ostar999/ostar-dsh-left-sidebar@5399969](https://github.com/ostar999/ostar-dsh-left-sidebar/commit/539996931956ed712cd8bd8e17c655cb78586607) — Ostar DSH Left Sidebar 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ostar999/ostar-dsh-left-sidebar/blob/539996931956ed712cd8bd8e17c655cb78586607/package.json) → [patch](https://github.com/ostar999/ostar-dsh-left-sidebar/blob/539996931956ed712cd8bd8e17c655cb78586607/cordis.patch.yml) · **身份:** `ostar-dsh-left-sidebar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Task Control** · [p2coder/dsh-task-control@a20e79b](https://github.com/p2coder/dsh-task-control/commit/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339) — 在输入区暂停、恢复或取消当前会话任务的控制组件。
  - **证据:** [manifest](https://github.com/p2coder/dsh-task-control/blob/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339/package.json) → [patch](https://github.com/p2coder/dsh-task-control/blob/a20e79b7cf5afc83fe960564fa5c1c4a6ae8c339/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `task-control` `session-data` `client-injection` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Harness UI Enhancer** · [Physicolor/harness-ui-enhancer@3357651](https://github.com/Physicolor/harness-ui-enhancer/commit/3357651927f22bc5913d2fa09199660212484488) — 统一 DSH Web 视觉样式，并提供布局缩放、字体和聊天宽度的实时控制。
  - **证据:** [manifest](https://github.com/Physicolor/harness-ui-enhancer/blob/3357651927f22bc5913d2fa09199660212484488/package.json) → [patch](https://github.com/Physicolor/harness-ui-enhancer/blob/3357651927f22bc5913d2fa09199660212484488/cordis.patch.yml) · **身份:** `harness-ui-enhancer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `settings-write` `browser-storage` `prepare-build` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.4.0；未执行 prepare 构建、样式注入、设置写入或浏览器渲染。

- **DSH Invest** · [Pikapiku09/dsh-invest-plugin@8260090](https://github.com/Pikapiku09/dsh-invest-plugin/commit/826009099d27af8e083854f5bd83224dab740a4a) — DSH Invest 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Pikapiku09/dsh-invest-plugin/blob/826009099d27af8e083854f5bd83224dab740a4a/packages/dsh-invest/package.json) → [patch](https://github.com/Pikapiku09/dsh-invest-plugin/blob/826009099d27af8e083854f5bd83224dab740a4a/packages/dsh-invest/cordis.patch.yml) · **身份:** `dsh-invest`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Personal Center** · [PolinniZhong/dsh-personal-center@047ed94](https://github.com/PolinniZhong/dsh-personal-center/commit/047ed94a57ebb9ded55ff6844a2d723038f45b7f) — DSH Personal Center 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/PolinniZhong/dsh-personal-center/blob/047ed94a57ebb9ded55ff6844a2d723038f45b7f/package.json) → [patch](https://github.com/PolinniZhong/dsh-personal-center/blob/047ed94a57ebb9ded55ff6844a2d723038f45b7f/cordis.patch.yml) · **身份:** `dsh-personal-center`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **Billing Dashboard** · [rickyfu0625-cell/dsh-billing-dashboard@4b71174](https://github.com/rickyfu0625-cell/dsh-billing-dashboard/commit/4b71174286380f141bcf235242e03b8bac593baf) — DeepSeek Harness 用量看板（永久插件）：账户余额、今日消费与 token 消耗、7 日消费趋势图、一键充值入口，全中文界面。
  - **证据:** [manifest](https://github.com/rickyfu0625-cell/dsh-billing-dashboard/blob/4b71174286380f141bcf235242e03b8bac593baf/package.json) → [patch](https://github.com/rickyfu0625-cell/dsh-billing-dashboard/blob/4b71174286380f141bcf235242e03b8bac593baf/cordis.patch.yml) · **身份:** `dsh-billing-dashboard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `session-data` `model-tools` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Riesbri DSH TUI** · [riesbri/dsh-tui@e051d01](https://github.com/riesbri/dsh-tui/commit/e051d01024bc56b00bfd54e1655ea287f105af85) — 基于 DSH Agent、命令、会话和审批服务提供进程内终端界面。
  - **证据:** [manifest](https://github.com/riesbri/dsh-tui/blob/e051d01024bc56b00bfd54e1655ea287f105af85/packages/tui/package.json) → [patch](https://github.com/riesbri/dsh-tui/blob/e051d01024bc56b00bfd54e1655ea287f105af85/packages/tui/cordis.patch.yml) · **身份:** `@riesbri/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `terminal` `session-data` `approval-flow` `prepare-build` `workspace-dependencies` · **核验备注:** 固定源码现已声明仓库元数据，TUI 与 renderer 包均有公开身份；未执行构建或终端界面。

- **UI Tool Graph** · [rocklau/dsh-ui-tool-graph@ad843f9](https://github.com/rocklau/dsh-ui-tool-graph/commit/ad843f9a88cad160c9c1ba7a30180e84b12feaee) — UI Tool Graph 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/rocklau/dsh-ui-tool-graph/blob/ad843f9a88cad160c9c1ba7a30180e84b12feaee/package.json) → [patch](https://github.com/rocklau/dsh-ui-tool-graph/blob/ad843f9a88cad160c9c1ba7a30180e84b12feaee/cordis.patch.yml) · **身份:** `dsh-ui-tool-graph`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `model-tools` `package-install` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Task Chime** · [ruazero/dsh-task-chime@6575057](https://github.com/ruazero/dsh-task-chime/commit/657505755e9ac662eb67c727fbee5a894e5af5e5) — DSH Task Chime 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ruazero/dsh-task-chime/blob/657505755e9ac662eb67c727fbee5a894e5af5e5/package.json) → [patch](https://github.com/ruazero/dsh-task-chime/blob/657505755e9ac662eb67c727fbee5a894e5af5e5/cordis.patch.yml) · **身份:** `dsh-task-chime`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Mobile** · [saya-ch/dsh-mobile@3ac054e](https://github.com/saya-ch/dsh-mobile/commit/3ac054ed2d93105bb4a43a1f506509086d0aa53a) — 为 Android 与手机浏览器添加移动端 DSH Web 界面及安全局域网网关。
  - **证据:** [manifest](https://github.com/saya-ch/dsh-mobile/blob/3ac054ed2d93105bb4a43a1f506509086d0aa53a/package.json) → [patch](https://github.com/saya-ch/dsh-mobile/blob/3ac054ed2d93105bb4a43a1f506509086d0aa53a/cordis.patch.yml) · **身份:** `dsh-mobile`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `mobile-ui` `lan-access` `tls-certificate` `device-discovery` `client-injection` `prepack-build` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Workbench UI** · [seedaylight/dsh-workbench-ui@43777c9](https://github.com/seedaylight/dsh-workbench-ui/commit/43777c951650c6cfa3699d572e893604d450f224) — DSH Workbench UI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/seedaylight/dsh-workbench-ui/blob/43777c951650c6cfa3699d572e893604d450f224/package.json) → [patch](https://github.com/seedaylight/dsh-workbench-ui/blob/43777c951650c6cfa3699d572e893604d450f224/cordis.patch.yml) · **身份:** `dsh-workbench-ui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Network Mode** · [SeekTureWorld/dsh-network-mode@9397592](https://github.com/SeekTureWorld/dsh-network-mode/commit/93975928707264740048038ef2e657994523aa8b) — DSH Network Mode 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SeekTureWorld/dsh-network-mode/blob/93975928707264740048038ef2e657994523aa8b/package.json) → [patch](https://github.com/SeekTureWorld/dsh-network-mode/blob/93975928707264740048038ef2e657994523aa8b/cordis.patch.yml) · **身份:** `dsh-network-mode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Uagent Sync** · [severin-ye/uagent-sync@a4dd3ee](https://github.com/severin-ye/uagent-sync/commit/a4dd3eef2d6a5c89894172ce9ad9510d56b7ef4e) — U同步 / Uagent Sync — cross-device workspace sync for DeepSeek Harness: backup, restore, and ecosystem update via the uagent-sync CLI.
  - **证据:** [manifest](https://github.com/severin-ye/uagent-sync/blob/a4dd3eef2d6a5c89894172ce9ad9510d56b7ef4e/packages/dsh/package.json) → [patch](https://github.com/severin-ye/uagent-sync/blob/a4dd3eef2d6a5c89894172ce9ad9510d56b7ef4e/packages/dsh/cordis.patch.yml) · **身份:** `uagent-sync-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `filesystem-read` `process-control` `mcp` `browser` `session-data` `package-install` `plugin-management` `multi-agent` `theme` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Codex Pet** · [skr311/dsh-codex-pet@6aa7b86](https://github.com/skr311/dsh-codex-pet/commit/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d) — 导入精灵图宠物并将其渲染为与 Agent 状态联动的 Web 悬浮层。
  - **证据:** [manifest](https://github.com/skr311/dsh-codex-pet/blob/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d/packages/dsh-codex-pet/package.json) → [patch](https://github.com/skr311/dsh-codex-pet/blob/6aa7b86f7c41d1e13f80300539e2e7fd1b87512d/packages/dsh-codex-pet/cordis.patch.yml) · **身份:** `dsh-codex-pet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-pet` `image-assets` `agent-events` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Whale TUI** · [slicenferqin/dsh-whale-tui@1ab3c39](https://github.com/slicenferqin/dsh-whale-tui/commit/1ab3c39bda298d22f3489d88543a388b67fdc407) — Whale TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/slicenferqin/dsh-whale-tui/blob/1ab3c39bda298d22f3489d88543a388b67fdc407/npm/package.json) → [patch](https://github.com/slicenferqin/dsh-whale-tui/blob/1ab3c39bda298d22f3489d88543a388b67fdc407/npm/cordis.patch.yml) · **身份:** `dsh-whale-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `session-data` `model-tools` `package-install` `multi-agent` `theme` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Song Memory** · [songoao25/dsh-song-memory@5783750](https://github.com/songoao25/dsh-song-memory/commit/5783750b211c2b8e7a096c048a93456be4e36cff) — DSH Song Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/songoao25/dsh-song-memory/blob/5783750b211c2b8e7a096c048a93456be4e36cff/package.json) → [patch](https://github.com/songoao25/dsh-song-memory/blob/5783750b211c2b8e7a096c048a93456be4e36cff/cordis.patch.yml) · **身份:** `dsh-song-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Worktime Board** · [spacexun2/dsh-worktime-board@8fe6243](https://github.com/spacexun2/dsh-worktime-board/commit/8fe62434514e7d4aff3668da08f10c1280111ae7) — 带修仙境界体系的日、周、月与学年工时统计看板。
  - **证据:** [manifest](https://github.com/spacexun2/dsh-worktime-board/blob/8fe62434514e7d4aff3668da08f10c1280111ae7/package.json) → [patch](https://github.com/spacexun2/dsh-worktime-board/blob/8fe62434514e7d4aff3668da08f10c1280111ae7/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `time-tracking` `gamification` `client-injection` `browser-storage` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Message Index** · [stnt04/dsh-msg-index@8b9834b](https://github.com/stnt04/dsh-msg-index/commit/8b9834bd97067531b3a030fa3461a371945a450f) — 为当前会话建立用户消息索引并点击跳转的磨砂悬浮控件。
  - **证据:** [manifest](https://github.com/stnt04/dsh-msg-index/blob/8b9834bd97067531b3a030fa3461a371945a450f/package.json) → [patch](https://github.com/stnt04/dsh-msg-index/blob/8b9834bd97067531b3a030fa3461a371945a450f/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `message-navigation` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Frieren DSH Theme** · [SuperKSP/dsh_theme_Frieren@84276f9](https://github.com/SuperKSP/dsh_theme_Frieren/commit/84276f923478017c599ec680c6856c6c860ac926) — 为 DSH Web 界面应用芙莉莲主题的羊皮纸、金色、魔法阵与花瓣视觉。
  - **证据:** [manifest](https://github.com/SuperKSP/dsh_theme_Frieren/blob/84276f923478017c599ec680c6856c6c860ac926/package.json) → [patch](https://github.com/SuperKSP/dsh_theme_Frieren/blob/84276f923478017c599ec680c6856c6c860ac926/cordis.patch.yml) · **身份:** `dsh-client-ui-skin-frieren`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `theme` `client-injection` `visual-assets` `git-source-install` · **核验备注:** 已静态核对固定源码、patch、许可证与仓库专属 Git 安装身份；未运行动画、素材或客户端注入。

- **DSH Minecraft Theme** · [SuperLS-X/dsh-minecraft-theme@06863f0](https://github.com/SuperLS-X/dsh-minecraft-theme/commit/06863f0b70acff752a3c0ccaf33489f686a5bfb4) — DSH Minecraft Theme 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SuperLS-X/dsh-minecraft-theme/blob/06863f0b70acff752a3c0ccaf33489f686a5bfb4/package.json) → [patch](https://github.com/SuperLS-X/dsh-minecraft-theme/blob/06863f0b70acff752a3c0ccaf33489f686a5bfb4/cordis.patch.yml) · **身份:** `@superls-x/dsh-minecraft-theme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Codex** · [syncended/deepseek-harness-openai-codex@4486d15](https://github.com/syncended/deepseek-harness-openai-codex/commit/4486d153936338d29d5002abf6ccd4327572680c) — DSH Codex 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/syncended/deepseek-harness-openai-codex/blob/4486d153936338d29d5002abf6ccd4327572680c/package.json) → [patch](https://github.com/syncended/deepseek-harness-openai-codex/blob/4486d153936338d29d5002abf6ccd4327572680c/cordis.patch.yml) · **身份:** `@syncended/dsh-codex`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Picture in Picture** · [syncended/deepseek-harness-picture-in-picture@591e7d1](https://github.com/syncended/deepseek-harness-picture-in-picture/commit/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20) — 面向 DSH Web 的画中画迷你聊天界面。
  - **证据:** [manifest](https://github.com/syncended/deepseek-harness-picture-in-picture/blob/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20/package.json) → [patch](https://github.com/syncended/deepseek-harness-picture-in-picture/blob/591e7d14c5c1ef9ea1cc5ef8b88449ff9a9a6f20/cordis.patch.yml) · **身份:** `@syncended/dsh-pip`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `picture-in-picture` `session-data` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH macOS Desktop** · [Taylor-Cat/dsh-macos-desktop@c56f308](https://github.com/Taylor-Cat/dsh-macos-desktop/commit/c56f308014b8bda509c36bd80e8475b0bd1026d0) — 以复古 System 7 与 Mac OS 9 桌面整合聊天、文件、终端、浏览器、文档和知识视图。
  - **证据:** [manifest](https://github.com/Taylor-Cat/dsh-macos-desktop/blob/c56f308014b8bda509c36bd80e8475b0bd1026d0/package.json) → [patch](https://github.com/Taylor-Cat/dsh-macos-desktop/blob/c56f308014b8bda509c36bd80e8475b0bd1026d0/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-shell` `terminal` `filesystem-read` `client-injection` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Live2D Companion** · [Tisitan/dsh-live2d-companion@9e03a01](https://github.com/Tisitan/dsh-live2d-companion/commit/9e03a01bdccf6c2eedd42c269f38e716b1edc6e2) — 添加 AI 状态 Web 小组件及可选的 Live2D 桌面置顶伙伴。
  - **证据:** [manifest](https://github.com/Tisitan/dsh-live2d-companion/blob/9e03a01bdccf6c2eedd42c269f38e716b1edc6e2/package.json) → [patch](https://github.com/Tisitan/dsh-live2d-companion/blob/9e03a01bdccf6c2eedd42c269f38e716b1edc6e2/cordis.patch.yml) · **身份:** `dsh-live2d-companion`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `live2d` `desktop-pet` `client-injection` `desktop-window` `github-only` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Pet Companion** · [ToBeWin/DSH-Pet-Companion@53fc630](https://github.com/ToBeWin/DSH-Pet-Companion/commit/53fc630ecb186169622f0ebca5267aae125484dc) — 使用作者随包提供的素材，在 DSH Web 中加入仅本地运行的动态桌宠。
  - **证据:** [manifest](https://github.com/ToBeWin/DSH-Pet-Companion/blob/53fc630ecb186169622f0ebca5267aae125484dc/package.json) → [patch](https://github.com/ToBeWin/DSH-Pet-Companion/blob/53fc630ecb186169622f0ebca5267aae125484dc/cordis.patch.yml) · **身份:** `@tobewin/dsh-pet-companion`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `desktop-pet` `bundled-media` `client-injection` `browser-storage` `prepack-build` `github-only` · **核验备注:** 未发布包记录了固定 GitHub 源码安装，并说明随包桌宠素材为原创；未执行构建、媒体加载、浏览器状态或动画。

- **TUI** · [tomowang/dsh-tui@d83d531](https://github.com/tomowang/dsh-tui/commit/d83d5319397fe332735166728d40037c584ee4ae) — TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/tomowang/dsh-tui/blob/d83d5319397fe332735166728d40037c584ee4ae/package.json) → [patch](https://github.com/tomowang/dsh-tui/blob/d83d5319397fe332735166728d40037c584ee4ae/cordis.patch.yml) · **身份:** `@tomowang/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `subprocess` `session-data` `model-tools` `package-install` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Pet Nutri** · [uckkk/dsh-pet-nutri@83bef20](https://github.com/uckkk/dsh-pet-nutri/commit/83bef20c1397d0b9d64ade13ad23af9510d5a3e0) — DSH Pet Nutri 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-pet-nutri/blob/83bef20c1397d0b9d64ade13ad23af9510d5a3e0/package.json) → [patch](https://github.com/uckkk/dsh-pet-nutri/blob/83bef20c1397d0b9d64ade13ad23af9510d5a3e0/cordis.patch.yml) · **身份:** `dsh-pet-nutri`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Pet Pack** · [uckkk/dsh-pet-pack@3a9c606](https://github.com/uckkk/dsh-pet-pack/commit/3a9c606fe064769ec92825915b4cab73e900ac91) — DSH Pet Pack 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-pet-pack/blob/3a9c606fe064769ec92825915b4cab73e900ac91/package.json) → [patch](https://github.com/uckkk/dsh-pet-pack/blob/3a9c606fe064769ec92825915b4cab73e900ac91/cordis.patch.yml) · **身份:** `dsh-pet-pack`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH Billing Community Bundle** · [Wanbinyu/dsh-billing@198e54d](https://github.com/Wanbinyu/dsh-billing/commit/198e54d5cb8a1cc28aecda97d41cd0fe1d4f5ff7) — 聚合 Host 端计费投影与 DSH Web 用量和成本界面。
  - **证据:** [manifest](https://github.com/Wanbinyu/dsh-billing/blob/198e54d5cb8a1cc28aecda97d41cd0fe1d4f5ff7/package.json) → [patch](https://github.com/Wanbinyu/dsh-billing/blob/198e54d5cb8a1cc28aecda97d41cd0fe1d4f5ff7/cordis.patch.yml) · **身份:** `dsh-billing-community-bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `billing-data` `usage-accounting` `session-data` `filesystem-write` `client-injection` `github-only` · **核验备注:** 仓库提供固定 GitHub 聚合 Bundle，并引用本地组件包；未执行构建、会话投影、账本写入或浏览器界面。

- **Cron Tasks** · [Whale-Zhang/dsh-cron-tasks@feed587](https://github.com/Whale-Zhang/dsh-cron-tasks/commit/feed587f5e470d75b55caa627fa83375d7955bc3) — Scheduled tasks for DeepSeek Harness: sidebar entry under 新会话, plugin settings, and run history kept out of the workspace list.
  - **证据:** [manifest](https://github.com/Whale-Zhang/dsh-cron-tasks/blob/feed587f5e470d75b55caa627fa83375d7955bc3/package.json) → [patch](https://github.com/Whale-Zhang/dsh-cron-tasks/blob/feed587f5e470d75b55caa627fa83375d7955bc3/cordis.patch.yml) · **身份:** `@dsh-external/dsh-cron-tasks`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Client UI Theme Cyberpunk** · [willianangelomn-spec/dsh-cyberpunk-theme@5f6a96f](https://github.com/willianangelomn-spec/dsh-cyberpunk-theme/commit/5f6a96fc5093e1ffe172cb1f2bf7242d94928402) — Client UI Theme Cyberpunk 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/willianangelomn-spec/dsh-cyberpunk-theme/blob/5f6a96fc5093e1ffe172cb1f2bf7242d94928402/package.json) → [patch](https://github.com/willianangelomn-spec/dsh-cyberpunk-theme/blob/5f6a96fc5093e1ffe172cb1f2bf7242d94928402/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-client-ui-theme-cyberpunk`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Achievements** · [WJNCT55555/dsh-achievements@ce6ceb3](https://github.com/WJNCT55555/dsh-achievements/commit/ce6ceb3f3231648565cadcd598edbe50e41eda26) — 带画廊、Toast、奖杯、Dock 联动、跨插件成就和可选匿名统计的 Web 成就系统。
  - **证据:** [manifest](https://github.com/WJNCT55555/dsh-achievements/blob/ce6ceb3f3231648565cadcd598edbe50e41eda26/package.json) → [patch](https://github.com/WJNCT55555/dsh-achievements/blob/ce6ceb3f3231648565cadcd598edbe50e41eda26/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `gamification` `client-injection` `browser-storage` `optional-telemetry` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Dock** · [Wntediluvian/dsh-plugins@7f6fe53](https://github.com/Wntediluvian/dsh-plugins/commit/7f6fe535408e4661621d9086a4509b31f8742eca) — 加入常驻用量面板、提供方余额以及受保护的重启或停止控件。
  - **证据:** [manifest](https://github.com/Wntediluvian/dsh-plugins/blob/7f6fe535408e4661621d9086a4509b31f8742eca/dsh-dock/package.json) → [patch](https://github.com/Wntediluvian/dsh-plugins/blob/7f6fe535408e4661621d9086a4509b31f8742eca/dsh-dock/cordis.patch.yml) · **身份:** `dsh-dock`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `provider-usage` `credentials` `external-network` `process-control` `subprocess` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、包许可证文件、bundle 结构与 monorepo Git 路径安装身份；未执行提供方请求或进程控制。

- **DSH Model Balance** · [wycto/dsh-model-balance@79e0903](https://github.com/wycto/dsh-model-balance/commit/79e0903093378f49713f4650fa827cc66690737f) — 在 DSH Web 侧栏面板显示已配置模型 Provider 的账户余额。
  - **证据:** [manifest](https://github.com/wycto/dsh-model-balance/blob/79e0903093378f49713f4650fa827cc66690737f/package.json) → [patch](https://github.com/wycto/dsh-model-balance/blob/79e0903093378f49713f4650fa827cc66690737f/cordis.patch.yml) · **身份:** `@wycto/dsh-balance-panel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-balance` `credentials` `external-network` `custom-endpoints` `web-route` `client-injection` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.1.1；未执行凭据解析、Provider 请求、自定义端点或浏览器面板。

- **DSH Image Create** · [xiaoyuink/dsh-image-create@90ed40c](https://github.com/xiaoyuink/dsh-image-create/commit/90ed40ceb267510f08080ca91690f34cf37da214) — DSH Image Create 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xiaoyuink/dsh-image-create/blob/90ed40ceb267510f08080ca91690f34cf37da214/package.json) → [patch](https://github.com/xiaoyuink/dsh-image-create/blob/90ed40ceb267510f08080ca91690f34cf37da214/cordis.patch.yml) · **身份:** `@xiaoyuink/dsh-image-create`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `filesystem` `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Session Timeline** · [XiLuovo/dsh-session-timeline@55f3268](https://github.com/XiLuovo/dsh-session-timeline/commit/55f32688719aaf918de7e4bfe5099d9282309acb) — 带滚动定位、消息跳转与预览提示的可折叠对话时间轴。
  - **证据:** [manifest](https://github.com/XiLuovo/dsh-session-timeline/blob/55f32688719aaf918de7e4bfe5099d9282309acb/package.json) → [patch](https://github.com/XiLuovo/dsh-session-timeline/blob/55f32688719aaf918de7e4bfe5099d9282309acb/cordis.patch.yml) · **身份:** `dsh-session-timeline`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `message-navigation` `scroll-spy` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Easy Port Manager** · [xswt442-cmd/dsh-easy-port-manager@3add732](https://github.com/xswt442-cmd/dsh-easy-port-manager/commit/3add7329082bddfc1ca1a7a46951827581e91f70) — DSH 缁狅紕鎮? sidebar button + floating panel listing every dsh web instance on ports 3080-3129 (port, PID, live status) with graceful one-click stop, including Task-Manager-style stop of the current instance.
  - **证据:** [manifest](https://github.com/xswt442-cmd/dsh-easy-port-manager/blob/3add7329082bddfc1ca1a7a46951827581e91f70/package.json) → [patch](https://github.com/xswt442-cmd/dsh-easy-port-manager/blob/3add7329082bddfc1ca1a7a46951827581e91f70/cordis.patch.yml) · **身份:** `dsh-easy-port-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Deepseek Web** · [y-wi/dsh-deepseek-web@7ada18c](https://github.com/y-wi/dsh-deepseek-web/commit/7ada18c90faaca11a416d7e03fe830fafab33070) — DSH Deepseek Web 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/y-wi/dsh-deepseek-web/blob/7ada18c90faaca11a416d7e03fe830fafab33070/packages/plugin/package.json) → [patch](https://github.com/y-wi/dsh-deepseek-web/blob/7ada18c90faaca11a416d7e03fe830fafab33070/packages/plugin/cordis.patch.yml) · **身份:** `dsh-deepseek-web`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `credentials` `client-injection` `browser` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Fold** · [Yancey2023/dsh-fold@f1b5212](https://github.com/Yancey2023/dsh-fold/commit/f1b52127892770aa4cc71284a5ca1805dea2a96c) — 折叠 DSH Web 界面的会话轮次与工具行以减少视觉噪声。
  - **证据:** [manifest](https://github.com/Yancey2023/dsh-fold/blob/f1b52127892770aa4cc71284a5ca1805dea2a96c/package.json) → [patch](https://github.com/Yancey2023/dsh-fold/blob/f1b52127892770aa4cc71284a5ca1805dea2a96c/cordis.patch.yml) · **身份:** `dsh-fold`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `conversation-ui` `client-injection` `session-data` `custom-install-script` · **核验备注:** 已静态核对固定源码、patch、许可证与 GitHub 源安装身份；未运行自定义安装脚本、测试或浏览器 UI。

- **DSH Enhance Workspace** · [yangshen830-eng/dsh-enhance-workspace@9f9fc69](https://github.com/yangshen830-eng/dsh-enhance-workspace/commit/9f9fc69b498c8da18e7eb3ef308f49f1d298a6f0) — DSH Enhance Workspace 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yangshen830-eng/dsh-enhance-workspace/blob/9f9fc69b498c8da18e7eb3ef308f49f1d298a6f0/package.json) → [patch](https://github.com/yangshen830-eng/dsh-enhance-workspace/blob/9f9fc69b498c8da18e7eb3ef308f49f1d298a6f0/cordis.patch.yml) · **身份:** `dsh-enhance-workspace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Usage Stats** · [Ychris12138/dsh-usage-stats@8f33be3](https://github.com/Ychris12138/dsh-usage-stats/commit/8f33be3fe9a2d5fd7266624940faf55fefc9a8eb) — DSH Usage Stats 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ychris12138/dsh-usage-stats/blob/8f33be3fe9a2d5fd7266624940faf55fefc9a8eb/package.json) → [patch](https://github.com/Ychris12138/dsh-usage-stats/blob/8f33be3fe9a2d5fd7266624940faf55fefc9a8eb/cordis.patch.yml) · **身份:** `dsh-usage-stats`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Omp Tui** · [yiran-ye/dsh-omp-tui@c10b6d7](https://github.com/yiran-ye/dsh-omp-tui/commit/c10b6d778249eaf6c239c28ba407ec480527637b) — DSH Omp Tui 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yiran-ye/dsh-omp-tui/blob/c10b6d778249eaf6c239c28ba407ec480527637b/package.json) → [patch](https://github.com/yiran-ye/dsh-omp-tui/blob/c10b6d778249eaf6c239c28ba407ec480527637b/cordis.patch.yml) · **身份:** `dsh-omp-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `process-control` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Wallpaper Share** · [YRN-playmaker/dsh-wallpaper_share@a271e7f](https://github.com/YRN-playmaker/dsh-wallpaper_share/commit/a271e7f3df7b17a1bedd0fe496c386edc8309aa9) — 通过 DSH 宿主与浏览器客户端 bundle 同步和共享壁纸状态。
  - **证据:** [manifest](https://github.com/YRN-playmaker/dsh-wallpaper_share/blob/a271e7f3df7b17a1bedd0fe496c386edc8309aa9/package.json) → [patch](https://github.com/YRN-playmaker/dsh-wallpaper_share/blob/a271e7f3df7b17a1bedd0fe496c386edc8309aa9/cordis.patch.yml) · **身份:** `dsh-wallpaper_share`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `wallpaper` `external-network` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、patch、许可证与 GitHub 源安装身份；未执行轮询、路由、存储或客户端行为。

- **DSH Icon Theme** · [yzke/dsh-icon-theme@2e341d8](https://github.com/yzke/dsh-icon-theme/commit/2e341d850745ba29ae688de0eb882ecbabd17888) — 为 DSH 设置与侧栏界面添加自动识别且可自定义的图标。
  - **证据:** [manifest](https://github.com/yzke/dsh-icon-theme/blob/2e341d850745ba29ae688de0eb882ecbabd17888/package.json) → [patch](https://github.com/yzke/dsh-icon-theme/blob/2e341d850745ba29ae688de0eb882ecbabd17888/cordis.patch.yml) · **身份:** `dsh-icon-theme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `icon-theme` `settings-write` `filesystem-read` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Context Panel** · [zhangxiang1993621/dsh-context-panel@aa2c80c](https://github.com/zhangxiang1993621/dsh-context-panel/commit/aa2c80c02a02af9ace46e22adb504ace45bdca8b) — 在布局面板中展示当前会话使用的技能、规则与文件。
  - **证据:** [manifest](https://github.com/zhangxiang1993621/dsh-context-panel/blob/aa2c80c02a02af9ace46e22adb504ace45bdca8b/package.json) → [patch](https://github.com/zhangxiang1993621/dsh-context-panel/blob/aa2c80c02a02af9ace46e22adb504ace45bdca8b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `filesystem-read` `client-injection` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Settings NAV Organizer** · [zhengjy01/dsh-settings-nav-organizer@660a152](https://github.com/zhengjy01/dsh-settings-nav-organizer/commit/660a152432d71c4f13c8d6575504fa34b60df22d) — Settings NAV Organizer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zhengjy01/dsh-settings-nav-organizer/blob/660a152432d71c4f13c8d6575504fa34b60df22d/package.json) → [patch](https://github.com/zhengjy01/dsh-settings-nav-organizer/blob/660a152432d71c4f13c8d6575504fa34b60df22d/cordis.patch.yml) · **身份:** `dsh-settings-nav-organizer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Web UI All** · [zhu1090093659/dsh-web-ui@5153e9a](https://github.com/zhu1090093659/dsh-web-ui/commit/5153e9ad487bb597f45095503b9aa50f4faa4add) — 聚合任务看板、Git、终端、远程 UI、统计、桌宠与皮肤的 Web UI bundle。
  - **证据:** [manifest](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/cordis.patch.yml) · **身份:** `@linxin666/dsh-web-ui-all`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `aggregate-scope` `terminal` `ssh` `git` `native-build` · **核验备注:** 聚合范围很广且包含 prepare 构建，使用前需要更高强度的审查。

#### 开发者工具

- **DSH Mcmp** · [Aampidy/dsh-mcmp@9013691](https://github.com/Aampidy/dsh-mcmp/commit/9013691be6402aeed4a1f241d00ba76d0baf4373) — DSH Mcmp 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Aampidy/dsh-mcmp/blob/9013691be6402aeed4a1f241d00ba76d0baf4373/package.json) → [patch](https://github.com/Aampidy/dsh-mcmp/blob/9013691be6402aeed4a1f241d00ba76d0baf4373/cordis.patch.yml) · **身份:** `dsh-mcmp`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH Zh Kit** · [CatmaoU/dsh-zh-kit@2d00abe](https://github.com/CatmaoU/dsh-zh-kit/commit/2d00abeb62bb0306de1638a8de574f731fc88e71) — DSH Zh Kit 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/CatmaoU/dsh-zh-kit/blob/2d00abeb62bb0306de1638a8de574f731fc88e71/package.json) → [patch](https://github.com/CatmaoU/dsh-zh-kit/blob/2d00abeb62bb0306de1638a8de574f731fc88e71/cordis.patch.yml) · **身份:** `dsh-zh-kit`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem` `external-network` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Codegraph** · [CC19990113/dsh-plugin-codegraph@94b0fd3](https://github.com/CC19990113/dsh-plugin-codegraph/commit/94b0fd32cc2a7f679522ed042f6db62435ad1392) — 基于 Tree-sitter 与 SQLite 构建代码图，并向 DSH Agent 提供符号、调用方、可达性与索引工具。
  - **证据:** [manifest](https://github.com/CC19990113/dsh-plugin-codegraph/blob/94b0fd32cc2a7f679522ed042f6db62435ad1392/packages/bundle/package.json) → [patch](https://github.com/CC19990113/dsh-plugin-codegraph/blob/94b0fd32cc2a7f679522ed042f6db62435ad1392/packages/bundle/cordis.patch.yml) · **身份:** `dsh-plugin-codegraph`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `filesystem-watch` `sqlite` `tree-sitter` `model-tools` · **核验备注:** 固定源码为 0.1.0，而同包目录 npm 已发布 0.1.4；未执行源码扫描、监听器、原生解析器、数据库或工具。

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

- **Safe Launch** · [dHR-P/dsh-safe-launch@d064de1](https://github.com/dHR-P/dsh-safe-launch/commit/d064de16528f317b6107a9d0477be4e579036c71) — DSH 鐎瑰鍙忛崥顖氬З閸ｃ劍褰冩禒璁圭窗娴犺缍?dsh 閻楀牊婀伴崸鍥у讲鐎瑰顥婇獮鑸殿劀鐢晲濞囬悽銊⑩偓鏂衡偓鏂挎儙閸斻劌鎳℃禒銈嗗瘻鐎瑰じ瀵岄悧鍫熸拱閼奉亪鈧倸绨查幑鏇″箯閿涘苯宸婚崣鑼閺堫剙鍙忛柌蹇撳悑鐎瑰湱鐓╅梼闈涚杽濞村绱辨＃鏍偧娴ｈ法鏁ゆ稉搴㈡珮闁碍褰冩禒鑸垫￥瀵偊绱遍幒鍫熸綀閹恒儳顓搁妴浣告倱閹板繐鍩楅弽绋跨妇閸楀洨楠囬柌鎴滅闂嗏偓閵嗕焦褰冩禒璺哄悑鐎硅鈧勵梾閺屻儱鐣ㄧ憗鍛偓浣圭閸楁洜婀呴梻銊у珝閵嗕總afe launcher for DeepSeek Harness: works on any dsh version with adaptive boot-command capture, full historical-version compatibility matrix, normal-plugin first-run, consent-based takeover and updates.
  - **证据:** [manifest](https://github.com/dHR-P/dsh-safe-launch/blob/d064de16528f317b6107a9d0477be4e579036c71/package.json) → [patch](https://github.com/dHR-P/dsh-safe-launch/blob/d064de16528f317b6107a9d0477be4e579036c71/cordis.patch.yml) · **身份:** `dsh-safe-launch`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Arch Doc** · [duyanta123/arch-doc@76fcfaf](https://github.com/duyanta123/arch-doc/commit/76fcfafada67c6eaa25c86769271eae19dcc4132) — 分析代码库并生成模块职责、依赖关系、入口点与运行方式架构文档的文件系统技能。
  - **证据:** [manifest](https://github.com/duyanta123/arch-doc/blob/76fcfafada67c6eaa25c86769271eae19dcc4132/package.json) → [patch](https://github.com/duyanta123/arch-doc/blob/76fcfafada67c6eaa25c86769271eae19dcc4132/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `filesystem-write` `code-analysis` `documentation-generation` `github-only` · **核验备注:** 文档记录了固定 GitHub 安装；通配 skill-filesystem peer 无法证明兼容性，未读取代码库或生成文档。

- **DSH Workbench** · [ghbhiee/dsh-plugins@2017411](https://github.com/ghbhiee/dsh-plugins/commit/2017411fca73e4294335eb25ea1ddaf6a5cb986b) — 集成终端、文件浏览器与文件预览的 Web 工作台。
  - **证据:** [manifest](https://github.com/ghbhiee/dsh-plugins/blob/2017411fca73e4294335eb25ea1ddaf6a5cb986b/packages/workbench/package.json) → [patch](https://github.com/ghbhiee/dsh-plugins/blob/2017411fca73e4294335eb25ea1ddaf6a5cb986b/packages/workbench/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `terminal` `subprocess` `filesystem-read` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Greet** · [HDylanYueH/dsh-greet@04cd363](https://github.com/HDylanYueH/dsh-greet/commit/04cd363df07f5ce33902591703aa9f393e8dc060) — Greet 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/HDylanYueH/dsh-greet/blob/04cd363df07f5ce33902591703aa9f393e8dc060/package.json) → [patch](https://github.com/HDylanYueH/dsh-greet/blob/04cd363df07f5ce33902591703aa9f393e8dc060/cordis.patch.yml) · **身份:** `dsh-greet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Grayprint** · [HongzhongL/dsh-grayprint@5d43d2c](https://github.com/HongzhongL/dsh-grayprint/commit/5d43d2c95fa6412ef10f5b06f761cc7f227573ee) — DSH Grayprint 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/HongzhongL/dsh-grayprint/blob/5d43d2c95fa6412ef10f5b06f761cc7f227573ee/package.json) → [patch](https://github.com/HongzhongL/dsh-grayprint/blob/5d43d2c95fa6412ef10f5b06f761cc7f227573ee/cordis.patch.yml) · **身份:** `dsh-grayprint`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Namecheck** · [HULILI-com/dsh-namecheck@cde96cc](https://github.com/HULILI-com/dsh-namecheck/commit/cde96ccc6af776d9fa773a38bc85cbb7eab7115d) — 软件/品牌取名查重插件：.com 域名注册状态（RDAP 权威数据）+ 商标近似筛查（可配置三方商标 API）
  - **证据:** [manifest](https://github.com/HULILI-com/dsh-namecheck/blob/cde96ccc6af776d9fa773a38bc85cbb7eab7115d/package.json) → [patch](https://github.com/HULILI-com/dsh-namecheck/blob/cde96ccc6af776d9fa773a38bc85cbb7eab7115d/cordis.patch.yml) · **身份:** `dsh-namecheck`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Tool Visual Primitives** · [InkshadeWoods/dsh-tool-visual-primitives@d7957c4](https://github.com/InkshadeWoods/dsh-tool-visual-primitives/commit/d7957c4168824559a905772fbe2770bfa34deead) — DSH Tool Visual Primitives 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/InkshadeWoods/dsh-tool-visual-primitives/blob/d7957c4168824559a905772fbe2770bfa34deead/package.json) → [patch](https://github.com/InkshadeWoods/dsh-tool-visual-primitives/blob/d7957c4168824559a905772fbe2770bfa34deead/cordis.patch.yml) · **身份:** `dsh-tool-visual-primitives`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Console** · [Isanti2016/dsh-console@8d31014](https://github.com/Isanti2016/dsh-console/commit/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4) — 用于 Web 服务、SSH 隧道、单次问答和 TUI 启动的控制台命令。
  - **证据:** [manifest](https://github.com/Isanti2016/dsh-console/blob/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4/package.json) → [patch](https://github.com/Isanti2016/dsh-console/blob/8d310148c7b8e1b0d9bbb3bd7fb40913527792f4/cordis.patch.yml) · **身份:** `dsh-console`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `command-line` `ssh` `subprocess` `service-management` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Context Lens** · [KinomotoMio/dsh-context-lens@e00745a](https://github.com/KinomotoMio/dsh-context-lens/commit/e00745ab36bcb08f2e6ef944a020f39ff5562dc8) — 通过 Host 与 Client 检查界面展示各 DSH 插件注入的模型上下文。
  - **证据:** [manifest](https://github.com/KinomotoMio/dsh-context-lens/blob/e00745ab36bcb08f2e6ef944a020f39ff5562dc8/package.json) → [patch](https://github.com/KinomotoMio/dsh-context-lens/blob/e00745ab36bcb08f2e6ef944a020f39ff5562dc8/cordis.patch.yml) · **身份:** `@kinomotomio/dsh-context-lens`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `model-context` `session-data` `system-prompt` `client-injection` `host-api` `github-only` · **核验备注:** 存在匹配的固定 GitHub 源码，npm 无同名包；未读取模型上下文、Session 数据、Host API，亦未执行 Client UI、测试或构建。

- **DSH Selection Highlight** · [kxSenlin/dsh-selection-highlight@6ece433](https://github.com/kxSenlin/dsh-selection-highlight/commit/6ece4332c71d73778dec9659467588d878470829) — DSH Selection Highlight 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kxSenlin/dsh-selection-highlight/blob/6ece4332c71d73778dec9659467588d878470829/package.json) → [patch](https://github.com/kxSenlin/dsh-selection-highlight/blob/6ece4332c71d73778dec9659467588d878470829/cordis.patch.yml) · **身份:** `dsh-selection-highlight`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH Exec Extension** · [LvDAO/dsh-exec-extension@1a7c4e1](https://github.com/LvDAO/dsh-exec-extension/commit/1a7c4e1e91740047f4aa501453f08e4e5fee1cfa) — DSH Exec Extension 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/LvDAO/dsh-exec-extension/blob/1a7c4e1e91740047f4aa501453f08e4e5fee1cfa/package.json) → [patch](https://github.com/LvDAO/dsh-exec-extension/blob/1a7c4e1e91740047f4aa501453f08e4e5fee1cfa/cordis.patch.yml) · **身份:** `dsh-exec-extension`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `filesystem` `external-network` `credentials` `client-injection` `mcp` `native-helper` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Bash Terminal** · [MAXeaglet/dsh-bash-terminal@6894913](https://github.com/MAXeaglet/dsh-bash-terminal/commit/6894913d71098f2ea24120d3a1afd5771f9ccd4a) — 在 Windows 上按配置把命令路由到 PowerShell、Git Bash 或 WSL 的 Shell 工具。
  - **证据:** [manifest](https://github.com/MAXeaglet/dsh-bash-terminal/blob/6894913d71098f2ea24120d3a1afd5771f9ccd4a/package.json) → [patch](https://github.com/MAXeaglet/dsh-bash-terminal/blob/6894913d71098f2ea24120d3a1afd5771f9ccd4a/cordis.patch.yml) · **身份:** `dsh-bash-terminal`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `subprocess` `shell` `windows` `configuration-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Session Control** · [mouliangyu/dsh-plugins@4c03d96](https://github.com/mouliangyu/dsh-plugins/commit/4c03d96049ceac75729817f249a235384ea30dce) — DSH Session Control 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/mouliangyu/dsh-plugins/blob/4c03d96049ceac75729817f249a235384ea30dce/packages/session-control/package.json) → [patch](https://github.com/mouliangyu/dsh-plugins/blob/4c03d96049ceac75729817f249a235384ea30dce/packages/session-control/cordis.patch.yml) · **身份:** `dsh-session-control`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Session Lifecycle** · [mrzhangkris/dsh-session-lifecycle@2020895](https://github.com/mrzhangkris/dsh-session-lifecycle/commit/20208959882a68c109558b38401eea94edb1f57f) — DSH Session Lifecycle 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/mrzhangkris/dsh-session-lifecycle/blob/20208959882a68c109558b38401eea94edb1f57f/package.json) → [patch](https://github.com/mrzhangkris/dsh-session-lifecycle/blob/20208959882a68c109558b38401eea94edb1f57f/cordis.patch.yml) · **身份:** `dsh-session-lifecycle`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Large Project Performance** · [orangeofcarl0-sys/dsh-large-proj-perf@cb957b4](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/commit/cb957b4c3dfdf39c762f8912c3463c34a652287e) — 针对大会话的 fork 初始化、投影预热、缓存回填、物化、LRU 裁剪与堆检测优化。
  - **证据:** [manifest](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/blob/cb957b4c3dfdf39c762f8912c3463c34a652287e/package.json) → [patch](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf/blob/cb957b4c3dfdf39c762f8912c3463c34a652287e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `performance-patch` `session-data` `cache` `memory-management` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Superpower** · [pai535Huang/dsh-superpower@c35de08](https://github.com/pai535Huang/dsh-superpower/commit/c35de085dd20f30522eb2393dcfe0df54a08225c) — DSH Superpower 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/pai535Huang/dsh-superpower/blob/c35de085dd20f30522eb2393dcfe0df54a08225c/package.json) → [patch](https://github.com/pai535Huang/dsh-superpower/blob/c35de085dd20f30522eb2393dcfe0df54a08225c/cordis.patch.yml) · **身份:** `dsh-superpower`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH Code IDE** · [SakalioLabs/dsh-code-ide@51d49f4](https://github.com/SakalioLabs/dsh-code-ide/commit/51d49f405a4e0d28592b6add36548fe0c28b68fa) — 为 DSH 增加可选浏览器 IDE，支持文件编辑、搜索、终端和语言感知的 CodeMirror 界面。
  - **证据:** [manifest](https://github.com/SakalioLabs/dsh-code-ide/blob/51d49f405a4e0d28592b6add36548fe0c28b68fa/package.json) → [patch](https://github.com/SakalioLabs/dsh-code-ide/blob/51d49f405a4e0d28592b6add36548fe0c28b68fa/cordis.patch.yml) · **身份:** `dsh-code-ide`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `filesystem-write` `terminal` `subprocess` `native-dependencies` `websocket` `client-injection` `alpha-release` `github-only` · **核验备注:** 该 Alpha Bundle 具有固定 GitHub 身份，并包含原生终端、ripgrep、FFI 与浏览器界面；均未构建、安装或执行。

- **VS Game** · [shang-han/dsh-vs-game@ebf4994](https://github.com/shang-han/dsh-vs-game/commit/ebf49946dff41ca0b38cd59d6468a4577bfc89e9) — 工作中的大肥鱼：工作驱动的解压小游戏。文件是敌人，token 是经验，DSH 干活就是你变强的方式。
  - **证据:** [manifest](https://github.com/shang-han/dsh-vs-game/blob/ebf49946dff41ca0b38cd59d6468a4577bfc89e9/package.json) → [patch](https://github.com/shang-han/dsh-vs-game/blob/ebf49946dff41ca0b38cd59d6468a4577bfc89e9/cordis.patch.yml) · **身份:** `dsh-vs-game`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **Color** · [TYEclipse/dsh-color@83e0446](https://github.com/TYEclipse/dsh-color/commit/83e04463db328272faca0acf62018546acb1e350) — Color 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/TYEclipse/dsh-color/blob/83e04463db328272faca0acf62018546acb1e350/package.json) → [patch](https://github.com/TYEclipse/dsh-color/blob/83e04463db328272faca0acf62018546acb1e350/cordis.patch.yml) · **身份:** `dsh-color`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Air Plant** · [uckkk/dsh-air-plant@d018d28](https://github.com/uckkk/dsh-air-plant/commit/d018d28b598caa461ad9bd0ed5365d87ba3bd72e) — DSH Air Plant 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-air-plant/blob/d018d28b598caa461ad9bd0ed5365d87ba3bd72e/package.json) → [patch](https://github.com/uckkk/dsh-air-plant/blob/d018d28b598caa461ad9bd0ed5365d87ba3bd72e/cordis.patch.yml) · **身份:** `dsh-air-plant`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Bone Aid** · [uckkk/dsh-bone-aid@9ee1200](https://github.com/uckkk/dsh-bone-aid/commit/9ee120064fe60d1ee8c45d738ad7429fe99c64fc) — DSH Bone Aid 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-bone-aid/blob/9ee120064fe60d1ee8c45d738ad7429fe99c64fc/package.json) → [patch](https://github.com/uckkk/dsh-bone-aid/blob/9ee120064fe60d1ee8c45d738ad7429fe99c64fc/cordis.patch.yml) · **身份:** `dsh-bone-aid`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Curtain Pick** · [uckkk/dsh-curtain-pick@97a3e78](https://github.com/uckkk/dsh-curtain-pick/commit/97a3e7833b9b4d3cfd4c39026566e44b8a1d7671) — DSH Curtain Pick 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-curtain-pick/blob/97a3e7833b9b4d3cfd4c39026566e44b8a1d7671/package.json) → [patch](https://github.com/uckkk/dsh-curtain-pick/blob/97a3e7833b9b4d3cfd4c39026566e44b8a1d7671/cordis.patch.yml) · **身份:** `dsh-curtain-pick`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Kitchen Exhaust** · [uckkk/dsh-kitchen-exhaust@54e88e4](https://github.com/uckkk/dsh-kitchen-exhaust/commit/54e88e4bb180e26ec92b41304954e28c9186bf72) — DSH Kitchen Exhaust 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-kitchen-exhaust/blob/54e88e4bb180e26ec92b41304954e28c9186bf72/package.json) → [patch](https://github.com/uckkk/dsh-kitchen-exhaust/blob/54e88e4bb180e26ec92b41304954e28c9186bf72/cordis.patch.yml) · **身份:** `dsh-kitchen-exhaust`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Mover Pick** · [uckkk/dsh-mover-pick@21172d9](https://github.com/uckkk/dsh-mover-pick/commit/21172d9e1c4ff2561eedcdfadd03c86298e5eb43) — DSH Mover Pick 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-mover-pick/blob/21172d9e1c4ff2561eedcdfadd03c86298e5eb43/package.json) → [patch](https://github.com/uckkk/dsh-mover-pick/blob/21172d9e1c4ff2561eedcdfadd03c86298e5eb43/cordis.patch.yml) · **身份:** `dsh-mover-pick`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Multi Furniture** · [uckkk/dsh-multi-furniture@e6e040d](https://github.com/uckkk/dsh-multi-furniture/commit/e6e040d80c6ae549ad94d7e5429c7d546908c1b2) — DSH Multi Furniture 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-multi-furniture/blob/e6e040d80c6ae549ad94d7e5429c7d546908c1b2/package.json) → [patch](https://github.com/uckkk/dsh-multi-furniture/blob/e6e040d80c6ae549ad94d7e5429c7d546908c1b2/cordis.patch.yml) · **身份:** `dsh-multi-furniture`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH No Main Light** · [uckkk/dsh-no-main-light@159615e](https://github.com/uckkk/dsh-no-main-light/commit/159615e9d6090031f3bd64adae5f66ac89513acd) — DSH No Main Light 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-no-main-light/blob/159615e9d6090031f3bd64adae5f66ac89513acd/package.json) → [patch](https://github.com/uckkk/dsh-no-main-light/blob/159615e9d6090031f3bd64adae5f66ac89513acd/cordis.patch.yml) · **身份:** `dsh-no-main-light`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Red Packet** · [uckkk/dsh-red-packet@7b039db](https://github.com/uckkk/dsh-red-packet/commit/7b039db3056f5bb8b66f6237f6c0081f8c5502d4) — DSH Red Packet 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-red-packet/blob/7b039db3056f5bb8b66f6237f6c0081f8c5502d4/package.json) → [patch](https://github.com/uckkk/dsh-red-packet/blob/7b039db3056f5bb8b66f6237f6c0081f8c5502d4/cordis.patch.yml) · **身份:** `dsh-red-packet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Robot Setup** · [uckkk/dsh-robot-setup@7f4ffc1](https://github.com/uckkk/dsh-robot-setup/commit/7f4ffc1e7b1634e574f5dfb597b8914744ffc17d) — DSH Robot Setup 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uckkk/dsh-robot-setup/blob/7f4ffc1e7b1634e574f5dfb597b8914744ffc17d/package.json) → [patch](https://github.com/uckkk/dsh-robot-setup/blob/7f4ffc1e7b1634e574f5dfb597b8914744ffc17d/cordis.patch.yml) · **身份:** `dsh-robot-setup`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `native-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Git Inspect** · [Wanbinyu/dsh-plugin-git-inspect@51e98c3](https://github.com/Wanbinyu/dsh-plugin-git-inspect/commit/51e98c3780fe29e92c029d8359a22adf1ddf8c23) — 向 DSH 提供只读 Git 状态、差异、日志、分支和仓库检查工具。
  - **证据:** [manifest](https://github.com/Wanbinyu/dsh-plugin-git-inspect/blob/51e98c3780fe29e92c029d8359a22adf1ddf8c23/package.json) → [patch](https://github.com/Wanbinyu/dsh-plugin-git-inspect/blob/51e98c3780fe29e92c029d8359a22adf1ddf8c23/cordis.patch.yml) · **身份:** `dsh-plugin-git-inspect`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `git-read` `subprocess` `filesystem-read` `model-tools` `prepare-build` `github-only` · **核验备注:** 固定 GitHub Bundle 通过 DSH 子进程服务调用 Git，并接受 rc.5 至 rc.6 Peer；未执行 prepare 构建、命令或工具。

- **DSH Git Graph** · [WhitePlusMS/dsh-git-graph@4e4621a](https://github.com/WhitePlusMS/dsh-git-graph/commit/4e4621aa02cd8f88e2c7dabc421d2399d10299a4) — 只读 Git 图谱视图，展示 refs、工作树状态、搜索、筛选与分页历史。
  - **证据:** [manifest](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/package.json) → [patch](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/cordis.patch.yml) · **身份:** `dsh-git-graph`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `git` `workspace-read` · **核验备注:** 声明了精确的 DSH rc.6 peer；未做运行兼容性测试。

- **DSH Git Worktree** · [wloops/dsh-git-worktree@17945c5](https://github.com/wloops/dsh-git-worktree/commit/17945c59ea7a574e27acb6d41591222722a7f1b1) — 基于 Git worktree 的实验性会话目标，包含隔离会话、审核视图、确认交付与清理。
  - **证据:** [manifest](https://github.com/wloops/dsh-git-worktree/blob/17945c59ea7a574e27acb6d41591222722a7f1b1/package.json) → [patch](https://github.com/wloops/dsh-git-worktree/blob/17945c59ea7a574e27acb6d41591222722a7f1b1/cordis.patch.yml) · **身份:** `dsh-git-worktree`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `git-worktree` `session-data` `approval-gate` `filesystem-delete` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Native Reasoning Slider** · [WSL043/dsh-native-reasoning-slider@578ec42](https://github.com/WSL043/dsh-native-reasoning-slider/commit/578ec42c9b221bc504942c9d5f4a3da6a41bc5a0) — Native Reasoning Slider 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/WSL043/dsh-native-reasoning-slider/blob/578ec42c9b221bc504942c9d5f4a3da6a41bc5a0/package.json) → [patch](https://github.com/WSL043/dsh-native-reasoning-slider/blob/578ec42c9b221bc504942c9d5f4a3da6a41bc5a0/cordis.patch.yml) · **身份:** `dsh-native-reasoning-slider`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Hooks Ordering** · [xinyuehtx/dsh-plugin-hooks-ordering@3f9f79f](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering/commit/3f9f79ff1162782a74ebe425e15bf5d84df8895a) — 为独立插件贡献的 Cordis Hook 协调确定性的前后执行顺序。
  - **证据:** [manifest](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering/blob/3f9f79ff1162782a74ebe425e15bf5d84df8895a/package.json) → [patch](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering/blob/3f9f79ff1162782a74ebe425e15bf5d84df8895a/cordis.patch.yml) · **身份:** `@tengxiaohtx/dsh-plugin-hooks-ordering`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `hook-ordering` `agent-events` `tool-events` `model-stream` `filesystem-write` `prepublish-build` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.2.0；未执行 Hook 接管、排序图、日志写入、构建或测试。

- **DSH Launcher** · [XQ-rxslcq/dsh-launcher@046acfb](https://github.com/XQ-rxslcq/dsh-launcher/commit/046acfb4619bf49bb6854ab2a476c10bb127e067) — 可配置隐藏命令行启动方式与动画桌面伴侣窗口的启动器。
  - **证据:** [manifest](https://github.com/XQ-rxslcq/dsh-launcher/blob/046acfb4619bf49bb6854ab2a476c10bb127e067/package.json) → [patch](https://github.com/XQ-rxslcq/dsh-launcher/blob/046acfb4619bf49bb6854ab2a476c10bb127e067/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `application-launcher` `subprocess` `configuration-write` `desktop-app` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Remote SSH** · [Yan-Zero/dsh-remote-ssh@21d727c](https://github.com/Yan-Zero/dsh-remote-ssh/commit/21d727cbe24fbae283196e5101adb3de2bdd9157) — 覆盖文件、子进程、设置与 Web UI 的透明本地和远程 SSH 工作区。
  - **证据:** [manifest](https://github.com/Yan-Zero/dsh-remote-ssh/blob/21d727cbe24fbae283196e5101adb3de2bdd9157/package.json) → [patch](https://github.com/Yan-Zero/dsh-remote-ssh/blob/21d727cbe24fbae283196e5101adb3de2bdd9157/cordis.patch.yml) · **身份:** `dsh-remote-ssh`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `ssh` `remote-execution` `filesystem-write` `credentials` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Web UI Launcher** · [YV3507/dsh-webui-launcher@1028c4f](https://github.com/YV3507/dsh-webui-launcher/commit/1028c4f91f31a8fce4823a26d1f09b88b2838fb0) — 提供用于启动、停止和打开 DSH Web 界面的模型工具、命令与设置卡片。
  - **证据:** [manifest](https://github.com/YV3507/dsh-webui-launcher/blob/1028c4f91f31a8fce4823a26d1f09b88b2838fb0/package.json) → [patch](https://github.com/YV3507/dsh-webui-launcher/blob/1028c4f91f31a8fce4823a26d1f09b88b2838fb0/cordis.patch.yml) · **身份:** `dsh-webui-launcher`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `process-control` `subprocess` `external-network` `filesystem-write` `client-injection` `native-launcher` · **核验备注:** 已静态核对固定源码、patch、许可证、兼容范围与 GitHub 源安装身份；未运行启动器、进程、工具、服务器或浏览器代码。

- **DSH Git Bash Tool** · [zeroa234/dsh-preset-minimal-windows@5e33b0f](https://github.com/zeroa234/dsh-preset-minimal-windows/commit/5e33b0f22c2696a5a66c993dc3a5007397658c81) — 通过宿主子进程接口调用 Windows Git Bash，并支持输出落盘与超时。
  - **证据:** [manifest](https://github.com/zeroa234/dsh-preset-minimal-windows/blob/5e33b0f22c2696a5a66c993dc3a5007397658c81/gitbash-tool/package.json) → [patch](https://github.com/zeroa234/dsh-preset-minimal-windows/blob/5e33b0f22c2696a5a66c993dc3a5007397658c81/gitbash-tool/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `git-bash` `subprocess` `windows` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### Agent 与工作流

- **DSH Plan Lattice** · [1052326311/dsh-plan-lattice@e764f70](https://github.com/1052326311/dsh-plan-lattice/commit/e764f70b5b33a76d1a89624241347ffc9e87459b) — 为长时间运行的 DSH Agent 提供自适应执行契约与证据门控工作图。
  - **证据:** [manifest](https://github.com/1052326311/dsh-plan-lattice/blob/e764f70b5b33a76d1a89624241347ffc9e87459b/package.json) → [patch](https://github.com/1052326311/dsh-plan-lattice/blob/e764f70b5b33a76d1a89624241347ffc9e87459b/cordis.patch.yml) · **身份:** `dsh-plan-lattice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `agent-planning` `filesystem-write` `model-tools` `github-release` `prepack-build` · **核验备注:** GitHub Release 压缩包提供固定安装身份；Peer 混用 rc.5 与 rc.6，未执行预打包构建及工作流行为。

- **Nocode** · [3dot141/nocode-evolve@1187dbf](https://github.com/3dot141/nocode-evolve/commit/1187dbfb42028be681991de00acf15e66751da45) — Nocode 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/3dot141/nocode-evolve/blob/1187dbfb42028be681991de00acf15e66751da45/plugins/deepseek/nocode/package.json) → [patch](https://github.com/3dot141/nocode-evolve/blob/1187dbfb42028be681991de00acf15e66751da45/plugins/deepseek/nocode/cordis.patch.yml) · **身份:** `nocode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `mcp` `process-control` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Forge** · [alex04130/dsh-forge@fae36ff](https://github.com/alex04130/dsh-forge/commit/fae36ff9577ece3d60bd629bb06142fd681e3745) — 一个广泛的扩展 bundle，覆盖跨会话邮件、Agent 团队、模型路由、运行时注入、技能与插件管理。
  - **证据:** [manifest](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/package.json) → [patch](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/cordis.npm.yml) · **身份:** `@dsh-forge/bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `dynamic-loading` `package-management` `filesystem-write` `high-trust-surface` · **核验备注:** 收录的是声明 rc.6 peer 的可分发 npm bundle，而非 private 根源码 manifest；未执行其广泛的运行时注入与管理能力。

- **OMP Advisor** · [AndrasSama/dsh-omp-advisor@863a1e0](https://github.com/AndrasSama/dsh-omp-advisor/commit/863a1e06ae0a2c995fe801b852f18f23a5bc28bd) — OMP Advisor 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AndrasSama/dsh-omp-advisor/blob/863a1e06ae0a2c995fe801b852f18f23a5bc28bd/package.json) → [patch](https://github.com/AndrasSama/dsh-omp-advisor/blob/863a1e06ae0a2c995fe801b852f18f23a5bc28bd/cordis.patch.yml) · **身份:** `dsh-omp-advisor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `financial` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Computer Use** · [Anionex/dsh-computer-use@76bfe86](https://github.com/Anionex/dsh-computer-use/commit/76bfe8607f61945c1cbb84e73976e601100c13a2) — 用于屏幕感知与受控桌面操作的 Computer Use 工具。
  - **证据:** [manifest](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/package.json) → [patch](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/cordis.patch.yml) · **身份:** `@anionex/dsh-computer-use`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `computer-use` `browser` `native-artifacts` · **核验备注:** 声明了精确的 DSH rc.6 peer；广泛电脑控制仍属于高信任能力。

- **DSH Expert Mode** · [Asher-2000/dsh-expert-mode@55d5835](https://github.com/Asher-2000/dsh-expert-mode/commit/55d5835fc3634394495afa0b759cc874622fe0be) — 为 DSH 委派工作流提供协调者人格与 11 个领域专家 Subagent 预设。
  - **证据:** [manifest](https://github.com/Asher-2000/dsh-expert-mode/blob/55d5835fc3634394495afa0b759cc874622fe0be/package.json) → [patch](https://github.com/Asher-2000/dsh-expert-mode/blob/55d5835fc3634394495afa0b759cc874622fe0be/cordis.patch.yml) · **身份:** `dsh-expert-mode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `agent-preset` `subagent-delegation` `persona-injection` `github-only` · **核验备注:** 存在可固定的根目录 Git 源码身份，但 npm 无同名包；未加载人格、Agent Realm 或委派流程。

- **DH Multiagents** · [atesahmet0/dh-workspace@fb1f22c](https://github.com/atesahmet0/dh-workspace/commit/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e) — 带工具矩阵强制、持久化委派、可复用预设、方法技能与 worktree 操作的角色化多 Agent bundle。
  - **证据:** [manifest](https://github.com/atesahmet0/dh-workspace/blob/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e/package.json) → [patch](https://github.com/atesahmet0/dh-workspace/blob/fb1f22c456f7a6e64ddd9bf773c87cb5d79b452e/cordis.patch.yml) · **身份:** `@dh-multiagents/bundle`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `postinstall` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `filesystem-write` `git-worktree` `model-routing` `postinstall` · **核验备注:** 公开 bundle 身份可解析且文档面向 rc.6；其需批准的 postinstall 会镜像预设，未运行生命周期或 Agent 操作。

- **DSH CC Agents** · [Bcy2020/dsh-cc-ecosystem@486441b](https://github.com/Bcy2020/dsh-cc-ecosystem/commit/486441ba06baddbc29b7f82431a795541d2c0369) — 把 Claude Code Agent 定义转换为带 persona、工具过滤、技能与模型别名的 DSH 子 Agent 适配器。
  - **证据:** [manifest](https://github.com/Bcy2020/dsh-cc-ecosystem/blob/486441ba06baddbc29b7f82431a795541d2c0369/packages/cc-agents/package.json) → [patch](https://github.com/Bcy2020/dsh-cc-ecosystem/blob/486441ba06baddbc29b7f82431a795541d2c0369/packages/cc-agents/cordis.patch.yml) · **身份:** `dsh-cc-agents`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `multi-agent` `filesystem-read` `prompt-injection` `tool-filtering` `model-routing` · **核验备注:** 公开包映射到该 monorepo；通配 DSH peer 无法证明兼容性，未加载 Claude 资产或子 Agent。

- **Think Expand** · [BrianHIO-x/dsh-think-expand@2cd4d28](https://github.com/BrianHIO-x/dsh-think-expand/commit/2cd4d284bf86cdb799bb042f8ea0e5070350fd7e) — Think Expand 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/BrianHIO-x/dsh-think-expand/blob/2cd4d284bf86cdb799bb042f8ea0e5070350fd7e/package.json) → [patch](https://github.com/BrianHIO-x/dsh-think-expand/blob/2cd4d284bf86cdb799bb042f8ea0e5070350fd7e/cordis.patch.yml) · **身份:** `dsh-think-expand`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Message Timeline Navigation** · [cokiscarazo-rgb/dsh-plugin-message-timeline-navigation@2ef241a](https://github.com/cokiscarazo-rgb/dsh-plugin-message-timeline-navigation/commit/2ef241a4f3aee88bdedd7c48a2c3e0ecde743c1f) — Message Timeline Navigation 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/cokiscarazo-rgb/dsh-plugin-message-timeline-navigation/blob/2ef241a4f3aee88bdedd7c48a2c3e0ecde743c1f/package.json) → [patch](https://github.com/cokiscarazo-rgb/dsh-plugin-message-timeline-navigation/blob/2ef241a4f3aee88bdedd7c48a2c3e0ecde743c1f/cordis.patch.yml) · **身份:** `dsh-plugin-message-timeline-navigation`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Enterprise** · [Como44/dsh-enterprise@e4e6893](https://github.com/Como44/dsh-enterprise/commit/e4e68935392e57337eff199fed2385fc8a74abc3) — Enterprise 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Como44/dsh-enterprise/blob/e4e68935392e57337eff199fed2385fc8a74abc3/package.json) → [patch](https://github.com/Como44/dsh-enterprise/blob/e4e68935392e57337eff199fed2385fc8a74abc3/cordis.patch.yml) · **身份:** `dsh-enterprise`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Captain Call** · [Daisy2048/dsh-captain-call@d2b7406](https://github.com/Daisy2048/dsh-captain-call/commit/d2b740660b97b1189a5cadc769955e90b0b00706) — 面向 AgentTeams 完成事件的桌面来电式通知器，支持本地语音合成、可选麦克风回复与对话归档。
  - **证据:** [manifest](https://github.com/Daisy2048/dsh-captain-call/blob/d2b740660b97b1189a5cadc769955e90b0b00706/package.json) → [patch](https://github.com/Daisy2048/dsh-captain-call/blob/d2b740660b97b1189a5cadc769955e90b0b00706/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-read` `audio` `microphone` `external-model-download` · **核验备注:** 私有包文档记录了本地源码安装；未执行音频、模型下载、麦克风或 AgentTeams 状态访问。

- **DSH AE Team** · [ddddjaak/dsh-ae-team@35a7494](https://github.com/ddddjaak/dsh-ae-team/commit/35a74945db2efd6f4425cdc5e4f611f7d05aee38) — 面向 DSH Web 的应用工程团队包，包含七个角色定义、专业技能与 Mermaid 图模板。
  - **证据:** [manifest](https://github.com/ddddjaak/dsh-ae-team/blob/35a74945db2efd6f4425cdc5e4f611f7d05aee38/package.json) → [patch](https://github.com/ddddjaak/dsh-ae-team/blob/35a74945db2efd6f4425cdc5e4f611f7d05aee38/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `multi-agent` `filesystem-skill` `prompt-injection` `dynamic-mermaid` `github-only` · **核验备注:** 文档记录了源码 link 安装；manifest 未声明 DSH peer 范围，未加载角色、技能、提示词或图模板。

- **Annotation Patched** · [DDDFXYqiming/dsh-annotation-patched@1f11a84](https://github.com/DDDFXYqiming/dsh-annotation-patched/commit/1f11a845097588559f6d9e79ee3778e885784c5b) — Annotation Patched 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/DDDFXYqiming/dsh-annotation-patched/blob/1f11a845097588559f6d9e79ee3778e885784c5b/package.json) → [patch](https://github.com/DDDFXYqiming/dsh-annotation-patched/blob/1f11a845097588559f6d9e79ee3778e885784c5b/cordis.patch.yml) · **身份:** `@dsh-external/dsh-annotation-patched`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Proactive Notify** · [DemoJ/proactive-notify@b9032be](https://github.com/DemoJ/proactive-notify/commit/b9032beae455e5edc2863fe9c4beb77b0217b1dd) — DSH 主动通知插件：遇到权限问题和任务完成时弹出系统级通知
  - **证据:** [manifest](https://github.com/DemoJ/proactive-notify/blob/b9032beae455e5edc2863fe9c4beb77b0217b1dd/package.json) → [patch](https://github.com/DemoJ/proactive-notify/blob/b9032beae455e5edc2863fe9c4beb77b0217b1dd/cordis.patch.yml) · **身份:** `proactive-notify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **LLM Mimo** · [dfhxxc666/dsh-llm-mimo@c9e1dd6](https://github.com/dfhxxc666/dsh-llm-mimo/commit/c9e1dd6eed6935be51b1befcec20ff58195637fb) — LLM Mimo 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dfhxxc666/dsh-llm-mimo/blob/c9e1dd6eed6935be51b1befcec20ff58195637fb/package.json) → [patch](https://github.com/dfhxxc666/dsh-llm-mimo/blob/c9e1dd6eed6935be51b1befcec20ff58195637fb/cordis.patch.yml) · **身份:** `dsh-llm-mimo`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `process-control` `session-data` `model-tools` `package-install` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH AUX** · [DoloresCaritasAngelus/DSH-AUX@8c1ef2c](https://github.com/DoloresCaritasAngelus/DSH-AUX/commit/8c1ef2c3117c8cdaf380a6feea3669d5753b3374) — 为视觉、网页提取和文本压缩路由辅助 LLM 任务，并提供回退、并发和会话状态控制。
  - **证据:** [manifest](https://github.com/DoloresCaritasAngelus/DSH-AUX/blob/8c1ef2c3117c8cdaf380a6feea3669d5753b3374/dsh-aux/package.json) → [patch](https://github.com/DoloresCaritasAngelus/DSH-AUX/blob/8c1ef2c3117c8cdaf380a6feea3669d5753b3374/dsh-aux/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `official-looking-namespace` `core-patch` `installer-script` `external-network` `credentials` `llm-routing` `session-data` · **核验备注:** 该独立 Git 源使用类似官方但未发布的包名，安装器会创建符号链接并修改 DSH 核心以桥接图片、会话和设置；未执行安装器、补丁或模型请求。

- **MCP Manager** · [dong152389/dsh-mcp-manager@be8aa61](https://github.com/dong152389/dsh-mcp-manager/commit/be8aa61ec8abacfe386b603fab57c1ed907bc5ca) — DeepSeek Harness (DSH) 插件：管理 MCP 服务器，支持 STDIO / HTTP·SSE / OpenAPI 服务，连接后自动将工具同步注册到对话环境中；提供现代化的设置页可视化管理面板。
  - **证据:** [manifest](https://github.com/dong152389/dsh-mcp-manager/blob/be8aa61ec8abacfe386b603fab57c1ed907bc5ca/package.json) → [patch](https://github.com/dong152389/dsh-mcp-manager/blob/be8aa61ec8abacfe386b603fab57c1ed907bc5ca/cordis.patch.yml) · **身份:** `dsh-mcp-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `subprocess` `mcp` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH TaskSwarm** · [february2015/dsh-taskswarm@bec7d32](https://github.com/february2015/dsh-taskswarm/commit/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38) — 带依赖波次、隔离 worktree、跨模型审核、合并处理与实时仪表盘的持久化多 Agent 任务编排。
  - **证据:** [manifest](https://github.com/february2015/dsh-taskswarm/blob/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38/package.json) → [patch](https://github.com/february2015/dsh-taskswarm/blob/bec7d3272b3c8df977c1e9ac2dbb78c1d9a91a38/cordis.patch.yml) · **身份:** `dsh-taskswarm`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `multi-agent` `git-worktree` `filesystem-write` `local-web-server` `prepare-build` · **核验备注:** 公开包映射到该仓库，但通配 DSH peer 无法证明兼容性；未运行构建、Agent、Git、合并或仪表盘操作。

- **DSH Prompt Enhancer** · [Fishsb/dsh-prompt-enhancer@d42b2b4](https://github.com/Fishsb/dsh-prompt-enhancer/commit/d42b2b41503743a946696312b55001d6a452a0ef) — 通过独立 LLM 调用改写 DSH 输入框中的草稿提示词，并支持撤销。
  - **证据:** [manifest](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/package.json) → [patch](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/cordis.patch.yml) · **身份:** `dsh-prompt-enhancer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `llm-call` `client-injection` `external-network` `credentials` · **核验备注:** 客户端 peer 声明 rc.6 且存在原生 patch；未执行向配置模型披露提示词或更新器网络行为。

- **LinkHealth Intake Triage** · [fmlin0429712024/linkhealth-triage@fa89c59](https://github.com/fmlin0429712024/linkhealth-triage/commit/fa89c595c17f4a3504cf6d711f0590ee3548ff38) — 面向医疗业务咨询的角色提示、评分、路由与确定性 PHI 人审门禁工作流。
  - **证据:** [manifest](https://github.com/fmlin0429712024/linkhealth-triage/blob/fa89c595c17f4a3504cf6d711f0590ee3548ff38/triage-dsh-plugin/package.json) → [patch](https://github.com/fmlin0429712024/linkhealth-triage/blob/fa89c595c17f4a3504cf6d711f0590ee3548ff38/triage-dsh-plugin/cordis.patch.yml) · **身份:** `linkhealth-intake-triage-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `healthcare-workflow` `skills` `filesystem-write` `human-review` `sensitive-data` `github-only` · **核验备注:** 规范嵌套源码包含 PHI 转人工复核约束并写入本地分诊日志；未处理医疗数据、角色提示、门禁或日志写入。

- **Speckit Plugin** · [fusunyu/speckit-plugin@ebef0fb](https://github.com/fusunyu/speckit-plugin/commit/ebef0fbc83ab99186d4a5f0dd429135b937fbffe) — Speckit Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fusunyu/speckit-plugin/blob/ebef0fbc83ab99186d4a5f0dd429135b937fbffe/package.json) → [patch](https://github.com/fusunyu/speckit-plugin/blob/ebef0fbc83ab99186d4a5f0dd429135b937fbffe/cordis.patch.yml) · **身份:** `speckit-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Timer Scheduler** · [GMH13552/dsh-timer-scheduler@5b9c563](https://github.com/GMH13552/dsh-timer-scheduler/commit/5b9c563832ac4fabf136acfb503bde0e442dd2cf) — 允许 Agent 安排未来唤醒，并在 DSH Web 面板显示提醒。
  - **证据:** [manifest](https://github.com/GMH13552/dsh-timer-scheduler/blob/5b9c563832ac4fabf136acfb503bde0e442dd2cf/package.json) → [patch](https://github.com/GMH13552/dsh-timer-scheduler/blob/5b9c563832ac4fabf136acfb503bde0e442dd2cf/cordis.patch.yml) · **身份:** `dsh-timer-scheduler-ui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `scheduled-wakeup` `agent-events` `local-http-server` `web-ui` `github-only` · **核验备注:** 源码记录了本地安装与未来 npm 发布计划；未启动计时器、唤醒、提醒 API 或浏览器面板。

- **DSH Auto Continue 429** · [haochi72/dsh-auto-continue-429@924fb42](https://github.com/haochi72/dsh-auto-continue-429/commit/924fb42f25037a0f6efb841eff4ba8480e81c49d) — 在限流错误后重试 DSH Session，并提供自动继续的浏览器开关。
  - **证据:** [manifest](https://github.com/haochi72/dsh-auto-continue-429/blob/924fb42f25037a0f6efb841eff4ba8480e81c49d/package.json) → [patch](https://github.com/haochi72/dsh-auto-continue-429/blob/924fb42f25037a0f6efb841eff4ba8480e81c49d/cordis.patch.yml) · **身份:** `dsh-auto-continue-429`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `rate-limit-recovery` `session-continuation` `client-injection` `browser-ui` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.1.0；未执行重试、继续、Session 变更或浏览器开关。

- **Billing Widget** · [Harris-Logic/dsh-billing-widget@01a99ef](https://github.com/Harris-Logic/dsh-billing-widget/commit/01a99efd69defedbfe9012b7d6ce5307bb6f930d) — DeepSeek 用量监控插件：API 余额、本次对话费用估算、峰谷时段指示（DeepSeek billing monitor: account balance, per-session cost estimate, peak/off-peak indicator for DeepSeek Harness）
  - **证据:** [manifest](https://github.com/Harris-Logic/dsh-billing-widget/blob/01a99efd69defedbfe9012b7d6ce5307bb6f930d/package.json) → [patch](https://github.com/Harris-Logic/dsh-billing-widget/blob/01a99efd69defedbfe9012b7d6ce5307bb6f930d/cordis.patch.yml) · **身份:** `dsh-billing-widget`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `process-control` `session-data` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Nudge** · [huangmouren2023/deepseek-harness-toolkit@ea3ed50](https://github.com/huangmouren2023/deepseek-harness-toolkit/commit/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4) — 在终端失败或任务中断后自动追问，让 Agent 解释错误或继续执行。
  - **证据:** [manifest](https://github.com/huangmouren2023/deepseek-harness-toolkit/blob/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4/tools/dsh-nudge/package.json) → [patch](https://github.com/huangmouren2023/deepseek-harness-toolkit/blob/ea3ed5023020db08fb3b396e9e3790cb4b43c9a4/tools/dsh-nudge/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `agent-steering` `terminal-events` `prompt-injection` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Team** · [huxint/dsh-team@66835a7](https://github.com/huxint/dsh-team/commit/66835a7920eefb4c051ddf233ca582231e80dbce) — 提供持久命名成员、共享任务、邮箱、虚拟工作区和实时团队房间的 Agent 团队系统。
  - **证据:** [manifest](https://github.com/huxint/dsh-team/blob/66835a7920eefb4c051ddf233ca582231e80dbce/package.json) → [patch](https://github.com/huxint/dsh-team/blob/66835a7920eefb4c051ddf233ca582231e80dbce/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `session-data` `filesystem-write` `mailbox` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Ikanban** · [isomoes/ikanban@5925d26](https://github.com/isomoes/ikanban/commit/5925d2664152e74cc52f1b22e2eeccc2f04b5bf9) — DSH Ikanban 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/isomoes/ikanban/blob/5925d2664152e74cc52f1b22e2eeccc2f04b5bf9/packages/ikanban/package.json) → [patch](https://github.com/isomoes/ikanban/blob/5925d2664152e74cc52f1b22e2eeccc2f04b5bf9/packages/ikanban/cordis.patch.yml) · **身份:** `@isomoes/dsh-ikanban`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `process-control` `database` `system-prompt` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Discussion Intent** · [JinPLu/dsh-plugin-discussion-intent@f81b5d1](https://github.com/JinPLu/dsh-plugin-discussion-intent/commit/f81b5d1fc1ac56b4167c7385d8238d827040ca27) — 让复杂讨论保持证据导向并收敛到后续行动的意图校准模式。
  - **证据:** [manifest](https://github.com/JinPLu/dsh-plugin-discussion-intent/blob/f81b5d1fc1ac56b4167c7385d8238d827040ca27/package.json) → [patch](https://github.com/JinPLu/dsh-plugin-discussion-intent/blob/f81b5d1fc1ac56b4167c7385d8238d827040ca27/cordis.patch.yml) · **身份:** `@jinplu/dsh-plugin-discussion-intent`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `agent-steering` `system-prompt` `session-data` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Gitbash** · [Jinsight-gif/dsh-plugin-gitbash@251c53c](https://github.com/Jinsight-gif/dsh-plugin-gitbash/commit/251c53cee969b0be1d68a58f40ca77f49dcd4f85) — Gitbash 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Jinsight-gif/dsh-plugin-gitbash/blob/251c53cee969b0be1d68a58f40ca77f49dcd4f85/package.json) → [patch](https://github.com/Jinsight-gif/dsh-plugin-gitbash/blob/251c53cee969b0be1d68a58f40ca77f49dcd4f85/cordis.patch.yml) · **身份:** `dsh-plugin-gitbash`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Clawock DSH** · [KCNyu/clawock@428320b](https://github.com/KCNyu/clawock/commit/428320b7476fa9852a4070c4e99bcf423b0f3bfe) — 包含证据、反方论证、确定性结算与记分卡页面的投资决策工作流。
  - **证据:** [manifest](https://github.com/KCNyu/clawock/blob/428320b7476fa9852a4070c4e99bcf423b0f3bfe/examples/dsh/plugin/package.json) → [patch](https://github.com/KCNyu/clawock/blob/428320b7476fa9852a4070c4e99bcf423b0f3bfe/examples/dsh/plugin/cordis.patch.yml) · **身份:** `clawock-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `investment-workflow` `skills` `external-network` `filesystem-read` `filesystem-write` `web-ui` `source-behind-registry` · **核验备注:** 该嵌套集成是实际发布包而非测试样例；固定源码为 0.1.6、npm 为 0.1.8，未执行行情获取、决策或结算。

- **Orcana Runtime Pack** · [Leo-Ayh-Oday/dsh-orcana@abf4b60](https://github.com/Leo-Ayh-Oday/dsh-orcana/commit/abf4b602b2f2057980640dbb8cd43f157ee4ae57) — 面向 DSH 的通用 Orcana 运行时 profile bundle。
  - **证据:** [manifest](https://github.com/Leo-Ayh-Oday/dsh-orcana/blob/abf4b602b2f2057980640dbb8cd43f157ee4ae57/packages/dsh-bundle/package.json) → [patch](https://github.com/Leo-Ayh-Oday/dsh-orcana/blob/abf4b602b2f2057980640dbb8cd43f157ee4ae57/packages/dsh-bundle/cordis.patch.yml) · **身份:** `@leooday/dsh-bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `profile-bundle` `workflow-runtime` `package-bundle` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plan Execute** · [leotangjc/plan-execute@f236fde](https://github.com/leotangjc/plan-execute/commit/f236fde11b996392efb41889de7505a27d712da0) — 依次进行决策拷问、计划编译与验收执行的三阶段工作流。
  - **证据:** [manifest](https://github.com/leotangjc/plan-execute/blob/f236fde11b996392efb41889de7505a27d712da0/package.json) → [patch](https://github.com/leotangjc/plan-execute/blob/f236fde11b996392efb41889de7505a27d712da0/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `workflow-orchestration` `model-tools` `agent-steering` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Whale Widget EAC** · [liangbai250/DSH-Whale-Balance-Widget@8200fe0](https://github.com/liangbai250/DSH-Whale-Balance-Widget/commit/8200fe0cce2d21b0ffed58548a59389a1e85469e) — Whale Widget EAC 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/liangbai250/DSH-Whale-Balance-Widget/blob/8200fe0cce2d21b0ffed58548a59389a1e85469e/package.json) → [patch](https://github.com/liangbai250/DSH-Whale-Balance-Widget/blob/8200fe0cce2d21b0ffed58548a59389a1e85469e/cordis.patch.yml) · **身份:** `dsh-whale-widget-eac`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `session-data` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Conversation Landmarks** · [mantonlove/dsh-conversation-landmarks@1d2e095](https://github.com/mantonlove/dsh-conversation-landmarks/commit/1d2e0956ed263a92b16370d50dd7d4603dec731e) — Conversation Landmarks 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/mantonlove/dsh-conversation-landmarks/blob/1d2e0956ed263a92b16370d50dd7d4603dec731e/package.json) → [patch](https://github.com/mantonlove/dsh-conversation-landmarks/blob/1d2e0956ed263a92b16370d50dd7d4603dec731e/cordis.patch.yml) · **身份:** `dsh-conversation-landmarks`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Voice** · [meomeo-dev/dsh-voice@b4b989c](https://github.com/meomeo-dev/dsh-voice/commit/b4b989c0bc8b942752086d910933e43b53cfbf54) — 支持会话、工作区和用户三级切换的对话语气与声音技能包。
  - **证据:** [manifest](https://github.com/meomeo-dev/dsh-voice/blob/b4b989c0bc8b942752086d910933e43b53cfbf54/package.json) → [patch](https://github.com/meomeo-dev/dsh-voice/blob/b4b989c0bc8b942752086d910933e43b53cfbf54/cordis.patch.yml) · **身份:** `@meomeo-dev/dsh-voice`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `system-prompt` `filesystem-skill` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Mobile NAV** · [mexiaosqwq/dsh-web-mobile@a650006](https://github.com/mexiaosqwq/dsh-web-mobile/commit/a65000625361633a5fe1517922778130e2ba9ef5) — 尽可能的使dsh适配竖屏等移动端设备
  - **证据:** [manifest](https://github.com/mexiaosqwq/dsh-web-mobile/blob/a65000625361633a5fe1517922778130e2ba9ef5/package.json) → [patch](https://github.com/mexiaosqwq/dsh-web-mobile/blob/a65000625361633a5fe1517922778130e2ba9ef5/cordis.patch.yml) · **身份:** `@dsh-external/dsh-mobile-nav`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Agency Agents** · [MichengAI/dsh-agency-agents@9770f19](https://github.com/MichengAI/dsh-agency-agents/commit/9770f195040af75a9c71a4a7060634234678f304) — 带远程与 DSH Web 集成界面的可召唤领域专家角色库。
  - **证据:** [manifest](https://github.com/MichengAI/dsh-agency-agents/blob/9770f195040af75a9c71a4a7060634234678f304/package.json) → [patch](https://github.com/MichengAI/dsh-agency-agents/blob/9770f195040af75a9c71a4a7060634234678f304/cordis.patch.yml) · **身份:** `@michengai/dsh-agency-agents`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `expert-agents` `subagents` `remote-api` `client-injection` `web-ui` `prepublish-build` `source-behind-registry` · **核验备注:** 固定源码为 0.1.17，同仓库 npm 为 0.1.19；未执行构建、专家调用、远程请求、Subagent 或界面。

- **DSH Waker Trigger** · [msilita/dsh-waker-trigger@b10322d](https://github.com/msilita/dsh-waker-trigger/commit/b10322d46bd29c713830cc5fbdcb94f54de0a608) — 对定时、文件、命令、HTTP、进程和端口条件进行持久 any/all 组合，并在安全边界唤醒 Agent。
  - **证据:** [manifest](https://github.com/msilita/dsh-waker-trigger/blob/b10322d46bd29c713830cc5fbdcb94f54de0a608/package.json) → [patch](https://github.com/msilita/dsh-waker-trigger/blob/b10322d46bd29c713830cc5fbdcb94f54de0a608/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `scheduler` `filesystem-watch` `subprocess` `external-network` `agent-events` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Calendar** · [necokeine/dsh-calendar@dff0ca2](https://github.com/necokeine/dsh-calendar/commit/dff0ca27cb9a2412f36de8d482d85ffa31dcc3ce) — Calendar 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/necokeine/dsh-calendar/blob/dff0ca27cb9a2412f36de8d482d85ffa31dcc3ce/package.json) → [patch](https://github.com/necokeine/dsh-calendar/blob/dff0ca27cb9a2412f36de8d482d85ffa31dcc3ce/cordis.patch.yml) · **身份:** `@necokeine/dsh-calendar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `model-tools` `package-install` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Self Restart** · [NecromanAlbert/dsh-self-restart@ff332b4](https://github.com/NecromanAlbert/dsh-self-restart/commit/ff332b4470bcac6c9632afc91b10bc71e574a4e8) — Self Restart 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/NecromanAlbert/dsh-self-restart/blob/ff332b4470bcac6c9632afc91b10bc71e574a4e8/package.json) → [patch](https://github.com/NecromanAlbert/dsh-self-restart/blob/ff332b4470bcac6c9632afc91b10bc71e574a4e8/cordis.patch.yml) · **身份:** `dsh-self-restart`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Cron** · [omdsh-dev/dsh-cron@9c4b5fa](https://github.com/omdsh-dev/dsh-cron/commit/9c4b5fada700ea25c1c22f55e21144a69cfe2c35) — 使用五字段 Cron 规则跨会话持久调度并向 Agent 会话注入任务。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-cron/blob/9c4b5fada700ea25c1c22f55e21144a69cfe2c35/package.json) → [patch](https://github.com/omdsh-dev/dsh-cron/blob/9c4b5fada700ea25c1c22f55e21144a69cfe2c35/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `scheduler` `session-data` `agent-steering` `filesystem-write` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH LLM Fallbacks** · [omdsh-dev/dsh-llm-fallbacks@69ec1fe](https://github.com/omdsh-dev/dsh-llm-fallbacks/commit/69ec1fe19660cd465f610890e2f1366cd418f86c) — 在重试、认证、额度或限流失败后启用可配置的提供商与模型回退链。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/package.json) → [patch](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/bundle/cordis.patch.yml) · **身份:** `dsh-llm-fallbacks`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `llm-routing` `client-injection` `prepare-build` · **核验备注:** DSH peer 声明 rc.6 且已在固定源码确认回退行；prepare 会构建代码，未运行测试提供商切换。

- **DSH More Agent Presets** · [R-LEI2536/dsh-more-agent-presets@fef064f](https://github.com/R-LEI2536/dsh-more-agent-presets/commit/fef064fc50589ce4a23a07e0ab5c2697ab6699bd) — DSH More Agent Presets 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/R-LEI2536/dsh-more-agent-presets/blob/fef064fc50589ce4a23a07e0ab5c2697ab6699bd/package.json) → [patch](https://github.com/R-LEI2536/dsh-more-agent-presets/blob/fef064fc50589ce4a23a07e0ab5c2697ab6699bd/cordis.patch.yml) · **身份:** `dsh-more-agent-presets`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Rules** · [rj-jiangyichen/dsh-rules@dd5d211](https://github.com/rj-jiangyichen/dsh-rules/commit/dd5d211edadf4c10ffd4673f7896cea46ea183e1) — 当 Agent 文件活动匹配配置的 Glob 时激活规则提示词和 Markdown 文档。
  - **证据:** [manifest](https://github.com/rj-jiangyichen/dsh-rules/blob/dd5d211edadf4c10ffd4673f7896cea46ea183e1/package.json) → [patch](https://github.com/rj-jiangyichen/dsh-rules/blob/dd5d211edadf4c10ffd4673f7896cea46ea183e1/cordis.patch.yml) · **身份:** `dsh-rules`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `filesystem-read` `file-globs` `prompt-injection` `agent-events` `prepublish-check` · **核验备注:** 固定源码与 npm 身份均为 0.1.0，但注册表元数据未映射仓库；未执行文件匹配、规则加载、提示注入或测试。

- **DSH Trellis** · [SajoLuo/dsh-trellis@401b117](https://github.com/SajoLuo/dsh-trellis/commit/401b117a50063bfda5aed459070a11c0646c3092) — DSH Trellis 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SajoLuo/dsh-trellis/blob/401b117a50063bfda5aed459070a11c0646c3092/package.json) → [patch](https://github.com/SajoLuo/dsh-trellis/blob/401b117a50063bfda5aed459070a11c0646c3092/cordis.patch.yml) · **身份:** `dsh-trellis`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **HA Orchestrator** · [Saktawdi/ha-orchestrator@83b80a6](https://github.com/Saktawdi/ha-orchestrator/commit/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799) — 提供模型故障转移与子 Agent 扇出、流水线和监督者编排。
  - **证据:** [manifest](https://github.com/Saktawdi/ha-orchestrator/blob/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799/package.json) → [patch](https://github.com/Saktawdi/ha-orchestrator/blob/83b80a6bd59f0ed48eaab56c31fc6c7ffeb1b799/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `model-failover` `multi-agent` `workflow-orchestration` `external-network` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Bash Scripting** · [satan9394/dsh-bash-scripting@e9b421d](https://github.com/satan9394/dsh-bash-scripting/commit/e9b421d420fe824f4d44e0344d6e22de2b3cb712) — DSH Bash Scripting 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/satan9394/dsh-bash-scripting/blob/e9b421d420fe824f4d44e0344d6e22de2b3cb712/package.json) → [patch](https://github.com/satan9394/dsh-bash-scripting/blob/e9b421d420fe824f4d44e0344d6e22de2b3cb712/cordis.patch.yml) · **身份:** `dsh-bash-scripting`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH LLM Eval** · [satan9394/dsh-llm-eval@7690b6a](https://github.com/satan9394/dsh-llm-eval/commit/7690b6ae38c1fb14a6672df82b2be9227bb77226) — DSH LLM Eval 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/satan9394/dsh-llm-eval/blob/7690b6ae38c1fb14a6672df82b2be9227bb77226/package.json) → [patch](https://github.com/satan9394/dsh-llm-eval/blob/7690b6ae38c1fb14a6672df82b2be9227bb77226/cordis.patch.yml) · **身份:** `dsh-llm-eval`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Session Recycle BIN** · [Seetraum/harness-session-delete@d2d8dfd](https://github.com/Seetraum/harness-session-delete/commit/d2d8dfd88acc7f76eea0e50119242505b594a918) — DSH 会话回收站：侧边栏删除图标、回收站多选还原/彻底删除、活跃会话保护。 · Session trash & permanent delete for DeepSeek Harness.
  - **证据:** [manifest](https://github.com/Seetraum/harness-session-delete/blob/d2d8dfd88acc7f76eea0e50119242505b594a918/package.json) → [patch](https://github.com/Seetraum/harness-session-delete/blob/d2d8dfd88acc7f76eea0e50119242505b594a918/cordis.patch.yml) · **身份:** `dsh-session-recycle-bin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Taskboard** · [shengsheng90/DSH-taskboard@f15e324](https://github.com/shengsheng90/DSH-taskboard/commit/f15e324bbd8d6d02af4d1506f0073beaa4f9fd34) — 提供包含卡片、附件、自动化、Agent 工具和 DSH Web 界面的本地项目任务板。
  - **证据:** [manifest](https://github.com/shengsheng90/DSH-taskboard/blob/f15e324bbd8d6d02af4d1506f0073beaa4f9fd34/package.json) → [patch](https://github.com/shengsheng90/DSH-taskboard/blob/f15e324bbd8d6d02af4d1506f0073beaa4f9fd34/cordis.patch.yml) · **身份:** `@shengsheng/dsh-taskboard`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `task-management` `filesystem-write` `sqlite` `attachments` `automation` `model-tools` `client-injection` · **核验备注:** 固定源码与当前公开包均为 0.1.1；未执行数据库、附件、自动化、工具或浏览器操作。

- **DSH Swift Cycle** · [Solismuchengxue/dsh_plugin_swift_cycle@d44bee7](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/commit/d44bee70c109bb1d772d26ee790d6de9aadce9cc) — 面向 Swift Cycle 治理技能的 DSH 适配器。
  - **证据:** [manifest](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/blob/d44bee70c109bb1d772d26ee790d6de9aadce9cc/package.json) → [patch](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle/blob/d44bee70c109bb1d772d26ee790d6de9aadce9cc/cordis.patch.yml) · **身份:** `dsh-plugin-swift-cycle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `governance` `filesystem-skill` `workflow` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Rollout Scout** · [SpookySandwich/dsh-plugin-rollout-scout@8b5c562](https://github.com/SpookySandwich/dsh-plugin-rollout-scout/commit/8b5c5621372f8c90251b4485b88b8aeebe0ff5cb) — Rollout Scout 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SpookySandwich/dsh-plugin-rollout-scout/blob/8b5c5621372f8c90251b4485b88b8aeebe0ff5cb/package.json) → [patch](https://github.com/SpookySandwich/dsh-plugin-rollout-scout/blob/8b5c5621372f8c90251b4485b88b8aeebe0ff5cb/cordis.patch.yml) · **身份:** `dsh-plugin-rollout-scout`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Octie DSH** · [StarChen-Cycler/octie-dsh-plugin@457bc4e](https://github.com/StarChen-Cycler/octie-dsh-plugin/commit/457bc4e3fcd64597ef8e77a5e5d739105feb490b) — 带模型工具、客户端面板、预设、技能与不可变快照的持久任务图状态机。
  - **证据:** [manifest](https://github.com/StarChen-Cycler/octie-dsh-plugin/blob/457bc4e3fcd64597ef8e77a5e5d739105feb490b/octie/package.json) → [patch](https://github.com/StarChen-Cycler/octie-dsh-plugin/blob/457bc4e3fcd64597ef8e77a5e5d739105feb490b/octie/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `task-graph` `model-tools` `filesystem-write` `snapshot` `identity-collision` · **核验备注:** npm 身份映射到上游 Octie 仓库，因此本记录固定到作者文档中的 Git 插件源码，不主张该 npm 包。

- **LLM Call Inspector** · [striveh/dsh-llm-call-inspector@1ceb6ae](https://github.com/striveh/dsh-llm-call-inspector/commit/1ceb6aedce81a7839e3e759e6a4aeff3c1cf25ef) — LLM Call Inspector 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/striveh/dsh-llm-call-inspector/blob/1ceb6aedce81a7839e3e759e6a4aeff3c1cf25ef/package.json) → [patch](https://github.com/striveh/dsh-llm-call-inspector/blob/1ceb6aedce81a7839e3e759e6a4aeff3c1cf25ef/cordis.patch.yml) · **身份:** `dsh-llm-call-inspector`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `browser` `session-data` `model-tools` `package-install` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH Qingagent** · [void2anything/dsh-qingagent@c8e3a7d](https://github.com/void2anything/dsh-qingagent/commit/c8e3a7d7e19e37e3b0a3555a54f0dcd28b910fc4) — DSH Qingagent 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/void2anything/dsh-qingagent/blob/c8e3a7d7e19e37e3b0a3555a54f0dcd28b910fc4/package.json) → [patch](https://github.com/void2anything/dsh-qingagent/blob/c8e3a7d7e19e37e3b0a3555a54f0dcd28b910fc4/cordis.patch.yml) · **身份:** `dsh-qingagent`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `system-prompt` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Herdr Toolkit** · [wenhao4126/dsh-herdr@e0f488b](https://github.com/wenhao4126/dsh-herdr/commit/e0f488b47596f18753c3e6b905882a5e0b358980) — Herdr Toolkit 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wenhao4126/dsh-herdr/blob/e0f488b47596f18753c3e6b905882a5e0b358980/package.json) → [patch](https://github.com/wenhao4126/dsh-herdr/blob/e0f488b47596f18753c3e6b905882a5e0b358980/cordis.patch.yml) · **身份:** `@dsh-external/dsh-herdr-toolkit`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `subprocess` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Flat Teams** · [whateverboy2333/dsh-flat-teams@572dcca](https://github.com/whateverboy2333/dsh-flat-teams/commit/572dcca03058be4b8743337d1ca97556d0946e43) — Flat Teams 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/whateverboy2333/dsh-flat-teams/blob/572dcca03058be4b8743337d1ca97556d0946e43/package.json) → [patch](https://github.com/whateverboy2333/dsh-flat-teams/blob/572dcca03058be4b8743337d1ca97556d0946e43/cordis.patch.yml) · **身份:** `dsh-flat-teams`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `model-tools` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Adaptive Performance** · [winliyou/dsh-plugins@cc3bce5](https://github.com/winliyou/dsh-plugins/commit/cc3bce59434e0b8b8914188de495e329bdb17fa6) — 为标准 DSH Agent 预设添加自适应工具与运行时上下文行为。
  - **证据:** [manifest](https://github.com/winliyou/dsh-plugins/blob/cc3bce59434e0b8b8914188de495e329bdb17fa6/packages/adaptive-perf/package.json) → [patch](https://github.com/winliyou/dsh-plugins/blob/cc3bce59434e0b8b8914188de495e329bdb17fa6/packages/adaptive-perf/cordis.patch.yml) · **身份:** `@chaoset/adaptive-perf`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `adaptive-performance` `agent-tools` `runtime-context` `sandbox-interaction` `prepublish-test` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **Notify** · [wyl0929/dsh-notify@7791887](https://github.com/wyl0929/dsh-notify/commit/7791887e409613cf149dabd9245cecfe4cd2193c) — Notify 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wyl0929/dsh-notify/blob/7791887e409613cf149dabd9245cecfe4cd2193c/package.json) → [patch](https://github.com/wyl0929/dsh-notify/blob/7791887e409613cf149dabd9245cecfe4cd2193c/cordis.patch.yml) · **身份:** `dsh-notify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Loop** · [XiaoWind/dsh-plugin-loop@d46cb61](https://github.com/XiaoWind/dsh-plugin-loop/commit/d46cb6138682eb17381102bfbb228ff90a91cc32) — Loop 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/XiaoWind/dsh-plugin-loop/blob/d46cb6138682eb17381102bfbb228ff90a91cc32/package.json) → [patch](https://github.com/XiaoWind/dsh-plugin-loop/blob/d46cb6138682eb17381102bfbb228ff90a91cc32/cordis.patch.yml) · **身份:** `dsh-plugin-loop`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `subprocess` `process-control` `session-data` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Computer Use Win** · [Yu-tao-Li/computer-use-win@27d0e28](https://github.com/Yu-tao-Li/computer-use-win/commit/27d0e2822b21edfb14bb97737d9723e18ae47768) — 通过 MCP Server 与 PowerShell UI Automation 后端让 DSH 操作 Windows 桌面。
  - **证据:** [manifest](https://github.com/Yu-tao-Li/computer-use-win/blob/27d0e2822b21edfb14bb97737d9723e18ae47768/package.json) → [patch](https://github.com/Yu-tao-Li/computer-use-win/blob/27d0e2822b21edfb14bb97737d9723e18ae47768/cordis.patch.yml) · **身份:** `computer-use-win`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `windows-only` `computer-use` `mcp` `powershell` `subprocess` `screenshots` `ocr` `keyboard-input` `mouse-input` `high-trust-surface` `github-only` · **核验备注:** Windows 专用 MCP Bundle 记录了固定 GitHub 安装方式；未启动 Server、PowerShell 进程，也未执行截图、OCR、鼠标、键盘或桌面操作。

- **Noletme** · [Yuer6327/NoLetMe@02e086a](https://github.com/Yuer6327/NoLetMe/commit/02e086a2fc797b19f0be79744b58eed9ab8ec7a4) — Noletme 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Yuer6327/NoLetMe/blob/02e086a2fc797b19f0be79744b58eed9ab8ec7a4/package.json) → [patch](https://github.com/Yuer6327/NoLetMe/blob/02e086a2fc797b19f0be79744b58eed9ab8ec7a4/cordis.patch.yml) · **身份:** `dsh-noletme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `package-install` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Subagent Model Picker** · [Zim9729/dsh-subagent-model-picker@5fa4ea7](https://github.com/Zim9729/dsh-subagent-model-picker/commit/5fa4ea7b48df652c5808664e72abf6c771243675) — Subagent Model Picker 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Zim9729/dsh-subagent-model-picker/blob/5fa4ea7b48df652c5808664e72abf6c771243675/package.json) → [patch](https://github.com/Zim9729/dsh-subagent-model-picker/blob/5fa4ea7b48df652c5808664e72abf6c771243675/cordis.patch.yml) · **身份:** `@zim9729/dsh-subagent-model-picker`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` `model-tools` `package-install` `plugin-management` `multi-agent` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **Coding Plans** · [birat-chapagain/dsh-coding-plans@50675b8](https://github.com/birat-chapagain/dsh-coding-plans/commit/50675b8becb0476885ad79270261dfff1f3ffe24) — Coding Plans 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/birat-chapagain/dsh-coding-plans/blob/50675b8becb0476885ad79270261dfff1f3ffe24/package.json) → [patch](https://github.com/birat-chapagain/dsh-coding-plans/blob/50675b8becb0476885ad79270261dfff1f3ffe24/cordis.patch.yml) · **身份:** `dsh-coding-plans`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `process-control` `model-tools` `package-install` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Session Export** · [bwndlct/dsh-session-export@eb18389](https://github.com/bwndlct/dsh-session-export/commit/eb18389192e36934718877fd7c6eb397f5cf1cd4) — 把 DeepSeek Harness 会话导出为便于复用或归档的文件。
  - **证据:** [manifest](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/package.json) → [patch](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/cordis.patch.yml) · **身份:** `dsh-session-export`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-write` · **核验备注:** command、session 与 tools peer 声明 rc.6；导出数据可能包含敏感上下文。

- **DSH File** · [chengzhi43/dsh-file@ae933f7](https://github.com/chengzhi43/dsh-file/commit/ae933f70273397c925410da42e302a7968e7c2a1) — 为当前 DSH 工作区提供 VS Code 风格的文件浏览、编辑与 Markdown 查看。
  - **证据:** [manifest](https://github.com/chengzhi43/dsh-file/blob/ae933f70273397c925410da42e302a7968e7c2a1/package.json) → [patch](https://github.com/chengzhi43/dsh-file/blob/ae933f70273397c925410da42e302a7968e7c2a1/cordis.patch.yml) · **身份:** `dsh-file`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `filesystem-read` `filesystem-write` `web-ui` `markdown` `source-ahead-registry` · **核验备注:** 固定源码为 0.1.0，而 npm 为 0.0.1 且缺少仓库元数据；未执行文件读写、Markdown 渲染或浏览器加载。

- **Codex Reasoning Router** · [chenmzh/dsh-codex-reasoning-router@6cc4f6c](https://github.com/chenmzh/dsh-codex-reasoning-router/commit/6cc4f6cf87896f031caf1d5813e3abf74e19cde2) — Codex Reasoning Router 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/chenmzh/dsh-codex-reasoning-router/blob/6cc4f6cf87896f031caf1d5813e3abf74e19cde2/package.json) → [patch](https://github.com/chenmzh/dsh-codex-reasoning-router/blob/6cc4f6cf87896f031caf1d5813e3abf74e19cde2/cordis.patch.yml) · **身份:** `dsh-codex-reasoning-router`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `filesystem-write` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Cloud Sync** · [dickpy/dsh-cloud-sync@fa3dfa5](https://github.com/dickpy/dsh-cloud-sync/commit/fa3dfa57955d5c54344c21012c6e3d71f09fe920) — 通过 WebDAV 或对象存储同步可迁移的 DSH Profile 与本地插件源码。
  - **证据:** [manifest](https://github.com/dickpy/dsh-cloud-sync/blob/fa3dfa57955d5c54344c21012c6e3d71f09fe920/package.json) → [patch](https://github.com/dickpy/dsh-cloud-sync/blob/fa3dfa57955d5c54344c21012c6e3d71f09fe920/cordis.patch.yml) · **身份:** `@dickpy/dsh-cloud-sync`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `cloud-sync` `filesystem-read` `filesystem-write` `credentials` `external-network` `release-check` · **核验备注:** 固定源码为 0.20.0，而 npm 为 0.20.5 且缺少仓库元数据；未执行 Profile 上传下载、凭据使用或版本检查。

- **DSH Drag to Attachment** · [djt889/dsh-drag-to-attachment@620ad6e](https://github.com/djt889/dsh-drag-to-attachment/commit/620ad6e4c23a4454fb078104fa37a6e3f7ca3145) — 把拖放或粘贴的主机文件与文件夹转换为 DSH 附件或绝对文件系统路径。
  - **证据:** [manifest](https://github.com/djt889/dsh-drag-to-attachment/blob/620ad6e4c23a4454fb078104fa37a6e3f7ca3145/package.json) → [patch](https://github.com/djt889/dsh-drag-to-attachment/blob/620ad6e4c23a4454fb078104fa37a6e3f7ca3145/cordis.patch.yml) · **身份:** `@dsh-external/dsh-drag-to-attachment`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `native-executable` `subprocess` `filesystem` `folder-attachment` `absolute-path` `client-injection` · **核验备注:** 文档记录了 GitHub 安装，包内附带 Everything 辅助程序用于查找本地路径；未执行二进制、子进程或文件操作。

- **Tool Obsidian Vault** · [Elervi/dsh-tool-obsidian-vault@d06d84b](https://github.com/Elervi/dsh-tool-obsidian-vault/commit/d06d84bfb137e42d88c144d49a6763e5cbefdb32) — Tool Obsidian Vault 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Elervi/dsh-tool-obsidian-vault/blob/d06d84bfb137e42d88c144d49a6763e5cbefdb32/package.json) → [patch](https://github.com/Elervi/dsh-tool-obsidian-vault/blob/d06d84bfb137e42d88c144d49a6763e5cbefdb32/cordis.patch.yml) · **身份:** `dsh-tool-obsidian-vault`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-write` `model-tools` `package-install` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **GEML DSH Plugin** · [geml-spec/geml@6048f6e](https://github.com/geml-spec/geml/commit/6048f6ef7c47b6975124cc752bf84f986d1590e3) — 通过 GEML MCP 服务与随包写作 Skills 为 DSH 提供可寻址文档块。
  - **证据:** [manifest](https://github.com/geml-spec/geml/blob/6048f6ef7c47b6975124cc752bf84f986d1590e3/integrations/dsh-plugin/package.json) → [patch](https://github.com/geml-spec/geml/blob/6048f6ef7c47b6975124cc752bf84f986d1590e3/integrations/dsh-plugin/cordis.patch.yml) · **身份:** `@geml/dsh-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `mcp-stdio` `subprocess` `document-editing` `skills` `filesystem-read` `filesystem-write` `source-ahead-registry` · **核验备注:** 固定集成为 1.0.1，同仓库 npm 为 1.0.0；未执行 npx 子进程、MCP 请求、Skill 或文档编辑。

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

- **Workspace Auto** · [jojoman2024/dsh-workspace-auto@8a84992](https://github.com/jojoman2024/dsh-workspace-auto/commit/8a84992d6556689be700e0c4eaf595a1b5392b89) — 点击顶部'新会话'自动按日期时间新建工作区并在其中开会话；工作区'➕'保持原生。记忆共享沿用 DSH 内建 cwd 机制。
  - **证据:** [manifest](https://github.com/jojoman2024/dsh-workspace-auto/blob/8a84992d6556689be700e0c4eaf595a1b5392b89/package.json) → [patch](https://github.com/jojoman2024/dsh-workspace-auto/blob/8a84992d6556689be700e0c4eaf595a1b5392b89/cordis.patch.yml) · **身份:** `dsh-workspace-auto`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `session-data` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Baton** · [kakadeka/Baton@73e87b3](https://github.com/kakadeka/Baton/commit/73e87b3767edba27f912152ca307718dafd82d05) — Baton 项目接力协作系统 —— DeepSeek Harness 组合包（19 个 baton_* 工具）
  - **证据:** [manifest](https://github.com/kakadeka/Baton/blob/73e87b3767edba27f912152ca307718dafd82d05/package.json) → [patch](https://github.com/kakadeka/Baton/blob/73e87b3767edba27f912152ca307718dafd82d05/cordis.patch.yml) · **身份:** `@kakadeka/dsh-baton`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `filesystem-write` `subprocess` `process-control` `session-data` `model-tools` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH FileScope** · [KunIsMe/dsh-filescope@e84692e](https://github.com/KunIsMe/dsh-filescope/commit/e84692ed79d765fe06c40eabf1c7360e53b1b172) — 带实时文件预览的工作区文件浏览抽屉。
  - **证据:** [manifest](https://github.com/KunIsMe/dsh-filescope/blob/e84692ed79d765fe06c40eabf1c7360e53b1b172/package.json) → [patch](https://github.com/KunIsMe/dsh-filescope/blob/e84692ed79d765fe06c40eabf1c7360e53b1b172/cordis.patch.yml) · **身份:** `dsh-filescope`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `file-preview` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Tree** · [lyhue1991/dsh-tree@31130cd](https://github.com/lyhue1991/dsh-tree/commit/31130cd4d7184ce9c19172bb4e637e56926a53ac) — DSH Tree 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lyhue1991/dsh-tree/blob/31130cd4d7184ce9c19172bb4e637e56926a53ac/package.json) → [patch](https://github.com/lyhue1991/dsh-tree/blob/31130cd4d7184ce9c19172bb4e637e56926a53ac/cordis.patch.yml) · **身份:** `@lyhue1991/dsh-tree`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem` `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH DBHub Live** · [mr-mihu/dsh-dbhub-live@77b8bbd](https://github.com/mr-mihu/dsh-dbhub-live/commit/77b8bbd57d6e7a28f1577fcf1172cd2deaddbf9b) — 将 DBHub 接入 DSH，提供持久多数据源 Server、Workspace 工具与临时数据库连接。
  - **证据:** [manifest](https://github.com/mr-mihu/dsh-dbhub-live/blob/77b8bbd57d6e7a28f1577fcf1172cd2deaddbf9b/package.json) → [patch](https://github.com/mr-mihu/dsh-dbhub-live/blob/77b8bbd57d6e7a28f1577fcf1172cd2deaddbf9b/cordis.patch.yml) · **身份:** `dsh-dbhub-live`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `database` `mcp` `external-network` `credentials` `model-tools` `workspace-data` · **核验备注:** 固定源码与同仓库 npm 身份均为 2.0.0；未执行数据库、MCP Server、凭据、网络连接或 Agent 工具。

- **RLM** · [mutsuki14/seam-rlm@f6fc9ea](https://github.com/mutsuki14/seam-rlm/commit/f6fc9eadda1cb8860265c572cdc6b61c380bda6f) — RLM 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/mutsuki14/seam-rlm/blob/f6fc9eadda1cb8860265c572cdc6b61c380bda6f/package.json) → [patch](https://github.com/mutsuki14/seam-rlm/blob/f6fc9eadda1cb8860265c572cdc6b61c380bda6f/cordis.patch.yml) · **身份:** `@seamlabs/dsh-rlm`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `filesystem-write` `session-data` `system-prompt` `model-tools` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Download Progress** · [nanshanzhaoji/dsh-download-progress@052917d](https://github.com/nanshanzhaoji/dsh-download-progress/commit/052917db31285668140a85e14cd5e4636ab644e1) — 为 DSH Web 提供带百分比追踪的下载工具和悬浮进度面板。
  - **证据:** [manifest](https://github.com/nanshanzhaoji/dsh-download-progress/blob/052917db31285668140a85e14cd5e4636ab644e1/package.json) → [patch](https://github.com/nanshanzhaoji/dsh-download-progress/blob/052917db31285668140a85e14cd5e4636ab644e1/cordis.patch.yml) · **身份:** `dsh-download-progress`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `file-download` `external-network` `filesystem-write` `model-tools` `client-injection` `github-only` · **核验备注:** 存在可固定的 GitHub 源码身份，但 npm 无同名包；未执行下载、文件写入、HTTP 路由或浏览器面板。

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

- **Dynamic Island** · [pk7j7sqryy-ops/dsh-Dynamic-Island@b4edd18](https://github.com/pk7j7sqryy-ops/dsh-Dynamic-Island/commit/b4edd18a51cd452e44848f38ee0ac87c942cc40b) — 灵动岛 Dynamic Island：基于 DeepSeek Harness 的顶部居中 Agent 状态活窗——折叠胶囊显示状态与预设，悬停/点击展开 token 指标、上下文占用率、折线图与工具调用开销，跟随主题色。Top-center agent status island for DeepSeek Harness (DSH).
  - **证据:** [manifest](https://github.com/pk7j7sqryy-ops/dsh-Dynamic-Island/blob/b4edd18a51cd452e44848f38ee0ac87c942cc40b/package.json) → [patch](https://github.com/pk7j7sqryy-ops/dsh-Dynamic-Island/blob/b4edd18a51cd452e44848f38ee0ac87c942cc40b/cordis.patch.yml) · **身份:** `dsh-dynamic-island`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `session-data` `model-tools` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Graphflow** · [Roarpeng/GraphFlow@3123d8d](https://github.com/Roarpeng/GraphFlow/commit/3123d8d5754817b83f2cad6f254bb7971b133c86) — Graphflow 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Roarpeng/GraphFlow/blob/3123d8d5754817b83f2cad6f254bb7971b133c86/package.json) → [patch](https://github.com/Roarpeng/GraphFlow/blob/3123d8d5754817b83f2cad6f254bb7971b133c86/cordis.patch.yml) · **身份:** `@roarpeng/graphflow`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `postinstall` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `mcp` `database` `session-data` `model-tools` `package-install` `multi-agent` `postinstall` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Files** · [taxueseek/dsh-files@43887e2](https://github.com/taxueseek/dsh-files/commit/43887e2dca25fad9d7b23049fe1674f0af00c5cf) — 提供文件上传卡片、会话隔离存储、去重清理与文档读取工具。
  - **证据:** [manifest](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/package.json) → [patch](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/cordis.patch.yml) · **身份:** `dsh-files`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `file-upload` `filesystem-write` `document-parsing` · **核验备注:** DSH peer 声明 rc.6，Cordis range 较宽；仓库许可证检测结果未知。

- **DSH Archived Sessions** · [TOBYCAI/dsh-archived-sessions@a4e3cfe](https://github.com/TOBYCAI/dsh-archived-sessions/commit/a4e3cfec229d8a546bead20e92dd695e5924ea0d) — DSH Archived Sessions 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/TOBYCAI/dsh-archived-sessions/blob/a4e3cfec229d8a546bead20e92dd695e5924ea0d/package.json) → [patch](https://github.com/TOBYCAI/dsh-archived-sessions/blob/a4e3cfec229d8a546bead20e92dd695e5924ea0d/cordis.patch.yml) · **身份:** `dsh-archived-sessions`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Cross Session** · [Whisper330/dsh-cross-session@690b933](https://github.com/Whisper330/dsh-cross-session/commit/690b93321b67ade7f22e5fbc9823cd0eae6d2429) — Cross Session 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Whisper330/dsh-cross-session/blob/690b93321b67ade7f22e5fbc9823cd0eae6d2429/package.json) → [patch](https://github.com/Whisper330/dsh-cross-session/blob/690b93321b67ade7f22e5fbc9823cd0eae6d2429/cordis.patch.yml) · **身份:** `dsh-cross-session`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-write` `session-data` `model-tools` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Browser FS** · [whitefirer/dsh-browser-fs@d144aaf](https://github.com/whitefirer/dsh-browser-fs/commit/d144aaf8960442558897e5600be00366f40d812d) — 通过 WebSocket 中继，让 Agent 在浏览器授权的本地目录中列出、读取和写入文件。
  - **证据:** [manifest](https://github.com/whitefirer/dsh-browser-fs/blob/d144aaf8960442558897e5600be00366f40d812d/package.json) → [patch](https://github.com/whitefirer/dsh-browser-fs/blob/d144aaf8960442558897e5600be00366f40d812d/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `browser-filesystem` `filesystem-read` `filesystem-write` `websocket` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH DeepSeek Attach** · [wqx-txdsyl/dsh-ds-attach@9cc7bab](https://github.com/wqx-txdsyl/dsh-ds-attach/commit/9cc7babf8ce8996daf011299ac2b805525dfb96f) — 为 DSH 附件提供 DeepSeek 风格文件卡片、拖拽、文档文本提取与消息注入。
  - **证据:** [manifest](https://github.com/wqx-txdsyl/dsh-ds-attach/blob/9cc7babf8ce8996daf011299ac2b805525dfb96f/package.json) → [patch](https://github.com/wqx-txdsyl/dsh-ds-attach/blob/9cc7babf8ce8996daf011299ac2b805525dfb96f/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `file-upload` `document-extraction` `filesystem-write` `session-data` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH File Explorer** · [Zalpha263/dsh-file-explorer@6cca848](https://github.com/Zalpha263/dsh-file-explorer/commit/6cca8489bdfc721a20cdf9b0de6b6de54cabe2a5) — 提供持久化 Web 文件树、预览、编辑、上下文操作、上传下载与归档工具。
  - **证据:** [manifest](https://github.com/Zalpha263/dsh-file-explorer/blob/6cca8489bdfc721a20cdf9b0de6b6de54cabe2a5/package.json) → [patch](https://github.com/Zalpha263/dsh-file-explorer/blob/6cca8489bdfc721a20cdf9b0de6b6de54cabe2a5/cordis.patch.yml) · **身份:** `dsh-file-explorer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `file-manager` `filesystem-read` `filesystem-write` `archive-operations` `client-injection` `source-registry-version-drift` · **核验备注:** 固定源码版本高于当前匹配的 Registry 版本；已静态核对身份，未执行文件或 UI 操作。

- **Cordis Transfer Plugin** · [zby1211/cordis-transfer-plugin@c99f767](https://github.com/zby1211/cordis-transfer-plugin/commit/c99f767edbea444b12019bf934448983fb9d6327) — 通过浏览器把动态 Cordis 插件导入或导出为 ZIP 包。
  - **证据:** [manifest](https://github.com/zby1211/cordis-transfer-plugin/blob/c99f767edbea444b12019bf934448983fb9d6327/package.json) → [patch](https://github.com/zby1211/cordis-transfer-plugin/blob/c99f767edbea444b12019bf934448983fb9d6327/cordis.patch.yml) · **身份:** `cordis-transfer-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-export` `plugin-import` `file-upload` `filesystem-write` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Drop Any File** · [Zenjibad/dsh-drop-any-file@959a233](https://github.com/Zenjibad/dsh-drop-any-file/commit/959a233cfa65060e3de315fdfd36bb7627fc2568) — 扩展 DSH Web 拖放以接收任意文件类型并保存为会话附件。
  - **证据:** [manifest](https://github.com/Zenjibad/dsh-drop-any-file/blob/959a233cfa65060e3de315fdfd36bb7627fc2568/package.json) → [patch](https://github.com/Zenjibad/dsh-drop-any-file/blob/959a233cfa65060e3de315fdfd36bb7627fc2568/cordis.patch.yml) · **身份:** `dsh-drop-any-file`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `drag-and-drop` `attachments` `filesystem-write` `client-injection` `github-only` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Web Search Multi** · [zmh2000829/dsh-web-search-multi@558e750](https://github.com/zmh2000829/dsh-web-search-multi/commit/558e750555a8da5e54b9660f62079ff9fa3142a5) — DSH Web Search Multi 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zmh2000829/dsh-web-search-multi/blob/558e750555a8da5e54b9660f62079ff9fa3142a5/package.json) → [patch](https://github.com/zmh2000829/dsh-web-search-multi/blob/558e750555a8da5e54b9660f62079ff9fa3142a5/cordis.patch.yml) · **身份:** `dsh-web-search-multi`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `docker` `prepare` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Lunheng Article Pipeline** · [zuoyunlai/lunheng-article-pipeline-dsh@c5f22ef](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh/commit/c5f22efe1bd0343c1343270fa8ce801364252687) — 论衡（lunheng-article-pipeline）— 多 Agent 深度长文流水线技能包（DeepSeek Harness 适配版，对应正典 v2.3.7）：定题→并行检索（文献/数据/案例）→分析→大纲人在环确认→写作→批判→审计→修订→配图→终检交付，8 张角色卡（T0 主控 + T1-T3 检索 + T4 分析 + T5 写作 + T6 批判 + T7 审计，T8 终检=主控亲完成），三角验证 + M 机械化硬门 + F 失败模式防御，用 dsh subagent 子代理编排。
  - **证据:** [manifest](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh/blob/c5f22efe1bd0343c1343270fa8ce801364252687/package.json) → [patch](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh/blob/c5f22efe1bd0343c1343270fa8ce801364252687/cordis.patch.yml) · **身份:** `lunheng-article-pipeline`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-read` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

#### 视觉与媒体

- **TUI MCP Manager** · [0N3-0/dsh-tui-mcp-manager@223664b](https://github.com/0N3-0/dsh-tui-mcp-manager/commit/223664b481bad5a311fd232a09503ab18b842c74) — TUI MCP Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/0N3-0/dsh-tui-mcp-manager/blob/223664b481bad5a311fd232a09503ab18b842c74/package.json) → [patch](https://github.com/0N3-0/dsh-tui-mcp-manager/blob/223664b481bad5a311fd232a09503ab18b842c74/cordis.patch.yml) · **身份:** `dsh-tui-mcp-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `filesystem-read` `filesystem-write` `mcp` `session-data` `model-tools` `package-install` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **TTS** · [1624318455/dsh-plugin-tts@b4e7a0a](https://github.com/1624318455/dsh-plugin-tts/commit/b4e7a0a4b19e76a34372e40cdcbc1952ff55e916) — Edge TTS 语音大集成插件：消息朗读按钮、自动朗读开关、语音设置面板（Edge TTS）
  - **证据:** [manifest](https://github.com/1624318455/dsh-plugin-tts/blob/b4e7a0a4b19e76a34372e40cdcbc1952ff55e916/package.json) → [patch](https://github.com/1624318455/dsh-plugin-tts/blob/b4e7a0a4b19e76a34372e40cdcbc1952ff55e916/cordis.patch.yml) · **身份:** `@dsh-external/dsh-plugin-tts`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `browser` `session-data` `package-install` `web-search` `vision` `audio` `email` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH LLM Vision** · [1710782766/dsh-llm-vision@8ff56db](https://github.com/1710782766/dsh-llm-vision/commit/8ff56db2e40cb7053dbe8602522ea1d6734c1e9c) — 通过兼容 OpenAI 的视觉端点提供图像描述与 OCR 工具。
  - **证据:** [manifest](https://github.com/1710782766/dsh-llm-vision/blob/8ff56db2e40cb7053dbe8602522ea1d6734c1e9c/package.json) → [patch](https://github.com/1710782766/dsh-llm-vision/blob/8ff56db2e40cb7053dbe8602522ea1d6734c1e9c/cordis.patch.yml) · **身份:** `dsh-llm-vision`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `vision` `ocr` `external-network` `credentials` `filesystem-cache` `client-injection` · **核验备注:** 固定源码与 npm 0.1.0 一致；未执行端点调用、图像处理、凭据访问、缓存写入或客户端注入。

- **HDC Bridge** · [1na-ko/dsh-hdc-bridge@d98fc94](https://github.com/1na-ko/dsh-hdc-bridge/commit/d98fc945db7e7a0032cfbc27392fc8931b43986a) — HDC Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/1na-ko/dsh-hdc-bridge/blob/d98fc945db7e7a0032cfbc27392fc8931b43986a/package.json) → [patch](https://github.com/1na-ko/dsh-hdc-bridge/blob/d98fc945db7e7a0032cfbc27392fc8931b43986a/cordis.patch.yml) · **身份:** `dsh-hdc-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Permissions** · [940842546/dsh-permissions@5bf89db](https://github.com/940842546/dsh-permissions/commit/5bf89db965ace7721a2f9cb8868438b3fc6b6b59) — DeepSeek Harness 权限规则引擎：hard/deny/ask/allow 四级规则（hard 高于全访问）、全局与 workspace 作用域、通配符路径保护、可视化草稿式编辑器，规则持久化于 settings.yaml
  - **证据:** [manifest](https://github.com/940842546/dsh-permissions/blob/5bf89db965ace7721a2f9cb8868438b3fc6b6b59/package.json) → [patch](https://github.com/940842546/dsh-permissions/blob/5bf89db965ace7721a2f9cb8868438b3fc6b6b59/cordis.patch.yml) · **身份:** `dsh-permissions`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Debug Mode** · [a554878526/dsh-debug-mode@4ff706e](https://github.com/a554878526/dsh-debug-mode/commit/4ff706e0e3d8a7f4eb7fc4a2f7384125be47f6dc) — Debug Mode 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/a554878526/dsh-debug-mode/blob/4ff706e0e3d8a7f4eb7fc4a2f7384125be47f6dc/package.json) → [patch](https://github.com/a554878526/dsh-debug-mode/blob/4ff706e0e3d8a7f4eb7fc4a2f7384125be47f6dc/cordis.patch.yml) · **身份:** `dsh-debug-mode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `browser` `session-data` `model-tools` `package-install` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Plugin** · [AgentConnect/dsh-awiki@f499d35](https://github.com/AgentConnect/dsh-awiki/commit/f499d35698dfa56648bbdc79162289c7c03b999a) — Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AgentConnect/dsh-awiki/blob/f499d35698dfa56648bbdc79162289c7c03b999a/package.json) → [patch](https://github.com/AgentConnect/dsh-awiki/blob/f499d35698dfa56648bbdc79162289c7c03b999a/cordis.patch.yml) · **身份:** `@awiki/dsh-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `process-control` `database` `session-data` `model-tools` `package-install` `vision` `financial` `multi-agent` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Dock Base** · [AKS1st/dock@e109174](https://github.com/AKS1st/dock/commit/e109174598df79f7430527f139015068e887f95a) — Dock Base 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AKS1st/dock/blob/e109174598df79f7430527f139015068e887f95a/package.json) → [patch](https://github.com/AKS1st/dock/blob/e109174598df79f7430527f139015068e887f95a/cordis.patch.yml) · **身份:** `dock-base`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Screenshot** · [Alain-Prot0s5/dsh-screenshot@c3aaf18](https://github.com/Alain-Prot0s5/dsh-screenshot/commit/c3aaf184a41e77ae4017ec6f1b4a0c34ba147521) — Screenshot-to-input for DeepSeek Harness: composer camera button + global hotkey (Alt+A) + listener bound to the app lifecycle, configurable in settings. 截图自动粘贴到 DSH 输入框：相机按钮 + 全局快捷键 + 生命周期绑定 + 设置页配置。
  - **证据:** [manifest](https://github.com/Alain-Prot0s5/dsh-screenshot/blob/c3aaf184a41e77ae4017ec6f1b4a0c34ba147521/package.json) → [patch](https://github.com/Alain-Prot0s5/dsh-screenshot/blob/c3aaf184a41e77ae4017ec6f1b4a0c34ba147521/cordis.patch.yml) · **身份:** `@alain-prot0s5/dsh-screenshot`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `web-search` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Custom Plugin** · [AlexPeng07/dsh-custom-plugin@b0dcdb5](https://github.com/AlexPeng07/dsh-custom-plugin/commit/b0dcdb5e92f6ca107d0873d3baae98765d91af7a) — Custom Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AlexPeng07/dsh-custom-plugin/blob/b0dcdb5e92f6ca107d0873d3baae98765d91af7a/package.json) → [patch](https://github.com/AlexPeng07/dsh-custom-plugin/blob/b0dcdb5e92f6ca107d0873d3baae98765d91af7a/cordis.patch.yml) · **身份:** `@alexpeng/dsh-custom-plugin`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `browser` `session-data` `model-tools` `package-install` `vision` `financial` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Liketavern** · [Amakurai/dsh-liketavern@a58ca44](https://github.com/Amakurai/dsh-liketavern/commit/a58ca44b37c0d42bcd0818e9b4bb17b9e5b082f3) — Liketavern 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Amakurai/dsh-liketavern/blob/a58ca44b37c0d42bcd0818e9b4bb17b9e5b082f3/package.json) → [patch](https://github.com/Amakurai/dsh-liketavern/blob/a58ca44b37c0d42bcd0818e9b4bb17b9e5b082f3/cordis.patch.yml) · **身份:** `dsh-liketavern`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `session-data` `model-tools` `package-install` `audio` `multi-agent` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Reactive Resume** · [amruthpillai/reactive-resume@3c195dc](https://github.com/amruthpillai/reactive-resume/commit/3c195dc3f8db5ccae4aa4aff0cefe54980c02b74) — Reactive Resume 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/amruthpillai/reactive-resume/blob/3c195dc3f8db5ccae4aa4aff0cefe54980c02b74/packages/dsh-plugin/package.json) → [patch](https://github.com/amruthpillai/reactive-resume/blob/3c195dc3f8db5ccae4aa4aff0cefe54980c02b74/packages/dsh-plugin/cordis.patch.yml) · **身份:** `dsh-plugin-reactive-resume`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `browser` `database` `session-data` `model-tools` `vision` `email` `financial` `theme` `nested-bundle` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Verifier PRO** · [Animal2404/dsh-verifier-Pro@1240247](https://github.com/Animal2404/dsh-verifier-Pro/commit/1240247b0f0f59b21ae3986b14ff5ae94682c701) — Verifier PRO 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Animal2404/dsh-verifier-Pro/blob/1240247b0f0f59b21ae3986b14ff5ae94682c701/package.json) → [patch](https://github.com/Animal2404/dsh-verifier-Pro/blob/1240247b0f0f59b21ae3986b14ff5ae94682c701/cordis.patch.yml) · **身份:** `@dsh-external/dsh-verifier-pro`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `session-data` `system-prompt` `model-tools` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Vision Toolkit** · [Anionex/dsh-vision-toolkit@29850a8](https://github.com/Anionex/dsh-vision-toolkit/commit/29850a83871d4b7a7cc13e251420c5a440e2f69e) — 提供图像问答、长截图 OCR、UI 复刻、视觉定位与像素差异分析。
  - **证据:** [manifest](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/package.json) → [patch](https://github.com/Anionex/dsh-vision-toolkit/blob/29850a83871d4b7a7cc13e251420c5a440e2f69e/cordis.patch.yml) · **身份:** `@anionex/dsh-vision-toolkit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `browser` `subprocess` `credentials` `python-environment` · **核验备注:** 源码显示高权限运行准备；兼容性仍需单独核验。

- **DSH Codex Media** · [binsarjr/dsh-codex-media@4dba264](https://github.com/binsarjr/dsh-codex-media/commit/4dba264473d00dc75c1e100e8de56a291a9d3441) — 通过 Codex CLI 或可配置 API 传输增加本地图像与文档分析以及图像生成。
  - **证据:** [manifest](https://github.com/binsarjr/dsh-codex-media/blob/4dba264473d00dc75c1e100e8de56a291a9d3441/package.json) → [patch](https://github.com/binsarjr/dsh-codex-media/blob/4dba264473d00dc75c1e100e8de56a291a9d3441/cordis.patch.yml) · **身份:** `dsh-codex-media`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `local-file` `subprocess` `external-network` `credentials` `image-generation` · **核验备注:** 原生条目加载的源码可读取文件、启动本地 Codex CLI、调用 API 并写入生成图片；这些路径均未执行。

- **Codex Oauth** · [birat-chapagain/dsh-codex-oauth@3627384](https://github.com/birat-chapagain/dsh-codex-oauth/commit/362738416bccddcb7a882ccf4c98f2ac2959e61f) — Codex Oauth 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/birat-chapagain/dsh-codex-oauth/blob/362738416bccddcb7a882ccf4c98f2ac2959e61f/package.json) → [patch](https://github.com/birat-chapagain/dsh-codex-oauth/blob/362738416bccddcb7a882ccf4c98f2ac2959e61f/cordis.patch.yml) · **身份:** `dsh-codex-oauth`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `subprocess` `process-control` `session-data` `model-tools` `package-install` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Focus Overlay** · [boogoo619/dsh-focus-overlay@82d479c](https://github.com/boogoo619/dsh-focus-overlay/commit/82d479c1e53190a8121c125a64492cb94cf4efee) — Focus Overlay 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/boogoo619/dsh-focus-overlay/blob/82d479c1e53190a8121c125a64492cb94cf4efee/package.json) → [patch](https://github.com/boogoo619/dsh-focus-overlay/blob/82d479c1e53190a8121c125a64492cb94cf4efee/cordis.patch.yml) · **身份:** `dsh-focus-overlay`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `vision` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Medomni** · [bowang-lab/dsh-medomni@8bd5a2b](https://github.com/bowang-lab/dsh-medomni/commit/8bd5a2b961e46355e988e250a4178ffea3a1e2f2) — Medomni 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/bowang-lab/dsh-medomni/blob/8bd5a2b961e46355e988e250a4178ffea3a1e2f2/package.json) → [patch](https://github.com/bowang-lab/dsh-medomni/blob/8bd5a2b961e46355e988e250a4178ffea3a1e2f2/cordis.patch.yml) · **身份:** `dsh-medomni`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `process-control` `session-data` `model-tools` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Vision** · [cdxDNRF/dsh-vision@e10ec00](https://github.com/cdxDNRF/dsh-vision/commit/e10ec00b78acd275c0ade275a124f558e4e8acb8) — 把图片桥接到 OpenAI 兼容视觉端点，并提供自动描述、Vision 工具和设置界面。
  - **证据:** [manifest](https://github.com/cdxDNRF/dsh-vision/blob/e10ec00b78acd275c0ade275a124f558e4e8acb8/package.json) → [patch](https://github.com/cdxDNRF/dsh-vision/blob/e10ec00b78acd275c0ade275a124f558e4e8acb8/cordis.patch.yml) · **身份:** `@cdxdnrf/dsh-vision`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `filesystem-read` `subprocess` `model-tools` `client-injection` `github-only` · **核验备注:** 存在固定 GitHub 源码身份，但 npm 无匹配的 scoped 包；未执行图片读取、代理查询、凭据解析、网络请求或模型工具。

- **DSH Blender** · [CheshireJCat/blender@3d641da](https://github.com/CheshireJCat/blender/commit/3d641dae1c84248f213095f322f6beace0631409) — 通过 DSH 工具暴露 3D 场景创作能力的 Blender 集成。
  - **证据:** [manifest](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/package.json) → [patch](https://github.com/CheshireJCat/blender/blob/3d641dae1c84248f213095f322f6beace0631409/cordis.patch.yml) · **身份:** `dsh-blender`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-application` `subprocess` `setup-command` · **核验备注:** 声明了 DSH tools rc.6；未执行 Blender 或其安装设置。

- **Nothing Skin** · [Cinnamobot/dsh-nothing-skin@6f0c858](https://github.com/Cinnamobot/dsh-nothing-skin/commit/6f0c85804c523a4fbf2e62c32fcb856586349f61) — Nothing Skin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Cinnamobot/dsh-nothing-skin/blob/6f0c85804c523a4fbf2e62c32fcb856586349f61/package.json) → [patch](https://github.com/Cinnamobot/dsh-nothing-skin/blob/6f0c85804c523a4fbf2e62c32fcb856586349f61/cordis.patch.yml) · **身份:** `dsh-nothing-skin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **ADD Reasoning Effort** · [cjdem/dsh-add-reasoning-effort@12360c9](https://github.com/cjdem/dsh-add-reasoning-effort/commit/12360c9149d202d13493f732635fcb5229bd6e50) — ADD Reasoning Effort 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/cjdem/dsh-add-reasoning-effort/blob/12360c9149d202d13493f732635fcb5229bd6e50/package.json) → [patch](https://github.com/cjdem/dsh-add-reasoning-effort/blob/12360c9149d202d13493f732635fcb5229bd6e50/cordis.patch.yml) · **身份:** `dsh-add-reasoning-effort`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `model-tools` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Workspace Path** · [code4lala/dsh-plugin-workspace-path@29cb9c0](https://github.com/code4lala/dsh-plugin-workspace-path/commit/29cb9c0cf5b6fd62f2e3add8bcbe6b3b1d6d20df) — Workspace Path 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/code4lala/dsh-plugin-workspace-path/blob/29cb9c0cf5b6fd62f2e3add8bcbe6b3b1d6d20df/package.json) → [patch](https://github.com/code4lala/dsh-plugin-workspace-path/blob/29cb9c0cf5b6fd62f2e3add8bcbe6b3b1d6d20df/cordis.patch.yml) · **身份:** `@code4lala/dsh-plugin-workspace-path`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `process-control` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **MTM Codebase Memory** · [codeh007/mtmdsh@bc21864](https://github.com/codeh007/mtmdsh/commit/bc2186474676c663c9a323b38ab2be8315231846) — MTM Codebase Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/codeh007/mtmdsh/blob/bc2186474676c663c9a323b38ab2be8315231846/packages/mtm-codebase-memory/package.json) → [patch](https://github.com/codeh007/mtmdsh/blob/bc2186474676c663c9a323b38ab2be8315231846/packages/mtm-codebase-memory/cordis.patch.yml) · **身份:** `mtm-codebase-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `process-control` `mcp` `session-data` `system-prompt` `model-tools` `vision` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Chat Imagine** · [corrinehu/dsh-chat-imagine@419e39b](https://github.com/corrinehu/dsh-chat-imagine/commit/419e39b30f6932064e7744036f7975d761fd93a0) — 调用已配置的 OpenAI 兼容服务或检测到的本地 MiniMax CLI 生图，并在对话中展示结果。
  - **证据:** [manifest](https://github.com/corrinehu/dsh-chat-imagine/blob/419e39b30f6932064e7744036f7975d761fd93a0/package.json) → [patch](https://github.com/corrinehu/dsh-chat-imagine/blob/419e39b30f6932064e7744036f7975d761fd93a0/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `image-generation` `external-network` `credentials` `subprocess` `in-memory-media` · **核验备注:** 文档记录了 GitHub 安装与 rc.6 tools；未执行服务请求、CLI 探测、子进程或图像生成。

- **Compaction Optical** · [cyijun/dsh-compaction-optical@cf7814b](https://github.com/cyijun/dsh-compaction-optical/commit/cf7814bf0c8d2651db87475a3b6a519fb62d6504) — Compaction Optical 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/cyijun/dsh-compaction-optical/blob/cf7814bf0c8d2651db87475a3b6a519fb62d6504/package.json) → [patch](https://github.com/cyijun/dsh-compaction-optical/blob/cf7814bf0c8d2651db87475a3b6a519fb62d6504/cordis.patch.yml) · **身份:** `dsh-compaction-optical`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `filesystem-read` `filesystem-write` `subprocess` `session-data` `model-tools` `package-install` `vision` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Kiro** · [dat-lequoc/dsh-kiro@16a9fbd](https://github.com/dat-lequoc/dsh-kiro/commit/16a9fbd91b2a79a7712b776c1f5cfd229a13749d) — Kiro 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dat-lequoc/dsh-kiro/blob/16a9fbd91b2a79a7712b776c1f5cfd229a13749d/package.json) → [patch](https://github.com/dat-lequoc/dsh-kiro/blob/16a9fbd91b2a79a7712b776c1f5cfd229a13749d/cordis.patch.yml) · **身份:** `dsh-kiro`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `subprocess` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `vision` `financial` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Maestro Skills** · [ddtcorex/maestro-skills@1e85677](https://github.com/ddtcorex/maestro-skills/commit/1e856774e17b1cdd7da9320ecb04a09f23d891ed) — Maestro Skills 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ddtcorex/maestro-skills/blob/1e856774e17b1cdd7da9320ecb04a09f23d891ed/package.json) → [patch](https://github.com/ddtcorex/maestro-skills/blob/1e856774e17b1cdd7da9320ecb04a09f23d891ed/cordis.patch.yml) · **身份:** `@ddtcorex/maestro-skills`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `model-tools` `package-install` `plugin-management` `vision` `financial` `multi-agent` `theme` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Sight** · [ericfetch/dsh-sight@d445292](https://github.com/ericfetch/dsh-sight/commit/d4452928d990fb45863c343f01b47c8d94fa160c) — Sight 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ericfetch/dsh-sight/blob/d4452928d990fb45863c343f01b47c8d94fa160c/package.json) → [patch](https://github.com/ericfetch/dsh-sight/blob/d4452928d990fb45863c343f01b47c8d94fa160c/cordis.patch.yml) · **身份:** `@eric.wen/dsh-sight`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `mcp` `session-data` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Deepseek Quota** · [ErrorLst/dsh-deepseek-quota@f9d7400](https://github.com/ErrorLst/dsh-deepseek-quota/commit/f9d7400a6816b0c63d183a4aa1220886af280108) — Deepseek Quota 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ErrorLst/dsh-deepseek-quota/blob/f9d7400a6816b0c63d183a4aa1220886af280108/package.json) → [patch](https://github.com/ErrorLst/dsh-deepseek-quota/blob/f9d7400a6816b0c63d183a4aa1220886af280108/cordis.patch.yml) · **身份:** `@dsh-external/dsh-deepseek-quota`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `vision` `financial` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **AI Novel Writer** · [EthanYoQ/AI-Novel-Writer@cb767d8](https://github.com/EthanYoQ/AI-Novel-Writer/commit/cb767d89277927ecd2986e70b9f0a9f57c72c9f8) — AI Novel Writer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/EthanYoQ/AI-Novel-Writer/blob/cb767d89277927ecd2986e70b9f0a9f57c72c9f8/plugins/dsh-ai-novel-writer/package.json) → [patch](https://github.com/EthanYoQ/AI-Novel-Writer/blob/cb767d89277927ecd2986e70b9f0a9f57c72c9f8/plugins/dsh-ai-novel-writer/cordis.patch.yml) · **身份:** `@ethanyoq/dsh-ai-novel-writer`
  - **许可证:** repo `GPL-3.0` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `process-control` `database` `session-data` `model-tools` `package-install` `vision` `financial` `theme` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Labnana** · [exoticknight/dsh-labnana@a2ca18f](https://github.com/exoticknight/dsh-labnana/commit/a2ca18fdebabdecf4e90894b58433f8c1bfc0156) — Labnana 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/exoticknight/dsh-labnana/blob/a2ca18fdebabdecf4e90894b58433f8c1bfc0156/package.json) → [patch](https://github.com/exoticknight/dsh-labnana/blob/a2ca18fdebabdecf4e90894b58433f8c1bfc0156/cordis.patch.yml) · **身份:** `dsh-labnana`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `package-install` `vision` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Auxiliary Yuan** · [fabulousyuann-tech/dsh-auxiliary-yuan@39ddc9c](https://github.com/fabulousyuann-tech/dsh-auxiliary-yuan/commit/39ddc9cdcaf7ba22b06bcdebde88b754b5fd2261) — Auxiliary Yuan 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fabulousyuann-tech/dsh-auxiliary-yuan/blob/39ddc9cdcaf7ba22b06bcdebde88b754b5fd2261/package.json) → [patch](https://github.com/fabulousyuann-tech/dsh-auxiliary-yuan/blob/39ddc9cdcaf7ba22b06bcdebde88b754b5fd2261/cordis.patch.yml) · **身份:** `dsh-auxiliary-yuan`
  - **许可证:** repo `LGPL-3.0` / package `LGPL-3.0-only` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `plugin-management` `vision` `multi-agent` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Funasr Voice** · [fenglin-ai/dsh-funasr-voice@30289f4](https://github.com/fenglin-ai/dsh-funasr-voice/commit/30289f461117f46a6cbc9c66198cccdf91029621) — DSH Web 本地离线语音输入插件：浏览器采集麦克风 → host 拉起本地 FunASR (SenseVoiceSmall) 识别 → 文字填入输入框。
  - **证据:** [manifest](https://github.com/fenglin-ai/dsh-funasr-voice/blob/30289f461117f46a6cbc9c66198cccdf91029621/package.json) → [patch](https://github.com/fenglin-ai/dsh-funasr-voice/blob/30289f461117f46a6cbc9c66198cccdf91029621/cordis.patch.yml) · **身份:** `dsh-funasr-voice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `filesystem-write` `session-data` `vision` `audio` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Promptkit** · [fsrmqi/dsh-promptkit@9805e76](https://github.com/fsrmqi/dsh-promptkit/commit/9805e761ce8956ab16636afc85268df39fb597f6) — 开源的 Prompt 构建与增强工具包：方法工坊（Studio）+ 对话快捷增强器（QuickEnhancer）。内置 21 个 Markdown 思考方法（含技术开发/数据分析等场景卡 + frontmatter + prompt 正文），可作为 npm 库嵌入，也可直接安装为 DSH 浏览器插件。
  - **证据:** [manifest](https://github.com/fsrmqi/dsh-promptkit/blob/9805e761ce8956ab16636afc85268df39fb597f6/package.json) → [patch](https://github.com/fsrmqi/dsh-promptkit/blob/9805e761ce8956ab16636afc85268df39fb597f6/cordis.patch.yml) · **身份:** `dsh-promptkit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Desktop Plugin** · [FuqiangCraft/dsh-desktop@059fc98](https://github.com/FuqiangCraft/dsh-desktop/commit/059fc980a08e8fc2b852d703b8e3dcc26ed56e02) — Desktop Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/FuqiangCraft/dsh-desktop/blob/059fc980a08e8fc2b852d703b8e3dcc26ed56e02/packages/dsh-desktop-plugin/package.json) → [patch](https://github.com/FuqiangCraft/dsh-desktop/blob/059fc980a08e8fc2b852d703b8e3dcc26ed56e02/packages/dsh-desktop-plugin/cordis.patch.yml) · **身份:** `@mixian/dsh-desktop-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `plugin-management` `vision` `multi-agent` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH ChatVoice** · [FuzzySoul/dsh-chatvoice@34b4a18](https://github.com/FuzzySoul/dsh-chatvoice/commit/34b4a183c92c31fcea454d65c16c15f00bc4537b) — 使用浏览器原生语音能力提供免额外 API Key 的语音输入与回复朗读。
  - **证据:** [manifest](https://github.com/FuzzySoul/dsh-chatvoice/blob/34b4a183c92c31fcea454d65c16c15f00bc4537b/package.json) → [patch](https://github.com/FuzzySoul/dsh-chatvoice/blob/34b4a183c92c31fcea454d65c16c15f00bc4537b/cordis.patch.yml) · **身份:** `dsh-chatvoice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `microphone` `browser-speech` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Superself** · [fxylabs/superself@cb66987](https://github.com/fxylabs/superself/commit/cb669873ed72e42d3e8511d02bd73f1a8e8ff913) — Superself 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fxylabs/superself/blob/cb669873ed72e42d3e8511d02bd73f1a8e8ff913/apps/dsh-plugin/package.json) → [patch](https://github.com/fxylabs/superself/blob/cb669873ed72e42d3e8511d02bd73f1a8e8ff913/apps/dsh-plugin/cordis.patch.yml) · **身份:** `dsh-plugin-superself`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-write` `subprocess` `mcp` `database` `session-data` `model-tools` `package-install` `vision` `financial` `theme` `nested-bundle` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **WEB Manager** · [FYHC1/dsh-web-manager@4f610da](https://github.com/FYHC1/dsh-web-manager/commit/4f610da5e3a9efb409d0666e9a4ac735448d44fe) — WEB Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/FYHC1/dsh-web-manager/blob/4f610da5e3a9efb409d0666e9a4ac735448d44fe/package.json) → [patch](https://github.com/FYHC1/dsh-web-manager/blob/4f610da5e3a9efb409d0666e9a4ac735448d44fe/cordis.patch.yml) · **身份:** `dsh-web-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `browser` `package-install` `web-search` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Stock Watch** · [ggttol/dsh-stock-watch@13a3f07](https://github.com/ggttol/dsh-stock-watch/commit/13a3f07a2f2cd057a960bdaa754c3e2de5ef2cfc) — A股自选股实时盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗；v1.2.0 新增 AI 持仓建议引擎：技术指标量化评分/止损止盈线推导/市场环境/新闻聚合/一键会话深度研判
  - **证据:** [manifest](https://github.com/ggttol/dsh-stock-watch/blob/13a3f07a2f2cd057a960bdaa754c3e2de5ef2cfc/package.json) → [patch](https://github.com/ggttol/dsh-stock-watch/blob/13a3f07a2f2cd057a960bdaa754c3e2de5ef2cfc/cordis.patch.yml) · **身份:** `dsh-stock-watch`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `vision` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Image Bridge** · [haitang1/dsh-image-bridge@4c7e7a9](https://github.com/haitang1/dsh-image-bridge/commit/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b) — 把粘贴图片写入工作区并提供隐藏路径，让文本模型调用视觉工具识别。
  - **证据:** [manifest](https://github.com/haitang1/dsh-image-bridge/blob/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b/package.json) → [patch](https://github.com/haitang1/dsh-image-bridge/blob/4c7e7a9ba8ffbd1dba2bbcf255a7cba13813b11b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `image-input` `filesystem-write` `prompt-injection` `model-tools` `session-data` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Diagram** · [hanzhangzzz/dsh-diagram@480d3b3](https://github.com/hanzhangzzz/dsh-diagram/commit/480d3b3e81a583648595ec60cdcf834a8b7593cc) — 在 DeepSeek Harness 对话中嵌入可编辑的 Excalidraw 图表。
  - **证据:** [manifest](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/package.json) → [patch](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/cordis.patch.yml) · **身份:** `dsh-diagram`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `interactive-content` · **核验备注:** 声明了精确的 DSH rc.6 peer；未做运行兼容性测试。

- **Skill Publish Github** · [Harris-Logic/dsh-skill-publish-github@0606886](https://github.com/Harris-Logic/dsh-skill-publish-github/commit/0606886e8af24ce72fffdca72350b131120c04bf) — DSH skill 插件：把「发布 DSH 插件到 GitHub」做成可复用 skill（publish-dsh-plugin）。DSH skill plugin that turns publishing a DeepSeek Harness plugin to GitHub into a reusable skill.
  - **证据:** [manifest](https://github.com/Harris-Logic/dsh-skill-publish-github/blob/0606886e8af24ce72fffdca72350b131120c04bf/package.json) → [patch](https://github.com/Harris-Logic/dsh-skill-publish-github/blob/0606886e8af24ce72fffdca72350b131120c04bf/cordis.patch.yml) · **身份:** `dsh-skill-publish-github`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `session-data` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Usage** · [heekei/dsh-usage@b212435](https://github.com/heekei/dsh-usage/commit/b21243584218b485ce35cf4b8017346d86b0d49a) — Usage 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/heekei/dsh-usage/blob/b21243584218b485ce35cf4b8017346d86b0d49a/package.json) → [patch](https://github.com/heekei/dsh-usage/blob/b21243584218b485ce35cf4b8017346d86b0d49a/cordis.patch.yml) · **身份:** `dsh-usage`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `vision` `financial` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Response Window** · [heiheiha798/dsh-response-window@e79db49](https://github.com/heiheiha798/dsh-response-window/commit/e79db49964852f9d073fcec737f1787c9809fb85) — Response Window 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/heiheiha798/dsh-response-window/blob/e79db49964852f9d073fcec737f1787c9809fb85/package.json) → [patch](https://github.com/heiheiha798/dsh-response-window/blob/e79db49964852f9d073fcec737f1787c9809fb85/cordis.patch.yml) · **身份:** `dsh-response-window`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `browser` `session-data` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Seektty** · [Hilbert-beinghappy/seektty@5fcef8c](https://github.com/Hilbert-beinghappy/seektty/commit/5fcef8c85dab0e58338d8174fd2e7922e1dd3efc) — Seektty 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Hilbert-beinghappy/seektty/blob/5fcef8c85dab0e58338d8174fd2e7922e1dd3efc/package.json) → [patch](https://github.com/Hilbert-beinghappy/seektty/blob/5fcef8c85dab0e58338d8174fd2e7922e1dd3efc/cordis.patch.yml) · **身份:** `seektty`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `browser` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH DashScope Media** · [hisonWarren/deepseekharness-alter@efb651d](https://github.com/hisonWarren/deepseekharness-alter/commit/efb651d1e2f28e2169839ee946e856903aee6150) — 调用 DashScope 的图像、视频与语音工具，并在对话中展示媒体卡片。
  - **证据:** [manifest](https://github.com/hisonWarren/deepseekharness-alter/blob/efb651d1e2f28e2169839ee946e856903aee6150/plugins-local/dsh-dashscope-media/package.json) → [patch](https://github.com/hisonWarren/deepseekharness-alter/blob/efb651d1e2f28e2169839ee946e856903aee6150/plugins-local/dsh-dashscope-media/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `image-generation` `video-generation` `text-to-speech` `credentials` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Crypto Analyst** · [hnlisf/dsh-crypto-analyst@ea9a491](https://github.com/hnlisf/dsh-crypto-analyst/commit/ea9a491b601e58b6f070d3f39e36cc4215223928) — 加密货币深度调研智能体插件：输入币种/符号/合约地址，按 5 步思维链调取真实链上/行情/融资/新闻数据，产出结构化中文研报；报告工作台 + 数据可视化 + 自动配图 + MD/PDF 导出。
  - **证据:** [manifest](https://github.com/hnlisf/dsh-crypto-analyst/blob/ea9a491b601e58b6f070d3f39e36cc4215223928/packages/dsh-crypto-analyst/package.json) → [patch](https://github.com/hnlisf/dsh-crypto-analyst/blob/ea9a491b601e58b6f070d3f39e36cc4215223928/packages/dsh-crypto-analyst/cordis.patch.yml) · **身份:** `dsh-crypto-analyst`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `model-tools` `package-install` `web-search` `vision` `financial` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Audio Dagou** · [HokkaidoCOLA/dsh-audio-dagou@fb51976](https://github.com/HokkaidoCOLA/dsh-audio-dagou/commit/fb51976657eda9b7a321903b81262451518a14d4) — 一个给 DeepSeek Harness（DSH）web 会话配音效的插件「大狗」：执行命令后播「大狗」，模型向你提问时播「叮咚鸡」，每轮任务结束按命令次数成正比地播「叫」（上限 10 声）。
  - **证据:** [manifest](https://github.com/HokkaidoCOLA/dsh-audio-dagou/blob/fb51976657eda9b7a321903b81262451518a14d4/package.json) → [patch](https://github.com/HokkaidoCOLA/dsh-audio-dagou/blob/fb51976657eda9b7a321903b81262451518a14d4/cordis.patch.yml) · **身份:** `@dsh-external/dsh-audio-dagou`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `package-install` `audio` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Image Gen** · [hoyyang/dsh-image-gen@304fb01](https://github.com/hoyyang/dsh-image-gen/commit/304fb01d41d7e37bc0b013787dc652e6bf38846f) — DSH Image Gen 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/hoyyang/dsh-image-gen/blob/304fb01d41d7e37bc0b013787dc652e6bf38846f/package.json) → [patch](https://github.com/hoyyang/dsh-image-gen/blob/304fb01d41d7e37bc0b013787dc652e6bf38846f/cordis.patch.yml) · **身份:** `@dsh-external/dsh-image-gen`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Client Auto Continue** · [HsiangNianian/dsh-auto-continue@2c27c77](https://github.com/HsiangNianian/dsh-auto-continue/commit/2c27c77d1cb3bde0bca47e3fe0239b6d4ec991d7) — DSH Web UI plugin: automatically sends "继续" (continue) when a request is interrupted by network errors or other non-human causes
  - **证据:** [manifest](https://github.com/HsiangNianian/dsh-auto-continue/blob/2c27c77d1cb3bde0bca47e3fe0239b6d4ec991d7/package.json) → [patch](https://github.com/HsiangNianian/dsh-auto-continue/blob/2c27c77d1cb3bde0bca47e3fe0239b6d4ec991d7/cordis.patch.yml) · **身份:** `dsh-client-auto-continue`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `browser` `session-data` `model-tools` `package-install` `vision` `financial` `multi-agent` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Mind Garden** · [hyyhf/mindgarden@0b19c13](https://github.com/hyyhf/mindgarden/commit/0b19c13b1b97e4cec52f05e70021aa1cdec4266a) — Mind Garden 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/hyyhf/mindgarden/blob/0b19c13b1b97e4cec52f05e70021aa1cdec4266a/package.json) → [patch](https://github.com/hyyhf/mindgarden/blob/0b19c13b1b97e4cec52f05e70021aa1cdec4266a/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-mind-garden`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `database` `session-data` `model-tools` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **With Pencil** · [IWAIBAOLI/dsh-with-pencil@2086755](https://github.com/IWAIBAOLI/dsh-with-pencil/commit/2086755ec26f2a2caa457f9187ea44539c171598) — With Pencil 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/IWAIBAOLI/dsh-with-pencil/blob/2086755ec26f2a2caa457f9187ea44539c171598/package.json) → [patch](https://github.com/IWAIBAOLI/dsh-with-pencil/blob/2086755ec26f2a2caa457f9187ea44539c171598/cordis.patch.yml) · **身份:** `dsh-with-pencil`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `mcp` `session-data` `system-prompt` `model-tools` `vision` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Projectless Session** · [jarvisluk/dsh-projectless-session@8d1798d](https://github.com/jarvisluk/dsh-projectless-session/commit/8d1798dd213ce5aec193b76a316a2d3c08df2a73) — Projectless Session 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/jarvisluk/dsh-projectless-session/blob/8d1798dd213ce5aec193b76a316a2d3c08df2a73/package.json) → [patch](https://github.com/jarvisluk/dsh-projectless-session/blob/8d1798dd213ce5aec193b76a316a2d3c08df2a73/cordis.patch.yml) · **身份:** `dsh-projectless-session`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `process-control` `session-data` `vision` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Ximalaya** · [jerryqx/dsh-ximalaya@6423aed](https://github.com/jerryqx/dsh-ximalaya/commit/6423aed69cd61360886f9a3568a97df527d70519) — DeepSeek Harness 喜马拉雅播客插件：Host 端代理喜马拉雅搜索/专辑/曲目/收藏声音/订阅专辑/关注主播接口并解析播放地址（免费曲直链 + 登录态 baseInfo 解锁已购/VIP 内容），浏览器侧提供播放条与搜索/专辑/主播/我的面板，并注册 ximalaya_play 模型工具
  - **证据:** [manifest](https://github.com/jerryqx/dsh-ximalaya/blob/6423aed69cd61360886f9a3568a97df527d70519/package.json) → [patch](https://github.com/jerryqx/dsh-ximalaya/blob/6423aed69cd61360886f9a3568a97df527d70519/cordis.patch.yml) · **身份:** `dsh-ximalaya`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `package-install` `audio` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Opencode ZEN Free Provider** · [jiesou/dsh-opencode-zen-free-provider@de05003](https://github.com/jiesou/dsh-opencode-zen-free-provider/commit/de05003153a8192fc350d6e41baba0ad305ff044) — Opencode ZEN Free Provider 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/jiesou/dsh-opencode-zen-free-provider/blob/de05003153a8192fc350d6e41baba0ad305ff044/package.json) → [patch](https://github.com/jiesou/dsh-opencode-zen-free-provider/blob/de05003153a8192fc350d6e41baba0ad305ff044/cordis.patch.yml) · **身份:** `@jiesou/dsh-opencode-zen-free-provider`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `model-tools` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Chatgpt Bridge** · [jiezeng2004-design/dsh-chatgpt-bridge@8c47538](https://github.com/jiezeng2004-design/dsh-chatgpt-bridge/commit/8c47538e3961a9df5abbd5df55424f8e97f360af) — Chatgpt Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/jiezeng2004-design/dsh-chatgpt-bridge/blob/8c47538e3961a9df5abbd5df55424f8e97f360af/package.json) → [patch](https://github.com/jiezeng2004-design/dsh-chatgpt-bridge/blob/8c47538e3961a9df5abbd5df55424f8e97f360af/cordis.patch.yml) · **身份:** `dsh-chatgpt-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `subprocess` `process-control` `mcp` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Model Reasoning** · [karoc/dsh-model-reasoning@5b47342](https://github.com/karoc/dsh-model-reasoning/commit/5b473423de5661e02e36708872755d1b9255634e) — Model Reasoning 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/karoc/dsh-model-reasoning/blob/5b473423de5661e02e36708872755d1b9255634e/package.json) → [patch](https://github.com/karoc/dsh-model-reasoning/blob/5b473423de5661e02e36708872755d1b9255634e/cordis.patch.yml) · **身份:** `dsh-model-reasoning`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `model-tools` `package-install` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Sidebar Panel** · [kee0012/dsh-sidebar-panel@0e26f3d](https://github.com/kee0012/dsh-sidebar-panel/commit/0e26f3ddc1e764568d52852a06aaa7ae226f5d04) — Sidebar Panel 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kee0012/dsh-sidebar-panel/blob/0e26f3ddc1e764568d52852a06aaa7ae226f5d04/package.json) → [patch](https://github.com/kee0012/dsh-sidebar-panel/blob/0e26f3ddc1e764568d52852a06aaa7ae226f5d04/cordis.patch.yml) · **身份:** `dsh-sidebar-panel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `browser` `session-data` `package-install` `vision` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Session NAV** · [kiligzzz/dsh-session-nav@5089021](https://github.com/kiligzzz/dsh-session-nav/commit/50890218632b2c4c18d8840762a1b55d257644d7) — Session NAV 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kiligzzz/dsh-session-nav/blob/50890218632b2c4c18d8840762a1b55d257644d7/package.json) → [patch](https://github.com/kiligzzz/dsh-session-nav/blob/50890218632b2c4c18d8840762a1b55d257644d7/cordis.patch.yml) · **身份:** `@kiligzzz/dsh-session-nav`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `browser` `session-data` `package-install` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **NAV Pointer** · [kongdexu/dsh-nav-pointer@9fb8fd5](https://github.com/kongdexu/dsh-nav-pointer/commit/9fb8fd5648827452bceb9a6b2213173da7c7ee37) — NAV Pointer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kongdexu/dsh-nav-pointer/blob/9fb8fd5648827452bceb9a6b2213173da7c7ee37/package.json) → [patch](https://github.com/kongdexu/dsh-nav-pointer/blob/9fb8fd5648827452bceb9a6b2213173da7c7ee37/cordis.patch.yml) · **身份:** `dsh-nav-pointer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Vibegap** · [ktao732084-arch/vibegap@c8b5423](https://github.com/ktao732084-arch/vibegap/commit/c8b54235103e59ffb26b6f6762715170bc6ad347) — Vibegap 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ktao732084-arch/vibegap/blob/c8b54235103e59ffb26b6f6762715170bc6ad347/vibegap/adapters/dsh/plugin/package.json) → [patch](https://github.com/ktao732084-arch/vibegap/blob/c8b54235103e59ffb26b6f6762715170bc6ad347/vibegap/adapters/dsh/plugin/cordis.patch.yml) · **身份:** `dsh-vibegap`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `database` `session-data` `audio` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DirectorX** · [LaplaceYoung/dsh-directorx@5553398](https://github.com/LaplaceYoung/dsh-directorx/commit/5553398fafcdb8e263f54e19203c1c56fbd43e43) — 集 AI 视频生成、剪辑、质检、分镜画布和导演知识库于一体。
  - **证据:** [manifest](https://github.com/LaplaceYoung/dsh-directorx/blob/5553398fafcdb8e263f54e19203c1c56fbd43e43/package.json) → [patch](https://github.com/LaplaceYoung/dsh-directorx/blob/5553398fafcdb8e263f54e19203c1c56fbd43e43/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `video-generation` `video-editing` `quality-control` `filesystem-write` `external-network` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Local LLM Controller** · [Lbunc/dsh-local-llm-controller@4719b07](https://github.com/Lbunc/dsh-local-llm-controller/commit/4719b073957553cde70d2e26b226a34a853ae533) — Local LLM Controller 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Lbunc/dsh-local-llm-controller/blob/4719b073957553cde70d2e26b226a34a853ae533/package.json) → [patch](https://github.com/Lbunc/dsh-local-llm-controller/blob/4719b073957553cde70d2e26b226a34a853ae533/cordis.patch.yml) · **身份:** `dsh-local-llm-controller`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `model-tools` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Qwen Voice** · [leaveimagination/dsh-qwen-voice@c63fed7](https://github.com/leaveimagination/dsh-qwen-voice/commit/c63fed7f17ea3ec2ea53247057e84be9365fcbe0) — DSH Qwen Voice 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/leaveimagination/dsh-qwen-voice/blob/c63fed7f17ea3ec2ea53247057e84be9365fcbe0/package.json) → [patch](https://github.com/leaveimagination/dsh-qwen-voice/blob/c63fed7f17ea3ec2ea53247057e84be9365fcbe0/cordis.patch.yml) · **身份:** `dsh-qwen-voice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Manager** · [leonardoxr/dsh-plugin-manager@8ba63be](https://github.com/leonardoxr/dsh-plugin-manager/commit/8ba63be1dd85a7ca4ef8a7f8440931910e5a9612) — Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/leonardoxr/dsh-plugin-manager/blob/8ba63be1dd85a7ca4ef8a7f8440931910e5a9612/package.json) → [patch](https://github.com/leonardoxr/dsh-plugin-manager/blob/8ba63be1dd85a7ca4ef8a7f8440931910e5a9612/cordis.patch.yml) · **身份:** `@leonardoxr/dsh-plugin-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `process-control` `session-data` `package-install` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **ALL IN ONE** · [leonardoxr/dsh-plugins@7da51f8](https://github.com/leonardoxr/dsh-plugins/commit/7da51f809119cd21a44438ee433c84a3b8aca8ba) — ALL IN ONE 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/leonardoxr/dsh-plugins/blob/7da51f809119cd21a44438ee433c84a3b8aca8ba/package.json) → [patch](https://github.com/leonardoxr/dsh-plugins/blob/7da51f809119cd21a44438ee433c84a3b8aca8ba/cordis.patch.yml) · **身份:** `dsh-all-in-one`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `vision` `multi-agent` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **TUI** · [Lingxi-AI-cn/dsh-tui-plugin@b4a5743](https://github.com/Lingxi-AI-cn/dsh-tui-plugin/commit/b4a574385627ef61ef9a527970fc393fa85b7b99) — TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Lingxi-AI-cn/dsh-tui-plugin/blob/b4a574385627ef61ef9a527970fc393fa85b7b99/packages/bundle/tui-app/package.json) → [patch](https://github.com/Lingxi-AI-cn/dsh-tui-plugin/blob/b4a574385627ef61ef9a527970fc393fa85b7b99/packages/bundle/tui-app/cordis.patch.yml) · **身份:** `@lingxi-ai-cn/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `subprocess` `mcp` `session-data` `system-prompt` `model-tools` `package-install` `vision` `multi-agent` `theme` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Continuity** · [linxuhao/Deepseek-Continuity@50c90e4](https://github.com/linxuhao/Deepseek-Continuity/commit/50c90e490c84b4c63653648e73642d910cce3864) — Continuity 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/linxuhao/Deepseek-Continuity/blob/50c90e490c84b4c63653648e73642d910cce3864/package.json) → [patch](https://github.com/linxuhao/Deepseek-Continuity/blob/50c90e490c84b4c63653648e73642d910cce3864/cordis.patch.yml) · **身份:** `dsh-plugin-continuity`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `model-tools` `web-search` `vision` `audio` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DS Vision Auto Route** · [litianshuo110/dsh-ds-vision-auto-route@d1e755b](https://github.com/litianshuo110/dsh-ds-vision-auto-route/commit/d1e755baf564eb1f8bf71b20bd12d19734fb1bda) — DS Vision Auto Route 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/litianshuo110/dsh-ds-vision-auto-route/blob/d1e755baf564eb1f8bf71b20bd12d19734fb1bda/package.json) → [patch](https://github.com/litianshuo110/dsh-ds-vision-auto-route/blob/d1e755baf564eb1f8bf71b20bd12d19734fb1bda/cordis.patch.yml) · **身份:** `dsh-ds-vision-auto-route`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `session-data` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Agnes Media** · [LittleBeaverStudio/agnes-media@8873cc6](https://github.com/LittleBeaverStudio/agnes-media/commit/8873cc64db8df5a4c683f04665ae32c2bbfabc90) — Agnes Media 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/LittleBeaverStudio/agnes-media/blob/8873cc64db8df5a4c683f04665ae32c2bbfabc90/package.json) → [patch](https://github.com/LittleBeaverStudio/agnes-media/blob/8873cc64db8df5a4c683f04665ae32c2bbfabc90/cordis.patch.yml) · **身份:** `agnes-media`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `browser` `session-data` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **ModLens** · [liustack/modlens@2818192](https://github.com/liustack/modlens/commit/28181920f6b064e33c6b235221e1a3a5d360a897) — 把图片转换为 OCR、布局和语义证据，为纯文本模型补充视觉能力。
  - **证据:** [manifest](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/package.json) → [patch](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/cordis.patch.yml) · **身份:** `@liustack/modlens`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `external-installer` · **核验备注:** 外部视觉引擎与凭据属于能力事实，不代表安全性判断。

- **Toolkit** · [LongSir0419/dsh-toolkit@bc93682](https://github.com/LongSir0419/dsh-toolkit/commit/bc93682be14b14cb6447c3b025b12b0c430f32f9) — Toolkit 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/LongSir0419/dsh-toolkit/blob/bc93682be14b14cb6447c3b025b12b0c430f32f9/package.json) → [patch](https://github.com/LongSir0419/dsh-toolkit/blob/bc93682be14b14cb6447c3b025b12b0c430f32f9/cordis.patch.yml) · **身份:** `@wanghailong0419/dsh-toolkit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `filesystem-write` `process-control` `mcp` `session-data` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Bridge Browser** · [Lum1104/dsh-browser@ef8b551](https://github.com/Lum1104/dsh-browser/commit/ef8b551666d6e725e69934e71c3cc0f63c3e51b0) — Bridge Browser 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Lum1104/dsh-browser/blob/ef8b551666d6e725e69934e71c3cc0f63c3e51b0/packages/browser/bridge-browser/package.json) → [patch](https://github.com/Lum1104/dsh-browser/blob/ef8b551666d6e725e69934e71c3cc0f63c3e51b0/packages/browser/bridge-browser/cordis.patch.yml) · **身份:** `@yuxianglin/dsh-bridge-browser`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `browser` `session-data` `model-tools` `package-install` `vision` `financial` `theme` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Openclaw Persona** · [lynsucceed/dsh-openclaw-persona@fe858ec](https://github.com/lynsucceed/dsh-openclaw-persona/commit/fe858ecb28ff5d8204b57d430b0a2a66a3d177dc) — Openclaw Persona 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lynsucceed/dsh-openclaw-persona/blob/fe858ecb28ff5d8204b57d430b0a2a66a3d177dc/package.json) → [patch](https://github.com/lynsucceed/dsh-openclaw-persona/blob/fe858ecb28ff5d8204b57d430b0a2a66a3d177dc/cordis.patch.yml) · **身份:** `@lynsucceed/dsh-openclaw-persona`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `vision` `audio` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Voice Chat** · [maoyuching/dsh-voice-chat@9354d54](https://github.com/maoyuching/dsh-voice-chat/commit/9354d54d95f82c9f20e19bb812a48cce540a6ac1) — 豆包式语音对话客户端插件：聊天框麦克风按钮（按住说话）→ 语音转文字发送 → 回复自动朗读。
  - **证据:** [manifest](https://github.com/maoyuching/dsh-voice-chat/blob/9354d54d95f82c9f20e19bb812a48cce540a6ac1/package.json) → [patch](https://github.com/maoyuching/dsh-voice-chat/blob/9354d54d95f82c9f20e19bb812a48cce540a6ac1/cordis.patch.yml) · **身份:** `dsh-voice-chat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `model-tools` `audio` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Patchouli** · [memorax-ai/dsh-patchouli@606ae9d](https://github.com/memorax-ai/dsh-patchouli/commit/606ae9ddb354312cef2caf642e2068f1cc453c7d) — Patchouli 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/memorax-ai/dsh-patchouli/blob/606ae9ddb354312cef2caf642e2068f1cc453c7d/package.json) → [patch](https://github.com/memorax-ai/dsh-patchouli/blob/606ae9ddb354312cef2caf642e2068f1cc453c7d/cordis.patch.yml) · **身份:** `dsh-patchouli`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `process-control` `database` `session-data` `model-tools` `vision` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Automation** · [MichengAI/dsh-automation@8218e23](https://github.com/MichengAI/dsh-automation/commit/8218e234b9f8294fc55000d4aa8df382bdaf5daa) — 在独立 DSH Session 中按计划执行编码任务，支持 Web 设置页与 Agent 双入口管理。
  - **证据:** [manifest](https://github.com/MichengAI/dsh-automation/blob/8218e234b9f8294fc55000d4aa8df382bdaf5daa/package.json) → [patch](https://github.com/MichengAI/dsh-automation/blob/8218e234b9f8294fc55000d4aa8df382bdaf5daa/cordis.patch.yml) · **身份:** `@michengai/dsh-automation`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Codex UI** · [MichengAI/dsh-codex-ui@0058a1f](https://github.com/MichengAI/dsh-codex-ui/commit/0058a1f6348d6fbf8ba207c9aa89dce113511f95) — 以 Codex 风格重构 DSH Web 侧栏的独立客户端插件
  - **证据:** [manifest](https://github.com/MichengAI/dsh-codex-ui/blob/0058a1f6348d6fbf8ba207c9aa89dce113511f95/package.json) → [patch](https://github.com/MichengAI/dsh-codex-ui/blob/0058a1f6348d6fbf8ba207c9aa89dce113511f95/cordis.patch.yml) · **身份:** `@michengai/dsh-codex-ui`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `session-data` `package-install` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Media Skills** · [MJorgin/dsh-media-skills@10c2e52](https://github.com/MJorgin/dsh-media-skills/commit/10c2e52fc4ceaa5b3f5369677b0e5308bff5cd1a) — Media Skills 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MJorgin/dsh-media-skills/blob/10c2e52fc4ceaa5b3f5369677b0e5308bff5cd1a/package.json) → [patch](https://github.com/MJorgin/dsh-media-skills/blob/10c2e52fc4ceaa5b3f5369677b0e5308bff5cd1a/cordis.patch.yml) · **身份:** `dsh-media-skills`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `process-control` `session-data` `vision` `financial` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Modellix** · [Modellix/dsh-modellix@77d005e](https://github.com/Modellix/dsh-modellix/commit/77d005ed01a83495d1c6421969e846e444c9b919) — Modellix 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Modellix/dsh-modellix/blob/77d005ed01a83495d1c6421969e846e444c9b919/package.json) → [patch](https://github.com/Modellix/dsh-modellix/blob/77d005ed01a83495d1c6421969e846e444c9b919/cordis.patch.yml) · **身份:** `dsh-modellix`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` `model-tools` `package-install` `vision` `audio` `financial` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Fabric** · [monotykamary/dsh-fabric@8db28d8](https://github.com/monotykamary/dsh-fabric/commit/8db28d88c6583a7500a000713f0f8685d106e612) — Fabric 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/monotykamary/dsh-fabric/blob/8db28d88c6583a7500a000713f0f8685d106e612/package.json) → [patch](https://github.com/monotykamary/dsh-fabric/blob/8db28d88c6583a7500a000713f0f8685d106e612/cordis.patch.yml) · **身份:** `dsh-fabric`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `database` `session-data` `system-prompt` `model-tools` `package-install` `vision` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Multiprovider** · [monotykamary/dsh-multiprovider@e1e7e5b](https://github.com/monotykamary/dsh-multiprovider/commit/e1e7e5bb9fbc0e83116f07364ee0554ce254d0a4) — Multiprovider 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/monotykamary/dsh-multiprovider/blob/e1e7e5bb9fbc0e83116f07364ee0554ce254d0a4/package.json) → [patch](https://github.com/monotykamary/dsh-multiprovider/blob/e1e7e5bb9fbc0e83116f07364ee0554ce254d0a4/cordis.patch.yml) · **身份:** `dsh-multiprovider`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Lark Bridge** · [moyu-good/dsh-lark-bridge@189ab92](https://github.com/moyu-good/dsh-lark-bridge/commit/189ab924b517585c0a75cc8dfffb51a4e098269d) — Lark Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/moyu-good/dsh-lark-bridge/blob/189ab924b517585c0a75cc8dfffb51a4e098269d/package.json) → [patch](https://github.com/moyu-good/dsh-lark-bridge/blob/189ab924b517585c0a75cc8dfffb51a4e098269d/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-lark-bridge`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `mcp` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Model Garden** · [mrdevlorx/dsh-model-garden@5b1133c](https://github.com/mrdevlorx/dsh-model-garden/commit/5b1133cb508e67975d2fbb69d6f80eb46e6785a1) — Model Garden 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/mrdevlorx/dsh-model-garden/blob/5b1133cb508e67975d2fbb69d6f80eb46e6785a1/package.json) → [patch](https://github.com/mrdevlorx/dsh-model-garden/blob/5b1133cb508e67975d2fbb69d6f80eb46e6785a1/cordis.patch.yml) · **身份:** `dsh-model-garden`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `subprocess` `process-control` `browser` `session-data` `model-tools` `vision` `financial` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Version** · [MrWinchester/dsh-version-control@17daf49](https://github.com/MrWinchester/dsh-version-control/commit/17daf4964991b326e5d3b2317707274f99683d9d) — Version 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MrWinchester/dsh-version-control/blob/17daf4964991b326e5d3b2317707274f99683d9d/package.json) → [patch](https://github.com/MrWinchester/dsh-version-control/blob/17daf4964991b326e5d3b2317707274f99683d9d/cordis.patch.yml) · **身份:** `@linxin666/dsh-version`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `client-injection` `process-control` `package-install` `vision` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Copilot ONE Monokai Office** · [MrWolfox-ctrlcv/copilot-one-monokai-theme-for-deepseek-harness@a0bf01d](https://github.com/MrWolfox-ctrlcv/copilot-one-monokai-theme-for-deepseek-harness/commit/a0bf01d2c4bc8371ac887bf4e7011f0bc0c5a65d) — One Monokai (office mode) theme for DeepSeek Harness Web UI — a cozy, low-glare CSS overlay aligned with VS Code's One Monokai. · DeepSeek Harness 办公主题：One Monokai 质感，护眼舒适。
  - **证据:** [manifest](https://github.com/MrWolfox-ctrlcv/copilot-one-monokai-theme-for-deepseek-harness/blob/a0bf01d2c4bc8371ac887bf4e7011f0bc0c5a65d/package.json) → [patch](https://github.com/MrWolfox-ctrlcv/copilot-one-monokai-theme-for-deepseek-harness/blob/a0bf01d2c4bc8371ac887bf4e7011f0bc0c5a65d/cordis.patch.yml) · **身份:** `copilot-one-monokai-office`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Wechat Bridge** · [NattoCB/dsh-plugin-wechat-bridge@0c790fc](https://github.com/NattoCB/dsh-plugin-wechat-bridge/commit/0c790fcf03989fc1b17b796e6d8b5fb6f462d65b) — Wechat Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/NattoCB/dsh-plugin-wechat-bridge/blob/0c790fcf03989fc1b17b796e6d8b5fb6f462d65b/package.json) → [patch](https://github.com/NattoCB/dsh-plugin-wechat-bridge/blob/0c790fcf03989fc1b17b796e6d8b5fb6f462d65b/cordis.patch.yml) · **身份:** `dsh-plugin-wechat-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `vision` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Harness ACP** · [openma-ai/deepseek-harness-acp@89995bc](https://github.com/openma-ai/deepseek-harness-acp/commit/89995bcecfdbd9846ccaf0a65c7a477793dc2c1a) — Harness ACP 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/openma-ai/deepseek-harness-acp/blob/89995bcecfdbd9846ccaf0a65c7a477793dc2c1a/package.json) → [patch](https://github.com/openma-ai/deepseek-harness-acp/blob/89995bcecfdbd9846ccaf0a65c7a477793dc2c1a/cordis.patch.yml) · **身份:** `@openma/deepseek-harness-acp`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `browser` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Vault** · [Ox0400/dsh-vault@0314cfa](https://github.com/Ox0400/dsh-vault/commit/0314cfa92c6f07debaa3b56e8e50bfaa45777831) — Vault 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ox0400/dsh-vault/blob/0314cfa92c6f07debaa3b56e8e50bfaa45777831/package.json) → [patch](https://github.com/Ox0400/dsh-vault/blob/0314cfa92c6f07debaa3b56e8e50bfaa45777831/cordis.patch.yml) · **身份:** `dsh-vault`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `browser` `database` `session-data` `system-prompt` `model-tools` `package-install` `vision` `email` `financial` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Paste Names** · [PaoMoXML/dsh-paste-names@03d5ee1](https://github.com/PaoMoXML/dsh-paste-names/commit/03d5ee1902123b900f6ff35550bade7da4b6a2d5) — Paste Names 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/PaoMoXML/dsh-paste-names/blob/03d5ee1902123b900f6ff35550bade7da4b6a2d5/package.json) → [patch](https://github.com/PaoMoXML/dsh-paste-names/blob/03d5ee1902123b900f6ff35550bade7da4b6a2d5/cordis.patch.yml) · **身份:** `dsh-paste-names`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Vision Opencode** · [poiuyjie/dsh-vision-opencode@d01f809](https://github.com/poiuyjie/dsh-vision-opencode/commit/d01f8096789433b2e883107f6713a804dcbc2bdc) — DSH Vision Opencode 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/poiuyjie/dsh-vision-opencode/blob/d01f8096789433b2e883107f6713a804dcbc2bdc/package.json) → [patch](https://github.com/poiuyjie/dsh-vision-opencode/blob/d01f8096789433b2e883107f6713a804dcbc2bdc/cordis.patch.yml) · **身份:** `dsh-vision-opencode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Dream Skin** · [RevolutionLA/dsh-dream-skin@e9a840a](https://github.com/RevolutionLA/dsh-dream-skin/commit/e9a840a708e59531c2e8b0174a7f6703a3d87f74) — DeepSeek Harness 换肤插件（Dream Skin for DSH）：8 套 iOS / Linear 式清透冷调的高质感主题 + 弥散光壁纸 + 每皮肤智能背景 + 强调色 + 主题包分享，把换肤做成材质与配色克制的高级感工艺，而非贴图 — in the spirit of Codex Dream Skin, elevated.
  - **证据:** [manifest](https://github.com/RevolutionLA/dsh-dream-skin/blob/e9a840a708e59531c2e8b0174a7f6703a3d87f74/package.json) → [patch](https://github.com/RevolutionLA/dsh-dream-skin/blob/e9a840a708e59531c2e8b0174a7f6703a3d87f74/cordis.patch.yml) · **身份:** `dsh-dream-skin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `browser` `package-install` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Pets** · [rikfish163-rgb/dsh-pets@37242bb](https://github.com/rikfish163-rgb/dsh-pets/commit/37242bbc4e2003f86639cb023d36b7b25a7a0cc2) — Codex Pets–style desktop pets + live task panel for DeepSeek Harness Web UI: a draggable anime pixel pet plus a floating dashboard of running/completed tasks and questions awaiting your input. / DSH Web UI 桌宠 + 实时任务面板（进行中 / 已完成 / 等待你回答的提问）。
  - **证据:** [manifest](https://github.com/rikfish163-rgb/dsh-pets/blob/37242bbc4e2003f86639cb023d36b7b25a7a0cc2/package.json) → [patch](https://github.com/rikfish163-rgb/dsh-pets/blob/37242bbc4e2003f86639cb023d36b7b25a7a0cc2/cordis.patch.yml) · **身份:** `@dsh-local/dsh-pets`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Simple Background** · [RunCross/dsh-simple-background@3af4670](https://github.com/RunCross/dsh-simple-background/commit/3af4670f6e40eaf1a38c45d2025c9a567961cb92) — Simple Background 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/RunCross/dsh-simple-background/blob/3af4670f6e40eaf1a38c45d2025c9a567961cb92/package.json) → [patch](https://github.com/RunCross/dsh-simple-background/blob/3af4670f6e40eaf1a38c45d2025c9a567961cb92/cordis.patch.yml) · **身份:** `@runcross/dsh-simple-background`
  - **许可证:** repo `Apache-2.0` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `filesystem-read` `filesystem-write` `browser` `session-data` `package-install` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Memoryweave** · [RyanXr226/MemoryWeave@ff67695](https://github.com/RyanXr226/MemoryWeave/commit/ff67695b98d9ba9e2b7d295451cdaa86563aa6af) — Memoryweave 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/RyanXr226/MemoryWeave/blob/ff67695b98d9ba9e2b7d295451cdaa86563aa6af/package.json) → [patch](https://github.com/RyanXr226/MemoryWeave/blob/ff67695b98d9ba9e2b7d295451cdaa86563aa6af/bundle/cordis.patch.yml) · **身份:** `@ryanxr226/memoryweave`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `session-data` `model-tools` `package-install` `vision` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Multimodal Client** · [SCT192221/dsh-multimodal@c0e0122](https://github.com/SCT192221/dsh-multimodal/commit/c0e0122b764d9883500e5f8eb39e32313d85f34d) — DSH Multimodal Client 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SCT192221/dsh-multimodal/blob/c0e0122b764d9883500e5f8eb39e32313d85f34d/dsh-multimodal-client/package.json) → [patch](https://github.com/SCT192221/dsh-multimodal/blob/c0e0122b764d9883500e5f8eb39e32313d85f34d/dsh-multimodal-client/cordis.patch.yml) · **身份:** `dsh-multimodal-client`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Agent Browser** · [shantanugoel/dsh-agent-browser@2a78a9f](https://github.com/shantanugoel/dsh-agent-browser/commit/2a78a9fa3a1a7e1b7bfb053b3c86d6c3f29017e8) — Agent Browser 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/shantanugoel/dsh-agent-browser/blob/2a78a9fa3a1a7e1b7bfb053b3c86d6c3f29017e8/packages/dsh-agent-browser/package.json) → [patch](https://github.com/shantanugoel/dsh-agent-browser/blob/2a78a9fa3a1a7e1b7bfb053b3c86d6c3f29017e8/packages/dsh-agent-browser/cordis.patch.yml) · **身份:** `dsh-agent-browser`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `browser` `session-data` `system-prompt` `model-tools` `package-install` `vision` `multi-agent` `nested-bundle` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Theme Tuner** · [shawnlone/dsh-theme-tuner@e32eba1](https://github.com/shawnlone/dsh-theme-tuner/commit/e32eba15c4b02dd914e8bd8873df1e4130af9451) — DSH web plugin: theme customization placed under the built-in Appearance (外观) settings. It reuses the Appearance light/dark switch and lets you adjust accent / background / foreground / contrast for the active theme, applied live through DSH theme token overrides.
  - **证据:** [manifest](https://github.com/shawnlone/dsh-theme-tuner/blob/e32eba15c4b02dd914e8bd8873df1e4130af9451/package.json) → [patch](https://github.com/shawnlone/dsh-theme-tuner/blob/e32eba15c4b02dd914e8bd8873df1e4130af9451/cordis.patch.yml) · **身份:** `dsh-theme-tuner`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `process-control` `package-install` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH SiliconFlow Vision** · [ShiXiangYu2/dsh-siliconflow-vision@911c63b](https://github.com/ShiXiangYu2/dsh-siliconflow-vision/commit/911c63b86bbd22d14951fa50b5b3def5480463c9) — 通过 SiliconFlow 视觉模型分析本地、远程及 Data URL 图片，并提供持久化 Web 面板。
  - **证据:** [manifest](https://github.com/ShiXiangYu2/dsh-siliconflow-vision/blob/911c63b86bbd22d14951fa50b5b3def5480463c9/package.json) → [patch](https://github.com/ShiXiangYu2/dsh-siliconflow-vision/blob/911c63b86bbd22d14951fa50b5b3def5480463c9/cordis.patch.yml) · **身份:** `dsh-siliconflow-vision`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `vision-model` `external-network` `local-file-read` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **Harness Chatroom** · [sliverp/DeepSeek-harness-chatroom@a429bfe](https://github.com/sliverp/DeepSeek-harness-chatroom/commit/a429bfe3a7f7ad21f4d57a5ccd9b8a16e9454f0e) — Harness Chatroom 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/sliverp/DeepSeek-harness-chatroom/blob/a429bfe3a7f7ad21f4d57a5ccd9b8a16e9454f0e/package.json) → [patch](https://github.com/sliverp/DeepSeek-harness-chatroom/blob/a429bfe3a7f7ad21f4d57a5ccd9b8a16e9454f0e/cordis.patch.yml) · **身份:** `deepseek-harness-chatroom`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `process-control` `session-data` `model-tools` `vision` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **ACP Rich** · [smelt-ai/dsh-acp-rich@61d5af0](https://github.com/smelt-ai/dsh-acp-rich/commit/61d5af06145e04728c7e358bf7aec07e5456afe5) — ACP Rich 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/smelt-ai/dsh-acp-rich/blob/61d5af06145e04728c7e358bf7aec07e5456afe5/package.json) → [patch](https://github.com/smelt-ai/dsh-acp-rich/blob/61d5af06145e04728c7e358bf7aec07e5456afe5/profile/cordis.patch.yml) · **身份:** `@smelt-ai/dsh-acp-rich`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `subprocess` `process-control` `mcp` `database` `session-data` `model-tools` `vision` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Narrative Voice** · [TellToday/dsh-narrative-voice@7b4d13e](https://github.com/TellToday/dsh-narrative-voice/commit/7b4d13ef2437a87485851e1b8a2df60f9bcaafee) — Narrative Voice 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/TellToday/dsh-narrative-voice/blob/7b4d13ef2437a87485851e1b8a2df60f9bcaafee/package.json) → [patch](https://github.com/TellToday/dsh-narrative-voice/blob/7b4d13ef2437a87485851e1b8a2df60f9bcaafee/cordis.patch.yml) · **身份:** `@dsh-user/narrative-voice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `process-control` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Browser Skill DSH Plugin** · [Tencent/BrowserSkill@2719e76](https://github.com/Tencent/BrowserSkill/commit/2719e76438ea0c4a4227493731267269dca82e0f) — Browser Skill DSH Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Tencent/BrowserSkill/blob/2719e76438ea0c4a4227493731267269dca82e0f/packages/dsh-plugin-browserskill/package.json) → [patch](https://github.com/Tencent/BrowserSkill/blob/2719e76438ea0c4a4227493731267269dca82e0f/packages/dsh-plugin-browserskill/cordis.patch.yml) · **身份:** `@wxg-prc-cpg/browser-skill-dsh-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `browser` `session-data` `system-prompt` `model-tools` `package-install` `vision` `theme` `nested-bundle` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Model Router** · [tianji-qingtian/dsh-model-router@81c3e5a](https://github.com/tianji-qingtian/dsh-model-router/commit/81c3e5a51dffe0eaaedfe47ccc0337dec325659c) — Model Router 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/tianji-qingtian/dsh-model-router/blob/81c3e5a51dffe0eaaedfe47ccc0337dec325659c/package.json) → [patch](https://github.com/tianji-qingtian/dsh-model-router/blob/81c3e5a51dffe0eaaedfe47ccc0337dec325659c/cordis.patch.yml) · **身份:** `dsh-model-router`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `model-tools` `package-install` `vision` `financial` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Notes Markdown** · [Tieboyh/dsh-notes-markdown@ac0a096](https://github.com/Tieboyh/dsh-notes-markdown/commit/ac0a096f501356a728d9ea2788c9914aac680787) — Notes Markdown 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Tieboyh/dsh-notes-markdown/blob/ac0a096f501356a728d9ea2788c9914aac680787/package.json) → [patch](https://github.com/Tieboyh/dsh-notes-markdown/blob/ac0a096f501356a728d9ea2788c9914aac680787/cordis.patch.yml) · **身份:** `dsh-notes-markdown`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `filesystem-write` `process-control` `session-data` `package-install` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Session Enhance** · [Tinger-X/dsh-session-enhance@89bac3c](https://github.com/Tinger-X/dsh-session-enhance/commit/89bac3cd6f5817f45e5cb8f86559b990c4282e5b) — Session Enhance 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Tinger-X/dsh-session-enhance/blob/89bac3cd6f5817f45e5cb8f86559b990c4282e5b/package.json) → [patch](https://github.com/Tinger-X/dsh-session-enhance/blob/89bac3cd6f5817f45e5cb8f86559b990c4282e5b/cordis.patch.yml) · **身份:** `dsh-session-enhance`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `process-control` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Wechat Format** · [Tinywan/dsh-wechat-format@86d5fa6](https://github.com/Tinywan/dsh-wechat-format/commit/86d5fa63a60b561c7c20cacc91705bdc34294470) — DeepSeek Harness 插件：微信公众号 Markdown 排版工具（wechat_format），输出全内联样式 HTML
  - **证据:** [manifest](https://github.com/Tinywan/dsh-wechat-format/blob/86d5fa63a60b561c7c20cacc91705bdc34294470/package.json) → [patch](https://github.com/Tinywan/dsh-wechat-format/blob/86d5fa63a60b561c7c20cacc91705bdc34294470/cordis.patch.yml) · **身份:** `dsh-wechat-format`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `vision` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Sessions Manager** · [TOBYCAI/dsh-sessions-manager@0812e37](https://github.com/TOBYCAI/dsh-sessions-manager/commit/0812e37e1417c0cf6f89202b118a2fc37366b8d8) — DSH 设置面板会话管理器：归档 / 恢复 / 彻底删除 / 移动到其他工作区，带工作区标签与会话日期；统一「会话管理」面板。Session manager for the DeepSeek Harness settings panel — archive / restore / permanently delete / move sessions across workspaces, with workspace tags & session dates in one unified panel.
  - **证据:** [manifest](https://github.com/TOBYCAI/dsh-sessions-manager/blob/0812e37e1417c0cf6f89202b118a2fc37366b8d8/package.json) → [patch](https://github.com/TOBYCAI/dsh-sessions-manager/blob/0812e37e1417c0cf6f89202b118a2fc37366b8d8/cordis.patch.yml) · **身份:** `dsh-sessions-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `browser` `session-data` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Tongflow** · [tong-io/tongflow@914cd68](https://github.com/tong-io/tongflow/commit/914cd6812d84229146a0ffed34a128e09ddeec11) — Tongflow 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/tong-io/tongflow/blob/914cd6812d84229146a0ffed34a128e09ddeec11/packages/dsh-tongflow/package.json) → [patch](https://github.com/tong-io/tongflow/blob/914cd6812d84229146a0ffed34a128e09ddeec11/packages/dsh-tongflow/cordis.patch.yml) · **身份:** `dsh-tongflow`
  - **许可证:** repo `AGPL-3.0` / package `AGPL-3.0-only` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `database` `session-data` `model-tools` `package-install` `plugin-management` `vision` `audio` `financial` `theme` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Advanced Model Editor** · [u9521/dsh-advanced-model-editor@07864a5](https://github.com/u9521/dsh-advanced-model-editor/commit/07864a531c7fd7cd81bf4a0a11c169711f60a6ef) — Advanced Model Editor 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/u9521/dsh-advanced-model-editor/blob/07864a531c7fd7cd81bf4a0a11c169711f60a6ef/package.json) → [patch](https://github.com/u9521/dsh-advanced-model-editor/blob/07864a531c7fd7cd81bf4a0a11c169711f60a6ef/cordis.patch.yml) · **身份:** `@local/dsh-advanced-model-editor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Desktop** · [uuedTech/dsh-plugins-pub@607af5d](https://github.com/uuedTech/dsh-plugins-pub/commit/607af5df1365c39344e58c20a7fd1cd402db4de9) — Desktop 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/uuedTech/dsh-plugins-pub/blob/607af5df1365c39344e58c20a7fd1cd402db4de9/dsh-desktop/package.json) → [patch](https://github.com/uuedTech/dsh-plugins-pub/blob/607af5df1365c39344e58c20a7fd1cd402db4de9/dsh-desktop/cordis.patch.yml) · **身份:** `@uued/dsh-desktop`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `browser` `session-data` `model-tools` `package-install` `vision` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Concurrency Meter** · [Wanbinyu/dsh-concurrency-meter@44ff024](https://github.com/Wanbinyu/dsh-concurrency-meter/commit/44ff0241003861780807c6d270f8bcf18e3c2b00) — Concurrency Meter 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Wanbinyu/dsh-concurrency-meter/blob/44ff0241003861780807c6d270f8bcf18e3c2b00/package.json) → [patch](https://github.com/Wanbinyu/dsh-concurrency-meter/blob/44ff0241003861780807c6d270f8bcf18e3c2b00/cordis.patch.yml) · **身份:** `dsh-concurrency-meter`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Error Lens** · [Wanbinyu/dsh-error-lens@75c0a32](https://github.com/Wanbinyu/dsh-error-lens/commit/75c0a3282d90d342c73cc2b301f1ff9f05a9de75) — Error Lens 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Wanbinyu/dsh-error-lens/blob/75c0a3282d90d342c73cc2b301f1ff9f05a9de75/package.json) → [patch](https://github.com/Wanbinyu/dsh-error-lens/blob/75c0a3282d90d342c73cc2b301f1ff9f05a9de75/cordis.patch.yml) · **身份:** `dsh-error-lens`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Provider Probe** · [Wanbinyu/dsh-provider-probe@681896c](https://github.com/Wanbinyu/dsh-provider-probe/commit/681896c8390480aa1309c2f16dbaa3eb9a97e1d4) — Provider Probe 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Wanbinyu/dsh-provider-probe/blob/681896c8390480aa1309c2f16dbaa3eb9a97e1d4/package.json) → [patch](https://github.com/Wanbinyu/dsh-provider-probe/blob/681896c8390480aa1309c2f16dbaa3eb9a97e1d4/cordis.patch.yml) · **身份:** `dsh-provider-probe`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Macos Skin** · [wangkuntian/dsh-macos-skin@446ea95](https://github.com/wangkuntian/dsh-macos-skin/commit/446ea95d7d0ec347ab514642b16a2435640ac14b) — Macos Skin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wangkuntian/dsh-macos-skin/blob/446ea95d7d0ec347ab514642b16a2435640ac14b/package.json) → [patch](https://github.com/wangkuntian/dsh-macos-skin/blob/446ea95d7d0ec347ab514642b16a2435640ac14b/cordis.patch.yml) · **身份:** `dsh-macos-skin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `process-control` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Screenshot Capture** · [wangzhanchao883/dsh-screenshot-capture@1cc9f53](https://github.com/wangzhanchao883/dsh-screenshot-capture/commit/1cc9f5335e48117221fcb9368a5aec7e44e63e0c) — Point-and-shoot screenshot capture for DeepSeek Harness: clipboard watcher + system floating window (comment & key-point, copy/save-doc/save-image) + instant OCR + Obsidian per-day merging + evening AI organization. 指哪拍哪 · 截图即存:剪贴板监听 + 鼠标位置系统级悬浮窗 + 即时 OCR + Obsidian 按天合并 + 晚间 AI 整理打双链
  - **证据:** [manifest](https://github.com/wangzhanchao883/dsh-screenshot-capture/blob/1cc9f5335e48117221fcb9368a5aec7e44e63e0c/package.json) → [patch](https://github.com/wangzhanchao883/dsh-screenshot-capture/blob/1cc9f5335e48117221fcb9368a5aec7e44e63e0c/cordis.patch.yml) · **身份:** `dsh-screenshot-capture`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `web-search` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH MMX Bridge** · [welsione/dsh-mmx-bridge@03a8789](https://github.com/welsione/dsh-mmx-bridge/commit/03a878985cd6ed0aeb7b87d5e87cee427c4e67a0) — 将 MiniMax 的图像、视频、语音、音乐、搜索、额度和预览能力接入 DSH。
  - **证据:** [manifest](https://github.com/welsione/dsh-mmx-bridge/blob/03a878985cd6ed0aeb7b87d5e87cee427c4e67a0/package.json) → [patch](https://github.com/welsione/dsh-mmx-bridge/blob/03a878985cd6ed0aeb7b87d5e87cee427c4e67a0/cordis.patch.yml) · **身份:** `dsh-mmx-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `multimodal` `credentials` `external-network` `web-search` `image-generation` `audio` `video` `model-tools` `client-injection` · **核验备注:** 固定源码与同仓库 npm 身份均为 1.0.3；未执行凭据、请求、生成、搜索、媒体加载或客户端增强。

- **Bridge** · [wenbin-wb/dsh-bridge@30a7356](https://github.com/wenbin-wb/dsh-bridge/commit/30a7356fa40a3018c642054d154f53c9cd3e90a9) — 手机扫码即可在移动端/公网继续用 DeepSeek Harness，人不在电脑前也能接着干。一键局域网二维码、Cloudflare 公网隧道、自建隧道与微信 / QQ / 飞书 / Telegram Bot（多工作区/会话持久化/媒体/卡片审批/流式输出），无需自己搭公网服务器。
  - **证据:** [manifest](https://github.com/wenbin-wb/dsh-bridge/blob/30a7356fa40a3018c642054d154f53c9cd3e90a9/package.json) → [patch](https://github.com/wenbin-wb/dsh-bridge/blob/30a7356fa40a3018c642054d154f53c9cd3e90a9/cordis.patch.yml) · **身份:** `@wenbin_wb/dsh-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `session-data` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Quota Panel** · [wenzetan/dsh-quota-panel@7e06c9d](https://github.com/wenzetan/dsh-quota-panel/commit/7e06c9df76478200d6bc897a5f1a9181167aa5ff) — Quota Panel 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wenzetan/dsh-quota-panel/blob/7e06c9df76478200d6bc897a5f1a9181167aa5ff/package.json) → [patch](https://github.com/wenzetan/dsh-quota-panel/blob/7e06c9df76478200d6bc897a5f1a9181167aa5ff/cordis.patch.yml) · **身份:** `dsh-quota-panel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `subprocess` `process-control` `mcp` `browser` `session-data` `model-tools` `package-install` `vision` `financial` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **File Explorer** · [wolfsonliu/dsh-file-explorer@8d8caf7](https://github.com/wolfsonliu/dsh-file-explorer/commit/8d8caf7ac485adc9e185b109e1f9b1c9cbb68c87) — File Explorer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wolfsonliu/dsh-file-explorer/blob/8d8caf7ac485adc9e185b109e1f9b1c9cbb68c87/package.json) → [patch](https://github.com/wolfsonliu/dsh-file-explorer/blob/8d8caf7ac485adc9e185b109e1f9b1c9cbb68c87/cordis.patch.yml) · **身份:** `@dsh-external/dsh-file-explorer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `session-data` `model-tools` `package-install` `vision` `audio` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **UI Notify** · [wowayou/mydsh@25024b5](https://github.com/wowayou/mydsh/commit/25024b581cf99972d9df3c2eabb5fd645b48790a) — UI Notify 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wowayou/mydsh/blob/25024b581cf99972d9df3c2eabb5fd645b48790a/client/ui-notify/package.json) → [patch](https://github.com/wowayou/mydsh/blob/25024b581cf99972d9df3c2eabb5fd645b48790a/client/ui-notify/cordis.patch.yml) · **身份:** `@wowayou/ui-notify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `browser` `session-data` `vision` `audio` `theme` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Codex Subscription** · [WSL043/dsh-codex-subscription@22b8cf5](https://github.com/WSL043/dsh-codex-subscription/commit/22b8cf5a2eaf251d8b7fc6729c169ad7f6ce327b) — Codex Subscription 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/WSL043/dsh-codex-subscription/blob/22b8cf5a2eaf251d8b7fc6729c169ad7f6ce327b/package.json) → [patch](https://github.com/WSL043/dsh-codex-subscription/blob/22b8cf5a2eaf251d8b7fc6729c169ad7f6ce327b/cordis.patch.yml) · **身份:** `dsh-codex-subscription`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` `model-tools` `web-search` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Native Image Viewer** · [WSL043/dsh-native-image-viewer@010eae2](https://github.com/WSL043/dsh-native-image-viewer/commit/010eae262f8c3cf874681faeaa304c19a9d02427) — Native Image Viewer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/WSL043/dsh-native-image-viewer/blob/010eae262f8c3cf874681faeaa304c19a9d02427/package.json) → [patch](https://github.com/WSL043/dsh-native-image-viewer/blob/010eae262f8c3cf874681faeaa304c19a9d02427/cordis.patch.yml) · **身份:** `dsh-native-image-viewer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` `process-control` `session-data` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DeepSee** · [WUBING2023/deepsee@7431a43](https://github.com/WUBING2023/deepsee/commit/7431a430783105df9e40e740bb818c957cace6e7) — 提供视觉读取、模型能力发现、多模型路由与可选 OCR 安装。
  - **证据:** [manifest](https://github.com/WUBING2023/deepsee/blob/7431a430783105df9e40e740bb818c957cace6e7/package.json) → [patch](https://github.com/WUBING2023/deepsee/blob/7431a430783105df9e40e740bb818c957cace6e7/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `vision` `model-routing` `external-download` `subprocess` `install-script` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **TTS Reader** · [wyidong/dsh-tts-reader@5bf060b](https://github.com/wyidong/dsh-tts-reader/commit/5bf060b7892914e23fcd61363301fd52b4dd3ac0) — Text-to-speech reader for DeepSeek Harness web: read any assistant message aloud with the browser's native speechSynthesis — 8 Chinese voice presets, essence mode, auto-play. 语音朗读插件：用浏览器原生语音朗读每条助手消息。
  - **证据:** [manifest](https://github.com/wyidong/dsh-tts-reader/blob/5bf060b7892914e23fcd61363301fd52b4dd3ac0/package.json) → [patch](https://github.com/wyidong/dsh-tts-reader/blob/5bf060b7892914e23fcd61363301fd52b4dd3ac0/cordis.patch.yml) · **身份:** `dsh-tts-reader`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `audio` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Usage Ledger** · [xie-tj/dsh-plugin-usage-ledger@e8ef0f6](https://github.com/xie-tj/dsh-plugin-usage-ledger/commit/e8ef0f653ce66ecd74cb82015c7b91baf9ffba42) — Usage Ledger 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xie-tj/dsh-plugin-usage-ledger/blob/e8ef0f653ce66ecd74cb82015c7b91baf9ffba42/package.json) → [patch](https://github.com/xie-tj/dsh-plugin-usage-ledger/blob/e8ef0f653ce66ecd74cb82015c7b91baf9ffba42/cordis.patch.yml) · **身份:** `dsh-plugin-usage-ledger`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `database` `session-data` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DeepSeek Visionary DSH** · [xlight/deepseek-visionary@e3cf51c](https://github.com/xlight/deepseek-visionary/commit/e3cf51c09c12eea2da7762c715202be4ac0320c5) — 由 Visionary Server CLI 与图片桥接支持的视觉、状态、登录和登出原生工具。
  - **证据:** [manifest](https://github.com/xlight/deepseek-visionary/blob/e3cf51c09c12eea2da7762c715202be4ac0320c5/packages/dsh-plugin/package.json) → [patch](https://github.com/xlight/deepseek-visionary/blob/e3cf51c09c12eea2da7762c715202be4ac0320c5/packages/dsh-plugin/cordis.patch.yml) · **身份:** `@xlight-oss/visionary-dsh`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `vision` `subprocess` `credentials` `external-network` `model-tools` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **IM** · [xmanrui/dsh-im@71ca552](https://github.com/xmanrui/dsh-im/commit/71ca5521134c14addc6a1f277ee8c51f09f942b7) — 把九种 IM 机器人和公网 AI Office 接入本机 DeepSeek Harness。 Connect nine IM channels and a public AI Office to a local DeepSeek Harness.
  - **证据:** [manifest](https://github.com/xmanrui/dsh-im/blob/71ca5521134c14addc6a1f277ee8c51f09f942b7/package.json) → [patch](https://github.com/xmanrui/dsh-im/blob/71ca5521134c14addc6a1f277ee8c51f09f942b7/cordis.patch.yml) · **身份:** `@xmanrui/dsh-im`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **PI TUI** · [XMoon/dsh-pi-tui@3a3bd1f](https://github.com/XMoon/dsh-pi-tui/commit/3a3bd1f8904bdbac4140b71924a25feede6301d7) — PI TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/XMoon/dsh-pi-tui/blob/3a3bd1f8904bdbac4140b71924a25feede6301d7/package.json) → [patch](https://github.com/XMoon/dsh-pi-tui/blob/3a3bd1f8904bdbac4140b71924a25feede6301d7/cordis.patch.yml) · **身份:** `@xmoon76/dsh-pi-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `browser` `session-data` `model-tools` `package-install` `vision` `financial` `multi-agent` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Profile Settings** · [XMoon/dsh-profile-settings@24ba661](https://github.com/XMoon/dsh-profile-settings/commit/24ba661a1c4a1b0c7302d3d9dd389e7b87af6ff4) — Profile Settings 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/XMoon/dsh-profile-settings/blob/24ba661a1c4a1b0c7302d3d9dd389e7b87af6ff4/package.json) → [patch](https://github.com/XMoon/dsh-profile-settings/blob/24ba661a1c4a1b0c7302d3d9dd389e7b87af6ff4/cordis.patch.yml) · **身份:** `@xmoon76/dsh-profile-settings`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Feishu Integration** · [yangwuan55/dsh-feishu-integration@34a0649](https://github.com/yangwuan55/dsh-feishu-integration/commit/34a0649096780d14ed779d4431d3cc4c09edca64) — 飞书与 DeepSeek Harness 双向集成：总结推送、回复路由、绑定 UI 与二维码 provisioning。 / Bidirectional Feishu integration for DeepSeek Harness: summary delivery, reply routing, binding UI, and QR provisioning.
  - **证据:** [manifest](https://github.com/yangwuan55/dsh-feishu-integration/blob/34a0649096780d14ed779d4431d3cc4c09edca64/package.json) → [patch](https://github.com/yangwuan55/dsh-feishu-integration/blob/34a0649096780d14ed779d4431d3cc4c09edca64/cordis.patch.yml) · **身份:** `dsh-feishu-integration`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Deepseek Balance Tide** · [YaoJunhaoya/dsh-deepseek-balance-tide@251b15f](https://github.com/YaoJunhaoya/dsh-deepseek-balance-tide/commit/251b15ff6416086efeae2a52ba42c7fd07b2e2a4) — DeepSeek Harness (DSH) 插件：在侧栏显示 DeepSeek API 余额，在聊天输入框下方显示峰谷（高峰/空闲）时段并提供官方定价入口。
  - **证据:** [manifest](https://github.com/YaoJunhaoya/dsh-deepseek-balance-tide/blob/251b15ff6416086efeae2a52ba42c7fd07b2e2a4/package.json) → [patch](https://github.com/YaoJunhaoya/dsh-deepseek-balance-tide/blob/251b15ff6416086efeae2a52ba42c7fd07b2e2a4/cordis.patch.yml) · **身份:** `dsh-deepseek-balance-tide`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `model-tools` `vision` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **MY Questions Outline** · [YaoJunhaoya/dsh-my-questions-outline@b3159a1](https://github.com/YaoJunhaoya/dsh-my-questions-outline/commit/b3159a1fa443dbcb50bedb9e7867178389e30740) — DeepSeek Harness (DSH) 插件：在页面右侧显示「我的提问大纲」侧边栏，自动收集当前会话里我提出的问题与插话，支持本地持久化、点击平滑滚动定位并高亮对应消息。
  - **证据:** [manifest](https://github.com/YaoJunhaoya/dsh-my-questions-outline/blob/b3159a1fa443dbcb50bedb9e7867178389e30740/package.json) → [patch](https://github.com/YaoJunhaoya/dsh-my-questions-outline/blob/b3159a1fa443dbcb50bedb9e7867178389e30740/cordis.patch.yml) · **身份:** `dsh-my-questions-outline`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Auto Preset Router** · [yhfgyyf/dsh-auto-preset-router@e9a62c5](https://github.com/yhfgyyf/dsh-auto-preset-router/commit/e9a62c5aa0ab38caec59f3c08a1a41434ce5132d) — Auto Preset Router 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yhfgyyf/dsh-auto-preset-router/blob/e9a62c5aa0ab38caec59f3c08a1a41434ce5132d/package.json) → [patch](https://github.com/yhfgyyf/dsh-auto-preset-router/blob/e9a62c5aa0ab38caec59f3c08a1a41434ce5132d/cordis.patch.yml) · **身份:** `dsh-auto-preset-router`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `filesystem-read` `session-data` `system-prompt` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Media Player** · [yichengup/dsh-media-player@a9d52a5](https://github.com/yichengup/dsh-media-player/commit/a9d52a57b7b7d22e632f248cd464e066aff87ed0) — Media Player 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yichengup/dsh-media-player/blob/a9d52a57b7b7d22e632f248cd464e066aff87ed0/package.json) → [patch](https://github.com/yichengup/dsh-media-player/blob/a9d52a57b7b7d22e632f248cd464e066aff87ed0/cordis.patch.yml) · **身份:** `dsh-media-player`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `vision` `audio` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Capture Window** · [Yidien/dsh-capture-window@3f5d383](https://github.com/Yidien/dsh-capture-window/commit/3f5d383cc3be3b610685ebc9931571c7504558d4) — DSH Capture Window 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Yidien/dsh-capture-window/blob/3f5d383cc3be3b610685ebc9931571c7504558d4/package.json) → [patch](https://github.com/Yidien/dsh-capture-window/blob/3f5d383cc3be3b610685ebc9931571c7504558d4/cordis.patch.yml) · **身份:** `dsh-capture-window`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Vision Router** · [ysr666/dsh-vision-router@d805a71](https://github.com/ysr666/dsh-vision-router/commit/d805a71a3de75b624c733babc422df7d0eac6403) — 提供图像问答、定位、OCR、像素检查、截图与多提供商路由的视觉 bundle。
  - **证据:** [manifest](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/package.json) → [patch](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/cordis.patch.yml) · **身份:** `dsh-vision-router`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `browser` `file-upload` `filesystem-write` `native-code` · **核验备注:** 固定 manifest 与 patch 声明了 DSH rc.6 peer；未执行网络提供商、浏览器自动化、文件写入或原生图像依赖。

- **DSH Read Image** · [Yu-tao-Li/dsh-read-image@f6ab53b](https://github.com/Yu-tao-Li/dsh-read-image/commit/f6ab53b527afd23e5464a5cf585bd6453fcb9fad) — 通过持久附件存储在 DSH Web 中将 read_image 工具结果渲染为图片。
  - **证据:** [manifest](https://github.com/Yu-tao-Li/dsh-read-image/blob/f6ab53b527afd23e5464a5cf585bd6453fcb9fad/package.json) → [patch](https://github.com/Yu-tao-Li/dsh-read-image/blob/f6ab53b527afd23e5464a5cf585bd6453fcb9fad/cordis.patch.yml) · **身份:** `dsh-read-image`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `image-rendering` `attachments` `tool-results` `client-injection` `github-only` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **Github Manager** · [yuan-source-666/dsh-github-manager@f293cfc](https://github.com/yuan-source-666/dsh-github-manager/commit/f293cfc4d6d8660c40b6dfe0546a54d8bc371dbd) — Github Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yuan-source-666/dsh-github-manager/blob/f293cfc4d6d8660c40b6dfe0546a54d8bc371dbd/package.json) → [patch](https://github.com/yuan-source-666/dsh-github-manager/blob/f293cfc4d6d8660c40b6dfe0546a54d8bc371dbd/cordis.patch.yml) · **身份:** `dsh-github-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `process-control` `package-install` `vision` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Opencode GO SUB** · [Yuanloss/dsh-opencode-go-sub@bb537e0](https://github.com/Yuanloss/dsh-opencode-go-sub/commit/bb537e0b734d5e83df927d030a1357b5c1affb83) — OpenCode Go 订阅 + OpenCode Zen 免费档 for DeepSeek Harness: 像 opencode 官方客户端一样展示完整模型目录（订阅 30 模型 + 免费 5 模型），零配置密钥自动发现，luna/grok 自动走 Responses API。
  - **证据:** [manifest](https://github.com/Yuanloss/dsh-opencode-go-sub/blob/bb537e0b734d5e83df927d030a1357b5c1affb83/package.json) → [patch](https://github.com/Yuanloss/dsh-opencode-go-sub/blob/bb537e0b734d5e83df927d030a1357b5c1affb83/cordis.patch.yml) · **身份:** `dsh-opencode-go-sub`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `model-tools` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Vision Bridge** · [YUCONG-28/dsh-skills-plugins@92f1316](https://github.com/YUCONG-28/dsh-skills-plugins/commit/92f131620e403c0aabe7252221cea3a2f0dd48b1) — 通过本地 OCR、缓存证据和可配置远程视觉提供方路由图像请求。
  - **证据:** [manifest](https://github.com/YUCONG-28/dsh-skills-plugins/blob/92f131620e403c0aabe7252221cea3a2f0dd48b1/plugins/dsh-vision-bridge/package.json) → [patch](https://github.com/YUCONG-28/dsh-skills-plugins/blob/92f131620e403c0aabe7252221cea3a2f0dd48b1/plugins/dsh-vision-bridge/cordis.patch.yml) · **身份:** `dsh-vision-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `postinstall` · 兼容性未知
  - **能力信号:** `vision-routing` `ocr` `native-helper-build` `postinstall` `external-network` `credentials` `filesystem-write` · **核验备注:** 已静态核对固定 monorepo 源码、嵌套许可证、patch 与文档 file 源身份；未运行 postinstall、原生 OCR helper、提供方、测试或插件。

- **DSH Realtime Voice** · [zfu691531-hash/dsh-realtime-voice@91aae22](https://github.com/zfu691531-hash/dsh-realtime-voice/commit/91aae229357e647964bbf2e50ec7602c4ce55d4a) — 通过 Qwen 或 OpenAI 兼容 Provider 提供实时语音对话。
  - **证据:** [manifest](https://github.com/zfu691531-hash/dsh-realtime-voice/blob/91aae229357e647964bbf2e50ec7602c4ce55d4a/package.json) → [patch](https://github.com/zfu691531-hash/dsh-realtime-voice/blob/91aae229357e647964bbf2e50ec7602c4ce55d4a/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `microphone` `audio` `credentials` `external-network` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Memory** · [zhouzhencheng07/dsh-memory@674372f](https://github.com/zhouzhencheng07/dsh-memory/commit/674372f1aeedd5ae3952615676ca4d35ffa3db68) — Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zhouzhencheng07/dsh-memory/blob/674372f1aeedd5ae3952615676ca4d35ffa3db68/package.json) → [patch](https://github.com/zhouzhencheng07/dsh-memory/blob/674372f1aeedd5ae3952615676ca4d35ffa3db68/cordis.patch.yml) · **身份:** `dsh-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `session-data` `system-prompt` `model-tools` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **WEB ALL** · [zhu1090093659/dsh-web@b5e2bc4](https://github.com/zhu1090093659/dsh-web/commit/b5e2bc40cde85731405c67320cc51b0e4fccc2ce) — DSH Web UI 全家桶聚合插件：一键安装全部功能插件（task-board / git-graph / pet / remote-web-ui / web-ui-settings / skin-center / community-plugins / compat shim）。compat 桥接层已并入本包（src/client），无需独立 compat npm 包。
  - **证据:** [manifest](https://github.com/zhu1090093659/dsh-web/blob/b5e2bc40cde85731405c67320cc51b0e4fccc2ce/packages/dsh-web-all/package.json) → [patch](https://github.com/zhu1090093659/dsh-web/blob/b5e2bc40cde85731405c67320cc51b0e4fccc2ce/packages/dsh-web-all/cordis.patch.yml) · **身份:** `@linxin666/dsh-web-all`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `package-install` `vision` `financial` `theme` `nested-bundle` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Cron** · [ZhuoSir/dsh-cron@8427295](https://github.com/ZhuoSir/dsh-cron/commit/8427295db65600691fae0ad90ebb018a62f31c5d) — Cron 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ZhuoSir/dsh-cron/blob/8427295db65600691fae0ad90ebb018a62f31c5d/package.json) → [patch](https://github.com/ZhuoSir/dsh-cron/blob/8427295db65600691fae0ad90ebb018a62f31c5d/cordis.patch.yml) · **身份:** `dsh-cron`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `session-data` `model-tools` `package-install` `vision` `audio` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Openpencil** · [ZSeven-W/dsh-openpencil@ab148ac](https://github.com/ZSeven-W/dsh-openpencil/commit/ab148ac82d690a3ddc58465299ba651298c28f43) — Openpencil 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ZSeven-W/dsh-openpencil/blob/ab148ac82d690a3ddc58465299ba651298c28f43/package.json) → [patch](https://github.com/ZSeven-W/dsh-openpencil/blob/ab148ac82d690a3ddc58465299ba651298c28f43/cordis.patch.yml) · **身份:** `@zseven-w/dsh-openpencil`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `mcp` `session-data` `model-tools` `package-install` `vision` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Adhdgofly DSH EXT** · [zuoguyoupan2023/adhdgofly-dsh-ext@afa2676](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext/commit/afa2676fc18d13e25fbfeb901591118edd22e642) — Adhdgofly DSH EXT 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext/blob/afa2676fc18d13e25fbfeb901591118edd22e642/package.json) → [patch](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext/blob/afa2676fc18d13e25fbfeb901591118edd22e642/cordis.patch.yml) · **身份:** `adhdgofly-dsh-ext`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `audio` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Vision Bridge** · [zzdream67/dsh-vision-bridge@f91c8db](https://github.com/zzdream67/dsh-vision-bridge/commit/f91c8db8fcd635daf4bedc1b657c2a5394e80ab1) — DSH Vision Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zzdream67/dsh-vision-bridge/blob/f91c8db8fcd635daf4bedc1b657c2a5394e80ab1/package.json) → [patch](https://github.com/zzdream67/dsh-vision-bridge/blob/f91c8db8fcd635daf4bedc1b657c2a5394e80ab1/cordis.patch.yml) · **身份:** `@zzdream67/dsh-vision-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `prepare` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

#### 搜索与研究

- **Mall** · [1e0zj/dsh-plugin-mall@ab5c448](https://github.com/1e0zj/dsh-plugin-mall/commit/ab5c448690b163ab9bbe6c09250038e38dc6de63) — dsh 插件市场：搜索 GitHub dsh-plugin 话题下的插件仓库，一键安装到本地 dsh profile（agent 工具 + 设置页插件市场 tab）
  - **证据:** [manifest](https://github.com/1e0zj/dsh-plugin-mall/blob/ab5c448690b163ab9bbe6c09250038e38dc6de63/package.json) → [patch](https://github.com/1e0zj/dsh-plugin-mall/blob/ab5c448690b163ab9bbe6c09250038e38dc6de63/cordis.patch.yml) · **身份:** `@1e0zj/dsh-plugin-mall`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `subprocess` `process-control` `mcp` `session-data` `model-tools` `package-install` `plugin-management` `web-search` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Search** · [2982136527/dsh-plugins@b8b03b1](https://github.com/2982136527/dsh-plugins/commit/b8b03b1e3d72729f70bcab68835abefaf27c8da5) — 通过 Bing RSS 与 DuckDuckGo 回退提供模型可调用的网页搜索，无需 API Key。
  - **证据:** [manifest](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/package.json) → [patch](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/cordis.patch.yml) · **身份:** `dsh-search`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-search` `external-network` `git-source` · **核验备注:** 已确认固定提交中的单仓库子目录与 patch；作者记录的是克隆后本地路径安装，仓库未检测到许可证文件。

- **Bundle Main** · [A-G-guy/dsh-plus@32a17e8](https://github.com/A-G-guy/dsh-plus/commit/32a17e8edac5723f15edcfd585c0adf1c8ebd64d) — Bundle Main 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/A-G-guy/dsh-plus/blob/32a17e8edac5723f15edcfd585c0adf1c8ebd64d/packages/bundle-main/package.json) → [patch](https://github.com/A-G-guy/dsh-plus/blob/32a17e8edac5723f15edcfd585c0adf1c8ebd64d/packages/bundle-main/cordis.patch.yml) · **身份:** `@dsh-plus/bundle-main`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `model-tools` `package-install` `email` `multi-agent` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Web Tools** · [A3Boy/dsh-web-tools@ff35019](https://github.com/A3Boy/dsh-web-tools/commit/ff35019e3be679b6d62e866c462bbd801fd12110) — 统一多个网页搜索与抓取提供商，并提供凭据池、额度、健康监控和确定性回退。
  - **证据:** [manifest](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/package.json) → [patch](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/cordis.patch.yml) · **身份:** `dsh-web-tools`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `web-search` `remote-content` `client-injection` · **核验备注:** 固定 peer 声明 rc.6；未执行提供商调用、凭据处理、额度逻辑、回退行为或 prepare 构建。

- **DSH KB RAG** · [Breeze136/dsh-kb-rag@2ba96b7](https://github.com/Breeze136/dsh-kb-rag/commit/2ba96b785b154dec2fe76e64eb4a17516def92e1) — 采用混合检索、重排、引用与 SQLite Python 引擎的本地文献 RAG。
  - **证据:** [manifest](https://github.com/Breeze136/dsh-kb-rag/blob/2ba96b785b154dec2fe76e64eb4a17516def92e1/npm-package/package.json) → [patch](https://github.com/Breeze136/dsh-kb-rag/blob/2ba96b785b154dec2fe76e64eb4a17516def92e1/npm-package/cordis.patch.yml) · **身份:** `dsh-kb-rag`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `literature-search` `filesystem-read` `filesystem-write` `python-subprocess` `model-download` `source-behind-registry` · **核验备注:** 固定源码为 1.0.7，而同仓库 npm 最新为 1.1.0；未启动 Python 守护进程、导入文件、下载模型、修改索引或执行检索。

- **Openanalyst** · [Chenmo0414/openanalyst@eb2df0d](https://github.com/Chenmo0414/openanalyst/commit/eb2df0d86879797120400b5851fdb91e40e84b90) — Openanalyst 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Chenmo0414/openanalyst/blob/eb2df0d86879797120400b5851fdb91e40e84b90/packages/dsh/package.json) → [patch](https://github.com/Chenmo0414/openanalyst/blob/eb2df0d86879797120400b5851fdb91e40e84b90/packages/dsh/cordis.patch.yml) · **身份:** `openanalyst`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Web Search Multi** · [cinob/dsh-web-search-multi@ea1c2d0](https://github.com/cinob/dsh-web-search-multi/commit/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465) — 提供多供应商 Web 搜索、自动回退、凭据配置和设置界面。
  - **证据:** [manifest](https://github.com/cinob/dsh-web-search-multi/blob/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465/package.json) → [patch](https://github.com/cinob/dsh-web-search-multi/blob/ea1c2d0497c3f01bdcf84184ae9f3cc28bb26465/cordis.patch.yml) · **身份:** `dsh-web-search-multi`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `workspace-write` `provider-fallback` `settings-ui` · **核验备注:** 该包声明通配 DSH peer 和多个外部搜索供应商，并披露工作区写入能力；未执行供应商请求或写入。

- **DSH Tool Web Enhanced** · [edusrez/dsh-tool-web-enhanced@591d9b9](https://github.com/edusrez/dsh-tool-web-enhanced/commit/591d9b95ce2854abc24899ffb6e5a30bdebd6ea4) — 为 DSH Web Search 增加 Topic 过滤与可选的 SearXNG 结果区。
  - **证据:** [manifest](https://github.com/edusrez/dsh-tool-web-enhanced/blob/591d9b95ce2854abc24899ffb6e5a30bdebd6ea4/package.json) → [patch](https://github.com/edusrez/dsh-tool-web-enhanced/blob/591d9b95ce2854abc24899ffb6e5a30bdebd6ea4/cordis.patch.yml) · **身份:** `dsh-tool-web-enhanced`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `web-search` `external-network` `searxng` `model-tools` `prepack-build` · **核验备注:** 固定源码为 0.1.0-rc.1，而同仓库 npm 已发布 0.3.0-rc.1；未执行搜索、SearXNG 请求、工具调用或预打包构建。

- **OC** · [FeiJi-9527/dsh-oc@64922eb](https://github.com/FeiJi-9527/dsh-oc/commit/64922ebcaffc51754b2ad306a18e9d959959bf99) — DeepSeek Harness 插件全家桶:会话新窗口、深链自动选中、桌面壳自动标记,并自动带上 dsh-better-sidebar 右侧工作台。
  - **证据:** [manifest](https://github.com/FeiJi-9527/dsh-oc/blob/64922ebcaffc51754b2ad306a18e9d959959bf99/package.json) → [patch](https://github.com/FeiJi-9527/dsh-oc/blob/64922ebcaffc51754b2ad306a18e9d959959bf99/cordis.patch.yml) · **身份:** `dsh-oc`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `package-install` `web-search` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Web Access** · [haibinwang9/dsh-web-access@1eaffaf](https://github.com/haibinwang9/dsh-web-access/commit/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b) — 在 SearXNG、Tavily、Brave 与 DuckDuckGo 间回退的多源网页搜索和内容提取。
  - **证据:** [manifest](https://github.com/haibinwang9/dsh-web-access/blob/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b/package.json) → [patch](https://github.com/haibinwang9/dsh-web-access/blob/1eaffafe3130f8347b92cbb89f533cf9c5f97d7b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `web-search` `content-extraction` `credentials` `external-network` `provider-fallback` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH PCB Parts Search** · [Huaqiu-Electronics/dsh-pcb-parts-search@7b02c04](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/commit/7b02c0492e06530c3c58638639351ea7878dde3e) — 从立创商城与 EDA 元件服务搜索电子器件和 IC 的模型工具。
  - **证据:** [manifest](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/blob/7b02c0492e06530c3c58638639351ea7878dde3e/package.json) → [patch](https://github.com/Huaqiu-Electronics/dsh-pcb-parts-search/blob/7b02c0492e06530c3c58638639351ea7878dde3e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `parts-search` `model-tools` `external-network` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Semantic Search** · [JohnXu22786/semantic-search@601c3f5](https://github.com/JohnXu22786/semantic-search/commit/601c3f581506ee202591b2202e18ccd8abad380a) — DSH Semantic Search 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/JohnXu22786/semantic-search/blob/601c3f581506ee202591b2202e18ccd8abad380a/package.json) → [patch](https://github.com/JohnXu22786/semantic-search/blob/601c3f581506ee202591b2202e18ccd8abad380a/cordis.patch.yml) · **身份:** `dsh-semantic-search`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Vsceditor** · [k-ying/dsh-vsceditor@5f5801c](https://github.com/k-ying/dsh-vsceditor/commit/5f5801ce9d27fbeb9430ef1741ff4649af0da08b) — Vsceditor 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/k-ying/dsh-vsceditor/blob/5f5801ce9d27fbeb9430ef1741ff4649af0da08b/package.json) → [patch](https://github.com/k-ying/dsh-vsceditor/blob/5f5801ce9d27fbeb9430ef1741ff4649af0da08b/cordis.patch.yml) · **身份:** `dsh-vsceditor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `package-install` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Timeline** · [kindred-7/dsh-timeline@0a48182](https://github.com/kindred-7/dsh-timeline/commit/0a48182ec29de0c0afd1d7913255e981052b79d0) — Timeline 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kindred-7/dsh-timeline/blob/0a48182ec29de0c0afd1d7913255e981052b79d0/package.json) → [patch](https://github.com/kindred-7/dsh-timeline/blob/0a48182ec29de0c0afd1d7913255e981052b79d0/cordis.patch.yml) · **身份:** `@kindred7/dsh-timeline`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `web-search` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **WEB Search Free** · [MochiNek0/dsh-web-search-free@05719a4](https://github.com/MochiNek0/dsh-web-search-free/commit/05719a4dd548eea9540577da1c07984bda1adc18) — WEB Search Free 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MochiNek0/dsh-web-search-free/blob/05719a4dd548eea9540577da1c07984bda1adc18/package.json) → [patch](https://github.com/MochiNek0/dsh-web-search-free/blob/05719a4dd548eea9540577da1c07984bda1adc18/cordis.patch.yml) · **身份:** `dsh-web-search-free`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `model-tools` `package-install` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Search Boost** · [Mr-remon219/dsh-search-boost@af80be8](https://github.com/Mr-remon219/dsh-search-boost/commit/af80be8b5a0da2b74511dbb74f1acce601b11bf3) — 融合多个 Web 与 X 搜索引擎，并提供页面抓取与并行研究流程。
  - **证据:** [manifest](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/package.json) → [patch](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/cordis.patch.yml) · **身份:** `dsh-search-boost`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `browser` `multi-agent` · **核验备注:** 已在固定源码确认 bundle 行与搜索提供商覆盖；未执行外部引擎、凭据、子进程或研究并发。

- **DSH Paper Daily** · [mrywwww/dsh-paper-daily@780aa46](https://github.com/mrywwww/dsh-paper-daily/commit/780aa4670ec21591b6ac22bb7dc094d9240e436e) — 从 arXiv 与选定 APS 期刊收集每日凝聚态论文，并可生成摘要。
  - **证据:** [manifest](https://github.com/mrywwww/dsh-paper-daily/blob/780aa4670ec21591b6ac22bb7dc094d9240e436e/package.json) → [patch](https://github.com/mrywwww/dsh-paper-daily/blob/780aa4670ec21591b6ac22bb7dc094d9240e436e/cordis.patch.yml) · **身份:** `dsh-paper-daily`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `research-feed` `external-network` `model-request` `credentials` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、许可证、原生 bundle 结构与 GitHub 源安装身份；未运行论文源、摘要、凭据或 UI。

- **Deepatlas** · [Oscar-Williams/dsh-deepatlas@cb6ba60](https://github.com/Oscar-Williams/dsh-deepatlas/commit/cb6ba6055b5fb58088cf68ae34b4845a6728b627) — DeepAtlas provides local capability assurance for DSH: on-demand discovery, provenance-backed recommendations, pinned risk review, and controlled installation. DSH 本地能力保障：按需发现、证据推荐、固定版本审计与受控安装。
  - **证据:** [manifest](https://github.com/Oscar-Williams/dsh-deepatlas/blob/cb6ba6055b5fb58088cf68ae34b4845a6728b627/package.json) → [patch](https://github.com/Oscar-Williams/dsh-deepatlas/blob/cb6ba6055b5fb58088cf68ae34b4845a6728b627/cordis.patch.yml) · **身份:** `dsh-deepatlas`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Codeaudit** · [Ph03n1xRt/dsh-codeaudit@90d9f05](https://github.com/Ph03n1xRt/dsh-codeaudit/commit/90d9f057b69dec8ba69c8b42f1e2197b7320db6f) — DSH 代码审计模式：测绘代码资产、追踪数据流证据、记录漏洞链路与代码片段，并在 Web 中可视化展示。
  - **证据:** [manifest](https://github.com/Ph03n1xRt/dsh-codeaudit/blob/90d9f057b69dec8ba69c8b42f1e2197b7320db6f/package.json) → [patch](https://github.com/Ph03n1xRt/dsh-codeaudit/blob/90d9f057b69dec8ba69c8b42f1e2197b7320db6f/cordis.patch.yml) · **身份:** `dsh-codeaudit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `database` `session-data` `model-tools` `package-install` `email` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Pocket** · [shaobeichen/dsh-pocket@52b5c94](https://github.com/shaobeichen/dsh-pocket/commit/52b5c949d5b861229920e6f22e102e117f2f0354) — 把 DeepSeek Harness 装进你的口袋：一个包、一个设置页，手机扫码即同步访问电脑上的 DSH（局域网 + 公网，实时同屏）。
  - **证据:** [manifest](https://github.com/shaobeichen/dsh-pocket/blob/52b5c949d5b861229920e6f22e102e117f2f0354/package.json) → [patch](https://github.com/shaobeichen/dsh-pocket/blob/52b5c949d5b861229920e6f22e102e117f2f0354/cordis.patch.yml) · **身份:** `dsh-pocket`
  - **许可证:** repo `GPL-2.0` / package `GPL-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `subprocess` `process-control` `package-install` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Journal Monitor** · [SIMON-WORLD/dsh-journal-monitor@a97982e](https://github.com/SIMON-WORLD/dsh-journal-monitor/commit/a97982e3349666afde0a1069a54587c7ab388e0d) — 监控经管期刊与工作论文，筛选新条目、持久化去重状态并定时推送简报。
  - **证据:** [manifest](https://github.com/SIMON-WORLD/dsh-journal-monitor/blob/a97982e3349666afde0a1069a54587c7ab388e0d/package.json) → [patch](https://github.com/SIMON-WORLD/dsh-journal-monitor/blob/a97982e3349666afde0a1069a54587c7ab388e0d/cordis.patch.yml) · **身份:** `dsh-journal-monitor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `research-monitoring` `external-network` `rss` `webhook` `filesystem-write` `scheduler` `model-tools` `github-only` · **核验备注:** 已记录固定 GitHub 源码身份；未执行期刊请求、Feed 解析、状态写入、Webhook、调度、探针或测试。

- **Updater NPM** · [SiriusWJ/dsh-updater-npm@58e0919](https://github.com/SiriusWJ/dsh-updater-npm/commit/58e091969a7130f01e5dff7813f28bd9da37e72b) — DSH updater + official docs sync plugin for DeepSeek Harness: one-click npm update of @deepseek-ai/dsh with live progress, incremental sync of the official docs/ to local with progress, and dsh_docs_search / dsh_docs_read model tools. DSH 更新器 + 官方文档同步器（进度显示）。
  - **证据:** [manifest](https://github.com/SiriusWJ/dsh-updater-npm/blob/58e091969a7130f01e5dff7813f28bd9da37e72b/package.json) → [patch](https://github.com/SiriusWJ/dsh-updater-npm/blob/58e091969a7130f01e5dff7813f28bd9da37e72b/cordis.patch.yml) · **身份:** `dsh-updater-npm`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `session-data` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Skin Token Dashboard** · [Smith-yue/harness-plugin@86c26ca](https://github.com/Smith-yue/harness-plugin/commit/86c26ca4a4382a08243873f576e50e1b8ef01a2b) — Skin Token Dashboard 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Smith-yue/harness-plugin/blob/86c26ca4a4382a08243873f576e50e1b8ef01a2b/package.json) → [patch](https://github.com/Smith-yue/harness-plugin/blob/86c26ca4a4382a08243873f576e50e1b8ef01a2b/cordis.patch.yml) · **身份:** `dsh-skin-token-dashboard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `package-install` `web-search` `financial` `theme` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Experience Plugin** · [SouleyMoni1/dsh-experience-plugin@7233cea](https://github.com/SouleyMoni1/dsh-experience-plugin/commit/7233ceaf35ff37f11f794b22f299de2bdf17e4c4) — Experience Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SouleyMoni1/dsh-experience-plugin/blob/7233ceaf35ff37f11f794b22f299de2bdf17e4c4/package.json) → [patch](https://github.com/SouleyMoni1/dsh-experience-plugin/blob/7233ceaf35ff37f11f794b22f299de2bdf17e4c4/cordis.patch.yml) · **身份:** `dsh-experience-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` `subprocess` `model-tools` `package-install` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Context Sniper** · [spicycorn/dsh-context-sniper@869557c](https://github.com/spicycorn/dsh-context-sniper/commit/869557c68dbe610ef878b22829a0205f711c92aa) — Context Sniper 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/spicycorn/dsh-context-sniper/blob/869557c68dbe610ef878b22829a0205f711c92aa/package.json) → [patch](https://github.com/spicycorn/dsh-context-sniper/blob/869557c68dbe610ef878b22829a0205f711c92aa/cordis.patch.yml) · **身份:** `dsh-context-sniper`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `subprocess` `process-control` `session-data` `model-tools` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Web Search Exa** · [TonyDua/dsh-web-search-exa@083706b](https://github.com/TonyDua/dsh-web-search-exa/commit/083706bae60af8e1f3776b02448f17c140c3f571) — 把 Exa 网络搜索接入 DSH 的 Agent 工具与 Web 设置。
  - **证据:** [manifest](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/package.json) → [patch](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/cordis.patch.yml) · **身份:** `@tonydua/dsh-web-search-exa`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` · **核验备注:** DSH peer 声明 rc.6，但 Cordis range 仍为 rc.1；未做运行测试。

- **Deja** · [vshulcz/deja-vu@9a2b2fb](https://github.com/vshulcz/deja-vu/commit/9a2b2fb3bfc82cf8f3f5e365ad912702e91809a6) — Deja 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/vshulcz/deja-vu/blob/9a2b2fb3bfc82cf8f3f5e365ad912702e91809a6/extensions/dsh/package.json) → [patch](https://github.com/vshulcz/deja-vu/blob/9a2b2fb3bfc82cf8f3f5e365ad912702e91809a6/extensions/dsh/cordis.patch.yml) · **身份:** `dsh-deja`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `mcp` `database` `session-data` `system-prompt` `model-tools` `package-install` `plugin-management` `web-search` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Native Session Delete** · [WSL043/dsh-native-session-delete@6c14379](https://github.com/WSL043/dsh-native-session-delete/commit/6c14379ee967e40389df2da62168bd66a152668a) — Native Session Delete 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/WSL043/dsh-native-session-delete/blob/6c14379ee967e40389df2da62168bd66a152668a/package.json) → [patch](https://github.com/WSL043/dsh-native-session-delete/blob/6c14379ee967e40389df2da62168bd66a152668a/cordis.patch.yml) · **身份:** `dsh-native-session-delete`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `process-control` `browser` `session-data` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Version Update** · [Zalpha263/dsh-version-update@eefef58](https://github.com/Zalpha263/dsh-version-update/commit/eefef585502f2c550f606a6162a886119f5d0824) — 版本与更新：在设置页显示 dsh 版本与环境信息，检查 npm 官方最新版本并生成升级提示词（dsh-version-update）。
  - **证据:** [manifest](https://github.com/Zalpha263/dsh-version-update/blob/eefef585502f2c550f606a6162a886119f5d0824/package.json) → [patch](https://github.com/Zalpha263/dsh-version-update/blob/eefef585502f2c550f606a6162a886119f5d0824/cordis.patch.yml) · **身份:** `dsh-version-update`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `subprocess` `package-install` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **WEB Polysearch** · [zeroUsr0721/dsh-web-polysearch@9676147](https://github.com/zeroUsr0721/dsh-web-polysearch/commit/9676147406189dd81d187ac148124d69db09f873) — WEB Polysearch 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zeroUsr0721/dsh-web-polysearch/blob/9676147406189dd81d187ac148124d69db09f873/package.json) → [patch](https://github.com/zeroUsr0721/dsh-web-polysearch/blob/9676147406189dd81d187ac148124d69db09f873/cordis.patch.yml) · **身份:** `dsh-web-polysearch`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `mcp` `package-install` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Free Search** · [zhouzhencheng07/dsh-free-search@2336dad](https://github.com/zhouzhencheng07/dsh-free-search/commit/2336dadd0c8ef593d6e8af2897327e4725b9c01e) — 接入 DSH 原生 Web seam 的免 Key 多源网页搜索 Provider。
  - **证据:** [manifest](https://github.com/zhouzhencheng07/dsh-free-search/blob/2336dadd0c8ef593d6e8af2897327e4725b9c01e/package.json) → [patch](https://github.com/zhouzhencheng07/dsh-free-search/blob/2336dadd0c8ef593d6e8af2897327e4725b9c01e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-search` `external-network` `provider-fallback` `identity-collision` · **核验备注:** npm 身份映射到其他仓库，因此本记录固定到作者文档中的 Git 源，不主张该包。

- **KIT** · [zhouzhencheng07/dsh-kit@d32f61d](https://github.com/zhouzhencheng07/dsh-kit/commit/d32f61d568d9e0ef848e2d327c70c5fe117bd760) — KIT 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zhouzhencheng07/dsh-kit/blob/d32f61d568d9e0ef848e2d327c70c5fe117bd760/package.json) → [patch](https://github.com/zhouzhencheng07/dsh-kit/blob/d32f61d568d9e0ef848e2d327c70c5fe117bd760/cordis.patch.yml) · **身份:** `dsh-kit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `session-data` `web-search` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

#### 记忆

- **DSH Memory** · [chenhw7/dsh-memory@e5e35ce](https://github.com/chenhw7/dsh-memory/commit/e5e35cedb0a77d8df63c5e29188743d7e27c27b9) — 集成存储、工具、抽取、复核与上下文注入的跨会话持久记忆组合包。
  - **证据:** [manifest](https://github.com/chenhw7/dsh-memory/blob/e5e35cedb0a77d8df63c5e29188743d7e27c27b9/package.json) → [patch](https://github.com/chenhw7/dsh-memory/blob/e5e35cedb0a77d8df63c5e29188743d7e27c27b9/cordis.patch.yml) · **身份:** `@chenhw7/dsh-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `persistent-memory` `filesystem-write` `model-tools` `context-injection` `prepare-build` `github-only` · **核验备注:** GitHub 安装需要显式放行 prepare 构建，Peer 声明混用 rc.5；未执行构建、存储、抽取或上下文注入。

- **DSH Vibe Math** · [ChongCyrus/Vibe-Mathematics@e77c7eb](https://github.com/ChongCyrus/Vibe-Mathematics/commit/e77c7ebe1b035ea5f56c2f993156cb9bada2c08e) — DSH Vibe Math 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ChongCyrus/Vibe-Mathematics/blob/e77c7ebe1b035ea5f56c2f993156cb9bada2c08e/package.json) → [patch](https://github.com/ChongCyrus/Vibe-Mathematics/blob/e77c7ebe1b035ea5f56c2f993156cb9bada2c08e/cordis.patch.yml) · **身份:** `dsh-vibe-math`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Self Memory** · [cyanxi69-jpg/dsh-self-memory@5c58b33](https://github.com/cyanxi69-jpg/dsh-self-memory/commit/5c58b335dcfdb05bf01259492c032db42759a9b4) — 提供加权关键词召回、问题泛化与矛盾方案区分的文件型记忆插件。
  - **证据:** [manifest](https://github.com/cyanxi69-jpg/dsh-self-memory/blob/5c58b335dcfdb05bf01259492c032db42759a9b4/package.json) → [patch](https://github.com/cyanxi69-jpg/dsh-self-memory/blob/5c58b335dcfdb05bf01259492c032db42759a9b4/cordis.patch.yml) · **身份:** `dsh-self-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `persistent-memory` `filesystem-write` `keyword-search` `context-injection` `local-install` · **核验备注:** 固定源码记录了本地目录安装，并在磁盘保存泛化问题历史；未执行记忆导入、检索或写入。

- **Window Memory** · [DrFlyingPig/dsh-window-memory@6f12e6d](https://github.com/DrFlyingPig/dsh-window-memory/commit/6f12e6d04f43c0396a8dadc30c7d4ecec677f987) — Window Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/DrFlyingPig/dsh-window-memory/blob/6f12e6d04f43c0396a8dadc30c7d4ecec677f987/package.json) → [patch](https://github.com/DrFlyingPig/dsh-window-memory/blob/6f12e6d04f43c0396a8dadc30c7d4ecec677f987/cordis.patch.yml) · **身份:** `dsh-window-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH AgentMemory** · [elementor-i/dsh-agentmemory@4a4c124](https://github.com/elementor-i/dsh-agentmemory/commit/4a4c124cf93b977117d89c1a132643f6c73fd24f) — 把 DSH 记忆工具、活动捕获与上下文注入连接到本地 AgentMemory REST 服务。
  - **证据:** [manifest](https://github.com/elementor-i/dsh-agentmemory/blob/4a4c124cf93b977117d89c1a132643f6c73fd24f/package.json) → [patch](https://github.com/elementor-i/dsh-agentmemory/blob/4a4c124cf93b977117d89c1a132643f6c73fd24f/cordis.patch.yml) · **身份:** `@dsh-external/dsh-agentmemory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `persistent-memory` `local-http-client` `model-tools` `activity-capture` `context-injection` `github-only` · **核验备注:** 插件依赖单独运行的本地 AgentMemory 服务，并提供较宽的 HTTP 逃生工具；未执行服务调用、捕获钩子或提示注入。

- **Llmwiki** · [EveGoodEvening/dsh-llmwiki@7f5b9a9](https://github.com/EveGoodEvening/dsh-llmwiki/commit/7f5b9a99b4ddfe75e17a1f7b13ce2641d1c1e426) — Llmwiki 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/EveGoodEvening/dsh-llmwiki/blob/7f5b9a99b4ddfe75e17a1f7b13ce2641d1c1e426/package.json) → [patch](https://github.com/EveGoodEvening/dsh-llmwiki/blob/7f5b9a99b4ddfe75e17a1f7b13ce2641d1c1e426/cordis.patch.yml) · **身份:** `@evegoodevening/dsh-llmwiki`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-read` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **QA Skills** · [fishzjp/qa-skills@70e5ebf](https://github.com/fishzjp/qa-skills/commit/70e5ebfb9a68b5e77c100769698b291b61301cc5) — QA Skills 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fishzjp/qa-skills/blob/70e5ebfb9a68b5e77c100769698b291b61301cc5/package.json) → [patch](https://github.com/fishzjp/qa-skills/blob/70e5ebfb9a68b5e77c100769698b291b61301cc5/.dsh/cordis.patch.yml) · **身份:** `dsh-qa-skills`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `browser` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH SGME** · [freehul/sgme@d5d98a6](https://github.com/freehul/sgme/commit/d5d98a62b55a89d30c1f0206e3b59e82108633d0) — 通过 HTTP 将 DSH Agent 接入 SGME 共享长期记忆服务。
  - **证据:** [manifest](https://github.com/freehul/sgme/blob/d5d98a62b55a89d30c1f0206e3b59e82108633d0/adapters/dsh/sgme-bridge/package.json) → [patch](https://github.com/freehul/sgme/blob/d5d98a62b55a89d30c1f0206e3b59e82108633d0/adapters/dsh/sgme-bridge/cordis.patch.yml) · **身份:** `dsh-sgme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `long-term-memory` `external-network` `model-tools` `commands` `prepublish-build` · **核验备注:** 嵌套固定源码与 npm 身份均为 0.2.0，仓库文档将根 Git Wrapper 映射到该包；未执行记忆请求、命令、工具或发布前构建。

- **Prompt Vault** · [Frog755/dsh-prompt-vault@6eb0289](https://github.com/Frog755/dsh-prompt-vault/commit/6eb0289bd3b1966add59b52baa975a6285ed6763) — Prompt Vault: 输入框上方的提示词库。📚 按钮展开面板，主题名 + 详情展开 + 一键填入输入框；支持新建/编辑/删除/搜索。数据持久化在 ~/.dsh/prompt-library.json。
  - **证据:** [manifest](https://github.com/Frog755/dsh-prompt-vault/blob/6eb0289bd3b1966add59b52baa975a6285ed6763/package.json) → [patch](https://github.com/Frog755/dsh-prompt-vault/blob/6eb0289bd3b1966add59b52baa975a6285ed6763/cordis.patch.yml) · **身份:** `@frog755/dsh-prompt-vault`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Native Memory** · [highland0971/dsh-native-memory@270e235](https://github.com/highland0971/dsh-native-memory/commit/270e235bf00a1211f1fd31fdf91d9a1f70f57df9) — 基于原生存储、支持跨会话召回、审批写入与来源追踪的工作区长期记忆。
  - **证据:** [manifest](https://github.com/highland0971/dsh-native-memory/blob/270e235bf00a1211f1fd31fdf91d9a1f70f57df9/package.json) → [patch](https://github.com/highland0971/dsh-native-memory/blob/270e235bf00a1211f1fd31fdf91d9a1f70f57df9/cordis.patch.yml) · **身份:** `dsh-native-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `long-term-memory` `session-data` `approval-gate` `storage-domain` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **iHow Memory** · [iHow1/dsh-ihow-memory@c530943](https://github.com/iHow1/dsh-ihow-memory/commit/c5309437c5549a31c1aa6ba38d20b82752209986) — 通过 MCP 客户端接入 DSH 的本地优先共享记忆插件。
  - **证据:** [manifest](https://github.com/iHow1/dsh-ihow-memory/blob/c5309437c5549a31c1aa6ba38d20b82752209986/package.json) → [patch](https://github.com/iHow1/dsh-ihow-memory/blob/c5309437c5549a31c1aa6ba38d20b82752209986/cordis.patch.yml) · **身份:** `dsh-ihow-memory`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `long-term-memory` `mcp` `local-service` `filesystem-write` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Layered Memory** · [JunNanLYS/dsh-layered-memory@6e06980](https://github.com/JunNanLYS/dsh-layered-memory/commit/6e06980534e3c09034ddb47ab185b134642b186d) — DSH Layered Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/JunNanLYS/dsh-layered-memory/blob/6e06980534e3c09034ddb47ab185b134642b186d/package.json) → [patch](https://github.com/JunNanLYS/dsh-layered-memory/blob/6e06980534e3c09034ddb47ab185b134642b186d/cordis.patch.yml) · **身份:** `dsh-layered-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH Simple Wiki Memory** · [rainow/dsh-simple-wiki-memory@563989a](https://github.com/rainow/dsh-simple-wiki-memory/commit/563989ac70783acb41f712d2bcd605b0befc1f6f) — 维护基于 Git 的 Wiki 记忆工作区，包含 reference、pending、archive 与 memory log。
  - **证据:** [manifest](https://github.com/rainow/dsh-simple-wiki-memory/blob/563989ac70783acb41f712d2bcd605b0befc1f6f/package.json) → [patch](https://github.com/rainow/dsh-simple-wiki-memory/blob/563989ac70783acb41f712d2bcd605b0befc1f6f/cordis.patch.yml) · **身份:** `dsh-simple-wiki-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `persistent-memory` `filesystem-write` `git-repository` `system-prompt` `github-only` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Recall** · [Relistencode/dsh-recall@23f9103](https://github.com/Relistencode/dsh-recall/commit/23f9103a2d588936bb3847c1cb443ad24efa7477) — 对原始对话历史进行本地离线字面、模糊与语义检索。
  - **证据:** [manifest](https://github.com/Relistencode/dsh-recall/blob/23f9103a2d588936bb3847c1cb443ad24efa7477/package.json) → [patch](https://github.com/Relistencode/dsh-recall/blob/23f9103a2d588936bb3847c1cb443ad24efa7477/cordis.patch.yml) · **身份:** `dsh-recall`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `local-search` `semantic-search` `filesystem-read` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Rag** · [satan9394/dsh-rag@2dcd65e](https://github.com/satan9394/dsh-rag/commit/2dcd65e1188048ec9d163f5b756d7bc8338d5cd1) — DSH Rag 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/satan9394/dsh-rag/blob/2dcd65e1188048ec9d163f5b756d7bc8338d5cd1/package.json) → [patch](https://github.com/satan9394/dsh-rag/blob/2dcd65e1188048ec9d163f5b756d7bc8338d5cd1/cordis.patch.yml) · **身份:** `dsh-rag`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **GIT Memory** · [seriousz158/dsh-memory@12ac0fb](https://github.com/seriousz158/dsh-memory/commit/12ac0fb0aeb2db52bd6371fa033929d364d73027) — GIT Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/seriousz158/dsh-memory/blob/12ac0fb0aeb2db52bd6371fa033929d364d73027/package.json) → [patch](https://github.com/seriousz158/dsh-memory/blob/12ac0fb0aeb2db52bd6371fa033929d364d73027/packages/dsh-git-memory/cordis.patch.yml) · **身份:** `dsh-git-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `process-control` `database` `session-data` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Knowledge** · [Soren-ABT/dsh-knowledge@a0ad107](https://github.com/Soren-ABT/dsh-knowledge/commit/a0ad107c0febf751796c0a686c08979eeb62eab3) — 管理带分块、嵌入、检索、模型工具和浏览器面板的文档知识库。
  - **证据:** [manifest](https://github.com/Soren-ABT/dsh-knowledge/blob/a0ad107c0febf751796c0a686c08979eeb62eab3/package.json) → [patch](https://github.com/Soren-ABT/dsh-knowledge/blob/a0ad107c0febf751796c0a686c08979eeb62eab3/cordis.patch.yml) · **身份:** `dsh-knowledge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `knowledge-base` `document-processing` `filesystem-write` `embeddings` `external-network` `model-tools` `client-injection` `prepare-build` · **核验备注:** 固定源码为 0.2.11，同仓库 npm 已发布 0.2.12；未执行构建、解析、嵌入、检索、存储或工具。

- **DSH Engramory** · [tinqiao-oss/engramory@4a9b392](https://github.com/tinqiao-oss/engramory/commit/4a9b3925554e3ae2aaa7205bd842c21ca72f8626) — 基于 Markdown 笔记、共享纯文件存储与确定性索引上限的精选长期记忆。
  - **证据:** [manifest](https://github.com/tinqiao-oss/engramory/blob/4a9b3925554e3ae2aaa7205bd842c21ca72f8626/adapters/dsh/plugin/package.json) → [patch](https://github.com/tinqiao-oss/engramory/blob/4a9b3925554e3ae2aaa7205bd842c21ca72f8626/adapters/dsh/plugin/cordis.patch.yml) · **身份:** `dsh-engramory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `long-term-memory` `filesystem-read` `filesystem-write` `guard` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **W117C DSH Memory** · [W117C/dsh-memory@78fce61](https://github.com/W117C/dsh-memory/commit/78fce61abb0792706020516ff643ca208852ad63) — 实现带 SQLite 向量存储、本地嵌入、模型工具和 Web 面板的认知记忆系统。
  - **证据:** [manifest](https://github.com/W117C/dsh-memory/blob/78fce61abb0792706020516ff643ca208852ad63/package.json) → [patch](https://github.com/W117C/dsh-memory/blob/78fce61abb0792706020516ff643ca208852ad63/cordis.patch.yml) · **身份:** `@dsh-plugins/memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `persistent-memory` `sqlite` `native-dependencies` `local-embeddings` `filesystem-write` `model-tools` `client-injection` `github-only` · **核验备注:** 已记录固定 GitHub 源码身份；未加载原生依赖、数据库、嵌入模型、记忆工具或浏览器面板。

- **Memory Panel** · [x2it/dsh-memory-panel@7305b62](https://github.com/x2it/dsh-memory-panel/commit/7305b625239e08d52a9588b7b5e0a6837564a878) — Memory Panel 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/x2it/dsh-memory-panel/blob/7305b625239e08d52a9588b7b5e0a6837564a878/package.json) → [patch](https://github.com/x2it/dsh-memory-panel/blob/7305b625239e08d52a9588b7b5e0a6837564a878/cordis.patch.yml) · **身份:** `dsh-memory-panel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `process-control` `browser` `session-data` `model-tools` `package-install` `plugin-management` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

#### 安全与审批

- **DSH Popper** · [1473382/dsh-popper@d6130c0](https://github.com/1473382/dsh-popper/commit/d6130c052068147af9b9ac87b9f8c3729bb02f5b) — 通过主张门禁、竞争假设与只追加证据台账，为会话提供证伪驱动的纠错循环。
  - **证据:** [manifest](https://github.com/1473382/dsh-popper/blob/d6130c052068147af9b9ac87b9f8c3729bb02f5b/package.json) → [patch](https://github.com/1473382/dsh-popper/blob/d6130c052068147af9b9ac87b9f8c3729bb02f5b/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `system-prompt` `tool-gating` `session-data` `filesystem-write` `github-only` · **核验备注:** 文档记录了 Git 源安装，但未发布的 scoped 包名与 manifest 仓库字段不能证明官方 npm 身份；未执行门禁或会话写入。

- **DSH Multi Folder** · [AngelosZou/dsh-multi-folder@420416b](https://github.com/AngelosZou/dsh-multi-folder/commit/420416bb1e295d7c99dae301ca12cfb01049e37f) — DSH Multi Folder 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AngelosZou/dsh-multi-folder/blob/420416bb1e295d7c99dae301ca12cfb01049e37f/package.json) → [patch](https://github.com/AngelosZou/dsh-multi-folder/blob/420416bb1e295d7c99dae301ca12cfb01049e37f/cordis.patch.yml) · **身份:** `dsh-multi-folder`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `process-control` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Turn Approval** · [arrow949/dsh-turn-approval@5b4cbfd](https://github.com/arrow949/dsh-turn-approval/commit/5b4cbfd425885ed3f3ed93c796d5113847cc93b8) — 仅在当前任务内生效并随后过期的回合级审批规则。
  - **证据:** [manifest](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/package.json) → [patch](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/cordis.patch.yml) · **身份:** `dsh-turn-approval`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` · **核验备注:** 仅声明 Cordis peer，因此 DSH 兼容性仍未知。

- **YOLO Mode** · [CanGeng/yolo-mode@78bf20c](https://github.com/CanGeng/yolo-mode/commit/78bf20cada95a040d2a72f41cd2f0e60cda175e0) — 提供人工控制的无人值守模式，可启用 danger-full-access 与 never-approval，并带防护和通知。
  - **证据:** [manifest](https://github.com/CanGeng/yolo-mode/blob/78bf20cada95a040d2a72f41cd2f0e60cda175e0/package.json) → [patch](https://github.com/CanGeng/yolo-mode/blob/78bf20cada95a040d2a72f41cd2f0e60cda175e0/cordis.patch.yml) · **身份:** `yolo-mode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-change` `danger-full-access` `approval-policy` `subprocess` `external-network` `credentials` `github-only` · **核验备注:** 固定 bundle 明确改变权限与审批策略；未执行启用、命令防护、子进程、Webhook、桌面或邮件行为。

- **DSH Island** · [cdxiaodong/dsh-island@c7cd407](https://github.com/cdxiaodong/dsh-island/commit/c7cd407be48b731d910af946a81a6dc58aa690ca) — 一个 macOS 菜单栏灵动岛与鲸鱼桌宠，用于显示 DSH 会话、工具、进度和审批请求。
  - **证据:** [manifest](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/package.json) → [patch](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/cordis.patch.yml) · **身份:** `dsh-island`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `native-executable` `subprocess` `tool-arguments` `approval` `session-data` · **核验备注:** 源码会启动随包 macOS 面板，并通过本地 Socket 转发工具参数、会话路径和审批决定；未执行原生代码或 prepublish hook。

- **DSH Write Gate** · [couldbeme/dsh-write-gate@de8c581](https://github.com/couldbeme/dsh-write-gate/commit/de8c58100574a23df8e729e884661bc5fa60b8ec) — 在 Agent 写操作前应用确定性与可选模型判定的承诺策略。
  - **证据:** [manifest](https://github.com/couldbeme/dsh-write-gate/blob/de8c58100574a23df8e729e884661bc5fa60b8ec/package.json) → [patch](https://github.com/couldbeme/dsh-write-gate/blob/de8c58100574a23df8e729e884661bc5fa60b8ec/cordis.patch.yml) · **身份:** `dsh-write-gate`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `pre-execution-policy` `model-tools` `external-network` `filesystem-read` `prepublish-build` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.1.1；未执行策略文件读取、模型判定、工具拦截、构建或测试。

- **DSH Workspace Only** · [CsBpRd/dsh-workspace-only-plugin@a2682d3](https://github.com/CsBpRd/dsh-workspace-only-plugin/commit/a2682d35c390b2443b0371d5db925ee71e744715) — 增加一个策略开关，旨在把所有沙箱模式的文件访问限制在会话工作区内。
  - **证据:** [manifest](https://github.com/CsBpRd/dsh-workspace-only-plugin/blob/a2682d35c390b2443b0371d5db925ee71e744715/package.json) → [patch](https://github.com/CsBpRd/dsh-workspace-only-plugin/blob/a2682d35c390b2443b0371d5db925ee71e744715/cordis.patch.yml) · **身份:** `dsh-workspace-only-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `approval-hook` `core-patch` `remote-installer` `filesystem-write` `policy-control` · **核验备注:** 文档中的设置会下载安装器，并修改 DSH 核心及另一个插件以改变审批策略；未执行安装器或补丁脚本。

- **Handcraft Mode** · [DianranQian/handcraft-mode@470b907](https://github.com/DianranQian/handcraft-mode/commit/470b907a2d85c514d0376f2eeac22c8615db1efa) — 提供 Host 侧工具门禁与 Client 设置开关，使 Agent 保持只建议、不动手。
  - **证据:** [manifest](https://github.com/DianranQian/handcraft-mode/blob/470b907a2d85c514d0376f2eeac22c8615db1efa/package.json) → [patch](https://github.com/DianranQian/handcraft-mode/blob/470b907a2d85c514d0376f2eeac22c8615db1efa/cordis.yml) · **身份:** `handcraft-mode`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `tool-gating` `settings-write` `client-injection` `prepare-build` `github-only` · **核验备注:** 包声明 MIT，但未发现仓库许可证文件或 npm 包；固定根目录 Git Bundle 结构完整，未执行 Prepare 构建、工具门禁或 UI。

- **Deepseekeyes** · [dttxorg/deepseekeyes@e3a347b](https://github.com/dttxorg/deepseekeyes/commit/e3a347b0726d45db799196aa450818b55d5ef610) — Deepseekeyes 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dttxorg/deepseekeyes/blob/e3a347b0726d45db799196aa450818b55d5ef610/package.json) → [patch](https://github.com/dttxorg/deepseekeyes/blob/e3a347b0726d45db799196aa450818b55d5ef610/cordis.patch.yml) · **身份:** `@dttxorg/deepseekeyes`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `browser` `process-control` `financial` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Pentester** · [fb0sh/dsh-pentester@d4e0348](https://github.com/fb0sh/dsh-pentester/commit/d4e034868e505cb1a9f93e7f79a4c4539098dfab) — DSH Pentester 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fb0sh/dsh-pentester/blob/d4e034868e505cb1a9f93e7f79a4c4539098dfab/package.json) → [patch](https://github.com/fb0sh/dsh-pentester/blob/d4e034868e505cb1a9f93e7f79a4c4539098dfab/cordis.patch.yml) · **身份:** `dsh-pentester`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **HOL Guard Plugin** · [hashgraph-online/hol-guard-plugin@43b2dda](https://github.com/hashgraph-online/hol-guard-plugin/commit/43b2dda59e9f07057c52e69fd7426188faae1488) — HOL Guard Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/hashgraph-online/hol-guard-plugin/blob/43b2dda59e9f07057c52e69fd7426188faae1488/package.json) → [patch](https://github.com/hashgraph-online/hol-guard-plugin/blob/43b2dda59e9f07057c52e69fd7426188faae1488/cordis.patch.yml) · **身份:** `hol-guard-plugin`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `mcp` `session-data` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Fact Gate** · [HiNEM66/dsh-fact-gate@04d6568](https://github.com/HiNEM66/dsh-fact-gate/commit/04d6568f9a34c1199fd2016fc15e1c8fdb225935) — 为编辑、写入、PowerShell 操作与危险 Code Mode API 应用事实强制门禁。
  - **证据:** [manifest](https://github.com/HiNEM66/dsh-fact-gate/blob/04d6568f9a34c1199fd2016fc15e1c8fdb225935/package.json) → [patch](https://github.com/HiNEM66/dsh-fact-gate/blob/04d6568f9a34c1199fd2016fc15e1c8fdb225935/cordis.patch.yml) · **身份:** `dsh-fact-gate`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `tool-gating` `filesystem-write-policy` `shell-policy` `code-mode-policy` `github-only` · **核验备注:** 存在固定根目录 Git 源码，npm 无同名包；未执行编辑、写入、Shell、Code Mode 或测试行为。

- **DSH Auth** · [hxy91819/dsh-auth@ea8e827](https://github.com/hxy91819/dsh-auth/commit/ea8e82707167ef5bb8036370ea0e618caacd9da4) — 为 DSH Web 提供 Nginx 前置的单账户认证 bundle。
  - **证据:** [manifest](https://github.com/hxy91819/dsh-auth/blob/ea8e82707167ef5bb8036370ea0e618caacd9da4/package.json) → [patch](https://github.com/hxy91819/dsh-auth/blob/ea8e82707167ef5bb8036370ea0e618caacd9da4/cordis.patch.yml) · **身份:** `dsh-auth`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `authentication` `credentials` `reverse-proxy` `session-data` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Auto Mode** · [Igumi-BeXst/dsh-auto-mode@65ad25e](https://github.com/Igumi-BeXst/dsh-auto-mode/commit/65ad25edcc058c5449a4bc202fddd36b3f05a3e1) — Auto Mode 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Igumi-BeXst/dsh-auto-mode/blob/65ad25edcc058c5449a4bc202fddd36b3f05a3e1/package.json) → [patch](https://github.com/Igumi-BeXst/dsh-auto-mode/blob/65ad25edcc058c5449a4bc202fddd36b3f05a3e1/cordis.patch.yml) · **身份:** `dsh-auto-mode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `subprocess` `process-control` `session-data` `model-tools` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Iterate Plugin** · [jingzhao-l/iterate-plugin@eb5ccf5](https://github.com/jingzhao-l/iterate-plugin/commit/eb5ccf5a1958858fc23da233aba9c1bb9b76c5a4) — Iterate Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/jingzhao-l/iterate-plugin/blob/eb5ccf5a1958858fc23da233aba9c1bb9b76c5a4/package.json) → [patch](https://github.com/jingzhao-l/iterate-plugin/blob/eb5ccf5a1958858fc23da233aba9c1bb9b76c5a4/cordis.patch.yml) · **身份:** `iterate-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `system-prompt` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Approval LLM** · [Letter2025/dsh-approval-llm@af70355](https://github.com/Letter2025/dsh-approval-llm/commit/af70355a3c48c15f1ec8ac31c39fa279e895c168) — 使用 LLM 辅助评估敏感工具动作的审批层。
  - **证据:** [manifest](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/package.json) → [patch](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/cordis.patch.yml) · **身份:** `dsh-approval-llm`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` `llm-call` · **核验备注:** peer range 较宽，兼容性未知；仓库许可证检测结果不可用。

- **DSH Bundle Dedup Guard** · [Lstalu/dsh-bundle-dedup-guard@f6bccc7](https://github.com/Lstalu/dsh-bundle-dedup-guard/commit/f6bccc70df0873291b90e1177b7f3869deeb9ceb) — 检查 Profile Bundle 列表中的重复 Loader Entry，避免 DSH 启动失败。
  - **证据:** [manifest](https://github.com/Lstalu/dsh-bundle-dedup-guard/blob/f6bccc70df0873291b90e1177b7f3869deeb9ceb/package.json) → [patch](https://github.com/Lstalu/dsh-bundle-dedup-guard/blob/f6bccc70df0873291b90e1177b7f3869deeb9ceb/cordis.patch.yml) · **身份:** `dsh-bundle-dedup-guard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `profile-bundles` `configuration-read` `loader-guard` `prepack-check` · **核验备注:** 固定源码与同仓库 npm 身份均为 0.1.0；未执行 Profile 读取、Loader 拦截、检查、测试或预打包行为。

- **DSH Plugin Guard** · [MangShe3-0/dsh-plugin-guard@d8a5bae](https://github.com/MangShe3-0/dsh-plugin-guard/commit/d8a5baedcbda79bdb6519219d810290f6b2f8513) — 为 DSH 插件源码与包元数据提供只读、离线优先的静态扫描器。
  - **证据:** [manifest](https://github.com/MangShe3-0/dsh-plugin-guard/blob/d8a5baedcbda79bdb6519219d810290f6b2f8513/package.json) → [patch](https://github.com/MangShe3-0/dsh-plugin-guard/blob/d8a5baedcbda79bdb6519219d810290f6b2f8513/cordis.patch.yml) · **身份:** `dsh-plugin-guard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `security-scanning` `filesystem-read` `package-metadata` `model-tools` `github-only` · **核验备注:** 存在匹配的固定 GitHub 源码，npm 无同名包；未执行目标插件、扫描器、CLI、文件读取、工具或测试。

- **Upstream Radar** · [MicroMilo/upstream-radar@0519c00](https://github.com/MicroMilo/upstream-radar/commit/0519c00d8fb77b375748151dcb6365d25e04c86c) — 监测插件传递依赖漏洞路径与破坏性升级的依赖安全工具。
  - **证据:** [manifest](https://github.com/MicroMilo/upstream-radar/blob/0519c00d8fb77b375748151dcb6365d25e04c86c/package.json) → [patch](https://github.com/MicroMilo/upstream-radar/blob/0519c00d8fb77b375748151dcb6365d25e04c86c/cordis.patch.yml) · **身份:** `upstream-radar`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `dependency-audit` `vulnerability-data` `external-network` `filesystem-read` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Agent Approval** · [MoonlitDropOfBlood/dsh-agent-approval@a8e2cd2](https://github.com/MoonlitDropOfBlood/dsh-agent-approval/commit/a8e2cd2fd34c6ab8e853a561256989354b147d85) — Agent Approval 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MoonlitDropOfBlood/dsh-agent-approval/blob/a8e2cd2fd34c6ab8e853a561256989354b147d85/package.json) → [patch](https://github.com/MoonlitDropOfBlood/dsh-agent-approval/blob/a8e2cd2fd34c6ab8e853a561256989354b147d85/cordis.patch.yml) · **身份:** `@duke-dsh-plugins/dsh-agent-approval`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Sandbox Micro** · [omdsh-dev/dsh-sandbox-micro@31cbb2f](https://github.com/omdsh-dev/dsh-sandbox-micro/commit/31cbb2f2c33231a1fcff9ffc5ee09ea2388ce369) — DSH Sandbox Micro 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-sandbox-micro/blob/31cbb2f2c33231a1fcff9ffc5ee09ea2388ce369/package.json) → [patch](https://github.com/omdsh-dev/dsh-sandbox-micro/blob/31cbb2f2c33231a1fcff9ffc5ee09ea2388ce369/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-sandbox-micro`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `external-network` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Approval Auto Review** · [perlied03/dsh-approval-auto-review@a537636](https://github.com/perlied03/dsh-approval-auto-review/commit/a5376364a408d410404001a56229842013da0411) — Approval Auto Review 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/perlied03/dsh-approval-auto-review/blob/a5376364a408d410404001a56229842013da0411/package.json) → [patch](https://github.com/perlied03/dsh-approval-auto-review/blob/a5376364a408d410404001a56229842013da0411/cordis.patch.yml) · **身份:** `dsh-approval-auto-review`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` `filesystem-read` `subprocess` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `multi-agent` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Risk Rule Design** · [pypcfx-glitch/risk-rule-design@3169f80](https://github.com/pypcfx-glitch/risk-rule-design/commit/3169f80d7908f94c008ee48277ecbebaa73bc5d0) — DSH Plugin Risk Rule Design 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/pypcfx-glitch/risk-rule-design/blob/3169f80d7908f94c008ee48277ecbebaa73bc5d0/package.json) → [patch](https://github.com/pypcfx-glitch/risk-rule-design/blob/3169f80d7908f94c008ee48277ecbebaa73bc5d0/cordis.patch.yml) · **身份:** `dsh-plugin-risk-rule-design`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Compat Guard** · [Shizuku-keop/dsh-compat-guard@898e13f](https://github.com/Shizuku-keop/dsh-compat-guard/commit/898e13f99b48e4e88625047dcd230291b84d23c5) — Compat Guard 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Shizuku-keop/dsh-compat-guard/blob/898e13f99b48e4e88625047dcd230291b84d23c5/package.json) → [patch](https://github.com/Shizuku-keop/dsh-compat-guard/blob/898e13f99b48e4e88625047dcd230291b84d23c5/cordis.patch.yml) · **身份:** `dsh-compat-guard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `session-data` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH Auth Plugin** · [v1xingyue/dsh-auth-plugin@dec45bf](https://github.com/v1xingyue/dsh-auth-plugin/commit/dec45bf6132e60d05b563750c42b5b80b36e67fa) — 为 DSH Web 添加密码、OAuth、Solana 与 EVM 钱包认证。
  - **证据:** [manifest](https://github.com/v1xingyue/dsh-auth-plugin/blob/dec45bf6132e60d05b563750c42b5b80b36e67fa/package.json) → [patch](https://github.com/v1xingyue/dsh-auth-plugin/blob/dec45bf6132e60d05b563750c42b5b80b36e67fa/cordis.patch.yml) · **身份:** `dsh-auth-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `authentication` `oauth` `wallet-auth` `credentials` `client-injection` `prepack-check` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

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

- **DSH Remote** · [xgone/dsh-remote@92e59d1](https://github.com/xgone/dsh-remote/commit/92e59d1e41dfe50b0c4975788ff3a40200044c91) — 为 DSH Web 增加登录门禁、MFA、签名会话、角色控制和远程目录选择。
  - **证据:** [manifest](https://github.com/xgone/dsh-remote/blob/92e59d1e41dfe50b0c4975788ff3a40200044c91/package.json) → [patch](https://github.com/xgone/dsh-remote/blob/92e59d1e41dfe50b0c4975788ff3a40200044c91/cordis.patch.yml) · **身份:** `@xgone/dsh-remote`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `authentication` `password-storage` `totp` `session-cookies` `role-based-access` `filesystem-write` `web-route` `client-injection` `high-trust-surface` · **核验备注:** 固定源码为 0.1.4，同仓库 npm 已发布 0.1.5；未执行引导账户、密码哈希、MFA、Cookie、访问门禁或文件操作。

- **Enterprise Compliance** · [xiaoliang2/enterprise-compliance@78545cb](https://github.com/xiaoliang2/enterprise-compliance/commit/78545cbdbcadd80adcfa9d6c06c8f57c9edf127d) — Enterprise compliance for DeepSeek Harness — SOC2/GDPR automated checks, sensitive-info redaction, and a redacted tool audit trail. · DSH 企业级合规插件：SOC2/GDPR 自动化合规自检、敏感信息拦截与脱敏、操作日志审计追溯。
  - **证据:** [manifest](https://github.com/xiaoliang2/enterprise-compliance/blob/78545cbdbcadd80adcfa9d6c06c8f57c9edf127d/package.json) → [patch](https://github.com/xiaoliang2/enterprise-compliance/blob/78545cbdbcadd80adcfa9d6c06c8f57c9edf127d/cordis.patch.yml) · **身份:** `@xiaobanli/dsh-enterprise-compliance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DeepSeek Peak Blocker** · [zisekongling/deepseek-peak-blocker@db54633](https://github.com/zisekongling/deepseek-peak-blocker/commit/db54633ce5e251f9427d12c1366a9eff6314cfc9) — 在配置的高峰时段拦截 DeepSeek 官方请求，并让用户选择继续或取消。
  - **证据:** [manifest](https://github.com/zisekongling/deepseek-peak-blocker/blob/db54633ce5e251f9427d12c1366a9eff6314cfc9/package.json) → [patch](https://github.com/zisekongling/deepseek-peak-blocker/blob/db54633ce5e251f9427d12c1366a9eff6314cfc9/cordis.patch.yml) · **身份:** `deepseek-peak-blocker`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `model-interrupt` `request-gating` `user-confirmation` `agent-events` `web-route` `client-injection` `github-only` · **核验备注:** 仓库记录了固定 GitHub 源码安装方式；未执行请求拦截、绕过命令、用户裁决、HTTP 端点或浏览器界面。

- **DSH Poison Guard** · [zoahdev/dsh-poison-guard@7be8ffd](https://github.com/zoahdev/dsh-poison-guard/commit/7be8ffd0470e47145f0fe9dd7cc1ba4982646811) — 使用 AST、去混淆与启发式规则检测外传和动态代码的安装前供应链扫描器。
  - **证据:** [manifest](https://github.com/zoahdev/dsh-poison-guard/blob/7be8ffd0470e47145f0fe9dd7cc1ba4982646811/package.json) → [patch](https://github.com/zoahdev/dsh-poison-guard/blob/7be8ffd0470e47145f0fe9dd7cc1ba4982646811/cordis.patch.yml) · **身份:** `dsh-poison-guard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `supply-chain-scan` `ast-analysis` `deobfuscation` `filesystem-read` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

#### 外部集成

- **Chicheng Gate** · [534119219/chicheng-gate@155dbf6](https://github.com/534119219/chicheng-gate/commit/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876) — 为 DSH 面板增加局域网和隧道访问、密码门禁、可信主机配置与托管 frpc 连接。
  - **证据:** [manifest](https://github.com/534119219/chicheng-gate/blob/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876/package.json) → [patch](https://github.com/534119219/chicheng-gate/blob/155dbf6c6a793ac2c74f2e0e4fcafaf7ebb95876/cordis.patch.yml) · **身份:** `chicheng-gate`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `remote-access` `credentials` `remote-binary-download` `subprocess` `filesystem-write` · **核验备注:** 静态源码显示 frpc 下载与校验、解压、凭据存储、子进程启动及 DSH 重启路径；均未执行。

- **DSH Custom Provider Reasoning** · [534119219/dsh-custom-provider-reasoning@86ae352](https://github.com/534119219/dsh-custom-provider-reasoning/commit/86ae352b91237b1274bf76a642d645dfd1fba276) — 为手工声明的自定义 Provider 模型补充可选择的推理强度元数据。
  - **证据:** [manifest](https://github.com/534119219/dsh-custom-provider-reasoning/blob/86ae352b91237b1274bf76a642d645dfd1fba276/package.json) → [patch](https://github.com/534119219/dsh-custom-provider-reasoning/blob/86ae352b91237b1274bf76a642d645dfd1fba276/cordis.patch.yml) · **身份:** `dsh-custom-provider-reasoning`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `model-routing` `provider-metadata` `settings-write` `client-injection` `github-only` · **核验备注:** 已记录 GitHub 依赖安装方式；仅静态核对 Provider 元数据与设置变更，未实际应用。

- **DSH Notify Win** · [Andyqwe44/dsh-notify-win@a26c182](https://github.com/Andyqwe44/dsh-notify-win/commit/a26c1825a02dd077ef68b40095f6d33d91550e49) — 显示原生 Windows 任务与提问通知、闪烁任务栏，并可把 Toast 回答传回 DSH。
  - **证据:** [manifest](https://github.com/Andyqwe44/dsh-notify-win/blob/a26c1825a02dd077ef68b40095f6d33d91550e49/package.json) → [patch](https://github.com/Andyqwe44/dsh-notify-win/blob/a26c1825a02dd077ef68b40095f6d33d91550e49/cordis.patch.yml) · **身份:** `dsh-notify-win`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `native-executable` `powershell` `subprocess` `question-data` `filesystem` · **核验备注:** 包内携带可执行文件、PowerShell 与 VBScript 辅助程序并启动通知进程；未执行原生程序、子进程、提问流程或 prepublish hook。

- **DSH QQ Remote** · [ASAKAFENG/dsh-qq-remote@b724335](https://github.com/ASAKAFENG/dsh-qq-remote/commit/b724335a194d217f51dedbfd799d02ae67559d3b) — 通过 OneBot QQ 桥远程控制 DSH，提供命令执行、任务派发、截图、聊天、会话和进度事件。
  - **证据:** [manifest](https://github.com/ASAKAFENG/dsh-qq-remote/blob/b724335a194d217f51dedbfd799d02ae67559d3b/package.json) → [patch](https://github.com/ASAKAFENG/dsh-qq-remote/blob/b724335a194d217f51dedbfd799d02ae67559d3b/cordis.patch.yml) · **身份:** `@dsh-external/dsh-qq-remote`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `remote-command-execution` `external-network` `credentials` `screenshot` `session-data` `subprocess` · **核验备注:** 固定源码通过 QQ 暴露远程命令、截图、会话、文件、凭据和子进程能力；独立安装脚本及所有运行路径均未执行。

- **DSH Weave** · [baixianger/dsh-weave@2e71605](https://github.com/baixianger/dsh-weave/commit/2e716052adb063a60cbd2cd11cdd071fabb35d08) — 通过私有点对点 weave 协议连接多个 DeepSeek Harness 节点。
  - **证据:** [manifest](https://github.com/baixianger/dsh-weave/blob/2e716052adb063a60cbd2cd11cdd071fabb35d08/package.json) → [patch](https://github.com/baixianger/dsh-weave/blob/2e716052adb063a60cbd2cd11cdd071fabb35d08/cordis.patch.yml) · **身份:** `dsh-weave`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `peer-to-peer` `external-network` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、patch、许可证、匹配的 npm gitHead 与安装身份；未执行网络或存储行为。

- **DSH WeChat Pro** · [bwhite55/dsh-wechat-pro@c726696](https://github.com/bwhite55/dsh-wechat-pro/commit/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357) — 把微信联系人接入真实 DSH 工作区、会话、提示、审批、事件流和媒体传输。
  - **证据:** [manifest](https://github.com/bwhite55/dsh-wechat-pro/blob/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357/package.json) → [patch](https://github.com/bwhite55/dsh-wechat-pro/blob/c7266964a1ce159a6c3d14c1bb3cbfc1f563c357/cordis.patch.yml) · **身份:** `dsh-wechat-pro`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `session-data` `approval` `file-transfer` `filesystem-write` · **核验备注:** 该包使用通配 DSH peer，并处理微信凭据、提示、审批、会话事件和媒体文件；均未运行测试。

- **DSH CodeBuddy Auth** · [cainiao1992/dsh-codebuddy-auth@c684e73](https://github.com/cainiao1992/dsh-codebuddy-auth/commit/c684e73d310974d1e9283bee445afa3d4ab94477) — 为 DSH Provider 路由提供 CodeBuddy 浏览器 OAuth、Token 刷新、凭据存储与模型同步。
  - **证据:** [manifest](https://github.com/cainiao1992/dsh-codebuddy-auth/blob/c684e73d310974d1e9283bee445afa3d4ab94477/package.json) → [patch](https://github.com/cainiao1992/dsh-codebuddy-auth/blob/c684e73d310974d1e9283bee445afa3d4ab94477/cordis.patch.yml) · **身份:** `dsh-codebuddy-auth`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `oauth` `browser-login` `credentials` `external-network` `model-provider` `github-only` · **核验备注:** 存在匹配的固定 GitHub 源码，npm 无同名包；未执行登录流程、Token 刷新、凭据写入或模型同步。

- **AI Quota** · [Carrick-K7/dsh-ai-quota@57c0af8](https://github.com/Carrick-K7/dsh-ai-quota/commit/57c0af8289ad92972b36a5958dd76e00f209edf4) — AI Quota 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Carrick-K7/dsh-ai-quota/blob/57c0af8289ad92972b36a5958dd76e00f209edf4/package.json) → [patch](https://github.com/Carrick-K7/dsh-ai-quota/blob/57c0af8289ad92972b36a5958dd76e00f209edf4/cordis.patch.yml) · **身份:** `dsh-ai-quota`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `session-data` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH OpenCode** · [chiro2001/dsh-oc@1ed1c51](https://github.com/chiro2001/dsh-oc/commit/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b) — 把 DSH 会话桥接到 OpenCode 终端界面，并支持模型凭据、文件系统访问和原生运行时。
  - **证据:** [manifest](https://github.com/chiro2001/dsh-oc/blob/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b/package.json) → [patch](https://github.com/chiro2001/dsh-oc/blob/1ed1c5164e9b0ef98dde9e8cda85042bf5c5b59b/cordis.patch.yml) · **身份:** `@chiro2001/dsh-oc`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-application` `remote-binary-download` `subprocess` `credentials` `filesystem` `session-data` · **核验备注:** 该 Git 源 bundle 声明 rc.6 peer，可下载或启动 OpenCode 运行时，并接触凭据、文件与会话；这些路径均未执行。

- **DSH Gateway** · [clarknu/dsh-gateway@56c4462](https://github.com/clarknu/dsh-gateway/commit/56c4462579b94951c63bd08a286cd367aefa950a) — 为本地 DSH Web 提供支持 Cookie 认证与 WebSocket 的 HTTPS 反向网关。
  - **证据:** [manifest](https://github.com/clarknu/dsh-gateway/blob/56c4462579b94951c63bd08a286cd367aefa950a/package.json) → [patch](https://github.com/clarknu/dsh-gateway/blob/56c4462579b94951c63bd08a286cd367aefa950a/cordis.patch.yml) · **身份:** `dsh-gateway`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `tls` `https-server` `websocket` `reverse-proxy` `credentials` `filesystem-write` · **核验备注:** 固定源码为 1.0.0，而同仓库 npm 已发布 1.3.4；未执行监听、证书生成、凭据校验、代理或 WebSocket。

- **DSH Collab Sync** · [cxxy161/dsh-collab-sync@22945f8](https://github.com/cxxy161/dsh-collab-sync/commit/22945f8a3a43199f76d82836a40d75c3744762ad) — 通过单写者锁、会话日志修复、远程访问设置和协作分区，让多个客户端共享一个 DSH 后端。
  - **证据:** [manifest](https://github.com/cxxy161/dsh-collab-sync/blob/22945f8a3a43199f76d82836a40d75c3744762ad/package.json) → [patch](https://github.com/cxxy161/dsh-collab-sync/blob/22945f8a3a43199f76d82836a40d75c3744762ad/cordis.patch.yml) · **身份:** `dsh-collab-sync`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `filesystem-write` `data-repair` `remote-access` `configuration-write` · **核验备注:** 该包声明宽泛的 DSH 版本范围，源码可修复压缩会话日志、改变主机暴露范围并写入配置；均未执行。

- **DSH Channel** · [ddrwin/dsh-channel@13629df](https://github.com/ddrwin/dsh-channel/commit/13629dfb8f006965abca32c97f2f573bc8f685c0) — 为同一 DSH Desktop Host 内的 Agent 提供心跳发现与跨 Session 消息。
  - **证据:** [manifest](https://github.com/ddrwin/dsh-channel/blob/13629dfb8f006965abca32c97f2f573bc8f685c0/package.json) → [patch](https://github.com/ddrwin/dsh-channel/blob/13629dfb8f006965abca32c97f2f573bc8f685c0/cordis.patch.yml) · **身份:** `dsh-channel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `cross-session-messaging` `session-data` `model-tools` `settings-read` `prepublish-build` `github-only` · **核验备注:** 存在匹配的固定 GitHub 源码，npm 无同名包；未执行心跳、Session 消息、工具注册、构建或发布前行为。

- **DSH QQBot Community** · [DLive/dsh-qqbot-community@c65813f](https://github.com/DLive/dsh-qqbot-community/commit/c65813fff5185f76e37f459f4daef575deaa8e6f) — 把 QQ 官方机器人对话接入 DSH 会话、提示、事件流和媒体处理。
  - **证据:** [manifest](https://github.com/DLive/dsh-qqbot-community/blob/c65813fff5185f76e37f459f4daef575deaa8e6f/package.json) → [patch](https://github.com/DLive/dsh-qqbot-community/blob/c65813fff5185f76e37f459f4daef575deaa8e6f/cordis.patch.yml) · **身份:** `dsh-qqbot-community`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `websocket` `session-data` `file-transfer` `prepublish-build` · **核验备注:** 公开包指向本仓库，源码使用凭据连接 QQ 并转发消息与媒体；未执行网络、文件、会话或 prepublish 操作。

- **DSH MCP Bridge** · [Edge-Echo/dsh-mcp-bridge@7768dc3](https://github.com/Edge-Echo/dsh-mcp-bridge/commit/7768dc3d3b7d65bca896a7c4eece170cb004439e) — 通过 DSH Web bundle 暴露 MCP servers 与工具的桥接层。
  - **证据:** [manifest](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/package.json) → [patch](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/cordis.patch.yml) · **身份:** `dsh-mcp-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `mcp` `subprocess` `external-tools` · **核验备注:** 已确认 Web bundle 结构；README 另有 headless 依赖限制记录。

- **Matrix Skin** · [emeryxu1-blip/dsh-matrix-skin@edef477](https://github.com/emeryxu1-blip/dsh-matrix-skin/commit/edef4772889352e42bf6741f0b649a81fefa837b) — Matrix Skin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/emeryxu1-blip/dsh-matrix-skin/blob/edef4772889352e42bf6741f0b649a81fefa837b/package.json) → [patch](https://github.com/emeryxu1-blip/dsh-matrix-skin/blob/edef4772889352e42bf6741f0b649a81fefa837b/cordis.patch.yml) · **身份:** `dsh-matrix-skin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `session-data` `theme` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Origin Plugin** · [Fantasality/dsh-origin-plugin@778f85d](https://github.com/Fantasality/dsh-origin-plugin/commit/778f85d3ded5df9fce45c14fc199ca83515cb8a2) — DSH Origin Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Fantasality/dsh-origin-plugin/blob/778f85d3ded5df9fce45c14fc199ca83515cb8a2/package.json) → [patch](https://github.com/Fantasality/dsh-origin-plugin/blob/778f85d3ded5df9fce45c14fc199ca83515cb8a2/cordis.patch.yml) · **身份:** `dsh-origin-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `mcp` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Voice Info** · [flyingtimes/dsh-voice-info@819bd53](https://github.com/flyingtimes/dsh-voice-info/commit/819bd534a00c810a7f72d9b787e71a760875eb12) — 通过本地 CLI 和蓝牙音箱播报带上下文的回合摘要与任务提醒。
  - **证据:** [manifest](https://github.com/flyingtimes/dsh-voice-info/blob/819bd534a00c810a7f72d9b787e71a760875eb12/package.json) → [patch](https://github.com/flyingtimes/dsh-voice-info/blob/819bd534a00c810a7f72d9b787e71a760875eb12/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `audio` `bluetooth` `subprocess` `session-data` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Ocgo Quota** · [fuzz1og/dsh-ocgo-quota@7f62f50](https://github.com/fuzz1og/dsh-ocgo-quota/commit/7f62f5042818217928802c6b011efbe230bd860c) — Ocgo Quota 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fuzz1og/dsh-ocgo-quota/blob/7f62f5042818217928802c6b011efbe230bd860c/package.json) → [patch](https://github.com/fuzz1og/dsh-ocgo-quota/blob/7f62f5042818217928802c6b011efbe230bd860c/cordis.patch.yml) · **身份:** `dsh-ocgo-quota`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `session-data` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH API Quota** · [ganfne123/dsh-plugin-api-quota@a571a35](https://github.com/ganfne123/dsh-plugin-api-quota/commit/a571a35773d517aca7a3e2f3c28876919c9ea3eb) — 在侧栏查询并展示 DeepSeek API Key 余额与额度。
  - **证据:** [manifest](https://github.com/ganfne123/dsh-plugin-api-quota/blob/a571a35773d517aca7a3e2f3c28876919c9ea3eb/package.json) → [patch](https://github.com/ganfne123/dsh-plugin-api-quota/blob/a571a35773d517aca7a3e2f3c28876919c9ea3eb/cordis.patch.yml) · **身份:** `dsh-plugin-api-quota`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `credentials` `external-network` `account-balance` `client-injection` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Web Remote** · [godchen520/dsh-web-remote@c852cee](https://github.com/godchen520/dsh-web-remote/commit/c852cee2a882cc29544c9ceaef1844410246a042) — 通过 Cloudflare Quick Tunnel 或局域网 HTTP 提供带令牌代理和移动面板的远程访问。
  - **证据:** [manifest](https://github.com/godchen520/dsh-web-remote/blob/c852cee2a882cc29544c9ceaef1844410246a042/package.json) → [patch](https://github.com/godchen520/dsh-web-remote/blob/c852cee2a882cc29544c9ceaef1844410246a042/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `remote-access` `external-network` `authentication` `local-web-server` `cloudflare` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Notion Manager** · [Graffiti-yH/dsh-notion-manager@4cc011a](https://github.com/Graffiti-yH/dsh-notion-manager/commit/4cc011aedb18f619a15c1cddb38a264376080637) — 把 Notion 搜索、页面、数据库、区块、评论与用户能力暴露为 DSH Agent 工具。
  - **证据:** [manifest](https://github.com/Graffiti-yH/dsh-notion-manager/blob/4cc011aedb18f619a15c1cddb38a264376080637/package.json) → [patch](https://github.com/Graffiti-yH/dsh-notion-manager/blob/4cc011aedb18f619a15c1cddb38a264376080637/cordis.patch.yml) · **身份:** `dsh-notion-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `notion-api` `credentials` `external-network` `model-tools` `content-write` `github-only` · **核验备注:** 固定源码支持凭据引用及广泛的 Notion 读写工具；未使用令牌、请求工作区或修改内容。

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

- **DSH Connect** · [IvanWu2015/dsh-connect@838492d](https://github.com/IvanWu2015/dsh-connect/commit/838492defdab22473788cbb6d03a914656f59c68) — DSH Connect 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/IvanWu2015/dsh-connect/blob/838492defdab22473788cbb6d03a914656f59c68/packages/connect/package.json) → [patch](https://github.com/IvanWu2015/dsh-connect/blob/838492defdab22473788cbb6d03a914656f59c68/packages/connect/cordis.patch.yml) · **身份:** `dsh-connect`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `email` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH ChatNode WeChat** · [Jesse-njx/dsh-chatnode-wechat@a724da3](https://github.com/Jesse-njx/dsh-chatnode-wechat/commit/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745) — 把微信聊天节点连接到 DeepSeek Harness 的集成。
  - **证据:** [manifest](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/package.json) → [patch](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/cordis.patch.yml) · **身份:** `dsh-chatnode-wechat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `messaging` `source-build` · **核验备注:** 源码安装可能执行 prepare 构建；README 声称支持 rc.6，但 manifest 未声明相关 peer。

- **DSH DeepSeek Billing** · [Jolly-J/dsh-deepseek-billing@1c4642a](https://github.com/Jolly-J/dsh-deepseek-billing/commit/1c4642aeb13df1c06f80f76fbb73a926bb8f593e) — 侧栏中的 DeepSeek 余额展示与会话费用估算器。
  - **证据:** [manifest](https://github.com/Jolly-J/dsh-deepseek-billing/blob/1c4642aeb13df1c06f80f76fbb73a926bb8f593e/package.json) → [patch](https://github.com/Jolly-J/dsh-deepseek-billing/blob/1c4642aeb13df1c06f80f76fbb73a926bb8f593e/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-balance` `credentials` `session-data` `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Agent Sync** · [kuaiyukuaikuai/dsh-agent-sync@9d97956](https://github.com/kuaiyukuaikuai/dsh-agent-sync/commit/9d97956ee5168c2cf9755f84345928b0007fb5c2) — DSH Agent Sync 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kuaiyukuaikuai/dsh-agent-sync/blob/9d97956ee5168c2cf9755f84345928b0007fb5c2/package.json) → [patch](https://github.com/kuaiyukuaikuai/dsh-agent-sync/blob/9d97956ee5168c2cf9755f84345928b0007fb5c2/cordis.patch.yml) · **身份:** `dsh-agent-sync`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Local Agent Bridge** · [Leshm0321/dsh-plugin-local-agent-bridge@8fdd8a1](https://github.com/Leshm0321/dsh-plugin-local-agent-bridge/commit/8fdd8a13d23af9f27e42032f85dd74c67dd0be1c) — 为 Host 原生 Codex 与 Claude Code Session 提供 DSH 浏览器控制界面。
  - **证据:** [manifest](https://github.com/Leshm0321/dsh-plugin-local-agent-bridge/blob/8fdd8a13d23af9f27e42032f85dd74c67dd0be1c/package.json) → [patch](https://github.com/Leshm0321/dsh-plugin-local-agent-bridge/blob/8fdd8a13d23af9f27e42032f85dd74c67dd0be1c/cordis.patch.yml) · **身份:** `dsh-plugin-local-agent-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-agent` `subprocess` `browser-control` `session-data` `filesystem-write` `client-injection` `prepare-build` `github-only` · **核验备注:** 根包标记为 Private 且 npm 无身份，但存在固定 Git Bundle；未执行 Codex 或 Claude 进程、浏览器控制、Session 存储、构建或测试。

- **DSH Provider Quick Config** · [lo2589/deepseek-harness-provider@bff762a](https://github.com/lo2589/deepseek-harness-provider/commit/bff762ad720a8613a3283480fb120d602891685d) — 在发送键旁快速配置 Provider 路由、模型、API Key 与本地模型同步。
  - **证据:** [manifest](https://github.com/lo2589/deepseek-harness-provider/blob/bff762ad720a8613a3283480fb120d602891685d/dsh-provider-quick-config/package.json) → [patch](https://github.com/lo2589/deepseek-harness-provider/blob/bff762ad720a8613a3283480fb120d602891685d/dsh-provider-quick-config/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `provider-config` `credentials` `external-network` `configuration-write` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Harness Alchemist** · [lunarmoon26/harness-alchemist@5983436](https://github.com/lunarmoon26/harness-alchemist/commit/59834366e113ac0cc5b38dde93a2f68303936fbd) — Harness Alchemist 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lunarmoon26/harness-alchemist/blob/59834366e113ac0cc5b38dde93a2f68303936fbd/package.json) → [patch](https://github.com/lunarmoon26/harness-alchemist/blob/59834366e113ac0cc5b38dde93a2f68303936fbd/cordis.patch.yml) · **身份:** `harness-alchemist`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `filesystem-read` `package-install` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Manager** · [miaooon/dsh-plugin-manager@24eb36f](https://github.com/miaooon/dsh-plugin-manager/commit/24eb36fa037725a20ac175d9ea3986de681e5c72) — DSH Plugin Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/miaooon/dsh-plugin-manager/blob/24eb36fa037725a20ac175d9ea3986de681e5c72/package.json) → [patch](https://github.com/miaooon/dsh-plugin-manager/blob/24eb36fa037725a20ac175d9ea3986de681e5c72/cordis.patch.yml) · **身份:** `dsh-plugin-manager`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `system-prompt` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **MMX Quota Tool** · [mtty-ai/mmx-quota-tool@4b3a534](https://github.com/mtty-ai/mmx-quota-tool/commit/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c) — 面向 DSH Web 的 MiniMax Token 套餐额度指示器与详情面板。
  - **证据:** [manifest](https://github.com/mtty-ai/mmx-quota-tool/blob/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c/package.json) → [patch](https://github.com/mtty-ai/mmx-quota-tool/blob/4b3a5342e6c932fe9ad429ec87f4447d1562ee2c/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-quota` `credentials` `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Gateway Wallet** · [MuAllen/dsh-gateway-wallet@9531740](https://github.com/MuAllen/dsh-gateway-wallet/commit/9531740718e1a323bb00215b52fe1be5e9db73d3) — Gateway Wallet 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MuAllen/dsh-gateway-wallet/blob/9531740718e1a323bb00215b52fe1be5e9db73d3/package.json) → [patch](https://github.com/MuAllen/dsh-gateway-wallet/blob/9531740718e1a323bb00215b52fe1be5e9db73d3/cordis.patch.yml) · **身份:** `dsh-gateway-wallet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Iflow DSH Plugin** · [Neo-Pz/dsh@74ce6fc](https://github.com/Neo-Pz/dsh/commit/74ce6fc0b2ccea129b81acdd14c7a4b29d3f60b0) — Iflow DSH Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Neo-Pz/dsh/blob/74ce6fc0b2ccea129b81acdd14c7a4b29d3f60b0/package.json) → [patch](https://github.com/Neo-Pz/dsh/blob/74ce6fc0b2ccea129b81acdd14c7a4b29d3f60b0/cordis.patch.yml) · **身份:** `iflow-dsh-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `model-tools` `package-install` `financial` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Open Design DSH Runtime** · [nexu-io/open-design@62483a1](https://github.com/nexu-io/open-design/commit/62483a1947b5c5e7b3fffe24b52b685d93ad9209) — 通过 JSONL stdio 把 Open Design 连接到用户自有 DSH 的完整性固定 profile 运行时。
  - **证据:** [manifest](https://github.com/nexu-io/open-design/blob/62483a1947b5c5e7b3fffe24b52b685d93ad9209/packages/dsh-runtime/package.json) → [patch](https://github.com/nexu-io/open-design/blob/62483a1947b5c5e7b3fffe24b52b685d93ad9209/packages/dsh-runtime/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `stdio` `subprocess` `profile-bundle` `session-data` `integrity-check` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Hhxg Market** · [Niceck/dsh-hhxg-market@cde2c3c](https://github.com/Niceck/dsh-hhxg-market/commit/cde2c3c3caf55c5dc4448d8b8c402fb82ef9387b) — 恢恢量化 (hhxg.top) A股量化数据插件 for DeepSeek Harness：免费提供日报快照/财经快讯/融资融券/A股日历/市场情绪/题材热度 6 个工具；填入 VIP MCP Token 后解锁个股诊断/量化策略信号/连板晋级预测等 5 个进阶工具。A-share quant data plugin for DeepSeek Harness (dsh): 6 free tools + 5 VIP tools bridged to the hhxg MCP server.
  - **证据:** [manifest](https://github.com/Niceck/dsh-hhxg-market/blob/cde2c3c3caf55c5dc4448d8b8c402fb82ef9387b/package.json) → [patch](https://github.com/Niceck/dsh-hhxg-market/blob/cde2c3c3caf55c5dc4448d8b8c402fb82ef9387b/cordis.patch.yml) · **身份:** `@hhxg/dsh-hhxg-market`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `mcp` `system-prompt` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **Awesome Ios Sim** · [qubyyang/awesome-ios-sim@dc3e641](https://github.com/qubyyang/awesome-ios-sim/commit/dc3e641c6098d0d4aa62b66ce561b49bbaddd21c) — Awesome Ios Sim 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/qubyyang/awesome-ios-sim/blob/dc3e641c6098d0d4aa62b66ce561b49bbaddd21c/package.json) → [patch](https://github.com/qubyyang/awesome-ios-sim/blob/dc3e641c6098d0d4aa62b66ce561b49bbaddd21c/cordis.patch.yml) · **身份:** `@qubyyang/awesome-ios-sim`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Call Me** · [radres/dsh-plugin-call-me@af1a21b](https://github.com/radres/dsh-plugin-call-me/commit/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c) — 拨打真实电话，让语音提问与回答能够引导当前 Agent 运行。
  - **证据:** [manifest](https://github.com/radres/dsh-plugin-call-me/blob/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c/package.json) → [patch](https://github.com/radres/dsh-plugin-call-me/blob/af1a21bc85ce7a0fe1de85384eb98a8e14ca457c/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `telephony` `audio` `credentials` `external-network` `agent-steering` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Rapid MLX DSH Provider** · [raullenchai/rapid-mlx-dsh-provider@b14ada2](https://github.com/raullenchai/rapid-mlx-dsh-provider/commit/b14ada226041d98f130e0cb8469391d5b42d612d) — 将本地 Rapid MLX 服务注册为 DSH 语言模型供应商路由。
  - **证据:** [manifest](https://github.com/raullenchai/rapid-mlx-dsh-provider/blob/b14ada226041d98f130e0cb8469391d5b42d612d/package.json) → [patch](https://github.com/raullenchai/rapid-mlx-dsh-provider/blob/b14ada226041d98f130e0cb8469391d5b42d612d/cordis.patch.yml) · **身份:** `@rapid-mlx/dsh-provider`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `llm-provider` `local-network` `model-discovery` `github-only` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH RingCentral** · [ringclaw/dsh-ringcentral@42b76e9](https://github.com/ringclaw/dsh-ringcentral/commit/42b76e9cf244f607fdfed17e2a905bff38001dd5) — 将 DSH 会话连接到 RingCentral Team Messaging 即时消息频道。
  - **证据:** [manifest](https://github.com/ringclaw/dsh-ringcentral/blob/42b76e9cf244f607fdfed17e2a905bff38001dd5/package.json) → [patch](https://github.com/ringclaw/dsh-ringcentral/blob/42b76e9cf244f607fdfed17e2a905bff38001dd5/cordis.patch.yml) · **身份:** `dsh-ringcentral`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `ringcentral` `im-channel` `external-network` `credentials` `prepublish-build` · **核验备注:** 固定源码早于当前匹配的 Registry 版本；已静态核对身份与证据，未执行消息或构建操作。

- **GIT Plugins** · [sakthiveltofficial/dsh-git-plugins@563e1f7](https://github.com/sakthiveltofficial/dsh-git-plugins/commit/563e1f7d5435f1992fa100bd388d851647ccb3e8) — GIT Plugins 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/sakthiveltofficial/dsh-git-plugins/blob/563e1f7d5435f1992fa100bd388d851647ccb3e8/package.json) → [patch](https://github.com/sakthiveltofficial/dsh-git-plugins/blob/563e1f7d5435f1992fa100bd388d851647ccb3e8/cordis.patch.yml) · **身份:** `dsh-git-plugins`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `process-control` `session-data` `system-prompt` `model-tools` `package-install` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Codex Harness** · [shuind/dsh-codex-harness@398852d](https://github.com/shuind/dsh-codex-harness/commit/398852d586489408544bf7873011853504cc8a7d) — 在 DSH 中提供兼容 Codex 的 GPT 模型 Harness 与预设安装器。
  - **证据:** [manifest](https://github.com/shuind/dsh-codex-harness/blob/398852d586489408544bf7873011853504cc8a7d/package.json) → [patch](https://github.com/shuind/dsh-codex-harness/blob/398852d586489408544bf7873011853504cc8a7d/cordis.patch.yml) · **身份:** `@shuind/dsh-codex-harness`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `codex-provider` `model-tools` `preset-install` `filesystem-write` `prepare-build` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

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

- **Kabutack** · [SunQingyuan0/Kabutack@3e257a2](https://github.com/SunQingyuan0/Kabutack/commit/3e257a287a424a154ff92bed9bb0e871f2f540cc) — Kabutack 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SunQingyuan0/Kabutack/blob/3e257a287a424a154ff92bed9bb0e871f2f540cc/package.json) → [patch](https://github.com/SunQingyuan0/Kabutack/blob/3e257a287a424a154ff92bed9bb0e871f2f540cc/cordis.patch.yml) · **身份:** `@dsh-external/kabutack`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `postinstall` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `mcp` `process-control` `postinstall` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Gateway Core** · [temotee2103/dsh-overdrive@0f865f2](https://github.com/temotee2103/dsh-overdrive/commit/0f865f23004d2e25e4a816e559628d558c16d9e6) — Gateway Core 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/temotee2103/dsh-overdrive/blob/0f865f23004d2e25e4a816e559628d558c16d9e6/packages/gateway-core/package.json) → [patch](https://github.com/temotee2103/dsh-overdrive/blob/0f865f23004d2e25e4a816e559628d558c16d9e6/packages/gateway-core/cordis.patch.yml) · **身份:** `@dsh-overdrive/gateway-core`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `docker` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Bridge** · [Totoro-qaq/dsh-plugin-bridge@1afbdae](https://github.com/Totoro-qaq/dsh-plugin-bridge/commit/1afbdaeac1cf4e021794a505b4eabde1e2291f75) — DSH Plugin Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Totoro-qaq/dsh-plugin-bridge/blob/1afbdaeac1cf4e021794a505b4eabde1e2291f75/package.json) → [patch](https://github.com/Totoro-qaq/dsh-plugin-bridge/blob/1afbdaeac1cf4e021794a505b4eabde1e2291f75/cordis.patch.yml) · **身份:** `dsh-plugin-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `system-prompt` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH MQTT** · [UllrAI/dsh-mqtt@38b0caf](https://github.com/UllrAI/dsh-mqtt/commit/38b0caf784fa0384ee33cc52fe87a8b753873e36) — 为 DSH 提供 MQTT 协议驱动与 Agent Worker 网关。
  - **证据:** [manifest](https://github.com/UllrAI/dsh-mqtt/blob/38b0caf784fa0384ee33cc52fe87a8b753873e36/package.json) → [patch](https://github.com/UllrAI/dsh-mqtt/blob/38b0caf784fa0384ee33cc52fe87a8b753873e36/cordis.patch.yml) · **身份:** `dsh-mqtt`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `mqtt` `external-network` `agent-worker` `message-routing` `prepare-build` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH LLM USTC** · [USTC-XeF2/dsh-llm-ustc@6290fbb](https://github.com/USTC-XeF2/dsh-llm-ustc/commit/6290fbbebb05d0d3658af8fbc388c0918106714b) — 带 Provider 级 iWAN 隧道的 USTC 大模型服务接入。
  - **证据:** [manifest](https://github.com/USTC-XeF2/dsh-llm-ustc/blob/6290fbbebb05d0d3658af8fbc388c0918106714b/package.json) → [patch](https://github.com/USTC-XeF2/dsh-llm-ustc/blob/6290fbbebb05d0d3658af8fbc388c0918106714b/cordis.patch.yml) · **身份:** `dsh-llm-ustc`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `model-provider` `credentials` `network-tunnel` `external-network` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH LLM NewAPI** · [wenzetan/dsh-llm-newapi@99599d3](https://github.com/wenzetan/dsh-llm-newapi/commit/99599d31f173715f6ce852afe7f6042fdc1ee656) — 在 DSH 中注册兼容 OpenAI Chat Completions 的 NewAPI 供应商路由。
  - **证据:** [manifest](https://github.com/wenzetan/dsh-llm-newapi/blob/99599d31f173715f6ce852afe7f6042fdc1ee656/package.json) → [patch](https://github.com/wenzetan/dsh-llm-newapi/blob/99599d31f173715f6ce852afe7f6042fdc1ee656/cordis.patch.yml) · **身份:** `dsh-llm-newapi`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `llm-provider` `openai-compatible` `external-network` `credentials` `prepack-build` · **核验备注:** 固定源码对应 Registry next 版本，稳定标签具有相同基础版本；未执行供应商请求、凭据访问或构建。

- **DSH OpenCode Go Usage** · [Xenia0922/dsh-opencode-go-usage@f7a7192](https://github.com/Xenia0922/dsh-opencode-go-usage/commit/f7a71928f0c5040a58cf45f6e41e4ac05da43317) — 展示 OpenCode Go 配额、逐请求用量与费用的可拖拽仪表盘。
  - **证据:** [manifest](https://github.com/Xenia0922/dsh-opencode-go-usage/blob/f7a71928f0c5040a58cf45f6e41e4ac05da43317/package.json) → [patch](https://github.com/Xenia0922/dsh-opencode-go-usage/blob/f7a71928f0c5040a58cf45f6e41e4ac05da43317/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `account-quota` `cost-estimation` `external-network` `client-injection` `identity-collision` · **核验备注:** npm 身份映射到其他仓库，因此本记录仅固定到文档中的本地源码，不主张该 npm 包。

- **Usage Stats** · [xfqz86/dsh-usage-stats@a90299b](https://github.com/xfqz86/dsh-usage-stats/commit/a90299b7d1b0506ead27d4176f8f33756bd7a60a) — Usage Stats 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xfqz86/dsh-usage-stats/blob/a90299b7d1b0506ead27d4176f8f33756bd7a60a/package.json) → [patch](https://github.com/xfqz86/dsh-usage-stats/blob/a90299b7d1b0506ead27d4176f8f33756bd7a60a/cordis.patch.yml) · **身份:** `@xfqz86/dsh-usage-stats`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `session-data` `model-tools` `financial` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH NebulaGraph** · [xiajingchun/dsh-nebulagraph-v5@0f95d35](https://github.com/xiajingchun/dsh-nebulagraph-v5/commit/0f95d35f0704c1fc47131cbcf0d4de4a81a4bde4) — 将 DSH 连接到 NebulaGraph 5，并提供 GQL 查询结果与图可视化数据。
  - **证据:** [manifest](https://github.com/xiajingchun/dsh-nebulagraph-v5/blob/0f95d35f0704c1fc47131cbcf0d4de4a81a4bde4/package.json) → [patch](https://github.com/xiajingchun/dsh-nebulagraph-v5/blob/0f95d35f0704c1fc47131cbcf0d4de4a81a4bde4/cordis.patch.yml) · **身份:** `dsh-nebula`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `nebulagraph` `database-query` `external-network` `credentials` `model-tools` `prepare-build` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

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

- **CBX Orch** · [zerosloney/dsh-cbx-orch@b663102](https://github.com/zerosloney/dsh-cbx-orch/commit/b663102c965a8e09b519e0546832bc289c28f6c3) — CBX Orch 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zerosloney/dsh-cbx-orch/blob/b663102c965a8e09b519e0546832bc289c28f6c3/package.json) → [patch](https://github.com/zerosloney/dsh-cbx-orch/blob/b663102c965a8e09b519e0546832bc289c28f6c3/cordis.patch.yml) · **身份:** `dsh-cbx-orch`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `mcp` `database` `session-data` `model-tools` `package-install` `multi-agent` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH IM Gateway** · [zhuiyueya/dsh-im-gateway@f4b166d](https://github.com/zhuiyueya/dsh-im-gateway/commit/f4b166d5bb896d640515d7bfd887db37cc735f4a) — 统一接入二十余种消息渠道的会话、审批、白名单与配置网关。
  - **证据:** [manifest](https://github.com/zhuiyueya/dsh-im-gateway/blob/f4b166d5bb896d640515d7bfd887db37cc735f4a/package.json) → [patch](https://github.com/zhuiyueya/dsh-im-gateway/blob/f4b166d5bb896d640515d7bfd887db37cc735f4a/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `instant-messaging` `credentials` `session-data` `approval-forwarding` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Weixin** · [zp-home/dsh-weixin-clawbot@75845ed](https://github.com/zp-home/dsh-weixin-clawbot/commit/75845ed976ad89b1244b059fca131c0839a4c46c) — Weixin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zp-home/dsh-weixin-clawbot/blob/75845ed976ad89b1244b059fca131c0839a4c46c/package.json) → [patch](https://github.com/zp-home/dsh-weixin-clawbot/blob/75845ed976ad89b1244b059fca131c0839a4c46c/cordis.patch.yml) · **身份:** `@local/dsh-weixin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `filesystem-write` `session-data` `system-prompt` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **Code Pipeline** · [ErrorLst/dsh-code-pipeline@2899dc3](https://github.com/ErrorLst/dsh-code-pipeline/commit/2899dc38c38b5cf42592c6107fb968d0cbe21ade) — DSH bundle plugin: 为 code-pipeline 预设（PTC 流水线）动态注入阶段子代理工具（subagent_plan / subagent_impl / subagent_review），各阶段 provider/model/思考等级可在设置页（Settings → 代码流水线）实时配置并持久化到 settings.yaml；预设文件随项目在 preset/ 目录维护，首次启动自动安装到 $DSH_HOME/.agent-presets（见 README）
  - **证据:** [manifest](https://github.com/ErrorLst/dsh-code-pipeline/blob/2899dc38c38b5cf42592c6107fb968d0cbe21ade/package.json) → [patch](https://github.com/ErrorLst/dsh-code-pipeline/blob/2899dc38c38b5cf42592c6107fb968d0cbe21ade/cordis.patch.yml) · **身份:** `@dsh-external/dsh-code-pipeline`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `model-tools` `package-install` `multi-agent` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH LookatStudy** · [Kaiji-Z/dsh-plugin-lookatstudy@298dde9](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy/commit/298dde9258ea9a84b03cc719e508212044227ad9) — 把 Markdown、文件夹或 GitHub 学习仓库转为带掌握度与间隔重复的引导课程。
  - **证据:** [manifest](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy/blob/298dde9258ea9a84b03cc719e508212044227ad9/package.json) → [patch](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy/blob/298dde9258ea9a84b03cc719e508212044227ad9/cordis.patch.yml) · **身份:** `dsh-plugin-lookatstudy`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `guided-learning` `filesystem-read` `github-import` `persistent-state` `model-tools` `web-ui` · **核验备注:** 固定源码与 npm 0.9.0 一致，并声明较宽的 Peer 范围；未执行仓库导入、课程生成、学习状态、工具或面板。

- **Gitbash Shell** · [KannaKuron/dsh-gitbash-shell@1053ec5](https://github.com/KannaKuron/dsh-gitbash-shell/commit/1053ec51142d365059267005a7cb84c2de7065a9) — Gitbash Shell 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/KannaKuron/dsh-gitbash-shell/blob/1053ec51142d365059267005a7cb84c2de7065a9/package.json) → [patch](https://github.com/KannaKuron/dsh-gitbash-shell/blob/1053ec51142d365059267005a7cb84c2de7065a9/cordis.patch.yml) · **身份:** `dsh-gitbash-shell`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Zhihu Search** · [klarkxy/zhihu-search@e1e2fed](https://github.com/klarkxy/zhihu-search/commit/e1e2fedf20336933365da761fa07d30e704a749f) — Zhihu Search 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/klarkxy/zhihu-search/blob/e1e2fedf20336933365da761fa07d30e704a749f/package.json) → [patch](https://github.com/klarkxy/zhihu-search/blob/e1e2fedf20336933365da761fa07d30e704a749f/dsh-plugin/cordis.patch.yml) · **身份:** `dsh-plugin-zhihu-search`
  - **许可证:** repo `MIT` / package `SEE LICENSE IN LICENSE` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `mcp` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Skill Panel** · [KuramiWan/dshp-skill-panel@2cfdd4d](https://github.com/KuramiWan/dshp-skill-panel/commit/2cfdd4dd8c0eb3ffd796ef39c4e83520c3ce8d61) — Skill Panel 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/KuramiWan/dshp-skill-panel/blob/2cfdd4dd8c0eb3ffd796ef39c4e83520c3ce8d61/package.json) → [patch](https://github.com/KuramiWan/dshp-skill-panel/blob/2cfdd4dd8c0eb3ffd796ef39c4e83520c3ce8d61/cordis.patch.yml) · **身份:** `@super_camel/dsh-skill-panel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `mcp` `session-data` `package-install` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **API Visualizer** · [lemonmmice/dsh-api-visualizer@054dd8f](https://github.com/lemonmmice/dsh-api-visualizer/commit/054dd8f2fea61fc550426d1fb8b13bd768ca1529) — API Visualizer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lemonmmice/dsh-api-visualizer/blob/054dd8f2fea61fc550426d1fb8b13bd768ca1529/package.json) → [patch](https://github.com/lemonmmice/dsh-api-visualizer/blob/054dd8f2fea61fc550426d1fb8b13bd768ca1529/cordis.patch.yml) · **身份:** `@linxin666/dsh-api-visualizer`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Postman** · [lemonmmice/dsh-postman@dda3cc8](https://github.com/lemonmmice/dsh-postman/commit/dda3cc8d41111d0fd3319d3776d39e8274a2ec2a) — Postman 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lemonmmice/dsh-postman/blob/dda3cc8d41111d0fd3319d3776d39e8274a2ec2a/package.json) → [patch](https://github.com/lemonmmice/dsh-postman/blob/dda3cc8d41111d0fd3319d3776d39e8274a2ec2a/cordis.patch.yml) · **身份:** `@linxin666/dsh-postman`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `model-tools` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Gongwen Skill** · [linhut/gongwen-skill@e5a277e](https://github.com/linhut/gongwen-skill/commit/e5a277ea685e3462608d3f3f8c02f108fada642a) — 用于 GB/T 9704 格式检查、修复、优化、模板生成与版式注入的中文公文流程。
  - **证据:** [manifest](https://github.com/linhut/gongwen-skill/blob/e5a277ea685e3462608d3f3f8c02f108fada642a/package.json) → [patch](https://github.com/linhut/gongwen-skill/blob/e5a277ea685e3462608d3f3f8c02f108fada642a/cordis.patch.yml) · **身份:** `gongwen-skill`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `document-processing` `subprocess` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Superpowers FOR** · [Meteor-system/superpowers-for-dsh@b4c10fe](https://github.com/Meteor-system/superpowers-for-dsh/commit/b4c10feff4fae46c3d73f13de1cae891e0818414) — Superpowers FOR 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Meteor-system/superpowers-for-dsh/blob/b4c10feff4fae46c3d73f13de1cae891e0818414/package.json) → [patch](https://github.com/Meteor-system/superpowers-for-dsh/blob/b4c10feff4fae46c3d73f13de1cae891e0818414/cordis.patch.yml) · **身份:** `superpowers-for-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `session-data` `web-search` `multi-agent` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Agent Skills** · [minivv/dsh-agent-skills@f753b09](https://github.com/minivv/dsh-agent-skills/commit/f753b0992564202dda6da0ab71fa2179054137a4) — 在 DSH 中发现并管理 Claude Code、Codex、Gemini CLI 等工具的 Agent Skills。
  - **证据:** [manifest](https://github.com/minivv/dsh-agent-skills/blob/f753b0992564202dda6da0ab71fa2179054137a4/package.json) → [patch](https://github.com/minivv/dsh-agent-skills/blob/f753b0992564202dda6da0ab71fa2179054137a4/cordis.patch.yml) · **身份:** `dsh-agent-skills`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `skill-management` `filesystem-read` `filesystem-write` `client-injection` `prepare-build` · **核验备注:** 固定源码为 0.1.2，同仓库 npm 已发布 0.1.7；未执行构建、技能扫描或 Preset 写入。

- **DSH HTB Skills** · [qingsiweisan/dsh-htb-skills@d04c3d0](https://github.com/qingsiweisan/dsh-htb-skills/commit/d04c3d04385cff83eb5db27a77faa7b3d0342125) — 带分层路由与隐藏参考层的 Hack The Box 渗透测试技能库。
  - **证据:** [manifest](https://github.com/qingsiweisan/dsh-htb-skills/blob/d04c3d04385cff83eb5db27a77faa7b3d0342125/package.json) → [patch](https://github.com/qingsiweisan/dsh-htb-skills/blob/d04c3d04385cff83eb5db27a77faa7b3d0342125/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `security-testing` `prompt-injection` `local-install` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Rotifer** · [rotifer-protocol/rotifer-playground@43eda46](https://github.com/rotifer-protocol/rotifer-playground/commit/43eda46b16fe5d915d4e1ddb6b5dcd1c5a489a83) — Rotifer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/rotifer-protocol/rotifer-playground/blob/43eda46b16fe5d915d4e1ddb6b5dcd1c5a489a83/plugins/rotifer/package.json) → [patch](https://github.com/rotifer-protocol/rotifer-playground/blob/43eda46b16fe5d915d4e1ddb6b5dcd1c5a489a83/plugins/rotifer/cordis.patch.yml) · **身份:** `rotifer`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `browser` `database` `session-data` `package-install` `web-search` `financial` `nested-bundle` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Wiki** · [skillre/dsh-wiki@b6dfa3a](https://github.com/skillre/dsh-wiki/commit/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4) — 把仓库型 Wiki 技能与文档流程接入 DSH 的 bundle。
  - **证据:** [manifest](https://github.com/skillre/dsh-wiki/blob/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4/package.json) → [patch](https://github.com/skillre/dsh-wiki/blob/b6dfa3a7f3eec5de3d8c45fe2ca3e61314ddadc4/cordis.patch.yml) · **身份:** `dsh-wiki`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `documentation` `package-bundle` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Flashcard** · [tyfforu/dsh-flashcard@9c58eed](https://github.com/tyfforu/dsh-flashcard/commit/9c58eed456f9e6e9ac4066f1474b61a96da265f4) — Flashcard 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/tyfforu/dsh-flashcard/blob/9c58eed456f9e6e9ac4066f1474b61a96da265f4/package.json) → [patch](https://github.com/tyfforu/dsh-flashcard/blob/9c58eed456f9e6e9ac4066f1474b61a96da265f4/cordis.patch.yml) · **身份:** `dsh-flashcard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `package-install` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **ANY Skills** · [wmengxiang/dsh-any-skills@280e945](https://github.com/wmengxiang/dsh-any-skills/commit/280e94518118cbb74cd0ee29dc24b8cc4d24d7a1) — Import, install and invoke Agent Skills in DeepSeek Harness from Codex, Claude Code, OpenCode, GitHub or npm — with a composer-side skill picker. · 从 Codex / Claude Code / OpenCode / GitHub / npm 导入并安装技能到 ~/.dsh/skills，支持 composer 旁一键插入 /skill-name 调用。
  - **证据:** [manifest](https://github.com/wmengxiang/dsh-any-skills/blob/280e94518118cbb74cd0ee29dc24b8cc4d24d7a1/package.json) → [patch](https://github.com/wmengxiang/dsh-any-skills/blob/280e94518118cbb74cd0ee29dc24b8cc4d24d7a1/cordis.patch.yml) · **身份:** `dsh-any-skills`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `browser` `package-install` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Skill Select** · [wyzh0117/dsh-skill-select@f1834b3](https://github.com/wyzh0117/dsh-skill-select/commit/f1834b3b0e1cf4ff2ff4b0642abce0711ce3a081) — Skill Select 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wyzh0117/dsh-skill-select/blob/f1834b3b0e1cf4ff2ff4b0642abce0711ce3a081/package.json) → [patch](https://github.com/wyzh0117/dsh-skill-select/blob/f1834b3b0e1cf4ff2ff4b0642abce0711ce3a081/cordis.patch.yml) · **身份:** `dsh-skill-select`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Lazeword** · [xczhanjun/lazeword@c65f598](https://github.com/xczhanjun/lazeword/commit/c65f59886eecbf8ba7ce29d522493321a81c63a0) — 带 FSRS 调度、Anki 同步、学科词库与学习游戏的离线背词工具。
  - **证据:** [manifest](https://github.com/xczhanjun/lazeword/blob/c65f59886eecbf8ba7ce29d522493321a81c63a0/package.json) → [patch](https://github.com/xczhanjun/lazeword/blob/c65f59886eecbf8ba7ce29d522493321a81c63a0/cordis.patch.yml) · **身份:** `dsh-lazeword`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `education` `spaced-repetition` `anki` `browser-storage` `prepublish-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Skills Nexus** · [xiaxi626/dsh-skills-nexus@3abfb97](https://github.com/xiaxi626/dsh-skills-nexus/commit/3abfb973f2a6dd4afb2a94276d50104e63bd96ee) — Skills Nexus 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xiaxi626/dsh-skills-nexus/blob/3abfb973f2a6dd4afb2a94276d50104e63bd96ee/package.json) → [patch](https://github.com/xiaxi626/dsh-skills-nexus/blob/3abfb973f2a6dd4afb2a94276d50104e63bd96ee/cordis.patch.yml) · **身份:** `dsh-skills-nexus`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `filesystem-read` `subprocess` `process-control` `session-data` `package-install` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Math Research DSH** · [xsoc1/math-research-dsh@a5e6373](https://github.com/xsoc1/math-research-dsh/commit/a5e63739cd446c76258c050d9b053781dae9bae6) — 包含四个 Agent 技能、Lean 验证、测试与环境诊断的严谨数学研究套件。
  - **证据:** [manifest](https://github.com/xsoc1/math-research-dsh/blob/a5e63739cd446c76258c050d9b053781dae9bae6/package.json) → [patch](https://github.com/xsoc1/math-research-dsh/blob/a5e63739cd446c76258c050d9b053781dae9bae6/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `mathematics` `formal-verification` `environment-diagnostics` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Furrhaven Toolbox** · [YJLZSL/dsh-furrhaven-toolbox@473cdd6](https://github.com/YJLZSL/dsh-furrhaven-toolbox/commit/473cdd68f3271bab5db783b204d58ed01bbe3243) — 提供角色卡创作、校验、世界书模拟、正则测试、识图与扮演工具。
  - **证据:** [manifest](https://github.com/YJLZSL/dsh-furrhaven-toolbox/blob/473cdd68f3271bab5db783b204d58ed01bbe3243/dsh/plugin/fh-tools/package.json) → [patch](https://github.com/YJLZSL/dsh-furrhaven-toolbox/blob/473cdd68f3271bab5db783b204d58ed01bbe3243/dsh/plugin/fh-tools/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `character-authoring` `model-tools` `vision` `subprocess` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH J-Space Warm** · [zbsph/dsh-j-space-warm@6060c0f](https://github.com/zbsph/dsh-j-space-warm/commit/6060c0f2ef2f0c3e2f04e2c05d323c3a6dff0164) — 安装带两阶段启动、预热与漂移检查的 J-Space Anchored Warm Agent 预设。
  - **证据:** [manifest](https://github.com/zbsph/dsh-j-space-warm/blob/6060c0f2ef2f0c3e2f04e2c05d323c3a6dff0164/package.json) → [patch](https://github.com/zbsph/dsh-j-space-warm/blob/6060c0f2ef2f0c3e2f04e2c05d323c3a6dff0164/cordis.patch.yml) · **身份:** `dsh-j-space-warm`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `agent-presets` `system-prompt` `filesystem-write` `drift-detection` `github-only` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

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

- **DSH Plugin Audit** · [863683348/dsh-plugin-audit@2cbd6ab](https://github.com/863683348/dsh-plugin-audit/commit/2cbd6abf4ff6fe042464b6fa42455e84bf353d2f) — 通过 GitHub 发现、npm 探测、静态扫描、评分与榜单审计 DSH 插件健康度。
  - **证据:** [manifest](https://github.com/863683348/dsh-plugin-audit/blob/2cbd6abf4ff6fe042464b6fa42455e84bf353d2f/package.json) → [patch](https://github.com/863683348/dsh-plugin-audit/blob/2cbd6abf4ff6fe042464b6fa42455e84bf353d2f/cordis.patch.yml) · **身份:** `dsh-audit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-read` `static-analysis` `web-ui` `model-tools` `source-behind-registry` · **核验备注:** 固定源码为 0.2.0，而同一身份的 npm 最新为 0.4.0；未执行仓库同步、Registry 探测、扫描或模型工具。

- **DSH Safe Plugin Manager** · [AI-Scarlett/dsh-safe-plugin-manager@993cfd3](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/commit/993cfd3fe33227b422dba316c3d2f7d4fa1db565) — 一个仅面向 GitHub 的插件目录和受控 Profile 生命周期管理器，提供计划、确认、备份、检查与回滚。
  - **证据:** [manifest](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/blob/993cfd3fe33227b422dba316c3d2f7d4fa1db565/package.json) → [patch](https://github.com/AI-Scarlett/dsh-safe-plugin-manager/blob/993cfd3fe33227b422dba316c3d2f7d4fa1db565/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `UNLICENSED` · 生命周期 `none` · peer range 混合
  - **能力信号:** `package-management` `filesystem-write` `subprocess` `external-network` `high-trust-surface` · **核验备注:** 该 private、UNLICENSED 包被记录为仅 GitHub 来源；未执行 Profile 修改、备份、子进程、远程目录或回滚。

- **Safe Plugin Manager** · [AI-Scarlett/DSH-Store@b2b8e01](https://github.com/AI-Scarlett/DSH-Store/commit/b2b8e01f57cf0bbb3378e46905757e036eec10f6) — Safe Plugin Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AI-Scarlett/DSH-Store/blob/b2b8e01f57cf0bbb3378e46905757e036eec10f6/package.json) → [patch](https://github.com/AI-Scarlett/DSH-Store/blob/b2b8e01f57cf0bbb3378e46905757e036eec10f6/cordis.patch.yml) · **身份:** `dsh-safe-plugin-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `mcp` `package-install` `plugin-management` `vision` `audio` `email` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Multi Model Provider** · [AlexKaiqi/dsh-multi-model-provider@68d82f1](https://github.com/AlexKaiqi/dsh-multi-model-provider/commit/68d82f18aae9de4c5104e0784d2463bfbd3a53f8) — Multi Model Provider 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AlexKaiqi/dsh-multi-model-provider/blob/68d82f18aae9de4c5104e0784d2463bfbd3a53f8/package.json) → [patch](https://github.com/AlexKaiqi/dsh-multi-model-provider/blob/68d82f18aae9de4c5104e0784d2463bfbd3a53f8/cordis.patch.yml) · **身份:** `dsh-multi-model-provider`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `process-control` `session-data` `model-tools` `package-install` `vision` `audio` `financial` `theme` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Console** · [AlexYin-Tongji/dsh-plugin-console@7c72201](https://github.com/AlexYin-Tongji/dsh-plugin-console/commit/7c72201174d0df601737be52586246f14b8fd767) — DSH Plugin Console 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AlexYin-Tongji/dsh-plugin-console/blob/7c72201174d0df601737be52586246f14b8fd767/package.json) → [patch](https://github.com/AlexYin-Tongji/dsh-plugin-console/blob/7c72201174d0df601737be52586246f14b8fd767/cordis.patch.yml) · **身份:** `dsh-plugin-console`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Failure Lens** · [ArmyWas/dsh-failure-lens@bc0a834](https://github.com/ArmyWas/dsh-failure-lens/commit/bc0a8344b6096ef992a06d635e3ba7c4c2088157) — DSH Failure Lens 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ArmyWas/dsh-failure-lens/blob/bc0a8344b6096ef992a06d635e3ba7c4c2088157/package.json) → [patch](https://github.com/ArmyWas/dsh-failure-lens/blob/bc0a8344b6096ef992a06d635e3ba7c4c2088157/cordis.patch.yml) · **身份:** `dsh-failure-lens`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `subprocess` `filesystem` `external-network` `credentials` `client-injection` `native-helper` `process-control` `system-prompt` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Codsh Cli** · [Blackman99/codsh@1ed17e0](https://github.com/Blackman99/codsh/commit/1ed17e0d226a83f29825b3116cd8af7a3b6b5faf) — Codsh Cli 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Blackman99/codsh/blob/1ed17e0d226a83f29825b3116cd8af7a3b6b5faf/package.json) → [patch](https://github.com/Blackman99/codsh/blob/1ed17e0d226a83f29825b3116cd8af7a3b6b5faf/cordis.patch.yml) · **身份:** `codsh-cli`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `system-prompt` `prepublish-only` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Web Billing** · [bpc-oss/dsh-web-billing@27f3750](https://github.com/bpc-oss/dsh-web-billing/commit/27f3750d23ee08af1b8aa7d9843d470d26eadf67) — 在 DSH Web 中跟踪 Token 成本、价格时段、消息账本与 Provider 账户余额。
  - **证据:** [manifest](https://github.com/bpc-oss/dsh-web-billing/blob/27f3750d23ee08af1b8aa7d9843d470d26eadf67/package.json) → [patch](https://github.com/bpc-oss/dsh-web-billing/blob/27f3750d23ee08af1b8aa7d9843d470d26eadf67/cordis.patch.yml) · **身份:** `dsh-web-billing`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `billing-data` `token-meter` `external-network` `credentials` `filesystem-write` `client-injection` · **核验备注:** 固定源码记录了 GitHub 安装方式，npm 无同名包；未执行价格同步、凭据解析、余额请求、账本写入或发布前检查。

- **DSH Plug Manager** · [Casually/deepseek-harness-plugs-manage@be8112f](https://github.com/Casually/deepseek-harness-plugs-manage/commit/be8112f423d4d20a2df4e286552f9e1b2a28052b) — DSH Plug Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Casually/deepseek-harness-plugs-manage/blob/be8112f423d4d20a2df4e286552f9e1b2a28052b/package.json) → [patch](https://github.com/Casually/deepseek-harness-plugs-manage/blob/be8112f423d4d20a2df4e286552f9e1b2a28052b/cordis.patch.yml) · **身份:** `dsh-plug-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Monitor** · [Coco-king/dsh-monitor@9d318dc](https://github.com/Coco-king/dsh-monitor/commit/9d318dcc9f2e700b88b1ef9d7e1eab2aa61c9760) — 在 DSH Web 界面展示会话费用及可配置的提供方用量或配额数据。
  - **证据:** [manifest](https://github.com/Coco-king/dsh-monitor/blob/9d318dcc9f2e700b88b1ef9d7e1eab2aa61c9760/package.json) → [patch](https://github.com/Coco-king/dsh-monitor/blob/9d318dcc9f2e700b88b1ef9d7e1eab2aa61c9760/cordis.patch.yml) · **身份:** `dsh-monitor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `billing-data` `provider-usage` `external-network` `credentials` `filesystem-write` `client-injection` · **核验备注:** 文档中的 Git 安装标签指向固定提交，许可证与 bundle 结构完整；未执行提供方请求、凭据访问或 UI 代码。

- **DSH Hub Search** · [coderPerseus/dsh-hub@4dc755a](https://github.com/coderPerseus/dsh-hub/commit/4dc755a4e300d0994158405e86e6e0d9a9b7df09) — 增加用于搜索和检查远程 DSH Hub 目录中插件记录的工具。
  - **证据:** [manifest](https://github.com/coderPerseus/dsh-hub/blob/4dc755a4e300d0994158405e86e6e0d9a9b7df09/packages/dsh-plugin/package.json) → [patch](https://github.com/coderPerseus/dsh-hub/blob/4dc755a4e300d0994158405e86e6e0d9a9b7df09/packages/dsh-plugin/cordis.patch.yml) · **身份:** `@dshhubs/plugin-search`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `remote-catalog` `plugin-metadata` `install-command-data` · **核验备注:** 公开包身份与源码 bundle 一致，其工具读取远程目录元数据和安装文本；未执行请求或安装。

- **Skills Marketplace** · [cxdyun/dsh-skills-marketplace@3e26404](https://github.com/cxdyun/dsh-skills-marketplace/commit/3e26404afdcbe993f6abc07a221c7e3deb25f34b) — DSH 仓库技能市场管理器:按 仓库地址+分支+稀疏路径 拉取插件/技能,安装进 ~/.dsh/skills,在设置页以插件维度管理
  - **证据:** [manifest](https://github.com/cxdyun/dsh-skills-marketplace/blob/3e26404afdcbe993f6abc07a221c7e3deb25f34b/package.json) → [patch](https://github.com/cxdyun/dsh-skills-marketplace/blob/3e26404afdcbe993f6abc07a221c7e3deb25f34b/cordis.patch.yml) · **身份:** `dsh-skills-marketplace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `mcp` `model-tools` `package-install` `vision` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Desktop Plugin Installer** · [deronghe/dsh-plugin-desktop-installer@210522b](https://github.com/deronghe/dsh-plugin-desktop-installer/commit/210522b440c6bd433206787e7ea5095728d4c14f) — 在桌面设置中提供插件安装、启停、卸载与重启控制。
  - **证据:** [manifest](https://github.com/deronghe/dsh-plugin-desktop-installer/blob/210522b440c6bd433206787e7ea5095728d4c14f/package.json) → [patch](https://github.com/deronghe/dsh-plugin-desktop-installer/blob/210522b440c6bd433206787e7ea5095728d4c14f/cordis.patch.yml) · **身份:** `dsh-plugin-desktop-installer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `subprocess` `profile-write` `desktop-restart` `local-http-server` `github-only` · **核验备注:** 已记录 GitHub 安装方式；仅静态核对命令执行、Profile 修改、卸载与桌面重启接口，均未调用。

- **DSH Market** · [dsh-market/dsh-market@3188f46](https://github.com/dsh-market/dsh-market/commit/3188f465779d25dc2d41f53cdf21334bef517ac3) — 可在 Harness 内浏览、安装、更新和移除第三方包的插件市场。
  - **证据:** [manifest](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/package.json) → [patch](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/cordis.patch.yml) · **身份:** `dshmarket`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `package-management` `remote-registry` `high-trust-surface` · **核验备注:** 包管理控制使其成为高信任能力面；收录不代表背书。

- **Plugin** · [dshplugin/dsh-plugin-hub@92f2013](https://github.com/dshplugin/dsh-plugin-hub/commit/92f201337817687925ee845b310b335395b79820) — A community plugin marketplace for DeepSeek Harness, built to the official plugin spec — browse, search and install 4000+ human-curated community plugins without leaving the app. · DeepSeek Harness 社区插件市场（遵循官方开发规范）：4000+ 人工精选社区插件，每日更新。
  - **证据:** [manifest](https://github.com/dshplugin/dsh-plugin-hub/blob/92f201337817687925ee845b310b335395b79820/package.json) → [patch](https://github.com/dshplugin/dsh-plugin-hub/blob/92f201337817687925ee845b310b335395b79820/cordis.patch.yml) · **身份:** `dsh-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `plugin-management` `vision` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Plugin Store** · [Ericwong5021/deepseek-plugin-store@4c814ab](https://github.com/Ericwong5021/deepseek-plugin-store/commit/4c814abcecf5a15629fa75e8bcab15859dffe941) — DeepSeek 插件商店开源数据源 · Open source data source for the DeepSeek Plugin Store
  - **证据:** [manifest](https://github.com/Ericwong5021/deepseek-plugin-store/blob/4c814abcecf5a15629fa75e8bcab15859dffe941/package.json) → [patch](https://github.com/Ericwong5021/deepseek-plugin-store/blob/4c814abcecf5a15629fa75e8bcab15859dffe941/cordis.patch.yml) · **身份:** `deepseek-plugin-store`
  - **许可证:** repo `CC0-1.0` / package `CC0-1.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `browser` `database` `session-data` `system-prompt` `model-tools` `plugin-management` `web-search` `vision` `audio` `email` `financial` `multi-agent` `theme` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Skill MCP Panel** · [Fishquito7/dsh-skill-mcp-panel@92a471d](https://github.com/Fishquito7/dsh-skill-mcp-panel/commit/92a471dfbffe7df4b6fbb7a6f77f50f45047a765) — 通过 DSH Web 设置与配套 Panel CLI 管理 Skills 和 MCP Servers。
  - **证据:** [manifest](https://github.com/Fishquito7/dsh-skill-mcp-panel/blob/92a471dfbffe7df4b6fbb7a6f77f50f45047a765/package.json) → [patch](https://github.com/Fishquito7/dsh-skill-mcp-panel/blob/92a471dfbffe7df4b6fbb7a6f77f50f45047a765/cordis.patch.yml) · **身份:** `dsh-skill-mcp-panel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `skill-management` `mcp-management` `filesystem-write` `subprocess` `configuration-write` `client-injection` `prepack-build` · **核验备注:** 存在固定根目录 Git 源码，npm 无同名包；未执行 Skill 或 MCP 变更、子进程、配置写入、Client Panel 或预打包构建。

- **DSH Skill Viewer** · [Fishquito7/dsh-skill-viewer@55c16e4](https://github.com/Fishquito7/dsh-skill-viewer/commit/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94) — 在 Web 设置页与 CLI 中列出、分域、启停、添加和删除技能。
  - **证据:** [manifest](https://github.com/Fishquito7/dsh-skill-viewer/blob/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94/package.json) → [patch](https://github.com/Fishquito7/dsh-skill-viewer/blob/55c16e4e4978a5e1cb96203e9ff89b6cf1078b94/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `skill-management` `filesystem-write` `client-injection` `prepack-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Index** · [GGigHub/dsh-plugin-index@41fcb76](https://github.com/GGigHub/dsh-plugin-index/commit/41fcb7688e6d58d09dd953c87dfe1af54ce9a883) — 基于 GitHub 星标的插件浏览器，提供安装、卸载、更新与修复操作。
  - **证据:** [manifest](https://github.com/GGigHub/dsh-plugin-index/blob/41fcb7688e6d58d09dd953c87dfe1af54ce9a883/package.json) → [patch](https://github.com/GGigHub/dsh-plugin-index/blob/41fcb7688e6d58d09dd953c87dfe1af54ce9a883/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `external-network` `filesystem-write` `package-install` `github-only` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Usage** · [GHJIVHIDD/dsh-plugin-usage@c352ba0](https://github.com/GHJIVHIDD/dsh-plugin-usage/commit/c352ba01379b0be9b49fa4265c1e033f5dbd680d) — 提供实时代币与成本看板、价格估算以及 CSV 或 JSON 导出。
  - **证据:** [manifest](https://github.com/GHJIVHIDD/dsh-plugin-usage/blob/c352ba01379b0be9b49fa4265c1e033f5dbd680d/package.json) → [patch](https://github.com/GHJIVHIDD/dsh-plugin-usage/blob/c352ba01379b0be9b49fa4265c1e033f5dbd680d/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-plugin-usage`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `token-meter` `billing-data` `session-data` `client-injection` `data-export` `github-only` · **核验备注:** 包使用官方 Namespace 但 npm 无匹配身份，固定根目录 Git Bundle 结构完整；未执行用量流、计价、导出或 Client UI。

- **Model Sync** · [GooDAnDReaDY/dsh-model-sync@cf864ae](https://github.com/GooDAnDReaDY/dsh-model-sync/commit/cf864aec6ef215d895b4c6848cbe06dd792233ce) — Model Sync 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/GooDAnDReaDY/dsh-model-sync/blob/cf864aec6ef215d895b4c6848cbe06dd792233ce/package.json) → [patch](https://github.com/GooDAnDReaDY/dsh-model-sync/blob/cf864aec6ef215d895b4c6848cbe06dd792233ce/cordis.patch.yml) · **身份:** `@goodandready/dsh-model-sync`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `model-tools` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Harness Flow Hub** · [Harzva/harness-flow-hub@25b23c2](https://github.com/Harzva/harness-flow-hub/commit/25b23c25198c8fafef166060bf054870511fc2fd) — 带事务式插件安装、回滚与浏览器界面的 DSH 内置流程中心原型。
  - **证据:** [manifest](https://github.com/Harzva/harness-flow-hub/blob/25b23c25198c8fafef166060bf054870511fc2fd/package.json) → [patch](https://github.com/Harzva/harness-flow-hub/blob/25b23c25198c8fafef166060bf054870511fc2fd/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-management` `package-install` `filesystem-write` `rollback` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Toggle** · [huntersxy/dsh-plugin-toggle@e11d57c](https://github.com/huntersxy/dsh-plugin-toggle/commit/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea) — 通过修改 profile patch 在设置页热启停第三方插件。
  - **证据:** [manifest](https://github.com/huntersxy/dsh-plugin-toggle/blob/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea/package.json) → [patch](https://github.com/huntersxy/dsh-plugin-toggle/blob/e11d57cedaf2dfd2a126106f8df86dec9fecf0ea/cordis.patch.yml) · **身份:** `dsh-plugin-toggle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `filesystem-write` `configuration-edit` `hot-reload` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Go Balance** · [iamfromchangsha/dsh-go-balance@8d11fea](https://github.com/iamfromchangsha/dsh-go-balance/commit/8d11fea5d123fb0935df1b18f5f8f6bf7d2190da) — DSH Go Balance 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/iamfromchangsha/dsh-go-balance/blob/8d11fea5d123fb0935df1b18f5f8f6bf7d2190da/package.json) → [patch](https://github.com/iamfromchangsha/dsh-go-balance/blob/8d11fea5d123fb0935df1b18f5f8f6bf7d2190da/cordis.patch.yml) · **身份:** `dsh-go-balance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Workspace Token Record** · [jasonyoungguang/DSH_plugins_calculate_token_fee@bb37cb3](https://github.com/jasonyoungguang/DSH_plugins_calculate_token_fee/commit/bb37cb38326a2a6cbed911711401413572f94c0a) — 将每个 Workspace 与 Session 的 Token 用量和成本投影到侧栏悬浮卡片。
  - **证据:** [manifest](https://github.com/jasonyoungguang/DSH_plugins_calculate_token_fee/blob/bb37cb38326a2a6cbed911711401413572f94c0a/package.json) → [patch](https://github.com/jasonyoungguang/DSH_plugins_calculate_token_fee/blob/bb37cb38326a2a6cbed911711401413572f94c0a/cordis.patch.yml) · **身份:** `workspace_token_record`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `token-meter` `billing-data` `session-projection` `workspace-data` `client-injection` `github-only` · **核验备注:** 包声明 MIT，但未发现仓库许可证文件或 npm 包；未执行日志折叠、成本投影、Workspace 聚合或浏览器卡片。

- **DSH Web Hot** · [jifeng15/dsh-web-restart@8ae1421](https://github.com/jifeng15/dsh-web-restart/commit/8ae14211b89e45d398236ad678e356606df9584a) — 无需重启即可安装、更新、启停并自愈 Web 插件的宿主生命周期层。
  - **证据:** [manifest](https://github.com/jifeng15/dsh-web-restart/blob/8ae14211b89e45d398236ad678e356606df9584a/hot-plugin/package.json) → [patch](https://github.com/jifeng15/dsh-web-restart/blob/8ae14211b89e45d398236ad678e356606df9584a/hot-plugin/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-management` `package-install` `filesystem-write` `hot-reload` `self-heal` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Unified Market** · [jing-hy/dsh-unified-market@f67a1bc](https://github.com/jing-hy/dsh-unified-market/commit/f67a1bccb3e24841564e144ec492f0846419e2cc) — 统一插件市场（Unified Plugin Market for DeepSeek Harness）：聚合精选目录（awesome-dsh-plugin.com）+ GitHub dsh-plugin 生态 + npm registry 三源；对 DSH Desktop（EAC）特化（web-desktop profile）；来源白名单 + 冲突预检 + 试装验证；后台自动检测 + 可配置自动升级 + 市场自更新；一键检查/全部更新/逐个更新，更新进度窗口
  - **证据:** [manifest](https://github.com/jing-hy/dsh-unified-market/blob/f67a1bccb3e24841564e144ec492f0846419e2cc/package.json) → [patch](https://github.com/jing-hy/dsh-unified-market/blob/f67a1bccb3e24841564e144ec492f0846419e2cc/cordis.patch.yml) · **身份:** `dsh-unified-market`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Tokstat** · [kongjianguan/dsh-tokstat@ebc851b](https://github.com/kongjianguan/dsh-tokstat/commit/ebc851b674fcaefe8dbe2aec4b746d9b111186d0) — 在设置面板与终端 UI 中展示 Token、延迟、吞吐与成本统计。
  - **证据:** [manifest](https://github.com/kongjianguan/dsh-tokstat/blob/ebc851b674fcaefe8dbe2aec4b746d9b111186d0/package.json) → [patch](https://github.com/kongjianguan/dsh-tokstat/blob/ebc851b674fcaefe8dbe2aec4b746d9b111186d0/cordis.patch.yml) · **身份:** `@kongjianguan/dsh-tokstat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `token-meter` `session-log` `filesystem-read` `local-http` `client-injection` `terminal` · **核验备注:** 固定源码为 0.1.0，而同仓库 npm 已发布 0.1.1；未执行 Session 日志读取、HTTP 路由、Client Panel、终端或构建脚本。

- **DSH Clipboard History** · [kuangre123/dsh-clipboard-history@20db300](https://github.com/kuangre123/dsh-clipboard-history/commit/20db30027cfdeafcb5a0f8f8ae3719e4e778c672) — DSH Clipboard History 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kuangre123/dsh-clipboard-history/blob/20db30027cfdeafcb5a0f8f8ae3719e4e778c672/package.json) → [patch](https://github.com/kuangre123/dsh-clipboard-history/blob/20db30027cfdeafcb5a0f8f8ae3719e4e778c672/cordis.patch.yml) · **身份:** `dsh-clipboard-history`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Codex Workflow** · [kui123456789/dsh-codex-workflow@3893b8d](https://github.com/kui123456789/dsh-codex-workflow/commit/3893b8d603f90ccb4689b833c236736f6b9b94f4) — DSH Codex Workflow 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kui123456789/dsh-codex-workflow/blob/3893b8d603f90ccb4689b833c236736f6b9b94f4/package.json) → [patch](https://github.com/kui123456789/dsh-codex-workflow/blob/3893b8d603f90ccb4689b833c236736f6b9b94f4/cordis.patch.yml) · **身份:** `dsh-codex-workflow`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` `mcp` `process-control` `database` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Market** · [losebird/dsh-plugin-market@e441cdb](https://github.com/losebird/dsh-plugin-market/commit/e441cdb14c6152c44c3bd7e573f7796695fe96cb) — 支持 bundle 与 ZIP 一键安装的社区插件市场弹窗。
  - **证据:** [manifest](https://github.com/losebird/dsh-plugin-market/blob/e441cdb14c6152c44c3bd7e573f7796695fe96cb/package.json) → [patch](https://github.com/losebird/dsh-plugin-market/blob/e441cdb14c6152c44c3bd7e573f7796695fe96cb/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `package-install` `filesystem-write` `identity-collision` `client-injection` · **核验备注:** npm 名称映射到其他仓库，因此本记录仅固定到作者文档中的 Git 源且不主张该 npm 身份；未执行安装。

- **DSH Dag Orchestrator** · [Luck9Star/dsh-dag-orchestrator@880a310](https://github.com/Luck9Star/dsh-dag-orchestrator/commit/880a310be2ad6913e4df9248ece3984d0ff2acdb) — DSH Dag Orchestrator 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Luck9Star/dsh-dag-orchestrator/blob/880a310be2ad6913e4df9248ece3984d0ff2acdb/package.json) → [patch](https://github.com/Luck9Star/dsh-dag-orchestrator/blob/880a310be2ad6913e4df9248ece3984d0ff2acdb/cordis.patch.yml) · **身份:** `dsh-dag-orchestrator`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `database` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Ace Harness** · [lustresixx/dk-flow@5230052](https://github.com/lustresixx/dk-flow/commit/52300527b5fe4f04ec6f930c1590029b1b961b29) — DSH Ace Harness 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lustresixx/dk-flow/blob/52300527b5fe4f04ec6f930c1590029b1b961b29/package.json) → [patch](https://github.com/lustresixx/dk-flow/blob/52300527b5fe4f04ec6f930c1590029b1b961b29/cordis.patch.yml) · **身份:** `dsh-ace-harness`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `system-prompt` `prepare` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Catalog Capabilities ZH** · [MeowTnT3r/catalog-capabilities-zh@1843ac3](https://github.com/MeowTnT3r/catalog-capabilities-zh/commit/1843ac3db8f4b437ed62866cdba3c9fe08158cd5) — 用于检查与安装 DSH 插件和 Skills 的中文能力目录及编排适配器。
  - **证据:** [manifest](https://github.com/MeowTnT3r/catalog-capabilities-zh/blob/1843ac3db8f4b437ed62866cdba3c9fe08158cd5/package.json) → [patch](https://github.com/MeowTnT3r/catalog-capabilities-zh/blob/1843ac3db8f4b437ed62866cdba3c9fe08158cd5/cordis.patch.yml) · **身份:** `catalog-capabilities-zh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `capability-catalog` `plugin-management` `skill-management` `subprocess` `filesystem-write` `github-only` · **核验备注:** 固定源码把安装委派给环境已有的插件或 Skill 管理器，并包含 Python 目录脚本；未运行检查、子进程或安装。

- **DSH Spend** · [nonewind/dsh-spend@43fb7b0](https://github.com/nonewind/dsh-spend/commit/43fb7b08b2b38d3da9f09c0ac085720a4144e61f) — 在 DSH Web 界面展示 Token 用量、计费计划统计与预估费用。
  - **证据:** [manifest](https://github.com/nonewind/dsh-spend/blob/43fb7b08b2b38d3da9f09c0ac085720a4144e61f/package.json) → [patch](https://github.com/nonewind/dsh-spend/blob/43fb7b08b2b38d3da9f09c0ac085720a4144e61f/cordis.patch.yml) · **身份:** `dsh-spend`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `token-usage` `cost-estimation` `billing-data` `client-injection` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Usage Cost** · [PengPeng6845/dsh-usage-cost@d111291](https://github.com/PengPeng6845/dsh-usage-cost/commit/d1112912de6cf0287eb6a50275bf2e08c5bd471c) — DSH Usage Cost 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/PengPeng6845/dsh-usage-cost/blob/d1112912de6cf0287eb6a50275bf2e08c5bd471c/packages/dsh-usage-cost/package.json) → [patch](https://github.com/PengPeng6845/dsh-usage-cost/blob/d1112912de6cf0287eb6a50275bf2e08c5bd471c/packages/dsh-usage-cost/cordis.patch.yml) · **身份:** `dsh-usage-cost`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Hub** · [qomob/dsh@9b80e51](https://github.com/qomob/dsh/commit/9b80e51ff4371d41b33e5497b82f51ae08fe1699) — 提供内嵌与在线 GitHub 插件搜索、详情核验、审批安装和目录标签页。
  - **证据:** [manifest](https://github.com/qomob/dsh/blob/9b80e51ff4371d41b33e5497b82f51ae08fe1699/plugin/package.json) → [patch](https://github.com/qomob/dsh/blob/9b80e51ff4371d41b33e5497b82f51ae08fe1699/plugin/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `external-network` `package-install` `approval-gate` `identity-collision` · **核验备注:** npm 名称映射到其他仓库，因此本记录仅固定到文档中的 Git 子目录源码，不主张该包身份。

- **DSH Cost Glance** · [qqq85-ux/dsh-cost-glance@3587c20](https://github.com/qqq85-ux/dsh-cost-glance/commit/3587c2046414e6b188333466edc056a4f47dc063) — 根据模型、缓存和分时定价信号估算每个会话的 DeepSeek API 费用。
  - **证据:** [manifest](https://github.com/qqq85-ux/dsh-cost-glance/blob/3587c2046414e6b188333466edc056a4f47dc063/package.json) → [patch](https://github.com/qqq85-ux/dsh-cost-glance/blob/3587c2046414e6b188333466edc056a4f47dc063/cordis.patch.yml) · **身份:** `dsh-cost-glance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Extension Hub** · [Relistencode/dsh-extension-hub@3f9726e](https://github.com/Relistencode/dsh-extension-hub/commit/3f9726ea1ffe8cf12f274ce69ff02713807418a6) — 管理技能、MCP 服务、插件、导入、市场发现与更新的 Web 和 CLI 中心。
  - **证据:** [manifest](https://github.com/Relistencode/dsh-extension-hub/blob/3f9726ea1ffe8cf12f274ce69ff02713807418a6/package.json) → [patch](https://github.com/Relistencode/dsh-extension-hub/blob/3f9726ea1ffe8cf12f274ce69ff02713807418a6/cordis.patch.yml) · **身份:** `dsh-extension-hub`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `skill-management` `mcp` `package-install` `filesystem-write` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH WebUI Market Plugin** · [Sanqi-normal/dsh-webui-market-plugin@8b32828](https://github.com/Sanqi-normal/dsh-webui-market-plugin/commit/8b328289ce5268451bd4414fa3ae41ee2f515649) — 添加用于浏览、安装和移除社区 DSH 插件的 Web 插件市场。
  - **证据:** [manifest](https://github.com/Sanqi-normal/dsh-webui-market-plugin/blob/8b328289ce5268451bd4414fa3ae41ee2f515649/package.json) → [patch](https://github.com/Sanqi-normal/dsh-webui-market-plugin/blob/8b328289ce5268451bd4414fa3ae41ee2f515649/cordis.patch.yml) · **身份:** `@sanqi-normal/dsh-webui-market-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-market` `package-management` `external-network` `filesystem-write` `client-injection` · **核验备注:** 固定源码略早于当前匹配的 Registry 版本；未执行目录抓取、包操作、文件写入或 UI 行为。

- **DSH Plugin Marketplace** · [Scorp1o117/dsh-plugin-marketplace@d4f8b24](https://github.com/Scorp1o117/dsh-plugin-marketplace/commit/d4f8b245f00142024328bc4804e1f8b93882a236) — 在设置页浏览、搜索并按热度排列 GitHub dsh-plugin topic 的插件市场。
  - **证据:** [manifest](https://github.com/Scorp1o117/dsh-plugin-marketplace/blob/d4f8b245f00142024328bc4804e1f8b93882a236/package.json) → [patch](https://github.com/Scorp1o117/dsh-plugin-marketplace/blob/d4f8b245f00142024328bc4804e1f8b93882a236/cordis.patch.yml) · **身份:** `dsh-plugin-marketplace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `plugin-marketplace` `github-search` `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **Oss Prompt Optimizer** · [seven282/oss-prompt-optimizer@2f5167d](https://github.com/seven282/oss-prompt-optimizer/commit/2f5167d67cef28b5a3dae1f0eee15be809645491) — Oss Prompt Optimizer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/seven282/oss-prompt-optimizer/blob/2f5167d67cef28b5a3dae1f0eee15be809645491/package.json) → [patch](https://github.com/seven282/oss-prompt-optimizer/blob/2f5167d67cef28b5a3dae1f0eee15be809645491/cordis.patch.yml) · **身份:** `oss-prompt-optimizer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` `system-prompt` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Course Logic Extractor** · [ShadowBruceMeaningLau/dsh-course-logic-extractor@73cefe8](https://github.com/ShadowBruceMeaningLau/dsh-course-logic-extractor/commit/73cefe8180206afeb1c95014e1a633031eca49b6) — DSH Course Logic Extractor 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ShadowBruceMeaningLau/dsh-course-logic-extractor/blob/73cefe8180206afeb1c95014e1a633031eca49b6/package.json) → [patch](https://github.com/ShadowBruceMeaningLau/dsh-course-logic-extractor/blob/73cefe8180206afeb1c95014e1a633031eca49b6/cordis.patch.yml) · **身份:** `dsh-course-logic-extractor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Edit Approval** · [SiriLee/dsh-edit-approval@5cbb98f](https://github.com/SiriLee/dsh-edit-approval/commit/5cbb98f946aefe19fb15be2b2fde2f3b8a9408e7) — DSH Edit Approval 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SiriLee/dsh-edit-approval/blob/5cbb98f946aefe19fb15be2b2fde2f3b8a9408e7/package.json) → [patch](https://github.com/SiriLee/dsh-edit-approval/blob/5cbb98f946aefe19fb15be2b2fde2f3b8a9408e7/cordis.patch.yml) · **身份:** `dsh-edit-approval`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `prepare` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **Agent Plugins Market** · [Sivan757/dsh-agent-plugins-market@cec8a95](https://github.com/Sivan757/dsh-agent-plugins-market/commit/cec8a95b087920b16b99e9c66123767fc1794799) — Agent Plugins Market 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Sivan757/dsh-agent-plugins-market/blob/cec8a95b087920b16b99e9c66123767fc1794799/package.json) → [patch](https://github.com/Sivan757/dsh-agent-plugins-market/blob/cec8a95b087920b16b99e9c66123767fc1794799/cordis.patch.yml) · **身份:** `dsh-agent-plugins-market`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `session-data` `model-tools` `package-install` `plugin-management` `web-search` `vision` `multi-agent` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Usage Dashboard** · [skkjkk/dsh-usage-dashboard@104cfb8](https://github.com/skkjkk/dsh-usage-dashboard/commit/104cfb87a78bcc42f0feec39e95bf9bf202e9b36) — 将 Token、费用、时长与会话用量聚合为趋势、热力图和日历视图。
  - **证据:** [manifest](https://github.com/skkjkk/dsh-usage-dashboard/blob/104cfb87a78bcc42f0feec39e95bf9bf202e9b36/package.json) → [patch](https://github.com/skkjkk/dsh-usage-dashboard/blob/104cfb87a78bcc42f0feec39e95bf9bf202e9b36/cordis.patch.yml) · **身份:** `@skkjkk/dsh-usage-dashboard`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `usage-dashboard` `token-usage` `cost-data` `session-data` `client-injection` `prepublish-build` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Plugin Guardian** · [songoao25/dsh-plugin-guardian@bb49179](https://github.com/songoao25/dsh-plugin-guardian/commit/bb491797ab4a1b78dfbcab87821d6f8f59f24caf) — 提供图形化插件卸载、残留清理、快照回滚和恢复控制。
  - **证据:** [manifest](https://github.com/songoao25/dsh-plugin-guardian/blob/bb491797ab4a1b78dfbcab87821d6f8f59f24caf/package.json) → [patch](https://github.com/songoao25/dsh-plugin-guardian/blob/bb491797ab4a1b78dfbcab87821d6f8f59f24caf/cordis.patch.yml) · **身份:** `dsh-plugin-guardian`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `filesystem-write` `file-delete` `rollback` `configuration-edit` `client-injection` `github-only` · **核验备注:** 仓库提供可固定的 GitHub 源码身份；未执行插件移除、残留清理、配置写入、回滚或浏览器操作。

- **DSH Fish Hub** · [stvlynn/dsh.fish@d81793b](https://github.com/stvlynn/dsh.fish/commit/d81793bcf57a8949ae9b24f2c935e01c222e4ce6) — 通过认证访问 dsh.fish 并搜索、安装 Harness 工件的工具。
  - **证据:** [manifest](https://github.com/stvlynn/dsh.fish/blob/d81793bcf57a8949ae9b24f2c935e01c222e4ce6/packages/dsh-plugin-hub/package.json) → [patch](https://github.com/stvlynn/dsh.fish/blob/d81793bcf57a8949ae9b24f2c935e01c222e4ce6/packages/dsh-plugin-hub/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `artifact-registry` `credentials` `external-network` `package-install` `prepare-build` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **CN Plugin Center** · [SuiBbinggan/dsh-cn-plugin-center@608c89f](https://github.com/SuiBbinggan/dsh-cn-plugin-center/commit/608c89fa0aac061782951b71eca075411a1cf3ba) — CN Plugin Center 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SuiBbinggan/dsh-cn-plugin-center/blob/608c89fa0aac061782951b71eca075411a1cf3ba/package.json) → [patch](https://github.com/SuiBbinggan/dsh-cn-plugin-center/blob/608c89fa0aac061782951b71eca075411a1cf3ba/cordis.patch.yml) · **身份:** `dsh-cn-plugin-center`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Zhipu Coding Plan** · [tsja2001/dsh-zhipu-coding-plan@3afba87](https://github.com/tsja2001/dsh-zhipu-coding-plan/commit/3afba873a80b7c48b89762686c04f37f76bc2f90) — 在会话标签页展示 GLM Coding Plan 配额窗口、模型用量与重置时间。
  - **证据:** [manifest](https://github.com/tsja2001/dsh-zhipu-coding-plan/blob/3afba873a80b7c48b89762686c04f37f76bc2f90/package.json) → [patch](https://github.com/tsja2001/dsh-zhipu-coding-plan/blob/3afba873a80b7c48b89762686c04f37f76bc2f90/cordis.patch.yml) · **身份:** `dsh-zhipu-coding-plan`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `quota-monitor` `billing-data` `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Suite All** · [whyihaveyou/dsh-suite@0165407](https://github.com/whyihaveyou/dsh-suite/commit/01654079afbde1d62c45fac3cc49716e16f27996) — 聚合插件管理、通知、会话导出与团队看板的一体化 DSH Suite bundle。
  - **证据:** [manifest](https://github.com/whyihaveyou/dsh-suite/blob/01654079afbde1d62c45fac3cc49716e16f27996/packages/all/package.json) → [patch](https://github.com/whyihaveyou/dsh-suite/blob/01654079afbde1d62c45fac3cc49716e16f27996/packages/all/cordis.patch.yml) · **身份:** `@dsh-suite/all`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `aggregate-bundle` `plugin-management` `notification` `session-export` `kanban` · **核验备注:** 已静态核对固定源码、manifest、patch、可用许可证证据与文档安装身份；未执行插件代码或声明能力。

- **DSH Plugin Hub Suite** · [wingsky-1/dsh-plugin-hub@f15865f](https://github.com/wingsky-1/dsh-plugin-hub/commit/f15865fdca4866776e3b8a90d8093885e7123606) — 聚合压缩、会话归档、局域网代理、MCP、通知、用量、技能与文件预览等 8 个 DSH 插件。
  - **证据:** [manifest](https://github.com/wingsky-1/dsh-plugin-hub/blob/f15865fdca4866776e3b8a90d8093885e7123606/packages/dsh-plugins-all/package.json) → [patch](https://github.com/wingsky-1/dsh-plugin-hub/blob/f15865fdca4866776e3b8a90d8093885e7123606/packages/dsh-plugins-all/cordis.patch.yml) · **身份:** `@wingsky-1/dsh-plugins-all`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `aggregate-bundle` `plugin-suite` `external-network` `filesystem-write` `client-injection` `prepare-build` · **核验备注:** 已静态核对固定源码与匹配的公开包身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **DSH Damage Pulse** · [wssfk12138/dsh-damage-pulse@6e724df](https://github.com/wssfk12138/dsh-damage-pulse/commit/6e724df0afac6949772f189e13227c4ab92da078) — 将缓存感知的 Token 扣费可视化为余额监控伤害数字动画。
  - **证据:** [manifest](https://github.com/wssfk12138/dsh-damage-pulse/blob/6e724df0afac6949772f189e13227c4ab92da078/package.json) → [patch](https://github.com/wssfk12138/dsh-damage-pulse/blob/6e724df0afac6949772f189e13227c4ab92da078/cordis.patch.yml) · **身份:** `dsh-damage-pulse`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `balance-monitor` `token-usage` `cost-data` `client-injection` `github-only` · **核验备注:** 已静态核对固定源码与作者记录的 GitHub 安装身份；未执行候选代码、安装钩子、网络调用、文件系统变更或 UI 行为。

- **Model HUB** · [yhyfhgs/dsh-model-hub@7f9cbcb](https://github.com/yhyfhgs/dsh-model-hub/commit/7f9cbcb8f18e8055a6fb22ef8f9d374a54a484d4) — Model HUB 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yhyfhgs/dsh-model-hub/blob/7f9cbcb8f18e8055a6fb22ef8f9d374a54a484d4/package.json) → [patch](https://github.com/yhyfhgs/dsh-model-hub/blob/7f9cbcb8f18e8055a6fb22ef8f9d374a54a484d4/cordis.patch.yml) · **身份:** `@fhxgs/dsh-model-hub`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `subprocess` `process-control` `session-data` `model-tools` `package-install` `vision` `multi-agent` `prepack` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Plugin Store** · [ZASENJC/dsh-plugins-store@fa5829a](https://github.com/ZASENJC/dsh-plugins-store/commit/fa5829a4568ce0822de578424b53faf0c4fd6cb2) — 带固定来源核验、风险确认、安装计划、更新与卸载的原生插件目录浏览器。
  - **证据:** [manifest](https://github.com/ZASENJC/dsh-plugins-store/blob/fa5829a4568ce0822de578424b53faf0c4fd6cb2/packages/dsh-plugin-store/package.json) → [patch](https://github.com/ZASENJC/dsh-plugins-store/blob/fa5829a4568ce0822de578424b53faf0c4fd6cb2/packages/dsh-plugin-store/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `plugin-marketplace` `package-install` `approval-gate` `external-network` `identity-collision` · **核验备注:** npm 身份映射到其他仓库，因此本记录固定到文档中的 Git 子目录源码，不主张该包。

- **DSH Plugin Toggle** · [Zenjibad/dsh-plugin-toggle@60cfa68](https://github.com/Zenjibad/dsh-plugin-toggle/commit/60cfa68063968893b3b1f238d0789675c16c28e3) — 在设置页为已安装 DSH 插件加入可持久化的启用与停用控件。
  - **证据:** [manifest](https://github.com/Zenjibad/dsh-plugin-toggle/blob/60cfa68063968893b3b1f238d0789675c16c28e3/package.json) → [patch](https://github.com/Zenjibad/dsh-plugin-toggle/blob/60cfa68063968893b3b1f238d0789675c16c28e3/cordis.patch.yml) · **身份:** `dsh-plugin-toggle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `dynamic-loading` `filesystem-write` `client-injection` · **核验备注:** 已静态核对固定源码、patch、许可证与仓库专属 Git 安装身份；未执行插件启停、持久化或 UI。

- **DSH Usage Balance** · [zhou-yihang/dsh-usage-blance@09a2415](https://github.com/zhou-yihang/dsh-usage-blance/commit/09a2415ddde6bbb161980a6d75bd24f256fa2123) — 在 DSH 输入框下方展示 DeepSeek 月度、每日与账户余额计费数据。
  - **证据:** [manifest](https://github.com/zhou-yihang/dsh-usage-blance/blob/09a2415ddde6bbb161980a6d75bd24f256fa2123/package.json) → [patch](https://github.com/zhou-yihang/dsh-usage-blance/blob/09a2415ddde6bbb161980a6d75bd24f256fa2123/cordis.patch.yml) · **身份:** `dsh-usage-blance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

- **DSH Recommend** · [zp-home/dsh-recommend@9319afc](https://github.com/zp-home/dsh-recommend/commit/9319afc6dca96f24413854b8300e609b54394e5e) — DSH Recommend 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zp-home/dsh-recommend/blob/9319afc6dca96f24413854b8300e609b54394e5e/package.json) → [patch](https://github.com/zp-home/dsh-recommend/blob/9319afc6dca96f24413854b8300e609b54394e5e/cordis.patch.yml) · **身份:** `dsh-recommend`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` · **核验备注:** 已静态核对固定源码、同提交 patch、许可证与安装身份；未执行生命周期 hook、插件代码或相关能力。

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

- **DSH 1024 Store** · [imsai-sh/awesome-deepseek-harness-plugins@dcdbcde](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/commit/dcdbcde3599b63406ddb77eadccc3a191110ce42) — 将产品内插件目录与官方 DSH 插件命令的安装统计包装器结合。
  - **证据:** [manifest](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/blob/dcdbcde3599b63406ddb77eadccc3a191110ce42/packages/dsh1024/package.json) → [patch](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/blob/dcdbcde3599b63406ddb77eadccc3a191110ce42/packages/dsh1024/cordis.patch.yml) · **身份:** `dsh1024`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `package-install` `telemetry` `external-network` `filesystem-write` `subprocess` `identity-unresolved` · **核验备注:** 暂缓：文档要求从 npm 安装 dsh1024，但注册表中无 0.4.0；未运行安装器、遥测、prepack 或插件操作。

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

- **DSH Thinking Notifier** · [6-debug-6/dsh-thinking-notifier@d97ab09](https://github.com/6-debug-6/dsh-thinking-notifier/commit/d97ab09f21568e22b47e02d036ef678212d2d137) — 为思考中、权限请求与完成状态提供桌面弹窗。
  - **证据:** [manifest](https://github.com/6-debug-6/dsh-thinking-notifier/blob/d97ab09f21568e22b47e02d036ef678212d2d137/package.json) → [patch](https://github.com/6-debug-6/dsh-thinking-notifier/blob/d97ab09f21568e22b47e02d036ef678212d2d137/cordis.patch.yml) · **身份:** `dsh-thinking-notifier`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-notification` `approval-events` `subprocess` `local-http-server` `placeholder-identity` · **核验备注:** 暂缓：npm 无匹配包且 Manifest 指向占位仓库身份；未启动 PowerShell 或 Python 子进程及本地状态服务。

- **DSH Manager** · [as1350/dsh-manager@2733d86](https://github.com/as1350/dsh-manager/commit/2733d868662d15e203d61ead57f8889b04f74943) — 支持事务式启用、回滚及脚本型补丁的 Skills 与部署补丁管理器。
  - **证据:** [manifest](https://github.com/as1350/dsh-manager/blob/2733d868662d15e203d61ead57f8889b04f74943/package.json) → [patch](https://github.com/as1350/dsh-manager/blob/2733d868662d15e203d61ead57f8889b04f74943/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-manager`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `official-looking-namespace` `identity-unresolved` `filesystem-write` `script-execution` `patch-management` `wildcard-peers` · **核验备注:** 暂缓：看似官方的 npm Scope 未发布、未发现仓库许可证文件、通配 Peer 无法证明兼容性，且文档 Tarball 版本与 Manifest 不一致。

- **DSH WxAuto** · [br1nosense/dsh-wxauto-plugin@37f4b9e](https://github.com/br1nosense/dsh-wxauto-plugin/commit/37f4b9e6e25c8b95bed17255ca4c79457d721489) — 面向 Windows 微信的 DSH 进度汇报、消息轮询与双向任务桥自动化。
  - **证据:** [manifest](https://github.com/br1nosense/dsh-wxauto-plugin/blob/37f4b9e6e25c8b95bed17255ca4c79457d721489/package.json) → [patch](https://github.com/br1nosense/dsh-wxauto-plugin/blob/37f4b9e6e25c8b95bed17255ca4c79457d721489/cordis.patch.yml) · **身份:** `@dsh-user/dsh-wxauto`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `windows-only` `wechat-automation` `subprocess` `core-patch` `external-dependencies` `usage-restriction` · **核验备注:** 暂缓：安装会修改 DSH 核心命名空间、引入 Python UI 自动化依赖，且文档中的上游使用限制排除生产用途；未运行安装器、微信操作或桥接。

- **DSH WHU Plugin** · [daoxiang0520/dsh-plugin-whu@e4124f5](https://github.com/daoxiang0520/dsh-plugin-whu/commit/e4124f5b3587dd0f9008f30f89fedf74f0b7281b) — 通过工具与本地界面接入武汉大学图书馆、课表、成绩、考试和天气服务。
  - **证据:** [manifest](https://github.com/daoxiang0520/dsh-plugin-whu/blob/e4124f5b3587dd0f9008f30f89fedf74f0b7281b/package/package.json) → [patch](https://github.com/daoxiang0520/dsh-plugin-whu/blob/e4124f5b3587dd0f9008f30f89fedf74f0b7281b/package/cordis.patch.yml) · **身份:** `dsh-plugin-whu`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `campus-services` `python-subprocess` `local-http-server` `credentials` `web-ui` `license-unresolved` · **核验备注:** 暂缓：未发现仓库许可证文件，且 Python 校园服务桥接涉及登录和教务数据；未启动子进程、登录或服务请求。

- **Edtechools DSH Plugins** · [edtechools/dsh-plugins@5e68ba5](https://github.com/edtechools/dsh-plugins/commit/5e68ba504626c0dc0a5e854b6699dde9a014137d) — 包含会话轮次导航与基于凭据的博查搜索两个插件的工作区。
  - **证据:** [manifest](https://github.com/edtechools/dsh-plugins/blob/5e68ba504626c0dc0a5e854b6699dde9a014137d/packages/turn-nav/package.json) → [patch](https://github.com/edtechools/dsh-plugins/blob/5e68ba504626c0dc0a5e854b6699dde9a014137d/packages/turn-nav/cordis.patch.yml) · **身份:** `dsh-plugin-turn-nav`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `web-ui` `web-search` `credentials` `external-network` `prepare-build` `workspace-dependencies` `license-unresolved` · **核验备注:** 暂缓：仓库无许可证文件、两个包均未发布、通配 Peer 无法证明兼容性，且 Git 安装需要放行 prepare 构建。

- **DSH Cross Collaboration** · [gameswu/dsh-cross-collaboration@a816775](https://github.com/gameswu/dsh-cross-collaboration/commit/a8167757de10c55167e547c8fc011290fae34ce4) — 通过局域网或中继发现 DSH 设备并委派远程 Agent 任务。
  - **证据:** [manifest](https://github.com/gameswu/dsh-cross-collaboration/blob/a8167757de10c55167e547c8fc011290fae34ce4/package.json) → [patch](https://github.com/gameswu/dsh-cross-collaboration/blob/a8167757de10c55167e547c8fc011290fae34ce4/cordis.patch.yml) · **身份:** `dsh-cross-collaboration`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `lan-discovery` `remote-task-execution` `udp` `websocket` `relay-network` `private-package` `license-unresolved` · **核验备注:** 暂缓：私有包与仓库均未声明许可证，且插件暴露局域网发现与远程任务委派；未启动套接字、中继或任务。

- **DSH Whale Button** · [hhj2714/dsh-whale-btn@c3386c4](https://github.com/hhj2714/dsh-whale-btn/commit/c3386c434bceeeab5e320769b6c12f3d4b515381) — 可拖动且始终置顶的鲸鱼按钮，用于聚焦或打开 DSH 桌面窗口。
  - **证据:** [manifest](https://github.com/hhj2714/dsh-whale-btn/blob/c3386c434bceeeab5e320769b6c12f3d4b515381/package.json) → [patch](https://github.com/hhj2714/dsh-whale-btn/blob/c3386c434bceeeab5e320769b6c12f3d4b515381/cordis.patch.yml) · **身份:** `dsh-whale-btn`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-window-control` `subprocess` `always-on-top` `private-package` `github-only` · **核验备注:** 暂缓：包标记为私有且缺少包许可证，并会启动原生窗口辅助程序；仓库有 MIT 许可证及 GitHub 安装说明，但未启动辅助程序。

- **DSH Plugins 4U** · [honghudavy-star/DSH_plugins_4U@1868796](https://github.com/honghudavy-star/DSH_plugins_4U/commit/1868796c12d9ce212c4f12ba89783385fe7678a9) — 聚合识图输入、壁纸定制、微信桥接与设置目录的插件套件。
  - **证据:** [manifest](https://github.com/honghudavy-star/DSH_plugins_4U/blob/1868796c12d9ce212c4f12ba89783385fe7678a9/package.json) → [patch](https://github.com/honghudavy-star/DSH_plugins_4U/blob/1868796c12d9ce212c4f12ba89783385fe7678a9/cordis.patch.yml) · **身份:** `@dsh-plugins/4u`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `vision` `credentials` `external-network` `filesystem-write` `wechat-bridge` `local-http-server` `license-unresolved` · **核验备注:** 暂缓：未发现仓库许可证文件，且未发布套件组合了凭据识图、文件系统壁纸修改与微信桥接；均未执行。

- **DSH Preset Switcher** · [jeffcwj/dsh-preset-switcher@ec337bf](https://github.com/jeffcwj/dsh-preset-switcher/commit/ec337bf2b9cc54e354256804c8ae1528a8d79dbc) — 通过会话头部控件与本地 API 修改活动会话的 Agent Preset。
  - **证据:** [manifest](https://github.com/jeffcwj/dsh-preset-switcher/blob/ec337bf2b9cc54e354256804c8ae1528a8d79dbc/package.json) → [patch](https://github.com/jeffcwj/dsh-preset-switcher/blob/ec337bf2b9cc54e354256804c8ae1528a8d79dbc/cordis.patch.yml) · **身份:** `dsh-preset-switcher`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-control` `preset-switching` `local-http-server` `web-ui` `local-install` `license-unresolved` · **核验备注:** 暂缓：未发现仓库许可证文件或远程包身份，且仅记录绝对本地路径安装；未修改任何会话 Preset。

- **DSH Claude Code Plugins** · [jianxx/dsh-cc-plugins@f5407cb](https://github.com/jianxx/dsh-cc-plugins/commit/f5407cbf9baf1f2dc47d9fba5186933c144ec0ce) — 包含权限规则、设置级联、工具、Hooks、MCP、记忆与 Profile Bundles 的大型 Claude Code 对齐工作区。
  - **证据:** [manifest](https://github.com/jianxx/dsh-cc-plugins/blob/f5407cbf9baf1f2dc47d9fba5186933c144ec0ce/packages/bundle/cc-permissions/package.json) → [patch](https://github.com/jianxx/dsh-cc-plugins/blob/f5407cbf9baf1f2dc47d9fba5186933c144ec0ce/packages/bundle/cc-permissions/cordis.patch.yml) · **身份:** `@jianxx/dsh-cc-bundle-permissions`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · peer range 混合
  - **能力信号:** `permission-engine` `settings-write` `hooks` `subprocess` `external-network` `workspace-dependencies` `identity-unresolved` · **核验备注:** 暂缓：文档中的仓库安装指向无 Bundle 的私有根包、嵌套包未发布，Workspace 依赖也未形成外部安装身份；未运行 Hook 或工具。

- **DSH Lan Memory** · [kiefeng/dsh-lan-memory@ae0efa5](https://github.com/kiefeng/dsh-lan-memory/commit/ae0efa5e74a88fc852e344607502faeeaf170161) — 包含常驻事实、JSONL 检索、经验、人格、情绪、设置与侧栏卡片的记忆系统。
  - **证据:** [manifest](https://github.com/kiefeng/dsh-lan-memory/blob/ae0efa5e74a88fc852e344607502faeeaf170161/package.json) → [patch](https://github.com/kiefeng/dsh-lan-memory/blob/ae0efa5e74a88fc852e344607502faeeaf170161/cordis.patch.yml) · **身份:** `dsh-lan-memory`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `persistent-memory` `filesystem-write` `persona-injection` `web-ui` `local-install` `license-unresolved` · **核验备注:** 暂缓：未发现仓库许可证文件或远程包身份，且仅记录本地目录安装；未写入记忆、人格或情绪状态。

- **DSH QQ Bot** · [leliln52/dsh-qqbot@ff2d9f7](https://github.com/leliln52/dsh-qqbot/commit/ff2d9f71bd244d9420d06237a9fee22a6fc03bf5) — 通过 OneBot WebSocket 或 QQ 官方机器人平台把 DSH Agent 接入 QQ。
  - **证据:** [manifest](https://github.com/leliln52/dsh-qqbot/blob/ff2d9f71bd244d9420d06237a9fee22a6fc03bf5/package.json) → [patch](https://github.com/leliln52/dsh-qqbot/blob/ff2d9f71bd244d9420d06237a9fee22a6fc03bf5/cordis.patch.yml) · **身份:** `dsh-qqbot`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `qq-bot` `websocket` `credentials` `external-network` `persistent-session` `identity-unresolved` · **核验备注:** 暂缓：npm 发布 1.0.1 但无仓库元数据，固定源码为 0.2.0 且仅记录本地安装；未启动机器人登录、消息或 Agent 会话。

- **DSH Freebuff** · [liceses/dsh-freebuff@308f365](https://github.com/liceses/dsh-freebuff/commit/308f365021d4b2cb6a8c12269a8e69a9c10ced86) — 把非公开的 Freebuff 桌面协议适配为 DSH 模型 Provider。
  - **证据:** [manifest](https://github.com/liceses/dsh-freebuff/blob/308f365021d4b2cb6a8c12269a8e69a9c10ced86/package.json) → [patch](https://github.com/liceses/dsh-freebuff/blob/308f365021d4b2cb6a8c12269a8e69a9c10ced86/cordis.patch.yml) · **身份:** `dsh-freebuff`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `model-provider` `unofficial-protocol` `external-network` `anonymous-identity` `reverse-proxy` `compliance-unresolved` · **核验备注:** 暂缓：其重实现未公开的第三方桌面协议与免费服务，尚无明确 API 授权；未发送请求、身份或模型响应。

- **DSH Firefly Theme** · [Liu-ZA-81/dsh-theme-firefly@edbee71](https://github.com/Liu-ZA-81/dsh-theme-firefly/commit/edbee7165956153e48162d095ea539627e5cb416) — 包含流萤角色壁纸、GIF、音乐、霓虹样式与开屏变身动画的主题。
  - **证据:** [manifest](https://github.com/Liu-ZA-81/dsh-theme-firefly/blob/edbee7165956153e48162d095ea539627e5cb416/package.json) → [patch](https://github.com/Liu-ZA-81/dsh-theme-firefly/blob/edbee7165956153e48162d095ea539627e5cb416/cordis.patch.yml) · **身份:** `dsh-theme-firefly`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-theme` `client-injection` `bundled-media` `copyrighted-assets` `audio` `video` · **核验备注:** 暂缓：MIT 仅覆盖代码，仓库还分发版权归第三方的米哈游角色图片、GIF 与音乐；未加载任何素材。

- **DSH UI Sidebar** · [nicklin99/dsh-ui-sidebar@c31e512](https://github.com/nicklin99/dsh-ui-sidebar/commit/c31e5121e4d3508c69ed8a27a91dbe6ad64c3b58) — 以自定义品牌、会话搜索、分组和工作区导航替换 DSH Web 侧栏。
  - **证据:** [manifest](https://github.com/nicklin99/dsh-ui-sidebar/blob/c31e5121e4d3508c69ed8a27a91dbe6ad64c3b58/package.json) → [patch](https://github.com/nicklin99/dsh-ui-sidebar/blob/c31e5121e4d3508c69ed8a27a91dbe6ad64c3b58/cordis.patch.yml) · **身份:** `dsh-ui-sidebar`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `sidebar-replacement` `unresolved-install-identity` `license-unresolved` · **核验备注:** 暂缓：未发现仓库许可证、仓库映射、已发布包或作者记录的公共安装身份；未加载替换侧栏。

- **PicGo DSH Plugin** · [PicGo/dsh-plugin@8616305](https://github.com/PicGo/dsh-plugin/commit/8616305583fde0d02f2cf9bcfc8b957e81f36476) — 通过 PicGo 图床配置从 DSH 上传图片和文件。
  - **证据:** [manifest](https://github.com/PicGo/dsh-plugin/blob/8616305583fde0d02f2cf9bcfc8b957e81f36476/package.json) → [patch](https://github.com/PicGo/dsh-plugin/blob/8616305583fde0d02f2cf9bcfc8b957e81f36476/cordis.patch.yml) · **身份:** `@picgo/dsh-plugin`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `file-upload` `filesystem-read` `credentials` `external-network` `model-tools` `prepare-build` `license-unresolved` · **核验备注:** 暂缓：已发布包的仓库中未发现许可证文件；未执行 prepare 构建、文件读取、凭据使用或上传。

- **DSH Skin Studio** · [realMisakaMikoto/dsh-skin-studio@8a66d01](https://github.com/realMisakaMikoto/dsh-skin-studio/commit/8a66d01b7e11a96915f367e9330dfd01c5576352) — 创建、导入、管理并分享可移植的 DSH Web 视觉皮肤。
  - **证据:** [manifest](https://github.com/realMisakaMikoto/dsh-skin-studio/blob/8a66d01b7e11a96915f367e9330dfd01c5576352/package.json) → [patch](https://github.com/realMisakaMikoto/dsh-skin-studio/blob/8a66d01b7e11a96915f367e9330dfd01c5576352/cordis.patch.yml) · **身份:** `dsh-skin-studio`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `theme` `client-injection` `file-import` `browser-storage` `prepack-build` `identity-unresolved` · **核验备注:** 暂缓：npm 已发布 0.4.4 但无仓库元数据，固定源码为 0.3.5；未执行构建、皮肤导入、存储或渲染。

- **DSH Plugin Surgery** · [ruimin251204/dsh-plugin-surgery@11249e0](https://github.com/ruimin251204/dsh-plugin-surgery/commit/11249e08f60acf7a078b67cadc5278479de67381) — 预览插件影响范围、执行卸载清理、创建回滚快照并诊断插件状态。
  - **证据:** [manifest](https://github.com/ruimin251204/dsh-plugin-surgery/blob/11249e08f60acf7a078b67cadc5278479de67381/package.json) → [patch](https://github.com/ruimin251204/dsh-plugin-surgery/blob/11249e08f60acf7a078b67cadc5278479de67381/cordis.patch.yml) · **身份:** `dsh-plugin-surgery`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-management` `filesystem-write` `file-delete` `rollback` `configuration-edit` `identity-unresolved` · **核验备注:** 暂缓：npm 已发布 0.2.0 但无仓库元数据，固定源码为 0.1.4；未执行卸载、清理、快照、回滚或诊断。

- **DSH QoL** · [shifan3/dsh-QoL@5830544](https://github.com/shifan3/dsh-QoL/commit/58305445e1ef13530c15e306d55c0ccfa823dea4) — 调整输入快捷键，支持编辑和分支历史消息，并增加代码感知文件编辑。
  - **证据:** [manifest](https://github.com/shifan3/dsh-QoL/blob/58305445e1ef13530c15e306d55c0ccfa823dea4/package.json) → [patch](https://github.com/shifan3/dsh-QoL/blob/58305445e1ef13530c15e306d55c0ccfa823dea4/cordis.patch.yml) · **身份:** `dsh-qol`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `message-edit` `session-data` `filesystem-write` `private-package` `license-unresolved` `identity-unresolved` · **核验备注:** 暂缓：包为私有，且未发现仓库许可证或公共分发身份；其即时客户端注入可编辑文件和会话历史，但均未加载。

- **DSH Memory Hermes** · [SipengXie2024/dsh-memory-hermes@a79f49f](https://github.com/SipengXie2024/dsh-memory-hermes/commit/a79f49f607c4df49ee344ff8ec3b86d80f33a387) — 实现带工具、存储、上下文注入和 Web 界面的有界精选 Hermes 风格记忆。
  - **证据:** [manifest](https://github.com/SipengXie2024/dsh-memory-hermes/blob/a79f49f607c4df49ee344ff8ec3b86d80f33a387/package.json) → [patch](https://github.com/SipengXie2024/dsh-memory-hermes/blob/a79f49f607c4df49ee344ff8ec3b86d80f33a387/cordis.patch.yml) · **身份:** `dsh-memory-hermes`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `persistent-memory` `filesystem-write` `context-injection` `model-tools` `client-injection` `local-package` `identity-unresolved` · **核验备注:** 暂缓：包未发布、无仓库元数据、使用通配 DSH Peer，并仅记录本地 Tarball 安装而非公共源码身份；未执行记忆操作。

- **DSH CLI Interactive** · [studyinglx/dsh-cli@83d1538](https://github.com/studyinglx/dsh-cli/commit/83d1538c83a630cc5989a2cb3c238c0956ba4ef5) — 基于 DSH Agent、命令、LLM 和会话服务提供 Claude Code 风格交互终端 Profile。
  - **证据:** [manifest](https://github.com/studyinglx/dsh-cli/blob/83d1538c83a630cc5989a2cb3c238c0956ba4ef5/package.json) → [patch](https://github.com/studyinglx/dsh-cli/blob/83d1538c83a630cc5989a2cb3c238c0956ba4ef5/cordis.patch.yml) · **身份:** `dsh-cli-interactive`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `terminal` `session-data` `model-request` `profile-bundle` `local-install` `identity-unresolved` · **核验备注:** 暂缓：包未发布且无仓库元数据，文档将 npm 发布列为后续工作并使用本地构建产物；未执行构建或终端会话。

- **DSH Marketplaces Nexus** · [TeaClearInkII/DSH-Marketplaces-Nexus@835a12c](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus/commit/835a12cc0f298713e197b24c2c92f3bde1533b44) — 将 DSH 插件市场与精选目录聚合为可搜索的浏览器面板，并展示安装命令元数据。
  - **证据:** [manifest](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus/blob/835a12cc0f298713e197b24c2c92f3bde1533b44/plugin/package.json) → [patch](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus/blob/835a12cc0f298713e197b24c2c92f3bde1533b44/plugin/cordis.patch.yml) · **身份:** `dsh-marketplaces-nexus`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `plugin-marketplace` `external-network` `remote-catalog` `install-command-data` `client-injection` `license-unresolved` `identity-unresolved` · **核验备注:** 暂缓：已发布包无仓库元数据，且未发现仓库许可证文件；未执行远程目录请求或安装命令。

- **DSH Live2D MyGO** · [U1s1-king/dsh-live2d-mygo@0605eeb](https://github.com/U1s1-king/dsh-live2d-mygo/commit/0605eeb15cc58a7bcb2f926e6ec90467ce74f6d7) — 加入 MyGO 主题 Live2D 桌面角色，支持换装、拖拽、拍照和台词气泡。
  - **证据:** [manifest](https://github.com/U1s1-king/dsh-live2d-mygo/blob/0605eeb15cc58a7bcb2f926e6ec90467ce74f6d7/package.json) → [patch](https://github.com/U1s1-king/dsh-live2d-mygo/blob/0605eeb15cc58a7bcb2f926e6ec90467ce74f6d7/cordis.patch.yml) · **身份:** `dsh-live2d-mygo`
  - **许可证:** repo `unknown` / package `CC-BY-NC-SA-4.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `live2d` `desktop-pet` `bundled-media` `third-party-assets` `client-injection` `license-unresolved` `identity-unresolved` · **核验备注:** 暂缓：未发现仓库许可证或公共分发身份，且仓库内含 82 张 MyGO 角色图片，其再利用权利未独立确认；未加载任何素材。

- **DSH UX Writing** · [uckkk/dsh-ux-writing@ecf5e64](https://github.com/uckkk/dsh-ux-writing/commit/ecf5e64fd2023bdfe24b3d368fd33a5e0f604e3f) — 提供用于撰写界面微文案、按钮和错误提示的模型工具与规范。
  - **证据:** [manifest](https://github.com/uckkk/dsh-ux-writing/blob/ecf5e64fd2023bdfe24b3d368fd33a5e0f604e3f/package.json) → [patch](https://github.com/uckkk/dsh-ux-writing/blob/ecf5e64fd2023bdfe24b3d368fd33a5e0f604e3f/cordis.patch.yml) · **身份:** `dsh-ux-writing`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `ux-writing` `model-tools` `prompt-guidance` `unresolved-install-identity` · **核验备注:** 暂缓：文档中的 dsh plugin add 目标未发布，且未发现独立 Git 源码安装命令或包仓库映射；未运行工具或提示规范。

- **DSH Config Manager** · [xiajiajun516/dsh-config-manager@a019bc3](https://github.com/xiajiajun516/dsh-config-manager/commit/a019bc376884cad392d59da02031f2de2f6653ad) — 通过 Host 工具和 Web 界面备份、导出、导入及迁移 DSH 配置。
  - **证据:** [manifest](https://github.com/xiajiajun516/dsh-config-manager/blob/a019bc376884cad392d59da02031f2de2f6653ad/package.json) → [patch](https://github.com/xiajiajun516/dsh-config-manager/blob/a019bc376884cad392d59da02031f2de2f6653ad/cordis.patch.yml) · **身份:** `dsh-config-manager`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `configuration-backup` `filesystem-read` `filesystem-write` `credentials` `model-tools` `client-injection` `license-unresolved` · **核验备注:** 暂缓：仓库与包均未声明许可证，且源码落后于当前 Registry 版本；未执行配置或 UI 操作。

- **DSH EvoForge** · [deepseek-harness-evoforge/dsh-evoforge@e8dada4](https://github.com/deepseek-harness-evoforge/dsh-evoforge/commit/e8dada4ac0dd277ca89fc8e1e19b82799badd093) — 面向证据驱动 Skill 进化、交付、诊断、渠道、Review 跟进与 Goal 连续性的 Pre-alpha 套件。
  - **证据:** [manifest](https://github.com/deepseek-harness-evoforge/dsh-evoforge/blob/e8dada4ac0dd277ca89fc8e1e19b82799badd093/packages/dsh-evolve/package.json) → [patch](https://github.com/deepseek-harness-evoforge/dsh-evoforge/blob/e8dada4ac0dd277ca89fc8e1e19b82799badd093/packages/dsh-evolve/cordis.patch.yml) · **身份:** `dsh-evolve`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `aggregate-scope` `skills` `filesystem-read` `filesystem-write` `external-network` `subprocess` `prepack-build` `unresolved-install-identity` · **核验备注:** 暂缓：作者明确尚无 Registry Release，当前 11 包安装需本地构建并打包 Tarball；未执行构建、打包、Skill 变更、渠道、子进程或外部请求。

- **DSH Subagent Default Model** · [dingminhua/dsh-subagent-default-model@cd69656](https://github.com/dingminhua/dsh-subagent-default-model/commit/cd69656171c0603954a00825f3ed5b49d6b159af) — 为未显式指定路由的 Subagent 委派提供由设置驱动的默认 Provider 与模型。
  - **证据:** [manifest](https://github.com/dingminhua/dsh-subagent-default-model/blob/cd69656171c0603954a00825f3ed5b49d6b159af/plugin/package.json) → [patch](https://github.com/dingminhua/dsh-subagent-default-model/blob/cd69656171c0603954a00825f3ed5b49d6b159af/plugin/cordis.patch.yml) · **身份:** `dsh-subagent-default-model`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `subagent-routing` `settings-write` `nested-bundle` `unresolved-install-identity` · **核验备注:** 暂缓：可分发 Bundle 位于 plugin 子目录，未发现 npm Release 或作者记录的公开子目录安装身份；未更改设置或 Subagent 路由。

- **DjangoAILab DSH Plugins** · [DjangoAILab/dsh-plugins@459d852](https://github.com/DjangoAILab/dsh-plugins/commit/459d8528b3d2cc6bb232ad01957177fe271dbd1d) — 手工插件集合，代表性 Bundle 将外部 CLI Agent 暴露为 DSH Subagent Provider。
  - **证据:** [manifest](https://github.com/DjangoAILab/dsh-plugins/blob/459d8528b3d2cc6bb232ad01957177fe271dbd1d/plugins/manual/dsh-external-agents/package.json) → [patch](https://github.com/DjangoAILab/dsh-plugins/blob/459d8528b3d2cc6bb232ad01957177fe271dbd1d/plugins/manual/dsh-external-agents/cordis.patch.yml) · **身份:** `dsh-external-agents`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-agent` `subprocess` `credentials` `nested-bundle` `aggregate-scope` `unresolved-install-identity` · **核验备注:** 暂缓：手工 Monorepo 子目录无 Package Release 或作者记录的公开子目录安装身份；未执行外部 CLI、凭据转发、子进程、上传路由或浏览器代码。

- **DSH Third Party Suite** · [huangrx6/dsh-plugin@7a57cec](https://github.com/huangrx6/dsh-plugin/commit/7a57cec35156f28d390ddb0d889d7c560ae2d196) — 在 DSH 设置中聚合布局、MCP、远程访问与 Skill 管理插件的套件入口。
  - **证据:** [manifest](https://github.com/huangrx6/dsh-plugin/blob/7a57cec35156f28d390ddb0d889d7c560ae2d196/dsh-third-party/package.json) → [patch](https://github.com/huangrx6/dsh-plugin/blob/7a57cec35156f28d390ddb0d889d7c560ae2d196/dsh-third-party/cordis.patch.yml) · **身份:** `dsh-third-party`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `aggregate-scope` `client-injection` `mcp-management` `skill-import` `external-network` `prepare-build` `unresolved-install-identity` · **核验备注:** 暂缓：5 个嵌套包无 Registry Release 或作者记录的公开子目录安装身份，且仓库缺少许可证文件；未执行构建、MCP、Skill、Tailscale 或 UI 行为。

- **DSH Plugs** · [JustGenius-s/DSH-Plugs@574f791](https://github.com/JustGenius-s/DSH-Plugs/commit/574f791a1a6c25f66900d3312a5d1a79f97168c3) — 包含 Codex 风格导航、更新、模型配置、市场与微信式界面的六插件套件。
  - **证据:** [manifest](https://github.com/JustGenius-s/DSH-Plugs/blob/574f791a1a6c25f66900d3312a5d1a79f97168c3/plugins/dsh-codex/package.json) → [patch](https://github.com/JustGenius-s/DSH-Plugs/blob/574f791a1a6c25f66900d3312a5d1a79f97168c3/plugins/dsh-codex/cordis.patch.yml) · **身份:** `@just-genius/dsh-codex`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、package license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Balance Plugin** · [kongshan-zhuyu/dsh-balance-plugin@e866642](https://github.com/kongshan-zhuyu/dsh-balance-plugin/commit/e8666428b0bd2fbd7fcdccc9c729bbe15b4f5410) — 组合 DSH Host 与 Client 余额组件的私有嵌套 Bundle。
  - **证据:** [manifest](https://github.com/kongshan-zhuyu/dsh-balance-plugin/blob/e8666428b0bd2fbd7fcdccc9c729bbe15b4f5410/packages/dsh-bundle-balance/package.json) → [patch](https://github.com/kongshan-zhuyu/dsh-balance-plugin/blob/e8666428b0bd2fbd7fcdccc9c729bbe15b4f5410/packages/dsh-bundle-balance/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-bundle-balance`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `billing-data` `credentials` `external-network` `client-injection` `nested-bundle` `license-unresolved` `unresolved-install-identity` · **核验备注:** 暂缓：私有嵌套 Bundle 无仓库或包许可证、Registry Release 或公开子目录安装身份；未执行余额请求、凭据解析或 Client UI。

- **DSH Kingdom** · [lusblead/dsh-Kingdom@d55cc25](https://github.com/lusblead/dsh-Kingdom/commit/d55cc25abe21a33fe6722fd014fe20e5c8efbfa7) — 为 DSH Session 提供本地王国 Territory、Binding、任务治理与执行生命周期能力。
  - **证据:** [manifest](https://github.com/lusblead/dsh-Kingdom/blob/d55cc25abe21a33fe6722fd014fe20e5c8efbfa7/package.json) → [patch](https://github.com/lusblead/dsh-Kingdom/blob/d55cc25abe21a33fe6722fd014fe20e5c8efbfa7/cordis.patch.yml) · **身份:** `dsh-kingdom`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **Neplich DSH Plugin Suite** · [Neplich/dsh_plugin@8a54a60](https://github.com/Neplich/dsh_plugin/commit/8a54a60e1e78f025a2744853d4c822cad40ab665) — 覆盖浏览器自动化、图片归档、Chat 增强、配置、Skills 与终端工作面板的多包套件。
  - **证据:** [manifest](https://github.com/Neplich/dsh_plugin/blob/8a54a60e1e78f025a2744853d4c822cad40ab665/packages/feature/dsh-web-workpanel/package.json) → [patch](https://github.com/Neplich/dsh_plugin/blob/8a54a60e1e78f025a2744853d4c822cad40ab665/packages/feature/dsh-web-workpanel/cordis.patch.yml) · **身份:** `@neplich/dsh-web-workpanel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `aggregate-scope` `browser-automation` `filesystem-read` `filesystem-write` `subprocess` `client-injection` `unresolved-install-identity` · **核验备注:** 暂缓：11 个嵌套包无 Registry Release 或作者记录的公开子目录安装身份；未执行浏览器自动化、图片归档、文件编辑、MCP 或 Skill 变更、终端或构建。

- **DSH Environment Probe** · [nodata404/dsh-env-probe@a0dd6f1](https://github.com/nodata404/dsh-env-probe/commit/a0dd6f1bfdf4a8c1c0b498b22bcd5ea59dcde0b7) — 探测本机操作系统、Shell、运行时、工具、磁盘与网络环境，并注入系统提示词。
  - **证据:** [manifest](https://github.com/nodata404/dsh-env-probe/blob/a0dd6f1bfdf4a8c1c0b498b22bcd5ea59dcde0b7/package.json) → [patch](https://github.com/nodata404/dsh-env-probe/blob/a0dd6f1bfdf4a8c1c0b498b22bcd5ea59dcde0b7/cordis.patch.yml) · **身份:** `dsh-env-probe`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `environment-probe` `system-prompt` `local-machine-data` `identity-unresolved` · **核验备注:** 暂缓：包未发布、README 无公开安装身份且仓库缺少许可证文件；未运行任何探测。

- **DSH HarmonyOS Scrcpy** · [ns-zzj/dsh-hos-scrcpy@2126bb2](https://github.com/ns-zzj/dsh-hos-scrcpy/commit/2126bb2aa509b58f35aba8f6ef2257afaacc085d) — 提供鸿蒙设备发现、实时投屏、触控、系统按键与 hilog 访问。
  - **证据:** [manifest](https://github.com/ns-zzj/dsh-hos-scrcpy/blob/2126bb2aa509b58f35aba8f6ef2257afaacc085d/PluginMain-Static/package.json) → [patch](https://github.com/ns-zzj/dsh-hos-scrcpy/blob/2126bb2aa509b58f35aba8f6ef2257afaacc085d/PluginMain-Static/cordis.patch.yml) · **身份:** `dsh-hos-scrcpy`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `device-control` `screen-streaming` `system-keys` `log-access` `identity-unresolved` · **核验备注:** 暂缓：包未发布，文档仅说明安装本地构建的 tarball；未执行设备或命令操作。

- **DSH Harness Plugin** · [Proton1917/dsh-harness-plugin@4c597c8](https://github.com/Proton1917/dsh-harness-plugin/commit/4c597c86ec4595104e4e31a2468a1dd643452b15) — 为 DSH Web 添加实时使用统计与个性化界面定制。
  - **证据:** [manifest](https://github.com/Proton1917/dsh-harness-plugin/blob/4c597c86ec4595104e4e31a2468a1dd643452b15/package.json) → [patch](https://github.com/Proton1917/dsh-harness-plugin/blob/4c597c86ec4595104e4e31a2468a1dd643452b15/cordis.patch.yml) · **身份:** `@proton1917/dsh-harness-plugin`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `usage-statistics` `client-injection` `tokenizer` `prepare-build` `identity-unresolved` · **核验备注:** 暂缓：作用域包未发布，README 仅记录机器特定的本地 link；未执行构建、分词器或 UI 行为。

- **Restrict Discipline** · [refyon/restrict-discipline@52c5c81](https://github.com/refyon/restrict-discipline/commit/52c5c81df5cb3ff5dff46e71bc87eeaf61fb1024) — 阻止高风险项目根目录写入及部分环境、代理和远程 Git 变更。
  - **证据:** [manifest](https://github.com/refyon/restrict-discipline/blob/52c5c81df5cb3ff5dff46e71bc87eeaf61fb1024/package.json) → [patch](https://github.com/refyon/restrict-discipline/blob/52c5c81df5cb3ff5dff46e71bc87eeaf61fb1024/cordis.patch.yml) · **身份:** `restrict-discipline`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `policy-enforcement` `filesystem-guard` `environment-guard` `git-guard` `identity-unresolved` · **核验备注:** 暂缓：文档中的 Registry 名称未发布，GitHub 示例使用占位所有者而非本仓库；未执行策略钩子。

- **DSH Wallpaper Engine** · [sakuraaa667/dsh-wallpaper-engine@63ffd5c](https://github.com/sakuraaa667/dsh-wallpaper-engine/commit/63ffd5c9155a1b0275525ed6b084caec84f0bafc) — 将本地下载的 Wallpaper Engine 资源用作 DSH Web 背景。
  - **证据:** [manifest](https://github.com/sakuraaa667/dsh-wallpaper-engine/blob/63ffd5c9155a1b0275525ed6b084caec84f0bafc/package.json) → [patch](https://github.com/sakuraaa667/dsh-wallpaper-engine/blob/63ffd5c9155a1b0275525ed6b084caec84f0bafc/cordis.patch.yml) · **身份:** `dsh-wallpaper-engine`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `wallpaper-engine` `filesystem-read` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：Registry 包已撤下，README 仅记录本地文件安装；未执行资源扫描或 UI 行为。

- **DSH Image Describer** · [shuxu-zhao/dsh-image-dscriber@071d388](https://github.com/shuxu-zhao/dsh-image-dscriber/commit/071d388675b183cc9b7a648bfa4fc5455c726b59) — 添加由可配置 DSH 视觉供应商支持的图片描述工具。
  - **证据:** [manifest](https://github.com/shuxu-zhao/dsh-image-dscriber/blob/071d388675b183cc9b7a648bfa4fc5455c726b59/package.json) → [patch](https://github.com/shuxu-zhao/dsh-image-dscriber/blob/071d388675b183cc9b7a648bfa4fc5455c726b59/cordis.patch.yml) · **身份:** `dsh-image-describer`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `vision-model` `model-tool` `attachments` `external-network` `license-unresolved` `identity-unresolved` · **核验备注:** 暂缓：包未发布、包许可证未声明且文档仅使用本地源码目录；未执行图片或模型操作。

- **DSH RAGFlow** · [staff-os/dsh-ragflow@e018a34](https://github.com/staff-os/dsh-ragflow/commit/e018a34027f6db0bf0315d7308178ea3a92ec998) — 为 DSH 添加 RAGFlow 知识库检索、工具、HTTP 服务与浏览器配置。
  - **证据:** [manifest](https://github.com/staff-os/dsh-ragflow/blob/e018a34027f6db0bf0315d7308178ea3a92ec998/package.json) → [patch](https://github.com/staff-os/dsh-ragflow/blob/e018a34027f6db0bf0315d7308178ea3a92ec998/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-ragflow`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `rag-retrieval` `external-network` `credentials` `model-tools` `client-injection` `license-unresolved` · **核验备注:** 暂缓：虽记录了 GitHub 安装身份，但仓库缺少许可证文件；未执行检索、HTTP、工具或 UI 行为。

- **DSH UI Tools** · [xing-shuyin/dsh-ui-tools@5ec7817](https://github.com/xing-shuyin/dsh-ui-tools/commit/5ec7817f416aa682e6528744b9017ce8ecd44079) — 为 DSH Web 添加项目文件查看器、多终端面板与 Git 操作。
  - **证据:** [manifest](https://github.com/xing-shuyin/dsh-ui-tools/blob/5ec7817f416aa682e6528744b9017ce8ecd44079/package.json) → [patch](https://github.com/xing-shuyin/dsh-ui-tools/blob/5ec7817f416aa682e6528744b9017ce8ecd44079/cordis.patch.yml) · **身份:** `dsh-ui-tools`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `file-manager` `terminal` `git-operations` `filesystem-write` `client-injection` `license-unresolved` · **核验备注:** 暂缓：Registry 包虽声明 MIT，但仓库缺少许可证文件；未执行终端、Git、文件或 UI 操作。

- **DSH Encrypt** · [yauntyour/DSH-Encrypt@7e1bab4](https://github.com/yauntyour/DSH-Encrypt/commit/7e1bab4ad72d829fd4ba23164fe52fe497f4096c) — 通过 Web UI 管理以 AES-256-GCM 加密文件保存的 DSH 凭据。
  - **证据:** [manifest](https://github.com/yauntyour/DSH-Encrypt/blob/7e1bab4ad72d829fd4ba23164fe52fe497f4096c/package.json) → [patch](https://github.com/yauntyour/DSH-Encrypt/blob/7e1bab4ad72d829fd4ba23164fe52fe497f4096c/cordis.patch.yml) · **身份:** `dsh-encrypt`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `credential-storage` `encryption` `filesystem-write` `native-dependency` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：包未发布，文档仅说明本地 tarball 或路径安装；未执行原生依赖、加密、凭据或预打包操作。

- **Zzy DSH Prompt Optimizer** · [zhengzeyong9527-droid/zzy-dsh-prompt-optimizer@3cf32c5](https://github.com/zhengzeyong9527-droid/zzy-dsh-prompt-optimizer/commit/3cf32c5f5d2fde485b0c7b3d25f150c0e553391e) — 为 DSH 输入框添加注重隐私、可直接应用的提示词优化。
  - **证据:** [manifest](https://github.com/zhengzeyong9527-droid/zzy-dsh-prompt-optimizer/blob/3cf32c5f5d2fde485b0c7b3d25f150c0e553391e/package.json) → [patch](https://github.com/zhengzeyong9527-droid/zzy-dsh-prompt-optimizer/blob/3cf32c5f5d2fde485b0c7b3d25f150c0e553391e/cordis.patch.yml) · **身份:** `zzy-dsh-prompt-optimizer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `prompt-optimization` `model-request` `client-injection` `prepack-build` `identity-unresolved` · **核验备注:** 暂缓：文档中的 Registry 包未发布且未记录公开 Git 安装身份；未执行提示词、模型、UI 或构建操作。

- **DSH Bridge** · [baixianger/dsh-bridge@3644483](https://github.com/baixianger/dsh-bridge/commit/36444838928df000b1f11fa0e20828ab71975c06) — 为 DeepSeek Harness 节点提供本地会话消息与事件桥接。
  - **证据:** [manifest](https://github.com/baixianger/dsh-bridge/blob/36444838928df000b1f11fa0e20828ab71975c06/package.json) → [patch](https://github.com/baixianger/dsh-bridge/blob/36444838928df000b1f11fa0e20828ab71975c06/cordis.patch.yml) · **身份:** `dsh-bridge`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-messaging` `event-bridge` `local-network` `license-incomplete` · **核验备注:** 暂缓：npm 发布物与包清单声明 MIT，但固定源码仓库缺少许可证文件；未运行桥接行为。

- **DSH System Restart** · [kdeightx/dsh-dock@a0da26e](https://github.com/kdeightx/dsh-dock/commit/a0da26e3e316a980f010d09c7353358ea6dd0130) — 在侧边栏加入请求重启 DeepSeek Harness Web 进程的控件。
  - **证据:** [manifest](https://github.com/kdeightx/dsh-dock/blob/a0da26e3e316a980f010d09c7353358ea6dd0130/dsh-system-restart/package.json) → [patch](https://github.com/kdeightx/dsh-dock/blob/a0da26e3e316a980f010d09c7353358ea6dd0130/dsh-system-restart/cordis.patch.yml) · **身份:** `dsh-system-restart`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `process-control` `subprocess` `filesystem-write` `client-injection` `license-incomplete` · **核验备注:** 暂缓：固定源码仓库缺少许可证文件；未执行未发布的本地源码安装或进程控制实现。

- **DSH Studio** · [lai-133/dsh-integration@f5598fb](https://github.com/lai-133/dsh-integration/commit/f5598fbc64c3dad5d6a51267b95dfbc21993a2dc) — 为集成式 DSH 桌面工作区加入壁纸控制与智能体协作看板。
  - **证据:** [manifest](https://github.com/lai-133/dsh-integration/blob/f5598fbc64c3dad5d6a51267b95dfbc21993a2dc/plugins/dsh-studio/package.json) → [patch](https://github.com/lai-133/dsh-integration/blob/f5598fbc64c3dad5d6a51267b95dfbc21993a2dc/plugins/dsh-studio/cordis.patch.yml) · **身份:** `dsh-studio`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `desktop-integration` `wallpaper` `agent-collaboration` `filesystem-write` `subprocess` `identity-unresolved` · **核验备注:** 暂缓：嵌套 bundle 仅由外层桌面安装流程装入，缺少独立 npm 或 Git 源安装身份；未运行 setup 或桌面代码。

- **DSH LAN Access** · [nonmean/dsh-lan-access@fe6a4de](https://github.com/nonmean/dsh-lan-access/commit/fe6a4de294b490d0982676fdc9e0b23adcbc296f) — 在仅回环与局域网监听之间切换 DSH Web 服务器绑定地址。
  - **证据:** [manifest](https://github.com/nonmean/dsh-lan-access/blob/fe6a4de294b490d0982676fdc9e0b23adcbc296f/package.json) → [patch](https://github.com/nonmean/dsh-lan-access/blob/fe6a4de294b490d0982676fdc9e0b23adcbc296f/cordis.patch.yml) · **身份:** `dsh-lan-access`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `network-exposure` `bind-all-interfaces` `credentials` `dynamic-patch` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：包未发布且文档 Git 安装示例仍保留 owner 与 repository 占位符；未执行网络暴露、凭据或动态 patch 行为。

- **DSH HUD** · [a903067276-rgb/dsh-hud@569daa8](https://github.com/a903067276-rgb/dsh-hud/commit/569daa816b4457d27ae1b4e6588c7fc5fff6b92f) — DSH HUD 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/a903067276-rgb/dsh-hud/blob/569daa816b4457d27ae1b4e6588c7fc5fff6b92f/package.json) → [patch](https://github.com/a903067276-rgb/dsh-hud/blob/569daa816b4457d27ae1b4e6588c7fc5fff6b92f/cordis.patch.yml) · **身份:** `dsh-hud`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `process-control` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Voice AI Girlfriend** · [beiyege-01/dsh-voice-ai-girlfriend-plugin@8f346d1](https://github.com/beiyege-01/dsh-voice-ai-girlfriend-plugin/commit/8f346d12b200947a31634ab75c4876bf78b81ffa) — DSH Voice AI Girlfriend 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/beiyege-01/dsh-voice-ai-girlfriend-plugin/blob/8f346d12b200947a31634ab75c4876bf78b81ffa/package.json) → [patch](https://github.com/beiyege-01/dsh-voice-ai-girlfriend-plugin/blob/8f346d12b200947a31634ab75c4876bf78b81ffa/cordis.patch.yml) · **身份:** `@beiyege-01/dsh-voice-ai-girlfriend`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `prepare` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **Mop Learn** · [Chillizu/mop-plugins@328630f](https://github.com/Chillizu/mop-plugins/commit/328630ff4d6a91ba772d3511ef0895dca357e675) — Mop Learn 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Chillizu/mop-plugins/blob/328630ff4d6a91ba772d3511ef0895dca357e675/packages/mop-learn/package.json) → [patch](https://github.com/Chillizu/mop-plugins/blob/328630ff4d6a91ba772d3511ef0895dca357e675/packages/mop-learn/cordis.patch.yml) · **身份:** `@chillizu/mop-learn`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `license-incomplete` · **核验备注:** 暂缓：package license不完整；未执行生命周期 hook、插件或相关能力。

- **Uiskin Theme** · [chouxiaohuai/dsh-uiskin-theme@50f6ee0](https://github.com/chouxiaohuai/dsh-uiskin-theme/commit/50f6ee04073d7609ebaffaa563ebba3487c9a2d7) — Uiskin Theme 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/chouxiaohuai/dsh-uiskin-theme/blob/50f6ee04073d7609ebaffaa563ebba3487c9a2d7/package.json) → [patch](https://github.com/chouxiaohuai/dsh-uiskin-theme/blob/50f6ee04073d7609ebaffaa563ebba3487c9a2d7/cordis.patch.yml) · **身份:** `uiskin-theme`
  - **许可证:** repo `UNLICENSED` / package `UNLICENSED` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Texas Holdem** · [cxczy/dsh-texas-holdem@24dee05](https://github.com/cxczy/dsh-texas-holdem/commit/24dee054d1b2a62c2d6fef8750eaf85bd817bfa7) — DSH Texas Holdem 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/cxczy/dsh-texas-holdem/blob/24dee054d1b2a62c2d6fef8750eaf85bd817bfa7/package.json) → [patch](https://github.com/cxczy/dsh-texas-holdem/blob/24dee054d1b2a62c2d6fef8750eaf85bd817bfa7/cordis.patch.yml) · **身份:** `dsh-texas-holdem`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `prepublish-only` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Livefeed** · [ErrorLst/dsh-livefeed@4b98964](https://github.com/ErrorLst/dsh-livefeed/commit/4b98964937031f50a7cdbb638371e78d1e6b4472) — DSH Livefeed 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ErrorLst/dsh-livefeed/blob/4b98964937031f50a7cdbb638371e78d1e6b4472/package.json) → [patch](https://github.com/ErrorLst/dsh-livefeed/blob/4b98964937031f50a7cdbb638371e78d1e6b4472/cordis.patch.yml) · **身份:** `@dsh-external/dsh-livefeed`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `browser` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Live** · [fore-vip/dsh-live@d07268a](https://github.com/fore-vip/dsh-live/commit/d07268a119c0187a830fd9f8fa15a482776fcb0d) — DSH Live 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fore-vip/dsh-live/blob/d07268a119c0187a830fd9f8fa15a482776fcb0d/package.json) → [patch](https://github.com/fore-vip/dsh-live/blob/d07268a119c0187a830fd9f8fa15a482776fcb0d/cordis.patch.yml) · **身份:** `dsh-live`
  - **许可证:** repo `unknown` / package `UNLICENSED` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `license-incomplete` · **核验备注:** 暂缓：repository license、package license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH CTF Console** · [fyfhcgch/dsh-ctf-collaborate@ceadb54](https://github.com/fyfhcgch/dsh-ctf-collaborate/commit/ceadb543b2143c9fa6e0847ef277d41e60dd605b) — DSH CTF Console 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fyfhcgch/dsh-ctf-collaborate/blob/ceadb543b2143c9fa6e0847ef277d41e60dd605b/dsh-ctf-team/plugins/ctf-console/package.json) → [patch](https://github.com/fyfhcgch/dsh-ctf-collaborate/blob/ceadb543b2143c9fa6e0847ef277d41e60dd605b/dsh-ctf-team/plugins/ctf-console/cordis.patch.yml) · **身份:** `@dsh-external/dsh-ctf-console`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `docker` `database` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Permission Engine** · [greatColin/dsh-permission-engine@10908c4](https://github.com/greatColin/dsh-permission-engine/commit/10908c4ad982c331891bc6a6a06c0a2df275d286) — DSH Permission Engine 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/greatColin/dsh-permission-engine/blob/10908c4ad982c331891bc6a6a06c0a2df275d286/packages/dsh-permission-engine/package.json) → [patch](https://github.com/greatColin/dsh-permission-engine/blob/10908c4ad982c331891bc6a6a06c0a2df275d286/packages/dsh-permission-engine/lib/bundle.cordis.patch.yml) · **身份:** `@yourname/dsh-permission-engine`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `client-injection` `stale-peer-range` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：package license、installation identity、current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **Deepseek Harness Background** · [HaoyueQin/deepseek-harness-background@e7174e4](https://github.com/HaoyueQin/deepseek-harness-background/commit/e7174e4b168bdcaea792db01446c8cb2ee478541) — Deepseek Harness Background 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/HaoyueQin/deepseek-harness-background/blob/e7174e4b168bdcaea792db01446c8cb2ee478541/package.json) → [patch](https://github.com/HaoyueQin/deepseek-harness-background/blob/e7174e4b168bdcaea792db01446c8cb2ee478541/cordis.patch.yml) · **身份:** `deepseek-harness-background`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `prepare` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH LLM Qoder** · [JiamingZang/dsh-llm-qodersdk@89658ae](https://github.com/JiamingZang/dsh-llm-qodersdk/commit/89658ae7f7067d99f7edb71c045660e962302dd7) — DSH LLM Qoder 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/JiamingZang/dsh-llm-qodersdk/blob/89658ae7f7067d99f7edb71c045660e962302dd7/package.json) → [patch](https://github.com/JiamingZang/dsh-llm-qodersdk/blob/89658ae7f7067d99f7edb71c045660e962302dd7/cordis.patch.yml) · **身份:** `@jiamingzang/dsh-llm-qoder`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `mcp` `prepublish-only` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **Bundle** · [kael-odin/dsh-control-center@882f04d](https://github.com/kael-odin/dsh-control-center/commit/882f04db64c74c64c6bec599429b817a469b0a2a) — Bundle 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kael-odin/dsh-control-center/blob/882f04db64c74c64c6bec599429b817a469b0a2a/packages/bundle/package.json) → [patch](https://github.com/kael-odin/dsh-control-center/blob/882f04db64c74c64c6bec599429b817a469b0a2a/packages/bundle/cordis.patch.yml) · **身份:** `@dsh-control-center/bundle`
  - **许可证:** repo `AGPL-3.0` / package `AGPL-3.0-only` · 生命周期 `none` · peer range 混合
  - **能力信号:** `credentials` `mcp` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Whale Lap** · [Linzr-lly/dsh-whale-lap@8ab057d](https://github.com/Linzr-lly/dsh-whale-lap/commit/8ab057dfbe3e05f4dbe03e910a32dc3a15498d7f) — DSH Whale Lap 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Linzr-lly/dsh-whale-lap/blob/8ab057dfbe3e05f4dbe03e910a32dc3a15498d7f/package.json) → [patch](https://github.com/Linzr-lly/dsh-whale-lap/blob/8ab057dfbe3e05f4dbe03e910a32dc3a15498d7f/cordis.patch.yml) · **身份:** `dsh-whale-lap`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Term Explainer** · [lizhicai-geh/term-explainer@682bc21](https://github.com/lizhicai-geh/term-explainer/commit/682bc21fca90238eeedd51c35d8bf6a6a81d2301) — DSH Term Explainer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lizhicai-geh/term-explainer/blob/682bc21fca90238eeedd51c35d8bf6a6a81d2301/package.json) → [patch](https://github.com/lizhicai-geh/term-explainer/blob/682bc21fca90238eeedd51c35d8bf6a6a81d2301/cordis.patch.yml) · **身份:** `dsh-term-explainer`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `prepare` `license-incomplete` · **核验备注:** 暂缓：repository license、package license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Workflow Settings** · [MFWTW/dsh-UI-web@c6b91d8](https://github.com/MFWTW/dsh-UI-web/commit/c6b91d84f134f42fa6b0a5999a42ac17af1b7180) — DSH Workflow Settings 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MFWTW/dsh-UI-web/blob/c6b91d84f134f42fa6b0a5999a42ac17af1b7180/dsh-workflow-settings/package.json) → [patch](https://github.com/MFWTW/dsh-UI-web/blob/c6b91d84f134f42fa6b0a5999a42ac17af1b7180/dsh-workflow-settings/cordis.patch.yml) · **身份:** `dsh-workflow-settings`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、package license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Plugin Market** · [newbieYi/dsh-plugin-market@746fe6f](https://github.com/newbieYi/dsh-plugin-market/commit/746fe6fda0dc90b801207d7931ba09f277e8469e) — DSH Plugin Market 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/newbieYi/dsh-plugin-market/blob/746fe6fda0dc90b801207d7931ba09f277e8469e/package.json) → [patch](https://github.com/newbieYi/dsh-plugin-market/blob/746fe6fda0dc90b801207d7931ba09f277e8469e/cordis.patch.yml) · **身份:** `dsh-plugin-market`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `filesystem` `external-network` `credentials` `client-injection` `process-control` `license-incomplete` · **核验备注:** 暂缓：repository license、package license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tryboard Plugin** · [nexsjournal/dsh-tryboard-plugin@98c134d](https://github.com/nexsjournal/dsh-tryboard-plugin/commit/98c134dc5152c27934b1de03d66f44e947c783e9) — DSH Tryboard Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/nexsjournal/dsh-tryboard-plugin/blob/98c134dc5152c27934b1de03d66f44e947c783e9/package.json) → [patch](https://github.com/nexsjournal/dsh-tryboard-plugin/blob/98c134dc5152c27934b1de03d66f44e947c783e9/cordis.patch.yml) · **身份:** `dsh-tryboard-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Codex Sidebar** · [NOirBRight/dsh-codex-sidebar@cdf14ad](https://github.com/NOirBRight/dsh-codex-sidebar/commit/cdf14addbd42b391152911443d8d887670d874cc) — DSH Codex Sidebar 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/NOirBRight/dsh-codex-sidebar/blob/cdf14addbd42b391152911443d8d887670d874cc/package.json) → [patch](https://github.com/NOirBRight/dsh-codex-sidebar/blob/cdf14addbd42b391152911443d8d887670d874cc/cordis.patch.yml) · **身份:** `dsh-codex-sidebar`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `browser` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH LLM Assistant** · [NOirBRight/dsh-llm-assistant@874fc4d](https://github.com/NOirBRight/dsh-llm-assistant/commit/874fc4de35dc50a51300d8241e2fe2c5eb083480) — DSH LLM Assistant 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/NOirBRight/dsh-llm-assistant/blob/874fc4de35dc50a51300d8241e2fe2c5eb083480/package.json) → [patch](https://github.com/NOirBRight/dsh-llm-assistant/blob/874fc4de35dc50a51300d8241e2fe2c5eb083480/cordis.patch.yml) · **身份:** `dsh-llm-assistant`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Run2skill** · [qkycir-123/dsh-run2skill@076be7c](https://github.com/qkycir-123/dsh-run2skill/commit/076be7c29d818d27064bc9f03ece9dcd37280719) — DSH Run2skill 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/qkycir-123/dsh-run2skill/blob/076be7c29d818d27064bc9f03ece9dcd37280719/package.json) → [patch](https://github.com/qkycir-123/dsh-run2skill/blob/076be7c29d818d27064bc9f03ece9dcd37280719/cordis.patch.yml) · **身份:** `dsh-run2skill`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Aseprite** · [Ratevoid/dsh-aseprite@bb48ec5](https://github.com/Ratevoid/dsh-aseprite/commit/bb48ec5e237cf5984b53a4c4ee9c1ed358c85050) — DSH Aseprite 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ratevoid/dsh-aseprite/blob/bb48ec5e237cf5984b53a4c4ee9c1ed358c85050/package.json) → [patch](https://github.com/Ratevoid/dsh-aseprite/blob/bb48ec5e237cf5984b53a4c4ee9c1ed358c85050/cordis.patch.yml) · **身份:** `dsh-aseprite`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `process-control` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Plugin Leaderboard** · [shaoxia20240902/dsh-plugin-leaderboard@586b1be](https://github.com/shaoxia20240902/dsh-plugin-leaderboard/commit/586b1bea746b4c69d1f0965717b9506bd949afb2) — DSH Plugin Leaderboard 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/shaoxia20240902/dsh-plugin-leaderboard/blob/586b1bea746b4c69d1f0965717b9506bd949afb2/package.json) → [patch](https://github.com/shaoxia20240902/dsh-plugin-leaderboard/blob/586b1bea746b4c69d1f0965717b9506bd949afb2/cordis.patch.yml) · **身份:** `dsh-plugin-leaderboard`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `database` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Gdash Parkour** · [SonnPyker/dsh-gdash-parkour@01daf99](https://github.com/SonnPyker/dsh-gdash-parkour/commit/01daf995a604aa652d4cf2239ec12b4b716d16f5) — DSH Gdash Parkour 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SonnPyker/dsh-gdash-parkour/blob/01daf995a604aa652d4cf2239ec12b4b716d16f5/package.json) → [patch](https://github.com/SonnPyker/dsh-gdash-parkour/blob/01daf995a604aa652d4cf2239ec12b4b716d16f5/cordis.patch.yml) · **身份:** `dsh-gdash-parkour`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `process-control` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Feishu Todo** · [StanleyXu512/dsh-feishu-todo@b44dc5c](https://github.com/StanleyXu512/dsh-feishu-todo/commit/b44dc5c9ed73bdfb498fb965f00030087529cde9) — DSH Feishu Todo 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/StanleyXu512/dsh-feishu-todo/blob/b44dc5c9ed73bdfb498fb965f00030087529cde9/package.json) → [patch](https://github.com/StanleyXu512/dsh-feishu-todo/blob/b44dc5c9ed73bdfb498fb965f00030087529cde9/cordis.patch.yml) · **身份:** `dsh-feishu-todo`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Kimi Tide** · [tafcear/kimi-tide@100a5d0](https://github.com/tafcear/kimi-tide/commit/100a5d0c13f95bbe2e60d5bf94cf53ab8c40bc4b) — DSH Kimi Tide 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/tafcear/kimi-tide/blob/100a5d0c13f95bbe2e60d5bf94cf53ab8c40bc4b/packages/dsh-kimi-tide/package.json) → [patch](https://github.com/tafcear/kimi-tide/blob/100a5d0c13f95bbe2e60d5bf94cf53ab8c40bc4b/packages/dsh-kimi-tide/cordis.patch.yml) · **身份:** `dsh-kimi-tide`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Codex Sub** · [TakahisaI/dsh-codex-sub@d530fc3](https://github.com/TakahisaI/dsh-codex-sub/commit/d530fc3b97d87400ab6ea7a295a7699896322664) — DSH Codex Sub 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/TakahisaI/dsh-codex-sub/blob/d530fc3b97d87400ab6ea7a295a7699896322664/package.json) → [patch](https://github.com/TakahisaI/dsh-codex-sub/blob/d530fc3b97d87400ab6ea7a295a7699896322664/cordis.patch.yml) · **身份:** `dsh-codex-sub`
  - **许可证:** repo `MIT` / package `UNLICENSED` · 生命周期 `none` · peer range 混合
  - **能力信号:** `credentials` `mcp` `license-incomplete` · **核验备注:** 暂缓：package license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Plugin Manager Community** · [TAOxxx7/dsh-plugin-manager@06abe0a](https://github.com/TAOxxx7/dsh-plugin-manager/commit/06abe0a7f808b360726465d78ba33a6b9fb518a8) — DSH Plugin Manager Community 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/TAOxxx7/dsh-plugin-manager/blob/06abe0a7f808b360726465d78ba33a6b9fb518a8/package.json) → [patch](https://github.com/TAOxxx7/dsh-plugin-manager/blob/06abe0a7f808b360726465d78ba33a6b9fb518a8/cordis.patch.yml) · **身份:** `dsh-plugin-manager-community`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 落后于 rc.6 基线
  - **能力信号:** `client-injection` `process-control` `prepublish-only` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Wx Desktop** · [wangxilhy23/dsh-wx-desktop@97b0d42](https://github.com/wangxilhy23/dsh-wx-desktop/commit/97b0d42fab530d39d577b3d4f7eb156ed067b75e) — DSH Wx Desktop 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wangxilhy23/dsh-wx-desktop/blob/97b0d42fab530d39d577b3d4f7eb156ed067b75e/package.json) → [patch](https://github.com/wangxilhy23/dsh-wx-desktop/blob/97b0d42fab530d39d577b3d4f7eb156ed067b75e/cordis.patch.yml) · **身份:** `dsh-wx-desktop`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Vision** · [xiaoxiao44443/deepseek-harness-plugins@03f3bcb](https://github.com/xiaoxiao44443/deepseek-harness-plugins/commit/03f3bcba9c1ee59802b591d0e8aea65d5bc84535) — DSH Vision 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xiaoxiao44443/deepseek-harness-plugins/blob/03f3bcba9c1ee59802b591d0e8aea65d5bc84535/plugins/vision/package.json) → [patch](https://github.com/xiaoxiao44443/deepseek-harness-plugins/blob/03f3bcba9c1ee59802b591d0e8aea65d5bc84535/plugins/vision/cordis.patch.yml) · **身份:** `@dfy-plugins/dsh-vision`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `credentials` `client-injection` `process-control` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Skill Manager** · [yanglaofish/dsh-skill-manager@7ee39e9](https://github.com/yanglaofish/dsh-skill-manager/commit/7ee39e948054395627aeb16ff58d8b5c77258a5a) — DSH Skill Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yanglaofish/dsh-skill-manager/blob/7ee39e948054395627aeb16ff58d8b5c77258a5a/package.json) → [patch](https://github.com/yanglaofish/dsh-skill-manager/blob/7ee39e948054395627aeb16ff58d8b5c77258a5a/cordis.patch.yml) · **身份:** `dsh-skill-manager`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `process-control` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Account Usage** · [Ycet/dsh-account-usage@58294b6](https://github.com/Ycet/dsh-account-usage/commit/58294b699b504ea00e8fe90b29ab31ec694fff24) — DSH Account Usage 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ycet/dsh-account-usage/blob/58294b699b504ea00e8fe90b29ab31ec694fff24/package.json) → [patch](https://github.com/Ycet/dsh-account-usage/blob/58294b699b504ea00e8fe90b29ab31ec694fff24/cordis.patch.yml) · **身份:** `dsh-account-usage`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Archive Manager** · [Ycet/dsh-archive-manager@fadce5e](https://github.com/Ycet/dsh-archive-manager/commit/fadce5e24b892fbe25b0a20be369b76813d75202) — DSH Archive Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ycet/dsh-archive-manager/blob/fadce5e24b892fbe25b0a20be369b76813d75202/package.json) → [patch](https://github.com/Ycet/dsh-archive-manager/blob/fadce5e24b892fbe25b0a20be369b76813d75202/cordis.patch.yml) · **身份:** `dsh-archive-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `database` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH My Plugins** · [Ycet/dsh-my-plugins@d52a19a](https://github.com/Ycet/dsh-my-plugins/commit/d52a19ab7cde6a5e3364660c341a1b6ba9e81857) — DSH My Plugins 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ycet/dsh-my-plugins/blob/d52a19ab7cde6a5e3364660c341a1b6ba9e81857/package.json) → [patch](https://github.com/Ycet/dsh-my-plugins/blob/d52a19ab7cde6a5e3364660c341a1b6ba9e81857/cordis.patch.yml) · **身份:** `dsh-my-plugins`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Notifications** · [Ycet/dsh-notifications@66afdf2](https://github.com/Ycet/dsh-notifications/commit/66afdf265eba33b25b82430bbf1ba192f3d83b85) — DSH Notifications 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ycet/dsh-notifications/blob/66afdf265eba33b25b82430bbf1ba192f3d83b85/package.json) → [patch](https://github.com/Ycet/dsh-notifications/blob/66afdf265eba33b25b82430bbf1ba192f3d83b85/cordis.patch.yml) · **身份:** `dsh-notifications`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Petdex Pet** · [zenglihunter/dsh-petdex-pet@dd2fdea](https://github.com/zenglihunter/dsh-petdex-pet/commit/dd2fdead2bf88a7fb854f94f262e9649d4230777) — DSH Petdex Pet 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zenglihunter/dsh-petdex-pet/blob/dd2fdead2bf88a7fb854f94f262e9649d4230777/package.json) → [patch](https://github.com/zenglihunter/dsh-petdex-pet/blob/dd2fdead2bf88a7fb854f94f262e9649d4230777/cordis.patch.yml) · **身份:** `@dsh-external/dsh-petdex-pet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **Wan Tavern** · [aipaigyx/wan-tavern@5e0e98c](https://github.com/aipaigyx/wan-tavern/commit/5e0e98c87cbb7119b511da1fb85e3995e2e16b28) — Wan Tavern 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/aipaigyx/wan-tavern/blob/5e0e98c87cbb7119b511da1fb85e3995e2e16b28/package.json) → [patch](https://github.com/aipaigyx/wan-tavern/blob/5e0e98c87cbb7119b511da1fb85e3995e2e16b28/cordis.patch.yml) · **身份:** `wan-tavern`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Encoding Guard** · [andimial/dsh-encoding-guard@3c02698](https://github.com/andimial/dsh-encoding-guard/commit/3c02698a7b54cdd8e6046a146b22b87d692d4f71) — DSH Encoding Guard 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/andimial/dsh-encoding-guard/blob/3c02698a7b54cdd8e6046a146b22b87d692d4f71/package.json) → [patch](https://github.com/andimial/dsh-encoding-guard/blob/3c02698a7b54cdd8e6046a146b22b87d692d4f71/cordis.patch.yml) · **身份:** `dsh-encoding-guard`
  - **许可证:** repo `unknown` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Vision Triage** · [CeasarSmj/dsh-vision-triage@cbbdc55](https://github.com/CeasarSmj/dsh-vision-triage/commit/cbbdc551b1d2453b4203bcbbfd66dddf7c7ee7bc) — DSH Vision Triage 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/CeasarSmj/dsh-vision-triage/blob/cbbdc551b1d2453b4203bcbbfd66dddf7c7ee7bc/plugin/package.json) → [patch](https://github.com/CeasarSmj/dsh-vision-triage/blob/cbbdc551b1d2453b4203bcbbfd66dddf7c7ee7bc/plugin/cordis.patch.yml) · **身份:** `dsh-vision-triage`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `mcp` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Codex Taskboard** · [chuspeeism/dashi-taskboard@5503ad2](https://github.com/chuspeeism/dashi-taskboard/commit/5503ad2fb1e42648e9ed03f7f1c6fb590b9d158e) — DSH Codex Taskboard 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/chuspeeism/dashi-taskboard/blob/5503ad2fb1e42648e9ed03f7f1c6fb590b9d158e/integrations/deepseek-harness/package.json) → [patch](https://github.com/chuspeeism/dashi-taskboard/blob/5503ad2fb1e42648e9ed03f7f1c6fb590b9d158e/integrations/deepseek-harness/cordis.patch.yml) · **身份:** `dsh-codex-taskboard`
  - **许可证:** repo `Apache-2.0` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：package license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Pet Engine** · [cxin21/dsh-pet-engine@a82cf5e](https://github.com/cxin21/dsh-pet-engine/commit/a82cf5e99a9573fcd8dfd68817e51963e745d215) — DSH Pet Engine 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/cxin21/dsh-pet-engine/blob/a82cf5e99a9573fcd8dfd68817e51963e745d215/package.json) → [patch](https://github.com/cxin21/dsh-pet-engine/blob/a82cf5e99a9573fcd8dfd68817e51963e745d215/cordis.patch.yml) · **身份:** `dsh-pet-engine`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `system-prompt` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **My Skin** · [fthuu/my-skin-for-DeepSeek-Harness@58ce052](https://github.com/fthuu/my-skin-for-DeepSeek-Harness/commit/58ce0528a6a56a1a9948ba32d369cedd419b5a71) — My Skin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fthuu/my-skin-for-DeepSeek-Harness/blob/58ce0528a6a56a1a9948ba32d369cedd419b5a71/package.json) → [patch](https://github.com/fthuu/my-skin-for-DeepSeek-Harness/blob/58ce0528a6a56a1a9948ba32d369cedd419b5a71/cordis.patch.yml) · **身份:** `my-skin`
  - **许可证:** repo `custom` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **Better Shell Tools** · [gao-gao-zai/BetterShell@994d0b5](https://github.com/gao-gao-zai/BetterShell/commit/994d0b51b3faae5d1ef83c53cbf34b25eb1d685d) — Better Shell Tools 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/gao-gao-zai/BetterShell/blob/994d0b51b3faae5d1ef83c53cbf34b25eb1d685d/packages/better-shell-tools/package.json) → [patch](https://github.com/gao-gao-zai/BetterShell/blob/994d0b51b3faae5d1ef83c53cbf34b25eb1d685d/packages/better-shell-tools/cordis.patch.yml) · **身份:** `@gao-gao-zai/better-shell-tools`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem` `external-network` `client-injection` `process-control` `license-incomplete` · **核验备注:** 暂缓：package license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Arkiv** · [Haven-hvn/deepseek-harness-web3-agent-stack@2f1e01b](https://github.com/Haven-hvn/deepseek-harness-web3-agent-stack/commit/2f1e01b311d92dac30f939b67641b8e28b32461e) — DSH Arkiv 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Haven-hvn/deepseek-harness-web3-agent-stack/blob/2f1e01b311d92dac30f939b67641b8e28b32461e/dsh-arkiv/package.json) → [patch](https://github.com/Haven-hvn/deepseek-harness-web3-agent-stack/blob/2f1e01b311d92dac30f939b67641b8e28b32461e/dsh-arkiv/cordis.patch.yml) · **身份:** `dsh-arkiv`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `database` `financial` `prepare` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Email Reader** · [huaxiren6/dsh-email-reader@5a8fbf7](https://github.com/huaxiren6/dsh-email-reader/commit/5a8fbf7beadac1953fc06491aaf4d4312d9a6094) — DSH Email Reader 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/huaxiren6/dsh-email-reader/blob/5a8fbf7beadac1953fc06491aaf4d4312d9a6094/package.json) → [patch](https://github.com/huaxiren6/dsh-email-reader/blob/5a8fbf7beadac1953fc06491aaf4d4312d9a6094/cordis.patch.yml) · **身份:** `dsh-email-reader`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `email` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH SMS Webhook** · [huaxiren6/dsh-sms-webhook@fce8fad](https://github.com/huaxiren6/dsh-sms-webhook/commit/fce8fad0c76c11076bc3b79af256f1fca9366172) — DSH SMS Webhook 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/huaxiren6/dsh-sms-webhook/blob/fce8fad0c76c11076bc3b79af256f1fca9366172/package.json) → [patch](https://github.com/huaxiren6/dsh-sms-webhook/blob/fce8fad0c76c11076bc3b79af256f1fca9366172/cordis.patch.yml) · **身份:** `dsh-sms-webhook`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **Zero21m DSH Plugin** · [Hyjkblj/ZERO21M@0b2f2cd](https://github.com/Hyjkblj/ZERO21M/commit/0b2f2cd8f0528dede4cea0b7032201d16ee88134) — Zero21m DSH Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Hyjkblj/ZERO21M/blob/0b2f2cd8f0528dede4cea0b7032201d16ee88134/package.json) → [patch](https://github.com/Hyjkblj/ZERO21M/blob/0b2f2cd8f0528dede4cea0b7032201d16ee88134/adapters/deepseek/zero21m-dsh-plugin/cordis.patch.yml) · **身份:** `zero21m-dsh-plugin`
  - **许可证:** repo `unknown` / package `UNLICENSED` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `financial` `license-incomplete` · **核验备注:** 暂缓：repository license、package license不完整；未执行生命周期 hook、插件或相关能力。

- **Ji Theme** · [jikllji/DSH-JI-Plugins@2b41a34](https://github.com/jikllji/DSH-JI-Plugins/commit/2b41a34832803e524d37a8b33dca3f1f65cf7344) — Ji Theme 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/jikllji/DSH-JI-Plugins/blob/2b41a34832803e524d37a8b33dca3f1f65cf7344/ji-theme/package.json) → [patch](https://github.com/jikllji/DSH-JI-Plugins/blob/2b41a34832803e524d37a8b33dca3f1f65cf7344/ji-theme/cordis.patch.yml) · **身份:** `ji-theme`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `credentials` `client-injection` `process-control` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Learning** · [kaikaixiaotian/deepseek-harness-learning-space@4afd990](https://github.com/kaikaixiaotian/deepseek-harness-learning-space/commit/4afd990d254a0dcedda1e89340202bafd87bd72c) — DSH Learning 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kaikaixiaotian/deepseek-harness-learning-space/blob/4afd990d254a0dcedda1e89340202bafd87bd72c/packages/dsh-learning/package.json) → [patch](https://github.com/kaikaixiaotian/deepseek-harness-learning-space/blob/4afd990d254a0dcedda1e89340202bafd87bd72c/packages/dsh-learning/cordis.patch.yml) · **身份:** `dsh-learning`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `filesystem` `credentials` `client-injection` `prepare` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **Remex DSH Plugin** · [kteja-av/remex-dsh-plugin@f8579b2](https://github.com/kteja-av/remex-dsh-plugin/commit/f8579b2129ab3e06ce1ee67fb3996922dd9a0f74) — Remex DSH Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kteja-av/remex-dsh-plugin/blob/f8579b2129ab3e06ce1ee67fb3996922dd9a0f74/package.json) → [patch](https://github.com/kteja-av/remex-dsh-plugin/blob/f8579b2129ab3e06ce1ee67fb3996922dd9a0f74/cordis.patch.yml) · **身份:** `@your-scope/remex-dsh-plugin`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `prepare` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Fail Soft** · [lanbaolu/dsh-fail-soft@5d1380f](https://github.com/lanbaolu/dsh-fail-soft/commit/5d1380fe0e3467897a995aeb36dcac2869c1cbad) — DSH Fail Soft 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lanbaolu/dsh-fail-soft/blob/5d1380fe0e3467897a995aeb36dcac2869c1cbad/package.json) → [patch](https://github.com/lanbaolu/dsh-fail-soft/blob/5d1380fe0e3467897a995aeb36dcac2869c1cbad/cordis.patch.yml) · **身份:** `@lanbaolu/dsh-fail-soft`
  - **许可证:** repo `unknown` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **Meeting Brain Dashboard** · [lin927/meeting-brain-dashboard@6e87837](https://github.com/lin927/meeting-brain-dashboard/commit/6e878372446a60cc9ed7caa9d56a4d2335413db0) — Meeting Brain Dashboard 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lin927/meeting-brain-dashboard/blob/6e878372446a60cc9ed7caa9d56a4d2335413db0/package.json) → [patch](https://github.com/lin927/meeting-brain-dashboard/blob/6e878372446a60cc9ed7caa9d56a4d2335413db0/cordis.patch.yml) · **身份:** `meeting-brain-dashboard`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Onevoke** · [luagioAI2/dsh-onevoke@7c8d033](https://github.com/luagioAI2/dsh-onevoke/commit/7c8d033d6644b0c64ae8944151abd52d8f8daf3e) — DSH Onevoke 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/luagioAI2/dsh-onevoke/blob/7c8d033d6644b0c64ae8944151abd52d8f8daf3e/package.json) → [patch](https://github.com/luagioAI2/dsh-onevoke/blob/7c8d033d6644b0c64ae8944151abd52d8f8daf3e/cordis.patch.yml) · **身份:** `dsh-onevoke`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `system-prompt` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Security Audit** · [omdsh-dev/dsh-security-audit@bcf475c](https://github.com/omdsh-dev/dsh-security-audit/commit/bcf475cf753893bd06f3bfae4cf18f3e136a321b) — DSH Security Audit 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-security-audit/blob/bcf475cf753893bd06f3bfae4cf18f3e136a321b/package.json) → [patch](https://github.com/omdsh-dev/dsh-security-audit/blob/bcf475cf753893bd06f3bfae4cf18f3e136a321b/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-security-audit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `financial` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Session Health** · [omdsh-dev/dsh-session-health@f4142ba](https://github.com/omdsh-dev/dsh-session-health/commit/f4142ba5023721238c0b176b49eaadb245242af2) — DSH Session Health 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-session-health/blob/f4142ba5023721238c0b176b49eaadb245242af2/package.json) → [patch](https://github.com/omdsh-dev/dsh-session-health/blob/f4142ba5023721238c0b176b49eaadb245242af2/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-session-health`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool CSV** · [omdsh-dev/dsh-tool-csv@03781b4](https://github.com/omdsh-dev/dsh-tool-csv/commit/03781b48c78b71440196cf95c70c0cdfbad0c575) — DSH Tool CSV 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-tool-csv/blob/03781b48c78b71440196cf95c70c0cdfbad0c575/package.json) → [patch](https://github.com/omdsh-dev/dsh-tool-csv/blob/03781b48c78b71440196cf95c70c0cdfbad0c575/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tool-csv`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool Diff** · [omdsh-dev/dsh-tool-diff@cc1d1b7](https://github.com/omdsh-dev/dsh-tool-diff/commit/cc1d1b74582f92d857c692f13e2b268a3136de2c) — DSH Tool Diff 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-tool-diff/blob/cc1d1b74582f92d857c692f13e2b268a3136de2c/package.json) → [patch](https://github.com/omdsh-dev/dsh-tool-diff/blob/cc1d1b74582f92d857c692f13e2b268a3136de2c/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tool-diff`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `email` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool Encoding** · [omdsh-dev/dsh-tool-encoding@401daed](https://github.com/omdsh-dev/dsh-tool-encoding/commit/401daed7002094ac8077fae4b7506d3ea9b851d9) — DSH Tool Encoding 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-tool-encoding/blob/401daed7002094ac8077fae4b7506d3ea9b851d9/package.json) → [patch](https://github.com/omdsh-dev/dsh-tool-encoding/blob/401daed7002094ac8077fae4b7506d3ea9b851d9/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tool-encoding`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `financial` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool Markdown** · [omdsh-dev/dsh-tool-markdown@ea295ee](https://github.com/omdsh-dev/dsh-tool-markdown/commit/ea295ee36a5ac3ff91a0604cac385dd128a07a5f) — DSH Tool Markdown 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-tool-markdown/blob/ea295ee36a5ac3ff91a0604cac385dd128a07a5f/package.json) → [patch](https://github.com/omdsh-dev/dsh-tool-markdown/blob/ea295ee36a5ac3ff91a0604cac385dd128a07a5f/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tool-markdown`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool Regex** · [omdsh-dev/dsh-tool-regex@928c650](https://github.com/omdsh-dev/dsh-tool-regex/commit/928c6505416a6ce162612db0d2e5bd687f3823b6) — DSH Tool Regex 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-tool-regex/blob/928c6505416a6ce162612db0d2e5bd687f3823b6/package.json) → [patch](https://github.com/omdsh-dev/dsh-tool-regex/blob/928c6505416a6ce162612db0d2e5bd687f3823b6/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tool-regex`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool Schema** · [omdsh-dev/dsh-tool-schema@a3b3f5d](https://github.com/omdsh-dev/dsh-tool-schema/commit/a3b3f5dbad2eefdf8b383ce27de229e318b8070b) — DSH Tool Schema 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-tool-schema/blob/a3b3f5dbad2eefdf8b383ce27de229e318b8070b/package.json) → [patch](https://github.com/omdsh-dev/dsh-tool-schema/blob/a3b3f5dbad2eefdf8b383ce27de229e318b8070b/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tool-schema`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool Stat** · [omdsh-dev/dsh-tool-stat@581dd88](https://github.com/omdsh-dev/dsh-tool-stat/commit/581dd881bd2ee872d8f3add53352bdc95a0c12cf) — DSH Tool Stat 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-tool-stat/blob/581dd881bd2ee872d8f3add53352bdc95a0c12cf/package.json) → [patch](https://github.com/omdsh-dev/dsh-tool-stat/blob/581dd881bd2ee872d8f3add53352bdc95a0c12cf/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tool-stat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `prepack` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Rlm Bundle** · [OpenCnid/deepseek-rlm@79b6b28](https://github.com/OpenCnid/deepseek-rlm/commit/79b6b28e16c7305e8e791f2d8c9d2935e75ade60) — DSH Rlm Bundle 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/OpenCnid/deepseek-rlm/blob/79b6b28e16c7305e8e791f2d8c9d2935e75ade60/packages/bundle/package.json) → [patch](https://github.com/OpenCnid/deepseek-rlm/blob/79b6b28e16c7305e8e791f2d8c9d2935e75ade60/packages/bundle/dsh.bundle.patch) · **身份:** `@deepseek-rlm/dsh-rlm-bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `system-prompt` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Quant** · [pengpengyi92/dsh-quant@08b942f](https://github.com/pengpengyi92/dsh-quant/commit/08b942fe34aa584c668f91022d8334f287a71802) — DSH Quant 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/pengpengyi92/dsh-quant/blob/08b942fe34aa584c668f91022d8334f287a71802/package.json) → [patch](https://github.com/pengpengyi92/dsh-quant/blob/08b942fe34aa584c668f91022d8334f287a71802/cordis.patch.yml) · **身份:** `dsh-quant`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `process-control` `system-prompt` `financial` `prepublish-only` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Vct Arena** · [print-li/dsh-vct-arena@034f6ea](https://github.com/print-li/dsh-vct-arena/commit/034f6eaf729630242f628d3c354e7a29b24ab1fa) — DSH Vct Arena 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/print-li/dsh-vct-arena/blob/034f6eaf729630242f628d3c354e7a29b24ab1fa/package.json) → [patch](https://github.com/print-li/dsh-vct-arena/blob/034f6eaf729630242f628d3c354e7a29b24ab1fa/cordis.patch.yml) · **身份:** `dsh-vct-arena`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `credentials` `client-injection` `identity-unresolved` · **核验备注:** 暂缓：installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Server Auth** · [ptrel1/dsh-server-auth@10afc03](https://github.com/ptrel1/dsh-server-auth/commit/10afc03a6ffc008e130f0ff6503fc7cf5cd0a948) — DSH Server Auth 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ptrel1/dsh-server-auth/blob/10afc03a6ffc008e130f0ff6503fc7cf5cd0a948/package.json) → [patch](https://github.com/ptrel1/dsh-server-auth/blob/10afc03a6ffc008e130f0ff6503fc7cf5cd0a948/cordis.patch.yml) · **身份:** `dsh-server-auth`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Lark Bridge Web** · [shrekcg/dsh-im-channel@fb64263](https://github.com/shrekcg/dsh-im-channel/commit/fb64263341fba403a051b3c3fa9875933c425f8c) — DSH Lark Bridge Web 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/shrekcg/dsh-im-channel/blob/fb64263341fba403a051b3c3fa9875933c425f8c/web-plugin/package.json) → [patch](https://github.com/shrekcg/dsh-im-channel/blob/fb64263341fba403a051b3c3fa9875933c425f8c/web-plugin/cordis.patch.yml) · **身份:** `dsh-lark-bridge-web`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：package license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Anti Slop** · [try-works/dsh-anti-slop@23e5ddf](https://github.com/try-works/dsh-anti-slop/commit/23e5ddf170e4fc331a1bb628aa8e5d18b97e75b2) — DSH Anti Slop 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/try-works/dsh-anti-slop/blob/23e5ddf170e4fc331a1bb628aa8e5d18b97e75b2/package.json) → [patch](https://github.com/try-works/dsh-anti-slop/blob/23e5ddf170e4fc331a1bb628aa8e5d18b97e75b2/cordis.patch.yml) · **身份:** `@try-works/dsh-anti-slop`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `client-injection` `process-control` `system-prompt` `prepublish-only` `stale-peer-range` · **核验备注:** 暂缓：current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Plugin** · [vTRKA/supervibe-dsh@9542a98](https://github.com/vTRKA/supervibe-dsh/commit/9542a98677d077c2a9abf3a1b193a07c087d15f1) — DSH Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/vTRKA/supervibe-dsh/blob/9542a98677d077c2a9abf3a1b193a07c087d15f1/packages/supervibe-dsh/package.json) → [patch](https://github.com/vTRKA/supervibe-dsh/blob/9542a98677d077c2a9abf3a1b193a07c087d15f1/packages/supervibe-dsh/cordis.patch.yml) · **身份:** `@supervibe/dsh-plugin`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · peer range 混合
  - **能力信号:** `process-control` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、package license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Tool Session** · [wangxing-git/dsh-tool-session@f1db0ba](https://github.com/wangxing-git/dsh-tool-session/commit/f1db0bac18474528b6877c3e745f2bab34f38c97) — DSH Tool Session 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wangxing-git/dsh-tool-session/blob/f1db0bac18474528b6877c3e745f2bab34f38c97/package.json) → [patch](https://github.com/wangxing-git/dsh-tool-session/blob/f1db0bac18474528b6877c3e745f2bab34f38c97/cordis.patch.yml) · **身份:** `dsh-tool-session`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `client-injection` `prepublish-only` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Client UI Pet Go2** · [wanwango/dsh-pet@31e0c80](https://github.com/wanwango/dsh-pet/commit/31e0c80d7dc831cf7a2c846d873a2b2baf5fa4c6) — DSH Client UI Pet Go2 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wanwango/dsh-pet/blob/31e0c80d7dc831cf7a2c846d873a2b2baf5fa4c6/package.json) → [patch](https://github.com/wanwango/dsh-pet/blob/31e0c80d7dc831cf7a2c846d873a2b2baf5fa4c6/cordis.patch.yml) · **身份:** `@dsh-external/dsh-client-ui-pet-go2`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、installation identity不完整；未执行生命周期 hook、插件或相关能力。

- **Unity Bridge** · [ydd12333/unity-bridge@bd5e8cc](https://github.com/ydd12333/unity-bridge/commit/bd5e8ccaa21b7b5d0918d007ca61159d29239e00) — Unity Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ydd12333/unity-bridge/blob/bd5e8ccaa21b7b5d0918d007ca61159d29239e00/package.json) → [patch](https://github.com/ydd12333/unity-bridge/blob/bd5e8ccaa21b7b5d0918d007ca61159d29239e00/cordis.patch.yml) · **身份:** `unity-bridge`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `mcp` `docker` `license-incomplete` · **核验备注:** 暂缓：repository license不完整；未执行生命周期 hook、插件或相关能力。

- **Novel Harness** · [yunianshu/Node-harness@e5515a6](https://github.com/yunianshu/Node-harness/commit/e5515a6f2e4a53222e5d63b9fe1e90b6277fc1da) — Novel Harness 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yunianshu/Node-harness/blob/e5515a6f2e4a53222e5d63b9fe1e90b6277fc1da/package.json) → [patch](https://github.com/yunianshu/Node-harness/blob/e5515a6f2e4a53222e5d63b9fe1e90b6277fc1da/cordis.patch.yml) · **身份:** `novel-harness`
  - **许可证:** repo `unknown` / package `unknown` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `credentials` `client-injection` `stale-peer-range` `license-incomplete` `identity-unresolved` · **核验备注:** 暂缓：repository license、package license、installation identity、current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **DSH Zgit** · [zukunftsholz/dsh-zgit@9ab017d](https://github.com/zukunftsholz/dsh-zgit/commit/9ab017d15732f2ba31e98198d7d8c5d4baa3c057) — DSH Zgit 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zukunftsholz/dsh-zgit/blob/9ab017d15732f2ba31e98198d7d8c5d4baa3c057/package.json) → [patch](https://github.com/zukunftsholz/dsh-zgit/blob/9ab017d15732f2ba31e98198d7d8c5d4baa3c057/cordis.patch.yml) · **身份:** `dsh-zgit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `filesystem` `external-network` `credentials` `system-prompt` `financial` `stale-peer-range` `identity-unresolved` · **核验备注:** 暂缓：installation identity、current DSH compatibility不完整；未执行生命周期 hook、插件或相关能力。

- **Whale Galaxy** · [AgentBuff/dsh-whale-galaxy@ffcf540](https://github.com/AgentBuff/dsh-whale-galaxy/commit/ffcf540277ec5dc35bdb6810c8542817ee083819) — DSH web background plugin 「鲸落星河」: a DeepSeek whale swimming through a particle galaxy — canvas starfield, drifting nebula, stardust whale wake, dark/light adaptive.
  - **证据:** [manifest](https://github.com/AgentBuff/dsh-whale-galaxy/blob/ffcf540277ec5dc35bdb6810c8542817ee083819/package.json) → [patch](https://github.com/AgentBuff/dsh-whale-galaxy/blob/ffcf540277ec5dc35bdb6810c8542817ee083819/cordis.patch.yml) · **身份:** `dsh-whale-galaxy`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `package-install` `vision` `theme` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Plugin** · [callmesoul/deepseek-kanban-plugin@57a30bc](https://github.com/callmesoul/deepseek-kanban-plugin/commit/57a30bc4aa9680e6395cd3daacec85f12ac98132) — DeepSeek Harness 任务看板插件（主机状态机 + git 调度 + 浏览器看板 UI）
  - **证据:** [manifest](https://github.com/callmesoul/deepseek-kanban-plugin/blob/57a30bc4aa9680e6395cd3daacec85f12ac98132/package.json) → [patch](https://github.com/callmesoul/deepseek-kanban-plugin/blob/57a30bc4aa9680e6395cd3daacec85f12ac98132/cordis.patch.yml) · **身份:** `@deepseek-kanban/plugin`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `model-tools` `package-install` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Generative UI** · [CNSeniorious000/dsh-generative-ui@bf97359](https://github.com/CNSeniorious000/dsh-generative-ui/commit/bf97359af1a6c74b105c44a7c908d61c6cf1a4a6) — Generative UI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/CNSeniorious000/dsh-generative-ui/blob/bf97359af1a6c74b105c44a7c908d61c6cf1a4a6/package.json) → [patch](https://github.com/CNSeniorious000/dsh-generative-ui/blob/bf97359af1a6c74b105c44a7c908d61c6cf1a4a6/cordis.patch.yml) · **身份:** `dsh-generative-ui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `process-control` `browser` `session-data` `model-tools` `theme` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Suite** · [DamonBao/dsh-codex-suite@492c5f6](https://github.com/DamonBao/dsh-codex-suite/commit/492c5f6d437e22ff630ceafca19d6c22535d432b) — Suite 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/DamonBao/dsh-codex-suite/blob/492c5f6d437e22ff630ceafca19d6c22535d432b/packages/all/package.json) → [patch](https://github.com/DamonBao/dsh-codex-suite/blob/492c5f6d437e22ff630ceafca19d6c22535d432b/packages/all/cordis.patch.yml) · **身份:** `@jcy2387/dsh-suite`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `filesystem-read` `filesystem-write` `session-data` `package-install` `vision` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Verifier Gate** · [DevRico003/dsh-verifier-gate@11a51b7](https://github.com/DevRico003/dsh-verifier-gate/commit/11a51b720fb1d9473e778941bcf15cedd8af1d7c) — Verifier Gate 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/DevRico003/dsh-verifier-gate/blob/11a51b720fb1d9473e778941bcf15cedd8af1d7c/package.json) → [patch](https://github.com/DevRico003/dsh-verifier-gate/blob/11a51b720fb1d9473e778941bcf15cedd8af1d7c/cordis.patch.yml) · **身份:** `dsh-verifier-gate`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `browser` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Blue** · [dsh-blue/blue@789ca9a](https://github.com/dsh-blue/blue/commit/789ca9a20e65c4006d4e8ce1ef8308162a735c61) — Blue 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dsh-blue/blue/blob/789ca9a20e65c4006d4e8ce1ef8308162a735c61/packages/bundle/blue/package.json) → [patch](https://github.com/dsh-blue/blue/blob/789ca9a20e65c4006d4e8ce1ef8308162a735c61/packages/bundle/blue/cordis.patch.yml) · **身份:** `@dsh-blue/blue`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `mcp` `browser` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Wallpaper Engine** · [elysia395/dsh-wallpaper-engine@053770d](https://github.com/elysia395/dsh-wallpaper-engine/commit/053770de24ff0e0810fcdc6f136d7f41b533f64f) — Wallpaper Engine 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/elysia395/dsh-wallpaper-engine/blob/053770de24ff0e0810fcdc6f136d7f41b533f64f/package.json) → [patch](https://github.com/elysia395/dsh-wallpaper-engine/blob/053770de24ff0e0810fcdc6f136d7f41b533f64f/cordis.patch.yml) · **身份:** `dsh-plugin-wallpaper-engine`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `subprocess` `browser` `package-install` `vision` `theme` `prepare` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Telegram Inbox** · [Eyalm321/dsh-telegram-inbox@2637193](https://github.com/Eyalm321/dsh-telegram-inbox/commit/2637193902fbd6c8b2d80b2a0e59360932dc8b12) — Telegram Inbox 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Eyalm321/dsh-telegram-inbox/blob/2637193902fbd6c8b2d80b2a0e59360932dc8b12/package.json) → [patch](https://github.com/Eyalm321/dsh-telegram-inbox/blob/2637193902fbd6c8b2d80b2a0e59360932dc8b12/cordis.patch.yml) · **身份:** `dsh-telegram-inbox`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `session-data` `model-tools` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **TUI** · [foxyiy/dsh-tui@091b435](https://github.com/foxyiy/dsh-tui/commit/091b43503817d7d5f3fe1c53545fe852f6439051) — TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/foxyiy/dsh-tui/blob/091b43503817d7d5f3fe1c53545fe852f6439051/package.json) → [patch](https://github.com/foxyiy/dsh-tui/blob/091b43503817d7d5f3fe1c53545fe852f6439051/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `database` `session-data` `system-prompt` `model-tools` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Session Cleaner** · [haoranwang0921/dsh-session-cleaner@31defe9](https://github.com/haoranwang0921/dsh-session-cleaner/commit/31defe9b95b2cae0f084729a41812fde6f81e6d5) — Session Cleaner 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/haoranwang0921/dsh-session-cleaner/blob/31defe9b95b2cae0f084729a41812fde6f81e6d5/package.json) → [patch](https://github.com/haoranwang0921/dsh-session-cleaner/blob/31defe9b95b2cae0f084729a41812fde6f81e6d5/cordis.patch.yml) · **身份:** `@haoranwang0921/dsh-session-cleaner`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `browser` `session-data` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Clarify** · [Hilbert-beinghappy/dsh-plugin-clarify@1640f7e](https://github.com/Hilbert-beinghappy/dsh-plugin-clarify/commit/1640f7e5fa04cf9531e558884210968e012dc927) — Clarify 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Hilbert-beinghappy/dsh-plugin-clarify/blob/1640f7e5fa04cf9531e558884210968e012dc927/package.json) → [patch](https://github.com/Hilbert-beinghappy/dsh-plugin-clarify/blob/1640f7e5fa04cf9531e558884210968e012dc927/cordis.patch.yml) · **身份:** `dsh-plugin-clarify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `session-data` `model-tools` `package-install` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Highschool Tutor** · [HokkaidoCOLA/dsh-highschool-tutor@c65153b](https://github.com/HokkaidoCOLA/dsh-highschool-tutor/commit/c65153b40950903c378e18bebdd12dde144c0b09) — 高中三年学习与巩固助手（语数英物化地）：错题本 + 艾宾浩斯间隔复习、知识卡片库、讲题时自动生成 2D/3D 动态演示、AI 出题与批改工具、每日计划与进度统计、高考倒计时与模考趋势
  - **证据:** [manifest](https://github.com/HokkaidoCOLA/dsh-highschool-tutor/blob/c65153b40950903c378e18bebdd12dde144c0b09/package.json) → [patch](https://github.com/HokkaidoCOLA/dsh-highschool-tutor/blob/c65153b40950903c378e18bebdd12dde144c0b09/cordis.patch.yml) · **身份:** `@dsh-external/dsh-highschool-tutor`
  - **许可证:** repo `GPL-3.0` / package `GPL-3.0-or-later` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `subprocess` `browser` `session-data` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Dshp Balance HP** · [HomoLand/dshp-balance-hp@7242f30](https://github.com/HomoLand/dshp-balance-hp/commit/7242f30f3b0d43956e1673ef931cbc233d803b1c) — DeepSeek 余额 HP 血量条插件（DSH Web GUI）：勾玉(三国杀)/红心(Minecraft)/血球(暗黑)/守望条等皮肤，HP=当前余额，上限=余额+今日消耗。
  - **证据:** [manifest](https://github.com/HomoLand/dshp-balance-hp/blob/7242f30f3b0d43956e1673ef931cbc233d803b1c/package.json) → [patch](https://github.com/HomoLand/dshp-balance-hp/blob/7242f30f3b0d43956e1673ef931cbc233d803b1c/cordis.patch.yml) · **身份:** `dshp-balance-hp`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `process-control` `browser` `financial` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Looklook** · [ideasir/dsh-looklook@7a11466](https://github.com/ideasir/dsh-looklook/commit/7a114661e0602c7899d297d865b9a4f9443e2c6b) — Looklook 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ideasir/dsh-looklook/blob/7a114661e0602c7899d297d865b9a4f9443e2c6b/package.json) → [patch](https://github.com/ideasir/dsh-looklook/blob/7a114661e0602c7899d297d865b9a4f9443e2c6b/cordis.patch.yml) · **身份:** `dsh-looklook`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `vision` `audio` `email` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tianjiao Apply Patch** · [ivwumupy/dsh-plugins@619f72b](https://github.com/ivwumupy/dsh-plugins/commit/619f72bd3550b09d003c90e1c0389723400b0ef9) — Tianjiao Apply Patch 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ivwumupy/dsh-plugins/blob/619f72bd3550b09d003c90e1c0389723400b0ef9/apply-patch/package.json) → [patch](https://github.com/ivwumupy/dsh-plugins/blob/619f72bd3550b09d003c90e1c0389723400b0ef9/apply-patch/cordis.patch.yml) · **身份:** `dsh-tianjiao-apply-patch`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `filesystem-read` `filesystem-write` `browser` `package-install` `vision` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Notemd** · [Jacobinwwey/dsh-NotEMD@586a31f](https://github.com/Jacobinwwey/dsh-NotEMD/commit/586a31f9004e214feb6c305af76da22470179b7a) — Notemd 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Jacobinwwey/dsh-NotEMD/blob/586a31f9004e214feb6c305af76da22470179b7a/packages/notemd-bundle/package.json) → [patch](https://github.com/Jacobinwwey/dsh-NotEMD/blob/586a31f9004e214feb6c305af76da22470179b7a/packages/notemd-bundle/cordis.patch.yml) · **身份:** `dsh-notemd`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `browser` `model-tools` `package-install` `vision` `nested-bundle` `license-incomplete` `stale-peer-range` · **核验备注:** 因repository license、package license、baseline compatibility证据不足或冲突而暂缓；未执行候选代码。

- **Capability Manager** · [kiligzzz/dsh-capability-manager@be872ea](https://github.com/kiligzzz/dsh-capability-manager/commit/be872eaf8c29b7ab0d248b97bea13588b075ad92) — Capability Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kiligzzz/dsh-capability-manager/blob/be872eaf8c29b7ab0d248b97bea13588b075ad92/package.json) → [patch](https://github.com/kiligzzz/dsh-capability-manager/blob/be872eaf8c29b7ab0d248b97bea13588b075ad92/cordis.patch.yml) · **身份:** `@kiligzzz/dsh-capability-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `mcp` `browser` `session-data` `system-prompt` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Hang Inspector** · [lemonmmice/dsh-hang-inspector@e469769](https://github.com/lemonmmice/dsh-hang-inspector/commit/e4697698f50347ac7c83bfd1cc19496787e35144) — Hang Inspector 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lemonmmice/dsh-hang-inspector/blob/e4697698f50347ac7c83bfd1cc19496787e35144/package.json) → [patch](https://github.com/lemonmmice/dsh-hang-inspector/blob/e4697698f50347ac7c83bfd1cc19496787e35144/cordis.patch.yml) · **身份:** `@linxin666/dsh-hang-inspector`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `browser` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Trace Insight** · [Liu-Bot24/dsh-trace-insight@e1e9a8f](https://github.com/Liu-Bot24/dsh-trace-insight/commit/e1e9a8fdf54a6faa1df5514a15495f6209d0183d) — Trace Insight 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Liu-Bot24/dsh-trace-insight/blob/e1e9a8fdf54a6faa1df5514a15495f6209d0183d/package.json) → [patch](https://github.com/Liu-Bot24/dsh-trace-insight/blob/e1e9a8fdf54a6faa1df5514a15495f6209d0183d/cordis.patch.yml) · **身份:** `dsh-plugin-trace-insight`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `session-data` `model-tools` `web-search` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Memory Plugin** · [ly028716/dsh-memory-plugin@a0b73e3](https://github.com/ly028716/dsh-memory-plugin/commit/a0b73e360b5b986babdb93eb42d16daec92b04f8) — Memory Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ly028716/dsh-memory-plugin/blob/a0b73e360b5b986babdb93eb42d16daec92b04f8/package.json) → [patch](https://github.com/ly028716/dsh-memory-plugin/blob/a0b73e360b5b986babdb93eb42d16daec92b04f8/cordis.patch.yml) · **身份:** `dsh-memory-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `browser` `session-data` `model-tools` `web-search` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Beautify** · [nlqh7/dsh-beautify@ed029c6](https://github.com/nlqh7/dsh-beautify/commit/ed029c69dc21f87390d716078081be03e3dded60) — Beautify 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/nlqh7/dsh-beautify/blob/ed029c69dc21f87390d716078081be03e3dded60/package.json) → [patch](https://github.com/nlqh7/dsh-beautify/blob/ed029c69dc21f87390d716078081be03e3dded60/cordis.patch.yml) · **身份:** `@nlqh/dsh-beautify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `package-install` `vision` `financial` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Browser Plus** · [ParticleLight/dsh-browser-plus@2f05b1d](https://github.com/ParticleLight/dsh-browser-plus/commit/2f05b1d96e5159df3ffd718a97e94fdd44116975) — Browser Plus 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ParticleLight/dsh-browser-plus/blob/2f05b1d96e5159df3ffd718a97e94fdd44116975/package.json) → [patch](https://github.com/ParticleLight/dsh-browser-plus/blob/2f05b1d96e5159df3ffd718a97e94fdd44116975/cordis.patch.yml) · **身份:** `dsh-browser-plus`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `client-injection` `subprocess` `browser` `session-data` `model-tools` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` `stale-peer-range` · **核验备注:** 因npm or Git-source installation identity、baseline compatibility证据不足或冲突而暂缓；未执行候选代码。

- **Reasoning Level** · [peterwangze/dsh-reasoning-level@71169c6](https://github.com/peterwangze/dsh-reasoning-level/commit/71169c6d00f2fdb47162f416a8bf72d6fc4067f5) — DeepSeek Harness 统一推理等级插件：一个 llm-reasoning 设置项动态配置 DSH 所有模型的默认推理等级（思考等级）——自动为手写声明的模型补齐推理能力、按路由设置默认等级（仅当全部模型支持）、同步 DeepSeek 官方路由，改设置即生效。
  - **证据:** [manifest](https://github.com/peterwangze/dsh-reasoning-level/blob/71169c6d00f2fdb47162f416a8bf72d6fc4067f5/package.json) → [patch](https://github.com/peterwangze/dsh-reasoning-level/blob/71169c6d00f2fdb47162f416a8bf72d6fc4067f5/cordis.patch.yml) · **身份:** `dsh-reasoning-level`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `session-data` `model-tools` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **A11y Focus** · [slohmaier/dsh-a11y-focus@f5ecfcb](https://github.com/slohmaier/dsh-a11y-focus/commit/f5ecfcb93538bb091db2f0b11562afe0dfa5859b) — A11y Focus 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/slohmaier/dsh-a11y-focus/blob/f5ecfcb93538bb091db2f0b11562afe0dfa5859b/package.json) → [patch](https://github.com/slohmaier/dsh-a11y-focus/blob/f5ecfcb93538bb091db2f0b11562afe0dfa5859b/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-a11y-focus`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `process-control` `browser` `session-data` `model-tools` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Client UI Skin Deep Whale Manager** · [Small-tailqwq/dsh-deep-whale@fb0c771](https://github.com/Small-tailqwq/dsh-deep-whale/commit/fb0c771b5748760a91aec88c085f5b23ca90fad1) — Client UI Skin Deep Whale Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Small-tailqwq/dsh-deep-whale/blob/fb0c771b5748760a91aec88c085f5b23ca90fad1/skin-manager/package.json) → [patch](https://github.com/Small-tailqwq/dsh-deep-whale/blob/fb0c771b5748760a91aec88c085f5b23ca90fad1/skin-manager/cordis.patch.yml) · **身份:** `@dsh-external/dsh-client-ui-skin-deep-whale-manager`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `theme` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Desktop** · [SuperPaiGu/dsh-desktop@174d034](https://github.com/SuperPaiGu/dsh-desktop/commit/174d034b8d9bec6860fcc6595109a20442400187) — Desktop 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SuperPaiGu/dsh-desktop/blob/174d034b8d9bec6860fcc6595109a20442400187/package.json) → [patch](https://github.com/SuperPaiGu/dsh-desktop/blob/174d034b8d9bec6860fcc6595109a20442400187/cordis.patch.yml) · **身份:** `dsh-desktop`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `filesystem-read` `filesystem-write` `subprocess` `package-install` `vision` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Simple Password** · [tomorrow285/my-dsh-plugins@304e0b7](https://github.com/tomorrow285/my-dsh-plugins/commit/304e0b7ef80ede22d9ae7753bb5ce6ea8ec5e39c) — Simple Password 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/tomorrow285/my-dsh-plugins/blob/304e0b7ef80ede22d9ae7753bb5ce6ea8ec5e39c/packages/dsh-simple-password/package.json) → [patch](https://github.com/tomorrow285/my-dsh-plugins/blob/304e0b7ef80ede22d9ae7753bb5ce6ea8ec5e39c/packages/dsh-simple-password/cordis.patch.yml) · **身份:** `dsh-simple-password`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `browser` `session-data` `package-install` `financial` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Mindmap** · [tuogusa/dsh-mindmap@2c98067](https://github.com/tuogusa/dsh-mindmap/commit/2c980670db44dd1dbae48bbf5b90ae1be691baa0) — DeepSeek Harness 思维导图插件：AI 回答自动整理为可编辑 Markdown，支持导出文件和生成图片；核心逻辑已内置，单包发布。
  - **证据:** [manifest](https://github.com/tuogusa/dsh-mindmap/blob/2c980670db44dd1dbae48bbf5b90ae1be691baa0/package.json) → [patch](https://github.com/tuogusa/dsh-mindmap/blob/2c980670db44dd1dbae48bbf5b90ae1be691baa0/cordis.patch.yml) · **身份:** `dsh-mindmap`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `session-data` `package-install` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **AI UI Studio** · [wjinxuan/dsh-ai-ui-studio@ea8eaf9](https://github.com/wjinxuan/dsh-ai-ui-studio/commit/ea8eaf9c6ee81c95e54230c496b9cfd13da97260) — AI UI Studio — 在 DSH 里预览你的 Web 应用，用拖拽/点选/AI 流式有效调整前端样式并写回源码
  - **证据:** [manifest](https://github.com/wjinxuan/dsh-ai-ui-studio/blob/ea8eaf9c6ee81c95e54230c496b9cfd13da97260/package.json) → [patch](https://github.com/wjinxuan/dsh-ai-ui-studio/blob/ea8eaf9c6ee81c95e54230c496b9cfd13da97260/cordis.patch.yml) · **身份:** `dsh-ai-ui-studio`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `filesystem-read` `subprocess` `model-tools` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **LAN IP Auth** · [xiaoguohaha/dsh-lan-ip-auth@575f59a](https://github.com/xiaoguohaha/dsh-lan-ip-auth/commit/575f59ae5d31ecbbd527527df7d6aa8940d8cabc) — LAN IP Auth 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xiaoguohaha/dsh-lan-ip-auth/blob/575f59ae5d31ecbbd527527df7d6aa8940d8cabc/package.json) → [patch](https://github.com/xiaoguohaha/dsh-lan-ip-auth/blob/575f59ae5d31ecbbd527527df7d6aa8940d8cabc/cordis.patch.yml) · **身份:** `dsh-lan-ip-auth`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `browser` `session-data` `package-install` `financial` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Wiki Bridge** · [xiaomao49/dsh-wiki-bridge@524c741](https://github.com/xiaomao49/dsh-wiki-bridge/commit/524c741b4ba364b354c6c49e5f98dde963eb0c40) — WikiBridge：DSH 与 Obsidian vault 的知识库桥接 —— 约束工具（wiki_search/read/write）+ 自动词典检索 + 持久化配置
  - **证据:** [manifest](https://github.com/xiaomao49/dsh-wiki-bridge/blob/524c741b4ba364b354c6c49e5f98dde963eb0c40/package.json) → [patch](https://github.com/xiaomao49/dsh-wiki-bridge/blob/524c741b4ba364b354c6c49e5f98dde963eb0c40/cordis.patch.yml) · **身份:** `dsh-wiki-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `process-control` `session-data` `package-install` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Image Vision** · [xiaoyuink/dsh-image-vision@e915a22](https://github.com/xiaoyuink/dsh-image-vision/commit/e915a222e2eed50378d4afd8ca2deff90ac87704) — 图片识别插件：自动判断当前模型是否具备视觉能力，有则用当前模型并按插件预设提示词分析，无则调用插件配置的视觉模型。文本模型可直接在对话框粘贴/上传/拖拽图片，发送时自动写入 DSH 附件存储（永久），消息区渲染缩略图，模型自动调用 image_vision / ocr / ground / crop 系列工具识别与精读；模型选择器保持简洁。
  - **证据:** [manifest](https://github.com/xiaoyuink/dsh-image-vision/blob/e915a222e2eed50378d4afd8ca2deff90ac87704/package.json) → [patch](https://github.com/xiaoyuink/dsh-image-vision/blob/e915a222e2eed50378d4afd8ca2deff90ac87704/cordis.patch.yml) · **身份:** `@xiaoyuink/dsh-image-vision`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `model-tools` `package-install` `vision` `financial` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Video BG** · [zhang-guangjie/dsh-video-bg@88bcd7e](https://github.com/zhang-guangjie/dsh-video-bg/commit/88bcd7e69bc0521c7ce86b09a39e60c8a4b08c79) — DSH GUI 视频背景插件：把本地视频作为对话背景循环播放，带暂停/播放与透明度/遮罩控制。默认解析包内 media/background.mp4（缺失时优雅降级），支持 videoPath 配置与环境变量覆盖。
  - **证据:** [manifest](https://github.com/zhang-guangjie/dsh-video-bg/blob/88bcd7e69bc0521c7ce86b09a39e60c8a4b08c79/package.json) → [patch](https://github.com/zhang-guangjie/dsh-video-bg/blob/88bcd7e69bc0521c7ce86b09a39e60c8a4b08c79/cordis.patch.yml) · **身份:** `@local/dsh-video-bg`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `browser` `vision` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Project Memory** · [00080000/dsh-project-memory@f9a1389](https://github.com/00080000/dsh-project-memory/commit/f9a13896b7fff4bb094fdcd6cd68c0319064b0c2) — Project Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/00080000/dsh-project-memory/blob/f9a13896b7fff4bb094fdcd6cd68c0319064b0c2/package.json) → [patch](https://github.com/00080000/dsh-project-memory/blob/f9a13896b7fff4bb094fdcd6cd68c0319064b0c2/cordis.patch.yml) · **身份:** `dsh-project-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `process-control` `session-data` `model-tools` `package-install` `financial` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **WEB UI JX** · [1072636071/dsh-web-ui-jx@da96f76](https://github.com/1072636071/dsh-web-ui-jx/commit/da96f769017c0819162a285602ff081f501deeba) — 姜晓角色素材 DSH Bundle 插件 — 为 deepseek-harness 宿主提供唐风角色浮层、管理 UI 与三层 token 设计系统（独立插件，不复用 dsh-web-ui 任何包）
  - **证据:** [manifest](https://github.com/1072636071/dsh-web-ui-jx/blob/da96f769017c0819162a285602ff081f501deeba/package.json) → [patch](https://github.com/1072636071/dsh-web-ui-jx/blob/da96f769017c0819162a285602ff081f501deeba/cordis.patch.yml) · **身份:** `dsh-web-ui-jx`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `package-install` `theme` `prepublish-only` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Websearch** · [240xu/dsh-websearch@222e0b1](https://github.com/240xu/dsh-websearch/commit/222e0b1cc3787cdbd58c140b128d7598d60d2bda) — Websearch 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/240xu/dsh-websearch/blob/222e0b1cc3787cdbd58c140b128d7598d60d2bda/package.json) → [patch](https://github.com/240xu/dsh-websearch/blob/222e0b1cc3787cdbd58c140b128d7598d60d2bda/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-websearch`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `mcp` `session-data` `package-install` `web-search` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Project Workbench** · [937862061/dsh-project-workbench@f253b2d](https://github.com/937862061/dsh-project-workbench/commit/f253b2d69d1acd6c0b1c03314b90cfad1ea1e12a) — Project Workbench 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/937862061/dsh-project-workbench/blob/f253b2d69d1acd6c0b1c03314b90cfad1ea1e12a/package.json) → [patch](https://github.com/937862061/dsh-project-workbench/blob/f253b2d69d1acd6c0b1c03314b90cfad1ea1e12a/cordis.patch.yml) · **身份:** `dsh-project-workbench`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **OS** · [ahmed-farahat-pro/magna-verse@84c82b9](https://github.com/ahmed-farahat-pro/magna-verse/commit/84c82b97963934477878fbc617c29a85f3892260) — OS 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ahmed-farahat-pro/magna-verse/blob/84c82b97963934477878fbc617c29a85f3892260/web-os/os/package.json) → [patch](https://github.com/ahmed-farahat-pro/magna-verse/blob/84c82b97963934477878fbc617c29a85f3892260/web-os/os/cordis.patch.yml) · **身份:** `@magna/os`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `process-control` `database` `session-data` `system-prompt` `model-tools` `package-install` `email` `theme` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **PET Assistant** · [AlexKaiqi/dsh-pet-assistant@616c815](https://github.com/AlexKaiqi/dsh-pet-assistant/commit/616c81507b130a7b3bcb429247f53c57b10c5e29) — PET Assistant 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AlexKaiqi/dsh-pet-assistant/blob/616c81507b130a7b3bcb429247f53c57b10c5e29/package.json) → [patch](https://github.com/AlexKaiqi/dsh-pet-assistant/blob/616c81507b130a7b3bcb429247f53c57b10c5e29/cordis.patch.yml) · **身份:** `dsh-pet-assistant`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `client-injection` `session-data` `package-install` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Realtime Voice** · [AlexKaiqi/dsh-realtime-voice@06a6b63](https://github.com/AlexKaiqi/dsh-realtime-voice/commit/06a6b63f8e889361416c6a5dac0940f8e28afb97) — Realtime Voice 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AlexKaiqi/dsh-realtime-voice/blob/06a6b63f8e889361416c6a5dac0940f8e28afb97/package.json) → [patch](https://github.com/AlexKaiqi/dsh-realtime-voice/blob/06a6b63f8e889361416c6a5dac0940f8e28afb97/cordis.patch.yml) · **身份:** `dsh-realtime-voice`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `session-data` `model-tools` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Session Assistant** · [AlexKaiqi/dsh-session-assistant@5817d25](https://github.com/AlexKaiqi/dsh-session-assistant/commit/5817d2523e3d4b4f2b6897382949343f13e5e31f) — Session Assistant 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AlexKaiqi/dsh-session-assistant/blob/5817d2523e3d4b4f2b6897382949343f13e5e31f/package.json) → [patch](https://github.com/AlexKaiqi/dsh-session-assistant/blob/5817d2523e3d4b4f2b6897382949343f13e5e31f/cordis.patch.yml) · **身份:** `dsh-session-assistant`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `vision` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **UI Enhancer** · [AlexYin-Tongji/dsh-ui-enhancer@7250137](https://github.com/AlexYin-Tongji/dsh-ui-enhancer/commit/72501370f5ef1e081aa8aa95389b1fdb575ead6a) — UI Enhancer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AlexYin-Tongji/dsh-ui-enhancer/blob/72501370f5ef1e081aa8aa95389b1fdb575ead6a/package.json) → [patch](https://github.com/AlexYin-Tongji/dsh-ui-enhancer/blob/72501370f5ef1e081aa8aa95389b1fdb575ead6a/cordis.patch.yml) · **身份:** `dsh-ui-enhancer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `browser` `session-data` `package-install` `theme` `prepublish-only` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Memory HUB** · [ARFCON/dsh-hotplug-hub@ad75113](https://github.com/ARFCON/dsh-hotplug-hub/commit/ad75113a221a8c7e75fa6afddf9d150e12210b93) — DSH 记忆中枢：全局记忆包（memory-pack），与 profile 解耦；memory.search / memory.commit / memory.suggest / memory.log / memory.review_status 工具 + 关键词路由 + 确认制提案队列 + BM25 检索 + 审计 + 缓存友好注入（pinned 预算/变更尾部）+ GUI 页签。切包不丢，AI 可检索。
  - **证据:** [manifest](https://github.com/ARFCON/dsh-hotplug-hub/blob/ad75113a221a8c7e75fa6afddf9d150e12210b93/dsh-hotplug-hub/dsh-memory-hub/package.json) → [patch](https://github.com/ARFCON/dsh-hotplug-hub/blob/ad75113a221a8c7e75fa6afddf9d150e12210b93/dsh-hotplug-hub/dsh-memory-hub/cordis.patch.yml) · **身份:** `dsh-memory-hub`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `mcp` `session-data` `system-prompt` `model-tools` `package-install` `plugin-management` `vision` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Greater Clarity** · [Baisbt/dsh-GreaterClarity-plugin@d24f339](https://github.com/Baisbt/dsh-GreaterClarity-plugin/commit/d24f3391cc707a655544cd82f18709e08351269f) — DSH Web 会话增强插件：全局折叠 AI 思考链/工具链、一键导出 Markdown、AI 头像与手动折叠（思考链+工具链三态折叠）、设置弹窗。
  - **证据:** [manifest](https://github.com/Baisbt/dsh-GreaterClarity-plugin/blob/d24f3391cc707a655544cd82f18709e08351269f/package.json) → [patch](https://github.com/Baisbt/dsh-GreaterClarity-plugin/blob/d24f3391cc707a655544cd82f18709e08351269f/cordis.patch.yml) · **身份:** `@dsh-external/dsh-greater-clarity`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Think ZH Expand** · [baosfeng/my-dsh-plugins@45f3d6a](https://github.com/baosfeng/my-dsh-plugins/commit/45f3d6ab272d3b7307f6f0c46dd4442cc72991f1) — Think ZH Expand 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/baosfeng/my-dsh-plugins/blob/45f3d6ab272d3b7307f6f0c46dd4442cc72991f1/plugins/dsh-think-zh-expand/package.json) → [patch](https://github.com/baosfeng/my-dsh-plugins/blob/45f3d6ab272d3b7307f6f0c46dd4442cc72991f1/plugins/dsh-think-zh-expand/cordis.patch.yml) · **身份:** `dsh-think-zh-expand`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `system-prompt` `model-tools` `vision` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Ally** · [BaronCyrus/dsh-harness-ally@3e27632](https://github.com/BaronCyrus/dsh-harness-ally/commit/3e276321caac9d24843dc704d59c0c2a5a85f739) — Ally 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/BaronCyrus/dsh-harness-ally/blob/3e276321caac9d24843dc704d59c0c2a5a85f739/package.json) → [patch](https://github.com/BaronCyrus/dsh-harness-ally/blob/3e276321caac9d24843dc704d59c0c2a5a85f739/cordis.patch.yml) · **身份:** `dsh-ally`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `mcp` `session-data` `model-tools` `web-search` `multi-agent` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Conv Export** · [beijingwahw/dsh-conv-export@aea5ae9](https://github.com/beijingwahw/dsh-conv-export/commit/aea5ae987d5c5e3eb96c20edd18094ca67863826) — dsh-conv-export（对话导出）— export the current DeepSeek Harness conversation as Markdown, PDF, or a long PNG image.
  - **证据:** [manifest](https://github.com/beijingwahw/dsh-conv-export/blob/aea5ae987d5c5e3eb96c20edd18094ca67863826/package.json) → [patch](https://github.com/beijingwahw/dsh-conv-export/blob/aea5ae987d5c5e3eb96c20edd18094ca67863826/cordis.patch.yml) · **身份:** `@dsh-external/dsh-conv-export`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `package-install` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Breakdown** · [chunbosama/dsh_breakdown@aeaaf52](https://github.com/chunbosama/dsh_breakdown/commit/aeaaf52b14a76e1d69d91f24370500456603b959) — DSH 崩溃插件：一启动就让 DSH 崩溃。仅供测试/演示/压测错误处理，切勿安装到生产实例。
  - **证据:** [manifest](https://github.com/chunbosama/dsh_breakdown/blob/aeaaf52b14a76e1d69d91f24370500456603b959/package.json) → [patch](https://github.com/chunbosama/dsh_breakdown/blob/aeaaf52b14a76e1d69d91f24370500456603b959/cordis.patch.yml) · **身份:** `dsh-breakdown`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-write` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Aischat** · [Coprexist/AIsChat@cf8f1d4](https://github.com/Coprexist/AIsChat/commit/cf8f1d4f376989ee7417275958185e4cc6a289a6) — AIsChat 原生集成插件：Host 侧同源代理 AIsChat 后端 API 与 WebSocket，Client 侧提供原生侧边栏入口、聊天视图（置顶/私信/群聊）与设置页。
  - **证据:** [manifest](https://github.com/Coprexist/AIsChat/blob/cf8f1d4f376989ee7417275958185e4cc6a289a6/dsh-aischat/package.json) → [patch](https://github.com/Coprexist/AIsChat/blob/cf8f1d4f376989ee7417275958185e4cc6a289a6/dsh-aischat/cordis.patch.yml) · **身份:** `dsh-aischat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `system-prompt` `model-tools` `package-install` `vision` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Supervisor** · [dat-lequoc/dsh-supervisor@704d8c2](https://github.com/dat-lequoc/dsh-supervisor/commit/704d8c25d9cd1458bdfa898f4bb2c3aaf8b4d4e0) — Supervisor 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dat-lequoc/dsh-supervisor/blob/704d8c25d9cd1458bdfa898f4bb2c3aaf8b4d4e0/package.json) → [patch](https://github.com/dat-lequoc/dsh-supervisor/blob/704d8c25d9cd1458bdfa898f4bb2c3aaf8b4d4e0/cordis.patch.yml) · **身份:** `dsh-supervisor`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `session-data` `model-tools` `plugin-management` `vision` `multi-agent` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Idesign** · [Devin-AXIS/iPolloWork@0b8ce50](https://github.com/Devin-AXIS/iPolloWork/commit/0b8ce50556a0f1b4418ff92c20d70cc530c91c95) — Idesign 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Devin-AXIS/iPolloWork/blob/0b8ce50556a0f1b4418ff92c20d70cc530c91c95/external-plugins/deepseek-harness/design-studio/package.json) → [patch](https://github.com/Devin-AXIS/iPolloWork/blob/0b8ce50556a0f1b4418ff92c20d70cc530c91c95/external-plugins/deepseek-harness/design-studio/cordis.patch.yml) · **身份:** `deepseek-idesign`
  - **许可证:** repo `Unresolved` / package `SEE LICENSE IN LICENSE` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `session-data` `vision` `multi-agent` `theme` `nested-bundle` `prepack` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Plugin Directory** · [dsh-pub/dsh-pub@1b2fb3e](https://github.com/dsh-pub/dsh-pub/commit/1b2fb3efefdc63ff85474cf988a87dd47999f153) — Plugin Directory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dsh-pub/dsh-pub/blob/1b2fb3efefdc63ff85474cf988a87dd47999f153/apps/dsh-plugin/package.json) → [patch](https://github.com/dsh-pub/dsh-pub/blob/1b2fb3efefdc63ff85474cf988a87dd47999f153/apps/dsh-plugin/cordis.patch.yml) · **身份:** `@dsh-pub/plugin-directory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `browser` `database` `package-install` `vision` `nested-bundle` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **KEY Rotator** · [dunnpei/dsh-key-rotator@9b6efa5](https://github.com/dunnpei/dsh-key-rotator/commit/9b6efa5c6fa32b8bbb00ef83890deb3c7db3e2c2) — KEY Rotator 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/dunnpei/dsh-key-rotator/blob/9b6efa5c6fa32b8bbb00ef83890deb3c7db3e2c2/package.json) → [patch](https://github.com/dunnpei/dsh-key-rotator/blob/9b6efa5c6fa32b8bbb00ef83890deb3c7db3e2c2/cordis.patch.yml) · **身份:** `dsh-key-rotator`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `session-data` `model-tools` `theme` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Client UI Skin Valley Spring** · [EachSheep/dsh-valley-pixel-skin@58babd0](https://github.com/EachSheep/dsh-valley-pixel-skin/commit/58babd0a52abea9284ac4d93db616bafec0b66cf) — Client UI Skin Valley Spring 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/EachSheep/dsh-valley-pixel-skin/blob/58babd0a52abea9284ac4d93db616bafec0b66cf/package.json) → [patch](https://github.com/EachSheep/dsh-valley-pixel-skin/blob/58babd0a52abea9284ac4d93db616bafec0b66cf/cordis.patch.yml) · **身份:** `dsh-client-ui-skin-valley-spring`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `theme` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **GIT Rescue** · [EIGHTfs/dsh-git-rescue@69faea6](https://github.com/EIGHTfs/dsh-git-rescue/commit/69faea62e744379bfb94933c2bfb92af3c652a19) — DSH 救援恢复插件（2.2.0：手动关闭自动救援开关 + guardian 手动恢复会话；2.1.0：git 回退降为最后兜底，自带模块/LLM 优先修复；救援环境统一 @Save-clean/@Save-test 新命名）：守护进程 + .dsh git 仓库管理 + 远端备份（token/SSH）+ 救援环境 + 专项工具 + LLM 自治修复 + git 还原（配置类路径，sessions/storages 数据不被覆盖）+ 纯净 dsh 协助兜底 + 自动更新（大版本/结构不一致卸载重装）
  - **证据:** [manifest](https://github.com/EIGHTfs/dsh-git-rescue/blob/69faea62e744379bfb94933c2bfb92af3c652a19/package.json) → [patch](https://github.com/EIGHTfs/dsh-git-rescue/blob/69faea62e744379bfb94933c2bfb92af3c652a19/cordis.patch.yml) · **身份:** `dsh-git-rescue`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `process-control` `session-data` `model-tools` `web-search` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Guard Messenger** · [frederico-kluser/deepseek-harness-mobile@5ddd3ba](https://github.com/frederico-kluser/deepseek-harness-mobile/commit/5ddd3bafffded2c2453a9469e05d882eaa5d1c6b) — Guard Messenger 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/frederico-kluser/deepseek-harness-mobile/blob/5ddd3bafffded2c2453a9469e05d882eaa5d1c6b/package.json) → [patch](https://github.com/frederico-kluser/deepseek-harness-mobile/blob/5ddd3bafffded2c2453a9469e05d882eaa5d1c6b/cordis.patch.yml) · **身份:** `dsh-guard-messenger`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `mcp` `session-data` `system-prompt` `package-install` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Next APP** · [FuJuntao/dsh-next-app@f781210](https://github.com/FuJuntao/dsh-next-app/commit/f7812106675b058b43385406fbf98c331939ce06) — Next APP 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/FuJuntao/dsh-next-app/blob/f7812106675b058b43385406fbf98c331939ce06/packages/dsh-next-app/package.json) → [patch](https://github.com/FuJuntao/dsh-next-app/blob/f7812106675b058b43385406fbf98c331939ce06/packages/dsh-next-app/cordis.patch.yml) · **身份:** `@scope/dsh-next-app`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `nested-bundle` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Webui Installer** · [FYHC1/dsh-webui-installer@9b111ed](https://github.com/FYHC1/dsh-webui-installer/commit/9b111ed559afc6ac1b89af4aaec372c8a46232ba) — Webui Installer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/FYHC1/dsh-webui-installer/blob/9b111ed559afc6ac1b89af4aaec372c8a46232ba/package.json) → [patch](https://github.com/FYHC1/dsh-webui-installer/blob/9b111ed559afc6ac1b89af4aaec372c8a46232ba/cordis.patch.yml) · **身份:** `dsh-webui-installer`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `browser` `web-search` `license-incomplete` · **核验备注:** 因repository license、package license证据不足或冲突而暂缓；未执行候选代码。

- **Trajectory Clean** · [gaogx96/trajectory-clean@bd3eb1f](https://github.com/gaogx96/trajectory-clean/commit/bd3eb1fb012bdb3aed08db5f6afa54446314c2b5) — 简洁直观的轨迹视图 — 按用户消息分组，显示 Token 消耗，差异化展示用户/模型/工具，支持加载更早记录，适配所有主题
  - **证据:** [manifest](https://github.com/gaogx96/trajectory-clean/blob/bd3eb1fb012bdb3aed08db5f6afa54446314c2b5/package.json) → [patch](https://github.com/gaogx96/trajectory-clean/blob/bd3eb1fb012bdb3aed08db5f6afa54446314c2b5/cordis.patch.yml) · **身份:** `trajectory-clean`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `session-data` `package-install` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Chronofence** · [Glaz-j/Dsh-ChronoFence@c2a7363](https://github.com/Glaz-j/Dsh-ChronoFence/commit/c2a736335d914477786142c8f6ad7f95f469edd3) — Chronofence 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Glaz-j/Dsh-ChronoFence/blob/c2a736335d914477786142c8f6ad7f95f469edd3/package.json) → [patch](https://github.com/Glaz-j/Dsh-ChronoFence/blob/c2a736335d914477786142c8f6ad7f95f469edd3/cordis.patch.yml) · **身份:** `dsh-chronofence`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `mcp` `browser` `session-data` `system-prompt` `model-tools` `package-install` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Kanban** · [GPNUdirichlet/dsh-kanban@07266fb](https://github.com/GPNUdirichlet/dsh-kanban/commit/07266fbdee747183cb526b4e941c9e28cf955a61) — Kanban 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/GPNUdirichlet/dsh-kanban/blob/07266fbdee747183cb526b4e941c9e28cf955a61/package.json) → [patch](https://github.com/GPNUdirichlet/dsh-kanban/blob/07266fbdee747183cb526b4e941c9e28cf955a61/cordis.patch.yml) · **身份:** `dsh-kanban`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `package-install` `web-search` `financial` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Excel KIT** · [helibeiqi/dsh-excel-kit@3d45a34](https://github.com/helibeiqi/dsh-excel-kit/commit/3d45a34f4df852f5aeaf066cc9556a46532d0cc6) — Excel KIT 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/helibeiqi/dsh-excel-kit/blob/3d45a34f4df852f5aeaf066cc9556a46532d0cc6/package.json) → [patch](https://github.com/helibeiqi/dsh-excel-kit/blob/3d45a34f4df852f5aeaf066cc9556a46532d0cc6/cordis.patch.yml) · **身份:** `dsh-excel-kit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `filesystem-read` `mcp` `package-install` `prepublish-only` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **IOS Control** · [Hjay1101/dsh-ios-control@6510ae1](https://github.com/Hjay1101/dsh-ios-control/commit/6510ae155e8fcc2a669a6c7a5bccc24249d5dfe0) — IOS Control 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Hjay1101/dsh-ios-control/blob/6510ae155e8fcc2a669a6c7a5bccc24249d5dfe0/package.json) → [patch](https://github.com/Hjay1101/dsh-ios-control/blob/6510ae155e8fcc2a669a6c7a5bccc24249d5dfe0/cordis.patch.yml) · **身份:** `dsh-ios-control`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `session-data` `vision` `financial` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Product Subagent Console** · [Jokasa7/dsh-product-subagent-console@0d0e1df](https://github.com/Jokasa7/dsh-product-subagent-console/commit/0d0e1dfcb4df1b2bd8c39f4763102bd3dd437359) — Product Subagent Console 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Jokasa7/dsh-product-subagent-console/blob/0d0e1dfcb4df1b2bd8c39f4763102bd3dd437359/package.json) → [patch](https://github.com/Jokasa7/dsh-product-subagent-console/blob/0d0e1dfcb4df1b2bd8c39f4763102bd3dd437359/cordis.patch.yml) · **身份:** `dsh-product-subagent-console`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `browser` `session-data` `model-tools` `vision` `multi-agent` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Expense Recodes** · [Jrafina/dsh-expense-records@25bd8cb](https://github.com/Jrafina/dsh-expense-records/commit/25bd8cb47d2de8b1f6f1528f60eae24189819fa6) — DSH 会话费用统计插件：在界面右下角显示 300×160 悬浮小窗，实时展示当前工作区/会话的输入 tokens、输出 tokens、缓存命中率，并按自定义单价（元/百万 tokens）折算费用。
  - **证据:** [manifest](https://github.com/Jrafina/dsh-expense-records/blob/25bd8cb47d2de8b1f6f1528f60eae24189819fa6/package.json) → [patch](https://github.com/Jrafina/dsh-expense-records/blob/25bd8cb47d2de8b1f6f1528f60eae24189819fa6/cordis.patch.yml) · **身份:** `dsh-expense-recodes`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `session-data` `package-install` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Aigc Radar** · [Kaixxrua/dsh-aigc-radar@1f65307](https://github.com/Kaixxrua/dsh-aigc-radar/commit/1f65307e2efaffedf77d6591a816e594724762de) — Aigc Radar 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Kaixxrua/dsh-aigc-radar/blob/1f65307e2efaffedf77d6591a816e594724762de/package.json) → [patch](https://github.com/Kaixxrua/dsh-aigc-radar/blob/1f65307e2efaffedf77d6591a816e594724762de/cordis.patch.yml) · **身份:** `dsh-aigc-radar`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `filesystem-write` `process-control` `mcp` `session-data` `model-tools` `package-install` `financial` `prepare` `stale-peer-range` · **核验备注:** 因baseline compatibility证据不足或冲突而暂缓；未执行候选代码。

- **DHS Multi Agent** · [Li3NGa/DHS-multi-agent-plugin@8626710](https://github.com/Li3NGa/DHS-multi-agent-plugin/commit/8626710b43e4822c95d3aa53276f6d6332178a6a) — DHS Multi Agent 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Li3NGa/DHS-multi-agent-plugin/blob/8626710b43e4822c95d3aa53276f6d6332178a6a/package.json) → [patch](https://github.com/Li3NGa/DHS-multi-agent-plugin/blob/8626710b43e4822c95d3aa53276f6d6332178a6a/cordis.patch.yml) · **身份:** `dhs-multi-agent`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `mcp` `session-data` `model-tools` `multi-agent` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tick Loop** · [Lightmaze/dsh-tick-loop@f0c619b](https://github.com/Lightmaze/dsh-tick-loop/commit/f0c619b22a290f44bc74dc81bebc7837d802b623) — Tick Loop 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Lightmaze/dsh-tick-loop/blob/f0c619b22a290f44bc74dc81bebc7837d802b623/package.json) → [patch](https://github.com/Lightmaze/dsh-tick-loop/blob/f0c619b22a290f44bc74dc81bebc7837d802b623/cordis.patch.yml) · **身份:** `@pulse-computing/dsh-tick-loop`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `subprocess` `session-data` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Auto Mode** · [log-li/dsh-auto-mode@ee8a753](https://github.com/log-li/dsh-auto-mode/commit/ee8a753c0d911c137de13f0156d2806426931112) — Auto Mode 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/log-li/dsh-auto-mode/blob/ee8a753c0d911c137de13f0156d2806426931112/package.json) → [patch](https://github.com/log-li/dsh-auto-mode/blob/ee8a753c0d911c137de13f0156d2806426931112/cordis.patch.yml) · **身份:** `dsh-auto-mode`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `credentials` `filesystem-write` `model-tools` `package-install` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **File Picker** · [lostpaidaxing/dsh-file-picker@54fe0c8](https://github.com/lostpaidaxing/dsh-file-picker/commit/54fe0c89ceefe32e072d20e82680fa45f03e237c) — File Picker 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lostpaidaxing/dsh-file-picker/blob/54fe0c89ceefe32e072d20e82680fa45f03e237c/package.json) → [patch](https://github.com/lostpaidaxing/dsh-file-picker/blob/54fe0c89ceefe32e072d20e82680fa45f03e237c/cordis.patch.yml) · **身份:** `dsh-file-picker`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `process-control` `session-data` `model-tools` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Scrum Harness Bundle** · [MouYongli/dsh-scrum@28efaaf](https://github.com/MouYongli/dsh-scrum/commit/28efaaf2540c76fd6f7fa2bff7422d2aa7a6d854) — Scrum Harness Bundle 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MouYongli/dsh-scrum/blob/28efaaf2540c76fd6f7fa2bff7422d2aa7a6d854/packages/harness/scrum-harness-bundle/package.json) → [patch](https://github.com/MouYongli/dsh-scrum/blob/28efaaf2540c76fd6f7fa2bff7422d2aa7a6d854/packages/harness/scrum-harness-bundle/cordis.patch.yml) · **身份:** `@dsh-scrum/scrum-harness-bundle`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `session-data` `model-tools` `package-install` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Sandbox MXC** · [omdsh-dev/sandbox-mxc@b2af305](https://github.com/omdsh-dev/sandbox-mxc/commit/b2af3055663412b029876f4dca73f762bb59224c) — Sandbox MXC 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/omdsh-dev/sandbox-mxc/blob/b2af3055663412b029876f4dca73f762bb59224c/package.json) → [patch](https://github.com/omdsh-dev/sandbox-mxc/blob/b2af3055663412b029876f4dca73f762bb59224c/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-sandbox-mxc`
  - **许可证:** repo `Unresolved` / package `BSD-3-Clause` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `session-data` `package-install` `theme` `prepare` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Harness TUI** · [openma-ai/Martty@9b4b19d](https://github.com/openma-ai/Martty/commit/9b4b19ded33c1aae8a04dd198ad84e9feae68902) — Harness TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/openma-ai/Martty/blob/9b4b19ded33c1aae8a04dd198ad84e9feae68902/npm/package.json) → [patch](https://github.com/openma-ai/Martty/blob/9b4b19ded33c1aae8a04dd198ad84e9feae68902/npm/cordis.patch.yml) · **身份:** `@openma/deepseek-harness-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `session-data` `system-prompt` `package-install` `vision` `multi-agent` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Github Work** · [Ornn8/dsh-agent-automation@81ea16f](https://github.com/Ornn8/dsh-agent-automation/commit/81ea16f917abfabb78309bf64f4b5e3862584a13) — Github Work 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Ornn8/dsh-agent-automation/blob/81ea16f917abfabb78309bf64f4b5e3862584a13/dsh-plugin/package.json) → [patch](https://github.com/Ornn8/dsh-agent-automation/blob/81ea16f917abfabb78309bf64f4b5e3862584a13/dsh-plugin/cordis.patch.yml) · **身份:** `dsh-github-work`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `filesystem-read` `subprocess` `process-control` `session-data` `vision` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Plugin** · [pax-beehive/dsh-plugin-hub@f9d331f](https://github.com/pax-beehive/dsh-plugin-hub/commit/f9d331f42b68881fb3245d96e34d04cce2dcfa0f) — Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/pax-beehive/dsh-plugin-hub/blob/f9d331f42b68881fb3245d96e34d04cce2dcfa0f/packages/dsh-plugin/package.json) → [patch](https://github.com/pax-beehive/dsh-plugin-hub/blob/f9d331f42b68881fb3245d96e34d04cce2dcfa0f/packages/dsh-plugin/cordis.patch.yml) · **身份:** `@dsh-plugin-hub/dsh-plugin`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `database` `session-data` `package-install` `vision` `nested-bundle` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Deep Read Summarize** · [PensiveFei/deep-read-summarize@bf7bb16](https://github.com/PensiveFei/deep-read-summarize/commit/bf7bb1622e7847ebf0bc0f1de91aeca3fa381a41) — Deep Read Summarize 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/PensiveFei/deep-read-summarize/blob/bf7bb1622e7847ebf0bc0f1de91aeca3fa381a41/package.json) → [patch](https://github.com/PensiveFei/deep-read-summarize/blob/bf7bb1622e7847ebf0bc0f1de91aeca3fa381a41/cordis.patch.yml) · **身份:** `deep-read-summarize`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `filesystem-read` `process-control` `model-tools` `package-install` `vision` `multi-agent` `prepublish-only` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Dshmath Manim** · [phelpsyacht/dshmath-manim@42f0aa6](https://github.com/phelpsyacht/dshmath-manim/commit/42f0aa62dfb0742b84941baa995d8a6ec7f7ee9a) — Dshmath Manim 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/phelpsyacht/dshmath-manim/blob/42f0aa62dfb0742b84941baa995d8a6ec7f7ee9a/package.json) → [patch](https://github.com/phelpsyacht/dshmath-manim/blob/42f0aa62dfb0742b84941baa995d8a6ec7f7ee9a/math-manim.cordis.yml) · **身份:** `dshmath-manim`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `filesystem-write` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Errata** · [Pidan-Q/dsh-knowledge@5c50e41](https://github.com/Pidan-Q/dsh-knowledge/commit/5c50e4170253ffada1f26ed8e86a960331f9458c) — Errata 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Pidan-Q/dsh-knowledge/blob/5c50e4170253ffada1f26ed8e86a960331f9458c/packages/errata/package.json) → [patch](https://github.com/Pidan-Q/dsh-knowledge/blob/5c50e4170253ffada1f26ed8e86a960331f9458c/packages/errata/cordis.patch.yml) · **身份:** `@dsh-knowledge/errata`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `filesystem-read` `session-data` `model-tools` `package-install` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **THS Holdings** · [PM25000/dsh-ths-holdings@613db15](https://github.com/PM25000/dsh-ths-holdings/commit/613db158570be35360f2388833e06cf1e4702d00) — DSH 持仓盈亏悬浮卡片（同花顺投资账本）— 自动同步真实持仓数据，显示今日盈亏、上证指数和当日走势图，无需手动添加股票。Real portfolio holdings overlay for the DSH web GUI — automatically syncs your positions from the Tonghuashun investment-ledger API.
  - **证据:** [manifest](https://github.com/PM25000/dsh-ths-holdings/blob/613db158570be35360f2388833e06cf1e4702d00/package.json) → [patch](https://github.com/PM25000/dsh-ths-holdings/blob/613db158570be35360f2388833e06cf1e4702d00/cordis.patch.yml) · **身份:** `dsh-ths-holdings`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `browser` `session-data` `package-install` `vision` `prepublish-only` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Server Login** · [pointer-a/dsh-server-login@c62ec39](https://github.com/pointer-a/dsh-server-login/commit/c62ec39310c9df459105fdc2e6be0e1f03cfb446) — 面向公网的多租户 DSH 托管平台：登录审核、每用户隔离的 DSH 环境（主 + 按需守护）、桌面与域名访问。
  - **证据:** [manifest](https://github.com/pointer-a/dsh-server-login/blob/c62ec39310c9df459105fdc2e6be0e1f03cfb446/package.json) → [patch](https://github.com/pointer-a/dsh-server-login/blob/c62ec39310c9df459105fdc2e6be0e1f03cfb446/cordis.patch.yml) · **身份:** `dsh-server-login`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `process-control` `database` `session-data` `package-install` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Desktop Layer** · [ptonlix/dsh-forge@0e84acc](https://github.com/ptonlix/dsh-forge/commit/0e84acc77e11a9dc44feff87d65fe3b24680d357) — Desktop Layer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ptonlix/dsh-forge/blob/0e84acc77e11a9dc44feff87d65fe3b24680d357/packages/bundles/desktop-layer/package.json) → [patch](https://github.com/ptonlix/dsh-forge/blob/0e84acc77e11a9dc44feff87d65fe3b24680d357/packages/bundles/desktop-layer/cordis.patch.yml) · **身份:** `@dsh-forge/desktop-layer`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `browser` `session-data` `package-install` `plugin-management` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Confirmo** · [purezhi/dsh-plugin-confirmo@4aa747a](https://github.com/purezhi/dsh-plugin-confirmo/commit/4aa747ad279e5afd6f38b186c4b9dd8ac0338996) — Confirmo 桌宠 for the DSH UI. A replica of the confirmo.love AI coding companion: the yellow cat mascot by default, with support for community sprites from sprites.confirmo.love (magenta chroma-key sprite sheets, 8x7 frame grid). Drag to reposition, right-click to switch sprite.
  - **证据:** [manifest](https://github.com/purezhi/dsh-plugin-confirmo/blob/4aa747ad279e5afd6f38b186c4b9dd8ac0338996/dsh-plugin-confirmo/package.json) → [patch](https://github.com/purezhi/dsh-plugin-confirmo/blob/4aa747ad279e5afd6f38b186c4b9dd8ac0338996/dsh-plugin-confirmo/cordis.patch.yml) · **身份:** `dsh-plugin-confirmo`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `vision` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Mineru** · [qiboda/dsh-mineru@f358a93](https://github.com/qiboda/dsh-mineru/commit/f358a939fc5cc3111ca6353aaae6fb6220949bb0) — Mineru 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/qiboda/dsh-mineru/blob/f358a939fc5cc3111ca6353aaae6fb6220949bb0/package.json) → [patch](https://github.com/qiboda/dsh-mineru/blob/f358a939fc5cc3111ca6353aaae6fb6220949bb0/cordis.patch.yml) · **身份:** `dsh-mineru`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `process-control` `session-data` `vision` `theme` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Memory** · [qwert702/dsh-memory@69db99f](https://github.com/qwert702/dsh-memory/commit/69db99fde790dae449597cf96c4157b5ced82e7e) — Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/qwert702/dsh-memory/blob/69db99fde790dae449597cf96c4157b5ced82e7e/package.json) → [patch](https://github.com/qwert702/dsh-memory/blob/69db99fde790dae449597cf96c4157b5ced82e7e/dsh-memory.yml) · **身份:** `dsh-memory`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `process-control` `session-data` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Client UI Polish** · [ReachForStar/dsh-client-ui-polish@1d4351f](https://github.com/ReachForStar/dsh-client-ui-polish/commit/1d4351f5cccf7a44f122433fbcfb7f1ffabba79d) — Client UI Polish 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ReachForStar/dsh-client-ui-polish/blob/1d4351f5cccf7a44f122433fbcfb7f1ffabba79d/packages/ui-polish/package.json) → [patch](https://github.com/ReachForStar/dsh-client-ui-polish/blob/1d4351f5cccf7a44f122433fbcfb7f1ffabba79d/packages/ui-polish/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-client-ui-polish`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `session-data` `model-tools` `package-install` `vision` `financial` `multi-agent` `theme` `nested-bundle` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Endfield UI** · [rison114514/dsh-endfield-ui@3088aab](https://github.com/rison114514/dsh-endfield-ui/commit/3088aab58d1c561fb26e523a444ef4c099375928) — Endfield UI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/rison114514/dsh-endfield-ui/blob/3088aab58d1c561fb26e523a444ef4c099375928/endfield-ui-plugin/package.json) → [patch](https://github.com/rison114514/dsh-endfield-ui/blob/3088aab58d1c561fb26e523a444ef4c099375928/endfield-ui-plugin/cordis.patch.yml) · **身份:** `@rison/dsh-endfield-ui`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `package-install` `theme` `nested-bundle` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Remote Control** · [SCSpotato/dsh-remote@2e30065](https://github.com/SCSpotato/dsh-remote/commit/2e30065b060dd8324320d93b0a80818d2095fc2f) — Remote Control 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/SCSpotato/dsh-remote/blob/2e30065b060dd8324320d93b0a80818d2095fc2f/remote-control/package.json) → [patch](https://github.com/SCSpotato/dsh-remote/blob/2e30065b060dd8324320d93b0a80818d2095fc2f/remote-control/cordis.patch.yml) · **身份:** `dsh-remote-control`
  - **许可证:** repo `GPL-3.0` / package `GPL-3.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `session-data` `model-tools` `package-install` `vision` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Subscription Auth** · [sean233/dsh-subscription-auth@06c01d8](https://github.com/sean233/dsh-subscription-auth/commit/06c01d81c48d8632b9594a20be2485cc9b2542a6) — 订阅会员 OAuth 登录（ChatGPT / Claude / Grok / Kimi / Agy CLI）：配置中心「订阅服务」页登录/注销，自动发现订阅模型列表，按登录状态注册五个原生提供商，支持思考强度选择
  - **证据:** [manifest](https://github.com/sean233/dsh-subscription-auth/blob/06c01d81c48d8632b9594a20be2485cc9b2542a6/package.json) → [patch](https://github.com/sean233/dsh-subscription-auth/blob/06c01d81c48d8632b9594a20be2485cc9b2542a6/cordis.patch.yml) · **身份:** `dsh-subscription-auth`
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `process-control` `session-data` `model-tools` `multi-agent` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Comic Studio** · [Spider615/comic-studio@3be9f8c](https://github.com/Spider615/comic-studio/commit/3be9f8c7d1fa25405bc31e2beb08cb8064ef4402) — Comic Studio 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Spider615/comic-studio/blob/3be9f8c7d1fa25405bc31e2beb08cb8064ef4402/plugins/comic-studio/package.json) → [patch](https://github.com/Spider615/comic-studio/blob/3be9f8c7d1fa25405bc31e2beb08cb8064ef4402/plugins/comic-studio/cordis.patch.yml) · **身份:** `dsh-comic-studio`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `session-data` `system-prompt` `model-tools` `vision` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **SHL Session History** · [sunyuhuirong/shl-session-history@5580599](https://github.com/sunyuhuirong/shl-session-history/commit/5580599af5d14ee5c0cad7d440fe2fe18ab4fd51) — 会话历史请求迷你滑轨：对话区左侧垂直居中的短横线，悬停显示请求摘要，点击跳转到对应对话位置
  - **证据:** [manifest](https://github.com/sunyuhuirong/shl-session-history/blob/5580599af5d14ee5c0cad7d440fe2fe18ab4fd51/package.json) → [patch](https://github.com/sunyuhuirong/shl-session-history/blob/5580599af5d14ee5c0cad7d440fe2fe18ab4fd51/cordis.patch.yml) · **身份:** `shl-session-history`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `package-install` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Auto Restart** · [wdf-666-nmd/dsh-auto-restart@e349c1d](https://github.com/wdf-666-nmd/dsh-auto-restart/commit/e349c1d7b139b6ad29e550ba5737cf93d1856dfa) — Auto Restart 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wdf-666-nmd/dsh-auto-restart/blob/e349c1d7b139b6ad29e550ba5737cf93d1856dfa/package.json) → [patch](https://github.com/wdf-666-nmd/dsh-auto-restart/blob/e349c1d7b139b6ad29e550ba5737cf93d1856dfa/cordis.patch.yml) · **身份:** `dsh-auto-restart`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `session-data` `model-tools` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **CC Studio** · [xia-sc/dsh-cc-studio@5bd0d9f](https://github.com/xia-sc/dsh-cc-studio/commit/5bd0d9fdba1b39a7b3927b5d1a435f3e53d3ec88) — CCv3 角色卡工坊：融合工坊 + CC 模式（LLM Tools 引导）+ 自定义标签，空白模板
  - **证据:** [manifest](https://github.com/xia-sc/dsh-cc-studio/blob/5bd0d9fdba1b39a7b3927b5d1a435f3e53d3ec88/package.json) → [patch](https://github.com/xia-sc/dsh-cc-studio/blob/5bd0d9fdba1b39a7b3927b5d1a435f3e53d3ec88/cordis.patch.yml) · **身份:** `@dsh-plugins/dsh-cc-studio`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `session-data` `model-tools` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Chrom Notification** · [xieshuaix/dsh-chrom-notification@2303571](https://github.com/xieshuaix/dsh-chrom-notification/commit/23035714d10df6e4087120b438878684339c1d19) — Chrom Notification 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xieshuaix/dsh-chrom-notification/blob/23035714d10df6e4087120b438878684339c1d19/package.json) → [patch](https://github.com/xieshuaix/dsh-chrom-notification/blob/23035714d10df6e4087120b438878684339c1d19/cordis.patch.yml) · **身份:** `dsh-chrom-notification`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `process-control` `session-data` `package-install` `vision` `audio` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **HOT Restart** · [xieshuaix/dsh-hot-restart@2c72306](https://github.com/xieshuaix/dsh-hot-restart/commit/2c72306f70850e624494c81aea5f3ace8ea31521) — HOT Restart 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xieshuaix/dsh-hot-restart/blob/2c72306f70850e624494c81aea5f3ace8ea31521/package.json) → [patch](https://github.com/xieshuaix/dsh-hot-restart/blob/2c72306f70850e624494c81aea5f3ace8ea31521/cordis.patch.yml) · **身份:** `dsh-hot-restart`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `subprocess` `process-control` `session-data` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Engram Session** · [xiuyuan18/dsh-engram-session@7392492](https://github.com/xiuyuan18/dsh-engram-session/commit/739249257d58aff1c0705f640ed577c75544803c) — Engram Session 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xiuyuan18/dsh-engram-session/blob/739249257d58aff1c0705f640ed577c75544803c/package.json) → [patch](https://github.com/xiuyuan18/dsh-engram-session/blob/739249257d58aff1c0705f640ed577c75544803c/cordis.patch.yml) · **身份:** `dsh-engram-session`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `mcp` `session-data` `model-tools` `package-install` `vision` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Subagent Team** · [xuqingsakura/dsh-subagent-team@c66629b](https://github.com/xuqingsakura/dsh-subagent-team/commit/c66629b98bb3068ab5edfcb0817b4786b6412081) — DeepSeek Harness 子代理团队插件：9 个专职子代理（读/写/代码/文档/修复/审查/识图 + 统筹）+ 代码质量流水线 + 长任务(continuable) + Token/预算可调 + 性能优化；并内置持久化多代理团队运行时（建队/成员/任务依赖/邮箱/事件调度/浮层 UI）。遵循官方 bundle 形态，支持 GitHub / npm / 本地目录安装。
  - **证据:** [manifest](https://github.com/xuqingsakura/dsh-subagent-team/blob/c66629b98bb3068ab5edfcb0817b4786b6412081/package.json) → [patch](https://github.com/xuqingsakura/dsh-subagent-team/blob/c66629b98bb3068ab5edfcb0817b4786b6412081/cordis.patch.yml) · **身份:** `dsh-subagent-team`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `credentials` `vision` `multi-agent` `theme` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Phone Lens** · [yxqfg/phone-lens@888684d](https://github.com/yxqfg/phone-lens/commit/888684d094df43591582922f409add1188e49ba9) — Phone Lens 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yxqfg/phone-lens/blob/888684d094df43591582922f409add1188e49ba9/packages/lens-mate/package.json) → [patch](https://github.com/yxqfg/phone-lens/blob/888684d094df43591582922f409add1188e49ba9/packages/lens-mate/cordis.patch.yml) · **身份:** `phone-lens`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `external-network` `session-data` `model-tools` `package-install` `vision` `nested-bundle` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **AI Update** · [ZgblKylin/dsh-gui@5b7468d](https://github.com/ZgblKylin/dsh-gui/commit/5b7468de5fa436e83976edf09e2536a967770d23) — AI Update 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ZgblKylin/dsh-gui/blob/5b7468de5fa436e83976edf09e2536a967770d23/plugins/ai-update/dsh-ai-update/package.json) → [patch](https://github.com/ZgblKylin/dsh-gui/blob/5b7468de5fa436e83976edf09e2536a967770d23/plugins/ai-update/dsh-ai-update/cordis.patch.yml) · **身份:** `dsh-ai-update`
  - **许可证:** repo `Unlicense` / package `Unlicense` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Doctor** · [zoahdev/dsh-plugin-doctor@991c174](https://github.com/zoahdev/dsh-plugin-doctor/commit/991c1741b10049b9d3218be81b159c0f51c3c77b) — Doctor 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zoahdev/dsh-plugin-doctor/blob/991c1741b10049b9d3218be81b159c0f51c3c77b/package.json) → [patch](https://github.com/zoahdev/dsh-plugin-doctor/blob/991c1741b10049b9d3218be81b159c0f51c3c77b/cordis.patch.yml) · **身份:** `dsh-plugin-doctor`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `subprocess` `session-data` `model-tools` `package-install` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Modernize Code** · [988hj7tczd-oss/dsh-modernize-code@07acf77](https://github.com/988hj7tczd-oss/dsh-modernize-code/commit/07acf770df08ce37eb8be0eeae854cb0e95516f6) — DSH 技能包：遗留代码现代化/简化工作流（preflight → assess → map → transform），含 Cordis 挂载插件、离线 Python 脚本与冒烟测试。
  - **证据:** [manifest](https://github.com/988hj7tczd-oss/dsh-modernize-code/blob/07acf770df08ce37eb8be0eeae854cb0e95516f6/package.json) → [patch](https://github.com/988hj7tczd-oss/dsh-modernize-code/blob/07acf770df08ce37eb8be0eeae854cb0e95516f6/cordis.patch.yml) · **身份:** `dsh-modernize-code`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `filesystem-read` `package-install` `identity-unresolved` `unresolved-install-identity` `stale-peer-range` · **核验备注:** 因npm or Git-source installation identity、baseline compatibility证据不足或冲突而暂缓；未执行候选代码。

- **Openviking** · [abc12524/dsh-openviking@9a22cc4](https://github.com/abc12524/dsh-openviking/commit/9a22cc4bf75e50128bf9ff5485e9e348240f9a17) — Openviking 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/abc12524/dsh-openviking/blob/9a22cc4bf75e50128bf9ff5485e9e348240f9a17/package.json) → [patch](https://github.com/abc12524/dsh-openviking/blob/9a22cc4bf75e50128bf9ff5485e9e348240f9a17/cordis.patch.yml) · **身份:** `@abc12524/dsh-openviking`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `mcp` `session-data` `model-tools` `package-install` `financial` `prepare` `stale-peer-range` · **核验备注:** 因baseline compatibility证据不足或冲突而暂缓；未执行候选代码。

- **Traffic Light** · [aliuguofa/dsh-traffic-light@69822f7](https://github.com/aliuguofa/dsh-traffic-light/commit/69822f711944363697d29975ef60a6d7cb9f57e0) — DSH 会话状态信号灯：在输入框区域显示红/黄/绿三色灯，实时反映会话状态（就绪/生成中/出错），点击可查看详情。
  - **证据:** [manifest](https://github.com/aliuguofa/dsh-traffic-light/blob/69822f711944363697d29975ef60a6d7cb9f57e0/package.json) → [patch](https://github.com/aliuguofa/dsh-traffic-light/blob/69822f711944363697d29975ef60a6d7cb9f57e0/cordis.patch.yml) · **身份:** `traffic-light`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `session-data` `web-search` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Drag File Preview** · [anzhaohao/dsh-drag-file-preview@7f3d137](https://github.com/anzhaohao/dsh-drag-file-preview/commit/7f3d137e884d3002d8504b86e41a346677205ff0) — DragView：为 DeepSeek Harness 提供拖拽文件、Codex 风格附件卡片、安全文件预览与系统打开能力
  - **证据:** [manifest](https://github.com/anzhaohao/dsh-drag-file-preview/blob/7f3d137e884d3002d8504b86e41a346677205ff0/package.json) → [patch](https://github.com/anzhaohao/dsh-drag-file-preview/blob/7f3d137e884d3002d8504b86e41a346677205ff0/cordis.patch.yml) · **身份:** `dsh-drag-file-preview`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `vision` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Employee Agent** · [Aoppp/DSH_HeGongZuo@1d4abfc](https://github.com/Aoppp/DSH_HeGongZuo/commit/1d4abfc3993674e569aae9e311b6a821ec1372b6) — 和工作员工管理的只读工具插件，支持在职与离职员工查询、统计和预警
  - **证据:** [manifest](https://github.com/Aoppp/DSH_HeGongZuo/blob/1d4abfc3993674e569aae9e311b6a821ec1372b6/packages/employee-agent/package.json) → [patch](https://github.com/Aoppp/DSH_HeGongZuo/blob/1d4abfc3993674e569aae9e311b6a821ec1372b6/packages/employee-agent/cordis.patch.yml) · **身份:** `@hegongzuo/employee-agent`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `database` `session-data` `package-install` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Lark Bridge** · [bihangchi9-creator/dsh-lark-bridge@440414f](https://github.com/bihangchi9-creator/dsh-lark-bridge/commit/440414f8fb02da9f6928f022aeb7d0d295dc7b8f) — Lark Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/bihangchi9-creator/dsh-lark-bridge/blob/440414f8fb02da9f6928f022aeb7d0d295dc7b8f/package.json) → [patch](https://github.com/bihangchi9-creator/dsh-lark-bridge/blob/440414f8fb02da9f6928f022aeb7d0d295dc7b8f/cordis.patch.yml) · **身份:** `dsh-lark-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `filesystem-write` `subprocess` `process-control` `session-data` `model-tools` `package-install` `web-search` `vision` `multi-agent` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **CDP Browser** · [calwang414/dsh-cdp-browser@d0f94c1](https://github.com/calwang414/dsh-cdp-browser/commit/d0f94c11c55fba5282b9c1f1f272e83ae24c399f) — CDP Browser 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/calwang414/dsh-cdp-browser/blob/d0f94c11c55fba5282b9c1f1f272e83ae24c399f/package.json) → [patch](https://github.com/calwang414/dsh-cdp-browser/blob/d0f94c11c55fba5282b9c1f1f272e83ae24c399f/cordis.patch.yml) · **身份:** `@calwang414/dsh-cdp-browser`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `database` `package-install` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Voice PET** · [calwang414/dsh-voice-pet@a608974](https://github.com/calwang414/dsh-voice-pet/commit/a608974f3409175aa84882776b63142cc8ee3100) — 本地语音 + VRM 桌宠:dsh 插件。sherpa-onnx 唤醒词/ASR/TTS 全离线,VRM 虚拟形象随语音说话
  - **证据:** [manifest](https://github.com/calwang414/dsh-voice-pet/blob/a608974f3409175aa84882776b63142cc8ee3100/package.json) → [patch](https://github.com/calwang414/dsh-voice-pet/blob/a608974f3409175aa84882776b63142cc8ee3100/cordis.patch.yml) · **身份:** `@calwang414/dsh-voice-pet`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `session-data` `package-install` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Harness Bundle** · [cyber-ai-agent/dsh-cyber@dbf5509](https://github.com/cyber-ai-agent/dsh-cyber/commit/dbf5509aa0677f2ceed888a1e6079070e14628a7) — Harness Bundle 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/cyber-ai-agent/dsh-cyber/blob/dbf5509aa0677f2ceed888a1e6079070e14628a7/packages/harness-bundle/package.json) → [patch](https://github.com/cyber-ai-agent/dsh-cyber/blob/dbf5509aa0677f2ceed888a1e6079070e14628a7/packages/harness-bundle/cordis.patch.yml) · **身份:** `@dsh-cyber/harness-bundle`
  - **许可证:** repo `Unresolved` / package `SEE LICENSE IN ../../LICENSE` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `mcp` `browser` `database` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **SSH TUI** · [cyjyyd/dsh-ssh-tui@9b64bff](https://github.com/cyjyyd/dsh-ssh-tui/commit/9b64bff8baa74e35fa11b34899ecfa1be94dc14c) — SSH TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/cyjyyd/dsh-ssh-tui/blob/9b64bff8baa74e35fa11b34899ecfa1be94dc14c/package.json) → [patch](https://github.com/cyjyyd/dsh-ssh-tui/blob/9b64bff8baa74e35fa11b34899ecfa1be94dc14c/cordis.patch.yml) · **身份:** `dsh-ssh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `subprocess` `session-data` `model-tools` `package-install` `multi-agent` `theme` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **LLM Subscription** · [DavidRm1911/dsh-llm-subscription@a4fb104](https://github.com/DavidRm1911/dsh-llm-subscription/commit/a4fb104db3c006c3a880c3e2d10e52c886487f90) — LLM Subscription 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/DavidRm1911/dsh-llm-subscription/blob/a4fb104db3c006c3a880c3e2d10e52c886487f90/package.json) → [patch](https://github.com/DavidRm1911/dsh-llm-subscription/blob/a4fb104db3c006c3a880c3e2d10e52c886487f90/cordis.patch.yml) · **身份:** `dsh-llm-subscription`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `mcp` `session-data` `model-tools` `vision` `financial` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Side Panel** · [DDDFXYqiming/Agent_Extensions@7ca6990](https://github.com/DDDFXYqiming/Agent_Extensions/commit/7ca6990c7c31a504ba302c6a58f88783c4b829aa) — Side Panel 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/DDDFXYqiming/Agent_Extensions/blob/7ca6990c7c31a504ba302c6a58f88783c4b829aa/dsh-plugins/dsh-side-panel-patched/package.json) → [patch](https://github.com/DDDFXYqiming/Agent_Extensions/blob/7ca6990c7c31a504ba302c6a58f88783c4b829aa/dsh-plugins/dsh-side-panel-patched/cordis.patch.yml) · **身份:** `@dsh-external/dsh-side-panel`
  - **许可证:** repo `MIT` / package `BSD-3-Clause` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `session-data` `vision` `theme` `nested-bundle` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Research Loop** · [Dominic789654/awesome-deepseek-harness@7cff863](https://github.com/Dominic789654/awesome-deepseek-harness/commit/7cff8630892333605f352da7698a2fd34e5e6481) — Research Loop 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Dominic789654/awesome-deepseek-harness/blob/7cff8630892333605f352da7698a2fd34e5e6481/plugins/dsh-research-loop/package.json) → [patch](https://github.com/Dominic789654/awesome-deepseek-harness/blob/7cff8630892333605f352da7698a2fd34e5e6481/plugins/dsh-research-loop/cordis.patch.yml) · **身份:** `dsh-research-loop`
  - **许可证:** repo `CC0-1.0` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `subprocess` `process-control` `mcp` `database` `session-data` `system-prompt` `model-tools` `package-install` `plugin-management` `web-search` `vision` `audio` `email` `financial` `multi-agent` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Notify** · [having5548/dsh-notify@b22101c](https://github.com/having5548/dsh-notify/commit/b22101c0df71a5524c9ac31eafa953c5147cd822) — DeepSeek Harness 通用通知插件：新会话 / 待审批 / 任务完成 / 任务中断时，在 GUI 内显示 Telegram 风格应用内通知并播放提示音；焦点在应用外时调用 Windows 10+ 原生 Toast（原生通知栏可直接点击审批并返回 DSH 继续任务）。
  - **证据:** [manifest](https://github.com/having5548/dsh-notify/blob/b22101c0df71a5524c9ac31eafa953c5147cd822/package.json) → [patch](https://github.com/having5548/dsh-notify/blob/b22101c0df71a5524c9ac31eafa953c5147cd822/cordis.patch.yml) · **身份:** `dsh-notify`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `session-data` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **QQ BOT** · [JackPolaris/dsh-qq-bot@645b714](https://github.com/JackPolaris/dsh-qq-bot/commit/645b714df6623ab8a6a2f008eb18017ec9c27e50) — DeepSeek Harness 的 QQ 频道机器人插件：扫码连接、全消息类型收发（文本/Markdown/图片/视频/语音/文件/引用）、流式打字机回复、可配置语音回复（TTS）、智能回复模式（smart/auto）、WebSocket 安全长连接。
  - **证据:** [manifest](https://github.com/JackPolaris/dsh-qq-bot/blob/645b714df6623ab8a6a2f008eb18017ec9c27e50/package.json) → [patch](https://github.com/JackPolaris/dsh-qq-bot/blob/645b714df6623ab8a6a2f008eb18017ec9c27e50/cordis.patch.yml) · **身份:** `dsh-qq-bot`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `session-data` `package-install` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Session Fork** · [Jason-skd/dsh-session-fork@a5a05a0](https://github.com/Jason-skd/dsh-session-fork/commit/a5a05a0f1ae98071987c6383778b2dd3790bbedc) — Session Fork 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Jason-skd/dsh-session-fork/blob/a5a05a0f1ae98071987c6383778b2dd3790bbedc/package.json) → [patch](https://github.com/Jason-skd/dsh-session-fork/blob/a5a05a0f1ae98071987c6383778b2dd3790bbedc/cordis.patch.yml) · **身份:** `dsh-session-fork`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Image Preview** · [leonardoxr/dsh-image-preview@ed08ef8](https://github.com/leonardoxr/dsh-image-preview/commit/ed08ef816ad92e6643b7672cfec677ca8ca7219d) — Image Preview 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/leonardoxr/dsh-image-preview/blob/ed08ef816ad92e6643b7672cfec677ca8ca7219d/package.json) → [patch](https://github.com/leonardoxr/dsh-image-preview/blob/ed08ef816ad92e6643b7672cfec677ca8ca7219d/cordis.patch.yml) · **身份:** `dsh-image-preview`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `process-control` `session-data` `model-tools` `package-install` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Remote** · [liguobao/deepseek-harness-remote@5debac7](https://github.com/liguobao/deepseek-harness-remote/commit/5debac7af87808f8dca3f9aee69c5c5eb2190eb8) — DeepSeek 远程连接
  - **证据:** [manifest](https://github.com/liguobao/deepseek-harness-remote/blob/5debac7af87808f8dca3f9aee69c5c5eb2190eb8/package.json) → [patch](https://github.com/liguobao/deepseek-harness-remote/blob/5debac7af87808f8dca3f9aee69c5c5eb2190eb8/cordis.patch.yml) · **身份:** `dsh-remote`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `session-data` `package-install` `vision` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Thinking Language** · [qingmomo233/dsh-plugin-thinking-language@7e104a9](https://github.com/qingmomo233/dsh-plugin-thinking-language/commit/7e104a9103ce26ae864f87b0949eb9482dc66258) — DSH plugin: switch the language of the agent's thinking/reasoning process (简体中文, English, Русский, Français, Deutsch, Español, 日本語, 한국어 and more)
  - **证据:** [manifest](https://github.com/qingmomo233/dsh-plugin-thinking-language/blob/7e104a9103ce26ae864f87b0949eb9482dc66258/package.json) → [patch](https://github.com/qingmomo233/dsh-plugin-thinking-language/blob/7e104a9103ce26ae864f87b0949eb9482dc66258/cordis.patch.yml) · **身份:** `dsh-plugin-thinking-language`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Quark Self AI** · [Quarkfan/QuarkSelfAI@5021bc1](https://github.com/Quarkfan/QuarkSelfAI/commit/5021bc1c57bab2235ea2511448eee1c2217649a8) — Quark Self AI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Quarkfan/QuarkSelfAI/blob/5021bc1c57bab2235ea2511448eee1c2217649a8/package.json) → [patch](https://github.com/Quarkfan/QuarkSelfAI/blob/5021bc1c57bab2235ea2511448eee1c2217649a8/cordis.patch.yml) · **身份:** `@quarkfan/quark-self-ai`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `session-data` `model-tools` `package-install` `vision` `multi-agent` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **A11y Announcer** · [slohmaier/dsh-a11y-announcer@6108054](https://github.com/slohmaier/dsh-a11y-announcer/commit/61080549d81307cb2e92c185d63d6b2a6d901f99) — A11y Announcer 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/slohmaier/dsh-a11y-announcer/blob/61080549d81307cb2e92c185d63d6b2a6d901f99/package.json) → [patch](https://github.com/slohmaier/dsh-a11y-announcer/blob/61080549d81307cb2e92c185d63d6b2a6d901f99/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-a11y-announcer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `process-control` `session-data` `model-tools` `audio` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **AT File** · [star-power0/dsh-plugins@34c008b](https://github.com/star-power0/dsh-plugins/commit/34c008b98dd0d5fa6fd8c2abb9e1bf8fd3227e17) — AT File 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/star-power0/dsh-plugins/blob/34c008b98dd0d5fa6fd8c2abb9e1bf8fd3227e17/dsh-at-file/package.json) → [patch](https://github.com/star-power0/dsh-plugins/blob/34c008b98dd0d5fa6fd8c2abb9e1bf8fd3227e17/dsh-at-file/cordis.patch.yml) · **身份:** `dsh-at-file`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `mcp` `session-data` `model-tools` `package-install` `vision` `theme` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Brainagent** · [stas130286-blip/dsh-brainagent@dd1439f](https://github.com/stas130286-blip/dsh-brainagent/commit/dd1439f01e0a98d4d8617087a2195f75ab28f6b0) — Brainagent 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/stas130286-blip/dsh-brainagent/blob/dd1439f01e0a98d4d8617087a2195f75ab28f6b0/package.json) → [patch](https://github.com/stas130286-blip/dsh-brainagent/blob/dd1439f01e0a98d4d8617087a2195f75ab28f6b0/cordis.patch.yml) · **身份:** `dsh-brainagent`
  - **许可证:** repo `Unresolved` / package `SEE LICENSE IN LICENSE` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `session-data` `model-tools` `package-install` `theme` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Quote Message** · [sumomok/dsh-plugins@698f2cf](https://github.com/sumomok/dsh-plugins/commit/698f2cfb2ac72b38be5871cef5a5e18b247f1808) — Quote Message 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/sumomok/dsh-plugins/blob/698f2cfb2ac72b38be5871cef5a5e18b247f1808/packages/quote-message/package.json) → [patch](https://github.com/sumomok/dsh-plugins/blob/698f2cfb2ac72b38be5871cef5a5e18b247f1808/packages/quote-message/cordis.patch.yml) · **身份:** `@sumomok/dsh-quote-message`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `session-data` `package-install` `vision` `financial` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Bills** · [Sysfbs64/dsh-bills@bed51b3](https://github.com/Sysfbs64/dsh-bills/commit/bed51b3410ad31ea236f12b7ca3af0e33a057868) — DSH Web GUI 模型用量账单：按会话聚合 token 用量并按 DeepSeek 官方峰谷价目表估算费用（含周末全天低谷价）；支持 7d / 14d / 30d / 自定义时间窗口的统计卡片、柱状图、热力图与按会话明细表；账单以会话标签页形式整页阅览；增量同步（事件驱动 + 轮询水位线）+ 磁盘缓存常驻。
  - **证据:** [manifest](https://github.com/Sysfbs64/dsh-bills/blob/bed51b3410ad31ea236f12b7ca3af0e33a057868/package.json) → [patch](https://github.com/Sysfbs64/dsh-bills/blob/bed51b3410ad31ea236f12b7ca3af0e33a057868/cordis.patch.yml) · **身份:** `dsh-bills`
  - **许可证:** repo `GPL-3.0` / package `GPL-3.0-only` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `license-conflict` · **核验备注:** 因license consistency证据不足或冲突而暂缓；未执行候选代码。

- **Codely Quota** · [tianyin231/codely-dsh-bridge@46b9716](https://github.com/tianyin231/codely-dsh-bridge/commit/46b9716269f9dbb72a5cdc7164b369bf9e1041b1) — 实时显示 Codely 账号积分余额（每日赠送/充值余额/套餐5小时周月窗口/月度统计）
  - **证据:** [manifest](https://github.com/tianyin231/codely-dsh-bridge/blob/46b9716269f9dbb72a5cdc7164b369bf9e1041b1/plugins/dsh-codely-quota/package.json) → [patch](https://github.com/tianyin231/codely-dsh-bridge/blob/46b9716269f9dbb72a5cdc7164b369bf9e1041b1/plugins/dsh-codely-quota/cordis.patch.yml) · **身份:** `@dsh-external/dsh-codely-quota`
  - **许可证:** repo `MIT` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `financial` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Taffy Mood** · [vegetable-kun/DSH_Plugin_Taffy@07e00e5](https://github.com/vegetable-kun/DSH_Plugin_Taffy/commit/07e00e59edb6a722dbb13bae1ef72d3f23889d04) — Taffy 表情包状态机：右下角悬浮表情随 agent 状态切换（待审批/思考/工具/插话/出错/被拒…）。A Taffy mood state machine overlay for DeepSeek Harness.
  - **证据:** [manifest](https://github.com/vegetable-kun/DSH_Plugin_Taffy/blob/07e00e59edb6a722dbb13bae1ef72d3f23889d04/package.json) → [patch](https://github.com/vegetable-kun/DSH_Plugin_Taffy/blob/07e00e59edb6a722dbb13bae1ef72d3f23889d04/cordis.patch.yml) · **身份:** `dsh-taffy-mood`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `session-data` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **PAW Lookout** · [xemaya/dsh-paw-lookout@99a1c80](https://github.com/xemaya/dsh-paw-lookout/commit/99a1c80c10f2a7c33155f6ab18dcb488378e6601) — PAW Lookout 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xemaya/dsh-paw-lookout/blob/99a1c80c10f2a7c33155f6ab18dcb488378e6601/package.json) → [patch](https://github.com/xemaya/dsh-paw-lookout/blob/99a1c80c10f2a7c33155f6ab18dcb488378e6601/cordis.patch.yml) · **身份:** `@dsh-external/dsh-paw-lookout`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `package-install` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **PAW Mission** · [xemaya/dsh-paw-mission@0084e05](https://github.com/xemaya/dsh-paw-mission/commit/0084e05349c3311d8b00157d0e4f296d57311008) — PAW Mission 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xemaya/dsh-paw-mission/blob/0084e05349c3311d8b00157d0e4f296d57311008/package.json) → [patch](https://github.com/xemaya/dsh-paw-mission/blob/0084e05349c3311d8b00157d0e4f296d57311008/cordis.patch.yml) · **身份:** `@dsh-external/dsh-paw-mission`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `package-install` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Agent Terminal** · [xujiping/dsh-plugins@baa46b5](https://github.com/xujiping/dsh-plugins/commit/baa46b5ede1ca11a541ad72d233bf89e2d89aaf6) — Agent Terminal 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/xujiping/dsh-plugins/blob/baa46b5ede1ca11a541ad72d233bf89e2d89aaf6/packages/dsh-agent-terminal/package.json) → [patch](https://github.com/xujiping/dsh-plugins/blob/baa46b5ede1ca11a541ad72d233bf89e2d89aaf6/packages/dsh-agent-terminal/cordis.patch.yml) · **身份:** `dsh-agent-terminal`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `session-data` `model-tools` `package-install` `theme` `nested-bundle` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Plugin** · [YE-YI7/asm-spec@0dbb3ba](https://github.com/YE-YI7/asm-spec/commit/0dbb3ba5d723cd17bffa19b43ee645933eec0a43) — Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/YE-YI7/asm-spec/blob/0dbb3ba5d723cd17bffa19b43ee645933eec0a43/integrations/deepseek-harness/package.json) → [patch](https://github.com/YE-YI7/asm-spec/blob/0dbb3ba5d723cd17bffa19b43ee645933eec0a43/integrations/deepseek-harness/cordis.patch.yml) · **身份:** `@asm-protocol/dsh-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `process-control` `mcp` `model-tools` `package-install` `web-search` `vision` `audio` `financial` `nested-bundle` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Session Cookie Manager** · [yeisme/harness-plugins@9318b93](https://github.com/yeisme/harness-plugins/commit/9318b9330b342f8fdafe8369b487841b07fb1400) — Session Cookie Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yeisme/harness-plugins/blob/9318b9330b342f8fdafe8369b487841b07fb1400/packages/bundle/dsh-session-cookie-manager/package.json) → [patch](https://github.com/yeisme/harness-plugins/blob/9318b9330b342f8fdafe8369b487841b07fb1400/packages/bundle/dsh-session-cookie-manager/cordis.patch.yml) · **身份:** `@yeisme/dsh-session-cookie-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `package-install` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tmux CC** · [adrianleb/dsh-tmux-cc@61bd253](https://github.com/adrianleb/dsh-tmux-cc/commit/61bd253f3655aff0b3e99b782e04fb622192b329) — Tmux CC 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/adrianleb/dsh-tmux-cc/blob/61bd253f3655aff0b3e99b782e04fb622192b329/package.json) → [patch](https://github.com/adrianleb/dsh-tmux-cc/blob/61bd253f3655aff0b3e99b782e04fb622192b329/cordis.patch.yml) · **身份:** `dsh-tmux-cc`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `package-install` `vision` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Work Board APP** · [AFANman/dsh-work-board@39d8b93](https://github.com/AFANman/dsh-work-board/commit/39d8b93aec3b9a66f11ca4ce3552d580dc21c548) — Work Board APP 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/AFANman/dsh-work-board/blob/39d8b93aec3b9a66f11ca4ce3552d580dc21c548/packages/work-board-app/package.json) → [patch](https://github.com/AFANman/dsh-work-board/blob/39d8b93aec3b9a66f11ca4ce3552d580dc21c548/packages/work-board-app/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-work-board-app`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Plugin** · [alibaba/anolisa@e517edd](https://github.com/alibaba/anolisa/commit/e517eddac2a47824c34668d74dc4d29142638b39) — Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/alibaba/anolisa/blob/e517eddac2a47824c34668d74dc4d29142638b39/src/agentsight/dsh-plugin/package.json) → [patch](https://github.com/alibaba/anolisa/blob/e517eddac2a47824c34668d74dc4d29142638b39/src/agentsight/dsh-plugin/cordis.patch.yml) · **身份:** `@agentsight/dsh-plugin`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `subprocess` `process-control` `session-data` `model-tools` `package-install` `vision` `nested-bundle` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Codex2dsh** · [BigBlueBaby/codex2dsh@a5e2dce](https://github.com/BigBlueBaby/codex2dsh/commit/a5e2dce3ccd2504f7bcacabb57f322139d53e1c4) — 把 Codex（OpenAI Codex CLI / Desktop）的 MCP、技能、全局配置、记忆以适配 DSH 的形式迁移进 DeepSeek Harness（DSH 插件）
  - **证据:** [manifest](https://github.com/BigBlueBaby/codex2dsh/blob/a5e2dce3ccd2504f7bcacabb57f322139d53e1c4/package.json) → [patch](https://github.com/BigBlueBaby/codex2dsh/blob/a5e2dce3ccd2504f7bcacabb57f322139d53e1c4/cordis.patch.yml) · **身份:** `codex2dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `database` `session-data` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Fusion Symphony** · [devmom/fusion-symphony@0de56c5](https://github.com/devmom/fusion-symphony/commit/0de56c5c4ab991bdf4ac4fb36659a39ebbf6c1e1) — Fusion Symphony 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/devmom/fusion-symphony/blob/0de56c5c4ab991bdf4ac4fb36659a39ebbf6c1e1/package.json) → [patch](https://github.com/devmom/fusion-symphony/blob/0de56c5c4ab991bdf4ac4fb36659a39ebbf6c1e1/cordis.patch.yml) · **身份:** `fusion-symphony`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `system-prompt` `model-tools` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Guardrails** · [FengZhiHen1/dsh-guardrails@be1efce](https://github.com/FengZhiHen1/dsh-guardrails/commit/be1efceb022eaa7daa7ed6995fd7b5310a32567d) — Guardrails 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/FengZhiHen1/dsh-guardrails/blob/be1efceb022eaa7daa7ed6995fd7b5310a32567d/package.json) → [patch](https://github.com/FengZhiHen1/dsh-guardrails/blob/be1efceb022eaa7daa7ed6995fd7b5310a32567d/cordis.patch.yml) · **身份:** `dsh-guardrails`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `session-data` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tavern Plugin** · [flizzywine/dsh-tavern@8174245](https://github.com/flizzywine/dsh-tavern/commit/8174245732b29119a80c29fc75e534d3f6e0e684) — Tavern Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/flizzywine/dsh-tavern/blob/8174245732b29119a80c29fc75e534d3f6e0e684/tavern-plugin/package.json) → [patch](https://github.com/flizzywine/dsh-tavern/blob/8174245732b29119a80c29fc75e534d3f6e0e684/tavern-plugin/cordis.patch.yml) · **身份:** `dsh-tavern-plugin`
  - **许可证:** repo `AGPL-3.0` / package `AGPL-3.0` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `subprocess` `process-control` `session-data` `model-tools` `package-install` `vision` `multi-agent` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Model Router** · [fonlan/dsh-model-router@ba768e6](https://github.com/fonlan/dsh-model-router/commit/ba768e625db3301bed09924a4f630c4da4de40d5) — Model Router 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/fonlan/dsh-model-router/blob/ba768e625db3301bed09924a4f630c4da4de40d5/package.json) → [patch](https://github.com/fonlan/dsh-model-router/blob/ba768e625db3301bed09924a4f630c4da4de40d5/cordis.patch.yml) · **身份:** `@fonlan/dsh-model-router`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Mall** · [hoyyang/dsh-mall@a3bd59b](https://github.com/hoyyang/dsh-mall/commit/a3bd59bd7132e476e928b0e184143a1cc157b074) — 全网最强 DeepSeek Harness 插件商场：全量收录 GitHub #dsh-plugin 生态插件，五维实用评分雷达图，智能搜索（AI 理解需求）、智能安装/更新/卸载（AI 装前审查+装后诊断）、一键批量更新、编辑精选与个性化推荐，自带 Skills 工具与 dsh-mall 技能，中英多语言界面。
  - **证据:** [manifest](https://github.com/hoyyang/dsh-mall/blob/a3bd59bd7132e476e928b0e184143a1cc157b074/package.json) → [patch](https://github.com/hoyyang/dsh-mall/blob/a3bd59bd7132e476e928b0e184143a1cc157b074/cordis.patch.yml) · **身份:** `dsh-mall`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `vision` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Makemake** · [ideasir/dsh-makemake@210f956](https://github.com/ideasir/dsh-makemake/commit/210f956655e190859c537d62efffe78e0f6d1e16) — Makemake 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ideasir/dsh-makemake/blob/210f956655e190859c537d62efffe78e0f6d1e16/package.json) → [patch](https://github.com/ideasir/dsh-makemake/blob/210f956655e190859c537d62efffe78e0f6d1e16/cordis.patch.yml) · **身份:** `dsh-makemake`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `credentials` `client-injection` `session-data` `vision` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tapd** · [Jiangluowen623/dsh-plugin-tapd@bf595fa](https://github.com/Jiangluowen623/dsh-plugin-tapd/commit/bf595fa569e6fd9704766850b5562075a2b68b89) — Tapd 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Jiangluowen623/dsh-plugin-tapd/blob/bf595fa569e6fd9704766850b5562075a2b68b89/package.json) → [patch](https://github.com/Jiangluowen623/dsh-plugin-tapd/blob/bf595fa569e6fd9704766850b5562075a2b68b89/cordis.patch.yml) · **身份:** `dsh-plugin-tapd`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `system-prompt` `model-tools` `package-install` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Event Relay** · [joao-paulo-santos/dsh-event-relay@9186997](https://github.com/joao-paulo-santos/dsh-event-relay/commit/9186997d7e02b0265e448bb0e39b12f1d76c3784) — Event Relay 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/joao-paulo-santos/dsh-event-relay/blob/9186997d7e02b0265e448bb0e39b12f1d76c3784/package.json) → [patch](https://github.com/joao-paulo-santos/dsh-event-relay/blob/9186997d7e02b0265e448bb0e39b12f1d76c3784/cordis.patch.yml) · **身份:** `dsh-event-relay`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `subprocess` `session-data` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Prompt Enhance** · [Kian-Oraish/dsh-prompt-enchant@a112037](https://github.com/Kian-Oraish/dsh-prompt-enchant/commit/a112037ede4e7c787755db519428234cc2b147bd) — 提示词附魔棒 (dsh-prompt-enchant):DSH Web 对话输入框的灵活自适应提示词增强插件(磁盘常驻版,重启自动加载)
  - **证据:** [manifest](https://github.com/Kian-Oraish/dsh-prompt-enchant/blob/a112037ede4e7c787755db519428234cc2b147bd/package.json) → [patch](https://github.com/Kian-Oraish/dsh-prompt-enchant/blob/a112037ede4e7c787755db519428234cc2b147bd/cordis.patch.yml) · **身份:** `dsh-prompt-enhance`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `session-data` `model-tools` `vision` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Nvim TUI** · [kovey/dsh-nvim-tui@b45fae3](https://github.com/kovey/dsh-nvim-tui/commit/b45fae305a57f68415eb5063e6122483b7b19d35) — Nvim TUI 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/kovey/dsh-nvim-tui/blob/b45fae305a57f68415eb5063e6122483b7b19d35/package.json) → [patch](https://github.com/kovey/dsh-nvim-tui/blob/b45fae305a57f68415eb5063e6122483b7b19d35/cordis.patch.yml) · **身份:** `dsh-nvim-tui`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `subprocess` `process-control` `mcp` `database` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `prepublish-only` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Token Cost** · [le-soleil-se-couche/dsh-token-cost@a944b73](https://github.com/le-soleil-se-couche/dsh-token-cost/commit/a944b73c5e8b8c96ada84ecc9be9b533a740c9b7) — Token Cost 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/le-soleil-se-couche/dsh-token-cost/blob/a944b73c5e8b8c96ada84ecc9be9b533a740c9b7/package.json) → [patch](https://github.com/le-soleil-se-couche/dsh-token-cost/blob/a944b73c5e8b8c96ada84ecc9be9b533a740c9b7/cordis.patch.yml) · **身份:** `@deepseek-ai/dsh-token-cost`
  - **许可证:** repo `Unresolved` / package `BSD-3-Clause` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `web-search` `vision` `financial` `prepare` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Zhenxin AI Video Manager** · [liuke-zhu/zhenxin-ai-video-manager@42c9e46](https://github.com/liuke-zhu/zhenxin-ai-video-manager/commit/42c9e464e7faa15a765fa7d9a89d8ced0df555f8) — 真的爱你：本地智能视频管家 Agent Skill，说一句「真的爱你」即接管从素材分析到成片交付的完整剪辑流程
  - **证据:** [manifest](https://github.com/liuke-zhu/zhenxin-ai-video-manager/blob/42c9e464e7faa15a765fa7d9a89d8ced0df555f8/package.json) → [patch](https://github.com/liuke-zhu/zhenxin-ai-video-manager/blob/42c9e464e7faa15a765fa7d9a89d8ced0df555f8/cordis.patch.yml) · **身份:** `zhenxin-ai-video-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Vibeweaver** · [logandoo/vibeweaver-dsh@01396ea](https://github.com/logandoo/vibeweaver-dsh/commit/01396ea6261e9cdf9c7d0a222369c148385f18e9) — vibeweaver 技能的 DeepSeek Harness 插件封装：渐进披露契约段 + 机械门禁（assert_artifacts 证据检查）+ 编码任务自动激活 + 回合守卫。
  - **证据:** [manifest](https://github.com/logandoo/vibeweaver-dsh/blob/01396ea6261e9cdf9c7d0a222369c148385f18e9/package.json) → [patch](https://github.com/logandoo/vibeweaver-dsh/blob/01396ea6261e9cdf9c7d0a222369c148385f18e9/cordis.patch.yml) · **身份:** `dsh-vibeweaver`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `filesystem-read` `session-data` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Schedule** · [magicOF2/dsh-schedule@7c2fc6d](https://github.com/magicOF2/dsh-schedule/commit/7c2fc6d0c93378f5305b397fa5fe9c7f0075d545) — 本地长期日程管理插件:侧边栏入口 + 全高抽屉面板(今天/本周/历史月历统计)、行内编辑与详情视图、日程-会话链接跳转、完成打勾、重复日程、一次性日程可选自动顺延、agent 工具。数据长期保存在本地文件。
  - **证据:** [manifest](https://github.com/magicOF2/dsh-schedule/blob/7c2fc6d0c93378f5305b397fa5fe9c7f0075d545/package.json) → [patch](https://github.com/magicOF2/dsh-schedule/blob/7c2fc6d0c93378f5305b397fa5fe9c7f0075d545/cordis.patch.yml) · **身份:** `dsh-schedule`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Accessibility** · [mattheliu/dsh-accessibility@4e5e922](https://github.com/mattheliu/dsh-accessibility/commit/4e5e9223feb1f3da7b64ce22c8ab8abf7d9fa537) — Accessibility 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/mattheliu/dsh-accessibility/blob/4e5e9223feb1f3da7b64ce22c8ab8abf7d9fa537/package.json) → [patch](https://github.com/mattheliu/dsh-accessibility/blob/4e5e9223feb1f3da7b64ce22c8ab8abf7d9fa537/cordis.patch.yml) · **身份:** `dsh-accessibility`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `session-data` `package-install` `vision` `audio` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **DSH** · [opencues/opencues@bff266c](https://github.com/opencues/opencues/commit/bff266ce40d8a224022462994e11e9388be0395a) — DSH 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/opencues/opencues/blob/bff266ce40d8a224022462994e11e9388be0395a/integrations/dsh/package.json) → [patch](https://github.com/opencues/opencues/blob/bff266ce40d8a224022462994e11e9388be0395a/integrations/dsh/cordis.patch.yml) · **身份:** `@opencues/dsh`
  - **许可证:** repo `Apache-2.0` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `subprocess` `process-control` `mcp` `session-data` `system-prompt` `model-tools` `package-install` `vision` `audio` `email` `theme` `nested-bundle` `prepublish-only` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Opencode OMO** · [royenheart/dsh-plugin-opencode-omo@5550c2f](https://github.com/royenheart/dsh-plugin-opencode-omo/commit/5550c2f93840fb101bf15f2f9f5f650d8e759aea) — Opencode OMO 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/royenheart/dsh-plugin-opencode-omo/blob/5550c2f93840fb101bf15f2f9f5f650d8e759aea/package.json) → [patch](https://github.com/royenheart/dsh-plugin-opencode-omo/blob/5550c2f93840fb101bf15f2f9f5f650d8e759aea/cordis.patch.yml) · **身份:** `@royenheart/dsh-plugin-opencode-omo`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `filesystem-write` `process-control` `mcp` `session-data` `system-prompt` `model-tools` `package-install` `vision` `financial` `multi-agent` `theme` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Skills Manager** · [royenheart/dsh-plugin-skills-manager@0873125](https://github.com/royenheart/dsh-plugin-skills-manager/commit/0873125a320b4574738cf572d1a150f13d0f93d1) — Skills Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/royenheart/dsh-plugin-skills-manager/blob/0873125a320b4574738cf572d1a150f13d0f93d1/package.json) → [patch](https://github.com/royenheart/dsh-plugin-skills-manager/blob/0873125a320b4574738cf572d1a150f13d0f93d1/cordis.patch.yml) · **身份:** `@royenheart/dsh-plugin-skills-manager`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `filesystem-read` `session-data` `package-install` `prepare` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Redteam** · [shine-233/dsh-redteam@b54e0a8](https://github.com/shine-233/dsh-redteam/commit/b54e0a8fbe95ab9f59064f2ea977d50013ee2dd5) — DeepSeek Harness 红队/渗透测试模式 bundle：授权范围内的 engagement 记录（目标→意图→证据→事实→漏洞→资产）、跨会话历史、Markdown/JSON 报告与 Web 可视化。
  - **证据:** [manifest](https://github.com/shine-233/dsh-redteam/blob/b54e0a8fbe95ab9f59064f2ea977d50013ee2dd5/package.json) → [patch](https://github.com/shine-233/dsh-redteam/blob/b54e0a8fbe95ab9f59064f2ea977d50013ee2dd5/cordis.patch.yml) · **身份:** `dsh-redteam`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `credentials` `client-injection` `database` `session-data` `package-install` `vision` `stale-peer-range` · **核验备注:** 因baseline compatibility证据不足或冲突而暂缓；未执行候选代码。

- **Waimao** · [shine-233/dsh-waimao@1400fa9](https://github.com/shine-233/dsh-waimao/commit/1400fa9d501f9c1d67a79c3820ab6c52517a4fa0) — 外贸获客插件 for DeepSeek Harness (dsh)：谷歌三层搜索获客（WhatsApp/LinkedIn 买家线索）+ WhatsApp 客服审核台（Evolution API 收发 + AI 草稿 + 人工审核）。Foreign-trade lead gen & WhatsApp review desk as one dsh plugin.
  - **证据:** [manifest](https://github.com/shine-233/dsh-waimao/blob/1400fa9d501f9c1d67a79c3820ab6c52517a4fa0/package.json) → [patch](https://github.com/shine-233/dsh-waimao/blob/1400fa9d501f9c1d67a79c3820ab6c52517a4fa0/cordis.patch.yml) · **身份:** `dsh-waimao`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `web-search` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tarball Import** · [Star-Dreamy/deepseek-harness-desktop@a389abf](https://github.com/Star-Dreamy/deepseek-harness-desktop/commit/a389abff8bea28c4179f3bb39b6aed9ad3e496c6) — Tarball Import 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Star-Dreamy/deepseek-harness-desktop/blob/a389abff8bea28c4179f3bb39b6aed9ad3e496c6/plugins/dsh-tarball-import/package.json) → [patch](https://github.com/Star-Dreamy/deepseek-harness-desktop/blob/a389abff8bea28c4179f3bb39b6aed9ad3e496c6/plugins/dsh-tarball-import/cordis.patch.yml) · **身份:** `dsh-tarball-import`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `browser` `session-data` `package-install` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Workspace Plugin** · [trrrrrryg/dsh-remote-workspace@7f4b734](https://github.com/trrrrrryg/dsh-remote-workspace/commit/7f4b734a6d760d6180f59740b037919bd8d1e09a) — Workspace Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/trrrrrryg/dsh-remote-workspace/blob/7f4b734a6d760d6180f59740b037919bd8d1e09a/package.json) → [patch](https://github.com/trrrrrryg/dsh-remote-workspace/blob/7f4b734a6d760d6180f59740b037919bd8d1e09a/cordis.patch.yml) · **身份:** `@dsh-remote/workspace-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `subprocess` `session-data` `package-install` `web-search` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **NMG** · [wefio/NodeMemoryGraph@838bd6d](https://github.com/wefio/NodeMemoryGraph/commit/838bd6d9760e324235e5bc5d4a3868747ebc6ecf) — NMG 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wefio/NodeMemoryGraph/blob/838bd6d9760e324235e5bc5d4a3868747ebc6ecf/dsh/dsh-nmg/package.json) → [patch](https://github.com/wefio/NodeMemoryGraph/blob/838bd6d9760e324235e5bc5d4a3868747ebc6ecf/dsh/dsh-nmg/cordis.patch.yml) · **身份:** `@nmg/dsh-nmg`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `mcp` `database` `session-data` `model-tools` `package-install` `vision` `financial` `multi-agent` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Xiaozhuge** · [wingsky-1/xiaozhuge@a746799](https://github.com/wingsky-1/xiaozhuge/commit/a7467999ea31a34517e9bb809686e717ec15a2bb) — Xiaozhuge (小诸葛): agent team framework for DeepSeek Harness — MVP 阶段，不发布
  - **证据:** [manifest](https://github.com/wingsky-1/xiaozhuge/blob/a7467999ea31a34517e9bb809686e717ec15a2bb/package.json) → [patch](https://github.com/wingsky-1/xiaozhuge/blob/a7467999ea31a34517e9bb809686e717ec15a2bb/cordis.patch.yml) · **身份:** `@wingsky-1/dsh-xiaozhuge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `session-data` `package-install` `multi-agent` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **MY Full Theme Plugin** · [wuzhunwen/my-dsh-theme-plugin@d5bcabe](https://github.com/wuzhunwen/my-dsh-theme-plugin/commit/d5bcabea1d229c2813bb0d0c0ae4e1f83c402766) — MY Full Theme Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wuzhunwen/my-dsh-theme-plugin/blob/d5bcabea1d229c2813bb0d0c0ae4e1f83c402766/package.json) → [patch](https://github.com/wuzhunwen/my-dsh-theme-plugin/blob/d5bcabea1d229c2813bb0d0c0ae4e1f83c402766/cordis.patch.yml) · **身份:** `my-full-theme-plugin`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `prepublish-only` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Memory Manager** · [xiaoshi7915/dsh-memory-manager@2b51f43](https://github.com/xiaoshi7915/dsh-memory-manager/commit/2b51f43bdeb09fc1822c851296012627b825f32a) — 为 AI Agent 提供短期记忆缓存、长期知识沉淀、语义检索与持久化存储的统一记忆管理层
  - **证据:** [manifest](https://github.com/xiaoshi7915/dsh-memory-manager/blob/2b51f43bdeb09fc1822c851296012627b825f32a/package.json) → [patch](https://github.com/xiaoshi7915/dsh-memory-manager/blob/2b51f43bdeb09fc1822c851296012627b825f32a/cordis.patch.yml) · **身份:** `dsh-memory-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `database` `session-data` `model-tools` `package-install` `financial` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Desktop Plugin** · [XingAur/deepseek-harness-desktop@f880530](https://github.com/XingAur/deepseek-harness-desktop/commit/f8805300b91c5bc7b89c22f6a44b87009a1721c9) — Desktop Plugin 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/XingAur/deepseek-harness-desktop/blob/f8805300b91c5bc7b89c22f6a44b87009a1721c9/packages/dsh-plugin-desktop/package.json) → [patch](https://github.com/XingAur/deepseek-harness-desktop/blob/f8805300b91c5bc7b89c22f6a44b87009a1721c9/packages/dsh-plugin-desktop/cordis.patch.yml) · **身份:** `@dsh/desktop-plugin`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、package license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Prime Agent** · [yoke233/dsh-prime-agent@491d41d](https://github.com/yoke233/dsh-prime-agent/commit/491d41dbc44d46073c0a2ac2ceb2f9d979833cc0) — Prime Agent 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yoke233/dsh-prime-agent/blob/491d41dbc44d46073c0a2ac2ceb2f9d979833cc0/package.json) → [patch](https://github.com/yoke233/dsh-prime-agent/blob/491d41dbc44d46073c0a2ac2ceb2f9d979833cc0/cordis.patch.yml) · **身份:** `dsh-prime-agent`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `process-control` `mcp` `session-data` `model-tools` `package-install` `web-search` `vision` `multi-agent` `theme` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **ProjectModel** · [Youngxj/dsh-ProjectModel@6878929](https://github.com/Youngxj/dsh-ProjectModel/commit/68789298dd2a572ac026ecebef106c542995611e) — DeepSeek Harness 项目组插件：在一个会话中跨多个项目文件夹工作——读写组内文件、运行命令、查看各项目 AGENTS.md；每个项目可带一句说明，AI 据此快速定位目录。项目组跟随工作区（每个工作区独立默认选择），组内文件路径默认允许读写。官方安装：dsh plugin --profile web add。
  - **证据:** [manifest](https://github.com/Youngxj/dsh-ProjectModel/blob/68789298dd2a572ac026ecebef106c542995611e/package.json) → [patch](https://github.com/Youngxj/dsh-ProjectModel/blob/68789298dd2a572ac026ecebef106c542995611e/cordis.patch.yml) · **身份:** `dsh-ProjectModel`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `filesystem-read` `filesystem-write` `process-control` `session-data` `system-prompt` `package-install` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Gongwen** · [Yourtsao/gongwen-dsh@8789c7d](https://github.com/Yourtsao/gongwen-dsh/commit/8789c7d239545c09a85b1cfc4eb89099b2270ee5) — 智能公文写作 DeepSeek Harness 插件——0知识库在线调用，免费10次/7天，2元/次或399元包年（前10个终身），GB/T 9704 38类文种：我们是一群致力于体制内（政府+企事业单位）智能公文写作工具垂直领域的语言学和管理学985博士团队。我们的理想是：技术服务思想、思想服务生活。38文种全调用，43万字知识库是你的底气。有了它，加班写材料成为过去式。
  - **证据:** [manifest](https://github.com/Yourtsao/gongwen-dsh/blob/8789c7d239545c09a85b1cfc4eb89099b2270ee5/package.json) → [patch](https://github.com/Yourtsao/gongwen-dsh/blob/8789c7d239545c09a85b1cfc4eb89099b2270ee5/cordis.patch.yml) · **身份:** `gongwen-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `email` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Autoresearch** · [zerosloney/dsh-autoresearch@e0570a4](https://github.com/zerosloney/dsh-autoresearch/commit/e0570a498e950527527715696559b871d0c7ae33) — Autoresearch 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zerosloney/dsh-autoresearch/blob/e0570a498e950527527715696559b871d0c7ae33/package.json) → [patch](https://github.com/zerosloney/dsh-autoresearch/blob/e0570a498e950527527715696559b871d0c7ae33/cordis.patch.yml) · **身份:** `dsh-autoresearch`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `session-data` `model-tools` `prepack` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Client UI Plugin Manager** · [znc15/dsh-web-plugins@5f846ed](https://github.com/znc15/dsh-web-plugins/commit/5f846edbd0df8fa8964c75c72dce5b2ba39a0c10) — Client UI Plugin Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/znc15/dsh-web-plugins/blob/5f846edbd0df8fa8964c75c72dce5b2ba39a0c10/packages/dsh-plugin-manager/package.json) → [patch](https://github.com/znc15/dsh-web-plugins/blob/5f846edbd0df8fa8964c75c72dce5b2ba39a0c10/packages/dsh-plugin-manager/cordis.patch.yml) · **身份:** `@linxin666/dsh-client-ui-plugin-manager`
  - **许可证:** repo `Apache-2.0` / package `BSD-3-Clause` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `process-control` `session-data` `package-install` `plugin-management` `vision` `theme` `nested-bundle` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Dock Settings** · [20090106-520/Deepseek-Harness-EAC@17a5675](https://github.com/20090106-520/Deepseek-Harness-EAC/commit/17a56757bb41f20e57c1b624e365bcddf18bd980) — Dock Settings 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/20090106-520/Deepseek-Harness-EAC/blob/17a56757bb41f20e57c1b624e365bcddf18bd980/assets/plugins/dsh-dock-settings/package.json) → [patch](https://github.com/20090106-520/Deepseek-Harness-EAC/blob/17a56757bb41f20e57c1b624e365bcddf18bd980/assets/plugins/dsh-dock-settings/cordis.patch.yml) · **身份:** `dsh-dock-settings`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `process-control` `mcp` `browser` `database` `session-data` `package-install` `vision` `financial` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Completion Reminder** · [chancoki/dsh-completion-reminder@4dc9538](https://github.com/chancoki/dsh-completion-reminder/commit/4dc9538b4fbb42d8dcd6080ed4d4e90858e63c41) — DSH client plugin — notify the user when an agent finishes. Adds a '🔔 完成提醒' entry into DSH's settings dialog (Plugins tab + left-nav section); filtered credential fields per channel; dark-theme safe.
  - **证据:** [manifest](https://github.com/chancoki/dsh-completion-reminder/blob/4dc9538b4fbb42d8dcd6080ed4d4e90858e63c41/package.json) → [patch](https://github.com/chancoki/dsh-completion-reminder/blob/4dc9538b4fbb42d8dcd6080ed4d4e90858e63c41/cordis.patch.yml) · **身份:** `dsh-completion-reminder`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `client-injection` `web-search` `theme` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **LLM Agent Bridge** · [daveycodez/dsh-llm-agent-bridge@24e8bb0](https://github.com/daveycodez/dsh-llm-agent-bridge/commit/24e8bb0425f6174fea4baa3b11b9ae2447d62680) — LLM Agent Bridge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/daveycodez/dsh-llm-agent-bridge/blob/24e8bb0425f6174fea4baa3b11b9ae2447d62680/package.json) → [patch](https://github.com/daveycodez/dsh-llm-agent-bridge/blob/24e8bb0425f6174fea4baa3b11b9ae2447d62680/cordis.patch.yml) · **身份:** `dsh-llm-agent-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `session-data` `system-prompt` `model-tools` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Codebuddy Models** · [evlon/dsh-codebuddy-models@913f79e](https://github.com/evlon/dsh-codebuddy-models/commit/913f79e006e40b45c690a2b88c7d4753a8ef8bc2) — Codebuddy Models 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/evlon/dsh-codebuddy-models/blob/913f79e006e40b45c690a2b88c7d4753a8ef8bc2/package.json) → [patch](https://github.com/evlon/dsh-codebuddy-models/blob/913f79e006e40b45c690a2b88c7d4753a8ef8bc2/cordis.patch.yml) · **身份:** `dsh-codebuddy-models`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `model-tools` `package-install` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Subagent Code Agents** · [gyyxs88/dsh-subagent-code-agents@3fe179b](https://github.com/gyyxs88/dsh-subagent-code-agents/commit/3fe179bb203f052db612903ae7edc91050a6fd3e) — Subagent Code Agents 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/gyyxs88/dsh-subagent-code-agents/blob/3fe179bb203f052db612903ae7edc91050a6fd3e/package.json) → [patch](https://github.com/gyyxs88/dsh-subagent-code-agents/blob/3fe179bb203f052db612903ae7edc91050a6fd3e/packages/plugin/cordis.patch.yml) · **身份:** `dsh-subagent-code-agents`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `process-control` `database` `session-data` `model-tools` `package-install` `multi-agent` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **UI Billing** · [HenryHwong/dsh-ui-billing@5b098ce](https://github.com/HenryHwong/dsh-ui-billing/commit/5b098ce9a4bc286d8d068b039ea82cdafde2b58a) — UI Billing 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/HenryHwong/dsh-ui-billing/blob/5b098ce9a4bc286d8d068b039ea82cdafde2b58a/package.json) → [patch](https://github.com/HenryHwong/dsh-ui-billing/blob/5b098ce9a4bc286d8d068b039ea82cdafde2b58a/cordis.patch.yml) · **身份:** `@huanghanheng/dsh-ui-billing`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `session-data` `model-tools` `package-install` `plugin-management` `vision` `financial` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Granular Settings** · [joao-paulo-santos/dsh-granular-settings@7a0e3bf](https://github.com/joao-paulo-santos/dsh-granular-settings/commit/7a0e3bff10aeec5540f7f8f4459d8661a3320f5d) — Granular Settings 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/joao-paulo-santos/dsh-granular-settings/blob/7a0e3bff10aeec5540f7f8f4459d8661a3320f5d/package.json) → [patch](https://github.com/joao-paulo-santos/dsh-granular-settings/blob/7a0e3bff10aeec5540f7f8f4459d8661a3320f5d/cordis.patch.yml) · **身份:** `dsh-granular-settings`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `filesystem-write` `subprocess` `process-control` `session-data` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Synapse** · [liangmianya/dsh-synapse@6968378](https://github.com/liangmianya/dsh-synapse/commit/69683780b4cad6a677225e20fbdbf368b9f0b09a) — Synapse 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/liangmianya/dsh-synapse/blob/69683780b4cad6a677225e20fbdbf368b9f0b09a/package.json) → [patch](https://github.com/liangmianya/dsh-synapse/blob/69683780b4cad6a677225e20fbdbf368b9f0b09a/cordis.patch.yml) · **身份:** `dsh-synapse`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `package-install` `vision` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **DEV Dock** · [liyuera/deekseek-harness-plugin@327853b](https://github.com/liyuera/deekseek-harness-plugin/commit/327853b74fd4698a6fdf4d132b600797cc733e6b) — DEV Dock 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/liyuera/deekseek-harness-plugin/blob/327853b74fd4698a6fdf4d132b600797cc733e6b/dev-dock/package.json) → [patch](https://github.com/liyuera/deekseek-harness-plugin/blob/327853b74fd4698a6fdf4d132b600797cc733e6b/dev-dock/cordis.patch.yml) · **身份:** `@liyuera/dsh-dev-dock`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `subprocess` `process-control` `session-data` `multi-agent` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Agentctl** · [moreWax/dsh-agentctl@28793df](https://github.com/moreWax/dsh-agentctl/commit/28793dfed5eb3a72ebafe47ed5637437db8a8801) — Agentctl 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/moreWax/dsh-agentctl/blob/28793dfed5eb3a72ebafe47ed5637437db8a8801/package.json) → [patch](https://github.com/moreWax/dsh-agentctl/blob/28793dfed5eb3a72ebafe47ed5637437db8a8801/cordis.patch.yml) · **身份:** `@morewax/dsh-agentctl`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `mcp` `session-data` `model-tools` `package-install` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Spec PTC** · [moreWax/dsh-spec-ptc@4b558ea](https://github.com/moreWax/dsh-spec-ptc/commit/4b558eaaf0d1e037861158d70b6705dcc90f5fa6) — Spec PTC 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/moreWax/dsh-spec-ptc/blob/4b558eaaf0d1e037861158d70b6705dcc90f5fa6/package.json) → [patch](https://github.com/moreWax/dsh-spec-ptc/blob/4b558eaaf0d1e037861158d70b6705dcc90f5fa6/cordis.patch.yml) · **身份:** `@morewax/dsh-spec-ptc`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `model-tools` `package-install` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tasks Manager** · [navid-kianfar/dsh-tasks-manager@cbf87c6](https://github.com/navid-kianfar/dsh-tasks-manager/commit/cbf87c609dd33d0481a2a9bed9721d1fd383618f) — Tasks Manager 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/navid-kianfar/dsh-tasks-manager/blob/cbf87c609dd33d0481a2a9bed9721d1fd383618f/package.json) → [patch](https://github.com/navid-kianfar/dsh-tasks-manager/blob/cbf87c609dd33d0481a2a9bed9721d1fd383618f/cordis.patch.yml) · **身份:** `@achasoft/dsh-tasks-manager`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `subprocess` `database` `session-data` `package-install` `vision` `multi-agent` `theme` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Imgdraw** · [NinjaSln-labs/dsh-plugins@1f7bf66](https://github.com/NinjaSln-labs/dsh-plugins/commit/1f7bf66aa6b2c6cf7145149004dd7fff6e55bcb9) — Text-to-image for DeepSeek Harness: a `draw_image` model tool, an input-bar 生图 button with a prompt popup (async generation, 4-grid results, download / keep / delete), an /imgdraw image route, and persisted history. Backends: DashScope wan2.7-image (free default) and SiliconFlow Qwen-Image.
  - **证据:** [manifest](https://github.com/NinjaSln-labs/dsh-plugins/blob/1f7bf66aa6b2c6cf7145149004dd7fff6e55bcb9/dsh-imgdraw/package.json) → [patch](https://github.com/NinjaSln-labs/dsh-plugins/blob/1f7bf66aa6b2c6cf7145149004dd7fff6e55bcb9/dsh-imgdraw/cordis.patch.yml) · **身份:** `dsh-imgdraw`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `database` `session-data` `model-tools` `vision` `multi-agent` `nested-bundle` `prepublish-only` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Chatgpt WEB** · [NishiMihaeru/dsh-chatgpt-web@14aa2d5](https://github.com/NishiMihaeru/dsh-chatgpt-web/commit/14aa2d5e334161a301ba1a0bd8e5a40f2976aedc) — Chatgpt WEB 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/NishiMihaeru/dsh-chatgpt-web/blob/14aa2d5e334161a301ba1a0bd8e5a40f2976aedc/package.json) → [patch](https://github.com/NishiMihaeru/dsh-chatgpt-web/blob/14aa2d5e334161a301ba1a0bd8e5a40f2976aedc/cordis.patch.yml) · **身份:** `dsh-chatgpt-web`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `process-control` `mcp` `browser` `session-data` `model-tools` `package-install` `vision` `financial` `multi-agent` `prepack` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Powercontext** · [oceanbase/powercontext@c024e1a](https://github.com/oceanbase/powercontext/commit/c024e1abe12c9cbc3dcb910c7341e733be6ee3b6) — Powercontext 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/oceanbase/powercontext/blob/c024e1abe12c9cbc3dcb910c7341e733be6ee3b6/integrations/dsh/plugins/powercontext/package.json) → [patch](https://github.com/oceanbase/powercontext/blob/c024e1abe12c9cbc3dcb910c7341e733be6ee3b6/integrations/dsh/plugins/powercontext/cordis.patch.yml) · **身份:** `powercontext-dsh`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `subprocess` `mcp` `database` `session-data` `model-tools` `vision` `financial` `nested-bundle` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Right Sidebar** · [sch246/dsh-right-sidebar@94ad588](https://github.com/sch246/dsh-right-sidebar/commit/94ad5882cbbac9573968ac735ba3253bbb9b3a99) — DSH Web 右侧边栏平台插件：接管官方 details 列（真列），tab 开放注册 + 会话联动层
  - **证据:** [manifest](https://github.com/sch246/dsh-right-sidebar/blob/94ad5882cbbac9573968ac735ba3253bbb9b3a99/package.json) → [patch](https://github.com/sch246/dsh-right-sidebar/blob/94ad5882cbbac9573968ac735ba3253bbb9b3a99/cordis.patch.yml) · **身份:** `@dsh-external/dsh-right-sidebar`
  - **许可证:** repo `MIT` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `client-injection` `process-control` `session-data` `model-tools` `license-conflict` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因license consistency、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Command Rail** · [secyborg/dsh-command-rail@625505a](https://github.com/secyborg/dsh-command-rail/commit/625505ad2dd8010003a5b629156a5e9d599a1c2a) — Command Rail 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/secyborg/dsh-command-rail/blob/625505ad2dd8010003a5b629156a5e9d599a1c2a/package.json) → [patch](https://github.com/secyborg/dsh-command-rail/blob/625505ad2dd8010003a5b629156a5e9d599a1c2a/cordis.patch.yml) · **身份:** `dsh-command-rail`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `session-data` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Mindharness Parliament** · [shehzadahmed-xx/mindharness@c17c14c](https://github.com/shehzadahmed-xx/mindharness/commit/c17c14c3fc3dbe5be685c1c4ac1f13c6819d25a6) — Mindharness Parliament 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/shehzadahmed-xx/mindharness/blob/c17c14c3fc3dbe5be685c1c4ac1f13c6819d25a6/bundles/dsh-mindharness-parliament/package.json) → [patch](https://github.com/shehzadahmed-xx/mindharness/blob/c17c14c3fc3dbe5be685c1c4ac1f13c6819d25a6/bundles/dsh-mindharness-parliament/cordis.patch.yml) · **身份:** `dsh-mindharness-parliament`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `session-data` `model-tools` `vision` `nested-bundle` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Health Live** · [Shizuku-keop/dsh-health@2ad5941](https://github.com/Shizuku-keop/dsh-health/commit/2ad5941e09420c46f68493b96de60ad535de47f5) — Health Live 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Shizuku-keop/dsh-health/blob/2ad5941e09420c46f68493b96de60ad535de47f5/bundle/package.json) → [patch](https://github.com/Shizuku-keop/dsh-health/blob/2ad5941e09420c46f68493b96de60ad535de47f5/bundle/cordis.patch.yml) · **身份:** `dsh-health-live`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `database` `session-data` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Tool Council** · [starsinc1708/dsh-tool-council@8167056](https://github.com/starsinc1708/dsh-tool-council/commit/816705663f292c5cc3594e616e9317e926e2fd96) — Tool Council 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/starsinc1708/dsh-tool-council/blob/816705663f292c5cc3594e616e9317e926e2fd96/package.json) → [patch](https://github.com/starsinc1708/dsh-tool-council/blob/816705663f292c5cc3594e616e9317e926e2fd96/cordis.patch.yml) · **身份:** `@starsinc1708/dsh-tool-council`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `process-control` `session-data` `model-tools` `package-install` `multi-agent` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Webui** · [statem-li/dsh-webui@5a0f5d7](https://github.com/statem-li/dsh-webui/commit/5a0f5d75f106784241d1c22103349cb68a739bda) — webui：视图图块/消息导航 + 工具调用聚合 + Markdown 渲染 + 模型推理等级同步 + AnySearch 网页搜索（合并 dsh-tool-summary / dsh-better-markdown / dsh-web-search-anysearch）
  - **证据:** [manifest](https://github.com/statem-li/dsh-webui/blob/5a0f5d75f106784241d1c22103349cb68a739bda/package.json) → [patch](https://github.com/statem-li/dsh-webui/blob/5a0f5d75f106784241d1c22103349cb68a739bda/cordis.patch.yml) · **身份:** `@dsh-external/dsh-webui`
  - **许可证:** repo `Unresolved` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-write` `session-data` `model-tools` `vision` `audio` `email` `multi-agent` `theme` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Flowix Memory** · [text2future/flowix@99b677e](https://github.com/text2future/flowix/commit/99b677e24f2b6a0d16e9effb5876cb6c88a4f267) — Flowix Memory 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/text2future/flowix/blob/99b677e24f2b6a0d16e9effb5876cb6c88a4f267/dsh-flowix-memory/package.json) → [patch](https://github.com/text2future/flowix/blob/99b677e24f2b6a0d16e9effb5876cb6c88a4f267/dsh-flowix-memory/cordis.patch.yml) · **身份:** `dsh-flowix-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `process-control` `mcp` `session-data` `package-install` `vision` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Harness Plugins** · [VladPatr96/deepseek-harness-plugins@27042a2](https://github.com/VladPatr96/deepseek-harness-plugins/commit/27042a2171e72a0d949f915dea9c814914d37fc1) — Harness Plugins 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/VladPatr96/deepseek-harness-plugins/blob/27042a2171e72a0d949f915dea9c814914d37fc1/package.json) → [patch](https://github.com/VladPatr96/deepseek-harness-plugins/blob/27042a2171e72a0d949f915dea9c814914d37fc1/cordis.patch.yml) · **身份:** `deepseek-harness-plugins`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `process-control` `session-data` `package-install` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Think Collapse** · [x2725/think-collapse@1c8a456](https://github.com/x2725/think-collapse/commit/1c8a456307e9df9e71ee067e55364d9093f8af7d) — Collapse the full pre-result process of each assistant turn into one Codex-style duration row. · 将每轮最终结果前的完整过程折叠为 Codex 风格耗时行。
  - **证据:** [manifest](https://github.com/x2725/think-collapse/blob/1c8a456307e9df9e71ee067e55364d9093f8af7d/package.json) → [patch](https://github.com/x2725/think-collapse/blob/1c8a456307e9df9e71ee067e55364d9093f8af7d/cordis.patch.yml) · **身份:** `think-collapse`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Novel Creation Tool** · [Xu-Morgen/dsh-novel-generated@cb295f0](https://github.com/Xu-Morgen/dsh-novel-generated/commit/cb295f0c701f10eac9ea944f69c475219a1dbd2b) — AI 长篇小说创作器 —— DeepSeek Harness ordinary persistent Cordis bundle plugin
  - **证据:** [manifest](https://github.com/Xu-Morgen/dsh-novel-generated/blob/cb295f0c701f10eac9ea944f69c475219a1dbd2b/package.json) → [patch](https://github.com/Xu-Morgen/dsh-novel-generated/blob/cb295f0c701f10eac9ea944f69c475219a1dbd2b/cordis.patch.yml) · **身份:** `novel-creation-tool`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `credentials` `client-injection` `filesystem-write` `model-tools` `package-install` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Paper Checker** · [YFlaga/dsh-paper-checker@8dd3b08](https://github.com/YFlaga/dsh-paper-checker/commit/8dd3b08d6f5b0a9934df3204eb7d2ab099bf6ee7) — 检查学术期刊投稿审稿状态并定时汇报：Editorial Manager 期刊走确定性 Playwright 抓取，其他投稿系统回退给 AI 用浏览器工具处理。
  - **证据:** [manifest](https://github.com/YFlaga/dsh-paper-checker/blob/8dd3b08d6f5b0a9934df3204eb7d2ab099bf6ee7/package.json) → [patch](https://github.com/YFlaga/dsh-paper-checker/blob/8dd3b08d6f5b0a9934df3204eb7d2ab099bf6ee7/cordis.patch.yml) · **身份:** `@dsh-external/dsh-paper-checker`
  - **许可证:** repo `Unresolved` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `browser` `session-data` `package-install` `vision` `email` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Quick Window Launcher** · [Yuanloss/dsh-quick-window-launcher@b6ac58a](https://github.com/Yuanloss/dsh-quick-window-launcher/commit/b6ac58ad8f0dc489d3dfd19359f995825708506a) — Quick Window Launcher 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Yuanloss/dsh-quick-window-launcher/blob/b6ac58ad8f0dc489d3dfd19359f995825708506a/package.json) → [patch](https://github.com/Yuanloss/dsh-quick-window-launcher/blob/b6ac58ad8f0dc489d3dfd19359f995825708506a/cordis.patch.yml) · **身份:** `dsh-quick-window-launcher`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `process-control` `browser` `web-search` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Model Override** · [zabooma/dsh-plugins@e724f1d](https://github.com/zabooma/dsh-plugins/commit/e724f1d94a01abd5c3da20deb60653f37877c56f) — Model Override 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zabooma/dsh-plugins/blob/e724f1d94a01abd5c3da20deb60653f37877c56f/plugins/dsh-model-override/package.json) → [patch](https://github.com/zabooma/dsh-plugins/blob/e724f1d94a01abd5c3da20deb60653f37877c56f/plugins/dsh-model-override/cordis.patch.yml) · **身份:** `dsh-model-override`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `process-control` `session-data` `system-prompt` `nested-bundle` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Easyeda Agent** · [zhoushoujianwork/easyeda-agent@fb3998f](https://github.com/zhoushoujianwork/easyeda-agent/commit/fb3998ff3779c0227cbc5f5399fd59e12e4dc714) — Easyeda Agent 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zhoushoujianwork/easyeda-agent/blob/fb3998ff3779c0227cbc5f5399fd59e12e4dc714/package.json) → [patch](https://github.com/zhoushoujianwork/easyeda-agent/blob/fb3998ff3779c0227cbc5f5399fd59e12e4dc714/cordis.patch.yml) · **身份:** `easyeda-agent-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `filesystem-read` `process-control` `mcp` `vision` `financial` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Desktop Companion** · [ZK-Andy/dotnet-deepseek-harness-desktop@6b4af42](https://github.com/ZK-Andy/dotnet-deepseek-harness-desktop/commit/6b4af42454fd08bad3a51adfed8beb64046a1660) — DeepSeek Harness Desktop 的桌面伴生插件：外部链接接管系统浏览器等壳集成能力。Desktop shell companion for dotnet-deepseek-harness-desktop.
  - **证据:** [manifest](https://github.com/ZK-Andy/dotnet-deepseek-harness-desktop/blob/6b4af42454fd08bad3a51adfed8beb64046a1660/plugins/dsh-desktop-companion/package.json) → [patch](https://github.com/ZK-Andy/dotnet-deepseek-harness-desktop/blob/6b4af42454fd08bad3a51adfed8beb64046a1660/plugins/dsh-desktop-companion/cordis.patch.yml) · **身份:** `dsh-desktop-companion`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Autodata** · [ZLZLGe/autodata@e51aa18](https://github.com/ZLZLGe/autodata/commit/e51aa187318d3a817d4e824086c0287adddaf46a) — Autodata 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/ZLZLGe/autodata/blob/e51aa187318d3a817d4e824086c0287adddaf46a/package.json) → [patch](https://github.com/ZLZLGe/autodata/blob/e51aa187318d3a817d4e824086c0287adddaf46a/cordis.patch.yml) · **身份:** `@zlzlge/autodata`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `session-data` `model-tools` `package-install` `vision` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Remote SSH** · [zsmx233/dsh-plugin-ssh-remotes@f7adf22](https://github.com/zsmx233/dsh-plugin-ssh-remotes/commit/f7adf229370f760e9e0a264c7891e304f6b4ef41) — Remote SSH 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zsmx233/dsh-plugin-ssh-remotes/blob/f7adf229370f760e9e0a264c7891e304f6b4ef41/package.json) → [patch](https://github.com/zsmx233/dsh-plugin-ssh-remotes/blob/f7adf229370f760e9e0a264c7891e304f6b4ef41/cordis.patch.yml) · **身份:** `@dsh-external/dsh-remote-ssh`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `client-injection` `session-data` `model-tools` `theme` `license-incomplete` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因repository license、npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Enterprise OPS** · [01men/ybkk-AIOS@7976dfd](https://github.com/01men/ybkk-AIOS/commit/7976dfd63cecb504c2e1bbc28fcc1f15413b5385) — 企业 AI 资源统一管理平台 —— 基于 DeepSeek Harness「一切皆插件」架构
  - **证据:** [manifest](https://github.com/01men/ybkk-AIOS/blob/7976dfd63cecb504c2e1bbc28fcc1f15413b5385/package.json) → [patch](https://github.com/01men/ybkk-AIOS/blob/7976dfd63cecb504c2e1bbc28fcc1f15413b5385/cordis.patch.yml) · **身份:** `dsh-enterprise-ops`
  - **许可证:** repo `Unresolved` / package `Unresolved` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `filesystem-write` `mcp` `database` `session-data` `package-install` `email` `financial` `license-incomplete` · **核验备注:** 因repository license、package license证据不足或冲突而暂缓；未执行候选代码。

- **Creator** · [Backctrl/orios-content-workbench@f11058d](https://github.com/Backctrl/orios-content-workbench/commit/f11058db4439369b2b349727ee0b7ddf5639e12c) — OriOS 面向 DeepSeek Harness 的内容生产工作台插件：情报先行 + 四级审批闸门（选题→长文→变体→发布）+ 平台打法（融合 creator-buddy）+ dsh-worktable 多窗口界面
  - **证据:** [manifest](https://github.com/Backctrl/orios-content-workbench/blob/f11058db4439369b2b349727ee0b7ddf5639e12c/package.json) → [patch](https://github.com/Backctrl/orios-content-workbench/blob/f11058db4439369b2b349727ee0b7ddf5639e12c/cordis.patch.yml) · **身份:** `@orios/dsh-creator`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `package-install` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **GOV Portal** · [ExElectron/dsh-gov-portal@04a69c1](https://github.com/ExElectron/dsh-gov-portal/commit/04a69c142d6f308306f0797fb4bf2abac4cc691c) — Deepseek Harness 综合智能办事平台 — 独立政务风 WebUI（默认端口 3081），通过宿主 apiProxy 1:1 对接 dsh 的会话/模型/权限/统计等全部 Agent 能力
  - **证据:** [manifest](https://github.com/ExElectron/dsh-gov-portal/blob/04a69c142d6f308306f0797fb4bf2abac4cc691c/package.json) → [patch](https://github.com/ExElectron/dsh-gov-portal/blob/04a69c142d6f308306f0797fb4bf2abac4cc691c/cordis.patch.yml) · **身份:** `dsh-gov-portal`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `vision` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Voice Announcer** · [flashyiyi/dsh-voice-announcer@499ec24](https://github.com/flashyiyi/dsh-voice-announcer/commit/499ec2419c0c22d45084b1b5581b17370fdd7fff) — 对话结束语音播报：会话名+轮数+结果（edge-tts 流式 / SAPI）
  - **证据:** [manifest](https://github.com/flashyiyi/dsh-voice-announcer/blob/499ec2419c0c22d45084b1b5581b17370fdd7fff/package.json) → [patch](https://github.com/flashyiyi/dsh-voice-announcer/blob/499ec2419c0c22d45084b1b5581b17370fdd7fff/cordis.patch.yml) · **身份:** `dsh-voice-announcer`
  - **许可证:** repo `Unresolved` / package `BSD-3-Clause` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `client-injection` `session-data` `model-tools` `audio` `multi-agent` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Runtime** · [Gavin-Gibson/GlasswareTracker@790d659](https://github.com/Gavin-Gibson/GlasswareTracker/commit/790d659249453e86b842bc085ae7d7a0d2b3d957) — Runtime 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/Gavin-Gibson/GlasswareTracker/blob/790d659249453e86b842bc085ae7d7a0d2b3d957/packages/dsh-runtime/package.json) → [patch](https://github.com/Gavin-Gibson/GlasswareTracker/blob/790d659249453e86b842bc085ae7d7a0d2b3d957/packages/dsh-runtime/cordis.patch.yml) · **身份:** `@open-design/dsh-runtime`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `filesystem-read` `subprocess` `process-control` `mcp` `database` `session-data` `model-tools` `package-install` `plugin-management` `vision` `audio` `email` `financial` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Knowledge** · [lemoncat7/dsh-knowledge@114901a](https://github.com/lemoncat7/dsh-knowledge/commit/114901aed2fbf91f1b40f8708f262aa882f4cae0) — Knowledge 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/lemoncat7/dsh-knowledge/blob/114901aed2fbf91f1b40f8708f262aa882f4cae0/package.json) → [patch](https://github.com/lemoncat7/dsh-knowledge/blob/114901aed2fbf91f1b40f8708f262aa882f4cae0/cordis.patch.yml) · **身份:** `@lemoncat7/dsh-knowledge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `client-injection` `database` `session-data` `package-install` `vision` `theme` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Subagent View** · [MrSsSprite/subagent-view@9f5b9b6](https://github.com/MrSsSprite/subagent-view/commit/9f5b9b6d5a54fa138b2f9f8fcba446ca9c68984b) — Subagent View 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/MrSsSprite/subagent-view/blob/9f5b9b6d5a54fa138b2f9f8fcba446ca9c68984b/package.json) → [patch](https://github.com/MrSsSprite/subagent-view/blob/9f5b9b6d5a54fa138b2f9f8fcba446ca9c68984b/cordis.patch.yml) · **身份:** `subagent-view`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 落后于 rc.6 基线
  - **能力信号:** `external-network` `client-injection` `subprocess` `process-control` `session-data` `package-install` `multi-agent` `identity-unresolved` `unresolved-install-identity` `stale-peer-range` · **核验备注:** 因npm or Git-source installation identity、baseline compatibility证据不足或冲突而暂缓；未执行候选代码。

- **Geometry Knowledge** · [sdoygb/geometry-knowledge@1fdf33c](https://github.com/sdoygb/geometry-knowledge/commit/1fdf33cdf1b0fe9d4be2f7d921a8f754d13ec9a8) — 几何论（共扼谱几何 CSG）知识库插件：纯离线 BM25 检索 208 篇文章全文 + 3833 分块 + 871 条主库真理层，零运行时依赖。Conjugate Spectral Geometry knowledge base for DeepSeek Harness: fully offline BM25 retrieval over 208 articles, 3833 chunks and 871 verified truths.
  - **证据:** [manifest](https://github.com/sdoygb/geometry-knowledge/blob/1fdf33cdf1b0fe9d4be2f7d921a8f754d13ec9a8/package.json) → [patch](https://github.com/sdoygb/geometry-knowledge/blob/1fdf33cdf1b0fe9d4be2f7d921a8f754d13ec9a8/cordis.patch.yml) · **身份:** `geometry-knowledge`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `prepare` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **Dialogue Context Bridge** · [ShadowQuill/DialogueContextBridge@83e0aae](https://github.com/ShadowQuill/DialogueContextBridge/commit/83e0aae96be7a2d39e559dd5739835f3074ccdca) — 对话上下文桥接：为大语言模型(LLM)/AI 智能体的对话做跨会话上下文桥接的 DSH 插件，把一次对话的共识编译为可移植三层快照，一键引入新对话。
  - **证据:** [manifest](https://github.com/ShadowQuill/DialogueContextBridge/blob/83e0aae96be7a2d39e559dd5739835f3074ccdca/package.json) → [patch](https://github.com/ShadowQuill/DialogueContextBridge/blob/83e0aae96be7a2d39e559dd5739835f3074ccdca/cordis.patch.yml) · **身份:** `dsh-plugin-dialogue-context-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `external-network` `database` `session-data` `model-tools` `package-install` `financial` `prepublish-only` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Enhanced Plugins** · [sky-unicorn/dsh-enhanced-plugins@a565607](https://github.com/sky-unicorn/dsh-enhanced-plugins/commit/a56560726b1292d2e1fa3dc2f21c08c38023b14f) — Enhanced Plugins 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/sky-unicorn/dsh-enhanced-plugins/blob/a56560726b1292d2e1fa3dc2f21c08c38023b14f/package.json) → [patch](https://github.com/sky-unicorn/dsh-enhanced-plugins/blob/a56560726b1292d2e1fa3dc2f21c08c38023b14f/cordis.patch.yml) · **身份:** `dsh-enhanced-plugins`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · peer range 混合
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `process-control` `mcp` `session-data` `model-tools` `package-install` `vision` `multi-agent` `theme` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **APP Wework** · [wecode-ai/Wegent@54d7585](https://github.com/wecode-ai/Wegent/commit/54d758594fead72e8566b8ec0a5ade2b80bfbfe4) — APP Wework 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/wecode-ai/Wegent/blob/54d758594fead72e8566b8ec0a5ade2b80bfbfe4/wework/dsh/app-wework/package.json) → [patch](https://github.com/wecode-ai/Wegent/blob/54d758594fead72e8566b8ec0a5ade2b80bfbfe4/wework/dsh/app-wework/cordis.patch.yml) · **身份:** `@wegent/dsh-app-wework`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `session-data` `package-install` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Hermes Prompt** · [weibaohui/dsh-plugins@279be6f](https://github.com/weibaohui/dsh-plugins/commit/279be6fc12e1f4379f9ddbe2d4a8d1e5f06afba8) — Hermes Prompt 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/weibaohui/dsh-plugins/blob/279be6fc12e1f4379f9ddbe2d4a8d1e5f06afba8/hermes-prompt/package.json) → [patch](https://github.com/weibaohui/dsh-plugins/blob/279be6fc12e1f4379f9ddbe2d4a8d1e5f06afba8/hermes-prompt/cordis.patch.yml) · **身份:** `dsh-plugin-hermes-prompt`
  - **许可证:** repo `Unresolved` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `session-data` `system-prompt` `nested-bundle` `license-incomplete` · **核验备注:** 因repository license证据不足或冲突而暂缓；未执行候选代码。

- **BG Plugin** · [xiaoxingyuemiao/dsh-bg-plugin@2e818d7](https://github.com/xiaoxingyuemiao/dsh-bg-plugin/commit/2e818d7c38615a92d8e622557fa0d3c10f34d8bf) — DSH 自定义背景插件：为 DSH Web GUI 应用远程 URL 图片或本地图片作为背景，支持清晰度/压暗/模糊调节，设置面板保持默认外观。
  - **证据:** [manifest](https://github.com/xiaoxingyuemiao/dsh-bg-plugin/blob/2e818d7c38615a92d8e622557fa0d3c10f34d8bf/package.json) → [patch](https://github.com/xiaoxingyuemiao/dsh-bg-plugin/blob/2e818d7c38615a92d8e622557fa0d3c10f34d8bf/cordis.patch.yml) · **身份:** `dsh-bg-plugin`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `client-injection` `theme` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **KES Bicqa** · [xuji755/bicqa-plugin@ddc09f0](https://github.com/xuji755/bicqa-plugin/commit/ddc09f0c14219a95b479d98d3cb31e4b474d1b00) — KES 性能分析 + BIC-QA 工具集一键安装包（DSH profile bundle）：MCP 只读接入 + KWR 报告生成/深度分析（异步取回官方 HTML 分析报告）+ BIC-QA 知识问答/报告分析 + 设置界面卡片。
  - **证据:** [manifest](https://github.com/xuji755/bicqa-plugin/blob/ddc09f0c14219a95b479d98d3cb31e4b474d1b00/dsh-kes-bicqa/package.json) → [patch](https://github.com/xuji755/bicqa-plugin/blob/ddc09f0c14219a95b479d98d3cb31e4b474d1b00/dsh-kes-bicqa/cordis.patch.yml) · **身份:** `@dbaiops/dsh-kes-bicqa`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `mcp` `database` `model-tools` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Research Autoresearch** · [yuan-source-666/dsh-research-autoresearch@9dcd897](https://github.com/yuan-source-666/dsh-research-autoresearch/commit/9dcd8970f2aefdb115b3a03307e78965169350fb) — Research Autoresearch 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/yuan-source-666/dsh-research-autoresearch/blob/9dcd8970f2aefdb115b3a03307e78965169350fb/package.json) → [patch](https://github.com/yuan-source-666/dsh-research-autoresearch/blob/9dcd8970f2aefdb115b3a03307e78965169350fb/cordis.patch.yml) · **身份:** `dsh-research-autoresearch`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `client-injection` `process-control` `model-tools` `prepare` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

- **Compact** · [zouyuxuan122/Deepseek-Harness-EAC@6553ebc](https://github.com/zouyuxuan122/Deepseek-Harness-EAC/commit/6553ebcd88845f0f2d371f5b1c7f6c1ca2e91084) — Compact 是一个面向 DeepSeek Harness 的插件。
  - **证据:** [manifest](https://github.com/zouyuxuan122/Deepseek-Harness-EAC/blob/6553ebcd88845f0f2d371f5b1c7f6c1ca2e91084/dsh-desktop/assets/plugins/dsh-compact/package.json) → [patch](https://github.com/zouyuxuan122/Deepseek-Harness-EAC/blob/6553ebcd88845f0f2d371f5b1c7f6c1ca2e91084/dsh-desktop/assets/plugins/dsh-compact/cordis.patch.yml) · **身份:** `dsh-compact`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `client-injection` `subprocess` `mcp` `session-data` `model-tools` `package-install` `vision` `financial` `theme` `nested-bundle` `identity-unresolved` `unresolved-install-identity` · **核验备注:** 因npm or Git-source installation identity证据不足或冲突而暂缓；未执行候选代码。

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
