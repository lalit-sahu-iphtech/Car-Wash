import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ x: 320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 1.3,
        type: "tween",
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-full
        max-w-[340px]
        sm:max-w-[380px]
        md:max-w-[420px]
        lg:max-w-[460px]
        xl:max-w-[500px]

        bg-white
        rounded-[30px]
        lg:mt-22
        p-5
        sm:p-5
        lg:p-7

        shadow-xl
        "
    >
      {/* Welcome */}
      <p className="text-[16px] sm:text-[16px] lg:text-[18px] tracking-[4px] uppercase text-[#111111] mb-4 lg:mb-5">
        Welcome To
      </p>

      {/* Heading */}
      <h1 className="text-[32px] sm:text-[48px] lg:text-[72px] leading-none font-bold mb-4 lg:mb-6">
        Car Wash
      </h1>

      {/* Address */}
      <div className="space-y-3 lg:space-y-5">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[18px] lg:text-[22px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] lg:text-[18px] leading-6 tracking-[1px]">
            254 W 27ST ST, NEW YORK, NY 10011
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMobileAlt className="text-[18px] lg:text-[22px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] lg:text-[18px] font-semibold">
            (212) 123-4567
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[18px] lg:text-[22px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] lg:text-[18px] leading-6 tracking-[1px]">
            341 W 11ST ST, NEW YORK, NY 10022
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMobileAlt className="text-[18px] lg:text-[22px] shrink-0" />
          <span className="text-[15px] sm:text-[16px] lg:text-[18px] font-semibold">
            (212) 123-4567
          </span>
        </div>
      </div>

      {/* Button */}
      <button
  className="
    mt-6
    lg:mt-10

    w-full
    max-w-[180px]

    h-[52px]
    lg:h-[60px]

    rounded-xl
    bg-[#2e61d4]
    text-white
    font-bold
    uppercase
    transition-all
    duration-300
    hover:bg-white
    hover:text-black
    border-2
    border-[#2e61d4]
  "
>
  Book Now
</button>
    </motion.div>
  );
}