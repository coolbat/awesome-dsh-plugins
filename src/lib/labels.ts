import type { CatalogStatus, Compatibility, Locale } from "./catalog";

const compatibilityLabels: Record<Compatibility, Record<Locale, string>> = {
  "declared-rc6": { en: "Declares rc.6", zh: "声明支持 rc.6" },
  mixed: { en: "Mixed declarations", zh: "声明存在混合" },
  unknown: { en: "Unknown", zh: "未知" },
  "behind-baseline": { en: "Behind baseline", zh: "落后于基线" },
  unsupported: { en: "Unsupported", zh: "不支持" },
};

const statusLabels: Record<CatalogStatus, Record<Locale, string>> = {
  reviewed: { en: "Reviewed", zh: "已审核" },
  held: { en: "Held", zh: "暂缓" },
  excluded: { en: "Excluded", zh: "已排除" },
};

export function compatibilityLabel(
  compatibility: Compatibility,
  locale: Locale,
) {
  return compatibilityLabels[compatibility][locale];
}

export function statusLabel(status: CatalogStatus, locale: Locale) {
  return statusLabels[status][locale];
}
