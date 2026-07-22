import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import faqImage from "../../assets/faq/faq-page.jpg";

const faqContent = {
  heading: "CAR WASH FAQS ANSWERED",
  subtext:
    "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  image: faqImage,
  imageCredit: "Freepik",
};

const faqItems = [
  {
    question: "How often should I wash my car?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur.",
  },
  {
    question: "What types of vehicles can you wash?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor.",
  },
  {
    question: "Is the wash safe for convertibles?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.",
  },
  {
    question: "Do you offer interior cleaning services?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.",
  },
  {
    question: "Can I stay in my car during the wash?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.",
  },
];

export default function FaqPageSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1150px] px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-[720px] text-center"
        >
          <h2
            className="
              text-[30px]
              sm:text-[40px]
              lg:text-[46px]
              font-bold
              uppercase
              tracking-[-1px]
              text-[#111]
            "
          >
            {faqContent.heading}
          </h2>

          <p
            className="
              mt-6
              text-[16px]
              italic
              leading-8
              text-[#666]
            "
          >
            {faqContent.subtext}
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid items-start gap-14 lg:grid-cols-2">

          {/* FAQ List */}

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-2 lg:order-1"
          >
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-6"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    text-left
                  "
                >
                  <span
                    className="
                      text-[17px]
                      font-bold
                      text-[#111]
                    "
                  >
                    {item.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                                {/* Answer */}

                                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                    marginTop: openIndex === index ? 18 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="overflow-hidden"
                >
                  <p
                    className="
                      leading-8
                      text-[16px]
                      text-[#555]
                    "
                  >
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            ))}

            <p
              className="
                mt-10
                text-center
                text-[17px]
                text-[#666]
              "
            >
              Image from{" "}
              <span className="cursor-pointer underline text-black">
                {faqContent.imageCredit}
              </span>
            </p>
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 150,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-1
              lg:order-2
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[20px]
                shadow-xl
                h-[320px]
                sm:h-[450px]
                lg:h-[700px]
              "
            >
              <img
                src={faqContent.image}
                alt="FAQ"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}