import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TestimonialCard({ name, quote }) {
  return (
    <motion.div variants={cardVariants} className="max-w-[420px]">
      <Quote
        size={30}
        className="text-[#2e61d4] fill-[#2e61d4] rotate-180 mb-1 sm:mb-2"
      />

      <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#333] mt-[5px]">
        {quote}
      </p>

      <p className="mt-[20px] font-bold text-[25px] sm:text-[20px]">
        {name}
      </p>
    </motion.div>
  );
}