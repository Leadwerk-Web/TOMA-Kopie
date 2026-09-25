/* =====================================================================
   TOMA · Startseite — Zentrale Inhaltsdaten
   Inhalte basierend auf https://www.toma-gmbh.de/ (Startseite) und den
   Produktseiten dieses Projekts. Kein Feature-Explorer, kein Konfigurator –
   die Startseite verteilt auf die Produktseiten.
   ===================================================================== */

/* ---- Produkt: Name (Alt-/Aria-Texte) ---- */
export const product = {
  name: "Flexible Verpackungen",
  configPhoto: "assets/doypack/doypack.webp"
};

/* ---- Feature-Explorer & Konfigurator: entfallen auf der Startseite ---- */
export const features = [];
export const configSteps = [];
export const configRules = {};
export const layerMap = {};

/* ---- Branchen (Tabs im Abschnitt #branchen) ---- */
export const applications = [
  { id: "food", icon: "food", label: "Lebensmittel",
    text: "Für Müsli, Nüsse, Zucker, Snacks oder Gewürze stimmen wir Material, Barriere und Verschluss auf Füllgut und gewünschte Haltbarkeit ab – je nach Anforderung mit Zipper, Sichtfenster oder Monomaterial.",
    meta: ["Barriere je nach Füllgut", "Wiederverschließbar", "Individuell bedruckt"],
    link: "https://www.toma-gmbh.de/food/", linkLabel: "Lebensmittelverpackung ansehen",
    image: "assets/doypack/doypack-09.webp", alt: "Oranger Doypack für Müsli in Küchenumgebung" },
  { id: "coffee", icon: "coffee", label: "Kaffee & Tee",
    text: "Kaffee und Tee brauchen Schutz vor Sauerstoff, Licht und Aromaverlust. Seitenfaltenbeutel, Box Pouches und Doypacks mit Aromaventil gehören hier zu den typischen Lösungen.",
    meta: ["Aromaventil", "Hochbarriere", "Seitenfalte oder Flachboden"],
    link: "https://www.toma-gmbh.de/kaffeeverpackung/", linkLabel: "Kaffeeverpackung ansehen",
    image: "assets/doypack/doypack-1.webp", alt: "Bedruckte Kaffee-Doypacks in Kraft- und Anthrazitoptik" },
  { id: "pet", icon: "pet", label: "Tierfutter",
    text: "Für Trockenfutter, Leckerlis und Snacks: robuste Beutel mit Schutz vor Feuchtigkeit, Fett und Aromaverlust – auf Wunsch mit Zipper und großer Druckfläche für Ihre Marke.",
    meta: ["Fett- und Ölbeständigkeit", "Robust & standfest", "Ihr Layout"],
    link: "https://www.toma-gmbh.de/tierfutter/", linkLabel: "Tierfutterverpackung ansehen",
    image: "assets/doypack/attribute-doypack.webp", alt: "Standbodenbeutel in verschiedenen Größen und Materialien" },
  { id: "nonfood", icon: "cosmetic", label: "Non-Food",
    text: "Für Badezusätze, Pflege- und Hygieneprodukte oder Nachfüllware – mit hochwertiger Optik, Ausgießer oder Sichtfenster, passend zu Produktlinie und Verkaufsauftritt.",
    meta: ["Nachfüllbeutel", "Hochwertige Haptik", "Transparent oder blickdicht"],
    link: "https://www.toma-gmbh.de/non-food/", linkLabel: "Non-Food-Verpackungen ansehen",
    image: "assets/doypack/doypack-nachfuellbeutel.webp", alt: "Nachfüllbeutel mit Ausgießer für Duschbad" },
  { id: "chemie", icon: "powder", label: "Chemie",
    text: "Für chemische und technische Füllgüter wie Pulver, Granulate oder Flüssigkeiten wählen wir den Materialaufbau nach Schutz-, Stabilitäts- und Verarbeitungsanforderungen.",
    meta: ["Stabiler Verbund", "Ausgießer möglich", "Technische Beratung"],
    link: "https://www.toma-gmbh.de/chemie-branche/", linkLabel: "Verpackungen für die Chemie ansehen",
    image: "assets/doypack/standbodenbeutel-ausgiesser.webp", alt: "Standbodenbeutel mit Ausgießer und Schraubkappe" },
  { id: "pharma", icon: "pharma", label: "Pharma",
    text: "Für Nahrungsergänzungsmittel und pharmazeutische Erzeugnisse ist die passende Barriere oft entscheidend für Haltbarkeit und Qualität. Auf Wunsch auch mit kindersicherem Zipper.",
    meta: ["Barrierefolie", "Kindersicherer Zipper", "Gleichbleibende Qualität"],
    link: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/", linkLabel: "Pharma-Verpackungsbeutel ansehen",
    image: "assets/doypack/doypack-13.webp", alt: "Doypack für Zucker und pulverförmige Produkte" }
];

