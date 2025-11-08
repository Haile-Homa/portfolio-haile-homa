import React, { useState } from 'react'
import BlogHeader from "../components/Blog/BlogHeader";
import BlogList from "../components/Blog/BlogList";
import TopicsComp from "../components/Blog/BlogSidebar/TopicsComp";
import TagsComp from "../components/Blog/BlogSidebar/TagsComp";
import TalkComp from "../components/Blog/BlogSidebar/TalkComp";
import DiscoverComp from "../components/Blog/BlogSidebar/DiscoverComp";
import { blogPosts, topics, tags, contact, discover } from "../assets/data";


const Blogs = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 4 posts initially, all posts when "View All" is clicked
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 4);

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (

    /* i set the bottom margins to look good margin mb-5 */
    <div className=" pl-1 md:px-9 pb-7  pt-10  mt-5 mb-5 ">

      <BlogHeader />

      <div className=" px-3 flex flex-col md:flex-row gap-8 md:gap-13 ">
        {/* Blog Section */}
        <div>
          <BlogList posts={visiblePosts} />

          {/* Button Container */}
          <div className="text-center mt-10">
            {!showAll && blogPosts.length > 4 && (
              <button
                onClick={handleViewAll}
                className="mx-auto flex items-center px-20 md:px-25 py-2 border border-black dark:border-slate-400 rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                View All
              </button>
            )}

            {showAll && (
              <button
                onClick={handleShowLess}
                className="mx-auto flex items-center px-20 md:px-25 py-2 border border-black dark:border-slate-400 rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                Show Less
              </button>
            )}
          </div>
        </div>

        {/* left-side Section */}
        <div className=" hidden   lg:flex lg:flex-col lg:items-center  space-y-20 mt-2.5 ">
          <TopicsComp topics={topics} />
          <TagsComp tags={tags} />
          <TalkComp contact={contact} />
          <DiscoverComp discover={discover} />
        </div>

      </div>
    </div>

  );
}

export default Blogs


















