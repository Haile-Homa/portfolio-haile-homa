import React from 'react'
import AboutIntro from "../components/About/AboutIntro";
import AboutHighlights from "../components/About/AboutHighlights";
import AboutImage from "../components/About/AboutImage";
import AboutQuote from "../components/About/AboutQuote";



const AboutMe = () => {
  return (
    //
    <section className="px-4 md:px-0 lg:px-10 pb-7 mb-10  pt-10"
      style={{
        background: 'var(  --gradient-portfolio-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-text-primary space-y-4 leading-relaxed text-start text-[15px] md:text-sm">
          <AboutIntro />
          <AboutHighlights />
        </div>

        {/* Right: Image */}
        <div className="max-w-full overflow-hidden">
          <AboutImage />
        </div>
      </div>

      <div className="mt-6 max-w-full overflow-hidden">
        <AboutQuote />
      </div>
    </section>
  );
};


export default AboutMe