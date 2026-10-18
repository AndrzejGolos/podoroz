# form-relay

Receives the contact form from podoroz.art and e-mails it to the band. Default: the
VPS's own postfix on 127.0.0.1:25 (needs SPF + DKIM for podoroz.art); optional: any SMTP mailbox. No third-party form service; nothing is stored.

- Listens on `127.0.0.1:$PORT` only; the reverse proxy forwards `/api/contact` to it.
- Rejects other origins, bad input, filled honeypot (answers 200, sends nothing), >5 posts per IP per 10 min.
- Reply-To is the sender, so "Reply" in the mailbox answers the organizer directly.
- JS submit gets a bare status code; a no-JS post gets a small thank-you page.

## Deploy (VPS)

```sh
cp .env.example .env   # chmod 600 .env; SMTP_* only for an external mailbox
npm ci --omit=dev
```

systemd unit `/etc/systemd/system/podoroz-form.service`:

```ini
[Service]
WorkingDirectory=/srv/podoroz/form-relay
ExecStart=/usr/bin/node --env-file=.env server.mjs
Restart=on-failure
User=www-data

[Install]
WantedBy=multi-user.target
```

Proxy (nginx): `location = /api/contact { proxy_pass http://127.0.0.1:8787; proxy_set_header X-Real-IP $remote_addr; }`
Proxy (Caddy): `handle /api/contact { reverse_proxy 127.0.0.1:8787 { header_up X-Real-IP {remote_host} } }`

Build the site with `PUBLIC_FORM_ENDPOINT=/api/contact`.
