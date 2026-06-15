// tm-sec1.jsx — Nav, Hero, Trip details (plashki)

// единая ссылка призыва к действию → WhatsApp Маши с готовым сообщением
window.TM_WA = "https://wa.me/79655004984?text=" + encodeURIComponent("Привет, Маша! Хочу участвовать в сюрприз-туре! Вышли мне пожалуйста анкету участника.");

function TMNav({ logo }) {
  const y = useScrollY();
  const scrolled = y > 60;
  return (
    <nav className={"tm-nav" + (scrolled ? " scrolled" : "")}>
      <a className="tm-logo" href="#top">
        <img className="tm-logo-img" src={logo || "images/logo.png"} alt="Travel Mary" />
      </a>
      <div className="tm-nav-links">
        <a className="hide-sm" href="#route">Маршрут</a>
        <a className="hide-sm" href="#process">Как это устроено</a>
        <a className="hide-sm" href="#price">Стоимость</a>
        <a className="hide-sm" href="#about">Кто я</a>
        <a className="btn btn-ghost nav-cta" href={window.TM_WA} target="_blank" rel="noopener noreferrer" style={{ padding: "11px 20px" }}>Я в теме <span className="arr">→</span></a>
      </div>
    </nav>);

}

function TMHero({ images }) {
  const y = useScrollY();
  const fade = Math.max(0, 1 - y / 600);
  return (
    <header className="tm-hero" id="top">
      <div className="tm-hero-bg" style={{ backgroundImage: `url("${images.hero}")`, transform: `translate3d(0, ${y * 0.25}px, 0) scale(1.08)` }} />

      {/* jungle silhouettes */}
      <div className="layer" style={{ transform: `translate3d(0, ${y * 0.5}px, 0)`, opacity: .5 }}>
        <div style={{ position: "absolute", left: "-8%", bottom: "-12%", width: "32vw", height: "70vh", filter: "blur(3px)" }}>
          <Fern fill="#030a07" opacity={.9} />
        </div>
        <div style={{ position: "absolute", right: "-10%", bottom: "-10%", width: "34vw", height: "66vh", filter: "blur(4px)", transform: "scaleX(-1)" }}>
          <Fern fill="#030a07" opacity={.9} />
        </div>
      </div>

      <div className="tm-hero-inner">
        <Reveal duration={1000} y={16}>
          <div className="eyebrow" style={{ display: "flex", justifyContent: "center", gap: 14, alignItems: "center" }}>
            <span style={{ width: 30, height: 1, background: "var(--gold)" }} />
            Авторское путешествие · Сезон II
            <span style={{ width: 30, height: 1, background: "var(--gold)" }} />
          </div>
        </Reveal>

        <Reveal delay={180} duration={1200} y={36}>
          <h1 className="tm-display">Сюрприз&nbsp;трип</h1>
        </Reveal>

        <Reveal delay={460} duration={1000} y={20}>
          <div className="tm-hero-subs">
            <span className="s2">Второй сезон · Латинская Америка</span>
            <span className="s3">Тревел-квест, где маршрут открывается по&nbsp;ходу путешествия.</span>
          </div>
        </Reveal>

        <Reveal delay={680} duration={900} y={16}>
          <div className="tm-hero-cta">
            <a className="btn btn-primary btn-lg" href={window.TM_WA} target="_blank" rel="noopener noreferrer">Я в теме <span className="arr">→</span></a>
            <a className="btn btn-ghost btn-lg" href="#route">Посмотреть маршрут</a>
          </div>
        </Reveal>
      </div>

      <div className="tm-hero-scroll" style={{ opacity: fade }}>
        <span>Листай вниз</span>
        <span className="ln" />
      </div>
    </header>);

}

function TMDetails() {
  const plashki = [
  { k: "Даты", v: "25 янв — 8 фев", sub: "2027 года" },
  { k: "Продолжительность", v: "15 дней", sub: "" },
  { k: "Страны", v: "2+", sub: "" },
  { k: "Группа", v: "до 13", sub: "человек" },
  { k: "Уровень", v: "Лёгкий", sub: "" }];

  return (
    <section className="tm-section tight" id="details">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <span className="eyebrow">Детали тура</span>
          </div>
        </Reveal>
        <Reveal delay={150} y={28}>
          <div className="tm-plashki">
            {plashki.map((p) =>
            <div className="tm-plashka" key={p.k}>
                <div className="k">{p.k}</div>
                <div className="v">{p.v}<small>{p.sub}</small></div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

function TMFloatingCTA() {
  const y = useScrollY();
  const show = y > 720;
  return (
    <a className={"tm-fab" + (show ? " show" : "")} href={window.TM_WA} target="_blank" rel="noopener noreferrer" aria-label="Я в теме">
      Я в теме <span className="arr">→</span>
    </a>);

}

Object.assign(window, { TMNav, TMHero, TMDetails, TMFloatingCTA });