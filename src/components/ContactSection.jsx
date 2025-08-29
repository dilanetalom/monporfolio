// src/components/ContactSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation du numéro de téléphone
    const phoneRegex = /^[0-9+\s-]{6,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('⚠️ Numéro de téléphone invalide.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone, // ✅ on envoie le téléphone
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('✅ Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        toast.error('❌ Une erreur est survenue. Réessayez plus tard.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="relative w-full h-[80vh] mt-[10vh] flex flex-col items-center px-8 md:px-16 lg:px-24 py-16 bg-[#F6F6F6] text-gray-950 overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-xl md:bg-white md:shadow-xl md:p-12"
      >
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 lg:order-2">
          <h3 className="text-3xl font-bold text-gray-950 mb-4">Envoyez-moi un message</h3>
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom complet"
            required
            className="w-full px-5 py-3 bg-gray-100 border border-gray-700 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-400 transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-5 py-3 bg-gray-100 border border-gray-700 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-400 transition"
          />

          {/* Champ téléphone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Téléphone (+237 690 841 749)"
            required
            className="w-full px-5 py-3 bg-gray-100 border border-gray-700 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-400 transition"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Votre message..."
            required
            className="w-full px-5 py-3 bg-gray-100 border border-gray-700 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-400 transition resize-y"
          ></textarea>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: !loading ? 1.05 : 1 }}
            whileTap={{ scale: !loading ? 0.95 : 1 }}
            className={`w-full px-6 py-3 rounded-md font-semibold shadow-lg transition 
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1e90ff] hover:bg-teal-600 text-white'}
            `}
          >
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </motion.button>
        </form>

        {/* Informations de contact */}
        <div className="lg:order-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-gray-950 mb-4">Trouvez-moi</h3>
          <p className="text-gray-500 mb-6">
            Je suis toujours ravi de discuter de nouveaux projets ou de répondre à vos questions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-500">
              <FaMapMarkerAlt className="text-teal-400 text-xl" />
              <span>Ange Raphael, Douala, Cameroun</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-500">
              <FaPhoneAlt className="text-teal-400 text-xl" />
              <span>+237 690 841 749</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-500">
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