/* ---- Vorteile-Karussell („Warum TOMA“) ---- */
export const values = [
  {
    title: "Persönliche Beratung",
    text: "Ein fester Ansprechpartner begleitet Sie von der ersten Idee bis zur Lieferung – mit Zeit für Ihre Fragen zu Beutelform, Material und Ausstattung.",
    image: "assets/doypack/doypack-tee.webp",
    alt: "TOMA-Doypack mit Tee und Kräutern",
    accent: true
  },
  {
    title: "Angebot in 2 Arbeitstagen",
    text: "Schicken Sie uns Ihre Eckdaten – Sie erhalten Ihr Angebot innerhalb von 2 Arbeitstagen.",
    image: "assets/doypack/doypack-09.webp",
    alt: "Oranger Doypack für Müsli in Küchenumgebung",
    accent: false
  },
  {
    title: "Material nach Füllgut",
    text: "Barriere, Materialaufbau und Format stimmen wir auf Ihr Produkt und Ihren Abfüllprozess ab – statt Einheitslösung von der Stange.",
    image: "assets/doypack/attribute-doypack.webp",
    alt: "Standbodenbeutel in verschiedenen Größen und Materialien",
    accent: false
  },
  {
    title: "Individueller Druck",
    text: "Tiefdruck, Flexodruck oder Digitaldruck – wir wählen das Verfahren passend zu Motiv und Auflage, im Layout Ihrer Marke.",
    image: "assets/doypack/doypack-1.webp",
    alt: "Bedruckte Kaffee-Doypacks in Kraft- und Anthrazitoptik",
    accent: true
  },
  {
    title: "Nachhaltige Varianten",
    text: "Monomaterial, recyclingfreundliche oder biobasierte Aufbauten prüfen wir je nach Anforderung, Produkt und Anwendungsfall.",
    image: "assets/doypack/standbodenbeutel-doypack-e1696408989978.webp",
    alt: "Weißer Standbodenbeutel als Beispiel für Materialoptionen",
    accent: false
  },
  {
    title: "32 Jahre Erfahrung",
    text: "Seit über drei Jahrzehnten beraten wir Hersteller zu flexiblen Verpackungen – und sorgen schnell und unkompliziert für eine Lösung, wenn einmal etwas nicht passt.",
    image: "assets/doypack/doypack-05.webp",
    alt: "Premium-Doypack für Badebomben und Pflegeprodukte",
    accent: false
  }
];

/* ---- Gallery: entfällt auf der Startseite ---- */
export const galleryItems = [];

/* ---- Testimonials (von der bestehenden Startseite übernommen) ---- */
export const testimonials = [
  { quote: "Die TOMA GmbH können wir uneingeschränkt weiter empfehlen. Wir arbeiten schon knapp zehn Jahre zusammen – hier steht der Kunde immer im Mittelpunkt! Es wird sich Zeit genommen, es werden die verschiedenen Möglichkeiten der Verpackungsbranche und der Materialien erklärt und auch nach Bestellung ist der Service rundum top!",
    name: "Marc Materne", role: "Kunde", branch: "seit knapp zehn Jahren" },
  { quote: "Wir möchten unsere langjährige Beziehung mit 5 Sternen bewerten und das sehr gute Miteinander betonen. Hier stimmt die Beratung, die Qualität und auch das positive Reklamationsmanagement.",
    name: "Andreas", role: "Kunde", branch: "langjährige Zusammenarbeit" }
];

/* ---- Branchen-Strip (Hero) ---- */
export const branches = [
  { icon: "food", label: "Lebensmittel", href: "https://www.toma-gmbh.de/food/" },
  { icon: "coffee", label: "Kaffee", href: "https://www.toma-gmbh.de/kaffeeverpackung/" },
  { icon: "pet", label: "Tierfutter", href: "https://www.toma-gmbh.de/tierfutter/" },
  { icon: "cosmetic", label: "Non-Food", href: "https://www.toma-gmbh.de/non-food/" },
  { icon: "powder", label: "Chemie", href: "https://www.toma-gmbh.de/chemie-branche/" },
  { icon: "pharma", label: "Pharma", href: "https://www.toma-gmbh.de/verpackungsbeutel-fuer-pharma-erzeugnisse/" }
];

