import { motion } from "framer-motion";
import aboutImg from "../../assets/images/about.png";
import useSlideDistance from "../../hooks/useSlideDistance";

export default function AboutImage() {
  const distance = useSlideDistance();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -distance, // Left → Right
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.35,
        margin: "0px 0px -90px 0px",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        justify-center
        lg:justify-end
        w-full
        max-w-full
        lg:-translate-x-40
        xl:-translate-x-50
    "
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
          lg:max-w-[550px]
          lg:h-[600px]
          xl:max-w-[430px]
          xl:h-[620px]
          object-cover
          object-top
          sm:object-center
          shadow-sm
        "
      />
    </motion.div>
  );
}