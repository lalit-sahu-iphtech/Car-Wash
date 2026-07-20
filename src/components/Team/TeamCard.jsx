import { motion } from "framer-motion";

export default function TeamCard({ image, name, role }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className="
        flex
        flex-col
        items-center
        text-center
        group
      "
    >
      {/* Image */}

      <div
        className="
          overflow-hidden
          rounded-[28px]
          w-full
          max-w-[275px]
        "
      >
        <img
          src={image}
          alt={name}
          className="
            w-[250px]
            h-[250px]
            sm:h-[200px]
            lg:h-[250px]
            object-cover
            transition-all
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Name */}

      <h3
        className="
          mt-5
          text-[#111]
          text-[20px]
          font-bold
        "
      >
        {name}
      </h3>

      {/* Role */}

      <p
        className="
          mt-5
          text-[#333]
          text-[16px]
          sm:text-[17px]
          font-normal
        "
      >
        {role}
      </p>
    </motion.div>
  );
}