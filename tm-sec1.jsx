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
        </Reveal>

        <Reveal delay={180} duration={1200} y={36}>
          <h1 className="tm-display">Сюрприз&nbsp;трип<span className="tm-display-sub">по Латинской Америке</span></h1>
        </Reveal>

        <Reveal delay={460} duration={1000} y={20}>
          <div className="tm-hero-subs">
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
  const stats = [
  { lbl: "Страны", val: "2+", sub: "маршрут — сюрприз" },
  { lbl: "Группа", val: "до 13", sub: "человек" },
  { lbl: "Свободно", val: "4", sub: "места осталось", acc: true },
  { lbl: "Уровень", val: "Лёгкий", sub: "без спецподготовки" }];

  return (
    <section className="tm-section tight" id="details">
      <div className="tm-wrap">
        <Reveal delay={80} y={20}>
          <div className="tm-trip-head">
            <span className="eyebrow">Коротко о туре</span>
          </div>
        </Reveal>
        <Reveal delay={140} y={28}>
          <div className="tm-trip">
            <div className="tm-trip-feature">
              <span className="tm-stat-lbl">Даты путешествия</span>
              <div className="tm-trip-date">
                25 января — 8 февраля<br /><span className="tm-trip-year">2027 года</span>
              </div>
              <div className="tm-trip-pills">
                <span className="tm-pill"><b>15</b> дней в пути</span>
                <span className="tm-pill">Латинская Америка</span>
              </div>
            </div>
            <div className="tm-trip-stats">
              {stats.map((s) =>
              <div className="tm-stat" key={s.lbl}>
                  <span className="tm-stat-lbl">{s.lbl}</span>
                  <span className={"tm-stat-val" + (s.acc ? " acc" : "")}>{s.val}</span>
                  <span className="tm-stat-sub">{s.sub}</span>
                </div>
              )}
            </div>
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