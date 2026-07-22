import { faqContent, faqItems } from "../../data/faqData";
import FaqHeading from "./FaqHeading";
import FaqList from "./FaqList";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5">
        <FaqHeading
          heading={faqContent.heading}
          subtext={faqContent.subtext}
        />

        <FaqList items={faqItems} />
      </div>
    </section>
  );
}