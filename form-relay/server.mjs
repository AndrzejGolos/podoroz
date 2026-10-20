// Contact form relay for podoroz.art: receives the site's form POST and sends it
// as an e-mail (local postfix or an SMTP mailbox). Runs behind the VPS reverse proxy.
import { readFileSync } from 'node:fs';
import http from 'node:http';
import nodemailer from 'nodemailer';

const env = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env ${name}`);
  return value;
};

const PORT = Number(process.env.PORT || 8787);
const ALLOWED_ORIGIN = env('ALLOWED_ORIGIN'); // e.g. https://podoroz.art
const MAIL_FROM = env('MAIL_FROM');
const MAIL_TO = env('MAIL_TO');

// No SMTP_USER = the VPS's own postfix on loopback: no auth, no TLS.
const transport = nodemailer.createTransport({
  ...(process.env.SMTP_USER
    ? {
        host: env('SMTP_HOST'),
        port: Number(process.env.SMTP_PORT || 465),
        secure: (process.env.SMTP_PORT || '465') === '465',
        auth: { user: env('SMTP_USER'), pass: env('SMTP_PASS') },
      }
    : { host: '127.0.0.1', port: 25, ignoreTLS: true }),
  // DKIM-sign as the From domain when a key is given.
  ...(process.env.DKIM_KEY_FILE && {
    dkim: {
      domainName: MAIL_FROM.split('@')[1],
      keySelector: process.env.DKIM_SELECTOR || 's1',
      privateKey: readFileSync(process.env.DKIM_KEY_FILE, 'utf8'),
    },
  }),
});

const LIMITS = { name: 200, email: 254, message: 5000, extras: 400 };
const EXTRAS = [
  ['program', 'Program'],
  ['institution', 'Instytucja'],
  ['phone', 'Telefon'],
  ['date', 'Proponowana data'],
  ['town', 'Miejscowość'],
  ['venue', 'Miejsce'],
];
const MAX_BODY = 20_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 5 submissions per IP per 10 minutes, kept in memory.
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(ip);
}, WINDOW_MS).unref();

const thanks = {
  pl: ['Dziękujemy', 'Wiadomość dotarła, odpiszemy wkrótce.', 'Wróć na stronę'],
  en: ['Thank you', 'Your message has arrived, we will reply soon.', 'Back to the site'],
};

// JS submits via fetch (status only); without JS the browser posts directly and gets a page.
function reply(req, res, status, lang = 'pl') {
  const wantsPage = (req.headers.accept || '').includes('text/html');
  if (!wantsPage) {
    res.writeHead(status).end();
    return;
  }
  const [title, text, back] = status === 200 ? thanks[lang] : ['Błąd / Error', 'Nie udało się wysłać. / Sending failed.', '←'];
  res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="font-family:monospace;max-width:32rem;margin:4rem auto;padding:0 1rem"><h1>${title}</h1><p>${text}</p><p><a href="${ALLOWED_ORIGIN}${lang === 'en' ? '/en' : ''}/#kontakt">${back}</a></p></body>`);
}

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') return res.writeHead(405).end();
  const origin = req.headers.origin;
  if (origin && origin !== ALLOWED_ORIGIN) return res.writeHead(403).end();

  let body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > MAX_BODY) req.destroy();
  });
  req.on('end', async () => {
    const data = new URLSearchParams(body);
    const lang = data.get('lang') === 'en' ? 'en' : 'pl';
    // Honeypot filled = bot; answer as if it worked.
    if (data.get('bot-field')) return reply(req, res, 200, lang);

    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    const message = (data.get('message') || '').trim();
    // Programme inquiry form (/dla-organizatorow/<programme>/): one-line extras, message optional.
    // Several programmes can be ticked; they arrive as repeated keys.
    const extras = EXTRAS.map(([key, label]) => [label, data.getAll(key).map((v) => v.trim()).filter(Boolean).join(', ')]);
    const program = extras[0][1];
    const valid =
      name && (message || program) && EMAIL_RE.test(email) && !/[\r\n]/.test(name) &&
      name.length <= LIMITS.name && email.length <= LIMITS.email && message.length <= LIMITS.message &&
      extras.every(([, v]) => v.length <= LIMITS.extras && !/[\r\n]/.test(v));
    if (!valid) return reply(req, res, 400, lang);
    const details = extras.filter(([, v]) => v).map(([label, v]) => `${label}: ${v}`).join('\n');

    const ip = req.headers['x-real-ip'] || req.socket.remoteAddress;
    if (rateLimited(ip)) return reply(req, res, 429, lang);

    try {
      await transport.sendMail({
        from: { name: 'Formularz podoroz.art', address: MAIL_FROM },
        to: MAIL_TO,
        replyTo: { name, address: email },
        subject: program ? `Zapytanie: ${program}, ${extras[1][1] || name}` : `Formularz: ${name}`,
        text: `${[details, message].filter(Boolean).join('\n\n')}\n\n--\n${name} <${email}>\nJęzyk strony: ${lang}`,
      });
      reply(req, res, 200, lang);
    } catch (err) {
      console.error('send failed:', err.message);
      reply(req, res, 502, lang);
    }
  });
});

server.listen(PORT, '127.0.0.1', () => console.log(`form relay on 127.0.0.1:${PORT}`));
