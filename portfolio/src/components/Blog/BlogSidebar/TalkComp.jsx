import { motion } from "framer-motion";
import { useAnimations } from "../../../contexts/AnimationContext";



const TalkComp = ({ contact }) => {

    const { fadeInRight } = useAnimations();

    return (
        <motion.div
            className="p-5 rounded-2xl border border-slate-300 "
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <h2 className="text-xl font-semibold mb-4">Let's Talk</h2>

            <div className="flex flex-col gap-4">
                <p className="text-text-secondary">{contact.text}</p>

                <ul className="flex gap-5 items-center justify-center ">
                    {contact.socialLinks.map((link, idx) => (
                        <li key={idx}>
                            <a
                                href={link.url}
                                className="flex items-center justify-center  "
                            >
                                <img src={link.icon} alt={link.name}
                                    className=' w-8 h-8 hover:w-10 hover:h-10  rounded-lg' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

export default TalkComp