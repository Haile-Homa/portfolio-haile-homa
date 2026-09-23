// ProjectCard.jsx
import { motion } from "framer-motion";
import { projects } from "../../assets/data.js";
import ProjectItem from "./ProjectItem";



function ProjectCard() {
  return (
    <div className=" space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // even → left, odd → right
            y: index % 3 === 0 ? 100 : 0     // every 3rd → down
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} //  triggers on scroll
          viewport={{ once: true, amount: 0.3 }}   // run once, 20% visible
          transition={{ duration: 0.6 }}

        >
          <ProjectItem key={index} project={project} />
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCard
