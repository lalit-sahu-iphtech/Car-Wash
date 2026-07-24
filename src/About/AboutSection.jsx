import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f1f1ef] py-5  sm:py-8 lg:py-10 overflow-x-clip">
      <div className="max-w-[1140px] mx-auto px-5">

        <div className="grid lg:grid-cols-[58%_42%] gap-10 lg:gap-1 items-center">

          <AboutContent />

          <AboutImage />

        </div>

      </div>
    </section>
  );
}