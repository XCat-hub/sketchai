# Sketch AI Website

Official marketing site and legal pages for [Sketch AI](https://play.google.com/store/apps/details?id=com.gzll.coloringbook) — an AI-powered drawing and coloring app for Android.

**Live URL:** https://xcat-hub.github.io/sketchai/

## Pages

| Path | Description |
|------|-------------|
| `/` | Marketing homepage |
| `/PRIVACY_POLICY.html` | Privacy Policy (linked from Android app) |
| `/TERMS_OF_SERVICE.html` | Terms of Service (linked from Android app) |
| `/app-ads.txt` | AdMob app-ads.txt（根目录 + `public/` 各一份，部署后 URL 相同） |

## Development

```bash
npm install
npm run dev      # http://localhost:4321/sketchai/
npm run build    # output to dist/
npm run preview  # preview production build
```

## Deployment

Push to `main` triggers [GitHub Actions](.github/workflows/deploy.yml) which builds Astro and publishes `dist/` to the `gh-pages` branch.

**GitHub Pages settings** (repo → Settings → Pages):

- Source: **Deploy from a branch**
- Branch: **gh-pages** / **/(root)**

## Content sources

- Marketing copy: Play Store listing
- Legal pages: `src/content/legal/*.md` (sync from RealColoringBook repo when updated)
- Brand colors: SketchAI MD3 palette (`#5B5FC7`, `#0891B2`, `#9333EA`)

## Project structure

```
src/
├── components/     # Hero, Features, Pricing, FAQ, …
├── content/legal/  # Privacy & Terms markdown
├── layouts/        # BaseLayout
├── pages/          # Routes (index, PRIVACY_POLICY.html, …)
└── styles/         # Global CSS
public/             # Static assets (favicon, app-ads.txt, robots.txt)
```
