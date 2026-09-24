# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static product landing pages (German) for TOMA GmbH flexible packaging. Plain HTML + CSS + native ES modules — no framework, no build step, no package.json, no tests, no linter. Designed to be dropped into the existing WordPress/Astra site. All user-facing copy is German.

Pages (same design, CSS and JS; only content differs):
- `doypack.html` — Doypacks / Standbodenbeutel, canonical `https://www.toma-gmbh.de/doypack-standbodenbeutel-hersteller/`
- `flachbodenbeutel.html` — Flachbodenbeutel / Box Pouch, canonical `https://www.toma-gmbh.de/flachbodenbeutel-box-pouch/`. Images are still doypack placeholders (alt texts prefixed `Platzhalter:`) until real box-pouch visuals arrive.
- `seitenfaltenbeutel.html` — Seitenfaltenbeutel / Quad Seal Pouch, canonical `https://www.toma-gmbh.de/seitenfaltenbeutel/`. Extra static section `#varianten` (three variant cards, `.variants*` in `components.css`). Images are doypack placeholders like on the Flachbodenbeutel page.
- `siegelrandbeutel.html` — Siegelrandbeutel / Flachbeutel, source `https://www.toma-gmbh.de/siegelrandbeutel/`. Reuses the `#varianten` section (cards: Optik, nachhaltige Varianten, Ausgießer & Zusätze). Images are doypack placeholders.
- `rollenware.html` — Rollenware / Folien auf Rolle, source `https://www.toma-gmbh.de/rollenware-folien-auf-rolle-flexible-verpackungsloesungen/`. No feature explorer (`features = []`, the Bauteile.svg pouch doesn't fit film), no Dose/Flasche and TOMA-vs-123pack sections; instead `#varianten` plus a second `.variants` section `#beratung` (Füllgut, Maschine, Druck & Zubehör). Config steps set `summaryLabel` so summary/HUD/message read "Barriere", "Zubehör" etc. instead of the pouch defaults. Images are doypack placeholders.
- `spoutbag.html` — Spoutbag / Nachfüllbeutel, source `https://www.toma-gmbh.de/spoutbag-nachfuellbeutel/`. No feature explorer (`features = []`, Bauteile.svg has no spout); instead `#varianten` plus the static `#ausgiesser` section (spout sizes, Erstöffnung, positions) before `#material` and `#bedruckung`. Keeps the Dose/Flasche/Kanister table (`#alternativen`), drops TOMA-vs-123pack. Config steps use `summaryLabel` (Beutelform, Ausgießer, Optik). `standbodenbeutel-ausgiesser.webp` and `doypack-nachfuellbeutel.webp` are real spout bags; other images are `Platzhalter:` doypack shots.

## Running

ES modules require HTTP (not `file://`):

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1   # http://localhost:8000 (/ → doypack.html), optional -Port <n>
```

Alternatives: `npx serve .` or `python -m http.server 8000`.

Libraries are self-hosted in `js/vendor/` (GSAP 3.12.5, ScrollTrigger, Lenis 1.0.42), loaded with `defer` at the bottom of each page. Fonts are local (`css/fonts-local.css` → `fonts/`). No CDN or Google Fonts — `AGENTS.md` (WordPress/GTD import contract) forbids them; read it before adding pages or assets (WebP-only lowercase images, `data-lw-*` annotations, no production host in canonical/og:url).

## Architecture

**Boot sequence (`js/main.js`)** — two phases, deliberately decoupled so the page never ends up blank:
1. `init()` (started at the end of `main.js`, on `DOMContentLoaded` or immediately if the DOM is already parsed — `data.js` uses top-level await, so the event may already have fired) runs every module's `init*()` immediately, each wrapped in `run()` (try/catch + console error), so one failing module doesn't break the others. Content is built regardless of whether GSAP loaded.
2. `whenReady()` polls for `window.gsap`/`window.ScrollTrigger` (~3 s max). Only then is `html.js-motion` added (CSS in `base.css` hides `[data-reveal]` / `[data-hero=…]` only under that class), `window.__tomaAnimated = true` is set, and Lenis + `initScrollScenes()` start. A 1.8 s safety timeout calls `revealAll()` if animation never started. Keep this invariant: never hide content in CSS unless `js-motion` is present.

**Stacked-panel scroll** — on ≥1024 px without reduced motion, `html.is-stack-scroll` is set (early at module load, re-synced on media-query change). Sections with `.stack-panel` and inline `--stack-z` become sticky overlays that cover each other. Consequences:
- Don't put `filter`/blur on elements inside sticky panels (breaks stacking; see comment in `scroll-scenes.js` hero intro).
- Hero parallax is skipped in stack mode.
- After layout-affecting changes, `ScrollTrigger.refresh()` is needed (already hooked to fonts ready, `load`, debounced resize).

**Motion** — all timings/eases/breakpoints live in `js/motion-config.js` (`MOTION`, `mq`, `prefersReducedMotion`, `isMobile`). Choreography lives in `js/scroll-scenes.js` inside a `gsap.context()` (revertible via `killScrollScenes()`). Elements opt into reveals with `data-reveal` (variants rotate rise/scale/fade by index) and hero elements with `data-hero="eyebrow|line|sub|ctas|visual|strip|badge|scroll"`. Mobile (<768 px): no pinning, no Lenis, no blob drift, no tilt. `prefers-reduced-motion` must skip GSAP/Lenis entirely and show everything.

**Content is data-driven, one data file per product** — each page sets `<html data-product="…">`; `js/data.js` dynamically imports `js/data/<product>.js` and re-exports its content (`product`, features, applications, configSteps, configRules, layerMap, values, galleryItems, testimonials, branches, faqCategories, faqs). Modules always import from `./data.js`. Most sections have an empty container in the HTML that a module fills from this data — edit copy in the data file, not in the rendered markup. Static section copy (hero, material, compare, lead) lives in the HTML itself.

To add a product page: copy an existing page, set `data-product`, create `js/data/<product>.js` exporting every name listed in `data.js`, and add stack-mode CSS for any new section ids (several rules in `components.css` are keyed on section ids like `#ausstattung`, `#material`, `#ausgiesser`/`#bedruckung`). `features[].svgId` must match an element id in `assets/Bauteile.svg` (currently `Euroloch`, `Abgerundete_Ecken`, `Einreisskerbe`, `Zipper`, `Aromaventil`).

**Configurator → form handoff** — `js/configurator.js` holds a single exported `configuration` state object, renders the steps from `configSteps` as a card stack, applies `configRules` (disabled options with a reason), and toggles SVG layers in the live preview via `layerMap` (option label → `data-layer` name). It pre-fills lead-form fields; fields the user edited manually are marked `data-touched="1"` by `js/form.js` and must not be overwritten. `form.js` is client-side validation only — submission just logs the payload (no backend yet).

**SVG hydration** — `#doypack-symbol` (in each page's SVG defs) is copied into `#configDoypack` as real markup (`hydrateDoypacks()`), because `<use href>` creates a shadow copy whose `[data-layer]` groups can't be queried/toggled.

## Content constraints (from README)

- Do not invent minimum order quantities, lead times, barrier values or certifications. Material/PPWR/recycling statements stay conditional ("je nach Anforderung …").
- Exactly one `<h1>`; `FAQPage` JSON-LD may only contain questions that are visible on the page.
- Internal links go to existing toma-gmbh.de pages (listed in README §5) with concrete anchor text; specialist topics are linked, not duplicated.
- Keep keyboard/ARIA behavior intact: real `button`s, arrow-key navigation in explorer/tabs, `aria-expanded`/`aria-controls`, `aria-live` for the configurator.

## Assets

`assets/` contains large PNGs (up to ~2.8 MB). Several files are unreferenced (`_bak_blackbg/`, `doypack - Kopie.png`, `silhouette.svg`, …) — grep `*.html`, `js/`, `css/` before assuming an asset is used. `tools/make-transparent.ps1` converts black backgrounds to transparent but has a hardcoded path to a different checkout (`...\Github\TOMA\assets`); adjust `$assets` before running.
