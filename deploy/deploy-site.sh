#!/bin/bash
# Build the Astro site and publish it (plus the form relay) to podoroz.art on hermes-vps.
set -euo pipefail
cd "$(dirname "$0")/.."
HOST=deploy@178.105.217.3

(cd site && PUBLIC_FORM_ENDPOINT=/api/contact npm run build)
# _headers is Netlify-only (preview noindex); nginx sets the production headers.
rsync -a --delete --exclude _headers site/dist/ "$HOST:/srv/podoroz/site/"
rsync -a --delete --exclude '.env*' --exclude README.md form-relay/ "$HOST:/srv/podoroz/form-relay/"
ssh "$HOST" 'sudo systemctl restart podoroz-form && systemctl is-active podoroz-form'
