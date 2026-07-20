import { motion } from "framer-motion";
import { contactInfo } from "../../data/contactData";
import ContactCard from "./ContactCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0 }, // no stagger — sab ek saath
  },
};

export default function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="
        mt-12
        sm:mt-14
        lg:mt-20
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-5
        lg:gap-8
      "
    >
      {contactInfo.map((item) => (
        <ContactCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          text1={item.text1}
          text2={item.text2}
        />
      ))}
    </motion.div>
  );
}