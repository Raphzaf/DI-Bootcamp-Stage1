        import type { User } from "./user";
export interface Story {
  id: number;
  title: string;
  content: string;
  author: User;            // denormalized view for frontend
  contributors: User[];    // ditto
  created_at?: string;
  updated_at?: string;
}