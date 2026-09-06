import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../articles";
import { SiteFooter, SiteHeader } from "../SiteChrome";

const SITE_URL = "https://qianxuntile.com";
const PHONE = "13554015660";
const PHONE_DISPLAY = "135 5401 5660";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const path = `/insights/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    authors: [{ name: "武汉千寻瓷砖美学馆", url: SITE_URL }],
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.description,
      url: path,
      siteName: "武汉千寻瓷砖美学馆",
      locale: "zh_CN",
      type: "article",
      publishedTime: `${article.publishedAt}T08:00:00+08:00`,
      authors: ["武汉千寻瓷砖美学馆"],
      images: [{ url: article.hero, alt: article.heroAlt }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = articles.find(({ slug }) => slug !== article.slug)!;
  const canonicalUrl = `${SITE_URL}/insights/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.hero}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "zh-CN",
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Organization", name: "武汉千寻瓷砖美学馆", url: SITE_URL },
    publisher: { "@type": "Organization", name: "武汉千寻瓷砖美学馆", url: SITE_URL },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "内容中心", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: article.category, item: canonicalUrl },
    ],
  };

  return (
    <main className="article-shell">
      <SiteHeader />
      <article>
        <header className="article-hero">
          <div className="article-hero-inner">
            <nav className="breadcrumb" aria-label="面包屑导航">
              <Link href="/">首页</Link><span>›</span><Link href="/insights">内容中心</Link><span>›</span><span>{article.category}</span>
            </nav>
            <p className="editorial-kicker">{article.categoryEn} · {article.category}</p>
            <h1>{article.title}</h1>
            <div className="article-byline">
              <span>作者：武汉千寻瓷砖美学馆</span>
              <time dateTime={article.publishedAt}>发布于 {article.publishedLabel}</time>
            </div>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-margin" aria-label="文章信息">
            <span>QIANXUN</span><span>READING</span><i aria-hidden="true" />
          </aside>
          <div className="article-content">
            {article.blocks.map((block, index) => {
              if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
              if (block.type === "paragraph") return <p key={index}>{block.text}</p>;
              if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
              return <figure key={index}><Image src={block.src} alt={block.alt} width={1800} height={1350} sizes="(max-width: 760px) 100vw, 740px" /><figcaption>{block.alt}</figcaption></figure>;
            })}
          </div>
        </div>
      </article>

      <section className="article-cta" aria-label="电话咨询">
        <p className="editorial-kicker">Talk to Qianxun</p>
        <h2>带上户型与需求，<br />一起把选材想清楚。</h2>
        <p>武汉市硚口区汉西三路95号 · 汉西红星美凯龙5楼中庭</p>
        <a href={`tel:${PHONE}`}>拨打电话咨询：{PHONE_DISPLAY}</a>
      </section>

      <section className="related-article">
        <p className="editorial-kicker">Continue Reading</p>
        <h2>继续阅读</h2>
        <Link href={`/insights/${related.slug}`}>
          <span>{related.category}</span>
          <strong>{related.title}</strong>
          <i aria-hidden="true">→</i>
        </Link>
      </section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
    </main>
  );
}
