import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import QualityText from "./QualityText";
import QualityImageStack from "./QualityImageStack";
import QualityChecklist from "./QualityChecklist";

export default function QualitySection() {
  // const sectionRef = useRef(null);

  // const isInView = useInView(sectionRef, {
  //   amount: 0.6,
  //   once: false,
  //   margin: "0px 0px -150px 0px",
  // });

  return (
    <section
      id="quality"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#eeeeee]" />

      {/* White Background Reveal */}
      <motion.div
        initial={{
          scaleY: 0,
          clipPath:
            "polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%)",
        }}
        whileInView={{
          scaleY: 1,
          clipPath:
            "polygon(0% 0%,100% 0%,100% 0%,100% 100%,100% 100%,0% 100%,0% 100%,0% 0%)",
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "bottom",
        }}
        className="
          absolute
          top-0
          left-0
          w-full
          h-[60%]
          bg-white
          z-0
        "
      />
      {/* Content */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-5">
        <div className="grid lg:grid-cols-[340px_380px_1fr] gap-10 lg:gap-12 items-start">
          <QualityText />

          <div className="w-full max-w-[400px] mx-auto lg:contents">
            <QualityImageStack />
            <QualityChecklist />
          </div>
        </div>
      </div>
    </section>
  );
}