import Footer from "./Footer";
import NavbarHeader from "./Navbar";
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Pour des transitions plus robustes


// Importez vos sections
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection'; // Nous allons créer ce fichier
import ContactSection from './ContactSection'; // Vous créerez ce fichier plus tard
import SkillsSection from "./SkillsSection";
import CustomCursor from "./CustomCursor";

function Layout({ activeSection, setActiveSection }) {
  const sections = {
    home: <HeroSection />,
    project: <ProjectSection />,
    contact: <ContactSection />,
    skills: <SkillsSection />
    // Ajoutez d'autres sections ici
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans flex flex-col reltive">
      
      <NavbarHeader setActiveSection={setActiveSection} />

      <main className="flex-grow relative overflow-hidden">
        {/* TransitionGroup gère les transitions des enfants lorsqu'ils sont ajoutés/retirés */}
        <TransitionGroup className="relative w-full h-full">
          <CSSTransition
            key={activeSection} // La clé change avec la section, déclenchant la transition
            timeout={500} // Durée de l'animation en ms
            classNames={{
              enter: 'animate-slide-in-up', // Classe appliquée à l'entrée
              exit: 'animate-slide-out-down', // Classe appliquée à la sortie
            }}
          >
            <div className=" w-full h-full top-0 left-0 ">
              {sections[activeSection]}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;