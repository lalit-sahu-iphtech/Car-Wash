import { motion } from "framer-motion";

export default function QualityButton({ children = "LEARN MORE" }) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className="
        mt-8 bg-[#3561d8] border-2 border-[#3561d8] text-white font-bold
        uppercase text-[13px] tracking-wide px-8 py-3 rounded-[10px]
        transition-all duration-300
        hover:bg-white hover:text-black hover:border-black hover:-translate-y-1
      "
    >
      {children}
    </motion.button>
  );
}