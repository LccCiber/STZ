import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AuthorityStrip } from "@/components/sections/AuthorityStrip";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ModalitiesSection } from "@/components/sections/ModalitiesSection";
import { ProfessorsSection } from "@/components/sections/ProfessorsSection";
import { TrialSection } from "@/components/sections/TrialSection";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AuthorityStrip />
        <AboutSection />
        <ModalitiesSection />
        <BenefitsSection />
        <TrialSection />
        <ProfessorsSection />
        <GallerySection />
        <LocationSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
