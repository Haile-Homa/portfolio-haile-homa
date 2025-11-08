import React from 'react'
import assets from "../../assets/assets";

const SocialLinks = () => {
    return (
        <>

            {/* socila medias */}
            <div className="flex flex-row items-center justify-center">
                <div className=" h-[92%] line absolute top-14.5    left-6 " >
                    <div className="streak"></div>
                    <div className="glow"></div>
                </div>

                <div className="absolute top-7.5  md:top-8 left-2.5 flex flex-col  gap-130 md:gap-72 z-10">
                    <img
                        src={assets.github_svg}
                        className="inline-block w-8 h-8 mr-2 dark:invert dark:brightness-200 transition-all duration-300"
                        alt="GitHub"
                    />
                    <img src={assets.linkedin_svg} className="inline-block w-8 h-8 mr-2" alt="" />
                    <img src={assets.telegram_svg} className="inline-block w-8 h-8 mr-2" alt="" />
                </div>
            </div>


        </>
    )
}

export default SocialLinks
