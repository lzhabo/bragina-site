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
        <Reveal delay={140} y={32}>
          <h2 className="tm-display" style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: 1.1, textWrap: "balance", maxWidth: "min(820px, 92%)", marginLeft: "auto", marginRight: "auto" }}>
            Присоединяйся к самому <span className="gold-b">невероятному</span> путешествию в твоей жизни.
          </h2>
        </Reveal>
        <Reveal delay={320}>
          <p className="tm-lead" style={{ maxWidth: 600, margin: "28px auto 0" }}>
            Ты окажешься там, где никогда не был, и сделаешь то, о чём даже не мечтал.
          </p>
        </Reveal>
        <Reveal delay={460}>
          <div style={{ marginTop: 44 }}>
            <a className="btn btn-primary btn-lg" href={window.TM_WA} target="_blank" rel="noopener noreferrer">Я еду! <span className="arr">→</span></a>
          </div>
        </Reveal>
      </div>
    </section>);

}

const SocialIcon = ({ d }) =>
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">{d}</svg>;


function TMFooter({ logo }) {
  return (
    <footer className="tm-footer">
      <div className="tm-footer-inner">
        <div style={{ maxWidth: 340 }}>
          <a className="tm-logo" href="#top" style={{ marginBottom: 16 }}>
            <img className="tm-logo-img footer" src={logo || "images/logo.png"} alt="Travel Mary" />
          </a>
        </div>
        <div className="tm-footer-social" style={{ textAlign: "right" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Социальные сети</div>
          <div className="tm-socials" style={{ justifyContent: "flex-end" }}>
            <a className="tm-social" href="https://t.me/Travel_mary" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <SocialIcon d={<path d="M21.9 4.3 18.6 19.8c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.3 13.5l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1z" />} />
            </a>
            <a className="tm-social" href="https://instagram.com/travel.mary" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SocialIcon d={<><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.5" cy="6.5" r="1.2" /></>} />
            </a>
            <a className="tm-social" href="https://www.youtube.com/@mariabragina4207" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <SocialIcon d={<><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M10 9.5 L15 12 L10 14.5 Z" /></>} />
            </a>
            <a className="tm-social" href="https://wa.me/79655004984" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <SocialIcon d={<path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.92-7.02zM12.04 20.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.48-1.38-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.22-.17-.47-.29z" />} />
            </a>
          </div>
        </div>
      </div>
      <div className="tm-foot-bottom">
        <span>© 2026 Travel Mary · Сюрприз трип</span>
        <span>Сделано с любовью к неизвестности</span>
      </div>
    </footer>);

}

Object.assign(window, { TMFinal, TMFooter });