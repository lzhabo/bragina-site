// hero.jsx — Hero with misty jungle parallax + layered ferns

const { useRef: useRefHero } = React;

function HeroSection({ images }) {
  const sectionRef = useRefHero(null);
  const scrollY = useScrollY();

  // parallax: foreground layers move faster than background
  const bgY = scrollY * 0.25;
  const midY = scrollY * 0.45;
  const fgY = scrollY * 0.7;
  const farFgY = scrollY * 0.9;
  const fade = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="hero" ref={sectionRef}>
      {/* Sky / deepest layer */}
      <div className="hero-bg-photo"
           style={{
             backgroundImage: `url("${images.hero}")`,
             transform: `translate3d(0, ${bgY}px, 0) scale(1.08)`,
           }} />

      {/* mid layer: blurred fern silhouettes */}
      <div className="layer" style={{ transform: `translate3d(0, ${midY}px, 0)`, opacity: .9 }}>
        <div style={{ position: "absolute", left: "-6%", top: "8%", width: "32vw", height: "60vh", filter: "blur(2px)" }}>
          <Monstera fill="#091b13" opacity={.85} />
        </div>
        <div style={{ position: "absolute", right: "-8%", top: "20%", width: "36vw", height: "70vh", filter: "blur(2px)" }}>
          <Monstera fill="#091b13" opacity={.85} flip />
        </div>
        <div style={{ position: "absolute", left: "55%", top: "0%", width: "22vw", height: "44vh", filter: "blur(3px)", opacity: .7 }}>
          <Fern fill="#0b1d14" opacity={.7} />
        </div>
      </div>

      {/* mist */}
      <div className="layer" style={{ transform: `translate3d(0, ${midY * 0.6}px, 0)` }}>
        <div className="mist" />
      </div>

      {/* foreground ferns — large, slight blur for depth-of-field */}
      <div className="layer" style={{ transform: `translate3d(0, ${fgY}px, 0)`, zIndex: 4 }}>
        <div style={{ position: "absolute", left: "-12%", bottom: "-20%", width: "38vw", height: "85vh", filter: "blur(4px)" }}>
          <Fern fill="#020806" opacity={.95} />
        </div>
        <div style={{ position: "absolute", right: "-14%", bottom: "-15%", width: "42vw", height: "80vh", filter: "blur(5px)", transform: "scaleX(-1)" }}>
          <Fern fill="#020806" opacity={.95} />
        </div>
      </div>

      {/* closest foreground — heavy blur, drifts off screen as you scroll */}
      <div className="layer"
           style={{
             transform: `translate3d(${-farFgY * 0.25}px, ${farFgY * 0.4}px, 0)`,
             opacity: fade,
             zIndex: 5,
           }}>
        <div style={{ position: "absolute", left: "-18%", top: "30%", width: "44vw", height: "90vh", filter: "blur(14px)", opacity: .8 }}>
          <BigLeaf fill="#010403" opacity={1} rotate={-12} />
        </div>
      </div>
      <div className="layer"
           style={{
             transform: `translate3d(${farFgY * 0.3}px, ${farFgY * 0.45}px, 0)`,
             opacity: fade,
             zIndex: 5,
           }}>
        <div style={{ position: "absolute", right: "-20%", top: "10%", width: "46vw", height: "92vh", filter: "blur(16px)", opacity: .85 }}>
          <BigLeaf fill="#010403" opacity={1} rotate={18} />
        </div>
      </div>

      {/* content */}
      <div className="hero-content container">
        <div style={{ maxWidth: 980 }}>
          <Reveal delay={120} duration={1100} y={20}>
            <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 28, height: 1, background: "var(--gold)", display: "inline-block" }} />
              Bragina <span style={{ opacity: .5 }}>·</span> Экспедиционное общество
            </div>
          </Reveal>

          <Reveal delay={300} duration={1200} y={40}>
            <h1>
              Маршрут&nbsp;—<br/>
              <em>тайна.</em><br/>
              Эмоции&nbsp;—<br/>
              <em>легенда.</em>
            </h1>
          </Reveal>

          <Reveal delay={600} duration={1100} y={20}>
            <p className="sub">
              Эксклюзивный Сюрприз-Тур в Латинскую&nbsp;Америку.
              Ноябрь 2026. Строго до 13&nbsp;участников.
            </p>
          </Reveal>

          <Reveal delay={820} duration={1000} y={16}>
            <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn-gold" onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}>
                Оставить заявку
                <span className="arr">→</span>
              </button>
              <button className="btn-ghost" onClick={() => document.getElementById("legend")?.scrollIntoView({ behavior: "smooth" })}>
                Легенда
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* bottom meta strip */}
      <div className="hero-meta">
        <div className="col">
          <span className="lbl">Вылет</span>
          <span className="val">Ноябрь · MMXXVI</span>
        </div>
        <div className="col" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="lbl">Координаты</span>
          <span className="val">— · — · — · —</span>
        </div>
        <div className="col" style={{ textAlign: "right", alignItems: "flex-end" }}>
          <span className="lbl">Свободных мест</span>
          <span className="val">13 / 13</span>
        </div>
      </div>

      <div className="scroll-cue" style={{ opacity: fade }} />
    </section>
  );
}

window.HeroSection = HeroSection;
