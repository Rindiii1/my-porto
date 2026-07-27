import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ToolkitSection from "@/components/portfolio/ToolkitSection";
import PortfolioSection from "@/components/sections/portfolio";
import LanguageActivitiesSection from "@/components/portfolio/LanguageActivitiesSection";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ToolkitSection />
      <PortfolioSection />
      <LanguageActivitiesSection />
      <ContactSection />
    </main>
  );
}
