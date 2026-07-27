"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  Brush,
  GitBranch,
  Send,
  Layers,
  Sparkle,
  Server,
} from "lucide-react";
import { Badge } from "./Badge";

type Tool = {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
};

type ToolGroup = {
  title: string;
  tools: Tool[];
};

const toolGroups: ToolGroup[] = [
  {
    title: "Frontend Development",
    tools: [
      { name: "Next.js", icon: Atom },
      { name: "React.js", icon: Atom },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind CSS", icon: Braces },
      { name: "Laravel", icon: Server },
    ],
  },
  {
    title: "Design & Productivity",
    tools: [
      { name: "Figma", icon: Brush },
      { name: "VS Code", icon: Code2 },
      { name: "GitHub", icon: GitBranch },
      { name: "Postman", icon: Send },
      { name: "Notion", icon: Layers },
    ],
  },
];

// Split skills into two rows so each marquee runs in the opposite direction.
const skillsRow1 = [
  "UI/UX Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Frontend Development",
  "Responsive Design",
  "Accessibility",
  "API Integration",
];

const skillsRow2 = [
  "State Management",
  "Reusable Components",
  "Dashboard Design",
  "Landing Page Design",
  "Mobile First Design",
  "Performance Optimization",
  "Problem Solving",
  "Team Collaboration",
];

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  // Duplicate the list so the loop is seamless (the keyframe moves -50%, which
  // requires a doubled set of items inside the track).
  const repeated = [...items, ...items];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee";
  return (
    <div className="relative w-full overflow-hidden pause-on-hover">
      {/* Edge fade masks so pills appear to enter/leave gracefully */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
        style={{
          background:
            "linear-gradient(to right, var(--color-forest) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
        style={{
          background:
            "linear-gradient(to left, var(--color-forest) 0%, transparent 100%)",
        }}
      />
      <div
        className={`flex w-max gap-3 ${animClass}`}
        style={{ animationDuration: "45s" }}
      >
        {repeated.map((skill, i) => (
          <span
            key={`${direction}-${i}-${skill}`}
            className="group/skill inline-flex items-center rounded-full border border-amber/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-cream-text whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-amber hover:text-forest hover:border-amber hover:shadow-[0_0_24px_-4px_rgba(240,165,0,0.6)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-amber/25 bg-white/[0.04] backdrop-blur-md p-4 transition-all duration-300 hover:border-amber/60 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_-8px_rgba(240,165,0,0.5)]"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber/10 text-amber transition-all duration-300 group-hover:bg-amber group-hover:text-forest group-hover:shadow-[0_0_18px_-2px_rgba(240,165,0,0.7)]">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-xs font-semibold text-cream-text/90 group-hover:text-cream-text transition-colors">
        {tool.name}
      </div>
    </motion.div>
  );
}

export default function ToolkitSection() {
  return (
    <section
      id="toolkit"
      className="section-forest relative overflow-hidden py-20 md:py-28"
    >
      {/* Decorative outline text "TOOLKIT" sits behind the content, very low opacity */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-bold select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          lineHeight: 0.85,
          WebkitTextStroke: "1px rgba(240, 165, 0, 0.35)",
          color: "transparent",
          opacity: 0.06,
        }}
      >
        TOOLKIT
      </span>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <Badge variant="outline-cream" size="sm" className="mb-5">
            <Sparkle size={10} className="text-amber" />
            Toolkit
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[0.95]">
            My <span className="text-amber italic">Toolkit</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm md:text-base text-cream-text/70 leading-relaxed">
            The technologies, tools, and expertise I use to transform ideas
            into meaningful digital experiences.
          </p>
          <div className="mt-5 h-1 w-16 rounded-full bg-amber" />
        </motion.div>

        {/* Two-column layout: stacks on mobile, side-by-side on md+ */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: Tool Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-amber/20 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)]">
              {/* Subtle inner highlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(240,165,0,0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">
                    Tool Stack
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-amber/40 to-transparent" />
                </div>

                <div className="space-y-6">
                  {toolGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-text/55 mb-3">
                        {group.title}
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {group.tools.map((tool) => (
                          <ToolCard key={tool.name} tool={tool} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Skill & Expertise marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">
                Skill &amp; Expertise
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-amber/40 to-transparent" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-amber/20 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)] flex-1 flex flex-col gap-5 justify-center">
              <MarqueeRow items={skillsRow1} direction="left" />
              <MarqueeRow items={skillsRow2} direction="right" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
