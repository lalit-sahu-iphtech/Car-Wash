import ProcessHeading from "./ProcessHeading";
import ProcessCard from "./ProcessCard";
import { processData } from "../../data/processData";



export default function ProcessSection() {
  return (
    <section id="process"className="relative overflow-hidden ">
      {/* Background */}
     

      {/* Overlay */}
      <div className="absolute inset-0  bg-[#2e61d4]" />

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
        <ProcessHeading/>

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