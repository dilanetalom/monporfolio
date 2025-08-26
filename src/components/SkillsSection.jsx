// src/components/SkillsTree.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiLaravel,
  SiGit,
  SiTrello,
  SiJira,
  SiRedux,
  SiDocker,
  SiFlutter,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'ReactJS', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Git/GitHub', icon: SiGit },
  { name: 'Trello', icon: SiTrello },
  { name: 'Jira', icon: SiJira },
  { name: 'Redux Toolkit', icon: SiRedux },
  { name: 'Docker', icon: SiDocker },
  { name: 'Flutter', icon: SiFlutter },
];

function SkillsTree() {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 px-8 gap-10 md:px-40 bg-gray-950 text-white ">
      <h2 className="text-3xl md:text-5xl font-extrabold mt-16 mb-10 text-center text-white drop-shadow-lg">
        Mes Compétences
      </h2>

      <div className="relative w-full flex justify-center items-center">
        {/* Tronc central */} 
        {/* <div className="w-1 bg-gray-600 h-40"></div> */}

        {/* Arbre des compétences */}
        <div className=" top-0 flex flex-wrap justify-center gap-12 md:gap-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-gray-800 p-4 rounded-full shadow-lg">
                  <Icon size={40} className="text-teal-400" />
                </div>
                <span className="mt-2 text-sm md:text-base text-white">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* <p className="mt-12 text-center text-gray-400 text-sm md:text-base italic">
        * Visualisation synthétique de mes compétences principales avec logos.
      </p> */}
    </section>
  );
}

export default SkillsTree;
