# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static **Astro** marketing site (SketchAI website). There is no backend, database, or other service — only the Astro dev/build toolchain.

### Services / commands
- Dev server: `npm run dev` (or `npm run dev -- --host`). Astro serves at `http://localhost:4321/sketchai` — note the `/sketchai` path prefix, which comes from `base: '/sketchai'` in `astro.config.mjs`. The bare `http://localhost:4321/` returns 404; always include the `/sketchai` base path.
- Build: `npm run build` (outputs static files to `dist/`).
- Preview production build: `npm run preview`.
- There is **no lint or test script** defined in `package.json`. CI (`.github/workflows/deploy.yml`) only runs `npm ci` + `npm run build`.

### Notes
- Node 22 is expected (matches CI `setup-node` version 22).
- Static page routes build to `*.html` files (e.g. `/sketchai/PRIVACY_POLICY.html`) because `build.format: 'file'` is set in `astro.config.mjs`.
