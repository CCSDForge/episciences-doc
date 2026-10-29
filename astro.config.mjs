// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://doc.episciences.org',
  redirects: {
    '/': '/en/',
  },
  integrations: [
    starlight({
      title: 'Episciences',
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
      },
      logo: {
        src: './src/assets/episciences.svg',
      },
      favicon: '/favicon.png',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/CCSDForge/episciences' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/ccsd-science-ouverte' },
        { icon: 'mastodon', label: 'Mastodon', href: 'https://social.numerique.gouv.fr/@episciences' },
        { icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/episciences.bsky.social' },
      ],
      editLink: {
        baseUrl: 'https://github.com/CCSDForge/episciences-doc/edit/main/',
      },
      customCss: ['./src/styles/episciences.css'],
    }),
  ],
});
