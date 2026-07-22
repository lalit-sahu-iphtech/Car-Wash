import { motion } from "framer-motion";
import { contactInfo } from "../../data/contactData";
import ContactCard from "../Contact/ContactCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0,
    },
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
                mt-4
                sm:mt-6
                lg:mt-8

                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3

                gap-5
                lg:gap-8

                max-w-[340px]
                sm:max-w-none
                mx-auto
                sm:mx-0
"
>
      {contactInfo.map((item) => (
        <ContactCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          text1={item.text1}
          text2={item.text2}
          stacked={item.stacked}
        />
      ))}
    </motion.div>
  );
}