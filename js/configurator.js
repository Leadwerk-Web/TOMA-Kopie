/* =====================================================================
   TOMA · Doypack Landingpage — Konfigurator
   Zentraler State, Live-Vorschau, Kartenstapel (neue Kachel von rechts).
   ===================================================================== */

import { configSteps, configRules, layerMap } from "./data.js";
import { prefersReducedMotion, isMobile } from "./motion-config.js";

export const configuration = {
  application: "",
  materialGoal: "",
  sizeClass: "",
  fillVolume: "",
  closure: "",
  features: [],
  recyclingGoal: "",
  finish: "",
  print: ""
};

const stepLabels = {
  application: "Anwendung",
  materialGoal: "Materialziel",
  sizeClass: "Format",
  fillVolume: "Füllvolumen",
  closure: "Verschluss",
  features: "Ausstattung",
  recyclingGoal: "Recycling / PPWR",
  finish: "Oberfläche"
};

let currentStep = 0;
let animating = false;

export function initConfigurator() {
  buildSteps();
  updatePreview();
  updateSummary();
  goToStep(0, { animate: false });
}

/* ---- Schritte rendern ---- */
function buildSteps() {
  const wrap = document.getElementById("configSteps");
  if (!wrap) return;

  wrap.innerHTML = configSteps.map((step, i) => {
    const isFirst = i === 0;
    const isLast = i === configSteps.length - 1;
    const nav = `<div class="config__nav">
      <button type="button" class="config__arrow config__arrow--back" data-back aria-label="Zurück"${isFirst ? " disabled" : ""}>‹</button>
      <button type="button" class="config__arrow config__arrow--next" data-next aria-label="Weiter"${isLast ? " disabled" : ""}>›</button>
    </div>`;

    if (step.type === "summary") {
      return `<article class="config__step is-ahead" data-step="${i}" data-key="${step.key}" data-type="summary" aria-hidden="true">
        <span class="config__step-num">Schritt ${i + 1} / ${configSteps.length}</span>
        <h3>${step.title}</h3>
        <p class="hint">${step.hint}</p>
        <dl class="config__summary" id="configSummary"></dl>
        <div class="config__summary-cta">
          <a class="btn btn--primary" href="#anfrage" id="cfgToForm">Konfiguration anfragen</a>
          <a class="btn btn--ghost" href="#anfrage">Beratung vereinbaren</a>
          <a class="btn btn--ghost" href="https://www.toma-gmbh.de/anfrageformular/">Muster anfragen</a>
        </div>
        ${nav}
      </article>`;
    }

    const opts = step.options.map((o) =>
      `<button type="button" class="config__opt" data-value="${o}" aria-pressed="false">${o}</button>`).join("");
    const input = step.input ? `<div class="config__field">
        <label for="cfg-${step.input.key}">${step.input.label}</label>
        <input id="cfg-${step.input.key}" type="text" placeholder="${step.input.placeholder}" data-input="${step.input.key}" />
      </div>` : "";
    const note = step.note ? `<div class="config__note">Eignung und regulatorische Bewertung hängen vom konkreten Materialaufbau und Anwendungsfall ab.</div>` : "";
    const link = step.link ? `<a class="btn btn--link" href="${step.link.href}">${step.link.label} →</a>` : "";

    return `<article class="config__step is-ahead" data-step="${i}" data-key="${step.key}" data-type="${step.type}" aria-hidden="true">
      <span class="config__step-num">Schritt ${i + 1} / ${configSteps.length}</span>
      <h3>${step.title}</h3>
      <p class="hint">${step.hint}</p>
      <div class="config__options">${opts}</div>
      ${input}${note}${link}
      ${nav}
    </article>`;
  }).join("");

  wrap.querySelectorAll(".config__step").forEach((stepEl) => {
    const key = stepEl.dataset.key;
    const type = stepEl.dataset.type;
    const index = Number(stepEl.dataset.step);

    stepEl.querySelectorAll(".config__opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.disabled || animating) return;
        if (type === "multi") {
          const pressed = btn.getAttribute("aria-pressed") === "true";
          btn.setAttribute("aria-pressed", String(!pressed));
          const val = btn.dataset.value;
          if (pressed) configuration.features = configuration.features.filter((v) => v !== val);
          else configuration.features.push(val);
        } else {
          stepEl.querySelectorAll(".config__opt").forEach((b) => b.setAttribute("aria-pressed", "false"));
          btn.setAttribute("aria-pressed", "true");
          configuration[key] = btn.dataset.value;
          if (key === "finish") configuration.print = btn.dataset.value;
        }
        applyRules();
        updatePreview();
        updateSummary();
        highlightPreview();

        // Einzelauswahl: nächste Kachel von rechts darüber legen
        // (Schritte mit Freitext/Mehrfachauswahl: über „Weiter“)
        if (type === "single") {
          window.setTimeout(() => goToStep(index + 1, { animate: true }), 180);
        }
      });
    });

    stepEl.querySelectorAll("[data-input]").forEach((inp) => {
      inp.addEventListener("input", () => {
        configuration[inp.dataset.input] = inp.value;
        updateSummary();
      });
    });

    stepEl.querySelector("[data-next]")?.addEventListener("click", () => {
      if (animating || stepEl.querySelector("[data-next]")?.disabled) return;
      goToStep(index + 1, { animate: true });
    });

    stepEl.querySelector("[data-back]")?.addEventListener("click", () => {
      if (animating || stepEl.querySelector("[data-back]")?.disabled) return;
      goToStep(index - 1, { animate: false, direction: "back" });
    });
  });
}

