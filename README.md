# TOMA · Doypack & Standbodenbeutel — Landingpage

Neu strukturierte, conversion- und SEO-orientierte Landingpage für Doypacks/Standbodenbeutel
der TOMA GmbH. Basierend auf der Analyse der bestehenden Seite
`https://www.toma-gmbh.de/doypack-standbodenbeutel-hersteller/`, jedoch vollständig neu
aufgebaut (Architektur, Visuals, Motion, interaktiver Feature-Explorer und Konfigurator).

## Designrichtung

Die Gestaltung ist an die **London-Webflow-Vorlage** (`az-london.webflow.io`) angelehnt:
hell, luftig, **Manrope**-Typografie, große abgerundete Karten (20–30px), Pill-Buttons,
sehr weiche Schatten, pastellige Sektionsflächen und diagonale Farbverläufe.
Adaptiert auf die Marke TOMA: **Orange `#ef7b10`** ist der zentrale Akzent (statt des Lila
der Vorlage), ergänzt um ein aus dem Bestand abgeleitetes, zurückhaltendes Blau für Duo-Verläufe.

Sektionsfluss (London-Analogie → TOMA-Inhalt):
Hero + Branchen-Strip · **Ausstattungs-Tabelle** (statt „Live market") · 3 Value-Cards ·
interaktiver Ausstattungs-Explorer · Material & Barriere · Anwendungen (Tabs) · Konfigurator ·
TOMA vs. 123pack (alternierende Blöcke) · Value-Strip (qualitativ, ohne erfundene Zahlen) ·
**echte Kundenstimmen** · FAQ · Abschluss-CTA · Anfrageformular · Footer.

---

## 1. Schnellstart

Die Seite nutzt native ES-Module – daher wird ein lokaler HTTP-Server benötigt (nicht `file://`).

```powershell
# Windows PowerShell (kein Node/Python nötig)
powershell -ExecutionPolicy Bypass -File .\serve.ps1
# -> http://localhost:8000
```

Alternativ mit vorhandenem Node/Python:

```bash
npx serve .        # oder
python -m http.server 8000
```

---

## 2. Technische Basis

- **Kein Framework** – reines HTML/CSS/JS (ES-Module), leicht ins bestehende WordPress-/Astra-Theme integrierbar.
- **Animation:** GSAP 3.12 + ScrollTrigger (CDN).
- **Smooth Scroll:** Lenis (nur Scroll-Interpolation, `smoothTouch:false` → kein Scroll-Hijacking).
- Animationslogik **zentral** in `js/motion-config.js` und `js/scroll-scenes.js` (GSAP `context()`, sauberes `revert()` möglich).

### Dateistruktur

```
doypack.html              → Doypack-Seite: Struktur, SEO-Meta, JSON-LD, Inline-SVG-Symbole
flachbodenbeutel.html     → Flachbodenbeutel/Box-Pouch-Seite (gleiche Struktur, Bilder vorerst Platzhalter)
seitenfaltenbeutel.html   → Seitenfaltenbeutel/Quad-Seal-Seite (+ Varianten-Sektion, Bilder vorerst Platzhalter)
siegelrandbeutel.html     → Siegelrandbeutel/Flachbeutel-Seite (+ Varianten-Sektion, Bilder vorerst Platzhalter)
rollenware.html           → Rollenware/Folien-auf-Rolle-Seite (Varianten + Beratung statt Explorer/Vergleich, Bilder vorerst Platzhalter)
spoutbag.html             → Spoutbag/Nachfüllbeutel-Seite (Varianten + Ausgießer statt Explorer, Dosen-Vergleich ohne 123pack)
css/tokens.css            → Design-Tokens (:root)
css/base.css              → Reset, Typografie, Utilities, Reduced-Motion
css/components.css        → alle Sektionen + responsive Breakpoints
js/motion-config.js       → Timings, Eases, Breakpoints, Reduced-Motion-Flag
js/scroll-scenes.js       → gesamte Scroll-/Reveal-Choreografie
js/data.js                → lädt die Inhalte passend zu <html data-product="…">
js/data/doypack.js        → Inhalte Doypack (Features, Anwendungen, Konfig-Schritte, FAQ …)
js/data/flachbodenbeutel.js → Inhalte Flachbodenbeutel / Box Pouch
js/data/seitenfaltenbeutel.js → Inhalte Seitenfaltenbeutel / Quad Seal Pouch
js/data/siegelrandbeutel.js → Inhalte Siegelrandbeutel / Flachbeutel
js/data/rollenware.js     → Inhalte Rollenware / Folien auf Rolle
js/data/spoutbag.js       → Inhalte Spoutbag / Nachfüllbeutel
js/feature-explorer.js    → Ausstattungs-Explorer (Desktop-Pin / Mobile-Akkordeon)
js/configurator.js        → Doypack-Konfigurator (State, Live-SVG, Formularübergabe)
js/application-explorer.js→ Anwendungsbereiche (Tabs, weicher Bildwechsel)
js/faq.js                 → FAQ-Akkordeon + FAQPage-Schema
js/form.js                → Anfrageformular (Validierung, UX)
js/main.js                → Orchestrierung, Lenis, Nav, ScrollTrigger.refresh
serve.ps1                 → minimaler Static-Server
```

### Komponenten-Mapping (Briefing → Umsetzung)

`DoypackHero, TrustBar, TomaPackComparison, DoypackBenefits, ApplicationExplorer,
MaterialBarrierTeaser, FeatureExplorer, DoypackConfigurator, PrintTeaser, QualityTrust,
ProjectProcess, FAQSection, LeadForm, FinalCTA` sind jeweils als eigene `<section>` +
zugehöriges JS-Modul bzw. Scroll-Szene umgesetzt.

---

## 3. Farben & Typografie (aus Bestand extrahiert)

| Token | Wert | Herkunft |
|---|---|---|
| `--color-primary` | `#ef7b10` | TOMA-Orange (häufigster Markenwert) |
| `--color-primary-hover` | `#d96c0e` | Orange dunkler (im Bestand vorhanden) |
| `--color-text` | `#3a3a3a` | Bestehende Textfarbe |
| `--color-ink` | `#1b1c1e` | Abgeleitete dunkle Headline-Farbe |
| `--color-secondary` | `#0170b9` | Marken-Blau, nur sehr punktuell |
| Schrift | **Montserrat** | Im bestehenden Auftritt verwendet |

Blurred Spots werden ausschließlich aus diesen Markenfarben abgeleitet
(`--spot-orange`, `--spot-warm`, `--spot-blue`).

---

## 4. Inhalte: übernommen / optimiert

**Übernommen (fachlich sinnvoll):**
- Grunddefinition Doypack = Standbodenbeutel, Vorteile (Standfestigkeit, Regalwirkung, Logistik, Flexibilität).
- FAQ-Themen der Originalseite (Was ist ein Doypack, Vorteile, Bedruckung, Lebensmittel).
- Kern-Botschaft „vom Standard-Doypack zur passenden Lösung“, persönliche Beratung, Muster.
- Kontaktdaten: Telefon `+49 (0)2157 128475`, `info@toma-gmbh.de`.

**Optimiert / neu strukturiert:**
- Klare, nutzerzentrierte H1/H2-Hierarchie mit SEO-Begriffen.
- Neuer, eigenständiger **Ausstattungs-Explorer** und **Konfigurator** (auf der Altseite nicht vorhanden).
- Explizite **TOMA vs. 123pack**-Gegenüberstellung (Individuell vs. Standard).
- **Anwendungsbereiche** als interaktive Tabs statt reiner Fließtext.
- **Material & Barriere** nur als kompakter Teaser (kein zweiter Fachartikel) mit Verlinkung.
- Anfrageformular stärker auf qualifizierte Doypack-Anfragen ausgerichtet + Konfigurations-Übergabe.

---

## 5. Interne Verlinkung (real existierende URLs)

| Anker | Ziel |
|---|---|
| Bedruckung | `/drucktechnik/` |
| Monomaterial | `/monomaterial/` |
| Hochbarriere | `/hochbarrierefolien/` |
| Recycling | `/recyclebare-verpackung/` |
| Konformität | `/konformitaetserklaerungen/` |
| Kaffee | `/kaffeeverpackung/` |
| Bio-Standbodenbeutel | `/nachhaltig-und-biologisch-verpacken/` |
| Ausgießer / Spoutbag | `/spoutbag-nachfuellbeutel/` |
| Verpackung nach Maß | `/verpackungsloesungen/` |
| Kindersicherung | `/kindersichere-zipperbeutel/` |
| Perforation | `/perforationen/` |
| Tierfutter / Food / Non-Food | `/tierfutter/`, `/food/`, `/non-food/` |
| Muster / Anfrage | `/anfrageformular/` |
| Kontakt | `/kontakt/` |
| Standard-Doypacks | `https://www.123pack.de/` (extern) |

Konkrete Ankertexte statt „Mehr erfahren“. Bestehende Spezialseiten bleiben erhalten
(nur verlinkt, nicht dupliziert) – die Doypack-Seite wirkt als **Hub**.

---

## 6. ⚠️ Technische Aussagen, die vor Livegang freigegeben werden müssen

Es wurden **keine** Mindestmengen, Lieferzeiten, Barrierewerte oder Zertifikate erfunden.
Folgende Angaben sind bewusst neutral formuliert und **redaktionell zu bestätigen**:

- „Langjährige Verpackungserfahrung“ (Quality-Stat als *redaktionell zu bestätigen* markiert).
- Materialaussagen bewusst konditional: „Je nach Anforderung können … geprüft werden.“
- **PPWR/Recycling**: nicht als garantierte Produkteigenschaft dargestellt, sondern mit Hinweis
  „Die tatsächliche Eignung und regulatorische Bewertung hängt vom konkreten Materialaufbau,
  Produkt und Anwendungsfall ab.“
- Kundenstimmen der Altseite wurden **nicht** übernommen (Freigabe/Autorisierung offen) – bei
  Bedarf ergänzbar.
- Konformitätserklärungen / Materialdatenblätter als *auf Anfrage / je nach Anwendung* formuliert.

---

## 7. Mobil reduzierte Animationen

- **Kein Pinning** für Hero, Feature-Explorer und Konfigurator auf < 768 px.
- Feature-Explorer wird zum **zugänglichen Akkordeon** (erstes Feature offen, Tastaturbedienung).
- Konfigurator = normale, voll sichtbare Karten; Vorschau nicht überlang gepinnt.
- Blurred Spots und Parallax/Spot-Bewegung auf Mobil deaktiviert; keine Maus-Verfolgung.
- Hero: kurze Introanimation + leichte Produktbewegung statt Scroll-Choreografie.
- Tablet (768–1199 px): einspaltige Layouts, kürzere/kein Pinning, reduzierte Bewegung.

---

## 8. Reduced Motion

`prefers-reduced-motion: reduce` wird vollständig unterstützt:
- CSS setzt Transitions/Animationen auf ~0 und `[data-reveal]` sofort auf sichtbaren Endzustand.
- JS überspringt GSAP-Timelines, Lenis und Scroll-Trigger; alle Inhalte sind sofort sichtbar.
- Blurred Spots werden ausgeblendet.

---

## 9. Assets

- **Produktvisuals: selbst erstellte, layered Inline-SVGs** (`#doypack-symbol`, `#doypack-printed`)
  mit einzeln schaltbaren Ebenen (Body, Zipper, Euroloch, Kerbe, Ventil, Ausgießer, Fenster,
  Perforation, Ecken, Druck). Keine fremden Packiro-Bilder, keine KI-Produktfotos.
- Material-Querschnitt als schematisches SVG.
- Für die interaktiven SVGs (`#configDoypack`, `#explorerStage`) werden die Layer per JS
  „hydriert“, weil `<use href>` sonst eine nicht manipulierbare Shadow-DOM-Kopie erzeugt.

**Empfehlung für Produktion:** echte TOMA-Produktfotos als WebP/AVIF mit `srcset`, `width/height`
und `aspect-ratio` ergänzen (Hero priorisiert/preload, restliche Bilder lazy). Die SVG-Visuals
können als robuster, ladeschneller Standard bestehen bleiben.

---

## 10. SEO

- Genau **eine H1**, saubere H2/H3-Struktur.
- Primärbegriffe natürlich integriert (Doypack, Standbodenbeutel, mit Zipper/Ausgießer/Ventil,
  bedrucken, nach Maß).
- Canonical auf die **bestehende URL** gesetzt (`.../doypack-standbodenbeutel-hersteller/`).
- Strukturierte Daten: `Product` + `FAQPage` (nur für **sichtbare** Fragen).

---

## 11. Offene Punkte vor dem Livegang (Checkliste)

- [ ] Redaktionelle Freigabe der in §6 markierten Aussagen.
- [ ] Formular-Backend anbinden (aktuell Client-Demo; `js/form.js` liefert Payload-Struktur
      inkl. `cfg_*`-Felder). WordPress-/CF7-/Endpoint-Integration + Server-Validierung + Spamschutz.
- [ ] `123pack.de`-Link final gegen die korrekte Ziel-URL prüfen.
- [ ] Reale Produktfotos einpflegen, Alt-Texte redaktionell finalisieren.
- [ ] Datei-Upload serverseitig begrenzen/prüfen (Typen, 20 MB).
- [ ] Cross-Browser-Test (Safari, Chrome, Firefox, Edge) + iOS/Android.
- [ ] Lighthouse-Messung (Ziel: Mobile Performance ≥ 85, LCP < 2,5 s, CLS < 0,1, INP < 200 ms).
- [ ] Fonts ggf. selbst hosten (Astra/Montserrat) statt Google-CDN (DSGVO/Performance).
- [ ] Cookie-/Consent-Integration prüfen (externe Skripte nur nach Einwilligung).

---

## 12. Barrierefreiheit

- Alle Interaktionen als echte `button`/`input` (keine klickbaren `div`), Tastaturbedienung inkl.
  Pfeiltasten in Explorer/Anwendungs-Tabs.
- Sichtbare Fokuszustände, Skip-Link, `aria-expanded`/`aria-controls`, `aria-live` für Konfig-HUD.
- Farbe nie alleiniger Informationsträger; Kontraste auf WCAG-AA ausgelegt.
