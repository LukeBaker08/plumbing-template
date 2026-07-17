# Repo notes

This is a shared codebase for multiple near-identical business sites (same
design/layout/components, different business content). Do not hardcode
business-specific text, contact details, images, or colors into components —
they belong in a per-site config instead.

- `src/sites/types.ts` — the `SiteConfig` shape.
- `src/sites/<slug>.ts` — one config per business (content, contact info,
  theme colors, per-site image imports).
- `src/sites/index.ts` — the site registry and `getActiveSite()`, which
  selects a config at build time via the `VITE_SITE_ID` env var. Build fails
  loudly if `VITE_SITE_ID` is unset or unknown — don't add a silent fallback.
- Components (`src/routes/index.tsx`, `src/routes/__root.tsx`) read all
  content through `getActiveSite()`; they should stay identical across sites.

To add a new site: add `src/sites/<slug>.ts` (+ its assets under
`src/assets/sites/<slug>/`), register it in `src/sites/index.ts`, then deploy
it as its own Netlify site pointed at this repo with `VITE_SITE_ID=<slug>`
set and its own custom domain.
