/* =====================================================================
   TOMA · PPWR & Verpackung — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/ppmr/
   Informationsseite: kein Feature-Explorer, kein Konfigurator, kein
   Vorteile-Karussell, keine Galerie und kein Anwendungs-Explorer.
   ===================================================================== */

/* ---- Seite: Name (Alt-/Aria-Texte) ---- */
export const product = {
  name: "PPWR & Verpackung",
  configPhoto: "assets/ppwr/ppwr-hero.webp"
};

/* ---- Feature-Explorer & Konfigurator: entfallen ---- */
export const features = [];
export const configSteps = [];
export const configRules = {};
export const layerMap = {};

/* ---- Anwendungs-Explorer: entfällt (#dokumentation ist statisch im HTML) ---- */
export const applications = [];

/* ---- Vorteile-Karussell & Galerie: entfallen ---- */
export const values = [];
export const galleryItems = [];

/* ---- Testimonials: entfallen ---- */
export const testimonials = [];

/* ---- Branchen-Strip (Hero): entfällt – ruhiger Hero ---- */
export const branches = [];

/* ---- FAQ „Wussten Sie …“ (kategorisiert) ---- */
export const faqCategories = [
  { id: "grundlagen", label: "PPWR-Grundlagen" },
  { id: "toma", label: "TOMA & Dokumente" }
];

export const faqs = [
  { cat: "grundlagen",
    q: "Was bedeutet PPWR?",
    a: "PPWR steht für Packaging and Packaging Waste Regulation, die EU-Verpackungsverordnung (EU) 2025/40. Sie regelt Recyclingfähigkeit, Materialeinsatz, Kennzeichnung und Dokumentation." },
  { cat: "grundlagen",
    q: "Betrifft die PPWR auch leere Verpackungen?",
    a: "Leere Verpackungen unterliegen technischen Anforderungen als Produkt. Auf den Markt gebracht werden sie in der Regel erst durch den Abfüller bzw. Markeninhaber." },
  { cat: "grundlagen",
    q: "Wer ist für den Markteintritt und dadurch für die Registrierung verantwortlich?",
    a: "In der Regel der Markeninhaber bzw. das befüllende Unternehmen – als verantwortliche Partei für Befüllung, Kennzeichnung und Vermarktung." },

  { cat: "toma",
    q: "Welche Rolle spielt TOMA als Verpackungslieferant?",
    a: "TOMA liefert leere Lebensmittelverpackungen und verantwortet technische Konformität, Materialauswahl und Dokumentation." },
  { cat: "toma",
    q: "Welche Dokumente können relevant sein?",
    a: "DoC, Materialdatenblätter, Spezifikationen, Rohstoff- und Additivinformationen sowie Recyclingangaben – je nach Anwendung." }
];
