/* =====================================================================
   TOMA · Spoutbag / Nachfüllbeutel Landingpage — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/spoutbag-nachfuellbeutel/
   Bilder: standbodenbeutel-ausgiesser / doypack-nachfuellbeutel zeigen echte
   Spoutbags, alle übrigen sind Platzhalter aus dem Doypack-Bestand.
   ===================================================================== */

/* ---- Produkt: Name (Alt-/Aria-Texte) & Vorschaubild im Konfigurator ---- */
export const product = {
  name: "Spoutbag",
  configPhoto: "assets/doypack/standbodenbeutel-ausgiesser.webp"
};

/* ---- Feature-Explorer: entfällt auf dieser Seite ----
   Bauteile.svg enthält keinen Ausgießer; Verschluss- & Öffnungssysteme stehen
   in der statischen Sektion #ausgiesser. */
export const features = [];

/* ---- Anwendungsbereiche ---- */
export const applications = [
  { id: "food", icon: "food", label: "Lebensmittel",
    text: "Für flüssige und pastöse Lebensmittel sowie feine Produkte wie Zucker: Der Ausgießer ermöglicht eine kontrollierte Entleerung, die Verschlusskappe hält den Beutel sicher verschlossen.",
    meta: ["Gut dosierbar", "Wiederverschließbar", "Lebensmittelkonform je nach Aufbau"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack/doypack-tee.webp", alt: "Platzhalter: Spoutbag für Lebensmittel" },
  { id: "drinks", icon: "liquid", label: "Getränke",
    text: "Getränke lassen sich im Spoutbag sauber ausgießen und wieder verschließen – als leichte Alternative zu Flaschen, abgestimmt auf Füllgut und Barrierebedarf.",
    meta: ["Sauber ausgießen", "Leicht", "Barriere nach Bedarf"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack/standbodenbeutel-ausgiesser.webp", alt: "Standbodenbeutel mit Ausgießer für Getränke" },
  { id: "pet", icon: "pet", label: "Tiernahrung",
    text: "Für Tiernahrung bieten Spoutbags eine praktische Entnahme und einen sicheren Wiederverschluss – bedruckt in Ihrem Markenauftritt.",
    meta: ["Praktische Entnahme", "Wiederverschließbar", "Individuell bedruckt"], link: "https://www.toma-gmbh.de/tierfutter/",
    image: "assets/doypack/attribute-doypack.webp", alt: "Platzhalter: Spoutbag für Tiernahrung" },
  { id: "care", icon: "cosmetic", label: "Kosmetik & Reinigungsmittel",
    text: "Als Nachfüllbeutel für Duschgel, Seife oder Reinigungsmittel: platzsparend, gut dosierbar und eine effiziente Alternative zu starren Flaschen.",
    meta: ["Nachfüllbeutel", "Platzsparend", "Gut dosierbar"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack/doypack-nachfuellbeutel.webp", alt: "Nachfüllbeutel mit Ausgießer für Duschbad" },
  { id: "chemical", icon: "nonfood", label: "Chemie & technische Flüssigkeiten",
    text: "Für chemische und technische Flüssigkeiten stimmen wir Material und Ausgießer auf das Füllgut ab – auf Wunsch mit Spezial-Verbundfolien mit Barriere- oder antistatischen Eigenschaften.",
    meta: ["Spezial-Verbundfolien", "Sicher verschließbar", "Individuelle Ausgießer-Position"], link: "https://www.toma-gmbh.de/chemie-branche/",
    image: "assets/doypack/doypack-13.webp", alt: "Platzhalter: Spoutbag für technische Flüssigkeiten" },
  { id: "powder", icon: "powder", label: "Pulver & Granulate",
    text: "Auch Pulver, Granulate und feinkörnige Medien lassen sich über den Ausgießer gezielt dosieren – mit Feuchtigkeitsbarriere gegen Klumpenbildung.",
    meta: ["Feinkörnige Medien", "Feuchtigkeitsbarriere", "Gezielt dosierbar"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack/doypack-05.webp", alt: "Platzhalter: Spoutbag für Pulver und Granulate" },
  { id: "refill", icon: "liquid", label: "Nachfüllsysteme",
    text: "Refill-Konzepte mit Nachfüllbeuteln reduzieren Volumen und vereinfachen die Anwendung – als flexible Lösung statt starrer Verpackung.",
    meta: ["Refill-Konzept", "Weniger Volumen", "Wiederverschließbar"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack/doypack-nachfuellbeutel.webp", alt: "Nachfüllbeutel mit Ausgießer als Refill-Lösung" }
];

/* ---- Konfigurator: Schritte ---- */
export const configSteps = [
  { key: "application", title: "Anwendung / Füllgut", type: "single",
    hint: "Was möchten Sie verpacken?",
    options: ["Lebensmittel","Getränke","Tiernahrung","Kosmetik & Pflege","Reinigungsmittel","Chemie & technische Flüssigkeiten","Pulver & Granulate","Nachfüllsystem (Refill)","Andere Anwendung"] },
  { key: "materialGoal", title: "Materialaufbau", type: "single", summaryLabel: "Materialaufbau",
    hint: "Grobe Richtung – die finale Empfehlung erfolgt nach technischer Prüfung.",
    options: ["Material noch offen","PET / PE","PET / OPA / PE","PET / ALU / PE oder RCPP","Monomaterial PE / PP prüfen","Sterilisierbarer Aufbau","Technische Beratung erforderlich"] },
  { key: "sizeClass", title: "Beutelform & Füllvolumen", type: "single-with-input", summaryLabel: "Beutelform",
    hint: "Standbodenbeutel oder Flachbeutel? Format und Füllvolumen passen wir individuell an Ihr Produkt an.",
    options: ["Standbodenbeutel mit Ausgießer","Flachbeutel mit Ausgießer","Konturierte Beutelform","Beutelform noch offen"],
    input: { key: "fillVolume", label: "Gewünschtes Füllvolumen (Freitext)", placeholder: "z. B. 250 ml, 500 ml, 1 l" } },
  { key: "closure", title: "Ausgießer & Verschluss", type: "single", summaryLabel: "Ausgießer",
    hint: "Ausgießer z. B. mit 10,5 mm, 16 mm oder 20 mm Durchmesser – und mehr. Position mittig, 45° seitlich u. v. m.",
    options: ["Ausgießer mit Schraubkappe","Sicherheits-Drehverschluss mit Erstöffnungsgarantie","Ausgießer ohne Kappe","Noch offen"] },
  { key: "features", title: "Ausstattung & Öffnung", type: "multi",
    hint: "Mehrfachauswahl möglich.",
    options: ["Tragegriff","Euro-Lochung","Aufreißkerbe","Laserperforation","Seitliche Ausgießer-Position","Antistatische Folie","Sonderlösung"] },
  { key: "recyclingGoal", title: "Recycling- & PPWR-Anforderungen", type: "single",
    hint: "Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab.",
    options: ["Anforderungen noch offen","Recyclingorientierte Lösung prüfen","Monomaterial bevorzugt","Bestehende Materialspezifikation vorhanden","Technische Rücksprache gewünscht"],
    note: true },
  { key: "finish", title: "Optik & Bedruckung", type: "single", summaryLabel: "Optik",
    hint: "Tiefdruck, Flexodruck oder Digitaldruck – das passende Verfahren klären wir im Projekt.",
    options: ["Bedruckt","Transparent","Alufarben","Einfarbig","Gestaltung noch offen"],
    link: { label: "Mehr über Bedruckung", href: "https://www.toma-gmbh.de/drucktechnik/" } },
  { key: "summary", title: "Zusammenfassung", type: "summary",
    hint: "Ihre Auswahl im Überblick – übernehmen Sie sie direkt in die Anfrage." }
];

/* ---- Konfigurator: Regeln (deaktivierte Optionen mit Begründung) ---- */
export const configRules = {};

/* ---- Mapping Feature-/Option-Labels auf SVG-Layer (Live-Vorschau) ---- */
export const layerMap = {
  "Ausgießer mit Schraubkappe": "spout",
  "Sicherheits-Drehverschluss mit Erstöffnungsgarantie": "spout",
  "Ausgießer ohne Kappe": "spout",
  "Euro-Lochung": "euroloch",
  "Aufreißkerbe": "notch",
  "Laserperforation": "perforation",
  "Bedruckt": "print"
};

/* ---- Vorteile-Karussell („Warum Spoutbags von TOMA“) ---- */
export const values = [
  {
    title: "Wiederverschließbar",
    text: "Durch Ausgießer und Verschlusskappe lassen sich Spoutbags mehrfach öffnen und wieder sicher verschließen.",
    image: "assets/doypack/standbodenbeutel-ausgiesser.webp",
    alt: "Standbodenbeutel mit Ausgießer und Schraubkappe",
    accent: true
  },
  {
    title: "Sauber dosierbar",
    text: "Für Flüssigkeiten, pastöse Medien, Pulver oder Granulate – der Ausgießer ermöglicht eine kontrollierte Entleerung.",
    image: "assets/doypack/doypack-tee.webp",
    alt: "Platzhalter: Beutel für dosierbare Produkte",
    accent: false
  },
  {
    title: "Platzsparend",
    text: "Weniger Platzbedarf bei Lagerung, Transport und Entsorgung als viele starre Verpackungen.",
    image: "assets/doypack/attribute-doypack.webp",
    alt: "Platzhalter: Beutel in verschiedenen Größen",
    accent: false
  },
  {
    title: "Vielseitig einsetzbar",
    text: "Für Food, Non-Food, Kosmetik, Tiernahrung oder Reinigungsmittel – bis hin zu Getränken und industriellen Produkten.",
    image: "assets/doypack/doypack-1.webp",
    alt: "Platzhalter: Beutel für verschiedene Füllgüter",
    accent: true
  },
  {
    title: "Individuell anpassbar",
    text: "Format, Material, Barriere, Ausgießer und Bedruckung stimmen wir auf Produkt und Marke ab.",
    image: "assets/doypack/doypack-hero.webp",
    alt: "Platzhalter: individuell gestalteter Beutel",
    accent: false
  },
  {
    title: "Regalstark präsentierbar",
    text: "Als Standbodenbeutel mit stabiler Bodenfalte steht der Spoutbag sicher im Regal.",
    image: "assets/doypack/doypack-09.webp",
    alt: "Platzhalter: Standbodenbeutel im Regal",
    accent: false
  },
  {
    title: "Effiziente Nachfülllösung",
    text: "Als Nachfüllbeutel eine Alternative zu starren Verpackungen wie Flaschen oder Kanistern.",
    image: "assets/doypack/doypack-nachfuellbeutel.webp",
    alt: "Nachfüllbeutel mit Ausgießer für Duschbad",
    accent: true
  },
  {
    title: "Für Abfüllanlagen & Handbefüllung",
    text: "Geeignet für automatische Abfüllanlagen oder manuelle Befüllung – mit hoher Prozesssicherheit bei korrektem Materialdesign.",
    image: "assets/doypack/doypack-05.webp",
    alt: "Platzhalter: Beutel für die Abfüllung",
    accent: false
  },
  {
    title: "Bedruckt in Ihrem Layout",
    text: "Tiefdruck mit bis zu 10 Farben inkl. Sonderfarben, Flexodruck oder Digitaldruck – Schutz und Präsentation in einer Lösung.",
    image: "assets/doypack/doypack-aromaventil.webp",
    alt: "Platzhalter: bedruckter Beutel in hochwertiger Optik",
    accent: false
  }
];

/* ---- Im Einsatz / Gallery ---- */
export const galleryItems = [
  {
    src: "assets/doypack/doypack-nachfuellbeutel.webp",
    alt: "Nachfüllbeutel mit Ausgießer für Duschbad",
    title: "Kosmetik & Pflege",
    desc: "Nachfüllbeutel mit Ausgießer – platzsparend, gut dosierbar und wiederverschließbar.",
    size: "tall"
  },
  {
    src: "assets/doypack/standbodenbeutel-ausgiesser.webp",
    alt: "Standbodenbeutel mit seitlichem Ausgießer",
    title: "Standbodenbeutel mit Ausgießer",
    desc: "Stabile Bodenfalte für den Regalauftritt, Ausgießer seitlich positioniert.",
    size: "normal"
  },
  {
    src: "assets/doypack/doypack-tee.webp",
    alt: "Platzhalter: Spoutbag für Lebensmittel",
    title: "Lebensmittel",
    desc: "Für flüssige, pastöse oder feinkörnige Lebensmittel – Barriere passend zum Füllgut.",
    size: "normal"
  },
  {
    src: "assets/doypack/doypack-13.webp",
    alt: "Platzhalter: Spoutbag für Reinigungsmittel und technische Flüssigkeiten",
    title: "Reinigung & Technik",
    desc: "Nachfülllösung für Reinigungsmittel und technische Flüssigkeiten statt Flasche oder Kanister.",
    size: "wide"
  }
];

/* ---- Testimonials (von der bestehenden Spoutbag-Seite übernommen) ---- */
export const testimonials = [
  { quote: "Nachhaltige Verpackungslösungen werden für uns immer wichtiger. Besonders überzeugt hat uns die Kombination aus Funktionalität und ressourcenschonendem Ansatz.",
    name: "Swetlana H.", role: "Nachhaltigkeitsmanagement", branch: "Lebensmittel & Genuss" },
  { quote: "Die hohe Flexibilität und die Möglichkeit, individuelle Lösungen umzusetzen, haben uns in der Zusammenarbeit besonders überzeugt.",
    name: "Jens R.", role: "Gruppenleiter Einkauf", branch: "E-Commerce & Versand" },
  { quote: "Im täglichen Einsatz zählen vor allem zuverlässige Abläufe und eine unkomplizierte Handhabung – genau das funktioniert hier sehr gut.",
    name: "Ömer C.", role: "Marketing", branch: "Lebensmittel & Genuss" }
];

/* ---- Branchen-Strip (Hero) ---- */
export const branches = [
  { icon: "food", label: "Lebensmittel", href: "https://www.toma-gmbh.de/food/" },
  { icon: "pet", label: "Tiernahrung", href: "https://www.toma-gmbh.de/tierfutter/" },
  { icon: "cosmetic", label: "Kosmetik & Reinigung", href: "https://www.toma-gmbh.de/non-food/" },
  { icon: "nonfood", label: "Chemie & Technik", href: "https://www.toma-gmbh.de/chemie-branche/" },
  { icon: "liquid", label: "Refill-Konzepte", href: "https://www.toma-gmbh.de/non-food/" }
];

/* ---- FAQ (kategorisiert, max. 5 Fragen pro Kategorie sichtbar) ---- */
export const faqCategories = [
  { id: "grundlagen", label: "Grundlagen" },
  { id: "varianten", label: "Varianten" },
  { id: "ausgiesser", label: "Ausgießer & Verschluss" },
  { id: "material", label: "Material & Barriere" },
  { id: "projekt", label: "Bedruckung & Projekt" }
];

export const faqs = [
  { cat: "grundlagen",
    q: "Was ist ein Spoutbag bzw. Nachfüllbeutel?",
    a: "Ein Spoutbag ist eine flexible Verpackung mit Ausgießer. Als Standbodenbeutel (Doypack) steht er stabil im Regal, als Flachbeutel mit Ausgießer ist er eine effiziente, wiederverschließbare Lösung für eine gut dosierbare Entleerung." },
  { cat: "grundlagen",
    q: "Sind Nachfüllbeutel wiederverschließbar?",
    a: "Durch den Ausgießer mit passender Verschlusskappe lassen sich Spoutbags mehrfach öffnen und wieder sicher verschließen. Das erleichtert die Anwendung und reduziert Produktverluste." },
  { cat: "grundlagen",
    q: "Lassen sich Spoutbags gut dosieren?",
    a: "Der Ausgießer ermöglicht eine kontrollierte Entleerung. Dadurch eignen sich Spoutbags besonders für Flüssigkeiten, pastöse Medien, Pulver, Granulate oder feine Produkte wie Zucker." },
  { cat: "grundlagen",
    q: "Können Spoutbags eine Alternative zu starren Verpackungen sein?",
    a: "Flexible Nachfüllbeutel benötigen weniger Platz bei Lagerung und Transport als viele starre Verpackungen. Gleichzeitig bieten sie eine praktische Handhabung für Endkunden." },
  { cat: "grundlagen",
    q: "Für welche Branchen sind Spoutbags geeignet?",
    a: "Sie werden unter anderem für Food, Non-Food, Kosmetik, Reinigungsmittel, Tiernahrung, Getränke, industrielle Produkte und pastöse Medien eingesetzt." },

  { cat: "varianten",
    q: "In welchen Ausführungen sind Spoutbags erhältlich?",
    a: "Spoutbags können als Standbodenbeutel mit stabiler Bodenfalte oder als Flachbeutel mit Ausgießer umgesetzt werden. Welche Variante passt, hängt vom Füllgut, der Anwendung und der gewünschten Präsentation ab." },
  { cat: "varianten",
    q: "Können Spoutbags individuell angepasst werden?",
    a: "Format, Material, Barriere, Ausgießer, Verschluss und Bedruckung können auf Produkt und Marke abgestimmt werden. So entsteht eine Verpackungslösung, die funktional und optisch zum Einsatzbereich passt." },
  { cat: "varianten",
    q: "Welche Optiken sind möglich?",
    a: "Transparente, alufarbene oder einfarbige Ausführungen je nach gewünschter Produktwirkung – oder bedruckte Spoutbags im eigenen Layout. Auch konturierte Beutelformen für eine individuelle, markenstarke Optik sind möglich." },
  { cat: "varianten",
    q: "Gibt es Spoutbags mit Tragegriff oder Euro-Lochung?",
    a: "Ja. Ein Tragegriff erleichtert Handhabung und Transport, eine Euro-Lochung ermöglicht hängende Displays oder Zweitplatzierungen." },

  { cat: "ausgiesser",
    q: "Welche Ausgießer sind möglich?",
    a: "Zum Beispiel Ausgießer mit 10,5 mm, 16 mm oder 20 mm Durchmesser – und mehr. Sie sind mit oder ohne Schraubkappe in diversen Formen erhältlich und eignen sich für Flüssigkeiten, pastöse und feinkörnige Medien." },
  { cat: "ausgiesser",
    q: "Gibt es einen Erstöffnungsschutz?",
    a: "Ja. Ausgießer mit Erstöffnungsgarantie bzw. ein Sicherheits-Drehverschluss sorgen für ein kontrolliertes erstes Öffnen – zum Beispiel für den Verkauf am POS." },
  { cat: "ausgiesser",
    q: "Wo kann der Ausgießer sitzen?",
    a: "Die Position des Ausgusses ist flexibel – etwa mittig oder mit 45° seitlich und vieles mehr, passend zur Nutzung und Entleerung." },
  { cat: "ausgiesser",
    q: "Welche Öffnungshilfen gibt es zusätzlich?",
    a: "Eine Aufreißkerbe (Tear-Notch) sowie eine Laserperforation für eine gerade Beutelöffnung. Dazu kommen Euroloch oder Tragegriff für Präsentation und Handhabung." },

  { cat: "material",
    q: "Welche Materialaufbauten sind typisch?",
    a: "Je nach Füllgut, Haltbarkeitsanforderung und Prozess: PET / PE (transparent, kosteneffizient, Basisschutz), PET / OPA / PE (verbesserte Sauerstoff- und Durchstoßfestigkeit), PET / ALU / PE oder RCPP (sehr hohe Barriere gegen Sauerstoff, Wasserdampf und Licht) sowie Monomaterial-PE- oder -PP-Strukturen." },
  { cat: "material",
    q: "Welche Barrierefunktionen sind möglich?",
    a: "Sauerstoffbarriere gegen Oxidation, Feuchtigkeitsbarriere gegen Austrocknung oder Klumpenbildung, UV-Schutz für empfindliche Produkte und Aromabarriere für die Qualitätserhaltung – abgestimmt auf Ihr Füllgut." },
  { cat: "material",
    q: "Sind Spoutbags recyclingfähig?",
    a: "Monomaterial-PE- oder -PP-Strukturen sind sortenrein recyclingfähig. Ob ein Aufbau die PPWR-Anforderungen erfüllt, hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab." },
  { cat: "material",
    q: "Gibt es sterilisierbare Spoutbags?",
    a: "Ja, dafür werden spezielle Strukturen eingesetzt – ein Beispiel ist PET12 / AL7 / PA15 / RCPP70. Den passenden Aufbau stimmen wir auf Füllgut und Prozess ab." },
  { cat: "material",
    q: "Sind Spoutbags für Lebensmittel geeignet?",
    a: "Ja, lebensmittelkonforme Lösungen nach EU 10/2011 sind je nach Materialaufbau möglich. TOMA-Produkte werden mit den zugehörigen Zertifikaten für die Zulassung im Nahrungsmittelbereich gefertigt; alle genannten Zertifizierungen sind nachweisbar." },

  { cat: "projekt",
    q: "Welche Druckverfahren sind möglich?",
    a: "Tiefdruck (Rotogravure) mit hoher Druckqualität und bis zu 10 Farben inkl. Sonderfarben – ideal für große Auflagen. Flexodruck ist wirtschaftlich bei mittleren Auflagen. Digitaldruck eignet sich für kleine Mengen mit hoher Flexibilität." },
  { cat: "projekt",
    q: "Eignen sich Spoutbags für automatische Abfüllanlagen?",
    a: "Ja, Spoutbags eignen sich für automatische Abfüllanlagen ebenso wie für die manuelle Befüllung. Eine hohe Prozesssicherheit erreichen Sie mit dem korrekten Materialdesign." },
  { cat: "projekt",
    q: "Welche Mengen sind möglich?",
    a: "Wir arbeiten projektbezogen. Das Druckverfahren richtet sich unter anderem nach der Auflage – Ihre konkrete Menge stimmen wir gern individuell ab." },
  { cat: "projekt",
    q: "Wie läuft die Anfrage ab?",
    a: "Sie senden uns die wichtigsten Eckdaten zu Füllgut, Füllvolumen und Ausgießer. Wir prüfen Material, Machbarkeit und Umsetzung und melden uns mit einer fundierten Einschätzung." }
];
