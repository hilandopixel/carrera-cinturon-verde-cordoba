import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string().optional(),
    cover: z.string(), // Imagen principal de portada
    coverAlt: z.string().default('Imagen del artículo'),
  }),
});

export const collections = { blog };