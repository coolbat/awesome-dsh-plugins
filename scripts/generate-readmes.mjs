import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "data", "plugins.json"), "utf8"));
const checkOnly = process.argv.includes("--check");
const tick = String.fromCharCode(96);

const categoryOrder = [
  "UI & Workspace",
  "Developer Tools",
  "Agent & Workflow",
  "Files & Data",
  "Vision & Media",
  "Search & Research",
  "Memory",
  "Safety & Approvals",
  "Integrations",
  "Skills & Methods",
  "Discovery & Management"
];

const categoryZh = {
  "UI & Workspace": "界面与工作区",
  "Developer Tools": "开发者工具",
  "Agent & Workflow": "Agent 与工作流",
  "Files & Data": "文件与数据",
  "Vision & Media": "视觉与媒体",
  "Search & Research": "搜索与研究",
  Memory: "记忆",
  "Safety & Approvals": "安全与审批",
  Integrations: "外部集成",
  "Skills & Methods": "技能与方法",
  "Discovery & Management": "发现与管理"
};

const compatibilityEn = {
  "declared-rc6": "declares rc.6 peers",
  mixed: "mixed peer ranges",
  unknown: "compatibility unknown",
  "behind-baseline": "behind rc.6 baseline",
  unsupported: "author says unsupported"
};

const compatibilityZh = {
  "declared-rc6": "声明 rc.6 peer",
  mixed: "peer range 混合",
  unknown: "兼容性未知",
  "behind-baseline": "落后于 rc.6 基线",
  unsupported: "作者声明不支持"
};

const code = (value) => `${tick}${value}${tick}`;
const commitUrl = (plugin) => `https://github.com/${plugin.repository}/commit/${plugin.commit}`;
const blobUrl = (plugin, filePath) =>
  `https://github.com/${plugin.repository}/blob/${plugin.commit}/${filePath}`;

function pluginEntry(plugin, language) {
  const english = language === "en";
  const summary = english ? plugin.summaryEn : plugin.summaryZh;
  const note = english ? plugin.noteEn : plugin.noteZh;
  const labels = english
    ? {
        evidence: "Evidence",
        identity: "Identity",
        licenses: "Licenses",
        lifecycle: "lifecycle",
        compatibility: compatibilityEn[plugin.compatibility],
        signals: "Signals",
        review: "Review"
      }
    : {
        evidence: "证据",
        identity: "身份",
        licenses: "许可证",
        lifecycle: "生命周期",
        compatibility: compatibilityZh[plugin.compatibility],
        signals: "能力信号",
        review: "核验备注"
      };

  const source = `[${plugin.repository}@${plugin.commit.slice(0, 7)}](${commitUrl(plugin)})`;
  const manifest = `[manifest](${blobUrl(plugin, plugin.manifest)})`;
  const patch = plugin.patch ? `[patch](${blobUrl(plugin, plugin.patch)})` : english ? "no patch" : "无 patch";
  const identity = plugin.package ? code(plugin.package) : english ? "Git source / unknown" : "Git 源 / 未知";
  const signals = plugin.signals.map(code).join(" ");

  return [
    `- **${plugin.name}** · ${source} — ${summary}`,
    `  - **${labels.evidence}:** ${manifest} → ${patch} · **${labels.identity}:** ${identity}`,
    `  - **${labels.licenses}:** repo ${code(plugin.repoLicense)} / package ${code(plugin.packageLicense)} · ${labels.lifecycle} ${code(plugin.lifecycle)} · ${labels.compatibility}`,
    `  - **${labels.signals}:** ${signals} · **${labels.review}:** ${note}`
  ].join("\n");
}

function renderCatalog(language) {
  const english = language === "en";
  const reviewed = catalog.plugins.filter((plugin) => plugin.status === "reviewed");
  const held = catalog.plugins.filter((plugin) => plugin.status === "held");
  const excluded = catalog.plugins.filter((plugin) => plugin.status === "excluded");
  const lines = [
    english
      ? `Snapshot: **${catalog.snapshot.reviewedAt}** · **${catalog.plugins.length} candidates** · **${reviewed.length} reviewed** · **${held.length} held** · **${excluded.length} excluded**`
      : `快照：**${catalog.snapshot.reviewedAt}** · **${catalog.plugins.length} 个候选** · **${reviewed.length} 个已核验** · **${held.length} 个暂缓** · **${excluded.length} 个排除**`,
    "",
    english ? "### Reviewed native bundles" : "### 已核验的原生 bundles",
    ""
  ];

  for (const category of categoryOrder) {
    const entries = reviewed
      .filter((plugin) => plugin.category === category)
      .sort((a, b) => a.repository.localeCompare(b.repository, "en", { sensitivity: "base" }));
    if (entries.length === 0) continue;
    lines.push(`#### ${english ? category : categoryZh[category]}`, "");
    for (const plugin of entries) lines.push(pluginEntry(plugin, language), "");
  }

  lines.push(english ? "### Hold queue" : "### 暂缓队列", "");
  lines.push(
    english
      ? "These entries are relevant to DSH but do not receive install recommendations until the recorded blocker is repaired."
      : "这些候选与 DSH 有关，但在记录的阻塞修复前不会获得安装推荐。",
    ""
  );
  for (const plugin of held) lines.push(pluginEntry(plugin, language), "");

  lines.push(english ? "### Excluded after review" : "### 核验后排除", "");
  for (const plugin of excluded) lines.push(pluginEntry(plugin, language), "");

  return lines.join("\n").trimEnd();
}

function updateReadme(fileName, language) {
  const filePath = path.join(root, fileName);
  const before = fs.readFileSync(filePath, "utf8");
  const start = "<!-- CATALOG:START -->";
  const end = "<!-- CATALOG:END -->";
  const replacement = `${start}\n${renderCatalog(language)}\n${end}`;
  const after = before.replace(new RegExp(`${start}[\\s\\S]*?${end}`), replacement);

  if (after === before && !before.includes(replacement)) {
    throw new Error(`${fileName}: catalog markers were not replaced`);
  }

  if (checkOnly) {
    if (after !== before) {
      console.error(`${fileName} is out of date. Run npm run generate.`);
      process.exitCode = 1;
    }
    return;
  }

  fs.writeFileSync(filePath, after);
  console.log(`Updated ${fileName}`);
}

updateReadme("README.md", "en");
updateReadme("README.zh-CN.md", "zh");

if (checkOnly && !process.exitCode) {
  console.log("Generated README catalogs are up to date.");
}
