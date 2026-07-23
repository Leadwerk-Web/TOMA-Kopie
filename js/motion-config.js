/* =====================================================================
   TOMA · Doypack Landingpage — Zentrale Motion-Konfiguration
   Ein Ort für Timings, Eases, Breakpoints & Reduced-Motion.
   ===================================================================== */

export const prefersReducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const mq = {
  desktop: window.matchMedia("(min-width: 1200px)"),
  tablet: window.matchMedia("(min-width: 768px) and (max-width: 1199px)"),
  mobile: window.matchMedia("(max-width: 767px)")
};

export const isDesktop = () => mq.desktop.matches;
export const isMobile = () => mq.mobile.matches;

/* Zentrale Werte (siehe Briefing Abschnitt 5) */
export const MOTION = {
  reveal: {
    start: "top 82%",
    y: 40,          // 32–48 px
    blur: 6,        // max. 6px
    duration: 0.85, // 0.7–0.95
    ease: "power3.out",
    stagger: 0.08   // 0.06–0.1
  },
  hero: {
    ease: "power3.out"
  },
  // Parallax/Spot-Bewegung sehr dezent
  spotShift: 0.14 // max ~14% Viewportbreite
};

/* Reveal-Varianten – kontrolliert variieren (nicht überall identisch) */
export const REVEAL_VARIANTS = ["rise", "mask", "scale", "fade"];

/* Führt fn nur aus, wenn Bewegung erlaubt ist. */
export function withMotion(fn, fallback) {
  if (prefersReducedMotion) {
    if (typeof fallback === "function") fallback();
    return;
  }
  fn();
}

/* Debounce-Helper (für Resize / Refresh) */
export function debounce(fn, wait = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}
