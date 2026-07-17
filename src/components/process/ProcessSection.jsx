import ProcessHeading from "./ProcessHeading";
import ProcessCard from "./ProcessCard";
import { processData } from "../../data/processData";

import processBg from "../../assets/process-bg.jpg";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <img
        src={processBg}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-110
          md:scale-100
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div
        className="
        relative
        z-10
        max-w-[1200px]
        mx-auto
        px-5
        py-16
        md:py-24
        lg:py-32
      "
      >
        <ProcessHeading />

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-y-14
          gap-x-8
          mt-14
          md:mt-20
        "
        >
          {processData.map((item, index) => (
            <ProcessCard
              key={item.id}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}