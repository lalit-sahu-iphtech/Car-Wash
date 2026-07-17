import { motion } from "framer-motion";

export default function PortfolioHeading() {
  return (
    <div className="text-center max-w-[900px] mx-auto">
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
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          text-white
          font-bold
          text-[40px]
          sm:text-[52px]
          lg:text-[64px]
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
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        style={{
          transformOrigin: "center",
        }}
        className="
          mt-7
          text-white/90
          text-[16px]
          leading-8
          max-w-[760px]
          mx-auto
          px-4
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </motion.p>
    </div>
  );
}