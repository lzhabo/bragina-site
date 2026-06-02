// tm-final.jsx — Final CTA + Footer/socials

function TMFinal({ images }) {
  return (
    <section className="tm-final" id="join">
      <div className="tm-final-bg" style={{ backgroundImage: `url("${images.final}")` }} />
      <div className="layer" style={{ opacity: .5 }}>
        <div style={{ position: "absolute", left: "-10%", bottom: "-15%", width: "30vw", height: "70vh", filter: "blur(5px)" }}>
          <Fern fill="#020806" />
        </div>
        <div style={{ position: "absolute", right: "-12%", bottom: "-12%", width: "32vw", height: "66vh", filter: "blur(6px)", transform: "scaleX(-1)" }}>
          <Fern fill="#020806" />
        </div>
      </div>
      <div className="tm-final-inner">
        <Reveal y={20}>
          <span className="eyebrow" style={{ display: "block", marginBottom: 24 }}>Финал</span>
        </Reveal>
        <Reveal delay={140} y={32}>
          <h2 className="tm-display" style={{ fontSize: "clamp(38px, 5.6vw, 88px)" }}>
            Присоединяйся<br/>к путешествию<br/>твоей <span className="gold-b">жизни.</span>
          </h2>
        </Reveal>
        <Reveal delay={320}>
          <p className="tm-lead" style={{ maxWidth: 600, margin: "28px auto 0" }}>
            Ты окажешься там, где никогда не был, и сделаешь то, о чём даже не мечтал.
          </p>
        </Reveal>
        <Reveal delay={460}>
          <div style={{ marginTop: 44 }}>
            <a className="btn btn-primary btn-lg" href="#form">Я еду! <span className="arr">→</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SocialIcon = ({ d }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">{d}</svg>
);

function TMFooter() {
  return (
    <footer className="tm-footer">
      <div className="tm-footer-inner">
        <div style={{ maxWidth: 340 }}>
          <a className="tm-logo" href="#top" style={{ marginBottom: 16 }}>
            <span className="mark" />
            <span>Travel Mary<small>Surprise Trip</small></span>
          </a>
          <p className="tm-small" style={{ marginTop: 16 }}>
            Авторские путешествия в формате сюрприз-трип. Маршрут — тайна, эмоции — легенда.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Социальные сети</div>
          <div className="tm-socials" style={{ justifyContent: "flex-end" }}>
            <a className="tm-social" href="#" aria-label="Telegram" onClick={(e)=>e.preventDefault()}>
              <SocialIcon d={<path d="M21.9 4.3 18.6 19.8c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.3 13.5l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1z"/>} />
            </a>
            <a className="tm-social" href="#" aria-label="Instagram" onClick={(e)=>e.preventDefault()}>
              <SocialIcon d={<><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1.2"/></>} />
            </a>
            <a className="tm-social" href="#" aria-label="YouTube" onClick={(e)=>e.preventDefault()}>
              <SocialIcon d={<><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="M10 9.5 L15 12 L10 14.5 Z"/></>} />
            </a>
            <a className="tm-social" href="#" aria-label="WhatsApp" onClick={(e)=>e.preventDefault()}>
              <SocialIcon d={<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3zm0 2a7 7 0 0 1 5.9 10.7l-.3.5.6 2.2-2.3-.6-.5.3A7 7 0 1 1 12 5zm-2.5 3c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.5.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1l-.7-.4-1.5-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.6-.3-1.4-.6-2.2-1.5-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.2 0-.3 0-.5l-.7-1.6c-.2-.4-.3-.4-.5-.4z"/>} />
            </a>
          </div>
        </div>
      </div>
      <div className="tm-foot-bottom">
        <span>© MMXXVI Travel Mary · Сюрприз трип</span>
        <span>Сделано с любовью к неизвестности</span>
      </div>
    </footer>
  );
}

Object.assign(window, { TMFinal, TMFooter });
