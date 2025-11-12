import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from './pages/AboutMe.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Blogs from './pages/Blogs.jsx';
import Contacts from './pages/Contact.jsx';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar.jsx';
import Services from './pages/Services.jsx';

import Home from './pages/Home.jsx';
import ShowProjects from "./components/Project/ShowProjects.jsx";
import { projects, blogPosts } from './assets/data'; 

import ShowBlog from "./components/Blog/ShowBlog.jsx";

import PWAInstallPrompt from './components/PWAInstallPrompt'

// Import new components
import ChatButton from "./components/ai-chat/ChatButton.jsx";
import ChatModal from "./components/ai-chat/ChatModal.jsx";




const App = () => {

    const projectsRef = useRef(null);
    const location = useLocation();
    const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (location.state?.scrollTo === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
      <>
    <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main className="flex-grow pt-2 md:pt-20 !overflow-x-hidden">
        <Routes>
          {/* Homepage with all sections */}
          <Route path="/" element={
            <>
              <section id="home"><Home/></section>
              <section id="about"><AboutMe /></section>
              <section id="skills"><Skills /></section>
              <section ref={projectsRef} id="projects"><Projects /></section>
              <section id="services"><Services/></section>
              <section id="blog"><Blogs /></section>
              <section id="contacts"><Contacts /></section>  

             
            </>
          } />
          
          {/* Project Detail Page */}
          <Route
            path="/projects/:projectId"
            element={<ShowProjects projects={projects} />}
          />
         <Route path="/blog/:blogId" element={<ShowBlog blogs={blogPosts} />} />
        </Routes>
      </main>
      <Footer />
    </div>


     {/* Floating AI Chat */}
      {isChatOpen && <ChatModal onClose={() => setIsChatOpen(false)} />}
      <ChatButton onClick={() => setIsChatOpen(true)} />

     <PWAInstallPrompt />
    </>
  );
}

export default App;














// import React from 'react';
// import { Routes, Route } from "react-router-dom";
// import AboutMe from './pages/AboutMe.jsx';
// import Skills from './pages/Skills.jsx';
// import Projects from './pages/Projects.jsx';
// import Blogs from './pages/Blogs.jsx';
// import Contacts from './pages/Contact.jsx';
// import Footer from './components/layout/Footer';
// import  Home  from './pages/Home.jsx';
// import ShowProjects from "./components/Project/ShowProjects.jsx";
// import projects from "./assets/data.js";





// const App = () => {
    

//   return (
//     <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">

//       <main className="flex-grow pt-2 md:pt-20  !overflow-x-hidden">
//         <section id="home"><Home/></section>
//         <section id="about"><AboutMe /></section>
//         <section id="skills"><Skills /></section>
//         <section id="projects"><Projects /></section>
//         <section id="blog"><Blogs /></section>
//         <section id="contacts"><Contacts /></section>  
//         <section id="footer"><Footer /></section>
                 
      
//             {/* Dynamic Project Route */}
//   {/* 🚀 Dynamic Project Route */}
//         <Routes>
//           <Route
//             path="/projects/:projectId"
//             element={<ShowProjects projects={projects} />}
//           />
//         </Routes>

//       </main>

//     </div>
//   );
// }

// export default App















