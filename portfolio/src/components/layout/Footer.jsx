import React from 'react';
import assets from '../../assets/assets';
import SocialBtn from '../SocialBtn';

import { motion } from "framer-motion";
import { useAnimations } from "../../contexts/AnimationContext";



const Footer = () => {

  const { fadeInLeft, staggerRightContainer, staggerRightItem } = useAnimations();


  return (

    <footer className="relative w-full aspect-[1440/344] h-40 text-center overflow-hidden z-50">

      <img
        src={assets.footer_svg}
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover bg-no-repeat  pointer-events-none -z-10"
      />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full  my-10  px-8  md:my-20 md:px-16 ">
        {/* Left - Name */}
        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg text-center md:text-left ">
          © 2025 Haile Homa. All rights reserved.
        </motion.p>

        {/* Right - Social Buttons */}
        <motion.div
          variants={staggerRightContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:justify-end ">
          <SocialBtn exclude={["Resume"]} staggerRightItem={staggerRightItem} /> {/* Add more if needed */}
        </motion.div>
        
      </div>

    </footer>

  );

}

export default Footer






// import React from 'react'
// import assets from '../assets/assets'

// function Footer() {
//   return (
//     <footer className="relative m h-40  text-center">
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
//         style={{ backgroundImage: `url(${assets.footer_svg})` }}
//       ></div>

//       <div className="relative z-10 p-8 text-black">
//         <p>&copy; 2023 Haile-H</p>
//       </div>
//     </footer>


//   )
// }

// export default Footer
