# Organizer page: information architecture

Status: revision 2 (one page instead of two), revised after Codex rounds 6–7, 2026-10-20. Revision 1 (two pages) was reviewed by Codex in five rounds; log: `docs/review/LOG-RECENZJI-organizer-ia.md`. Branch `programy`, preview https://programy--podoroz.netlify.app/dla-organizatorow/

## Objective

Make `/dla-organizatorow/` serve its two jobs one after the other instead of interleaved: first it sells (helps an organizer choose a programme, removes objections, ends in an inquiry), then, in one closing section, it serves the organizer who already has a date (promo materials, technical requirements).

## Context

**Who comes, and why** (scene from `docs/v2-brief.md`): a programmer at a culture house, parish or festival, at a desk in daylight, opening our link from an e-mail next to ten other ensembles. Two different moments:

| Moment | Question in their head | What ends the visit well |
|---|---|---|
| Choosing (before booking) | Does this fit my calendar, my hall, my audience, my budget? Can I trust them? | They send an inquiry |
| Organizing (after booking) | What do I put on the poster, what do they need on site? | They download the pack and prepare the venue |

Mailings link to programme subpages (`/dla-organizatorow/<slug>/`), not to the overview, so programme pages are entry points of the choosing moment.

**What the current page holds, top to bottom** (`site/src/components/press/Press.astro`): title + two equal CTAs (ZIP download, inquiry) · programme calendar · three booking steps with no heading · on-site needs · where we have played · inquiry form · bio · photos · logo · video and music links · (formats, rider: hidden while empty) · contact.

Problems:
1. Two CTAs of equal weight in the header serve two different moments.
2. The booking steps sit under the calendar without a heading.
3. Sales and organizing content alternate, so neither reads as a whole.
4. There is no sample at the point of choice: the 5 clips sit on one programme subpage, and the overview offers only YouTube and Spotify links far down, inside the press kit.

**Constraints that stay:** no price on the site (fee comes in the reply, within 3 days); no analytics or third-party embeds; restrained cream/charcoal palette; PL first, EN keeps a press kit; mobile from 375 px; repo is public.

### Decision: one page with a closing materials section, not two pages

Revision 1 split the content into a choosing page and a separate materials page. Rejected in revision 2 because:
- Problems 1–3 come from interleaving and from the doubled header CTA, not from the two jobs sharing a URL; ordering (all selling first, materials last) and headings fix them. Problem 4 needs new content (the "Posłuchaj" section) whatever the number of pages.
- Almost all of the split's cost was routing: three of the review's critical/important findings (R1-1, R2-1, R3-1) came only from giving one EN page two PL counterparts, PL-only routes and a page missing from the nav. With one page no route changes; the remaining language question (R6-1) is solved by dropping `hreflang`, not by new routes.
- A separate materials page would be reachable only through links (no nav item), so a booked organizer who lost the link could not find it. On one page, the nav item reaches both, and a quiet link in the header jumps straight to the materials.
- The cost of one page is length below the form. Organizers who are choosing end at the form and do not need what is below it; organizers with a date jump there with one link.

## Approach

### Rules

1. The header has one action: "Zapytaj o termin" (PL). Under it, a quiet text link (not a button) "Masz już termin? Materiały dla organizatora ↓" to `#materialy`. The ZIP button is the action of the materials section only, not of the page.
2. Every block has a visible heading. No orphan lists.
3. Selling first, materials last, never interleaved. The materials section opens with a line saying who it is for. Contextual jumps between the parts are allowed: questions → full technical requirements, technical requirements → back to the inquiry form.
4. A fact lives once in `site/src/i18n.ts` and may render at two depths (technical requirements: short answers in the questions, the full list in the materials section).
5. Order of the selling part follows the organizer's questions: what is it, when, how does it sound, can I trust them, what about cost and logistics, how do I ask.

### `/dla-organizatorow/` (PL), top to bottom

