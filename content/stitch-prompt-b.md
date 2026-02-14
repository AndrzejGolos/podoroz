# Google Stitch Prompt — Variant B (Album Aesthetic)

> Ready to paste into stitch.withgoogle.com
> Recommended mode: **Experimental** (Gemini Pro)
> Upload with prompt: logo (transparent) + zdjęcie pole + okładka książeczki (strona 1)

---

## Prompt (copy everything below the line)

---

Design a single-page website for Podoroж (Podoroz), a vocal ensemble of five singers performing polyphonic songs from Ukraine, Belarus and the Polish region of Podlasie. The site is a portfolio and contact page for concert organizers.

### Design Direction

The website must look and feel like a direct extension of the band's debut album packaging. The album booklet uses the following aesthetic — match it precisely:

- Light, muted warm gray background with a subtle stone or concrete texture (not flat white, not paper — think weathered plaster or limestone). The hex range is approximately #d8d3cd to #e2ddd7
- Strictly monochromatic — warm grays only. No accent colors, no highlight colors, no colored buttons. Everything lives in the gray spectrum, from near-white to charcoal
- Typography: clean, modern sans-serif. Readable, unpretentious. Headings slightly bolder but from the same family — no font pairing contrast, no serif/sans-serif mixing. Think Helvetica Neue, Suisse Int'l, or similar neutral Swiss-style type
- Photos: desaturated or black-and-white landscape photography. Used large, spanning the full width of the page as horizontal bands between text sections. Photos of open fields, flat landscapes, overcast skies — Polish Podlasie countryside
- The overall feel should be a contemporary art publication or gallery catalog — quiet, composed, generous with space. Not a "band website" in any conventional sense

### What This Is NOT

This is not a folk music site. There are no Slavic patterns, no embroidery motifs, no ritual symbols, no pagan references, no runic typography, no ethnic ornamentation of any kind. The music comes from Eastern Slavic tradition, but the visual presentation is modern, stripped-down, and deliberately un-coded. Think: Nils Frahm's website meets a Steidl photography book.

### Sections (in scroll order)

**1. Hero (full viewport height)**
- The stone/concrete textured background, not a photo
- Band logo centered — the logo is a hand-drawn charcoal signet (dark gray, textured brush strokes forming a symmetric wave pattern) with the text ПОДОРОЖ below it in a custom spaced typeface
- Below the logo, a single line in small, light text: "Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia"
- Nothing else. No buttons, no scroll arrows, no taglines. Maximum stillness

**2. Full-width photo band**
- A desaturated landscape photograph spanning the full viewport width — an open field with distant treeline, overcast sky, muted tones. The photo acts as a visual separator and mood-setter, not as a "section"

