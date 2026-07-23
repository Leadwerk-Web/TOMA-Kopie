/* =====================================================================
   Branchen-Icons (inline SVG, stroke-basiert, currentColor)
   ===================================================================== */

const attrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';

export const branchIcons = {
  food: `<svg ${attrs}><path d="M12 3c-2.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-1.5-6-4-9z"/><path d="M12 12v9"/><path d="M8 21h8"/></svg>`,
  coffee: `<svg ${attrs}><path d="M4 9h13a3 3 0 0 1 0 6h-1"/><path d="M4 9v7a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4v-1"/><path d="M8 3v2M12 2v3M16 3v2"/></svg>`,
  powder: `<svg ${attrs}><rect x="7" y="9" width="10" height="12" rx="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/><path d="M9 14h6"/></svg>`,
  pet: `<svg ${attrs}><circle cx="8" cy="8" r="1.6"/><circle cx="16" cy="8" r="1.6"/><circle cx="5.5" cy="12.5" r="1.5"/><circle cx="18.5" cy="12.5" r="1.5"/><path d="M12 13c-2.2 0-4 1.6-4 3.6 0 1.6 1.4 2.9 4 2.9s4-1.3 4-2.9c0-2-1.8-3.6-4-3.6z"/></svg>`,
  cosmetic: `<svg ${attrs}><path d="M9 3h6v4H9z"/><path d="M8 7h8l1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L8 7z"/><path d="M10 12h4"/></svg>`,
  liquid: `<svg ${attrs}><path d="M12 3s5 6.2 5 10.2A5 5 0 0 1 7 13.2C7 9.2 12 3 12 3z"/></svg>`,
  nonfood: `<svg ${attrs}><path d="M3 8.5 12 4l9 4.5v9L12 22 3 17.5v-9z"/><path d="M12 12v10"/><path d="M3 8.5 12 13l9-4.5"/></svg>`,
  pharma: `<svg ${attrs}><path d="M8.5 8.5h7v7h-7z"/><path d="M12 6v12M6 12h12"/><rect x="4" y="4" width="16" height="16" rx="4"/></svg>`
};

export function iconSvg(key) {
  return branchIcons[key] || branchIcons.nonfood;
}
