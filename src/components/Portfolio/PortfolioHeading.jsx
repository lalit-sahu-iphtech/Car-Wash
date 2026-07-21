import { motion } from "framer-motion";

export default function PortfolioHeading() {
  return (
    <div className="max-w-[1140px] mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{
          opacity: 0,
          x: -120,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: false,
          amount: 0.3,
          margin: "0px 0px -120px 0px",
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          text-white
          text-[40px]
          sm:text-[52px]
          lg:text-[64px]
          font-bold
          leading-[1.1]
        "
      >
        Our Car Wash Portfolio
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        viewport={{
          once: false,
          amount: 0.3,
          margin: "0px 0px -120px 0px",
        }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          mt-6
          text-white/80
          text-[16px]
          leading-5
          max-w-none
          whitespace-nowrap
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </motion.p>

    </div>
  );
}