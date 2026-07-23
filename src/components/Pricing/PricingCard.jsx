import { motion } from "framer-motion";

export default function PricingCard(){

    return(

        <motion.div

            initial={{
                y:120,
                scale:.8,
                opacity:0
            }}

            whileInView={{
                y:0,
                scale:1,
                opacity:1
            }}

            viewport={{
                once:false,
                amount:.25
            }}

            transition={{
                duration:1,
                delay:.35,
                type:"spring"
            }}

            className="relative z-20 -mt-[140px]"

        >

            <div className="max-w-[850px] mx-auto">

                <div className="bg-white rounded-[28px] shadow-2xl py-16 px-12 text-center">

                    <h2 className="text-[70px] font-extrabold">

                        Pricing

                    </h2>

                    <p className="mt-8 text-2xl">

                        Image from

                        <span className="underline ml-2">

                            Freepik

                        </span>

                    </p>

                </div>

            </div>

        </motion.div>

    )

}