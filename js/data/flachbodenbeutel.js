/* =====================================================================
   TOMA · Flachbodenbeutel / Box Pouch Landingpage — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/flachbodenbeutel-box-pouch/
   Bilder: vorerst Platzhalter aus dem Doypack-Bestand (werden ersetzt).
   ===================================================================== */

/* ---- Produkt: Name (Alt-/Aria-Texte) & Vorschaubild im Konfigurator ---- */
export const product = {
  name: "Flachbodenbeutel",
  configPhoto: "assets/doypack/doypack.webp" // TODO: Box-Pouch-Bild
};

/* ---- Feature-Explorer: Ausstattungsdetails (Bauteile.svg) ----
   svgId = Element-ID in assets/doypack/Bauteile.svg (vorerst Doypack-Grafik). */
export const features = [
  { id: "euroloch", label: "Euroloch", svgId: "Euroloch",
    desc: "Präsentationsoption zum Aufhängen am Verkaufsständer.",
    case: "Typisch für Snacks, Gewürze und Aktionsware im Handel.", link: null },
  { id: "corners", label: "Abgerundete Ecken", svgId: "Abgerundete_Ecken",
    desc: "Weiche Ecken unterstreichen die hochwertige Produktpräsentation der Box Pouch.",
    case: "Premium-Anmutung bei Genussmitteln und Pflegeprodukten.", link: null },
  { id: "notch", label: "Tear-Notch", svgId: "Einreisskerbe",
    desc: "Aufreißhilfe für ein sauberes Öffnen – optional mit Laserperforation für eine gerade Öffnung.",
    case: "Produkte, die ohne Werkzeug geöffnet werden sollen.", link: "https://www.toma-gmbh.de/perforationen/" },
  { id: "zipper", label: "Zipper", svgId: "Zipper",
    desc: "Wiederverschluss als Zipper, Pulverzipper, Doppelzipper, Slider- oder Front-/Pocketzipper.",
    case: "Kaffee, Snacks, Trockenfrüchte, Tiernahrung.", link: null },
  { id: "valve", label: "Aromaventil", svgId: "Aromaventil",
    desc: "Ventilkonzept, wenn benötigt: lässt Gase entweichen und bewahrt das Aroma.",
    case: "Frisch gerösteter Kaffee.", link: "https://www.toma-gmbh.de/kaffeeverpackung/" }
];

