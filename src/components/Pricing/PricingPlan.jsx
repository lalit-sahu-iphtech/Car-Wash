import { motion } from "framer-motion";

import pricingData from "./pricingData";
import PlanCard from "./PlanCard";
import ContactCard from "./ContactCard";

export default function PricingPlan() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[55px] font-extrabold text-[#111]">
            Our pricing plan
          </h2>

          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            Simple pricing packages with professional quality service.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start">

          {/* Left Side */}
          <div className="space-y-8">
            {pricingData.map((plan, index) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                index={index}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="lg:sticky lg:top-24">
            <ContactCard />
          </div>

        </div>
      </div>
    </section>
  );
}