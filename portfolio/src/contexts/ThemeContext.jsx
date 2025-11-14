import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    // useEffect(() => {
    //     // Check for saved theme preference
    //     const savedTheme = localStorage.getItem('theme');

    //     if (savedTheme === 'dark') {
    //         setIsDark(true);
    //         document.documentElement.classList.add('dark');
    //     } else if (savedTheme === 'light') {
    //         setIsDark(false);
    //         document.documentElement.classList.remove('dark');
    //     } else {
    //         // Check system preference
    //         const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //         setIsDark(systemPrefersDark);
    //         if (systemPrefersDark) {
    //             document.documentElement.classList.add('dark');
    //         }
    //     }
    // }, []);


    useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
    } else {
        // Always start LIGHT by default
        setIsDark(false);
        document.documentElement.classList.remove('dark');
    }
}, []);


    const toggleTheme = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const value = {
        isDark,
        toggleTheme,
        theme: isDark ? 'dark' : 'light'
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};