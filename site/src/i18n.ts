// All user-facing copy, PL and EN.
// Band prose (about) comes from "o zespole.md" and the album booklet; keep it verbatim.

export type Lang = 'pl' | 'en';

export const routes = {
  home: { pl: '/', en: '/en/' },
  press: { pl: '/dla-organizatorow/', en: '/en/promoters/' },
  privacy: { pl: '/polityka-prywatnosci/', en: '/en/privacy/' },
} as const;

// The data controller named in the privacy policy (GDPR Art. 13); contact goes through contact.email.
// deploy-site.sh refuses to deploy while the name is empty.
export const legal = {
  owner: { name: 'Andrzej Gołoś' },
  effective: '2026-10-18',
};

export const members = [
  { id: 'm1', name: { pl: 'Ewa Karasińska', en: 'Ewa Karasińska' } },
  { id: 'm2', name: { pl: 'Ewa „Mysza” Starzyk', en: 'Ewa “Mysza” Starzyk' } },
  { id: 'm3', name: { pl: 'Andrzej Gołoś', en: 'Andrzej Gołoś' } },
  { id: 'm4', name: { pl: 'Wójciak', en: 'Wójciak' } },
  { id: 'm5', name: { pl: 'Amelia Pietroczuk', en: 'Amelia Pietroczuk' } },
] as const;

export const tracks: [string, string][] = [
  ['Oj, ty dube-dube', '3:46'],
  ['Iszła wdowa', '6:49'],
  ['Oj, upaw snieżok', '3:17'],
  ['Cyhanka-worożka', '3:40'],
  ['Oj, ne kuj zozule', '3:55'],
  ['Oj, haj baťko, oj haj maty', '4:52'],
  ['Och, ne płacz maty', '2:27'],
  ['Oj, werbo-werbo', '3:46'],
  ['Szo ja w neńky ta j na odchodi', '2:46'],
  ['Oj, u poli bylyna stojała', '5:34'],
  ['Dy horeło kupajło', '2:03'],
  ['Wydno riczku zdaleka', '4:24'],
  ['Koły b Boh daw zweczora pohodu', '3:02'],
  ['Na żowtisińkim pisoczku', '4:30'],
  ['Iz-za hory kamjanoji', '4:12'],
];

// Fill in when available; empty lists hide their sections.
export const streaming: { label: string; href: string }[] = [
  { label: 'Spotify', href: 'https://open.spotify.com/artist/3qTzRZqGj2qf0fLeVHZtt7' },
];
// Where to buy the CD. folk.pl has no per-album pages, so this is the band's page there.
export const shop = 'https://folk.pl/folk/Zespoly/Zespol.php?Podoroz';
export const concerts: { date: string; place: { pl: string; en: string }; href?: string }[] = [];

// Studio film embed in the Music section. Shown for the band review; it is not the
// band's official clip, so the band decides whether it stays (false hides it).
export const showFilm = false;

export const contact = {
  email: 'kontakt@podoroz.art',
  phone: '',
  youtube: 'https://www.youtube.com/@zespol_podoroz',
  facebook: 'https://www.facebook.com/zespol.podoroz',
  spotify: 'https://open.spotify.com/artist/3qTzRZqGj2qf0fLeVHZtt7',
  film: 'https://www.youtube.com/watch?v=Z8b5Tj3Zkfw',
  filmId: 'Z8b5Tj3Zkfw',
};

const about = {
  pl: [
    'Podoroж to po ukraińsku podróż, wędrówka. Nasza podróż w obecnym składzie zaczęła się w roku 2023, ale każde z nas próbowało wcześniej podążać tym szlakiem kilka, kilkanaście, kilkadziesiąt lat. Śpiewamy pieśni przede wszystkim z Ukrainy, ale także z Białorusi i polskiego Podlasia.',
    'Wielogłosowa pieśń to nie tylko podróż przez wschodniosłowiańskie obyczaje i obrzędy. To także kontakt z głęboko ludzkim doświadczeniem – uniwersalnym, jak uniwersalna jest radość i ból, śmierć i miłość.',
    'Nie wychowaliśmy się w tej tradycji ani w tym języku, ale fascynuje nas kunsztowność melodii, archaiczność wielu z nich. Przekonaliśmy się też, że wschodniosłowiańska pieśń wybrzmi, o ile najpierw powstanie wspólnota wzajemnie rozumiejących się ludzi. Być może to najcenniejsze doświadczenie z naszej wspólnej podróży.',
  ],
  en: [
    'Podoroж means journey in Ukrainian. Our journey in the present line-up began in 2023, though each of us had been following this path for several, a dozen, or even dozens of years before that. We sing songs mainly from Ukraine, but also from Belarus and the Polish region of Podlasie.',
    'Polyphonic singing is not only a journey through East Slavic customs and rituals. It is also a way of connecting with deeply human experiences, as universal as joy and sorrow, death and love.',
    'We did not grow up in this tradition or language, yet we are fascinated by the intricacy of the melodies and the archaic nature of many of them. We have also discovered that East Slavic song truly comes alive only when a community of people who understand one another is first formed. Perhaps this is the most precious experience of our shared journey.',
  ],
};

