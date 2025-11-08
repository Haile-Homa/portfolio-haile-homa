import React, { useState } from 'react';
import { motion } from "framer-motion";
import assets from "../assets/assets.js";
import { useAnimations } from "../contexts/AnimationContext";

function SocialBtn({ exclude = [] }) {
  const [active, setActive] = useState(null);
  const { staggerRightContainer, staggerRightItem } = useAnimations();

  const buttons = [
    { name: "Resume", type: "text" },
    { name: "GitHub", type: "img", src: assets.github_svg },
    { name: "LinkedIn", type: "img", src: assets.linkedin_svg },
    { name: "Telegram", type: "img", src: assets.telegram_svg },
    { name: "Email", type: "img", src: assets.email_svg },
  ];

  const filteredButtons = buttons.filter(btn => !exclude.includes(btn.name));

   return (
    <motion.div
      variants={staggerRightContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="flex gap-4 md:gap-10"
    >
      {filteredButtons.map((btn, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center group"
          variants={staggerRightItem}
        >
          <button
            className={`focus:outline-none transition-all duration-300 
              ${btn.type === "text"
                ? `px-4 py-2 md:px-6 md:py-2 bg-[#FDC435] text-black text-[16px] rounded-xl 
                   hover:px-7 hover:py-3 ${active === i ? "px-7 py-3" : ""}`
                : ""
              }`}
            onClick={() => setActive(active === i ? null : i)}
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
          </button>

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
