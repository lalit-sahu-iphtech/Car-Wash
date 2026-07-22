import HeroCard from "./HeroCard";
import heroImg from "../../assets/images/hero-page.jpg";


export default function Hero() {
  return (
    <section
      id="home"
      className="
        max-w-[1160px]
        mx-auto

        flex
        flex-col
        lg:flex-row
        items-center
        gap-10
        lg:gap-8

        pt-24
        pb-16

        px-5
        sm:px-6
        lg:px-5
      "
    >
      {/* Left: Text content */}
      <div className="w-full lg:w-1/2">
        <HeroCard />
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-1/2">
        <div
          className="
            w-full
            h-[320px]
            sm:h-[420px]
            lg:h-[560px]

            rounded-2xl
            overflow-hidden
          "
        >
          <img
            src={heroImg}
            alt="Car wash"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
     <div>
  
     </div>
    </section>
  );
}