/* ---- Anwendungsbereiche ---- */
export const applications = [
  { id: "food", icon: "food", label: "Lebensmittel & Trockenprodukte",
    text: "Für trockene Lebensmittel verbindet die Box Pouch hohe Standfestigkeit, großes Füllvolumen und einen Materialaufbau, der Feuchtigkeit und Sauerstoff abhält.",
    meta: ["Zipper", "Feuchtigkeitsbarriere", "Sichtfenster"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack/doypack-13.webp", alt: "Platzhalter: Beutel für trockene Lebensmittel" },
  { id: "coffee", icon: "coffee", label: "Kaffee, Tee & Gewürze",
    text: "Genussmittel profitieren von Aroma- und Lichtbarriere – bei frisch geröstetem Kaffee ergänzt um ein Aromaventil.",
    meta: ["Aromaventil", "Aromabarriere", "Zipper"], link: "https://www.toma-gmbh.de/kaffeeverpackung/",
    image: "assets/doypack/doypack-1.webp", alt: "Platzhalter: bedruckte Kaffeebeutel" },
  { id: "snacks", icon: "food", label: "Snacks & Trockenfrüchte",
    text: "Große Druckflächen auf Front, Rückseite und Seitenfalten sorgen für starke Regalwirkung – der Wiederverschluss hält Snacks frisch.",
    meta: ["360°-Branding", "Zipper", "Tear-Notch"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack/doypack-09.webp", alt: "Platzhalter: Beutel für Snacks und Trockenfrüchte" },
  { id: "pet", icon: "pet", label: "Tiernahrung",
    text: "Größeres Füllvolumen, stabiler Stand und robuste Materialaufbauten – Box Pouches eignen sich gut für Tiernahrung.",
    meta: ["Großes Volumen", "Slider-Zipper", "Standfest"], link: "https://www.toma-gmbh.de/tierfutter/",
    image: "assets/doypack/attribute-doypack.webp", alt: "Platzhalter: Beutel in verschiedenen Größen" },
  { id: "cosmetic", icon: "cosmetic", label: "Hygiene & Pflege",
    text: "Hochwertige Optik am POS mit Matt-, Glanz- oder Soft-Touch-Lacken für Hygiene- und Pflegeprodukte.",
    meta: ["Soft-Touch", "Sichtfenster", "Euroloch"], link: "https://www.toma-gmbh.de/verpackungsloesungen/",
    image: "assets/doypack/doypack-05.webp", alt: "Platzhalter: Premium-Beutel für Pflegeprodukte" },
  { id: "chemie", icon: "liquid", label: "Chemie",
    text: "Auch für chemische Produkte einsetzbar – je nach Materialaufbau und abgestimmt auf die Anforderungen des Füllguts.",
    meta: ["Materialaufbau", "Barriere", "Technische Prüfung"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack/doypack-nachfuellbeutel.webp", alt: "Platzhalter: Beutel für Non-Food-Produkte" },
  { id: "nonfood", icon: "nonfood", label: "Non-Food",
    text: "Außerhalb des Lebensmittelbereichs überzeugt die Box Pouch durch Stabilität, Präsentation und flexible Ausstattung.",
    meta: ["Robust", "Individuell", "Wiederverschluss"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack/doypack-tee.webp", alt: "Platzhalter: individuell bedruckter Beutel" }
];

/* ---- Konfigurator: Schritte ---- */
export const configSteps = [
  { key: "application", title: "Anwendung / Füllgut", type: "single",
    hint: "Was möchten Sie verpacken?",
    options: ["Trockene Lebensmittel","Kaffee / Tee","Gewürze","Snacks & Trockenfrüchte","Tiernahrung","Hygiene & Pflege","Chemie","Non-Food","Andere Anwendung"] },
  { key: "materialGoal", title: "Materialaufbau", type: "single",
    hint: "Grobe Richtung – die finale Empfehlung erfolgt nach technischer Prüfung.",
    options: ["Material noch offen","PET / PE","PET / OPA / PE","PET / ALU / PE","Monomaterial PE / PP prüfen","Kraftpapier-Kombination","Technische Beratung erforderlich"] },
  { key: "sizeClass", title: "Format / Füllvolumen", type: "single-with-input",
    hint: "Format und Volumen passen wir individuell an Ihr Produkt an.",
    options: ["Kompakt","Mittel","Groß","Sonderformat"],
    input: { key: "fillVolume", label: "Gewünschtes Füllvolumen (Freitext)", placeholder: "z. B. 250 g, 1 kg, 5 kg" } },
  { key: "closure", title: "Verschluss", type: "single",
    hint: "Wie soll der Beutel verschlossen bzw. wiederverschlossen werden?",
    options: ["Kein Wiederverschluss","Druckverschluss","Zipper","Pulverzipper","Doppelzipper","Slider-Zipper","Front-/Pocketzipper","Ausgießer","Noch offen"] },
  { key: "features", title: "Öffnung & Ausstattung", type: "multi",
    hint: "Mehrfachauswahl möglich.",
    options: ["Tear-Notch","Laserperforation","Euroloch","Abgerundete Ecken","Aromaventil","Sichtfenster"] },
  { key: "recyclingGoal", title: "Recycling- & PPWR-Anforderungen", type: "single",
    hint: "Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab.",
    options: ["Anforderungen noch offen","Recyclingorientierte Lösung prüfen","Monomaterial bevorzugt","Bestehende Materialspezifikation vorhanden","Technische Rücksprache gewünscht"],
    note: true },
  { key: "finish", title: "Bedruckung & Oberfläche", type: "single",
    hint: "Tiefdruck, Flexodruck oder Digitaldruck – das passende Verfahren klären wir im Projekt.",
    options: ["Bedruckt","Unbedruckt","Matt","Glänzend","Soft-Touch prüfen","Sichtfenster","Gestaltung noch offen"],
    link: { label: "Mehr über individuelle Bedruckung", href: "https://www.toma-gmbh.de/drucktechnik/" } },
  { key: "summary", title: "Zusammenfassung", type: "summary",
    hint: "Ihre Auswahl im Überblick – übernehmen Sie sie direkt in die Anfrage." }
];

/* ---- Konfigurator: Regeln (deaktivierte Optionen mit Begründung) ---- */
export const configRules = {};

/* ---- Mapping Feature-/Option-Labels auf SVG-Layer (Live-Vorschau) ---- */
export const layerMap = {
  "Druckverschluss": "zipper",
  "Zipper": "zipper",
  "Pulverzipper": "zipper",
  "Doppelzipper": "zipper",
  "Slider-Zipper": "zipper",
  "Front-/Pocketzipper": "zipper",
  "Ausgießer": "spout",
  "Tear-Notch": "notch",
  "Laserperforation": "perforation",
  "Euroloch": "euroloch",
  "Abgerundete Ecken": "corners",
  "Aromaventil": "valve",
  "Sichtfenster": "window",
  "Bedruckt": "print",
  "Kraftpapier-Kombination": null
};

/* ---- Vorteile-Karussell („Warum Flachbodenbeutel von TOMA“) ---- */
export const values = [
  {
    title: "Hohe Standfestigkeit",
    text: "Durch den flach aufgeschweißten Boden stehen Box Pouches besonders stabil – im Regal wie bei der Befüllung.",
    image: "assets/doypack/standbodenbeutel-doypack-e1696408989978.webp",
    alt: "Platzhalter: standfester Beutel",
    accent: false
  },
  {
    title: "Mehr Werbe- & Druckfläche",
    text: "Die Seitenfalten schaffen zusätzliche bedruckbare Flächen – für 360°-Markenwirkung am Point of Sale.",
    image: "assets/doypack/doypack-tee.webp",
    alt: "Platzhalter: individuell bedruckter Beutel",
    accent: true
  },
  {
    title: "Größeres Füllvolumen",
    text: "Seitenfalten und Flachboden ermöglichen mehr Inhalt bei kompakter Grundfläche.",
    image: "assets/doypack/attribute-doypack.webp",
    alt: "Platzhalter: Beutel in verschiedenen Größen",
    accent: false
  },
  {
    title: "Hochwertige Präsentation",
    text: "Die kastenförmige Silhouette wirkt wertig und verkaufsstark – mit Matt-, Glanz- oder Soft-Touch-Lacken.",
    image: "assets/doypack/doypack-05.webp",
    alt: "Platzhalter: Premium-Beutel in hochwertiger Optik",
    accent: false
  },
  {
    title: "Produktschutz & Barriere",
    text: "Mehrschicht- oder Monomaterial-Aufbauten schützen je nach Bedarf vor Sauerstoff, Feuchtigkeit, Licht und Aromaverlust.",
    image: "assets/doypack/doypack-aromaventil.webp",
    alt: "Platzhalter: Beutel mit Aromaventil",
    accent: true
  },
  {
    title: "Effiziente Logistik",
    text: "Leicht, platzsparend in Lagerung und Transport – mit deutlich weniger Verpackungsgewicht als starre Verpackungen.",
    image: "assets/doypack/doypack-09.webp",
    alt: "Platzhalter: Beutel in Anwendungsumgebung",
    accent: false
  },
  {
    title: "Vielseitige Verschlüsse",
    text: "Vom Druckverschluss über Pulver-, Doppel- und Slider-Zipper bis zum Front-/Pocketzipper.",
    image: "assets/doypack-druckverschluss.webp",
    alt: "Platzhalter: Beutel mit Druckverschluss",
    accent: false
  },
  {
    title: "Vielseitig einsetzbar",
    text: "Von Kaffee, Tee und Gewürzen über Snacks und Tiernahrung bis zu Hygiene-, Pflege- und Non-Food-Produkten.",
    image: "assets/doypack/doypack-1.webp",
    alt: "Platzhalter: bedruckte Kaffeebeutel",
    accent: true
  },
  {
    title: "Recyclingfähige Lösungen",
    text: "Monomaterial-PE- oder PP-Strukturen sind sortenrein recyclingfähig – abhängig vom konkreten Aufbau.",
    image: "assets/doypack/doypack-13.webp",
    alt: "Platzhalter: Beutel als Beispiel für Materialoptionen",
    accent: false
  },
  {
    title: "Manuell oder automatisch befüllbar",
    text: "Je nach Ausführung geeignet für manuelle oder automatische Befüllung – mit hoher Prozesssicherheit bei abgestimmtem Materialdesign.",
    image: "assets/doypack/doypack-nachfuellbeutel.webp",
    alt: "Platzhalter: Beutel in Anwendungsumgebung",
    accent: false
  }
];

/* ---- Im Einsatz / Gallery ---- */
export const galleryItems = [
  {
    src: "assets/doypack/doypack-1.webp",
    alt: "Platzhalter: Kaffee-Box-Pouch",
    title: "Kaffee & Tee",
    desc: "Box Pouch mit Aromaventil und Zipper – Aromaschutz trifft starke Regalwirkung.",
    size: "tall"
  },
  {
    src: "assets/doypack/doypack-09.webp",
    alt: "Platzhalter: Box Pouch für Snacks",
    title: "Snacks & Trockenfrüchte",
    desc: "Große Druckflächen und Wiederverschluss – ideal für Snacks, Nüsse und Trockenfrüchte.",
    size: "normal"
  },
  {
    src: "assets/doypack/doypack-13.webp",
    alt: "Platzhalter: Box Pouch für Gewürze",
    title: "Gewürze",
    desc: "Licht- und Aromabarriere schützen empfindliche Gewürze – bei hochwertiger Optik am POS.",
    size: "normal"
  },
  {
    src: "assets/doypack/doypack-tee.webp",
    alt: "Platzhalter: bedruckte Box Pouch",
    title: "Backwaren & Genuss",
    desc: "Individuell bedruckte Box Pouch – 360°-Markenwirkung über Front, Rückseite und Seitenfalten.",
    size: "wide"
  }
];

/* ---- Testimonials (von der bestehenden Flachbodenbeutel-Seite übernommen) ---- */
export const testimonials = [
  { quote: "Für uns sind eine stabile Standfestigkeit und ein sauberes Handling entscheidend – genau das erfüllen die Verpackungslösungen von TOMA zuverlässig.",
    name: "Rita S.", role: "Materialbeschaffung", branch: "Industrie" },
  { quote: "Produktsicherheit und Qualität stehen bei uns an erster Stelle – mit den Standbodenbeuteln von TOMA haben wir hier eine Lösung, auf die wir uns verlassen können.",
    name: "Andreas H.", role: "Geschäftsführer", branch: "Tiernahrung" },
  { quote: "Die Kombination aus hoher Qualität, zuverlässiger Umsetzung und einfacher Handhabung hat uns überzeugt – genau so muss eine Verpackung im Alltag funktionieren.",
    name: "Britta K.", role: "Vertrieb", branch: "E-Commerce & Versand" }
];

/* ---- Branchen-Strip (Hero) ---- */
export const branches = [
  { icon: "food", label: "Lebensmittel & Snacks", href: "https://www.toma-gmbh.de/food/" },
  { icon: "coffee", label: "Kaffee, Tee & Gewürze", href: "https://www.toma-gmbh.de/kaffeeverpackung/" },
  { icon: "pet", label: "Tiernahrung", href: "https://www.toma-gmbh.de/tierfutter/" },
  { icon: "cosmetic", label: "Hygiene & Pflege", href: "https://www.toma-gmbh.de/verpackungsloesungen/" },
  { icon: "nonfood", label: "Non-Food & Chemie", href: "https://www.toma-gmbh.de/non-food/" }
];

/* ---- FAQ (kategorisiert, max. 5 Fragen pro Kategorie sichtbar) ---- */
export const faqCategories = [
  { id: "grundlagen", label: "Grundlagen" },
  { id: "material", label: "Material" },
  { id: "verschluss", label: "Verschluss & Ausstattung" },
  { id: "bedruckung", label: "Bedruckung" },
  { id: "projekt", label: "Projekt" }
];

export const faqs = [
  { cat: "grundlagen",
    q: "Was zeichnet eine gute Box-Pouch-Lösung aus?",
    a: "Eine gute Box-Pouch-Lösung verbindet Produktschutz, Funktionalität und eine ansprechende Präsentation. Entscheidend sind unter anderem der passende Materialaufbau, die richtige Barrierewirkung, eine stabile Form sowie eine Ausführung, die zu Füllgut, Logistik und Einsatzbereich passt." },
  { cat: "grundlagen",
    q: "Welche Vorteile bieten Box Pouches für Produktschutz und Präsentation?",
    a: "Box Pouches schützen den Inhalt zuverlässig und sorgen gleichzeitig für eine hochwertige Darstellung am Point of Sale. Je nach Aufbau schützen sie empfindliche Produkte vor Sauerstoff, Feuchtigkeit, Licht oder Aromaverlust und stärken durch große bedruckbare Flächen die Markenwirkung." },
  { cat: "grundlagen",
    q: "Für welche Füllgüter eignen sich Box Pouches besonders gut?",
    a: "Besonders häufig werden sie für Kaffee, Tee, Gewürze, Snacks, Trockenfrüchte, Tiernahrung sowie weitere Food- und Non-Food-Produkte eingesetzt. Welche Lösung optimal ist, hängt immer von Produkt, Füllmenge und gewünschten Verpackungseigenschaften ab." },
  { cat: "grundlagen",
    q: "Warum sind Box Pouches für viele Anwendungen eine effiziente Lösung?",
    a: "Weil sie Funktion, Produktschutz und Wirtschaftlichkeit verbinden. Sie sind platzsparend in Lagerung und Transport, flexibel anpassbar und bieten gleichzeitig eine moderne, verkaufsstarke Produktpräsentation." },
  { cat: "grundlagen",
    q: "Was ist der Unterschied zwischen Flachbodenbeutel und Box Pouch?",
    a: "Keiner – beide Begriffe bezeichnen dieselbe Beutelform mit flach aufgeschweißtem Boden und Seitenfalten. Dadurch steht der Beutel besonders stabil und bietet zusätzliche Druckfläche." },

  { cat: "material",
    q: "Welche Materialaufbauten sind typisch?",
    a: "Je nach Füllgut, Haltbarkeitsanforderung, Prozess und Schutzfunktion: PET / PE (transparent, kosteneffizient, Basisschutz), PET / OPA / PE (verbesserte Sauerstoff- und Durchstoßfestigkeit), PET / ALU / PE (sehr hohe Barriere gegen Sauerstoff, Wasserdampf und Licht), Monomaterial-PE- oder PP-Strukturen sowie Kraftpapier in diversen Kombinationen." },
  { cat: "material",
    q: "Welche Barrierefunktionen gibt es?",
    a: "Sauerstoffbarriere als Schutz vor Oxidation, Feuchtigkeitsbarriere gegen Austrocknen oder Klumpenbildung, Lichtbarriere für empfindliche Produkte und gegen Verfärbung durch UV sowie Aromabarriere, etwa für Kaffee, Gewürze oder Chemikalien." },
  { cat: "material",
    q: "Gibt es recyclingfähige Box Pouches?",
    a: "Ja. Monomaterial-PE- oder PP-Strukturen sind sortenrein recyclingfähig – abhängig vom konkreten Aufbau. Die Bewertung hängt vom Materialaufbau, Produkt und Anwendungsfall ab." },
  { cat: "material",
    q: "Sind Box Pouches für Lebensmittel geeignet?",
    a: "Ja, lebensmittelkonforme Lösungen sind je nach Materialaufbau möglich. TOMA-Produkte werden mit den zugehörigen Zertifikaten für die Zulassung im Nahrungsmittelbereich gefertigt; alle geforderten Zertifizierungen sind nachweisbar." },
  { cat: "material",
    q: "Können bestehende Materialspezifikationen übernommen werden?",
    a: "Ja. Wenn Sie bereits eine Spezifikation haben, prüfen wir Machbarkeit, Alternativen und passende Anpassungen für Ihr Produkt." },

  { cat: "verschluss",
    q: "Welche Wiederverschlüsse sind möglich?",
    a: "Druckverschluss, Zipper, Pulverzipper, Doppelzipper, Slider-Zipper sowie Front- bzw. Pocketzipper – abgestimmt auf Füllgut und Handling." },
  { cat: "verschluss",
    q: "Welche Öffnungshilfen gibt es?",
    a: "Eine Tear-Notch (Aufreißkerbe) sowie eine Laserperforation für eine gerade Öffnung. Darüber hinaus sind Sonderlösungen je nach Produkt und Anwendung möglich." },
  { cat: "verschluss",
    q: "Sind Box Pouches mit Ausgießer möglich?",
    a: "Ja, Box Pouches lassen sich auch mit Ausgießer umsetzen – zum Beispiel als Nachfüllbeutel." },
  { cat: "verschluss",
    q: "Welche weiteren Ausstattungsvarianten gibt es?",
    a: "Unter anderem verschiedene Grundformen und Bodenaufbauten, Sichtfenster, Ventilkonzepte, Euroloch und weitere Präsentationsoptionen sowie individuelle Format- und Volumenanpassungen." },
  { cat: "verschluss",
    q: "Wofür eignet sich ein Aromaventil?",
    a: "Aromaventile lassen Gase aus dem Beutel entweichen und schützen gleichzeitig vor unerwünschtem Lufteintritt – typisch bei frisch geröstetem Kaffee." },

  { cat: "bedruckung",
    q: "Welche Druckverfahren sind möglich?",
    a: "Tiefdruck (Rotogravure) mit hoher Druckqualität und bis zu 10 Farben inkl. Sonderfarben – ideal für große Auflagen. Flexodruck ist wirtschaftlich bei mittleren Auflagen. Digitaldruck eignet sich für kleine Mengen mit hoher Flexibilität." },
  { cat: "bedruckung",
    q: "Werden auch die Seitenfalten bedruckt?",
    a: "Ja. Die Seitenfalten bieten zusätzliche Werbefläche – zusammen mit Front und Rückseite ergibt sich eine 360°-Markenwirkung." },
  { cat: "bedruckung",
    q: "Welche Veredelungen sind möglich?",
    a: "Matt-, Glanz- oder Soft-Touch-Lacke sowie eine Weißhinterlegung für brillante Farben." },
  { cat: "bedruckung",
    q: "Brauche ich bereits Druckdaten?",
    a: "Nicht zwingend zum Start. Für die Umsetzung brauchen wir später passende Druckdaten bzw. Spezifikationen – wir begleiten Sie im Freigabeprozess." },
  { cat: "bedruckung",
    q: "Kann ein Muster angefordert werden?",
    a: "Muster sind auf Anfrage möglich, damit Sie Haptik, Format und Funktion vor der Serie bewerten können." },

  { cat: "projekt",
    q: "Sind Box Pouches für automatische Befüllung geeignet?",
    a: "Je nach Ausführung eignen sie sich für manuelle oder automatische Befüllung. Bei korrekt abgestimmtem Materialdesign ist eine hohe Prozesssicherheit gegeben." },
  { cat: "projekt",
    q: "Welche Mengen sind möglich?",
    a: "Wir arbeiten projektbezogen. Für Standardgrößen und kleinere Mengen ist unser Shop 123pack der schnellste Weg. Ihre konkrete Menge stimmen wir gern individuell ab." },
  { cat: "projekt",
    q: "Wie läuft ein individuelles Projekt ab?",
    a: "In der Regel: Anforderungen aufnehmen, Material und Barriere abstimmen, Format und Ausstattung definieren, Muster bzw. Freigabe, anschließend Produktion und Lieferung." },
  { cat: "projekt",
    q: "Wie läuft die Anfrage ab?",
    a: "Sie senden uns die wichtigsten Eckdaten. Wir prüfen Material, Machbarkeit und Umsetzung und melden uns mit einer fundierten Einschätzung." },
  { cat: "projekt",
    q: "Wer ist mein Ansprechpartner?",
    a: "Sie haben bei TOMA einen persönlichen Ansprechpartner – keine anonyme Ticket-Schleife. Telefonisch erreichen Sie uns unter +49 (0)2157 128475." }
];
