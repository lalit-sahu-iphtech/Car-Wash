import { motion } from "framer-motion";

export default function TeamHeading() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="text-center"
    >
      <h2
        className="
          text-[#111]
          text-[42px]
          sm:text-[52px]
          lg:text-[64px]
          font-bold
          leading-none
        "
      >
        Our Team
      </h2>
    </motion.div>
  );
}