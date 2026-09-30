/* =====================================================================
   TOMA · Hochbarrierefolien (Materialseite) — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/hochbarrierefolien/
   Materialseite: kein Feature-Explorer, kein Konfigurator, kein
   Vorteile-Karussell, keine Galerie, keine Testimonials.
   ===================================================================== */

/* ---- Seite: Name (Alt-/Aria-Texte) ---- */
export const product = {
  name: "Hochbarrierefolien",
  configPhoto: "assets/hochbarrierefolien/hochbarriere-beutelsortiment.webp"
};

/* ---- Feature-Explorer & Konfigurator: entfallen ---- */
export const features = [];
export const configSteps = [];
export const configRules = {};
export const layerMap = {};

/* ---- Anwendungsbereiche (Tabs im Abschnitt #branchen) ----
   points = Stichpunkte laut Live-Seite; title überschreibt die
   Überschrift im Panel, label bleibt der Tab-Text. */
export const applications = [
  { id: "food", icon: "food", label: "Lebensmittel",
    title: "Lebensmittel",
    points: [
      "Schutz vor Sauerstoff, Feuchtigkeit und Aromaverlust",
      "Geeignet für Snacks, Nüsse, Gewürze, Pulver und Fertiggerichte",
      "Längere Haltbarkeit und bessere Produktsicherheit",
      "Individuelle Folien- und Beutellösungen möglich"
    ],
    link: "https://www.toma-gmbh.de/food/", linkLabel: "Lebensmittelverpackung ansehen",
    image: "assets/doypack/doypack-10-e1771314983425.webp", alt: "Bedruckter Standbodenbeutel für Müsli auf einem Frühstückstisch" },
  { id: "coffee", icon: "coffee", label: "Kaffee & Aromaprodukte",
    title: "Kaffee & Aromaprodukte",
    points: [
      "Schutz vor Sauerstoff, Feuchtigkeit und Aromaverlust",
      "Geeignet für Kaffee, Tee, Kakao und sensible Aromaprodukte",
      "Optional mit Aromaventil, Zipper oder individueller Bedruckung",
      "Starke Barriere für Frische, Aroma und Produktqualität"
    ],
    link: "https://www.toma-gmbh.de/kaffeeverpackung/", linkLabel: "Kaffeeverpackung ansehen",
    image: "assets/flachbodenbeutel/flachbodenbeutel-kaffee-2.webp", alt: "Schwarze Flachbodenbeutel für Single-Origin-Kaffee neben einer Kaffeemühle" },
  { id: "pet", icon: "pet", label: "Tiernahrung",
    title: "Tiernahrung",
    points: [
      "Geeignet für trockene oder fetthaltige Tiernahrung",
      "Schutz vor Geruchsverlust, Feuchtigkeit und äußeren Einflüssen",
      "Robuste Folienstrukturen für größere Füllgewichte",
      "Optional mit Wiederverschluss oder individueller Verpackungsform"
    ],
    link: "https://www.toma-gmbh.de/tierfutter/", linkLabel: "Tierfutterverpackung ansehen",
    image: "assets/flachbodenbeutel/flachbodenbeutel-tierfutter.webp", alt: "Flachbodenbeutel aus Kraftpapier für Hundefutter in einer Wohnküche" },
  { id: "pharma", icon: "pharma", label: "Pharma & sensible Produkte",
    title: "Pharma & sensible Produkte",
    points: [
      "Für Produkte mit hohen Anforderungen an Schutz und Stabilität",
      "Geeignet für sensible Inhalte, Pulver oder technische Füllgüter",
      "Unterstützt Hygiene, Dokumentation und Produktsicherheit",
      "Beratung zu Material, Barrierewerten und Anwendung"
    ],
    link: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/", linkLabel: "Pharma-Verpackungsbeutel ansehen",
    image: "assets/doypack/doypack-13.webp", alt: "Standbodenbeutel für pulverförmige Produkte" },
  { id: "technical", icon: "industry", label: "Technische Produkte & Chemie",
    title: "Technische Produkte & Chemie",
    points: [
      "Schutz vor Feuchtigkeit, Korrosion und äußeren Einflüssen",
      "Geeignet für technische Füllgüter, Komponenten und Chemieprodukte",
      "Individuelle Materialkombinationen je nach Anwendung",
      "Abstimmung auf Lagerung, Transport und Verpackungsprozess"
    ],
    link: "https://www.toma-gmbh.de/chemie-branche/", linkLabel: "Verpackungen für die Chemie ansehen",
    image: "assets/flachbeutel/flachbeutel-schrauben.webp", alt: "Siegelrandbeutel mit Schrauben und Kleinteilen" }
];

/* ---- Verpackungsformen-Karussell (#verpackungen, values-carousel.js) ----
   Standardbilder der sechs Produktgruppen (wie #beutelformen auf der
   Übersichtsseite); der „Geeignet für …“-Kreis kommt als Text dazu (badge,
   Position/Größe in components.css .value-card__badge). Die letzte Karte ist
   ein Foto und nutzt fit: "cover". */
