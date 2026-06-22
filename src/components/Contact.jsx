import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaWhatsapp, FaStar } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    rating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRating = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message! Nous vous contacterons bientôt.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      rating: 0
    });
  };

  const whatsappMessage = `Bonjour Le Fade Barbershop, je souhaite prendre rendez-vous ou avoir des informations. Mon nom est ${formData.name || '[Votre nom]'}.`;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Adresse</h4>
                <p>123 Rue des Artisans, Cotonou</p>
                <p className="text-sm text-gray-500">À côté du marché Dantokpa</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaClock className="text-red-500 text-xl mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Horaires d'ouverture</h4>
                <p>Lundi - Vendredi: 8h - 19h</p>
                <p>Samedi: 9h - 18h</p>
                <p className="text-red-500">Dimanche: Fermé</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaPhoneAlt className="text-red-500 text-xl mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Téléphone</h4>
                <p>+229 12 34 56 78</p>
                <p className="text-sm text-gray-500">Appel direct ou sur WhatsApp</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href={`https://wa.me/22912345678?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <FaWhatsapp className="text-xl mr-2" />
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6">Laissez-nous un message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Votre nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email (optionnel)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Notez votre expérience</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => handleRating(star)}
                    className="text-2xl focus:outline-none"
                  >
                    <FaStar className={star <= formData.rating ? "text-yellow-400" : "text-gray-300"} />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Votre message ou avis</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Dites-nous ce que vous avez pensé de notre service ou posez-nous vos questions..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black cursor-pointer hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Envoyer votre message
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Localisation Le Fade Barbershop"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d2.632415715266558!3d6.465658645329475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnNTYuNCJOIDLCsDM4JzAxLjgiRQ!5e0!3m2!1sfr!2sbj!4v1620000000000!5m2!1sfr!2sbj"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}