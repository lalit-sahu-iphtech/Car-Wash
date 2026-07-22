import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4 py-5"
      >
        <span className="font-bold text-[15px] sm:text-[17px]">
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={22} className="text-[#666]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] sm:text-[16px] leading-8 text-[#444] max-w-[900px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}