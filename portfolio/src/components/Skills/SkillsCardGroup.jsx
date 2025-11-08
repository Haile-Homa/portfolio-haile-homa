import { motion } from "framer-motion";
// import { useAnimations } from "../../context/AnimationContext";

import SkillsCard from "./SkillsCard";


const frontendSkills = [
  "HTML/HTML5", "VanillaCSS", "Bootstrap", "Responsive Design", "Tailwind",
  "JavaScript", "DOM manipulation", "Webpack", "EJS", "React", "Next.js", "WPO .. etc"
];

const backendSkills = [
  "Node.js", "Express.js", "MongoDB", "Mongoose (ODM)", "RESTful API", "GraphQL",
  "API Security", "Authentication & Authorization", "WebSockets", "Microservices .. etc"
];

const systemDesignSkills = [
  "Database Design", "Load Balancing", "API Gateway Patterns", "Query Optimization",
  "API Design", "Microservices Architecture", "Client-Server Architecture", "CDN & Docker",
  "Scaling", "Sharding & Partitioning", "Caching", "Rate Limiting .. etc"
];


const SkillsCardGroup = ({ variantsLeftItem, variantsRightItem,variantsDownItem }) => {
  return (
    <div className="flex flex-col text-skill-text  sm:flex-row gap-2 sm:gap-4 mt-4">
      <motion.div
        variants={variantsLeftItem}>
        <SkillsCard title="The skills I have in Frontend" skills={frontendSkills} gradient="from-indigo-400" />
      </motion.div>
      <motion.div variants={variantsDownItem}>
        <SkillsCard title="The skills I have in Backend" skills={backendSkills} gradient="from-emerald-500" />
      </motion.div>

      <motion.div variants={variantsRightItem}>
        <SkillsCard title="The skills I have in System Design" skills={systemDesignSkills} gradient="from-amber-400" />
      </motion.div>
    </div>
  )
}

export default SkillsCardGroup