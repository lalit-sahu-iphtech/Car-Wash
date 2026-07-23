import { motion } from "framer-motion";
import PricingImage from "./PricingImage";
import PricingCard from "./PricingCard";


export default function PricingSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[380px] bg-[#e5e5e5]"
      />

      <div className="absolute bottom-0 left-0 w-full h-[650px] bg-white" />

      <div className="relative z-10 pt-20 pb-32">
        <PricingImage />
        <PricingCard/>
      </div>
    </section>
  );
}