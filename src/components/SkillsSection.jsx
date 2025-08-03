// src/components/SkillsSection.js
import React from 'react';

// Composant pour une barre de progression individuelle
const SkillBar = ({ skillName, yearsOfExperience, maxYears = 10 }) => {
  // Calculer la largeur de la barre de progression en pourcentage
  // S'assurer que la progression ne dépasse pas 100%
  const percentage = Math.min((yearsOfExperience / maxYears) * 100, 100);

  // Définir une couleur d'accentuation en fonction de la compétence ou aléatoirement
  // Pour un design cohérent, on peut utiliser des couleurs prédéfinies
  const barColor = (name) => {
    switch (name.toLowerCase()) {
      case 'html':
      case 'css':
      case 'javascript':
        return 'bg-white'; // Bleu pour les bases du web
      case 'reactjs':
      case 'next js':
      case 'redux toolkit':
        return 'bg-teal-500'; // Teal pour les frameworks JS
      case 'tailwindcss':
        return 'bg-indigo-500'; // Indigo pour Tailwind
      case 'nest':
      case 'laravel':
        return 'bg-green-500'; // Vert pour le backend
      case 'git hub':
      case 'trello':
      case 'jira':
      case 'docker':
        return 'bg-purple-500'; // Violet pour les outils
      case 'flutter':
        return 'bg-pink-500'; // Rose pour le mobile
      default:
        return 'bg-gray-400'; // Couleur par défaut
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[16px] font-medium text-white">{skillName}</span>
        <span className="text-md text-gray-300">{yearsOfExperience} an(s)</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className={`${barColor(skillName)} h-3 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
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
    { name: 'NestJS', years: 1 }, // Notez que j'ai mis NestJS pour Nest
    { name: 'Laravel', years: 3 },
    { name: 'Git/GitHub', years: 4 }, // GitHub peut être Git/GitHub
    { name: 'Trello', years: 3 },
    { name: 'Jira', years: 3 },
    { name: 'Redux Toolkit', years: 2 },
    { name: 'Docker', years: 1 },
    { name: 'Flutter', years: 1 },
  ];

  const maxYearsOverall = Math.max(...skills.map(s => s.years), 5); // Définir une base max pour la proportion

  return (
    <section className="relative w-full h-full min-h-[calc(100vh-160px)] flex flex-col items-center pt-5 px-4 md:px-8 bg-gray-950 text-gray-100">
      <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r text-white drop-shadow-lg">
        Mes Compétences
      </h2>

      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 italic">
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              skillName={skill.name}
              yearsOfExperience={skill.years}
              maxYears={maxYearsOverall} // Passer le max pour une échelle cohérente
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm italic">
        * Les années d'expérience reflètent l'expertise pratique acquise sur des projets variés.
      </div>
    </section>
  );
}

export default SkillsSection;