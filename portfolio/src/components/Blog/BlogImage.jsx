import React from 'react'

const BlogImage = ({  image, thumbnail, alt }) => {
    return (
        <>
            <div className="w-full overflow-hidden p-1 bg-bg-tertiary rounded-lg shadow ">
                <img
                    src={thumbnail}
                    alt={alt}
                    className="w-full h-65 md:h-72 object-cover transition-transform duration-300 hover:scale-105 rounded-md"
                />
            </div>

        </>
    )
}

export default BlogImage 