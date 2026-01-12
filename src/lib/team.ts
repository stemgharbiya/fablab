import { slug } from "github-slugger";
import type { TeamMember, TeamData } from "../types/team";
import { SITE_CONFIG } from "../data/constants";
import teamDataRaw from "../data/team.json";

const teamData = teamDataRaw as unknown as TeamData;

export const allTeamPeople: TeamMember[] = [
  ...teamData.engineers,
  ...teamData.members,
];

// Slugify author names for consistent URLs
export function getAuthorSlug(person: TeamMember): string {
  return slug(person.name);
}

// Get primary URL
export function getPrimaryUrl(person: TeamMember): string | undefined {
  // Find the first contact URL (excluding email)
  for (const [key, value] of Object.entries(person.contact)) {
    if (key !== "email" && value && value.trim()) {
      return value.trim();
    }
  }
  // Fallback to author page
  return `${SITE_CONFIG.site}${SITE_CONFIG.base}/blog/authors/${getAuthorSlug(
    person
  )}/`;
}

// Generate authors object for blog integration
export function getBlogAuthors() {
  const authors: Record<
    string,
    { name: string; title: string; picture: string; url?: string }
  > = {};

  allTeamPeople.forEach((person) => {
    authors[slug(person.name)] = {
      name: person.name,
      title: person.position, // position becomes 'title' in authors
      picture: `/assets/team/${person.image}`,
      url: getPrimaryUrl(person), // First social media URL
    };
  });

  return authors;
}
