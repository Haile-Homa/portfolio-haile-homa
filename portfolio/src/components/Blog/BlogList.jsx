import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const BlogList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-6 ">
      {posts.map((post, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // even → left, odd → right
            y: index % 3 === 0 ? 100 : 0     // every 3rd → down
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} // 👀 triggers on scroll
          viewport={{ once: true, amount: 0.3 }}   // run once, 20% visible
          transition={{ duration: 0.6 }}

        >
          <BlogCard key={post.id} post={post} />
        </motion.div>
      ))}
    </div>
  )
}

export default BlogList