export const t = {
  pl: {
    htmlLang: 'pl',
    title: 'Podoroж: wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia',
    description:
      'Podoroж to zespół wokalny śpiewający wielogłosowe pieśni z tradycji wschodniosłowiańskiej. Koncerty, muzyka, kontakt.',
    skip: 'Przejdź do treści',
    nav: { about: 'O nas', ensemble: 'Zespół', music: 'Muzyka', live: 'Koncerty', press: 'Dla organizatorów', contact: 'Kontakt' },
    langSwitch: { label: 'English version', short: 'EN' },
    subtitle: 'Wielogłosowe pieśni z Ukrainy, Białorusi i Podlasia',
    scrollCue: 'Przewiń',
    aboutTitle: 'O nas',
    about: about.pl,
    ensembleTitle: 'Zespół',
    ensembleLead: 'Podoroж tworzą',
    musicTitle: 'Muzyka',
    albumTitle: 'Debiutancki album',
    albumText: 'Piętnaście pieśni z Ukrainy, Białorusi i Podlasia: lirycznych, obrzędowych, balladowych. Śpiewanych wielogłosowo, bez instrumentów.',
    albumAlt: 'Okładka debiutanckiego albumu Podoroж',
    tracklist: 'Lista utworów',
    filmTitle: 'Film',
    filmPlay: 'Obejrzyj film',
    filmNote: 'Odtwarzacz YouTube załaduje się dopiero po kliknięciu.',
    filmCredit: 'Film: OSKAR STUDIO WARSZAWA',
    listenOn: 'Słuchaj w serwisach',
    buy: { label: 'Płyta CD', link: 'Kup w sklepie folk.pl' },
    liveTitle: 'Na żywo',
    liveText: [
      'Gramy koncerty kameralne i plenerowe. Nasz repertuar sprawdza się wszędzie tam, gdzie jest przestrzeń na uważne słuchanie: od kameralnych scen i sal koncertowych, przez kościoły i galerie, po festiwale muzyki tradycyjnej.',
    ],
    concertsTitle: 'Koncerty',
    photoAlts: {
      outdoor: 'Zespół śpiewa boso na drewnianym pomoście nad jeziorem, o zachodzie słońca',
      stage: 'Zespół śpiewa na scenie przy mikrofonach, z nutami w dłoniach',
    },
    inviteTitle: 'Zaproś nas',
    inviteText: 'Szukasz zespołu na koncert, festiwal lub inne wydarzenie? Napisz do nas, odpowiemy.',
    invitePress: 'Zdjęcia, logo i biogram dla organizatorów',
    form: {
      name: 'Imię',
      email: 'Email',
      message: 'Wiadomość',
      send: 'Wyślij',
      sending: 'Wysyłanie…',
      ok: 'Dziękujemy. Wiadomość dotarła, odpiszemy wkrótce.',
      error: 'Nie udało się wysłać. Napisz bezpośrednio na adres email poniżej.',
      note: 'Imię, e-mail i treść wiadomości wykorzystamy tylko po to, żeby odpowiedzieć.',
    },
    orEmail: 'albo bezpośrednio',
    english: 'We also speak English.',
    listen: { play: 'Posłuchaj', pause: 'Pauza', label: 'Odtwórz utwór „Iz-za hory kamjanoji” z płyty' },
    footerCredit: 'Film: OSKAR STUDIO WARSZAWA',
    footerLegal: { privacy: 'Polityka prywatności' },
    legalPages: { privacy: 'Polityka prywatności', effective: 'Obowiązuje od', missing: 'DO UZUPEŁNIENIA' },
    press: {
      title: 'Dla organizatorów',
      lead: 'Wszystko, czego potrzeba, żeby zaprosić Podoroж i zapowiedzieć koncert.',
      zip: 'Pobierz cały pakiet',
      bioTitle: 'Biogram',
      bioLengths: { short: 'Krótki', medium: 'Średni', full: 'Pełny' },
      copy: 'Kopiuj tekst',
      copied: 'Skopiowano',
      photosTitle: 'Zdjęcia',
      photosNote: 'Pliki JPG, 3000 px na dłuższym boku.',
      download: 'Pobierz',
      logoTitle: 'Logo i sygnet',
      videoTitle: 'Wideo i muzyka',
      formatsTitle: 'Formaty koncertu',
      riderTitle: 'Rider techniczny',
      concertsTitle: 'Dotychczasowe koncerty',
      contactTitle: 'Kontakt',
      contactText: 'Napisz do nas w sprawie terminu, honorarium i warunków technicznych.',
      back: 'Strona główna',
    },
    logos: {
      'podoroz-logo-czarne.png': 'Logo, czarne, PNG',
      'podoroz-logo-biale.png': 'Logo, białe, PNG',
      'podoroz-sygnet-czarny.png': 'Sygnet, czarny, PNG',
      'podoroz-sygnet-bialy.png': 'Sygnet, biały, PNG',
      'podoroz-logo-wektor.pdf': 'Logo, wektor, PDF',
      'podoroz-sygnet-wektor.pdf': 'Sygnet, wektor, PDF',
    } as Record<string, string>,
    pressPhotos: {
      'podoroz-pole.jpg': 'Zespół w polu',
      'podoroz-las.jpg': 'Zespół w lesie',
      'podoroz-droga.jpg': 'Zespół w drodze',
      'ewa-karasinska.jpg': 'Ewa Karasińska',
      'ewa-mysza-starzyk.jpg': 'Ewa „Mysza” Starzyk',
      'andrzej-golos.jpg': 'Andrzej Gołoś',
      'wojciak.jpg': 'Wójciak',
      'amelia-pietroczuk.jpg': 'Amelia Pietroczuk',
    } as Record<string, string>,
    notFound: { title: 'Nie ma takiej strony', back: 'Wróć na stronę główną' },
  },
  en: {
    htmlLang: 'en',
    title: 'Podoroж: polyphonic songs from Ukraine, Belarus and Podlasie',
    description:
      'Podoroж is a vocal ensemble performing polyphonic songs from the East Slavic tradition. Concerts, music, contact.',
    skip: 'Skip to content',
    nav: { about: 'About', ensemble: 'Ensemble', music: 'Music', live: 'Concerts', press: 'For promoters', contact: 'Contact' },
    langSwitch: { label: 'Wersja polska', short: 'PL' },
    subtitle: 'Polyphonic songs from Ukraine, Belarus and Podlasie',
    scrollCue: 'Scroll',
    aboutTitle: 'About',
    about: about.en,
    ensembleTitle: 'Ensemble',
    ensembleLead: 'Podoroж are',
    musicTitle: 'Music',
    albumTitle: 'Debut album',
    albumText: 'Fifteen songs from Ukraine, Belarus and Podlasie: lyrical, ritual, balladic. Sung in polyphony, without instruments.',
    albumAlt: 'Cover of the Podoroж debut album',
    tracklist: 'Tracklist',
    filmTitle: 'Film',
    filmPlay: 'Watch the film',
    filmNote: 'The YouTube player loads only after you click.',
    filmCredit: 'Film: OSKAR STUDIO WARSZAWA',
    listenOn: 'Listen on',
    buy: { label: 'CD', link: 'Buy at folk.pl (Polish shop)' },
    liveTitle: 'Live',
    liveText: [
      'We perform intimate and outdoor concerts. Our repertoire works best where there is space for attentive listening: from small stages and concert halls, through churches and galleries, to traditional music festivals.',
    ],
    concertsTitle: 'Concerts',
    photoAlts: {
      outdoor: 'The ensemble singing barefoot on a wooden pier by a lake at sunset',
      stage: 'The ensemble singing on stage at the microphones, holding their scores',
    },
    inviteTitle: 'Invite us',
    inviteText: 'Looking for an ensemble for a concert, festival or other event? Write to us and we will reply.',
    invitePress: 'Photos, logo and bio for promoters',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      ok: 'Thank you. Your message arrived, we will reply soon.',
      error: 'Sending failed. Please write directly to the email address below.',
      note: 'We use your name, email and message only to reply.',
    },
    orEmail: 'or directly',
    english: '',
    listen: { play: 'Listen', pause: 'Pause', label: 'Play “Iz-za hory kamjanoji” from the album' },
    footerCredit: 'Film: OSKAR STUDIO WARSZAWA',
    footerLegal: { privacy: 'Privacy policy' },
    legalPages: { privacy: 'Privacy policy', effective: 'Effective from', missing: 'TO BE COMPLETED' },
    press: {
      title: 'For promoters',
      lead: 'Everything you need to book Podoroж and announce the concert.',
      zip: 'Download the full pack',
      bioTitle: 'Bio',
      bioLengths: { short: 'Short', medium: 'Medium', full: 'Full' },
      copy: 'Copy text',
      copied: 'Copied',
      photosTitle: 'Photos',
      photosNote: 'JPG files, 3000 px on the long edge.',
      download: 'Download',
      logoTitle: 'Logo and signet',
      videoTitle: 'Video and music',
      formatsTitle: 'Concert formats',
      riderTitle: 'Technical rider',
      concertsTitle: 'Past concerts',
      contactTitle: 'Contact',
      contactText: 'Write to us about dates, fee and technical requirements.',
      back: 'Home',
    },
    logos: {
      'podoroz-logo-czarne.png': 'Logo, black, PNG',
      'podoroz-logo-biale.png': 'Logo, white, PNG',
      'podoroz-sygnet-czarny.png': 'Signet, black, PNG',
      'podoroz-sygnet-bialy.png': 'Signet, white, PNG',
      'podoroz-logo-wektor.pdf': 'Logo, vector, PDF',
      'podoroz-sygnet-wektor.pdf': 'Signet, vector, PDF',
    } as Record<string, string>,
    pressPhotos: {
      'podoroz-pole.jpg': 'The ensemble in a field',
      'podoroz-las.jpg': 'The ensemble in a forest',
      'podoroz-droga.jpg': 'The ensemble on the road',
      'ewa-karasinska.jpg': 'Ewa Karasińska',
      'ewa-mysza-starzyk.jpg': 'Ewa “Mysza” Starzyk',
      'andrzej-golos.jpg': 'Andrzej Gołoś',
      'wojciak.jpg': 'Wójciak',
      'amelia-pietroczuk.jpg': 'Amelia Pietroczuk',
    } as Record<string, string>,
    notFound: { title: 'Page not found', back: 'Back to the home page' },
  },
};

