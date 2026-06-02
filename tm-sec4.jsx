// tm-sec4.jsx — How it works, Pricing, About/values, FAQ

function TMProcess() {
  const steps = [
    { t: "Интервью", d: "Личное онлайн-знакомство. Я собираю группу из тех, кому будет хорошо вместе." },
    { t: "Подготовка", d: "Ты не знаешь, куда летишь. Я говорю только одно — что положить в чемодан." },
    { t: "Конверт", d: "За несколько дней до вылета — запечатанный конверт. Открыть только в аэропорту." },
    { t: "Путешествие", d: "14 дней, где маршрут раскрывается шаг за шагом. Просто доверься и проживи." },
  ];
  return (
    <section className="tm-section" id="process">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <span className="tm-block-tag" style={{ justifyContent: "center" }}>Как это устроено</span>
            <h2 className="tm-h1" style={{ marginTop: 14 }}>Четыре шага<br/>к неизвестности.</h2>
          </div>
        </Reveal>
        <div className="tm-steps">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 140} y={28}>
              <div className="tm-step">
                <div className="dot">{String(i + 1).padStart(2, "0")}</div>
                <div className="st-t">{s.t}</div>
                <div className="st-d">{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const Check = () => (
  <svg className="ic" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5 L6.5 12 L13 4" stroke="#6FA888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Dash = () => (
  <svg className="ic" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4 L12 12 M12 4 L4 12" stroke="#E0613A" strokeWidth="1.8" strokeLinecap="round" /></svg>
);

function TMPricing() {
  const included = [
    "Все внутренние перелёты и трансферы",
    "Проживание в бутик-отелях 4* и лоджах",
    "Вертолёт, морские прогулки, квесты",
    "Локальные гиды и эксперты",
    "Приветственный и прощальный гала-ужины",
    "Полное сопровождение на маршруте",
  ];
  const excluded = [
    "Перелёт из родного города",
    "Виза и страховка",
    "Личные расходы и сувениры",
  ];
  return (
    <section className="tm-section" id="price">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <span className="eyebrow">Стоимость</span>
            <h2 className="tm-h1" style={{ marginTop: 14 }}>Прозрачно.<br/>Без скрытых строк.</h2>
          </div>
        </Reveal>
        <Reveal delay={150} y={28}>
          <div className="tm-price-grid">
            <div className="tm-price-left">
              <div className="tm-price-amount"><span className="cur">$</span>9&nbsp;200</div>
              <div className="tm-price-per">за одного участника · всё включено на маршруте</div>
              <div className="tm-price-note">Группа 8–13 человек. Бронь закрывается за 8 недель до вылета или когда заполнятся все места.</div>
              <div style={{ marginTop: 28 }}>
                <a className="btn btn-primary" href="#form">Записаться <span className="arr">→</span></a>
              </div>
            </div>
            <div className="tm-price-right">
              <div className="tm-incl-h yes">Входит в стоимость</div>
              <ul className="tm-incl">
                {included.map((x, i) => <li key={i}><Check />{x}</li>)}
              </ul>
              <div className="tm-incl-h no">Не входит</div>
              <ul className="tm-incl no">
                {excluded.map((x, i) => <li key={i}><Dash />{x}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TMAbout({ images }) {
  const values = [
    { vt: "Доверие важнее контроля", vd: "Лучшее случается, когда ты перестаёшь держать сценарий в руках." },
    { vt: "Глубина, а не галочки", vd: "Меньше точек — больше проживания каждой из них." },
    { vt: "Свои люди", vd: "Я собираю группу лично, чтобы рядом были те, с кем хочется в путь." },
  ];
  return (
    <section className="tm-section tm-story" id="about">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <span className="eyebrow">Кто я и мои ценности</span>
          </div>
        </Reveal>
        <div className="tm-about-grid">
          <Reveal y={32}>
            <div className="tm-about-photo">
              <img src={images.masha} alt="Маша — автор путешествий Travel Mary" />
              <span className="badge">Travel Mary</span>
            </div>
          </Reveal>
          <Reveal delay={180} y={28}>
            <div>
              <h2 className="tm-h1">Привет, я&nbsp;<span className="gold-b">Маша.</span></h2>
              <p className="tm-lead" style={{ marginTop: 20 }}>
                Организую путешествия с 2013 года — индивидуальные туры, групповые экспедиции
                и форматы, которых нет ни в одном агентстве. Говорю на четырёх языках, поэтому
                в Латинской Америке для меня нет закрытых дверей.
              </p>
              <div className="tm-values">
                {values.map((v, i) => (
                  <div className="tm-value" key={i}>
                    <span className="vi">✦</span>
                    <div>
                      <div className="vt">{v.vt}</div>
                      <div className="vd">{v.vd}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TMFaq() {
  const qs = [
    { q: "А если я так и не узнаю, куда лечу?", a: "Узнаешь — в аэропорту, когда вскроешь конверт. До этого момента известны только сезон, регион и что положить в чемодан. В этом и есть суть сюрприз-трипа." },
    { q: "Насколько это безопасно?", a: "Все маршруты выверены заранее вместе с локальными экспертами. Я сопровождаю группу лично на каждом этапе, а проживание и логистика — премиального уровня." },
    { q: "Нужна ли спортивная подготовка?", a: "Нет. Уровень средний: важно желание, любопытство и готовность к приключению, а не физические рекорды." },
    { q: "Можно поехать одному?", a: "Да, большинство приезжает в одиночку. Группа 8–13 человек собирается лично через интервью — именно поэтому в ней легко найти своих." },
    { q: "Что входит в стоимость?", a: "Всё на маршруте: внутренние перелёты, трансферы, проживание, активности, гиды и гала-ужины. Не входит только перелёт из родного города, виза, страховка и личные расходы." },
    { q: "Как забронировать место?", a: "Оставь телефон и e-mail в форме участника. Я свяжусь лично, проведём интервью — и если мы подходим друг другу, я зарезервирую за тобой место." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="tm-section" id="faq">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <span className="eyebrow">Вопросы и ответы</span>
            <h2 className="tm-h2">Самое частое —<br/>коротко и честно.</h2>
          </div>
        </Reveal>
        <div className="tm-faq">
          {qs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={"tm-faq-item" + (isOpen ? " open" : "")} key={i}>
                <button className="tm-faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <span className="tm-faq-ic" />
                </button>
                <div className="tm-faq-a" style={{ maxHeight: isOpen ? 280 : 0 }}>
                  <div className="inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TMProcess, TMPricing, TMAbout, TMFaq });
