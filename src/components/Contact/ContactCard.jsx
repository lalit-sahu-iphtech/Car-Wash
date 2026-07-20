import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: "100vw" },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactCard({
  icon: Icon,
  title,
  text1,
  text2,
  stacked = false,
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="
        bg-[#3d64d8]
        rounded-[24px]
        px-6
        sm:px-8
        py-7
        sm:py-8
        transition-all
        duration-100
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="flex items-center gap-4">
        <Icon size={22} strokeWidth={2.2} className="text-white shrink-0" />
        <h3 className="text-white text-[17px] sm:text-[15px] font-bold uppercase tracking-wide">
          {title}
        </h3>
      </div>

      <div className="mt-2 pl-[5px]">
        <p className="text-white text-[14px] sm:text-[13px] leading-7">
          {text1}
        </p>
        <p
          className={`text-white text-[14px] sm:text-[13px] leading-7 ${
            stacked ? "mt-2" : ""
          }`}
        >
          {text2}
        </p>
      </div>
    </motion.div>
  );
}