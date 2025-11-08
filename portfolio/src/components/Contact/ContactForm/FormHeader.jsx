import React from 'react'
import { motion } from "framer-motion";
import { useAnimations } from "../../../contexts/AnimationContext";


const FormHeader = () => {

  const { staggerDownContainer, staggerDownItem } = useAnimations();

  return (


    <motion.div
      variants={staggerDownContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col">

      <motion.h2
        variants={staggerDownItem}
        className=" text-center md:text-left text-2xl md:text-3xl font-bold mb-1.5 ">
        Send Me a Message
      </motion.h2>

      <motion.p
        variants={staggerDownItem}
        className=" text-text-secondary text-center md:text-left md:pl-1.5 mb-2">
        Please fill in the form below tp get in touch with me.
      </motion.p>

    </motion.div>

  )
}

export default FormHeader