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
  // Единый список карточек: видео — текст — видео — текст — видео
  const cards = [
  { type: "video", id: "kMlYk1leoHY" },
  {
    type: "text",
    q: ["Если бы, Маш, ты дала бы нам право выбора, да, и мы бы выбирали — ну, во-первых, мы бы тут вообще очень долго выбирали, и, короче, на выходе все парни согласились бы, чтобы мы никогда бы не приехали сюда. И огромное спасибо, что мы здесь. Просто это что-то невероятное!"],
    nm: "Александр Волик", rl: "Участник путешествия", av: images.alex, pos: "50% 24%", stars: 5 },
  { type: "video", id: "GGy57vjOIkY" },
  {
    type: "text",
    q: [
    "Мы доверились тебе полностью, не зная ничего: куда мы едем и чего нам ждать. Вложенные тобою силы, ум, чуткость, пронзительность, твой профессионализм, а самое главное — твоя душа чувствовались на протяжении всего путешествия с самого начала.",
    "Хочется от всей души выразить тебе благодарность за то, что ты сделала для нас. Путешествие с тобой — это тотальное доверие и расслабление. Всегда знаешь, что за тебя наперёд продумано и запланировано абсолютно всё. Любые пожелания моментально, а чаще наперёд уже продуманы и решены. Это одно из лучших путешествий, сделанных тобой для меня.",
    "Ты надёжный друг, партнёр и близкий человек. Спасибо тебе, Маша, большое."],

    nm: "Дамир Агалямзянов", rl: "Участник путешествия", av: images.damir, pos: "36% 52%", stars: 5 },
  { type: "video", id: "ssudbcPZvFE" }];


  const [active, setActive] = React.useState(() => ({}));

  return (
    <section className="tm-section tight" id="testimonials">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <h2 className="tm-h2">Отзывы участников</h2>
          </div>
        </Reveal>
        <Reveal delay={120} y={24}>
          <div className="tm-treel">
            {cards.map((c, i) =>
            c.type === "video" ?
            <div className="tm-short" key={i}>
                  {active[i] ?
              <iframe
                src={`https://www.youtube.com/embed/${c.id}?autoplay=1&playsinline=1&rel=0`}
                title="Видео-отзыв"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen /> :

              <button className="tm-short-face" onClick={() => setActive((a) => ({ ...a, [i]: true }))} aria-label="Смотреть видео-отзыв">
                      <span className="thumb" style={{ backgroundImage: `url("https://i.ytimg.com/vi/${c.id}/hqdefault.jpg")` }} />
                      <span className="tag review">Видео-отзыв</span>
                      <span className="play">
                        <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 3.5 L16 10 L5 16.5 Z" /></svg>
                      </span>
                    </button>
              }
                </div> :

            <div className="tm-tcard-text" key={i}>
                  <div className="tm-stars">{"★".repeat(c.stars)}</div>
                  <div className="q">
                    {c.q.map((p, j) =>
                <p key={j}>{j === 0 ? "«" : ""}{p}{j === c.q.length - 1 ? "»" : ""}</p>
                )}
                  </div>
                  <div className="who">
                    <span className="tm-avatar lg" style={{ backgroundImage: `url("${c.av}")`, backgroundPosition: c.pos }} />
                    <div>
                      <div className="nm">{c.nm}</div>
                      <div className="rl">{c.rl}</div>
                    </div>
                  </div>
                </div>
            )}
          </div>
        </Reveal>
        <Reveal delay={220}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a className="btn btn-primary" href={window.TM_WA} target="_blank" rel="noopener noreferrer">Присоединиться <span className="arr">→</span></a>
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
  // Стена реальных отзывов: скриншоты из соцсетей и мессенджеров
  const items = [
  { src: "images/blog/blog-polli.jpg", alt: "Отзыв @polli_chu — путешествие по Европе" },
  { src: "images/blog/blog-msg-christmas.jpg", alt: "Отзыв об эльзасском рождестве" },
  { src: "images/blog/blog-lily.jpg", alt: "Отзыв @lily.aspen — тур-сюрприз" },
  { src: "images/blog/blog-msg-plan.jpg", alt: "Отзыв — план передвижений по часам" },
  { src: "images/blog/blog-maxim.jpg", alt: "Отзыв @maxim_gilyov — Париж" },
  { src: "images/blog/blog-comfort.jpg", alt: "Отзыв об организации поездки" },
  { src: "images/blog/blog-tikaram.jpg", alt: "Отзыв @t.tikaram — Гранада" },
  { src: "images/blog/blog-msg-moscow.jpg", alt: "Отзыв — вернулись в Москву" },
  { src: "images/blog/blog-msg-italy.jpg", alt: "Отзыв о поездке в Италию" }];


  const [idx, setIdx] = React.useState(null);
  const n = items.length;
  const open = idx !== null;
  const go = React.useCallback((d) => setIdx((i) => i === null ? i : (i + d + n) % n), [n]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

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
                <img src={it.src} alt={it.alt} loading="lazy" onClick={() => setIdx(i)} />
              </div>
            )}
          </div>
        </Reveal>
      </div>
      {open &&
      <div className="tm-blog-lightbox" onClick={() => setIdx(null)} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={() => setIdx(null)} aria-label="Закрыть">✕</button>
          <button className="lb-nav prev" onClick={(e) => {e.stopPropagation();go(-1);}} aria-label="Назад">‹</button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={items[idx].src} alt={items[idx].alt} />
          </figure>
          <button className="lb-nav next" onClick={(e) => {e.stopPropagation();go(1);}} aria-label="Вперёд">›</button>
          <span className="lb-count">{idx + 1} / {n}</span>
        </div>
      }
    </section>);

}