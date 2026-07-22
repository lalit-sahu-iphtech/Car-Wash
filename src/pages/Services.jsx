import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import MapSection from "../components/Map/MapSection";
import ContactSection from "../components/Contact/ContactSection";
import CtaSection from "../components/ServicesPage/CtaSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import ServicesSection from "../components/HeroPage/ServicesSection";
import ProcessSection from "../components/HeroPage/ProcessSection";
import ServicesBanner from "../components/ServicesPage/ServicesBanner"
export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesBanner/>
       
      <ServicesSection/>

      <PortfolioSection/>
      <ProcessSection/>

      <CtaSection/>
      
      <ContactSection/>

      <MapSection />

      <FooterSection />
    </>
  );
}