import {motion} from "framer-motion"

export default function CtaButton({text}){
    return(
        <motion.button
        initial={{ opacity: 0, x: 120, rotate: -360 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="
        bg-[#2e61d4]
        text-white
        font-bold
        uppercase
        text-[15px]
        tracking-wide
        px-8
        py-4
        rounded-[10px]
        shadow-md
        shrink-0
        border-1
        border-transparent
    
       
      "
      >
        {text}
      </motion.button>
    )
}