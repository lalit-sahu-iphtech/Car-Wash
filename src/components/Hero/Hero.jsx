import HeroCard from "./HeroCard";
import heroImg from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-[1160px] mx-auto min-h-screen flex items-center px-5 sm:px-6 lg:px-0">
        <HeroCard />
      </div>
    </section>
  );
}