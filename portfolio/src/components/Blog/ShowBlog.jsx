// ShowBlog.jsx
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { HiCalendar, HiClock, HiTag, HiUser, HiShare, HiBookmark } from "react-icons/hi";
import { blogPosts, topics, tags, contact, discover } from "../../assets/data";
import Prism from "prismjs";

// Import Prism.js theme and languages
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";

const ShowBlog = ({ blogs }) => {
  const location = useLocation();
  const { blogId } = useParams();
  const blog = blogs?.find(post => post.id === blogId);

  // Function to auto-detect and add language classes
  const enhanceContentWithPrism = (content) => {
    if (!content) return content;

    // Auto-detect code blocks and add language classes
    let enhancedContent = content
      // Detect JavaScript code
      .replace(/<pre><code>([\s\S]*?function[\s\S]*?)<\/code><\/pre>/gi, '<pre><code class="language-javascript">$1</code></pre>')
      // Detect CSS code
      .replace(/<pre><code>([\s\S]*?\{[\s\S]*?\}[\s\S]*?)<\/code><\/pre>/gi, '<pre><code class="language-css">$1</code></pre>')
      // Detect JSON code
      .replace(/<pre><code>([\s\S]*?\{[\s\S]*?"[\s\S]*?\}[\s\S]*?)<\/code><\/pre>/gi, '<pre><code class="language-json">$1</code></pre>')
      // Detect YAML code (like GitHub Actions)
      .replace(/<pre><code>([\s\S]*?name:[\s\S]*?on:[\s\S]*?)<\/code><\/pre>/gi, '<pre><code class="language-yaml">$1</code></pre>')
      // Detect bash/shell commands
      .replace(/<pre><code>([\s\S]*?(npm |node |git |curl |ssh )[\s\S]*?)<\/code><\/pre>/gi, '<pre><code class="language-bash">$1</code></pre>');

    return enhancedContent;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Highlight syntax after content is rendered
    const timer = setTimeout(() => {
      Prism.highlightAll();
    }, 300);

    return () => clearTimeout(timer);
  }, [blogId, location.pathname, blog?.content]);

  // Format date function
  const formatDate = (date) =>
    blog.dateLabel || new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  // Handle image error
  const handleImageError = (e, fallbackText) => {
    e.target.src = `https://via.placeholder.com/40/1a1a1a/00ff00?text=${fallbackText.charAt(0)}`;
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-text-primary text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="text-text-secondary">
            No blog post found with ID: "{blogId}"
          </p>
        </div>
      </div>
    );
  }

  const enhancedContent = enhanceContentWithPrism(blog.content);

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 mt-15 md:mt-0">
        <div className="flex justify-center">

          <div className="w-full max-w-[90%]">

            {/* Header Section */}
            <header className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 text-accent-primary bg-accent-primary bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-primary border-opacity-20">
                <HiTag className="text-accent-primary" />
                {blog.topic}
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Author & Meta Info */}
              <div className="flex items-center justify-center gap-6 text-text-secondary mb-8 flex-wrap">
                <div className="flex items-center gap-3">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-12 h-12 rounded-full border-2 border-border-primary"
                    onError={(e) => handleImageError(e, blog.author.name)}
                  />
                  <span className="font-medium text-text-primary">{blog.author.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiCalendar className="text-accent-primary" />
                  <span>{formatDate(blog.date)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiClock className="text-accent-primary" />
                  <span>{blog.readTime} read</span>
                </div>
              </div>
            </header>



            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <main className="flex-1 min-w-0">
                {/* Featured Image */}
                <div className="mb-8 rounded-xl overflow-hidden border border-border-primary shadow-lg">
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    className="w-full h-auto max-h-[700px] object-cover rounded-xl mx-auto"
                  />
                </div>

                {/* Description */}
                <div className="bg-gradient-to-r from-accent-primary/5 to-transparent border-l-4 border-accent-primary pl-6 py-4 rounded-r-lg mb-8">
                  <p className="text-lg text-text-primary font-medium leading-relaxed">
                    {blog.description}
                  </p>
                </div>

                {/* Blog Content with Syntax Highlighting */}
                <article className="prose prose-invert max-w-none">
                  <div
                    className="text-text-secondary leading-8 blog-content rich-text"
                    dangerouslySetInnerHTML={{ __html: enhancedContent }}
                  />
                </article>

                {/* Tags */}
                {blog.tags?.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-border-primary">
                    <h4 className="text-text-primary text-lg font-semibold mb-4 flex items-center gap-2">
                      <HiTag className="text-accent-primary" />
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-bg-secondary text-text-secondary rounded-full text-sm font-medium border border-border-primary hover:bg-accent-primary hover:bg-opacity-10 hover:text-accent-primary transition-colors duration-200 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </main>


              {/* Sidebar - Professional Design */}
              <aside className="lg:w-80 w-full">
                <div className="sticky top-24 space-y-10">

                  {/* Author Card */}
                  <div className="rounded-2xl border border-slate-300 transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.02] p-6 ">
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <img
                          src={blog.author.image}
                          alt={blog.author.name}
                          className="w-30 h-30 rounded-full mx-auto mb-3 border-2 border-accent-primary"
                          onError={(e) => handleImageError(e, blog.author.name)}
                        />
                      </div>
                      <h3 className="text-text-primary font-bold text-lg mb-1">{blog.author.name}</h3>
                      <p className="text-accent-primary text-sm font-medium mb-3">
                        Senior Web Developer
                      </p>
                    </div>

                    <p className="text-text-secondary text-sm text-center leading-relaxed mb-4">
                      Passionate about web development, performance optimization, and sharing knowledge with the community through technical writing and open-source contributions.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/haile-homa-632344336/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 mx-auto bg-[#0A66C2] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow hover:bg-[#004182] transition-colors duration-300"
                    >
                      <HiUser className="text-base" />
                      Follow Author on LinkedIn
                    </a>

                  </div>

                  {/* Article Meta Card */}
                  <div className="rounded-2xl border border-slate-300 transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.02] p-5">
                    <h4 className="text-text-primary font-semibold mb-4 text-lg flex items-center gap-2">
                      <HiBookmark className="text-accent-primary" />
                      Article Details
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-border-primary">
                        <span className="text-text-secondary text-sm">Published</span>
                        <span className="text-text-primary font-medium text-sm">{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border-primary">
                        <span className="text-text-secondary text-sm">Reading Time</span>
                        <span className="text-text-primary font-medium text-sm">{blog.readTime}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border-primary">
                        <span className="text-text-secondary text-sm">Category</span>
                        <span className="text-accent-primary font-medium text-sm">{blog.topic}</span>
                      </div>
                  
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* Action Buttons */}
                  <div className="rounded-2xl border border-slate-300 transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.02] p-5">
                    <h4 className="text-text-primary font-semibold mb-4 text-lg">
                      Share this article
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      {/* Medium Share Button */}
                      <button
                        onClick={() => window.open('https://medium.com/', '_blank')}
                        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <HiShare className="text-sm" />
                        Medium
                      </button>

                      {/* LinkedIn Share Button */}
                      <button
                        onClick={() =>
                          window.open(
                            'https://www.linkedin.com/sharing/share-offsite/?url=' +
                            window.location.href,
                            '_blank'
                          )
                        }
                        className="flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#006097] text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <HiShare className="text-sm" />
                        LinkedIn
                      </button>
                    </div>
                  </div>



                  {/* Newsletter CTA */}
                  {/* LinkedIn CTA */}
                  <div className="mb-20 p-5 rounded-2xl border border-slate-300 transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.02]">
                    <div className="text-center">
                      <HiBookmark className="text-accent-primary text-xl mx-auto mb-3" />
                      <h4 className="text-text-primary font-semibold text-lg mb-2">Enjoyed this article?</h4>
                      <p className="text-text-secondary text-sm mb-4">
                        Follow me on LinkedIn to stay updated with my latest posts and articles.
                      </p>
                      <a
                        href="https://www.linkedin.com/in/haile-homa-632344336/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-block bg-accent-primary hover:bg-accent-primary/90 text-text-primary py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 text-center"
                      >
                        Follow on LinkedIn
                      </a>
                    </div>
                  </div>



                  <div
                    className="p-5 rounded-2xl border border-slate-300 transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h2 className="text-xl font-semibold mb-4">Let's Talk</h2>

                    <div className="flex flex-col gap-4">
                      <p className="text-text-secondary">{contact.text}</p>

                      <ul className="flex gap-5 items-center justify-center">
                        {contact.socialLinks.map((link, idx) => (
                          <li key={idx}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                            >
                              <img
                                src={link.icon}
                                alt={link.name}
                                className="w-8 h-8 rounded-lg"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="p-5 flex flex-col border border-slate-300 rounded-2xl transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h2 className="text-xl font-semibold mb-4">Discover My Work</h2>

                    <div className="flex flex-col gap-4">
                      <p className="text-text-secondary">{discover.text}</p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          className="px-5 py-2 bg-blue-300 text-black font-medium rounded-lg shadow-sm transition-all duration-300 hover:bg-blue-400 hover:scale-105"
                        >
                          {discover.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;












// // ShowBlog.jsx
// import React from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { HiCalendar, HiClock, HiTag } from "react-icons/hi";

// const ShowBlog = ({ blogs }) => {
//   const location = useLocation();
//   const { blogId } = useParams();

//   const blog = blogs?.find(post => post.id === blogId);

//   // Scroll to top when component mounts or projectId changes
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth", // <-- makes it scroll smoothly
//     });
//   }, [blogId, location.pathname]);

//   if (!blog) {
//     return (
//       <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 ">
//         <div className="text-center">
//           <h2 className="text-text-primary text-2xl font-bold mb-4">Blog Post Not Found</h2>
//           <p className="text-text-secondary">
//             No blog post found with ID: "{blogId}"
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-bg-primary py-8">

//       <div className="max-w-7xl mx-auto px-4 mt-15 md:mt-0">

//         {/* Main Layout Container */}
//         <div className="flex justify-center">

//           {/* Main Content - Centered */}
//           <div className="w-full max-w-4xl">
//             {/* Header Section */}
//             <div className="mb-8 text-center">
//               <div className="inline-flex items-center gap-2 text-accent-primary bg-accent-primary bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-primary border-opacity-20">
//                 <HiTag className="text-accent-primary" />
//                 {blog.topic}
//               </div>
//               <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
//                 {blog.title}
//               </h1>

//               {/* Author & Meta Info */}
//               <div className="flex items-center justify-center gap-6 text-text-secondary mb-8 flex-wrap">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={blog.author.image}
//                     alt={blog.author.name}
//                     className="w-15 h-15 rounded-full border-2  border-slate-300"
//                     onError={(e) => {
//                       e.target.src = `https://via.placeholder.com/40/1a1a1a/00ff00?text=${blog.author.name.charAt(0)}`;
//                     }}
//                   />
//                   <span className="font-medium text-text-primary">{blog.author.name}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <HiCalendar className="text-accent-primary" />
//                   <span>{blog.dateLabel || new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <HiClock className="text-accent-primary" />
//                   <span>{blog.readTime} read</span>
//                 </div>
//               </div>
//             </div>

//             {/* Featured Image */}
//             <div className="mb-8 rounded-xl overflow-hidden border border-border-primary">
//               <img
//                 src={blog.image}
//                 alt={blog.alt}
//                 className="w-full h-auto max-h-[600px] object-contain rounded-xl mx-auto"
//               />

//             </div>


//             {/* Content Layout */}
//             <div className="flex flex-col lg:flex-row gap-8">

//               {/* Blog Content */}
//               <div className="flex-1">
//                 {/* Description */}
//                 <div className="bg-accent-primary bg-opacity-5 border-l-4 border-accent-primary pl-6 py-4 rounded-r-lg mb-8">
//                   <p className="text-lg text-text-primary font-medium leading-relaxed">
//                     {blog.description}
//                   </p>
//                 </div>

//                 {/* Blog Content */}
//                 <article className="prose prose-invert max-w-none">
//                   <div
//                     className="text-text-secondary leading-8 rich-text"
//                     dangerouslySetInnerHTML={{ __html: blog.content }}
//                   />
//                 </article>

//                 {/* Tags */}
//                 {blog.tags && blog.tags.length > 0 && (
//                   <div className="mt-12 pt-8 border-t border-border-primary">
//                     <h4 className="text-text-primary text-lg font-semibold mb-4 flex items-center gap-2">
//                       <HiTag className="text-accent-primary" />
//                       Tags
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {blog.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="px-4 py-2 bg-bg-secondary text-text-secondary rounded-full text-sm font-medium border border-border-primary hover:bg-accent-primary hover:bg-opacity-10 hover:text-accent-primary transition-colors duration-200"
//                         >
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Sidebar - Fixed on scroll */}
//               <div className="lg:w-80">
//                 <div className="rounded-xl p-6 border border-slate-400 lg:sticky lg:top-8">

//                   {/* Author Info */}
//                   <div className="text-center mb-6">
//                     <img
//                       src={blog.author.image}
//                       alt={blog.author.name}
//                       className="w-20 h-20 rounded-full mx-auto mb-4 border-2  border-slate-300"
//                       onError={(e) => {
//                         e.target.src = `https://via.placeholder.com/80/1a1a1a/00ff00?text=${blog.author.name.charAt(0)}`;
//                       }}
//                     />
//                     <h3 className="text-text-primary font-bold text-lg">{blog.author.name}</h3>
//                     <p className="text-accent-primary text-sm font-medium">Web Developer & Writer</p>
//                   </div>

//                   <p className="text-text-secondary text-sm text-center leading-relaxed mb-6">
//                     Passionate about web development, performance optimization, and sharing knowledge with the community.
//                   </p>

//                   {/* Article Meta */}
//                   <div className="rounded-lg p-4 border border-slate-400">
//                     <h4 className="text-text-primary font-semibold mb-3 text-center">Article Details</h4>
//                     <div className="space-y-3 text-sm">
//                       <div className="flex justify-between items-center py-2 border-b border-slate-300">
//                         <span className="text-text-secondary">Published</span>
//                         <span className="text-text-primary font-medium">{blog.dateLabel || new Date(blog.date).toLocaleDateString()}</span>
//                       </div>
//                       <div className="flex justify-between items-center py-2 border-b border-slate-300">
//                         <span className="text-text-secondary">Reading Time</span>
//                         <span className="text-text-primary font-medium">{blog.readTime}</span>
//                       </div>
//                       <div className="flex justify-between items-center py-2">
//                         <span className="text-text-secondary">Category</span>
//                         <span className="text-accent-primary font-medium">{blog.topic}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Newsletter CTA */}
//                   <div className="mt-6 bg-accent-primary bg-opacity-10 border border-slate-300  border-opacity-20 rounded-lg p-4 text-center">
//                     <p className="text-text-primary text-sm font-medium mb-2">Enjoyed this article?</p>
//                     <p className="text-text-secondary text-xs">Share your thoughts in the comments!</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowBlog;