/* =====================================================================
   TOMA · Doypack Landingpage — Anfrageformular (Validierung, Übergabe)
   Hinweis: Der eigentliche Versand wird serverseitig angebunden
   (z. B. WordPress-Formular-Endpoint). Hier: Client-Validierung + UX.
   ===================================================================== */

export function initForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;

  // markiere manuell bearbeitete Felder, damit Konfigurator sie nicht überschreibt
  ["f-features", "f-material", "f-volume"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", () => (el.dataset.touched = "1"));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(form)) return;

    const status = document.getElementById("formStatus");
    status.hidden = false;
    status.textContent = "Vielen Dank! Ihre Anfrage inkl. Konfiguration wurde vorbereitet. In der Live-Umgebung wird sie an TOMA übermittelt.";
    status.scrollIntoView({ behavior: "smooth", block: "center" });

    // Beispiel-Payload (Konfiguration + Formular) für die spätere Anbindung
    const data = Object.fromEntries(new FormData(form).entries());
    console.info("[TOMA] Anfrage-Payload (Demo):", data);
  });
}

function validate(form) {
  let ok = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const group = field.closest(".form__field");
    let valid = field.type === "checkbox" ? field.checked : field.value.trim() !== "";
    if (field.type === "email" && field.value) valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
    if (group) group.classList.toggle("has-error", !valid);
    if (!valid && ok) { field.focus(); ok = false; }
  });
  return ok;
}
