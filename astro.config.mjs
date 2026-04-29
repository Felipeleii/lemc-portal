import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Felipeleii.github.io',
  base: '/lemc-portal',
  integrations: [],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
