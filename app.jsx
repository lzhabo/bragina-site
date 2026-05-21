// app.jsx — Root component, image asset registry, nav

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#09140F", "#D4AF37", "#F2EAD5"],
  "fontPair": "Cormorant + Cinzel",
  "grainOn": true,
  "vignetteOn": true,
  "polaroidAngle": 1,
  "heroIntensity": 1
}/*EDITMODE-END*/;

// Image assets — Unsplash for atmospheric backgrounds, real expedition photos for cards
const IMAGES = {
  // misty jungle by Lukasz Szmigiel — sunbeams in foggy forest
  hero: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=2400&q=80&auto=format&fit=crop",
  // vintage map texture (parchment background for the Legend section)
  map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1800&q=80&auto=format&fit=crop",
  // The actual "Атлас Южных Широт" envelope — used as a small inset on the Envelope step
  envelope: "images/atlas-map.png",
  // Кадр I — Безупречная логистика: Kalahari Tours safari jeep
  val1: "images/safari-jeep.webp",
  // Кадр II — Дикий люкс: freediver beside a sperm whale, Mauritius
  val2: "images/whale-diver.webp",
  // Кадр III — Секретные активности: ocean safari with the pelican, Walvis Bay
  val3: "images/pelican-boat.webp",
  // Кадр IV — Окружение: the crew at Victoria Falls
  val4: "images/victoria-falls-group.png",
  // Proof — atmospheric African landscape backdrop
  proof: "https://images.unsplash.com/photo-1547235001-d703406d3f17?w=2400&q=80&auto=format&fit=crop",
  // Masha — founder portrait
  masha: "images/masha-portrait.webp",
};

function Nav() {
  const y = useScrollY();
  const scrolled = y > 80;
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="brand">
        <span className="dot" />
        Bragina
      </div>
      <div className="links">
        <a href="#legend">Легенда</a>
        <a href="#guide">Кто за этим</a>
        <a href="#value">Манифест</a>
        <a href="#proof">Прошлые экспедиции</a>
        <a href="#apply">Заявка</a>
      </div>
    </nav>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // simple smooth-scroll for in-page anchors handled inline above

  return (
    <>
      <Nav />
      <HeroSection images={IMAGES} />
      <LegendSection images={IMAGES} />
      <GuideSection images={IMAGES} />
      <ValueSection images={IMAGES} />
      <ProofSection images={IMAGES} />
      <FooterCta />

      {t.grainOn && <div className="grain" />}
      {t.vignetteOn && <div className="vignette" />}

      <TweaksPanel title="Настройки">
        <TweakSection label="Атмосфера" />
        <TweakToggle  label="Плёночное зерно"
                      value={t.grainOn}
                      onChange={(v) => setTweak("grainOn", v)} />
        <TweakToggle  label="Виньетка"
                      value={t.vignetteOn}
                      onChange={(v) => setTweak("vignetteOn", v)} />

        <TweakSection label="Палитра" />
        <TweakColor   label="Настроение"
                      value={t.palette}
                      options={[
                        ["#09140F", "#D4AF37", "#F2EAD5"],  // jungle + gold
                        ["#1a0d05", "#c98a3e", "#f0e3c4"],  // amber dusk
                        ["#040d12", "#86c5e8", "#eef6fb"],  // pacific blue
                        ["#0c0a12", "#b8895d", "#ece2d0"],  // desert sand
                      ]}
                      onChange={(v) => setTweak("palette", v)} />

        <TweakSection label="Навигация" />
        <TweakButton label="Наверх"     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <TweakButton label="Легенда"  onClick={() => document.getElementById("legend")?.scrollIntoView({ behavior: "smooth" })} />
        <TweakButton label="Кто за этим" onClick={() => document.getElementById("guide")?.scrollIntoView({ behavior: "smooth" })} />
        <TweakButton label="Манифест" onClick={() => document.getElementById("value")?.scrollIntoView({ behavior: "smooth" })} />
        <TweakButton label="Заявка"   onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })} />
      </TweaksPanel>

      {/* Live palette override */}
      <style>{`
        :root {
          --jungle-deep: ${t.palette[0]};
          --gold: ${t.palette[1]};
          --gold-bright: ${shiftLight(t.palette[1], 20)};
          --gold-deep: ${shiftLight(t.palette[1], -25)};
          --bone: ${t.palette[2]};
        }
      `}</style>
    </>
  );
}

// brighten/darken a hex color
function shiftLight(hex, amt) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return hex;
  let [r, g, b] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  r = Math.max(0, Math.min(255, r + amt));
  g = Math.max(0, Math.min(255, g + amt));
  b = Math.max(0, Math.min(255, b + amt));
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
