import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/services/service-banner.jpg";

// Card Icons (Replace with your own)
import icon1 from "../../assets/features/car.png";
import icon2 from "../../assets/features/machine.png";
import icon3 from "../../assets/features/spray.png";
import icon4 from "../../assets/features/clean.png";



const features = [
  {
    id: 1,
    icon: icon1,
    title: "Contactless Washing",
    description:
      "Sample text. Click to select the Text Element.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Safety Materials",
    description:
      "Sample text. Click to select the Text Element.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Modern Equipment",
    description:
      "Sample text. Click to select the Text Element.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Extensive Cleaning",
    description:
      "Sample text. Click to select the Text Element.",
  },
];

export default function ServiceBanner() {
  return (
    <section className="relative overflow-hidden">

      {/* ================= HERO IMAGE ================= */}

      <div
        className="
          relative
          h-[720px]
          sm:h-[760px]
          lg:h-[780px]
        "
      >
        <div
        className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/30
            via-black/10
            to-transparent
        "
        />
        <img
          src={heroImg}
          alt="Service Banner"
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* Optional Light Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-white/10
          "
        />
      </div>

      {/* ================= DARK BACKGROUND ================= */}

      <div
        className="
          bg-[#333333]
          h-[220px]
          lg:h-[240px]
        "
      />

      {/* ================= FEATURE CARDS ================= */}

      <div
        className="
          absolute

          left-1/2
          -translate-x-1/2

          top-[520px]

          lg:top-[560px]

          w-full
          max-w-[1280px]

          px-5
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4

            gap-6
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                scale: 0.45,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white

                rounded-[24px]

                shadow-[0_20px_45px_rgba(0,0,0,0.12)]

                px-10
                py-12

                text-center

                transition-all
              "
            >
              {/* ---------- ICON ---------- */}

              <motion.div
                initial={{
                  rotate: -360,
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.25 + index * 0.15,
                  type: "spring",
                }}
                className="
                  flex
                  justify-center
                  mb-8
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="
                    w-[90px]
                    h-[90px]
                    object-contain
                  "
                />
              </motion.div>
                            {/* ---------- TITLE ---------- */}

                            <motion.h3
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.45 + index * 0.15,
                }}
                className="
                  text-[18px]
                  lg:text-[20px]

                  font-bold

                  text-[#222]

                  mb-5
                "
              >
                {item.title}
              </motion.h3>

              {/* ---------- DESCRIPTION ---------- */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + index * 0.15,
                }}
                className="
                  text-[16px]
                  leading-9

                  text-[#555]

                  mb-8
                "
              >
                {item.description}
              </motion.p>

              {/* ---------- BOTTOM BLUE LINE ---------- */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: 70,
                  opacity: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.65 + index * 0.15,
                }}
                className="
                  h-[3px]

                  bg-[#2e61d4]

                  mx-auto

                  rounded-full
                "
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom spacing so cards don't overlap next section */}

      <div
        className="
          h-[420px]

          lg:h-[250px]

          sm:h-[360px]
        "
      />
    </section>
  );
}