import Link from "next/link";

import type { CatalogPlugin, Locale } from "@/lib/catalog";
import { localizedSummary } from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { compatibilityLabel } from "@/lib/labels";

export function PluginCard({
  plugin,
  locale,
}: {
  plugin: CatalogPlugin;
  locale: Locale;
}) {
  const t = getMessages(locale).catalog;

  return (
    <article className="plugin-card">
      <div className="card-topline">
        <span className="status-pill status-reviewed">
          {compatibilityLabel(plugin.compatibility, locale)}
        </span>
        <span className="commit-label">@{plugin.shortCommit}</span>
      </div>
      <div>
        <p className="card-category">{plugin.category}</p>
        <h2 className="plugin-card-title">
          <Link href={`/${locale}/plugins/${plugin.id}/`}>{plugin.name}</Link>
        </h2>
        <p className="plugin-summary">{localizedSummary(plugin, locale)}</p>
      </div>
      <div className="signal-list" aria-label={t.signal}>
        {plugin.signals.slice(0, 3).map((signal) => (
          <span className="signal-chip" key={signal}>
            {signal}
          </span>
        ))}
        {plugin.signals.length > 3 ? (
          <span className="signal-chip">+{plugin.signals.length - 3}</span>
        ) : null}
      </div>
      <div className="card-meta">
        <span>{plugin.author}</span>
        <span>{plugin.package ?? "Git source"}</span>
      </div>
      <div className="card-actions">
        <Link className="text-link" href={`/${locale}/plugins/${plugin.id}/`}>
          {t.viewEvidence} <span aria-hidden="true">→</span>
        </Link>
        <a className="source-link" href={plugin.sourceUrl}>
          {t.source} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
