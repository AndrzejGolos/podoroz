# Podoroж v2 — Design Brief

> Status: **confirmed 2026-10-16**, first build done on branch `v2` (`site/`)
> Source film: "ciemne srebro" (working title only), OSKAR STUDIO WARSZAWA — usage approved by the studio.

---

## 1. Objective

Rebuild the band site around the studio film: the home page is a scroll-driven walk through the field (scroll = steps), and a separate page gives event organizers everything they need to book and promote the band.

**Primary user action:**
- Organizer: understand the band in under two minutes, download the promo pack, write to book.
- Listener: feel the music and the five people behind it.

## 2. Context

### Decisions (confirmed 2026-10-16)

| Topic | Decision |
|---|---|
| Stack | Astro (static), new project in `site/` |
| Hosting | Netlify only as a staging stop; target is a VPS on **podoroz.art** |
| Languages | `/` PL, `/en/` EN — separate URLs |
| Palette | Home = "dark silver" taken from the film; organizer page = cream paper + charcoal from v1 |
| Promo kit | Separate page `/dla-organizatorow` + `/en/promoters`, teaser on home |
| Film rights | Approved by OSKAR STUDIO WARSZAWA (credit line in footer) |
| Texts | Reuse `content/*.md`; new copy delivered later by the band |

### Scene sentences

- **Home (dark):** a listener after a concert, evening, on a phone or laptop in a dim room, wants to stay in the mood of the songs.
- **Organizer page (light):** a festival or culture-house programmer at a desk in daylight, opening our link next to ten other ensembles from an email, looking for photos, rider and a contact.

### Color strategy

- **Home: Drenched.** The film is the surface. UI tokens are sampled from the film's grade: cool, desaturated silver-blue.
- **Organizer page: Restrained.** Cream `#FEF9F5` and charcoal from v1, with no accent.
- **The only color is the film's red** (hair, chairs, scarf). No chromatic UI accents anywhere.

