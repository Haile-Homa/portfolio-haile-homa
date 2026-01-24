import React from 'react'
import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";

const AboutIntro = () => {

    const { staggerLeftContainer, staggerLeftItem } = useAnimations();


    return (
        <>
            <motion.div
                variants={staggerLeftContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >

                <motion.h2
                    variants={staggerLeftItem}
                    className="text-2xl md:text-3xl font-bold mb-6 pl-1"
                >
                    About me
                </motion.h2>

                <div className='pl-1'>
                    <motion.p
                        variants={staggerLeftItem}
                        className="mb-2 pl-1"
                    >
                        Hi 👋 , I’m Haile Homa — Full-Stack Engineer & Software Developer  focused on building practical and reliable digital solutions.
                    </motion.p>

                    <motion.p
                        variants={staggerLeftItem}
                        className="mb-4 pl-1.5 ">
                        I have developed a strong foundation in software development, web technologies, and system design through continuous learning and hands-on project work. I enjoy solving real problems, writing clean and efficient code, and turning ideas into functional applications. Each project I complete strengthens my technical skills and confidence as a developer.

                    </motion.p>

                    <motion.p
                        variants={staggerLeftItem}
                        className="mb-2 pl-1">
                        The world is rapidly moving toward a digital future, and I aim to contribute by building software that supports people, businesses, and everyday activities.
                    </motion.p>
                </div>

            </motion.div>
        </>
    )
}

export default AboutIntro





















// import React from 'react'
// import { motion } from "framer-motion";
// import { useAnimations } from "../../contexts/AnimationContext";

// const AboutIntro = () => {

//     const { staggerLeftContainer, staggerLeftItem } = useAnimations();


//     return (
//         <>
//             <motion.div
//                 variants={staggerLeftContainer}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.3 }}
//             >

//                 <motion.h2
//                     variants={staggerLeftItem}
//                     className="text-2xl md:text-3xl font-bold mb-6 pl-1"
//                 >
//                     About me
//                 </motion.h2>

//            <div className='pl-1'>
//                 <motion.p
//                     variants={staggerLeftItem}
//                     className="mb-2 pl-1"
//                 >
//                     Hi, I'm Haile Homa 👋 — a Mechanical Engineering student at Bahir Dar University and a self-taught software developer.
//                 </motion.p>

//                 <motion.p
//                     variants={staggerLeftItem}
//                     className="mb-4 pl-1.5 ">
//                     Although my main field is Mechanical Engineering, I’ve always been
//                     curious about the digital world and how software shapes our lives.
//                     That curiosity pushed me to self-learn software and web development
//                      through online resources and hands-on projects. Step by step, I’ve built
//                      a solid foundation in programming and system design, learning the value
//                      of patience, curiosity, and determination. Every bug fixed, concept understood,
//                      and project completed makes me more confident as a developer.
//                     {/* Even though my main field is Mechanical Engineering, I've always
//                     been curious about the digital world and how software shapes the
//                     way we live, work, and connect. That curiosity led me to teach myself
//                     software and web development alongside my studies.Through consistent
//                     self-learning, online resources, and hands-on projects, I’ve been building
//                     a strong foundation in programming and system design. Step by step,
//                     I’m sharpening my skills and applying them in practical projects. and I’ve
//                     learned that being self-taught means being patient, curious, and determined.
//                     Every bug I fix, every new concept I understand, and every project I finish
//                     makes me more confident as a developer. */}
//                 </motion.p>

//                 <motion.p
//                     variants={staggerLeftItem}
//                     className="mb-2 pl-1">
//                     I believe the world is moving fast toward a digital future and I want to be part of that transformation.
//                 </motion.p>
//              </div>

//             </motion.div>
//         </>
//     )
// }

// export default AboutIntro