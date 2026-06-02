// tm-sec2.jsx — Story/mystery, Concept big-quote, Route (blur reveal unlock)

function TMStory() {
  return (
    <section className="tm-section tm-story" id="story">
      <div className="tm-wrap">
        <div className="tm-route-grid" style={{ gridTemplateColumns: "1fr 1.1fr" }}>
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

function TMRoute() {
  const [locked, setLocked] = React.useState(true);

  const items = [
  { t: "Полёт на вертолёте", d: "Над местами, куда не доезжают экскурсии.", secret: false },
  { t: "Квест с артефактами", d: "Загадки, которые ведут к следующей точке маршрута.", secret: false },
  { t: "Морские прогулки на комфортных лодках", d: "Тихие бухты и встречи с океаном.", secret: true },
  { t: "Знакомство с флорой и фауной", d: "Дикая природа без барьеров и толпы.", secret: true },
  { t: "Аутентичный опыт и культура", d: "Прикосновение к жизни местных, а не витрина для туристов.", secret: true },
  { t: "Неочевидные маршруты", d: "Разработаны вместе с локальными экспертами.", secret: true }];


  // map node coordinates on the 360x560 viewBox
  const nodes = [
  { x: 140, y: 60, label: "Старт", secret: false },
  { x: 105, y: 180, label: "Точка II", secret: false },
  { x: 240, y: 205, label: "?", secret: true },
  { x: 200, y: 300, label: "?", secret: true },
  { x: 150, y: 400, label: "?", secret: true },
  { x: 100, y: 495, label: "?", secret: true }];


  return (
    <section className="tm-section tm-route" id="route">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <span className="tm-block-tag">Маршрут</span>
            <h2 className="tm-h1" style={{ marginTop: 14 }}>Маршрут открывается<br />по мере прохождения.</h2>
          </div>
        </Reveal>

        <div className="tm-route-grid">
          <Reveal y={28}>
            <div className="tm-map-stage">
              <LatAmMap nodes={nodes} locked={locked} />
            </div>
          </Reveal>

          <Reveal delay={150} y={28}>
            <div>
              <div className={"tm-route-list" + (locked ? " locked" : "")}>
                {items.map((it, i) =>
                <div className={"tm-route-item" + (it.secret ? " secret" : "")} key={i}>
                    <span className="n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="t">{it.t}</div>
                      <div className="d">{it.d}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="tm-unlock-bar">
                <span className="txt">
                  {locked ?
                  "Ты можешь оставить план тайной — или разблокировать экспириенс целиком." :
                  "Маршрут раскрыт. Но самое интересное всё равно случится на месте."}
                </span>
                <button className={"btn " + (locked ? "btn-primary" : "btn-ghost")} onClick={() => setLocked((v) => !v)}>
                  {locked ? <>Разблокировать <span className="arr">→</span></> : "Скрыть снова"}
                </button>
              </div>

              <div style={{ marginTop: 28 }}>
                <a className="btn btn-ghost" href="#form">Запишите меня <span className="arr">→</span></a>
              </div>
            </div>
          </Reveal>
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
        <div className="tm-route-grid" style={{ gridTemplateColumns: "1.1fr 1fr", alignItems: "center" }}>
          <Reveal>
            <div>
              <span className="tm-block-tag" style={{ marginBottom: 18 }}>Зачем это нужно</span>
              <h2 className="tm-h1" style={{ marginTop: 14 }}>Путешествовать<br /><span className="gold-b">как наши предки.</span></h2>
            </div>
          </Reveal>
          <Reveal delay={180} y={28}>
            <div className="tm-story-card tm-narrative">
              <p><b style={{ color: "var(--text)", fontWeight: 700 }}>Сюрприз-трип — это возможность путешествовать как наши предки.</b></p>
              <p>Наши предки отправлялись в путь, не зная, что впереди. Сейчас у нас есть Google&nbsp;Maps и Mastercard.</p>
              <p>Когда ты последний раз отправлялся в настоящее приключение? Пакуй чемодан&nbsp;— а я возьму на себя всё остальное.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}