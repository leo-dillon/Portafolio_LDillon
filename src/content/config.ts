import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  schema: z.object({
    title: z.string(),
    // slug: z.string(),
    tech: z.array(z.string()),
    github: z.string().url(),
    images: z.array(z.object({
      url: z.string(),
      alt: z.string(),
      caption: z.string()
    }))
  })
});

export const collections = {
  proyectos
};