/* =====================================================================
   TOMA · Horizontales Akkordeon (PPWR-Seite #dokumentation, Verpackungslösungen #auswahl)
   Immer genau ein Eintrag offen; unter 768 px per CSS senkrecht.
   Ohne JS bleiben alle Panels sichtbar (kein .is-ready).
   Wechsel (nur horizontal, ohne Reduced Motion): Der alte Inhalt blendet
   aus (.is-closing), während die Breiten wandern; beide Inhalte behalten
   dabei die Breite des offenen Eintrags (--hacc-open-w), damit der Text
   nicht mitten in der Animation umbricht.
   Mit Maus (hover + feiner Zeiger) öffnet auch Hover einen Eintrag, mit
   kurzer Verzögerung, damit Überfahren mehrerer Leisten nicht flackert.
   ===================================================================== */

import { prefersReducedMotion } from "./motion-config.js";

const FADE_OUT = 220;   // ms, passend zu ppwr-hacc-out in components.css
const RESIZE = 800;     // ms, passend zur flex-Transition von .ppwr-hacc__item
const HOVER_DELAY = 140; // ms
const vertical = window.matchMedia("(max-width: 768px)");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

export function initHAccordion() {
  document.querySelectorAll("[data-haccordion]").forEach((root) => {
    const items = [...root.querySelectorAll(".ppwr-hacc__item")];
    const triggers = items.map((item) => item.querySelector(".ppwr-hacc__trigger"));
    const panels = items.map((item) => item.querySelector(".ppwr-hacc__panel"));
    if (!items.length) return;

    let current = -1;
    let timers = [];

    const finish = () => {
      timers.forEach(clearTimeout);
      timers = [];
      root.classList.remove("is-animating");
      items.forEach((item, i) => {
        item.classList.remove("is-closing");
        panels[i].hidden = i !== current;
      });
    };

    const open = (index) => {
      if (index === current) return;
      const prev = current;
      const animate = prev >= 0 && !prefersReducedMotion && !vertical.matches;
      if (animate && !root.classList.contains("is-animating")) {
        root.style.setProperty("--hacc-open-w", `${items[prev].clientWidth}px`);
      }
      finish();
      current = index;

      items.forEach((item, i) => {
        const isOpen = i === index;
        item.classList.toggle("is-open", isOpen);
        triggers[i].setAttribute("aria-expanded", String(isOpen));
        panels[i].hidden = !isOpen;
      });
      if (!animate) return;

      root.classList.add("is-animating");
      items[prev].classList.add("is-closing");
      panels[prev].hidden = false;
      timers.push(
        setTimeout(() => {
          items[prev].classList.remove("is-closing");
          panels[prev].hidden = true;
        }, FADE_OUT),
        setTimeout(finish, RESIZE)
      );
    };

    open(Math.max(0, items.findIndex((item) => item.classList.contains("is-open"))));
    root.classList.add("is-ready");
    vertical.addEventListener("change", finish);

    let hoverTimer = 0;
    items.forEach((item, i) => {
      item.addEventListener("mouseenter", () => {
        clearTimeout(hoverTimer);
        if (!canHover.matches || vertical.matches || i === current) return;
        hoverTimer = setTimeout(() => open(i), HOVER_DELAY);
      });
    });
    root.addEventListener("mouseleave", () => clearTimeout(hoverTimer));

    triggers.forEach((trigger, i) => {
      trigger.addEventListener("click", () => { clearTimeout(hoverTimer); open(i); });
      trigger.addEventListener("keydown", (e) => {
        let n = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % triggers.length;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + triggers.length) % triggers.length;
        if (e.key === "Home") n = 0;
        if (e.key === "End") n = triggers.length - 1;
        if (n !== null) { e.preventDefault(); triggers[n].focus(); }
      });
    });
  });
}
