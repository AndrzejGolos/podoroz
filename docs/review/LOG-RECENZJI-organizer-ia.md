# Dispute log: organizer pages IA (docs/organizer-ia.md)

Reviewer: Codex 0.149.1, read-only, user config dropped. Author and arbiter: Claude (this session); decisions on scope and copy: Andrzej Gołoś.

## Round 1

Version reviewed: commit 68ba9fe (branch `programy`). Session: 01a158ef-d064-7ef1-96df-f673c42a91d2. Verdict: REVISE, 8 findings (1 critical, 6 important, 1 minor).

| # | Weight | Claim | Bucket | Resolution |
|---|---|---|---|---|
| R1-1 | critical | `/en/promoters/` cannot be the language pair of both page A and page B: routes, `hreflang` and the switch are one-to-one (`i18n.ts` 6–10, `Base.astro` 19–20, 46–51, `Nav.astro` 15–17) | repaired | Plan now pairs only page B ↔ `/en/promoters/`; page A and programme pages carry no `hreflang`, their EN switch is a fallback link; `routes.press` becomes the materials pair, page A gets a PL-only route. Acceptance checks 6 and 7. |
| R1-2 | important | Home link and journalist path unresolved; keeping "Zdjęcia, logo i biogram…" wording while pointing to A would lie, pointing to B skips the sales page | repaired | Home "Zaproś nas": button → page A ("Programy koncertowe dla organizatorów"), quiet text link "Materiały prasowe…" → page B. Former open question 4 removed. Acceptance check 2. |
| R1-3 | important | The language objection may be dropped if unanswered; for Ukrainian/Belarusian repertoire it is a programme risk | decision: oczekuje | Plan marks the answer as required before page A ships. Who decides: Andrzej (band). What: whether songs are introduced or explained in Polish. |
| R1-4 | important | Plan preserves only `#zapytanie`; every programme page links back to `#programy` (`[program].astro` 24–25) | repaired | A2 keeps `id="programy"`; listed under anchors; acceptance check 1. |
| R1-5 | important | EN on-site block has no data model; `OnSite.astro` reads PL `programUi.onSite` only | repaired | Plan: `onSite: { pl, en }`, `OnSite.astro` takes `lang`, EN copy written by the author and checked by the band; acceptance check 6. |
| R1-6 | minor | Inventory says the overview has no way to hear the band; it links YouTube and Spotify (`Press.astro` 173–183) | repaired | Problem 4 restated: no sample at the point of choice; links exist far down in the press kit. |
| R1-7 | important | No functional acceptance criteria; form names `zapytanie` / `contact` must survive | repaired | Added "Acceptance checks" table (11 pass/fail checks incl. forms, anchors, hreflang, ZIP, build, deploy guard, widths). |
| R1-8 | important | Organizer on page A cannot reach full technical needs before booking except after the form | repaired | A5 technical answers end with "Pełne warunki techniczne →" to page B `#warunki`; B6 gets that id; acceptance check 5. |
