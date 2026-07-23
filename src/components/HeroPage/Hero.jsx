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

        items-start
        gap-6

        pt-10
        pb-10

        px-16
        sm:px-10
        lg:px-3
        xl:ml-80
      "
    >
      {/* Left */}
      <div className="w-full lg:w-1/2 sm : mt-10 lg:mt-25">
        <HeroCard />
      </div>

      {/* Right */}
      <div className="w-full lg:w-[70%] flex justify-start mt-3 sm:mt-5">
        <div
          className="
         
             xl:ml-50
            w-[90%]
            max-w-[330px]

            h-[220px]
            sm:w-[92%]
            sm:max-w-[380px]
            sm:h-[360px]

            md:max-w-[450px]
            md:h-[340px]

            lg:max-w-none
            lg:w-[650px]
            lg:h-[680px]

            rounded-[22px]
            overflow-hidden
          "
        >
          <img
            src={heroImg}
            alt="Car Wash"
            className="w-full h-full object-cover"
          />
        </div>
</div>

    </section>
  );
}