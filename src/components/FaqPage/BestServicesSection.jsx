import { motion } from "framer-motion";
import serviceImg from "../../assets/faq/faq-service.jpg";

export default function BestServicesSection() {
  return (
    <section className="overflow-hidden bg-[#f4f4f4] py-20 lg:py-24">
      <div
        className="
          mx-auto
          grid
          max-w-[1100px]
          items-center
          gap-14
          px-5
          lg:grid-cols-2
        "
      >
        {/* Image */}

        <motion.div
          initial={{
            opacity: 0,
            x: -120,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            overflow-hidden
            rounded-[22px]
            shadow-xl
          "
        >
          <img
            src={serviceImg}
            alt="Car Cleaning"
            className="
              h-[320px]
              w-full
              object-cover

              sm:h-[450px]

              lg:h-[500px]
            "
          />
        </motion.div>

        {/* Content */}

        <div>

          {/* Heading */}

          <motion.h2
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
              duration: 0.8,
            }}
            className="
              text-[34px]
              font-bold
              leading-tight

              sm:text-[42px]

              lg:text-[50px]
            "
          >
            Our Best Services You
          </motion.h2>

          {/* Paragraph */}

          <motion.p
            initial={{
              opacity: 0,
              x: 70,
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
              delay: 0.15,
              duration: 0.7,
            }}
            className="
              mt-7
              max-w-[560px]
              text-[16px]
              leading-8
              text-[#555]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua enim ad minim veniam.
          </motion.p>
                    {/* Phone */}

                    <motion.h3
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="
              mt-10

              text-[28px]
              sm:text-[34px]
              lg:text-[40px]

              font-bold

              leading-tight

              text-[#111]
            "
          >
            Call for book:
            <span className="text-[#2b60de]">
              {" "}
              8-800-10-500
            </span>
          </motion.h3>

          {/* Button */}

          <motion.button
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              delay: 0.45,
              duration: 0.7,
            }}
            className="
              mt-10

              rounded-lg

              border-2
              border-[#2b60de]

              bg-[#2b60de]

              px-10
              py-5

              text-[14px]
              font-bold
              tracking-[1px]

              text-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-white
              hover:text-[#2b60de]
            "
          >
            BOOK APPOINTMENT
          </motion.button>

        </div>
      </div>
    </section>
  );
}