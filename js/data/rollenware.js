/* =====================================================================
   TOMA · Rollenware / Folien auf Rolle Landingpage — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/rollenware-folien-auf-rolle-flexible-verpackungsloesungen/
   Bilder: vorerst Platzhalter aus dem Doypack-Bestand (werden ersetzt).
   ===================================================================== */

/* ---- Produkt: Name (Alt-/Aria-Texte) & Vorschaubild im Konfigurator ---- */
export const product = {
  name: "Rollenware",
  configPhoto: "assets/rollenware/rollenware-neutral.webp"
};

/* ---- Feature-Explorer: entfällt auf dieser Seite ----
   Bauteile.svg zeigt einen Beutel – für Folie auf Rolle nicht passend.
   Zubehör (Zipper, Ausgießer, Aromaventil) steht im Abschnitt #beratung. */
export const features = [];

/* ---- Anwendungsbereiche ---- */
export const applications = [
  { id: "food", icon: "food", label: "Lebensmittel & Trockenprodukte",
    text: "Für Lebensmittel und Trockenprodukte, die maschinell verpackt oder portioniert werden – mit Folienaufbau und Barriere passend zu Füllgut und gewünschter Haltbarkeit.",
    meta: ["Barriere je nach Füllgut", "Maschinelle Verarbeitung", "Individuell bedruckt"], link: "https://www.toma-gmbh.de/food/",
    image: "assets/rollenware/rollenware-erdbeeren.webp", alt: "Bedruckte Folie auf Rolle für getrocknete Erdbeeren" },
  { id: "pet", icon: "pet", label: "Tierfutter & Snacks",
    text: "Für Tierfutter und Snacks lassen sich Folien auf Rolle mit Schutz vor Feuchtigkeit, Fett und Aromaverlust abstimmen – bedruckt im eigenen Markenlayout.",
    meta: ["Fett- und Ölbeständigkeit", "Aromaschutz", "Ihr Layout"], link: "https://www.toma-gmbh.de/tierfutter/",
    image: "assets/rollenware/rollenware-04.webp", alt: "Bedruckte Folienrollen für Snacks und Nudeln an einer Verpackungsanlage" },
  { id: "supplements", icon: "pharma", label: "Nahrungsergänzungsmittel",
    text: "Für Nahrungsergänzungsmittel ist die richtige Barriere oft entscheidend für Haltbarkeit und Qualität – wir stimmen Materialaufbau und Maschine aufeinander ab.",
    meta: ["Barrierefolie", "Gleichbleibende Qualität", "Sachets möglich"], link: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/",
    image: "assets/doypack/doypack-05.webp", alt: "Platzhalter: Rollenware für Nahrungsergänzungsmittel" },
  { id: "powder", icon: "powder", label: "Pulver, Granulate & Saaten",
    text: "Für Pulver, Granulate und Saaten, die maschinell abgefüllt werden – mit einer Folie, die zuverlässig im Produktionsprozess läuft.",
    meta: ["Prozesssicher", "Feuchtigkeitsbarriere", "Monofolie oder Verbund"], link: "https://www.toma-gmbh.de/chemie-branche/",
    image: "assets/doypack/doypack-nachfuellbeutel.webp", alt: "Platzhalter: Rollenware für Pulver, Granulate und Saaten" },
  { id: "cosmetic", icon: "cosmetic", label: "Kosmetik & Hygiene",
    text: "Für Kosmetik- und Hygieneprodukte mit individuell bedruckter Folie – passend zu Produktlinie und Verkaufsauftritt.",
    meta: ["Individuell bedruckt", "Hochwertige Haptik", "Transparent oder blickdicht"], link: "https://www.toma-gmbh.de/non-food/",
    image: "assets/doypack/doypack-tee.webp", alt: "Platzhalter: Rollenware für Kosmetik- und Hygieneprodukte" },
  { id: "chemical", icon: "nonfood", label: "Chemie & Technik",
    text: "Für chemische oder technische Füllgüter wählen wir den Folienaufbau nach Schutz-, Stabilitäts- und Verarbeitungsanforderungen.",
    meta: ["Stabiler Verbund", "Schutzfunktion", "Technische Beratung"], link: "https://www.toma-gmbh.de/chemie-branche/",
    image: "assets/doypack/standbodenbeutel-ausgiesser.webp", alt: "Platzhalter: Rollenware für chemische und technische Füllgüter" },
  { id: "pouches", icon: "liquid", label: "Flexible Beutelverpackungen",
    text: "Aus Rollenware entstehen flexible Beutelverpackungen wie Doypacks, Flachbeutel oder Seitenfaltenbeutel – direkt auf Ihrer Verpackungsanlage.",
    meta: ["Doypacks", "Flachbeutel", "Seitenfaltenbeutel"], link: "https://www.toma-gmbh.de/doypack-standbodenbeutel-hersteller/",
    image: "assets/rollenware/rollenware-1.webp", alt: "Verpackungsanlage verarbeitet TOMA-Folie von der Rolle zu Beuteln" }
];

