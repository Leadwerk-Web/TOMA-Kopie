/* =====================================================================
   TOMA · Doypack Landingpage — Entry / Orchestrierung
   ===================================================================== */

import { prefersReducedMotion, isMobile, debounce } from "./motion-config.js";
import { initScrollScenes } from "./scroll-scenes.js";
import { initFeatureExplorer } from "./feature-explorer.js";
import { initConfigurator } from "./configurator.js";
import { initApplicationExplorer } from "./application-explorer.js";
import { initFaq } from "./faq.js";
import { initForm } from "./form.js";
import { testimonials, branches } from "./data.js";
import { iconSvg } from "./icons.js";
import { initValuesCarousel } from "./values-carousel.js";
import { initGallery } from "./gallery.js";
import { initHeroBadges } from "./hero-badges.js";
import { initNavMenu } from "./nav-menu.js";

/* Stack-Scroll früh setzen, damit Sticky schon beim ersten Paint greift.
   js-motion erst setzen, wenn GSAP bereit ist – sonst bleiben Inhalte unsichtbar. */
if (
  window.matchMedia("(min-width: 1200px)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.documentElement.classList.add("is-stack-scroll");
}

/* Sicherheitsnetz: falls Animationen nicht starten, nach kurzer Zeit alles zeigen. */
function revealAll() {
  document.documentElement.classList.remove("js-motion");
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  });
  document.querySelectorAll("[data-hero]").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  });
}

function revealHero() {
  document.querySelectorAll("[data-hero]").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  });
}

setTimeout(() => {
  if (!window.__tomaAnimated) revealAll();
}, 1800);
// A throttled WebView or mobile browser can start GSAP but suspend its first
// timeline while the tab is backgrounded. Never leave above-the-fold content
// transparent after the intro should already have finished.
setTimeout(revealHero, 2400);

/* ---- Branchen-Strip (Hero) ---- */
function buildBranchStrip() {
  const el = document.getElementById("branchStrip");
  if (!el) return;
  el.innerHTML = branches.map((b) =>
    `<a href="${b.href}"><span class="branch-icon">${iconSvg(b.icon)}</span><span>${b.label}</span></a>`
  ).join("");
}

/* ---- Ausgießer-Badges: Icons ergänzen ---- */
function enrichSpoutBadges() {
  document.querySelectorAll(".spout__badge[data-icon]").forEach((badge) => {
    if (badge.querySelector(".spout__badge-icon")) return;
    const key = badge.getAttribute("data-icon");
    const icon = document.createElement("span");
    icon.className = "spout__badge-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = iconSvg(key);
    badge.prepend(icon);
  });
}

/* ---- Testimonials ---- */
function buildTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  if (!grid) return;
  grid.innerHTML = testimonials.map((t) => `
    <figure class="quote-card card" data-reveal>
      <div class="quote-card__stars" aria-hidden="true">★★★★★</div>
      <blockquote><p>„${t.quote}"</p></blockquote>
      <figcaption class="quote-card__author">
        <span class="quote-card__avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1.75c-4.14 0-7.5 2.24-7.5 5v.75c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75v-.75c0-2.76-3.36-5-7.5-5z"/>
          </svg>
        </span>
        <span class="quote-card__author-meta"><b>${t.name}</b><span>${t.role} · ${t.branch}</span></span>
      </figcaption>
    </figure>`).join("");
}

/* Interaktive SVGs mit echtem Layer-Markup füllen.
   Grund: <use href> erzeugt Shadow-DOM – die [data-layer]-Gruppen wären
   dann nicht per querySelectorAll manipulierbar (Konfigurator/Explorer). */
function hydrateDoypacks() {
  const symbol = document.getElementById("doypack-symbol");
  if (!symbol) return;
  const markup = symbol.innerHTML;
  const svg = document.querySelector("#configDoypack");
  if (svg) svg.innerHTML = markup;
}

/* Warte, bis GSAP/ScrollTrigger geladen sind (CDN defer). */
function whenReady(cb, tries = 0) {
  if (window.gsap && window.ScrollTrigger) return cb();
  if (tries > 100) return cb(); // Fallback: ohne Motion weiter
  setTimeout(() => whenReady(cb, tries + 1), 30);
}

