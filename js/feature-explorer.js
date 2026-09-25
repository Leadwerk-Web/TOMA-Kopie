/* =====================================================================
   TOMA · Ausstattungs-Explorer mit Bauteile.svg
   - Nummern immer sichtbar an den Bauteil-Positionen
   - Highlight-Ebenen erst bei Hover (rechte Liste)
   ===================================================================== */

import { features, product } from "./data.js";
import { prefersReducedMotion, isMobile } from "./motion-config.js";

const SVG_URL = new URL("../assets/doypack/Bauteile.svg", import.meta.url).href;

export function initFeatureExplorer() {
  buildNav();
  buildAccordion();
  loadBauteileSvg().then(() => {
    if (isMobile()) {
      setupAccordionBehaviour();
      setListActive(0);
    } else {
      setupDesktopHover();
      setListActive(-1);
      showLayer(null);
    }
  });
}

/* ---- Navigation (Desktop) ---- */
function buildNav() {
  const nav = document.getElementById("explorerNav");
  if (!nav) return;
  nav.innerHTML = features.map((f, i) => `
    <button class="explorer__item${f.link ? " has-link" : ""}" role="tab" id="exp-tab-${f.id}" aria-selected="false" data-index="${i}" data-feature="${f.id}"${f.link ? ` data-link="${f.link}"` : ""}>
      <span class="num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
      <span class="body">
        <span class="name">${f.label}</span>
        <span class="desc">${f.desc}<span class="case">${f.case}</span></span>
      </span>
      ${f.link ? `<span class="explorer__link-arrow" aria-hidden="true">→</span>` : ""}
    </button>`).join("");

  nav.querySelectorAll(".explorer__item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = Number(btn.dataset.index);
      if (e.target.closest(".explorer__link-arrow") && btn.dataset.link) {
        e.preventDefault();
        e.stopPropagation();
        window.open(btn.dataset.link, "_blank", "noopener");
        return;
      }
      setListActive(i);
      showLayer(features[i]?.svgId || null);
    });
    btn.addEventListener("keydown", (e) => {
      let n = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") n = Math.min(features.length - 1, Number(btn.dataset.index) + 1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = Math.max(0, Number(btn.dataset.index) - 1);
      if (n !== null) {
        e.preventDefault();
        const next = document.querySelector(`.explorer__item[data-index="${n}"]`);
        next?.focus();
        setListActive(n);
        showLayer(features[n]?.svgId || null);
      }
    });
  });
}

function setupDesktopHover() {
  const nav = document.getElementById("explorerNav");
  if (!nav) return;

  nav.querySelectorAll(".explorer__item").forEach((btn) => {
    btn.addEventListener("pointerenter", () => {
      const i = Number(btn.dataset.index);
      setListActive(i);
      showLayer(features[i]?.svgId || null);
      setNumberActive(i);
    });
  });

  nav.addEventListener("pointerleave", () => {
    showLayer(null);
    setNumberActive(-1);
    // Beschreibung zugeklappt lassen, wenn nichts mehr gehovert wird
    setListActive(-1);
  });
}

