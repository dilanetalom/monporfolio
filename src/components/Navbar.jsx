import React, { useState, useEffect } from 'react';

const NavbarHeader = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Ferme le menu après avoir cliqué sur un lien
  };
  return (
    <header className="flex justify-between items-center py-4 h-[10vh]   text-gray-400 lg:px-[110px] px-5">
      <div className="text-3xl font-bold tracking-wider relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-teal-400 via-gray-500 to-transparent opacity- transform -skew-y-3 translate-y-1/2 hidden md:block">
      TDFD
      </div>
        </div>
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <button onClick={() => handleNavLinkClick('home')} className="text-gray-300 hover:text-purple-400 transition duration-300 focus:outline-none">Home</button>
        <button onClick={() => handleNavLinkClick('project')} className="text-gray-300 hover:text-purple-400 transition duration-300 focus:outline-none">Portfolio</button>
        <button onClick={() => handleNavLinkClick('contact')} className="text-gray-300 hover:text-purple-400 transition duration-300 focus:outline-none">Contact</button>
        <button onClick={() => handleNavLinkClick('members')} className="text-gray-300 hover:text-purple-400 transition duration-300 focus:outline-none">Members</button> {/* Exemple pour une section Members */}
      </nav>

      {/* Icône de profil pour desktop */}
      <div className="hidden md:block">
        <button className="p-2 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-700 hover:border-purple-500 hover:text-white transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>

      {/* Bouton Burger pour mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-100 focus:outline-none p-2 rounded-md hover:bg-gray-800 transition duration-200">
          {isMenuOpen ? (
            // Icône de croix (fermer)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icône de burger (ouvrir)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile (Overlay) */}
      <div
        className={`fixed inset-0 bg-gray-950 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full' // Slide de droite à gauche
        } md:hidden`}
      >
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-gray-100 focus:outline-none p-2 rounded-md hover:bg-gray-800 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col items-center space-y-6 text-2xl font-medium">
          <button onClick={() => handleNavLinkClick('home')} className="text-gray-200 hover:text-purple-400 transition duration-300 focus:outline-none">Home</button>
          <button onClick={() => handleNavLinkClick('project')} className="text-gray-200 hover:text-purple-400 transition duration-300 focus:outline-none">Portfolio</button>
          <button onClick={() => handleNavLinkClick('contact')} className="text-gray-200 hover:text-purple-400 transition duration-300 focus:outline-none">Contact</button>
          <button onClick={() => handleNavLinkClick('members')} className="text-gray-200 hover:text-purple-400 transition duration-300 focus:outline-none">Members</button>
        </nav>

        {/* Icône de profil dans le menu mobile (optionnel) */}
        <div className="mt-8">
          <button className="p-3 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-700 hover:border-purple-500 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarHeader;