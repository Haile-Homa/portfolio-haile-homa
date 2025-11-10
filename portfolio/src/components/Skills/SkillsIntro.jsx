import React from 'react'
import { motion } from "framer-motion";

const SkillsIntro = ({ variantsDownItem }) => {
  return (
    <>
      <div className='w-full text-left'>
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
          variants={variantsDownItem}


        >
          skills & experience
        </motion.h2>
      </div>

      <div className="mb-6 ml-3 md:ml-7 w-full pr-2 md:w-[90%]">
        <motion.p
          className=" text-sm  leading-relaxed"
          variants={variantsDownItem}
        >
          Full-stack developer who builds reliable and easy-to-use web applications with the MERN stack. Creates modern and responsive frontends using React, Tailwind CSS, and Vanilla CSS, and builds strong backends with Node.js, Express, and MongoDB.
          With a Mechanical Engineering background, brings solid problem-solving skills, clear thinking, and attention to detail to every project. Works confidently with Git, Webpack, and modern JavaScript, always aiming to write clean, secure, and 
          well-organized code. Loves learning new tools and technologies to make software that’s both useful and high quality.
          {/* Full-stack Developer focused on building reliable, efficient, and
          
          user-friendly applications using the MERN stack. Creates
          interactive frontends with React, Vanilla CSS and Tailwind and scalable
          backends with Node.js, Express, and MongoDB that perform
          smoothly under real-world conditions. A background in Mechanical
          Engineering adds analytical thinking, problem-solving, and attention
          to detail to every project. Comfortable with Git, Webpack, and modern
          JavaScript practices, writing clean, maintainable, and secure code.
          Always curious and adaptable, exploring Next.js, advanced JavaScript,
          and new technologies to turn ideas into practical, high-quality software.
          Reliable, motivated, and ready to contribute meaningfully to any
          development team. */}
        </motion.p>
      </div>
    </>
  )
}

export default SkillsIntro