| # | Heading | Content | Job |
|---|---|---|---|
| 1 | H1 "Dla organizatorów" | Lead: "Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia, śpiewane bez instrumentów. Sześć programów: pięć na pory roku i przegląd na każdy termin." One button: "Zapytaj o termin" (to #zapytanie). Quiet link under it: "Masz już termin? Materiały dla organizatora ↓" (to #materialy). | Say what it is, one action; shortcut for the booked organizer |
| 2 | H2 Programy na cały rok (`#programy`) | The existing calendar (rows link to programme pages, recording badge, current month). Lead: "Znajdź miesiąc koncertu i sprawdź, który program do niego pasuje." Programme pages link back here. | Fit to the calendar |
| 3 | H2 Posłuchaj | One featured clip (self-hosted, loads on play) + link to the debut album on Spotify + "Więcej nagrań: Psalmy, pieśni zaduszne i cerkiewne →". | Remove "I have not heard them" |
| 4 | H2 Gdzie graliśmy | One line on the ensemble (in this line-up since 2023; before that each member followed this path for years, from the existing bio), then the concerts list, Mikołajki Folkowe highlighted. | Trust |
| 5 | H2 Pytania organizatorów | Definition list, all visible: Ile kosztuje koncert? (one total incl. travel, within 3 days) · Czy potrzebne jest nagłośnienie? · Ile miejsca potrzebujecie? (8–10 m², changing room) → one link after these two, "Pełne warunki techniczne →" to `#warunki` · Jak długo trwa koncert? (45 or 60 min) · Kiedy rezerwować? (at least 2 months ahead) · Czy repertuar jest stały? (changes every concert within the theme) · Czy publiczność zrozumie pieśni? (open question 1) · Gdzie znajdę zdjęcia, logo i biogram? ("Niżej, w materiałach dla organizatora →" to `#materialy`). | Remove objections; hand over to materials |
| 6 | H2 Zapytaj o termin (`#zapytanie`) | The three booking steps as the section's lead, then the form (no programme preselected, several allowed). | Convert |
| 7 | H2 Materiały dla organizatora (`#materialy`) | Line: "Dla organizatorów, którzy mają już termin, i dla mediów." Button: "Pobierz cały pakiet" (ZIP, size). Then H3 blocks: Biogram · Zdjęcia · Logo i sygnet · Wideo i muzyka · Warunki techniczne (`#warunki`: full list + rider PDF once it exists, then "Nie masz jeszcze terminu? Zapytaj o termin ↑" to `#zapytanie`, for the organizer who jumped here from the questions) · Kontakt. | Organizing |

### `/en/promoters/` (EN press kit)

Same route as today. The two pages are not translations of each other (PL sells and then holds the materials; EN is a press kit only), so neither carries `hreflang` alternates; the language switch stays as a plain link between them, as on programme pages. The PL switch on `/en/promoters/` leads to `/dla-organizatorow/#materialy` (the EN visitor is in the organizing moment); the EN switch on `/dla-organizatorow/` leads to `/en/promoters/`. Header: H1, lead, ZIP button (the EN page has no inquiry form, so the ZIP is its one action). Then: Where we have played · Biography · Photos · Logo and signet · Video and music · Technical requirements (`#warunki`) · Contact with "Looking for a date? Write to kontakt@podoroz.art with the date and place; we reply within 3 days." Technical texts become `onSite: { pl, en }` in `i18n.ts`; `OnSite.astro` takes `lang`. I write the EN version; the band checks it.

### Programme pages — `/dla-organizatorow/<slug>/`

Keep: facts table, text, technical requirements (heading renamed "Warunki techniczne" to match), clips, inquiry form. The materials link points to `/dla-organizatorow/#materialy`.

### Links elsewhere

- Nav unchanged: "Dla organizatorów" / "For promoters".
- Home "Zaproś nas" (PL): two links. Button "Programy koncertowe dla organizatorów" → `/dla-organizatorow/`; quiet text link "Materiały prasowe: zdjęcia, logo, biogram" → `/dla-organizatorow/#materialy`. EN home keeps "Photos, logo and bio for promoters" → `/en/promoters/`.
- Anchors that must keep working: `#programy`, `#zapytanie`; new: `#materialy`, `#warunki`.
- Forms keep their names: `zapytanie` and `contact`.

### Manual steps for Andrzej

1. Answer the open questions below.
2. Have the band check the English technical texts I write; the EN page with them is published only after that check.
3. When a concert is agreed by e-mail, paste `podoroz.art/dla-organizatorow/#materialy` in that e-mail, so the organizer lands straight on the materials.

### Scale

New programmes, concerts and recordings are data in `i18n.ts`; the layout does not change. If the materials grow (rider, teaser videos), the section can move to its own page later without touching the selling part.

## Acceptance checks

Each is a pass/fail observation, not a reading of the code. **L** local build and browser, **P** Netlify preview. `deploy-site.sh` rsyncs to production and restarts the relay, so it is never run as a test.

| # | Path or check | Pass when | Where |
|---|---|---|---|
| 1 | Mail → `/dla-organizatorow/kupala/` | Form has Kupała ticked; materials link lands on `#materialy`; back link lands on the calendar (`#programy`) | L, P |
| 2 | Home (PL) → "Zaproś nas" | Button opens `/dla-organizatorow/`; "Materiały prasowe" link lands on `#materialy` | L, P |
| 3 | Nav "Dla organizatorów" | Header shows one button, "Zapytaj o termin", which scrolls to the form, and the quiet link "Masz już termin?…", which lands on `#materialy` | L, P |
| 4 | Booked organizer | Question "Gdzie znajdę zdjęcia…" lands on `#materialy`; its ZIP button downloads a ZIP whose `unzip -l` lists `biogram-pl.txt`, `biogram-en.txt` and every file under `public/press/photos` and `public/press/logo` | L |
| 5 | Technical doubt | "Pełne warunki techniczne →" lands on `#warunki`; the link after the requirements lands back on `#zapytanie` | L, P |
| 6 | EN visitor | `/en/promoters/` shows the EN technical texts and no Polish ones; header has one button (ZIP) | L, P |
| 7 | `hreflang` / canonical | No `hreflang` on `/dla-organizatorow/`, `/en/promoters/` or programme pages; each canonical is the page's own URL; the language switch on `/dla-organizatorow/` opens `/en/promoters/`, and the one on `/en/promoters/` lands on `/dla-organizatorow/#materialy` | L |
| 8 | Headings | Every block has a visible heading; materials sub-blocks are H3 under the H2 on PL | L |
| 9 | Forms | One `form-name` `zapytanie` per inquiry form, `contact` on home; the relay, run locally against a throwaway SMTP sink, accepts two ticked programmes and sends one mail listing both | L |
| 10 | Build | `npm run build` passes; `grep -rlq -e 'DO UZUPEŁNIENIA' -e 'TO BE COMPLETED' site/dist` finds nothing; Netlify draft serves `/dla-organizatorow/`, `/en/promoters/` and the six programme pages with 200 | L, P |
| 11 | Widths | `/dla-organizatorow/`, `/en/promoters/` and one programme page at 375, 768 and 1440 px with no horizontal scroll | L |
| 12 | Language FAQ | "Czy publiczność zrozumie pieśni?" has the band's answer. Until then the preview shows it as "DO UZUPEŁNIENIA", so check 10 fails and the production deploy refuses | L, P |

## Open questions

1. Resolved 20.10 (Andrzej): every song is introduced in Polish, in a way that engages the audience.
2. Resolved 20.10 (Andrzej): the band sang on the main stage; the venue was changed on the day of the concert, after the festival's description was published. "Scena główna" stays.
3. Featured clip for "Posłuchaj": "Oj u nedileńku" (psalm, 2:15) now, replaced by a przegląd clip when it arrives?
4. Is there a rider PDF or stage plot for "Warunki techniczne"?

## Next actions

1. Codex re-review of revision 2.
2. Implement on branch `programy`, run the acceptance checks, redeploy the Netlify preview.
