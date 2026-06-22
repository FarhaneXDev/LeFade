import React, { useState, useEffect } from 'react';
import carrousel1 from '../assets/carrousel1.jpg';
import carrousel2 from '../assets/carrousel2.jpg';
import carrousel3 from '../assets/carrousel3.jpg';
import carrousel4 from '../assets/carrousel4.jpg';
import carrousel5 from '../assets/carrousel5.jpg';
import carrousel6 from '../assets/carrousel6.jpg';

export default function Gallery() {
  const images = [carrousel1, carrousel2, carrousel3, carrousel4, carrousel5, carrousel6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div id='gallery' className="relative max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Notre Galerie</h2>
      
      <div className="relative overflow-hidden rounded-xl shadow-2xl">

        <div className="relative h-96 md:h-[500px] w-full">
          <img 
            src={images[currentIndex]} 
            alt={`Barbershop gallery ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all ${currentIndex === index ? 'bg-red-500 w-6 md:w-8' : 'bg-white/50'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative h-20 md:h-24 overflow-hidden rounded-lg transition-all ${currentIndex === index ? 'ring-4 ring-red-500' : 'opacity-80 hover:opacity-100'}`}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}