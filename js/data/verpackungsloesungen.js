/* =====================================================================
   TOMA · Verpackungslösungen (Übersichtsseite) — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/verpackungsloesungen/
   Übersichtsseite: kein Feature-Explorer, kein Konfigurator, keine Galerie,
   keine Testimonials; das Vorteile-Karussell zeigt hier die Beutelformen.
   ===================================================================== */

/* ---- Seite: Name (Alt-/Aria-Texte) ---- */
export const product = {
  name: "Verpackungslösungen",
  configPhoto: "assets/verpackungsloesungen/beutelsortiment-freigestellt.webp"
};

/* ---- Feature-Explorer & Konfigurator: entfallen ---- */
export const features = [];
export const configSteps = [];
export const configRules = {};
export const layerMap = {};

/* ---- Branchen- und Use-Cases (Tabs im Abschnitt #branchen) ----
   points = typische Anforderungen laut Live-Seite; title überschreibt die
   Überschrift im Panel, label bleibt der Tab-Text. */
export const applications = [
  { id: "food", icon: "food", label: "Lebensmittel",
    title: "Lebensmittel und Genussmittel",
    points: [
      "Schutz vor Feuchte, Sauerstoff und Aroma",
      "Sichere und stabile Siegelung",
      "Klare Kennzeichnung und Pflichtangaben",
      "Optional: Fett- und Aromaträger, Migrationsthemen"
    ],
    link: "https://www.toma-gmbh.de/food/", linkLabel: "Lebensmittelverpackung ansehen",
    image: "assets/doypack/doypack-10-e1771314983425.webp", alt: "Bedruckter Standbodenbeutel für Müsli auf einem Frühstückstisch" },
  { id: "pharma", icon: "pharma", label: "Pharma & MedTech",
    title: "Pharma, MedTech und sensible Produkte",
    points: [
      "Klare und reproduzierbare Spezifikationen",
      "Dokumentation und Nachweisführung",
      "Ggf. Rückverfolgbarkeit",
      "Risikoarme und strukturierte Freigabeprozesse"
    ],
    link: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/", linkLabel: "Pharma-Verpackungsbeutel ansehen",
    image: "assets/doypack/doypack-13.webp", alt: "Standbodenbeutel für pulverförmige Produkte" },
  { id: "coffee", icon: "coffee", label: "Kaffee & Tee",
    title: "Kaffee, Tee und Trockenprodukte",
    points: [
      "Aroma- und Frischeschutz",
      "Schutz vor Sauerstoff",
      "Leichtes Öffnen und Wiederverschließen",
      "Bei Kaffee optional Ventil, sofern verfügbar"
    ],
    link: "https://www.toma-gmbh.de/kaffeeverpackung/", linkLabel: "Kaffeeverpackung ansehen",
    image: "assets/verpackungsloesungen/kaffee-seitenfaltenbeutel.webp", alt: "Bedruckte Kaffeebeutel mit Aromaschutzventil in einer Rösterei" },
  { id: "industry", icon: "industry", label: "Industrie & Chemie",
    title: "Industrie und Chemie",
    points: [
      "Durchstoß- und Reißfestigkeit",
      "Dichtigkeit im Lager und Transport",
      "Gut lesbare Kennzeichnung",
      "Praxistauglich für Werkslogistik und Versand"
    ],
    link: "https://www.toma-gmbh.de/chemie-branche/", linkLabel: "Verpackungen für die Chemie ansehen",
    image: "assets/doypack/standbodenbeutel-ausgiesser.webp", alt: "Standbodenbeutel mit Ausgießer und Schraubkappe" },
  { id: "pet", icon: "pet", label: "Tiernahrung",
    title: "Tiernahrung",
    points: [
      "Hohe mechanische Belastbarkeit",
      "Dichtigkeit und Lagerstabilität",
      "Wiederverschluss und Portionierbarkeit",
      "Geeignet für größere Füllgewichte"
    ],
    link: "https://www.toma-gmbh.de/tierfutter/", linkLabel: "Tierfutterverpackung ansehen",
    image: "assets/doypack/doypack-cat-food-e1771315511164.webp", alt: "Standbodenbeutel mit Sichtfenster für Hunde- und Katzenfutter" },
  { id: "ecommerce", icon: "nonfood", label: "E-Commerce",
    title: "E-Commerce und Ersatzteile",
    points: [
      "Schutz vor Stößen und Belastung",
      "Kombination aus Außen- und Innenverpackung",
      "Ggf. Manipulationsschutz",
      "Geeignet für Einzel- und Paketversand"
    ],
    link: "#anfrage", linkLabel: "Anforderungen besprechen",
    image: "assets/verpackungsloesungen/standbodenbeutel-schwarz-sichtfenster.webp", alt: "Zwei schwarze Standbodenbeutel aus Kraftpapier mit Sichtfenster" },
  { id: "cosmetic", icon: "cosmetic", label: "Kosmetik",
    title: "Kosmetik und Körperpflege",
    points: [
      "Produktschutz und Materialverträglichkeit",
      "Hochwertige Optik und Haptik",
      "Saubere Kennzeichnung (INCI, Anwendung)",
      "Marken- und Regalwirkung"
    ],
    link: "https://www.toma-gmbh.de/non-food/", linkLabel: "Non-Food-Verpackungen ansehen",
    image: "assets/doypack/doypack-nachfuellbeutel.webp", alt: "Nachfüllbeutel mit Ausgießer für Duschbad" }
];

/* ---- Beutelformen-Karussell (#beutelformen, values-carousel.js) ----
   Standardbilder der Produktseiten; Kurztexte wie auf der Startseite. */
