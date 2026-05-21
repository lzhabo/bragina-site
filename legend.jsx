// legend.jsx — Vintage torn map + 4-step process

function TornMap({ images }) {
  // The map fades in and slowly drifts as the section scrolls
  const ref = React.useRef(null);
  const progress = useElementProgress(ref);
  const opacity = Math.min(1, progress * 2.2);
  const translateY = (0.5 - progress) * 80;

  return (
    <div ref={ref} style={{ position: "absolute", inset: "5% 5% 15% 5%", pointerEvents: "none" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("${images.map}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: opacity * 0.35,
        mixBlendMode: "screen",
        filter: "sepia(0.7) hue-rotate(-12deg) saturate(1.3) contrast(1.05)",
        transform: `translate3d(0, ${translateY}px, 0) scale(${1 + progress * 0.06})`,
        // ragged edge using mask
        WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 78%)",
        maskImage: "radial-gradient(ellipse at center, black 55%, transparent 78%)",
      }} />
      {/* compass rose overlay */}
      <svg viewBox="0 0 200 200" style={{
            position: "absolute", right: "8%", top: "12%",
            width: 180, height: 180,
            opacity: opacity * 0.5,
            transform: `rotate(${progress * 18}deg)`,
            transition: "opacity 1s",
          }} aria-hidden>
        <g fill="none" stroke="#D4AF37" strokeWidth=".9">
          <circle cx="100" cy="100" r="92" />
          <circle cx="100" cy="100" r="78" strokeOpacity=".6" />
          <circle cx="100" cy="100" r="58" strokeOpacity=".4" />
          <circle cx="100" cy="100" r="40" strokeOpacity=".3" />
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * Math.PI) / 8;
            const x1 = 100 + Math.cos(a) * 78;
            const y1 = 100 + Math.sin(a) * 78;
            const x2 = 100 + Math.cos(a) * 92;
            const y2 = 100 + Math.sin(a) * 92;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity=".5" />;
          })}
          {/* needle */}
          <path d="M100 12 L108 100 L100 188 L92 100 Z" fill="#D4AF37" fillOpacity=".75" />
          <path d="M100 12 L108 100 L100 100 Z" fill="#F2EAD5" fillOpacity=".5" />
        </g>
        <g fontFamily="Cinzel, serif" fontSize="11" fill="#D4AF37" textAnchor="middle">
          <text x="100" y="8">N</text>
          <text x="198" y="104">E</text>
          <text x="100" y="200">S</text>
          <text x="2" y="104">W</text>
        </g>
      </svg>
    </div>
  );
}

function LegendSection({ images }) {
  const steps = [
    {
      n: "i",
      label: "Шаг первый",
      title: "Интервью.",
      body: "Это не обычный тур. Мы проводим личное онлайн-знакомство с каждым кандидатом, чтобы собрать идеальную команду единомышленников.",
    },
    {
      n: "ii",
      label: "Шаг второй",
      title: "Подготовка.",
      body: "Вы не знаете, куда летите. Мы скажем лишь одно — что положить в чемодан.",
    },
    {
      n: "iii",
      label: "Шаг третий",
      title: "Конверт.",
      body: "За несколько дней до вылета вы получаете запечатанный конверт с билетами. Открыть его можно только в аэропорту.",
      inset: images.envelope,
    },
    {
      n: "iv",
      label: "Шаг четвёртый",
      title: "Квест.",
      body: "14 дней загадок, премиальных лоджей и дикой природы. Следующий шаг узнаете только на месте.",
    },
  ];

  return (
    <section className="legend-section" id="legend">
      {/* Background map */}
      <TornMap images={images} />

      {/* subtle background ferns */}
      <div className="layer" style={{ opacity: .25 }}>
        <Parallax speed={-0.08} style={{ position: "absolute", left: "-8%", top: "8%", width: "26vw", height: "60vh", filter: "blur(8px)" }}>
          <PalmFrond fill="#050C09" opacity={1} />
        </Parallax>
        <Parallax speed={-0.06} style={{ position: "absolute", right: "-6%", bottom: "5%", width: "28vw", height: "55vh", filter: "blur(8px)" }}>
          <PalmFrond fill="#050C09" opacity={1} flip />
        </Parallax>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center" }}>
          <Reveal>
            <div className="section-eyebrow">
              <span className="line" />
              <span className="eyebrow">Легенда · Как это устроено</span>
              <span className="line right" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="section-title">
              Четыре главы,<br/>один <em>ненаписанный</em> маршрут.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="section-intro">
              Каждая экспедиция Bragina начинается одинаково — медленное вскрытие запечатанного конверта, к которому мы готовимся четыре месяца.
            </p>
          </Reveal>
        </div>

        <div className="legend-steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 140} y={48}>
              <div className="step">
                <div className="num">{s.n}.</div>
                <div className="label">{s.label}</div>
                <h3 className="title">{s.title}</h3>
                <p className="body">{s.body}</p>
                {s.inset && (
                  <div className="step-inset">
                    <img src={s.inset} alt="Атлас Южных Широт — конверт прошлой экспедиции" />
                    <span className="step-inset-cap">↑ Из конверта группы №&nbsp;07</span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* connecting line / seal */}
        <div style={{ textAlign: "center", marginTop: 96 }}>
          <Reveal>
            <div style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: 22,
              color: "var(--bone-dim)",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.55,
            }}>
              «Мы обещаем три вещи: место вас тронет, люди станут друзьями на всю жизнь, а нам вы доверитесь вести вас в путь.»
            </div>
            <div style={{
              marginTop: 24,
              fontFamily: "var(--font-caps)",
              fontSize: 10,
              letterSpacing: ".36em",
              color: "var(--gold)",
            }}>
              — Устав экспедиции, статья I
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.LegendSection = LegendSection;
