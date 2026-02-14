# Google Stitch Prompt

> Ready to paste into stitch.withgoogle.com
> Recommended mode: **Experimental** (Gemini Pro — better quality, worth using one of 50 monthly generations for this)

---

## Prompt (copy everything below the line)

---

Design a single-page website for Podoroж (Podoroz), a vocal ensemble performing polyphonic songs from Ukraine, Belarus and the Polish region of Podlasie. This is a band portfolio / business card site aimed at concert organizers and music enthusiasts.

### Overall Aesthetic

- Dark theme with warm earthy undertones — think dark soil, aged wood, dried grass
- The band's visual identity uses hand-drawn, textured brush strokes (their logo resembles sound waves or a butterfly, with a rough charcoal texture)
- Typography should feel grounded and distinctive — not generic, not overly decorative. Pair a strong serif or semi-serif for headings with a clean readable body font
- Mood: atmospheric, earthy, folk-rooted but contemporary — not kitschy or "ethnic costume" folk
- Generous whitespace (or rather "darkspace"), let elements breathe
- Subtle grain/noise texture on backgrounds for depth
- Muted earth-tone accent color (warm amber, terracotta, or dried gold) against the dark background

### Sections (in scroll order)

**1. Hero (full viewport)**
- Full-width atmospheric background image (a band photo in a golden field at dusk — 5 people standing among tall grass with a pale sky)
- Band logo centered, overlaid on the image (white version on dark/semi-transparent overlay)
- One line of text below logo: "Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia"
- A subtle down-arrow or scroll indicator at the bottom

**2. O nas (About)**
- 3 paragraphs of text, left-aligned or centered, comfortable reading width (max 700px)
- Text content is thoughtful and warm — about a shared musical journey
- Optional: a subtle decorative element (a thin horizontal line, the signet icon small and faded, or a minimal ornament inspired by East Slavic embroidery patterns)

**3. Muzyka (Music)**
- Section heading "Muzyka"
- Album presentation: a large album cover image on one side, tracklist on the other (side-by-side on desktop, stacked on mobile)
- 15-track tracklist displayed in a clean list with track numbers and durations
- Below the album: an embedded video area (YouTube embed placeholder — a dark rectangle with play button)
- Optional: streaming platform icons (Spotify, Apple Music, Bandcamp) as a row of small icons/buttons

**4. Na żywo (Live)**
- Section heading "Na żywo"
- A short paragraph inviting collaboration (2-3 sentences about performing at festivals, concert halls, churches, outdoor events)
- A row or grid of 2-3 atmospheric photos from concerts/rehearsals (horizontal, moody lighting)
- Gentle transition into the contact section

**5. Kontakt (Contact)**
- Section heading "Kontakt"
- Simple contact form: Name, Email, Message fields + Send button
- Email address displayed alongside the form
- Social media icons: YouTube, Facebook
- Footer with copyright and a small version of the band signet

### Technical Requirements

- Responsive design: mobile-first (375px base), tablet (768px), desktop (1024px+), large desktop (1440px+)
- Maximum content width: 1200px, centered
- Navigation: fixed/sticky top bar with section links (O nas, Muzyka, Na żywo, Kontakt) — minimal, semi-transparent on dark background
- Smooth scroll behavior for anchor navigation
- Language switcher: PL / EN toggle in the top-right corner of the nav bar

### Things to Avoid

- Bright neon colors or gradients
- Generic stock-photo aesthetics
- Overly decorative folk ornaments (this is not a folk costume showcase)
- Cluttered layouts — keep it minimal and let photos and text breathe
- Cookie-cutter band website templates with massive "BOOK NOW" buttons
- Purple/blue AI-generic color schemes

---

## Stitch Settings

- **Mode:** Experimental (Gemini Pro) — use this for the best quality output
- **Type:** Full website / landing page
- **Responsive:** Yes

---

## Instructions for User

### Krok po kroku:

1. **Otwórz** stitch.withgoogle.com
2. **Zaloguj się** kontem Google
3. **Kliknij** „Create new" (lub „New project")
4. **Wybierz tryb:** Experimental (w prawym górnym rogu lub w ustawieniach generacji)
5. **Wklej** cały prompt powyżej (od „Design a single-page website..." do końca sekcji „Things to Avoid")
6. **Kliknij** „Generate" i poczekaj na wynik (może potrwać 1-2 minuty)
7. **Obejrzyj** wynik — jeśli nie podoba Ci się, możesz:
   - Kliknąć „Regenerate" z tym samym promptem
   - Albo lekko zmodyfikować prompt (np. zmienić kolor akcentu, układ sekcji)
8. **Eksport:** Gdy design Ci się podoba:
   - Kliknij przycisk **„Export code"** (ikona `</>` lub w menu)
   - Pobierze się archiwum ZIP z HTML + CSS + obrazami
   - Rozpakuj ZIP i wrzuć zawartość do folderu `stitch-export/` w projekcie
9. **Powiedz mi** co masz — prześlij screenshota albo po prostu powiedz „mam eksport ze Stitch" — przeanalizuję i przejdziemy do Fazy 3

### Alternatywnie:

- Jeśli wolisz, możesz wyeksportować do **Figma** (przycisk „Export to Figma") — wtedy prześlij mi screenshot lub link
- Możesz też po prostu zrobić **screenshot** wygenerowanego designu i mi go wysłać

### Uwagi:

- Tryb Experimental zużywa 1 z 50 generacji miesięcznie — warto, bo jakość jest znacznie lepsza
- Stitch nie będzie miał dostępu do Waszych prawdziwych zdjęć — wstawi placeholdery. To normalne, zdjęcia podmienimy w Fazie 3
- Stitch może nie oddać perfekcyjnie ciemnej, ziemistej estetyki z pierwszego podejścia — to też OK, dopracujemy w kodzie
