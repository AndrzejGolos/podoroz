# Podoroж — Band Website

> **Live:** https://podoroz.art (v2, Astro), served from a Hetzner VPS behind Cloudflare
> **Working branch:** `v2` (pushed to GitHub). `main` and `loveable-src/` hold the old v1 and are not deployed to podoroz.art.
> **Repo is public:** no prices, offer terms, credentials or private band matters in tracked files.

---

## Rules

1. **Polish for conversation** — always with diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż)
2. **English for code** — comments, commits, variable names, documentation
3. **Critical feedback** — honest evaluation, pushback when needed
4. **No emojis** unless requested
5. **Mobile-first** — all layouts must work on 375px+
6. **Performance** — target Lighthouse 90+ (performance, accessibility)
7. **Semantic HTML** — proper heading hierarchy, ARIA where needed
8. **Progressive enhancement** — core content works without JS
9. **Deploying reaches the public** — build and verify locally, deploy only on the user's go, then check the live site. Push `v2` to GitHub after each deploy so the repo matches production.

---

## Stack and layout

- `site/` — Astro 7 static site, PL at `/`, EN at `/en/`. Routes, all UI copy, tracklist, links and the `legal` owner live in `site/src/i18n.ts`.
  - Pages: home (dark "film" theme, scroll-driven video), `/dla-organizatorow/` + `/en/promoters/` (press kit, cream "paper" theme), `/polityka-prywatnosci/` + `/en/privacy/`.
  - Font: JetBrains Mono, self-hosted via @fontsource. No external requests before a user click.
  - `showFilm = false`: the OSKAR STUDIO WARSZAWA film is not the band's official clip; its YouTube embed stays hidden unless the band decides otherwise.
- `form-relay/` — Node service behind `/api/contact`; mails the contact form through the VPS's local postfix. See its README.
- `deploy/` — nginx config (strict CSP), systemd unit, one-time `setup-server.sh`, and `deploy-site.sh` (build + rsync + relay restart).
- `docs/v2-brief.md` — design brief; `content/` — source copy; `scripts/encode-video.sh` — video encoding.
- Loose files in the repo root (photos, zips, mp3, handouts) are untracked working material; do not commit them unprompted.

## Deploy

`./deploy/deploy-site.sh` from the repo root. It refuses to deploy while the privacy policy shows "DO UZUPEŁNIENIA".
Netlify still builds `v2` as a preview (`v2--podoroz.netlify.app`, root `netlify.toml`), but production is the VPS.

**CSP:** any new external source (analytics, fonts, embeds, payment) needs `deploy/nginx-podoroz.conf` updated and nginx reloaded on the VPS, then a browser check.

## Mail

`kontakt@podoroz.art` → band Gmail via Cloudflare Email Routing. The form is sent by the VPS's postfix (SPF, DKIM, DMARC set for podoroz.art).

---

## Decisions log

- **2026-10-16** — v2 rebuilt in Astro around the OSKAR STUDIO WARSZAWA film; the studio approved its use.
- **2026-10-17** — "Posłuchaj" plays the official album master (`site/public/audio/iz-za-hory.mp3`), not audio from the film.
- **2026-10-18** — Self-hosted on the VPS with a no-third-party form relay (rejected: Web3Forms, Gmail app passwords). Band approved v2; it went live.
- **2026-10-18** — No analytics, no cookies, no consent banner, no terms page. The band has no legal entity and no postal address is published; only a GDPR Art. 13 privacy policy naming Andrzej Gołoś as controller. Adding analytics means a consent banner and revisiting this.
- **2026-10-18** — The CD links to the band's page on folk.pl (the shop has no per-album pages).
- **2026-10-18** — "Koncerty na okazje" (occasion-based concerts for culture centres and parishes): concept is with the band in a private doc. Build occasion pages only after the band approves it.
- **2026-10-20** — The band set six concert programmes: carols and szczedriwki; psalms, All Souls and church songs (sold for Lent and for November); spring + lyric songs; Kupala + lyric songs; harvest + lyric songs (the site says nothing about harvest-festival stages; organizers judge the fit); a year-round overview of Ukrainian and Belarusian polyphony. PL pages at `/dla-organizatorow/<slug>/` with an inquiry form; no fee on the site. Built on branch `programy`, preview `programy--podoroz.netlify.app`; no song lists on the pages: the band changes the repertoire from concert to concert. Concert clips are self-hosted, not YouTube embeds (the organizer stays next to the form; no third-party requests): psalms from the 2023 St Faustina concert; carols (2), Kupala (1) and the overview (4) cut from Mikołajki Folkowe 2024 (`mikolajki-folkowe-2024/`, untracked). Spring and harvest have none. The featured "Posłuchaj" clip is the live "Iz-za hory kamjanoji", next to the album link.
- **2026-10-20** — Organizer page IA (`docs/organizer-ia.md`, Codex-reviewed, log in `docs/review/`): one page, selling first (calendar, featured clip, where we played, organizer questions, inquiry), materials last under one heading (`#materialy`, `#warunki`). Rejected: a separate materials page (routing cost, page missing from nav). PL and EN organizer pages are not translations, so no hreflang between them. Mikołajki Folkowe 2024 was on the main stage (moved on the day; the festival's Vimeo text still says Mała Sala).
