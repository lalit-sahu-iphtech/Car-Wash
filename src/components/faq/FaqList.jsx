import { useState, useRef } from "react";
import { motion } from "framer-motion";
import FaqItem from "./FaqItem";

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const itemRefs = useRef([]);

  const handleToggle = (index) => {
    const isOpening = openIndex !== index;
    setOpenIndex((prev) => (prev === index ? -1 : index));

    if (isOpening) {
      setTimeout(() => {
        itemRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 120);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 220 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full pl-15 pr-4 sm:pl-0 sm:pr-0"
    >
      {items.map((item, index) => (
        <div key={index} ref={(el) => (itemRefs.current[index] = el)}>
          <FaqItem
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        </div>
      ))}
    </motion.div>
  );
}