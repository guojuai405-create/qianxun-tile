import ScrollReveal from "./ScrollReveal";

const PHONE = "13554015660";
const PHONE_DISPLAY = "135 5401 5660";

const categories = [
  { en: "Wood Grain", name: "高端木纹砖", desc: "自然纹理，温润质感" },
  { en: "Soft Light", name: "质感柔光砖", desc: "细腻哑光，柔和不刺眼" },
  { en: "Limestone", name: "莱姆石", desc: "天然石感，沉稳大气" },
  { en: "Pattern", name: "花砖", desc: "复古图案，点睛之笔" },
  { en: "Handmade", name: "手工砖", desc: "匠心手作，独一无二" },
  { en: "Full Range", name: "全品类特色砖", desc: "一站选齐，省心搭配" },
];

const woodBrands = [
  { name: "KT 木纹砖", tag: "" },
  { name: "核桃木纹砖", tag: "" },
  { name: "卡木瓷砖", tag: "" },
  { name: "虎豹木纹砖", tag: "行业高端代表" },
];

const softBrands = [
  { name: "小白熊瓷砖", tag: "" },
  { name: "柏拉图柔光砖", tag: "" },
  { name: "罗浮威尔瓷砖", tag: "" },
  { name: "墨菲瓷砖", tag: "" },
];

const styles = ["现代", "复古", "奶油", "极简", "莫奈花园"];

const stats = [
  { num: "15", unit: "年", label: "专业服务经验", dark: false },
  { num: "1000", unit: "+", label: "服务家庭案例", dark: true },
  { num: "500", unit: "+", label: "精选瓷砖品类", dark: true },
  { num: "原厂", unit: "正品", label: "严格甄选 · 品质保障", dark: false },
];

const cases = [
  {
    img: "/cases/case1.jpg",
    en: "Cream French",
    title: "奶油法式 · 厨餐一体",
    spec: "木纹砖人字拼 · 柔光石材",
    alt: "武汉千寻瓷砖美学馆案例 - 奶油风法式厨餐厅木纹砖人字拼铺贴",
  },
  {
    img: "/cases/case2.jpg",
    en: "Modern Vintage",
    title: "现代中古客厅",
    spec: "高端木纹砖通铺 · 大板地砖",
    alt: "武汉千寻瓷砖美学馆案例 - 现代中古风客厅高端木纹砖通铺",
  },
  {
    img: "/cases/case3.jpg",
    en: "Minimalist",
    title: "极简自然客厅",
    spec: "木纹砖方块拼 · 侘寂质感",
    alt: "武汉千寻瓷砖美学馆案例 - 极简侘寂风木纹砖方块拼铺贴",
  },
  {
    img: "/cases/case4.jpg",
    en: "Dining Room",
    title: "中古餐厨空间",
    spec: "高端木纹砖通铺 · 餐厨一体",
    alt: "武汉千寻瓷砖美学馆案例 - 中古风餐厨空间木纹砖通铺",
  },
  {
    img: "/cases/case5.jpg",
    en: "Soft Light Bath",
    title: "米色柔光卫浴",
    spec: "质感柔光大板 · 600×1200mm",
    alt: "武汉千寻瓷砖美学馆案例 - 米色质感柔光砖大板卫浴",
  },
  {
    img: "/cases/case6.jpg",
    en: "Vintage Pattern",
    title: "复古花砖卫浴",
    spec: "复古碎花砖 · 拱形门洞",
    alt: "武汉千寻瓷砖美学馆案例 - 复古碎花花砖卫浴拱形设计",
  },
];

const features = [
  {
    title: "原厂正品",
    desc: "店内所有品牌均为原厂正品，经过严格筛选，品质值得信赖。",
  },
  {
    title: "美学设计",
    desc: "专业设计师团队，按您的空间风格量身定制瓷砖搭配方案。",
  },
  {
    title: "全程服务",
    desc: "从选材、搭配到落地，提供一站式服务，让装修省心无忧。",
  },
];

