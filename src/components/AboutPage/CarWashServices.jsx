import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { servicesData } from "../../data/servicesData2";

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

const content = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CarWashServices() {
  const [activeTab, setActiveTab] = useState("full-services");

  const current = servicesData.find(
    (item) => item.id === activeTab
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-5">

        {/* Heading */}

        <motion.h2
          variants={heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="
          text-center
          text-[26px]
          sm:text-[38px]
          lg:text-[60px]
          font-bold
          tracking-[-1px]
          mb-8
          sm:mb-10
          lg:mb-14
        "
        >
          Car Wash Services
        </motion.h2>

        {/* Tabs */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">

          {servicesData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                rounded-xl
                lg:rounded-t-xl
                lg:rounded-b-none
                py-3
                sm:py-4
                lg:py-5
                px-3
                sm:px-4
                text-[13px]
                sm:text-[15px]
                lg:text-[16px]
                font-semibold
                leading-snug
                transition-all
                duration-300

                ${
                  activeTab === item.id
                    ? "bg-[#2e61d4] text-white"
                    : "bg-[#eeeeee] hover:bg-[#2e61d4] hover:text-white"
                }
              `}
            >
              {item.label}
            </button>
          ))}

        </div>

        {/* Content */}

        <motion.div
          key={current.id}
          variants={content}
          initial="hidden"
          animate="show"
          className="
          bg-[#f4f4f4]
          rounded-2xl
          lg:rounded-b-2xl
          lg:rounded-t-none
          mt-3
          lg:mt-0
          px-5
          sm:px-6
          lg:px-8
          py-6
          sm:py-8
          lg:py-10
          shadow-sm
        "
        >
          <p
            className="
            text-[14px]
            sm:text-[15px]
            lg:text-[16px]
            leading-6
            sm:leading-7
            lg:leading-8
            text-[#555]
          "
          >
            {current.description}
          </p>

          <ul className="mt-5 sm:mt-6 lg:mt-8 space-y-3 sm:space-y-4">

            {current.points.map((item) => (
              <li
                key={item}
                className="
                flex
                items-start
                sm:items-center
                gap-3
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                font-medium
              "
              >
                <FaCheck className="text-black text-[12px] sm:text-[13px] mt-1 sm:mt-0 shrink-0" />

                {item}
              </li>
            ))}

          </ul>

        </motion.div>

      </div>
    </section>
  );
}