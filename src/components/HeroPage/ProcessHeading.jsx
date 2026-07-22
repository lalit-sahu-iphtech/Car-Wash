import { motion } from "framer-motion";

export default function ProcessHeading() {
  return (
    <motion.div
  initial={{
    opacity: 0,
    scale: 0,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  viewport={{
    once: false,
    amount: 0.15,
  }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  className="text-center"
>
<h2
        className="
        text-white
        font-normal
        leading-tight
        text-[46px]
        sm:text-[56px]
        sm:font-normal
        lg:text-[72px]
        lg:font-bold
      "
      >
        Our Process
      </h2>

      <p
        className="
        text-white
        mt-4
        text-[16px]
        sm:text-[18px]
        lg:text-[20px]
      "
      >
        We know your time is valuable
      </p>
    </motion.div>
  );
}