// tm-sec2.jsx — Story/mystery, Concept big-quote, Route (blur reveal unlock)

function TMStory({ images = {} }) {
  const [zoom, setZoom] = React.useState(false);
  return (
    <section className="tm-section tm-story" id="story">
      <div className="tm-wrap">
        <Reveal y={22}>
          <header className="tm-story-head">
            <span className="eyebrow">Альтиплано · Анды</span>
            <h2 className="tm-h1">Народ <span className="gold-b">аймара</span></h2>
          </header>
        </Reveal>
        <div className="tm-story-feature">
          <Reveal y={28}>
            <figure className="tm-story-photo" onClick={() => setZoom(true)} title="Нажмите, чтобы рассмотреть">
              <img src={images.aymara} alt="Народ аймара в Андах" loading="lazy" />
              <span className="tm-story-zoomhint" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                Рассмотреть
              </span>
              <figcaption>Народ аймара · Альтиплано Анд</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={160} y={28}>
            <div className="tm-narrative tm-story-body">
              <p>Высоко в Андах живёт народ аймара. Тысячи лет они берегут священное знание о местах силы: точках на земле, где мир сохраняет свой первозданный облик. Это знание передаётся от хранителя к хранителю. Раз в несколько десятилетий аймара берут с собой избранных и ведут их по маршруту посвящения.</p>
              <p className="tm-story-accent">И именно тебе предстоит пройти по следам древнего народа и прочувствовать сакральную силу природы.</p>
            </div>
          </Reveal>
        </div>
      </div>
      {zoom &&
      <div className="tm-lightbox" onClick={() => setZoom(false)}>
          <button className="tm-lightbox-close" aria-label="Закрыть" onClick={() => setZoom(false)}>×</button>
          <img src={images.aymara} alt="Народ аймара в Андах" onClick={(e) => e.stopPropagation()} />
          <span className="tm-lightbox-cap">Народ аймара · Альтиплано Анд</span>
        </div>
      }
    </section>);

}

