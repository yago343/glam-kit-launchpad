import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection"; 
import { WhyChooseSection } from "./WhyChooseSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { OfferSection } from "./OfferSection";
import { AboutSection } from "./AboutSection";
import { FAQSection } from "./FAQSection";
import { FinalCTASection } from "./FinalCTASection";

export const LandingPage = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <OfferSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};