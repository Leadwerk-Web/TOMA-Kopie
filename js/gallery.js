/* =====================================================================
   TOMA · Im Einsatz — Bento-Gallery + Lightbox
   ===================================================================== */

import { galleryItems } from "./data.js";

export function initGallery() {
  const grid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("galleryLightbox");
  if (!grid || !lightbox) return;

  const imgEl = lightbox.querySelector(".lightbox__img");
  const titleEl = lightbox.querySelector(".lightbox__title");
  const descEl = lightbox.querySelector(".lightbox__desc");
  const closeBtn = lightbox.querySelector(".lightbox__close");
  const backdrop = lightbox.querySelector(".lightbox__backdrop");

  grid.innerHTML = galleryItems.slice(0, 4).map((item, i) => `
    <button type="button"
      class="gallery__item gallery__item--${item.size || "normal"}"
      data-gallery-index="${i}"
      aria-label="${item.title}: ${item.alt}">
      <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" />
      <span class="gallery__caption">
        <span class="gallery__caption-title">${item.title}</span>
      </span>
    </button>`).join("");

  const open = (index) => {
    const item = galleryItems[index];
    if (!item) return;
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    titleEl.textContent = item.title;
    descEl.textContent = item.desc;
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  const close = () => {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    imgEl.removeAttribute("src");
  };

  grid.querySelectorAll("[data-gallery-index]").forEach((btn) => {
    btn.addEventListener("click", () => open(Number(btn.dataset.galleryIndex)));
  });

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
}
