import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";
import useSlideDistance from "../hooks/useSlideDistance";

export default function AboutImage() {
  const distance = useSlideDistance();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: distance,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="flex justify-center lg:justify-end w-full max-w-full"
    >
      <img
        src={aboutImg}
        alt="Professional car wash technician"
        className="rounded-2xl w-full max-w-[420px] h-[340px] sm:h-[420px] lg:max-w-[440px] lg:h-[580px] object-cover shadow-sm"
      />
    </motion.div>
  );
}