import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

import hobbiesData from '@/data/hobbies';
import portfolioData from '@/data/portfolio';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/case-studies' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    image: image(),
  }),
});

const hobbies = defineCollection({
  loader: () => {
    return hobbiesData.map((item, i) => ({ id: String(i), ...item }));
  },
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
  }),
});

const portfolio = defineCollection({
  loader: () => {
    return portfolioData.map((item, i) => ({ id: String(i), ...item }));
  },
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    codeUrl: z.string().url().optional(),
    appUrl: z.string().url().optional(),
    image: image(),
  }),
});

export const collections = { caseStudies, hobbies, portfolio };
