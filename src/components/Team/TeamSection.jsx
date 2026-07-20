import TeamHeading from "./TeamHeading";
import TeamGrid from "./TeamGrid";

export default function TeamSection() {
  return (
    <section
      className="
        bg-[#ffffff]
        py-15
        sm:py-20
        lg:py-23
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1180px]
          mx-auto
          px-25
        "
      >
        {/* Heading */}

        <TeamHeading />

        {/* Team Members */}

        <TeamGrid />
      </div>
    </section>
  );
}