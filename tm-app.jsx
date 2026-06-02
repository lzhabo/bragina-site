// tm-app.jsx — root, image registry, Tweaks

const TM_TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "#C8A877",
  "grainOn": true,
  "vignetteOn": true
}/*EDITMODE-END*/;

const TM_IMAGES = {
  // hero — Machu Picchu at golden hour (Latin America, moody & dramatic)
  hero: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=2400&q=80&auto=format&fit=crop",
  // final cta — atmospheric landscape
  final: "https://images.unsplash.com/photo-1547235001-d703406d3f17?w=2400&q=80&auto=format&fit=crop",
  // previous episodes thumbnails — real expedition photos
  ep1: "images/safari-jeep.webp",
  ep2: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80&auto=format&fit=crop",
  ep3: "images/whale-diver.webp",
  // who-travels tiles
  val1: "images/pelican-boat.webp",
  val4: "images/victoria-falls-group.png",
  // testimonial avatars (placeholders)
  av1: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80&auto=format&fit=crop",
  av2: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
  av3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  // about — Masha
  masha: "images/masha-portrait.webp",
};

function shiftLight(hex, amt) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return hex;
  let [r, g, b] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  r = Math.max(0, Math.min(255, r + amt));
  g = Math.max(0, Math.min(255, g + amt));
  b = Math.max(0, Math.min(255, b + amt));
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

function TMApp() {
  const [t, setTweak] = useTweaks(TM_TWEAKS);
  return (
    <>
      <TMNav />
      <TMHero images={TM_IMAGES} />
      <div className="tm-divider" />
      <TMDetails />
      <TMForm />
      <div className="tm-divider" />
      <TMStory />
      <TMConcept images={TM_IMAGES} />
      <div className="tm-divider" />
      <TMRoute />
      <div className="tm-divider" />
      <TMAncestors />
      <div className="tm-divider" />
      <TMEpisodes images={TM_IMAGES} />
      <TMTestimonials images={TM_IMAGES} />
      <TMWhoTravels images={TM_IMAGES} />
      <div className="tm-divider" />
      <TMProcess />
      <TMPricing />
      <div className="tm-divider" />
      <TMAbout images={TM_IMAGES} />
      <TMFaq />
      <TMFinal images={TM_IMAGES} />
      <TMFooter />

      {t.grainOn && <div className="tm-grain" />}
      {t.vignetteOn && <div className="tm-vignette" />}

      <TweaksPanel title="Настройки">
        <TweakSection label="Акцент" />
        <TweakColor label="Цвет"
          value={t.accent}
          options={["#C8A877", "#B98E5A", "#6FA888", "#9A8FB0", "#C77F6A"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Атмосфера" />
        <TweakToggle label="Плёночное зерно" value={t.grainOn} onChange={(v) => setTweak("grainOn", v)} />
        <TweakToggle label="Виньетка" value={t.vignetteOn} onChange={(v) => setTweak("vignetteOn", v)} />
        <TweakSection label="Навигация" />
        <TweakButton label="Наверх" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <TweakButton label="Маршрут" onClick={() => document.getElementById("route")?.scrollIntoView({ behavior: "smooth" })} />
        <TweakButton label="Стоимость" onClick={() => document.getElementById("price")?.scrollIntoView({ behavior: "smooth" })} />
        <TweakButton label="Форма" onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })} />
      </TweaksPanel>

      <style>{`
        :root {
          --gold: ${t.accent};
          --gold-bright: ${shiftLight(t.accent, 26)};
          --gold-deep: ${shiftLight(t.accent, -40)};
        }
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TMApp />);
