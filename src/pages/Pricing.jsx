import PricingSection from "../components/Pricing/PricingSection" 
import Navbar from "../components/Navbar/Navbar"; 
import FooterSection from "../components/Footer/FooterSection"; 
import MapSection from "../components/Map/MapSection"; 
import ContactSection from "../components/Contact/ContactSection";
import PricingPlanSection from "../components/Pricing/PricingPlanSection";
export default function Pricing(){ 
    return(
         <> <Navbar/>
          <PricingSection/> 
          <PricingPlanSection/> 
          <ContactSection/> 
          <MapSection/>
          <FooterSection/> 
           </> 
    ) }