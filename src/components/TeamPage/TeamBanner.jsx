import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import aboutImg from "../../assets/team/team-banner.jpg";

export default function AboutBanner() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCard(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div
        className="
          relative
          max-w-[900px]
          mx-auto
          h-[640px]

          lg:h-[640px]

          max-lg:h-auto
          max-lg:flex
          max-lg:flex-col

          px-5
          lg:px-0
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
            top-[13%]
            left-[10%]
            right-0
            bottom-0

            rounded-t-[22px]
            bg-[#2e61d4]

            z-0

            max-lg:hidden
          "
        />

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: -150,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            absolute
            top-0
            left-0

            w-[82%]
            h-[88%]

            rounded-[22px]
            overflow-hidden
            shadow-2xl

            z-10

            max-lg:relative
            max-lg:top-0
            max-lg:left-0
            max-lg:w-full
            max-lg:h-[380px]
          "
        >
          <img
            src={aboutImg}
            alt="About"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* White Card */}
        <motion.div
          initial={{
            opacity: 0,
            x: 150,
          }}
          animate={
            showCard
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: 150,
                }
          }
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            absolute

            left-[27%]
            right-[8%]
            bottom-0

            bg-[#f5f5f5]

            rounded-t-[22px]

            px-10
            py-10

            

            z-15

            max-lg:relative
            max-lg:left-0
            max-lg:top-[-40px]
            max-lg:w-full
            max-lg:px-7
            max-lg:py-8
          "
        >
          <h2
            className="
              text-[34px]
              sm:text-[48px]
              lg:text-[56px]

              leading-none

              font-extrabold

              tracking-[-1px]

              text-black
            "
          >
            Our Team
          </h2>

          <p
            className="
              mt-6
              text-[15px]
              text-[#777]
            "
          >
            Image from{" "}
            <span className="underline text-black cursor-pointer">
              Freepik
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}