import React, { createContext, useContext } from "react";


// ==== LEFT (stagger) ====
export const staggerLeftContainer = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.4,
    },
  },
};

export const staggerLeftItem = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ==== RIGHT (stagger) ====
export const staggerRightContainer = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.4,
    },
  },
};

export const staggerRightItem = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ==== UP (stagger) ====
export const staggerUpContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.4,
    },
  },
};

export const staggerUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ==== DOWN (stagger) ====
export const staggerDownContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // delay each child
      ease: "easeOut",
    },
  },
};

export const staggerDownItem = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// export const staggerDownContainer = {
//   hidden: { opacity: 0, y: -50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.4,
//     },
//   },
// };

// export const staggerDownItem = {
//   hidden: { opacity: 0, y: -30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };






// Animation variants

// 🔹 Fade
export const fadeIn = {
  hidden: { opacity: 0 },      // fully invisible
  visible: { 
    opacity: 1,                 // fully visible
    transition: { duration: 1, ease: "easeOut" }  // smooth fade
  }
};



export const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};



// Create context
const AnimationContext = createContext();

// Provider component
export const AnimationProvider = ({ children }) => {
  const animations = {
    fadeIn,
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    fadeInDown,
    staggerLeftContainer,
    staggerLeftItem,
    staggerRightContainer,
    staggerRightItem,
    staggerUpContainer,
    staggerUpItem,
    staggerDownContainer,
    staggerDownItem

  };

  return (
    <AnimationContext.Provider value={animations}>
      {children}
    </AnimationContext.Provider>
  );
};


// Custom hook for easier use
export const useAnimations = () => useContext(AnimationContext);
