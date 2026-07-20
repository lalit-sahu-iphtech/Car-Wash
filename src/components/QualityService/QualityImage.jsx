import { motion } from "framer-motion";

export default function QualityImage({
  image,
  alt = "",
  direction = "left",
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -120 : 120, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={className}
    >
      <div className="overflow-hidden rounded-[20px] shadow-xl h-full w-full group">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
}