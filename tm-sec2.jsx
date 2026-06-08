// tm-sec2.jsx — Story/mystery, Concept big-quote, Route (blur reveal unlock)

function TMStory() {
  return (
    <section className="tm-section tm-story" id="story">
      <div className="tm-wrap">
        <div className="tm-twocol tm-twocol--legend">
          <Reveal>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>Легенда</span>
              <h2 className="tm-h1">Есть круг людей,<br />которые хранят<br /><span className="gold-b">места силы.</span></h2>
            </div>
          </Reveal>
          <Reveal delay={180} y={28}>
            <div className="tm-story-card tm-narrative">
              <p>Существует негласный орден людей, которые из поколения в поколение хранят места силы на планете. Не храмы, не города, а места животворящие, где мир ещё не тронут.</p>
              <p>Раз в несколько десятилетий они выбирают новых хранителей и ведут их по маршруту посвящения.</p>
              <p>Вы получили <span className="accent">приглашение</span>. Маршрут открывается шаг за шагом.</p>
            </div>
          </Reveal>
        </div>
      </div>
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
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = (i) => setOpen((prev) => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  const items = [
  { t: "Полёт на вертолёте", d: "Над местами, куда не доезжают экскурсии.", img: images.ep2 },
  { t: "Квест с артефактами", d: "Загадки, которые ведут к следующей точке.", img: images.val4 },
  { t: "Морские прогулки", d: "Тихие бухты и встречи с океаном.", img: images.val1 },
  { t: "Флора и фауна", d: "Дикая природа без барьеров и толпы.", img: images.ep3 },
  { t: "Культура и люди", d: "Жизнь местных, а не витрина для туристов.", img: images.ep1 },
  { t: "Неочевидные маршруты", d: "Составлены вместе с локальными экспертами.", img: images.final }];

  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3);

  const stageRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const [lines, setLines] = React.useState([]);
  const [dim, setDim] = React.useState({ w: 0, h: 0 });

  const compute = React.useCallback(() => {
    const stage = stageRef.current, map = mapRef.current;
    if (!stage || !map) return;
    const sb = stage.getBoundingClientRect();
    if (sb.width < 760) { setLines([]); setDim({ w: sb.width, h: sb.height }); return; }
    const mb = map.getBoundingClientRect();
    const cx = mb.left + mb.width / 2 - sb.left;
    const cy = mb.top + mb.height / 2 - sb.top;
    const ls = cardRefs.current.map((el) => {
      if (!el) return null;
      const b = el.getBoundingClientRect();
      const cap = el.querySelector("figcaption");
      const cb = cap ? cap.getBoundingClientRect() : b;
      const isLeft = b.left + b.width / 2 < sb.left + sb.width / 2;
      const x = (isLeft ? b.right : b.left) - sb.left;
      const y = cb.top + cb.height / 2 - sb.top;
      return { x, y, cx, cy };
    }).filter(Boolean);
    setDim({ w: sb.width, h: sb.height });
    setLines(ls);
  }, []);

  React.useEffect(() => {
    compute();
    const ts = [setTimeout(compute, 120), setTimeout(compute, 340), setTimeout(compute, 640)];
    window.addEventListener("resize", compute);
    return () => {ts.forEach(clearTimeout);window.removeEventListener("resize", compute);};
  }, [compute, open]);

  const setCardRef = (i) => (el) => {cardRefs.current[i] = el;};

  const renderCard = (it, idx) =>
  <figure
    className={"tm-rv-card" + (open.has(idx) ? " open" : "")}
    key={idx}
    ref={setCardRef(idx)}
    onClick={() => toggle(idx)}>

      <div className="ph" style={{ backgroundImage: `url(${it.img})` }} />
      <figcaption>
        <div className="tx">
          <div className="t">{it.t}</div>
          <div className="d">{it.d}</div>
        </div>
        <span className="ic" aria-hidden="true" />
      </figcaption>
    </figure>;


  return (
    <section className="tm-section tm-route" id="route">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <span className="tm-block-tag">Маршрут</span>
            <p className="tm-rv-lead">Нажми на впечатление&nbsp;— и откроется кадр из прошлых путешествий.</p>
          </div>
        </Reveal>

        <Reveal y={28}>
          <div className="tm-rv-stage" ref={stageRef}>
            <svg className="tm-conn" width={dim.w} height={dim.h} viewBox={`0 0 ${dim.w} ${dim.h}`} preserveAspectRatio="none" aria-hidden="true">
              {lines.map((l, i) =>
              <g key={i}>
                  <line x1={l.x} y1={l.y} x2={l.cx} y2={l.cy} />
                  <circle cx={l.x} cy={l.y} r="3" />
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
          <p className="tm-map-cap">Латинская Америка — наш регион. Точные точки маршрута остаются сюрпризом до старта.</p>
          <div className="tm-rv-actions">
            <a className="btn btn-primary" href="#form">Я в теме <span className="arr">→</span></a>
          </div>
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
        <div className="tm-twocol tm-twocol--zachem">
          <Reveal>
            <div>
              <span className="tm-block-tag" style={{ marginBottom: 18 }}>Зачем это нужно</span>
              <h2 className="tm-h2" style={{ marginTop: 14 }}>Сюрприз-трип&nbsp;— это возможность путешествовать <span className="gold-b">как наши предки.</span></h2>
            </div>
          </Reveal>
          <Reveal delay={180} y={28}>
            <div className="tm-story-card tm-narrative">
              <p>Наши предки путешествовали, не зная, что впереди. Сейчас у нас есть Google&nbsp;Maps и Mastercard.</p>
              <p>Когда был последний раз, когда ты отправился в приключение? Пакуй чемодан&nbsp;— а я возьму на себя всё остальное.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}