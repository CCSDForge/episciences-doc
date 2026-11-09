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
      title: {
        en: "Episciences documentation",
        fr: "Documentation Episciences",
      },
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
        replacesTitle: false,
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
            { slug: "account" },
            { slug: "submission" },
            { slug: "authoreditorcommunication" },
          ],
        },
        {
          label: "Reviewers",
          translations: { fr: "Relecteurs" },
          items: [
            { slug: "invitereviewer" }, // 1. Receive an invitation
            { slug: "coi" }, // 2. Declare conflicts of interest
            { slug: "review" }, // 3. Write the review
            { slug: "availability" }, // 4. Availability
          ],
        },
        {
          label: "Journal Editorial Management",
          translations: { fr: "Gestion éditoriale de la revue" },
          items: [
            // 1. Set up the journal
            { slug: "settings" },
            // 2. People
            { slug: "users" },
            { slug: "roles" },
            // 3. Structure of the content
            { slug: "sections" },
            { slug: "volumes" },
            { slug: "volumesettings" },
            // 4. Peer review
            { slug: "grids" },
            { slug: "reminders" },
            { slug: "mailing" },
            // 5. After acceptance
            { slug: "copyediting" },
            { slug: "citations" },
            { slug: "software" },
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
        starlightLlmsTxt({
          projectName: "Episciences",
          customSets: [
            {
              label: "English Documentation",
              description: "Complete documentation for Episciences platform in English",
              paths: ["en/**"],
            },
            {
              label: "Documentation en français",
              description: "Documentation complète de la plateforme Episciences en français",
              paths: ["fr/**"],
            },
          ],
          exclude: ["404*"],
        }),
      ],
      customCss: ["./src/styles/episciences.css"],
    }),
  ],
});
