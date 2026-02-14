# Podoroz — Band Website

> **Project:** Official website for Podoroz
> **Stack:** HTML/CSS/JS (Google Stitch design → custom code + animations)
> **Deploy:** Netlify (auto-deploy from git)
> **Branch preview:** `layout-v2--podoroz.netlify.app`
> **Production:** `main` branch

---

## Rules

1. **Polish for conversation** — always use Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż)
2. **English for code** — comments, commits, variable names, documentation
3. **Critical feedback** — honest evaluation, pushback when needed
4. **No emojis** unless requested
5. **Mobile-first** — all layouts must work on 375px+
6. **Performance** — target Lighthouse 90+ (performance, accessibility)
7. **Semantic HTML** — proper heading hierarchy, ARIA where needed
8. **Progressive enhancement** — core content works without JS

---

## Tech Stack

- **Design source:** Google Stitch (exported assets/layouts)
- **Build:** Static site (no framework unless complexity demands it)
- **Animations:** CSS animations + Intersection Observer (JS)
- **Interactions:** Vanilla JS (or lightweight library if justified)
- **Hosting:** Netlify (free tier, auto-deploy, forms)

---

## File Structure

```
src/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── main.css
│   └── animations.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   ├── fonts/
│   └── video/
└── favicon.ico
```

---

## Design Principles

- Band identity first — design serves the music
- Bold typography, high contrast
- Smooth scroll, subtle parallax (no jarring effects)
- Fast loading — optimize all images (WebP), lazy load below fold
- Light cream theme (`#FEF9F5`) with charcoal text (`#414042` area)
- Monospace typography (Consolas) — per album designer guidelines

---

## Deployment

- **Netlify** — auto-deploy from `main`, branch deploys for PRs
- `main` = production
- `layout-v2` = current design iteration (branch deploy)

---

## Version History

### v0.3 — layout-v2 (2026-02-14)
- Designer guidelines applied (album cover designer typography/color specs)
- Font: DM Sans → Consolas monospace stack (`index.css` + `tailwind.config.ts`)
- Palette: warm stone → cream bg `#FEF9F5` + charcoal fg, high contrast
- Hero: band photo (`hero-band.png`) as full-bleed image overlapping hero, logo + subtitle layered on top (z-10)
- Album cover replaced with new artwork (`album-cover-new.png`)
- Form inputs: visible white bg + full border (was transparent + bottom-only)
- Font sizes bumped +1 step across all components (mono renders smaller than sans)
- Section titles: subtle underline decoration (`border-b border-foreground/25`)
- Album cover: subtle border (`border-foreground/15`)
- Responsive hero/photo overlap: `-mt-[40vh]` mobile → `-mt-[100vh]` desktop
- Navigation hidden on mobile (`hidden sm:flex`) — no hamburger menu (intentional)
- All changes on `layout-v2` branch; `main` unchanged

#### Known decisions / next steps
- Mobile nav: links hidden on small screens, no hamburger — acceptable for now
- `layout-v2` not yet merged to `main` — awaiting final approval
- Old assets (`landscape-1.jpg`, `album-cover.jpg`) still in repo, no longer referenced — can be cleaned up

### v0.2 (2026-02-14)
- Full site implementation: Hero, About, Music, Contact, Footer
- Earth texture background, grayscale photo bands
- Netlify deployment with contact form
- Bilingual PL/EN support

### v0.1 (2026-02-14)
- Project initialized
