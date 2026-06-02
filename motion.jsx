// motion.jsx — lightweight scroll + reveal primitives (replaces framer-motion for CDN use)
const { useState, useEffect, useRef, useCallback, useLayoutEffect } = React;

// global scrollY hook
function useScrollY() {
  const [y, setY] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

// progress 0..1 as element passes through viewport
function useElementProgress(ref, { start = 0, end = 1 } = {}) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // raw progress: 0 when element top hits bottom of viewport, 1 when element bottom hits top
      const total = rect.height + vh;
      const passed = vh - rect.top;
      let raw = passed / total;
      raw = Math.max(0, Math.min(1, raw));
      // normalize to [start..end]
      const norm = Math.max(0, Math.min(1, (raw - start) / (end - start)));
      setP(norm);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [ref, start, end]);
  return p;
}

// linear interpolate
const lerp = (a, b, t) => a + (b - a) * t;

// IntersectionObserver-based reveal: triggers state when element enters viewport once
function useInView(ref, { threshold = 0.15, once = true } = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, once]);
  return inView;
}

// Reveal: fade + translate up when scrolled into view
function Reveal({ children, delay = 0, y = 36, duration = 900, as: As = "div", className, style, threshold = 0.15 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });
  return (
    <As
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
        transition: `opacity ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </As>
  );
}

// Parallax: translates a child by a fraction of scrollY relative to a containing section ref
function Parallax({ speed = 0.2, axis = "y", children, style, className }) {
  const y = useScrollY();
  const tx = axis === "x" ? y * speed : 0;
  const ty = axis === "y" ? y * speed : 0;
  return (
    <div
      className={className}
      style={{
        ...style,
        transform: `translate3d(${tx}px, ${ty}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

Object.assign(window, { useScrollY, useElementProgress, useInView, Reveal, Parallax, lerp });
