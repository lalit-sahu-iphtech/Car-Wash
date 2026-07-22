import { contactData } from "../../data/contactData";
import ContactForm from "../Contact/ContactForm";
import ContactImage from "../Contact/ContactImage";
import ContactInfo from "./ContactInfo";
import ContactBanner from "./ContactBanner";

export default function ContactSectionPage() {
    return (
        <section
          id="contact"
          className="
            bg-white
            overflow-hidden
          "
        >
              <ContactBanner/>
          <div
            className="
              max-w-[1180px]
              mx-auto
              px-6
              lg:px-0
            "
          >
          
            {/* Top Contact Cards */}
            <ContactInfo />
    
            {/* Form + Image */}
            <div
              className="
              mt-20
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
              items-center
            "
            >
              <ContactForm />
              <ContactImage image={contactData.image} />
            </div>
          </div>
        </section>
      );
    }