import { defineCollection, z } from 'astro:content';

import hobbiesData from '@/data/hobbies';
import portfolioData from '@/data/portfolio';

const hobbies = defineCollection({
  loader: () => {
    return hobbiesData.map((item, i) => ({ id: String(i), ...item }));
  },
  schema: z.object({
    title: z.string(),
    image: z.custom<ImageMetadata>(),
  }),
});

const portfolio = defineCollection({
  loader: () => {
    return portfolioData.map((item, i) => ({ id: String(i), ...item }));
  },
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    codeUrl: z.string().url().optional(),
    appUrl: z.string().url().optional(),
    image: z.custom<ImageMetadata>(),
  }),
});

export const collections = { hobbies, portfolio };
