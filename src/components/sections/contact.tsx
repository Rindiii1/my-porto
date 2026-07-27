"use client";

import { motion } from "framer-motion";
import { 
  Mic, 
  Users, 
  Briefcase, 
  Tv, 
  Speech, 
  Trophy, 
  GraduationCap, 
  Sparkle, 
  Camera, 
  MonitorPlay
} from "lucide-react";
import { Badge } from "@/components/portfolio/Badge";

// Data dinamis berdasarkan folder /public/kegiatan
const activities = [
  {
    id: "narasumber-tvku",
    title: "Guest Speaker",
    event: "TVKU Broadcast 2025",
    role: "Narasumber",
    icon: Tv,
    image: "/kegiatan/Narasumber tvku 2025.jpeg",
    description: "Diundang sebagai narasumber dalam program televisi kampus (TVKU) membagikan wawasan akademik dan dunia teknologi.",
  },
  {
    id: "internship-bps",
    title: "Internship Program",
    event: "BPS Kota Semarang",
    role: "Frontend & UI/UX Intern",
    icon: Briefcase,
    image: "/kegiatan/Internship di Badan Pusat Statistik Semarang.jpeg",
    description: "Mengikuti program magang profesional, berpartisipasi langsung dalam merancang sistem informasi digital Situ Gumuda.",
  },
  {
    id: "panitia-semnas",
    title: "Event Organizer",
    event: "Seminar Nasional TI",
    role: "Panitia Acara",
    icon: Users,
    image: "/kegiatan/Panitia Seminar Nasional Teknik Informatika.jpeg",
    description: "Terlibat aktif menyukseskan Seminar Nasional Teknik Informatika, memastikan kelancaran operasional acara.",
  },
  {
    id: "mc-hitech-pembukaan",
    title: "Master of Ceremonies",
    event: "Pembukaan Hi Tech 2025",
    role: "Lead MC",
    icon: Mic,
    image: "/kegiatan/Mc pembukaan hi technology 2025.jpeg",
    description: "Memimpin jalannya acara pembukaan Hi Technology 2025 dengan energi positif dan menjaga antusiasme peserta.",
  },
  {
    id: "mc-hpc",
    title: "Master of Ceremonies",
    event: "High Performance Computing",
    role: "MC",
    icon: MonitorPlay,
    image: "/kegiatan/MC-HighPerformance.jpeg",
    description: "Memandu acara teknologi High Performance Computing, memastikan materi pakar tersampaikan dengan terstruktur.",
  },
  {
    id: "moderator-lomba-hitech",
    title: "Session Moderator",
    event: "Lomba Hi Tech 2025",
    role: "Moderator",
    icon: Trophy,
    image: "/kegiatan/Moderator lomba hi technology 2025.jpeg",
    description: "Menjadi jembatan komunikasi antara peserta kompetisi dan juri. Mengatur presentasi agar kondusif dan profesional.",
  },
  {
    id: "mc-genetic-algorithm",
    title: "Master of Ceremonies",
    event: "Seminar Genetic Algorithm",
    role: "MC - Bengkel Koding",
    icon: Mic,
    image: "/kegiatan/Mc acara seminar Genetic Algorithm Bengkel Koding.jpeg",
    description: "Menjadi MC sesi seminar algoritma genetika, membantu audiens tetap fokus pada pemaparan teknis.",
  },
  {
    id: "moderator-wisuda-ppko",
    title: "Moderator Acara",
    event: "Wisuda PPKO Sek. Perempuan",
    role: "Moderator",
    icon: GraduationCap,
    image: "/kegiatan/Moderator wisuda ppko sekolah perempuan.jpeg",
    description: "Memfasilitasi sesi diskusi wisuda PPKO Sekolah Perempuan dengan pendekatan komunikasi empatik.",
  },
  {
    id: "mc-makrab",
    title: "Master of Ceremonies",
    event: "Konek TI / Makrab 2025",
    role: "MC",
    icon: Users,
    image: "/kegiatan/Mc acara konek TI atau makrab ti 2025.jpeg",
    description: "Membangun suasana hangat sebagai MC utama dalam malam keakraban keluarga mahasiswa Teknik Informatika.",
  },
  {
    id: "moderator-promosi-hitech",
    title: "Promotional Moderator",
    event: "Promosi Hi Tech 2025",
    role: "Moderator",
    icon: Speech,
    image: "/kegiatan/Moderator promosi acara hitechnology 2025 di acara it competition.jpeg",
    description: "Mengawal sesi promosi Hi Technology 2025, menyoroti nilai utama dari acara kompetisi dan pameran.",
  },
  {
    id: "mc-agustusan",
    title: "Master of Ceremonies",
    event: "HUT RI SMA N 1 Sragi",
    role: "MC",
    icon: Mic,
    image: "/kegiatan/Mc acara agustusan di sekiolah SMA N 1 SRAGI 2023.jpeg",
    description: "Berpengalaman memandu acara hiburan dan perlombaan semarak kemerdekaan RI dengan meriah.",
  },
  {
    id: "foto-bersama-hitech",
    title: "Event Commitee",
    event: "Tim Hi Technology",
    role: "Tim Dokumentasi",
    icon: Camera,
    image: "/kegiatan/foto bersama acara pembukaan hi tech.jpeg",
    description: "Momen keberhasilan seluruh tim panitia setelah sukses menyelenggarakan rangkaian acara pembukaan Hi Technology.",
  }
];

