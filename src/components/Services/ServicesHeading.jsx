import { motion } from "framer-motion";

export default function ServicesHeading() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.5,
        // margin: "-120px 0px -120px 0px",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-center"
    >
      <h2
        className="
          text-[#111]
          font-bold
          leading-tight

          text-[34px]
          sm:text-[44px]
          md:text-[52px]
          lg:text-[60px]

          max-w-[350px]
          sm:max-w-[500px]
          lg:max-w-none

          mx-auto
        "
      >
        Our Best Services You
      </h2>
    </motion.div>
  );
}