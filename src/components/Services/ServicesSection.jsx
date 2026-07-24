import ServicesHeading from "./ServicesHeading";
import ServicesCard from "./ServicesCard";
import { servicesData } from "../../data/servicesData";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#f5f5f5] py-16 md:py-24 lg:py-21 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* Heading */}
        <ServicesHeading />

        {/* All cards in one grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-[30px]
            mt-14
          "
        >
          {servicesData.map((item) => (
            <ServicesCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}