import type { MetadataRoute } from "next";

// 静态导出要求路由产物为静态
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://qianxuntile.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://qianxuntile.com/insights",
      lastModified: new Date("2026-09-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://qianxuntile.com/insights/wuhan-family-tile-guide",
      lastModified: new Date("2026-09-06"),
      changeFrequency: "yearly",
      priority: 0.75,
    },
    {
      url: "https://qianxuntile.com/insights/tile-selection-and-space-design",
      lastModified: new Date("2026-09-06"),
      changeFrequency: "yearly",
      priority: 0.75,
    },
  ];
}
