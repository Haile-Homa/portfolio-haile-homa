import { motion } from "framer-motion";
import { useAnimations } from "../../../contexts/AnimationContext";

const DiscoverComp = ({ discover }) => {

    const { fadeInRight } = useAnimations();

    return (
        <motion.div
            className="p-5 flex flex-col border border-slate-300 rounded-2xl "
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <h2 className="text-xl font-semibold mb-4">Discover My Work</h2>

            <div className="flex flex-col gap-4">
                <p className="text-text-secondary">{discover.text}</p>

                <div className="flex flex-col sm:flex-row gap-3">

                    <button
                        type="submit"
                        className="px-5 py-2 bg-blue-300 text-black rounded-lg hover:bg-blue-400 transition-colors duration-200"
                    >
                        {discover.buttonText}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default DiscoverComp




