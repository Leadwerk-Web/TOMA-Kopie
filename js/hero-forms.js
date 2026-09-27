/* =====================================================================
   Hero-Formen-Wähler (verpackungsloesungen.html, [data-hero-forms])
   Bildwechsel übernimmt hero-badges.js; hier nur Bildunterschrift
   (Name, Untertitel, Link zur Produktseite) und ein ruhiger Auto-Wechsel,
   der bei Hover/Fokus pausiert und nach der ersten Nutzeraktion endet.
   ===================================================================== */

import { prefersReducedMotion } from "./motion-config.js";

const INTERVAL = 5000;

export function initHeroForms() {
  const visual = document.querySelector("[data-hero-forms]");
  if (!visual) return;
  const options = [...visual.querySelectorAll("[data-hero-option]")];
  if (!options.length) return;

  const indexEl = visual.querySelector("[data-forms-index]");
  const nameEl = visual.querySelector("[data-forms-name]");
  const subEl = visual.querySelector("[data-forms-sub]");
  const linkEl = visual.querySelector("[data-forms-link]");
  const linkLabelEl = visual.querySelector("[data-forms-link-label]");

  visual.addEventListener("hero:select", (e) => {
    const opt = e.detail?.badge;
    const i = options.indexOf(opt);
    if (i < 0) return;
    if (indexEl) indexEl.textContent = String(i + 1).padStart(2, "0");
    if (nameEl) nameEl.textContent = opt.dataset.name || "";
    if (subEl) subEl.textContent = opt.dataset.sub || "";
    if (linkEl && opt.dataset.href) linkEl.setAttribute("href", opt.dataset.href);
    if (linkLabelEl) linkLabelEl.textContent = opt.dataset.linkLabel || "";
  });

  if (prefersReducedMotion) return;

  let stopped = false;
  let paused = false;
  let timer = 0;

  const stop = () => {
    stopped = true;
    window.clearInterval(timer);
  };

  // Nur weiterschalten, solange der Hero sichtbar ist (im Stack-Modus bleibt er
  // als Sticky-Panel im Viewport, deshalb über die Scrollposition prüfen).
  const heroInView = () => window.scrollY < window.innerHeight * 0.5;

  const tick = () => {
    if (stopped || paused || document.hidden || !heroInView()) return;
    if (visual.classList.contains("is-swapping")) return;
    const current = options.findIndex((o) => o.classList.contains("is-active"));
    options[(current + 1) % options.length].click();
  };

  // Echte Klicks (isTrusted) beenden den Auto-Wechsel; .click() aus tick() nicht.
  visual.addEventListener("click", (e) => {
    if (e.isTrusted && e.target.closest("[data-hero-option]")) stop();
  }, true);
  visual.addEventListener("pointerenter", () => { paused = true; });
  visual.addEventListener("pointerleave", () => { paused = false; });
  visual.addEventListener("focusin", () => { paused = true; });
  visual.addEventListener("focusout", (e) => {
    if (!visual.contains(e.relatedTarget)) paused = false;
  });

  timer = window.setInterval(tick, INTERVAL);
}
