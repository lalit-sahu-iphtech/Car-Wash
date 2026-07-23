import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#fff] py-12 sm:py-16 lg:py-20  overflow-x-clip">
      <div className="max-w-[1140px] mx-auto px-5">

      <div className="grid lg:grid-cols-[52%_48%] gap-6 lg:gap-4 items-center">

          

          <AboutImage />
          <AboutContent />

        </div>

      </div>
    </section>
  );
}