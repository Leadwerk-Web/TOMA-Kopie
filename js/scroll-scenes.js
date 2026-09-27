/* =====================================================================
   TOMA · Doypack Landingpage — Scroll-Szenen (GSAP + ScrollTrigger)
   Ruhige, template-orientierte Choreografie: sanfte Reveals, Hero-Intro,
   dezente Blob-Bewegung. Kein aggressives Pinning/Hijacking.
   ===================================================================== */

import { MOTION, prefersReducedMotion, isMobile } from "./motion-config.js";
import { naturalTop } from "./section-snap.js";

let ctx = null;
/* Aufräumfunktionen für Event-Listener (gsap.context räumt nur Tweens ab) */
let cleanups = [];

export function initScrollScenes() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) {
    document.querySelectorAll("[data-reveal]").forEach((el) => (el.style.opacity = 1));
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  if (prefersReducedMotion) {
    document.querySelectorAll("[data-reveal]").forEach((el) => (el.style.opacity = 1));
    return;
  }

  ctx = gsap.context(() => {
    heroIntro(gsap);
    // Kein Hero-Parallax im Stack-Modus – kollidiert mit sticky Overlay-Scroll
    if (!document.documentElement.classList.contains("is-stack-scroll")) {
      heroParallax(gsap);
    }
    genericReveals(gsap);
    ppwrInfoScene(gsap);
    blobDrift(gsap);
  });
}

export function killScrollScenes() {
  cleanups.forEach((fn) => fn());
  cleanups = [];
  if (ctx) { ctx.revert(); ctx = null; }
}

/* ---------------- HERO INTRO ---------------- */
function heroIntro(gsap) {
  const lines = gsap.utils.toArray('[data-hero="line"]');
  const tl = gsap.timeline({ defaults: { ease: MOTION.hero.ease } });

  gsap.set('[data-hero="eyebrow"]', { opacity: 0, y: 16 });
  gsap.set(lines, { y: 40, opacity: 0 });
  gsap.set('[data-hero="sub"]', { opacity: 0, y: 24 });
  gsap.set('[data-hero="ctas"]', { opacity: 0, y: 20 });
  gsap.set('[data-hero="strip"]', { opacity: 0, y: 18 });
  /* Kein filter/blur am Visual – filter in Sticky-Panels bricht den Stack-Scroll */
  gsap.set('[data-hero="visual"]', { opacity: 0, scale: 0.92, y: 30 });
  gsap.set('[data-hero="badge"]', { opacity: 0, y: 10 });
  gsap.set('[data-hero="scroll"]', { opacity: 0, y: 12 });

  tl.to('[data-hero="eyebrow"]', { opacity: 1, y: 0, duration: 0.55 }, 0.1)
    .to('[data-hero="visual"]', { opacity: 1, scale: 1, y: 0, duration: 1.1 }, 0.18)
    .to(lines, { y: 0, opacity: 1, duration: 0.75, stagger: 0.09 }, 0.22)
    .to('[data-hero="sub"]', { opacity: 1, y: 0, duration: 0.7 }, 0.42)
    .to('[data-hero="ctas"]', { opacity: 1, y: 0, duration: 0.6 }, 0.55)
    .to('[data-hero="strip"]', { opacity: 1, y: 0, duration: 0.6 }, 0.68)
    .to('[data-hero="badge"]', { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, 1.05)
    .to('[data-hero="scroll"]', { opacity: 1, y: 0, duration: 0.55 }, 0.9);
}

/* ---------------- HERO PARALLAX (dezent) ---------------- */
function heroParallax(gsap) {
  if (isMobile()) return;
  gsap.to('[data-hero="visual"]', {
    y: -40, ease: "none",
    scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 0.6 }
  });
}

/* ---------------- GENERISCHE REVEALS (variierend) ---------------- */
function genericReveals(gsap) {
  // Abschnitte mit eigener Szene (data-scene) choreografieren ihre Reveals selbst
  const items = gsap.utils.toArray("[data-reveal]").filter((el) => !el.closest("[data-scene]"));
  const variants = ["rise", "scale", "fade"];
  items.forEach((el, i) => {
    const variant = variants[i % variants.length];
    const from = { opacity: 0 };
    if (variant === "rise") Object.assign(from, { y: MOTION.reveal.y, filter: "blur(6px)" });
    if (variant === "scale") Object.assign(from, { y: 22, scale: 0.97 });
    if (variant === "fade") Object.assign(from, { y: 16 });

    gsap.fromTo(el, from, {
      opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
      duration: MOTION.reveal.duration, ease: MOTION.reveal.ease,
      scrollTrigger: { trigger: el, start: revealStart(el), once: true }
    });
  });
}

/* Stack-Modus: Die Panels kleben übereinander. Ein Element tief unten im Panel
   (unterhalb der Reveal-Linie) würde erst beim Weiterscrollen auslösen – dann
   fährt aber schon das nächste Panel darüber. Startpunkt deshalb aus der
   natürlichen Panel-Position berechnen und spätestens auf die Ruheposition
   des Panels legen. */
