// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://stemgharbiya.github.io",
  base: "/fablab",
  trailingSlash: "always",

  integrations: [
    starlight({
      title: "Gharbiya FabLab",
      plugins: [
        starlightLinksValidator(),
        starlightThemeNova({
          nav: [
            { label: "Home", href: "/fablab/" },
            { label: "About", href: "/fablab/fablab-info/" },
            { label: "Blog", href: "/fablab/blog/" },
            { label: "Team", href: "/fablab/team/fablab-team-members/" },
          ],
        }),
        starlightBlog({
          metrics: {
            readingTime: true,
            words: "total",
          },

          authors: {
            saifabdelrazek: {
              name: "Saif Abdelrazek",
              title: "FabLab Gharbia Developer",
              picture: "/saifabdelrazek.jpg",
              url: "https://saifabdelrazek.com",
            },
          },
        }),
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/stemgharbiya/fablab",
        },
      ],
      head: [
        // Meta tags for site verification
        {
          tag: "meta",
          attrs: {
            name: "msvalidate.01",
            content: "511C6E4BE414856821B2DE790CDEE4AC",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "google-site-verification",
            content: "7Ao6rGmOuR8vJ8hid9HCkGuqcMmH9O6eTjUEQU80p6E",
          },
        },
        // Favicon
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/fablab-logo.png",
            type: "image/svg+xml",
          },
        },
        // Umami analytics script tag
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://insights.a8k.dev/script.js",
            "data-website-id": "42658e4e-4a81-4138-8c72-bf9c64fa1575",
          },
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [{ label: "About FabLab", link: "/fablab-info" }],
        },
        {
          label: "Equipment",
          items: [
            { label: "Machine Overview", link: "/machine" },
            { label: "Software Setup", link: "/machine-software" },
            {
              label: "Machines",
              autogenerate: {
                directory: "machines",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Software & Tools",
          items: [
            { label: "FreeCAD", link: "/freecad" },
            { label: "Software Guide", link: "/software" },
          ],
        },
        {
          label: "Team & Activities",
          autogenerate: {
            directory: "team",
            collapsed: false,
          },
        },
        {
          label: "Inventory",
          autogenerate: {
            directory: "inventory",
            collapsed: true,
          },
        },
        {
          label: "Learning Resources",
          items: [
            {
              label: "All Challenges",
              autogenerate: {
                directory: "challenges",
              },
            },
          ],
        },
      ],
    }),
  ],
});
