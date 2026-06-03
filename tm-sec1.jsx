// tm-sec1.jsx — Nav, Hero, Trip details (plashki), Participant form

function TMNav() {
  const y = useScrollY();
  const scrolled = y > 60;
  return (
    <nav className={"tm-nav" + (scrolled ? " scrolled" : "")}>
      <a className="tm-logo" href="#top">
        <span className="mark" />
        <span>
          Travel Mary
          <small>Surprise Trip</small>
        </span>
      </a>
      <div className="tm-nav-links">
        <a className="hide-sm" href="#route">Маршрут</a>
        <a className="hide-sm" href="#process">Как это устроено</a>
        <a className="hide-sm" href="#price">Стоимость</a>
        <a className="hide-sm" href="#about">Кто я</a>
        <a className="btn btn-ghost" href="#form" style={{ padding: "11px 20px" }}>Я в теме <span className="arr">→</span></a>
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
      <div className="layer" style={{ transform: `translate3d(0, ${y * 0.5}px, 0)`, opacity: .8 }}>
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
            <a className="btn btn-primary btn-lg" href="#form">Я в теме <span className="arr">→</span></a>
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
  { k: "Даты", v: "25 янв — 8 фев", sub: "2027 года" },
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

function TMForm() {
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Укажите корректный телефон";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Укажите корректный e-mail";
    setErr(next);
    if (Object.keys(next).length === 0) {
      const msg = "Привет, Маша! Хочу участвовать в сюрприз-туре! Вышли мне пожалуйста анкету участника.";
      window.open("https://wa.me/79655004984?text=" + encodeURIComponent(msg), "_blank", "noopener");
      setSent(true);
    }
  };

  return (
    <section className="tm-section tight" id="form">
      <div className="tm-narrow">
        <Reveal>
          <div className="tm-sec-head center">
            <span className="eyebrow">Форма участника</span>
            <h2 className="tm-h2">Оставьте свои контакты,<br />чтобы узнать подробности</h2>
          </div>
        </Reveal>

        <Reveal delay={150} y={28}>
          <div className="tm-form-card">
            {sent ?
            <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 20px", borderRadius: "50%", border: "1px solid var(--gold)", display: "grid", placeItems: "center", color: "var(--gold)", fontSize: 24 }}>✓</div>
                <h3 className="tm-h3" style={{ marginBottom: 10 }}>Открываю WhatsApp…</h3>
                <p className="tm-body" style={{ margin: 0 }}>Отправь готовое сообщение — и я пришлю тебе анкету участника лично. Если чат не открылся, напиши мне на +7 965 500 49 84.</p>
              </div> :

            <form className="tm-form-grid" onSubmit={submit} noValidate>
                <div className="tm-field">
                  <label htmlFor="ph">Телефон</label>
                  <input id="ph" className={"tm-input" + (err.phone ? " err" : "")} type="tel"
                placeholder="+7 ___ ___ __ __" value={phone}
                onChange={(e) => setPhone(e.target.value)} />
                  <span className="hint">{err.phone || ""}</span>
                </div>
                <div className="tm-field">
                  <label htmlFor="em">Email</label>
                  <input id="em" className={"tm-input" + (err.email ? " err" : "")} type="email"
                placeholder="you@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)} />
                  <span className="hint">{err.email || ""}</span>
                </div>
                <button className="btn btn-primary tm-form-submit" type="submit" style={{ height: 52 }}>
                  Я в теме <span className="arr">→</span>
                </button>
              </form>
            }
          </div>
        </Reveal>
      </div>
    </section>);

}

Object.assign(window, { TMNav, TMHero, TMDetails, TMForm });