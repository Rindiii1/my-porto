"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Sparkle,
  ArrowUpRight,
  Mic2,
  MessageSquare,
  Megaphone,
  Users,
  Handshake,
  Briefcase,
  Calendar,
  Tv,
  UserCheck,
} from "lucide-react";
import { Badge } from "@/components/portfolio/Badge";
import { StarAccent } from "@/components/portfolio/StarAccent";
import type { Experience, ExperienceRole, ActivityHighlight } from "@/types";

const experiences: Experience[] = [
  {
    id: "bengkel-koding",
    company: "Bengkel Koding",
    logo: "/logobengkod.jpeg",
    employmentType: "Internship",
    totalDuration: "10 mos",
    location: "Semarang, Central Java, Indonesia",
    workMode: "On-site",
    roles: [
      {
        title: "Teaching Assistant Web Developer",
        duration: "Sep 2025 - Present \u00B7 10 mos",
        skills: ["Laravel", "PHP", "Next.js", "React.js"],
      },
      {
        title: "Frontend Developer",
        duration: "Sep 2025 - Present \u00B7 10 mos",
        skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "hmti-udinus",
    company: "Himpunan Mahasiswa Teknik Informatika UDINUS",
    logo: "/logohmti.png",
    totalDuration: "2 yrs 10 mos",
    location: "Semarang, Central Java, Indonesia",
    workMode: "Hybrid",
    roles: [
      {
        title: "Anggota Divisi IPTEK",
        type: "Part-time",
        duration: "Aug 2025 - Present \u00B7 11 mos",
        skills: ["React.js", "Next.js"],
      },
      {
        title: "Bendahara Umum",
        type: "Full-time",
        duration: "Aug 2024 - Present \u00B7 1 yr 11 mos",
        skills: ["Keuangan"],
      },
      {
        title: "Anggota Aktif",
        type: "Part-time",
        duration: "Sep 2023 - Present \u00B7 2 yrs 10 mos",
        skills: ["Leadership", "Problem Solving"],
      },
    ],
  },
  {
    id: "bps",
    company: "Badan Pusat Statistik",
    logo: "/logobps.png",
    employmentType: "Internship",
    totalDuration: "2 mos",
    location: "Semarang, Central Java, Indonesia",
    workMode: "On-site",
    roles: [
      {
        title: "Frontend Developer",
        duration: "Aug 2025 - Sep 2025 \u00B7 2 mos",
        skills: ["Front-End Development", "React.js", "Tailwind CSS"],
      },
    ],
  },
];

// Activity highlights shown in the horizontal scroll carousel below the timeline.
// roleIcon is a Lucide icon name (project uses lucide-react, not Tabler).
// Tabler -> Lucide mapping: microphone -> Mic2, message-2 -> MessageSquare, speakerphone -> Megaphone.
const activityHighlights: ActivityHighlight[] = [
  {
    id: "seminar-genetic-algorithm",
    image: "/Mc acara seminar Genetic Algorithm Bengkel Koding.jpeg",
    caption: "MC Seminar Genetic Algorithm",
    organization: "Bengkel Koding",
    roleTag: "MC",
    roleIcon: "Mic2",
  },
  {
    id: "pembukaan-hitech-2025",
    image: "/foto bersama acara pembukaan hi tech.jpeg",
    caption: "Pembukaan HITEch 2025",
    organization: "HMTI UDINUS",
    roleTag: "Panitia",
    roleIcon: "Handshake",
  },
  {
    id: "mc-makrab-ti-2025",
    image: "/Mc acara konek TI atau makrab ti 2025.jpeg",
    caption: "MC Makrab TI 2025",
    organization: "HMTI UDINUS",
    roleTag: "MC",
    roleIcon: "Mic2",
  },
  {
    id: "mc-pembukaan-hitech",
    image: "/Mc pembukaan hi technology 2025.jpeg",
    caption: "MC Pembukaan HITEch 2025",
    organization: "HMTI UDINUS",
    roleTag: "MC",
    roleIcon: "Mic2",
  },
  {
    id: "moderator-lomba-hitech",
    image: "/Moderator lomba hi technology 2025.jpeg",
    caption: "Moderator Lomba HITEch 2025",
    organization: "HMTI UDINUS",
    roleTag: "Moderator",
    roleIcon: "MessageSquare",
  },
  {
    id: "promosi-it-competition",
    image: "/Moderator promosi acara hitechnology 2025 di acara it competition.jpeg",
    caption: "Promosi IT Competition",
    organization: "HMTI UDINUS",
    roleTag: "Promosi",
    roleIcon: "Megaphone",
  },
  {
    id: "moderator-wisuda-ppko",
    image: "/Moderator wisuda ppko sekolah perempuan.jpeg",
    caption: "Moderator Wisuda PPKO",
    organization: "Event Sekolah",
    roleTag: "Moderator",
    roleIcon: "MessageSquare",
  },
  {
    id: "narasumber-tvku-2025",
    image: "/Narasumber tvku 2025.jpeg",
    caption: "Narasumber TVKU 2025",
    organization: "Media",
    roleTag: "Narasumber",
    roleIcon: "Tv",
  },
  {
    id: "internship-bps",
    image: "/Internship di Badan Pusat Statistik Semarang.jpeg",
    caption: "Internship BPS Semarang",
    organization: "Badan Pusat Statistik",
    roleTag: "Internship",
    roleIcon: "Briefcase",
  },
  {
    id: "panitia-seminar-nasional",
    image: "/Panitia Seminar Nasional Teknik Informatika.jpeg",
    caption: "Panitia Seminar Nasional",
    organization: "Seminar Nasional",
    roleTag: "Panitia",
    roleIcon: "Handshake",
  },
  {
    id: "mc-agustusan-sma",
    image: "/Mc acara agustusan di sekiolah SMA N 1 SRAGI 2023.jpeg",
    caption: "MC Acara Agustusan 2023",
    organization: "SMA N 1 Sragi",
    roleTag: "MC",
    roleIcon: "Mic2",
  },
];

const roleIconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Mic2,
  MessageSquare,
  Megaphone,
  Users,
  Handshake,
  Briefcase,
  Calendar,
  Tv,
  UserCheck,
  Camera,
  Sparkle,
};

// Subtle palette per role tag for visual hierarchy.
const roleTagTone: Record<string, string> = {
  MC: "bg-amber text-ink",
  Moderator: "bg-rust text-cream",
  Promosi: "bg-amber-soft text-ink",
  Panitia: "bg-cream text-ink",
  Narasumber: "bg-rust text-cream",
  Internship: "bg-amber text-ink",
  Host: "bg-amber text-ink",
  Speaker: "bg-rust text-cream",
};

function roleTagClass(tag: string) {
  return roleTagTone[tag] ?? "bg-cream text-ink";
}

function RoleItem({ role, isLast }: { role: ExperienceRole; isLast: boolean }) {
  return (
    <div className="relative pl-7">
      {/* Vertical connector line */}
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-[7px] top-3 bottom-[-1.25rem] border-l border-dashed border-ink/25"
        />
      )}
      {/* Dot */}
      <span
        aria-hidden
        className="absolute left-0 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-amber ring-2 ring-cream"
      />
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <h5 className="font-display font-bold text-[15px] text-ink leading-snug">
          {role.title}
        </h5>
        {role.type && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">
            \u00B7 {role.type}
          </span>
        )}
      </div>
      <p className="text-[11px] text-ink/55 mt-0.5">{role.duration}</p>
      {role.skills.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full bg-cream-deep/70 border border-ink/10 px-2.5 py-0.5 text-[10px] font-semibold text-ink/80"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrganizationsSection() {
  return (
    <section
      id="organizations"
      className="section-forest relative overflow-hidden py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Badge variant="outline-cream" size="sm" className="mb-5">
            <Sparkle size={10} className="text-amber" />
            Experience
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-cream-text leading-[0.95]">
            Journey &amp; <span className="text-amber italic">Experiences</span>
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-amber" />
        </motion.div>

        {/* Timeline-style list of organization cards */}
        <ol className="relative md:pl-7">
          <span
            aria-hidden
            className="absolute left-[5px] top-3 bottom-3 border-l border-dashed border-cream/30 hidden md:block"
          />
          {experiences.map((exp, i) => {
            const dot = i % 2 === 0 ? "bg-amber" : "bg-rust";
            const badge =
              i % 2 === 0 ? "bg-amber text-ink" : "bg-rust text-cream";
            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative mb-6 last:mb-0"
              >
                <span
                  className={`absolute -left-7 top-1/2 -translate-y-1/2 hidden md:grid h-3.5 w-3.5 place-items-center rounded-full ring-4 ring-forest ${dot}`}
                >
                  <StarAccent size={8} className="text-ink" />
                </span>

                <span
                  aria-hidden
                  className="absolute -left-[18px] top-1/2 -translate-y-1/2 h-px w-[18px] border-t border-dashed border-cream/40 hidden md:block"
                />

                <article className="group rounded-2xl bg-cream border border-ink/10 p-4 sm:p-5 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex gap-4 items-start">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-ink/10 bg-cream-deep/40">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        sizes="80px"
                        className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${badge}`}
                        >
                          {exp.totalDuration}
                        </span>
                        {exp.employmentType && (
                          <span className="inline-block rounded-full border border-ink/15 bg-cream-deep/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink/70">
                            {exp.employmentType}
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-lg text-ink mt-2 group-hover:text-rust transition-colors">
                        {exp.company}
                      </h4>
                      <p className="text-[11px] text-ink/55 mt-0.5">
                        {exp.location} \u00B7 {exp.workMode}
                      </p>
                    </div>
                  </div>

                  {exp.roles.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-dashed border-ink/15 space-y-5">
                      {exp.roles.map((role, idx) => (
                        <RoleItem
                          key={`${exp.id}-${role.title}-${idx}`}
                          role={role}
                          isLast={idx === exp.roles.length - 1}
                        />
                      ))}
                    </div>
                  )}
                </article>
              </motion.li>
            );
          })}
        </ol>

        {/* Activity Highlights - horizontal scroll carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <Badge
              variant="outline-cream"
              size="sm"
              className="mb-4 inline-flex"
            >
              <Camera className="w-3 h-3 text-amber" />
              Gallery
            </Badge>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-cream-text">
              Activity <span className="text-amber italic">Highlights</span>
            </h3>
            <p className="mt-3 text-xs text-cream-text/60 max-w-md mx-auto">
              A few snapshots from events I hosted, moderated, and helped organize. Swipe or scroll to peek, then open the full gallery.
            </p>
          </div>

          {/* Carousel: native horizontal scroll + scroll-snap, thin scrollbar.
              No external carousel dependency. */}
          <div className="relative">
            <div
              className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scroll-px-6 [scrollbar-width:thin] [scrollbar-color:rgba(240,165,0,0.5)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber/40 hover:[&::-webkit-scrollbar-thumb]:bg-amber/70"
            >
              {activityHighlights.map((item) => {
                const Icon = roleIconMap[item.roleIcon] ?? Camera;
                return (
                  <article
                    key={item.id}
                    className="group flex-shrink-0 w-[200px] snap-start rounded-2xl bg-cream border border-ink/10 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="relative h-[130px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />
                      {/* Role tag pill (top-left) */}
                      <div className="absolute top-2 left-2">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-sm ${roleTagClass(
                            item.roleTag
                          )}`}
                        >
                          <Icon className="w-2.5 h-2.5" />
                          {item.roleTag}
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-display font-bold text-[13px] text-ink leading-snug group-hover:text-rust transition-colors">
                        {item.caption}
                      </h4>
                      <p className="text-[10px] text-ink/55 mt-1 uppercase tracking-wider font-semibold">
                        {item.organization}
                      </p>
                    </div>
                  </article>
                );
              })}

              {/* "Lihat semua" CTA card */}
              <Link
                href="#organizations"
                aria-label="Lihat semua activity highlights"
                className="group flex-shrink-0 w-[200px] snap-start rounded-2xl border-2 border-dashed border-cream/30 hover:border-amber hover:bg-amber/5 transition-colors flex flex-col items-center justify-center text-center p-5 min-h-[210px]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-amber/15 text-amber group-hover:bg-amber group-hover:text-ink transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <p className="mt-3 font-display font-bold text-sm text-cream-text">
                  Lihat semua
                </p>
                <p className="mt-1 text-[10px] text-cream-text/60 leading-snug">
                  Buka galeri lengkap
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
