import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import testimonialImg from "../../assets/images/testimonial-img.jpg";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

export default function TestimonialsSection() {
  // agar testimonialsData rows (2D array) format mein hai to flatten kar do
  const items = testimonials.flat();

  return (
    <section
      id="testimonials"
      className="bg-white py-14 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div
        className="
          max-w-[1160px]
          mx-auto
          px-5
          grid
          lg:grid-cols-2
          gap-14
          lg:gap-20
          items-start
        "
      >
        {/* Left: Testimonial list — icon/para/name bottom se top */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-12 sm:space-y-14"
        >
          {items.map((item, index) => (
            <TestimonialCard key={index} name={item.name} quote={item.quote} />
          ))}
        </motion.div>

        {/* Right: Heading (right→left) + Image (360deg rotate) */}
        <div>
          <motion.h2
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="
              text-[40px]
              sm:text-[52px]
              lg:text-[60px]
              font-bold
              mb-8
              lg:mb-10
            "
          >
            Testimonials
          </motion.h2>

          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="
              w-full
              h-[380px]
              sm:h-[460px]
              lg:h-[590px]
              overflow-hidden
              rounded-3xl
            "
          >
            <img
              src={testimonialImg}
              alt="Car wash testimonial"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}