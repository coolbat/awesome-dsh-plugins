import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CatalogExplorer } from "@/components/catalog-explorer";
import { StructuredData } from "@/components/structured-data";
import {
  catalogSnapshot,
  getCategories,
  getPublishedPlugins,
  isLocale,
} from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const zh = locale === "zh";
  return {
    title: zh ? "插件目录" : "Plugin directory",
    description: zh
      ? "浏览经过固定源码结构核验的 DeepSeek Harness 插件。"
      : "Browse DeepSeek Harness plugins reviewed against immutable source evidence.",
    alternates: {
      canonical: `/${locale}/plugins/`,
      languages: { en: "/en/plugins/", zh: "/zh/plugins/" },
    },
  };
}

export default async function PluginsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getMessages(locale).catalog;
  const plugins = getPublishedPlugins();
  const categories = getCategories();

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: t.title,
          description: t.description,
          url: `${siteConfig.url}/${locale}/plugins/`,
          inLanguage: locale === "zh" ? "zh-CN" : "en",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: plugins.length,
            itemListElement: plugins.map((plugin, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: plugin.name,
              url: `${siteConfig.url}/${locale}/plugins/${plugin.id}/`,
            })),
          },
        }}
      />
      <section className="page-hero compact-hero">
        <div className="shell">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
          <div className="snapshot-strip">
            <span>DSH {catalogSnapshot.baseline}</span>
            <span>{catalogSnapshot.reviewedAt}</span>
            <span>{catalogSnapshot.disclosure}</span>
          </div>
        </div>
      </section>
      <div className="shell catalog-shell">
        <CatalogExplorer
          categories={categories}
          locale={locale}
          plugins={plugins}
        />
      </div>
    </main>
  );
}
