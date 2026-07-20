import { contactData } from "../../data/contactData";

import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section
      className="
        bg-[#f5f5f5]
        py-16
        md:py-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1180px]
          mx-auto
          px-5
        "
      >
        {/* Top Section */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* Left */}

          <ContactForm />

          {/* Right */}

          <ContactImage
            image={contactData.image}
          />
        </div>

        {/* Bottom Cards */}

        <ContactInfo />

      </div>
    </section>
  );
}