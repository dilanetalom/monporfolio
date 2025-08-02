// src/components/ProjectSection.js
import React from 'react';

// Composant pour une carte de projet individuelle
const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-teal-700 hover:border-purple-500 transition-all duration-300 group">
      <div className="h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition duration-300"
        >
          Voir le projet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: 'Site Web E-commerce',
      description: 'Développement complet d\'une plateforme e-commerce moderne avec intégration de paiement sécurisé.',
      imageUrl: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Project+1',
      link: '#',
    },
    {
      id: 2,
      title: 'Application Mobile UX',
      description: 'Conception d\'une application mobile intuitive avec une expérience utilisateur optimisée.',
      imageUrl: 'https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Project+2',
      link: '#',
    },
    {
      id: 3,
      title: 'Branding & Identité Visuelle',
      description: 'Création d\'une identité de marque forte et cohérente pour une startup innovante.',
      imageUrl: 'https://via.placeholder.com/600x400/14B8A6/FFFFFF?text=Project+3',
      link: '#',
    },
    {
      id: 4,
      title: 'Dashboard Analytique',
      description: 'Développement d\'un tableau de bord interactif pour la visualisation de données complexes.',
      imageUrl: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Project+4',
      link: '#',
    },
    // Ajoutez plus de projets ici
  ];

  return (
    <section className="relative w-full h-full flex flex-col items-center py-16 px-4 md:px-8 bg-gray-950">
      <h2 className="text-5xl lg:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 drop-shadow-lg">
        Nos Réalisations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 transform hover:scale-105">
          Voir Plus de Projets
        </button>
      </div>
    </section>
  );
}

export default ProjectSection;