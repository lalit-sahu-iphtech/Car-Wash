import { motion } from "framer-motion";
import { contactData } from "../../data/contactData";
import ContactInput from "./ContactInput";
import ContactButton from "./ContactButton";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      <h2 className="text-[28px] sm:text-[34px] lg:text-[35px] font-bold leading-tight text-[#111]">
        {contactData.title}
      </h2>

      <form className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <ContactInput label="Name" placeholder="Enter your Name" />
          <ContactInput
            label="Email"
            type="email"
            placeholder="Enter a valid email address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
          <ContactInput
            label="Phone"
            placeholder="Enter your phone (e.g. +14155552675)"
          />
          <ContactInput label="Subject" placeholder="" />
        </div>

        <div className="mt-4">
          <ContactInput label="Message" textarea placeholder="" />
        </div>

        <ContactButton>{contactData.buttonText}</ContactButton>
      </form>
    </motion.div>
  );
}