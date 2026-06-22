import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function Testimonial() {
  const testimonials = [
    {
      name: "Marc Dossou",
      role: "Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Le Fade m'a redonné confiance en moi avec leur coupe précise. Je viens chaque semaine pour entretenir mon style et leur service est toujours impeccable.",
      rating: 5,
      date: "15 Janvier 2024"
    },
    {
      name: "Élodie Adékambi",
      role: "Styliste",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Je fais confiance à Le Fade pour les coupes de mon fils depuis 2 ans. Ils savent travailler avec les cheveux africains comme personne à Cotonou.",
      rating: 4,
      date: "3 Mars 2024"
    },
    {
      name: "Kévin Soglo",
      role: "Étudiant",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      content: "Meilleur rapport qualité-prix ! J'ai testé plusieurs barbiers mais leurs techniques de rasage traditionnel n'ont pas d'égal. Aucune irritation après.",
      rating: 5,
      date: "22 Février 2024"
    },
    {
      name: "Amina Bello",
      role: "Professionnelle",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "Le soin de barbe de mon mari est toujours parfait quand il vient ici. L'ambiance est détendue et les produits utilisés sont de qualité.",
      rating: 5,
      date: "10 Avril 2024"
    }
  ]

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ce que disent nos clients</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez les expériences authentiques de ceux qui nous font confiance
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="text-gray-700 mb-4 relative">
                <FaQuoteLeft className="text-red-500 opacity-20 text-3xl absolute -top-2 -left-1" />
                <p className="relative z-10 pl-6">{testimonial.content}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}