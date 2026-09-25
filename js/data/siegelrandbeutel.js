/* =====================================================================
   TOMA · Siegelrandbeutel / Flachbeutel Landingpage — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/siegelrandbeutel/
   Bilder: vorerst Platzhalter aus dem Doypack-Bestand (werden ersetzt).
   ===================================================================== */

/* ---- Produkt: Name (Alt-/Aria-Texte) & Vorschaubild im Konfigurator ---- */
export const product = {
  name: "Siegelrandbeutel",
  configPhoto: "assets/doypack/doypack.webp" // TODO: Siegelrandbeutel-Bild
};

/* ---- Feature-Explorer: Ausstattungsdetails (Bauteile.svg) ----
   svgId = Element-ID in assets/doypack/Bauteile.svg (vorerst Doypack-Grafik). */
export const features = [
  { id: "zipper", label: "Wiederverschluss", svgId: "Zipper",
    desc: "Wiederverschließbar mit Reißverschluss, Schiebeverschluss oder Druckverschluss / Zipper – abgestimmt auf Produkt und Nutzung.",
    case: "Snacks, Tierfutter, Nudeln, Nahrungsergänzungsmittel.", link: "https://www.toma-gmbh.de/kindersichere-zipperbeutel/" },
  { id: "valve", label: "Aromaventil", svgId: "Aromaventil",
    desc: "Das Aromaschutzventil lässt Gase entweichen und hält das Aroma im Beutel.",
    case: "Aromatische Produkte wie Gewürze.", link: null },
  { id: "notch", label: "Aufreißhilfe", svgId: "Einreisskerbe",
    desc: "Aufreißhilfen für ein sauberes Öffnen – optional mit Laserperforation.",
    case: "Produkte, die ohne Werkzeug geöffnet werden sollen.", link: "https://www.toma-gmbh.de/perforationen/" },
  { id: "euroloch", label: "Euroloch", svgId: "Euroloch",
    desc: "Präsentationsoption zum Aufhängen am Verkaufsständer – Umsetzbarkeit prüfen wir je nach Format.",
    case: "Kleinere Formate für Gewürze oder Snacks im Handel.", link: null },
  { id: "corners", label: "Abgerundete Ecken", svgId: "Abgerundete_Ecken",
    desc: "Weiche Ecken für eine hochwertige Produktpräsentation – als Sonderlösung je nach Ausführung.",
    case: "Premium-Anmutung, etwa bei Nahrungsergänzungsmitteln.", link: null }
];

