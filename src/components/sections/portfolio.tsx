"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Palette,
  Code2,
  Sparkle,
  Shirt,
  Mountain,
  UtensilsCrossed,
  Cpu,
  Fingerprint,
  LineChart,
  Salad,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/portfolio/Badge";
import { StarAccent } from "@/components/portfolio/StarAccent";
import type { Project, ProjectRole } from "@/types";

const projects: Project[] = [
  {
    id: "washwish",
    title: "WashWish",
    category: "Online Laundry Platform",
    roles: ["UI/UX Design"],
    image: "/WashWish.png",
    description:
      "An online laundry service platform designed to provide seamless ordering and tracking for busy professionals and students in Semarang.",
    tools: ["Figma", "Design System", "Wireframing", "Prototyping"],
    tags: ["Figma", "Design System"],
    createdAt: new Date(),
  },
  {
    id: "situ-gumuda",
    title: "Situ Gumuda",
    category: "Tourism & Information Website",
    roles: ["UI/UX Design", "Frontend Development"],
    image: "/SiTugu.png",
    description:
      "A digital survey management system for BPS Semarang City, facilitating survey creation and mass data entry via Excel.",
    tools: ["Figma", "React", "Next.js", "Tailwind CSS"],
    tags: ["Next.js", "Tailwind CSS"],
    createdAt: new Date(),
  },
  {
    id: "restaurant-reservation",
    title: "Restaurant Reservation System",
    category: "Restaurant Management",
    roles: ["UI/UX Design", "Frontend Development"],
    image: "/ReservasiRestaurant.png",
    description:
      "A comprehensive restaurant reservation platform featuring table management, menu ordering, and payment gateways for admins, owners, and customers.",
    tools: ["Figma", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["Next.js", "TypeScript"],
    createdAt: new Date(),
  },
  {
    id: "technora",
    title: "Technora",
    category: "Technology Platform",
    roles: ["UI/UX Design"],
    image: "/technora.png",
    description:
      "An AgriTech early warning system designed to monitor, predict, and mitigate agricultural pest risks preventively.",
    tools: ["Figma", "User Research", "Prototyping"],
    tags: ["Figma", "Prototyping"],
    createdAt: new Date(),
  },
  {
    id: "digi-id",
    title: "Digi.id",
    category: "Digital Identity Platform",
    roles: ["UI/UX Design", "Frontend Development"],
    image: "/digi_id.png",
    description:
      "A secure digital identity wallet platform utilizing encryption-decryption technology to protect sensitive public data.",
    tools: ["Figma", "React", "Next.js", "Tailwind CSS"],
    tags: ["Next.js", "Accessibility"],
    createdAt: new Date(),
  },
  {
    id: "early-warning-system",
    title: "Early Warning System",
    category: "Academic Monitoring Dashboard",
    roles: ["UI/UX Design", "Frontend Development"],
    image: "/EWS_mockup.png",
    description:
      "An academic monitoring dashboard extending the STI website to comprehensively track student achievements, graduation status, and academic risks.",
    tools: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    tags: ["Next.js", "TypeScript", "Chart.js", "Dashboard"],
    createdAt: new Date(),
  },
  {
    id: "nutrishare",
    title: "NutriShare",
    category: "Nutrition & Health Platform",
    roles: ["UI/UX Design"],
    image: "/Nutrishare.png",
    description:
      "A food-sharing platform bridging restaurants with surplus edible food to communities in need to reduce food waste.",
    tools: ["Figma", "User Flow", "Wireframing", "Prototyping"],
    tags: ["Figma", "User Flow"],
    createdAt: new Date(),
  },
];

// Per-project visual marker (icon + accent color). Used as a fallback
// whenever a project has no thumbnail image (e.g. image not set or fails to load).
const projectVisuals: Record<
  string,
  { icon: React.ComponentType<{ className?: string; size?: number }>; accent: string }
> = {
  washwish: { icon: Shirt, accent: "bg-amber" },
  "situ-gumuda": { icon: Mountain, accent: "bg-rust" },
  "restaurant-reservation": { icon: UtensilsCrossed, accent: "bg-amber" },
  technora: { icon: Cpu, accent: "bg-rust" },
  "digi-id": { icon: Fingerprint, accent: "bg-amber" },
  "early-warning-system": { icon: LineChart, accent: "bg-rust" },
  nutrishare: { icon: Salad, accent: "bg-amber" },
};

// Some source screenshots have dark/black borders around the mockup itself.
// Scale those specific thumbnails up a bit so the crop hides the border
// instead of showing it. Default is 1 (no extra zoom).
const projectImageZoom: Record<string, number> = {
  washwish: 1.35,
};

const categories: Array<"All" | ProjectRole> = [
  "All",
  "UI/UX Design",
  "Frontend Development",
];

function RoleBadge({ role }: { role: ProjectRole }) {
  const isDesign = role === "UI/UX Design";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
        isDesign ? "bg-amber text-ink" : "bg-ink text-cream"
      }`}
    >
      {isDesign ? (
        <Palette className="w-2.5 h-2.5" />
      ) : (
        <Code2 className="w-2.5 h-2.5" />
      )}
      {role}
    </span>
  );
}

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<"All" | ProjectRole>("All");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.roles.includes(activeTab));

  return (
    <section
      id="portfolio"
      className="section-cream bg-paper relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 border-t border-ink/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Badge variant="outline" size="sm" className="mb-5">
            <Sparkle size={10} className="text-amber" />
            Selected work
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-ink leading-[0.95]">
            <span className="text-rust italic">Projects</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm md:text-base text-ink/70 leading-relaxed">
            A collection of projects I have designed and developed, ranging from
            UI/UX design, frontend development, to complete digital product
            experiences.
          </p>
          <div className="mt-5 h-1 w-16 rounded-full bg-ink" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative whitespace-nowrap text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-ink text-cream shadow-md"
                    : "text-ink/60 hover:text-ink hover:bg-ink/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Project grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const visual =
                projectVisuals[project.id] ?? {
                  icon: Wrench,
                  accent: "bg-amber",
                };
              const Icon = visual.icon;
              const showImage = !!project.image && !failedImages[project.id];
              const zoom = projectImageZoom[project.id] ?? 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                  className="h-full"
                >
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-cream-deep/40 shadow-sm hover:shadow-2xl hover:border-amber/30 transition-all duration-300"
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex h-full flex-col"
                    >
                      {/* Thumbnail: real image if provided and loads, themed placeholder otherwise */}
                      <div className="relative h-48 bg-forest overflow-hidden">
                        {showImage ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            onError={() =>
                              setFailedImages((prev) => ({
                                ...prev,
                                [project.id]: true,
                              }))
                            }
                            style={
                              {
                                "--zoom": zoom,
                                "--zoom-hover": zoom * 1.05,
                              } as React.CSSProperties
                            }
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 scale-[var(--zoom)] group-hover:scale-[var(--zoom-hover)]"
                          />
                        ) : (
                          <>
                            <span
                              aria-hidden
                              className="absolute inset-0 grid place-items-center font-display font-bold text-[8rem] text-amber/15 select-none transition-transform duration-700 group-hover:scale-110"
                              style={{
                                WebkitTextStroke: "1px rgba(240, 165, 0, 0.4)",
                                color: "transparent",
                              }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="absolute inset-0 grid place-items-center">
                              <Icon className="w-12 h-12 text-amber/80 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                          </>
                        )}
                        <StarAccent
                          size={12}
                          className="absolute top-3 left-3 text-amber/80"
                        />

                        {/* Expand button */}
                        <motion.div
                          whileHover={{ rotate: 45, scale: 1.1 }}
                          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-cream text-ink ring-1 ring-ink/10 group-hover:ring-amber transition-all"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.div>

                        {/* Category badge */}
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-amber text-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider max-w-[80%] truncate">
                          {project.category}
                        </span>
                      </div>

                      {/* Body */}
                      <div className="flex flex-1 flex-col p-5">
                        <h4 className="font-display font-bold text-lg text-ink group-hover:text-rust transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-xs text-ink/70 mt-2 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Role badges */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.roles.map((role) => (
                            <RoleBadge key={role} role={role} />
                          ))}
                        </div>

                        {/* Tools */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.tools.slice(0, 4).map((tool) => (
                            <span
                              key={tool}
                              className="inline-flex items-center rounded-full border border-ink/10 bg-cream/70 px-2.5 py-0.5 text-[10px] font-semibold text-ink/75"
                            >
                              {tool}
                            </span>
                          ))}
                          {project.tools.length > 4 && (
                            <span className="inline-flex items-center rounded-full border border-ink/10 bg-cream/70 px-2.5 py-0.5 text-[10px] font-semibold text-ink/55">
                              +{project.tools.length - 4}
                            </span>
                          )}
                        </div>

                        {/* View Project button */}
                        <div className="mt-5 pt-4 border-t border-dashed border-ink/15 flex items-center justify-between">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/50 group-hover:text-ink/80 transition-colors">
                            View Project
                          </span>
                          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream group-hover:bg-amber group-hover:text-ink transition-colors duration-300">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state if filter has no match */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-ink/60 mt-12"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}