import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 1.1,
        type: "tween",
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-[500px]"
    >
      {/* Welcome */}
      <p className="text-[15px] sm:text-[16px] tracking-[4px] uppercase text-[#111111] mb-4">
        Welcome To
      </p>

      {/* Heading */}
      <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-none font-bold mb-6">
        Car Wash
      </h1>

      {/* Address / Contact */}
      <div className="space-y-4 lg:space-y-5 mb-8">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[18px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] leading-6 tracking-[1px]">
            254 W 27ST ST, NEW YORK, NY 10011
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMobileAlt className="text-[18px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] font-semibold">
            (212) 123-4567
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[18px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] leading-6 tracking-[1px]">
            341 W 11ST ST, NEW YORK, NY 10022
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMobileAlt className="text-[18px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] font-semibold">
            (212) 123-4567
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        className="
          w-full
          max-w-[220px]
          h-[52px]
          lg:h-[56px]

          rounded-md
          bg-[#2e61d4]
          text-white
          text-[14px]
          font-bold
          uppercase
          tracking-wide
          transition-all
          duration-300
          hover:bg-white
          hover:text-[#2e61d4]
          border-2
          border-[#2e61d4]
        "
      >
        Book Appointment
      </button>
    </motion.div>
  );
}