import React from 'react'
import assets from "../../assets/assets";

import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";



const highlights = [
    { icon: assets.machine_icon, text: "Systems and machines are increasingly digital" },
    { icon: assets.Service_icon, text: "Services are delivered through online platforms" },
    { icon: assets.local_market_icon, text: "Local businesses adopt digital solutions" },
    { icon: assets.mobile_banking_icon, text: "Organizations rely on cloud systems and e-payments" },
    { icon: assets.education_icon, text: "Education continues to move online" },
    { icon: assets.communication_icon, text: "Communication is instant — messaging, social platforms, global access" },
];


const AboutHighlights = () => {

    const { staggerDownContainer, staggerDownItem } = useAnimations();

    return (
        <>
            <motion.div
                variants={staggerDownContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >


                <motion.ul
                    className="ml-7 list-none list-inside mb-4 space-y-2 text-neutral text-xs"
                >
                    {highlights.map((item, index) => (
                        <motion.li
                            key={index}
                            variants={staggerDownItem}
                        >
                            <span ><img
                                src={item.icon}
                                alt="highlight"
                                className="w-6 h-6 inline-block mr-2" />
                            </span> {item.text}
                        </motion.li>
                    ))}
                </motion.ul>


                <motion.p
                    variants={staggerDownItem}
                    className="mb-6 pl-1"
                >
                    My goal is to design and develop software solutions that solve real problems and improve everyday experiences for people and businesses.
                </motion.p>



            </motion.div>

        </>
    )
}

export default AboutHighlights





















// import React from 'react'
// import assets from "../../assets/assets";

// import { motion } from "framer-motion";
// import { useAnimations } from "../../contexts/AnimationContext";



// const highlights = [
//     { icon: assets.machine_icon, text: "Our machines are becoming more digital" },
//     { icon: assets.Service_icon, text: "Services are delivered online" },
//     { icon: assets.local_market_icon, text: "Even local supermarkets are adopting digital solutions" },
//     { icon: assets.mobile_banking_icon, text: "Businesses go digital — cloud systems, e-payments" },
//     { icon: assets.education_icon, text: "Education moves online" },
//     { icon: assets.communication_icon, text: "Communication is instant — social media, messaging, global connections" },
// ];


// const AboutHighlights = () => {

//     const { staggerDownContainer, staggerDownItem } = useAnimations();

//     return (
//         <>
//             <motion.div
//                 variants={staggerDownContainer}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.3 }}
//             >


//                 <motion.ul
//                     className="ml-7 list-none list-inside mb-4 space-y-2 text-neutral text-xs"
//                 >
//                     {highlights.map((item, index) => (
//                         <motion.li
//                             key={index}
//                             variants={staggerDownItem}
//                         >
//                             <span ><img
//                                 src={item.icon}
//                                 alt="highlight"
//                                 className="w-6 h-6 inline-block mr-2" />
//                             </span> {item.text}
//                         </motion.li>
//                     ))}
//                 </motion.ul>


//                 <motion.p
//                     variants={staggerDownItem}
//                     className="mb-6 pl-1"
//                 >
//                     My goal is to combine my engineering mindset with my self-taught software skills to build meaningful tools that help people in everyday life.
//                 </motion.p>



//             </motion.div>

//         </>
//     )
// }

// export default AboutHighlights