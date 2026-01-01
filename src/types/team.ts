export interface TeamMember {
  name: string;
  type: "engineer" | "student";
  position: string;
  image: string;
  bio: string;
  email: string;
  workYears?: {
    start: number;
    end: number | "current";
    current?: boolean;
  };
  seniorYear?: number;
  expertise: string[];
  personalSite?: string;
  social: Record<string, string>;
}

export interface TeamData {
  engineers: TeamMember[];
  members: TeamMember[];
}
