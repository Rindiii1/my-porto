"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkle, Code2 } from "lucide-react";
import { personal } from "@/lib/portfolio-data";
import { OutlineText } from "./OutlineText";
import { Badge } from "./Badge";

// --- KUMPULAN LOGO SVG ---
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full">
    <path fill="#fff" d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zm0 166.4c-42.2 0-76.4-34.2-76.4-76.4S47.8 13.6 90 13.6s76.4 34.2 76.4 76.4-34.2 76.4-76.4 76.4zm-16.3-104.3l34.8 53.7V62.1h10.3v65.7h-8.4l-36.8-56.3v56.3h-10.3V62.1h10.4z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" className="w-full h-full">
    <path fill="#f24e1e" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#ff7262" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
    <path fill="#1abcfe" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#a259ff" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="#38bdf8" className="w-full h-full">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

const BootstrapIcon = () => (
  <svg viewBox="0 0 16 16" fill="#7952b3" className="w-full h-full">
    <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM5.365 5.115c-.413 0-.687.25-.687.72 0 .47.274.72.687.72h1.769v-1.44H5.365Zm2.598-1.256h-2.6v2.96h2.584c.82 0 1.258-.456 1.258-1.12 0-.68-.466-1.12-1.242-1.12ZM5.365 8.163c-.413 0-.687.25-.687.72 0 .47.274.72.687.72h1.9v-1.44H5.365Zm2.83 2.923H5.364V9.66h2.83c.966 0 1.472.502 1.472 1.253 0 .736-.5 1.254-1.472 1.254Zm.182-5.744c1.194.032 1.95.736 1.95 1.76 0 .807-.5 1.43-1.168 1.63v.065c.808.136 1.442.834 1.442 1.838 0 1.226-.95 1.97-2.32 1.97H3.6V3.882h3.332c1.23 0 2.062.616 2.146 1.46Z" />
  </svg>
);

const ShadcnIcon = () => (
  <svg viewBox="0 0 256 256" fill="none" className="w-full h-full">
    <path d="M208 48L48 208" stroke="#fff" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- KOMPONEN BADGE ORBIT (HANYA LOGO) ---
const TechBadge = ({
  label,
  icon,
  color,
  startAngle,
  radius,
  duration,
  direction,
}: {
  label: string;
  icon: React.ReactNode;
  color: string;
  startAngle: number;
  radius: number;
  duration: number;
  direction: "cw" | "ccw";
}) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ transform: `rotate(${startAngle}deg)` }}
    >
      <div
        className="absolute"
        style={{ transform: `translateY(-${radius}px)` }}
        title={label} // Tooltip bawaan saat di-hover
      >
        {/* Counter-rotate agar logo tidak terbalik saat memutar */}
        <motion.div
          animate={{
            rotate:
              direction === "cw"
                ? [-startAngle, -startAngle - 360]
                : [-startAngle, -startAngle + 360],
          }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-ink/90 backdrop-blur-md border border-white/10 shadow-xl group hover:scale-110 transition-transform cursor-pointer"
          style={{ boxShadow: `0 4px 20px ${color}25` }}
        >
          {/* Wadah Icon yang diperbesar */}
          <div className="relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
            {icon}
            <div 
              className="absolute inset-0 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" 
              style={{ backgroundColor: color, zIndex: -1 }} 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-4 items-center">
          
          {/* Left: name + tagline + CTAs */}
          <div className="md:col-span-7 space-y-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Badge variant="amber" size="sm" className="rounded-full">
                <Code2 size={12} className="mr-1" />
                Frontend Developer
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
              Hello, I&rsquo;m <span className="text-amber italic">Rindi Fadilah</span>.
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

          {/* Right: Rotating Tech Stack Orbit */}
          <div className="md:col-span-5 relative h-[400px] md:h-[450px] flex items-center justify-center mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute scale-80 sm:scale-95 lg:scale-100 flex items-center justify-center"
            >
              {/* Center Core Logo (Inisial R) */}
              <div className="relative z-20 w-24 h-24 rounded-full bg-ink backdrop-blur-md border border-amber/40 shadow-[0_0_30px_rgba(240,165,0,0.25)] flex items-center justify-center">
                <Sparkle className="absolute top-3 right-3 text-amber w-4 h-4" />
                <span className="font-display italic text-amber text-5xl font-bold pr-1">
                  R.
                </span>
                {/* Subtle pulse behind the core */}
                <div className="absolute -inset-2 rounded-full border border-amber/20 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
              </div>

              {/* Inner Orbit (Berputar Searah Jarum Jam) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-cream/15 border-dashed flex items-center justify-center"
                style={{ width: "240px", height: "240px" }}
              >
                <TechBadge icon={<ReactIcon />} label="React" color="#61DAFB" startAngle={0} radius={120} duration={25} direction="cw" />
                <TechBadge icon={<NextIcon />} label="Next.js" color="#FFFFFF" startAngle={120} radius={120} duration={25} direction="cw" />
                <TechBadge icon={<FigmaIcon />} label="Figma" color="#F24E1E" startAngle={240} radius={120} duration={25} direction="cw" />
              </motion.div>

              {/* Outer Orbit (Berputar Berlawanan Jarum Jam) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-cream/10 border-dashed flex items-center justify-center"
                style={{ width: "380px", height: "380px" }}
              >
                <TechBadge icon={<TailwindIcon />} label="Tailwind CSS" color="#38B2AC" startAngle={0} radius={190} duration={35} direction="ccw" />
                <TechBadge icon={<ShadcnIcon />} label="Shadcn UI" color="#FAFAFA" startAngle={120} radius={190} duration={35} direction="ccw" />
                <TechBadge icon={<BootstrapIcon />} label="Bootstrap" color="#7952B3" startAngle={240} radius={190} duration={35} direction="ccw" />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Black tagline bar */}
      <div className="relative bg-ink text-cream-text z-20 mt-auto">
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