function init() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const run = (fn, label) => {
    try { fn(); }
    catch (err) { console.error(`[TOMA] ${label} fehlgeschlagen:`, err); }
  };

  run(setupNav, "nav");
  run(initNavMenu, "nav-menu");
  run(setupStackScroll, "stack-scroll");
  run(hydrateDoypacks, "hydrate");

  // 1) INHALTE SOFORT aufbauen – unabhängig von GSAP/CDN.
  run(buildBranchStrip, "branches");
  run(enrichSpoutBadges, "spout-badges");
  run(buildTestimonials, "testimonials");
  run(initValuesCarousel, "values");
  run(initGallery, "gallery");
  run(initApplicationExplorer, "apps");
  run(initConfigurator, "config");
  run(initFaq, "faq");
  run(initForm, "form");
  run(initFeatureExplorer, "explorer");
  run(setupAnchorScroll, "anchors");
  run(setupHeroTilt, "tilt");
  run(setupHeroScrollCue, "scroll-cue");
  run(initHeroBadges, "hero-badges");
  run(setupScrollTop, "scroll-top");

  // 2) MOTION erst, wenn GSAP/ScrollTrigger geladen sind (mit Fallback).
  whenReady(() => {
    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
      revealAll();
      return;
    }

    try {
      /* Erst jetzt verstecken + animieren – verhindert „leere“ Seite bei Fehlern */
      document.documentElement.classList.add("js-motion");
      window.__tomaAnimated = true;

      setupLenis();
      initScrollScenes();
      refreshAfterAssets();
      setupResize();
    } catch (err) {
      console.error("Motion-Init fehlgeschlagen:", err);
      window.__tomaAnimated = false;
      revealAll();
    }
  });
}

/* ---- Stacked Overlay Scroll: Klasse + Innen-Scroll vor Page-Scroll ---- */
const stackMq = window.matchMedia("(min-width: 1200px)");

function isStackScrollActive() {
  return stackMq.matches && !prefersReducedMotion;
}

function syncStackScrollClass() {
  document.documentElement.classList.toggle("is-stack-scroll", isStackScrollActive());
  if (window.ScrollTrigger) window.ScrollTrigger.refresh();
}

function setupStackScroll() {
  syncStackScrollClass();
  const onChange = () => syncStackScrollClass();
  if (stackMq.addEventListener) stackMq.addEventListener("change", onChange);
  else stackMq.addListener(onChange);
}

/* ---- Scroll-Aufforderung: sticky sichtbar, erst am Seitenende ausblenden ---- */
function setupHeroScrollCue() {
  const cue = document.querySelector("[data-hero='scroll']");
  if (!cue) return;
  const panels = [...document.querySelectorAll("main .stack-panel")];
  const onScroll = () => {
    const doc = document.documentElement;
    const nearEnd = window.scrollY + window.innerHeight >= doc.scrollHeight - window.innerHeight * 0.55;
    cue.classList.toggle("is-hidden", nearEnd);
  };
  // Klick: jeweils zum nächsten Panel
  cue.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    if (!panels.length) return;
    const y = window.scrollY + window.innerHeight * 0.35;
    let next = panels.find((p) => p.offsetTop > y + 8);
    if (!next) next = panels[panels.length - 1];
    if (window.lenis) {
      window.lenis.scrollTo(next, { offset: 0, duration: 1.0 });
    } else {
      const top = next.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  });
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- Hero / Produktvisual: 3D-Tilt bei Hover / Mausbewegung ---- */
function setupHeroTilt() {
  if (prefersReducedMotion || isMobile()) return;
  document.querySelectorAll(".hero__visual, .spout__visual").forEach((visual) => {
    const media = visual.querySelector(".media--hero");
    if (!media) return;

    const maxTilt = 10; // Grad
    visual.classList.add("is-tilting");

    const setTilt = (rotX, rotY, scale) => {
      visual.style.setProperty("--tilt-x", `${rotX.toFixed(2)}deg`);
      visual.style.setProperty("--tilt-y", `${rotY.toFixed(2)}deg`);
      visual.style.setProperty("--tilt-scale", String(scale));
    };

    const onMove = (e) => {
      if (e.target.closest(".hero__badge, .spout__badge")) return;
      const rect = visual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * maxTilt * 2;
      const rotX = (0.5 - y) * maxTilt * 2;
      setTilt(rotX, rotY, 1.04);
    };

    const onLeave = () => {
      media.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
      setTilt(0, 0, 1);
      window.setTimeout(() => { media.style.transition = ""; }, 450);
    };

    visual.addEventListener("pointerenter", () => {
      media.style.transition = "transform 0.12s ease-out";
    });
    visual.addEventListener("pointermove", onMove);
    visual.addEventListener("pointerleave", onLeave);
  });
}

