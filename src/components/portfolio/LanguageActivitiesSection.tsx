"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Music,
  Palette,
  Code,
  Coffee,
  Plane,
  Camera,
  Gamepad2,
  Sparkle,
} from "lucide-react";
import { languages, hobbies } from "@/lib/portfolio-data";
import { Badge } from "./Badge";
import { StarAccent } from "./StarAccent";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  BookOpen,
  Music,
  Palette,
  Code,
  Coffee,
  Plane,
  Camera,
  Gamepad2,
};

export default function LanguageActivitiesSection() {
  return (
    <section className="section-cream bg-paper relative overflow-hidden py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Language */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" size="sm" className="mb-5">
            <Sparkle size={10} className="text-amber" />
            Language
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-[0.95]">
            Languages I <span className="italic text-rust">speak</span>
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-ink" />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {languages.map((l) => (
            <div
              key={l.name}
              className="rounded-2xl border border-ink/10 bg-cream-deep/40 p-6"
            >
              <div className="font-display font-bold text-3xl text-ink">
                {l.name}
              </div>
              <div className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink/60">
                <StarAccent size={9} className="text-amber" />
                {l.level}
              </div>
            </div>
          ))}
        </div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Badge variant="outline" size="sm" className="mb-5">
            <Sparkle size={10} className="text-amber" />
            Hobbies &amp; Interests
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-[0.95]">
            Things I <span className="italic text-rust">love</span>
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-ink" />
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {hobbies.map((h) => {
            const Icon = iconMap[h.icon] ?? Sparkle;
            return (
              <div
                key={h.label}
                className="rounded-2xl border border-ink/10 bg-cream-deep/40 p-5 text-center"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber text-ink">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="mt-3 text-xs font-semibold text-ink uppercase tracking-widest">
                  {h.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