/* ---- SVG laden + Nummern ---- */
async function loadBauteileSvg() {
  const stage = document.getElementById("explorerStage");
  if (!stage) return;

  try {
    const res = await fetch(SVG_URL);
    if (!res.ok) throw new Error(`SVG ${res.status}`);
    const text = await res.text();
    const doc = new DOMParser().parseFromString(text, "image/svg+xml");
    const svg = doc.querySelector("svg");
    if (!svg || doc.querySelector("parsererror")) throw new Error("SVG parse error");

    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("class", "explorer__bauteile");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `${product.name} mit markierbaren Bauteilen`);
    svg.setAttribute("preserveAspectRatio", "xMinYMax meet");
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.maxWidth = "100%";
    svg.style.maxHeight = "100%";

    // Highlight-Ebenen initial ausblenden
    features.forEach((f) => {
      if (!f.svgId) return;
      const el = svg.querySelector(`#${CSS.escape(f.svgId)}`);
      if (!el) return;
      el.setAttribute("data-bauteile-layer", f.svgId);
      el.style.opacity = "0";
      el.style.transition = prefersReducedMotion ? "none" : "opacity 0.35s ease";
      el.style.pointerEvents = "none";
    });

    // Zuerst in DOM hängen, damit getBBox() zuverlässig funktioniert
    stage.replaceChildren(svg);

    const ns = "http://www.w3.org/2000/svg";
    const nums = document.createElementNS(ns, "g");
    nums.setAttribute("id", "bauteile-numbers");
    nums.setAttribute("aria-hidden", "true");

    const offsets = {
      Euroloch: { x: -28, y: -8 },
      Abgerundete_Ecken: { x: 42, y: -30 },
      Einreisskerbe: { x: 44, y: 4 },
      Zipper: { x: 36, y: 0 },
      Aromaventil: { x: 32, y: 0 }
    };

    features.forEach((f, i) => {
      let cx = f.numX ?? 357;
      let cy = f.numY ?? 200;
      if (f.svgId) {
        const el = svg.querySelector(`#${CSS.escape(f.svgId)}`);
        if (el) {
          try {
            const b = el.getBBox();
            cx = b.x + b.width / 2;
            cy = b.y + b.height / 2;
          } catch { /* Fallback numX/numY */ }
        }
      }
      const off = (f.svgId && offsets[f.svgId]) || { x: 0, y: 0 };
      cx += off.x;
      cy += off.y;

      const g = document.createElementNS(ns, "g");
      g.setAttribute("class", "explorer__num-mark");
      g.setAttribute("data-num-index", String(i));
      g.style.cursor = "pointer";

      const circle = document.createElementNS(ns, "circle");
      circle.setAttribute("cx", String(cx));
      circle.setAttribute("cy", String(cy));
      circle.setAttribute("r", "26");
      circle.setAttribute("class", "explorer__num-mark-bg");

      const text = document.createElementNS(ns, "text");
      text.setAttribute("x", String(cx));
      text.setAttribute("y", String(cy));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "central");
      text.setAttribute("class", "explorer__num-mark-text");
      text.textContent = String(i + 1).padStart(2, "0");

      g.appendChild(circle);
      g.appendChild(text);
      g.addEventListener("pointerenter", () => {
        setListActive(i);
        showLayer(f.svgId || null);
        setNumberActive(i);
      });
      g.addEventListener("click", () => {
        setListActive(i);
        showLayer(f.svgId || null);
        setNumberActive(i);
      });
      nums.appendChild(g);
    });

    svg.appendChild(nums);

    // pointerleave auf Stage: Layer aus, wenn nicht über Nav
    stage.addEventListener("pointerleave", () => {
      const nav = document.getElementById("explorerNav");
      if (nav?.matches(":hover")) return;
      showLayer(null);
      setNumberActive(-1);
    });
  } catch (err) {
    console.warn("[explorer] Bauteile.svg konnte nicht geladen werden:", err);
    stage.innerHTML = `<p class="muted" style="padding:1.5rem;text-align:center">Bauteil-Grafik konnte nicht geladen werden.</p>`;
  }
}

function showLayer(svgId) {
  const stage = document.getElementById("explorerStage");
  if (!stage) return;
  stage.querySelectorAll("[data-bauteile-layer]").forEach((el) => {
    const on = svgId && el.getAttribute("data-bauteile-layer") === svgId;
    el.style.opacity = on ? "1" : "0";
  });
}

function setNumberActive(index) {
  const stage = document.getElementById("explorerStage");
  if (!stage) return;
  stage.querySelectorAll(".explorer__num-mark").forEach((g) => {
    g.classList.toggle("is-active", Number(g.getAttribute("data-num-index")) === index);
  });
}

function setListActive(index) {
  document.querySelectorAll(".explorer__item").forEach((el) => {
    const active = Number(el.dataset.index) === index;
    el.classList.toggle("is-active", active);
    el.setAttribute("aria-selected", active ? "true" : "false");
  });
}

/* ---- Mobiles Akkordeon ---- */
function buildAccordion() {
  const acc = document.getElementById("explorerAccordion");
  if (!acc) return;
  acc.innerHTML = features.map((f, i) => `
    <div class="faq__item" style="margin-bottom:.6rem">
      <button class="faq__q" aria-expanded="false" aria-controls="acc-panel-${f.id}" id="acc-btn-${f.id}" data-index="${i}">
        <span>${String(i + 1).padStart(2, "0")} · ${f.label}</span>
        <span class="faq__icon" aria-hidden="true"></span>
      </button>
      <div class="faq__a" id="acc-panel-${f.id}" role="region" aria-labelledby="acc-btn-${f.id}">
        <div class="faq__a-inner"><p>${f.desc}</p><p class="muted">${f.case}</p>${f.link ? `<a href="${f.link}" style="color:var(--color-primary-hover);font-weight:700">→</a>` : ""}</div>
      </div>
    </div>`).join("");
}

function setupAccordionBehaviour() {
  const acc = document.getElementById("explorerAccordion");
  if (!acc) return;
  acc.querySelectorAll(".faq__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      acc.querySelectorAll(".faq__q").forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        b.nextElementSibling.style.maxHeight = null;
      });
      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        const panel = btn.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
        const i = Number(btn.dataset.index);
        setListActive(i);
        showLayer(features[i]?.svgId || null);
        setNumberActive(i);
      } else {
        showLayer(null);
        setNumberActive(-1);
      }
    });
  });
}
