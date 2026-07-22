import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import MapSection from "../components/Map/MapSection";

import FaqBanner from "../components/FaqPage/FaqBanner";
import FaqSection from "../components/faq/FaqSection";
import ContactSection from "../components/Contact/ContactSection";
import FaqPageSection from "../components/FaqPage/FaqPageSection";
import BestServicesSection from "../components/FaqPage/BestServicesSection";

export default function Faq() {
  return (
    <>
      <Navbar />

      <FaqBanner />

     

     <FaqPageSection/>
     <BestServicesSection/>

      <ContactSection />

      <MapSection />

      <FooterSection />
    </>
  );
}