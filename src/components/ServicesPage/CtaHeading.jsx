import {motion} from "framer-motion"
export  default function CtaHeading({text}){
    return(
         <motion.h2
         initial={{
            opacity:0, 
            x:-120,
         }}
         whileInView={{
            opacity:1,
            x : 0,
         }}
         viewport={{
            once: false,
             amount : 0.5,
         }}
         transition={{
            duration : 0.8,
            ease:[0.22, 1, 0.36, 1]
         }}
         className="text-black font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-tight"
         >
          {text}
         </motion.h2>
    )
}