import { motion } from "framer-motion";
import RadialBar from './RadialBar'

const SkillsCircleSection = ({ coreSkills, variantsRightItem }) => {
    return (
        <>
            <motion.h2
                className="text-center mb-6 text-text-primaryfont-bold "
                variants={variantsRightItem}
            >
                Core Competencies
            </motion.h2>

            <div className="flex flex-row  items-center justify-center lg:justify-around     ">
                {coreSkills.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={variantsRightItem}
                    >
                        <RadialBar
                            key={i}
                            name={item.name}
                            percent={item.percent}
                            color={item.color}
                            delay={i * 250}

                        />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default SkillsCircleSection