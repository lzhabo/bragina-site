// footer-cta.jsx — Final apply CTA

function FooterCta() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="footer-cta" id="apply">
      {/* radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,.12), transparent 55%)",
        pointerEvents: "none",
      }} />

      {/* fern accents */}
      <Parallax speed={-0.05} style={{ position: "absolute", left: "-10%", bottom: "-10%", width: "30vw", height: "60vh", filter: "blur(4px)", opacity: .35 }}>
        <Fern fill="#020806" />
      </Parallax>
      <Parallax speed={-0.07} style={{ position: "absolute", right: "-10%", bottom: "-10%", width: "30vw", height: "60vh", filter: "blur(4px)", opacity: .35, transform: "scaleX(-1)" }}>
        <Fern fill="#020806" />
      </Parallax>

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <Reveal>
          <div className="section-eyebrow">
            <span className="line" />
            <span className="eyebrow">Приглашение</span>
            <span className="line right" />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h2>
            Готовы шагнуть<br/>в <span style={{ color: "var(--gold-bright)" }}>неизвестность</span>?
          </h2>
        </Reveal>

        <Reveal delay={300}>
          <div className="details">
            <div className="item">
              <span className="lbl">Стоимость</span>
              <span className="val">$9,200 / место</span>
            </div>
            <div className="item">
              <span className="lbl">Вылет</span>
              <span className="val">Ноябрь 2026</span>
            </div>
            <div className="item">
              <span className="lbl">Регион</span>
              <span className="val">Латинская Америка</span>
            </div>
            <div className="item">
              <span className="lbl">Места</span>
              <span className="val">13 / 13 свободно</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={460}>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            <button className="btn-gold" onClick={() => setOpen(true)}>
              Заполнить анкету
              <span className="arr">→</span>
            </button>
            <button className="btn-ghost" onClick={() => setOpen(true)}>
              Поговорить с куратором
            </button>
          </div>
        </Reveal>

        <Reveal delay={620}>
          <div style={{
            marginTop: 48,
            fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18,
            color: "var(--bone-dim)", opacity: .7, textAlign: "center",
          }}>
            Приём заявок закрывается за 8 недель до вылета — или когда все 13 мест будут забронированы.
          </div>
        </Reveal>
      </div>

      {/* fine print foot */}
      <div className="foot">
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--gold)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 10px var(--gold)" }} />
          Bragina · MMXXII
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <span>Пресса</span>
          <span>Устав</span>
          <span>Консьерж</span>
          <span>Членство</span>
        </div>
        <div>Женева · Сан-Паулу · Кейптаун</div>
      </div>

      {/* application modal */}
      {open && <ApplyModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function ApplyModal({ onClose }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({ name: "", email: "", why: "", seats: 1 });
  const total = 3;

  const next = () => setStep((s) => Math.min(s + 1, total));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div role="dialog" aria-modal="true"
         style={{
           position: "fixed", inset: 0, zIndex: 5000,
           background: "rgba(2,6,4,.85)", backdropFilter: "blur(10px)",
           display: "flex", alignItems: "center", justifyContent: "center",
           padding: 24,
           animation: "fadeIn .4s ease",
         }}
         onClick={onClose}>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div onClick={(e) => e.stopPropagation()}
           style={{
             width: "min(560px, 100%)",
             background: "linear-gradient(180deg, #0d1b14, #060f0a)",
             border: "1px solid rgba(212,175,55,.25)",
             padding: 48,
             position: "relative",
             animation: "slideUp .5s cubic-bezier(.2,.7,.2,1)",
             boxShadow: "0 40px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(212,175,55,.05)",
           }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 20,
          background: "none", border: 0, color: "var(--bone-dim)",
          fontSize: 22, cursor: "pointer", fontFamily: "var(--font-display)",
        }} aria-label="Close">×</button>

        {/* corner marks */}
        {["tl","tr","bl","br"].map((c) => (
          <span key={c} style={{
            position: "absolute", width: 14, height: 14,
            borderColor: "var(--gold)", borderStyle: "solid",
            ...(c === "tl" && { top: -1, left: -1, borderWidth: "1px 0 0 1px" }),
            ...(c === "tr" && { top: -1, right: -1, borderWidth: "1px 1px 0 0" }),
            ...(c === "bl" && { bottom: -1, left: -1, borderWidth: "0 0 1px 1px" }),
            ...(c === "br" && { bottom: -1, right: -1, borderWidth: "0 1px 1px 0" }),
          }} />
        ))}

        {step < total ? (
          <>
            <div style={{ fontFamily: "var(--font-caps)", fontSize: 10, letterSpacing: ".36em", color: "var(--gold)" }}>
              Анкета · Шаг {step + 1} из {total}
            </div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: 36, color: "var(--bone)",
              margin: "16px 0 8px", fontWeight: 300, lineHeight: 1.1,
            }}>
              {step === 0 && <>Интервью <em style={{color:"var(--gold-bright)"}}>начинается</em>.</>}
              {step === 1 && <>Расскажите <em style={{color:"var(--gold-bright)"}}>почему</em>.</>}
              {step === 2 && <>Последняя <em style={{color:"var(--gold-bright)"}}>деталь</em>.</>}
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", color: "var(--bone-dim)", marginBottom: 28 }}>
              {step === 0 && "Мы читаем каждый ответ лично."}
              {step === 1 && "Что притягивает вас в неизвестность?"}
              {step === 2 && "Сколько мест забронировать?"}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {step === 0 && (
                <>
                  <Field label="Имя" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
                  <Field label="E-mail" value={data.email} onChange={(v) => setData({ ...data, email: v })} type="email" />
                </>
              )}
              {step === 1 && (
                <Field label="Почему именно эта экспедиция?" textarea
                       value={data.why} onChange={(v) => setData({ ...data, why: v })} />
              )}
              {step === 2 && (
                <div>
                  <div style={{ fontFamily: "var(--font-caps)", fontSize: 10, letterSpacing: ".34em", color: "var(--gold)", marginBottom: 10 }}>Места</div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {[1,2,3,4].map((n) => (
                      <button key={n} onClick={() => setData({ ...data, seats: n })}
                              style={{
                                flex: 1, padding: "16px 0",
                                background: data.seats === n ? "rgba(212,175,55,.18)" : "transparent",
                                border: `1px solid ${data.seats === n ? "var(--gold)" : "rgba(212,175,55,.25)"}`,
                                color: data.seats === n ? "var(--gold-bright)" : "var(--bone-dim)",
                                fontFamily: "var(--font-display)", fontSize: 22, cursor: "pointer",
                                transition: "all .25s",
                              }}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 36 }}>
              <button className="btn-ghost" onClick={step === 0 ? onClose : prev} style={{ padding: "10px 18px" }}>
                {step === 0 ? "Отмена" : "← Назад"}
              </button>
              <button className="btn-gold" onClick={next} style={{ padding: "14px 28px", fontSize: 11 }}>
                {step === total - 1 ? "Отправить" : "Далее"}
                <span className="arr">→</span>
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{
              width: 60, height: 60, margin: "0 auto 24px",
              border: "1px solid var(--gold)", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--gold)", fontSize: 26, fontFamily: "var(--font-display)",
            }}>✓</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "var(--bone)", fontWeight: 300, fontStyle: "italic", margin: "0 0 12px" }}>
              Конверт уже в пути.
            </h3>
            <p style={{ color: "var(--bone-dim)", fontFamily: "var(--font-body)", fontSize: 16, marginBottom: 28, lineHeight: 1.55 }}>
              Мы свяжемся в течение 72 часов, чтобы назначить личный звонок. А пока —
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}> собирайте любопытство.</span>
            </p>
            <button className="btn-ghost" onClick={onClose}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", textarea = false }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "var(--font-caps)", fontSize: 10, letterSpacing: ".34em", color: "var(--gold)" }}>
        {label}
      </span>
      <Tag
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={textarea ? 4 : undefined}
        style={{
          background: "rgba(0,0,0,.35)",
          border: "1px solid rgba(212,175,55,.25)",
          color: "var(--bone)",
          padding: "14px 16px",
          fontFamily: "var(--font-body)", fontSize: 16,
          outline: "none",
          resize: textarea ? "vertical" : "none",
        }}
      />
    </label>
  );
}

window.FooterCta = FooterCta;
