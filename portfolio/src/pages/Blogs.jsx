import React, { useState, useEffect } from 'react';
import BlogHeader from "../components/Blog/BlogHeader";
import BlogList from "../components/Blog/BlogList";
import TopicsComp from "../components/Blog/BlogSidebar/TopicsComp";
import TagsComp from "../components/Blog/BlogSidebar/TagsComp";
import TalkComp from "../components/Blog/BlogSidebar/TalkComp";
import DiscoverComp from "../components/Blog/BlogSidebar/DiscoverComp";
import { blogPosts, topics, tags, contact, discover } from "../assets/data";

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);

  // Load saved value from localStorage on mount
  useEffect(() => {
    const savedShowAll = localStorage.getItem('showAllBlogs');
    if (savedShowAll === 'true') {
      setShowAll(true);
    }
  }, []);

  //  Save whenever it changes
  useEffect(() => {
    localStorage.setItem('showAllBlogs', showAll);
  }, [showAll]);

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 4);

  return (
    <div className="pl-1 md:px-9 pb-7 pt-10 mt-5 mb-5">
      <BlogHeader />

      <div className="px-3 flex flex-col md:flex-row gap-8 md:gap-13">
        {/* Blog Section */}
        <div>
          <BlogList posts={visiblePosts} />

          {/* Button */}
          <div className="text-center mt-10">
            {!showAll && blogPosts.length > 4 && (
              <button
                onClick={() => setShowAll(true)}
                className="mx-auto flex items-center px-20 md:px-25 py-2 border border-black dark:border-slate-400 rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
              >
                View All
              </button>
            )}

            {showAll && (
              <button
                onClick={() => setShowAll(false)}
                className="mx-auto flex items-center px-20 md:px-25 py-2 border border-black dark:border-slate-400 rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
              >
                Show Less
              </button>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:flex lg:flex-col lg:items-center space-y-20 mt-2.5">
          <TopicsComp topics={topics} />
          <TagsComp tags={tags} />
          <TalkComp contact={contact} />
          <DiscoverComp discover={discover} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;














