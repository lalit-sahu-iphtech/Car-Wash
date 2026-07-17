import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { qualityBottom } from "../../data/qualityData";
import QualityButton from "./QualityButton";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function QualityChecklist() {
  return (
    <div className="max-w-[270px] mx-auto translate-x-6 lg:translate-x-0 mt-6 lg:mt-0 lg:max-w-[320px] lg:mx-0 lg:pb-10 lg:self-end">
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-1 sm:space-y-0"
      >
        {qualityBottom.features.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex gap-3 sm:gap-2 items-start"
          >
           <Check size={13} strokeWidth={3} className="text-[#3561d8] mt-1 shrink-0" />
            <span className="text-[14px] sm:text-[13px] leading-7">{item}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.65 }}
      >
        <QualityButton>LEARN MORE</QualityButton>
      </motion.div>
    </div>
  );
}