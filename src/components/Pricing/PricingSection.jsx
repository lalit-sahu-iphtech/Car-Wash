import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PricingImage from "./PricingImage";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCard(window.scrollY > 100); // is value ko 50/80/120 se adjust kar sakte ho
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[200px] sm:h-[300px] lg:h-[380px] bg-[#e5e5e5]"
      />

      <div className="absolute bottom-0 left-0 w-full h-[280px] sm:h-[450px] lg:h-[650px] bg-white" />

      <div className="relative z-10 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
        <PricingImage />
        <PricingCard showCard={showCard} />
      </div>
    </section>
  );
}