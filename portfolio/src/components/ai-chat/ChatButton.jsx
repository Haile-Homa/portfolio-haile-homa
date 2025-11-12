import React from "react";
import { FaRobot } from "react-icons/fa"; // 🤖 AI chat icon

const ChatButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 bg-gradient-to-r from-sky-300 to-sky-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
  >
    <FaRobot size={26} />
  </button>
);

export default ChatButton;
