import React from 'react';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function RendezVousModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const whatsappMessage = "Bonjour Le Fade Barbershop, je souhaite prendre rendez-vous. Pouvez-vous me proposer des disponibilités ?";
  const whatsappNumber = "22912345678"; // Remplacez par votre vrai numéro

  return (
    <>
      {/* Overlay flouté */}
      <div className="fixed inset-0 z-40 backdrop-filter backdrop-blur-sm bg-white bg-opacity-10" onClick={onClose} />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-md w-full mx-auto overflow-hidden shadow-2xl border border-gray-200 transform transition-all duration-300 scale-95 hover:scale-100">
          {/* En-tête */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Prendre rendez-vous</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-red-500 transition-colors"
              aria-label="Fermer"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          {/* Contenu */}
          <div className="p-6">
            <div className="space-y-4 mb-6">            
              <p className="text-gray-700">Vous souhaitez prendre rendez-vous immédiatement ? Contactez-nous via WhatsApp pour discuter des disponibilités.</p>
            </div>
            
            <div className="space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Ouvrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}