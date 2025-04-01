import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const tunes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/tunes" }),
});
const albums = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/albums" }),
});
const library = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/library" }),
});

export const collections = { tunes, albums, library };
