// src/components/HeroSection.js
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profil from "../images/profil.png"; // ton image

function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[100vh]  overflow-auto px-8 md:px-16 lg:px-24 backdrop-blur-lg bg-gray-950/80 text-white">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/2 flex justify-center mb-8 md:mb-0 md:mt-0 mt-28"
      >
        <img
          src={profil}
          alt="Photo de profil"
          className="rounded-2xl shadow-2xl max-h-[450px] object-cover  border-4 border-gray-700 hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full md:w-1/2 lg:w-1/2 text-center md:text-left font-montserrat"
      >
        {/* <h2 className="text-lg text-teal-400 font-semibold mb-2 uppercase tracking-wider">
          Bienvenue sur mon portfolio
        </h2> */}
        <h1 className="md:text-5xl text-3xl lg:text-6xl font-extrabold leading-tight mb-4">
          Talom Defo <span className="">Franck Dilane</span>
        </h1>
        <h3 className="text-2xl lg:text-3xl font-light text-gray-300 mb-6">
          Développeur <span className="font-semibold">Fullstack</span>
        </h3>
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
          Développeur passionné spécialisé en React, Laravel et Flutter. 
          J’aime créer des applications performantes et intuitives, 
          tout en rendant la technologie accessible et agréable.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <a
            href="/cv.pdf"
            className="px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold shadow-lg hover:bg-teal-600 transition"
          >
            Télécharger CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-teal-400 text-teal-400 font-semibold hover:bg-teal-400 hover:text-black transition"
          >
            Me contacter
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center md:justify-start space-x-6 text-gray-400">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin size={28} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaTwitter size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
