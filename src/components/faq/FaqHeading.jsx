import { motion } from "framer-motion";

export default function FaqHeading({ heading, subtext }) {
  return (
    <div className="text-center max-w-[700px] mx-auto mb-10 lg:mb-12">
      <motion.h2
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left center" }}
        className="text-[30px] sm:text-[34px] lg:text-[38px] font-bold uppercase tracking-wide"
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left center" }}
        className="mt-3 text-[14px] sm:text-[15px] italic text-[#555]"
      >
        {subtext}
      </motion.p>
    </div>
  );
}