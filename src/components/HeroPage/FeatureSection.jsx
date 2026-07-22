import "../../styles/featureAnimation.css";
import FeatureCard from "./FeatureCard";
import { featureData } from "../../data/featureData";
import useInView from "../../hooks/useInView";

export default function FeatureSection() {
  const [ref, visible] = useInView(
    window.innerWidth < 768 ? 0.2 : 0.55,
    "0px 0px -140px 0px"
  );

  return (
    <section
    id="features"
      ref={ref}
      className="
      relative
      
    
      sm:mt-6
      md:mt-10
      lg:mt-[80px]
    
    
      py-18
      overflow-hidden
    "
    >
      <div className="max-w-[1140px] mx-auto grid lg:grid-cols-4 gap-5">
        {featureData.map((item, index) => (
          <FeatureCard
            key={item.id}
            {...item}
            visible={visible}
            delay={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
