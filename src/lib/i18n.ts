import type { Locale } from "./catalog";

const messages = {
  en: {
    languageName: "English",
    switchLanguage: "中文",
    skip: "Skip to main content",
    nav: {
      home: "Index",
      plugins: "Plugins",
      review: "Review log",
      methodology: "Methodology",
      github: "GitHub",
    },
    home: {
      eyebrow: "DISCOVERY · EVIDENCE · REVIEW",
      title: "A clearer way to inspect DeepSeek Harness plugins",
      description:
        "Browse fixed-source records, separate capability signals from trust claims, and decide what deserves your own review.",
      primaryAction: "Browse plugins",
      secondaryAction: "Read the methodology",
      warning:
        "Third-party plugins are untrusted code. Inclusion means the native bundle structure was observed at one fixed commit; it is not a safety or compatibility endorsement.",
      sectionTitle: "Evidence before recommendation",
      sectionDescription:
        "Each record keeps the source, structure, license, lifecycle, and capability facts visible instead of compressing them into a score.",
      cards: [
        {
          number: "01",
          title: "Immutable source",
          body: "Repository evidence is linked to a full commit SHA, never only to a moving branch.",
        },
        {
          number: "02",
          title: "Native structure",
          body: "The package manifest and referenced DSH patch are checked at the same revision.",
        },
        {
          number: "03",
          title: "Independent facts",
          body: "Licenses, lifecycle scripts, capability signals, and compatibility evidence stay separate.",
        },
      ],
      latestTitle: "Browse the reviewed catalog",
      latestDescription:
        "Search by name, repository, category, compatibility statement, or observed capability signal.",
    },
    catalog: {
      eyebrow: "REVIEWED PLUGIN DIRECTORY",
      title: "Explore the catalog",
      description:
        "Only reviewed native bundle records appear here. Runtime compatibility has not been independently tested unless the record explicitly says so.",
      search: "Search plugins",
      placeholder: "Name, repository, package, category, or signal…",
      category: "Category",
      compatibility: "Compatibility",
      signal: "Capability signal",
      sort: "Sort",
      all: "All",
      reset: "Reset filters",
      results: "records",
      noResults: "No reviewed plugins match these filters.",
      noResultsHint: "Try clearing a filter or using a broader search term.",
      viewEvidence: "View evidence",
      source: "Pinned source",
      newest: "Catalog order",
      name: "Name A–Z",
      categorySort: "Category",
    },
    detail: {
      back: "Back to plugins",
      fixedRecord: "FIXED-SOURCE RECORD",
      evidence: "Evidence snapshot",
      source: "Source repository",
      commit: "Full commit",
      manifest: "Package manifest",
      patch: "DSH patch",
      package: "Package identity",
      licenses: "Licenses",
      lifecycle: "Install lifecycle",
      compatibility: "Compatibility evidence",
      signals: "Observed capability signals",
      reviewNote: "Review note",
      openGithub: "Open fixed source",
      copySource: "Copy fixed source URL",
      copied: "Copied",
      missing: "Not recorded",
      cautionTitle: "Interpret this record carefully",
      caution:
        "Static structure checks do not prove safe behavior, authorship, package integrity, or runtime compatibility. Read the pinned source before installing.",
    },
    review: {
      eyebrow: "TRANSPARENT REVIEW STATES",
      title: "Held and excluded records",
      description:
        "These candidates do not appear in the public plugin search. They remain visible here so unresolved blockers and rejected leads are not silently forgotten.",
      held: "Held for repair",
      excluded: "Excluded after review",
      empty: "No records in this state.",
    },
    methodology: {
      eyebrow: "HOW THE INDEX WORKS",
      title: "A directory built from reproducible evidence",
      intro:
        "Discovery is intentionally broad. Publication is intentionally narrow. Every listed plugin must pass a fixed-source structural review without executing third-party code.",
      steps: [
        {
          title: "Discover leads",
          body: "Topics, community lists, npm metadata, and submissions create candidates only. They do not publish entries.",
        },
        {
          title: "Pin the source",
          body: "Review records bind the repository, package manifest, and patch to one complete commit SHA.",
        },
        {
          title: "Inspect static facts",
          body: "The review records identity, licenses, lifecycle hooks, compatibility declarations, and material capabilities.",
        },
        {
          title: "Make a status decision",
          body: "Reviewed records enter the directory. Repairable blockers are held. Category errors or explicit non-support are excluded.",
        },
      ],
      boundaryTitle: "Safety boundary",
      boundary:
        "The index does not run lifecycle hooks, entrypoints, setup scripts, native helpers, browsers, MCP servers, or plugin test suites. Absence of a static signal is not a safety guarantee.",
      fullDocument: "Read the complete repository methodology",
    },
    footer:
      "Independent community directory. Not affiliated with or endorsed by DeepSeek.",
  },
  zh: {
    languageName: "中文",
    switchLanguage: "EN",
    skip: "跳到主要内容",
    nav: {
      home: "索引",
      plugins: "插件",
      review: "审核记录",
      methodology: "核验方法",
      github: "GitHub",
    },
    home: {
      eyebrow: "发现 · 证据 · 审核",
      title: "更清晰地检查 DeepSeek Harness 插件",
      description:
        "浏览固定源码记录，把能力信号与信任结论分开，再决定哪些插件值得你继续审查。",
      primaryAction: "浏览插件",
      secondaryAction: "阅读核验方法",
      warning:
        "第三方插件是不受信任的代码。收录仅代表在一个固定提交上观察到原生 Bundle 结构，并不构成安全或兼容性背书。",
      sectionTitle: "先看证据，再谈推荐",
      sectionDescription:
        "每条记录分别展示来源、结构、许可证、生命周期和能力事实，不把它们压缩成一个模糊分数。",
      cards: [
        {
          number: "01",
          title: "不可变来源",
          body: "仓库证据绑定完整提交 SHA，而不是只链接不断变化的默认分支。",
        },
        {
          number: "02",
          title: "原生结构",
          body: "在同一提交中核对 package manifest 与它引用的 DSH patch。",
        },
        {
          number: "03",
          title: "事实相互独立",
          body: "许可证、生命周期、能力信号和兼容性证据分别记录，互不代替。",
        },
      ],
      latestTitle: "浏览已审核目录",
      latestDescription:
        "可以按名称、仓库、分类、兼容性声明或观察到的能力信号搜索。",
    },
    catalog: {
      eyebrow: "已审核插件目录",
      title: "探索插件目录",
      description:
        "这里只展示通过结构核验的原生 Bundle。除非记录明确说明，否则尚未独立测试运行兼容性。",
      search: "搜索插件",
      placeholder: "名称、仓库、包名、分类或能力信号…",
      category: "分类",
      compatibility: "兼容性",
      signal: "能力信号",
      sort: "排序",
      all: "全部",
      reset: "重置筛选",
      results: "条记录",
      noResults: "没有符合当前条件的已审核插件。",
      noResultsHint: "可以清除某个筛选项，或换用范围更宽的关键词。",
      viewEvidence: "查看证据",
      source: "固定来源",
      newest: "目录顺序",
      name: "名称 A–Z",
      categorySort: "按分类",
    },
    detail: {
      back: "返回插件目录",
      fixedRecord: "固定源码记录",
      evidence: "证据快照",
      source: "源码仓库",
      commit: "完整提交",
      manifest: "Package manifest",
      patch: "DSH patch",
      package: "包身份",
      licenses: "许可证",
      lifecycle: "安装生命周期",
      compatibility: "兼容性证据",
      signals: "观察到的能力信号",
      reviewNote: "核验备注",
      openGithub: "打开固定源码",
      copySource: "复制固定源码地址",
      copied: "已复制",
      missing: "未记录",
      cautionTitle: "请谨慎理解这条记录",
      caution:
        "静态结构核验不能证明运行安全、作者身份、包完整性或运行兼容性。安装前仍需阅读固定版本源码。",
    },
    review: {
      eyebrow: "透明审核状态",
      title: "暂缓与排除记录",
      description:
        "这些候选不会出现在公开插件搜索中，但会保留在这里，避免阻塞原因和已排除线索被悄悄遗忘。",
      held: "暂缓修复",
      excluded: "核验后排除",
      empty: "当前没有此状态记录。",
    },
    methodology: {
      eyebrow: "目录如何工作",
      title: "基于可复现证据建立目录",
      intro:
        "发现阶段有意保持高召回，公开收录则保持严格。每个插件必须通过固定源码结构核验，全程不执行第三方代码。",
      steps: [
        {
          title: "发现线索",
          body: "Topic、社区列表、npm 元数据和主动提交只会创建候选，不会直接公开。",
        },
        {
          title: "固定源码",
          body: "审核记录把仓库、package manifest 和 patch 绑定到一个完整提交 SHA。",
        },
        {
          title: "检查静态事实",
          body: "分别记录身份、许可证、生命周期、兼容性声明和重要能力。",
        },
        {
          title: "作出状态决定",
          body: "通过核验的记录进入目录；可修复阻塞进入暂缓；类别错误或明确不支持则排除。",
        },
      ],
      boundaryTitle: "安全边界",
      boundary:
        "目录不会运行生命周期脚本、插件入口、安装脚本、原生辅助程序、浏览器、MCP Server 或插件测试。没有发现某个静态信号，也不等于安全保证。",
      fullDocument: "阅读仓库中的完整核验方法",
    },
    footer: "独立社区目录，与 DeepSeek 不存在附属或官方背书关系。",
  },
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
