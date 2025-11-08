import React from 'react'
import { Link } from "react-router-dom";
import BlogImage from "./BlogImage";
import BlogContent from "./BlogContent";
import BlogAuthor from "./BlogAuthor";

const BlogCard = ({ post }) => {
    return (
        <Link 
            to={`/blog/${post.id}`}
            className="flex flex-col md:flex-row
                      border border-slate-400 
                      rounded-lg overflow-hidden shadow-sm 
                      hover:shadow-lg transition duration-300
                      ">


            {/* Image Section */}
            <BlogImage image={post.image} thumbnail={post.thumbnailBlog} alt={post.alt} />
            {/* Content Section */}
            <div className=" md:w-[95%] p-4 flex flex-col justify-between gap-3 ">
               <BlogContent post={post} />
                {/* Author Info */}
               <BlogAuthor author={post.author} date={post.date} readTime={post.readTime} />
            </div>
        </Link>

    )
}

export default BlogCard





// import React from 'react'
// import BlogImage from "./BlogImage";
// import BlogContent from "./BlogContent";
// import BlogAuthor from "./BlogAuthor";

// const BlogCard = ({ post }) => {
//     return (
//         <div className="flex flex-col md:flex-row
//                       border border-slate-400 
//                       rounded-lg overflow-hidden shadow-sm 
//                       hover:shadow-lg transition duration-300
//                       ">

//             {/* Image Section */}
//             <BlogImage image={post.image} alt={post.alt} />

//             {/* Content Section */}
//             <div className=" md:w-2/3 p-4 flex flex-col justify-between gap-3 ">
//                <BlogContent post={post} />
//                 {/* Author Info */}
//                <BlogAuthor author={post.author} date={post.date} readTime={post.readTime} />
//             </div>
//         </div>

//     )
// }

// export default BlogCard

