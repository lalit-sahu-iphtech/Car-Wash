import { motion } from "framer-motion";

export default function FaqHeading({ heading, subtext }) {
  return (
    <div className="text-center max-w-[700px] mx-auto mb-10 lg:mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold uppercase tracking-wide"
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 text-[14px] sm:text-[15px] italic text-[#555]"
      >
        {subtext}
      </motion.p>
    </div>
  );
}