// Editorial portfolio content data
// Components in components/portfolio/* are pure presentational and read from here.

import type { CompactExperience } from "@/types";

export type Tone = "cream" | "forest";

export const personal = {
  name: "Rindi Fadilah",
  shortName: "RINDI.F",
  role: "Frontend Developer & UI/UX Designer",
  tagline: "Crafting clean interfaces & interactive experiences with care.",
  shortTagline: "Frontend developer crafting clean, accessible interfaces with care.",
  bio: `I am an Informatics Engineering student at Universitas Dian Nuswantoro, currently working as a Frontend Developer at Bengkel Koding. I enjoy building modern web interfaces with Next.js, React, and Figma — turning ideas into thoughtful, accessible products.`,
  birthday: "2nd August",
  nationality: "Indonesian",
  location: "Semarang, Central Java, Indonesia",
  email: "rindifadilah71@gmail.com",
  phone: "+62 812 3456 7890",
  linkedin: "https://www.linkedin.com/in/rindi-fadilah-",
};

export const stats = [
  { value: "10+", label: "Projects" },
  { value: "2+", label: "Years Coding" },
  { value: "5+", label: "Organizations" },
];

export const education = [
  {
    period: "2022 - Present",
    title: "Universitas Dian Nuswantoro",
    subtitle: "Informatics Engineering \u00B7 GPA 3.8x",
  },
  {
    period: "2019 - 2022",
    title: "SMA N 1 Sragi",
    subtitle: "Science Major",
  },
];

export const experience = [
  {
    period: "Sep 2025 - Present",
    title: "Bengkel Koding",
    subtitle: "Teaching Assistant & Frontend Dev",
  },
  {
    period: "Aug 2025 - Present",
    title: "Badan Pusat Statistik",
    subtitle: "Frontend Developer (Internship)",
  },
  {
    period: "Aug 2024 - Present",
    title: "HMTI UDINUS",
    subtitle: "Bendahara Umum (Treasurer)",
  },
  {
    period: "Sep 2023 - Present",
    title: "HMTI UDINUS",
    subtitle: "Anggota Divisi IPTEK",
  },
];

// Compact experience list rendered inside the About section's
// Journey & Experience card. Logos live under /public.
export const compactExperience: CompactExperience[] = [
  {
    id: "bengkel-koding-ta",
    organization: "Bengkel Koding",
    logo: "/logobengkod.jpeg",
    position: "Teaching Assistant & Frontend Developer",
    period: "Sep 2025 \u2013 Present",
    skills: ["Laravel", "Next.js", "React.js", "TypeScript"],
  },
  {
    id: "bps-intern",
    organization: "Badan Pusat Statistik",
    logo: "/logobps.png",
    position: "Frontend Developer Intern",
    period: "Aug 2025 \u2013 Sep 2025",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    id: "hmti-treasurer",
    organization: "Himpunan Mahasiswa Teknik Informatika UDINUS",
    logo: "/logohmti.png",
    position: "General Treasurer",
    period: "Aug 2024 \u2013 Present",
    skills: ["Leadership", "Finance"],
  },
  {
    id: "hmti-iptek",
    organization: "Himpunan Mahasiswa Teknik Informatika UDINUS",
    logo: "/logohmti.png",
    position: "IPTEK Division Member",
    period: "Sep 2023 \u2013 Present",
    skills: ["React.js", "Next.js"],
  },
];

export const softSkills = [
  "#Creativity",
  "#Teamwork",
  "#Communication",
  "#Leadership",
  "#Adaptability",
  "#Time Management",
];

export const softwareSkills = [
  { name: "Figma", abbr: "Fg" },
  { name: "Photoshop", abbr: "Ps" },
  { name: "Illustrator", abbr: "Ai" },
  { name: "Premiere", abbr: "Pr" },
];

export const codingSkills = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "Figma",
];

export const workCategories = [
  "Packaging",
  "Visual design",
  "UI/UX design",
  "User Research",
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Javanese", level: "Conversational" },
];

export const hobbies = [
  { label: "Reading", icon: "BookOpen" },
  { label: "Music", icon: "Music" },
  { label: "Design", icon: "Palette" },
  { label: "Coding", icon: "Code" },
  { label: "Coffee", icon: "Coffee" },
  { label: "Travel", icon: "Plane" },
  { label: "Photography", icon: "Camera" },
  { label: "Gaming", icon: "Gamepad2" },
] as const;
