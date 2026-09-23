import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";

const BlogHeader = () => {

    const { fadeInDown } = useAnimations();

    return (
        <>
            <motion.h2
                className="text-2xl font-bold text-text-primary mb-8 md:mb-10 mt-3 ml-2.5 md:ml-0"
                variants={fadeInDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Recent Posts <span className="text-blue-300 text-2xl ">/</span> Blog
            </motion.h2>

        </>
    )
}

export default BlogHeader