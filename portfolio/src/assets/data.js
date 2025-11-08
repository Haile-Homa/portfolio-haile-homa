import assets from "./assets";




// ProjectContext.jsx
export const projects = [
  {
    id: "ai-terminal-portfolio",
    name: "Terminal Portfolio - AI-Powered ",
    description:
      "This is a terminal-style portfolio powered by AI. You can explore my work using commands like 'about', 'projects', or 'skills', or chat with an AI assistant that responds in nicely formatted Markdown, making it easy to read and giving it a real coding feel. The interface is designed to mimic a real terminal, complete with blinking cursors, typing animations, and command history, creating an immersive experience for anyone who loves tech. I built it with React 19, Vite, and modern tools like ansi-to-html and React Markdown to keep it fast, interactive, and visually clean.",
    imageUrl: assets.terminal_thumbnail, // replace with your AI portfolio thumbnail
    status: "live",
    technologies: [
      {
        name: "React 19",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        color: "#646CFF",
      },
      {
        name: "Google Generative AI (Gemini)",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/google.svg",
        color: "#EA4335",
      },
      {
        name: "React Markdown",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
        color: "#8fce00",
      },
      {
        name: "ansi-to-html",
        icon: "https://cdn-icons-png.flaticon.com/512/711/711284.png",
        color: "#00FFAA",
      },
      {
        name: "React Icons",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#E91E63",
      },
      {
        name: "Vanilla CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#2965F1",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#2986cc",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#68A063",
      },
    ],
    features: [
      "Command history and auto-scroll for realistic terminal interactions",
      "matrix-green, blue, retro,purlple, and dark themes for a unique experience",
      "Built with modern React (19) and Vite for lightning-fast performance",
      "AI-powered chat assistant integrated with Google Gemini",
      "Terminal-style user interface with authentic command-line experience",
      "Typing animations and blinking cursors for a real coding feel",
      "Real-time AI responses in nicely formatted Markdown",
      "Responsive, mobile-friendly interface",
    ],
    github: "https://github.com/Haile-Homa/Terminal-portfolio",
    liveDemo: "https://youraiterminalportfolio.example.com"
  },

  {
    id: "crop-disease-ai",
    name: "Tena (ጤና) Agri AI",
    description: "Tena (ጤና) Agri AI is a smart farming platform built to help farmers take better care of their crops. It uses TensorFlow.js to quickly detect diseases from leaf images and provides actionable recommendations to keep plants healthy. The platform features a full dashboard where users can monitor fields, manage products, analyze crop health, and access an AI assistant. Farmers can track their farm areas on interactive maps powered by OpenStreetMap and React Leafletjs, allowing them to visualize crop growth and environmental conditions in real time. An integrated marketplace connects farmers with buyers and sellers, and with a clean, mobile-friendly interface and secure Firebase login, Tena Agri makes modern farming smarter, easier, and more efficient.",
    imageUrl: assets.tenaai_thumbnail,
    status: "live",
    technologies: [
      {
        name: "React 19",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "TensorFlow.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        color: "#FF6F00",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "#FFCA28",
      },
      {
        name: "Recharts",
        icon: "https://raw.githubusercontent.com/recharts/recharts-site/master/public/assets/img/logo.png",
        color: "#FF4C4C",
      },
      {
        name: "React Leaflet",
        icon: "https://raw.githubusercontent.com/Leaflet/Leaflet/main/src/images/logo.svg",
        color: "#4A90E2",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        color: "#646CFF",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#68A063",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#2986cc",
      },
    ],
    features: [
      "AI-powered crop disease detection from leaf images using TensorFlow.js in the browser",
      "ai assistant to provide actionable recommendations to farmers and describe diseases",
      "Voice assistant to for ai text responses",
      " monitoring fields, manage products, analyze crop health and environmental conditions",
      "image upload and disease prediction with confidence scores",
      "Comprehensive farm dashboard with tabs: Overview, My Products, Crop Analysis, AI Assistant, and Field Monitoring",
      "Track farm areas and monitor crop growth using interactive maps powered by OpenStreetMap and React Leaflet",
      "Farm marketplace to buy, sell, and trade agricultural products",
      "Responsive and mobile-friendly interface for seamless access across devices",
      "Secure user authentication and protected dashboards using Firebase"

    ],
    github: "https://github.com/yourusername/tena-agri-ai",
    liveDemo: "https://tenaagri.example.com"
  },
  {
    id: "portfolio-gui",
    name: "Portfolio Website (GUI)",
    description: "This is my personal portfolio website built with React 19 and Tailwind CSS. It showcases my projects, skills, blogs, and contact information in a clean, modern, and interactive interface. The site features smooth animations using Framer Motion, animated skill bars with React Circular Progressbar, and dynamic routing for project and blog pages. It is fully responsive, works on all devices, and gives visitors an easy and engaging way to explore my work. Alongside this GUI version, I also have a terminal-style portfolio, which is another way I share my projects and skills.",
    imageUrl: assets.gui_thumbnail, // replace with your GUI portfolio image
    status: "live",
    technologies: [
      {
        name: "React 19",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4",
      },
      {
        name: "Framer Motion",
        icon: "https://raw.githubusercontent.com/framer/motion/main/.github/assets/icon.png",
        color: "#0055FF",
      },
      {
        name: "React Router DOM",
        icon: "https://raw.githubusercontent.com/remix-run/react-router/main/docs/_assets/react-router-mark-color.svg",
        color: "#CA4245",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
      },
      {
        name: "EmailJS",
        icon: "https://www.emailjs.com/favicon.png",
        color: "#FF6A00",
      },
    ],
    features: [
      "Interactive and modern UI with a clean layout",
      "Project and blog pages with dynamic navigation",
      "Smooth animations and transitions",
      "Animated skill bars",
      "Responsive design for desktop, tablet, and mobile",
      "Light and dark theme support",
      "Contact form using EmailJS",
      "Fast development and optimized build with Vite",
      "Clean and easy-to-read code following React best practices"
    ],
    github: "https://github.com/yourusername/portfolio-gui",
    liveDemo: "https://yourguiportfolio.example.com"
  }



  ,
  {
    id: "saba-gpt",
    name: "Saba GPT",
    description: "Saba-GPT is an AI chatbot that lets users chat, ask questions, and get instant answers. It has a clean and interactive interface that works on both desktop and mobile devices. Users can sign up, log in securely, and enjoy a personalized chat experience. The app also includes a community space to connect with others and settings to adjust the chat experience. Saba-GPT combines AI intelligence with a smooth design to make chatting simple and enjoyable.",
    imageUrl: assets.sabagpt_thumbnail,
    status: "live",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#000000",
      },
      {
        name: "OpenAI API",
        icon: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.svg",
        color: "#4CAF50",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4",
      },
      {
        name: "Axios",
        icon: "https://raw.githubusercontent.com/axios/axios/master/assets/logo.svg",
        color: "#5A29E4",
      },
      {
        name: "React Router",
        icon: "https://raw.githubusercontent.com/remix-run/react-router/main/docs/_assets/react-router-mark-color.svg",
        color: "#CA4245",
      },
      {
        name: "React Hot Toast",
        icon: "https://raw.githubusercontent.com/timolins/react-hot-toast/main/logo.svg",
        color: "#FFB800",
      },
    ],
    features: [
      "Chat with AI and get instant responses",
      "Remembers the conversation so you don’t have to repeat yourself",
      "Secure login with personalized user accounts",
      "Works well on both desktop and mobile devices",
      "Community space to connect with other users",
      "Settings to customize the chat experience"
    ],
    github: "https://github.com/Haile-Homa/saba-gpt",
    liveDemo: "https://sabagpt.example.com"
  }
  ,
  {
    id: "limitless-learning",
    name: "Limitless Learning (LMS)",
    description: "Limitless Learning is a project I built to create an online learning platform. Students can browse courses, enroll, and watch lessons using a video player powered by React-YouTube. Educators can create courses, upload video URLs, and add text content using an editor. Core features like course enrollment, video playback, and course creation are fully functional, while advanced analytics, messaging, and detailed dashboards are still in demo mode. The platform is responsive and easy to use on both desktop and mobile devices, showcasing my skills in building full-stack applications with React, Node.js, and MongoDB.",
    imageUrl: assets.lms_thumbnail, // replace with your LMS image
    status: "live",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#000000",
      },
      {
        name: "Axios",
        icon: "https://raw.githubusercontent.com/axios/axios/master/assets/logo.svg",
        color: "#5A29E4",
      },
      {
        name: "Quill Editor",
        icon: "https://cdn.quilljs.com/1.3.6/quill.snow.css", // Quill has no official icon; this is a placeholder
        color: "#F3F3F3",
      },
      {
        name: "React Router",
        icon: "https://raw.githubusercontent.com/remix-run/react-router/main/docs/_assets/react-router-mark-color.svg",
        color: "#CA4245",
      },
      {
        name: "React Toastify",
        icon: "https://raw.githubusercontent.com/fkhadra/react-toastify/main/logo/logo.png",
        color: "#FFB800",
      },
      {
        name: "Stripe",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
        color: "#635BFF",
      },
      {
        name: "React-YouTube",
        icon: "https://raw.githubusercontent.com/cookpete/react-player/master/demo/youtube.png",
        color: "#FF0000",
      },
    ],
    features: [
      "Students can browse and enroll in courses",
      "Watch lessons using the React-YouTube player",
      "Educators can upload video URLs and add text content with an editor",
      "Assignments management for students and educators (demo/partial)",
      "Analytics and performance tracking (demo/partial)",
      "Interactive dashboard and messaging system (demo/partial)",
      "Simple, responsive design for desktop and mobile devices"
    ],
    github: "https://github.com/yourusername/limitless-learning",
    liveDemo: "https://limitlesslearning.example.com"
  }


  ,

  {
    id: "fayda-equb",
    name: "Fayda Equb (PWA)",
    description: "Fayda Equb is a Progressive Web App I built as a freelance front-end project for a client. The app digitizes traditional Ethiopian Equb, allowing users to create, join, and manage different Equb groups, track contributions, and see lottery results. I focused entirely on the front-end, creating a smooth, interactive, and mobile-friendly interface. The back-end is handled separately by another team. The app works offline as a PWA and provides a seamless experience for users to manage their Equbs easily and intuitively.",
    imageUrl: assets.equb_thumbnail, // replace with your Fayda Equb image
    status: "live",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "React Router",
        icon: "https://raw.githubusercontent.com/remix-run/react-router/main/docs/_assets/react-router-mark-color.svg",
        color: "#CA4245",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4",
      },
      {
        name: "React Toastify",
        icon: "https://raw.githubusercontent.com/fkhadra/react-toastify/main/logo/logo.png",
        color: "#FFB800",
      },
      {
        name: "Lucide React Icons",
        icon: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/react.svg",
        color: "#000000",
      },
      {
        name: "Swiper",
        icon: "https://raw.githubusercontent.com/nolimits4web/swiper/main/package/img/logo.svg",
        color: "#007AFF",
      },
      {
        name: "React-PDF-Viewer",
        icon: "https://raw.githubusercontent.com/react-pdf-viewer/react-pdf-viewer/main/packages/core/logo.svg",
        color: "#E74C3C",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        color: "#646CFF",
      },
    ],
    features: [
      "Create and manage multiple Equb groups (front-end)",
      "Track contributions and payments",
      "Draw winners fairly and transparently",
      "Push notifications",
      "Offline support and mobile-friendly design"
    ],
    github: "https://github.com/yourusername/fayda-equb",
    liveDemo: "https://faydaequb.example.com"
  }

  ,

  {
    id: "gallery-app",
    name: "Gallery App",
    description: "Gallery App is a future Android application that I am currently designing in Figma. This project showcases my ability in  graphic and UI/UX design skills, focusing on creating a clean, modern, and intuitive layout. The app will allow users to browse, organize, and manage their photos and videos with smooth interactions and thoughtful navigation. While the Android implementation in Kotlin is planned for the future, the design work demonstrates my skills in creating visually appealing and user-friendly experiences that can translate seamlessly into a mobile app.",
    imageUrl: assets.galleryapp_thumbnail, // replace with your gallery design image
    status: "future",
    technologies: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#F24E1E",
      },
      {
        name: "Kotlin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        color: "#7F52FF",
      },
      {
        name: "Android Studio",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        color: "#3DDC84",
      },
    ],
    features: [
      "Modern, minimal, and user-friendly design",
      "Planned Android implementation using Kotlin",
      "Smooth browsing and management of photos and videos",
      "Album organization and intuitive search functionality",
      "Showcases my graphic design and UI/UX skills"
    ],
    github: "https://github.com/yourusername/gallery-app",
    liveDemo: "https://galleryapp.example.com"
  }
  ,


  {
    id: "limitless-chat",
    name: "LimitlessChat",
    description: "LimitlessChat is a future Flutter-based mobile application that I am currently designing in Figma. This project showcases my ability in graphic and UI/UX design skills, focusing on creating a clean, modern, and intuitive interface. The app will allow users to chat one-on-one, participate in group discussions, join course-based educational rooms, and share files and voice messages with smooth interactions and thoughtful navigation. While the Flutter implementation is planned for the future, the design work demonstrates my skills in creating visually appealing and user-friendly experiences that can translate seamlessly into a fully functional mobile app.",
    imageUrl: assets.limitlesschat_thumbnail, // replace with your LimitlessChat image
    status: "future",
    technologies: [
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        color: "#02569B",
      },
      {
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        color: "#0175C2",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "#FFCA28",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#F24E1E",
      },
    ],
    features: [
      "One-on-one and group messaging",
      "Course-based educational chat rooms",
      "Voice and file sharing support",
      "Clean, modern, and user-friendly UI design",
      "Showcases my graphic and UI/UX design skills",
      "Currently in design and prototyping stage"
    ],
    github: "https://github.com/yourusername/limitless-chat",
    liveDemo: "https://limitlesschat.example.com"
  },












  // ========== MECHANICAL PROJECTS ==========
  {
    id: "solidworks-engine",
    name: "Engine Assembly (SolidWorks)",
    type: "mechanical",
    shortDescription: "3D modeling and assembly of engine parts in SolidWorks",
    description: "During my Mechanical Engineering studies at Bahir Dar University, I designed and modeled this engine project on my own. I created all parts, including the piston, piston pin, connecting rod, crankshaft, upper block, and lower block, and assembled them into a complete engine model. This project helped me practice important SolidWorks skills like sketching, extrusion, revolved features, cuts, chamfers, fillets, patterns, and assembly mates.",
    imageUrl: assets.engine_thumbnail,
    videoUrl: assets.engineVideo,
    images: [
      assets.blog11,
      assets.blog12,
      assets.blog13,
      assets.blog13,
      assets.blog13,
      assets.blog13,



    ],
    status: "live",
    technologies: [
      { name: "SolidWorks", icon: assets.solidworks, color: "#D66224" }
    ],
    features: [
      "Modeled individual engine parts from scratch",
      "Applied features like Extrude, Revolve, Cut, Chamfer, Fillet, Linear Pattern",
      "Assembled all parts using mates and copy-mate techniques",
      "Created simple animations and set appearances for visualization",
      "Independent project completed during my university studies"
    ],
    richDescription: `
  <h2>Project Overview</h2>
  <p>This engine assembly project was completed independently during my Mechanical Engineering studies at Bahir Dar University. I designed and modeled all engine parts and assembled them into a complete engine model.</p>

  <h3>Design and Modeling</h3>
  <ul>
    <li>Created parts like piston, piston pin, connecting rod, crankshaft, upper and lower blocks</li>
    <li>Used SolidWorks features: sketching, extrusion, revolved features, cuts, chamfers, fillets, linear patterns</li>
  </ul>

  <h3>Assembly</h3>
  <ul>
    <li>Assembled parts using mates and copy-mate techniques</li>
    <li>Added basic animations and appearances for visualization</li>
  </ul>

  <h3>Takeaway</h3>
  <ul>
    <li>Independent project completed fully on my own</li>
    <li>Shows practical experience with SolidWorks and mechanical design</li>
  </ul>
`,
    github: "https://github.com/yourusername/solidworks-engine",
    liveDemo: "https://solidworks-engine-demo.example.com"
  }

  ,
];








