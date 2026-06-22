import React, { useState, useEffect } from 'react';
import BarberLogo from '../assets/barber.png';
import RendezVousModal from './RendezVousModal'; // Importez le composant modal

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Nouvel état pour le modal

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Ferme le menu mobile si ouvert
  };

  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isModalOpen]);

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>

          <div className="logo flex items-center">
              <a href="#" className='flex flex-col'>
                  <h1 className='font-bold text-2xl md:text-3xl'>Le Fade</h1>
                  <p className='text-red-500 font-bold text-sm md:text-base'>Barbershop</p>
              </a>
              <img className='w-8 h-8 md:w-10 md:h-10 ml-2' src={BarberLogo} alt="Logo BarberShop" />
          </div>

          <ul className='hidden md:flex gap-5 lg:gap-7 text-lg xl:text-xl'>
              <li className='hover:text-red-500 hover:scale-105 duration-300 ease-in-out'><a href="#home">Accueil</a></li>
              <li className='hover:text-red-500 hover:scale-105 duration-300 ease-in-out'><a href="#pricing">Prestations & Tarifs</a></li>
              <li className='hover:text-red-500 hover:scale-105 duration-300 ease-in-out'><a href="#gallery">Galerie</a></li>
          </ul>

          {/* Bouton Contact Desktop */}
          <button 
            onClick={openModal}
            className='hidden md:block bg-black text-white font-bold hover:bg-red-500 duration-300 ease-in-out cursor-pointer px-4 py-2 text-sm md:text-md rounded-xl transform hover:scale-105 transition-all'
          >
              Contact
          </button>

          <button 
            className='md:hidden text-black focus:outline-none z-50'
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div 
            className={`fixed inset-0 backdrop-blur-lg bg-opacity-50 z-40 md:hidden ${isAnimating ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onClick={toggleMenu}
          />
          
          <div 
            className={`fixed top-0 right-0 h-full w-60 max-w-xs bg-white shadow-xl z-40 transform ${isAnimating ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
          >
            <div className="h-full flex flex-col pt-20 px-6 overflow-y-auto">
              <ul className='flex flex-col gap-6 text-lg'>
                <li>
                  <a 
                    href="#home" 
                    className='block hover:text-red-500 duration-300 ease-in-out py-2 border-b border-gray-100'
                    onClick={toggleMenu}
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className='block hover:text-red-500 duration-300 ease-in-out py-2 border-b border-gray-100'
                    onClick={toggleMenu}
                  >
                    Prestations & Tarifs
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery" 
                    className='block hover:text-red-500 duration-300 ease-in-out py-2 border-b border-gray-100'
                    onClick={toggleMenu}
                  >
                    Galerie
                  </a>
                </li>
              </ul>
              
              <div className="mt-8">
                <button 
                  onClick={openModal}
                  className='w-full bg-black text-white font-bold hover:bg-red-500 duration-300 ease-in-out cursor-pointer px-4 py-3 text-md rounded-xl transform hover:scale-105 transition-all'
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Ajoutez le modal ici */}
      <RendezVousModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}