/* =====================================================================
   TOMA · Produkt-Landingpages — Inhaltsdaten je Seite
   Lädt js/data/<produkt>.js anhand von <html data-product="…">.
   Alle Module importieren weiterhin aus "./data.js".
   ===================================================================== */

const productKey = document.documentElement.dataset.product || "doypack";
const data = await import(`./data/${productKey}.js`);

export const {
  product,
  features,
  applications,
  configSteps,
  configRules,
  layerMap,
  values,
  galleryItems,
  testimonials,
  branches,
  faqCategories,
  faqs
} = data;

/* Projekt-Medien relativ zu diesem Modul (js/) auflösen. In WordPress liegt
   das Modul unter content/assets/js/ – seitenrelative assets/-Pfade würden
   sonst auf das Site-Root zeigen. */
const resolveAsset = (src) => (src?.startsWith("assets/") ? new URL(`../${src}`, import.meta.url).href : src);

product.configPhoto = resolveAsset(product.configPhoto);
for (const item of [...applications, ...values, ...galleryItems]) {
  if (item.image) item.image = resolveAsset(item.image);
  if (item.src) item.src = resolveAsset(item.src);
}
