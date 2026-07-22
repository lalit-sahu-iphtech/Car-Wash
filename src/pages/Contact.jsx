import Navbar from "../components/Navbar/Navbar";
import MapSection from "../components/Map/MapSection";
import FooterSection from "../components/Footer/FooterSection";
import ContactSectionPage from "../components/ContactPage/ContactSectionPage";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactSectionPage />
      <MapSection />
      <FooterSection />
    </>
  );
}