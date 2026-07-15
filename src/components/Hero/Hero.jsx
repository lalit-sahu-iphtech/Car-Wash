import HeroCard from "./HeroCard";
import heroImg from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Hero Card */}
      <div className="relative z-10 max-w-[1140px] mx-auto h-full flex items-center">
        <HeroCard />
      </div>

    </section>
  );
}