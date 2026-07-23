import { motion } from "framer-motion";

import pricingImg from "../../assets/pricing/pricing-banner.jpg";

export default function PricingImage() {

    return (

        <motion.div

            initial={{
                y:-80,
                scale:.95,
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
                delay:.15
            }}

            className="max-w-[1250px] mx-auto px-5"

        >

            <img

                src={pricingImg}

                alt="pricing"

                className="rounded-[28px] w-full h-[650px] object-cover"

            />

        </motion.div>

    )

}