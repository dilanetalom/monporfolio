// src/components/ProjectSection.js
import React, { useState, useEffect } from "react";

import ml from "../images/ml.jpg"
import fenix from "../images/fenix.jpg"
import free from "../images/free.jpg"

const ProjectCard = ({ title, description, imageUrl, link }) => (
  <div className="bg-gray-800 cursor-pointer rounded-lg shadow-lg overflow-hidden border border-teal-700 hover:border-white transition-all duration-300 group">
    <div className="h-48 md:h-56 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm md:text-base mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white hover:text-purple-300 font-medium transition duration-300"
      >
        Voir le projet
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
);

function ProjectSection() {
  const projects = [
    { id: 1, title: "Site Web entreprise MLConcept  presentaion des services", description: "", imageUrl: ml, link: "https://mlconcept-energie.com/" },
    { id: 2, title: "Site web de vente d'oeuvres litteraires", description: "", imageUrl: fenix, link: "https://fenix-book.com/" },
    { id: 3, title: "Plateforme pour freelance, cameroun", description: "", imageUrl:free, link: "https://mymonth.vercel.app/" },
    { id: 4, title: "Dashboard Analytique", description: "Visualisation de données complexes.", imageUrl: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Project+4", link: "#" },
    { id: 5, title: "Portfolio Design", description: "Portfolio créatif et responsive.", imageUrl: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Project+5", link: "#" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Gestion responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, projects.length - visibleCards));
  };

  return (
    <section className="relative w-full mt-[10vh] h-[80vh]  flex flex-col items-center py-16 px-4 md:px-16 bg-[#F6F6F6]">
      <h2 className="text-3xl md:text-5xl font-semibold   mb-12 text-center text-[#1e90ff] ">
        Nos Réalisations
      </h2>

      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Slider */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className={`flex-shrink-0 px-2`} style={{ width: `${100 / visibleCards}%` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Boutons */}
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 -translate-y-1/2 left-2 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-purple-600 transition ${
            currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          ◀
        </button>

        <button
          onClick={handleNext}
          className={`absolute top-1/2 -translate-y-1/2 right-2 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-purple-600 transition ${
            currentIndex >= projects.length - visibleCards ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default ProjectSection;
