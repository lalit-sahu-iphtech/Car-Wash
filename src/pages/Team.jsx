import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import MapSection from "../components/Map/MapSection";

import TeamBanner from "../components/TeamPage/TeamBanner";
import TeamSection from "../components/Team/TeamSection";
import ContactSection from "../components/Contact/ContactSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";

export default function Team() {
  return (
    <>
      <Navbar />

       <TeamBanner />

       <TeamSection/>
      <PortfolioSection/>

      <ContactSection /> *

      <MapSection />

      <FooterSection />
    </>
  );
}