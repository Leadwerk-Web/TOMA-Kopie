/* =====================================================================
   Hero-Badges: Bildwechsel auf gemeinsamer Kreisbahn
   Altes Bild fährt nach unten rechts hinaus; erst danach kommt das neue
   von oben herein – ohne Überlagerung.
   ===================================================================== */

import { prefersReducedMotion } from "./motion-config.js";

/** Kreisbahn: Zentrum links vom Ruhepunkt → Exit unten rechts, Enter von oben. */
function orbitXY(angleDeg, radius) {
  const a = (angleDeg * Math.PI) / 180;
  return {
    x: radius * (1 - Math.cos(a)),
    y: radius * Math.sin(a)
  };
}

function normalizeSrc(src) {
  if (!src) return "";
  try {
    return new URL(src, window.location.href).pathname.replace(/\\/g, "/");
  } catch {
    return String(src).replace(/\\/g, "/");
  }
}

function sameImage(a, b) {
  const na = normalizeSrc(a);
  const nb = normalizeSrc(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  const fa = na.split("/").pop();
  const fb = nb.split("/").pop();
  return Boolean(fa && fb && fa === fb);
}

function preload(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(img);
    img.src = src;
  });
}

export function initHeroBadges() {
  const visual = document.querySelector(".hero__visual");
  const stage = visual?.querySelector("[data-hero-stage]");
  const floatEl = visual?.querySelector("[data-hero-float]") || stage;
  const heroPanel = visual?.closest(".hero") || visual?.closest(".stack-panel");
  const badges = visual ? [...visual.querySelectorAll(".hero__badge[data-image]")] : [];
  if (!visual || !stage || !badges.length) return;

  let currentSrc =
    stage.querySelector("[data-hero-img]")?.getAttribute("src") ||
    stage.querySelector("img")?.getAttribute("src") ||
    "";
  let busy = false;

  badges.forEach((badge) => {
    const src = badge.getAttribute("data-image");
    if (src) preload(src);
  });

  const setActive = (activeBadge) => {
    badges.forEach((b) => {
      const on = b === activeBadge;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  };

  const getBaseImg = () =>
    stage.querySelector("[data-hero-img]") || stage.querySelector("img");

  const setSwapping = (on) => {
    visual.classList.toggle("is-swapping", on);
    heroPanel?.classList.toggle("is-hero-swapping", on);
  };

  const swapInstant = (src, alt, badge) => {
    const img = getBaseImg();
    if (!img) return;
    img.src = src;
    img.alt = alt;
    currentSrc = src;
    setActive(badge);
  };

  const swapOrbit = async (src, alt, badge) => {
    const gsap = window.gsap;
    const base = getBaseImg();
    if (!base || !gsap) {
      swapInstant(src, alt, badge);
      return;
    }

    busy = true;
    setSwapping(true);
    visual.style.setProperty("--tilt-x", "0deg");
    visual.style.setProperty("--tilt-y", "0deg");
    visual.style.setProperty("--tilt-scale", "1");
    setActive(badge);

    try {
      await preload(src);

      const h = base.offsetHeight || base.getBoundingClientRect().height || 480;
      const w = base.offsetWidth || base.getBoundingClientRect().width || 320;

      const ghost = document.createElement("img");
      ghost.src = base.currentSrc || base.src;
      ghost.alt = "";
      ghost.setAttribute("aria-hidden", "true");
      ghost.width = base.width || 1024;
      ghost.height = base.height || 1536;
      ghost.className = "hero__img--ghost";
      ghost.decoding = "async";
      floatEl.appendChild(ghost);

      // Neues Bild erst nach dem Exit sichtbar – keine Überlagerung
      base.src = src;
      base.alt = alt;
      gsap.set(base, {
        opacity: 0,
        visibility: "hidden",
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1
      });

      const radius = Math.min(Math.max(w, h) * 0.55, Math.min(w, h) * 0.85);
      const exitEnd = 88;
      const enterStart = -88;
      const duration = 0.7;

      const outState = { angle: 0 };
      const inState = { angle: enterStart };

      const applyOut = () => {
        const p = orbitXY(outState.angle, radius);
        const t = outState.angle / exitEnd;
        const opacity = t < 0.55 ? 1 : 1 - (t - 0.55) / 0.45;
        gsap.set(ghost, {
          x: p.x,
          y: p.y,
          rotation: outState.angle * 0.3,
          scale: 1 - 0.14 * t,
          opacity: Math.max(0, opacity),
          force3D: true
        });
      };

      const applyIn = () => {
        const p = orbitXY(inState.angle, radius);
        const t = (inState.angle - enterStart) / (0 - enterStart);
        const opacity = Math.min(1, t / 0.35);
        gsap.set(base, {
          x: p.x,
          y: p.y,
          rotation: inState.angle * 0.3,
          scale: 0.88 + 0.12 * t,
          opacity,
          visibility: "visible",
          force3D: true
        });
      };

      gsap.set(ghost, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        force3D: true
      });
      applyOut();

      // 1) Altes Bild komplett hinaus
      await new Promise((resolve) => {
        gsap.to(outState, {
          angle: exitEnd,
          duration,
          ease: "power2.in",
          onUpdate: applyOut,
          onComplete: resolve
        });
      });

      gsap.killTweensOf(ghost);
      ghost.remove();

      // 2) Erst danach neues Bild von oben herein
      applyIn();
      await new Promise((resolve) => {
        gsap.to(inState, {
          angle: 0,
          duration,
          ease: "power3.out",
          onUpdate: applyIn,
          onComplete: resolve
        });
      });

      await gsap.to(base, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.06,
        ease: "none"
      });

      gsap.set(base, {
        clearProps: "transform,x,y,rotation,scale,opacity,zIndex,visibility"
      });

      currentSrc = src;
      setSwapping(false);
      busy = false;
    } catch {
      floatEl.querySelectorAll(".hero__img--ghost").forEach((n) => n.remove());
      setSwapping(false);
      busy = false;
      swapInstant(src, alt, badge);
    }
  };

  const onBadgeActivate = (badge) => {
    const src = badge.getAttribute("data-image");
    const alt = badge.getAttribute("data-alt") || "";
    if (!src || busy) return;
    if (sameImage(src, currentSrc)) {
      setActive(badge);
      return;
    }
    if (prefersReducedMotion || !window.gsap) {
      swapInstant(src, alt, badge);
      return;
    }
    swapOrbit(src, alt, badge);
  };

  // Delegation: zuverlässiger, falls Badges später neu gemountet werden
  visual.addEventListener("click", (e) => {
    const badge = e.target.closest(".hero__badge[data-image]");
    if (!badge || !visual.contains(badge)) return;
    e.preventDefault();
    e.stopPropagation();
    onBadgeActivate(badge);
  });
}
