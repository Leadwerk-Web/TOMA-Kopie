/* =====================================================================
   TOMA · PPWR & Verpackung — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/ppmr/
   Informationsseite: kein Feature-Explorer, kein Konfigurator, kein
   Vorteile-Karussell und keine Galerie. #dokumentation nutzt den
   Anwendungs-Explorer (Tabs) mit Dokumentenliste statt Branchen.
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

/* ---- Dokumentation & Nachweise (Tabs im Abschnitt #dokumentation) ----
   items: Dokumente je Themenbereich (werden als Liste im Tab gezeigt). */
export const applications = [
  { id: "food", icon: "doc", label: "Lebensmittelrecht & Konformität",
    text: "Nachweise rund um den Lebensmittelkontakt, die technische Freigabe und die Prozessplanung.",
    items: [
      { title: "Declaration of Compliance (DoC)",
        text: "Bestätigung, dass das Material oder die Verpackung den Anforderungen für Lebensmittelkontakt entspricht – häufig unter Bezug auf die Verordnung (EU) Nr. 10/2011." },
      { title: "Materialdatenblätter",
        text: "Technische Angaben zu Materialaufbau, Barrierewerten, Verarbeitung und zulässigen Einsatzbedingungen – Basis für Freigabe und Prozessplanung." },
      { title: "Spezifikationen",
        text: "Freigegebene Produkt- und Materialspezifikationen mit definierten Grenzen für Abfüllung, Lagerung und Qualitätssicherung." }
    ],
    link: "https://www.toma-gmbh.de/konformitaetserklaerungen/", linkLabel: "Konformitätserklärungen ansehen",
    image: "assets/ppwr/ppwr-lebensmittel-beutel.webp",
    alt: "Bedruckte Lebensmittelverpackungen wie Flachbodenbeutel, Spoutbag und Standbodenbeutel für Kaffee, Granola und Nüsse" },
  { id: "materials", icon: "flask", label: "Material & Stoffe",
    text: "Transparenz über eingesetzte Stoffe – für interne Compliance-Prüfungen, Audits und Ihr Qualitätsmanagement.",
    items: [
      { title: "Rohstoffe & Additive",
        text: "Transparenz über eingesetzte Stoffe – relevant für interne Compliance-Prüfungen, Audits und die Abstimmung mit Ihrem Qualitätsmanagement." },
      { title: "PFAS- & BPA-Hinweise",
        text: "Materialbezogene Auskünfte zu sensiblen Stoffgruppen – abgestimmt auf die jeweilige Verpackungsanwendung und Ihre Spezifikation." }
    ],
    link: "#anfrage", linkLabel: "Stoffinformationen anfragen",
    image: "assets/material.webp",
    alt: "Aufgerissene Ecke eines Beutels mit sichtbaren Materialschichten aus Folie und Aluminium" },
  { id: "ppwr", icon: "recycle", label: "PPWR & Markt",
    text: "Informationen zur Vorbereitung auf kommende Anforderungen an Recyclingfähigkeit, Rezyklat und Kennzeichnung.",
    items: [
      { title: "Recyclingfähigkeit",
        text: "Informationen zur Bewertung der Recyclingfähigkeit gemäß künftigen EU-Kriterien – Vorbereitung auf Design-for-Recycling-Anforderungen." },
      { title: "Rezyklatanteile",
        text: "Hintergrund zu möglichen Mindestanteilen an Rezyklat – abhängig von Material, Anwendung und Lebensmittelkontakt." },
      { title: "Kennzeichnung & Produktinformationen",
        text: "Orientierung zu Kennzeichnungspflichten und erweiterten Produktinformationen im Zuge der PPWR – je nach Verpackungstyp und Material." }
    ],
    link: "https://www.toma-gmbh.de/recyclebare-verpackung/", linkLabel: "Recyclebare Verpackung ansehen",
    image: "assets/flachbodenbeutel/flachbodenbeutel-kaffee-kraft.webp",
    alt: "Flachbodenbeutel aus Kraftpapier mit Produktetikett für Kaffee im Regal" }
];

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