export const values = [
  { eyebrow: "Standbodenbeutel", title: "Doypack",
    text: "Steht stabil im Regal und ist vielseitig – für Lebensmittel, Kaffee, Tierfutter und Non-Food.",
    image: "assets/doypack/doypack.webp", width: 1086, height: 1448, alt: "TOMA Doypack / Standbodenbeutel",
    link: "doypack.html", linkLabel: "Zu den Doypacks" },
  { eyebrow: "Box Pouch", title: "Flachbodenbeutel",
    text: "Maximale Standfestigkeit, mehr Füllvolumen und zusätzliche Druckfläche für eine exklusive Präsentation.",
    image: "assets/flachbodenbeutel/flachbodenbeutel-neutral.webp", width: 813, height: 1466, alt: "TOMA Flachbodenbeutel / Box Pouch",
    link: "flachbodenbeutel.html", linkLabel: "Zu den Flachbodenbeuteln" },
  { eyebrow: "Quad Seal Pouch", title: "Seitenfaltenbeutel",
    text: "Der Klassiker für Kaffee, Tee und Gewürze – mit Barrierefolie und Aromaventil.",
    image: "assets/seitenfaltenbeutel/seitenfaltenbeutel-neutral.webp", width: 858, height: 1457, alt: "TOMA Seitenfaltenbeutel",
    link: "seitenfaltenbeutel.html", linkLabel: "Zu den Seitenfaltenbeuteln" },
  { eyebrow: "Flachbeutel", title: "Siegelrandbeutel",
    text: "An drei Seiten versiegelt, flexibel einsetzbar und die günstigste Beutelform.",
    image: "assets/flachbeutel/flachbeutel-neutral.webp", width: 1033, height: 1386, alt: "TOMA Siegelrandbeutel / Flachbeutel",
    link: "siegelrandbeutel.html", linkLabel: "Zu den Siegelrandbeuteln" },
  { eyebrow: "Nachfüllbeutel", title: "Spoutbag",
    text: "Wiederverschließbar mit Ausgießer – für Flüssigkeiten, pastöse Medien und Nachfüllware.",
    image: "assets/nachfuellbeutel/spoutbag-neutral.webp", width: 907, height: 1382, alt: "TOMA Spoutbag mit Ausgießer",
    link: "spoutbag.html", linkLabel: "Zu den Spoutbags" },
  { eyebrow: "Folien auf Rolle", title: "Rollenware",
    text: "Mono- oder Verbundfolie zur Verarbeitung direkt auf Ihrer FFS- oder HFFS-Anlage.",
    image: "assets/rollenware/rollenware-neutral.webp", width: 1219, height: 1393, alt: "TOMA Rollenware – Folie auf Rolle",
    link: "rollenware.html", linkLabel: "Zur Rollenware" }
];

/* ---- Galerie: entfällt ---- */
export const galleryItems = [];

/* ---- Testimonials: entfallen ---- */
export const testimonials = [];

/* ---- Branchen-Strip (Hero): entfällt – ruhiger Hero ---- */
export const branches = [];

/* ---- FAQ „Wussten Sie …“ (kategorisiert) ---- */
export const faqCategories = [
  { id: "auswahl", label: "Auswahl & Vorgehen" },
  { id: "nachhaltigkeit", label: "Nachhaltigkeit & Kosten" }
];

export const faqs = [
  { cat: "auswahl",
    q: "Wie gehen Sie bei der Auswahl einer passenden Verpackungslösung vor?",
    a: "Der erste Schritt ist ein strukturiertes Briefing. Dazu gehören Informationen zu Produkt, benötigte Bedarfsmenge, Schutzbedarf, Abfüll- und Versandprofil sowie Anforderungen an Kennzeichnung und Design. Auf dieser Basis lässt sich eine Verpackungslösung ableiten, die technisch passt und im Prozess stabil läuft." },
  { cat: "auswahl",
    q: "Worauf sollte man bei Verpackungslösungen für Lebensmittel achten?",
    a: "Bei Lebensmittelverpackungen stehen Produktschutz, sichere Siegelung und klare Kennzeichnung im Vordergrund. Zusätzlich müssen Materialeignung, Migrationsthemen und Prozessanforderungen berücksichtigt werden, damit die Verpackung im Alltag zuverlässig funktioniert." },
  { cat: "auswahl",
    q: "Wann sind maßgeschneiderte Verpackungslösungen sinnvoll?",
    a: "Individuelle Verpackungslösungen eignen sich immer dann, wenn Standardformate oder -materialien Anforderungen an Produktschutz, Handling, Prozess oder Markenauftritt nicht vollständig erfüllen. In diesen Fällen werden Material, Aufbau und Ausstattung gezielt auf die Anwendung abgestimmt. Zu beachten ist immer die Wirtschaftlichkeit der Produktion in Relation zu der benötigten Menge." },

  { cat: "nachhaltigkeit",
    q: "Was zeichnet eine nachhaltige Verpackungslösung aus?",
    a: "Nachhaltige Verpackungslösungen basieren nicht auf einzelnen Schlagworten, sondern auf einem ausgewogenen Zusammenspiel aus Materialeinsatz, Schutzfunktion, Prozessstabilität und nachvollziehbarer Kommunikation. Entscheidend ist, dass ökologische Ziele technisch sinnvoll umgesetzt und belegt werden können." },
  { cat: "nachhaltigkeit",
    q: "Wie lassen sich Verpackungskosten sinnvoll steuern?",
    a: "Verpackungskosten lassen sich vor allem durch klare Anforderungen und Standardisierung steuern. Wenige definierte Formate, eine durchdachte Materiallogik und wiederholbare Prozesse tragen dazu bei, Komplexität zu reduzieren und Wirtschaftlichkeit zu verbessern." }
];
