import PricingSection from "../components/Pricing/PricingSection" 
import Navbar from "../components/Navbar/Navbar"; 
import FooterSection from "../components/Footer/FooterSection"; 
import MapSection from "../components/Map/MapSection"; 
import ContactSection from "../components/Contact/ContactSection";
 import PricingPlan from "../components/Pricing/PricingPlan"; 
export default function Pricing(){ 
    return(
         <> <Navbar/>
          <PricingSection/> 
          <PricingPlan/> 
          <ContactSection/> 
          <MapSection/>
          <FooterSection/> 
           </> 
    ) }