import { motion } from "framer-motion";
import profihail from '../assets/images/bgprof.png';
import dark_prfihail from '../assets/images/dark-bgprof.png';

import { useAnimations } from "../contexts/AnimationContext";
import { useTheme } from "../contexts/ThemeContext";


const Hero = () => {

    const { fadeInRight } = useAnimations();
    const { isDark } = useTheme();


    const { staggerLeftContainer, staggerLeftItem } = useAnimations();


    return (
        /* in this case i made my hero section to be like good mt-60% hence to later to rembere it i write this text */
        <section className=" flex flex-col justify-center items-center flex-grow px-6 pt-2 mt-[45%] md:mt-0">

            {/* 🌄 Background Layer */}
            <motion.div
                className="absolute top-15 md:top-0 right-0 min-h-screen w-[80%] md:w-[55%] h-full pointer-events-none bg-contain bg-no-repeat bg-right-top z-0"
                style={{
                    backgroundImage: `url(${isDark ? dark_prfihail : profihail})`,
                }}
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>

            {/* ✨ Text Layer */}
            <motion.div
                className="relative z-20 max-w-6xl mx-auto px-4 pt-25 flex flex-col-reverse md:flex-row items-center md:items-start"
                variants={staggerLeftContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="w-full md:w-1/2 md:mt-0">
                    <motion.h1
                        className="text-4xl text-[#ffb703] md:text-5xl font-bold mb-4"
                        variants={staggerLeftItem}
                    >
                        {/* Hello, I'm <br /> Haile Homa <span>👋</span> */}
                          Hello, I'm <br /> Haile Homa <span>🐐</span>
                    </motion.h1>

                    <motion.p
                        className="text-text-secondary lg:text-lg mb-6"
                        variants={staggerLeftItem}
                    >
                        I specialize in building modern, responsive, and user-friendly web
                        applications. I’m experienced in the MERN stack as well as core frontend
                        technologies like HTML, CSS, and JavaScript.
                    </motion.p>

                    <div className="flex gap-4">
                        <motion.a
                            href="#projects"
                            className="bg-blue-300 text-bl px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 transition disabled:opacity-50"
                            variants={staggerLeftItem}
                        >
                            Projects
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition dark:border-slate-200 dark:text-slate-200 "
                            variants={staggerLeftItem}
                        >
                            LinkedIn
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}

export default Hero























// import { motion } from "framer-motion";
// import profihail from '../assets/images/bgprof.png';
// import dark_prfihail from '../assets/images/dark-bgprof.png';

// import { useAnimations } from "../contexts/AnimationContext";
// import { useTheme } from "../contexts/ThemeContext";


// const Hero = () => {

//   const { fadeInRight } = useAnimations();
//   const { isDark } = useTheme();


//     const { staggerLeftContainer, staggerLeftItem } = useAnimations();
//     console.log(staggerLeftContainer, staggerLeftItem);

//     return (
//         /* in this case i made my hero section to be like good mt-60% hence to later to rembere it i write this text */
//         <section className="flex flex-col justify-center items-center flex-grow  px-6  pt-2  mt-[45%] md:mt-0">

//                           <motion.div
//           className=" absolute  top-15 md:top-0 right-0 min-h-screen   w-[80%] h-full pointer-events-none  bg-contain bg-no-repeat bg-right-top  "
//           style={{
//             backgroundImage:  `url(${isDark ? dark_prfihail : profihail})`
//           }}
//           variants={fadeInRight}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 1, ease: "easeOut" }} // Added ease */
//         >

//         </motion.div>

//             <motion.div
//                 className="max-w-6xl mx-auto px-4 pt-25 flex flex-col-reverse md:flex-row items-center md:items-start"
//                 variants={staggerLeftContainer}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.3 }}
//             >


//                 <div className="w-full md:w-1/2 md:mt-0">

//                     <motion.h1
//                      className="text-4xl text-[#ffb703] md:text-5xl font-bold mb-4 "
//                      variants={staggerLeftItem}
//                      >
//                         Hello, I'm <br /> Haile Homa <span>👋</span>
//                     </motion.h1>


//                     <motion.p
//                      className="text-text-primary lg:text-lg mb-6"
//                      variants={staggerLeftItem}
//                      >
//                         I specialize in building modern, responsive, and user-friendly web applications.
//                         I’m experienced in the MERN stack as well as core frontend technologies like HTML, CSS, and JavaScript.
//                     </motion.p>


//                     <div className="flex gap-4">

//                         <motion.a
//                         href="#projects"
//                         className=" bg-blue-300 text-bl px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 transition disabled:opacity-50"
//                         variants={staggerLeftItem}
//                         >
//                             Projects
//                         </motion.a>

//                         <motion.a
//                          href="https://www.linkedin.com"
//                          target="_blank"
//                          rel="noopener noreferrer" // Added for security
//                          className="border border-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition"
//                          variants={staggerLeftItem}
//                          >
//                             LinkedIn
//                         </motion.a>

//                     </div>
//                 </div>


//             </motion.div>


//         </section>
//     )
// }

// export default Hero

