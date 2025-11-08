import React from "react";
import ContactIntro from "../components/Contact/ContactIntro";
import ContactDetails from "../components/Contact/ContactDetails";
import SocialLinks from "../components/Contact/SocialLinks";
import ContactForm from "../components/Contact/ContactForm/ContactForm";



const Contact = () => {

  return (

    /* i set the bottom margins to look good margin mb-5 */
    <div className=" relative flex flex-col  text-[13px] md:text-base  pl-8 md:px-9 pb-7  pt-10  "
      style={{
        background: 'var(  --gradient-portfolio-primary)'
      }}
    >

      <div className="flex flex-col md:flex-row " >

        {/* left content */}
        <div className="w-full md:w-1/2 mt-0  md:mt-16  lg:mt-23 ">
          <ContactIntro />
          <ContactDetails />
          <SocialLinks /> {/* socila medias */}
        </div>

        {/* right content */}
        <ContactForm />

      </div>

    </div>


  );
}

export default Contact






