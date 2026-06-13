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
  {
    q: ["Если бы, Маш, ты дала бы нам право выбора, да, и мы бы выбирали — ну, во-первых, мы бы тут вообще очень долго выбирали, и, короче, на выходе все парни согласились бы, чтобы мы никогда бы не приехали сюда. И огромное спасибо, что мы здесь. Просто это что-то невероятное!"],
    nm: "Александр Волик", rl: "Участник путешествия", av: images.alex, pos: "50% 24%", stars: 5 },
  {
    q: [
    "Мы доверились тебе полностью, не зная ничего: куда мы едем и чего нам ждать. Вложенные тобою силы, ум, чуткость, пронзительность, твой профессионализм, а самое главное — твоя душа чувствовались на протяжении всего путешествия с самого начала.",
    "Хочется от всей души выразить тебе благодарность за то, что ты сделала для нас. Путешествие с тобой — это тотальное доверие и расслабление. Всегда знаешь, что за тебя наперёд продумано и запланировано абсолютно всё. Любые пожелания моментально, а чаще наперёд уже продуманы и решены. Это одно из лучших путешествий, сделанных тобой для меня.",
    "Ты надёжный друг, партнёр и близкий человек. Спасибо тебе, Маша, большое."],

    nm: "Дамир Агалямзянов", rl: "Участник путешествия", av: images.damir, pos: "36% 52%", stars: 5 }];


  const initials = (nm) => nm.split(" ").slice(0, 2).map((w) => w[0]).join("");

  return (
    <section className="tm-section tight" id="testimonials">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <span className="eyebrow">Отзывы участников</span>
          </div>
        </Reveal>
        <div className="tm-quotes-stack">
          {items.map((t, i) =>
          <Reveal key={i} delay={i * 120} y={28}>
              <div className="tm-quote-card wide">
                <div className="tm-stars">{"★".repeat(t.stars)}</div>
                <div className="q">
                  {t.q.map((p, j) =>
                  <p key={j}>{j === 0 ? "«" : ""}{p}{j === t.q.length - 1 ? "»" : ""}</p>
                  )}
                </div>
                <div className="who">
                  <span className="tm-avatar lg" style={{ backgroundImage: `url("${t.av}")`, backgroundPosition: t.pos }} />
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
  // Real YouTube Shorts — Маша рассказывает о трипе (3 серии) и отзывы участников, замиксованы.
  const vids = [
  { id: "skWZ53_y6Es", tag: "Серия 01", kind: "story" },
  { id: "kMlYk1leoHY", tag: "Отзыв", kind: "review" },
  { id: "BOdRAAIW4x4", tag: "Серия 02", kind: "story" },
  { id: "GGy57vjOIkY", tag: "Отзыв", kind: "review" },
  { id: "ssudbcPZvFE", tag: "Серия 03", kind: "story" },
  { id: "ssudbcPZvFE", tag: "Отзыв", kind: "review" }];


  const [active, setActive] = React.useState(() => ({}));

  return (
    <section className="tm-section tight" id="who">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <h2 className="tm-h2">Со мной путешествуют</h2>
          </div>
        </Reveal>
        <div className="tm-shorts">
          {vids.map((v, i) =>
          <Reveal key={i} delay={i * 80} y={24}>
              <div className="tm-short">
                {active[i] ?
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&playsinline=1&rel=0`}
                  title={v.tag}
                  loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen /> :


                <button className="tm-short-face" onClick={() => setActive((a) => ({ ...a, [i]: true }))} aria-label={`Смотреть: ${v.tag}`}>
                    <span className="thumb" style={{ backgroundImage: `url("https://i.ytimg.com/vi/${v.id}/hqdefault.jpg")` }} />
                    <span className={"tag" + (v.kind === "review" ? " review" : "")}>{v.tag}</span>
                    <span className="play">
                      <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 3.5 L16 10 L5 16.5 Z" /></svg>
                    </span>
                  </button>
                }
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { TMEpisodes, TMTestimonials, TMWhoTravels });