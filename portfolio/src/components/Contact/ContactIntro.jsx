import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";


const ContactIntro = () => {

    const { fadeInDown, fadeInRight } = useAnimations();


    return (
        <>


            <motion.h2
                variants={fadeInDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-bold px-5 pt-4  my-6">
                Let’s Work Together!

            </motion.h2>

            <div>
                <motion.p
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className=" text-start    text-text-secondary mb- px-5 ">
                    I’m always open to opportunities, collaborations, and challenges  especially
                    projects that push me to learn and grow . I’ve had the pleasure of working
                    with others on exciting projects, bringing ideas to life and helping achieve their goals.
                    Whether you have a question, an idea, or a project you’d like to get done, I’d be happy
                    to work with you and contribute my skills. Feel free to use the form below or send me a DM,
                    and I’ll get back to you as soon as I can!
                </motion.p>
            </div>


        </>
    )
}

export default ContactIntro
