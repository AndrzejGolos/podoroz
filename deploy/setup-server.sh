#!/bin/bash
# One-time (idempotent) setup of hermes-vps for podoroz.art: nginx + Let's Encrypt,
# send-only postfix, contact form relay. Run as root: sudo bash setup-server.sh
# Expects nginx-podoroz.conf and podoroz-form.service next to it.
set -euo pipefail
cd "$(dirname "$0")"

# Packages. Postfix: send-only, answers on loopback only.
echo "postfix postfix/main_mailer_type select Internet Site" | debconf-set-selections
echo "postfix postfix/mailname string mail.podoroz.art" | debconf-set-selections
DEBIAN_FRONTEND=noninteractive apt-get install -y -qq nginx certbot postfix nodejs >/dev/null

postconf -e \
  myhostname=mail.podoroz.art \
  mydestination=localhost \
  inet_interfaces=loopback-only \
  inet_protocols=ipv4 \
  smtp_tls_security_level=may
systemctl restart postfix

ufw allow 80/tcp >/dev/null
ufw allow 443/tcp >/dev/null

# Site and relay files are uploaded by deploy (rsync); nginx and the relay only read them.
install -d -o deploy -g deploy -m 755 /srv/podoroz /srv/podoroz/site /srv/podoroz/form-relay
install -d -m 755 /var/www/acme

# Relay secrets: root-only; systemd hands the DKIM key to the service as a credential.
install -d -m 700 /etc/podoroz-form
if [ ! -f /etc/podoroz-form/dkim.key ]; then
  openssl genrsa -out /etc/podoroz-form/dkim.key 2048 2>/dev/null
  chmod 600 /etc/podoroz-form/dkim.key
fi
cat > /etc/podoroz-form/env <<'EOF'
PORT=8787
ALLOWED_ORIGIN=https://podoroz.art
MAIL_FROM=formularz@podoroz.art
MAIL_TO=kontakt@podoroz.art
DKIM_SELECTOR=s1
EOF
chmod 600 /etc/podoroz-form/env

# Certificate first (HTTP-only bootstrap config), then the full site config.
rm -f /etc/nginx/sites-enabled/default
if [ ! -d /etc/letsencrypt/live/podoroz.art ]; then
  cat > /etc/nginx/sites-enabled/podoroz-bootstrap <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name podoroz.art www.podoroz.art;
    location /.well-known/acme-challenge/ { root /var/www/acme; }
    location / { return 404; }
}
EOF
  systemctl reload nginx
  certbot certonly --webroot -w /var/www/acme -d podoroz.art -d www.podoroz.art \
    --agree-tos --register-unsafely-without-email --non-interactive \
    --deploy-hook "systemctl reload nginx"
  rm -f /etc/nginx/sites-enabled/podoroz-bootstrap
fi
install -m 644 nginx-podoroz.conf /etc/nginx/sites-available/podoroz
ln -sf /etc/nginx/sites-available/podoroz /etc/nginx/sites-enabled/podoroz
nginx -t
systemctl reload nginx

install -m 644 podoroz-form.service /etc/systemd/system/podoroz-form.service
systemctl daemon-reload
systemctl enable podoroz-form >/dev/null

# DKIM public key for the DNS TXT record s1._domainkey.podoroz.art
echo "DKIM_TXT=v=DKIM1; k=rsa; p=$(openssl rsa -in /etc/podoroz-form/dkim.key -pubout 2>/dev/null | grep -v -- '-----' | tr -d '\n')"
echo SETUP_OK
