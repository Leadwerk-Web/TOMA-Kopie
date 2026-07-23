/* =====================================================================
   TOMA · Vorteile-Karussell — Center-Focus / leichter 3D-Coverflow
   ===================================================================== */

import { values } from "./data.js";
import { prefersReducedMotion } from "./motion-config.js";

export function initValuesCarousel() {
  const root = document.getElementById("valuesCarousel");
  if (!root || !values.length) return;

  const track = root.querySelector(".values-carousel__track");
  const dotsEl = root.querySelector(".values-carousel__dots");
  const prevBtn = root.querySelector("[data-values-prev]");
  const nextBtn = root.querySelector("[data-values-next]");
  if (!track || !dotsEl) return;

  track.innerHTML = values.map((v, i) => `
    <article class="value-card card" data-values-slide="${i}" aria-hidden="true">
      <div class="value-card__media">
        <img src="${v.image}" width="640" height="512" alt="${v.alt}" loading="${i < 3 ? "eager" : "lazy"}" decoding="async" />
      </div>
      <div class="value-card__body">
        <h3>${v.title}</h3>
        <p>${v.text}</p>
      </div>
    </article>`).join("");

  const slides = [...track.querySelectorAll(".value-card")];
  let index = 0;
  let timer = null;

  dotsEl.innerHTML = values.map((_, i) =>
    `<button type="button" class="values-carousel__dot" data-values-dot="${i}" aria-label="Vorteil ${i + 1} von ${values.length}"></button>`
  ).join("");

  function equalizeHeights() {
    slides.forEach((s) => { s.style.height = "auto"; });
    const max = Math.max(...slides.map((s) => s.offsetHeight));
    if (max > 0) {
      slides.forEach((s) => { s.style.height = `${max}px`; });
      // Platz für Scale 1.08 + Schatten
      track.style.minHeight = `${Math.ceil(max * 1.12 + 48)}px`;
    }
  }

  /** Kürzester Offset im Kreis (−floor(n/2) … +floor(n/2)) für Endlos-Loop */
  function circularOffset(i, active) {
    const len = values.length;
    let offset = i - active;
    const half = Math.floor(len / 2);
    if (offset > half) offset -= len;
    if (offset < -half) offset += len;
    return offset;
  }

  function layout() {
    const reduced = prefersReducedMotion;
    const sideGap = Math.min(280, root.clientWidth * 0.28);

    slides.forEach((slide, i) => {
      const offset = circularOffset(i, index);
      const abs = Math.abs(offset);
      slide.classList.toggle("is-active", offset === 0);
      slide.classList.toggle("value-card--accent", offset === 0);
      slide.classList.toggle("is-side", abs === 1);
      slide.classList.toggle("is-far", abs > 1);
      slide.setAttribute("aria-hidden", offset === 0 ? "false" : "true");

      let transform;
      let opacity;
      let z;

      const origin = "translate(-50%, -50%)";
      if (reduced) {
        transform = `${origin} translateX(${offset * (sideGap + 8)}px) scale(${offset === 0 ? 1 : 0.94})`;
        opacity = abs > 1 ? 0 : abs === 1 ? 0.72 : 1;
        z = 10 - abs;
      } else if (offset === 0) {
        transform = `${origin} translateZ(48px) scale(1.08)`;
        opacity = 1;
        z = 30;
      } else if (abs === 1) {
        const dir = Math.sign(offset);
        transform = `${origin} translateX(${dir * sideGap}px) translateZ(-70px) rotateY(${dir * -16}deg) scale(0.9)`;
        opacity = 0.78;
        z = 20;
      } else if (abs === 2) {
        const dir = Math.sign(offset);
        transform = `${origin} translateX(${dir * sideGap * 1.55}px) translateZ(-140px) rotateY(${dir * -22}deg) scale(0.78)`;
        opacity = 0.2;
        z = 8;
      } else {
        const dir = Math.sign(offset) || 1;
        transform = `${origin} translateX(${dir * sideGap * 1.85}px) translateZ(-180px) rotateY(${dir * -26}deg) scale(0.7)`;
        opacity = 0;
        z = 5;
      }

      slide.style.zIndex = String(z);
      slide.style.opacity = String(opacity);
      slide.style.transform = transform;
      slide.style.pointerEvents = abs <= 1 ? "auto" : "none";
    });

    dotsEl.querySelectorAll(".values-carousel__dot").forEach((dot, i) => {
      const on = i === index;
      dot.classList.toggle("is-active", on);
      dot.setAttribute("aria-current", on ? "true" : "false");
    });
  }

  function goTo(next) {
    const len = values.length;
    index = ((next % len) + len) % len;
    layout();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function startAuto() {
    stopAuto();
    if (prefersReducedMotion) return;
    timer = window.setInterval(next, 5200);
  }
  function stopAuto() {
    if (timer) { window.clearInterval(timer); timer = null; }
  }

  prevBtn?.addEventListener("click", () => { prev(); startAuto(); });
  nextBtn?.addEventListener("click", () => { next(); startAuto(); });
  dotsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-values-dot]");
    if (!btn) return;
    goTo(Number(btn.dataset.valuesDot));
    startAuto();
  });

  slides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      if (i === index) return;
      goTo(i);
      startAuto();
    });
  });

  root.addEventListener("pointerenter", stopAuto);
  root.addEventListener("pointerleave", startAuto);
  root.addEventListener("focusin", stopAuto);
  root.addEventListener("focusout", (e) => {
    if (!root.contains(e.relatedTarget)) startAuto();
  });

  let startX = 0;
  let dragging = false;
  track.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    track.setPointerCapture?.(e.pointerId);
    stopAuto();
  });
  track.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 48) { dx < 0 ? next() : prev(); }
    startAuto();
  });

  const onResize = () => {
    equalizeHeights();
    layout();
  };
  window.addEventListener("resize", onResize);

  // Bilder können Höhe beeinflussen
  Promise.all(
    slides.map((s) => {
      const img = s.querySelector("img");
      if (!img || img.complete) return Promise.resolve();
      return new Promise((res) => {
        img.addEventListener("load", res, { once: true });
        img.addEventListener("error", res, { once: true });
      });
    })
  ).then(() => {
    equalizeHeights();
    goTo(0);
    startAuto();
  });

  equalizeHeights();
  goTo(0);
  startAuto();
}
