"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Sparkle,
  Briefcase,
} from "lucide-react";
import { personal, compactExperience } from "@/lib/portfolio-data";
import { StarAccent } from "./StarAccent";
import { Badge } from "./Badge";
import type { CompactExperience } from "@/types";

function ExperienceRow({ item }: { item: CompactExperience }) {
  return (
    <motion.li
      whileHover={{ x: 2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex gap-3 pl-6 py-3"
    >
      {/* Vertical timeline rail */}
      <span
        aria-hidden
        className="absolute left-[7px] top-5 bottom-0 border-l border-dashed border-ink/20"
      />
      {/* Timeline dot */}
      <span
        aria-hidden
        className="absolute left-0 top-4 grid h-3.5 w-3.5 place-items-center rounded-full bg-rust ring-2 ring-cream transition-colors duration-300 group-hover:bg-amber"
      />
      <div className="flex-shrink-0 relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-ink/10 bg-cream-deep/60">
        <Image
          src={item.logo}
          alt={item.organization}
          fill
          sizes="40px"
          className="object-contain p-1"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-bold text-[13px] text-ink leading-snug group-hover:text-rust transition-colors duration-300">
          {item.organization}
        </h4>
        <p className="text-[11px] text-ink/75 mt-0.5 font-medium">
          {item.position}
        </p>
        <p className="text-[10px] text-ink/50 mt-0.5 uppercase tracking-wider">
          {item.period}
        </p>
        {item.skills.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-ink/10 bg-cream-deep/60 px-2 py-0.5 text-[9px] font-semibold text-ink/75"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-cream bg-paper relative overflow-hidden py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: text + Journey & Experience card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <Badge variant="outline" size="sm" className="mb-6">
              <Sparkle size={10} className="text-amber" />
              About me
            </Badge>
            <h2 className="font-display font-bold leading-[0.95] text-5xl md:text-7xl text-ink">
              Get to know{" "}
              <span className="italic text-rust">me</span>.
            </h2>
            <p className="mt-6 max-w-lg text-base text-ink/70 leading-relaxed">
              {personal.bio}
            </p>

            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-rust text-cream px-5 py-2.5 text-sm font-semibold hover:bg-rust-soft transition-colors"
            >
              <Search className="w-4 h-4" />
              linkedin.com/in/rindi-fadilah-
            </Link>

            {/* Journey & Experience scrollable card */}
            <div
              id="experience"
              className="mt-10 scroll-mt-28"
            >
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-3.5 h-3.5 text-amber" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber">
                  Journey &amp; Experience
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-amber/50 to-transparent" />
              </div>

              <div
                className="relative overflow-y-auto rounded-2xl border border-ink/10 bg-cream-deep/40 shadow-sm hover:shadow-md transition-shadow [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber/50 hover:[&::-webkit-scrollbar-thumb]:bg-amber"
                style={{
                  maxHeight: "360px",
                  scrollBehavior: "smooth",
                }}
              >
                <ol className="relative px-4 py-4 space-y-1">
                  {compactExperience.map((item) => (
                    <ExperienceRow
                      key={item.id}
                      item={item}
                    />
                  ))}
                  {/* Hide the rail below the last item by clearing the bottom */}
                  <style>{`
                    #experience ol > li:last-child > span[aria-hidden]:first-of-type {
                      display: none;
                    }
                  `}</style>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Right: photo + contact box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 relative"
          >
            <div className="relative">
              {/* Background green panel */}
              <div className="absolute -inset-4 rounded-[2rem] bg-forest" />
              {/* Cream circle accent */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-cream-deep z-0" />
              <StarAccent
                size={28}
                className="absolute -top-5 -left-5 text-amber z-10 animate-float-slow"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/photosection1.jpeg"
                  alt={personal.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>

              {/* Floating pill badges */}
              <div className="absolute -left-6 top-10 rounded-full bg-amber text-ink px-4 py-2 shadow-lg rotate-[-4deg]">
                <div className="text-[10px] uppercase tracking-widest opacity-70">
                  Born
                </div>
                <div className="text-xs font-bold">{personal.birthday}</div>
              </div>
              <div className="absolute -right-3 bottom-16 rounded-full bg-rust text-cream px-4 py-2 shadow-lg rotate-[3deg]">
                <div className="text-[10px] uppercase tracking-widest opacity-80">
                  {personal.nationality}
                </div>
              </div>
            </div>

            {/* Contact box */}
            <div className="relative mt-6 rounded-2xl bg-ink text-cream-text p-5 space-y-3">
              <div className="font-display font-bold text-sm tracking-wide">
                Contact
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-xs opacity-90 hover:opacity-100"
              >
                <Mail className="w-4 h-4 text-amber" />
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-3 text-xs opacity-90 hover:opacity-100"
              >
                <Phone className="w-4 h-4 text-amber" />
                {personal.phone}
              </a>
              <div className="flex items-center gap-3 text-xs opacity-90">
                <MapPin className="w-4 h-4 text-amber" />
                {personal.location}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
