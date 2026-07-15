import "../../styles/featureAnimation.css";
import FeatureCard from "./FeatureCard";
import { featureData } from "../../data/featureData";
import useInView from "../../hooks/useInView";

export default function FeatureSection() {
  const [ref, visible] = useInView(0.55);

  return (
    <section
      ref={ref}
      className="bg-[#3f66d6] py-28 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto grid lg:grid-cols-4 gap-14">
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