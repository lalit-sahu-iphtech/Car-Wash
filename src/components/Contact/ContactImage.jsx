import { motion } from "framer-motion";

export default function ContactImage({ image }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="flex justify-center lg:justify-end"
    >
      <div
        className="
          overflow-hidden
          rounded-[28px]
          group
          shadow-xl
          w-full
          max-w-[520px]
        "
      >
        <img
          src={image}
          alt="Contact"
          className="
            w-full
            h-[350px]
            sm:h-[400px]
            lg:h-[500px]
            object-cover
            transition-all
            duration-500
            
          "
        />
      </div>
    </motion.div>
  );
}