import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TestimonialCard({ name, quote }) {
  return (
    <motion.div variants={cardVariants} className="max-w-[420px] mx-auto sm:mx-0">
      <Quote
        size={30}
        className="text-[#3561d8] fill-[#3561d8] rotate-180 mb-3 sm:mb-4"
      />

      <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#333] mt-[13px]">
        {quote}
      </p>

      <p className="mt-[30px] font-bold text-[15px] sm:text-[16px]">
        {name}
      </p>
    </motion.div>
  );
}