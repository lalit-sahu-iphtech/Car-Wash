import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import MapSection from "../components/Map/MapSection";

import AboutBanner from "../components/AboutPage/AboutBanner";
import ContactSection from "../components/Contact/ContactSection";

import TeamSection from "../components/Team/TeamSection";
import WhyChooseUs from "../components/AboutPage/WhyChooseUs";
import CarWashServices from "../components/AboutPage/CarWashServices";

export default function About() {
  return (
    <>
      <Navbar />

      <AboutBanner />
      <WhyChooseUs/>

   

      <TeamSection />
      <CarWashServices/>
      <ContactSection/>

       <MapSection />

      <FooterSection /> 
    </>
  );
}