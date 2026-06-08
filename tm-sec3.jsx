// tm-sec3.jsx — Previous episodes (videos), Testimonials, Who travels with me

const PlayIcon = () =>
<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 3.5 L16 10 L5 16.5 Z" /></svg>;


function TMEpisodes({ images }) {
  const eps = [
  { ep: "Серия 01", ti: "Африка, которую не ждали", thumb: images.ep1 },
  { ep: "Серия 02", ti: "Пустыня под звёздами", thumb: images.ep2 },
  { ep: "Серия 03", ti: "Океан и киты", thumb: images.ep3 }];

  return (
    <section className="tm-section" id="episodes">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <span className="tm-block-tag">В предыдущих сериях</span>
            <h2 className="tm-h1" style={{ marginTop: 14 }}>Как это было<br />в прошлом сезоне.</h2>
          </div>
        </Reveal>
        <div className="tm-grid-3">
          {eps.map((e, i) =>
          <Reveal key={i} delay={i * 130} y={28}>
              <a className="tm-media" href="#" onClick={(ev) => ev.preventDefault()}>
                <div className="thumb" style={{ backgroundImage: `url("${e.thumb}")` }} />
                <div className="play"><PlayIcon /></div>
                <div className="meta">
                  <div className="ep">{e.ep}</div>
                  <div className="ti">{e.ti}</div>
                </div>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function TMTestimonials({ images }) {
  const items = [
  { q: "Цитата участника 1", nm: "Участник 1", rl: "Сезон I", av: images.av1, stars: 5 },
  { q: "Цитата участника 2", nm: "Участник 2", rl: "Сезон I", av: images.av2, stars: 5 },
  { q: "Цитата участника 3", nm: "Участник 3", rl: "Сезон I", av: images.av3, stars: 5 }];

  return (
    <section className="tm-section tight" id="testimonials">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <span className="eyebrow">Отзывы участников</span>
          </div>
        </Reveal>
        <div className="tm-grid-3">
          {items.map((t, i) =>
          <Reveal key={i} delay={i * 120} y={28}>
              <div className="tm-quote-card">
                <div className="tm-stars">{"★".repeat(t.stars)}</div>
                <p className="q">«{t.q}»</p>
                <div className="who">
                  <span className="tm-avatar" style={{ backgroundImage: `url("${t.av}")` }} />
                  <div>
                    <div className="nm">{t.nm}</div>
                    <div className="rl">{t.rl}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
        <Reveal delay={220}>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a className="btn btn-primary" href="#form">Присоединиться <span className="arr">→</span></a>
          </div>
        </Reveal>
      </div>
    </section>);

}

function TMWhoTravels({ images }) {
  // mix of video placeholders + screenshot placeholders
  const tiles = [
  { kind: "video", thumb: images.ep3, label: "Видеоотзыв · Маврикий" },
  { kind: "photo", thumb: images.val1, label: "Кадр участника" },
  { kind: "video", thumb: images.ep1, label: "Видеоотзыв · сафари" },
  { kind: "photo", thumb: images.val4, label: "Гала-ужин" }];

  return (
    <section className="tm-section tight" id="who">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <h2 className="tm-h2">Со мной путешествуют</h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="tm-who-grid">
          {tiles.map((t, i) =>
          <Reveal key={i} delay={i * 100} y={24}>
              <div className="tm-media" style={{ aspectRatio: "3/4" }}>
                <div className="thumb" style={{ backgroundImage: `url("${t.thumb}")`, aspectRatio: "3/4", height: "100%" }} />
                {t.kind === "video" && <div className="play"><PlayIcon /></div>}
                <div className="meta"><div className="ep">{t.kind === "video" ? "Видео" : "Фото"}</div><div className="ti" style={{ fontSize: 14 }}>{t.label}</div></div>
              </div>
            </Reveal>
          )}
        </div>
        <style>{`@media (max-width: 760px){ .tm-who-grid { grid-template-columns: 1fr !important; gap: 16px !important; max-width: 460px; margin: 0 auto; } }`}</style>
      </div>
    </section>);

}

Object.assign(window, { TMEpisodes, TMTestimonials, TMWhoTravels });