// proof.jsx — Past expeditions + testimonial

function ProofSection({ images }) {
  return (
    <section className="proof-section" id="proof">
      <div className="proof-photo" style={{ backgroundImage: `url("${images.proof}")` }} />

      {/* foreground fern silhouette */}
      <Parallax speed={-0.06} style={{ position: "absolute", left: "-8%", top: "5%", width: "26vw", height: "70vh", filter: "blur(6px)", opacity: .5 }}>
        <Fern fill="#020806" opacity={1} />
      </Parallax>

      <div className="container-narrow" style={{ position: "relative", zIndex: 5 }}>
        <Reveal>
          <div className="section-eyebrow">
            <span className="line" />
            <span className="eyebrow">Доказательства · Прошлые экспедиции</span>
            <span className="line right" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="section-title" style={{ marginBottom: 64 }}>
            <em>Март 2026.</em><br/>
            Они думали,<br/>что летят в Индонезию.
          </h2>
        </Reveal>

        <Reveal delay={260}>
          <div className="log-card">
            <div>
              <div style={{
                fontFamily: "var(--font-caps)", fontSize: 10, letterSpacing: ".36em",
                color: "var(--gold)", marginBottom: 14,
              }}>Бортовой журнал № 07</div>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: 64,
                color: "var(--gold-bright)", lineHeight: 1, fontStyle: "italic",
              }}>14<span style={{ fontSize: 28, color: "var(--bone-dim)" }}>&nbsp;дней</span></div>
              <div style={{ marginTop: 20, color: "var(--bone-dim)", fontSize: 15, lineHeight: 1.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px dashed rgba(212,175,55,.15)" }}>
                  <span>Континент</span><span style={{ color: "var(--bone)" }}>Африка</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px dashed rgba(212,175,55,.15)" }}>
                  <span>Экипаж</span><span style={{ color: "var(--bone)" }}>11 душ</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px dashed rgba(212,175,55,.15)" }}>
                  <span>Координаты</span><span style={{ color: "var(--bone)" }}>Засекречено</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                  <span>Вердикт</span><span style={{ color: "var(--gold)" }}>★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
            <div>
              <p className="proof-quote">
                А по факту: <em>вертолёты</em> над водопадом Виктория, сафари в Ботсване, каякинг с <em>носорогами</em> в Замбии, ночь под звёздами в древнейшей пустыне <em>Намибии</em> и финал — плавание с <em>дикими китами</em> на Маврикии.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Testimonial */}
        <Reveal delay={400}>
          <div style={{ marginTop: 120, textAlign: "center" }}>
            <svg width="44" height="36" viewBox="0 0 44 36" style={{ display: "inline-block", opacity: .5 }}>
              <path d="M0 36 C 0 18, 6 6, 22 0 L 22 8 C 14 12, 10 18, 10 26 L 22 26 L 22 36 Z M 22 36 C 22 18, 28 6, 44 0 L 44 8 C 36 12, 32 18, 32 26 L 44 26 L 44 36 Z" fill="#D4AF37" />
            </svg>
            <p className="proof-tagline" style={{ marginTop: 24, fontSize: "clamp(24px, 2.6vw, 36px)" }}>
              «Мы сами бы ни за что не додумались поехать сюда.<br/>
              Это <span style={{ color: "var(--gold-bright)" }}>нереально круто.</span>»
            </p>
            <div style={{
              marginTop: 28,
              fontFamily: "var(--font-caps)", fontSize: 11, letterSpacing: ".36em",
              color: "var(--bone-dim)", textTransform: "uppercase",
            }}>
              — Саша · участник тура MMXXVI
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.ProofSection = ProofSection;
