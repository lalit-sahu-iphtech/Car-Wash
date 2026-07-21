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
        amount: 0.4,
        margin: "0px 0px -90px 0px",
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="flex justify-center lg:justify-end w-full max-w-full lg:-translate-x-10 "
    >
      <img
        src={aboutImg}
        alt="Professional car wash technician"
        className="
        rounded-3xl
        w-full
        max-w-[320px]
        h-[500px]
        sm:max-w-[420px]
        sm:h-[500px]
        lg:max-w-[450px]
        lg:h-[670px]
        object-cover
        object-top
        sm:object-center
        shadow-sm
      "
      />
    </motion.div>
  );
}