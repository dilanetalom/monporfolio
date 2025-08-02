// src/components/ContactSection.js
import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous intégreriez la logique d'envoi du formulaire.
    // Par exemple, une requête API vers un backend (Node.js, Firebase Functions, etc.)
    console.log('Formulaire soumis :', formData);
    alert('Votre message a été envoyé ! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
  };

  return (
    <section className="relative w-full  min-h-[calc(100vh-20vh)] flex flex-col items-center  px-4 md:px-8  text-gray-100">
      {/* <h2 className="text-5xl lg:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-lg">
        Contactez-Nous
      </h2> */}

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12  rounded-lg shadow-xl p-8 md:p-12  border-purple-800">

        {/* Formulaire de Contact */}
        <div className="lg:order-2"> {/* Ordre 2 sur grand écran pour aligner le formulaire à droite */}
          <h3 className="text-3xl font-bold text-white mb-6">Envoyez-nous un message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">Nom Complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-colors duration-200"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">Adresse E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-colors duration-200"
                placeholder="votre.email@exemple.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">Votre Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-y transition-colors duration-200"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-gray-950 font-semibold rounded-md shadow-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Envoyer le Message
            </button>
          </form>
        </div>

        {/* Informations de Contact */}
        <div className="lg:order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"> {/* Ordre 1 sur grand écran pour aligner les infos à gauche */}
          <h3 className="text-3xl font-bold text-white mb-6">Trouvez-nous</h3>
          <p className="text-lg text-gray-300 mb-4">
            Nous sommes toujours ravis de discuter de nouveaux projets ou de répondre à vos questions.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg text-gray-200">
               Ange Rapael, Douala, Cameroun
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg text-gray-200">+237 690 841 749</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-3" />
              </svg>
              <span className="text-lg text-gray-200">dilanetalom8@gmail.com</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-gray-400 mt-4">
            <a href="#" className="hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.235 0-4.185 1.777-4.185 4.597v2.403z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.064 9.172c-.222 7.818-8.243 12.029-11.864 10.393-.57-.257-.406-.782-.475-1.36-.062-.578-.31-1.096-.757-1.503-.448-.407-1.042-.647-1.637-.621-.595.026-1.168.271-1.663.702-.495.431-1.006.848-1.508.971-.502.123-1.008-.007-1.503-.385-.495-.378-.971-.979-1.391-1.644-1.644-2.529-2.024-5.228-1.522-6.526.495-1.298 1.838-2.585 3.251-3.692.65-.502 1.341-.954 2.059-1.31.718-.356 1.458-.621 2.22-.767.761-.146 1.54-.156 2.308-.029.768.126 1.52.408 2.24.819.721.411 1.405.955 2.027 1.628.622.673 1.17 1.467 1.624 2.366.454.9.805 1.892 1.045 2.96.24 1.068.36 2.195.352 3.329zm-4.735 1.066c-.636-.264-1.282-.533-1.898-.82-.616-.288-1.2-.591-1.748-.909-1.096-.641-2.091-1.36-2.936-2.204-.846-.846-1.564-1.841-2.204-2.936-.318-.548-.621-1.132-.909-1.748-.288-.616-.556-1.262-.82-1.898-.264-.636-.533-1.282-.82-1.898-.288-.616-.591-1.2-.909-1.748-.641-1.096-1.36-2.091-2.204-2.936-.846-.846-1.841-1.564-2.936-2.204-.548-.318-1.132-.621-1.748-.909-.616-.288-1.262-.556-1.898-.82-1.847-.768-3.769-1.04-5.46-1.04-1.691 0-3.324.283-4.595.823-1.272.54-2.206 1.307-2.791 2.253-.585.946-.82 2.12-.663 3.38.156 1.26.584 2.45 1.268 3.511.684 1.06 1.579 2.01 2.656 2.821 1.077.811 2.327 1.488 3.69 1.986 1.364.498 2.825.801 4.31.865 1.485.064 2.96-.064 4.343-.384 1.383-.32 2.628-.807 3.73-1.442z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 15h-3.34c.007 1.13.061 2.247.164 3.336 1.554.218 3.166.326 4.8-.008 1.474-.308 2.671-1.262 3.09-2.826.314-1.168.18-2.316-.226-3.414-.406-1.098-1.092-2.046-2.01-2.73-1.002-.75-2.275-1.135-3.614-1.117-2.732.036-4.577 2.007-4.238 4.706.126 1.002.502 1.956 1.11 2.775.608.82 1.436 1.472 2.44 1.914.966.425 2.052.613 3.12.56.335-.015.67-.042 1-.082v-3.864c-.38-.052-.76-.088-1.132-.109-1.205-.07-2.29.352-2.92 1.28-.63.928-.707 2.12-.352 3.188.355 1.068.966 1.972 1.776 2.613.844.664 1.815 1.118 2.894 1.353.116-.364.21-.735.28-1.11.07-.375.114-.755.132-1.136h-4.668zm2.08-10h2v5h-2v-5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;