// data.js
export const blogPosts = [
  {
    id: "1",
    thumbnailBlog: assets.blog1,
    image: assets.blog1,
    alt: "A diagram explaining how a CDN works with an origin server, CDN servers, and users.",
    topic: "Web Performance",
    title: "How Does a CDN Work? And What's the Difference with Caching?",
    description: "Demystifying Content Delivery Networks (CDNs). Learn how they speed up your website for users globally and how they differ from traditional web caching.",
    content: `
    <p>In today's global digital landscape, speed is everything. Users expect websites to load instantly, no matter where they are. This is where a Content Delivery Network, or CDN, becomes a critical piece of web infrastructure. But how does it actually work? And is it just a fancy word for caching? Let's break it down.</p>

    <h3>The Problem: The Lonely Origin Server</h3>
    <p>Imagine your website lives on a single server in a data center in New York. When a user in Sydney visits your site, their browser has to send a request all the way across the world to that server in New York and wait for the response to travel back. This long distance creates latency, resulting in slower load times and a frustrating user experience.</p>
    <p>This single server is your <strong>Origin Server</strong>. It's the definitive source of your website's content.</p>

    <h3>The Solution: The CDN to the Rescue</h3>
    <p>A CDN solves this latency problem by creating a distributed network of servers around the world. These are called <strong>CDN Servers</strong> (or "edge servers"). Instead of every <strong>User</strong> connecting to your origin server, they connect to the CDN server geographically closest to them.</p>

    <h3>How a CDN Works: A Step-by-Step Journey</h3>
    <p>Let's follow the journey of a user requesting an image from your website:</p>
    <ol>
      <li><strong>User Request:</strong> A user in Sydney wants to see 'cat-photo.jpg'. Their browser sends a request.</li>
      <li><strong>CDN Check:</strong> The request is intelligently routed to the nearest CDN server in, say, Sydney.</li>
      <li><strong>The First Visit (Cache Miss):</strong> If this is the first time anyone in Sydney has requested this image, the CDN server doesn't have it. It fetches a copy from the distant <strong>Origin Server</strong> in New York and stores (caches) it locally.</li>
      <li><strong>Delivery:</strong> The CDN server delivers the image to the user in Sydney.</li>
      <li><strong>The Next Visit (Cache Hit):</strong> Now, when a second user in Sydney requests the same image, the CDN server already has it! It delivers the image directly from its local cache, eliminating the long round-trip to New York. The load time is dramatically faster.</li>
    </ol>

    <h3>So, What's the Difference with Caching?</h3>
    <p>This is a common point of confusion. While a CDN <em>uses</em> caching, they are not the same thing.</p>

    <p><strong>Caching is a Technique.</strong> It's the process of storing copies of data in a temporary location (a cache) to serve future requests faster. Your browser has a cache, your database has a cache, and a single web server can have a cache.</p>

    <p><strong>A CDN is an Infrastructure.</strong> It's a globally distributed network of servers that implements caching on a massive scale. The key differences are:</p>

    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Traditional Caching (e.g., on a Web Server)</th>
          <th>CDN (Global Caching Infrastructure)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Scope</strong></td>
          <td>Local to a single server or client.</td>
          <td>Global, distributed across many geographic locations.</td>
        </tr>
        <tr>
          <td><strong>Primary Goal</strong></td>
          <td>Reduce load on the origin server and speed up repeat requests for that specific server.</td>
          <td>Reduce latency for end-users globally by serving content from a nearby location.</td>
        </tr>
        <tr>
          <td><strong>What's Cached</strong></td>
          <td>Often dynamic and static content for that specific application.</td>
          <td>Primarily static assets (images, CSS, JS, videos) and increasingly dynamic content.</td>
        </tr>
      </tbody>
    </table>

    <p>Think of it this way: <strong>Caching is the "what" (the action of storing), and a CDN is the "where" (the global network where the storing happens).</strong></p>

    <h3>Beyond Speed: Other CDN Benefits</h3>
    <ul>
      <li><strong>DDoS Mitigation:</strong> Large CDNs can absorb and disperse massive amounts of malicious traffic, protecting your origin server.</li>
      <li><strong>Reduced Bandwidth Costs:</strong> By serving cached content from the edge, CDNs significantly reduce the amount of data your origin server needs to provide.</li>
      <li><strong>Improved Reliability:</strong> If your origin server goes down, a CDN can often continue serving cached content, keeping parts of your site alive.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>A CDN is no longer a luxury for large enterprises; it's a fundamental best practice for any website seeking a global audience. By leveraging a network of distributed servers and sophisticated caching, it brings your content closer to your users, resulting in blazing-fast speeds, a better user experience, and a more resilient application.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2023-10-26",
    dateLabel: "Oct 26, 2023",
    readTime: "4 min",
    tags: ["CDN", "Web Performance", "Caching", "DevOps", "Web Development"]
  },


  {
    id: "2",
    thumbnailBlog: assets.blog2,
    image: assets.blog2,
    alt: "An illustration representing GitHub Actions workflows and automation.",
    topic: "DevOps & CI/CD",
    title: "Getting Started with GitHub Actions: Automate Your Workflow from Code to Deployment",
    description: "Stop doing manual tasks. Learn how GitHub Actions can automate your software development workflows, from running tests to deploying applications, directly from your repository.",
    content: `
    <p>In the modern software development lifecycle, automation is not just a convenience—it's a necessity. Manually running tests, building code, and deploying applications are repetitive, error-prone tasks that slow down development. Enter <strong>GitHub Actions</strong>, a powerful automation tool built directly into GitHub that can handle these tasks for you. Let's explore what it is and how you can use it to supercharge your workflow.</p>

    <h3>What Are GitHub Actions?</h3>
    <p>GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that automatically run in response to specific events in your repository, like a push to a branch, a pull request, or the creation of a new release.</p>
    <p>The best part? It's integrated directly into your GitHub repository, so there's no need to juggle external services or complex configurations to get started.</p>

    <h3>Core Concepts: The Building Blocks</h3>
    <p>To understand GitHub Actions, you need to know four key terms:</p>
    <ul>
      <li><strong>Workflow:</strong> This is the automated procedure you define. It's a configurable, automated process made up of one or more jobs. You define workflows in a YAML file in your repository's <code>.github/workflows</code> directory.</li>
      <li><strong>Event:</strong> This is the specific activity that triggers a workflow run. Common examples are <code>push</code>, <code>pull_request</code>, or <code>release</code>.</li>
      <li><strong>Job:</strong> A job is a set of <em>steps</em> that execute on the same runner (a virtual machine or container). Each job runs in its own instance and can run in parallel with other jobs.</li>
      <li><strong>Action:</strong> These are the smallest portable building blocks of a workflow. You can write your own custom actions, or use actions from the massive <a href="https://github.com/marketplace?type=actions" target="_blank">GitHub Marketplace</a> to interact with the platform, your code, or any service.</li>
    </ul>

    <h3>Your First Workflow: A Simple Example</h3>
    <p>Let's create a basic workflow that runs tests whenever someone pushes code to the main branch. Create a file at <code>.github/workflows/ci.yml</code> in your repository with the following content:</p>

    <pre><code>name: CI Pipeline

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the repository code
      - name: Checkout code
        uses: actions/checkout@v4

      # Step 2: Set up Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm ci

      # Step 4: Run the test suite
      - name: Run tests
        run: npm test
    </code></pre>

    <p>This workflow does the following:</p>
    <ol>
      <li><strong>Trigger:</strong> It is triggered by a <code>push</code> event to the <code>main</code> branch.</li>
      <li><strong>Environment:</strong> The job runs on the latest Ubuntu virtual machine.</li>
      <li><strong>Steps:</strong> It checks out your code, sets up a Node.js environment, installs dependencies, and runs the test suite.</li>
    </ol>

    <h3>Why Use GitHub Actions? The Key Benefits</h3>
    <ul>
      <li><strong>Tight Integration:</strong> Being native to GitHub means seamless management of secrets, permissions, and repository events without any extra configuration.</li>
      <li><strong>Massive Ecosystem:</strong> The GitHub Marketplace is filled with thousands of pre-built actions for common tasks (deploying to AWS, sending Slack notifications, building Docker images), saving you from writing code from scratch.</li>
      <li><strong>Flexibility:</strong> You can create simple, single-job workflows or complex, multi-job matrices that test your code on different operating systems and language versions.</li>
      <li><strong>Cost-Effective:</strong> For public repositories and many private repositories, GitHub offers a generous amount of free compute minutes.</li>
    </ul>

    <h3>Beyond Testing: Other Powerful Use Cases</h3>
    <p>While running tests is a classic use case, GitHub Actions can do much more:</p>
    <ul>
      <li><strong>Automated Deployments:</strong> Deploy your application to platforms like Vercel, Netlify, AWS, or your own server when code is merged to main.</li>
      <li><strong>Package Publishing:</strong> Automatically publish a new version of your package to npm or Docker Hub when you create a release.</li>
      <li><strong>Project Management:</strong> Automatically label issues, assign pull requests, or post messages to Slack or Discord.</li>
      <li><strong>Security Scanning:</strong> Integrate code security scanning tools to find vulnerabilities on every pull request.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>GitHub Actions lowers the barrier to entry for automation and CI/CD. By defining your workflows as code in your repository, you create a transparent, repeatable, and efficient process that improves code quality and accelerates development. Start with a simple test runner and gradually explore its vast potential—it might just become your favorite DevOps tool.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2023-11-14",
    dateLabel: "Nov 14, 2023",
    readTime: "5 min",
    tags: ["GitHub Actions", "CI/CD", "DevOps", "Automation", "GitHub", "Testing"]
  },



  {
    id: "3",
    thumbnailBlog: assets.blog3,
    image: assets.blog3,
    alt: "A diagram illustrating the core concepts of a Progressive Web App (PWA) leading to an 'Installed' state.",
    topic: "Web Development",
    title: "What is a PWA? A Guide to Progressive Web Apps",
    description: "Progressive Web Apps (PWAs) combine the best of the web and mobile apps. Learn what makes a web app 'progressive' and how they provide a reliable, fast, and engaging user experience.",
    content: `
    <p>Have you ever visited a website on your phone that felt just like using a native app? It was probably fast, worked offline, and maybe even prompted you to 'Install' it on your home screen. This magical experience is the power of a <strong>Progressive Web App (PWA)</strong>. But what exactly does that mean? Let's break down the acronym and explore why PWAs are a game-changer for modern web development.</p>

    <h3>Deconstructing the PWA: What Makes it "Progressive"?</h3>
    <p>The term "Progressive Web App" can be mysterious, but each word is significant. Let's start from the end and work our way to the beginning.</p>

    <p><strong>A. It's an "App"-like Experience.</strong><br>
    The goal of a PWA is to feel like a native mobile application. It has a seamless, full-screen experience, smooth animations, and responsive interactions that make the user forget they're in a browser.</p>

    <p><strong>W. It's built for the "Web".</strong><br>
    At its core, a PWA is just a website. It's built with standard web technologies (HTML, CSS, JavaScript) and lives at a URL. This means there's no app store approval process, and users can access it instantly. It's linkable and discoverable by search engines.</p>

    <p><strong>P. It's "Progressive".</strong><br>
    This is the most important part. A PWA is designed to work for <em>every</em> user, regardless of their browser choice or the device they're on. It uses feature detection to progressively enhance the experience. If a user's browser supports advanced features, the app gets better (becoming more "app-like"). If not, the user still gets the core, functional website. It's an inclusive, baseline-for-all approach.</p>

    <h3>The Magic Ingredient: What Technically Defines a PWA?</h3>
    <p>For a web app to be considered a PWA, it must meet three key technical criteria, often visualized as a triangle of reliability, speed, and engagement.</p>

    <ul>
      <li><strong>Reliable: It Works Offline.</strong> When a user launches a PWA, it should load instantly, even on flaky networks or offline. This is achieved through a <strong>Service Worker</strong>, a script that runs in the background and acts as a client-side proxy, caching critical resources.</li>
      <li><strong>Fast: It Responds Quickly.</strong> PWAs feel snappy. Every user interaction should be smooth, with no janky scrolling or slow-to-respond buttons. Perceived performance is as important as actual load time.</li>
      <li><strong>Engaging: It Feels Like an App.</strong> This is where the <strong>Web App Manifest</strong> comes in. This is a simple JSON file that tells the browser about your app: its name, icons, colors, and how it should display. This enables the holy grail of the PWA experience: being <strong>INSTALLED</strong>.</li>
    </ul>

    <h3>The "INSTALLED" Moment: Bridging the Web and Native</h3>
    <p>The ability to be installed is what truly sets PWAs apart. When your PWA meets certain criteria (typically having a service worker and a manifest file), browsers like Chrome, Safari, and Edge will prompt users to "Add to Home Screen" or "Install".</p>
    <p>Once installed, the PWA:</p>
    <ul>
      <li>Gets its own icon on the home screen or dock.</li>
      <li>Launches in a standalone, full-screen window without the browser's address bar.</li>
      <li>Is searchable in the system's app list.</li>
    </ul>
    <p>This transforms a website from a temporary destination into a permanent tool on the user's device, dramatically increasing engagement and return visits.</p>

    <h3>Key Benefits of Building a PWA</h3>
    <ul>
      <li><strong>Cross-Platform, Single Codebase:</strong> Build once, run everywhere. Your PWA works on iOS, Android, Windows, and Mac, reducing development and maintenance costs.</li>
      <li><strong>No App Store Required:</strong> Skip the friction of app store submissions, updates, and the 15-30% revenue cut taken by some platforms.</li>
      <li><strong>Small Footprint:</strong> PWAs are tiny compared to native apps, which is a huge advantage for users in regions with limited storage or data plans.</li>
      <li><strong>Always Up-to-Date:</strong> Service workers ensure users are always running the latest version of your app without needing to manually update.</li>
      <li><strong>Improved Performance:</strong> Caching and efficient loading lead to faster experiences, which directly improves user retention and conversion rates.</li>
    </ul>

    <h3>Conclusion: The Future is Progressive</h3>
    <p>Progressive Web Apps represent a fundamental shift in how we think about software delivery. They offer a user-centric model that prioritizes accessibility, performance, and engagement. By leveraging the open web, PWAs provide a path to reach more users with a better, more resilient experience. Whether you're building a simple blog or a complex business application, considering a PWA approach is no longer a fringe idea—it's a strategic advantage.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2023-12-05",
    dateLabel: "Dec 5, 2023",
    readTime: "5 min",
    tags: ["PWA", "Progressive Web App", "Web Development", "Mobile", "Service Worker", "Web App Manifest"]
  },



  {
    id: "4",
    thumbnailBlog: assets.blog4,
    image: assets.blog4,
    alt: "A diagram showing the relationship between a Dockerfile, Docker Image, and Docker Container.",
    topic: "DevOps & Containers",
    title: "Docker Basics: Understanding Dockerfile, Image, and Container",
    description: "Demystifying the core components of Docker. Learn the crucial difference between a Dockerfile, a Docker Image, and a Docker Container, and how they work together to create portable applications.",
    content: `
    <p>If you've ever dipped your toes into the world of modern software development, you've certainly heard of Docker. It's revolutionized how we build, ship, and run applications by using containerization. But the terminology can be confusing. What's the real difference between a <strong>Dockerfile</strong>, a <strong>Docker Image</strong>, and a <strong>Docker Container</strong>? Let's break it down with a simple analogy and clear definitions.</p>

    <h3>The Blueprint: The Dockerfile</h3>
    <p>Think of a <strong>Dockerfile</strong> as the blueprint or recipe for your application. It's a simple text file containing a set of instructions that Docker uses to build your application environment.</p>
    <p>This file defines everything your application needs to run:</p>
    <ul>
      <li><strong>Base Image:</strong> What to start from (e.g., <code>FROM node:18-alpine</code>).</li>
      <li><strong>Dependencies:</strong> What to install (e.g., <code>RUN npm install</code>).</li>
      <li><strong>Source Code:</strong> What to copy into the image (e.g., <code>COPY . .</code>).</li>
      <li><strong>Commands:</strong> What to run when it starts (e.g., <code>CMD ["npm", "start"]</code>).</li>
    </ul>
    <p><em>The Dockerfile itself is not your application. It's the set of commands used to create your application's image.</em></p>

    <h3>The Snapshot: The Docker Image</h3>
    <p>Once you have your Dockerfile, you use the <code>docker build</code> command to create a <strong>Docker Image</strong>. If the Dockerfile is the recipe, the image is the fully cooked, ready-to-eat dish.</p>
    <p>An image is an immutable (unchangeable) file—a snapshot—that contains your application code, libraries, dependencies, tools, and everything else needed to run it. It's a portable, self-sufficient unit.</p>
    <p><strong>Key Characteristics of an Image:</strong></p>
    <ul>
      <li><strong>Read-Only:</strong> You cannot change an image once it's built. To make changes, you modify the Dockerfile and build a new image.</li>
      <li><strong>Layered:</strong> Each instruction in the Dockerfile creates a layer. This makes image building efficient and allows layers to be reused across different images.</li>
      <li><strong>Stored:</strong> Images are stored in a registry, like Docker Hub, so they can be easily shared and pulled onto any machine.</li>
    </ul>
    <p>You can have multiple versions of an image (e.g., <code>my-app:v1</code>, <code>my-app:latest</code>).</p>

    <h3>The Running Instance: The Docker Container</h3>
    <p>A <strong>Docker Container</strong> is a running instance of a Docker Image. To continue our analogy, if the image is the ready-to-eat dish, the container is the act of you eating it.</p>
    <p>You start a container from an image using the <code>docker run</code> command. The container is a live, isolated, and executable environment. You can have multiple containers running from the same image, and they will not interfere with each other.</p>
    <p><strong>Key Characteristics of a Container:</strong></p>
    <ul>
      <li><strong>Read-Write:</strong> While the underlying image is read-only, a container adds a thin, writable layer on top where your application runs and writes its data.</li>
      <li><strong>Isolated:</strong> It has its own isolated filesystem, networking, and process space.</li>
      <li><strong>Ephemeral:</strong> Containers can be stopped, started, and destroyed. The data inside a container is typically lost when it is removed, which is why we use volumes for persistent data.</li>
    </ul>

    <h3>The Workflow: From Code to Running Application</h3>
    <p>Let's visualize the entire process with a simple example:</p>
    <ol>
      <li><strong>Write a Dockerfile:</strong> You create a file named <code>Dockerfile</code> that defines how to set up your Node.js app.</li>
      <li><strong>Build an Image:</strong> You run <code>docker build -t my-node-app .</code>. Docker reads the Dockerfile, executes each instruction, and creates a portable image named <code>my-node-app</code>.</li>
      <li><strong>Run a Container:</strong> You run <code>docker run -p 3000:3000 my-node-app</code>. Docker takes the <code>my-node-app</code> image and creates a running container from it. Your app is now live and accessible.</li>
    </ol>

    <h3>Summary: The Crucial Distinction</h3>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Analogy</th>
          <th>Description</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Dockerfile</strong></td>
          <td>Blueprint / Recipe</td>
          <td>Text file with build instructions.</td>
          <td>Static</td>
        </tr>
        <tr>
          <td><strong>Docker Image</strong></td>
          <td>Snapshot / Ready-to-eat Dish</td>
          <td>Immutable artifact built from a Dockerfile.</td>
          <td>Static</td>
        </tr>
        <tr>
          <td><strong>Docker Container</strong></td>
          <td>Running Instance / The Act of Eating</td>
          <td>Live, isolated process running from an image.</td>
          <td>Dynamic</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>
    <p>Understanding the relationship between a Dockerfile, Image, and Container is fundamental to working effectively with Docker. The Dockerfile defines the environment, the Image is the portable, built artifact, and the Container is the live, running application. This powerful trio is what makes Docker so effective for creating consistent, reliable, and scalable software deployments across any environment, from a developer's laptop to a production server.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2023-12-12",
    dateLabel: "Dec 12, 2023",
    readTime: "4 min",
    tags: ["Docker", "Containers", "DevOps", "Dockerfile", "Docker Image", "Docker Container"]
  },



  {
    id: "5",
    thumbnailBlog: assets.blog5_thumbnail,
    image: assets.blog5,
    alt: "CI/CD Pipeline workflow diagram showing automated stages from code commit to production deployment",
    topic: "DevOps",
    title: "CI/CD Pipelines: Automating Your Path to Production",
    description: "Discover how CI/CD pipelines transform code commits into reliable deployments through automated testing, building, and staging workflows.",
    content: `
    <p>In today's fast-paced software development landscape, CI/CD (Continuous Integration and Continuous Deployment) pipelines have become the backbone of efficient and reliable software delivery. These automated workflows ensure that code changes are systematically tested, built, and deployed, reducing human error and accelerating time to market.</p>

    <h3>Understanding the Pipeline Trigger Mechanism</h3>
    <p>CI/CD pipelines are designed to automatically activate whenever changes are pushed to the repository. This trigger mechanism can be configured based on various events:</p>
    <ul>
      <li><strong>Push Events:</strong> Triggered when code is pushed to specific branches</li>
      <li><strong>Pull Request Events:</strong> Activated when pull requests are opened or updated</li>
      <li><strong>Scheduled Triggers:</strong> Run at specific intervals for regular builds</li>
      <li><strong>Manual Triggers:</strong> Allow developers to manually initiate pipelines when needed</li>
    </ul>

    <h3>Deep Dive into Pipeline Stages</h3>
    
    <h4>1. Code Fetching and Preparation</h4>
    <p>The pipeline begins by fetching the latest code from the version control system. This stage includes:</p>
    <ul>
      <li>Repository cloning or pulling latest changes</li>
      <li>Branch verification and validation</li>
      <li>Code quality checks and static analysis</li>
      <li>Dependency resolution and environment setup</li>
    </ul>

    <h4>2. Build Phase - Compilation and Packaging</h4>
    <p>This critical stage transforms source code into executable artifacts:</p>
    <ul>
      <li><strong>Compilation:</strong> Converting source code to executable binaries</li>
      <li><strong>Dependency Management:</strong> Resolving and installing required libraries</li>
      <li><strong>Asset Processing:</strong> Minifying CSS, JavaScript, and optimizing images</li>
      <li><strong>Containerization:</strong> Building Docker images when applicable</li>
      <li><strong>Artifact Creation:</strong> Generating deployable packages (JAR, WAR, executables)</li>
    </ul>

    <h4>3. Comprehensive Testing Strategy</h4>
    <p>The testing phase employs multiple layers of automated testing:</p>
    <ul>
      <li><strong>Unit Tests:</strong> Testing individual components in isolation</li>
      <li><strong>Integration Tests:</strong> Verifying component interactions</li>
      <li><strong>End-to-End Tests:</strong> Testing complete user workflows</li>
      <li><strong>Performance Tests:</strong> Ensuring system meets performance requirements</li>
      <li><strong>Security Scans:</strong> Identifying vulnerabilities and security issues</li>
    </ul>

    <h4>4. Real-time Feedback Loop</h4>
    <p>Immediate feedback is crucial for developer productivity:</p>
    <ul>
      <li>Automated notifications via email, Slack, or Teams</li>
      <li>Detailed test reports and code coverage metrics</li>
      <li>Build status indicators in pull requests</li>
      <li>Performance regression alerts</li>
      <li>Security vulnerability reports</li>
    </ul>

    <h4>5. Artifact Management and Storage</h4>
    <p>Successful builds produce artifacts that are stored for deployment:</p>
    <ul>
      <li>Versioned artifact storage in repositories (Nexus, Artifactory)</li>
      <li>Docker image registry management</li>
      <li>Build metadata and provenance tracking</li>
      <li>Rollback capability through artifact versioning</li>
    </ul>

    <h3>Continuous Integration vs. Continuous Delivery vs. Continuous Deployment</h3>
    
    <h4>Continuous Integration (CI)</h4>
    <p>Focuses on the early stages of the pipeline:</p>
    <ul>
      <li>Automated building and testing of every code commit</li>
      <li>Early bug detection and quick feedback</li>
      <li>Maintaining code quality and reducing integration issues</li>
      <li>Typically ends with successful build and test completion</li>
    </ul>

    <h4>Continuous Delivery (CD)</h4>
    <p>Extends CI by preparing code for release:</p>
    <ul>
      <li>Automated deployment to staging environments</li>
      <li>Additional testing in production-like environments</li>
      <li>Manual approval gate before production deployment</li>
      <li>Ensures code is always in a deployable state</li>
    </ul>

    <h4>Continuous Deployment</h4>
    <p>The most advanced approach:</p>
    <ul>
      <li>Fully automated deployment to production</li>
      <li>No manual intervention required</li>
      <li>Requires comprehensive test coverage and monitoring</li>
      <li>Enables rapid feature delivery and feedback collection</li>
    </ul>

    <h3>Staging Environment Deployment</h3>
    <p>Before reaching production, code undergoes staging deployment:</p>
    <ul>
      <li>Environment mirroring production configuration</li>
      <li>User acceptance testing (UAT)</li>
      <li>Performance and load testing validation</li>
      <li>Smoke testing and sanity checks</li>
      <li>Business stakeholder validation</li>
    </ul>

    <h3>Production Deployment Strategies</h3>
    <p>Modern deployment approaches minimize risk and downtime:</p>
    <ul>
      <li><strong>Blue-Green Deployment:</strong> Maintain two identical environments, switching traffic between them</li>
      <li><strong>Canary Releases:</strong> Gradually roll out changes to a small user subset</li>
      <li><strong>Rolling Updates:</strong> Incrementally update instances without downtime</li>
      <li><strong>Feature Flags:</strong> Deploy code with features toggled off, enabling them gradually</li>
    </ul>

    <h3>Monitoring and Rollback Procedures</h3>
    <p>Post-deployment monitoring ensures system stability:</p>
    <ul>
      <li>Real-time application performance monitoring</li>
      <li>Error tracking and alerting systems</li>
      <li>User behavior and experience monitoring</li>
      <li>Automated rollback triggers based on metrics</li>
      <li>Health checks and readiness probes</li>
    </ul>

    <h3>Best Practices for Effective CI/CD Pipelines</h3>
    <ul>
      <li><strong>Keep Pipelines Fast:</strong> Optimize build times and parallelize tasks</li>
      <li><strong>Maintain Consistency:</strong> Use infrastructure as code and containerization</li>
      <li><strong>Implement Comprehensive Testing:</strong> Balance test coverage with execution time</li>
      <li><strong>Ensure Security:</strong> Integrate security scanning throughout the pipeline</li>
      <li><strong>Monitor Pipeline Health:</strong> Track pipeline metrics and optimize continuously</li>
      <li><strong>Document Everything:</strong> Maintain clear documentation for pipeline processes</li>
    </ul>

    <h3>Common CI/CD Tools and Technologies</h3>
    <p>Popular tools in the CI/CD ecosystem include:</p>
    <ul>
      <li><strong>Pipeline Orchestration:</strong> Jenkins, GitLab CI, GitHub Actions, CircleCI</li>
      <li><strong>Containerization:</strong> Docker, Kubernetes, Podman</li>
      <li><strong>Configuration Management:</strong> Ansible, Chef, Puppet, Terraform</li>
      <li><strong>Monitoring:</strong> Prometheus, Grafana, Datadog, New Relic</li>
      <li><strong>Artifact Management:</strong> JFrog Artifactory, Sonatype Nexus</li>
    </ul>

    <h3>Conclusion</h3>
    <p>CI/CD pipelines represent a fundamental shift in how software is developed and delivered. By automating the entire process from code commit to production deployment, organizations can achieve faster release cycles, higher quality software, and more reliable operations. The key to successful CI/CD implementation lies in careful planning, comprehensive testing, and continuous optimization of the pipeline itself.</p>

    <p>As you implement or improve your CI/CD practices, remember that the goal is not just automation, but creating a robust, efficient, and reliable software delivery system that enables your team to deliver value to users quickly and confidently.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2024-01-18",
    dateLabel: "Jan 18, 2024",
    readTime: "15 min",
    tags: ["ci-cd", "devops", "automation", "deployment", "testing", "jenkins", "docker", "kubernetes"]
  },


  {
    id: "6",
    thumbnailBlog: assets.blog6,
    image: assets.blog6,
    alt: "Terminal showing MongoDB Atlas connection errors including queryTxt ETIMEOUT and querySrv ENOTFOUND",
    topic: "Database & Backend",
    title: "Solving MongoDB Atlas Connection Errors: queryTxt ETIMEOUT and querySrv ENOTFOUND",
    description: "Struggling to connect your Node.js app to MongoDB Atlas? Learn how to fix common DNS-related connection errors like queryTxt ETIMEOUT and querySrv ENOTFOUND with practical solutions.",
    content: `
    <p>You've set up your MongoDB Atlas cluster, configured your IP whitelist, and written your connection code. But when you run <code>node server.js</code>, instead of a successful connection, you're greeted with frustrating errors like <strong>queryTxt ETIMEOUT</strong> or <strong>querySrv ENOTFOUND</strong>. Don't worry—you're not alone. These common DNS-related issues have straightforward solutions.</p>

    <h3>Understanding the Errors</h3>
    <p>First, let's understand what these errors actually mean:</p>
    
    <h4>queryTxt ETIMEOUT</h4>
    <p>This error occurs when your application tries to look up DNS TXT records for MongoDB Atlas but the request times out. Essentially, your computer can't resolve the hostname <code>cluster0-ghis2.mongodb.net</code> to an IP address within the expected time frame.</p>

    <h4>querySrv ENOTFOUND</h4>
    <p>This error happens when the DNS lookup for SRV records fails completely. The hostname (like <code>_mongodb._tcp.cluster0.ghis2.mongodb.net</code>) cannot be found in the DNS system.</p>

    <p>Both errors point to <strong>DNS resolution problems</strong> rather than issues with your code or MongoDB Atlas configuration itself.</p>

    <h3>Solution 1: Change Your DNS Server (Most Effective)</h3>
    <p>This is the most common and effective solution. Your Internet Service Provider's (ISP) default DNS servers might be slow, unreliable, or have trouble resolving MongoDB Atlas's specific records.</p>

    <h4>Switch to Google's Public DNS:</h4>
    <ol>
      <li><strong>On Windows:</strong>
        <ul>
          <li>Go to Control Panel > Network and Internet > Network and Sharing Center</li>
          <li>Click "Change adapter settings"</li>
          <li>Right-click your active connection > Properties</li>
          <li>Select "Internet Protocol Version 4 (TCP/IPv4)" > Properties</li>
          <li>Choose "Use the following DNS server addresses":</li>
          <li>Preferred DNS: <code>8.8.8.8</code></li>
          <li>Alternate DNS: <code>8.8.4.4</code></li>
        </ul>
      </li>
      <li><strong>On macOS:</strong>
        <ul>
          <li>Go to System Preferences > Network</li>
          <li>Select your active connection > Advanced</li>
          <li>Go to DNS tab > Click + to add DNS servers</li>
          <li>Add <code>8.8.8.8</code> and <code>8.8.4.4</code></li>
        </ul>
      </li>
    </ol>

    <p>After changing DNS, flush your DNS cache:</p>
    <ul>
      <li><strong>Windows:</strong> Open Command Prompt as admin and run <code>ipconfig /flushdns</code></li>
      <li><strong>macOS:</strong> Open Terminal and run <code>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code></li>
    </ul>

    <h3>Solution 2: Update Your Connection String Driver Version</h3>
    <p>Older versions of the MongoDB driver might have compatibility issues. Make sure you're using a recent connection string:</p>

    <ol>
      <li>Go to your MongoDB Atlas dashboard</li>
      <li>Click "Connect" for your cluster</li>
      <li>Choose "Connect your application"</li>
      <li>Select Driver version: <strong>Node.js 2.2.12 or later</strong></li>
      <li>Copy the new connection string</li>
      <li>Replace your old connection string in the code</li>
    </ol>

    <h3>Solution 3: Verify Your Network Configuration</h3>
    <p>Sometimes, the issue is with your local network environment:</p>

    <ul>
      <li><strong>Disable VPN:</strong> If you're using a VPN, try disconnecting it temporarily</li>
      <li><strong>Check Firewall:</strong> Ensure your firewall isn't blocking Node.js or MongoDB connections</li>
      <li><strong>Corporate Networks:</strong> Some corporate networks block external database connections. Try from a different network</li>
      <li><strong>Mobile Hotspot:</strong> Test using your phone's mobile hotspot to rule out network-specific issues</li>
    </ul>

    <h3>Solution 4: Double-Check Atlas Configuration</h3>
    <p>While the errors are DNS-related, it's good to verify your Atlas setup:</p>

    <ul>
      <li><strong>IP Whitelist:</strong> Ensure your IP is whitelisted (or use <code>0.0.0.0/0</code> to allow all IPs temporarily for testing)</li>
      <li><strong>Database User:</strong> Verify you have a database user created with appropriate privileges</li>
      <li><strong>Cluster Status:</strong> Check that your cluster is running and not paused</li>
    </ul>

    <h3>Example Connection Code</h3>
    <p>Here's a robust connection pattern with proper error handling:</p>

    <pre><code>const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    
    if (error.code === 'ETIMEOUT') {
      console.log('This is a DNS timeout error. Try changing your DNS to 8.8.8.8');
    }
    
    process.exit(1);
  }
};