/* ---- Kartenstapel: neue Kachel von rechts darüber ---- */
function goToStep(index, { animate = true, direction = "forward" } = {}) {
  const steps = [...document.querySelectorAll(".config__step")];
  if (!steps.length) return;
  if (index < 0 || index >= steps.length) return;
  if (index === currentStep && animate) return;

  const prevIndex = currentStep;
  const nextEl = steps[index];
  const prevEl = steps[prevIndex];
  const labelEl = document.getElementById("configStepLabel");
  const gsap = window.gsap;
  const useMotion = animate && direction === "forward" && gsap && !prefersReducedMotion && !isMobile();

  if (useMotion) {
    animating = true;
    nextEl.classList.remove("is-ahead", "is-behind", "is-current");
    nextEl.classList.add("is-entering");
    nextEl.setAttribute("aria-hidden", "false");
    nextEl.style.zIndex = "8";

    gsap.fromTo(
      nextEl,
      { x: "110%", opacity: 1 },
      {
        x: 0,
        duration: 0.55,
        ease: "power3.out",
        onComplete: () => {
          steps.forEach((el, i) => {
            el.classList.remove("is-current", "is-behind", "is-ahead", "is-entering");
            el.style.transform = "";
            el.style.opacity = "";
            el.style.zIndex = "";
            if (i < index) {
              el.classList.add("is-behind");
              el.setAttribute("aria-hidden", "true");
            } else if (i === index) {
              el.classList.add("is-current");
              el.setAttribute("aria-hidden", "false");
            } else {
              el.classList.add("is-ahead");
              el.setAttribute("aria-hidden", "true");
            }
          });
          currentStep = index;
          animating = false;
          if (labelEl) labelEl.textContent = `Schritt ${index + 1} von ${steps.length}`;
        }
      }
    );

    if (prevEl && prevIndex !== index) {
      gsap.to(prevEl, {
        scale: 0.96,
        x: "-4%",
        duration: 0.45,
        ease: "power2.out"
      });
    }
    return;
  }

  // Ohne Motion / Zurück
  steps.forEach((el, i) => {
    el.classList.remove("is-current", "is-behind", "is-ahead", "is-entering");
    el.style.transform = "";
    el.style.opacity = "";
    el.style.zIndex = "";
    if (i < index) {
      el.classList.add("is-behind");
      el.setAttribute("aria-hidden", "true");
    } else if (i === index) {
      el.classList.add("is-current");
      el.setAttribute("aria-hidden", "false");
    } else {
      el.classList.add("is-ahead");
      el.setAttribute("aria-hidden", "true");
    }
  });
  currentStep = index;
  if (labelEl) labelEl.textContent = `Schritt ${index + 1} von ${steps.length}`;
}

