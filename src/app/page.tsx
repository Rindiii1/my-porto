"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const MotionLink = motion.create(Link);

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

type ProjectCard = {
  id: string;
  name: string;
  type: string;
  desc: string;
  cls: "v1" | "v2" | "v3";
};

const featuredProjects = [
  {
    id: "situ-gumuda",
    type: "UI/UX + Frontend",
    name: "Situ Gumuda",
    desc: "Survey management system for BPS Semarang City, with bulk data entry through Excel.",
    image: "/SiTugu.png",
    cls: "v1",
  },
  {
    id: "early-warning-system",
    type: "UI/UX + Frontend",
    name: "Early Warning System",
    desc: "Academic monitoring dashboard for achievements, graduation status, and academic risk.",
    image: "/EWS_mockup.png",
    cls: "v2",
  },
];

const projects: ProjectCard[] = [
  {
    id: "restaurant-reservation",
    name: "Restaurant Reservation System",
    type: "UI/UX + Frontend",
    cls: "v3",
    desc: "Table management, menu ordering, and payments for admins, owners, and customers.",
  },
  {
    id: "digi-id",
    name: "Digi.id",
    type: "UI/UX + Frontend",
    cls: "v1",
    desc: "Digital identity wallet using encryption and decryption to protect sensitive data.",
  },
  {
    id: "washwish",
    name: "WashWish",
    type: "UI/UX Design",
    cls: "v2",
    desc: "Online laundry platform for ordering and tracking, made for students and professionals.",
  },
  {
    id: "technora",
    name: "Technora",
    type: "UI/UX Design",
    cls: "v3",
    desc: "AgriTech early warning system for monitoring and mitigating agricultural pest risk.",
  },
  {
    id: "nutrishare",
    name: "NutriShare",
    type: "UI/UX Design",
    cls: "v1",
    desc: "Food-sharing platform connecting restaurants with surplus food to communities in need.",
  },
];

const experience = [
  {
    role: "Teaching Assistant & Frontend Developer",
    org: "Bengkel Koding",
    period: "Sep 2025 — now",
  },
  {
    role: "Frontend Developer Intern",
    org: "Badan Pusat Statistik",
    period: "Aug – Sep 2025",
  },
  {
    role: "General Treasurer",
    org: "HMTI UDINUS",
    period: "Aug 2024 — now",
  },
  {
    role: "IPTEK Division Member",
    org: "HMTI UDINUS",
    period: "Sep 2023 — now",
  },
];

const languages = [
  "Indonesian — native",
  "English — professional",
  "Javanese — conversational",
];

const frontendTools = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
];

const designTools = ["Figma", "VS Code", "GitHub", "Postman", "Notion"];

const focus = [
  "UI/UX Design",
  "Design Systems",
  "Dashboards",
  "Accessibility",
  "Responsive Design",
];

const speaking = [
  {
    role: "Guest speaker",
    detail: "TVKU Broadcast 2025",
  },
  {
    role: "MC",
    detail:
      "Hi Technology 2025 opening · High Performance Computing · Genetic Algorithm seminar · Konek TI / Makrab 2025",
  },
  {
    role: "Moderator",
    detail:
      "Hi Technology 2025 competition · Wisuda PPKO Sekolah Perempuan",
  },
  {
    role: "Committee",
    detail: "Seminar Nasional Teknik Informatika",
  },
];

const sectionShell: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  padding: "0 clamp(20px,5vw,56px)",
};

const inner: React.CSSProperties = {
  width: "100%",
  maxWidth: 1120,
  boxSizing: "border-box",
};

