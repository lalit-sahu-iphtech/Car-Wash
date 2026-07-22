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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5">

        {/* Heading */}

        <motion.h2
          variants={heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="
          text-center
          text-[34px]
          sm:text-[48px]
          lg:text-[60px]
          font-bold
          tracking-[-1px]
          mb-14
        "
        >
          Car Wash Services
        </motion.h2>

        {/* Tabs */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {servicesData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                rounded-t-xl
                py-5
                px-4
                text-[16px]
                font-semibold
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
          rounded-b-2xl
          px-8
          py-10
          shadow-sm
        "
        >
          <p
            className="
            text-[16px]
            leading-8
            text-[#555]
          "
          >
            {current.description}
          </p>

          <ul className="mt-8 space-y-4">

            {current.points.map((item) => (
              <li
                key={item}
                className="
                flex
                items-center
                gap-3
                text-[16px]
                font-medium
              "
              >
                <FaCheck className="text-black text-[13px]" />

                {item}
              </li>
            ))}

          </ul>

        </motion.div>

      </div>
    </section>
  );
}