import React from 'react'

const BlogAuthor = ({ author, date, readTime }) => {
    return (
        <>
            <div className="flex items-center mt-3 gap-3">
                <img
                    src={author.image}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-300"
                />
                <div className="flex flex-col text-sm">
                    {/* Replace <a> with <span> */}
                    <span className="font-medium text-text-primary">
                        {author.name}
                    </span>
                    <p className="flex items-center text-text-secondary gap-1">
                        <time dateTime={date}>{date}</time>
                        <span className="mx-1">•</span>
                        <ion-icon name="time-outline" class="text-gray-400 text-base"></ion-icon>
                        <time dateTime={readTime}>{readTime}</time>
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlogAuthor