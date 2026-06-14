// tm-sec3.jsx — Previous episodes (videos), Testimonials, Who travels with me

const PlayIcon = () =>
<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 3.5 L16 10 L5 16.5 Z" /></svg>;


function TMEpisodes() {
  // Маша рассказывает о трипе — реальные серии (YouTube Shorts)
  const vids = [
  { id: "skWZ53_y6Es", tag: "Серия 01" },
  { id: "BOdRAAIW4x4", tag: "Серия 02" },
  { id: "DiXG_ud4K5s", tag: "Серия 03" }];


  const [active, setActive] = React.useState(() => ({}));

  return (
    <section className="tm-section" id="episodes">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <span className="eyebrow">В предыдущих сериях</span>
          </div>
        </Reveal>
        <div className="tm-shorts">
          {vids.map((v, i) =>
          <Reveal key={i} delay={i * 110} y={28}>
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
                    <span className="tag">{v.tag}</span>
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
  // Реальные отзывы участников (YouTube Shorts)
  const vids = [
  { id: "kMlYk1leoHY", tag: "Отзыв", kind: "review" },
  { id: "GGy57vjOIkY", tag: "Отзыв", kind: "review" },
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

Object.assign(window, { TMEpisodes, TMTestimonials, TMWhoTravels, TMBlog });

function TMBlog() {
  // Стена реальных отзывов: скриншоты из соцсетей/мессенджеров + видео-отзывы (YouTube)
  const items = [
  { type: "img", src: "images/blog/blog-polli.jpg", alt: "Отзыв @polli_chu — путешествие по Европе" },
  { type: "img", src: "images/blog/blog-msg-christmas.jpg", alt: "Отзыв об эльзасском рождестве" },
  { type: "vid", id: "kMlYk1leoHY" },
  { type: "img", src: "images/blog/blog-lily.jpg", alt: "Отзыв @lily.aspen — тур-сюрприз" },
  { type: "img", src: "images/blog/blog-msg-plan.jpg", alt: "Отзыв — план передвижений по часам" },
  { type: "vid", id: "GGy57vjOIkY" },
  { type: "img", src: "images/blog/blog-maxim.jpg", alt: "Отзыв @maxim_gilyov — Париж" },
  { type: "img", src: "images/blog/blog-comfort.jpg", alt: "Отзыв об организации поездки" },
  { type: "vid", id: "ssudbcPZvFE" },
  { type: "img", src: "images/blog/blog-tikaram.jpg", alt: "Отзыв @t.tikaram — Гранада" },
  { type: "img", src: "images/blog/blog-msg-moscow.jpg", alt: "Отзыв — вернулись в Москву" },
  { type: "img", src: "images/blog/blog-msg-italy.jpg", alt: "Отзыв о поездке в Италию" }];


  const [active, setActive] = React.useState(() => ({}));
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {if (e.key === "Escape") setLightbox(null);};
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="tm-section" id="blog">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <h2 className="tm-h2">Со мной путешествуют</h2>
          </div>
        </Reveal>
        <Reveal delay={120} y={24}>
          <div className="tm-blog">
            {items.map((it, i) =>
            <div className="tm-blog-item" key={i}>
                {it.type === "img" ?
              <img src={it.src} alt={it.alt} loading="lazy" onClick={() => setLightbox(it.src)} /> :

              <div className="tm-short tm-blog-video">
                    {active[i] ?
                <iframe
                  src={`https://www.youtube.com/embed/${it.id}?autoplay=1&playsinline=1&rel=0`}
                  title="Видео-отзыв"
                  loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen /> :

                <button className="tm-short-face" onClick={() => setActive((a) => ({ ...a, [i]: true }))} aria-label="Смотреть видео-отзыв">
                        <span className="thumb" style={{ backgroundImage: `url("https://i.ytimg.com/vi/${it.id}/hqdefault.jpg")` }} />
                        <span className="tag review">Видео-отзыв</span>
                        <span className="play">
                          <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 3.5 L16 10 L5 16.5 Z" /></svg>
                        </span>
                      </button>
                }
                  </div>
              }
              </div>
            )}
          </div>
        </Reveal>
      </div>
      {lightbox &&
      <div className="tm-blog-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <img src={lightbox} alt="" />
        </div>
      }
    </section>);

}