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
快照：**2026-08-16** · **35 个候选** · **29 个已核验** · **5 个暂缓** · **1 个排除**

### 已核验的原生 bundles

#### 界面与工作区

- **DSH WSL Workspace** · [6Mikao9/dsh-wsl-workspace@89905a8](https://github.com/6Mikao9/dsh-wsl-workspace/commit/89905a82ebbff7881b586554a72ebeb0d78f93bf) — 为 DeepSeek Harness 提供 Windows 与 WSL 路径之间的工作区支持。
  - **证据:** [manifest](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/package.json) → [patch](https://github.com/6Mikao9/dsh-wsl-workspace/blob/89905a82ebbff7881b586554a72ebeb0d78f93bf/cordis.patch.yml) · **身份:** `dsh-wsl-workspace`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `filesystem` `cross-platform-paths` · **核验备注:** DSH peer range 较宽，运行兼容性仍未知。

- **DSH TUI** · [ccch1mneyyy/dsh-TUI@ee83376](https://github.com/ccch1mneyyy/dsh-TUI/commit/ee83376b549814f236ea2ab90682bb8f482dc826) — 带实时状态、流式思考、工具、审批与文件系统能力的全屏终端客户端。
  - **证据:** [manifest](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/package.json) → [patch](https://github.com/ccch1mneyyy/dsh-TUI/blob/ee83376b549814f236ea2ab90682bb8f482dc826/cordis.patch.yml) · **身份:** `@deepseek-harness-tui/dsh-tui`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `terminal` `subprocess` `filesystem` `credentials` `broad-agent-surface` · **核验备注:** 该 bundle 暴露较广的 Agent 能力面；结构确认不代表运行背书。

- **DSH Visualize** · [Nagi-ovo/dsh-visualize@e3254f7](https://github.com/Nagi-ovo/dsh-visualize/commit/e3254f762cbe4dbf796eca05d73a293f0e8e4a87) — 在对话中生成可流式预览的交互式 HTML 卡片，并使用沙箱渲染。
  - **证据:** [manifest](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/package.json) → [patch](https://github.com/Nagi-ovo/dsh-visualize/blob/e3254f762cbe4dbf796eca05d73a293f0e8e4a87/cordis.patch.yml) · **身份:** Git 源 / 未知
  - **许可证:** repo `BSD-3-Clause` / package `BSD-3-Clause` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `github-only` `dynamic-content` `sandbox` · **核验备注:** 包标记为 private；目前只观察到 GitHub 源安装证据。

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

- **DSH Computer Use** · [Anionex/dsh-computer-use@76bfe86](https://github.com/Anionex/dsh-computer-use/commit/76bfe8607f61945c1cbb84e73976e601100c13a2) — 用于屏幕感知与受控桌面操作的 Computer Use 工具。
  - **证据:** [manifest](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/package.json) → [patch](https://github.com/Anionex/dsh-computer-use/blob/76bfe8607f61945c1cbb84e73976e601100c13a2/cordis.patch.yml) · **身份:** `@anionex/dsh-computer-use`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepack` · 声明 rc.6 peer
  - **能力信号:** `computer-use` `browser` `native-artifacts` · **核验备注:** 声明了精确的 DSH rc.6 peer；广泛电脑控制仍属于高信任能力。

#### 文件与数据

- **DSH Session Export** · [bwndlct/dsh-session-export@eb18389](https://github.com/bwndlct/dsh-session-export/commit/eb18389192e36934718877fd7c6eb397f5cf1cd4) — 把 DeepSeek Harness 会话导出为便于复用或归档的文件。
  - **证据:** [manifest](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/package.json) → [patch](https://github.com/bwndlct/dsh-session-export/blob/eb18389192e36934718877fd7c6eb397f5cf1cd4/cordis.patch.yml) · **身份:** `dsh-session-export`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `session-data` `filesystem-write` · **核验备注:** command、session 与 tools peer 声明 rc.6；导出数据可能包含敏感上下文。

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

#### 搜索与研究

- **DSH Web Search Exa** · [TonyDua/dsh-web-search-exa@083706b](https://github.com/TonyDua/dsh-web-search-exa/commit/083706bae60af8e1f3776b02448f17c140c3f571) — 把 Exa 网络搜索接入 DSH 的 Agent 工具与 Web 设置。
  - **证据:** [manifest](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/package.json) → [patch](https://github.com/TonyDua/dsh-web-search-exa/blob/083706bae60af8e1f3776b02448f17c140c3f571/cordis.patch.yml) · **身份:** `@tonydua/dsh-web-search-exa`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · peer range 混合
  - **能力信号:** `external-network` `credentials` · **核验备注:** DSH peer 声明 rc.6，但 Cordis range 仍为 rc.1；未做运行测试。

#### 记忆

- **dsh-context** · [bowenliang123/dsh-context@aca38b2](https://github.com/bowenliang123/dsh-context/commit/aca38b24d714106f7256280dc8f9c9ec5b8e4552) — 上下文洞察面板：一眼看清模型上下文窗口的组成与变化——构成对照窗口大小、按请求历史趋势、压缩/注入事件、消息级 token 统计。
  - **证据:** [manifest](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/package.json) → [patch](https://github.com/bowenliang123/dsh-context/blob/aca38b24d714106f7256280dc8f9c9ec5b8e4552/cordis.patch.yml) · **身份:** `dsh-context`
  - **许可证:** repo `Apache-2.0` / package `Apache-2.0` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `client-injection` `session-projection` · **核验备注:** 已在记录提交确认原生 manifest-to-patch 结构；观察到客户端注入与上下文数据读取。未做运行兼容性测试。

- **Unified Agent Memory** · [Noelune/unified-agent-memory@b6a879c](https://github.com/Noelune/unified-agent-memory/commit/b6a879cc73364f24c08160dda2f53140c82ebec7) — 用于跨任务保存与检索 Agent 知识的统一记忆层。
  - **证据:** [manifest](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/package.json) → [patch](https://github.com/Noelune/unified-agent-memory/blob/b6a879cc73364f24c08160dda2f53140c82ebec7/cordis.patch.yml) · **身份:** `dsh-unified-agent-memory`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 声明 rc.6 peer
  - **能力信号:** `persistent-memory` · **核验备注:** manifest 声明 DSH tools rc.6 peer；未做运行兼容性测试。

#### 安全与审批

- **DSH Turn Approval** · [arrow949/dsh-turn-approval@5b4cbfd](https://github.com/arrow949/dsh-turn-approval/commit/5b4cbfd425885ed3f3ed93c796d5113847cc93b8) — 仅在当前任务内生效并随后过期的回合级审批规则。
  - **证据:** [manifest](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/package.json) → [patch](https://github.com/arrow949/dsh-turn-approval/blob/5b4cbfd425885ed3f3ed93c796d5113847cc93b8/cordis.patch.yml) · **身份:** `dsh-turn-approval`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` · **核验备注:** 仅声明 Cordis peer，因此 DSH 兼容性仍未知。

- **DSH Approval LLM** · [Letter2025/dsh-approval-llm@af70355](https://github.com/Letter2025/dsh-approval-llm/commit/af70355a3c48c15f1ec8ac31c39fa279e895c168) — 使用 LLM 辅助评估敏感工具动作的审批层。
  - **证据:** [manifest](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/package.json) → [patch](https://github.com/Letter2025/dsh-approval-llm/blob/af70355a3c48c15f1ec8ac31c39fa279e895c168/cordis.patch.yml) · **身份:** `dsh-approval-llm`
  - **许可证:** repo `unknown` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `permission-control` `llm-call` · **核验备注:** peer range 较宽，兼容性未知；仓库许可证检测结果不可用。

#### 外部集成

- **DSH MCP Bridge** · [Edge-Echo/dsh-mcp-bridge@7768dc3](https://github.com/Edge-Echo/dsh-mcp-bridge/commit/7768dc3d3b7d65bca896a7c4eece170cb004439e) — 通过 DSH Web bundle 暴露 MCP servers 与工具的桥接层。
  - **证据:** [manifest](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/package.json) → [patch](https://github.com/Edge-Echo/dsh-mcp-bridge/blob/7768dc3d3b7d65bca896a7c4eece170cb004439e/cordis.patch.yml) · **身份:** `dsh-mcp-bridge`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `none` · 兼容性未知
  - **能力信号:** `mcp` `subprocess` `external-tools` · **核验备注:** 已确认 Web bundle 结构；README 另有 headless 依赖限制记录。

- **DSH ChatNode WeChat** · [Jesse-njx/dsh-chatnode-wechat@a724da3](https://github.com/Jesse-njx/dsh-chatnode-wechat/commit/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745) — 把微信聊天节点连接到 DeepSeek Harness 的集成。
  - **证据:** [manifest](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/package.json) → [patch](https://github.com/Jesse-njx/dsh-chatnode-wechat/blob/a724da34b5c78a9b9ab4a5de79f5d2a05fac1745/cordis.patch.yml) · **身份:** `dsh-chatnode-wechat`
  - **许可证:** repo `MIT` / package `MIT` · 生命周期 `prepare` · 兼容性未知
  - **能力信号:** `external-network` `messaging` `source-build` · **核验备注:** 源码安装可能执行 prepare 构建；README 声称支持 rc.6，但 manifest 未声明相关 peer。

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
