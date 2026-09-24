/* =====================================================================
   TOMA · Doypack Landingpage — Zentrale Inhaltsdaten
   Positionen/Inhalte strukturiert (keine verstreuten CSS-Regeln).
   ===================================================================== */

/* ---- Feature-Explorer: Ausstattungsdetails (Bauteile.svg) ----
   svgId = Element-ID in assets/Bauteile.svg; Nummern immer sichtbar,
   Highlight-Ebenen erst bei Hover auf der rechten Liste. */
export const features = [
  { id: "euroloch", label: "Euroloch", svgId: "Euroloch",
    desc: "Standardisierte Aufhängung für die Präsentation am Verkaufsständer.",
    case: "Typisch im Einzelhandel und für Aktionsware.", link: null },
  { id: "corners", label: "Abgerundete Ecken", svgId: "Abgerundete_Ecken",
    desc: "Weiche Ecken für angenehme Haptik und ein hochwertiges Erscheinungsbild.",
    case: "Premium-Anmutung bei Genuss- und Pflegeprodukten.", link: null },
  { id: "notch", label: "Einreißkerbe", svgId: "Einreisskerbe",
    desc: "Definierte Öffnungshilfe für ein sauberes, werkzeugloses Aufreißen.",
    case: "Portionen und Produkte ohne Wiederverschluss.", link: null },
  { id: "zipper", label: "Zipper", svgId: "Zipper",
    desc: "Wiederverschluss für Frische und komfortable Mehrfachentnahme.",
    case: "Snacks, Kaffee, Trockenprodukte im Haushalt.", link: null },
  { id: "valve", label: "Aromaventil", svgId: "Aromaventil",
    desc: "Entgasungsventil, das Überdruck entweichen lässt und Aroma bewahrt.",
    case: "Frisch gerösteter Kaffee.", link: "https://www.toma-gmbh.de/kaffeeverpackung/" }
];

