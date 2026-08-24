import type { Locale } from "@/lib/catalog";
import { siteConfig } from "@/lib/site";

function normalizePath(path = "") {
  return path.replace(/^\/+|\/+$/g, "");
}

export function localizedPath(locale: Locale, path = "") {
  const normalizedPath = normalizePath(path);
  const segments = [locale === "zh" ? "zh" : "", normalizedPath].filter(
    Boolean,
  );

  return `/${segments.join("/")}${segments.length ? "/" : ""}`;
}

export function absoluteLocalizedPath(locale: Locale, path = "") {
  return `${siteConfig.url}${localizedPath(locale, path)}`;
}

export function languageAlternates(path = "") {
  return {
    en: localizedPath("en", path),
    zh: localizedPath("zh", path),
    "x-default": localizedPath("en", path),
  };
}
