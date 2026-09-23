
import { useAppContext } from '../contexts/AppContext';
import SkillsIntro from "../components/Skills/SkillsIntro";
import SkillsBarSection from "../components/Skills/SkillsBarSection";
import SkillsCircleSection from "../components/Skills/SkillsCircleSection";
import SkillsCardGroup from "../components/Skills/SkillsCardGroup";

import { motion } from "framer-motion";
import { useAnimations } from "../contexts/AnimationContext";



const Skills = () => {


  const { staggerDownContainer, staggerLeftContainer, staggerRightContainer,staggerUpItem, staggerDownItem, staggerLeftItem, staggerRightItem } = useAnimations();


  const { skills, coreSkills } = useAppContext();


  return (
    //pl-6 md:px-9 pb-7  pt-10  mt-5 mb-5
    /* i set the bottom margins to look good margin mb-10 */
    <div className='px-4 md:px-10 pb-7 mt-20 mb-10 pt-10'>
      <motion.div
        variants={staggerDownContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SkillsIntro variantsDownItem={staggerDownItem} />
      </motion.div>

      <div className="flex flex-col lg:flex-row mt-8" >

        {/* Skills line in the left */}
        <motion.div
          className='w-full'
          variants={staggerLeftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsBarSection skills={skills} variantsLeftItem={staggerLeftItem} />
        </motion.div>

        {/* Skills circular in the right */}
        <div className=" w-full flex  flex-col mt-8 md:mt-0 space-y-4 ">

          <motion.div
            className='w-full'
            variants={staggerRightContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SkillsCircleSection coreSkills={coreSkills} variantsRightItem={staggerRightItem} />
          </motion.div>


          <motion.div
            className='w-full'
            variants={staggerLeftContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SkillsCardGroup variantsLeftItem={staggerLeftItem} variantsRightItem={staggerRightItem} variantsDownItem={staggerDownItem} />
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Skills













