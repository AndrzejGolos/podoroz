// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://podoroz.art',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
