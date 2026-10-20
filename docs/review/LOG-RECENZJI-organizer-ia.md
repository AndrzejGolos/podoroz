# Dispute log: organizer pages IA (docs/organizer-ia.md)

Reviewer: Codex 0.149.1, read-only, user config dropped. Author and arbiter: Claude (this session); decisions on scope and copy: Andrzej Gołoś.

## Round 1

Version reviewed: commit 68ba9fe (branch `programy`). Session: 01a158ef-d064-7ef1-96df-f673c42a91d2. Verdict: REVISE, 8 findings (1 critical, 6 important, 1 minor).

| # | Weight | Claim | Bucket | Resolution |
|---|---|---|---|---|
| R1-1 | critical | `/en/promoters/` cannot be the language pair of both page A and page B: routes, `hreflang` and the switch are one-to-one (`i18n.ts` 6–10, `Base.astro` 19–20, 46–51, `Nav.astro` 15–17) | repaired | Plan now pairs only page B ↔ `/en/promoters/`; page A and programme pages carry no `hreflang`, their EN switch is a fallback link; `routes.press` becomes the materials pair, page A gets a PL-only route. Acceptance checks 6 and 7. |
| R1-2 | important | Home link and journalist path unresolved; keeping "Zdjęcia, logo i biogram…" wording while pointing to A would lie, pointing to B skips the sales page | repaired | Home "Zaproś nas": button → page A ("Programy koncertowe dla organizatorów"), quiet text link "Materiały prasowe…" → page B. Former open question 4 removed. Acceptance check 2. |
| R1-3 | important | The language objection may be dropped if unanswered; for Ukrainian/Belarusian repertoire it is a programme risk | decision: oczekuje | Plan marks the answer as required before page A ships (made consistent in R2-3). Who decides: Andrzej (band). What: whether songs are introduced or explained in Polish. |
| R1-4 | important | Plan preserves only `#zapytanie`; every programme page links back to `#programy` (`[program].astro` 24–25) | repaired | A2 keeps `id="programy"`; listed under anchors; acceptance check 1. |
| R1-5 | important | EN on-site block has no data model; `OnSite.astro` reads PL `programUi.onSite` only | repaired | Plan: `onSite: { pl, en }`, `OnSite.astro` takes `lang`, EN copy written by the author and checked by the band; acceptance check 6. |
| R1-6 | minor | Inventory says the overview has no way to hear the band; it links YouTube and Spotify (`Press.astro` 173–183) | repaired | Problem 4 restated: no sample at the point of choice; links exist far down in the press kit. |
| R1-7 | important | No functional acceptance criteria; form names `zapytanie` / `contact` must survive | repaired | Added "Acceptance checks" table (11 pass/fail checks incl. forms, anchors, hreflang, ZIP, build, deploy guard, widths). |
| R1-8 | important | Organizer on page A cannot reach full technical needs before booking except after the form | repaired | A5 technical answers end with "Pełne warunki techniczne →" to page B `#warunki`; B6 gets that id; acceptance check 5. |

## Round 2

Version reviewed: commit 28d30e2. Same session. Verdict: REVISE, 5 findings (4 important, 1 minor).

| # | Weight | Claim | Bucket | Resolution |
|---|---|---|---|---|
| R2-1 | important | Turning `routes.press` into the materials pair leaves its consumers (calendar, back link, nav, home, switch) unplanned; `Base` reads `.pl` and `.en` of every route | repaired | Plan now defines `materials` (pair) and `organizers` (PL-only string outside the pairs), lists each consumer, and reuses the existing no-alternate mode `Base`/`Nav` already have for `page="program"`. |
| R2-2a | important | The ZIP has no bios; no code generates `biogram-pl.txt` / `biogram-en.txt` | rejected with proof | `site/src/pages/press/biogram-pl.txt.ts` and `biogram-en.txt.ts` render to `dist/press/`; `unzip -l site/dist/podoroz-press-kit.zip` on the build of 20.10 12:41 lists `biogram-pl.txt` (889 B) and `biogram-en.txt` (842 B). |
| R2-2b | important | "Non-empty ZIP" does not test the "whole pack" promise; a rider would not be included automatically | repaired | Check 4 now names the required files and the rule that a rider or stage plot goes under `public/press/`. |
| R2-3 | important | A5 says the language answer is required, open question 1 says the FAQ is dropped without it | repaired | Open question 1 now says a missing answer blocks publishing page A only; acceptance check 12 added. Decision itself stays with R1-3. |
| R2-4 | important | Checks claim to run the deploy guard and relay on the preview; `deploy-site.sh` rsyncs to production and restarts the relay | repaired | Checks split into L / P / R; the guard is its own grep run on `site/dist`; the relay is tested locally against a throwaway SMTP sink; `deploy-site.sh` is never run as a test. |
| R2-5 | minor | Two identical links to B in adjacent technical answers, against the "once" rule | repaired | One link after the technical answers; rule 3 reworded to one main hand-over plus one contextual technical link. |

## Round 3

Version reviewed: commit 009e271. Same session. Verdict: REVISE, 3 findings (2 important, 1 minor).

| # | Weight | Claim | Bucket | Resolution |
|---|---|---|---|---|
| R3-1 | important | B7 on the EN page would send foreign organizers to the Polish page A without warning | repaired | B7 split by language: PL links to page A; EN asks for date and place by e-mail with the 3-day reply, no link to page A. |
| R3-2 | important | "Keep" is not a valid option for "scena główna" while the festival's own description says "Mała Sala Widowiskowa"; "program główny" is not supported either | decision: oczekuje | Options narrowed to: confirm with ACKiM, or neutral "Mikołajki Folkowe w Lublinie" until confirmed; highlight kept. Who decides: Andrzej. |
| R3-3 | minor | Band check of the EN on-site texts is a manual step missing from the list | repaired | Added to "Manual steps for Andrzej"; EN page with those texts publishes only after the check. |
