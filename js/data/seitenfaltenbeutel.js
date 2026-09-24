/* =====================================================================
   TOMA · Seitenfaltenbeutel / Quad Seal Pouch Landingpage — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/seitenfaltenbeutel/
   Bilder: vorerst Platzhalter aus dem Doypack-Bestand (werden ersetzt).
   ===================================================================== */

/* ---- Produkt: Name (Alt-/Aria-Texte) & Vorschaubild im Konfigurator ---- */
export const product = {
  name: "Seitenfaltenbeutel",
  configPhoto: "assets/doypack.webp" // TODO: Seitenfaltenbeutel-Bild
};

/* ---- Feature-Explorer: Ausstattungsdetails (Bauteile.svg) ----
   svgId = Element-ID in assets/Bauteile.svg (vorerst Doypack-Grafik). */
export const features = [
  { id: "valve", label: "Aromaschutzventil", svgId: "Aromaventil",
    desc: "Lässt Gase entweichen – etwa bei frisch geröstetem Kaffee – und bewahrt gleichzeitig das Aroma.",
    case: "Kaffee und weitere aromatische Produkte.", link: "https://www.toma-gmbh.de/kaffeeverpackung/" },
  { id: "zipper", label: "Zipper", svgId: "Zipper",
    desc: "Wiederverschluss als Druckverschluss, Zipper, Pulverzipper, Doppelzipper, Slider-Zipper (sofern verfügbar) oder Front-/Pocketzipper.",
    case: "Kaffee, Tee, Gewürze, Cerealien, Tiernahrung.", link: null },
  { id: "notch", label: "Tear-Notch", svgId: "Einreisskerbe",
    desc: "Aufreißhilfe für ein sauberes Öffnen – optional mit Laserperforation für eine gerade Öffnung.",
    case: "Produkte, die ohne Werkzeug geöffnet werden sollen.", link: "https://www.toma-gmbh.de/perforationen/" },
  { id: "euroloch", label: "Euroloch", svgId: "Euroloch",
    desc: "Präsentationsoption zum Aufhängen am Verkaufsständer – Umsetzbarkeit prüfen wir je nach Format.",
    case: "Kleinere Formate für Gewürze oder Tee im Handel.", link: null },
  { id: "corners", label: "Abgerundete Ecken", svgId: "Abgerundete_Ecken",
    desc: "Weiche Ecken für eine hochwertige Produktpräsentation – als Sonderlösung je nach Ausführung.",
    case: "Premium-Anmutung bei Genussmitteln.", link: null }
];

