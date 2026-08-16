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
快照：**2026-08-16** · **64 个候选** · **56 个已核验** · **7 个暂缓** · **1 个排除**

### 已核验的原生 bundles

#### 界面与工作区

- **DSH WSL Workspace** · [6Mikao9/dsh-wsl-workspace@89905a8](https://github.com/6Mikao9/dsh-wsl-workspace/commit/89905a82ebbff7881b586554a72ebeb0d78f93bf) — 为 DeepSeek Harness 提供 Windows 与 WSL 路径之间的工作区支持。
  - **证据:** [manifest](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/package.json) → [patch](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/cordis.patch.yml) · **身份:** `dsh-wsl-workspace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem` `cross-platform-paths` · **核验备注:** DSH peer range 较宽，运行兼容性仍未知。

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

- **DSH TUI** · [ccch1mneyyy/dsh-TUI@ee83376](https://github.com/ccch1mneyyy/dsh-TUI/commit/ee83376b549814f236ea2ab90682bb8f482dc826) — 带实时状态、流式思考、工具、审批与文件系统能力的全屏终端客户端。
  - **证据:** [manifest](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/package.json) → [patch](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/cordis.patch.yml) · **身份:** `@deepseek-harness-tui/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `terminal` `subprocess` `filesystem` `credentials` `broad-agent-surface` · **核验备注:** 该 bundle 暴露较广的 Agent 能力面；结构确认不代表运行背书。

- **DSH Sticky Note** · [Meredith2328/dsh-sticky-note@ebabb6c](https://github.com/Meredith2328/dsh-sticky-note/commit/ebabb6c746b1495c5f077e440d98b6665d7a61b9) — 把笔记与 TODO 保存到归档目录的 Web 便签面板。
  - **证据:** [manifest](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/package.json) → [patch](https://github.com/Meredith2328/dsh-sticky-note/blob/ebabb6c746b1495c5f077e440d98b6665d7a61b9/cordis.patch.yml) · **身份:** `dsh-sticky-note`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `filesystem-write` `persistent-data` `client-injection` · **核验备注:** 已确认 host 与 Web client 双端结构；未运行测试通配 DSH peer 与持久化便签写入。

- **DSH Visualize** · [Nagi-ovo/dsh-visualize@e3254f7](https://github.com/Nagi-ovo/dsh-visualize/commit/e3254f762cbe4dbf796eca05d73a293f0e8e4a87) — 在对话中生成可流式预览的交互式 HTML 卡片，并使用沙箱渲染。
  - **证据:** [manifest](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/package.json) → [patch](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `github-only` `dynamic-content` `sandbox` · **核验备注:** 包标记为 private；目前只观察到 GitHub 源安装证据。

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

- **DSH Web UI All** · [zhu1090093659/dsh-web-ui@5153e9a](https://github.com/zhu1090093659/dsh-web-ui/commit/5153e9ad487bb597f45095503b9aa50f4faa4add) — 聚合任务看板、Git、终端、远程 UI、统计、桌宠与皮肤的 Web UI bundle。
  - **证据:** [manifest](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/package.json) → [patch](https://github.com/zhu1090093659/dsh-web-ui/blob/5153e9ad487bb597f45095503b9aa50f4faa4add/packages/dsh-web-ui-all/cordis.patch.yml) · **身份:** `@linxin666/dsh-web-ui-all`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `aggregate-scope` `terminal` `ssh` `git` `native-build` · **核验备注:** 聚合范围很广且包含 prepare 构建，使用前需要更高强度的审查。

#### 开发者工具

- **DSH Request Flight Recorder** · [abinzhao/dsh-request-flight-recorder@319e3bf](https://github.com/abinzhao/dsh-request-flight-recorder/commit/319e3bf0981b5cb03352c7c97cd94c75f37cefb0) — 记录有界且不含内容的请求耗时、流式阶段、失败和会话关联诊断信息。
  - **证据:** [manifest](https://github.com/abinzhao/dsh-request-flight-recorder/blob/319e3bf0981b5cb03352c7c97cd94c75f37cefb0/package.json) → [patch](https://github.com/abinzhao/dsh-request-flight-recorder/blob/319e3bf0981b5cb03352c7c97cd94c75f37cefb0/cordis.patch.yml) · **身份:** `dsh-request-flight-recorder`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `request-metadata` `session-data` `stream-diagnostics` `client-injection` · **核验备注:** 已在固定源码确认精确 rc.6 DSH peer 与原生 bundle；未运行测试隐私属性、计时 hook 或 prepack 构建。

- **DSH Eval Harness** · [BiBoyang/dsh-eval-harness@035d1c6](https://github.com/BiBoyang/dsh-eval-harness/commit/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693) — 用于衡量 Agent 行为与任务结果的无头评估 Harness。
  - **证据:** [manifest](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/package.json) → [patch](https://github.com/BiBoyang/dsh-eval-harness/blob/035d1c6e1ebf918bbb7bc2a83fd3173af15ea693/cordis.patch.yml) · **身份:** `dsh-eval-harness`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepack` · 兼容性未知
  - **能力信号:** `headless` `evaluation` · **核验备注:** README 中存在 owner 拼写缺陷，且仅声明宽泛的 Cordis peer。

- **DSH Ops Kit** · [LeslieWylie/dsh-ops-kit@c4ba835](https://github.com/LeslieWylie/dsh-ops-kit/commit/c4ba8353cb5825c4ca971836a260ec8f9af7be83) — 为 DeepSeek Harness 内的开发流程提供运维工具与技能。
  - **证据:** [manifest](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/package.json) → [patch](https://github.com/LeslieWylie/dsh-ops-kit/blob/c4ba8353cb5825c4ca971836a260ec8f9af7be83/cordis.patch.yml) · **身份:** `dsh-ops-kit`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 声明 rc.6 peer
  - **能力信号:** `tools` `skills` · **核验备注:** DSH skill 与 tools peer 声明 rc.6；未做运行兼容性测试。

- **Archify** · [tt-a1i/archify@cffdd42](https://github.com/tt-a1i/archify/commit/cffdd42eed0ebf013aa070378d94facdd3d56b10) — 通过仓库内的嵌套集成 bundle，为 DSH 提供架构知识与图表能力。
  - **证据:** [manifest](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/package.json) → [patch](https://github.com/tt-a1i/archify/blob/cffdd42eed0ebf013aa070378d94facdd3d56b10/integrations/deepseek-harness/cordis.patch.yml) · **身份:** `@tt-a1i/archify-dsh`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `nested-bundle` `filesystem-skill` `dynamic-yaml` · **核验备注:** 已确认嵌套包中的原生结构；未做运行兼容性测试。

- **DSH Git Graph** · [WhitePlusMS/dsh-git-graph@4e4621a](https://github.com/WhitePlusMS/dsh-git-graph/commit/4e4621aa02cd8f88e2c7dabc421d2399d10299a4) — 只读 Git 图谱视图，展示 refs、工作树状态、搜索、筛选与分页历史。
  - **证据:** [manifest](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/package.json) → [patch](https://github.com/WhitePlusMS/dsh-git-graph/blob/4e4621aa02cd8f88e2c7dabc421d2399d10299a4/cordis.patch.yml) · **身份:** `dsh-git-graph`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `git` `workspace-read` · **核验备注:** 声明了精确的 DSH rc.6 peer；未做运行兼容性测试。

#### Agent 与工作流

- **DSH Forge** · [alex04130/dsh-forge@fae36ff](https://github.com/alex04130/dsh-forge/commit/fae36ff9577ece3d60bd629bb06142fd681e3745) — 一个广泛的扩展 bundle，覆盖跨会话邮件、Agent 团队、模型路由、运行时注入、技能与插件管理。
  - **证据:** [manifest](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/package.json) → [patch](https://github.com/alex04130/dsh-forge/blob/fae36ff9577ece3d60bd629bb06142fd681e3745/bundle/cordis.npm.yml) · **身份:** `@dsh-forge/bundle`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `multi-agent` `dynamic-loading` `package-management` `filesystem-write` `high-trust-surface` · **核验备注:** 收录的是声明 rc.6 peer 的可分发 npm bundle，而非 private 根源码 manifest；未执行其广泛的运行时注入与管理能力。

- **DSH Computer Use** · [Anionex/dsh-computer-use@76bfe86](https://github.com/Anionex/dsh-computer-use/commit/76bfe8607f61945c1cbb84e73976e601100c13a2) — 用于屏幕感知与受控桌面操作的 Computer Use 工具。
  - **证据:** [manifest](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/package.json) → [patch](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/cordis.patch.yml) · **身份:** `@anionex/dsh-computer-use`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `computer-use` `browser` `native-artifacts` · **核验备注:** 声明了精确的 DSH rc.6 peer；广泛电脑控制仍属于高信任能力。

- **DSH Prompt Enhancer** · [Fishsb/dsh-prompt-enhancer@d42b2b4](https://github.com/Fishsb/dsh-prompt-enhancer/commit/d42b2b41503743a946696312b55001d6a452a0ef) — 通过独立 LLM 调用改写 DSH 输入框中的草稿提示词，并支持撤销。
  - **证据:** [manifest](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/package.json) → [patch](https://github.com/Fishsb/dsh-prompt-enhancer/blob/d42b2b41503743a946696312b55001d6a452a0ef/cordis.patch.yml) · **身份:** `dsh-prompt-enhancer`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `llm-call` `client-injection` `external-network` `credentials` · **核验备注:** 客户端 peer 声明 rc.6 且存在原生 patch；未执行向配置模型披露提示词或更新器网络行为。

- **DSH LLM Fallbacks** · [omdsh-dev/dsh-llm-fallbacks@69ec1fe](https://github.com/omdsh-dev/dsh-llm-fallbacks/commit/69ec1fe19660cd465f610890e2f1366cd418f86c) — 在重试、认证、额度或限流失败后启用可配置的提供商与模型回退链。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/package.json) → [patch](https://github.com/omdsh-dev/dsh-llm-fallbacks/blob/69ec1fe19660cd465f610890e2f1366cd418f86c/bundle/cordis.patch.yml) · **身份:** `dsh-llm-fallbacks`
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `llm-routing` `client-injection` `prepare-build` · **核验备注:** DSH peer 声明 rc.6 且已在固定源码确认回退行；prepare 会构建代码，未运行测试提供商切换。

#### 文件与数据

- **DSH Usage Billing** · [940842546/dsh-usage-billing@96ff9fc](https://github.com/940842546/dsh-usage-billing/commit/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c) — 聚合模型 Token 用量与 DeepSeek 费用估算，并提供持久化的会话和时间范围面板。
  - **证据:** [manifest](https://github.com/940842546/dsh-usage-billing/blob/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c/package.json) → [patch](https://github.com/940842546/dsh-usage-billing/blob/96ff9fccd2f6ece426a40cdbcf8f3826ab7c387c/cordis.patch.yml) · **身份:** `dsh-usage-billing`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `usage-metrics` `filesystem-write` `client-injection` · **核验备注:** DSH tools peer 声明 rc.6，固定源码会写入聚合用量数据；未验证计价准确性或运行行为。

- **DSH Usage** · [Aisland-SJL/dsh-usage@4b9a952](https://github.com/Aisland-SJL/dsh-usage/commit/4b9a9522cfd9f07b054f96525cbff95faaf03a59) — 展示持久化余额与 Token 用量面板，覆盖 DSH 会话及可选的 Claude Code 用量日志。
  - **证据:** [manifest](https://github.com/Aisland-SJL/dsh-usage/blob/4b9a9522cfd9f07b054f96525cbff95faaf03a59/package.json) → [patch](https://github.com/Aisland-SJL/dsh-usage/blob/4b9a9522cfd9f07b054f96525cbff95faaf03a59/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `session-data` `credentials` `external-network` `filesystem-write` `identity-collision` · **核验备注:** 作者记录了 GitHub 源安装；private manifest 名称与另一 npm 仓库冲突，因此不列 npm 身份，且未执行用量、余额或文件访问。

- **DSH Session Export** · [bwndlct/dsh-session-export@eb18389](https://github.com/bwndlct/dsh-session-export/commit/eb18389192e36934718877fd7c6eb397f5cf1cd4) — 把 DeepSeek Harness 会话导出为便于复用或归档的文件。
  - **证据:** [manifest](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/package.json) → [patch](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/cordis.patch.yml) · **身份:** `dsh-session-export`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-write` · **核验备注:** command、session 与 tools peer 声明 rc.6；导出数据可能包含敏感上下文。

- **DSH Drag-and-Drop Upload** · [GLFzr/dsh-file-upload@54891a4](https://github.com/GLFzr/dsh-file-upload/commit/54891a4a3632900fd333c40b00e142a2b349c538) — 为 DSH Web 输入框增加拖放上传，并把文件保存到本地 dropbox 目录。
  - **证据:** [manifest](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/package.json) → [patch](https://github.com/GLFzr/dsh-file-upload/blob/54891a4a3632900fd333c40b00e142a2b349c538/cordis.patch.yml) · **身份:** `dsh-file-upload`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `file-upload` `filesystem-write` `web-routes` `client-injection` · **核验备注:** 已确认 host/client 双端 bundle 结构；未运行测试上传路由或文件系统写入。

- **DSH File Upload** · [HongMing-Huang/dsh-file-upload@7aac111](https://github.com/HongMing-Huang/dsh-file-upload/commit/7aac111b00f5a3172a9fc093ec7f69bebdf65aac) — 在输入区提供可移除的文件卡片、内容识别、Markdown 转换与文档工具。
  - **证据:** [manifest](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/package.json) → [patch](https://github.com/HongMing-Huang/dsh-file-upload/blob/7aac111b00f5a3172a9fc093ec7f69bebdf65aac/cordis.patch.yml) · **身份:** `dsh-file-upload`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `file-upload` `filesystem-write` `document-parsing` · **核验备注:** DSH peer 声明 rc.6，Cordis range 较宽；未做运行兼容性测试。

- **DSH At File** · [omdsh-dev/dsh-at-file@9c71e52](https://github.com/omdsh-dev/dsh-at-file/commit/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4) — 提供类似 Codex 的 @file 引用，搜索工作区路径并把文件内容附加到提示词。
  - **证据:** [manifest](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/package.json) → [patch](https://github.com/omdsh-dev/dsh-at-file/blob/9c71e52c483ae589c7979b6ffc8b3a2cd5d8efa4/cordis.patch.yml) · **身份:** `dsh-at-file`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `workspace-read` `data-disclosure` · **核验备注:** 工作区内容可能被附加到提示词，需审查数据披露边界。

- **DSH Files** · [taxueseek/dsh-files@43887e2](https://github.com/taxueseek/dsh-files/commit/43887e2dca25fad9d7b23049fe1674f0af00c5cf) — 提供文件上传卡片、会话隔离存储、去重清理与文档读取工具。
  - **证据:** [manifest](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/package.json) → [patch](https://github.com/taxueseek/dsh-files/blob/43887e2dca25fad9d7b23049fe1674f0af00c5cf/cordis.patch.yml) · **身份:** `dsh-files`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `file-upload` `filesystem-write` `document-parsing` · **核验备注:** DSH peer 声明 rc.6，Cordis range 较宽；仓库许可证检测结果未知。

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

- **DSH Diagram** · [hanzhangzzz/dsh-diagram@480d3b3](https://github.com/hanzhangzzz/dsh-diagram/commit/480d3b3e81a583648595ec60cdcf834a8b7593cc) — 在 DeepSeek Harness 对话中嵌入可编辑的 Excalidraw 图表。
  - **证据:** [manifest](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/package.json) → [patch](https://github.com/hanzhangzzz/dsh-diagram/blob/480d3b3e81a583648595ec60cdcf834a8b7593cc/cordis.patch.yml) · **身份:** `dsh-diagram`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `interactive-content` · **核验备注:** 声明了精确的 DSH rc.6 peer；未做运行兼容性测试。

- **ModLens** · [liustack/modlens@2818192](https://github.com/liustack/modlens/commit/28181920f6b064e33c6b235221e1a3a5d360a897) — 把图片转换为 OCR、布局和语义证据，为纯文本模型补充视觉能力。
  - **证据:** [manifest](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/package.json) → [patch](https://github.com/liustack/modlens/blob/28181920f6b064e33c6b235221e1a3a5d360a897/cordis.patch.yml) · **身份:** `@liustack/modlens`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `external-installer` · **核验备注:** 外部视觉引擎与凭据属于能力事实，不代表安全性判断。

- **DSH Vision Router** · [ysr666/dsh-vision-router@d805a71](https://github.com/ysr666/dsh-vision-router/commit/d805a71a3de75b624c733babc422df7d0eac6403) — 提供图像问答、定位、OCR、像素检查、截图与多提供商路由的视觉 bundle。
  - **证据:** [manifest](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/package.json) → [patch](https://github.com/ysr666/dsh-vision-router/blob/d805a71a3de75b624c733babc422df7d0eac6403/cordis.patch.yml) · **身份:** `dsh-vision-router`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `external-network` `browser` `file-upload` `filesystem-write` `native-code` · **核验备注:** 固定 manifest 与 patch 声明了 DSH rc.6 peer；未执行网络提供商、浏览器自动化、文件写入或原生图像依赖。

#### 搜索与研究

- **DSH Search** · [2982136527/dsh-plugins@b8b03b1](https://github.com/2982136527/dsh-plugins/commit/b8b03b1e3d72729f70bcab68835abefaf27c8da5) — 通过 Bing RSS 与 DuckDuckGo 回退提供模型可调用的网页搜索，无需 API Key。
  - **证据:** [manifest](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/package.json) → [patch](https://github.com/2982136527/dsh-plugins/blob/b8b03b1e3d72729f70bcab68835abefaf27c8da5/dsh-search/cordis.patch.yml) · **身份:** `dsh-search`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `web-search` `external-network` `git-source` · **核验备注:** 已确认固定提交中的单仓库子目录与 patch；作者记录的是克隆后本地路径安装，仓库未检测到许可证文件。

- **DSH Web Tools** · [A3Boy/dsh-web-tools@ff35019](https://github.com/A3Boy/dsh-web-tools/commit/ff35019e3be679b6d62e866c462bbd801fd12110) — 统一多个网页搜索与抓取提供商，并提供凭据池、额度、健康监控和确定性回退。
  - **证据:** [manifest](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/package.json) → [patch](https://github.com/A3Boy/dsh-web-tools/blob/ff35019e3be679b6d62e866c462bbd801fd12110/cordis.patch.yml) · **身份:** `dsh-web-tools`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 声明 rc.6 peer
  - **能力信号:** `external-network` `credentials` `web-search` `remote-content` `client-injection` · **核验备注:** 固定 peer 声明 rc.6；未执行提供商调用、凭据处理、额度逻辑、回退行为或 prepare 构建。

- **DSH Search Boost** · [Mr-remon219/dsh-search-boost@af80be8](https://github.com/Mr-remon219/dsh-search-boost/commit/af80be8b5a0da2b74511dbb74f1acce601b11bf3) — 融合多个 Web 与 X 搜索引擎，并提供页面抓取与并行研究流程。
  - **证据:** [manifest](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/package.json) → [patch](https://github.com/Mr-remon219/dsh-search-boost/blob/af80be8b5a0da2b74511dbb74f1acce601b11bf3/cordis.patch.yml) · **身份:** `dsh-search-boost`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `external-network` `credentials` `subprocess` `browser` `multi-agent` · **核验备注:** 已在固定源码确认 bundle 行与搜索提供商覆盖；未执行外部引擎、凭据、子进程或研究并发。

- **DSH Web Search Exa** · [TonyDua/dsh-web-search-exa@083706b](https://github.com/TonyDua/dsh-web-search-exa/commit/083706bae60af8e1f3776b02448f17c140c3f571) — 把 Exa 网络搜索接入 DSH 的 Agent 工具与 Web 设置。
  - **证据:** [manifest](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/package.json) → [patch](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/cordis.patch.yml) · **身份:** `@tonydua/dsh-web-search-exa`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` · **核验备注:** DSH peer 声明 rc.6，但 Cordis range 仍为 rc.1；未做运行测试。

#### 记忆

- **Unified Agent Memory** · [Noelune/unified-agent-memory@b6a879c](https://github.com/Noelune/unified-agent-memory/commit/b6a879cc73364f24c08160dda2f53140c82ebec7) — 用于跨任务保存与检索 Agent 知识的统一记忆层。
  - **证据:** [manifest](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/package.json) → [patch](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/cordis.patch.yml) · **身份:** `dsh-unified-agent-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `persistent-memory` · **核验备注:** manifest 声明 DSH tools rc.6 peer；未做运行兼容性测试。

#### 安全与审批

- **DSH Turn Approval** · [arrow949/dsh-turn-approval@5b4cbfd](https://github.com/arrow949/dsh-turn-approval/commit/5b4cbfd425885ed3f3ed93c796d5113847cc93b8) — 仅在当前任务内生效并随后过期的回合级审批规则。
  - **证据:** [manifest](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/package.json) → [patch](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/cordis.patch.yml) · **身份:** `dsh-turn-approval`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` · **核验备注:** 仅声明 Cordis peer，因此 DSH 兼容性仍未知。

- **DSH Island** · [cdxiaodong/dsh-island@c7cd407](https://github.com/cdxiaodong/dsh-island/commit/c7cd407be48b731d910af946a81a6dc58aa690ca) — 一个 macOS 菜单栏灵动岛与鲸鱼桌宠，用于显示 DSH 会话、工具、进度和审批请求。
  - **证据:** [manifest](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/package.json) → [patch](https://github.com/cdxiaodong/dsh-island/blob/c7cd407be48b731d910af946a81a6dc58aa690ca/cordis.patch.yml) · **身份:** `dsh-island`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `prepublishOnly` · 兼容性未知
  - **能力信号:** `native-executable` `subprocess` `tool-arguments` `approval` `session-data` · **核验备注:** 源码会启动随包 macOS 面板，并通过本地 Socket 转发工具参数、会话路径和审批决定；未执行原生代码或 prepublish hook。

- **DSH Approval LLM** · [Letter2025/dsh-approval-llm@af70355](https://github.com/Letter2025/dsh-approval-llm/commit/af70355a3c48c15f1ec8ac31c39fa279e895c168) — 使用 LLM 辅助评估敏感工具动作的审批层。
  - **证据:** [manifest](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/package.json) → [patch](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/cordis.patch.yml) · **身份:** `dsh-approval-llm`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` `llm-call` · **核验备注:** peer range 较宽，兼容性未知；仓库许可证检测结果不可用。

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

- **DSH MCP Bridge** · [Edge-Echo/dsh-mcp-bridge@7768dc3](https://github.com/Edge-Echo/dsh-mcp-bridge/commit/7768dc3d3b7d65bca896a7c4eece170cb004439e) — 通过 DSH Web bundle 暴露 MCP servers 与工具的桥接层。
  - **证据:** [manifest](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/package.json) → [patch](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/cordis.patch.yml) · **身份:** `dsh-mcp-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `mcp` `subprocess` `external-tools` · **核验备注:** 已确认 Web bundle 结构；README 另有 headless 依赖限制记录。

- **DSH ChatNode WeChat** · [Jesse-njx/dsh-chatnode-wechat@a724da3](https://github.com/Jesse-njx/dsh-chatnode-wechat/commit/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745) — 把微信聊天节点连接到 DeepSeek Harness 的集成。
  - **证据:** [manifest](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/package.json) → [patch](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/cordis.patch.yml) · **身份:** `dsh-chatnode-wechat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `messaging` `source-build` · **核验备注:** 源码安装可能执行 prepare 构建；README 声称支持 rc.6，但 manifest 未声明相关 peer。

- **DSH Codex** · [Yan-Zero/dsh-codex@621b218](https://github.com/Yan-Zero/dsh-codex/commit/621b218f51080413094bc1d16e37f37142afd89d) — 把 ChatGPT OAuth、Codex 模型、搜索、远程图片读取与图像生成接入 DSH。
  - **证据:** [manifest](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/package.json) → [patch](https://github.com/Yan-Zero/dsh-codex/blob/621b218f51080413094bc1d16e37f37142afd89d/cordis.patch.yml) · **身份:** `dsh-codex`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepublishOnly` · peer range 混合
  - **能力信号:** `external-network` `credentials` `llm-call` `web-search` `image-generation` · **核验备注:** 固定 bundle 结构有效；宽泛的 DSH 通配 peer 以及 OAuth/模型网络访问仍需独立兼容性与信任审查。

#### 技能与方法

- **Creght Skills** · [creght-dev/skills@5e20ab3](https://github.com/creght-dev/skills/commit/5e20ab3ab57643b2c50461d8e7007f927ff489df) — 以原生 DSH bundle 打包的 Agent skills 仓库。
  - **证据:** [manifest](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/package.json) → [patch](https://github.com/creght-dev/skills/blob/5e20ab3ab57643b2c50461d8e7007f927ff489df/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `skills` `git-source` · **核验备注:** 未声明 DSH peer，因此兼容性仍未知。

- **Aegis** · [GanyuanRan/Aegis@21b27d2](https://github.com/GanyuanRan/Aegis/commit/21b27d23598ef492834427e2a1381b744f66b787) — 面向规划、调试、提示词卫生、完成前验证与修复追踪的软件工程方法包。
  - **证据:** [manifest](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/package.json) → [patch](https://github.com/GanyuanRan/Aegis/blob/21b27d23598ef492834427e2a1381b744f66b787/extensions/dsh/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `MIT` / package `unknown` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem-skill` `missing-package-license` · **核验备注:** 仓库许可证为 MIT；固定提交的包 manifest 未声明 license 字段。

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

- **DSH Market** · [dsh-market/dsh-market@3188f46](https://github.com/dsh-market/dsh-market/commit/3188f465779d25dc2d41f53cdf21334bef517ac3) — 可在 Harness 内浏览、安装、更新和移除第三方包的插件市场。
  - **证据:** [manifest](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/package.json) → [patch](https://github.com/dsh-market/dsh-market/blob/3188f465779d25dc2d41f53cdf21334bef517ac3/cordis.patch.yml) · **身份:** `dshmarket`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `package-management` `remote-registry` `high-trust-surface` · **核验备注:** 包管理控制使其成为高信任能力面；收录不代表背书。

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