/* ---- Konfigurator: Schritte ----
   summaryLabel überschreibt die Standard-Beschriftung in Zusammenfassung,
   HUD und Nachricht (Keys bleiben wegen der cfg_*-Formularfelder gleich). */
export const configSteps = [
  { key: "application", title: "Anwendung / Füllgut", type: "single",
    hint: "Was möchten Sie verpacken?",
    options: ["Lebensmittel / Trockenprodukte","Tierfutter / Snacks","Nahrungsergänzungsmittel","Pulver / Granulate / Saaten","Kosmetik / Hygiene","Chemische / technische Füllgüter","Andere Anwendung"] },
  { key: "materialGoal", title: "Materialaufbau", type: "single", summaryLabel: "Materialaufbau",
    hint: "Grobe Richtung – die finale Empfehlung erfolgt nach technischer Prüfung.",
    options: ["Material noch offen","PET/PE","OPP/PE","PET/Alu/PE","Papier/PE","PE- oder PP-Monomaterial","Sterilisierbarer Aufbau","Technische Beratung erforderlich"] },
  { key: "sizeClass", title: "Ausführung & Format", type: "single-with-input", summaryLabel: "Ausführung",
    hint: "Folienstärke, Bahnbreite und Rollenkern stimmen wir auf Ihre Maschine ab.",
    options: ["Flachfolie (einbahnig)","Schlauchfolie ohne Seitenfalte","Schlauchfolie mit Seitenfalte","Ausführung noch offen"],
    input: { key: "fillVolume", summaryLabel: "Format", label: "Bahnbreite / Folienstärke / Kern (Freitext)", placeholder: "z. B. Bahnbreite, Folienstärke, Kerndurchmesser" } },
  { key: "features", title: "Barrierefunktion", type: "multi", summaryLabel: "Barriere",
    hint: "Mehrfachauswahl möglich – je nach Füllgut.",
    options: ["Sauerstoffbarriere","Feuchtigkeitsbarriere","Aromaschutz","Fett- und Ölbeständigkeit","Lichtschutz"] },
  { key: "closure", title: "Zubehör als Bulk-Ware", type: "single", summaryLabel: "Zubehör",
    hint: "Zusatzprodukte können zusätzlich zur Flachfolie bestellt werden.",
    options: ["Kein Zubehör","Zipper / Druckverschluss","Ausgießer","Aromaventil","Noch offen"] },
  { key: "recyclingGoal", title: "Recycling & Sterilisierbarkeit", type: "single", summaryLabel: "Recycling / Sterilisierbarkeit",
    hint: "Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab.",
    options: ["Anforderungen noch offen","Recycelbare Monomaterial-Folie prüfen","Sterilisierbarkeit erforderlich","Bestehende Materialspezifikation vorhanden","Technische Rücksprache gewünscht"],
    note: true },
  { key: "finish", title: "Bedruckung", type: "single", summaryLabel: "Bedruckung",
    hint: "Tiefdruck, Flexodruck oder Digitaldruck – das passende Verfahren klären wir im Projekt.",
    options: ["Bedruckt","Unbedruckt","Gestaltung noch offen"],
    link: { label: "Mehr über Bedruckung", href: "https://www.toma-gmbh.de/drucktechnik/" } },
  { key: "summary", title: "Zusammenfassung", type: "summary",
    hint: "Ihre Auswahl im Überblick – übernehmen Sie sie direkt in die Anfrage." }
];

/* ---- Konfigurator: Regeln (deaktivierte Optionen mit Begründung) ---- */
export const configRules = {};

/* ---- Mapping Option-Labels auf SVG-Layer (Live-Vorschau, vorerst Beutel-Grafik) ---- */
export const layerMap = {
  "Zipper / Druckverschluss": "zipper",
  "Ausgießer": "spout",
  "Aromaventil": "valve",
  "Bedruckt": "print"
};

