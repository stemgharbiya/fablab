export interface SiteConfig {
  name: string;
  site: string; // "https://stemgharbiya.github.io"
  base?: string; // "/fablab"
  trailingSlash: "always" | "never" | "ignore";
  title: string;
  description: string;
  contactEmail?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: "github" | "twitter" | "linkedin" | "youtube" | "discord" | "mastodon";
  label: string;
  href: string;
}

export type HeadTag = {
  tag:
    | "title"
    | "link"
    | "style"
    | "base"
    | "meta"
    | "script"
    | "noscript"
    | "template";
  attrs?: Record<string, string | boolean | undefined>;
  content?: string;
};

export interface BlogConfig {
  metrics: {
    readingTime: boolean;
    words: false | "total" | "rounded";
  };
}

type SidebarItem =
  | { label: string; link: string }
  | {
      label: string;
      autogenerate: {
        directory: string;
        collapsed?: boolean;
        attrs?: Record<string, unknown>;
      };
    };

type Sidebar = Array<
  | {
      label: string;
      items: SidebarItem[];
    }
  | {
      label: string;
      autogenerate: {
        directory: string;
        collapsed?: boolean;
        attrs?: Record<string, unknown>;
      };
    }
>;

export const SITE_CONFIG: SiteConfig = {
  name: "Gharbiya FabLab",
  site: "https://fablab.stemgh.org",
  trailingSlash: "always",
  title: "Gharbiya FabLab",
  description:
    "The digital fabrication hub of STEM Gharbiya. Discover the tools, knowledge, and student innovations that define the forefront of hands-on technical education in the region.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/fablab/fablab-info/" },
  { label: "Blog", href: "/fablab/blog/" },
  { label: "Team", href: "/fablab/team/" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/stemgharbiya/fablab",
  },
];

export const HEAD_TAGS: HeadTag[] = [
  {
    tag: "link",
    attrs: { rel: "icon", href: "/fablab/favicon-16.png", sizes: "16x16" },
  },
  {
    tag: "link",
    attrs: { rel: "icon", href: "/fablab/favicon-32.png", sizes: "32x32" },
  },
  {
    tag: "link",
    attrs: { rel: "icon", href: "/fablab/favicon-48.png", sizes: "48x48" },
  },
  {
    tag: "link",
    attrs: {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/fablab/favicon-180.png",
    },
  },
  {
    tag: "link",
    attrs: {
      rel: "shortcut icon",
      href: "/fablab/favicon.ico",
    },
  },
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
  // Umami analytics script tag
  {
    tag: "script",
    attrs: {
      defer: "true",
      src: "https://insights.a8k.dev/script.js",
      "data-website-id": "42658e4e-4a81-4138-8c72-bf9c64fa1575",
    },
  },
];

export const SIDEBAR_CONFIG: Sidebar = [
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
          attrs: {},
        },
      },
    ],
  },
  {
    label: "Software & Tools",
    items: [
      { label: "FreeCAD", link: "/freecad" },
    ],
  },
  {
    label: "Team & Activities",
    items: [
      { label: "Meet our Team", link: "/team" },
      {
        label: "Activities",
        autogenerate: {
          directory: "team",
          collapsed: false,
        },
      },
    ],
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
];

export const BLOG_CONFIG: BlogConfig = {
  metrics: {
    readingTime: true,
    words: "total",
  },
};