/* ---- Anwendungsbereiche ---- */
export const applications = [
  { id: "food", icon: "food", label: "Lebensmittel & Snacks",
    text: "Vom knusprigen Snack bis zu Trockenprodukten: Doypacks kombinieren Standfestigkeit, Regalwirkung und passenden Produktschutz.",
    meta: ["Zipper", "Sichtfenster", "Einreißkerbe"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack-09.png", alt: "Oranger Doypack für Müsli in Küchenumgebung" },
  { id: "coffee", icon: "coffee", label: "Kaffee & Aromatisches",
    text: "Aromatische Produkte profitieren von Aromaschutz und – bei frisch geröstetem Kaffee – von einem Entgasungsventil.",
    meta: ["Aromaventil", "Zipper", "Hochbarriere"], link: "https://www.toma-gmbh.de/kaffeeverpackung/",
    image: "assets/doypack-1.png", alt: "Bedruckte Kaffee-Doypacks in Kraft- und Anthrazitoptik" },
  { id: "powder", icon: "powder", label: "Pulver & Nahrungsergänzung",
    text: "Für Pulver und Supplements zählen Dosierbarkeit, Wiederverschluss und ein Materialaufbau, der das Produkt schützt.",
    meta: ["Zipper", "Barriere", "Standfest"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/doypack-13.png", alt: "Doypack für Zucker und pulverförmige Produkte" },
  { id: "pet", icon: "pet", label: "Tierfutter",
    text: "Größere Füllvolumen, robustes Handling und Wiederverschluss – Doypacks eignen sich gut für den Tiernahrungsbereich.",
    meta: ["Großformat", "Zipper", "Euroloch"], link: "https://www.toma-gmbh.de/tierfutter/",
    image: "assets/Attribute-Doypack.png", alt: "Standbodenbeutel in verschiedenen Größen und Materialien" },
  { id: "cosmetic", icon: "cosmetic", label: "Kosmetik & Pflege",
    text: "Hochwertige Oberflächen und feine Veredelungen unterstützen eine Premium-Anmutung für Pflege- und Kosmetikprodukte.",
    meta: ["Soft-Touch", "Ausgießer", "Sichtfenster"], link: "https://www.toma-gmbh.de/verpackungsloesungen/",
    image: "assets/doypack-05.png", alt: "Premium-Doypack für Badebomben und Pflegeprodukte" },
  { id: "liquid", icon: "liquid", label: "Flüssigkeiten & Nachfüllen",
    text: "Mit Ausgießer werden fließfähige Produkte dosierbar und wiederverschließbar – ideal für ressourcenschonende Nachfülllösungen.",
    meta: ["Ausgießer", "Standfest", "Nachfüllen"], link: "#ausgiesser",
    image: "assets/doypack-nachfuellbeutel.png", alt: "Nachfüllbeutel mit Ausgießer für Duschbad" },
  { id: "nonfood", icon: "nonfood", label: "Non-Food",
    text: "Auch außerhalb des Lebensmittelbereichs überzeugen Doypacks durch Handling, Präsentation und flexible Ausstattung.",
    meta: ["Robust", "Individuell", "Wiederverschluss"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack-tee.png", alt: "Individuell bedruckter TOMA-Doypack" }
];

/* ---- Konfigurator: Schritte ---- */
export const configSteps = [
  { key: "application", title: "Anwendung / Füllgut", type: "single",
    hint: "Was möchten Sie verpacken?",
    options: ["Trockene Lebensmittel","Kaffee","Pulver","Tierfutter","Kosmetik","Flüssigkeit","Non-Food","Andere Anwendung"] },
  { key: "materialGoal", title: "Materialanforderung", type: "single",
    hint: "Grobe Richtung – die finale Empfehlung erfolgt nach technischer Prüfung.",
    options: ["Material noch offen","Monomaterial prüfen","Mehrschichtaufbau prüfen","Metallisierte Barriere prüfen","Papieroptik gewünscht","Technische Beratung erforderlich"] },
  { key: "sizeClass", title: "Format / Füllvolumen", type: "single-with-input",
    hint: "Das finale Format hängt vom Füllgut ab.",
    options: ["Kompakt","Mittel","Groß","Sonderformat"],
    input: { key: "fillVolume", label: "Gewünschtes Füllvolumen (Freitext)", placeholder: "z. B. 250 g, 1 l, 2,5 kg" } },
  { key: "closure", title: "Verschluss", type: "single",
    hint: "Wie soll der Beutel verschlossen bzw. wiederverschlossen werden?",
    options: ["Kein Wiederverschluss","Zipper","Ausgießer","Kindersicherung","Noch offen"] },
  { key: "features", title: "Öffnung & Komfort", type: "multi",
    hint: "Mehrfachauswahl möglich.",
    options: ["Einreißkerbe","Perforation","Euroloch","Abgerundete Ecken","Aromaventil","Sichtfenster"] },
  { key: "recyclingGoal", title: "Recycling- & PPWR-Anforderungen", type: "single",
    hint: "Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab.",
    options: ["Anforderungen noch offen","Recyclingorientierte Lösung prüfen","Monomaterial bevorzugt","Bestehende Materialspezifikation vorhanden","Technische Rücksprache gewünscht"],
    note: true },
  { key: "finish", title: "Oberfläche & Bedruckung", type: "single",
    hint: "Kompakte Auswahl – Details klären wir im Projekt.",
    options: ["Bedruckt","Unbedruckt","Matt","Glänzend","Soft-Touch prüfen","Sichtfenster","Gestaltung noch offen"],
    link: { label: "Mehr über individuelle Bedruckung", href: "https://www.toma-gmbh.de/drucktechnik/" } },
  { key: "summary", title: "Zusammenfassung", type: "summary",
    hint: "Ihre Auswahl im Überblick – übernehmen Sie sie direkt in die Anfrage." }
];

/* ---- Konfigurator: Regeln (deaktivierte Optionen mit Begründung) ---- */
export const configRules = {
  // Bei Flüssigkeit ist ein reiner Zipper ohne Ausgießer meist nicht sinnvoll
  closure: (cfg) => {
    if (cfg.application === "Flüssigkeit") {
      return { "Kein Wiederverschluss": "Bei fließfähigen Produkten wird i. d. R. ein Ausgießer empfohlen." };
    }
    return {};
  }
};

/* ---- Mapping Feature-/Option-Labels auf SVG-Layer (Live-Vorschau) ---- */
export const layerMap = {
  "Zipper": "zipper",
  "Ausgießer": "spout",
  "Kindersicherung": "zipper",
  "Einreißkerbe": "notch",
  "Perforation": "perforation",
  "Euroloch": "euroloch",
  "Abgerundete Ecken": "corners",
  "Aromaventil": "valve",
  "Sichtfenster": "window",
  "Bedruckt": "print",
  "Papieroptik gewünscht": null
};

/* ---- Vorteile-Karussell („Warum Doypacks von TOMA“) ---- */
export const values = [
  {
    title: "Standfeste Regalwirkung",
    text: "Steht stabil im Regal und bietet großzügige Markenflächen für einen starken Auftritt am Point of Sale.",
    image: "assets/doypack-1.png",
    alt: "Zwei bedruckte Kaffee-Doypacks in Kraft- und Anthrazitoptik",
    accent: false
  },
  {
    title: "Individuell konfigurierbar",
    text: "Material, Barriere, Format und Ausstattung werden auf Füllgut und Prozess abgestimmt – von der Beratung bis zur Spezifikation.",
    image: "assets/doypack-09.png",
    alt: "Oranger Doypack für Müsli mit TOMA-Logo in Küchenumgebung",
    accent: true
  },
  {
    title: "Komfort & Wiederverschluss",
    text: "Mit passendem Verschluss bleibt das Produkt geschützt und komfortabel nutzbar – ein klarer Mehrwert für Endkunden.",
    image: "assets/doypack-Druckverschluss.png",
    alt: "Doypacks mit wiederverschließbarem Druckverschluss",
    accent: false
  },
  {
    title: "Produktschutz & Barriere",
    text: "Der Materialaufbau wird auf Ihr Füllgut abgestimmt – für den Schutz, den Aroma, Feuchte oder Haltbarkeit erfordern.",
    image: "assets/doypack-aromaventil.png",
    alt: "Doypack mit Aromaventil für produktschützende Barriere",
    accent: false
  },
  {
    title: "Individuelle Bedruckung",
    text: "Großzügige Druckflächen machen Marke und Produktversprechen am Regal sofort sichtbar.",
    image: "assets/doypack-tee.png",
    alt: "Individuell bedruckter TOMA-Doypack umgeben von Tee",
    accent: true
  },
  {
    title: "Flexible Ausstattung",
    text: "Zipper, Ventil, Ausgießer, Sichtfenster, Einreißkerbe und weitere Optionen – passend zu Handling und Anwendung.",
    image: "assets/Attribute-Doypack.png",
    alt: "Standbodenbeutel mit verschiedenen Ausstattungsmerkmalen",
    accent: false
  },
  {
    title: "Breites Einsatzspektrum",
    text: "Von Food und Kaffee über Pulver und Pet Food bis Care, Non-Food und Nachfülllösungen.",
    image: "assets/doypack-05.png",
    alt: "Premium-Doypack für Pflegeprodukte",
    accent: false
  },
  {
    title: "Dosierbarkeit & Nachfüllen",
    text: "Mit Ausgießer werden fließfähige Produkte dosierbar und wiederverschließbar – ideal für ressourcenschonende Nachfüllkonzepte.",
    image: "assets/doypack-nachfuellbeutel.png",
    alt: "Nachfüllbeutel mit Ausgießer",
    accent: true
  },
  {
    title: "Recyclingorientiert prüfen",
    text: "Je nach Anforderung können recyclingorientierte Aufbauten oder Monomateriallösungen geprüft werden – abgestimmt auf Produkt und Anwendungsfall.",
    image: "assets/Standbodenbeutel-Doypack-e1696408989978.png",
    alt: "Weißer Standbodenbeutel als Beispiel für Materialoptionen",
    accent: false
  },
  {
    title: "Beratung bis Spezifikation",
    text: "Anforderungen aufnehmen, Material und Format abstimmen, Muster bzw. Freigabe – persönlich begleitet bis zur Produktion.",
    image: "assets/doypack-13.png",
    alt: "Doypack in Anwendungsumgebung",
    accent: false
  }
];

/* ---- Im Einsatz / Gallery ---- */
export const galleryItems = [
  {
    src: "assets/doypack-05.png",
    alt: "Matt-schwarzer Doypack für Badebomben",
    title: "Kosmetik & Care",
    desc: "Matt-schwarzer Doypack in spa-ähnlicher Umgebung – hochwertige Optik für Pflege- und Wellnessprodukte.",
    size: "tall"
  },
  {
    src: "assets/doypack-13.png",
    alt: "Doypack für Zucker mit Erdbeeren",
    title: "Lebensmittel",
    desc: "Doypack in der Küche – ideal für Zucker, Gewürze und trockene Lebensmittel mit klarer Produktpräsentation.",
    size: "normal"
  },
  {
    src: "assets/doypack-nachfuellbeutel.png",
    alt: "Spoutbag Nachfüllbeutel für Duschbad",
    title: "Nachfüllbeutel",
    desc: "Weißer Spoutbag für Duschbad und Pflege – sauberes Nachfüllen mit integriertem Ausgießer.",
    size: "normal"
  },
  {
    src: "assets/doypack-tee.png",
    alt: "TOMA-Doypack mit Tee und Kräutern",
    title: "Tee & Genuss",
    desc: "Individuell bedruckter TOMA-Doypack umgeben von Tee und Kräutern – Aromaschutz trifft Markenauftritt.",
    size: "wide"
  }
];

/* ---- Testimonials (real von der bestehenden TOMA-Seite übernommen) ---- */
export const testimonials = [
  { quote: "Besonders überzeugt haben uns der zuverlässige Service, die schnelle Reaktionszeit und die persönliche Beratung. Man merkt sofort, dass hier lösungsorientiert gearbeitet wird.",
    name: "Carlos V.", role: "Operations & Supply Chain", branch: "Lebensmittel & Genussmittel" },
  { quote: "Für uns zählen Qualität und Produktsicherheit an erster Stelle – genau hier hat uns TOMA mit seinen Doypack-Lösungen voll überzeugt.",
    name: "Andreas H.", role: "Geschäftsführer", branch: "Tiernahrung" },
  { quote: "Abfallverantwortung und nachhaltige Verpackung sind für uns entscheidend. Die Doypacks von TOMA verbinden genau das mit hoher Qualität und kompetenter Beratung.",
    name: "Julian B.", role: "Einkauf & Produktion", branch: "Lebensmittel & Genussmittel" }
];

/* ---- Branchen-Strip (Hero „As featured in"-Analog) ---- */
export const branches = [
  { icon: "food", label: "Lebensmittel & Snacks", href: "https://www.toma-gmbh.de/food/" },
  { icon: "coffee", label: "Kaffee", href: "https://www.toma-gmbh.de/kaffeeverpackung/" },
  { icon: "pet", label: "Tierfutter", href: "https://www.toma-gmbh.de/tierfutter/" },
  { icon: "cosmetic", label: "Kosmetik & Pflege", href: "https://www.toma-gmbh.de/verpackungsloesungen/" },
  { icon: "pharma", label: "Pharma", href: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/" },
  { icon: "nonfood", label: "Non-Food", href: "https://www.toma-gmbh.de/non-food/" }
];

/* ---- FAQ (kategorisiert, max. 5 Fragen pro Kategorie sichtbar) ---- */
export const faqCategories = [
  { id: "grundlagen", label: "Grundlagen" },
  { id: "material", label: "Material" },
  { id: "ausstattung", label: "Ausstattung" },
  { id: "ausgiesser", label: "Ausgießer" },
  { id: "projekt", label: "Projekt" }
];

export const faqs = [
  { cat: "grundlagen",
    q: "Was ist der Unterschied zwischen Doypack und Standbodenbeutel?",
    a: "„Doypack“ ist eine gängige Bezeichnung für einen Standbodenbeutel: einen Beutel, der durch seine Bodenform eigenständig steht. Die Begriffe werden meist synonym verwendet." },
  { cat: "grundlagen",
    q: "Welche Produkte können in Doypacks verpackt werden?",
    a: "Je nach Ausführung eignen sich Doypacks für trockene Lebensmittel, Kaffee, Pulver, Granulate, Tierfutter, Kosmetik, Non-Food und – mit passender Ausstattung – für fließfähige Produkte." },
  { cat: "grundlagen",
    q: "Können Doypacks individuell bedruckt werden?",
    a: "Ja. Gestaltung, Oberfläche und Freigabeprozess stimmen wir individuell ab. Details finden Sie auf unserer Seite zur Drucktechnik." },
  { cat: "grundlagen",
    q: "Kann ein Muster angefordert werden?",
    a: "Muster sind auf Anfrage möglich, damit Sie Haptik, Format und Funktion vor der Serie bewerten können." },
  { cat: "grundlagen",
    q: "Wie läuft ein individuelles Projekt ab?",
    a: "In der Regel: Anforderungen aufnehmen, Material und Barriere abstimmen, Format und Ausstattung definieren, Muster bzw. Freigabe, anschließend Produktion und Lieferung." },

  { cat: "material",
    q: "Welche Materialien sind möglich?",
    a: "Je nach Schutzbedarf kommen unterschiedliche Aufbauten in Frage – von Monomateriallösungen bis zu Mehrschichtverbunden mit höherer Barriere. Der passende Aufbau wird auf Ihr Füllgut abgestimmt." },
  { cat: "material",
    q: "Gibt es recyclingorientierte Doypack-Lösungen?",
    a: "Je nach Anforderung können recyclingorientierte Materialaufbauten oder Monomateriallösungen geprüft werden. Die konkrete Bewertung hängt vom Materialaufbau, Produkt und Anwendungsfall ab." },
  { cat: "material",
    q: "Was bedeutet Barriere beim Doypack?",
    a: "Die Barriere beschreibt den Schutz vor Sauerstoff, Feuchtigkeit, Licht oder Aromaverlust. Welcher Aufbau passt, hängt vom Füllgut, der gewünschten Haltbarkeit und dem Abfüllprozess ab." },
  { cat: "material",
    q: "Sind Monomaterial-Lösungen immer die beste Wahl?",
    a: "Nicht zwingend. Monomaterial kann recyclingorientiert vorteilhaft sein, reicht aber nicht für jedes Füllgut. Wir prüfen, welcher Aufbau Schutzbedarf und Nachhaltigkeitsziel am besten verbindet." },
  { cat: "material",
    q: "Können bestehende Materialspezifikationen übernommen werden?",
    a: "Ja. Wenn Sie bereits eine Spezifikation haben, prüfen wir Machbarkeit, Alternativen und passende Anpassungen für Ihr Produkt." },

  { cat: "ausstattung",
    q: "Welche Ausstattung ist möglich?",
    a: "Unter anderem Zipper, Ausgießer, Aromaventil, Sichtfenster, Euroloch, Einreißkerbe, Perforation, abgerundete Ecken sowie Verschlusslösungen mit erhöhtem Öffnungswiderstand." },
  { cat: "ausstattung",
    q: "Was bringt ein Zipper oder Wiederverschluss?",
    a: "Ein Wiederverschluss hält das Produkt länger frisch und verbessert die Handhabung nach dem Öffnen – besonders bei Portionierung und Nachfüllen." },
  { cat: "ausstattung",
    q: "Wofür eignet sich ein Aromaventil?",
    a: "Aromaventile entlassen Gase aus dem Beutel und schützen gleichzeitig vor unerwünschtem Lufteintritt – typisch bei frisch geröstetem Kaffee." },
  { cat: "ausstattung",
    q: "Sind Sichtfenster und Euroloch kombinierbar?",
    a: "Ja. Sichtfenster, Euroloch und weitere Ausstattungen lassen sich je nach Format und Materialaufbau kombinieren – wir stimmen die Machbarkeit projektbezogen ab." },
  { cat: "ausstattung",
    q: "Gibt es kindersichere Verschlusslösungen?",
    a: "Ja. Für bestimmte Produkte sind Verschlüsse mit erhöhtem Öffnungswiderstand möglich. Details klären wir anhand von Produkt und Anwendungsfall." },

  { cat: "ausgiesser",
    q: "Was ist ein Standbodenbeutel mit Ausgießer?",
    a: "Ein Standbodenbeutel mit Ausgießer (auch Doypack mit Spout) ist ein flexibler, standfähiger Beutel mit integriertem Ausgießer und meist Drehverschluss. Er eignet sich für flüssige, pastöse und pulverförmige Produkte, bei denen saubere Dosierung und Wiederverschließbarkeit wichtig sind." },
  { cat: "ausgiesser",
    q: "Für welche Produkte eignet sich ein Ausgießer?",
    a: "Typisch sind Lebensmittel wie Saucen und Dressings, Kosmetik wie Shampoo oder Lotion, Reinigungsmittel und Öle sowie Getränke und Nachfüllkonzepte. Material und Barriere werden am Füllgut ausgerichtet." },
  { cat: "ausgiesser",
    q: "Kann die Position des Ausgießers gewählt werden?",
    a: "Ja. Die Positionierung des Ausgießers stimmen wir flexibel auf Produkt, Abfüllung und Anwendung ab." },
  { cat: "ausgiesser",
    q: "Sind Ausgießer-Beutel wiederverschließbar?",
    a: "In der Regel ja – über einen Drehverschluss am Ausgießer. So bleibt die Entnahme hygienisch und dosierbar." },
  { cat: "ausgiesser",
    q: "Was ist der Unterschied zu Spoutbags / Nachfüllbeuteln?",
    a: "Spoutbags und Nachfüllbeutel nutzen ähnliche Ausgießer-Technik, oft mit Fokus auf Nachfüllen. Die passende Ausführung hängt von Produkt, Volumen und Anwendungsfall ab." },

  { cat: "projekt",
    q: "Welche Mengen sind möglich?",
    a: "Wir arbeiten projektbezogen. Für Standardgrößen und kleinere Mengen ist unser Shop 123pack der schnellste Weg. Ihre konkrete Menge stimmen wir gern individuell ab." },
  { cat: "projekt",
    q: "Wo finde ich kleine Mengen und Standardgrößen?",
    a: "Standardgrößen und kleinere Mengen erhalten Sie direkt in unserem Shop 123pack." },
  { cat: "projekt",
    q: "Wie läuft die Anfrage ab?",
    a: "Sie senden uns die wichtigsten Eckdaten. Wir prüfen Material, Machbarkeit und Umsetzung und melden uns mit einer fundierten Einschätzung." },
  { cat: "projekt",
    q: "Brauche ich bereits Druckdaten?",
    a: "Nicht zwingend zum Start. Für die Umsetzung brauchen wir später passende Druckdaten bzw. Spezifikationen – wir begleiten Sie im Freigabeprozess." },
  { cat: "projekt",
    q: "Wer ist mein Ansprechpartner?",
    a: "Sie haben bei TOMA einen persönlichen Ansprechpartner – keine anonyme Ticket-Schleife. Telefonisch erreichen Sie uns unter +49 (0)2157 128475." }
];
