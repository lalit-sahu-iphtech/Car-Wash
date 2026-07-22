import Navbar from "../components/Navbar/Navbar";

import HeroPage from "../components/HeroPage/Hero";
import FeatureSection from "../components/HeroPage/FeatureSection";
import AboutSection from "../components/HeroPage/AboutSection";
import ProcessSection from "../components/HeroPage/ProcessSection";
import ServicesSection from "../components/HeroPage/ServicesSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import TestimonialsSection from "../components/HeroPage/TestimonialsSection";
import CtaSection from "../components/cta/CtaSection";
import FaqSection from "../components/HeroPage/FaqSection";
import ContactSection from "../components/Contact/ContactSection";
import MapSection from "../components/Map/MapSection";
import FooterSection from "../components/Footer/FooterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <HeroPage />
      <FeatureSection/>
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
     
      
     
      <FaqSection />
      <CtaSection />
      
      <ContactSection />
      <MapSection />
      <FooterSection />
    </>
  );
}