/* =====================================================================
   TOMA · Doypack Landingpage — Anwendungs-Explorer (Tabs + weicher Wechsel)
   ===================================================================== */

import { applications } from "./data.js";
import { prefersReducedMotion } from "./motion-config.js";
import { iconSvg } from "./icons.js";

let current = 0;

export function initApplicationExplorer() {
  const tabsEl = document.getElementById("appsTabs");
  const panelEl = document.getElementById("appsPanel");
  const visualEl = document.getElementById("appsVisual");

  tabsEl.innerHTML = applications.map((a, i) =>
    `<button class="apps__tab" role="tab" id="apptab-${a.id}" aria-selected="${i === 0}"
      aria-controls="apppanel" data-index="${i}"><span class="branch-icon">${iconSvg(a.icon)}</span><span>${a.label}</span></button>`).join("");

  panelEl.setAttribute("role", "tabpanel");
  panelEl.id = "apppanel";
  panelEl.innerHTML = `<div class="apps__content" id="appsContent"></div>`;
  visualEl.innerHTML = `<div class="apps__img" id="appsImg"></div>`;

  render(0, false);

  tabsEl.querySelectorAll(".apps__tab").forEach((tab) => {
    tab.addEventListener("click", () => select(Number(tab.dataset.index)));
    tab.addEventListener("keydown", (e) => {
      let n = null;
      if (e.key === "ArrowRight") n = Math.min(applications.length - 1, current + 1);
      if (e.key === "ArrowLeft") n = Math.max(0, current - 1);
      if (n !== null) { e.preventDefault(); select(n); tabsEl.querySelector(`[data-index="${n}"]`).focus(); }
    });
  });
}

function select(index) {
  if (index === current) return;
  render(index, true);
}

function render(index, animate) {
  const a = applications[index];
  current = index;

  document.querySelectorAll(".apps__tab").forEach((t) =>
    t.setAttribute("aria-selected", String(Number(t.dataset.index) === index)));

  const content = document.getElementById("appsContent");
  const img = document.getElementById("appsImg");
  const gsap = window.gsap;

  const html = `
    <h3>${a.label}</h3>
    <p>${a.text}</p>
    <div class="apps__meta">${a.meta.map((m) => `<span>${m}</span>`).join("")}</div>
    <p style="margin-top:1.5rem"><a class="btn btn--link" href="${a.link}">${a.label} ansehen <span class="arrow" aria-hidden="true">→</span></a></p>`;

  const imgHtml = `<img src="${a.image}" width="800" height="640" alt="${a.alt || a.label}" loading="lazy" decoding="async" />`;

  if (animate && gsap && !prefersReducedMotion) {
    gsap.to(content, { opacity: 0, y: -12, duration: 0.2, ease: "power2.out", onComplete: () => {
      content.innerHTML = html;
      gsap.fromTo(content, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    }});
    gsap.to(img, { opacity: 0, scale: 1.025, duration: 0.28, ease: "power2.out", onComplete: () => {
      img.innerHTML = imgHtml;
      gsap.fromTo(img, { opacity: 0, scale: 0.975 }, { opacity: 1, scale: 1, duration: 0.55, ease: "power2.out" });
    }});
  } else {
    content.innerHTML = html;
    img.innerHTML = imgHtml;
  }
}
