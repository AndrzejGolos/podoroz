# Metadata — SEO, OG, Schema.org

> Technical content for search engines and social media previews.

---

## Meta Tags (PL)

- **title:** Podoroж — wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia
- **description:** Podoroж to zespół wokalny śpiewający wielogłosowe pieśni z tradycji wschodniosłowiańskiej. Koncerty, muzyka, kontakt.
- **keywords:** Podoroж, Podoroz, zespół wokalny, wielogłos, pieśni ukraińskie, pieśni białoruskie, Podlasie, muzyka tradycyjna, polyphonic singing

## Meta Tags (EN)

- **title:** Podoroж — polyphonic songs from Ukraine, Belarus and Podlasie
- **description:** Podoroж is a vocal ensemble performing polyphonic songs from the East Slavic tradition. Concerts, music, contact.

## Open Graph / Twitter Card

- **og:title:** Podoroж — wielogłosowe pieśni / polyphonic songs
- **og:description:** Zespół wokalny. Pieśni z Ukrainy, Białorusi i Podlasia. / Vocal ensemble. Songs from Ukraine, Belarus and Podlasie.
- **og:image:** [hero photo — grafika pole.jpg or similar, cropped to 1200x630]
- **og:type:** website
- **og:url:** [TBD after deployment]
- **twitter:card:** summary_large_image

## Schema.org (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Podoroж",
  "description": "Vocal ensemble performing polyphonic songs from Ukraine, Belarus and Podlasie",
  "genre": ["Traditional", "Polyphonic singing", "East Slavic folk"],
  "foundingDate": "2023",
  "member": [
    { "@type": "Person", "name": "Ewa Karasińska" },
    { "@type": "Person", "name": "Ewa Mysza Starzyk" },
    { "@type": "Person", "name": "Amelia Pietroczuk" },
    { "@type": "Person", "name": "Andrzej Gołoś" },
    { "@type": "Person", "name": "Wójciak" }
  ],
  "email": "zespolpodoroz@gmail.com",
  "sameAs": [
    "https://www.youtube.com/@zespol_podoroz",
    "https://www.facebook.com/zespol.podoroz"
  ]
}
```

## Notes

- OG image needs to be prepared: 1200x630px crop of band photo
- Schema.org album data to be added after release (MusicAlbum type)
- Canonical URL to be set after domain decision
