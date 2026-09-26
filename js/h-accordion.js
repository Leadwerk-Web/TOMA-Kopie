/* =====================================================================
   TOMA · Horizontales Akkordeon (PPWR-Seite, #dokumentation)
   Immer genau ein Eintrag offen; unter 768 px per CSS senkrecht.
   Ohne JS bleiben alle Panels sichtbar (kein .is-ready).
   ===================================================================== */

export function initHAccordion() {
  document.querySelectorAll("[data-haccordion]").forEach((root) => {
    const items = [...root.querySelectorAll(".ppwr-hacc__item")];
    const triggers = items.map((item) => item.querySelector(".ppwr-hacc__trigger"));
    if (!items.length) return;

    const open = (index) => {
      items.forEach((item, i) => {
        const isOpen = i === index;
        item.classList.toggle("is-open", isOpen);
        triggers[i].setAttribute("aria-expanded", String(isOpen));
        item.querySelector(".ppwr-hacc__panel").hidden = !isOpen;
      });
    };

    const start = Math.max(0, items.findIndex((item) => item.classList.contains("is-open")));
    open(start);
    root.classList.add("is-ready");

    triggers.forEach((trigger, i) => {
      trigger.addEventListener("click", () => open(i));
      trigger.addEventListener("keydown", (e) => {
        let n = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % triggers.length;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + triggers.length) % triggers.length;
        if (e.key === "Home") n = 0;
        if (e.key === "End") n = triggers.length - 1;
        if (n !== null) { e.preventDefault(); triggers[n].focus(); }
      });
    });
  });
}
