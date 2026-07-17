import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e5e5e5] py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4 pl-8 sm:pl-0"
      >
        <span className="font-bold text-xs sm:text-[16px]">
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-[#666]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
        //   <motion.div
        //     initial={{ height: 0, opacity: 0 }}
        //     animate={{ height: "auto", opacity: 1 }}
        //     exit={{ height: 0, opacity: 0 }}
        //     transition={{ duration: 0.35, ease: "easeInOut" }}
        //     className="overflow-hidden"
        //   >
            <p className="pt-4 pl-8 sm:pl-0 text-[14px] sm:text-[15px] leading-7 text-[#444]">
              {answer}
            </p>
         // </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}