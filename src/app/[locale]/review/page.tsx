import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getEvidenceRecords,
  isLocale,
  localizedNote,
  localizedSummary,
} from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { statusLabel } from "@/lib/labels";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "zh" ? "审核记录" : "Review log",
    description:
      locale === "zh"
        ? "查看暂缓和排除的 DSH 插件候选及其固定源码阻塞原因。"
        : "Inspect held and excluded DSH plugin candidates and their fixed-source blockers.",
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${locale}/review/`,
      languages: { en: "/en/review/", zh: "/zh/review/" },
    },
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getMessages(locale).review;
  const held = getEvidenceRecords().filter(
    (plugin) => plugin.status === "held",
  );
  const excluded = getEvidenceRecords().filter(
    (plugin) => plugin.status === "excluded",
  );

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero review-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
        </div>
      </section>
      <div className="shell review-sections">
        <ReviewGroup
          empty={t.empty}
          locale={locale}
          plugins={held}
          title={t.held}
        />
        <ReviewGroup
          empty={t.empty}
          locale={locale}
          plugins={excluded}
          title={t.excluded}
        />
      </div>
    </main>
  );
}

function ReviewGroup({
  title,
  empty,
  plugins,
  locale,
}: {
  title: string;
  empty: string;
  plugins: ReturnType<typeof getEvidenceRecords>;
  locale: "en" | "zh";
}) {
  return (
    <section className="review-group">
      <div className="review-group-heading">
        <h2>{title}</h2>
        <span>{plugins.length}</span>
      </div>
      {plugins.length ? (
        <div className="review-list">
          {plugins.map((plugin) => (
            <article className="review-item" key={plugin.id}>
              <div>
                <span className={`status-pill status-${plugin.status}`}>
                  {statusLabel(plugin.status, locale)}
                </span>
                <h3>
                  <Link href={`/${locale}/plugins/${plugin.id}/`}>
                    {plugin.name}
                  </Link>
                </h3>
                <p>{localizedSummary(plugin, locale)}</p>
              </div>
              <div className="review-reason">
                <p>{localizedNote(plugin, locale)}</p>
                <a href={plugin.sourceUrl}>
                  {plugin.repository}@{plugin.shortCommit}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>{empty}</p>
      )}
    </section>
  );
}
