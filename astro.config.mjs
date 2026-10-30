// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightScrollToTop from "starlight-scroll-to-top";
import starlightLinksValidator from "starlight-links-validator";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://doc.episciences.org",
  redirects: {
    "/": "/en/",
  },
  integrations: [
    starlight({
      title: "Episciences",
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      logo: {
        src: "./src/assets/episciences.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.png",
      lastUpdated: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/CCSDForge/episciences" },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/ccsd-science-ouverte",
        },
        {
          icon: "mastodon",
          label: "Mastodon",
          href: "https://social.numerique.gouv.fr/@episciences",
        },
        {
          icon: "blueSky",
          label: "Bluesky",
          href: "https://bsky.app/profile/episciences.bsky.social",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/CCSDForge/episciences-doc/edit/main/",
      },
      sidebar: [
        {
          label: "Authors & Submission",
          translations: { fr: "Auteurs & Soumission" },
          items: [
            { slug: "submission" },
            { slug: "account" },
            { slug: "authoreditorcommunication" },
          ],
        },
        {
          label: "Reviewers",
          translations: { fr: "Relecteurs" },
          items: [
            { slug: "review" },
            { slug: "invitereviewer" },
            { slug: "availability" },
            { slug: "coi" },
          ],
        },
        {
          label: "Journal Editorial Management",
          translations: { fr: "Gestion éditoriale de la revue" },
          items: [
            { slug: "settings" },
            { slug: "sections" },
            { slug: "volumes" },
            { slug: "volumesettings" },
            { slug: "grids" },
            { slug: "users" },
            { slug: "roles" },
            { slug: "reminders" },
            { slug: "mailing" },
            { slug: "software" },
            { slug: "citations" },
            { slug: "copyediting" },
          ],
        },
        {
          label: "Journal Website",
          translations: { fr: "Site web de la revue" },
          items: [{ slug: "website" }],
        },
        {
          label: "Help & FAQ",
          translations: { fr: "Aide & FAQ" },
          items: [{ slug: "faq" }],
        },
      ],
      plugins: [
        starlightImageZoom(),
        starlightScrollToTop({
          tooltipText: {
            en: "Scroll to top",
            fr: "Retour en haut",
          },
        }),
        starlightLinksValidator(),
        starlightLlmsTxt(),
      ],
      customCss: ["./src/styles/episciences.css"],
    }),
  ],
});