export const values = [
  { eyebrow: "Standbodenbeutel", title: "Doypack",
    text: "Für hochwertige Verkaufsverpackungen mit starker Regalwirkung.",
    image: "assets/doypack/doypack.webp", width: 1086, height: 1448,
    alt: "TOMA Doypack / Standbodenbeutel",
    badge: { top: "Geeignet für", main: "Doypacks" },
    link: "doypack.html", linkLabel: "Zu den Doypacks" },
  { eyebrow: "Flachbodenbeutel", title: "Box Pouch",
    text: "Für Premium-Produkte mit hoher Standfestigkeit und viel Fläche für Branding.",
    image: "assets/flachbodenbeutel/flachbodenbeutel-neutral.webp", width: 813, height: 1466,
    alt: "TOMA Flachbodenbeutel / Box Pouch",
    badge: { top: "Geeignet für", main: "Box-Pouch" },
    link: "flachbodenbeutel.html", linkLabel: "Zu den Flachbodenbeuteln" },
  { eyebrow: "Seitenfaltenbeutel", title: "Quadro-Seal-Pouch",
    text: "Für Premium-Verpackungen mit hoher Stabilität und viel Fläche für Design und Branding.",
    image: "assets/seitenfaltenbeutel/seitenfaltenbeutel-neutral.webp", width: 858, height: 1457,
    alt: "TOMA Seitenfaltenbeutel",
    badge: { top: "Verfügbar für", main: "Quadro-Seal-Pouch" },
    link: "seitenfaltenbeutel.html", linkLabel: "Zu den Seitenfaltenbeuteln" },
  { eyebrow: "Siegelrandbeutel", title: "Flachbeutel",
    text: "Für flache, sichere Verpackungen mit technischer oder hygienischer Anwendung.",
    image: "assets/flachbeutel/flachbeutel-neutral.webp", width: 1033, height: 1386,
    alt: "TOMA Siegelrandbeutel / Flachbeutel",
    badge: { top: "Umsetzbar für", main: "Flachbeutel" },
    link: "siegelrandbeutel.html", linkLabel: "Zu den Siegelrandbeuteln" },
  { eyebrow: "Folien auf Rolle", title: "Rollenware",
    text: "Für automatische Verpackungsprozesse, FFS-/HFFS-Anlagen und individuelle Produktionslinien.",
    image: "assets/rollenware/rollenware-neutral.webp", width: 1219, height: 1393,
    alt: "TOMA Rollenware – Folie auf Rolle",
    badge: { top: "Realisierbar für", main: "Rollenware" },
    link: "rollenware.html", linkLabel: "Zur Rollenware" },
  { eyebrow: "Nachfüllbeutel", title: "Spoutbag",
    text: "Wiederverschließbar mit Ausgießer – für Flüssigkeiten, pastöse Medien und Nachfüllware.",
    image: "assets/nachfuellbeutel/spoutbag-neutral.webp", width: 907, height: 1382,
    alt: "TOMA Spoutbag mit Ausgießer",
    badge: { top: "Auch möglich für", main: "Spoutbags" },
    link: "spoutbag.html", linkLabel: "Zu den Spoutbags" },
  { eyebrow: "Individuell", title: "Kundenspezifische Verpackung",
    text: "Für Produkte mit besonderen Anforderungen an Barriere, Format, Material, Druck und Ausstattung.",
    image: "assets/hochbarrierefolien/hochbarriere-kaffee-snacks.webp", width: 1024, height: 1024, fit: "cover",
    alt: "Individuell bedruckte Beutel für Kaffee, Müsli, Saft und Nüsse auf einem Holztisch",
    link: "#anfrage", linkLabel: "Angebot anfordern" }
];

/* ---- Galerie: entfällt ---- */
export const galleryItems = [];

/* ---- Testimonials: entfallen ---- */
export const testimonials = [];

/* ---- Branchen-Strip (Hero): entfällt – ruhiger Hero ---- */
export const branches = [];

/* ---- FAQ „Wussten Sie …“ (kategorisiert) ----
   Fragen setzen die Überschrift „Wussten Sie …“ fort, wie auf der Live-Seite. */
export const faqCategories = [
  { id: "grundlagen", label: "Grundlagen & Kennwerte" },
  { id: "auswahl", label: "Auswahl & Anwendung" }
];

export const faqs = [
  { cat: "grundlagen",
    q: "… was eine Hochbarrierefolie auszeichnet?",
    a: "Eine Hochbarrierefolie ist eine Verpackungsfolie mit besonders niedriger Durchlässigkeit gegenüber Sauerstoff, Feuchtigkeit oder Licht. Sie schützt empfindliche Produkte zuverlässig und trägt dazu bei, Qualität, Frische und Haltbarkeit länger zu bewahren." },
  { cat: "grundlagen",
    q: "… warum der OTR-Wert bei Verpackungsfolien so wichtig ist?",
    a: "Der OTR-Wert beschreibt, wie viel Sauerstoff durch ein Verpackungsmaterial dringt. Je niedriger dieser Wert ist, desto besser schützt die Folie vor Sauerstoff, Oxidation, Aromaverlust und Qualitätsverlust." },
  { cat: "grundlagen",
    q: "… was der WVTR-Wert über eine Verpackung aussagt?",
    a: "Der WVTR-Wert beschreibt die Wasserdampfdurchlässigkeit einer Folie. Er ist besonders wichtig bei trockenen, pulverförmigen oder feuchtigkeitsempfindlichen Produkten, die vor Feuchtigkeit geschützt werden müssen." },

  { cat: "auswahl",
    q: "… welche Produkte besonders von Hochbarrierefolien profitieren?",
    a: "Hochbarrierefolien eignen sich besonders für Kaffee, Snacks, Nüsse, Gewürze, Pulver, Tiernahrung, Pharma-Produkte, technische Füllgüter und Produkte mit empfindlichen Aromen oder Fetten." },
  { cat: "auswahl",
    q: "… wann EVOH oder Aluminium die bessere Barriere ist?",
    a: "Aluminium bietet eine sehr starke Barriere gegen Sauerstoff, Feuchtigkeit und Licht. EVOH ist besonders stark bei der Sauerstoffbarriere. Welche Lösung besser passt, hängt vom Produkt, der Feuchtigkeit, der gewünschten Haltbarkeit, der Optik und den Nachhaltigkeitszielen ab." }
];
