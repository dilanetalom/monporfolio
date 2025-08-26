// src/components/SkillsSection.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skillName, yearsOfExperience, maxYears = 10 }) => {
  const percentage = Math.min((yearsOfExperience / maxYears) * 100, 100);

  const barColor = (name) => {
    switch (name.toLowerCase()) {
      case 'html':
      case 'css':
      case 'javascript':
        return 'bg-white';
      case 'reactjs':
      case 'next.js':
      case 'redux toolkit':
        return 'bg-teal-500';
      case 'tailwind css':
        return 'bg-teal-500';
      case 'nestjs':
      case 'laravel':
        return 'bg-teal-500';
      case 'git/github':
      case 'trello':
      case 'jira':
      case 'docker':
        return 'bg-teal-500';
      case 'flutter':
        return 'bg-teal-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-base md:text-lg font-medium text-white">{skillName}</span>
        <span className="text-sm md:text-md text-gray-300">{yearsOfExperience} an(s)</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`${barColor(skillName)} h-2 rounded-full`}
        ></motion.div>
      </div>
    </div>
  );
};

function SkillsSection() {
  const skills = [
    { name: 'HTML', years: 5 },
    { name: 'CSS', years: 5 },
    { name: 'JavaScript', years: 5 },
    { name: 'ReactJS', years: 3 },
    { name: 'Tailwind CSS', years: 4 },
    { name: 'Next.js', years: 1 },
    { name: 'NestJS', years: 1 },
    { name: 'Laravel', years: 3 },
    { name: 'Git/GitHub', years: 4 },
    { name: 'Trello', years: 3 },
    { name: 'Jira', years: 3 },
    { name: 'Redux Toolkit', years: 2 },
    { name: 'Docker', years: 1 },
    { name: 'Flutter', years: 1 },
  ];

  const maxYearsOverall = Math.max(...skills.map(s => s.years), 5);
  const [bubbles, setBubbles] = useState([]);

  // Bulles flottantes
  useEffect(() => {
    const generateBubbles = () => {
      const b = Array.from({ length: 20 }).map(() => ({
        size: Math.random() * 30 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 5,
      }));
      setBubbles(b);
    };
    generateBubbles();
  }, []);

  return (
    <section className="relative  flex flex-col items-center py-16 px-8 md:px-40 bg-gray-950 text-white overflow-y">
      {/* Bulles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full w-[80%] bg-gray-800 opacity-30 overflow-auto"
          style={{ width: b.size, height: b.size, left: `${b.left}%`, bottom: -50 }}
          animate={{ y: [-50, 900] }}
          transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'linear' }}
        />
      ))}

      <h2 className="text-3xl md:text-5xl font-extrabold mt-16 mb-10 text-center text-white drop-shadow-lg">
        Mes Compétences
      </h2>

      <div className=" w-full border border-gray-400 rounded-xl shadow-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
          {skills.map(skill => (
            <SkillBar
              key={skill.name}
              skillName={skill.name}
              yearsOfExperience={skill.years}
              maxYears={maxYearsOverall}
            />
          ))}
        </div>
      </div>

      <p className="mt-12 text-center text-gray-400 text-sm md:text-base italic">
        * Les années d'expérience reflètent l'expertise pratique acquise sur des projets variés.
      </p>
    </section>
  );
}

export default SkillsSection;