/* ---- Vorteile-Karussell („Warum Rollenware von TOMA“) ---- */
export const values = [
  {
    title: "Individuell abstimmbar",
    text: "Folienstärke, Bahnbreite, Rollenkern, Druckbild, Oberfläche und Barrierefunktion stimmen wir auf Produkt und Maschine ab.",
    image: "assets/rollenware/rollenware-kraeuter.webp",
    alt: "Bedruckte Folienrolle für Kräuterverpackungen",
    accent: true
  },
  {
    title: "Für FFS-/HFFS-Anlagen",
    text: "Flachfolie wird direkt auf Ihrer Verpackungsanlage verarbeitet – zu Beuteln, Sachets oder flexiblen Verpackungsformaten.",
    image: "assets/rollenware/rollenware-1.webp",
    alt: "Schlauchbeutelmaschine mit TOMA-Folie auf Rolle",
    accent: false
  },
  {
    title: "Hohe Prozesssicherheit",
    text: "Abgestimmt auf Maschine und Füllgut läuft die Folie zuverlässig im Produktionsprozess – in gleichbleibender Qualität.",
    image: "assets/rollenware/rollenware-04.webp",
    alt: "Bedruckte Folienrollen an Verpackungsanlagen in einer Produktionshalle",
    accent: false
  },
  {
    title: "Vielfältige Materialkombinationen",
    text: "Monofolien und Verbundfolien wie PET/PE, OPP/PE, PET/Alu/PE oder Papier/PE – passend zu Schutz- und Verarbeitungsanforderungen.",
    image: "assets/doypack/doypack-05.webp",
    alt: "Platzhalter: Verpackungen aus verschiedenen Materialien",
    accent: true
  },
  {
    title: "Mit Barrierefunktion",
    text: "Schutz vor Sauerstoff, Feuchtigkeit, Aromaverlust, Fett und Licht – je nach Füllgut und gewünschter Haltbarkeit.",
    image: "assets/doypack/doypack-aromaventil.webp",
    alt: "Platzhalter: Verpackung mit Barrierefolie",
    accent: false
  },
  {
    title: "Recycelbare Monomaterial-Folien",
    text: "PP- oder PE-Monomaterial für sortenreinere und recyclingfreundlichere Verpackungskonzepte.",
    image: "assets/doypack/standbodenbeutel-doypack-e1696408989978.webp",
    alt: "Platzhalter: Verpackung als Beispiel für Monomaterial",
    accent: false
  },
  {
    title: "Bedruckbar im eigenen Design",
    text: "Tiefdruck mit bis zu 10 Farben, Flexodruck oder Digitaldruck – im individuellen Markenlayout.",
    image: "assets/rollenware/rollenware-big.webp",
    alt: "Druckmaschine mit farbig bedruckten Folienbahnen",
    accent: true
  },
  {
    title: "Effiziente Lagerung",
    text: "Lieferung auf Rolle – platzsparend im Lager und direkt in Produktions- und Abfüllprozesse integrierbar.",
    image: "assets/rollenware/rollenware-3.webp",
    alt: "Folienrollen auf Paletten in einer Lagerhalle",
    accent: false
  },
  {
    title: "Kleine bis größere Serien",
    text: "Geeignet für kleine, mittlere und größere Produktionsserien – flexibel angepasst an Produktgröße und Füllmenge.",
    image: "assets/rollenware/verbundfolien.webp",
    alt: "Bedruckte Folienrolle für Premium-Teeverpackungen",
    accent: false
  }
];

/* ---- Im Einsatz / Gallery ---- */
export const galleryItems = [
  {
    src: "assets/rollenware/rollenware-erdbeeren.webp",
    alt: "Bedruckte Folie auf Rolle für getrocknete Erdbeeren",
    title: "Lebensmittel",
    desc: "Folie auf Rolle für Trockenprodukte – mit Barriere passend zum Füllgut.",
    size: "tall"
  },
  {
    src: "assets/rollenware/verbundfolien.webp",
    alt: "Bedruckte Folienrolle für Teeverpackungen",
    title: "Tee & Kräuter",
    desc: "Folie auf Rolle im eigenen Design – mit Schutz vor Aromaverlust passend zum Füllgut.",
    size: "normal"
  },
  {
    src: "assets/rollenware/rollenware-04.webp",
    alt: "Bedruckte Folienrollen für Snacks an einer Verpackungsanlage",
    title: "Tierfutter & Snacks",
    desc: "Bedruckt im eigenen Markenlayout – mit Schutz vor Feuchtigkeit und Aromaverlust.",
    size: "normal"
  },
  {
    src: "assets/rollenware/rollenware-1.webp",
    alt: "Verpackungsanlage mit TOMA-Folie von der Rolle",
    title: "Maschinelle Abfüllung",
    desc: "Prozesssicher maschinell abgefüllt – als Monofolie oder Verbundfolie.",
    size: "wide"
  }
];