/* ---- FAQ (kategorisiert, max. 5 Fragen pro Kategorie sichtbar) ---- */
export const faqCategories = [
  { id: "auswahl", label: "Beutelform" },
  { id: "material", label: "Material & Nachhaltigkeit" },
  { id: "projekt", label: "Anfrage & Ablauf" }
];

export const faqs = [
  { cat: "auswahl",
    q: "Welche Beutelform passt zu meinem Produkt?",
    a: "Das hängt von Füllgut, Füllmenge, Präsentation im Regal und Abfüllprozess ab. Doypacks stehen stabil und sind vielseitig, Box Pouches bieten maximale Standfestigkeit und Druckfläche, Seitenfaltenbeutel eignen sich besonders für Kaffee und Tee, Siegelrandbeutel sind die günstigste Beutelform, Spoutbags nehmen Flüssigkeiten auf und Rollenware verarbeiten Sie direkt auf Ihrer Verpackungsanlage. Wir beraten Sie gern bei der Auswahl." },
  { cat: "auswahl",
    q: "Was ist der Unterschied zwischen Doypack und Box Pouch?",
    a: "Ein Doypack (Standbodenbeutel) hat einen eingefalteten Boden und steht dadurch stabil. Ein Box Pouch (Flachbodenbeutel) hat einen flach aufgeschweißten Boden und Seitenfalten – das sorgt für besonders sicheren Stand, mehr Füllvolumen und zusätzliche Druckfläche." },
  { cat: "auswahl",
    q: "Welche Ausstattung ist möglich?",
    a: "Je nach Beutelform sind unter anderem Zipper (auch kindersicher), Einreißkerben, Perforationen, Aromaventile, Ausgießer, Sichtfenster, Euroloch und abgerundete Ecken möglich. Welche Kombination sinnvoll ist, klären wir gemeinsam mit Ihnen." },

  { cat: "material",
    q: "Welche Materialien setzt TOMA ein?",
    a: "Je nach Anforderung kommen Verbundfolien wie PET/PE, OPP/PE oder PET/Alu/PE, Papier/PE sowie PE- oder PP-Monomaterialien zum Einsatz. Den passenden Aufbau spezifizieren wir nach Füllgut, gewünschter Barriere und Verarbeitung." },
  { cat: "material",
    q: "Gibt es recyclingfähige oder nachhaltige Verpackungen?",
    a: "Ja, je nach Anforderung sind Monomaterial-Aufbauten sowie recyclingfreundliche oder biobasierte Varianten möglich. Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau, Produkt und Anwendungsfall ab." },
  { cat: "material",
    q: "Sind die Verpackungen für Lebensmittel geeignet?",
    a: "Lebensmittelkonforme Lösungen sind je nach Materialaufbau möglich. Konformitätserklärungen stellen wir je nach Anwendung auf Anfrage bereit." },

  { cat: "projekt",
    q: "Wie schnell erhalte ich ein Angebot?",
    a: "Sobald uns Ihre Eckdaten vorliegen, erhalten Sie Ihr Angebot innerhalb von 2 Arbeitstagen. Auf Ihre Anfrage melden wir uns innerhalb von 24 Stunden." },
  { cat: "projekt",
    q: "Ich brauche nur eine kleine Menge – ist TOMA das Richtige?",
    a: "Für kleinere Mengen und Standardgrößen gibt es unseren Webshop 123pack.de: Alle Beutel dort sind neutral und können individuell etikettiert werden. Für individuell gefertigte und bedruckte Verpackungen beraten wir Sie gern direkt." },
  { cat: "projekt",
    q: "Welche Angaben brauchen Sie für eine Anfrage?",
    a: "Hilfreich sind Füllgut, Füllmenge bzw. Format, gewünschte Menge, Material- und Ausstattungswünsche sowie Ihr Layout, falls vorhanden. Wenn noch nicht alles feststeht, ist das kein Problem – offene Punkte klären wir gemeinsam." },
  { cat: "projekt",
    q: "Wer ist mein Ansprechpartner?",
    a: "Sie haben bei TOMA einen persönlichen Ansprechpartner – keine anonyme Ticket-Schleife. Telefonisch erreichen Sie uns unter +49 (0)2157 128475, per E-Mail unter info@toma-gmbh.de." }
];
