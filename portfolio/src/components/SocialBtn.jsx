import React, { useState } from 'react';
import { motion } from "framer-motion";
import assets from "../assets/assets.js";
import { useAnimations } from "../contexts/AnimationContext";

function SocialBtn({ exclude = [] }) {
  const [active, setActive] = useState(null);
  const { staggerRightContainer, staggerRightItem } = useAnimations();

  const buttons = [
    { name: "Resume", type: "text", url: "https://raw.githubusercontent.com/Haile-Homa/resume/main/Resume-Haile-Homa.pdf" }, 
    { name: "GitHub", type: "img", src: assets.github_svg, url: "https://github.com/Haile-Homa" },
    { name: "LinkedIn", type: "img", src: assets.linkedin_svg, url: "https://www.linkedin.com/in/haile-homa-632344336/" },
    { name: "Telegram", type: "img", src: assets.telegram_svg, url: "https://t.me/haile_dev" },
    { name: "Email", type: "img", src: assets.email_svg, url: "mailto:hailehoma1@gmail.com" },
    { name: "medium", type: "img", src: assets.mediumicon, url: "https://medium.com/@hailehoma1" },
    { name: "dev.to", type: "img", src: assets.devtoicon, url: "https://dev.to/haile_homa_12" },
    { name: "WhatsApp", type: "img", src: assets.whatsapp, url: "https://wa.me/+251935636651", },
    { name: "Discord", type: "img", src: assets. discord, url: "https://discord.com/users/1360025004833509486" },

  ];

  const filteredButtons = buttons.filter(btn => !exclude.includes(btn.name));

  /*
  
      social: {
      email: "mailto:hailehoma1@gmail.com",
      phone: "tel:+251-935-636-651",
      website: "https://yourwebsite.com",
      github: "https://github.com/Haile-Homa",
      linkedin: "https://www.linkedin.com/in/haile-homa-632344336/",
      devto: "https://dev.to/haile_homa_12",
      medium: "https://medium.com/@hailehoma1",
      telegram: "https://t.me/haile_dev",
      whatsapp: "https://wa.me/251935636651",
      discord: "https://discord.com/users/1360025004833509486",
      // twitter: "https://twitter.com/yourusername",
      // facebook: "https://facebook.com/yourusername",  
    },
   */

  return (
    <motion.div
      variants={staggerRightContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-wrap gap-4 md:gap-10"
    >
      {filteredButtons.map((btn, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center group"
          variants={staggerRightItem}
        >
          <a
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActive(active === i ? null : i)}
            className={`focus:outline-none transition-all duration-300
              ${btn.type === "text"
                ? `px-4 py-2 md:px-6 md:py-2 bg-[#FDC435] text-black text-[16px] rounded-xl 
                   hover:px-7 hover:py-3 ${active === i ? "px-7 py-3" : ""}`
                : ""
              }`}
          >
            {btn.type === "text" ? (
              btn.name
            ) : (
              <img
                src={btn.src}
                alt={btn.name}
                className={`w-10 h-10 transition-all duration-300
                  ${active === i ? "w-12 h-12" : ""} 
                  group-hover:w-12 group-hover:h-12
                  ${btn.name === "GitHub" ? "dark:invert dark:brightness-200" : ""}`}
              />
            )}
          </a>

          <span
            className={`mt-2 text-gray-700 dark:text-gray-300 text-sm transition-opacity duration-300
              ${active === i ? "opacity-100" : "opacity-0"} 
              group-hover:opacity-100`}
          >
            {btn.name === "Resume" ? "Download" : btn.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SocialBtn;