/* ---- Anwendungsbereiche ---- */
export const applications = [
  { id: "supplements", icon: "pharma", label: "Nahrungsergänzungsmittel",
    text: "Kompakt, sicher und funktional verpackt: Siegelrandbeutel eignen sich für Nahrungsergänzungsmittel – auf Wunsch mit Wiederverschluss und Bedruckung in Ihrem Layout.",
    meta: ["Kompakt", "Wiederverschließbar", "Individuell bedruckt"], link: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/",
    image: "assets/doypack/doypack-05.webp", alt: "Platzhalter: Siegelrandbeutel für Nahrungsergänzungsmittel" },
  { id: "snacks", icon: "food", label: "Snacks",
    text: "Für Snacks sind transparente oder blickdichte Flachbeutel möglich – mit Aufreißhilfe und Wiederverschluss für den Genuss unterwegs.",
    meta: ["Transparent oder blickdicht", "Aufreißhilfe", "Wiederverschluss"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack/doypack-09.webp", alt: "Platzhalter: Siegelrandbeutel für Snacks" },
  { id: "pet", icon: "pet", label: "Tierfutter",
    text: "Für Tierfutter und Leckerlis lassen sich Flachbeutel sicher verschließen und in Ihrem Markenauftritt bedrucken.",
    meta: ["Sicher verschließbar", "Individuell bedruckt", "Günstige Beutelform"], link: "https://www.toma-gmbh.de/tierfutter/",
    image: "assets/doypack/attribute-doypack.webp", alt: "Platzhalter: Siegelrandbeutel für Tierfutter" },
  { id: "pasta", icon: "food", label: "Nudeln",
    text: "Für Nudeln bietet sich ein transparenter Flachbeutel oder ein Beutel mit Sichtfenster an – das Produkt bleibt im Regal sichtbar.",
    meta: ["Transparent", "Sichtfenster", "Monomaterial möglich"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack/doypack-1.webp", alt: "Platzhalter: Siegelrandbeutel für Nudeln" },
  { id: "spices", icon: "food", label: "Gewürze",
    text: "Gewürze brauchen einen zuverlässigen Verschluss und passenden Aromaschutz – optional mit Aromaventil.",
    meta: ["Aromaventil", "Wiederverschluss", "Blickdicht"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack/doypack-13.webp", alt: "Platzhalter: Siegelrandbeutel für Gewürze" },
  { id: "powder", icon: "powder", label: "Pulver & Granulate",
    text: "Für Pulver und Granulate ist wichtig, dass die Verpackung sicher verschließbar ist und auf die jeweilige Anwendung abgestimmt wird.",
    meta: ["Sicher verschließbar", "Flexibel anpassbar", "Ausgießer möglich"], link: "https://www.toma-gmbh.de/chemie-branche/",
    image: "assets/doypack/doypack-nachfuellbeutel.webp", alt: "Platzhalter: Siegelrandbeutel für Pulver und Granulate" },
  { id: "emulsions", icon: "liquid", label: "Emulsionen",
    text: "Auch Emulsionen lassen sich im Flachbeutel verpacken – mit Ausgießer für eine saubere Entnahme.",
    meta: ["Ausgießer", "Sicher verschließbar", "Individuell anpassbar"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack/doypack-tee.webp", alt: "Platzhalter: Siegelrandbeutel mit Ausgießer für Emulsionen" }
];

/* ---- Konfigurator: Schritte ---- */
export const configSteps = [
  { key: "application", title: "Anwendung / Füllgut", type: "single",
    hint: "Was möchten Sie verpacken?",
    options: ["Nahrungsergänzungsmittel","Snacks","Tierfutter","Nudeln","Gewürze","Pulver","Granulate","Emulsionen","Andere Anwendung"] },
  { key: "materialGoal", title: "Materialaufbau", type: "single",
    hint: "Grobe Richtung – die finale Empfehlung erfolgt nach technischer Prüfung.",
    options: ["Material noch offen","Mehrschichtiger Verbund","Monomaterial prüfen","BIO / kompostierbar prüfen","Kraftpapier-Variante","Technische Beratung erforderlich"] },
  { key: "sizeClass", title: "Optik / Füllmenge", type: "single-with-input",
    hint: "Transparent oder blickdicht? Format und Füllmenge passen wir individuell an Ihr Produkt an.",
    options: ["Transparent","Blickdicht","Optik noch offen"],
    input: { key: "fillVolume", label: "Gewünschte Füllmenge (Freitext)", placeholder: "z. B. 50 g, 250 g, 1 kg" } },
  { key: "closure", title: "Verschluss", type: "single",
    hint: "Wie soll der Beutel verschlossen bzw. wiederverschlossen werden?",
    options: ["Kein Wiederverschluss","Reißverschluss","Schiebeverschluss","Druckverschluss / Zipper","Ausgießer","Noch offen"] },
  { key: "features", title: "Öffnung & Ausstattung", type: "multi",
    hint: "Mehrfachauswahl möglich.",
    options: ["Sichtfenster","Aromaventil","Aufreißhilfe","Laserperforation","Sonderlösung"] },
  { key: "recyclingGoal", title: "Recycling- & PPWR-Anforderungen", type: "single",
    hint: "Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab.",
    options: ["Anforderungen noch offen","Recyclingorientierte Lösung prüfen","Monomaterial bevorzugt","Kompostierbare Lösung prüfen","Bestehende Materialspezifikation vorhanden","Technische Rücksprache gewünscht"],
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
  "Reißverschluss": "zipper",
  "Schiebeverschluss": "zipper",
  "Druckverschluss / Zipper": "zipper",
  "Ausgießer": "spout",
  "Aufreißhilfe": "notch",
  "Laserperforation": "perforation",
  "Aromaventil": "valve",
  "Bedruckt": "print"
};

/* ---- Vorteile-Karussell („Warum Siegelrandbeutel von TOMA“) ---- */
export const values = [
  {
    title: "Günstigste Beutelform",
    text: "Flachbeutel sind die günstigste Beutelvariante – eine wirtschaftliche Lösung für Produkte, die keine Standfunktion benötigen.",
    image: "assets/doypack/doypack-09.webp",
    alt: "Platzhalter: Siegelrandbeutel als wirtschaftliche Verpackung",
    accent: true
  },
  {
    title: "Vielseitig einsetzbar",
    text: "Von Nahrungsergänzungsmitteln, Snacks und Tierfutter über Nudeln und Gewürze bis zu Pulvern, Granulaten und Emulsionen.",
    image: "assets/doypack/doypack-1.webp",
    alt: "Platzhalter: Siegelrandbeutel für verschiedene Füllgüter",
    accent: false
  },
  {
    title: "Individuell anpassbar",
    text: "An drei Seiten versiegelt und individuell an Produkt, Anwendung und gewünschte Funktionen angepasst.",
    image: "assets/doypack/doypack-tee.webp",
    alt: "Platzhalter: individuell angepasster Siegelrandbeutel",
    accent: false
  },
  {
    title: "Monomaterial – 100 % recycelbar",
    text: "Als Monomaterial-Beutel aus nur einem Material – je nach Ausführung als 100 % recycelbare Lösung erhältlich.",
    image: "assets/doypack/standbodenbeutel-doypack-e1696408989978.webp",
    alt: "Platzhalter: Beutel als Beispiel für Monomaterial",
    accent: true
  },
  {
    title: "BIO Siegelrandbeutel",
    text: "Optional als BIO Variante, kompostierbar nach DIN EN 13432.",
    image: "assets/doypack/doypack-13.webp",
    alt: "Platzhalter: kompostierbarer BIO Siegelrandbeutel",
    accent: false
  },
  {
    title: "Kraftpapier-Variante",
    text: "Natürlicher Look und hochwertige Haptik – die Kraftpapier-Variante für einen besonderen Markenauftritt.",
    image: "assets/doypack/doypack-05.webp",
    alt: "Platzhalter: Siegelrandbeutel in Kraftpapier-Optik",
    accent: false
  },
  {
    title: "Transparent oder blickdicht",
    text: "Zeigen Sie Ihr Produkt im transparenten Flachbeutel oder schützen Sie es im blickdichten Beutel.",
    image: "assets/doypack/doypack-hero.webp",
    alt: "Platzhalter: transparenter und blickdichter Siegelrandbeutel",
    accent: false
  },
  {
    title: "Funktionale Zusätze",
    text: "Mit Reißverschluss, Schiebeverschluss, Druckverschluss / Zipper, Ausgießer, Aromaventil oder Laserperforation umsetzbar.",
    image: "assets/doypack-druckverschluss.webp",
    alt: "Platzhalter: Beutel mit Druckverschluss",
    accent: true
  },
  {
    title: "Bedruckt in Ihrem Layout",
    text: "Tiefdruck mit bis zu 10 Farben, Flexodruck oder Digitaldruck – brillante Druckfarben für Ihr Markenbild.",
    image: "assets/doypack/doypack-aromaventil.webp",
    alt: "Platzhalter: bedruckter Beutel in hochwertiger Optik",
    accent: false
  },
  {
    title: "Effiziente Logistik",
    text: "Bis zu 70–90 % weniger Verpackungsgewicht als starre Verpackungen – leicht und platzsparend in Lager und Transport.",
    image: "assets/doypack/attribute-doypack.webp",
    alt: "Platzhalter: Beutel in verschiedenen Größen",
    accent: false
  }
];

/* ---- Im Einsatz / Gallery ---- */
export const galleryItems = [
  {
    src: "assets/doypack/doypack-09.webp",
    alt: "Platzhalter: Siegelrandbeutel für Snacks",
    title: "Snacks",
    desc: "Transparenter oder blickdichter Flachbeutel – mit Aufreißhilfe und optionalem Wiederverschluss.",
    size: "tall"
  },
  {
    src: "assets/doypack/doypack-05.webp",
    alt: "Platzhalter: Siegelrandbeutel für Nahrungsergänzungsmittel",
    title: "Nahrungsergänzungsmittel",
    desc: "Kompakt, sicher und funktional verpackt – bedruckt in Ihrem Layout.",
    size: "normal"
  },
  {
    src: "assets/doypack/attribute-doypack.webp",
    alt: "Platzhalter: Siegelrandbeutel für Tierfutter",
    title: "Tierfutter",
    desc: "Sicher verschließbar und individuell gestaltet.",
    size: "normal"
  },
  {
    src: "assets/doypack/doypack-nachfuellbeutel.webp",
    alt: "Platzhalter: Siegelrandbeutel mit Ausgießer",
    title: "Pulver & Emulsionen",
    desc: "Flachbeutel mit Ausgießer – flexibel anpassbar für unterschiedliche Füllgüter.",
    size: "wide"
  }
];

/* ---- Testimonials (von der bestehenden Siegelrandbeutel-Seite übernommen) ---- */
export const testimonials = [
  { quote: "Die Zusammenarbeit war von Anfang an sehr zuverlässig und unkompliziert – genau das, was wir für standardisierte Verpackungslösungen brauchen.",
    name: "Britta K.", role: "Vertrieb", branch: "E-Commerce-Versand" },
  { quote: "Für uns bedeutet Qualität vor allem Produktsicherheit – und genau darauf können wir uns bei den Verpackungslösungen von TOMA verlassen.",
    name: "C. Kolodzey", role: "Geschäftsführer", branch: "Tiernahrung" },
  { quote: "Abfallverantwortung und nachhaltige Lösungen spielen für uns eine zentrale Rolle – umso wichtiger ist es, einen Partner zu haben, der diesen Anspruch versteht.",
    name: "Swetlana H.", role: "Nachhaltigkeitsmanagement", branch: "Lebensmittel & Genuss" }
];

/* ---- Branchen-Strip (Hero) ---- */
export const branches = [
  { icon: "food", label: "Snacks & Lebensmittel", href: "https://www.toma-gmbh.de/food/" },
  { icon: "pharma", label: "Nahrungsergänzung", href: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/" },
  { icon: "pet", label: "Tierfutter", href: "https://www.toma-gmbh.de/tierfutter/" },
  { icon: "powder", label: "Pulver & Granulate", href: "https://www.toma-gmbh.de/chemie-branche/" },
  { icon: "nonfood", label: "Non-Food", href: "https://www.toma-gmbh.de/non-food/" }
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
    q: "Was zeichnet eine gute Flachbeutel-Lösung aus?",
    a: "Eine gute Flachbeutel-Lösung passt zum Produkt, zur Anwendung und zu den gewünschten Funktionen. Entscheidend sind unter anderem das richtige Material, die passende Ausführung und sinnvolle Zusatzelemente wie Sichtfenster oder Verschlussoptionen." },
  { cat: "grundlagen",
    q: "Was sollte eine gute Verpackung für Pulver, Granulate oder Emulsionen mitbringen?",
    a: "Für solche Produkte ist wichtig, dass die Verpackung sicher verschließbar ist und auf die jeweilige Anwendung abgestimmt wird. Flachbeutel eignen sich hier, weil sie flexibel anpassbar sind und für unterschiedliche Füllgüter eingesetzt werden können." },
  { cat: "grundlagen",
    q: "Was macht eine Flachbeutel-Lösung für flexible Anwendungen besonders interessant?",
    a: "Flachbeutel sind für viele verschiedene Produkte geeignet und lassen sich optisch wie funktional anpassen. Dadurch können sie für ganz unterschiedliche Branchen und Füllgüter als praktische Verpackungslösung eingesetzt werden." },
  { cat: "grundlagen",
    q: "Was ist der Unterschied zwischen Siegelrandbeutel und Flachbeutel?",
    a: "Keiner – beide Begriffe bezeichnen dieselbe Beutelform. Flachbeutel bzw. Siegelrandbeutel sind an drei Seiten versiegelt und eignen sich für Produkte, die keine Standfunktion benötigen." },
  { cat: "grundlagen",
    q: "Für welche Produkte eignen sich Siegelrandbeutel?",
    a: "Zum Beispiel für Nahrungsergänzungsmittel, Snacks, Tierfutter, Nudeln, Gewürze, Pulver, Granulate und Emulsionen – besonders für Produkte, die kompakt, sicher und funktional verpackt werden sollen." },

  { cat: "varianten",
    q: "Welche Varianten von Siegelrandbeuteln gibt es?",
    a: "Transparente und blickdichte Flachbeutel, individuell bedruckte Siegelrandbeutel, Monomaterial-Siegelbeutel, BIO Siegelrandbeutel, eine Kraftpapier-Variante sowie Flachbeutel mit Ausgießer." },
  { cat: "varianten",
    q: "Transparent oder blickdicht – was passt zu meinem Produkt?",
    a: "Ein transparenter Flachbeutel zeigt das Produkt direkt im Regal, ein blickdichter Beutel schützt den Inhalt und bietet mehr Fläche für Ihr Design. Alternativ ist ein Sichtfenster möglich – wir stimmen die Ausführung auf Ihr Produkt ab." },
  { cat: "varianten",
    q: "Gibt es Siegelrandbeutel in Kraftpapier-Optik?",
    a: "Ja, die Kraftpapier-Variante bietet einen natürlichen Look und eine hochwertige Haptik." },
  { cat: "varianten",
    q: "Stehen Siegelrandbeutel von selbst?",
    a: "Nein. Flachbeutel sind für Produkte gedacht, die keine Standfunktion benötigen. Wenn Ihr Beutel im Regal stehen soll, sind Doypacks, Flachbodenbeutel oder Seitenfaltenbeutel mit Standfunktion die passenden Alternativen." },

  { cat: "material",
    q: "Welche Materialien sind möglich?",
    a: "Klassische mehrschichtige Lösungen, Monomaterial-Beutel, BIO Siegelrandbeutel sowie Kraftpapier-Varianten. So lässt sich die Verpackung an Produkt, Anwendung und Nachhaltigkeitsziele anpassen." },
  { cat: "material",
    q: "Was kann eine Flachbeutel-Verpackung für nachhaltige Anforderungen leisten?",
    a: "Eine nachhaltige Flachbeutel-Lösung kann als Monomaterial umgesetzt werden und damit 100 % recycelbar sein. Alternativ sind BIO Siegelrandbeutel möglich, die vollständig kompostierbar nach DIN EN 13432 sind. Flachbeutel sind zudem eine gute und günstige Lösung." },
  { cat: "material",
    q: "Sind Siegelrandbeutel recycelbar?",
    a: "Als Monomaterial-Beutel aus nur einem Material sind sie je nach Ausführung 100 % recycelbar. Die tatsächliche Eignung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab." },
  { cat: "material",
    q: "Sind Siegelrandbeutel für Lebensmittel geeignet?",
    a: "Ja, lebensmittelkonforme Lösungen sind je nach Materialaufbau möglich. TOMA-Produkte werden mit den zugehörigen Zertifikaten für die Zulassung im Nahrungsmittelbereich gefertigt; alle genannten Zertifizierungen sind nachweisbar." },

  { cat: "verschluss",
    q: "Was kann eine Siegelrandbeutel-Verpackung zusätzlich funktional machen?",
    a: "Je nach Anwendung können Flachbeutel mit Sichtfenster, Reißverschluss, Schiebeverschluss, Ausgießer oder Aromaschutzventil ausgestattet werden. So lässt sich die Verpackung gezielt auf Produkt und Nutzung abstimmen – bei geringem Kostenaufwand." },
  { cat: "verschluss",
    q: "Welche Wiederverschlüsse sind möglich?",
    a: "Reißverschluss, Schiebeverschluss sowie Druckverschluss bzw. Zipper." },
  { cat: "verschluss",
    q: "Welche Öffnungshilfen gibt es?",
    a: "Aufreißhilfen und eine Laserperforation. Darüber hinaus sind Sonderlösungen je nach Produkt und Anwendung möglich." },
  { cat: "verschluss",
    q: "Sind Siegelrandbeutel mit Ausgießer möglich?",
    a: "Ja, Flachbeutel lassen sich auch mit Ausgießer umsetzen – zum Beispiel für Emulsionen oder rieselfähige Füllgüter." },

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
