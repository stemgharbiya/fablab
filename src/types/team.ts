export interface TeamMember {
  slug: string;
  name: string;
  type: "engineer" | "member";
  position: string;
  image: string;
  bio?: string;
  workYears?: {
    start: number;
    end?: number;
    current?: boolean;
  };
  seniorYear?: number;
  expertise: string[];
  contact: {
    email?: string;
    website?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
  };
}
