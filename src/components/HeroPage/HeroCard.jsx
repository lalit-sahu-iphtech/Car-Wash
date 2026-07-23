import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
      className="
      w-full
      max-w-[470px]
  
      pl-6
      sm:pl-8
      lg:pl-10
      lg:mt-10
  
      pt-4
      sm:pt-4
      lg:pt-1
  "
    >
      {/* Welcome */}
      <p
        className="
          uppercase
          tracking-[4px]
          text-[11px]
          sm:text-[15px]
          lg:text-[17px]
          mb-3
        "
      >
        Welcome To
      </p>

      {/* Heading */}
      <h1
        className="
          text-[48px]
          sm:text-[56px]
          lg:text-[57px]
          leading-none
          font-bold
          mb-6
        "
      >
        Car Wash
</h1>

      {/* Address */}
      <div className="space-y-4 mb-8">

        <div className="flex items-start gap-5">
          <FaMapMarkerAlt className="mt-1 text-[15px]" />

          <p className="text-[18px] leading-6 font-semibold uppercase lg:whitespace-nowrap">
            254 W 27ST ST, NEW YORK, NY 10011
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FaMobileAlt className="text-[15px]" />

          <p className="text-[18px] font-semibold lg:not-even:whitespace-nowrap">
            (212) 123-4567
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="mt-1 text-[13px]" />

          <p className="text-[18px] leading-6 font-semibold uppercase lg:whitespace-nowrap">
            341 W 11ST ST, NEW YORK, NY 10022
          </p>
        </div>

        <div className="flex items-center gap-5">
          <FaMobileAlt className="text-[15px]" />

          <p className="text-[18px] font-semibold">
            (212) 123-4567
          </p>
        </div>
      </div>

      {/* Button */}

      <button
        className="
          mt-5
          w-[240px]
          h-[50px]
          text-[12px]
          rounded-md
          bg-[#2e61d4]
          text-white
          uppercase
          text-[11px]
          tracking-[2px]
          font-bold
           
         
        

        "
      >
  Book Appointment
</button>
    </motion.div>
  );
}