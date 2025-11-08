import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';


const LineBar = ({ name, percent, color, delay = 0 }) => {

    const { animationsReady } = useAppContext();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (!animationsReady) return;
        const timer = setTimeout(() => setWidth(percent), delay);
        return () => clearTimeout(timer);
    }, [percent, delay, animationsReady]);

    if (!animationsReady) return null;


    return (
        <div className="flex items-center mb-5 sm:mb-6 animate-fadeIn group">

            <span className="w-28 sm:w-32 md:w-36 font-medium text-text-primary group-hover:text-indigo-600 transition-colors truncate">
                {name}
            </span>

            <div className="flex-1 mx-2 sm:mx-4 min-h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner relative">

                <div
                    className="  absolute top-0 left-0 h-full transition-all duration-1500 ease-out rounded-full"
                    style={{
                        width: `${width}%`,
                        backgroundColor: color,
                    }}
                ></div>

            </div>

            <span
                className="w-10 sm:w-12 text-right font-bold text-xs sm:text-sm"
                style={{ color }}
            >
                {width}%
            </span>

        </div>
    );
}

export default LineBar