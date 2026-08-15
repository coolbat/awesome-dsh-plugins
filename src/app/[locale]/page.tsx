import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PluginCard } from "@/components/plugin-card";
import { StructuredData } from "@/components/structured-data";
import {
  catalogSnapshot,
  getCatalogStats,
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
    title: zh ? "DeepSeek Harness 插件索引" : "DeepSeek Harness Plugin Index",
    description: zh
      ? "基于固定源码、结构证据与透明审核状态的 DeepSeek Harness 插件目录。"
      : "A DeepSeek Harness plugin directory built from pinned sources, structural evidence, and transparent review states.",
    alternates: {
      canonical: `/${locale}/`,
      languages: { en: "/en/", zh: "/zh/" },
    },
  };
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getMessages(locale).home;
  const stats = getCatalogStats();
  const featured = getPublishedPlugins().slice(0, 6);

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: `${siteConfig.url}/${locale}/`,
          description: t.description,
          inLanguage: locale === "zh" ? "zh-CN" : "en",
        }}
      />
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-description">{t.description}</p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href={`/${locale}/plugins/`}
              >
                {t.primaryAction}
              </Link>
              <Link
                className="button button-secondary"
                href={`/${locale}/methodology/`}
              >
                {t.secondaryAction}
              </Link>
            </div>
          </div>
          <aside className="snapshot-panel" aria-label="Catalog snapshot">
            <div className="snapshot-header">
              <span>CATALOG / {catalogSnapshot.reviewedAt}</span>
              <span className="live-dot">STATIC</span>
            </div>
            <dl className="snapshot-stats">
              <div>
                <dt>{locale === "zh" ? "已审核" : "Reviewed"}</dt>
                <dd>{stats.reviewed}</dd>
              </div>
              <div>
                <dt>{locale === "zh" ? "分类" : "Categories"}</dt>
                <dd>{stats.categories}</dd>
              </div>
              <div>
                <dt>{locale === "zh" ? "暂缓" : "Held"}</dt>
                <dd>{stats.held}</dd>
              </div>
            </dl>
            <div className="baseline-row">
              <span>DSH baseline</span>
              <strong>{catalogSnapshot.baseline}</strong>
            </div>
            <p>{catalogSnapshot.disclosure}</p>
          </aside>
        </div>
      </section>

      <section className="warning-band">
        <div className="shell warning-inner">
          <span aria-hidden="true">!</span>
          <p>{t.warning}</p>
        </div>
      </section>

      <section className="principles-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <h2>{t.sectionTitle}</h2>
            <p>{t.sectionDescription}</p>
          </div>
          <div className="principle-grid">
            {t.cards.map((card) => (
              <article className="principle-card" key={card.number}>
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">
                {locale === "zh" ? "公开目录" : "PUBLIC INDEX"}
              </p>
              <h2>{t.latestTitle}</h2>
            </div>
            <div>
              <p>{t.latestDescription}</p>
              <Link className="text-link" href={`/${locale}/plugins/`}>
                {t.primaryAction} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="plugin-grid featured-grid">
            {featured.map((plugin) => (
              <PluginCard key={plugin.id} locale={locale} plugin={plugin} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
