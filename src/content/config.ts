import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().default('Imagen de la Carrera Cinturón Verde'),
  }),
});

export const collections = { blog };