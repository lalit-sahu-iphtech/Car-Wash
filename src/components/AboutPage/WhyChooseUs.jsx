import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import {
  leftList,
  rightList,
  statsData,
} from "../../data/whyChooseData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heading = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const slide = {
  hidden: {
    opacity: 0,
    x: 90,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const flip = {
  hidden: {
    opacity: 0,
    rotateX: 180,
  },
  show: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f3f3] py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.25,
          }}
        >
          <motion.h2
            variants={heading}
            className="text-center text-[34px] sm:text-[48px] lg:text-[60px] font-bold tracking-[-1px] text-black"
          >
            Why Clients Choose Us?
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">

            <motion.div variants={slide}>
              <h3 className="text-[22px] font-semibold mb-5">
                The Best Car Wash
              </h3>

              <ul className="space-y-3">
                {leftList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-7 text-[#555]"
                  >
                    <FaCheck className="text-[#e06d53] mt-1 text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={slide}>
              <h3 className="text-[22px] font-semibold mb-5">
                What We Do Our Services
              </h3>

              <ul className="space-y-3">
                {rightList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-7 text-[#555]"
                  >
                    <FaCheck className="text-[#e06d53] mt-1 text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">

            {statsData.map((item) => (
              <motion.div
                key={item.id}
                variants={flip}
                whileHover={{
                  y: -6,
                }}
                className="bg-white rounded-3xl px-8 py-12 shadow-sm text-center"
              >
                <h3 className="text-[#2e61d4] text-[42px] font-bold">
                  {item.number}
                </h3>

                <p className="mt-5 text-[22px] font-semibold text-black">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
}