import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";

const ProjectIntro = () => {

    const { fadeInDown, fadeInUp } = useAnimations();

    return (
        <>
            <div className='w-full pt-5'>
                <motion.h1
                    className="text-4xl font-bold  mb-9 ml-3"
                    variants={fadeInDown}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Projects
                </motion.h1>
            </div>

            <div className="mb-6 ml-3 md:ml-7 w-[90%] lg:w-[80%]">

                <motion.p
                    className="text-[13px] sm:text-sm  leading-relaxed text-start"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    This portfolio brings together the projects I’ve worked on throughout
                    my self-taught journey. Each one tells a part of the story — from
                    learning frontend design to building backend systems and working
                    with databases. Some projects are finished, some are still in progress,
                    and others are ideas I’m excited to explore.To see the finished projects,
                    just click and view.”
                    {/* I’ve been working on different projects as part of my
          self-taught learning journey, and each one reflects the
          skills I’ve been building step by step — from frontend
          design to backend logic and database management. I’m always
          eager to learn new technologies and expand my knowledge in
          the ever-evolving world of software development. Whether it’s
          building responsive web applications, optimizing performance,
          or working with complex distributed databases, I see every
          project as an opportunity to grow. 🚀 This page highlights
          not only the projects I’ve completed but also the ones I’m
          currently developing or planning for the future, giving a full
          view of my progress and ambitions as a software developer. */}
                </motion.p>
            </div>

        </>
    )
}

export default ProjectIntro