import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SourceCopy } from "@/components/source-copy";
import { StructuredData } from "@/components/structured-data";
import {
  getEvidenceRecords,
  getPluginBySlug,
  isLocale,
  localizedNote,
  localizedSummary,
  locales,
} from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { compatibilityLabel, statusLabel } from "@/lib/labels";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getEvidenceRecords().map((plugin) => ({ locale, slug: plugin.id })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const plugin = getPluginBySlug(slug);
  if (!plugin) return {};

  return {
    title: plugin.name,
    description: localizedSummary(plugin, locale),
    robots:
      plugin.status === "reviewed"
        ? { index: true, follow: true }
        : { index: false, follow: true },
    alternates: {
      canonical: `/${locale}/plugins/${plugin.id}/`,
      languages: {
        en: `/en/plugins/${plugin.id}/`,
        zh: `/zh/plugins/${plugin.id}/`,
        "x-default": `/en/plugins/${plugin.id}/`,
      },
    },
  };
}

export default async function PluginDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const plugin = getPluginBySlug(slug);
  if (!plugin) notFound();

  const t = getMessages(locale).detail;

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: plugin.name,
          description: localizedSummary(plugin, locale),
          applicationCategory: plugin.category,
          codeRepository: plugin.sourceUrl,
          author: { "@type": "Person", name: plugin.author },
          license: plugin.repoLicense,
          url: `${siteConfig.url}/${locale}/plugins/${plugin.id}/`,
        }}
      />
      <section className="detail-hero">
        <div className="shell">
          <Link className="back-link" href={`/${locale}/plugins/`}>
            <span aria-hidden="true">←</span> {t.back}
          </Link>
          <div className="detail-heading-grid">
            <div>
              <p className="eyebrow">{t.fixedRecord}</p>
              <h1>{plugin.name}</h1>
              <p className="detail-summary">
                {localizedSummary(plugin, locale)}
              </p>
              <div className="detail-badges">
                <span className={`status-pill status-${plugin.status}`}>
                  {statusLabel(plugin.status, locale)}
                </span>
                <span className="status-pill">
                  {compatibilityLabel(plugin.compatibility, locale)}
                </span>
                <span className="status-pill">{plugin.category}</span>
              </div>
            </div>
            <div className="source-action-panel">
              <p>{plugin.repository}</p>
              <code>{plugin.commit}</code>
              <div className="source-actions">
                <a className="button button-primary" href={plugin.sourceUrl}>
                  {t.openGithub} <span aria-hidden="true">↗</span>
                </a>
                <SourceCopy
                  copiedLabel={t.copied}
                  label={t.copySource}
                  source={plugin.sourceUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="shell detail-layout">
          <div>
            <h2>{t.evidence}</h2>
            <dl className="evidence-list">
              <EvidenceRow label={t.source}>
                <a href={plugin.repositoryUrl}>{plugin.repository}</a>
              </EvidenceRow>
              <EvidenceRow label={t.commit}>
                <a className="mono-wrap" href={plugin.commitUrl}>
                  {plugin.commit}
                </a>
              </EvidenceRow>
              <EvidenceRow label={t.manifest}>
                <a className="mono-wrap" href={plugin.manifestUrl}>
                  {plugin.manifest}
                </a>
              </EvidenceRow>
              <EvidenceRow label={t.patch}>
                {plugin.patchUrl ? (
                  <a className="mono-wrap" href={plugin.patchUrl}>
                    {plugin.patch}
                  </a>
                ) : (
                  t.missing
                )}
              </EvidenceRow>
              <EvidenceRow label={t.package}>
                <code>{plugin.package ?? t.missing}</code>
              </EvidenceRow>
              <EvidenceRow label={t.licenses}>
                repo {plugin.repoLicense} / package {plugin.packageLicense}
              </EvidenceRow>
              <EvidenceRow label={t.lifecycle}>
                <code>{plugin.lifecycle}</code>
              </EvidenceRow>
              <EvidenceRow label={t.compatibility}>
                {compatibilityLabel(plugin.compatibility, locale)}
              </EvidenceRow>
            </dl>
          </div>
          <aside className="detail-aside">
            <section>
              <h2>{t.signals}</h2>
              <div className="signal-list large-signal-list">
                {plugin.signals.map((signal) => (
                  <span className="signal-chip" key={signal}>
                    {signal}
                  </span>
                ))}
              </div>
            </section>
            <section className="review-note">
              <h2>{t.reviewNote}</h2>
              <p>{localizedNote(plugin, locale)}</p>
            </section>
            <section className="caution-box">
              <span aria-hidden="true">!</span>
              <div>
                <h2>{t.cautionTitle}</h2>
                <p>{t.caution}</p>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

function EvidenceRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
