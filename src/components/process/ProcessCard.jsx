import { motion } from "framer-motion";

export default function ProcessCard({
  icon,
  title,
  description,
  index,
}) {
  return (
    <motion.div
    initial={{
      opacity: 0,
      y:180,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: false,
      amount: 0.7,
      margin: "20px 0px",
    }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }}
    // <motion.div
    // initial={{
    //   opacity: 0,
    //   y: 180,
    // }}
    // whileInView={{
    //   opacity: 1,
    //   y: 0,
    // }}
    // viewport={{
    //   once: false,
    //   amount: 0.15,
    // }}
    // transition={{
    //   duration: 0.5,
    //   ease: "easeOut",
    // }}
    className="text-center group px-3"
    >
      <div
        className="
        w-24
        h-24
        md:w-28
        md:h-28
        rounded-full
        border-2
        border-white
        flex
        items-center
        justify-center
        mx-auto
        transition-all
        duration-300
        group-hover:-translate-y-3
      "
      >
        <img
          src={icon}
          alt={title}
          className="
          w-10
          h-10
          md:w-12
          md:h-12
          object-contain
          transition-all
          duration-300
          group-hover:scale-110
        "
        />
      </div>

      <h4
        className="
        text-white
        font-bold
        mt-5
        text-[18px]
        md:text-[20px]
      "
      >
        {index + 1}. {title}
      </h4>

      <p
        className="
        text-white/90
        italic
        leading-7
        mt-4
        text-[16px]
        md:text-[18px]
        max-w-[250px]
        mx-auto
      "
      >
        {description}
      </p>
    </motion.div>
  );
}