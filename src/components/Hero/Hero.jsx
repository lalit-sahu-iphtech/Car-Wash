import HeroCard from "./HeroCard";
import heroImg from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
    className="
      relative
      h-[560px]
      sm:h-[620px]
      md:h-[700px]
      lg:h-[84vh]
      overflow-hidden
    "
  >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat lg:bg-fixed"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "center top",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-[1160px]
          mx-auto

          flex
          items-center

          h-full
          pt-24
          pb-12

          px-5
          sm:px-6
          lg:px-5

          lg:-translate-y-32
        "
      >
        <HeroCard />
      </div>
    </section>
  );
}