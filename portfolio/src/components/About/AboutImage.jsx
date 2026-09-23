import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";

import mepic from "../../assets/images/mepic.png";




const AboutImage = () => {

    const { fadeInRight } = useAnimations();

    return (
        <>
            <motion.div
                className="flex justify-center lg:justify-start max-w-md w-full lg:w-auto "
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }} // Added ease */
            >

                <img
                    src={mepic}
                    alt="Haile Homa"
                    className="w-full  max-w-md h-[500px] rounded-xl object-contain mt-0 lg:mt-20"
                />

            </motion.div>
        </>
    )
}

export default AboutImage