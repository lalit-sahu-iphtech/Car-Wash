import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import faqBgImage from "../../assets/faq/faqImg.jpg";

export default function FaqBanner() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCard(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        className="
          relative
          mx-auto
          max-w-[1100px]
          px-5
          lg:px-0

          pb-14
          sm:pb-10
          lg:pb-0
        "
      >
        {/* Blue Background */}
        <motion.div
          initial={{
            opacity: 0,
            y: -120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            left-1/2
            top-[8%]
            sm:top-[12%]
            lg:top-[18%]
            -translate-x-1/2

            block

            h-[220px]
            sm:h-[320px]
            lg:h-[390px]

            w-[85%]
            sm:w-[75%]
            lg:w-[65%]

            rounded-[18px]
            bg-[#3569e8]

            z-10
          "
        />

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.45,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            relative
            z-20

            overflow-hidden
            rounded-[20px]

            shadow-xl

            h-[260px]
            sm:h-[420px]
            lg:h-[680px]
          "
        >
          <img
            src={faqBgImage}
            alt="FAQ"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </motion.div>

        {/* White Card */}
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: showCard ? 1 : 0,
          y: showCard ? 0 : 100,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}

          className="
            relative
            z-30

            -mt-14
            sm:-mt-12
            lg:absolute

            lg:left-1/2
            lg:bottom-[-40px]
            lg:-translate-x-1/2
            lg:mt-0

            mx-auto

            w-[92%]
            sm:w-[85%]
            lg:w-[80%]

            rounded-[18px]

            bg-white

            px-5
            py-6

            sm:px-8
            sm:py-8

            lg:px-12
            lg:py-10

            
          "
        >
          <h1
            className="
              text-center

              text-[32px]
              sm:text-[50px]
              lg:text-[90px]

              font-bold

              leading-none

              text-black
            "
          >
            FAQ
          </h1>

          <p
            className="
              mt-3
              sm:mt-5

              text-center

              text-[13px]
              sm:text-[15px]
              lg:text-[18px]

              text-[#666]
            "
          >
            Image from{" "}
            <span
              className="
                cursor-pointer
                underline
                text-black
              "
            >
              Freepik
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}