function revealStart(el) {
  const panel = el.closest(".stack-panel");
  if (!panel || !document.documentElement.classList.contains("is-stack-scroll")) return MOTION.reveal.start;
  const linePct = parseFloat(MOTION.reveal.start.split(" ")[1]) / 100;
  return () => {
    const top = naturalTop(panel);
    const offset = el.getBoundingClientRect().top - panel.getBoundingClientRect().top;
    return Math.min(top + offset - window.innerHeight * linePct, top - 1);
  };
}

/* ---------------- PPWR-INFOGRAFIK (#ppwr-kompakt) ----------------
   Auftritt beim Hineinscrollen, danach schwebende Beutelgruppe und
   (Desktop, feiner Zeiger) leichte Tiefenverschiebung zur Maus. */
function ppwrInfoScene(gsap) {
  const section = document.querySelector('[data-scene="ppwr-info"]');
  if (!section) return;
  const q = gsap.utils.selector(section);
  const title = q(".ppwr-info__title");
  const lead = q(".ppwr-info__lead");
  const visual = q(".ppwr-info__visual");
  const img = q(".ppwr-info__visual img");
  const cards = q(".ppwr-info__cards li");
  const cardIcons = q(".ppwr-info__cards .ppwr-info__icon");
  const topics = q(".ppwr-info__topics");
  const topicsIcon = q(".ppwr-info__topics .ppwr-info__icon");
  const checks = q(".ppwr-info__checks li");
  const dates = q(".ppwr-info__dates");
  const mobile = isMobile();

  const tl = gsap.timeline({
    defaults: { ease: MOTION.reveal.ease },
    scrollTrigger: { trigger: section, start: "top 60%", once: true },
    onComplete: () => {
      // Inline-Transforms entfernen, sonst greift der CSS-Hover der Karten nicht
      gsap.set([...cards, ...cardIcons, topicsIcon], { clearProps: "transform" });
      gsap.set(title, { clearProps: "clipPath" });
      section.classList.add("is-in");
    }
  });

  tl.fromTo(title,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0% round 999px)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 999px)", duration: 0.8, ease: "power3.inOut" }, 0)
    .fromTo(visual, { opacity: 0, y: 60, scale: 0.86 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 }, 0.1)
    .fromTo(lead, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
    .fromTo(cards,
      { opacity: 0, x: mobile ? 0 : 60, y: mobile ? 24 : 0 },
      { opacity: 1, x: 0, y: 0, duration: 0.75, stagger: 0.11 }, 0.35)
    .fromTo(cardIcons,
      { scale: 0.4, rotation: -25 },
      { scale: 1, rotation: 0, duration: 0.6, stagger: 0.11, ease: "back.out(2.2)" }, 0.5)
    .fromTo(topics, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.75 }, 0.55)
    .fromTo(topicsIcon,
      { scale: 0.4, rotation: -25 },
      { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2.2)" }, 0.7)
    .fromTo(checks, { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.45, stagger: 0.12 }, 0.8)
    .fromTo(dates, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.95);

  // Ruhiges Schweben (eigene Eigenschaften, kollidiert nicht mit dem Auftritt)
  gsap.to(img, { yPercent: -2.5, rotation: 0.6, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 });

  // Tiefenwirkung zur Maus – nur Desktop mit feinem Zeiger
  if (mobile || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const layers = [
    { el: img, x: -18, y: -12 },
    { el: q(".ppwr-info__cards"), x: 8, y: 6 },
    { el: q(".ppwr-info__left"), x: 5, y: 4 }
  ].map((l) => ({
    ...l,
    toX: gsap.quickTo(l.el, "x", { duration: 0.9, ease: "power3.out" }),
    toY: gsap.quickTo(l.el, "y", { duration: 0.9, ease: "power3.out" })
  }));
  const move = (nx, ny) => layers.forEach((l) => { l.toX(nx * l.x); l.toY(ny * l.y); });
  const onMove = (e) => {
    const r = section.getBoundingClientRect();
    move(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => move(0, 0);
  section.addEventListener("pointermove", onMove);
  section.addEventListener("pointerleave", onLeave);
  cleanups.push(() => {
    section.removeEventListener("pointermove", onMove);
    section.removeEventListener("pointerleave", onLeave);
  });
}

/* ---------------- BLOB DRIFT (sehr langsam) ---------------- */
function blobDrift(gsap) {
  if (isMobile()) return;
  gsap.utils.toArray("[data-blob]").forEach((b, i) => {
    gsap.to(b, {
      xPercent: i % 2 === 0 ? 8 : -8,
      yPercent: i % 2 === 0 ? -6 : 6,
      ease: "none",
      scrollTrigger: { trigger: b.closest("section") || "body", start: "top bottom", end: "bottom top", scrub: 2 }
    });
  });
}
