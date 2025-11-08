import { motion } from "framer-motion";
import { useAnimations } from "../../../contexts/AnimationContext";


const TagsComp = ({ tags }) => {

    const { fadeInRight } = useAnimations();

    return (
        <motion.div
            className="p-5   border border-slate-300 rounded-lg "
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >

            <h2 className="text-xl font-semibold mb-4">Tags</h2>

            <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                    <button
                        key={idx}
                        className="hover:bg-blue-50
                                   text-gray-600 border border-gray-300 
                                    px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                        {tag}
                    </button>
                ))}
            </div>

        </motion.div>
    )
}

export default TagsComp