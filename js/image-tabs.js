/* =====================================================================
   TOMA · Bild-Tabs (Hochbarrierefolien, #folienaufbau)
   Eine Tab-Leiste schaltet zwischen statischen Bild-Panels um.
   Ohne JS bleibt die Leiste per CSS verborgen und alle Panels sichtbar
   (kein .is-ready).
   ===================================================================== */

export function initImageTabs() {
  document.querySelectorAll("[data-image-tabs]").forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));
    if (!tabs.length || panels.some((p) => !p)) return;

    const select = (index, focus = false) => {
      tabs.forEach((tab, i) => {
        const on = i === index;
        tab.setAttribute("aria-selected", String(on));
        tab.tabIndex = on ? 0 : -1;
        panels[i].hidden = !on;
      });
      if (focus) tabs[index].focus();
    };

    const start = Math.max(0, tabs.findIndex((t) => t.getAttribute("aria-selected") === "true"));
    select(start);
    root.classList.add("is-ready");

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(i));
      tab.addEventListener("keydown", (e) => {
        let n = null;
        if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") n = 0;
        if (e.key === "End") n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); select(n, true); }
      });
    });
  });
}
