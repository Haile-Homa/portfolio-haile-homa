import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // ✅ Import icons

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border 
                 bg-surface hover:bg-[#25adec] hover:text-white transition-all duration-300 
                 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 
                 focus:ring-[#25adec]/70"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        //  Light Mode Icon
        <div className="flex items-center gap-2 text-yellow-400">
          <FaSun className="text-xl" />
          <span className="text-sm font-medium  ">Light</span>
        </div>
      ) : (

        // Dark Mode Icon
        <div className="flex items-center gap-2 text-[#1bacef]">
          <FaMoon className="text-xl" />
          <span className="text-sm font-medium ">Dark</span>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;














// import React from 'react';
// import { useTheme } from '../contexts/ThemeContext';
// import { FaSun, FaMoon } from 'react-icons/fa'; 

// const ThemeToggle = () => {

//     const { isDark, toggleTheme } = useTheme();

//     return (
//         <button
//             onClick={toggleTheme}
//             className="flex items-center gap-2 px-3 bg-surface rounded-full border border-border hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
//             aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
//         >
//             {isDark ? (
//                 // Sun icon for light mode
//                 <div className="flex items-center gap-2">
//                     <span className="text-xl">☀️</span>
//                     <span className="text-sm font-medium hidden sm:block">Light</span>
//                 </div>
//             ) : (
//                 // Moon icon for dark mode
//                 <div className="flex items-center gap-2">
//                     <span className="text-xl">🌙</span>
//                     <span className="text-sm font-medium hidden sm:block">Dark</span>
//                 </div>
//             )}
//         </button>
//     );
// };

// export default ThemeToggle;