// Bios for promoters. Short and medium versions come from the band later;
// empty strings hide those tabs.
export const bios = {
  pl: { short: '', medium: '', full: about.pl.join('\n\n') },
  en: { short: '', medium: '', full: about.en.join('\n\n') },
};

// Fill in when the band delivers them; empty values hide the sections.
export const pressExtras = {
  formats: { pl: [] as string[], en: [] as string[] },
  riderPdf: '',
  stagePlotPdf: '',
};

// Concert programmes for organizers (PL only: the buyers are Polish institutions).
// Each gets a page at /dla-organizatorow/<slug>/. Empty songs or video show a
// "DO UZUPEŁNIENIA" marker, which deploy-site.sh refuses to publish.
export type Program = {
  slug: string;
  name: string;
  when: string;
  where: string;
  short: string;
  text: string[];
  songs: { title: string; note: string }[];
  // Concert clips in public/video/programy, posters in public/posters/programy.
  videos: { src: string; poster: string; title: string }[];
  videoCaption?: string;
};

export const programs: Program[] = [
  {
    slug: 'koledy',
    name: 'Kolędy i szczedriwki',
    when: 'od połowy grudnia do 2 lutego',
    where: 'sala, kościół',
    short: 'Kolędy i szczedriwki z Ukrainy, Białorusi i Podlasia na cały okres świąteczny.',
    text: [
      'Szczedriwki to pieśni noworoczne, śpiewane w szczodry wieczór, który w kalendarzu juliańskim przypada 13 stycznia. Boże Narodzenie według tego kalendarza wypada 7 stycznia.',
      'Dlatego ten koncert dobrze zaplanować na styczeń, kiedy w kalendarzu imprez robi się pusto.',
    ],
    songs: [],
    videos: [],
  },
  {
    slug: 'psalmy',
    name: 'Psalmy, pieśni zaduszne i cerkiewne',
    when: 'Wielki Post (luty – kwiecień, w kalendarzu prawosławnym do maja) oraz koniec października i listopad',
    where: 'kościół, cerkiew, sala kameralna',
    short: 'Jeden program na dwie pory roku: Wielki Post i czas zaduszny.',
    text: [
      'Psalmy, pieśni zaduszne i cerkiewne najlepiej brzmią we wnętrzu kościoła. Kilka naszych najlepszych koncertów zagraliśmy właśnie w kościołach.',
    ],
    songs: [],
    videos: [
      { src: '/video/programy/psalmy-1.mp4', poster: '/posters/programy/psalmy-1.webp', title: 'Psalm' },
      { src: '/video/programy/psalmy-2.mp4', poster: '/posters/programy/psalmy-2.webp', title: 'Psalm „Oj u nedileńku”' },
      { src: '/video/programy/psalmy-3.mp4', poster: '/posters/programy/psalmy-3.webp', title: 'Psalm białoruski, głosy męskie' },
      { src: '/video/programy/psalmy-4.mp4', poster: '/posters/programy/psalmy-4.webp', title: 'Psalm' },
      { src: '/video/programy/psalmy-5.mp4', poster: '/posters/programy/psalmy-5.webp', title: 'Pieśń cerkiewna' },
    ],
    videoCaption: 'Koncert w Sanktuarium św. Faustyny w Warszawie, 5 listopada 2023.',
  },
  {
    slug: 'wiosna',
    name: 'Wiosna',
    when: 'kwiecień – maj',
    where: 'sala, plener',
    short: 'Wiesnianki, którymi witano wiosnę, przeplatane pieśniami lirycznymi.',
    text: ['Wiesnianki to pieśni obrzędowe, którymi na wsi witano wiosnę. Przeplatamy je pieśniami lirycznymi.'],
    songs: [],
    videos: [],
  },
  {
    slug: 'kupala',
    name: 'Kupała',
    when: '20 czerwca – 7 lipca',
    where: 'plener, sala',
    short: 'Pieśni kupalne na najkrótszą noc roku, przeplatane lirycznymi.',
    text: [
      'Noc Kupały przypada z 23 na 24 czerwca, a w kalendarzu juliańskim z 6 na 7 lipca. Pieśni kupalne przeplatamy pieśniami lirycznymi.',
    ],
    songs: [],
    videos: [],
  },
  {
    slug: 'zniwa',
    name: 'Żniwa',
    when: 'koniec lipca – wrzesień',
    where: 'sala, kościół',
    short: 'Pieśni żniwne i liryczne: koncert do słuchania, nie występ na scenie dożynkowej.',
    text: [
      'Pieśni żniwne śpiewano przy pracy w polu i na zakończenie żniw. Przeplatamy je pieśniami lirycznymi.',
      'To koncert do słuchania w sali albo w kościele. Na scenie dożynkowej śpiew wielogłosowy bez instrumentów ginie, dlatego tam nie występujemy.',
    ],
    songs: [],
    videos: [],
  },
  {
    slug: 'przeglad',
    name: 'Przegląd: pieśni Ukrainy i Białorusi',
    when: 'cały rok',
    where: 'sala, kościół, festiwal',
    short: 'Wielogłosowe pieśni z różnych regionów Ukrainy i Białorusi, w wyborze zespołu. Na festiwal i na każdy termin.',
    text: ['Koncert bez okazji: przegląd pieśni wielogłosowych z różnych regionów Ukrainy i Białorusi, które sami wybraliśmy.'],
    songs: [],
    videos: [],
  },
];

