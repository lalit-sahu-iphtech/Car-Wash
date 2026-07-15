import { motion } from "framer-motion";
import AboutList from "./AboutList";
import { aboutList1, aboutList2 } from "../data/aboutData";

export default function AboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.35,
      }}
      transition={{
        duration: 0.9,
      }}
    >
      <h2 className="text-[66px] font-extrabold leading-[1.1] text-[#111]">

        Professional washing and cleaning of your car

      </h2>

      <p className="text-[22px] text-[#555] leading-10 mt-10">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua enim ad minim veniam.

      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-16">

        <AboutList
          title="The Best Car Wash"
          items={aboutList1}
        />

        <AboutList
          title="What We Do Our Services"
          items={aboutList2}
        />

      </div>

      <h3 className="text-[58px] font-bold mt-20">

        Call for book:

        <span className="text-[#3d63d8]">

          {" "}8-800-10-500

        </span>

      </h3>

    </motion.div>
  );
}