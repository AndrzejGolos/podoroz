# Organizer pages: information architecture

Status: draft for review, revised after Codex round 1 (log: `docs/review/LOG-RECENZJI-organizer-ia.md`), 2026-10-20. Branch `programy`, preview https://programy--podoroz.netlify.app/dla-organizatorow/

## Objective

Split the organizer page by job. One page sells (helps an organizer choose a programme and removes objections, ends in an inquiry). A second page serves the organizer who already has a date (promo materials, technical needs). Today both jobs share one page and neither works well.

## Context

**Who comes, and why** (scene from `docs/v2-brief.md`): a programmer at a culture house, parish or festival, at a desk in daylight, opening our link from an e-mail next to ten other ensembles. Two different moments:

| Moment | Question in their head | What ends the visit well |
|---|---|---|
| Choosing (before booking) | Does this fit my calendar, my hall, my audience, my budget? Can I trust them? | They send an inquiry |
| Organizing (after booking) | What do I put on the poster, what do they need on site? | They download the pack and prepare the venue |

Mailings link to programme subpages (`/dla-organizatorow/<slug>/`), not to the overview, so programme pages are entry points of the choosing moment.

**What the current page holds, top to bottom** (`site/src/components/press/Press.astro`): title + two equal CTAs (ZIP download, inquiry) · programme calendar · three booking steps with no heading · on-site needs · where we have played · inquiry form · bio · photos · logo · video and music links · (formats, rider: hidden while empty) · contact.

Problems the user named, plus one found while inventorying:
1. Two CTAs of equal weight in the header serve two different moments.
2. The booking steps sit under the calendar without a heading.
3. Sales and organizing content alternate, so neither reads as a whole.
4. There is no sample at the point of choice: the 5 clips sit on one programme subpage, and the overview offers only YouTube and Spotify links far down, inside the press kit.

**Constraints that stay:** no price on the site (fee comes in the reply, within 3 days); no analytics or third-party embeds; restrained cream/charcoal palette; PL first, EN keeps a press kit; mobile from 375 px; repo is public.

## Approach

### Rules

1. One page, one job, one primary action. Choosing page: "Zapytaj o termin". Materials page: "Pobierz cały pakiet".
2. Every block has a visible H2. No orphan lists.
3. The choosing page holds no downloads; the materials page does no selling. Each links to the other once, in words that name the moment ("Masz już termin?" / "Nie masz jeszcze terminu?").
4. A fact lives once in `site/src/i18n.ts` and may render at two depths (e.g. on-site needs: a short answer on the choosing page, the full list on the materials page).
5. Order on the choosing page follows the organizer's questions: what is it, when, how does it sound, can I trust them, what about cost and logistics, how do I ask.

### Page A: "Dla organizatorów" (choosing) — `/dla-organizatorow/`

| # | H2 (label) | Content | Job |
|---|---|---|---|
| A1 | H1 "Dla organizatorów" | Lead: "Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia, śpiewane bez instrumentów. Sześć programów: pięć na pory roku i przegląd na każdy termin." One button: "Zapytaj o termin" (jumps to A6). | Say what it is, one action |
| A2 | Programy na cały rok | The existing calendar (rows link to programme pages, recording badge, current month). The section keeps `id="programy"`: every programme page links back to `/dla-organizatorow/#programy`. | Fit to the calendar |
| A3 | Posłuchaj | One featured clip (self-hosted, loads on play) + link to the debut album on Spotify + "więcej nagrań: Psalmy, pieśni zaduszne i cerkiewne →". | Remove "I have not heard them" |
| A4 | Gdzie graliśmy | The concerts list, Mikołajki Folkowe highlighted. One line above it on the ensemble: in this line-up since 2023, each member has sung this music for years (from the existing bio). | Trust |
| A5 | Pytania organizatorów | Short Q&A, answers of 1–2 sentences: Ile kosztuje koncert? (one total incl. travel, sent within 3 days) · Czy potrzebne jest nagłośnienie? (no in halls up to 100 m² and good-acoustic interiors; yes in big halls and outdoors) · Ile miejsca potrzebujecie? (8–10 m², a changing room helps). The two technical answers end with a text link "Pełne warunki techniczne →" to page B's `#warunki` (B6), for an organizer who must judge feasibility before booking · Jak długo trwa koncert? (45 or 60 min) · Kiedy rezerwować? (at least 2 months ahead) · Czy repertuar jest stały? (changes every concert within the programme theme) · Czy publiczność zrozumie pieśni? (open question 1; this answer is required before page A ships, because Ukrainian and Belarusian lyrics are the most likely reason a culture house or parish hesitates). Rendered as a definition list, all visible, no accordions. | Remove objections |
| A6 | Zapytaj o termin | The three booking steps as the section's lead, then the form (no programme preselected, "zaznacz kilka" allowed). | Convert |
| — | (closing line, not a section) | "Masz już termin? Materiały do zapowiedzi i warunki techniczne →" to page B. | Hand over to page B |

Removed from page A: ZIP button, bio, photos, logo, video/music links, contact block (the form and the e-mail under it cover contact).

### Page B: "Materiały dla organizatora" (organizing) — `/dla-organizatorow/materialy/` (PL) ↔ `/en/promoters/` (EN)

