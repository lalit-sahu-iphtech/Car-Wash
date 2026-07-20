import { motion } from "framer-motion";
import { qualityTop } from "../../data/qualityData";
import QualityButton from "./QualityButton";

export default function QualityText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-[340px]"
    >
      <h2 className="text-[30px] lg:text-[25px] font-bold leading-tight">
        {qualityTop.title}
      </h2>

      <p className="mt-6 text-[15px] leading-7 text-[#555]">
        {qualityTop.description}
      </p>

      <QualityButton>VIEW ALL SERVICES</QualityButton>

      <p className="mt-7 text-[15px]">
        Images from <span className="underline">Freepik</span>
      </p>
    </motion.div>
  );
}