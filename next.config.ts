import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出：构建出纯静态 HTML，Vercel 与国内服务器零改动通用
  output: "export",
  // 静态导出必须关闭 Next 图片优化（改由构建时压缩 / 服务器处理）
  images: {
    unoptimized: true,
  },
  // 每个路由生成独立目录 index.html，方便部署到 nginx / 对象存储
  trailingSlash: true,
};

export default nextConfig;
