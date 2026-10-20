# Organizer pages: information architecture

Status: draft for review, 2026-10-20. Branch `programy`, preview https://programy--podoroz.netlify.app/dla-organizatorow/

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
4. The only recordings (5 clips) are on one programme subpage; the overview has no way to hear the band.

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
| A2 | Programy na cały rok | The existing calendar (rows link to programme pages, recording badge, current month). | Fit to the calendar |
| A3 | Posłuchaj | One featured clip (self-hosted, loads on play) + link to the debut album on Spotify + "więcej nagrań: Psalmy, pieśni zaduszne i cerkiewne →". | Remove "I have not heard them" |
| A4 | Gdzie graliśmy | The concerts list, Mikołajki Folkowe highlighted. One line above it on the ensemble: in this line-up since 2023, each member has sung this music for years (from the existing bio). | Trust |
| A5 | Pytania organizatorów | Short Q&A, answers of 1–2 sentences: Ile kosztuje koncert? (one total incl. travel, sent within 3 days) · Czy potrzebne jest nagłośnienie? (no in halls up to 100 m² and good-acoustic interiors; yes in big halls and outdoors) · Ile miejsca potrzebujecie? (8–10 m², a changing room helps) · Jak długo trwa koncert? (45 or 60 min) · Kiedy rezerwować? (at least 2 months ahead) · Czy repertuar jest stały? (changes every concert within the programme theme) · Czy publiczność zrozumie pieśni? (open question 1). Rendered as a definition list, all visible, no accordions. | Remove objections |
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
| B6 | Warunki techniczne | Full on-site needs (PA, space, changing room, set-up time) + rider PDF when it exists. |
| B7 | Kontakt | E-mail. Line: "Nie masz jeszcze terminu? Wybierz program →" to page A. |

EN `/en/promoters/` = page B in English, plus "Where we have played" (there is no EN choosing page, and foreign festivals need proof). The EN on-site block needs an English version of the on-site texts.

### Programme pages — `/dla-organizatorow/<slug>/`

Stay in the choosing family. Keep: facts table, text, on-site needs, clips, inquiry form. Change: the "Zdjęcia, logo i biogram do zapowiedzi" link points to page B instead of page A.

### Navigation and links

- Main nav "Dla organizatorów" → page A. Page B is not in the main nav; it is reached from page A's closing line, programme pages, page B's own URL in confirmation e-mails, and the EN switch.
- Language switch: page A and programme pages → `/en/promoters/`; page B ↔ `/en/promoters/` (hreflang pair).
- Home "Zaproś nas" link, now "Zdjęcia, logo i biogram dla organizatorów" → page B (keeps its wording), or reword to "Programy koncertowe dla organizatorów" → page A (open question 4).
- `/dla-organizatorow/#zapytanie` keeps working (same anchor on page A).

### Manual steps for Andrzej

Answer the open questions below; nothing else. The band does not need to supply new material for this change.

### Scale

New programmes, concerts and recordings are data in `i18n.ts`; the layout does not change. An EN choosing page can be added later as a translation of page A without touching page B.

## Open questions

1. Do you introduce or translate the songs in Polish during concerts? Needed for "Czy publiczność zrozumie pieśni?"; without an answer the question is left out.
2. Mikołajki Folkowe 2024: the list says "scena główna", the festival's Vimeo description says "Mała Sala Widowiskowa ACKiM". Keep, reword ("program główny"), or confirm with the festival?
3. Featured clip for A3: "Oj u nedileńku" (psalm, 2:15) now, replaced by a przegląd clip when it arrives?
4. Home "Zaproś nas" link: to page B (materials) or page A (choosing)?
5. Is there a rider PDF or stage plot to put in B6?

## Next actions

1. Cross-model review of this plan (Codex, read-only); dispute log next to this file.
2. Andrzej approves the plan and answers open questions.
3. Implement on branch `programy`, check at 375/768/1440 px, redeploy the Netlify preview.
