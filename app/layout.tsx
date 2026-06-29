import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://qianxuntile.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "武汉千寻瓷砖美学馆 - 高端木纹砖/柔光砖/微水泥整体方案 | 汉西红星美凯龙",
  description:
    "武汉千寻瓷砖美学馆，专注高端瓷砖设计与美学搭配，提供一站式瓷砖选购与美学方案。原厂正品，覆盖高端木纹砖、质感柔光砖、莱姆石、花砖、手工砖，含KT、核桃、卡木、虎豹木纹砖及小白熊、柏拉图、罗浮威尔、墨菲柔光砖等品牌。地址：武汉市硚口区汉西三路95号汉西红星美凯龙5楼中庭，联系电话13554015660。",
  keywords: [
    "武汉瓷砖",
    "武汉瓷砖美学馆",
    "千寻瓷砖",
    "汉西红星美凯龙瓷砖",
    "武汉木纹砖",
    "高端木纹砖",
    "虎豹木纹砖",
    "质感柔光砖",
    "柏拉图柔光砖",
    "墨菲瓷砖",
    "微水泥",
    "莱姆石",
    "武汉装修瓷砖",
    "瓷砖美学搭配",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "武汉千寻瓷砖美学馆 - 高端瓷砖设计与美学搭配",
    description:
      "专注高端瓷砖设计与美学搭配，提供一站式瓷砖选购与美学方案。地址：武汉市硚口区汉西三路95号汉西红星美凯龙5楼中庭，电话13554015660。",
    url: SITE_URL,
    siteName: "武汉千寻瓷砖美学馆",
    locale: "zh_CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "baidu-site-verification": "codeva-F91QNJTqkS",
    },
  },
};

// JSON-LD 结构化数据：帮助豆包 / 搜索引擎准确理解门店信息
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: "武汉千寻瓷砖美学馆",
  description:
    "专注高端瓷砖设计与美学搭配，提供一站式瓷砖选购与美学方案。原厂正品，覆盖高端木纹砖、质感柔光砖、莱姆石、花砖、手工砖。",
  url: SITE_URL,
  telephone: "+86-13554015660",
  image: `${SITE_URL}/cases/case1.jpg`,
  priceRange: "￥￥￥",
  address: {
    "@type": "PostalAddress",
    streetAddress: "汉西三路95号汉西红星美凯龙5楼中庭",
    addressLocality: "武汉市",
    addressRegion: "湖北省",
    addressCountry: "CN",
  },
  // 经纬度为汉西红星美凯龙附近的近似值，可后续按实际门店校准
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.5995,
    longitude: 114.236,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86-13554015660",
    contactType: "sales",
    name: "杨经理",
    areaServed: "CN",
    availableLanguage: "zh-CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        {/* 无 JS 时也完整显示内容（防止 fade-in 永久隐藏） */}
        <noscript>
          <style>{`.fade-in{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
