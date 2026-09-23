import React from 'react'
import { motion } from "framer-motion";
import { useAnimations } from "../../../contexts/AnimationContext";

const FormFields = () => {

  const { fadeInLeft, fadeInRight} = useAnimations();


  return (
    <>
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <motion.input
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          type="text"
          name="from_name"
          placeholder="First name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#78D3FD] focus:outline-none"
        />


        <motion.input
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          type="text"
          name="last_name"
          placeholder="Last name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#78D3FD] focus:outline-none"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.input
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          type="email"
          name="reply_to"
          placeholder="Email address"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#78D3FD] focus:outline-none"
        />

        <motion.input
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          type="text"
          name="phone"
          placeholder="Phone number"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#78D3FD] focus:outline-none"
        />
      </div>

      {/* Subject */}
      <motion.input
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#78D3FD] focus:outline-none"
      />


      {/* Message */}
      <motion.textarea
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        name="message"
        rows="5"
        placeholder="Write your message..."
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#78D3FD] focus:outline-none resize-none"
      ></motion.textarea>

    </>
  )
}

export default FormFields