import type { Locale } from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">DSH Plugin Index</p>
          <p className="footer-copy">{t.footer}</p>
        </div>
        <div className="footer-links">
          <a href={siteConfig.repository}>GitHub</a>
          <a href={`${siteConfig.repository}/issues/new/choose`}>
            {locale === "zh" ? "提交或纠错" : "Submit or correct"}
          </a>
        </div>
      </div>
    </footer>
  );
}
