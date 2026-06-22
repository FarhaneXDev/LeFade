import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Le Fade</h2>
              <span className="text-red-500 font-bold ml-1">Barbershop</span>
            </div>
            <p className="text-gray-300">
              Votre salon de coiffure premium à Cotonou. Expertise, style et tradition depuis 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-red-500 transition-colors">Galerie</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-red-500 transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nos horaires</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <FaRegClock className="mr-2 text-red-500" />
                <span>Lun-Ven: 8h - 19h</span>
              </div>
              <div className="flex items-center">
                <FaRegClock className="mr-2 text-red-500" />
                <span>Samedi: 9h - 18h</span>
              </div>
              <div className="flex items-center">
                <FaRegClock className="mr-2 text-red-500" />
                <span>Dimanche: Fermé</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-red-500" />
                <span>123 Rue des Artisans, Cotonou, Bénin</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-red-500" />
                <span>+229 12 34 56 78</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 text-red-500" />
                <a 
                  href="https://wa.me/22912345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  Écrivez-nous
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Le Fade Barbershop. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}