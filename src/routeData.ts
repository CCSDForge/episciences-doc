import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

/**
 * Sort the pages inside each sidebar category alphabetically,
 * using the current locale (titles differ between EN and FR).
 */
export const onRequest = defineRouteMiddleware((context) => {
  const { sidebar, lang } = context.locals.starlightRoute;
  const collator = new Intl.Collator(lang, { sensitivity: "base" });

  const sortEntries = (entries: typeof sidebar) => {
    entries.sort((a, b) => collator.compare(a.label, b.label));
    for (const entry of entries) {
      if (entry.type === "group") sortEntries(entry.entries);
    }
  };

  // Keep the category order defined in astro.config.mjs; sort only their content.
  for (const entry of sidebar) {
    if (entry.type === "group") sortEntries(entry.entries);
  }
});
