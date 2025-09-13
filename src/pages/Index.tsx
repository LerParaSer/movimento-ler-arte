import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FoundersSection } from "@/components/FoundersSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ContributeSection } from "@/components/ContributeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MediaSection } from "@/components/MediaSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-nunito">
      <Header />
      <div className="pt-20">
        <HeroSection />
      <AboutSection />
      <FoundersSection />
      <ImpactSection />
      <ContributeSection />
      <TestimonialsSection />
      <ProjectsSection />
      <MediaSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
