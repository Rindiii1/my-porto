import Link from "next/link";
import { Button } from "@/components/ui/button";
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

function RoleBadge({ role }: { role: ProjectRole }) {
  const isDesign = role === "UI/UX Design";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
        isDesign ? "bg-amber text-ink" : "bg-ink text-cream"
      }`}
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
      <main className="section-cream min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ink mb-4">Project Not Found</h1>
          <Link href="/#portfolio">
            <Button variant="outline" className="border-ink/30 text-ink hover:bg-ink/5">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-cream min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#portfolio"
          className="text-sm font-semibold text-ink/60 hover:text-rust mb-8 inline-block transition-colors"
        >
          &larr; Back to Projects
        </Link>

        <article className="rounded-2xl border border-ink/10 bg-cream-deep/40 p-6 sm:p-8 shadow-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber text-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-3 mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.roles.map((role) => (
              <RoleBadge key={role} role={role} />
            ))}
          </div>

          <div className="w-full mb-6 overflow-hidden rounded-xl border border-ink/10 bg-cream">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center text-ink/40 font-semibold">
                Project Image
              </div>
            )}
          </div>

          {/* Menambahkan whitespace-pre-wrap di sini agar format paragraf dan bullet list (\n) terbaca dengan baik tanpa merusak desain */}
          <p className="text-ink/75 mb-6 leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>

          <div className="mb-4">
            <h2 className="text-xs uppercase tracking-wider text-ink/60 font-bold mb-2">
              Tools
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-semibold px-2.5 py-1 bg-cream text-ink/75 rounded-full border border-ink/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {project.tags?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider text-ink/60 font-bold mb-2">
                Tags
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-ink text-cream rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-6 border-t border-dashed border-ink/15">
            {project.demoUrl && project.demoUrl !== "#" && (
              <Button asChild className="bg-amber text-ink hover:bg-amber-soft font-semibold rounded-lg">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  View Demo
                </a>
              </Button>
            )}
            {project.repoUrl && project.repoUrl !== "#" && (
              <Button
                asChild
                variant="outline"
                className="border-ink/30 text-ink hover:bg-ink/5 font-semibold rounded-lg"
              >
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              </Button>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}