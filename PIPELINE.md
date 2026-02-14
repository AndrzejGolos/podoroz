# Pipeline: Podoroz Band Website

> Tracking document for all phases of website development.
> Updated after each phase completion.

---

## Status Overview

| Phase | Name | Status | Date |
|-------|------|--------|------|
| 0 | Project initialization | **In progress** | 2026-02-14 |
| 1 | Architecture & content | Pending | — |
| 2 | Design (Google Stitch) | Pending | — |
| 3 | Implementation & refinement | Pending | — |
| 4 | Deployment | Pending | — |
| 5 | Documentation | Pending | — |

---

## Phase 0: Project Initialization

**Goal:** Set up project foundation — repository, tooling, tracking files.

### Decisions

- **Stack:** Static HTML/CSS/JS (no framework). Reasoning: Google Stitch exports HTML/CSS directly, band website has no dynamic content needs, simplest to maintain.
- **Hosting:** Netlify (decided later in Phase 4, but structure prepared).
- **Design pipeline:** Google Stitch (prompt-based UI generation) → export HTML/CSS → refactor & refine with Claude Code.

### Completed Steps

- [x] Git repository initialized
- [x] Directory structure created (`src/css/`, `src/js/`, `src/assets/`)
- [x] `.gitignore` configured (node_modules, stitch-export, OS files, env)
- [x] `.claude/CLAUDE.md` — project rules and conventions
- [x] Skills verified:
  - `frontend-design` — available, for Phase 3
  - `ui-designer` (@daymade/claude-code-skills) — available for install when needed (Phase 2-3)
  - Netlify MCP Server — available for Phase 4
- [x] `PIPELINE.md` created (this file)
- [x] Existing assets inventoried:
  - Logo (full + signet, PNG transparent + JPG + vector PDF)
  - Band graphics (field photo color, forest photo B&W, sand graphic)
  - Band description (`o zespole.md`)
  - 5 members: Ewa Karasinska, Ewa Mysza Starzyk, Amelia Pietroczuk, Andrzej Golos, Wojciak

### Pending

- [ ] Initial git commit

### Assets Inventory

Located in `LOGO Podoroz/`:

| File | Type | Notes |
|------|------|-------|
| `logo przezroczystosc.png` | Logo (transparent, dark) | Full logo with text ПОДОРОЖ |
| `logo przezroczystosc biale.png` | Logo (transparent, white) | For dark backgrounds |
| `sygnet przezroczystosc.png` | Signet (transparent, dark) | Icon only, no text |
| `sygnet przezroczystosc biale.png` | Signet (transparent, white) | For dark backgrounds |
| `logo wektory.pdf` | Vector logo | Source file |
| `sygnet wektory.pdf` | Vector signet | Source file |
| `logo.jpg` | Logo on white bg | |
| `sygnet.jpg` | Signet on white bg | |
| `grafika pole.jpg` | Band photo — field | Color, 5 members, pastoral |
| `grafika las.jpg` | Band photo — forest | B&W, surreal staging, dark mood |
| `grafika piasek.png` | Graphic — sand | TBD |

### Visual Direction (from assets)

- Logo: hand-drawn/textured brush strokes, symmetric wave pattern
- Typography: custom decorative font with Cyrillic Ж (last letter)
- Mood: earthy, folk, atmospheric, slightly surreal
- Color palette hints: earth tones (field photo), high contrast B&W (forest)
- Dark theme strongly supported by existing aesthetics

---

## Phase 1: Architecture & Content

**Goal:** Gather band info, define site structure, write content.

**Status:** Pending — requires user input (band notes).

### Required from User

- [ ] Band members details (names, roles, instruments)
- [ ] Genre/style description
- [ ] Target audience
- [ ] Social media / streaming links
- [ ] Additional photos or assets
- [ ] Preferences for site tone and feel

---

## Phase 2: Design (Google Stitch)

**Goal:** Generate UI design using Google Stitch, analyze export.

**Status:** Pending — depends on Phase 1 completion.

---

## Phase 3: Implementation & Refinement

**Goal:** Build production-ready site from Stitch export + content.

**Status:** Pending — depends on Phase 2 completion.

---

## Phase 4: Deployment

**Goal:** Deploy to Netlify, configure domain, HTTPS, CI/CD.

**Status:** Pending — depends on Phase 3 completion.

---

## Phase 5: Documentation

**Goal:** Create maintenance docs, design system reference.

**Status:** Pending — depends on Phase 4 completion.
