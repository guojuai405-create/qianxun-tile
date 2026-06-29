import type { MetadataRoute } from "next";

// 静态导出要求路由产物为静态
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.qianxuntile.com/sitemap.xml",
  };
}
