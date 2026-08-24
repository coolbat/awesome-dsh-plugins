import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/catalog";

export function generateStaticParams() {
  return [{ locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
