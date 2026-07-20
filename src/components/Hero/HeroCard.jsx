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
      lg:max-w-[470px]
      xl:max-w-[500px]
      h-auto
      lg:min-h-[520px]
      bg-white
      rounded-[30px]
      p-6
      sm:p-8
      lg:p-10
      shadow-xl
    "
    >
      {/* Welcome */}
      <p className="text-[16px] sm:text-[18px] lg:text-[20px] tracking-[4px] uppercase text-[#111111] mb-4 lg:mb-5">
        Welcome To
      </p>

      {/* Heading */}
      <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-none font-bold text-[#111111] mb-6 lg:mb-8">
        Car Wash
      </h1>

      {/* Address */}
      <div className="space-y-4 lg:space-y-5">
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
    mt-8
    lg:mt-10
    w-[170px]
    sm:w-[180px]
    h-[54px]
    lg:h-[60px]
    rounded-xl
    bg-[#4f7cff]
    border-2
    border-[#4f7cff]
    text-white
    text-[13px]
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