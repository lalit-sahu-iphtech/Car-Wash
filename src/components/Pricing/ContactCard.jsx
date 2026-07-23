import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

import contactImg from "../../assets/pricing/contact.jpg";

export default function ContactCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        bg-[#ededed]
        rounded-[28px]
        p-8
        sticky
        top-24
        h-fit
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-[22px]">
        <motion.img
          src={contactImg}
          alt="Contact"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="
            w-full
            h-[520px]
            object-cover
          "
        />
      </div>

      {/* Heading */}
      <h3
        className="
          mt-10
          text-center
          text-[38px]
          lg:text-[44px]
          font-extrabold
          leading-tight
          text-[#111]
        "
      >
        Call Us for find out More
      </h3>

      {/* Phone */}
      <div
        className="
          flex
          justify-center
          items-center
          gap-4
          mt-10
        "
      >
        <FaPhoneAlt
          className="
            text-[#f26d4d]
            text-[38px]
          "
        />

        <span
          className="
            text-[46px]
            font-black
            text-[#111]
          "
        >
          8-800-10-500
        </span>
      </div>
    </motion.div>
  );
}