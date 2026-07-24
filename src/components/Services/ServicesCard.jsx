import { motion } from "framer-motion";
import LearnMoreButton from "./LearnMoreButton";

export default function ServicesCard({
  image,
  title,
  price,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
        margin: "0px 0px -120px 0px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
         w-full
        bg-white
        rounded-[20px]
        overflow-hidden
        shadow-sm
        transition-all
        duration-300
        
        group
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[225px]
            sm:h-[200px]
            lg:h-[230px]
            object-cover
            transition-transform
            duration-500
           
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center pb-8">

        {/* Title */}
        <h5
          className="
            mt-[21px]
            mx-[21px]
            text-[#111]
            text-[15px]
            md:text-[16px]
            leading-7
            font-bold
            uppercase
          "
        >
          {title}
        </h5>

        {/* Price */}
        <h4
          className="
            mt-5
            mx-[21px]
            text-[#3561d8]
            text-[40px]
            md:text-[46px]
            leading-none
            font-bold
          "
        >
          {price}
        </h4>

        {/* Description */}
        <p
          className="
            mt-[21px]
            mx-[21px]
            text-[#555]
            text-[16px]
            leading-[1.8]
          "
        >
          {description}
        </p>

        {/* Button */}
        <div className="mt-6">
          <LearnMoreButton />
        </div>

      </div>
    </motion.div>
  );
}