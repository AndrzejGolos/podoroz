# Podoroz — Band Website

> **Project:** Official website for Podoroz
> **Stack:** HTML/CSS/JS (Google Stitch design → custom code + animations)
> **Deploy:** TBD

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
- **Hosting:** TBD (Netlify / Vercel / VPS)

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
- Dark theme preferred (common for music sites)

---

## Deployment

TBD — decide after MVP is ready. Options:
- **Netlify** — free tier, auto-deploy from git, forms
- **Vercel** — similar, good for static
- **VPS** (mcminstitute.com) — if custom backend needed

---

## Version History

### v0.1 (2026-02-14)
- Project initialized
