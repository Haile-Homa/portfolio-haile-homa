import { motion } from "framer-motion";


import LineBar from './LineBar'

const SkillsBarSection = ({ skills, variantsLeftItem }) => {



  return (
    <>
      <div className=" w-[95%] sm:w-[80%]  sm:mr-10 md:mr-0">

        <motion.h2
          className="text-center mb-4 text-text-primary font-bold "
          variants={variantsLeftItem}
        >
          Technical Skills
        </motion.h2>

        <div className=" ml-2 ">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={variantsLeftItem}
            >
              <LineBar
               className="w-full"
                key={i}
                name={skill.name}
                percent={skill.percent}
                color={skill.color}
                delay={i * 150}
              />
            </motion.div>
          ))}
        </div>

      </div>

    </>
  )
}

export default SkillsBarSection