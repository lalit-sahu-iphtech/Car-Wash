import { motion } from "framer-motion";
import AboutList from "./AboutList";
import { aboutList1, aboutList2 } from "../data/aboutData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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
      }}
    >
      <motion.h2
        variants={fadeUp}
        className="max-w-[500px] text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.25] font-bold text-[#1a1a1a] font-sans"
      >
        Professional washing and cleaning of your car
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-[15px] sm:text-[16px] text-[#6b6b6b] leading-6 sm:leading-7 mt-5 sm:mt-6 max-w-[560px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua enim ad minim veniam.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-8 sm:mt-10"
      >
        <AboutList
          title="The Best Car Wash"
          items={aboutList1}
        />

        <AboutList
          title="What We Do Our Services"
          items={aboutList2}
        />
      </motion.div>

      <motion.h3
        variants={fadeUp}
        className="text-[18px] sm:text-[22px] font-bold mt-8 sm:mt-10 text-[#1a1a1a]"
      >
        Call for book:
        <span className="text-[#3d63d8]">
          {" "}8-800-10-500
        </span>
      </motion.h3>
    </motion.div>
  );
}