/* ---- Regeln: nicht kombinierbare Optionen deaktivieren ---- */
function applyRules() {
  Object.entries(configRules).forEach(([key, ruleFn]) => {
    const disabledMap = ruleFn(configuration) || {};
    const stepEl = document.querySelector(`.config__step[data-key="${key}"]`);
    if (!stepEl) return;
    stepEl.querySelectorAll(".config__opt").forEach((btn) => {
      const reason = disabledMap[btn.dataset.value];
      if (reason) {
        btn.disabled = true;
        btn.title = reason;
        btn.setAttribute("aria-disabled", "true");
        if (btn.getAttribute("aria-pressed") === "true") {
          btn.setAttribute("aria-pressed", "false");
          if (configuration[key] === btn.dataset.value) configuration[key] = "";
        }
      } else {
        btn.disabled = false;
        btn.removeAttribute("title");
        btn.removeAttribute("aria-disabled");
      }
    });
  });
}

/* ---- Live-Vorschau ---- */
const CONFIG_PHOTOS = {
  default: "assets/doypack.png"
};

function resolveConfigPhoto() {
  // Vorerst immer dasselbe Produktbild
  return CONFIG_PHOTOS.default;
}

function updatePreview() {
  const photo = document.getElementById("configPhoto");
  if (photo) {
    const next = resolveConfigPhoto();
    if (photo.getAttribute("src") !== next) {
      if (window.gsap && !prefersReducedMotion) {
        window.gsap.to(photo, {
          opacity: 0, scale: 0.98, duration: 0.2, onComplete: () => {
            photo.setAttribute("src", next);
            window.gsap.to(photo, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" });
          }
        });
      } else {
        photo.setAttribute("src", next);
      }
    }
  }

  const svg = document.getElementById("configDoypack");
  if (svg && svg.style.display !== "none") {
    const active = new Set();
    if (configuration.closure === "Zipper" || configuration.closure === "Kindersicherung") active.add("zipper");
    if (configuration.closure === "Ausgießer") active.add("spout");
    configuration.features.forEach((f) => { const l = layerMap[f]; if (l) active.add(l); });
    if (["Bedruckt", "Matt", "Glänzend", "Soft-Touch prüfen"].includes(configuration.finish)) active.add("print");
    if (configuration.finish === "Sichtfenster" || configuration.features.includes("Sichtfenster")) active.add("window");
    const always = ["shadow", "body"];
    svg.querySelectorAll("[data-layer]").forEach((g) => {
      const key = g.getAttribute("data-layer");
      if (always.includes(key)) return;
      g.style.opacity = active.has(key) ? 1 : 0;
    });
  }

  updateProgress();
  updateHud();
}

function highlightPreview() {
  const inner = document.querySelector(".config__preview-inner");
  if (!inner || !window.gsap || prefersReducedMotion) return;
  window.gsap.fromTo(inner, { boxShadow: "0 0 0 0 rgba(239,123,16,0)" },
    {
      boxShadow: "0 0 0 3px rgba(239,123,16,.35)", duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out",
      onComplete: () => (inner.style.boxShadow = "")
    });
}

function countFilled() {
  const keys = ["application", "materialGoal", "sizeClass", "closure", "recyclingGoal", "finish"];
  let filled = keys.filter((k) => configuration[k]).length;
  if (configuration.features.length) filled += 1;
  return filled;
}

function updateProgress() {
  const total = 7;
  const pct = Math.round((countFilled() / total) * 100);
  const bar = document.getElementById("configBar");
  const pctEl = document.getElementById("configPct");
  if (bar) bar.style.width = pct + "%";
  if (pctEl) pctEl.textContent = pct + " %";
}

function updateHud() {
  const hud = document.getElementById("configHud");
  if (!hud) return;
  const parts = [];
  if (configuration.application) parts.push(`<span><b>Füllgut:</b> ${configuration.application}</span>`);
  if (configuration.sizeClass) parts.push(`<span><b>Format:</b> ${configuration.sizeClass}</span>`);
  if (configuration.closure) parts.push(`<span><b>Verschluss:</b> ${configuration.closure}</span>`);
  if (configuration.features.length) parts.push(`<span><b>Ausstattung:</b> ${configuration.features.length}</span>`);
  hud.innerHTML = parts.length ? parts.join("") : `<span class="muted">Noch keine Auswahl getroffen.</span>`;
}

function updateSummary() {
  const dl = document.getElementById("configSummary");
  const rows = [
    ["Anwendung", configuration.application],
    ["Materialziel", configuration.materialGoal],
    ["Format", configuration.sizeClass],
    ["Füllvolumen", configuration.fillVolume],
    ["Verschluss", configuration.closure],
    ["Ausstattung", configuration.features.join(", ")],
    ["Recycling / PPWR", configuration.recyclingGoal],
    ["Oberfläche", configuration.finish]
  ];
  const open = [];
  if (!configuration.materialGoal || configuration.materialGoal.includes("offen") || configuration.materialGoal.includes("Beratung"))
    open.push("Materialaufbau technisch prüfen");
  if (configuration.recyclingGoal && configuration.recyclingGoal !== "Anforderungen noch offen")
    open.push("Recycling-/PPWR-Bewertung offen");

  if (dl) {
    dl.innerHTML = rows.map(([k, v]) =>
      `<div class="config__summary-row"><dt>${k}</dt><dd>${v && v.length ? v : "—"}</dd></div>`).join("") +
      (open.length ? `<div class="config__summary-row"><dt>Offene technische Punkte</dt><dd>${open.join("; ")}</dd></div>` : "");
  }

  syncToForm(open);
  syncChips();
}

function syncToForm(open) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ""; };
  set("cfg_application", configuration.application);
  set("cfg_materialGoal", configuration.materialGoal);
  set("cfg_sizeClass", configuration.sizeClass);
  set("cfg_fillVolume", configuration.fillVolume);
  set("cfg_closure", configuration.closure);
  set("cfg_features", configuration.features.join(", "));
  set("cfg_recyclingGoal", configuration.recyclingGoal);
  set("cfg_finish", configuration.finish);
  set("cfg_print", configuration.print);

  const msg = document.getElementById("f-message");
  if (msg) {
    const marker = "— Konfiguration —";
    const lines = [];
    if (configuration.application) lines.push(`Füllgut: ${configuration.application}`);
    if (configuration.materialGoal) lines.push(`Material: ${configuration.materialGoal}`);
    if (configuration.sizeClass) lines.push(`Format: ${configuration.sizeClass}`);
    if (configuration.fillVolume) lines.push(`Füllvolumen: ${configuration.fillVolume}`);
    if (configuration.closure) lines.push(`Verschluss: ${configuration.closure}`);
    if (configuration.features.length) lines.push(`Ausstattung: ${configuration.features.join(", ")}`);
    if (configuration.recyclingGoal) lines.push(`Recycling/PPWR: ${configuration.recyclingGoal}`);
    if (configuration.finish) lines.push(`Oberfläche: ${configuration.finish}`);
    if (open && open.length) lines.push(`Offene Punkte: ${open.join("; ")}`);

    const block = lines.length ? `${marker}\n${lines.join("\n")}` : "";
    const idx = msg.value.indexOf(marker);
    const userPart = idx >= 0 ? msg.value.slice(0, idx).trimEnd() : msg.value.trimEnd();
    msg.value = block ? (userPart ? userPart + "\n\n" + block : block) : userPart;
  }

  const feat = document.getElementById("f-features");
  if (feat && !feat.dataset.touched) feat.value = configuration.features.join(", ");
  const mat = document.getElementById("f-material");
  if (mat && !mat.dataset.touched && configuration.materialGoal) mat.value = configuration.materialGoal;
  const vol = document.getElementById("f-volume");
  if (vol && !vol.dataset.touched && configuration.fillVolume) vol.value = configuration.fillVolume;
}

function syncChips() {
  const chips = document.getElementById("formConfigChips");
  if (!chips) return;
  const parts = [];
  Object.entries(stepLabels).forEach(([key, label]) => {
    if (key === "features") { if (configuration.features.length) parts.push(`${label}: ${configuration.features.join(", ")}`); }
    else if (configuration[key]) parts.push(`${label}: ${configuration[key]}`);
  });
  chips.innerHTML = parts.length
    ? parts.map((p) => `<span>${p}</span>`).join("")
    : `<span class="empty">Noch keine Konfiguration gewählt – Sie können sie oben im Konfigurator zusammenstellen.</span>`;
}
