import React from 'react'
import { motion } from "framer-motion";

const SkillsIntro = ({variantsDownItem}) => {
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
        Full-stack Developer focused on building reliable and user-friendly 
        applications with the MERN stack. Skilled in creating interactive
         frontends with React, Tailwind, and Vanilla CSS, and scalable
          backends with Node.js, Express, and MongoDB. A Mechanical Engineering
           background strengthens problem-solving, analytical thinking, and 
           attention to detail. Experienced with Git, Webpack, and modern JavaScript 
           practices, writing clean, secure, and maintainable code. Curious and adaptable, 
           always embracing new technologies to deliver practical, high-quality software.
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