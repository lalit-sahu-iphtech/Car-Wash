import { motion } from "framer-motion";

export default function PlanCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: .3 }}
      transition={{
        duration: .8,
        delay: index * .15
      }}
      className="grid md:grid-cols-[220px_1fr] gap-10 py-12 border-b border-gray-200"
    >
      {/* Left */}
      <div>
        <h3 className="uppercase font-bold text-[28px] leading-tight">
          {plan.title}
        </h3>

        <h2 className="text-[#3565db] text-[58px] font-extrabold mt-6">
          ${plan.price}
        </h2>

        <button
  className="
    mt-8
    w-[205px]
    h-[54px]
    bg-[#3d66db]
    border-2 border-[#3d66db]
    rounded-[8px]
    text-white
    text-[14px]
    font-bold
    tracking-[2px]
    whitespace-nowrap
    hover:bg-white
    hover:text-[#3d66db]
    transition-all
  "
>
  PURCHASE NOW
</button>
      </div>

      {/* Right */}
      <ul className="space-y-5 text-[23px] text-[#333]">
        {plan.features.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}