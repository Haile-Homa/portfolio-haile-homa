import React from 'react'
import { motion } from "framer-motion";
import { useAnimations } from "../../../contexts/AnimationContext";

const SubmitButton = ({ status }) => {

  const {  fadeInUp } = useAnimations();
  return (

    /* button */
    <motion.button
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      type="submit"
      disabled={status === "sending"}
      className=" bg-blue-300 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-400 transition disabled:opacity-50"

    >
      {status === "sending" ? "Sending..." : "Send Message"}
    </motion.button>

  )
}

export default SubmitButton