**3. O nas (About)**
- On the textured gray background
- Three paragraphs of text, centered or left-aligned, max-width 680px
- Text in dark charcoal gray (#3a3a3a), comfortable line-height (1.7+), generous paragraph spacing
- No section heading or a very subtle one in small caps or lighter weight
- The text tone is warm and thoughtful — about a shared journey into East Slavic polyphonic singing

**4. Full-width photo band**
- Another desaturated landscape photo — a different scene (forest edge, or a single figure in a field). Same full-width treatment

**5. Muzyka (Music)**
- Section heading "Muzyka" — small, understated, same weight as body text but in small caps or with extra letter-spacing
- Album layout: album cover image (square, moderate size — not dominant) alongside or above a clean tracklist
- Tracklist: 15 songs displayed as a numbered list with durations aligned right. Monospaced or tabular numbers. Clean, like a table of contents in a book
- Below: a row of small, gray streaming platform icons (Spotify, Bandcamp, Apple Music, YouTube) — monochrome, not colored brand icons. Appear only as subtle links
- Optional: an embedded video placeholder below (dark gray rectangle, 16:9 ratio)

**6. Full-width photo band**
- Third landscape photo — perhaps with band members visible at a distance in an open landscape

**7. Kontakt (Contact)**
- On the textured gray background
- Simple heading "Kontakt" in the same understated style
- Contact form: Name, Email, Message fields + Send button. Form fields should be minimal — thin bottom-border only (no boxed inputs), dark gray text on the stone background. The send button: plain, rectangular, dark gray with light text, no rounded corners, no shadow
- Below the form: email address as a simple text link
- Social icons: YouTube, Facebook — small, monochrome gray, not prominent
- A brief note in smaller text: "We also speak English"

**8. Footer**
- Minimal: copyright line + small band signet centered
- Same textured background, no visual separation from the contact section — the page just ends quietly

### Navigation

- Fixed/sticky top bar — but almost invisible: a thin strip with the signet (tiny) on the left and section links on the right (O nas · Muzyka · Kontakt)
- Text links only, no backgrounds, no borders. Same warm gray tones as the page
- Language switcher: PL / EN — two small text links, the active one slightly darker
- On scroll, the nav may gain a very subtle backdrop blur or slight background opacity — nothing dramatic

### Technical Requirements

- Responsive: mobile-first (375px), tablet (768px), desktop (1024px+), large (1440px+)
- Maximum content width: 1100px for text, full-bleed for photos
- Smooth scroll for anchor links
- No animations except subtle opacity transitions on page load (elements fading in with 300-400ms delay)
- prefers-reduced-motion: respect it completely

### Things to Avoid

- Any color whatsoever — this is a monochromatic design. No accent colors, no colored hover states, no tinted overlays
- Dark/black backgrounds — the entire site is light warm gray
- Folk ornaments, Slavic patterns, embroidery borders, runic fonts, or any cultural decoration
- "Ritual" or "mystical" atmosphere — this is contemporary and quiet, not atmospheric or moody
- Card-based layouts, rounded corners, shadows, or any visual depth tricks
- Hamburger menus on desktop — show the nav links directly
- Large hero text, impact typography, or animated headlines
- Any element that screams "band website" — no tour countdown timers, no merch banners, no mailing list pop-ups

---

## Stitch Settings

- **Mode:** Experimental (Gemini Pro)
- **Type:** Full website / landing page
- **Responsive:** Yes

---

## Instrukcje

Jak w prompcie A, z jedną różnicą:

### Zasoby do wrzucenia w Stitch:

1. **Logo** (`logo przezroczystość.png`) — wersja ciemna, bo tło jest jasne
2. **Zdjęcie pole** (`grafika pole.jpg`) — referencja zdjęć krajobrazowych
3. **Okładka książeczki** — zrób screenshot pierwszej strony PDF (ta z logo na kamiennej teksturze) i wrzuć jako referencję tła/estetyki

### Krok po kroku:

1. Otwórz stitch.withgoogle.com
2. Tryb: Experimental
3. Wklej prompt (od „Design a single-page website..." do „...no mailing list pop-ups")
4. Dodaj obrazy referencyjne (logo ciemne + zdjęcie pole + screenshot okładki)
5. Generate → obejrzyj → eksportuj jeśli podoba się
6. Porównaj z wynikiem Promptu A — wybierzemy lepszą bazę do dopracowania

---

## Różnice między Promptem A i B

| Cecha | Prompt A (Wardruna) | Prompt B (Album) |
|-------|-------------------|-----------------|
| Tło | Ciemne, ciepły brąz-czerń | Jasne, ciepła szarość, tekstura kamienia |
| Kolor | Beżowy akcent na ciemnym | Monochromatycznie — same szarości |
| Nastrój | Atmosferyczny, rytualno-ziemisty | Cichy, galeryjny, katalogowy |
| Zdjęcia | Duże atmosferyczne, z overlay | Desaturowane pasy krajobrazowe, full-bleed |
| Typografia | Serif nagłówki + sans body | Tylko sans-serif, neutralny, szwajcarski |
| Nawigacja | Semi-transparent na ciemnym | Prawie niewidoczna, tekst na jasnym |
| Formularz | Beżowe inputy na ciemnym tle | Minimalne — tylko dolna krawędź, szare |
| Referencja | wardruna.com | Nils Frahm + książka fotograficzna Steidl |
