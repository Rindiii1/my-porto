import Link from "next/link";
import type { Project, ProjectRole } from "@/types";

const projectsData: Record<string, Project> = {
  "technora-beam": {
    id: "technora-beam",
    title: "TECHNORA BEAM Startup",
    category: "Technology Platform",
    roles: ["UI/UX Design"],
    description:
      "Technora is an AgriTech early warning system created to address the industry's reliance on reactive, expensive, and ineffective pest control methods (like night patrols and excessive chemical pesticides). It introduces a smart, preventive monitoring solution to predict and mitigate agricultural pest risks.\n\nMy Responsibilities:\n• Designed modern, user-centered UI/UX interfaces and experience flows.\n• Developed visual marketing strategies to communicate the value of this AgriTech solution effectively.",
    tools: ["Figma", "User Research", "Prototyping"],
    image: "/technora.png",
    tags: ["Figma", "UI/UX", "React"],
    createdAt: new Date(),
    demoUrl: "#",
    repoUrl: "#",
  },
  "lms-fullstack": {
    id: "lms-fullstack",
    title: "Learning Management System",
    category: "Education Platform",
    roles: ["Frontend Development"],
    description:
      "A comprehensive case-study-based learning platform equipped with full features for learning management, focusing on practice-based progressive difficulty.",
    tools: ["Figma", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    createdAt: new Date(),
    demoUrl: "#",
    repoUrl: "#",
  },
  washwish: {
    id: "washwish",
    title: "WashWish",
    category: "Online Laundry Platform",
    roles: ["UI/UX Design"],
    description:
      "WashWish (Ajeng Laundry) is designed for busy urbanites in Semarang, such as office workers and students, who lack the time for the lengthy and tiring laundry process. We transform the entire chore—from sorting and washing to folding—into a seamless digital experience. Users can easily book services, track their laundry status, and make payments right from their devices.\n\nMy Responsibilities:\n• Conducted user research and analyzed customer needs to define product requirements for an online laundry service platform.\n• Designed end-to-end user experiences using Figma, including user flows, use case diagrams, wireframes, and high-fidelity prototypes to optimize the customer journey.\n• Created intuitive booking, order tracking, and payment workflows to improve usability and enhance the overall user experience.",
    tools: ["Figma", "Design System", "Wireframing", "Prototyping"],
    image: "/WashWish.png",
    tags: ["Figma", "UI/UX"],
    createdAt: new Date(),
  },
  "situ-gumuda": {
    id: "situ-gumuda",
    title: "Situ Gumuda",
    category: "Tourism & Information Website",
    roles: ["UI/UX Design", "Frontend Development"],
    description:
      "Situ Gumuda is an interactive survey assessment platform developed for the Central Bureau of Statistics (BPS) of Semarang City. It simplifies the survey management workflow by allowing admins to seamlessly create surveys and enabling users to process mass data efficiently through an Excel import feature.\n\nMy Responsibilities:\n• Developed responsive and interactive user interfaces using React, translating UI/UX designs into functional web applications.\n• Built reusable React components to improve code maintainability, scalability, and development efficiency.\n• Utilized Figma for high-fidelity prototyping and mapped complex user flows, integrating an anonymous support community to mitigate social stigma.",
    tools: ["Figma", "React", "Next.js", "Tailwind CSS"],
    image: "/SiTugu.png",
    tags: ["Next.js", "Tailwind CSS"],
    createdAt: new Date(),
  },
  "restaurant-reservation": {
    id: "restaurant-reservation",
    title: "Restaurant Reservation System",
    category: "Restaurant Management",
    roles: ["UI/UX Design", "Frontend Development"],
    description:
      "This platform bridges the gap between customers and restaurants by offering a comprehensive reservation system. Supporting multiple roles (admin, user, and restaurant owner), it features table reservations, seating layout management, menu ordering, operational dashboards, and a seamlessly integrated payment gateway.\n\nMy Responsibilities:\n• Created interactive high-fidelity prototypes in Figma.\n• Developed responsive frontend modules using Next.js for reservation management, menu management, seating management, and restaurant dashboards.\n• Integrated RESTful APIs with a Laravel backend to manage reservations, menus, seating layouts, and real-time operational data.\n• Built reusable UI components and implemented responsive layouts to ensure consistency, maintainability, and an optimal user experience across devices.\n• Collaborated with cross-functional teams to deliver scalable features while following clean code practices and component-based architecture.",
    tools: ["Figma", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/ReservasiRestaurant.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    createdAt: new Date(),
  },
  technora: {
    id: "technora",
    title: "Technora",
    category: "Technology Platform",
    roles: ["UI/UX Design"],
    description:
      "Technora is an AgriTech early warning system created to address the industry's reliance on reactive, expensive, and ineffective pest control methods (like night patrols and excessive chemical pesticides). It introduces a smart, preventive monitoring solution to predict and mitigate agricultural pest risks.\n\nMy Responsibilities:\n• Designed modern, user-centered UI/UX interfaces and experience flows.\n• Developed visual marketing strategies to communicate the value of this AgriTech solution effectively.",
    tools: ["Figma", "User Research", "Prototyping"],
    image: "/technora.png",
    tags: ["Figma", "UI/UX"],
    createdAt: new Date(),
  },
  "digi-id": {
    id: "digi-id",
    title: "Digi.id",
    category: "Digital Identity Platform",
    roles: ["UI/UX Design", "Frontend Development"],
    description:
      "Digi.id is a digital identity wallet platform built to store sensitive public documents (such as ID cards) securely. By prioritizing privacy and utilizing robust encryption and decryption technologies, it ensures that users can access their digital identities safely at any time without the fear of data breaches.\n\nMy Responsibilities:\n• Designed and developed responsive interfaces for a digital identity management platform with a strong focus on usability and visual accessibility.",
    tools: ["Figma", "React", "Next.js", "Tailwind CSS"],
    image: "/digi_id.png",
    tags: ["Next.js", "Tailwind CSS"],
    createdAt: new Date(),
  },
  "early-warning-system": {
    id: "early-warning-system",
    title: "Early Warning System",
    category: "Academic Monitoring Dashboard",
    roles: ["UI/UX Design", "Frontend Development"],
    description:
      "EWS is an academic monitoring dashboard designed for faculty leaders (such as Deans) to track student performance across departments. It visualizes crucial data—including dropout rates, leaves of absence, graduation statistics, and academic risks like the top 10 failed courses—enabling proactive academic interventions.\n\nMy Responsibilities:\n• Conducted requirement analysis and designed system workflows by creating use case diagrams, user flows, wireframes, and high-fidelity prototypes in Figma.\n• Developed responsive and reusable frontend components using Next.js, transforming UI/UX designs into production-ready web applications.\n• Integrated RESTful APIs with a Laravel backend to manage authentication, dashboard data, and academic monitoring features.\n• Collaborated with cross-functional teams to deliver a user-centered application while maintaining clean code, consistent design systems, and scalable frontend architecture.",
    tools: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/EWS_mockup.png",
    tags: ["Next.js", "TypeScript", "Chart.js", "Dashboard"],
    createdAt: new Date(),
    demoUrl: "https://ews.udinus.ac.id",
    repoUrl: "#",
  },
  nutrishare: {
    id: "nutrishare",
    title: "NutriShare",
    category: "Nutrition & Health Platform",
    roles: ["UI/UX Design"],
    description:
      "Inspired by on-demand services, Nutrishare is a food-sharing platform aimed at reducing food waste. It connects restaurants that have surplus, perfectly edible food at the end of the day with communities in need, offering these meals either for free or at a highly discounted price.\n\nMy Responsibilities:\n• Analyzed user requirements and defined core platform features based on user needs and food-sharing workflows.\n• Designed user-centered interfaces in Figma, producing use case diagrams, user flows, wireframes, and high-fidelity prototypes.\n• Collaborated with the development team to ensure design consistency, usability, and alignment with functional requirements.",
    tools: ["Figma", "User Flow", "Wireframing", "Prototyping"],
    image: "/Nutrishare.png",
    tags: ["Figma", "UI/UX"],
    createdAt: new Date(),
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

const pageBackground =
  "radial-gradient(900px 640px at 92% -8%, rgba(255,79,163,0.24), transparent 62%), radial-gradient(760px 560px at 0% 38%, rgba(194,24,91,0.14), transparent 60%), #0A0A0C";

function RoleBadge({ role }: { role: ProjectRole }) {
  const isDesign = role === "UI/UX Design";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: 999,
        padding: "5px 12px",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.02em",
        ...(isDesign
          ? {
              background: "rgba(255,79,163,0.12)",
              border: "1px solid rgba(255,79,163,0.3)",
              color: "#FF9BD0",
            }
          : {
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#F5F5F7",
            }),
      }}
    >
      {role}
    </span>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          background: pageBackground,
          color: "#F5F5F7",
          fontFamily: "'Inter',system-ui,sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              margin: "0 0 20px",
              fontSize: 30,
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            Project Not Found
          </h1>
          <Link
            href="/#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "13px 24px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#F5F5F7",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "64px clamp(20px,5vw,56px) 96px",
        background: pageBackground,
        color: "#F5F5F7",
        fontFamily: "'Inter',system-ui,sans-serif",
        lineHeight: 1.6,
        letterSpacing: "-0.005em",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <Link
          href="/#work"
          style={{
            display: "inline-block",
            marginBottom: 32,
            fontSize: 14,
            fontWeight: 600,
            color: "#A1A1AA",
          }}
        >
          ← Back to Projects
        </Link>

        <article
          style={{
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.09)",
            background: "#121216",
            padding: "clamp(24px,4vw,40px)",
          }}
        >
          <span
            className="chip"
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 999,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {project.category}
          </span>
          <h1
            style={{
              margin: "14px 0 16px",
              fontSize: "clamp(30px,4.5vw,46px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 28,
            }}
          >
            {project.roles.map((role) => (
              <RoleBadge key={role} role={role} />
            ))}
          </div>

          <div
            style={{
              width: "100%",
              marginBottom: 28,
              overflow: "hidden",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.09)",
              background: "#1C1C23",
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 256,
                  color: "#A1A1AA",
                  fontWeight: 600,
                }}
              >
                Project Image
              </div>
            )}
          </div>

          <p
            style={{
              margin: "0 0 28px",
              color: "#A1A1AA",
              lineHeight: 1.75,
              whiteSpace: "pre-wrap",
              fontSize: 15,
            }}
          >
            {project.description}
          </p>

          <div style={{ marginBottom: 24 }}>
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#A1A1AA",
              }}
            >
              Tools
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    borderRadius: 999,
                    padding: "7px 14px",
                    fontSize: 13,
                    fontWeight: 500,
                    background: "rgba(255,79,163,0.12)",
                    border: "1px solid rgba(255,79,163,0.3)",
                    color: "#FF9BD0",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {project.tags?.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#A1A1AA",
                }}
              >
                Tags
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      borderRadius: 999,
                      padding: "7px 14px",
                      fontSize: 12,
                      fontWeight: 600,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#F5F5F7",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="gbtn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "13px 24px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                View Demo
              </a>
            )}
            {project.repoUrl && project.repoUrl !== "#" && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "13px 24px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#F5F5F7",
                }}
              >
                View Repository
              </a>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}