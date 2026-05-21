// guide.jsx — "Для кого этот тур" + portrait of Masha (founder)

function GuideSection({ images }) {
  const traits = [
    { eyebrow: "I", title: "Любопытные", body: "Те, кто с детским азартом открывает новые места и людей." },
    { eyebrow: "II", title: "Готовые довериться", body: "Никаких чек-листов и туристических троп — только тщательно подобранный сценарий." },
    { eyebrow: "III", title: "В поиске круга", body: "Хотят оказаться в группе, где с каждым интересно говорить дольше одного вечера." },
  ];

  return (
    <section className="guide-section" id="guide">
      {/* atmospheric layers */}
      <div className="layer" style={{ opacity: .2 }}>
        <Parallax speed={-0.06} style={{ position: "absolute", left: "-10%", top: "8%", width: "26vw", height: "60vh", filter: "blur(8px)" }}>
          <Monstera fill="#050C09" />
        </Parallax>
        <Parallax speed={-0.04} style={{ position: "absolute", right: "-12%", bottom: "10%", width: "28vw", height: "55vh", filter: "blur(8px)" }}>
          <Monstera fill="#050C09" flip />
        </Parallax>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* part 1 — for whom */}
        <div style={{ textAlign: "center" }}>
          <Reveal>
            <div className="section-eyebrow">
              <span className="line" />
              <span className="eyebrow">Для кого · Состав каравана</span>
              <span className="line right" />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="section-title">
              Для <em>любителей</em> приключений<br/>с детским любопытством.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <p className="section-intro">
              Маша лично собеседует каждого&nbsp;— чтобы группа сложилась из тех, кому будет
              одинаково тепло и в джунглях, и за финальным гала-ужином.
            </p>
          </Reveal>
        </div>

        {/* trait triptych */}
        <div className="trait-row">
          {traits.map((t, i) => (
            <Reveal key={t.eyebrow} delay={i * 160} y={32}>
              <div className="trait">
                <div className="trait-num">{t.eyebrow}</div>
                <h4 className="trait-title">{t.title}</h4>
                <p className="trait-body">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* gold separator */}
        <div className="guide-divider">
          <span className="dash" />
          <span className="ornament">✦</span>
          <span className="dash" />
        </div>

        {/* part 2 — Masha bio */}
        <div className="bio-block">
          <Reveal y={48}>
            <div className="bio-portrait">
              <img src={images.masha} alt="Маша Брагина — основатель Bragina" />
              <div className="bio-caption">
                <span className="bio-cap-eyebrow">Подпись на полях</span>
                <span className="bio-cap-name">«Севилья, апрель 2025»</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} y={32}>
            <div className="bio-text">
              <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ width: 28, height: 1, background: "var(--gold)" }} />
                Кто за этим стоит
              </div>
              <h3 className="bio-name">
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>Маша</span> Брагина
              </h3>
              <div className="bio-role">Тревел-дизайнер · Наставник каравана</div>

              <p className="bio-body">
                Организую путешествия с <span className="bio-num">2013</span> года&nbsp;— индивидуальные туры,
                групповые экспедиции и нестандартные форматы, которых нет ни в одном агентстве.
              </p>
              <p className="bio-body">
                Свободно говорю на четырёх языках: <em>английский</em>, <em>испанский</em>,
                <em> итальянский</em>, <em>португальский</em>&nbsp;— потому что в Латинской Америке
                лучшие сюжеты живут на местных языках.
              </p>

              <div className="bio-stats">
                <div className="bio-stat">
                  <span className="bio-stat-num">13</span>
                  <span className="bio-stat-lbl">лет&nbsp;в&nbsp;ремесле</span>
                </div>
                <div className="bio-stat">
                  <span className="bio-stat-num">07</span>
                  <span className="bio-stat-lbl">тайных&nbsp;экспедиций</span>
                </div>
                <div className="bio-stat">
                  <span className="bio-stat-num">04</span>
                  <span className="bio-stat-lbl">языка</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.GuideSection = GuideSection;
