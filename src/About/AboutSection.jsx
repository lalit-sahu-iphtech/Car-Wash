import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function AboutSection() {
  return (
    <section className="bg-[#f1f1ef] py-12 sm:py-16 lg:py-20 overflow-x-clip">
      <div className="max-w-[1140px] mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          <AboutContent />

          <AboutImage />

        </div>

      </div>
    </section>
  );
}