import { slug } from "github-slugger";
import type { TeamMember } from "../types/team";
import { SITE_CONFIG } from "../data/constants";
import teamMembersRaw from "../data/team.json";
import engineersRaw from "../data/engineers.json";

const teamMembers = teamMembersRaw as unknown as TeamMember[];
const engineers = engineersRaw as unknown as TeamMember[];

export const allTeamPeople: TeamMember[] = [...engineers, ...teamMembers];

// Slugify author names for consistent URLs
export function getAuthorId(person: TeamMember): string {
  return slug(person.name).replace(/-/g, "_");
}

// Get primary URL
export function getPrimaryUrl(person: TeamMember): string | undefined {
  // Find the first contact URL (excluding email)
  for (const [key, value] of Object.entries(person.contact ?? {})) {
    if (key !== "email" && value && value.trim()) {
      return value.trim();
    }
  }
  // Fallback to author page
  return `${SITE_CONFIG.site}${SITE_CONFIG.base}/blog/authors/${slug(
    person.name,
  ).replace(/-/g, "_")}/`;
}

// Generate authors object for blog integration
export function getBlogAuthors() {
  const authors: Record<
    string,
    { name: string; title: string; picture: string; url?: string }
  > = {};

  const getAuthorImage = (image: string): string => {
    return image.replace("../assets/team/", "./src/assets/team/");
  };

  allTeamPeople.forEach((person) => {
    authors[slug(person.name).replace(/-/g, "_")] = {
      name: person.name,
      title: person.position, // position becomes 'title' in authors
      picture: getAuthorImage(person.image),
      url: getPrimaryUrl(person), // First social media URL
    };
  });

  return authors;
}
