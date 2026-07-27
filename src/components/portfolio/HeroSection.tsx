"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "lucide-react";
import { personal } from "@/lib/portfolio-data";
import { OutlineText } from "./OutlineText";
import { Badge } from "./Badge";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section-forest relative overflow-hidden min-h-[90vh] flex flex-col"
    >
      {/* Decorative outline repetitions in the background */}
      <OutlineText
        text="PORTFOLIO"
        color="amber"
        className="font-display text-[18vw] md:text-[14rem] leading-none top-[18%] -right-[8%] -rotate-6 opacity-30 hidden md:block"
        strokeWidth={1.5}
      />
      <OutlineText
        text="PORTFOLIO"
        color="cream"
        className="font-display text-[14rem] leading-none -top-10 -left-20 opacity-15 hidden md:block"
        strokeWidth={1}
      />

      {/* Hero content */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 md:pt-36 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left: name + tagline + CTAs */}
          <div className="md:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Badge variant="amber" size="sm" className="rounded-full">
                <Sparkle size={10} />
                Portfolio 2025
              </Badge>
              <span className="text-xs uppercase tracking-[0.25em] opacity-70">
                {personal.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-6xl md:text-8xl leading-[0.95] text-cream-text"
            >
              Hello, I&rsquo;m <span className="text-amber italic">Rindi</span>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-amber text-ink px-6 py-3 text-sm font-semibold hover:bg-amber-soft transition-colors"
              >
                View my work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream-text px-6 py-3 text-sm font-semibold hover:bg-cream/10 transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          {/* Right: landscape-crop profile (different framing than About) */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[16/11] w-full max-w-md mx-auto">
              {/* Background panel */}
              <div className="absolute -inset-3 rounded-3xl bg-amber/20 -rotate-3" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-rust/40 blur-sm" />

              {/* Profile image with duotone treatment and landscape crop */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl ring-1 ring-cream/10">
                <Image
                  src="/mygue.jpeg"
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover"
                  style={{
                    filter: "sepia(0.4) hue-rotate(-15deg) saturate(1.2)",
                    objectPosition: "center 25%",
                  }}
                />
                {/* Rust color overlay */}
                <div className="absolute inset-0 bg-rust/35 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black tagline bar */}
      <div className="relative bg-ink text-cream-text">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center gap-4">
          <Sparkle size={14} className="text-amber" />
          <p className="font-display italic text-base md:text-lg">
            &ldquo;{personal.tagline}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
