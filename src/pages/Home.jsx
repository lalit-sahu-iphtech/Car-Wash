import FeatureSection from "../components/Features/FeatureSection"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import AboutSection from "../About/AboutSection";
import ProcessSection from "../components/process/ProcessSection";
import ServicesSection from "../components/Services/ServicesSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import QualitySection from "../components/QualityService/QualitySection";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import FooterSection from "../components/Footer/FooterSection";
import MapSection from "../components/Map/MapSection";
import CtaSection from "../components/cta/CtaSection";
import FaqSection from "../components/faq/FaqSection";


export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <FeatureSection/>
        <AboutSection/>
        <ProcessSection/>
        <ServicesSection/>
        <PortfolioSection/>
        <QualitySection/>
        <TestimonialsSection/>
         <CtaSection/>
         <FaqSection/>
        <MapSection/>
        <FooterSection/>
        </>
    )
}