export const programUi = {
  sectionTitle: 'Programy koncertowe',
  sectionLead: 'Pięć programów na okazje z kalendarza i przegląd na każdy termin.',
  more: 'Szczegóły programu',
  when: 'Kiedy',
  where: 'Gdzie',
  length: 'Czas',
  lengthValue: '45 albo 60 minut',
  booking: 'Rezerwacja',
  bookingValue: 'najpóźniej 2 miesiące przed koncertem',
  fee: 'Honorarium',
  feeValue: 'podajemy w odpowiedzi na zapytanie, jedną kwotą razem z dojazdem',
  repertoire: 'Repertuar',
  video: 'Z koncertu',
  missingSongs: 'DO UZUPEŁNIENIA: 3–5 pieśni ze streszczeniem po polsku',
  missingVideo: 'DO UZUPEŁNIENIA: nagranie z koncertu',
  pack: 'Zdjęcia, logo i biogram do zapowiedzi',
  back: 'Wszystkie programy',
  form: {
    title: 'Zapytaj o termin',
    institution: 'Instytucja',
    name: 'Imię i nazwisko',
    email: 'E-mail',
    phone: 'Telefon (opcjonalnie)',
    program: 'Program (można zaznaczyć kilka)',
    pickOne: 'Zaznacz co najmniej jeden program.',
    date: 'Proponowana data',
    datePlaceholder: 'np. 10 stycznia 2027',
    town: 'Miejscowość (do wyceny dojazdu)',
    venue: 'Miejsce',
    venues: ['sala', 'kościół lub cerkiew', 'plener', 'inne'],
    message: 'Wiadomość (opcjonalnie)',
    send: 'Wyślij zapytanie',
    note: 'Dane z formularza wykorzystamy tylko po to, żeby odpowiedzieć i ustalić warunki koncertu.',
    direct: 'Adres bezpośredni',
  },
};
