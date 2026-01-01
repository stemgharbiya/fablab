// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";
import { getBlogAuthors } from "./src/lib/team";
import {
  SITE_CONFIG,
  NAV_ITEMS,
  SOCIAL_LINKS,
  HEAD_TAGS,
  SIDEBAR_CONFIG,
  BLOG_CONFIG,
} from "./src/data/constants";

// https://astro.build/config
export default defineConfig({
  site: SITE_CONFIG.site,
  base: SITE_CONFIG.base,
  trailingSlash: SITE_CONFIG.trailingSlash,

  integrations: [
    starlight({
      title: SITE_CONFIG.title,
      plugins: [
        starlightLinksValidator(),
        starlightThemeNova({
          nav: NAV_ITEMS,
        }),
        starlightBlog({
          ...BLOG_CONFIG,
          authors: getBlogAuthors(),
        }),
      ],
      social: SOCIAL_LINKS,
      head: HEAD_TAGS,
      sidebar: SIDEBAR_CONFIG,
    }),
  ],
});
