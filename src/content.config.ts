import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each case study is one Markdown file in src/content/work/.
// The filename (without .md) becomes the URL slug, e.g. zed-pos.md -> /work/zed-pos
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(), // one-liner used on the home card
    order: z.number(), // controls display order (1 = first)
    featured: z.boolean().default(true),
    isPublic: z.boolean().default(true), // false => client work, no demo/repo links
    client: z.string().optional(), // pseudonymized label, e.g. "a tier-one East African bank"
    tags: z.array(z.string()),
    stack: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { work };
