/* =====================================================================
   TOMA · Doypack Landingpage — Scroll-Szenen (GSAP + ScrollTrigger)
   Ruhige, template-orientierte Choreografie: sanfte Reveals, Hero-Intro,
   dezente Blob-Bewegung. Kein aggressives Pinning/Hijacking.
   ===================================================================== */

import { MOTION, prefersReducedMotion, isMobile } from "./motion-config.js";

let ctx = null;

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
    blobDrift(gsap);
  });
}

export function killScrollScenes() {
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
  const items = gsap.utils.toArray("[data-reveal]");
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
      scrollTrigger: { trigger: el, start: MOTION.reveal.start, once: true }
    });
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
