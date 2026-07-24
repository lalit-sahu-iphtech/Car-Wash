import { motion } from "framer-motion";
import { FaPhoneAlt, FaCheck } from "react-icons/fa";

import cardImg from "../../assets/pricing/contact.jpg";

const plans = [
  {
    id: 1,
    title: "STANDARD PACKAGE",
    price: "$250",
    features: [
      "Wheel & steering checkup",
      "Engine services",
      "Automated testing lanes",
    ],
  },
  {
    id: 2,
    title: "COOLING PACKAGE",
    price: "$350",
    features: [
      "Wheel & steering checkup",
      "Engine services",
      "Automated testing lanes",
    ],
  },
  {
    id: 3,
    title: "PREMIUM PACKAGE",
    price: "$450",
    features: [
      "Wheel & steering checkup",
      "Engine services",
      "Automated testing lanes",
    ],
  },
];

export default function PricingPlanSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-5">

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            rotateX: -90,
          }}
          whileInView={{
            opacity: 1,
            rotateX: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          style={{
            transformOrigin: "top",
          }}
          className="
          text-center
          text-[28px]
          sm:text-[42px]
          lg:text-[65px]
          font-medium
          text-[#111]
          mb-10
          sm:mb-14
          lg:mb-20
        "
        >
          Our pricing plan
        </motion.h2>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 sm:gap-12 lg:gap-8 items-start">

          {/* Left */}

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">

            {plans.map((plan, index) => (

              <motion.div
                key={plan.id}
                initial={{
                  opacity: 0,
                  y: -60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: .25,
                }}
                transition={{
                  duration: .8,
                  delay: index * .15,
                }}
                className="
                  grid
                  md:grid-cols-[220px_1fr]
                  gap-6
                  sm:gap-10
                 
                  pb-8
                  sm:pb-12
                "
              >

                {/* Left Content */}

                {/* <div >

                  <h3
                    className="
                      uppercase
                      text-[15px]
                      sm:text-[18px]
                      lg:text-[20px]
                      font-bold
                      leading-tight
                      text-[#222]
                    "
                  >
                    {plan.title}
                  </h3>

                  <h2
                    className="
                      text-[#3565db]
                      text-[32px]
                      sm:text-[38px]
                      lg:text-[45px]
                      font-bold
                      mt-3
                      sm:mt-5
                      lg:mt-6
                    "
                  >
                    {plan.price}
                  </h2>

                  <button
                    className="
                        mt-5
                        sm:mt-7
                        lg:mt-8
                        md:ml-40
                        lg:ml-56
                        xl:ml-64
                        inline-flex
                        items-center
                        justify-center
                        whitespace-nowrap
                        px-6
                        sm:px-8
                        h-[50px]
                        sm:h-[56px]
                        lg:h-[60px]
                        border-2
                        border-[#3565db]
                        bg-[#3565db]
                        rounded-[10px]
                        text-white
                        text-[12px]
                        sm:text-[13px]
                        lg:text-[14px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        hover:bg-white
                        hover:text-[#3565db]
                        transition-all
                    "
                    >
                    PURCHASE NOW
                    </button>

                </div> */}
                {/* Left Content */}
<div className="flex flex-col">

<h3
  className="
    uppercase
    text-[15px]
    sm:text-[18px]
    lg:text-[20px]
    font-bold
    leading-tight
    text-[#222]
  "
>
  {plan.title}
</h3>

<h2
  className="
    text-[#3565db]
    text-[32px]
    sm:text-[38px]
    lg:text-[45px]
    font-bold
    mt-3
    sm:mt-5
    lg:mt-6
  "
>
  {plan.price}
</h2>

<button
  className="
  self-end
  -translate-x-45
  sm:translate-x-60
  lg:translate-x-65
      mt-5
      sm:mt-7
      lg:mt-8
      inline-flex
      items-center
      justify-center
      whitespace-nowrap
      px-6
      sm:px-8
      h-[50px]
      sm:h-[56px]
      lg:h-[60px]
      border-2
      border-[#3565db]
      bg-[#3565db]
      rounded-[10px]
      text-white
      text-[12px]
      sm:text-[13px]
      lg:text-[14px]
      font-bold
      uppercase
      tracking-[2px]
      hover:bg-white
      hover:text-[#3565db]
      transition-all
  "
  >
  PURCHASE NOW
  </button>

</div>

                {/* Features */}

                <ul className="space-y-3 sm:space-y-4 mt-1 sm:mt-2 ">

                  {plan.features.map((item, i) => (

                    <li
                      key={i}
                      className="
                        flex
                        items-center
                        gap-3
                        text-[14px]
                        sm:text-[16px]
                        lg:text-[18px]
                        text-[#555]
                      "
                    >
                      <FaCheck className="text-gray-400 text-sm" />

                      {item}

                    </li>

                  ))}

                </ul>
               
              </motion.div>

            ))}

          </div>

          {/* Right Card */}

          <motion.div
            initial={{
              opacity: 0,
              rotateX: -180,
            }}
            whileInView={{
              opacity: 1,
              rotateX: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            style={{
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
            }}
            className="
              bg-[#e8e8e8]
              rounded-[24px]
              p-4
              sm:p-5
              lg:p-6
              shadow-lg
              lg:sticky
              lg:top-24
            "
          >
            {/* Image */}

            <div
              className="
                overflow-hidden
                rounded-[20px]
              "
            >
              <img
                src={cardImg}
                alt="Car Cleaning"
                className="
                  w-full
                  h-[220px]
                  sm:h-[320px]
                  lg:h-[550px]
                  object-cover
                  rounded-[20px]
                "
              />
            </div>

            {/* Content */}

            <div className="text-center pt-6 sm:pt-8 lg:pt-10">

              <h3
                className="
                  text-[22px]
                  sm:text-[28px]
                  lg:text-[36px]
                  font-bold
                  text-[#111]
                  leading-tight
                "
              >
                Call Us for find out More
              </h3>

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  mt-5
                  sm:mt-6
                  lg:mt-8
                "
              >
                <FaPhoneAlt
                  className="
                    text-[#f56b4b]
                    text-[20px]
                    sm:text-[24px]
                    lg:text-[28px]
                  "
                />

                <span
                  className="
                    text-[26px]
                    sm:text-[32px]
                    lg:text-[42px]
                    font-extrabold
                    text-[#111]
                  "
                >
                  8-800-10-500
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}