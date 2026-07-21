import ServicesHeading from "./ServicesHeading";
import ServicesCard from "./ServicesCard";
import { servicesData } from "../../data/servicesData";

export default function ServicesSection() {
  const firstRow = servicesData.slice(0, 3);
  const secondRow = servicesData.slice(3);

  return (
    <section id="services" className="bg-[#f5f5f5] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* Heading */}
        <ServicesHeading />

        {/* First Row */}
        <div
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
        </div>

        {/* Second Row */}
        <div
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
        </div>

      </div>
    </section>
  );
}