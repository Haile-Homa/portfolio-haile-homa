import React from 'react'
import assets from "../../assets/assets";
import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";


const ContactDetails = () => {


    const { staggerLeftContainer, staggerLeftItem } = useAnimations();

    return (
        <div className="flex flex-row items-center justify-center mt-10 ">

            <motion.div
                variants={staggerLeftContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="  flex flex-col text-sm space-y-4">

                {/* Email */}
                <motion.div
                    variants={staggerLeftItem}
                    className="flex items-center w-full  gap-1 ">
                    <img src={assets.gmailicon} className="w-8 h-8 mr-2" alt="Gmail" />
                    <span>hailehoma1@gmail.com</span>
                </motion.div>

                {/* Phone */}
                <motion.div
                    variants={staggerLeftItem}
                    className="flex items-center w-full  gap-1 ">
                    <img src={assets.telephoneicon} className="w-8 h-8 mr-2" alt="Phone" />
                    <span>+251-956-319-797</span>
                </motion.div>


                {/* Location */}
                <motion.div
                    variants={staggerLeftItem}
                    className="flex items-center w-full gap-1">
                    <img src={assets.locationicon} className="w-8 h-8 mr-2" alt="Location" />
                    <span>Ethiopia - Addis Ababa</span>
                </motion.div>

            </motion.div>


        </div>

    )
}

export default ContactDetails
