import { qualityTop, qualityBottom } from "../../data/qualityData";
import QualityImage from "./QualityImage";

export default function QualityImageStack() {
  return (
    <div className="relative w-full lg:max-w-[380px] h-[420px] sm:h-[500px] lg:h-[560px]">
      
       <QualityImage
        image={qualityTop.image}
        direction="left"
        className="absolute top-0 left-0 w-[72%] h-[56%] z-10"
      />
      
       
      

      <QualityImage
        image={qualityBottom.image}
        direction="right"
        delay={0.15}
        className="absolute bottom-0 right-0 w-[72%] h-[60%] z-20"
      />
    </div>
  );
}