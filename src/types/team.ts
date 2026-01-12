export interface TeamMember {
  name: string;
  type: "engineer" | "member";
  position: string;
  image: string;
  bio: string;
  workYears?: {
    start: number;
    end?: number;
    current?: boolean;
  };
  seniorYear?: number;
  expertise: string[];
  contact: {
    email: string;
    website: string;
    github: string;
    linkedin: string;
  };
}

export interface TeamData {
  engineers: TeamMember[];
  members: TeamMember[];
}