Starting tokens (OKLCH, to be tuned against the film's frames):

| Token | Value | Use |
|---|---|---|
| `--silver-ink` | `oklch(0.20 0.010 250)` | Home background |
| `--silver-mist` | `oklch(0.90 0.008 250)` | Home text |
| `--silver-dim` | `oklch(0.66 0.010 250)` | Secondary text |
| `--paper` | `oklch(0.985 0.008 65)` | Organizer page background |
| `--charcoal` | `oklch(0.22 0.004 320)` | Organizer page text |

### Anchor references

- Sol / XKM Studio (solreader.com/about): scroll-scrubbed video sequence.
- ECM Records, sleeve and catalogue design: sparse, typographic, monochrome photography, unhurried.
- Festival-film end credits: monospaced, widely tracked, centered names. This is the model for the member names.

### Typography

- **One self-hosted monospace family with Cyrillic** (the logo contains Ж). Candidates: JetBrains Mono or IBM Plex Mono; pick during build.
- Consolas stays first in the font stack for Windows users.
- Hierarchy comes from scale and tracking, with a ratio of at least 1.25 between steps.
- Weights stop at 500, as in v1.

### Constraints

- Mobile-first, 375px and up.
- Lighthouse 90+ for performance and accessibility.
- Semantic HTML; all content readable without JS.
- `prefers-reduced-motion` is respected.
- No em dashes in UI copy.

## 3. Video segments

Cut points were checked on contact sheets. Final values are frame-accurate and set at encode time.

| Segment | Source | Content | Use | Mode |
|---|---|---|---|---|
| `hero-a` | 1:04.0–1:21.5 | Drone rises over the five standing in grass | Hero, part 1 | Scrub |
| `hero-b` | 1:25.5–1:42 | Top-down, slow rise; the five shrink into a small circle | Hero, part 2 (signet resolves over them) | Scrub, cross-dissolve from `hero-a` |
| `journey` | 0:52–1:02.5 | Woman with suitcase walks to the group; group sits with suitcases | "Podróż" (About) | Scrub |
| `m1` Ewa Karasińska | 1:44–~1:49 | Profile, turns toward camera | Ensemble | Scrub |
| `m2` Ewa „Mysza” Starzyk | ~1:49–~1:53.5 | Push-in from medium to close | Ensemble | Scrub |
| `m3` Andrzej Gołoś | ~1:53.5–~1:58 | Push-in | Ensemble | Scrub |
| `m4` Wójciak | ~1:58–~2:02 | Push-in | Ensemble | Scrub |
| `m5` Amelia Pietroczuk | ~2:02–2:05.5 | Push-in | Ensemble | Scrub |
| `chairs` | 4:00–4:06 | Empty red chairs and suitcases, static | "Zaproś nas" | Muted loop + poster; on phones a full-screen pinned shot that pans from the left chair to the right one with scroll |
| `audio` | album track 15 | "Iz-za hory kamjanoji", official album master (`site/public/audio/iz-za-hory.mp3`, MP3 192 kb/s, copied without re-encoding) | "Posłuchaj" button | Play on demand |

Excluded:
- 0:00–0:03 is black.
- 1:22–1:24 is an empty eye-level field between the two drone shots.

### Encoding

These specs were measured on `hero-a`:

| Target | Spec | Size |
|---|---|---|
| Desktop | H.264, all-intra, 15 fps, denoised, 960w | 7.1 MB for 17 s |
| Mobile | Portrait crop 540×960, same settings | 5.7 MB for 17 s |

- The mobile crop needs a keyframed horizontal offset, because it clips one person mid-shot.
- WebP image sequences are rejected: about 30 MB for the same segment.
- The total home video budget is an estimate of 15–20 MB on desktop, loaded progressively. It has not been measured yet.
- Every segment gets an AVIF/WebP poster frame; the hero poster is the LCP element.
- Encoding lives in `scripts/encode-video.sh`. The 132 MB source stays out of git.

## 4. Approach

### Information architecture

**Home (`/`, `/en/`)**

1. **Hero.** Scroll lifts the camera over the five (`hero-a` → `hero-b`). At the top-down moment the signet's arcs resolve around the circle of people. Below it sits the subtitle "Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia".
2. **Podróż (About).** `journey` scrubs while the three paragraphs of `about.md` enter one by one.
3. **Zespół.** A pinned section in five steps. Each close-up pushes in, and the name appears, credits-style, when the face fills the frame.
4. **Muzyka.** Album cover, 15 tracks, Spotify link. No film embed: the studio film is not the band's official clip. The click-to-load embed remains in code behind `showFilm` (false) in `site/src/i18n.ts`.
5. **Na żywo.** Text from `live.md`, concert dates (upcoming and past), and 2–3 Krukowska photos.
6. **Zaproś nas.** The `chairs` loop, a short invitation, a contact form (Netlify Forms) and a link to the promo kit.
7. **Footer.** Social links, email, and film credits for OSKAR STUDIO WARSZAWA.

After the film sections the page keeps moving with the scroll rather than switching to a static layout: scroll-linked reveals (`[data-view]`, `--in` / `--v` from `scrub.ts`). Section labels wipe in like title cards, the album cover opens like a frame (clip + settle from a close-up) and stays pinned on desktop while the tracklist slides past, live photos are uncovered from below and drift with parallax. Static mode shows everything at rest.

**Persistent "Posłuchaj" button.** A small control that plays the song audio independently of scroll. It never autoplays.

**Navigation.** O nas · Zespół · Muzyka · Koncerty · Dla organizatorów · Kontakt · PL/EN. On mobile, only the logo, "Dla organizatorów" and PL/EN are shown, with no hamburger.

**Organizer page (`/dla-organizatorow`, `/en/promoters`)**, ordered by organizer need:

1. One line, then "Pobierz cały pakiet (ZIP, N MB)".
2. Bios in three lengths (~50 words, ~150 words, full), PL and EN, each with a copy button.
3. Press photos: a hi-res download per photo, each with a photographer credit.
4. Logo and signet: black and white PNG, vector PDF.
5. Video: the film, plus a teaser MP4 for download (HyperFrames, 16:9 / 9:16 / 1:1).
6. Concert formats: length, indoor/outdoor, church, festival, a cappella.
7. Technical rider and stage plot (PDF).
8. Past concerts.
9. Booking contact.

A section whose content is missing is not rendered. The page never shows placeholders.

### Interaction model

- **Scrub.** GSAP ScrollTrigger maps scroll progress to `video.currentTime`. The video is fetched fully as a blob before scrubbing, and the poster shows until it is ready.
- **Fallback.** With reduced motion, Save-Data, a slow connection, no JS or a video error, the page shows poster frames that cross-fade on scroll (or appear statically), and every text is still present.
- **Reveals.** Text reveals use opacity plus a small translate, with ease-out-quart. There is no bounce and no layout-property animation.
- **Form.** Inline success and error states, with no modal.
- **Copy buttons.** Brief inline "Skopiowano" feedback.

### Key states

| State | Behavior |
|---|---|
| Initial load | Poster, logo and subtitle visible immediately |
| Video loading | Poster stays; no spinner over the poster |
| Scrub ready | Poster swaps to the video on the same frame |
| Reduced motion / Save-Data / slow | Posters plus a "Zobacz film" link |
| No JS | Static posters and full text |
| Form | Sending, success and error, all inline |
| Organizer page | Missing sections hidden; ZIP size shown |

### HyperFrames scope

HyperFrames is used for promo deliverables only, not for the site:

- teaser in 16:9, 9:16 and 1:1;
- a per-event template, "Podoroж zagra w {miejsce}, {data}", rendered for each organizer.

## 5. Open questions

1. ~~Which song is in the film?~~ Answered: "Iz-za hory kamjanoji" (track 15); the button plays the album version.
2. Band content, to be delivered later: short bios, rider, stage plot, concert history, phone number, photo licenses and credits, and the film credit line (director and camera).
3. Contact form on the VPS: Netlify Forms works only on Netlify, so the target host needs its own endpoint.
4. Netlify staging: the base directory is likely `loveable-src`, and deploys are documented as manual. Set the base to `site/` for the v2 branch before using it as a stop.

## 6. Next actions (after brief confirmation)

1. Create branch `v2` and scaffold Astro in `site/`. Verify: `npm run build` passes and a Netlify branch preview loads.
2. Write `scripts/encode-video.sh` and produce every segment and poster from the table above. Verify: sizes against the budget, frames checked visually, mobile crop offsets correct.
3. Build the hero scrub. Verify on desktop Chrome and Safari plus a real iPhone, and check Lighthouse.
4. Build the remaining home sections from `content/*.md`, then the organizer page.
5. Do an accessibility and performance pass. Target Lighthouse 90+.

## 7. Build notes (2026-10-16)

- **Staging.** Netlify draft with alias: https://v2--podoroz.netlify.app (noindex). Production `podoroz.netlify.app` still serves v1.
- **Contact form.** Deferred to the end of the project (decision 2026-10-16). The endpoint is set via `PUBLIC_FORM_ENDPOINT`; until then the form sends no email.

- **Scroll driver.** A custom ~100-line controller (`site/src/scripts/scrub.ts`) replaced GSAP. Only scroll progress is needed, and this saves about 70 KB of JS.
- **Font.** JetBrains Mono, self-hosted via Fontsource, with Cyrillic. Consolas stays as a fallback in the stack.
- **Video.** Scrub encodes are 12 fps. The hero is encoded at crf 31 (desktop) and 32 (mobile).

  | Asset | Size |
  |---|---|
  | Hero, desktop | 8.9 MB |
  | Hero, mobile | 7.6 MB |
  | Journey, desktop | 2.8 MB |
  | Journey, mobile | 2.2 MB |
  | Ensemble, desktop | 4.6 MB |
  | Ensemble, mobile | 2.7 MB |
  | Chairs loop | 0.8 MB |
  | Soundtrack | 3.8 MB |

  Total on first full scroll: ~17 MB desktop, ~13 MB mobile, plus 6.1 MB of audio (album MP3), which loads only on click.
- **Ensemble.** One continuous clip (1:44.3–2:04.1), with the names timed to the cross-dissolves.
- **Press kit.** The ZIP is built after `astro build` from `public/press/` plus the generated `biogram-pl.txt` and `biogram-en.txt`, about 33 MB.
- **Lighthouse (local preview, 2026-10-16).**

  | Page | Performance | Accessibility | Best practices | SEO | LCP |
  |---|---|---|---|---|---|
  | Home, mobile | 96 | 100 | 100 | 100 | 2.6 s |
  | Home, desktop | 100 | 100 | 100 | 100 | 0.6 s |
  | Promoters, mobile | 100 | 100 | 100 | 100 | — |
  | Promoters, desktop | 100 | 100 | 100 | 100 | — |
