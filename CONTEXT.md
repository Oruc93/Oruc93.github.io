# Domain Glossary

## Self-hosted fonts
Font files (`.woff2`) served from `assets/fonts/` on the same origin as the HTML. No external CDN. Declared via `@font-face` in `main.css`. Contrast: *external font CDN*.

## External font CDN
A third-party service (e.g. `fonts.googleapis.com`) that serves font files. Transmits visitor IP to the CDN operator on every page load - a GDPR violation under German/EU law when used without consent.

## font-display: swap
CSS descriptor that shows the system fallback font immediately and swaps to the custom font once loaded. Avoids invisible-text flash. Chosen over `optional` because same-origin fonts load fast enough that the swap window is imperceptible.

## Weight synthesis
When a browser renders a font weight that was not loaded (e.g. bold via `font-weight: 700` when only 400 is available), it algorithmically thickens the glyphs. Produces inferior results compared to a true-weight file.

## Impressum
A legally mandated disclosure page required under §5 DDG (Digitale-Dienste-Gesetz) for commercial/professional digital services in Germany. Must include: name, postal address, and a directly reachable contact (email sufficient; phone optional but included). Lives at `/impressum.html`, linked from every page footer.

## Contact obfuscation
Technique for hiding contact details from static HTML scrapers while keeping them functional for users. Email: split into `data-u` (local part) and `data-d` (domain) attributes, assembled by `main.js` into a `mailto:` link. Phone: split into `data-cc` (country code), `data-p` (prefix), `data-n` (line number), assembled into a `tel:` link. Both use the `.email-link` / `.phone-link` CSS classes as selectors.

## DDG (Digitale-Dienste-Gesetz)
German law replacing TMG, governing digital services. §5 requires an Impressum for commercially-oriented digital services. kahriman.org is treated as commercial because it promotes professional expertise, links to employer, and hosts a blog.
