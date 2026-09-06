import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "./articles";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export const metadata: Metadata = {
  title: "内容中心｜选砖指南与千寻观点 - 武汉千寻瓷砖美学馆",
  description: "武汉千寻瓷砖美学馆内容中心，分享武汉家庭选砖、装修预算、铺贴交付、空间搭配与门店服务的真实经验。",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "内容中心｜武汉千寻瓷砖美学馆",
    description: "选砖指南、空间搭配与门店服务经验。",
    url: "/insights",
    type: "website",
    images: [{ url: "/articles/store-sign.jpeg", alt: "武汉千寻瓷砖美学馆" }],
  },
};

export default function InsightsPage() {
  return (
    <main className="insights-shell">
      <SiteHeader />
      <section className="insights-hero">
        <div className="insights-hero-grid" aria-hidden="true" />
        <div className="insights-hero-inner">
          <p className="editorial-kicker">Qianxun Journal</p>
          <h1>把选材经验，<br />写成看得懂的方法。</h1>
          <p className="insights-intro">从预算、空间到铺贴交付，记录武汉家庭真正会遇到的选砖问题，也分享千寻对材料与空间关系的长期观察。</p>
          <div className="insights-categories" aria-label="内容分类">
            <span>选砖指南</span><span>千寻观点</span><span className="category-future">空间案例 · 敬请期待</span>
          </div>
        </div>
      </section>

      <section className="insights-list" aria-labelledby="latest-title">
        <div className="insights-list-heading">
          <p className="editorial-kicker">Latest Stories</p>
          <h2 id="latest-title">最新内容</h2>
          <p>两篇来自一线门店与真实服务流程的记录。</p>
        </div>
        <div className="article-card-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.slug}>
              <Link href={`/insights/${article.slug}`} className="article-card-image" aria-label={`阅读：${article.title}`}>
                <Image src={article.hero} alt={article.heroAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                <span className="article-card-number">0{index + 1}</span>
              </Link>
              <div className="article-card-body">
                <div className="article-card-meta"><span>{article.category}</span><time dateTime={article.publishedAt}>{article.publishedLabel}</time></div>
                <h3><Link href={`/insights/${article.slug}`}>{article.title}</Link></h3>
                <p>{article.description}</p>
                <Link href={`/insights/${article.slug}`} className="read-link">阅读全文 <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
