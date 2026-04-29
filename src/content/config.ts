import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    orcidId: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titlePt: z.string().optional(),
    date: z.coerce.date(),
    summary: z.string(),
    summaryPt: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { publications, news };
