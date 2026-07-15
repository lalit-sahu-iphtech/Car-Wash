import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function AboutSection() {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutContent />

          <AboutImage />

        </div>

      </div>
    </section>
  );
}