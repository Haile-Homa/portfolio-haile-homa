import React from 'react';
import { motion } from "framer-motion";
import { useAnimations } from "../contexts/AnimationContext";
import {
    FaDesktop,
    FaCode,
    FaMobile,
    FaRobot,
    FaProjectDiagram,
    FaCloudUploadAlt,
    FaPaintBrush,

} from 'react-icons/fa';




const Services = () => {


    const { fadeInLeft, fadeInRight, staggerLeftContainer, staggerLeftItem } = useAnimations();

    const services = [
        {
            icon: <FaDesktop />,
            title: "Web App Development",
            desc: "Build fast, responsive apps using React, Vite & Tailwind.",
        },
        {
            icon: <FaCode />,
            title: "Full-Stack Solutions",
            desc: "Develop complete web systems with APIs & database logic.",
        },
        {
            icon: <FaMobile />,
            title: "Progressive Web Apps (PWA)",
            desc: "Turn websites into installable mobile apps with offline access.",
        },
        {
            icon: <FaRobot />,
            title: "AI-Powered Tools",
            desc: "Add AI chatbots, quiz generators & intelligent automation.",
        },
        {
            icon: <FaProjectDiagram />,
            title: "System Design & Architecture",
            desc: "Plan scalable app architecture with performance, security & maintainability in mind.",
        },

        // {
        //     icon: <FaCloudUploadAlt />,
        //     title: "DevOps & Deployment",
        //     desc: "Set up Docker, CI/CD, and smooth app deployment workflows.",
        // },
        {
            icon: <FaPaintBrush />,
            title: "UI/UX & Frontend Design",
            desc: "Craft clean, mobile-first designs with smooth performance.",
        },
    ];

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-12">

            {/* Header */}
            <div className="text-center mb-10">
                <motion.h1
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl font-extrabold text-gray-900 dark:text-gray-200  mb-2">
                    My Services
                </motion.h1>
                <motion.p
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-text-secondary max-w-2xl mx-auto">
                    I help you build, design, and deploy powerful digital experiences
                </motion.p>
            </div>



            {/* Grid Layout */}
            <motion.div
                variants={staggerLeftContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}

                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6  rounded-2xl border border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                          variants={staggerLeftItem}

                    >
                        <div className="text-5xl mb-3 text-cyan-400">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-700  dark:text-text-secondary mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 dark:text-text-tertiary  text-sm">{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Services;