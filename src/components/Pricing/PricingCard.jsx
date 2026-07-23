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

            className="relative z-20 -mt-[50px] sm:-mt-[90px] lg:-mt-[140px] px-5"

        >

            <div className="max-w-[850px] mx-auto">

                <div className="bg-white rounded-[20px] sm:rounded-[28px] shadow-2xl py-8 px-6 sm:py-12 sm:px-10 lg:py-16 lg:px-12 text-center">

                    <h2 className="text-[36px] sm:text-[50px] lg:text-[70px] font-extrabold leading-tight">

                        Pricing

                    </h2>

                    <p className="mt-4 sm:mt-6 lg:mt-8 text-[15px] sm:text-lg lg:text-2xl">

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