# ADR 0001 — Self-host web fonts instead of using Google Fonts CDN

**Status:** Accepted  
**Date:** 2026-05-17

## Context

The site loads Inter, Lora, and JetBrains Mono from `fonts.googleapis.com`. Every page visit transmits the visitor's IP address to Google — a GDPR violation under German/EU law (LG München I, 3 O 17493/20, 2022). The site operates under the domain `kahriman.org`, a German jurisdiction.

## Decision

Serve all font files from `assets/fonts/` (same origin). Remove all `<link>` tags pointing to `fonts.googleapis.com` or `fonts.gstatic.com`. Declare `@font-face` rules at the top of `main.css` with `font-display: swap`. Ship `.woff2` only — no `.woff` fallback needed.

## Alternatives considered

**Keep Google Fonts with a consent banner** — rejected. Adds UX friction for a personal/portfolio site where a banner is disproportionate overhead.

**Switch to system fonts** — rejected. Would require redesigning the typography; out of scope.

## Consequences

- No visitor IP is transmitted to any third party for font loading.
- Fonts load from the same origin, eliminating a DNS lookup and TLS handshake.
- Font files (~200 KB woff2 total) are committed to the repo and served via GitHub Pages CDN.
- Future font changes require updating files in `assets/fonts/` and `@font-face` blocks in `main.css` rather than editing a Google Fonts URL.
