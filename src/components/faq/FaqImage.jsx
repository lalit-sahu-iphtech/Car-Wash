import { motion } from "framer-motion";

export default function FaqImage({ image, alt = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -220 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-[300px] sm:min-h-[380px] h-full rounded-[16px] overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}