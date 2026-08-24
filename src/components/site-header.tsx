import Link from "next/link";

import type { Locale } from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { localizedPath } from "@/lib/urls";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const otherLocale = locale === "zh" ? "en" : "zh";

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href={localizedPath(locale)}>
            <span className="brand-mark" aria-hidden="true">
              DSH
            </span>
            <span>Plugin Index</span>
          </Link>
          <nav aria-label={locale === "zh" ? "主导航" : "Primary navigation"}>
            <ul className="nav-list">
              <li>
                <Link href={localizedPath(locale, "plugins")}>
                  {t.nav.plugins}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "review")}>
                  {t.nav.review}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "methodology")}>
                  {t.nav.methodology}
                </Link>
              </li>
              <li className="desktop-nav-item">
                <a href={siteConfig.repository}>{t.nav.github}</a>
              </li>
              <li>
                <Link href={localizedPath(otherLocale)} lang={otherLocale}>
                  {t.switchLanguage}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
