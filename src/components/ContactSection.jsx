// src/components/ContactSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    alert('Votre message a été envoyé !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative w-full min-h-[100vh]  mt-16 flex flex-col items-center px-8 md:px-16 lg:px-24 py-16 bg-gray-950 text-gray-100">
      
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:text-5xl text-3xl lg:text-6xl font-extrabold mb-12 text-center text-white"
      >
        Contactez-moi
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-xl shadow-xl bg-gray-900 p-8 md:p-12"
      >
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 lg:order-2">
          <h3 className="text-3xl font-bold text-white mb-4">Envoyez-moi un message</h3>
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom complet"
            required
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Votre message..."
            required
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400 transition resize-y"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-teal-500 text-white font-semibold rounded-md shadow-lg hover:bg-teal-600 transition"
          >
            Envoyer le message
          </motion.button>
        </form>

        {/* Informations de contact */}
        <div className="lg:order-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-white mb-4">Trouvez-moi</h3>
          <p className="text-gray-300 mb-6">
            Je suis toujours ravi de discuter de nouveaux projets ou de répondre à vos questions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-200">
              <FaMapMarkerAlt className="text-teal-400 text-xl" />
              <span>Ange Rapael, Douala, Cameroun</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-200">
              <FaPhoneAlt className="text-teal-400 text-xl" />
              <span>+237 690 841 749</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-200">
              <FaEnvelope className="text-teal-400 text-xl" />
              <span>dilanetalom8@gmail.com</span>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center lg:justify-start space-x-6 mt-6 text-gray-400">
            <a href="#" className="hover:text-white transition duration-300">FB</a>
            <a href="#" className="hover:text-white transition duration-300">LI</a>
            <a href="#" className="hover:text-white transition duration-300">TW</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
