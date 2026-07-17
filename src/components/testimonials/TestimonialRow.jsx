import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const rowVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function TestimonialRow({ items }) {
  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 px-5 sm:px-0"
    >
      {items.map((item, index) => (
        <TestimonialCard key={index} name={item.name} quote={item.quote} />
      ))}
    </motion.div>
  );
}