# Pipeline: Podoroz Band Website

> Tracking document for all phases of website development.
> Updated after each phase completion.

---

## Status Overview

| Phase | Name | Status | Date |
|-------|------|--------|------|
| 0 | Project initialization | **Complete** | 2026-02-14 |
| 1 | Architecture & content | **Complete** | 2026-02-14 |
| 2 | Design | **Complete** | 2026-02-14 |
| 3 | Implementation & refinement | **Complete** | 2026-02-14 |
| 4 | Deployment | **Complete** | 2026-02-14 |
| 5 | Documentation | Pending | — |

---

## Phase 0: Project Initialization

**Goal:** Set up project foundation — repository, tooling, tracking files.

### Decisions

- **Stack:** Initially planned as static HTML/CSS/JS. Pivoted to React + Vite + TypeScript + Tailwind CSS + shadcn/ui after Loveable generated better results than Stitch.
- **Hosting:** Netlify (free tier, built-in form handling).
- **Design pipeline:** Google Stitch (tried, okay results) → Loveable (much better) → iterative refinement with Claude Code.

### Completed Steps

- [x] Git repository initialized
- [x] `.gitignore` configured
- [x] `.claude/CLAUDE.md` — project rules and conventions
- [x] `PIPELINE.md` created (this file)
- [x] Initial git commit (`dcad83f`)

---

## Phase 1: Architecture & Content

**Goal:** Gather band info, define site structure, write content.

### Decisions

- **Architecture:** Single-page, 5 sections (Hero → O nas → Muzyka → Kontakt + Footer)
- **Tone:** Warm-factual — respectful, conscious, no exaggeration
- **Language:** Bilingual PL + EN with language switcher
- **Content source:** `o zespole.md` + album booklet (książeczka-16.12.pdf)

### Content Files Created

- [x] `content/hero.md`, `content/about.md`, `content/members.md`
- [x] `content/music.md`, `content/live.md`, `content/contact.md`
- [x] `content/metadata.md`, `ASSETS-NEEDED.md`
- [x] Commit: `0c7b31a`

---

## Phase 2: Design

**Goal:** Generate UI design, iterate on aesthetic.

### Approach

Two Stitch prompts created (dark/Wardruna + light/album booklet). User also tried Loveable and got significantly better results — decided to use Loveable output as base.

### Completed Steps

- [x] Stitch prompt A — dark Wardruna aesthetic (`a96f9ef`)
- [x] Stitch prompt B — light album booklet aesthetic (`d51481d`)
- [x] Reference site analysis (7 band websites reviewed)
- [x] Loveable prototype generated → adopted as codebase

---

## Phase 3: Implementation & Refinement

**Goal:** Build production-ready site from Loveable export + real content.

### Stack (final)

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- DM Sans font family
- CSS custom properties (HSL color system)
- Vanilla Intersection Observer for scroll animations

### Completed Steps

- [x] Loveable repo cloned to `loveable-src/`
- [x] Replaced placeholder content with real data:
  - Real tracklist (15 tracks from album booklet)
  - Real email, YouTube, Facebook links
  - Real logo (PNG transparent) and signet
  - Real band photos (landscape, portraits, album cover, droga.JPG)
  - Correct favicon (band signet)
- [x] Member portraits in About section with per-member object-position cropping
- [x] YouTube embed with grayscale→color hover
- [x] Bilingual PL/EN via React Context (`useLang` hook)
  - All components: Navigation, Hero, About, Music, Contact, Footer
  - Language switcher in navigation (PL / EN)
  - "We also speak English" note visible only in PL version
- [x] Scroll-triggered reveal animations (Intersection Observer)
  - About text + members (staggered cascade)
  - Music section + video (separate reveals)
  - Contact section
- [x] Active section indicator in navigation
- [x] Tracklist row hover effect
- [x] Album cover grayscale→color hover
- [x] Images optimized: ~45 MB → ~4 MB (resized, compressed)
- [x] Netlify Forms integration (contact form with confirmation message)
- [x] `prefers-reduced-motion` respected globally

### Assets in `loveable-src/src/assets/`

| File | Source | Notes |
|------|--------|-------|
| `logo.png` | LOGO Podoroż/logo przezroczystość.png | Dark, transparent |
| `signet.png` | LOGO Podoroż/sygnet przezroczystość.png | Icon only |
| `landscape-1.jpg` | photos/h2.JPG | Band in field, B&W |
| `landscape-3.jpg` | photos/droga.JPG | Band walking through field |
| `album-cover.jpg` | photos/okladka.png | Album cover |
| `member-*.jpg` | photos/Krukowska portraits | Individual member photos |

---

## Phase 4: Deployment

**Goal:** Deploy to Netlify, configure headers, verify.

### Completed Steps

- [x] `netlify.toml` created (build config, security headers, cache headers)
- [x] Netlify site created: **podoroz**
- [x] Production deploy: **https://podoroz.netlify.app**
- [x] Admin panel: https://app.netlify.com/projects/podoroz
- [x] Netlify Forms active (contact form submissions in admin panel)
- [x] Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- [x] Asset cache: 1 year, immutable

### Pending

- [ ] Custom domain (if desired)
- [ ] CI/CD via GitHub repo connection (currently manual deploy)
- [ ] Lighthouse audit

---

## Phase 5: Documentation

**Goal:** Create maintenance docs, design system reference.

**Status:** Pending.

### Planned

- [ ] `MAINTENANCE.md` — how to update content, deploy, ask Claude for help
- [ ] `DESIGN-SYSTEM.md` — colors, fonts, spacing, components, breakpoints
- [ ] Final PIPELINE.md update
