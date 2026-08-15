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
  if (!isLocale(locale)) return {};

  const zh = locale === "zh";
  const reviewedMonth = new Intl.DateTimeFormat(zh ? "zh-CN" : "en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${catalogSnapshot.reviewedAt}T00:00:00Z`));
  const title = zh
    ? `DeepSeek Harness 插件目录（${reviewedMonth}）`
    : `DeepSeek Harness Plugins Directory (${reviewedMonth})`;
  const description = zh
    ? "发现经过审核的 DeepSeek Harness 插件，查看固定源码、包结构、许可证、兼容性证据与透明审核备注。"
    : "Discover reviewed DeepSeek Harness plugins with pinned source commits, package structure, licenses, compatibility evidence, and transparent review notes.";
  const canonical = `${siteConfig.url}/${locale}/`;

  return {
    title: { absolute: title },
    description,
    category: "Developer Tools",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: `/${locale}/`,
      languages: { en: "/en/", zh: "/zh/", "x-default": "/en/" },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      locale: zh ? "zh_CN" : "en_US",
      alternateLocale: zh ? ["en_US"] : ["zh_CN"],
    },
    twitter: {
      card: "summary",
      title,
      description,
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
  const canonicalUrl = `${siteConfig.url}/${locale}/`;
  const pageTitle =
    locale === "zh"
      ? "DeepSeek Harness 插件目录"
      : "DeepSeek Harness Plugins Directory";

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        value={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteConfig.url}/#website`,
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              inLanguage: ["en", "zh-CN"],
            },
            {
              "@type": "CollectionPage",
              "@id": `${canonicalUrl}#webpage`,
              name: pageTitle,
              url: canonicalUrl,
              description: t.description,
              inLanguage: locale === "zh" ? "zh-CN" : "en",
              isPartOf: { "@id": `${siteConfig.url}/#website` },
              mainEntity: { "@id": `${canonicalUrl}#plugin-list` },
            },
            {
              "@type": "ItemList",
              "@id": `${canonicalUrl}#plugin-list`,
              name: t.latestTitle,
              numberOfItems: featured.length,
              itemListElement: featured.map((plugin, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: plugin.name,
                url: `${siteConfig.url}/${locale}/plugins/${plugin.id}/`,
              })),
            },
            {
              "@type": "FAQPage",
              "@id": `${canonicalUrl}#faq`,
              mainEntity: t.faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${canonicalUrl}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: siteConfig.name,
                  item: canonicalUrl,
                },
              ],
            },
          ],
        }}
      />
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-description">{t.description}</p>
            <form
              action={`/${locale}/plugins/`}
              className="hero-search"
              role="search"
            >
              <label htmlFor={`home-plugin-search-${locale}`}>
                {t.searchLabel}
              </label>
              <div className="hero-search-row">
                <input
                  id={`home-plugin-search-${locale}`}
                  maxLength={160}
                  name="q"
                  placeholder={t.searchPlaceholder}
                  type="search"
                />
                <button className="button button-primary" type="submit">
                  {t.searchAction}
                </button>
              </div>
            </form>
            <div className="hero-actions">
              <Link className="text-link" href={`/${locale}/plugins/`}>
                {t.primaryAction}
              </Link>
              <Link className="text-link" href={`/${locale}/methodology/`}>
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

      <section className="featured-section home-featured-section">
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

      <section className="directory-intro-section">
        <div className="shell directory-intro-grid">
          <div className="directory-intro-copy">
            <p className="eyebrow">{t.introEyebrow}</p>
            <h2>{t.introTitle}</h2>
            {t.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="record-checklist">
            <h3>{t.checklistTitle}</h3>
            <ul>
              {t.checklistItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="text-link" href={`/${locale}/methodology/`}>
              {t.checklistAction} <span aria-hidden="true">→</span>
            </Link>
          </aside>
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

      <section className="faq-section" id="faq">
        <div className="shell faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">{t.faqEyebrow}</p>
            <h2>{t.faqTitle}</h2>
            <p>{t.faqDescription}</p>
          </div>
          <div className="faq-list">
            {t.faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
