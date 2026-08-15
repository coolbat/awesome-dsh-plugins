import type { MetadataRoute } from "next";

import { getPublishedPlugins, locales } from "@/lib/catalog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sharedRoutes = ["", "plugins/", "review/", "methodology/"];
  const pages = locales.flatMap((locale) =>
    sharedRoutes.map((route) => ({
      url: `${siteConfig.url}/${locale}/${route}`,
      lastModified,
      changeFrequency:
        route === "plugins/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "plugins/" ? 0.9 : 0.6,
    })),
  );
  const pluginPages = locales.flatMap((locale) =>
    getPublishedPlugins().map((plugin) => ({
      url: `${siteConfig.url}/${locale}/plugins/${plugin.id}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...pages, ...pluginPages];
}
