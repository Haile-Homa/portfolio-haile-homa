import React, { useState, useEffect } from 'react';
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import { useAppContext } from '../../contexts/AppContext';




const RadialBar = ({ name, percent, color = '#6366f1', delay = 0 }) => {

    const { animationsReady } = useAppContext();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!animationsReady) return;
        const timer = setTimeout(() => setProgress(percent), delay);
        return () => clearTimeout(timer);
    }, [percent, delay, animationsReady]);

    if (!animationsReady) return null;

    return (
        <>
            <div className=" mx-3 sm:mx-5 w-24 h-24  md:w-28 md:h-28 lg:w-32 lg:h-32 ">

                <CircularProgressbarWithChildren
                    value={progress}
                    styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: 'round',
                        textSize: '0',
                        pathTransitionDuration: 1.5,
                        pathColor: color,
                        trailColor: '#e5e7eb',
                    })}
                >
                    <div className="text-center">

                        <div className="text-xl sm:text-2xl font-extrabold text-text-secondary group-hover:text-indigo-600 transition-colors">
                            {progress}%
                        </div>

                        <div className="text-[9.5px] font-bold text-text-secondary uppercase tracking-wide mt-1">
                            {name}
                        </div>

                    </div>
                </CircularProgressbarWithChildren>
            </div>

        </>
    );

}

export default RadialBar