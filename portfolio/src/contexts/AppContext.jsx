import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AppContext = createContext();

// Custom Hook for using context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
};

// Provider Component
export const AppProvider = ({ children }) => {



    // Skills data with unique colors
    const [skills] = useState([
        { name: "JavaScript", percent: 95, color: "#fbbf24" },
        { name: "React", percent: 95, color: "#60a5fa" },
        { name: "TypeScript", percent: 88, color: "#c084fc" },
        { name: "Node.js", percent: 95, color: "#4ade80" },
        { name: "Python", percent: 80, color: "#f87171" },
        { name: "Tailwind CSS", percent: 96, color: "#06b6d4" },
    ]);


    // Core skills for radial charts
    const [coreSkills] = useState([
        { name: "Frontend", percent: 95, color: '#6366f1' },
        { name: "Backend", percent: 95, color: '#10b981' },
        { name: "System  Design", percent: 85, color: '#f59e0b' },
        // { name: "DevOps", percent: 80, color: '#f59e0b' },
        // { name: "Cloud", percent: 83, color: '#8b5cf6' },
    ]);



    // Tech tags
    const [techTags] = useState([
        "React", "Next.js", "Vite", "TypeScript", "Tailwind", "Framer Motion",
        "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB",
        "Docker", "K8s", "AWS", "GCP", "Terraform", "GitHub Actions"
    ]);




    // Optional: Global animation state (e.g., if you want to control animation start globally)
    const [animationsReady, setAnimationsReady] = useState(false);


    useEffect(() => {
        // Trigger animations after 500ms (or on scroll, etc.)
        const timer = setTimeout(() => {
            setAnimationsReady(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);


    return (
        <AppContext.Provider
            value={{
                skills,
                coreSkills,
                techTags,
                animationsReady,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};