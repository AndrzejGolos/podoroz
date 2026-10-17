// Scroll-driven film sections.
//
// A [data-scrub] section is tall; its stage is position: sticky (CSS). Scroll progress
// through the section (0..1) drives:
//   - the video's currentTime (all-intra encodes, so every seek is instant),
//   - the CSS variable --p on the section,
//   - .is-active on children with [data-from][data-to] (progress ranges).
// Runs only in "scrub" mode (set in <head>); otherwise the page is static.

const MOBILE = '(orientation: portrait) and (max-width: 900px)';

type Scrub = {
  el: HTMLElement;
  video: HTMLVideoElement;
  steps: { el: HTMLElement; from: number; to: number }[];
  progress: number;
  time: number;
  ready: boolean;
  requested: boolean;
};

const root = document.documentElement;

if (root.classList.contains('scrub')) {
  const scrubs: Scrub[] = [...document.querySelectorAll<HTMLElement>('[data-scrub]')].map((el) => ({
    el,
    video: el.querySelector('video')!,
    steps: [...el.querySelectorAll<HTMLElement>('[data-from]')].map((s) => ({
      el: s,
      from: Number(s.dataset.from),
      to: Number(s.dataset.to),
    })),
    progress: -1,
    time: 0,
    ready: false,
    requested: false,
  }));

  const load = async (s: Scrub) => {
    if (s.requested) return;
    s.requested = true;
    const url = matchMedia(MOBILE).matches ? s.el.dataset.mobile! : s.el.dataset.desktop!;
    try {
      // Whole file as a blob: Safari stalls when seeking in a partially loaded stream.
      const res = await fetch(url);
      if (!res.ok) throw new Error(String(res.status));
      const blob = await res.blob();
      const v = s.video;
      v.muted = true;
      v.playsInline = true;
      // iOS Safari honours preload="none" even for a blob and never fires loadeddata
      // until play() is called, so force loading and kick it with a muted play().
      v.preload = 'auto';
      v.src = URL.createObjectURL(blob);
      const loaded = new Promise<void>((resolve, reject) => {
        const done = () => resolve();
        v.addEventListener('loadeddata', done, { once: true });
        v.addEventListener('canplay', done, { once: true });
        v.addEventListener('error', () => reject(v.error), { once: true });
        setTimeout(() => (v.readyState >= 2 ? resolve() : reject(new Error('video timeout'))), 15000);
      });
      v.load();
      // iOS also renders seeked frames only after the element has played once.
      await v.play().catch(() => {});
      await loaded;
      v.pause();
      v.currentTime = s.time;
      s.ready = true;
      s.el.classList.add('is-ready');
    } catch {
      // Poster stays; text steps keep working.
    }
  };

  const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

  const tick = () => {
    for (const s of scrubs) {
      const r = s.el.getBoundingClientRect();
      const range = r.height - innerHeight;
      const p = range > 0 ? clamp01(-r.top / range) : 0;
      // How far the stage is still entering from below / already leaving at the top
      // (0 while pinned). CSS feathers the moving edge to dark, so two film sections
      // meet on a soft dark seam instead of a hard line.
      s.el.style.setProperty('--enter', clamp01(r.top / innerHeight).toFixed(3));
      s.el.style.setProperty('--exit', clamp01((innerHeight - r.bottom) / innerHeight).toFixed(3));
      if (p !== s.progress) {
        s.progress = p;
        s.el.style.setProperty('--p', p.toFixed(4));
        for (const st of s.steps) st.el.classList.toggle('is-active', p >= st.from && p < st.to);
      }
      if (s.ready && s.video.duration) {
        // Ease toward the target frame so wheel steps don't look like jump cuts.
        const target = p * (s.video.duration - 0.05);
        const next = s.time + (target - s.time) * 0.25;
        s.time = Math.abs(target - next) < 0.01 ? target : next;
        if (Math.abs(s.video.currentTime - s.time) > 0.02 && !s.video.seeking) s.video.currentTime = s.time;
      }
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  // Load each video as its section approaches; the hero right after first paint.
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const s = scrubs.find((x) => x.el === e.target);
        if (s) load(s);
        io.unobserve(e.target);
      }
    },
    { rootMargin: '150% 0px' },
  );
  const start = () => scrubs.forEach((s) => io.observe(s.el));
  if (document.readyState === 'complete') start();
  else addEventListener('load', start, { once: true });
}

// Pan sections ([data-pan]): only --p (0..1 while the section is pinned); CSS does the rest.
if (root.classList.contains('scrub')) {
  const pans = [...document.querySelectorAll<HTMLElement>('[data-pan]')];
  const tick = () => {
    for (const el of pans) {
      const r = el.getBoundingClientRect();
      const range = r.height - innerHeight;
      el.style.setProperty('--p', (range > 0 ? Math.min(1, Math.max(0, -r.top / range)) : 0).toFixed(4));
    }
    requestAnimationFrame(tick);
  };
  if (pans.length) requestAnimationFrame(tick);
}

// Scroll-linked reveals ([data-view]) for the sections after the film, so they keep
// moving with the scroll instead of switching to a static page. Two variables:
//   --in: 0..1 (eased) while the element's top rises through the bottom 40% of the viewport,
//   --v:  0..1 across the whole pass, from entering at the bottom to leaving at the top.
// CSS defaults both to "revealed", so nothing hides if this script never runs.
if (root.classList.contains('scrub')) {
  const live = new Set<HTMLElement>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) live.add(el);
        else live.delete(el);
      }
    },
    { rootMargin: '50% 0px' },
  );
  document.querySelectorAll<HTMLElement>('[data-view]').forEach((el) => io.observe(el));
  const clamp = (x: number) => Math.min(1, Math.max(0, x));
  const tick = () => {
    for (const el of live) {
      const r = el.getBoundingClientRect();
      const x = clamp((innerHeight - r.top) / (innerHeight * 0.4));
      el.style.setProperty('--in', (1 - (1 - x) ** 3).toFixed(4));
      el.style.setProperty('--v', clamp((innerHeight - r.top) / (innerHeight + r.height)).toFixed(4));
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Muted ambient loops ([data-loop]): load near the viewport, play only while visible.
if (root.classList.contains('scrub')) {
  const loops = document.querySelectorAll<HTMLVideoElement>('video[data-loop]');
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const v = e.target as HTMLVideoElement;
        if (e.isIntersecting) {
          if (!v.src) v.src = v.dataset.loop!;
          v.play().then(() => v.closest('[data-loop-wrap]')?.classList.add('is-ready')).catch(() => {});
        } else if (v.src) {
          v.pause();
        }
      }
    },
    { rootMargin: '25% 0px' },
  );
  loops.forEach((v) => io.observe(v));
}
