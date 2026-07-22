import { motion } from "framer-motion";
import aboutImg from "../../assets/images/about-banner.jpg";

export default function AboutBanner() {
  return (
    <section className="bg-[#f4f4f4] py-16 lg:py-24 overflow-hidden">
      <div
        className="
          relative
          max-w-[980px]
          mx-auto
          h-[850px]

          lg:h-[850px]

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
            top-0
            right-[32%]

            w-[65%]
            h-[770px]

            rounded-[22px]
            bg-[#2e61d4]

            z-10

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
            top-[60px]
            right-[22%]

            w-[90%]
            h-[646px]

            rounded-[22px]
            overflow-hidden
            shadow-2xl

            z-20

            max-lg:relative
            max-lg:top-0
            max-lg:right-0
            max-lg:w-full
            max-lg:h-[420px]
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
            delay: 0.4,
          }}
          className="
            absolute

            top-[45%]
            left-[50%]

            w-[60%]

            bg-white

            rounded-[22px]

            px-10
            py-14

            shadow-xl

            z-30

            max-lg:relative
            max-lg:left-0
            max-lg:top-[-40px]
            max-lg:w-full
            max-lg:px-7
            max-lg:py-8
          "
        >
          {/* Heading */}

          <h2
            className="
              text-[34px]
              sm:text-[48px]
              lg:text-[60px]

              leading-none

              font-extrabold

              tracking-[-1px]

              text-black
            "
          >
            About Us
          </h2>

          {/* Description */}

          <p
            className="
              mt-8

              text-[16px]

              leading-8

              text-[#555]
            "
          >
            Massa ultricies mi quis hendrerit. Ac ut consequat semper
            viverra nam. Libero id faucibus nisl tincidunt eget nullam non
            nisi est. Arcu odio ut sem nulla. Amet tellus cras adipiscing
            enim.
          </p>

          {/* Source */}

          <p
            className="
              mt-7

              text-[15px]

              text-[#777]
            "
          >
            Image from{" "}
            <span className="underline text-black cursor-pointer">
              Freepik
            </span>
          </p>

          {/* Button */}

          <button
            className="
              mt-8

              bg-[#2e61d4]

              hover:bg-[#214fc0]

              text-white

              font-bold

              tracking-[1px]

              text-[14px]

              px-10
              py-5

              rounded-md

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >
            BOOK APPOINTMENT
          </button>
        </motion.div>
      </div>
    </section>
  );
}