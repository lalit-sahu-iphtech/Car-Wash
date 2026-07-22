import { motion } from "framer-motion";
import AboutList from "../../About/AboutList";
import { aboutList1, aboutList2 } from "../../data/aboutData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideDown = {
  hidden: {
    opacity: 0,
    y: -35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRightToLeft = {
  hidden: {
    opacity: 0,
    x: 80, // Right → Left
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
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
        amount: 0.25,
      
      }}
      className="
      lg: translate-y-1
      lg:-translate-x-35
      xl:-translate-x-40
      "
    >
      {/* Heading */}
      <motion.h2
        variants={slideDown}
        className="
        max-w-[760px]
        text-[32px]
        sm:text-[22px]
        lg:text-[22px]
        xl:text-[42px]
        leading-[1.5]
        font-bold
        text-[#1a1a1a]
        tracking-[-1px]
        "
      >
        Professional washing and cleaning of your car
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={slideRightToLeft}
        className="
        text-[17px]
        lg:text-[18px]
        leading-8
        mt-5
        w-full
        max-w-none
        text-[#555]
        "
            
      >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
      </motion.p>

      {/* Lists */}
          <motion.div
            variants={slideRightToLeft}
            className="grid grid-cols-2  gap-x-12 gap-y-8 mt-4"
          >
      <AboutList title="The Best Car Wash" items={aboutList1} />
      <AboutList title="What We Do Our Services" items={aboutList2} />
    </motion.div>

      {/* Bottom Heading */}
      <motion.h3
        variants={slideRightToLeft}
        className="
        text-[34px]
        sm:text-[36px]
        lg:text-[40px]
        font-bold
        mt-8
        text-[#1a1a1a]
        leading-none
        "
      >
        Call for book:
        <span className="text-[#2e61d4]"> 8-800-10-500</span>
      </motion.h3>
    </motion.div>
  );
}