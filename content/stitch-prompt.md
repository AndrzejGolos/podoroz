# Google Stitch Prompt

> Ready to paste into stitch.withgoogle.com
> Recommended mode: **Experimental** (Gemini Pro — better quality, worth using one of 50 monthly generations for this)

---

## Prompt (copy everything below the line)

---

Design a single-page website for Podoroж (Podoroz), a vocal ensemble performing polyphonic songs from Ukraine, Belarus and the Polish region of Podlasie. This is a band portfolio / business card site aimed at concert organizers and music enthusiasts.

### Overall Aesthetic

Reference: wardruna.com — warm, restrained, content-lean, ritualistic folk music site.

- Dark background (#1a1612 or similar deep warm brown-black) with warm sand/beige accent (#eed8c7) for text and highlights, darker brown (#aa9482) for secondary elements
- The band's visual identity uses hand-drawn, textured brush strokes (their logo resembles sound waves or a butterfly, with a rough charcoal texture)
- Typography: a distinctive serif with character for headings (not generic — think something with weight and history), paired with a clean sans-serif for body text. The heading font should evoke tradition without being ornamental
- Mood: atmospheric, earthy, folk-rooted but contemporary — not kitschy or "ethnic costume" folk. Think archival warmth, not festival brightness
- Generous darkspace — let elements breathe. Content-lean by design: every element earns its place
- Subtle grain/noise texture on the dark background for tactile depth
- Photography-driven: large, atmospheric photos carry the emotional weight; text supports, not competes

### Sections (in scroll order)

**1. Hero (full viewport)**
- Full-width atmospheric background image (a band photo in a golden field at dusk — 5 people standing among tall grass with a pale sky). The image should fill the viewport with a subtle dark gradient overlay from bottom to top
- Band logo centered over the image (white/beige version, not too large — let the photo dominate)
- One line of text below logo in the sand/beige accent color: "Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia"
- Minimal — no buttons, no CTA in the hero. Let the image and name speak. A subtle scroll indicator at the very bottom (thin line or small arrow)

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
- A short paragraph (2-3 sentences) inviting collaboration — warm but not pushy, more "we're available" than "book us now"
- One large atmospheric photo (horizontal, full-width or near full-width, with the same dark overlay treatment as the hero — a different band photo, e.g. a moody forest or rehearsal scene)
- This section should feel like a visual pause — more image than text

**5. Kontakt (Contact)**
- Section heading "Kontakt"
- Two-column layout on desktop (form on left, info on right), stacked on mobile
- Simple contact form: Name, Email, Message fields + Send button. Form fields styled with the beige accent color on dark background (like Wardruna's input fields)
- Right side: email address, social media icons (YouTube, Facebook), and a brief "We speak English" note
- Footer below: copyright line, small band signet, social icons repeated

### Technical Requirements

- Responsive design: mobile-first (375px base), tablet (768px), desktop (1024px+), large desktop (1440px+)
- Maximum content width: 1200px, centered
- Navigation: fixed/sticky top bar with section links (O nas, Muzyka, Na żywo, Kontakt) — minimal, semi-transparent on dark background
- Smooth scroll behavior for anchor navigation
- Language switcher: PL / EN toggle in the top-right corner of the nav bar

### Things to Avoid

- Bright neon colors, saturated gradients, or any blue/purple AI-generic palette
- Generic stock-photo aesthetics or placeholder illustrations
- Overly decorative folk ornaments, Slavic pattern borders, or "ethnic costume" kitsch
- Cluttered layouts — this site should feel sparse and intentional, like Wardruna's
- Large aggressive CTAs like "BOOK NOW" or "BUY TICKETS" — the contact invitation should be gentle
- Rounded card-based layouts that look like a SaaS product page
- Any bright white sections — maintain the dark atmosphere throughout

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
