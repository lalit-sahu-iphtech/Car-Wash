import FeatureSection from "../components/Features/FeatureSection"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import AboutSection from "../About/AboutSection";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <FeatureSection/>
        <AboutSection/>
        </>
    )
}