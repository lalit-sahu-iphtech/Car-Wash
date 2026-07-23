import { motion } from "framer-motion";
import AboutList from "./AboutList";
import { aboutList1, aboutList2 } from "../data/aboutData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const scaleY = {
  hidden: {
    opacity: 0,
    scaleY: 0.2,
    transformOrigin: "bottom",
  },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleX = {
  hidden: {
    opacity: 0,
    scaleX: 0.2,
    transformOrigin: "left",
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.3,
        margin: "0px 0px -120px 0px",
      }}
      className="lg:-translate-y-8"
    >
      {/* Heading */}
      <motion.h3
        variants={scaleY}
        className="max-w-[500px] text-[28px] sm:text-[36px] lg:text-[37px] leading-[1.25] font-bold text-[#111]"
      >
        Professional washing and cleaning of your car
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        variants={scaleX}
        className="
        text-[14px]
        sm:text-[15px]
        text-[#6b6b6b]
        leading-6
        mt-4
        max-w-[540px]
        lg:max-w-[620px]
      "
    
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua enim ad minim veniam.
      </motion.p>

      {/* Lists */}
          <motion.div
            variants={scaleX}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mt-8 sm:mt-6"
          >
      <AboutList title="The Best Car Wash" items={aboutList1} />
      <AboutList title="What We Do Our Services" items={aboutList2} />
    </motion.div>

      {/* Bottom Heading */}
      <motion.h3
        variants={scaleX}
        className="text-[18px] sm:text-[22px] font-bold mt-6 sm:mt-8 text-[#111]"
      >
        Call for book:
        <span className="text-[#3d63d8]"> 8-800-10-500</span>
      </motion.h3>
    </motion.div>
  );
}