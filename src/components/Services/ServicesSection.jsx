import { motion } from "framer-motion";
import ServicesHeading from "./ServicesHeading";
import ServicesCard from "./ServicesCard";
import { servicesData } from "../../data/servicesData";

export default function ServicesSection() {
  const firstRow = servicesData.slice(0, 3);
  const secondRow = servicesData.slice(3);

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* Heading */}

        <ServicesHeading />

        {/* First Row */}

        <motion.div
          initial={{
            opacity: 0,
            y: 180,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-[30px]
            mt-14
          "
        >
          {firstRow.map((item) => (
            <ServicesCard
              key={item.id}
              {...item}
            />
          ))}
        </motion.div>

        {/* Second Row */}

        <motion.div
          initial={{
            opacity: 0,
            y: 180,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-[30px]
            mt-[30px]
          "
        >
          {secondRow.map((item) => (
            <ServicesCard
              key={item.id}
              {...item}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}