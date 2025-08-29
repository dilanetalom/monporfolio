// src/components/Header.js
import React, { useState } from "react";

function NavbarHeader({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  // Liens desktop
  const getNavLinkClasses = (sectionName) => {
    const baseClasses =
      "relative text-gray-950 hover:text-[#1e90ff]   transition duration-300 py-2 px-2";
    const activeClasses =
      "text-white font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-500 after:rounded-full";

    return `${baseClasses} ${activeSection === sectionName ? activeClasses : ""}`;
  };

  // Liens mobile
  const getMobileNavLinkClasses = (sectionName) => {
    const baseClasses =
      "text-gray-200 hover:text-purple-400 transition duration-300 text-2xl";
    const activeClasses = "text-white font-bold border-b-2 border-purple-500";

    return `${baseClasses} ${activeSection === sectionName ? activeClasses : ""}`;
  };

  return (
    <header className="flex justify-between items-center py-4 h-[10vh] px-8 md:px-16 lg:px-40 fixed top-0 w-full z-50 backdrop-blur-lg bg-[#F6F6F6]  border-gray-800">
      {/* Logo "TD" stylisé */}
      <div className="flex items-center cursor-pointer" onClick={() => handleNavLinkClick("home")}>
        <span className="text-2xl font-extrabold tracking-wider flex items-center">
          <span className="px-3 py-1 bg-[#1e90ff] text-[#F6F6F6] rounded-md shadow-md">T</span>
          <span className="ml-1 px-3 py-1 border-2 border-gray-950 text-gray-950 rounded-md">D</span>
        </span>
      </div>

      {/* Navigation desktop */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        {/* <button onClick={() => handleNavLinkClick("home")} className={getNavLinkClasses("home")}>
          Home
        </button> */}
        <button onClick={() => handleNavLinkClick("project")} className={getNavLinkClasses("project")}>
         Realisation
        </button>
        <button onClick={() => handleNavLinkClick("skills")} className={getNavLinkClasses("skills")}>
          Compétences
        </button>
        <button onClick={() => handleNavLinkClick("contact")} className={getNavLinkClasses("contact")}>
          FAQ
        </button>
      </nav>

      {/* Bouton CV desktop */}
      <div className="hidden md:block" >
        <button
         onClick={() => handleNavLinkClick("contact")} 
          className="px-5 py-2 rounded-full bg-[#1e90ff] text-[#F6F6F6] font-semibold shadow-md  transition"
        >
          Contact
        </button>
      </div>

      {/* Bouton Burger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-950 focus:outline-none p-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 backdrop-blur-md bg-gray-950/95 h-screen z-40 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-100 focus:outline-none p-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Links */}
        <nav className="flex flex-col items-center space-y-6 font-medium">
          <button onClick={() => handleNavLinkClick("home")} className={getMobileNavLinkClasses("home")}>
            Home
          </button>
          <button onClick={() => handleNavLinkClick("project")} className={getMobileNavLinkClasses("project")}>
            Portfolio
          </button>
          <button onClick={() => handleNavLinkClick("skills")} className={getMobileNavLinkClasses("skills")}>
            Compétences
          </button>
          <button onClick={() => handleNavLinkClick("contact")} className={getMobileNavLinkClasses("contact")}>
            Contact
          </button>
        </nav>

        {/* CV button mobile */}
        <div className="mt-8">
          <a
            href="/cv.pdf"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow-md  transition"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavbarHeader;
