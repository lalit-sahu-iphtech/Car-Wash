import FeatureSection from "../components/Features/FeatureSection"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import AboutSection from "../About/AboutSection";
import ProcessSection from "../components/process/ProcessSection";
import ServicesSection from "../components/Services/ServicesSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";

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
        </>
    )
}