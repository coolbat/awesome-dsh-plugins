import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { catalogSnapshot, isLocale } from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "zh" ? "核验方法" : "Review methodology",
    description:
      locale === "zh"
        ? "了解 DSH Plugin Index 如何发现、固定源码、静态检查并审核候选插件。"
        : "Learn how DSH Plugin Index discovers, pins, statically inspects, and reviews plugin candidates.",
    alternates: {
      canonical: `/${locale}/methodology/`,
      languages: { en: "/en/methodology/", zh: "/zh/methodology/" },
    },
  };
}

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale).methodology;

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero methodology-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="methodology-content">
        <div className="shell methodology-grid">
          <div className="methodology-steps">
            {t.steps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
          <aside>
            <section className="boundary-panel">
              <p className="eyebrow">NO EXECUTION</p>
              <h2>{t.boundaryTitle}</h2>
              <p>{t.boundary}</p>
            </section>
            <section className="contract-panel">
              <p>DSH CONTRACT</p>
              <strong>{catalogSnapshot.baseline}</strong>
              <span>{catalogSnapshot.disclosure}</span>
              <a href={catalogSnapshot.dshContractUrl}>
                {locale === "zh"
                  ? "查看固定官方文档"
                  : "Open pinned official document"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </section>
          </aside>
        </div>
        <div className="shell methodology-link-row">
          <a href={`${siteConfig.repository}/blob/main/docs/METHODOLOGY.md`}>
            {t.fullDocument} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
