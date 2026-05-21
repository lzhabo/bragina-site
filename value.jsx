// value.jsx — Polaroid-style cards revealing on scroll

function Polaroid({ idx, photo, tag, title, desc, rotate, offset }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="polaroid"
      style={{
        transform: inView
          ? `rotate(${rotate}deg) translateY(${offset}px)`
          : `rotate(${rotate * 1.8}deg) translateY(${48 + offset * 2}px)`,
        opacity: inView ? 1 : 0,
        transition: `transform 1100ms cubic-bezier(.2,.7,.2,1) ${idx * 160}ms, opacity 900ms ease ${idx * 160}ms, box-shadow .5s`,
      }}
    >
      <span className="tape" />
      <span className="num-tag">N° {String(idx + 1).padStart(2, "0")} · {tag}</span>
      <div className="photo" style={{ backgroundImage: `url("${photo}")` }} />
      <div className="caption">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
}

function ValueSection({ images }) {
  const cards = [
    {
      title: "Безупречная логистика",
      tag: "Кадр I",
      desc: "Все внутренние перелёты, приватные трансферы и лучшие локальные гиды.",
      photo: images.val1,
      rotate: -2.4,
      offset: 24,
    },
    {
      title: "Дикий люкс",
      tag: "Кадр II",
      desc: "Проживание в премиальных бутик-отелях 4* и уединённых лоджах в самом сердце природы.",
      photo: images.val2,
      rotate: 1.8,
      offset: -12,
    },
    {
      title: "Секретные активности",
      tag: "Кадр III",
      desc: "Вертолёты, морские сафари, квесты и эксклюзивный доступ к локациям, которых нет в путеводителях.",
      photo: images.val3,
      rotate: -1.4,
      offset: 32,
    },
    {
      title: "Окружение",
      tag: "Кадр IV",
      desc: "Тщательно отобранная группа из 8–13 человек. Приветственный и прощальный гала-ужины включены.",
      photo: images.val4,
      rotate: 2.6,
      offset: -8,
    },
  ];

  return (
    <section className="value-section" id="value">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <Reveal>
            <div className="section-eyebrow">
              <span className="line" />
              <span className="eyebrow">Манифест · Что входит за $9,200</span>
              <span className="line right" />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="section-title">
              Полевой <em>манифест</em>,<br/>а не мелкий шрифт договора.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <p className="section-intro">
              С доски прошлых экспедиций — то, что увозит домой каждый участник.
            </p>
          </Reveal>
        </div>

        <div className="polaroid-grid">
          {cards.map((c, i) => (
            <Polaroid key={c.title} idx={i} {...c} />
          ))}
        </div>

        {/* tag line / receipt strip */}
        <Reveal delay={400}>
          <div style={{
            marginTop: 120,
            display: "flex", justifyContent: "center", alignItems: "center", gap: 24,
            fontFamily: "var(--font-caps)", fontSize: 11, letterSpacing: ".34em",
            color: "var(--bone-dim)", textTransform: "uppercase",
          }}>
            <span style={{ width: 56, height: 1, background: "linear-gradient(90deg, transparent, var(--gold))" }} />
            <span>Всё включено · $9,200 за место · Перелёт из родного города оплачивается отдельно</span>
            <span style={{ width: 56, height: 1, background: "linear-gradient(90deg, var(--gold), transparent)" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.ValueSection = ValueSection;
