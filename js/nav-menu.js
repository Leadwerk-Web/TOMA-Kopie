/* =====================================================================
   TOMA · Hauptnavigation — Dropdowns, Megamenü (Desktop), Akkordeon (Mobil)
   Disclosure-Muster: echte <button>s mit aria-expanded/aria-controls.
   ===================================================================== */

const CLOSE_DELAY = 180;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

export function initNavMenu() {
  initDesktopMenu();
  initBeutelPreview();
  initMobileAccordion();
}

/* ---- Verpackungsbeutel: Vorschaubild folgt Hover/Fokus ---- */
function initBeutelPreview() {
  const figure = document.querySelector(".nav__preview");
  const img = figure?.querySelector("[data-nav-preview-img]");
  const title = figure?.querySelector("[data-nav-preview-title]");
  const sub = figure?.querySelector("[data-nav-preview-sub]");
  const links = [...document.querySelectorAll(".nav__sublink[data-preview-src]")];
  if (!img || !links.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fallback = links.find((a) => a.getAttribute("aria-current") === "page") || links[0];
  let swapTimer = null;

  const show = (link, animate = true) => {
    const src = link.dataset.previewSrc;
    title.textContent = link.querySelector("b")?.textContent || "";
    sub.textContent = link.querySelector("span")?.textContent || "";
    if (img.getAttribute("src") === src) return;
    clearTimeout(swapTimer);
    if (!animate || reduced) { img.src = src; return; }
    figure.classList.add("is-swapping");
    swapTimer = setTimeout(() => {
      img.onload = () => figure.classList.remove("is-swapping");
      img.src = src;
      if (img.complete) figure.classList.remove("is-swapping");
    }, 140);
  };

  show(fallback, false);
  links.forEach((a) => {
    a.addEventListener("mouseenter", () => show(a));
    a.addEventListener("focus", () => show(a));
  });
  // Pointer verlässt die Liste → wieder aktuelle Seite (bzw. Doypack) zeigen
  links[0].closest("ul")?.addEventListener("mouseleave", () => show(fallback));

  // Bilder beim ersten Öffnen vorladen, damit der Wechsel ohne Flackern läuft
  const item = figure.closest("[data-nav-item]");
  const preload = () => links.forEach((a) => { new Image().src = a.dataset.previewSrc; });
  item?.addEventListener("mouseenter", preload, { once: true });
  item?.addEventListener("focusin", preload, { once: true });
}

/* ---- Desktop: Dropdowns & Megamenü ---- */
function initDesktopMenu() {
  const items = [...document.querySelectorAll("[data-nav-item]")];
  if (!items.length) return;

  const setOpen = (item, open) => {
    item.classList.toggle("is-open", open);
    item.querySelector(".nav__trigger")?.setAttribute("aria-expanded", String(open));
  };
  const closeAll = (except = null) => items.forEach((it) => { if (it !== except) setOpen(it, false); });

  items.forEach((item) => {
    const trigger = item.querySelector(".nav__trigger");
    if (!trigger) return;
    let closeTimer = null;

    trigger.addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      closeAll(item);
      setOpen(item, open);
    });

    item.addEventListener("mouseenter", () => {
      if (!canHover.matches) return;
      clearTimeout(closeTimer);
      closeAll(item);
      setOpen(item, true);
    });
    item.addEventListener("mouseleave", () => {
      if (!canHover.matches) return;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => setOpen(item, false), CLOSE_DELAY);
    });

    // Tastatur: Fokus verlässt den Menüpunkt → schließen; Escape → schließen + Fokus zurück
    item.addEventListener("focusout", (e) => {
      if (!item.contains(e.relatedTarget)) setOpen(item, false);
    });
    item.addEventListener("keydown", (e) => {
      if (e.key !== "Escape" || !item.classList.contains("is-open")) return;
      e.stopPropagation();
      setOpen(item, false);
      trigger.focus();
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-nav-item]")) closeAll();
  });
  // Link im Menü gewählt (z. B. Anker #anfrage auf derselben Seite) → Menü schließen
  items.forEach((item) => item.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setOpen(item, false))));
}

/* ---- Mobil: Akkordeon im Overlay ---- */
function initMobileAccordion() {
  document.querySelectorAll("[data-nav-mgroup] .nav__mtrigger").forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!panel) return;
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
    });
  });
}
