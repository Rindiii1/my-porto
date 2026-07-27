// Personal Info
export interface PersonalInfo {
  name: string;
  email: string;
  phone?: string;
  location: string;
  linkedIn: string;
  headline: string;
  summary: string;
}

// Project types
export type ProjectRole = "UI/UX Design" | "Frontend Development";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  roles: ProjectRole[];
  tools: string[];
  image?: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  createdAt: Date;
}

// Work Experience (organization-level) with nested roles
export interface ExperienceRole {
  title: string;
  type?: string; // e.g. "Part-time" | "Full-time"
  duration: string; // e.g. "Sep 2025 - Present \u00B7 10 mos"
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  employmentType?: string; // e.g. "Internship"
  totalDuration: string; // e.g. "10 mos" / "2 yrs 10 mos"
  location: string;
  workMode: string; // e.g. "On-site" | "Hybrid" | "Remote"
  roles: ExperienceRole[];
}

// Compact experience entry for the About-section Journey & Experience card
export interface CompactExperience {
  id: string;
  organization: string;
  logo: string; // path under /public
  position: string;
  period: string;
  skills: string[];
}

// Activity highlights shown in the Journey & Experiences gallery
export interface ActivityHighlight {
  id: string;
  image: string;
  caption: string; // e.g. "MC Pembukaan HITech 2025"
  organization: string; // e.g. "HMTI UDINUS"
  roleTag: string; // e.g. "MC", "Moderator", "Promosi"
  roleIcon: string; // Lucide icon name, e.g. "Mic2", "MessageSquare", "Megaphone"
}

// Skill types
export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
