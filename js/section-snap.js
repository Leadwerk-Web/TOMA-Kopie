/* =====================================================================
   TOMA · Abschnittsweises Scrollen (Stack-Modus, Lenis)
   Ein Container mit [data-snap] (z. B. <main>) scrollt abschnittsweise:
   Eine kurze Scroll-Geste (Mausrad/Touchpad) oder Bild↑/Bild↓/Leertaste
   fährt weich zum nächsten bzw. vorherigen .stack-panel. Ab dem ersten
   Abschnitt nach den Panels (Anfrage, Footer) wird wieder frei gescrollt.
   Nur mit html.is-stack-scroll + Lenis. Anker-Links und Scrollbalken
   werden nicht abgefangen; innere Scrollbereiche (FAQ-Liste) scrollen
   zuerst selbst.
   ===================================================================== */

// Ab so viel Scroll-Weg (px) einer Geste wird zum nächsten Abschnitt gefahren
const TRIGGER = 24;
// Pause, ab der ein wheel-Event als neue Geste gilt
const GESTURE_GAP = 200;
// Nach der Fahrt Nachlauf (Trackpad-Trägheit) höchstens so lange schlucken
const HOLD_MAX = 900;
const DURATION = 1.15;
// Weich anfahren und weich abbremsen
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* Nimmt das Element Platz im Fluss ein? (Overlays wie die Galerie-Lightbox
   sind fixed bzw. hidden und zählen nicht mit.) */
function inFlow(el) {
  const cs = getComputedStyle(el);
  return cs.display !== "none" && cs.position !== "fixed" && cs.position !== "absolute";
}

/* Natürliche Position im Fluss: offsetTop enthält bei klebenden Panels den
   Sticky-Versatz, daher über die (festen) Höhen der Vorgänger rechnen. */
function naturalTop(el) {
  const parent = el.parentElement;
  let top = parent.getBoundingClientRect().top + window.scrollY;
  for (let sib = parent.firstElementChild; sib && sib !== el; sib = sib.nextElementSibling) {
    if (inFlow(sib)) top += sib.offsetHeight;
  }
  return top;
}

/* Einrastpunkte: Oberkante jedes Panels plus der erste Abschnitt danach
   (ab dort freies Scrollen). */
function snapPoints(container) {
  const panels = [...container.children].filter((el) => el.classList.contains("stack-panel"));
  if (!panels.length) return [];
  const points = panels.map(naturalTop);
  let after = panels[panels.length - 1].nextElementSibling;
  while (after && !inFlow(after)) after = after.nextElementSibling;
  if (after) points.push(naturalTop(after));
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return points.map((p) => Math.min(Math.round(p), max));
}

/* Kann ein innerer Scrollbereich zwischen target und Container noch in
   Richtung dir scrollen? Dann gehört die Geste ihm. */
function innerScrollable(target, container, dir) {
  for (let el = target instanceof Element ? target : null; el && el !== container; el = el.parentElement) {
    const oy = getComputedStyle(el).overflowY;
    if ((oy !== "auto" && oy !== "scroll") || el.scrollHeight <= el.clientHeight + 1) continue;
    if (dir > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 0) return true;
  }
  return false;
}

export function initSectionSnap() {
  const lenis = window.lenis;
  const container = document.querySelector("[data-snap]");
  if (!lenis || !container) return;

  // Aus bei Tablet/Mobil/Reduced Motion und solange ein Dialog offen ist
  const active = () => document.documentElement.classList.contains("is-stack-scroll")
    && !document.querySelector('[aria-modal="true"]:not([hidden])');
  let animating = false;
  let holdStart = 0;   // > 0, solange Nachlauf geschluckt wird
  let lastEvent = 0;
  let lastAbs = 0;
  let acc = 0;
  let safety = 0;

  // Fährt vom aktuellen Stand zum nächsten Punkt in Richtung dir
  const go = (dir) => {
    const points = snapPoints(container);
    const y = lenis.scroll;
    const target = dir > 0 ? points.find((p) => p > y + 4) : [...points].reverse().find((p) => p < y - 4);
    if (target === undefined) return false;
    animating = true;
    lenis.scrollTo(target, {
      duration: DURATION,
      easing: easeInOutCubic,
      lock: true,
      force: true,
      onComplete: () => {
        if (!animating) return;
        animating = false;
        holdStart = performance.now();
      }
    });
    window.clearTimeout(safety);
    safety = window.setTimeout(() => { animating = false; }, DURATION * 1000 + 400);
    return true;
  };

  // Liegt der Stand im Panel-Bereich (nicht im freien Bereich danach)?
  const inSnapZone = (dir, delta) => {
    const points = snapPoints(container);
    const last = points[points.length - 1];
    const y = lenis.targetScroll;
    if (dir > 0) return y < last - 2;
    // Nach oben aus dem freien Bereich: erst einrasten, wenn die Geste
    // über den letzten Punkt hinaus in die Panels führen würde
    return y + delta < last - 2;
  };

  // Capture auf window: läuft vor dem wheel-Listener von Lenis
  window.addEventListener("wheel", (e) => {
    if (!active() || e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    const dir = Math.sign(e.deltaY);
    if (!dir) return;
    const now = performance.now();
    const abs = Math.abs(e.deltaY);
    const gap = now - lastEvent;
    lastEvent = now;

    if (!animating && innerScrollable(e.target, container, dir)) {
      // Innerer Bereich scrollt nativ, Lenis bleibt außen vor
      e.stopImmediatePropagation();
      return;
    }
    if (!animating && !inSnapZone(dir, e.deltaY)) { holdStart = 0; acc = 0; return; }

    e.preventDefault();
    e.stopImmediatePropagation();
    if (animating) { lastAbs = abs; return; }

    // Nachlauf nach einer Fahrt schlucken – bis Pause, Zeitlimit oder
    // ein deutlich kräftigerer Impuls (neue Geste während der Trägheit)
    if (holdStart) {
      const fresh = gap > GESTURE_GAP || now - holdStart > HOLD_MAX || abs > lastAbs * 1.6 + 4;
      lastAbs = abs;
      if (!fresh) return;
      holdStart = 0;
      acc = 0;
    }
    lastAbs = abs;

    if (gap > GESTURE_GAP || Math.sign(acc) !== dir) acc = 0;
    acc += e.deltaY;
    if (Math.abs(acc) >= TRIGGER) {
      acc = 0;
      if (!go(dir)) holdStart = now;
    }
  }, { capture: true, passive: false });

  // Tastatur: Bild↑/Bild↓, Leertaste – nicht in Eingabefeldern/Bedienelementen
  window.addEventListener("keydown", (e) => {
    if (!active() || e.altKey || e.ctrlKey || e.metaKey) return;
    const el = document.activeElement;
    if (el && el.closest("input, textarea, select, button, [contenteditable], [role='tab'], summary")) return;
    let dir = 0;
    if (e.key === "PageDown" || (e.key === " " && !e.shiftKey)) dir = 1;
    if (e.key === "PageUp" || (e.key === " " && e.shiftKey)) dir = -1;
    if (!dir || !inSnapZone(dir, dir * window.innerHeight)) return;
    e.preventDefault();
    if (!animating) go(dir);
  });
}
