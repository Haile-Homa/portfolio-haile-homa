import { motion } from "framer-motion";
import { useAnimations } from "../../../contexts/AnimationContext";



const TopicsComp = ({ topics }) => {

    const { fadeInDown,  } = useAnimations();

    return (
        <motion.div
            className="p-5   border border-slate-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 "
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >

            <h2 className="text-xl font-semibold mb-4">Topics</h2>

            <div className="flex flex-wrap gap-3">
                {topics.map((topic, idx) => (
                    <a
                        key={idx}
                        href={topic.link}
                        className="flex items-center gap-2  border border-slate-400 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center justify-center bg-gray-500 hover:bg-gray-50  p-1 ">
                            <img src={topic.iconimage} alt={topic.name} className=' w-8 h-8 rounded-lg filter grayscale hover:grayscale-0 transition duration-300' />
                        </div>

                        <div className="text-sm font-medium pr-3   ">{topic.name}</div>
                    </a>
                ))}
            </div>

        </motion.div>
    )
}

export default TopicsComp