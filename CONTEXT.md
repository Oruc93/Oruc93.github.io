# Domain Glossary

## Self-hosted fonts
Font files (`.woff2`) served from `assets/fonts/` on the same origin as the HTML. No external CDN. Declared via `@font-face` in `main.css`. Contrast: *external font CDN*.

## External font CDN
A third-party service (e.g. `fonts.googleapis.com`) that serves font files. Transmits visitor IP to the CDN operator on every page load — a GDPR violation under German/EU law when used without consent.

## font-display: swap
CSS descriptor that shows the system fallback font immediately and swaps to the custom font once loaded. Avoids invisible-text flash. Chosen over `optional` because same-origin fonts load fast enough that the swap window is imperceptible.

## Weight synthesis
When a browser renders a font weight that was not loaded (e.g. bold via `font-weight: 700` when only 400 is available), it algorithmically thickens the glyphs. Produces inferior results compared to a true-weight file.
