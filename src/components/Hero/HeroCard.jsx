import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

export default function HeroCard() {
  return (
    <motion.div
      initial={{
        x: 320,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
        duration: 1.3,
        type: "tween",
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-[450px] bg-white rounded-[30px] p-8 shadow-xl"
    >
      {/* Welcome */}
      <p className="text-[20px] tracking-[5px] uppercase text-[#111111] mb-5">
        Welcome To
      </p>

      {/* Heading */}
      <h1 className="text-[72px] leading-none font-bold text-[#111111] mb-8">
        Car Wash
      </h1>

      {/* Address */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[22px]" />
          <span className="text-[18px] tracking-[1px]">
            254 W 27ST ST, NEW YORK, NY 10011
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMobileAlt className="text-[22px]" />
          <span className="text-[18px] font-semibold">
            (212) 123-4567
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[22px]" />
          <span className="text-[18px] tracking-[1px]">
            341 W 11ST ST, NEW YORK, NY 10022
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMobileAlt className="text-[22px]" />
          <span className="text-[18px] font-semibold">
            (212) 123-4567
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        className="
          mt-10
          w-[180px]
          h-[60px]
          rounded-xl
          bg-[#4f7cff]
          border-2
          border-[#4f7cff]
          text-white
          font-bold
          uppercase
          tracking-[1px]
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
          hover:border-[#4f7cff]
        "
      >
        Book Now
      </button>
    </motion.div>
  );
}