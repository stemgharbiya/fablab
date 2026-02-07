import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "starlight-blog/schema";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const team = defineCollection({
  loader: file("src/data/team.json"),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      name: z.string(),
      type: z.literal("member"),
      position: z.string(),
      image: image(),
      bio: z.string().optional(),
      seniorYear: z.number().optional(),
      expertise: z.array(z.string()),
      contact: z.object({
        email: z.string().email().optional(),
        github: z.string().url().optional(),
        website: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        instagram: z.string().url().optional(),
        whatsapp: z.string().url().optional(),
      }),
    }),
});

const engineers = defineCollection({
  loader: file("src/data/engineers.json"),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      name: z.string(),
      type: z.literal("engineer"),
      position: z.string(),
      image: image(),
      bio: z.string(),
      workYears: z
        .object({
          start: z.number(),
          end: z.number().optional(),
          current: z.boolean().optional(),
        })
        .optional(),
      expertise: z.array(z.string()),
      contact: z.object({
        email: z.string().email().optional(),
        github: z.string().url().optional(),
        website: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        instagram: z.string().url().optional(),
        whatsapp: z.string().url().optional(),
      }),
    }),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
  team,
  engineers,
};