/* ---------------- LENIS (sanfte Scrollinterpolation) ---------------- */
function setupLenis() {
  if (prefersReducedMotion || isMobile() || !window.Lenis) return;
  const lenis = new window.Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // Touch bewusst NICHT gehijackt – natürliches Scrollen bleibt erhalten
    smoothTouch: false
  });
  window.lenis = lenis;

  lenis.on("scroll", () => {
    window.ScrollTrigger && window.ScrollTrigger.update();
    updateNavProgress();
  });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);

  if (window.gsap) {
    window.gsap.ticker.lagSmoothing(0);
  }
}

/* ---------------- NAVIGATION ---------------- */
function updateNavProgress() {
  const nav = document.getElementById("nav");
  const progress = document.getElementById("navProgress");
  if (!nav) return;
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  nav.classList.toggle("is-scrolled", y > 24);
  if (!progress) return;
  const doc = document.documentElement;
  const max = Math.max(1, doc.scrollHeight - window.innerHeight);
  const pct = Math.min(100, Math.max(0, (y / max) * 100));
  progress.style.width = `${pct}%`;
}

function setupNav() {
  const burger = document.getElementById("navBurger");
  const mobile = document.getElementById("navMobile");
  const close = document.getElementById("navClose");

  updateNavProgress();
  window.addEventListener("scroll", updateNavProgress, { passive: true });
  window.addEventListener("resize", updateNavProgress, { passive: true });

  const openMenu = (open) => {
    mobile.classList.toggle("is-open", open);
    mobile.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => openMenu(!mobile.classList.contains("is-open")));
  close.addEventListener("click", () => openMenu(false));
  mobile.addEventListener("click", (e) => {
    if (e.target === mobile) openMenu(false);
  });
  mobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => openMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") openMenu(false); });
}

/* ---------------- ANKER-LINKS (sanft via Lenis) ---------------- */
function setupAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    if (a.matches("[data-hero='scroll']")) return;
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -offset, duration: 1.0 });
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    });
  });
}

/* ---------------- SCROLL TO TOP ---------------- */
function setupScrollTop() {
  const btn = document.getElementById("scrollTop");
  if (!btn) return;

  const threshold = 480;
  const sync = () => {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const show = y > threshold;
    btn.classList.toggle("is-visible", show);
    btn.setAttribute("aria-hidden", show ? "false" : "true");
    btn.tabIndex = show ? 0 : -1;
  };

  btn.addEventListener("click", () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: prefersReducedMotion ? 0.01 : 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  });

  sync();
  window.addEventListener("scroll", sync, { passive: true });
  // Lenis feuert eigenes scroll-Event; zusätzlich anbinden falls vorhanden
  const bindLenis = () => {
    if (window.lenis) window.lenis.on("scroll", sync);
  };
  bindLenis();
  setTimeout(bindLenis, 500);
}

/* ---------------- ScrollTrigger nach Assets refreshen ---------------- */
function refreshAfterAssets() {
  if (!window.ScrollTrigger) return;
  const refresh = () => window.ScrollTrigger.refresh();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refresh);
  }
  window.addEventListener("load", refresh);
}

/* ---------------- RESIZE (debounced) ---------------- */
function setupResize() {
  const handler = debounce(() => {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }, 250);
  window.addEventListener("resize", handler);
}

/* ---------------- START ----------------
   data.js lädt die Produktdaten per Top-Level-await – dadurch kann
   DOMContentLoaded bereits vorbei sein, wenn dieses Modul ausgeführt wird.
   Steht am Dateiende, damit alle Modul-Konstanten initialisiert sind. */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
