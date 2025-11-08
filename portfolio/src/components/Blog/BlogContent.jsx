import React from 'react'
import { Link } from "react-router-dom";

const BlogContent = ({ post }) => {
    return (
        <>
            <div>
                <button className="bg-gray-300 hover:bg-gray-500 text-gray-600 text-xs font-semibold px-4 py-2 rounded-sm">
                    {post.topic}
                </button>

           <h3 className="text-lg font-semibold mt-4">
                {post.title} 
            </h3>

                <p className="text-text-secondary  text-sm line-clamp-3 mt-3">
                    {post.description}
                </p>
            </div>
        </>
    )
}

export default BlogContent

// import React from 'react'

// const BlogContent = ({ post }) => {
//     return (
//         <>
//             <div>
//                 <button className="bg-gray-300 hover:bg-gray-500 text-gray-600 text-xs font-semibold px-4 py-2 rounded-sm">
//                     {post.topic}
//                 </button>

//                 <h3 className="text-lg font-semibold hover:text-[#139ffc] transition-colors duration-300 mt-4">
//                     <a href={post.link}>{post.title}</a>
//                 </h3>

//                 <p className="text-text-secondary  text-sm line-clamp-3 mt-3">
//                     {post.description}
//                 </p>
//             </div>
//         </>
//     )
// }

// export default BlogContent