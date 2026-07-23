/* =====================================================================
   TOMA · Doypack Landingpage — FAQ (2 Spalten, Kategorien, max. 5)
   ===================================================================== */

import { faqs, faqCategories } from "./data.js";

const MAX_VISIBLE = 5;
let activeCat = faqCategories[0]?.id || "grundlagen";
let schemaEl = null;

export function initFaq() {
  const list = document.getElementById("faqList");
  const cats = document.getElementById("faqCats");
  if (!list || !cats) return;

  cats.innerHTML = faqCategories.map((c, i) => `
    <button type="button"
      class="faq__cat${i === 0 ? " is-active" : ""}"
      role="tab"
      id="faq-cat-${c.id}"
      aria-selected="${i === 0 ? "true" : "false"}"
      aria-controls="faqList"
      data-cat="${c.id}">
      ${c.label}
    </button>`).join("");

  cats.setAttribute("role", "tablist");
  cats.setAttribute("aria-label", "FAQ-Kategorien");

  cats.querySelectorAll(".faq__cat").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCat = btn.dataset.cat;
      cats.querySelectorAll(".faq__cat").forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", String(on));
      });
      renderList(list);
    });
  });

  renderList(list);
  injectSchema(faqs);
}

function visibleFaqs() {
  return faqs.filter((f) => f.cat === activeCat).slice(0, MAX_VISIBLE);
}

function renderList(list) {
  const items = visibleFaqs();
  list.innerHTML = items.map((f, i) => `
    <div class="faq__item">
      <h3 class="faq__heading">
        <button type="button" class="faq__q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">
          <span>${f.q}</span>
          <span class="faq__icon" aria-hidden="true"></span>
        </button>
      </h3>
      <div class="faq__a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
        <div class="faq__a-inner"><p>${f.a}</p></div>
      </div>
    </div>`).join("");

  list.querySelectorAll(".faq__q").forEach((btn) => {
    btn.addEventListener("click", () => toggle(btn));
  });
}

function toggle(btn) {
  const list = document.getElementById("faqList");
  const expanded = btn.getAttribute("aria-expanded") === "true";
  const panel = btn.closest(".faq__item")?.querySelector(".faq__a");
  if (!panel || !list) return;

  // Andere offene Antworten schließen
  list.querySelectorAll(".faq__q").forEach((other) => {
    if (other === btn) return;
    other.setAttribute("aria-expanded", "false");
    const otherPanel = other.closest(".faq__item")?.querySelector(".faq__a");
    if (otherPanel) otherPanel.style.maxHeight = null;
  });

  btn.setAttribute("aria-expanded", String(!expanded));
  panel.style.maxHeight = expanded ? null : `${panel.scrollHeight}px`;
}

/* FAQPage-Schema: alle Fragen (über Kategorien erreichbar) */
function injectSchema(all) {
  if (schemaEl) schemaEl.remove();
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: all.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  schemaEl = document.createElement("script");
  schemaEl.type = "application/ld+json";
  schemaEl.textContent = JSON.stringify(schema);
  document.head.appendChild(schemaEl);
}