export default function Home() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";

  return (
    <div
      className="page-shell"
      style={{
        background:
          "radial-gradient(900px 640px at 92% -8%, rgba(255,79,163,0.32), transparent 62%), radial-gradient(760px 560px at 0% 38%, rgba(194,24,91,0.16), transparent 60%), radial-gradient(900px 600px at 10% 100%, rgba(255,79,163,0.18), transparent 60%), #0A0A0C",
        color: "#F5F5F7",
        fontFamily: "'Inter',system-ui,sans-serif",
        fontSize: 16,
        lineHeight: 1.6,
        letterSpacing: "-0.005em",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <div className="aurora-layer" aria-hidden />

      {/* HEADER */}
      <motion.div
        style={sectionShell}
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          style={{
            ...inner,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px 32px",
            padding: "28px 0",
          }}
        >
          <a
            href="#top"
            style={{
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#F5F5F7",
            }}
          >
            Rindi Fadilah
          </a>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "8px 32px",
              fontSize: 14,
            }}
          >
            <a href="#work" style={{ color: "#A1A1AA" }}>
              Work
            </a>
            <a href="#experience" style={{ color: "#A1A1AA" }}>
              Experience
            </a>
            <a
              href="#contact"
              className="gbtn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "9px 18px",
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>

      {/* HERO */}
      <div id="top" style={sectionShell}>
        <motion.div
          variants={stagger}
          initial={initial}
          animate="show"
          style={{
            ...inner,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 56,
            padding: "72px 0 112px",
          }}
        >
          <motion.div
            variants={stagger}
            style={{
              flex: "1 1 480px",
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            <motion.div
              variants={item}
              className="chip"
              style={{
                alignSelf: "flex-start",
                padding: "7px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Frontend Developer &amp; UI/UX Designer
            </motion.div>
            <motion.h1
              variants={item}
              style={{
                margin: 0,
                fontWeight: 500,
                fontSize: "clamp(40px,5.8vw,76px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Clear, accessible interfaces for the{" "}
              <span className="gt">web</span>.
            </motion.h1>
            <motion.p
              variants={item}
              style={{
                margin: 0,
                maxWidth: 520,
                fontSize: 19,
                color: "#A1A1AA",
              }}
            >
              Hi, I&apos;m Rindi. An Informatics Engineering student at
              Universitas Dian Nuswantoro and Frontend Developer at Bengkel
              Koding, working with Next.js, React, and Figma.
            </motion.p>
            <motion.div
              variants={item}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              <a
                href="#work"
                className="gbtn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "15px 26px",
                  borderRadius: 999,
                }}
              >
                View selected work
              </a>
              <a
                href="mailto:rindifadilah71@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "15px 26px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#F5F5F7",
                  fontWeight: 500,
                }}
              >
                Say hello
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            variants={item}
            style={{
              flex: "1 1 320px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="float-y"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 380,
              }}
            >
              <div
                role="img"
                aria-label="Rindi Fadilah"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 5",
                  borderRadius: "190px 190px 28px 28px",
                  background:
                    "linear-gradient(180deg, rgba(255,79,163,0.08) 0%, rgba(156,27,94,0.18) 45%, rgba(22,6,15,0.62) 100%), url('/profil.jpeg') center/cover no-repeat",
                  boxShadow: "0 30px 80px rgba(255,79,163,0.25)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 64,
                  left: -22,
                  padding: "11px 18px",
                  borderRadius: 999,
                  background: "#16161B",
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#F5F5F7",
                }}
              >
                Semarang, ID
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: -14,
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#16161B",
                  border: "1px solid rgba(255,79,163,0.5)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* WORK */}
      <div id="work" style={sectionShell}>
        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          style={{
            ...inner,
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <motion.div
            variants={item}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px,4vw,44px)",
                fontWeight: 500,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
              }}
            >
              Selected work
            </h2>
            <span style={{ fontSize: 15, color: "#A1A1AA" }}>
              7 projects · design &amp; code
            </span>
          </motion.div>

          <motion.div
            variants={stagger}
            style={{ display: "flex", flexWrap: "wrap", gap: 20 }}
          >
            {featuredProjects.map((project) => (
              <MotionLink
                key={project.id}
                href={`/projects/${project.id}`}
                variants={cardItem}
                className={`card ${project.cls}`}
                style={{
                  flex: "1 1 460px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 40,
                  minHeight: 420,
                  padding: 32,
                  borderRadius: 24,
                  boxSizing: "border-box",
                  color: "#F5F5F7",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#FF8CC8",
                    }}
                  >
                    {project.type}
                  </span>
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                    }}
                  >
                    {project.name}
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      color: "#A1A1AA",
                      maxWidth: 380,
                    }}
                  >
                    {project.desc}
                  </span>
                </div>
                <div
                  role="img"
                  aria-label={`${project.name} screenshot`}
                  className="shot"
                  style={{
                    height: 170,
                    borderRadius: "16px 16px 0 0",
                    background: `linear-gradient(180deg, rgba(10,10,12,0) 35%, rgba(10,10,12,0.55) 100%), url('${project.image}') center top / cover no-repeat, #1C1C23`,
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderBottom: 0,
                    marginBottom: -32,
                  }}
                />
              </MotionLink>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {projects.map((project) => (
              <MotionLink
                key={project.id}
                href={`/projects/${project.id}`}
                variants={cardItem}
                className={`card ${project.cls}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  minHeight: 230,
                  padding: 28,
                  borderRadius: 24,
                  boxSizing: "border-box",
                  color: "#F5F5F7",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#FF8CC8",
                  }}
                >
                  {project.type}
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                  }}
                >
                  {project.name}
                </span>
                <span
                  style={{ fontSize: 15, color: "#A1A1AA", flex: 1 }}
                >
                  {project.desc}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#F5F5F7",
                  }}
                >
                  View project <span className="arrow">→</span>
                </span>
              </MotionLink>
            ))}
            <motion.a
              href="#contact"
              variants={cardItem}
              className="gpanel"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 12,
                minHeight: 230,
                padding: 28,
                borderRadius: 24,
                boxSizing: "border-box",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                Have a project in mind?
              </span>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Let&apos;s talk →
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* EXPERIENCE */}
      <div
        id="experience"
        style={{
          ...sectionShell,
          padding: "136px clamp(20px,5vw,56px) 0",
        }}
      >
        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          style={{
            ...inner,
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 80px",
          }}
        >
          <motion.div
            variants={item}
            style={{
              flex: "1 1 300px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px,4vw,44px)",
                fontWeight: 500,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
              }}
            >
              Experience
            </h2>
            <p style={{ margin: 0, maxWidth: 340, color: "#A1A1AA" }}>
              Teaching, building, and leading — in the classroom, in the team,
              and on stage.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                paddingTop: 6,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {languages.map((language) => (
                <span
                  key={language}
                  className="chip"
                  style={{ padding: "7px 14px", borderRadius: 999 }}
                >
                  {language}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            style={{
              flex: "2 1 520px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {experience.map((job) => (
              <motion.div
                key={`${job.role}-${job.period}`}
                variants={item}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px 28px",
                  padding: "24px 0",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    flex: "2 1 260px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 19,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {job.role}
                  </span>
                  <span style={{ fontSize: 15, color: "#A1A1AA" }}>
                    {job.org}
                  </span>
                </div>
                <span
                  className="chip"
                  style={{
                    padding: "7px 14px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {job.period}
                </span>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* TOOLKIT + SPEAKING */}
      <div
        style={{
          ...sectionShell,
          padding: "136px clamp(20px,5vw,56px) 0",
        }}
      >
        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          style={{
            ...inner,
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <motion.div
            variants={cardItem}
            className="card"
            style={{
              flex: "1 1 440px",
              display: "flex",
              flexDirection: "column",
              gap: 28,
              padding: 36,
              borderRadius: 24,
              background: "#121216",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
            >
              Toolkit
            </h2>
            {[
              { label: "Frontend", items: frontendTools },
              { label: "Design & productivity", items: designTools },
              { label: "Focus", items: focus },
            ].map((group) => (
              <div
                key={group.label}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <span style={{ fontSize: 13, color: "#A1A1AA" }}>
                  {group.label}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((tool) => (
                    <span
                      key={tool}
                      className="chip"
                      style={{
                        padding: "8px 14px",
                        borderRadius: 999,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={cardItem}
            className="card"
            style={{
              flex: "1 1 440px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: 36,
              borderRadius: 24,
              background: "#121216",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
            >
              Speaking &amp; community
            </h2>
            {speaking.map((item) => (
              <div
                key={item.role}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 20px",
                  padding: "16px 0",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  style={{
                    flex: "0 0 120px",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#FF8CC8",
                  }}
                >
                  {item.role}
                </span>
                <span
                  style={{
                    flex: "1 1 220px",
                    color: "#A1A1AA",
                    fontSize: 15,
                  }}
                >
                  {item.detail}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* CONTACT */}
      <div
        id="contact"
        style={{
          ...sectionShell,
          padding: "136px clamp(20px,5vw,56px) 0",
        }}
      >
        <motion.div
          className="gpanel"
          variants={item}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          style={{
            ...inner,
            padding: "clamp(32px,6vw,72px)",
            borderRadius: 32,
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <h2
            style={{
              margin: 0,
              maxWidth: 760,
              fontSize: "clamp(34px,5.4vw,68px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            Let&apos;s build something clear and useful.
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: 480,
              fontSize: 18,
              color: "#FFFFFF",
            }}
          >
            Reach out for collaborations, internships, or freelance work.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            <a
              href="mailto:rindifadilah71@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "15px 26px",
                borderRadius: 999,
                background: "#0A0A0C",
                color: "#F5F5F7",
              }}
            >
              rindifadilah71@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rindi-fadilah-"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "15px 26px",
                borderRadius: 999,
                border: "1.5px solid #FFFFFF",
                color: "#FFFFFF",
              }}
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div style={sectionShell}>
        <motion.div
          variants={item}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            ...inner,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 8,
            padding: "56px 0 40px",
            fontSize: 13,
            color: "#A1A1AA",
          }}
        >
          <span>© 2026 Rindi Fadilah</span>
          <span>Built with Next.js</span>
        </motion.div>
      </div>
    </div>
  );
}
