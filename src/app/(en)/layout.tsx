import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="en">
      <SiteHeader locale="en" />
      {children}
      <SiteFooter locale="en" />
    </div>
  );
}
