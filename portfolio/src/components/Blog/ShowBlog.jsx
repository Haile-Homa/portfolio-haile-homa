// ShowBlog.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HiCalendar, HiClock, HiTag } from "react-icons/hi";

const ShowBlog = ({ blogs }) => {
  const location = useLocation();
  const { blogId } = useParams();

  const blog = blogs?.find(post => post.id === blogId);

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // <-- makes it scroll smoothly
    });
  }, [blogId, location.pathname]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 ">
        <div className="text-center">
          <h2 className="text-text-primary text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="text-text-secondary">
            No blog post found with ID: "{blogId}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary py-8">

      <div className="max-w-7xl mx-auto px-4 mt-15 md:mt-0">

        {/* Main Layout Container */}
        <div className="flex justify-center">

          {/* Main Content - Centered */}
          <div className="w-full max-w-4xl">
            {/* Header Section */}
            <div className="mb-8 text-center">
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
                    className="w-15 h-15 rounded-full border-2  border-slate-300"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/40/1a1a1a/00ff00?text=${blog.author.name.charAt(0)}`;
                    }}
                  />
                  <span className="font-medium text-text-primary">{blog.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCalendar className="text-accent-primary" />
                  <span>{blog.dateLabel || new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="text-accent-primary" />
                  <span>{blog.readTime} read</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-border-primary">
              <img
                src={blog.image}
                alt={blog.alt}
                className="w-full h-auto max-h-[600px] object-contain rounded-xl mx-auto"
              />

            </div>


            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Blog Content */}
              <div className="flex-1">
                {/* Description */}
                <div className="bg-accent-primary bg-opacity-5 border-l-4 border-accent-primary pl-6 py-4 rounded-r-lg mb-8">
                  <p className="text-lg text-text-primary font-medium leading-relaxed">
                    {blog.description}
                  </p>
                </div>

                {/* Blog Content */}
                <article className="prose prose-invert max-w-none">
                  <div
                    className="text-text-secondary leading-8 rich-text"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </article>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-border-primary">
                    <h4 className="text-text-primary text-lg font-semibold mb-4 flex items-center gap-2">
                      <HiTag className="text-accent-primary" />
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-bg-secondary text-text-secondary rounded-full text-sm font-medium border border-border-primary hover:bg-accent-primary hover:bg-opacity-10 hover:text-accent-primary transition-colors duration-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Fixed on scroll */}
              <div className="lg:w-80">
                <div className="rounded-xl p-6 border border-slate-400 lg:sticky lg:top-8">

                  {/* Author Info */}
                  <div className="text-center mb-6">
                    <img
                      src={blog.author.image}
                      alt={blog.author.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-2  border-slate-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/80/1a1a1a/00ff00?text=${blog.author.name.charAt(0)}`;
                      }}
                    />
                    <h3 className="text-text-primary font-bold text-lg">{blog.author.name}</h3>
                    <p className="text-accent-primary text-sm font-medium">Web Developer & Writer</p>
                  </div>

                  <p className="text-text-secondary text-sm text-center leading-relaxed mb-6">
                    Passionate about web development, performance optimization, and sharing knowledge with the community.
                  </p>

                  {/* Article Meta */}
                  <div className="rounded-lg p-4 border border-slate-400">
                    <h4 className="text-text-primary font-semibold mb-3 text-center">Article Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-slate-300">
                        <span className="text-text-secondary">Published</span>
                        <span className="text-text-primary font-medium">{blog.dateLabel || new Date(blog.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-300">
                        <span className="text-text-secondary">Reading Time</span>
                        <span className="text-text-primary font-medium">{blog.readTime}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-text-secondary">Category</span>
                        <span className="text-accent-primary font-medium">{blog.topic}</span>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="mt-6 bg-accent-primary bg-opacity-10 border border-slate-300  border-opacity-20 rounded-lg p-4 text-center">
                    <p className="text-text-primary text-sm font-medium mb-2">Enjoyed this article?</p>
                    <p className="text-text-secondary text-xs">Share your thoughts in the comments!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;