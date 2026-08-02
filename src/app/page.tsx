import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AuthorityStrip } from "@/components/sections/AuthorityStrip";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { LeadSection } from "@/components/sections/LeadSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ModalitiesSection } from "@/components/sections/ModalitiesSection";
import { ProfessorsSection } from "@/components/sections/ProfessorsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
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
        <HistorySection />
        <ModalitiesSection />
        <BenefitsSection />
        <TrialSection />
        <ProfessorsSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <FaqSection />
        <LeadSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