function TMConcept({ images }) {
  return (
    <section className="tm-section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="layer" style={{ opacity: .14 }}>
        <Parallax speed={-0.05} style={{ position: "absolute", right: "-8%", top: "0%", width: "30vw", height: "80vh", filter: "blur(10px)" }}>
          <Monstera fill="#0C1812" flip />
        </Parallax>
      </div>
      <div className="tm-narrow" style={{ position: "relative", zIndex: 5 }}>
        <Reveal y={28}>
          <p className="tm-bigquote">
            Путешествовать не как турист,<br />а как <em>первооткрыватель</em> —<br />в неизвестность, налегке<br />и по-настоящему свободным.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="tm-lead" style={{ textAlign: "center", marginTop: 36, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Сюрприз-трип — это про глубину переживания, а не про галочки в списке достопримечательностей.
          </p>
        </Reveal>
      </div>
    </section>);

}

function TMRoute({ images = {} }) {
  const [locked, setLocked] = React.useState(true);

  const items = [
  { t: "Полёт на вертолёте", d: "Чтобы увидеть всю красоту с высоты птичьего полёта.", img: images.rHeli, pos: "center 35%" },
  { t: "Квест", d: "Загадки, которые приведут вас к следующей точке.", img: images.rQuest, pos: "center center" },
  { t: "Морские прогулки", d: "Тихие бухты и встречи с океаном.", img: images.rSea, pos: "center 50%" },
  { t: "Знакомство с флорой и фауной", d: "Национальные парки и животные в своей естественной среде обитания.", img: images.rFauna, pos: "center 45%" },
  { t: "Культура и люди", d: "Аутентичный опыт и прикосновение к местным обычаям.", img: images.rPeople, pos: "center 62%" },
  { t: "Неочевидные маршруты", d: "Составленные вместе с местными экспертами.", img: images.rOffbeat, pos: "center 50%" }];

  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3);

  const stageRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const [paths, setPaths] = React.useState([]);
  const [dim, setDim] = React.useState({ w: 0, h: 0 });

  // deterministic pseudo-random per card/seed — stable across renders & widths
  const rnd = (i, n) => {const v = Math.sin(i * 91.7 + n * 13.13) * 43758.5453;return v - Math.floor(v);};

  // The map SVG viewBox is "126 426 204 274". Each card connects to a real, scattered
  // point ON the landmass, expressed in those viewBox coords — so anchors track the map
  // exactly at any desktop width (no melting). Left cards → western points, right → eastern,
  // so leader lines never cross the continent. Order matches card order (top→bottom per col).
  const MAP_VB = { x: 126, y: 426, w: 204, h: 274 };
  const ANCHORS = [
  [151, 452], // 0 · left-top    — Mexico
  [211, 537], // 1 · left-mid    — Ecuador / Peru coast
  [241, 629], // 2 · left-bottom — Chile / Patagonia
  [262, 513], // 3 · right-top   — Venezuela / Guyana
  [285, 566], // 4 · right-mid   — Brazil (east)
  [263, 648]]; // 5 · right-bottom — Argentina


  // organic, hand-drawn-feeling leader: a bowed cubic whose curvature is proportional to
  // the span (so it stays graceful at every width) with a deterministic per-card lean.
  const connect = (sx, sy, ex, ey, seed) => {
    const dx = ex - sx,dy = ey - sy;
    const dist = Math.hypot(dx, dy) || 1;
    const px = -dy / dist,py = dx / dist; // unit perpendicular
    const r1 = rnd(seed, 1),r2 = rnd(seed, 2);
    const bow = dist * (0.10 + r1 * 0.13) * (r2 > 0.5 ? 1 : -1);
    const c1x = sx + dx * 0.36 + px * bow;
    const c1y = sy + dy * 0.36 + py * bow;
    const c2x = sx + dx * 0.68 + px * bow * 0.55;
    const c2y = sy + dy * 0.68 + py * bow * 0.55;
    return `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  };

  const compute = React.useCallback(() => {
    const stage = stageRef.current,map = mapRef.current;
    if (!stage || !map) return;
    const sb = stage.getBoundingClientRect();
    if (sb.width < 760) {setPaths([]);setDim({ w: sb.width, h: sb.height });return;}
    const mb = (map.querySelector("svg") || map).getBoundingClientRect();
    const mapLeft = mb.left - sb.left,mapTop = mb.top - sb.top;
    const mapW = mb.width,mapH = mb.height;
    // map a point in the map's SVG viewBox coords → stage pixel coords (tracks the map at any width)
    const toStage = (vx, vy) => ({
      x: mapLeft + (vx - MAP_VB.x) / MAP_VB.w * mapW,
      y: mapTop + (vy - MAP_VB.y) / MAP_VB.h * mapH });

    const ls = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const b = el.getBoundingClientRect();
      const isLeft = b.left + b.width / 2 < sb.left + sb.width / 2;
      const sx = (isLeft ? b.right : b.left) - sb.left;
      const sy = b.top + b.height / 2 - sb.top;
      const a = ANCHORS[i] || ANCHORS[0];
      const p = toStage(a[0], a[1]);
      return { d: connect(sx, sy, p.x, p.y, i + 1), sx, sy, ex: p.x, ey: p.y };
    }).filter(Boolean);
    setDim({ w: sb.width, h: sb.height });
    setPaths(ls);
  }, []);

  React.useEffect(() => {
    compute();
    const ts = [setTimeout(compute, 120), setTimeout(compute, 340), setTimeout(compute, 640)];
    window.addEventListener("resize", compute);
    return () => {ts.forEach(clearTimeout);window.removeEventListener("resize", compute);};
  }, [compute]);

  const setCardRef = (i) => (el) => {cardRefs.current[i] = el;};

  const renderCard = (it, idx) =>
  <figure className="tm-rv-card" key={idx} ref={setCardRef(idx)}>
      <div className="ph" style={{ backgroundImage: `url("${it.img}")`, backgroundPosition: it.pos || "center" }} />
      <div className="tm-rv-lockhint" aria-hidden="true">
        <span className="lk" />
        <span>Нажми, чтобы узнать</span>
      </div>
      <figcaption>
        <div className="t">{it.t}</div>
        <div className="d">{it.d}</div>
      </figcaption>
    </figure>;


  return (
    <section className="tm-section tm-route" id="route">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <h2 className="tm-h2">Что тебя ждёт</h2>
            <p className="tm-rv-lead">Ты можешь оставить план тайной&nbsp;— или разблокировать экспириенс.</p>
          </div>
        </Reveal>

        <Reveal y={28}>
          <div
            className={"tm-rv-stage" + (locked ? " locked" : " unlocked")}
            ref={stageRef}
            onClick={() => locked && setLocked(false)}>

            <svg className="tm-conn" width={dim.w} height={dim.h} viewBox={`0 0 ${dim.w} ${dim.h}`} preserveAspectRatio="none" aria-hidden="true">
              {paths.map((p, i) =>
              <g key={i}>
                  <path d={p.d} fill="none" />
                  <circle className="src" cx={p.sx} cy={p.sy} r="2.4" />
                  <circle className="dst-ring" cx={p.ex} cy={p.ey} r="4" fill="none" />
                  <circle className="dst" cx={p.ex} cy={p.ey} r="1.9" />
                </g>
              )}
            </svg>

            <div className="tm-rv-col left">
              {leftItems.map((it, i) => renderCard(it, i))}
            </div>

            <div className="tm-rv-mapwrap" ref={mapRef}>
              <LatAmMap />
            </div>

            <div className="tm-rv-col right">
              {rightItems.map((it, i) => renderCard(it, i + 3))}
            </div>
          </div>
        </Reveal>

        <div className="tm-rv-foot">
          <a className="btn btn-primary btn-lg" href={window.TM_WA} target="_blank" rel="noopener noreferrer">Запишите меня <span className="arr">→</span></a>
        </div>
      </div>
    </section>);

}

Object.assign(window, { TMStory, TMConcept, TMRoute, TMAncestors });

function TMAncestors() {
  return (
    <section className="tm-section" id="idea" style={{ position: "relative", overflow: "hidden" }}>
      <div className="layer" style={{ opacity: .12 }}>
        <Parallax speed={-0.04} style={{ position: "absolute", left: "-6%", top: "6%", width: "28vw", height: "78vh", filter: "blur(10px)" }}>
          <Monstera fill="#0C1812" />
        </Parallax>
      </div>
      <div className="tm-wrap" style={{ position: "relative", zIndex: 5 }}>
        <div className="tm-zachem">
          <Reveal>
            <h2 className="tm-h2 tm-zachem-title">Сюрприз-трип&nbsp;— это возможность путешествовать<br /><span className="gold-b">как наши предки.</span></h2>
          </Reveal>
          <Reveal delay={180} y={28}>
            <div className="tm-narrative tm-zachem-body">
              <p className="tm-zachem-lead">Когда-то дорога была неизвестностью. Сейчас же мы привыкли держать все под контролем: планировать путешествия заранее, идти по четко продуманному маршруту.</p>
              <p>Я предлагаю тебе альтернативную реальность&nbsp;— настоящее приключение, где ты, как <span className="gold-b">главный герой из книг Жюля&nbsp;Верна</span>, исследуешь новые земли и удивляешься метаморфозам своего пути.</p>
              <p className="tm-zachem-close">А я, как <em>автор этого шедевра</em>, беру на себя все организационные детали и наполняю этот волшебный путь смыслами.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}