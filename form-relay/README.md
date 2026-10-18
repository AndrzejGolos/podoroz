# form-relay

Receives the contact form from podoroz.art and e-mails it to the band. Default: the
VPS's own postfix on 127.0.0.1:25 (needs SPF + DKIM for podoroz.art); optional: any SMTP mailbox. No third-party form service; nothing is stored.

- Listens on `127.0.0.1:$PORT` only; the reverse proxy forwards `/api/contact` to it.
- Rejects other origins, bad input, filled honeypot (answers 200, sends nothing), >5 posts per IP per 10 min.
- Reply-To is the sender, so "Reply" in the mailbox answers the organizer directly.
- JS submit gets a bare status code; a no-JS post gets a small thank-you page.

## Deploy (VPS)

Production runs on hermes-vps as the `podoroz-form` systemd service (unprivileged
DynamicUser, DKIM key passed as a credential). See `../deploy/`:
`setup-server.sh` (one-time), `podoroz-form.service`, `nginx-podoroz.conf`,
and `deploy-site.sh` for every release.
