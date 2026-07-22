import { motion } from "framer-motion";
import faqBgImage from "../../assets/faq/faqImg.jpg";

export default function FaqBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div
        className="
          relative
          mx-auto
          max-w-[1100px]
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
            left-1/2
            top-[18%]
            -translate-x-1/2

            hidden
            lg:block

            h-[390px]
            w-[65%]

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

            h-[300px]
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

          {/* White Card */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
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
              delay: 0.35,
              duration: 0.7,
            }}
            className="
              absolute

              left-1/2
              bottom-[-40px]
              -translate-x-1/2

              w-[92%]
              sm:w-[85%]
              lg:w-[80%]

              rounded-[18px]

              bg-white

              px-6
              py-7

              lg:px-12
              lg:py-10

              shadow-xl
            "
          >
            <h1
              className="
                text-center

                text-[42px]
                sm:text-[60px]
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
                mt-5

                text-center

                text-[15px]
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
        </motion.div>
      </div>
    </section>
  );
}