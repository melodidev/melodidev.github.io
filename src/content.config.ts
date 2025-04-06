import { defineCollection, z } from 'astro:content';

import hobbiesData from '@/data/hobbies';

const hobbies = defineCollection({
  loader: () => {
    return hobbiesData.map((item, i) => ({ id: String(i), ...item }));
  },
  schema: z.object({
    title: z.string(),
    image: z.custom<ImageMetadata>(),
  }),
});

export const collections = { hobbies };
