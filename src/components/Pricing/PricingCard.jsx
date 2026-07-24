import { motion } from "framer-motion";

export default function PricingCard({ showCard }) {
  return (
    <motion.div
      initial={{
        y: 120,
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        y: showCard ? 0 : 120,
        scale: showCard ? 1 : 0.8,
        opacity: showCard ? 1 : 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-20 -mt-[50px] sm:-mt-[90px] lg:-mt-[140px] px-5"
    >
      <div className="max-w-[850px] mx-auto">
        <div className="bg-white rounded-[20px] sm:rounded-[28px] shadow-2xl py-8 px-6 sm:py-12 sm:px-10 lg:py-16 lg:px-12 text-center">
          <h2 className="text-[36px] sm:text-[50px] lg:text-[70px] font-extrabold leading-tight">
            Pricing
          </h2>

          <p className="mt-4 sm:mt-6 lg:mt-8 text-[15px] sm:text-lg lg:text-2xl">
            Image from
            <span className="underline ml-2">Freepik</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}