// Komponen Card
const ActivityCard = ({ activity }: { activity: any }) => {
  const Icon = activity.icon;
  return (
    <div className="group relative flex flex-col w-[300px] md:w-[340px] h-[350px] flex-shrink-0 rounded-2xl bg-cream text-ink overflow-hidden border border-cream/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-amber/40 transition-all duration-300 cursor-grab active:cursor-grabbing">
      {/* Image Wrapper */}
      <div className="relative h-44 w-full overflow-hidden bg-forest/10">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling?.classList.remove("hidden");
          }}
        />
        {/* Fallback View */}
        <div className="hidden absolute inset-0 bg-ink/10 flex-col items-center justify-center text-ink/50">
          <Icon className="w-8 h-8 mb-2 opacity-60" />
          <span className="text-[9px] font-semibold uppercase tracking-widest text-center px-4">
            File Not Found
          </span>
        </div>
        
        {/* Floating Role Badge */}
        <div className="absolute top-3 left-3 bg-ink/80 backdrop-blur-md text-cream text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Sparkle className="w-2.5 h-2.5 text-amber" />
          {activity.role}
        </div>
      </div>

      {/* Body Content (menggunakan whitespace-normal agar teks bisa turun ke bawah) */}
      <div className="p-5 flex flex-col flex-1 bg-cream-deep/30 whitespace-normal">
        <div className="flex items-center gap-2 mb-1.5">
          <Icon className="w-3.5 h-3.5 text-rust" />
          <span className="text-[10px] font-bold text-rust uppercase tracking-wider line-clamp-1">
            {activity.event}
          </span>
        </div>
        <h3 className="font-display font-bold text-xl text-ink mb-2 group-hover:text-amber transition-colors line-clamp-1">
          {activity.title}
        </h3>
        <p className="text-xs text-ink/75 leading-relaxed line-clamp-3">
          {activity.description}
        </p>
      </div>
    </div>
  );
};

export default function ActivitiesSection() {
  return (
    <section id="activities" className="section-forest relative overflow-hidden py-20 md:py-28">
      <div className="max-w-[100vw] mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 px-6 max-w-7xl mx-auto"
        >
          <Badge variant="outline-cream" size="sm" className="mb-5 inline-flex">
            <Camera className="w-3 h-3 text-amber mr-1" />
            Beyond Coding
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-cream-text leading-[0.95]">
            Organizational <span className="text-amber italic">Activities</span>
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-amber mx-auto" />
          <p className="text-cream-text/70 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            Sebagai mahasiswa Teknik Informatika, saya percaya bahwa <i>soft skill</i> sama pentingnya dengan <i>hard skill</i>. 
            Berikut adalah jejak langkah saya dalam public speaking, kepemimpinan, dan kolaborasi tim.
          </p>
        </motion.div>

        {/* Single Row Marquee Container dengan Padding Y agar hover effect tidak terpotong */}
        <div className="relative flex w-full overflow-hidden py-8">
          
          {/* Efek Gradasi Hitam di Kiri & Kanan (Fade edges) */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-forest to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-forest to-transparent z-10 pointer-events-none" />

          {/* Animasi 1 Baris Memanjang */}
          <motion.div
            className="flex gap-6 md:gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 55, ease: "linear", repeat: Infinity }} // Durasi diatur agar kecepatan pas
          >
            {/* Render 2 kali dari array yang sama persis agar infinite loop bekerja sempurna */}
            {[...activities, ...activities].map((activity, i) => (
              <ActivityCard key={`${activity.id}-${i}`} activity={activity} />
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}