| # | H2 (label) | Content |
|---|---|---|
| B1 | H1 "Materiały dla organizatora" | Lead: "Wszystko do zapowiedzi i przygotowania koncertu." One button: "Pobierz cały pakiet" (ZIP, size). |
| B2 | Biogram | As today (lengths, copy button). |
| B3 | Zdjęcia | As today. |
| B4 | Logo i sygnet | As today. |
| B5 | Wideo i muzyka | As today. |
| B6 | Warunki techniczne (`id="warunki"`) | Full on-site needs (PA, space, changing room, set-up time) + rider PDF when it exists. |
| B7 | Kontakt | E-mail. Line: "Nie masz jeszcze terminu? Wybierz program →" to page A. |

EN `/en/promoters/` = page B in English, plus "Where we have played" (there is no EN choosing page, and foreign festivals need proof). On-site texts become `onSite: { pl, en }` in `i18n.ts`; `OnSite.astro` takes `lang`. I write the EN version; the band checks it.

### Programme pages — `/dla-organizatorow/<slug>/`

Stay in the choosing family. Keep: facts table, text, on-site needs, clips, inquiry form. Change: the "Zdjęcia, logo i biogram do zapowiedzi" link points to page B instead of page A.

### Navigation and links

- Main nav "Dla organizatorów" → page A. Page B is not in the main nav; it is reached from page A's closing line, programme pages, page B's own URL in confirmation e-mails, and the EN switch.
- Language pairs (`routes` in `i18n.ts`, `hreflang`, canonical): only page B ↔ `/en/promoters/` is a pair. Page A and programme pages have no EN alternate and no `hreflang`; their EN switch is a plain fallback link to `/en/promoters/`. The EN switch on `/en/promoters/` leads to page B. `routes.press` becomes the materials pair; page A gets its own PL-only route.
- Home "Zaproś nas" section: the ghost button becomes "Programy koncertowe dla organizatorów" → page A (choosing is the intent of that section); a quiet text link "Materiały prasowe: zdjęcia, logo, biogram" → page B for journalists and booked organizers. EN home: the button leads to `/en/promoters/` as today.
- Anchors that must keep working: `/dla-organizatorow/#programy` (back link from every programme page) and `/dla-organizatorow/#zapytanie` (header button, possible mail links).
- Forms keep their names: `zapytanie` (programme inquiry, pages A and programme pages) and `contact` (home).

### Manual steps for Andrzej

Answer the open questions below; nothing else. The band does not need to supply new material for this change.

### Scale

New programmes, concerts and recordings are data in `i18n.ts`; the layout does not change. An EN choosing page can be added later as a translation of page A without touching page B.

## Acceptance checks

Run on the local build and again on the Netlify preview; each is a pass/fail observation, not a reading of the code.

| # | Path or check | Pass when |
|---|---|---|
| 1 | Mail → `/dla-organizatorow/kupala/` | Inquiry form has Kupała ticked; "materiały" link opens page B; back link lands on the calendar (`#programy`) |
| 2 | Home (PL) → "Zaproś nas" | Button opens page A; text link opens page B |
| 3 | Nav "Dla organizatorów" | Opens page A; header shows one button, "Zapytaj o termin", which scrolls to the form |
| 4 | Booked organizer / journalist | Page A closing line opens page B; page B header shows one button, the ZIP, and it downloads a non-empty ZIP |
| 5 | Search entry on page A, technical doubt | "Pełne warunki techniczne →" lands on page B `#warunki` |
| 6 | EN visitor | `/en/promoters/` shows no Polish on-site text; EN switch on page A and programme pages opens `/en/promoters/`; PL switch on `/en/promoters/` opens page B |
| 7 | `hreflang` / canonical | Page B and `/en/promoters/` reference each other; page A and programme pages carry no `hreflang`; every canonical is the page's own URL |
| 8 | Every H2 | Each block on A and B has a visible heading; no list stands without one |
| 9 | Forms | Built HTML has one `form-name` `zapytanie` per inquiry form and `contact` on home; a local relay test with two programmes ticked sends one mail listing both |
| 10 | Build and deploy | `npm run build` passes; `deploy-site.sh` guard passes on the build; Netlify draft deploy serves A, B, all six programme pages with 200 |
| 11 | Widths | A, B and one programme page at 375, 768 and 1440 px with no horizontal scroll |

## Open questions

1. Do you introduce or translate the songs in Polish during concerts? Needed for "Czy publiczność zrozumie pieśni?"; without an answer the question is left out.
2. Mikołajki Folkowe 2024: the list says "scena główna", the festival's Vimeo description says "Mała Sala Widowiskowa ACKiM". Keep, reword ("program główny"), or confirm with the festival?
3. Featured clip for A3: "Oj u nedileńku" (psalm, 2:15) now, replaced by a przegląd clip when it arrives?
4. Is there a rider PDF or stage plot to put in B6?

## Next actions

1. Cross-model review of this plan (Codex, read-only); dispute log in `docs/review/`.
2. Andrzej approves the plan and answers open questions.
3. Implement on branch `programy`, check at 375/768/1440 px, redeploy the Netlify preview.
