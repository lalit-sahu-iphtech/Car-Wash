import { motion } from "framer-motion";
//import aboutImg from "../../assets/images/about.jpg";
import aboutImg from "../assets/about.png"
export default function AboutImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 250,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.35,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="flex justify-end"
    >
      <img
        src={aboutImg}
        alt=""
        className="rounded-[28px] w-full max-w-[435px]"
      />
    </motion.div>
  );
}