module.exports = connectDB;
</code></pre>

    <h3>When Deploying to Cloud Platforms (Heroku, etc.)</h3>
    <p>If you encounter connection timeouts in production:</p>

    <ul>
      <li>Ensure your cloud provider's IP ranges are whitelisted in MongoDB Atlas</li>
      <li>Check that environment variables containing your connection string are properly set</li>
      <li>Verify that your cloud provider isn't blocking outbound connections on MongoDB's port (usually 27017)</li>
    </ul>

    <h3>Conclusion</h3>
    <p>MongoDB Atlas connection errors like <strong>queryTxt ETIMEOUT</strong> and <strong>querySrv ENOTFOUND</strong> are almost always DNS-related. The most reliable solution is switching to a public DNS like Google's (<code>8.8.8.8</code>). If that doesn't work, systematically check your connection string version, network configuration, and Atlas settings.</p>

    <p>Remember, these issues are environmental rather than problems with your code logic. With the right DNS configuration, you'll be connecting to MongoDB Atlas smoothly in no time!</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2024-01-15",
    dateLabel: "Jan 15, 2024",
    readTime: "4 min",
    tags: ["mongodb", "atlas", "nodejs", "mongoose", "database", "troubleshooting", "dns"]
  },



  {
    id: "7",
    thumbnailBlog: assets.blog7,
    image: assets.blog7,
    alt: "A diagram illustrating HTTP methods GET, POST, PUT, DELETE for client-server communication.",
    topic: "Backend Development",
    title: "Understanding HTTP Methods: The Foundation of RESTful APIs",
    description: "GET, POST, PUT, DELETE - what do these HTTP methods actually mean? Learn how these verbs define the interaction between clients and servers in web APIs and form the backbone of RESTful services.",
    content: `
    <p>Every time you scroll through a social media feed, add an item to a shopping cart, or update your profile, your browser or app is communicating with a server using a set of rules called HTTP. At the heart of this communication are <strong>HTTP Methods</strong> (or verbs), which tell the server what kind of action the client wants to perform. Understanding these methods is crucial for anyone working with web technologies, especially when building or consuming RESTful APIs.</p>

    <h3>The Client-Server Conversation</h3>
    <p>Before diving into the methods, let's set the stage. Web communication follows a request-response model:</p>
    <ol>
      <li><strong>Client sends a Request:</strong> A client (like a web browser or mobile app) initiates communication by sending a request to a server. This request includes an HTTP method, a URL, headers, and sometimes a body containing data.</li>
      <li><strong>Server sends a Response:</strong> The server processes the request and sends back a response, which includes a status code (like 200 OK or 404 Not Found) and often the requested data or a confirmation message.</li>
    </ol>
    <p>The HTTP method in the request is the single most important piece of information that defines the intent of the operation.</p>

    <h3>The Core Four HTTP Methods</h3>
    <p>While there are several HTTP methods, four of them form the cornerstone of most RESTful API interactions, often referred to as CRUD operations (Create, Read, Update, Delete).</p>

    <h4>1. GET - The Read Operation</h4>
    <p><strong>Purpose:</strong> Retrieve data from the server.</p>
    <p><strong>Analogy:</strong> Asking a librarian to fetch a specific book for you.</p>
    <p><strong>Key Characteristics:</strong></p>
    <ul>
      <li>It is <strong>safe</strong> and <strong>idempotent</strong>. Making multiple identical GET requests should not change the state of the server.</li>
      <li>It should not have a request body (though parameters can be sent via the URL query string).</li>
      <li>Used for fetching user profiles, product lists, search results, etc.</li>
    </ul>
    <p><strong>Example:</strong> <code>GET /api/users/123</code> retrieves the details of the user with ID 123.</p>

    <h4>2. POST - The Create Operation</h4>
    <p><strong>Purpose:</strong> Submit data to the server to create a new resource.</p>
    <p><strong>Analogy:</strong> Filling out a form to apply for a new library card, thereby creating a new record.</p>
    <p><strong>Key Characteristics:</strong></p>
    <ul>
      <li>It is <strong>neither safe nor idempotent</strong>. Two identical POST requests will typically create two duplicate resources.</li>
      <li>It usually has a request body containing the data for the new resource, often in <strong>JSON</strong> format.</li>
      <li>Used for user login, creating new orders, submitting a contact form, etc.</li>
    </ul>
    <p><strong>Example:</strong> <code>POST /api/users</code> with a JSON body <code>{"name": "Alice", "email": "alice@example.com"}</code> creates a new user.</p>

    <h4>3. PUT - The Update/Replace Operation</h4>
    <p><strong>Purpose:</strong> Update an existing resource by replacing its entire data.</p>
    <p><strong>Analogy:</strong> Replacing your entire old library card with a new, updated one.</p>
    <p><strong>Key Characteristics:</strong></p>
    <ul>
      <li>It is <strong>idempotent</strong>. Sending the same PUT request multiple times will produce the same result—the resource will end up in the same state.</li>
      <li>It requires the client to send the <em>complete</em> updated resource in the request body.</li>
      <li>Used for updating a user's entire profile.</li>
    </ul>
    <p><strong>Example:</strong> <code>PUT /api/users/123</code> with a full JSON user object replaces all data for user 123.</p>

    <h4>4. DELETE - The Delete Operation</h4>
    <p><strong>Purpose:</strong> Remove an existing resource.</p>
    <p><strong>Analogy:</strong> Asking the librarian to cancel and remove your library membership.</p>
    <p><strong>Key Characteristics:</strong></p>
    <ul>
      <li>It is <strong>idempotent</strong>. If you delete a resource, it's gone. Calling DELETE on it again won't change that fact (you might get a 404 error, but the state is the same).</li>
      <li>It typically does not have a request body.</li>
    </ul>
    <p><strong>Example:</strong> <code>DELETE /api/users/123</code> deletes the user with ID 123.</p>

    <h3>PATCH: The Partial Update</h3>
    <p>While not part of the "core four," <strong>PATCH</strong> is an important fifth method. Unlike PUT, which replaces the entire resource, PATCH is used to apply a partial update. You only send the fields that have changed.</p>
    <p><strong>Example:</strong> <code>PATCH /api/users/123</code> with <code>{"email": "newemail@example.com"}</code> updates only the email address for user 123, leaving all other fields intact.</p>

    <h3>Summary Table</h3>
    <table>
      <thead>
        <tr>
          <th>HTTP Method</th>
          <th>CRUD Operation</th>
          <th>Idempotent?</th>
          <th>Safe?</th>
          <th>Body in Request?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>GET</strong></td>
          <td>Read</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td><strong>POST</strong></td>
          <td>Create</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><strong>PUT</strong></td>
          <td>Update/Replace</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><strong>DELETE</strong></td>
          <td>Delete</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td><strong>PATCH</strong></td>
          <td>Partial Update</td>
          <td>No*</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>
    <p><em>*PATCH is not inherently idempotent, but it can be designed to be.</em></p>

    <h3>Conclusion</h3>
    <p>HTTP methods are the fundamental verbs that power the web. By using GET, POST, PUT, and DELETE correctly, you can design clean, predictable, and RESTful APIs that other developers can understand and use intuitively. Remembering the properties of idempotency and safety will help you choose the right method for the right job, leading to more robust and reliable web services.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2024-01-08",
    dateLabel: "Jan 8, 2024",
    readTime: "4 min",
    tags: ["HTTP", "REST", "API", "Web Development", "Backend", "GET", "POST"]
  },


  {
    id: "8",
    thumbnailBlog: assets.blog8,
    image: assets.blog8,
    alt: "Web Performance optimization diagram showing key metrics and improvement strategies",
    topic: "Web Performance",
    title: "Web Performance: The Complete Guide to Faster, Better Websites",
    description: "Learn why web performance matters and discover practical strategies to make your website faster, more responsive, and user-friendly across all devices and network conditions.",
    content: `
    <h2> What Is Web Performance?</h2>
    <p>Web performance refers to how quickly and efficiently a website loads, responds, and runs on a user's device. It's all about speed, responsiveness, and smooth experience — from the moment someone opens your site until they leave.</p>

    <h2> Why Web Performance Matters</h2>
    <p>In today's competitive digital landscape, performance isn't just a technical metric—it's a business imperative. Here's why:</p>
    
    <h3>User Experience & Satisfaction</h3>
    <p>Users expect instant results. A slow website creates frustration and leads to higher bounce rates. Research shows that:</p>
    <ul>
      <li>53% of mobile users abandon sites that take longer than 3 seconds to load</li>
      <li>A 1-second delay in page response can result in a 7% reduction in conversions</li>
      <li>Slow loading times directly impact user satisfaction and brand perception</li>
    </ul>

    <h3> Business Impact & Conversions</h3>
    <p>Performance directly affects your bottom line:</p>
    <ul>
      <li>Pinterest reduced perceived wait times by 40% and increased sign-ups by 15%</li>
      <li>BBC lost 10% of users for every additional second their site took to load</li>
      <li>Walmart found that every 1-second improvement in load time increased conversions by 2%</li>
    </ul>

    <h3> SEO & Search Rankings</h3>
    <p>Google uses page speed as a ranking factor for both desktop and mobile searches. Core Web Vitals are now crucial for:</p>
    <ul>
      <li>Mobile-first indexing</li>
      <li>Search result rankings</li>
      <li>Featured snippets eligibility</li>
    </ul>

    <h3> Mobile Experience</h3>
    <p>With mobile traffic dominating web usage, performance on mobile devices is critical:</p>
    <ul>
      <li>Mobile users often have slower network connections</li>
      <li>Limited device capabilities require optimized resources</li>
      <li>Touch interactions demand responsive interfaces</li>
    </ul>

    <h2> Key Aspects of Web Performance</h2>
    
    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Description</th>
          <th>Example</th>
          <th>Target</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Load Time</td>
          <td>How fast a page fully loads and becomes interactive</td>
          <td>The site appears and is usable in under 3 seconds</td>
          <td>&lt; 3 seconds</td>
        </tr>
        <tr>
          <td>First Contentful Paint (FCP)</td>
          <td>Time until the first visible element shows</td>
          <td>Logo or text appears within 1.5 seconds</td>
          <td>&lt; 1.8 seconds</td>
        </tr>
        <tr>
          <td>Largest Contentful Paint (LCP)</td>
          <td>Time until the largest content element renders</td>
          <td>Hero image or main content block loads</td>
          <td>&lt; 2.5 seconds</td>
        </tr>
        <tr>
          <td>Time to Interactive (TTI)</td>
          <td>When the user can click or scroll without delay</td>
          <td>Buttons respond instantly to clicks</td>
          <td>&lt; 3.8 seconds</td>
        </tr>
        <tr>
          <td>First Input Delay (FID)</td>
          <td>Delay between first interaction and browser response</td>
          <td>Menu opens immediately when clicked</td>
          <td>&lt; 100ms</td>
        </tr>
        <tr>
          <td>Cumulative Layout Shift (CLS)</td>
          <td>Visual stability during loading</td>
          <td>No unexpected layout shifts while reading</td>
          <td>&lt; 0.1</td>
        </tr>
        <tr>
          <td>Smoothness</td>
          <td>How stable and fluid animations or scrolling feel</td>
          <td>No jank or lag during scrolling</td>
          <td>60 FPS</td>
        </tr>
        <tr>
          <td>Resource Efficiency</td>
          <td>How well assets (images, scripts) are optimized</td>
          <td>Compressed images, minified JS, efficient fonts</td>
          <td>Minimal unused code</td>
        </tr>
      </tbody>
    </table>

    <h2>How to Improve Web Performance</h2>

    <h3>Image Optimization</h3>
    <p>Images often account for the largest portion of page weight:</p>
    <ul>
      <li><strong>Use modern formats:</strong> WebP, AVIF offer better compression than JPEG/PNG</li>
      <li><strong>Responsive images:</strong> Serve different sizes based on viewport</li>
      <li><strong>Compression:</strong> Use tools like ImageOptim, Squoosh</li>
      <li><strong>Lazy loading:</strong> Load images only when they enter viewport</li>
    </ul>

    <h3>Code Optimization</h3>
    <p>Efficient code delivery is crucial:</p>
    <ul>
      <li><strong>Minification:</strong> Remove whitespace, comments from CSS/JS</li>
      <li><strong>Bundling:</strong> Combine multiple files into one</li>
      <li><strong>Tree shaking:</strong> Remove unused code</li>
      <li><strong>Code splitting:</strong> Load only necessary code for current page</li>
    </ul>

    <h3> Delivery Optimization</h3>
    <p>How you deliver content matters:</p>
    <ul>
      <li><strong>CDN usage:</strong> Distribute content globally for faster access</li>
      <li><strong>HTTP/2:</strong> Enable multiplexing and server push</li>
      <li><strong>Gzip/Brotli compression:</strong> Reduce transfer size</li>
      <li><strong>Preload/prefetch:</strong> Hint browsers about important resources</li>
    </ul>

    <h3>Advanced Optimization Techniques</h3>
    <p>Take performance to the next level:</p>
    <ul>
      <li><strong>Critical CSS:</strong> Inline above-the-fold styles</li>
      <li><strong>Server-side rendering:</strong> Improve initial load time</li>
      <li><strong>Service workers:</strong> Enable caching and offline functionality</li>
      <li><strong>Resource hints:</strong> Use dns-prefetch, preconnect</li>
    </ul>

    <h2>Performance Measurement Tools</h2>
    
    <h3>Core Web Vitals Tools</h3>
    <ul>
      <li><strong>Google PageSpeed Insights:</strong> Comprehensive performance analysis</li>
      <li><strong>Lighthouse:</strong> Automated auditing in Chrome DevTools</li>
      <li><strong>WebPageTest:</strong> Advanced testing from multiple locations</li>
      <li><strong>GTmetrix:</strong> Detailed performance reports</li>
    </ul>

    <h3>Real User Monitoring (RUM)</h3>
    <ul>
      <li><strong>Chrome UX Report:</strong> Real-world performance data</li>
      <li><strong>Google Analytics:</strong> Site speed reports</li>
      <li><strong>New Relic:</strong> Comprehensive performance monitoring</li>
    </ul>

    <h2>Performance Budgets</h2>
    <p>Set clear performance targets for your team:</p>
    <ul>
      <li><strong>File size limits:</strong> Maximum bundle sizes</li>
      <li><strong>Timing targets:</strong> Specific metric thresholds</li>
      <li><strong>Quality gates:</strong> Performance requirements for deployment</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Web performance = Fast loading + Smooth interaction + Efficient delivery. When your site feels instant and effortless, users stay longer and engage more.</p>

    <p>Remember that performance optimization is an ongoing process. Regular monitoring, continuous improvement, and staying updated with best practices will ensure your website delivers exceptional experiences to all users, regardless of their device or network conditions.</p>

    <p>Start by measuring your current performance, identify the biggest opportunities for improvement, and implement changes systematically. The effort you invest in performance will pay dividends in user satisfaction, conversion rates, and search visibility.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2024-01-25",
    dateLabel: "Jan 25, 2024",
    readTime: "12 min",
    tags: ["web-performance", "optimization", "core-web-vitals", "lighthouse", "seo", "user-experience", "mobile"]
  },

  {
    id: "9",
    thumbnailBlog: assets.blog9,
    image: assets.blog9,
    alt: "VS Code editor showing 'Unknown at rule @tailwind css(unknownAtRules)' error",
    topic: "Frontend Development",
    title: "Fixing 'Unknown at rule @tailwind' Error in VS Code: Complete Guide",
    description: "Learn how to eliminate the 'Unknown at rule @tailwindcss(unknownAtRules)' warning in VS Code with multiple solutions including extensions, settings, and configuration changes.",
    content: `
    <p>If you're working with Tailwind CSS in VS Code, you've likely encountered the frustrating "Unknown at rule @tailwindcss(unknownAtRules)" warning. Those green squiggly lines under your <code>@tailwind</code> directives can be distracting, even though your build process works perfectly fine. Let's explore several effective solutions to fix this issue and enhance your Tailwind development experience.</p>

    <h3>Why This Warning Appears</h3>
    <p>VS Code's built-in CSS validator doesn't recognize Tailwind's custom directives like <code>@tailwind</code>, <code>@apply</code>, and <code>@layer</code> because they're not part of the official CSS specification. The validator flags them as "unknown" rules, even though Tailwind's processor handles them correctly during build time.</p>

    <div class="code-block">
      <pre><code>/* This triggers the warning in VS Code */
@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
    </div>

    <h3>Solution 1: Install Tailwind CSS IntelliSense Extension</h3>
    <p>The most comprehensive solution is to install the official Tailwind CSS IntelliSense extension:</p>
    <ol>
      <li>Open VS Code Extensions (Ctrl+Shift+X)</li>
      <li>Search for "Tailwind CSS IntelliSense"</li>
      <li>Install the extension published by Tailwind Labs</li>
    </ol>
    <p>This extension provides:
    <ul>
      <li>Autocomplete for utility classes</li>
      <li>Syntax highlighting and linting</li>
      <li>Hover previews of generated CSS</li>
      <li>CSS function completion</li>
    </ul>
    </p>

    <h3>Solution 2: Configure VS Code Language Mode</h3>
    <p>You can manually set the language mode for individual CSS files:</p>
    <ol>
      <li>Open any CSS file containing Tailwind directives</li>
      <li>Press Ctrl+Shift+P to open Command Palette</li>
      <li>Type "Change Language Mode" and select it</li>
      <li>Search for "Tailwind CSS" and select it</li>
    </ol>

    <h3>Solution 3: Project-Wide Settings Configuration</h3>
    <p>For a permanent solution across your entire project:</p>
    <ol>
      <li>Create a <code>.vscode</code> folder in your project root</li>
      <li>Create a <code>settings.json</code> file inside it</li>
      <li>Add the following configuration:</li>
    </ol>

    <div class="code-block">
      <pre><code>{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}</code></pre>
    </div>

    <h3>Solution 4: Disable the Warning</h3>
    <p>If you prefer to simply hide the warnings:</p>
    <ol>
      <li>Open VS Code Settings (Ctrl+,)</li>
      <li>Search for "unknown"</li>
      <li>Find "CSS > Lint: Unknown At Rules"</li>
      <li>Change from "warning" to "ignore"</li>
    </ol>

    <p>Or add to your <code>.vscode/settings.json</code>:</p>
    <div class="code-block">
      <pre><code>{
  "css.lint.unknownAtRules": "ignore"
}</code></pre>
    </div>

    <h3>Solution 5: Complementary Extensions</h3>
    <p>Enhance your Tailwind workflow with these additional extensions:</p>
    <ul>
      <li><strong>Autoprefixer</strong> by mrmlnc - Automatically adds vendor prefixes</li>
      <li><strong>PostCSS Language Support</strong> - Better syntax highlighting</li>
      <li><strong>IntelliSense for CSS class names</strong> - Additional class name completion</li>
    </ul>

    <h3>Recommended Complete Setup</h3>
    <p>For the optimal Tailwind CSS development experience:</p>
    <div class="code-block">
      <pre><code>// .vscode/settings.json
{
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "css.lint.unknownAtRules": "ignore",
  "editor.quickSuggestions": {
    "strings": true
  }
}</code></pre>
    </div>

    <h3>Troubleshooting Tips</h3>
    <ul>
      <li><strong>Reload VS Code</strong> after installing extensions (Ctrl+Shift+P > "Developer: Reload Window")</li>
      <li><strong>Verify your tailwind.config.js</strong> is properly configured</li>
      <li><strong>Check that PostCSS is set up</strong> if you're using it</li>
      <li><strong>Restart VS Code completely</strong> if issues persist</li>
    </ul>

    <h3>Conclusion</h3>
    <p>The "Unknown at rule @tailwindcss" warning is easily solvable with the right configuration. While the warning doesn't affect your build process, fixing it provides a cleaner development environment and unlocks powerful IntelliSense features that significantly improve your Tailwind CSS workflow.</p>

    <p>Start with the Tailwind CSS IntelliSense extension and project settings configuration for the most comprehensive solution. Remember that a properly configured development environment can dramatically boost your productivity and code quality.</p>
  `,
    author: {
      name: "Haile Homa",
      image: assets.author,
    },
    date: "2024-01-22",
    dateLabel: "Jan 22, 2024",
    readTime: "3 min",
    tags: ["tailwindcss", "vscode", "frontend", "troubleshooting", "css", "development"]
  }

  ,
  // {
  //   id: "10",
  //   image: assets.blog10,
  //   alt: "How to connect a React frontend with a NodeJS/Express backend",
  //   topic: "Database",
  //   title: "How to connect a React frontend with a NodeJS/Express backend",
  //   description: "The MERN stack is very popular for making full stack applications, utilizing Javascript for both backend and frontend as well as a document-oriented or non relational database (MongoDB).",
  //   content: `
  //     <p>Complete guide to connecting a React frontend with a Node.js/Express backend to build full-stack applications.</p>

  //     <h3>Backend Setup</h3>
  //     <p>Create a robust Express.js API with proper routing and middleware.</p>

  //     <h3>Frontend Integration</h3>
  //     <p>Connect your React application to the backend using Axios or Fetch API.</p>

  //     <h3>CORS Configuration</h3>
  //     <p>Properly configure CORS to allow communication between frontend and backend.</p>
  //   `,
  //   author: {
  //     name: "Julia Walker",
  //     image: assets.author,
  //   },
  //   date: "2021-09-21",
  //   dateLabel: "Sep 21, 2021",
  //   readTime: "4 min",
  //   tags: ["react", "nodejs", "express", "mern", "fullstack"]
  // }
];