/* ---- Testimonials (von der bestehenden Rollenware-Seite übernommen) ---- */
export const testimonials = [
  { quote: "Für uns ist die kontinuierliche Weiterentwicklung unserer Verpackungslösungen entscheidend – hier bekommen wir die richtige Unterstützung und das nötige Verständnis für unsere Prozesse.",
    name: "Carlos V.", role: "Operations & Supply Chain", branch: "Lebensmittel & Genuss" },
  { quote: "Entscheidend ist für uns, dass die Verpackung technisch exakt zu unseren Anforderungen passt – von Material bis Verarbeitung muss alles zuverlässig funktionieren.",
    name: "Rita S.", role: "Materialbeschaffung", branch: "Industrie & Chemie" },
  { quote: "Eine Verpackung muss im laufenden Betrieb einfach funktionieren – genau diese Praxistauglichkeit haben wir hier gefunden.",
    name: "Johann M.", role: "Marketingleiter", branch: "Pharma & MedTech" }
];

/* ---- Branchen-Strip (Hero) ---- */
export const branches = [
  { icon: "food", label: "Lebensmittel", href: "https://www.toma-gmbh.de/food/" },
  { icon: "pet", label: "Tierfutter", href: "https://www.toma-gmbh.de/tierfutter/" },
  { icon: "pharma", label: "Nahrungsergänzung", href: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/" },
  { icon: "powder", label: "Chemie & Technik", href: "https://www.toma-gmbh.de/chemie-branche/" },
  { icon: "nonfood", label: "Non-Food", href: "https://www.toma-gmbh.de/non-food/" }
];

/* ---- FAQ (kategorisiert, max. 5 Fragen pro Kategorie sichtbar) ---- */
export const faqCategories = [
  { id: "grundlagen", label: "Grundlagen" },
  { id: "varianten", label: "Varianten" },
  { id: "material", label: "Material & Barriere" },
  { id: "projekt", label: "Bedruckung & Projekt" }
];

export const faqs = [
  { cat: "grundlagen",
    q: "Was zeichnet eine gute Rollenware-Lösung aus?",
    a: "Eine gute Rollenware-Lösung passt nicht nur zum Produkt, sondern auch zur eingesetzten Verpackungsmaschine. Entscheidend sind Materialaufbau, Folienstärke, Bahnbreite, Siegeleigenschaften, Barrierefunktion und die spätere Weiterverarbeitung. Nur wenn diese Faktoren aufeinander abgestimmt sind, läuft die Folie zuverlässig im Produktionsprozess." },
  { cat: "grundlagen",
    q: "Was ist Flachfolie bzw. Rollenware?",
    a: "Flachfolie ist Verpackungsfolie, die auf Rolle geliefert und direkt auf Ihrer Verpackungsanlage verarbeitet wird – zum Beispiel zu Beuteln, Sachets oder flexiblen Verpackungsformaten. Sie lässt sich direkt in Produktions- und Abfüllprozesse integrieren." },
  { cat: "grundlagen",
    q: "Für welche Maschinen ist Rollenware geeignet?",
    a: "Rollenware ist für die maschinelle Verpackung gedacht, etwa auf FFS- oder HFFS-Anlagen. Folienstärke, Bahnbreite, Rollenkern und Siegeleigenschaften stimmen wir auf die eingesetzte Verpackungsmaschine ab." },
  { cat: "grundlagen",
    q: "Für welche Produkte eignet sich Rollenware?",
    a: "Für Lebensmittel und Trockenprodukte, Tierfutter und Snacks, Nahrungsergänzungsmittel, Pulver, Granulate und Saaten, Kosmetik- und Hygieneprodukte sowie chemische oder technische Füllgüter – überall dort, wo Produkte maschinell verpackt, portioniert oder weiterverarbeitet werden." },

  { cat: "varianten",
    q: "Welche Varianten von Rollenware gibt es?",
    a: "Monofolie aus PE oder PP, Verbundfolie für erhöhte Stabilität und Schutzfunktion, Schlauchfolie mit oder ohne Seitenfalte, einbahnige Folienrollen, sterilisierbare Rollenware für hitzebehandelte Produkte, recycelbare Monomaterial-Folien sowie bedruckte Rollenware im individuellen Markenlayout." },
  { cat: "varianten",
    q: "Welche Verpackungen entstehen aus Rollenware?",
    a: "Aus Flachfolie lassen sich auf der Verpackungsanlage Beutel, Sachets oder flexible Verpackungsformate herstellen – etwa Doypacks, Flachbeutel oder Seitenfaltenbeutel." },
  { cat: "varianten",
    q: "Kann ich Zipper, Ausgießer oder Aromaventile dazu bestellen?",
    a: "Ja. Zusatzprodukte wie Zipper bzw. Druckverschlüsse, Ausgießer oder Aromaventile können als Bulk-Ware zusätzlich zur Flachfolie bestellt werden." },

  { cat: "material",
    q: "Welche Materialien sind für Folien auf Rolle möglich?",
    a: "Rollenware kann aus Monofolie oder Verbundfolie bestehen. Häufige Materialaufbauten sind PET/PE, OPP/PE, PET/Alu/PE, Papier/PE sowie PP- oder PE-Monomaterialien. Die passende Kombination hängt davon ab, ob Stabilität, Transparenz, Sterilisierbarkeit, Recyclingfähigkeit oder eine starke Barrierefunktion im Vordergrund steht." },
  { cat: "material",
    q: "Wann ist eine Barrierefolie sinnvoll?",
    a: "Eine Barrierefolie ist sinnvoll, wenn das Produkt vor Sauerstoff, Feuchtigkeit, Aromaverlust, Fett, Licht oder anderen äußeren Einflüssen geschützt werden muss. Besonders bei Lebensmitteln, Tierfutter, Nahrungsergänzungsmitteln oder empfindlichen Füllgütern kann die richtige Barriere entscheidend für Haltbarkeit und Qualität sein." },
  { cat: "material",
    q: "Gibt es recycelbare Rollenware?",
    a: "Ja, PP- oder PE-Monomaterial-Folien sind für sortenreinere und recyclingfreundlichere Lösungen möglich. Die tatsächliche Eignung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab." },
  { cat: "material",
    q: "Gibt es sterilisierbare Folien auf Rolle?",
    a: "Ja, sterilisierbare Folienaufbauten sind für Produkte mit thermischer Behandlung möglich. Welcher Aufbau passt, hängt von Füllgut, Abfülltemperatur und Produktionsprozess ab." },
  { cat: "material",
    q: "Ist Rollenware für Lebensmittel geeignet?",
    a: "Ja, lebensmittelkonforme Lösungen sind je nach Materialaufbau möglich. TOMA-Produkte werden mit den zugehörigen Zertifikaten für die Zulassung im Nahrungsmittelbereich gefertigt; alle genannten Zertifizierungen sind nachweisbar." },

  { cat: "projekt",
    q: "Kann Rollenware individuell bedruckt werden?",
    a: "Ja, Rollenware kann im gewünschten Layout bedruckt werden. Dadurch lässt sich die Verpackung direkt an das Corporate Design, die Produktlinie oder den Verkaufsauftritt anpassen. Möglich sind je nach Anforderung unterschiedliche Druckbilder, Oberflächen und Veredelungen." },
  { cat: "projekt",
    q: "Welche Druckverfahren sind möglich?",
    a: "Tiefdruck (Rotogravure) mit hoher Druckqualität und bis zu 10 Farben inkl. Sonderfarben – ideal für große Auflagen. Flexodruck ist wirtschaftlich bei mittleren Auflagen. Digitaldruck eignet sich für kleine Mengen mit hoher Flexibilität." },
  { cat: "projekt",
    q: "Welche Informationen sind für eine Flachfolien-Anfrage wichtig?",
    a: "Für eine passende Empfehlung sind Angaben zum Füllgut, zur Maschine, zur benötigten Folienstärke, zur Bahnbreite, zum Kerndurchmesser, zur Barrierefunktion und zum gewünschten Druck hilfreich. Je genauer diese Informationen vorliegen, desto gezielter kann TOMA die passende Folienlösung empfehlen." },
  { cat: "projekt",
    q: "Wie läuft die Anfrage ab?",
    a: "Sie senden uns die wichtigsten Eckdaten. Wir prüfen Material, Maschinenkompatibilität und Umsetzung und melden uns mit einer fundierten Einschätzung." },
  { cat: "projekt",
    q: "Wer ist mein Ansprechpartner?",
    a: "Sie haben bei TOMA einen persönlichen Ansprechpartner – keine anonyme Ticket-Schleife. Telefonisch erreichen Sie uns unter +49 (0)2157 128475." }
];
