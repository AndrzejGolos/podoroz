# Assets Needed

> List of visual assets required for the website.
> Status: needed / have / ready (optimized for web)

---

## Logo & Branding

| Asset | Specs | Status | Source |
|-------|-------|--------|--------|
| Logo (full, transparent) | SVG preferred, PNG fallback | **have** | `LOGO Podoroż/logo przezroczystość.png` |
| Logo (white, transparent) | SVG preferred, PNG fallback | **have** | `LOGO Podoroż/logo przezroczystość białe.png` |
| Signet (icon only) | SVG preferred, PNG fallback | **have** | `LOGO Podoroż/sygnet przezroczystość.png` |
| Signet (white) | SVG preferred, PNG fallback | **have** | `LOGO Podoroż/sygnet przezroczystość białe.png` |
| Vector sources | PDF | **have** | `LOGO Podoroż/logo wektory.pdf`, `sygnet wektory.pdf` |

### To prepare from existing assets:

- [ ] Logo as SVG (trace from vector PDF or recreate)
- [ ] Favicon set: 16x16, 32x32, 180x180 (apple-touch-icon), 192x192, 512x512
- [ ] OG image: 1200x630px (band photo crop with logo overlay)

---

## Photography

| Asset | Specs | Status | Source |
|-------|-------|--------|--------|
| Hero image | 1920px wide min, WebP, landscape | **have** | `LOGO Podoroż/grafika pole.jpg` (field) |
| Hero image (alt) | 1920px wide min, WebP | **have** | `LOGO Podoroż/grafika las.jpg` (forest, B&W) |
| Band graphic | PNG | **have** | `LOGO Podoroż/grafika piasek.png` (sand) |

### Needed for "Na żywo" gallery:

- [ ] 2-3 concert/rehearsal photos (from Krukowska session or other)
- [ ] Photos should be horizontal, high-res (min 1200px wide)
- [ ] Variety: at least 1 close-up, 1 wide shot

### Needed for Members section (optional):

- [ ] Individual portraits — consistent style, same session if possible
- [ ] Or: decide to use group photo only (simpler)

---

## Music / Album

| Asset | Specs | Status | Source |
|-------|-------|--------|--------|
| Album cover | Square, min 800x800px, JPG/WebP | **needed** | From album release materials |
| Streaming links | Spotify, Bandcamp, Apple Music URLs | **needed** | After release (March-April 2026) |
| Concert video (YT embed) | YouTube URL | **have** | From https://www.youtube.com/@zespol_podoroz |

---

## Image Optimization Plan

All images for the website will be:
1. Converted to WebP (with JPG fallback)
2. Resized to responsive breakpoints: 375w, 768w, 1024w, 1440w, 1920w
3. Compressed (quality 80-85%)
4. Lazy-loaded below fold
5. Hero image: preloaded, critical

Estimated total optimized image weight: < 500KB (first load)

---

## Fonts

- To be decided in Phase 2/3 (based on Stitch design)
- Requirements: must support Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż)
- Consider: Ukrainian/Cyrillic support for song titles (Ж in logo)

---

## Priority

1. **Immediate (Phase 3):** Hero image, logo SVG, favicon set, OG image
2. **Before launch:** Album cover, streaming links, concert video selection
3. **Nice to have:** Gallery photos, individual portraits