/* Aside data */
export const topics = [
  { name: "Database", iconimage: assets.nodejsicon, link: "#" },
  { name: "Accessibility", iconimage: assets.jsicon, link: "#" },
  { name: "Web Performance", iconimage: assets.reacticon, link: "#" },
];

export const tags = [
  "#mongodb", "#nodejs", "#a11y", "#mobility", "#inclusion", "#webperf", "#optimize", "#performance"
];

export const contact = {
  text: "Interested in working together or teaming up on a project? let’s bring it to life.",
  socialLinks: [
    { platform: "discord", icon: assets.linkedin_svg, url: "#" },
    { platform: "twitter", icon: assets.telegram_svg, url: "#" },
    { platform: "facebook", icon: assets.email_svg, url: "#" },
  ],
};

export const discover = {
  text: "Want to see what I’m building? Check out my projects and get in touch if you like what you see.",
  buttonText: "View Projects",

};
























// // ProjectContext.jsx
// export const projects = [
//   {
//     id: "zenspace-ui",
//     name: "ZenSpace UI",
//     description: "I created this personal project to demonstrate how to design and prototype an elegant interface in Figma, using a yoga-inspired portfolio as an example.",
//     imageUrl: assets.terminal_thumbnail,
//     status: "live",
//     technologies: [
//       { name: "Figma", icon: "/icons/figma.svg", color: "#F24E1E" },
//       { name: "UI/UX Design", icon: "/icons/design.svg", color: "#FF6B6B" },
//       { name: "Prototyping", icon: "/icons/prototype.svg", color: "#4ECDC4" }
//     ],
//     features: [
//       "Modern UI design",
//       "Interactive prototyping",
//       "Yoga-inspired aesthetics",
//       "Responsive layouts"
//     ],
//     github: "https://github.com/yourusername/zenspace-ui",
//     liveDemo: "https://zenspace-ui.example.com"
//   },
//   {
//     id: "weather-app",
//     name: "Weather App",
//     description: "A simple weather app built with React and OpenWeather API to display real-time weather updates for any city.",
//     imageUrl: assets.blog12,
//     status: "live",
//     technologies: [
//       { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
//       { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
//       { name: "API Integration", icon: "/icons/api.svg", color: "#EB6E4B" },
//       { name: "CSS3", icon: "/icons/css3.svg", color: "#1572B6" }
//     ],
//     features: [
//       "Real-time weather data",
//       "City search functionality",
//       "5-day forecast",
//       "Responsive design"
//     ],
//     github: "https://github.com/yourusername/weather-app",
//     liveDemo: "https://weatherapp.example.com"
//   },
//   {
//     id: "recipe-finder",
//     name: "Recipe Finder",
//     description: "Search and discover delicious recipes from around the world using this React-based app connected to Spoonacular API.",
//      imageUrl: assets.blog13,
//     status: "future",
//     technologies: [
//       { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
//       { name: "Spoonacular API", icon: "/icons/api.svg", color: "#4CAF50" },
//       { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" }
//     ],
//     features: [
//       "Recipe search by ingredients",
//       "Nutritional information",
//       "Save favorite recipes",
//       "Step-by-step instructions"
//     ],
//     github: "https://github.com/yourusername/recipe-finder",
//     liveDemo: "https://recipefinder.example.com"
//   },
//   {
//     id: "portfolio-v1",
//     name: "Portfolio Website V1",
//     description: "A sleek personal portfolio website built to showcase projects, skills, and achievements in a modern design.",
//     imageUrl: assets.blog12,
//     status: "live",
//     technologies: [
//       { name: "HTML5", icon: "/icons/html5.svg", color: "#E34F26" },
//       { name: "CSS3", icon: "/icons/css3.svg", color: "#1572B6" },
//       { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" }
//     ],
//     features: [
//       "Responsive design",
//       "Project showcase",
//       "Contact form",
//       "Modern animations"
//     ],
//     github: "https://github.com/yourusername/portfolio-v1",
//     liveDemo: "https://portfolio-v1.example.com"
//   },
//   {
//     id: "task-manager",
//     name: "Task Manager",
//     description: "A productivity app to manage your tasks efficiently with React, Tailwind, and local storage for persistence.",
//      imageUrl: assets.blog13,
//     status: "live",
//     technologies: [
//       { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
//       { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
//       { name: "Local Storage", icon: "/icons/storage.svg", color: "#FFA726" }
//     ],
//     features: [
//       "Add/delete tasks",
//       "Mark as complete",
//       "Local data persistence",
//       "Responsive design"
//     ],
//     github: "https://github.com/yourusername/task-manager",
//     liveDemo: "https://taskmanager.example.com"
//   },
//   {
//     id: "portfolio-v2",
//     name: "Portfolio Website V2",
//     description: "An upgraded portfolio with enhanced features and better performance, built with modern web technologies.",
//      imageUrl: assets.blog10,
//     status: "live",
//     technologies: [
//       { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
//       { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
//       { name: "Framer Motion", icon: "/icons/animation.svg", color: "#0055FF" }
//     ],
//     features: [
//       "Advanced animations",
//       "Dark/light mode",
//       "Performance optimized",
//       "SEO friendly"
//     ],
//     github: "https://github.com/yourusername/portfolio-v2",
//     liveDemo: "https://yourportfolio.com"
//   },
//   {
//     id: "ecommerce-demo",
//     name: "E-Commerce Demo",
//     description: "A full-featured e-commerce demonstration with product catalog, cart functionality, and user authentication.",
//      imageUrl: assets.blog13,
//     status: "live",
//     technologies: [
//       { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
//       { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
//       { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
//       { name: "Express", icon: "/icons/express.svg", color: "#000000" }
//     ],
//     features: [
//       "Product catalog",
//       "Shopping cart",
//       "User authentication",
//       "Payment integration"
//     ],
//     github: "https://github.com/yourusername/ecommerce-demo",
//     liveDemo: "https://ecommercedemo.example.com"
//   }
// ];

