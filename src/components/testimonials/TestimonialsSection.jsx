import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonialsData";
import TestimonialRow from "./TestimonialRow";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#eeeeee] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-[340px] sm:w-full
            mx-auto
            mt-[60px] sm:mt-0
            text-[36px] sm:text-[42px] lg:text-[52px]
            leading-[1.1] sm:leading-tight
            font-normal sm:font-bold
            text-center
            mb-10 sm:mb-16 lg:mb-20
           
          "
        >
          Testimonials
        </motion.h2>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {testimonials.map((row, index) => (
            <TestimonialRow key={index} items={row} />
          ))}
        </div>
      </div>
    </section>
  );
}