export default function Home() {
  return (
    <main className="bg-stone-50 text-stone-800">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-px h-8 bg-gold-400" />
            <span className="text-white text-lg tracking-widest">
              千寻瓷砖美学馆
            </span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="text-gold-400 text-sm tracking-wider hover:text-gold-300 transition-colors"
          >
            {PHONE}
          </a>
        </div>
      </nav>

      {/* 首屏 Hero */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: "url('/cases/case1.jpg')" }}
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm tracking-[0.4em] uppercase mb-6">
            Wuhan · Qianxun Tile Aesthetics
          </p>
          <div className="gold-line h-px w-24 mx-auto mb-10" />
          <h1 className="text-white text-4xl md:text-6xl leading-tight mb-6 tracking-wide">
            武汉千寻
            <br className="md:hidden" />
            <span className="text-gold-400">瓷砖美学馆</span>
          </h1>
          <div className="gold-line h-px w-24 mx-auto my-8" />
          <p className="text-stone-200 text-base md:text-xl leading-relaxed tracking-wider max-w-2xl mx-auto">
            专注高端瓷砖设计与美学搭配
            <br />
            提供一站式瓷砖选购与美学方案
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-gold-500 hover:bg-gold-400 text-white text-sm tracking-widest px-10 py-4 transition-colors"
            >
              立即咨询
            </a>
            <a
              href="#cases"
              className="inline-block border border-stone-500 hover:border-gold-400 text-stone-200 hover:text-gold-400 text-sm tracking-widest px-10 py-4 transition-colors"
            >
              查看案例
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </section>

      {/* 核心信息 */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-4">
              Contact &amp; Location
            </p>
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-4">核心信息</h2>
            <div className="gold-line h-px w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover bg-stone-50 border border-stone-100 p-8 text-center fade-in">
              <p className="text-xs text-gold-500 tracking-widest uppercase mb-3">
                地址
              </p>
              <p className="text-stone-700 text-sm leading-relaxed">
                武汉市硚口区
                <br />
                汉西三路95号
                <br />
                汉西红星美凯龙
                <br />
                5楼中庭
              </p>
            </div>

            <div className="card-hover bg-stone-50 border border-stone-100 p-8 text-center fade-in">
              <p className="text-xs text-gold-500 tracking-widest uppercase mb-3">
                联系人
              </p>
              <p className="text-stone-700 text-2xl mt-4">杨经理</p>
              <p className="text-stone-400 text-xs mt-3">微信同号</p>
            </div>

            <div className="card-hover bg-stone-800 border border-stone-700 p-8 text-center fade-in">
              <p className="text-xs text-gold-400 tracking-widest uppercase mb-3">
                联系电话
              </p>
              <a
                href={`tel:${PHONE}`}
                className="text-white text-xl tracking-wider hover:text-gold-400 transition-colors mt-2 block"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="card-hover bg-stone-50 border border-stone-100 p-8 text-center fade-in">
              <p className="text-xs text-gold-500 tracking-widest uppercase mb-3">
                营业时间
              </p>
              <p className="text-stone-700 text-sm leading-relaxed">
                周一至周日
                <span className="text-stone-800 font-medium text-base mt-1 block">
                  9:00 — 18:00
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 品类总览 */}
      <section id="categories" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-4">
              Categories
            </p>
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-4">主营品类</h2>
            <div className="gold-line h-px w-16 mx-auto" />
            <p className="text-stone-500 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
              覆盖高端木纹砖、质感柔光砖、莱姆石、花砖、手工砖，满足现代、复古、奶油、极简、莫奈花园等多种家装风格
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <div
                key={c.name}
                className="card-hover bg-white border border-stone-100 p-7 fade-in"
              >
                <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase mb-3">
                  {c.en}
                </p>
                <h3 className="text-stone-800 text-lg mb-2">{c.name}</h3>
                <p className="text-stone-400 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌墙 */}
      <section id="brands" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-4">
              Brands
            </p>
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-4">品牌精选</h2>
            <div className="gold-line h-px w-16 mx-auto" />
            <p className="text-stone-500 text-sm mt-6">
              店内所有品牌均为原厂正品，经过严格筛选
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="fade-in">
              <h3 className="text-stone-800 text-xl mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold-400" />
                木纹砖系列
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {woodBrands.map((b) => (
                  <div
                    key={b.name}
                    className="bg-stone-50 border-l-2 border-gold-400 px-5 py-5"
                  >
                    <p className="text-stone-800">{b.name}</p>
                    {b.tag && (
                      <p className="text-gold-500 text-xs mt-1">{b.tag}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in">
              <h3 className="text-stone-800 text-xl mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold-400" />
                质感柔光砖系列
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softBrands.map((b) => (
                  <div
                    key={b.name}
                    className="bg-stone-50 border-l-2 border-gold-400 px-5 py-5"
                  >
                    <p className="text-stone-800">{b.name}</p>
                    {b.tag && (
                      <p className="text-gold-500 text-xs mt-1">{b.tag}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 适配风格 */}
          <div className="mt-16 pt-12 border-t border-stone-100 text-center fade-in">
            <p className="text-stone-500 text-sm mb-6">适配多种家装风格</p>
            <div className="flex flex-wrap justify-center gap-3">
              {styles.map((s) => (
                <span
                  key={s}
                  className="border border-stone-300 text-stone-600 text-sm px-6 py-2 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 精选案例 */}
      <section id="cases" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-4">
              Our Cases
            </p>
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-4">精选案例</h2>
            <div className="gold-line h-px w-16 mx-auto" />
            <p className="text-stone-500 text-sm mt-6">
              每一块瓷砖，都是空间美学的起点
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div
                key={c.title}
                className="img-zoom bg-white shadow-sm card-hover fade-in"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300">
                  {/* 真实照片放到 public/cases/ 后自动显示 */}
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gold-500 tracking-widest uppercase mb-2">
                    {c.en}
                  </p>
                  <h3 className="text-stone-800 text-base">{c.title}</h3>
                  <p className="text-stone-400 text-xs mt-1">{c.spec}</p>
                </div>
              </div>
            ))}

            {/* 更多案例 CTA */}
            <div className="bg-stone-800 p-8 flex flex-col justify-center items-start fade-in">
              <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">
                More Cases
              </p>
              <h3 className="text-white text-xl leading-relaxed mb-6">
                更多案例
                <br />
                期待您到店体验
              </h3>
              <a
                href={`tel:${PHONE}`}
                className="inline-block border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white text-xs tracking-widest px-8 py-3 transition-all"
              >
                预约咨询
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 为什么选我们 + 数据 */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <p className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-4">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl text-stone-800 mb-6 leading-snug">
                为什么选择
                <br />
                千寻瓷砖美学馆
              </h2>
              <div className="w-12 h-px bg-gold-400 mb-8" />
              <p className="text-stone-600 text-base leading-loose">
                千寻瓷砖美学馆扎根
                <strong className="text-stone-800 font-medium">武汉装修</strong>
                市场多年，深耕高端家居美学领域。我们入驻
                <strong className="text-stone-800 font-medium">
                  汉西红星美凯龙
                </strong>
                ，店内所有品牌均为
                <strong className="text-stone-800 font-medium">原厂正品</strong>
                、经过严格筛选，覆盖高端木纹砖、质感柔光砖、莱姆石、花砖、手工砖等全品类。从选材、搭配到落地，为您提供一站式
                <strong className="text-stone-800 font-medium">专业搭配</strong>
                服务，让每一寸空间都展现独特品位与质感。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 fade-in">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`border-l-2 border-gold-400 p-6 ${
                    s.dark ? "bg-stone-800" : "bg-stone-50"
                  }`}
                >
                  <p
                    className={`text-3xl mb-2 ${
                      s.dark ? "text-white" : "text-stone-800"
                    }`}
                  >
                    {s.num}
                    <span className="text-gold-400 text-xl">{s.unit}</span>
                  </p>
                  <p
                    className={`text-xs tracking-wider ${
                      s.dark ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-stone-100">
            {features.map((f) => (
              <div key={f.title} className="text-center fade-in">
                <h3 className="text-stone-800 text-lg mb-3">{f.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-20 hero-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="gold-line h-px w-24 mx-auto mb-10" />
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed mb-8 tracking-wide">
            欢迎预约到店参观，地址位于
            <span className="text-gold-400">汉西红星美凯龙5楼中庭</span>。
          </p>
          <p className="text-stone-400 text-sm mb-8">武汉市硚口区汉西三路95号</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block bg-gold-500 hover:bg-gold-400 text-white text-sm tracking-[0.3em] px-12 py-4 transition-colors"
          >
            拨打电话：{PHONE_DISPLAY}
          </a>
          <div className="gold-line h-px w-24 mx-auto mt-10" />
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-stone-900 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-xs tracking-wider">
            © 2026 武汉千寻瓷砖美学馆 · 版权所有
          </p>
          <p className="text-stone-600 text-xs">
            汉西红星美凯龙5楼中庭 · 周一至周日 9:00-18:00
          </p>
        </div>
      </footer>

      <ScrollReveal />
    </main>
  );
}
