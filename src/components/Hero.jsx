import React, { useState } from 'react';
import BarberShop from '../assets/barbershop.jpg';
import RendezVousModal from './RendezVousModal'; // Ajoutez cette ligne

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id='home' className="relative h-[90vh] min-h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Votre image de fond existante */}
      <picture>
        <source media="(max-width: 640px)" srcSet={BarberShop} />
        <source media="(min-width: 641px)" srcSet={BarberShop} />
        <img 
          src={BarberShop} 
          alt="Salon de coiffure Le Fade à Cotonou" 
          className="absolute inset-0 w-full h-full object-cover object-center filter blur-[2px] md:blur-[3px] brightness-90"
          loading="eager"
        />
      </picture>

      {/* Votre contenu existant */}
      <div className="relative z-10 text-white max-w-2xl bg-opacity-30 p-6 md:p-8 rounded-xl md:rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
          Le meilleur Barbier <span className="whitespace-nowrap">de Cotonou</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-semibold">
          Style • Fraîcheur • Confiance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className='cursor-pointer bg-red-500 hover:bg-red-600 duration-300 px-6 py-3 sm:px-8 sm:py-3 text-white font-bold rounded-lg text-base sm:text-lg transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white'
          >
            Prendre rendez-vous
          </button>
          <a 
            href="#pricing"
            className='cursor-pointer bg-transparent border-2 border-white hover:bg-white hover:text-black duration-300 px-6 py-3 sm:px-8 sm:py-3 text-white font-bold rounded-lg text-base sm:text-lg transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white text-center'
          >
            Nos services
          </a>
        </div>
      </div>

      {/* Votre indicateur de défilement existant */}
      <div className="absolute bottom-8 left-0 right-0 hidden sm:block">
        <div className="animate-bounce flex justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Ajoutez le modal ici */}
      <RendezVousModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}