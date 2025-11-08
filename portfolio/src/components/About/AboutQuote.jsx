import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";


import SocialBtn from '../../components/SocialBtn';

const AboutQuote = () => {

    const { staggerRightContainer, staggerRightItem, fadeInLeft } = useAnimations();
   

    return (
        <>
            <div className="mt-8 flex flex-col items-center gap-4">

                <motion.p
                    className="text-center text-text-primary italic text-1xl md:text-3xl font-bold "
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Joining the digital world is not just the best choice for today — it’s also the key to the future .
                </motion.p>

                <motion.div
                    variants={staggerRightContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <SocialBtn staggerRightItem={staggerRightItem} />
                </motion.div>

            </div>
        </>
    )
}

export default AboutQuote