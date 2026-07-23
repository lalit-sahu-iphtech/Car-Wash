import {features} from "./featureData"
import {motion} from "framer-motion"

export default function FeatureCards() {
    return (
      <section className="relative -mt-[170px] z-20">
        {/* Dark background only below cards */}
        <div className="absolute left-0 right-0 bottom-0 h-[180px] bg-[#333] -z-10"></div>
  
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{
                    once: false,
                    amount: 0.4,
                    margin: "0px 0px -200px 0px",
                  }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-8 py-10 text-center"
              >
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="w-20 h-20 mx-auto mb-6 brightness-0"
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    type: "spring",
                  }}
                />
  
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.15 }}
                  className="text-[20px] font-bold text-[#222] mb-4"
                >
                  {item.title}
                </motion.h3>
  
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.15 }}
                  className="text-[18px] leading-8 text-[#555]"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }