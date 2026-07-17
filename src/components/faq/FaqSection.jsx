import { faqContent, faqItems } from "../../data/faqData";
import FaqHeading from "./FaqHeading";
import FaqImage from "./FaqImage";
import FaqList from "./FaqList";

export default function FaqSection() {
  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5">
        <FaqHeading
          heading={faqContent.heading}
          subtext={faqContent.subtext}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <FaqImage image={faqContent.image} />
          <FaqList items={faqItems} />
        </div>

        <p className="text-center text-[14px] mt-10">
          Image from{" "}
          <span className="underline">{faqContent.imageCredit}</span>
        </p>
      </div>
    </section>
  );
}