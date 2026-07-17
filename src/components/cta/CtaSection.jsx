import { cta } from "../../data/ctaData";
import CtaHeading from "./CtaHeading";
import CtaButton from "./CtaButton";

export default function CtaSection() {
  return (
    <section className="bg-[#3561d8] py-14 lg:py-16 overflow-hidden">
      <div
        className="
          max-w-[1140px] mx-auto px-5 sm : px-24 lg:px-40
          flex flex-col sm:flex-row
          items-center sm:items-center
          justify-center sm:justify-between
          gap-8 sm:gap-10
        "
      >
        <CtaHeading text={cta.heading} />
        <CtaButton text={cta.buttonText} />
      </div>
    </section>
  );
}