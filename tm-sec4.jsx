// tm-sec4.jsx — How it works, Pricing, About/values, FAQ

function TMProcess() {
  const steps = [
    { t: "Интервью", d: "Это необычный тур. Я провожу личное онлайн-знакомство с каждым участником, чтобы собрать идеальную команду единомышленников и придумать маршрут, от которого вы будете в восторге." },
    { t: "Подготовка", d: "После формирования маршрута я пришлю рекомендации: что нужно взять с собой, что купить и как подготовиться." },
    { t: "Конверт", d: "За несколько дней до вылета вы получаете конверт с легендой и билетами, которые откроете в аэропорту." },
    { t: "Путешествие", d: "В тайном месте я встречу тебя лично в аэропорту, и мы начнём наш удивительный тур-приключение." },
  ];
  return (
    <section className="tm-section" id="process">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <h2 className="tm-h2">Как это устроено</h2>
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
    "Все внутренние перелёты с ручной кладью",
    "Проживание в комфортных 4★ отелях и лоджах (по 2 человека)",
    "Все завтраки и обеды",
    "Приветственный и заключительный ужин",
    "Комфортные трансферы на минивэнах Renault Master и Mercedes Sprinter",
    "Вода",
    "Ежедневные активности и экскурсии",
    "Сопровождение наставника",
    "Видеосъёмка",
  ];
  const excluded = [
    "Алкоголь",
    "Питание, не озвученное в программе",
    <>Международные авиабилеты <span style={{ color: "var(--text-faint)", fontStyle: "italic" }}>(вы можете лететь из любого города мира)</span></>,
  ];
  return (
    <section className="tm-section" id="price">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head">
            <h2 className="tm-h2">Стоимость</h2>
          </div>
        </Reveal>
        <Reveal delay={150} y={28}>
          <div className="tm-price-card">
            <div className="tm-price-head">
              <div className="tm-price-amount"><span className="cur">$</span>9&nbsp;900</div>
              <a className="btn btn-primary" href="#form">Я с вами! <span className="arr">→</span></a>
            </div>
            <div className="tm-price-cols">
              <div>
                <div className="tm-incl-h yes">Входит в стоимость</div>
                <ul className="tm-incl tm-incl-2col">
                  {included.map((x, i) => <li key={i}><Check /><span>{x}</span></li>)}
                </ul>
              </div>
              <div>
                <div className="tm-incl-h no">Не входит</div>
                <ul className="tm-incl no">
                  {excluded.map((x, i) => <li key={i}><Dash /><span>{x}</span></li>)}
                </ul>
              </div>
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
            <h2 className="tm-h2">Кто я и мои ценности</h2>
          </div>
        </Reveal>
        <div className="tm-about-grid">
          <Reveal y={32}>
            <div className="tm-about-photo">
              <img src={images.masha} alt="Маша — автор путешествий Travel Mary" />
            </div>
          </Reveal>
          <Reveal delay={180} y={28}>
            <div>
              <h2 className="tm-h1">Мария&nbsp;<span className="gold-b">Брагина</span></h2>
              <div style={{ marginTop: 12, fontSize: 18, fontWeight: 700, color: "var(--text)" }}>
                Руководитель проектов
              </div>
              <div style={{ marginTop: 6, fontSize: 14, color: "var(--text-dim)", lineHeight: 1.5 }}>
                6 лет опыта · Специализация: B2B-поездки, конференции, корпоративы
              </div>
              <p className="tm-lead" style={{ marginTop: 22 }}>
                Брагина — по фамилии, мастер — по сути. Выстроит проект так, что ему
                будет удобно жить. Держит всё под контролем и при этом остаётся
                на вашей стороне.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TMFaq() {
  const qs = [
    { q: "Что такое сюрприз-тур?", a: "Это путешествие, в котором маршрут и направление остаются в тайне до самого отправления. Вы знаете только даты вылета, список вещей и общий формат. Всё остальное раскрывается постепенно в пути через задания и квесты." },
    { q: "Когда мне скажут, куда мы летим?", a: "Направление остаётся секретом вплоть до отправления. За две недели до вылета вы получите финальный пакет с инструкциями и всеми необходимыми деталями." },
    { q: "Это формат реалити-шоу — что это значит?", a: "На протяжении всего путешествия участников ждут неожиданные задания, активности и квесты. Каждый день приносит новые сюрпризы. Это живое динамичное приключение, а не классический тур по расписанию. Всё путешествие снимаем на камеру и публикуем в соцсетях в формате инста-реалити." },
    { q: "Как мне подготовиться, не зная направления?", a: "После бронирования вы получите подробный список вещей, составленный специально под климат и активности маршрута. Этого будет достаточно для полноценной подготовки." },
    { q: "Нужна ли виза?", a: "Для граждан РФ виза не нужна. Если вы гражданин другой страны, мы согласуем индивидуально до бронирования." },
    { q: "Это безопасно?", a: "Безопасность участников — приоритет. Маршрут тщательно выбирается с учётом ситуации в регионах. Организатор сопровождает группу на протяжении всего путешествия и берёт на себя решение любых нестандартных ситуаций. Также с нами почти всегда будет локальный гид." },
    { q: "Могу ли я поехать один/одна, без партнёра или друга?", a: "Да. Формат путешествия создаёт естественную среду для знакомства и быстро превращает незнакомцев в команду." },
    { q: "Сколько мест в группе?", a: "Группа небольшая — это принципиально важно для качества тура. Точное количество мест уточняйте напрямую, оно ограничено." },
    { q: "Как забронировать место?", a: "Напишите мне напрямую. Мы созвонимся, я отвечу на все ваши вопросы, и если тур вам подходит — вы получите договор и детали для внесения предоплаты." },
    { q: "Какова политика отмены?", a: "Условия отмены и возврата прописаны в договоре. Они зависят от сроков отмены относительно даты отправления." },
    { q: "Остались вопросы?", a: "Напишите мне — я отвечу на всё лично. Этот тур создан с душой, и каждый участник заслуживает полного понимания того, во что он отправляется (ну, насколько это возможно в рамках сюрприза)." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="tm-section" id="faq">
      <div className="tm-wrap">
        <Reveal>
          <div className="tm-sec-head center">
            <h2 className="tm-h2">Вопросы и ответы</h2>
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