/* ---- Anwendungsbereiche ---- */
export const applications = [
  { id: "coffee", icon: "coffee", label: "Kaffee",
    text: "Frisch gerösteter Kaffee gast aus. Ein Aromaschutzventil lässt die Gase entweichen, Barrierefolien halten Sauerstoff, Licht und Feuchtigkeit fern.",
    meta: ["Aromaschutzventil", "Aromabarriere", "Blockboden"], link: "https://www.toma-gmbh.de/kaffeeverpackung/",
    image: "assets/doypack-1.webp", alt: "Platzhalter: Seitenfaltenbeutel für Kaffee" },
  { id: "tea", icon: "coffee", label: "Tee",
    text: "Tee ist aroma- und feuchtigkeitsempfindlich. Passende Barriereeigenschaften und ein Wiederverschluss erhalten die Qualität bis zur letzten Portion.",
    meta: ["Aromabarriere", "Feuchtigkeitsbarriere", "Zipper"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack-tee.webp", alt: "Platzhalter: Seitenfaltenbeutel für Tee" },
  { id: "spices", icon: "food", label: "Gewürze",
    text: "Gewürze verlieren ohne Schutz schnell an Aroma und Farbe. Licht- und Aromabarriere schützen den Inhalt, ein Pulverzipper hält den Verschluss sauber.",
    meta: ["Lichtbarriere", "Aromabarriere", "Pulverzipper"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack-13.webp", alt: "Platzhalter: Seitenfaltenbeutel für Gewürze" },
  { id: "cereals", icon: "food", label: "Cerealien",
    text: "Das hohe Füllvolumen und die Belastbarkeit machen Seitenfaltenbeutel zu einer guten Lösung für Cerealien – die Feuchtigkeitsbarriere hält sie knusprig.",
    meta: ["Großes Volumen", "Feuchtigkeitsbarriere", "Wiederverschluss"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack-09.webp", alt: "Platzhalter: Seitenfaltenbeutel für Cerealien" },
  { id: "pet", icon: "pet", label: "Tiernahrung",
    text: "Auch schwerere Befüllungen sind möglich. Seitenfaltenbeutel mit Standfunktion stehen nach dem Befüllen und präsentieren Tiernahrung im Handel.",
    meta: ["Hohe Belastbarkeit", "Standfunktion", "Slider-Zipper"], link: "https://www.toma-gmbh.de/tierfutter/",
    image: "assets/attribute-doypack.webp", alt: "Platzhalter: Seitenfaltenbeutel für Tiernahrung" },
  { id: "industry", icon: "nonfood", label: "Industrie & Schüttgut",
    text: "Klassische Seitenfaltenbeutel dienen als Inliner für Kartons und Kisten – für Schüttgut, Ersatzteile und weitere industrielle Anwendungen.",
    meta: ["Inliner", "LDPE / HDPE", "Robust"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack-nachfuellbeutel.webp", alt: "Platzhalter: Seitenfaltenbeutel für Industrie und Schüttgut" },
  { id: "nonfood", icon: "nonfood", label: "Non-Food Retail",
    text: "Außerhalb des Lebensmittelbereichs verbindet der Seitenfaltenbeutel Schutz und Präsentation – bedruckt in Ihrem Layout.",
    meta: ["Individuell bedruckt", "Standfunktion", "Wiederverschluss"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack-05.webp", alt: "Platzhalter: individuell bedruckter Seitenfaltenbeutel" }
];

/* ---- Konfigurator: Schritte ---- */
export const configSteps = [
  { key: "application", title: "Anwendung / Füllgut", type: "single",
    hint: "Was möchten Sie verpacken?",
    options: ["Kaffee","Tee","Gewürze","Cerealien","Tiernahrung","Weitere Lebensmittel","Industrie / Schüttgut","Ersatzteile","Non-Food","Andere Anwendung"] },
  { key: "materialGoal", title: "Materialaufbau", type: "single",
    hint: "Grobe Richtung – die finale Empfehlung erfolgt nach technischer Prüfung.",
    options: ["Material noch offen","Verbundfolie mit hoher Barriere","Monomaterial prüfen","LDPE / HDPE","OPP-Laminat","Papier / Papierverbund","Aluminiumverbund","Technische Beratung erforderlich"] },
  { key: "sizeClass", title: "Variante / Füllvolumen", type: "single-with-input",
    hint: "Welche Bauform passt? Format und Volumen passen wir individuell an Ihr Produkt an.",
    options: ["Klassischer Seitenfaltenbeutel","Seitenfaltenbeutel mit Standfunktion","Blockbodenbeutel","Variante noch offen"],
    input: { key: "fillVolume", label: "Gewünschtes Füllvolumen (Freitext)", placeholder: "z. B. 250 g, 1 kg, 5 kg" } },
  { key: "closure", title: "Verschluss", type: "single",
    hint: "Wie soll der Beutel verschlossen bzw. wiederverschlossen werden?",
    options: ["Kein Wiederverschluss","Druckverschluss","Zipper","Pulverzipper","Doppelzipper","Slider-Zipper","Front-/Pocketzipper","Ausgießer","Noch offen"] },
  { key: "features", title: "Öffnung & Ausstattung", type: "multi",
    hint: "Mehrfachauswahl möglich.",
    options: ["Aromaschutzventil","Tear-Notch","Laserperforation","Sonderlösung"] },
  { key: "recyclingGoal", title: "Recycling- & PPWR-Anforderungen", type: "single",
    hint: "Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab.",
    options: ["Anforderungen noch offen","Recyclingorientierte Lösung prüfen","Monomaterial bevorzugt","Bestehende Materialspezifikation vorhanden","Technische Rücksprache gewünscht"],
    note: true },
  { key: "finish", title: "Bedruckung", type: "single",
    hint: "Tiefdruck, Flexodruck oder Digitaldruck – das passende Verfahren klären wir im Projekt.",
    options: ["Bedruckt","Unbedruckt","Gestaltung noch offen"],
    link: { label: "Mehr über Bedruckung", href: "https://www.toma-gmbh.de/drucktechnik/" } },
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
  "Aromaschutzventil": "valve",
  "Bedruckt": "print"
};

/* ---- Vorteile-Karussell („Warum Seitenfaltenbeutel von TOMA“) ---- */
export const values = [
  {
    title: "Schutz durch Barrierefolien",
    text: "Hochwertige Barrierefolien schützen den Inhalt vor äußeren Einflüssen wie Sauerstoff, Feuchtigkeit und Licht.",
    image: "assets/doypack-13.webp",
    alt: "Platzhalter: Seitenfaltenbeutel mit Barrierefolie",
    accent: false
  },
  {
    title: "Ideale Aromaerhaltung",
    text: "Integrierte Aromaschutzventile lassen Gase entweichen und halten das Aroma im Beutel – ideal für frisch gerösteten Kaffee.",
    image: "assets/doypack-aromaventil.webp",
    alt: "Platzhalter: Beutel mit Aromaschutzventil",
    accent: true
  },
  {
    title: "Nachhaltig mit Monomaterial",
    text: "Innovative Monomaterialien ermöglichen recyclingfähige Lösungen – abhängig vom konkreten Materialaufbau.",
    image: "assets/standbodenbeutel-doypack-e1696408989978.webp",
    alt: "Platzhalter: Beutel als Beispiel für Monomaterial",
    accent: false
  },
  {
    title: "Hohe Belastbarkeit",
    text: "Seitenfaltenbeutel sind robust und auch für schwerere Befüllungen geeignet.",
    image: "assets/doypack-09.webp",
    alt: "Platzhalter: befüllter Seitenfaltenbeutel",
    accent: false
  },
  {
    title: "Flexibel einsetzbar",
    text: "Von Kaffee, Tee und Gewürzen über Cerealien und Tiernahrung bis zu Schüttgut und Ersatzteilen.",
    image: "assets/doypack-1.webp",
    alt: "Platzhalter: Seitenfaltenbeutel für Kaffee",
    accent: true
  },
  {
    title: "Individuell gefertigt",
    text: "Format, Material, Verschluss und Bedruckung stimmen wir auf Ihr Produkt und Ihre Anwendung ab.",
    image: "assets/doypack-tee.webp",
    alt: "Platzhalter: individuell bedruckter Beutel",
    accent: false
  },
  {
    title: "Bedruckt in Ihrem Layout",
    text: "Tiefdruck mit bis zu 10 Farben, Flexodruck oder Digitaldruck – Schutz und Präsentation in einer Lösung.",
    image: "assets/doypack-05.webp",
    alt: "Platzhalter: bedruckter Beutel in hochwertiger Optik",
    accent: false
  },
  {
    title: "Vielseitige Verschlüsse",
    text: "Vom Druckverschluss über Pulver-, Doppel- und Slider-Zipper bis zum Front-/Pocketzipper.",
    image: "assets/doypack-druckverschluss.webp",
    alt: "Platzhalter: Beutel mit Druckverschluss",
    accent: true
  },
  {
    title: "Manuell oder automatisch befüllbar",
    text: "Je nach Ausführung geeignet für manuelle oder automatische Befüllung – mit hoher Prozesssicherheit bei abgestimmtem Materialdesign.",
    image: "assets/doypack-nachfuellbeutel.webp",
    alt: "Platzhalter: Beutel in Anwendungsumgebung",
    accent: false
  },
  {
    title: "Effiziente Logistik",
    text: "Bis zu 70–90 % weniger Verpackungsgewicht als starre Verpackungen – leicht und platzsparend in Lager und Transport.",
    image: "assets/attribute-doypack.webp",
    alt: "Platzhalter: Beutel in verschiedenen Größen",
    accent: false
  }
];

/* ---- Im Einsatz / Gallery ---- */
export const galleryItems = [
  {
    src: "assets/doypack-1.webp",
    alt: "Platzhalter: Seitenfaltenbeutel für Kaffee",
    title: "Kaffee",
    desc: "Seitenfaltenbeutel mit Aromaschutzventil – das Aroma bleibt im Beutel, Gase können entweichen.",
    size: "tall"
  },
  {
    src: "assets/doypack-13.webp",
    alt: "Platzhalter: Seitenfaltenbeutel für Gewürze",
    title: "Gewürze",
    desc: "Licht- und Aromabarriere schützen empfindliche Gewürze.",
    size: "normal"
  },
  {
    src: "assets/doypack-09.webp",
    alt: "Platzhalter: Quad Bag für Cerealien",
    title: "Cerealien",
    desc: "Großes Füllvolumen und Feuchtigkeitsbarriere – ideal für Cerealien.",
    size: "normal"
  },
  {
    src: "assets/doypack-tee.webp",
    alt: "Platzhalter: bedruckter Seitenfaltenbeutel für Tee",
    title: "Tee",
    desc: "Individuell bedruckter Seitenfaltenbeutel – Aromaschutz und Präsentation in einer Lösung.",
    size: "wide"
  }
];

/* ---- Testimonials (von der bestehenden Seitenfaltenbeutel-Seite übernommen) ---- */
export const testimonials = [
  { quote: "Qualität und Preis sind für uns entscheidend – mit den Verpackungslösungen von TOMA haben wir eine wirtschaftliche und zugleich hochwertige Lösung gefunden.",
    name: "Jens R.", role: "Gruppenleiter Einkauf", branch: "E-Commerce & Versand" },
  { quote: "Service, Freundlichkeit und Schnelligkeit haben uns von Anfang an überzeugt – genau das brauchen wir für einen reibungslosen Ablauf in der Praxis.",
    name: "Ömer C.", role: "Marketing", branch: "Lebensmittel & Genussmittel" },
  { quote: "Die hohe Flexibilität und die breite Produktauswahl ermöglichen uns, für jede Anwendung die passende Verpackungslösung umzusetzen.",
    name: "Marc M.", role: "Gründer & Prokurist", branch: "Lebensmittel & Genussmittel" }
];

/* ---- Branchen-Strip (Hero) ---- */
export const branches = [
  { icon: "coffee", label: "Kaffee & Tee", href: "https://www.toma-gmbh.de/kaffeeverpackung/" },
  { icon: "food", label: "Gewürze & Cerealien", href: "https://www.toma-gmbh.de/food/" },
  { icon: "pet", label: "Tiernahrung", href: "https://www.toma-gmbh.de/tierfutter/" },
  { icon: "nonfood", label: "Industrie & Schüttgut", href: "https://www.toma-gmbh.de/non-food/" },
  { icon: "nonfood", label: "Non-Food Retail", href: "https://www.toma-gmbh.de/non-food/" }
];

/* ---- FAQ (kategorisiert, max. 5 Fragen pro Kategorie sichtbar) ---- */
export const faqCategories = [
  { id: "grundlagen", label: "Grundlagen" },
  { id: "varianten", label: "Varianten" },
  { id: "material", label: "Material" },
  { id: "verschluss", label: "Verschluss & Ausstattung" },
  { id: "projekt", label: "Bedruckung & Projekt" }
];

export const faqs = [
  { cat: "grundlagen",
    q: "Was zeichnet eine gute Seitenfaltenbeutel-Lösung aus?",
    a: "Eine gute Seitenfaltenbeutel-Lösung verbindet hohes Füllvolumen, zuverlässigen Produktschutz und eine Ausführung, die zum jeweiligen Füllgut passt. Entscheidend sind unter anderem Material, Barriereeigenschaften und die richtige Abstimmung auf Anwendung und Produktanforderung." },
  { cat: "grundlagen",
    q: "Was muss eine gute Verpackung für empfindliche und aromatische Produkte leisten?",
    a: "Eine gute Verpackung für empfindliche und aromatische Produkte sollte den Inhalt vor Licht, Feuchtigkeit und fremden Gerüchen schützen. So bleiben Qualität, Frische und Aroma möglichst lange erhalten." },
  { cat: "grundlagen",
    q: "Was sollte eine Seitenfaltenbeutel-Verpackung für Kaffee, Tee oder Gewürze mitbringen?",
    a: "Für Kaffee, Tee oder Gewürze sind vor allem starker Aromaschutz, passende Barriereeigenschaften und eine auf das Produkt abgestimmte Verpackung wichtig. Je nach Anwendung kann auch ein Aromaschutzventil sinnvoll sein, um empfindliche Inhalte optimal zu schützen." },
  { cat: "grundlagen",
    q: "Worauf kommt es beim Produktschutz an?",
    a: "Beim Produktschutz kommt es auf die richtige Kombination aus Material, Barriere und Verpackungsaufbau an. Eine gute Seitenfaltenbeutel-Lösung schützt sensible Inhalte zuverlässig vor äußeren Einflüssen und unterstützt so die Qualität des Produkts." },
  { cat: "grundlagen",
    q: "Was macht eine Seitenfaltenbeutel-Verpackung für individuelle Anforderungen aus?",
    a: "Eine gute Seitenfaltenbeutel-Verpackung lässt sich auf unterschiedliche Produkte und Anforderungen abstimmen. Dazu zählen zum Beispiel die passende Materialwahl, individuelle Gestaltungsmöglichkeiten und funktionale Merkmale, die zur Anwendung passen." },

  { cat: "varianten",
    q: "Welche Varianten von Seitenfaltenbeuteln gibt es?",
    a: "Den klassischen Seitenfaltenbeutel (auch Seitenfalzbeutel oder Seitenfaltbeutel), den Seitenfaltenbeutel mit Standfunktion (Seitenfalten-Standbeutel) und den Blockbodenbeutel mit Seitenfalte." },
  { cat: "varianten",
    q: "Steht ein klassischer Seitenfaltenbeutel von selbst?",
    a: "Nein. Der klassische Seitenfaltenbeutel hat unten eine Siegelnaht und keinen Stand. Er wird typischerweise als Inliner für Kartons und Kisten sowie für Industrie, Schüttgut und Ersatzteile eingesetzt." },
  { cat: "varianten",
    q: "Wie funktioniert der Seitenfaltenbeutel mit Standfunktion?",
    a: "Seitenfalten und ein bodenseitiger Umschlag formen einen provisorischen Boden. Der Beutel steht erst nach dem Befüllen – typisch für Kaffee, Tiernahrung sowie Lebensmittel und Non-Food im Handel." },
  { cat: "varianten",
    q: "Was ist ein Blockbodenbeutel?",
    a: "Ein Beutel mit gefaltetem Blockboden und zwei Seitenfalten. Der Boden wird geklebt, nicht geschweißt – dadurch ist der Beutel sehr standstabil. Typische Materialien sind Papier, Papierverbunde und Aluminiumverbunde; eingesetzt wird er vor allem für Kaffee." },
  { cat: "varianten",
    q: "Was bedeutet Quad Seal Pouch bzw. Quadbag?",
    a: "Quad Seal Pouch und Quadbag sind gängige Bezeichnungen für Seitenfaltenbeutel." },

  { cat: "material",
    q: "Welche Materialaufbauten sind typisch?",
    a: "Innovative Verbundfolien mit außergewöhnlichen Barriereeigenschaften sowie innovative Monomaterialien. Je nach Variante kommen LDPE, HDPE, OPP und andere gängige Laminate oder Papier-, Papier- und Aluminiumverbunde zum Einsatz." },
  { cat: "material",
    q: "Welche Barrierefunktionen gibt es?",
    a: "Sauerstoffbarriere als Schutz vor Oxidation und Bakterienbildung, Feuchtigkeitsbarriere gegen Austrocknen oder Klumpenbildung, Lichtbarriere für empfindliche Produkte sowie Aromabarriere, etwa für Kaffee, Gewürze oder Chemikalien." },
  { cat: "material",
    q: "Gibt es recyclingfähige Seitenfaltenbeutel?",
    a: "Ja, über Monomaterial-Lösungen sind nachhaltige und recyclingfähige Ausführungen möglich. Die tatsächliche Eignung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab." },
  { cat: "material",
    q: "Sind Seitenfaltenbeutel für Lebensmittel geeignet?",
    a: "Ja, lebensmittelkonforme Lösungen sind je nach Materialaufbau möglich. TOMA-Produkte werden mit den zugehörigen Zertifikaten für die Zulassung im Nahrungsmittelbereich gefertigt; alle genannten Zertifizierungen sind nachweisbar." },
  { cat: "material",
    q: "Sind Seitenfaltenbeutel für schwere Füllgüter geeignet?",
    a: "Ja. Seitenfaltenbeutel sind hoch belastbar, auch schwerere Befüllungen sind möglich und geeignet." },

  { cat: "verschluss",
    q: "Welche Wiederverschlüsse sind möglich?",
    a: "Druckverschluss, Zipper, Pulverzipper, Doppelzipper, Slider-Zipper (sofern verfügbar) sowie Front- bzw. Pocketzipper." },
  { cat: "verschluss",
    q: "Welche Öffnungshilfen gibt es?",
    a: "Eine Tear-Notch (Aufreißkerbe) sowie eine Laserperforation für eine gerade Öffnung. Darüber hinaus sind Sonderlösungen je nach Produkt und Anwendung möglich." },
  { cat: "verschluss",
    q: "Wofür eignet sich ein Aromaschutzventil?",
    a: "Das Aromaschutzventil lässt Gase aus dem Beutel entweichen, etwa bei frisch geröstetem Kaffee, und bewahrt gleichzeitig das Aroma." },
  { cat: "verschluss",
    q: "Sind Seitenfaltenbeutel mit Ausgießer möglich?",
    a: "Ja, Seitenfaltenbeutel lassen sich auch mit Ausgießer umsetzen – zum Beispiel als Nachfüllbeutel." },
  { cat: "verschluss",
    q: "Sind Seitenfaltenbeutel für automatische Befüllung geeignet?",
    a: "Je nach Ausführung eignen sie sich für manuelle oder automatische Befüllung. Bei korrekt abgestimmtem Materialdesign ist eine hohe Prozesssicherheit gegeben." },

  { cat: "projekt",
    q: "Welche Druckverfahren sind möglich?",
    a: "Tiefdruck (Rotogravure) mit hoher Druckqualität und bis zu 10 Farben inkl. Sonderfarben – ideal für große Auflagen. Flexodruck ist wirtschaftlich bei mittleren Auflagen. Digitaldruck eignet sich für kleine Mengen mit hoher Flexibilität." },
  { cat: "projekt",
    q: "Brauche ich bereits Druckdaten?",
    a: "Nicht zwingend zum Start. Für die Umsetzung brauchen wir später passende Druckdaten bzw. Spezifikationen – wir begleiten Sie im Freigabeprozess." },
  { cat: "projekt",
    q: "Welche Mengen sind möglich?",
    a: "Wir arbeiten projektbezogen. Für Standardgrößen und kleinere Mengen ist unser Shop 123pack der schnellste Weg. Ihre konkrete Menge stimmen wir gern individuell ab." },
  { cat: "projekt",
    q: "Wie läuft die Anfrage ab?",
    a: "Sie senden uns die wichtigsten Eckdaten. Wir prüfen Material, Machbarkeit und Umsetzung und melden uns mit einer fundierten Einschätzung." },
  { cat: "projekt",
    q: "Wer ist mein Ansprechpartner?",
    a: "Sie haben bei TOMA einen persönlichen Ansprechpartner – keine anonyme Ticket-Schleife. Telefonisch erreichen Sie uns unter +49 (0)2157 128475." }
];
