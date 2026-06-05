import type { MetadataRoute } from "next";

import { mainNavItems } from "@/lib/siteNav";
import { absoluteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNavItems.map(({ href }) => ({
    url: absoluteUrl(href),
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
