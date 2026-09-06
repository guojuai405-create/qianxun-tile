import Link from "next/link";

const PHONE = "13554015660";
const PHONE_DISPLAY = "135 5401 5660";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="返回武汉千寻瓷砖美学馆首页">
          <span className="site-brand-mark" aria-hidden="true" />
          <span>千寻瓷砖美学馆</span>
        </Link>
        <nav className="site-nav" aria-label="主要导航">
          <Link href="/">首页</Link>
          <Link href="/insights">内容中心</Link>
          <a href={`tel:${PHONE}`} className="site-phone">{PHONE}</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="insights-footer">
      <div>
        <p>© 2026 武汉千寻瓷砖美学馆 · 版权所有</p>
        <p>汉西红星美凯龙5楼中庭 · 周一至周日 9:00-18:00</p>
      </div>
      <a href={`tel:${PHONE}`}>电话咨询 {PHONE_DISPLAY}</a>
    </footer>
  );
}
