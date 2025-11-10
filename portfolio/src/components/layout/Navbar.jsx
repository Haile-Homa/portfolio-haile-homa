import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaBlog, FaEnvelope, FaTools } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close sidebar when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation links with icons
  const navLinks = [
    { id: "home", label: "Home", icon: <FaHome />, type: "route" },
    { id: "about", label: "About Me", icon: <FaUser />, type: "scroll" },
    { id: "skills", label: "Skills", icon: <FaCode />, type: "scroll" },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram />, type: "scroll" },
    { id: "services", label: "Services", icon: <FaTools />, type: "scroll" },
    { id: "blog", label: "Blog", icon: <FaBlog />, type: "scroll" },
    { id: "contacts", label: "Contact", icon: <FaEnvelope />, type: "scroll" },
  ];




  //  handle logo click (go back)
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      const homeElement = document.getElementById("home");
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="
      fixed top-0 z-50 w-full
      flex items-center justify-between md:justify-none
      p-3 md:p-6
      rounded-lg border border-gray-400
      bg-bg-primary
      text-text-primary
    ">
      {/* Logo */}
      <div
        onClick={handleHomeClick}
        className="ml-4 text-2xl font-bold cursor-pointer hover:text-blue-400">
        Haile-H.
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-6 mr-10">
        {navLinks.map(({ id, label, type }) =>
          type === "route" ? (
            <span
              key={id}
              onClick={handleHomeClick}
              className="cursor-pointer hover:text-[#78d3fd] flex items-center gap-2"
            >
              {label}
            </span>
          ) : (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={900}
              offset={-70}
              spy={true}
              activeClass="text-[#78D3FD] font-bold border-b-2 border-[#78D3FD]"
              className="cursor-pointer hover:text-[#78d3fd] flex items-center gap-2"
            >
              {label}
            </Link>
          )
        )}

        <ThemeToggle />
      </div>




      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2  text-text-primary hover:text-[#78d3fd]"
        onClick={toggleSidebar}
      >
        <FaBars size={28} />
      </button>

      {/* Overlay */}
      <div
        onClick={toggleSidebar}
        className={`
          fixed inset-0 z-30
          transition duration-700 ease-in-out
          ${isOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />



      {/* Sidebar */}
      <div className={`
          fixed top-0 right-0 h-full w-64
           bg-bg-primary shadow-lg z-40
          transform transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <FaTimes size={28} className=" text-text-primary hover:text-[#78d3fd]" />
          </button>
        </div>

        {/* Sidebar Links with icons */}
        <div
          className="
            flex flex-col gap-6 p-6 text-lg
            transition-opacity duration-700
          "
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          {navLinks.map(({ id, label, icon, type }) =>
            type === "route" ? (
              <span
                key={id}
                onClick={() => {
                  handleHomeClick();
                  toggleSidebar();
                }}
                className="cursor-pointer hover:text-[#78d3fd] flex items-center gap-3"
              >
                <span className="text-xl">{icon}</span>
                {label}
              </span>
            ) : (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={900}
                offset={-70}
                spy={true}
                activeClass="text-[#78D3FD] font-bold border-b-2 border-[#78D3FD]"
                onClick={toggleSidebar}
                className="cursor-pointer hover:text-[#78d3fd] flex items-center gap-3"
              >
                <span className="text-xl">{icon}</span>
                {label}
              </Link>
            )
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;






// import React from 'react'
// import { Link } from "react-scroll";


// function Navbar() {
//     return (
//         <nav className="text-black p-2 md:p-4  flex  justify-around items-center
//                         fixed w-full top-0 z-50
//                         bg-white md:bg-transparent
//                         border border-gray-400 rounded-lg">

//             {/* Left: Logo */}
//             <div className="text-2xl self-start font-bold cursor-pointer hover:text-blue-400">
//                 Haile-H.
//             </div>



//             {/* Right: Links */}
//             <div className="flex gap-6  ml-120">
//                 <Link
//                     to="about"
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     className="cursor-pointer hover:text-blue-400"
//                 >
//                     About Me
//                 </Link>

//                 <Link
//                     to="skills"
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     className="cursor-pointer hover:text-blue-400"
//                 >
//                     Skills
//                 </Link>

//                 <Link
//                     to="projects"
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     className="cursor-pointer hover:text-blue-400"
//                 >
//                     Projects
//                 </Link>

//                 <Link
//                     to="blog"
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     className="cursor-pointer hover:text-blue-400"
//                 >
//                     Blog
//                 </Link>

//                 <Link
//                     to="contacts"
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     className="cursor-pointer hover:text-blue-400"
//                 >
//                     Contact
//                 </Link>

//             </div>


//         </nav>
//     );
// }

// export default Navbar
