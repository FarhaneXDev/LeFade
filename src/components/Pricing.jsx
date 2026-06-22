import React from 'react'

export default function Pricing() {
  return (
    <div id='pricing' className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Prestations & Tarifs</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-black text-white py-4 px-6">
            <h2 className="text-2xl font-bold">Coupe & Coiffure</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Coupe Homme</h3>
              <p className="text-red-600 font-medium">5 000 - 7 500 FCFA</p>
              <p className="text-gray-600 text-sm">Tailleur expérimenté</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Coupe Enfant (-15 ans)</h3>
              <p className="text-red-600 font-medium">3 500 - 5 000 FCFA</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Mèches / Highlights</h3>
              <p className="text-red-600 font-medium">10 000 - 15 000 FCFA</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Teinture (noire)</h3>
              <p className="text-red-600 font-medium">12 000 FCFA</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Teinture blonde</h3>
              <p className="text-red-600 font-medium">15 000 - 20 000 FCFA</p>
              <p className="text-gray-600 text-sm">Produits de qualité</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-black text-white py-4 px-6">
            <h2 className="text-2xl font-bold">Barbe & Moustache</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Taille de barbe</h3>
              <p className="text-red-600 font-medium">3 500 - 5 000 FCFA</p>
              <p className="text-gray-600 text-sm">Avec soin hydratant</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Rasage traditionnel</h3>
              <p className="text-red-600 font-medium">4 500 FCFA</p>
              <p className="text-gray-600 text-sm">Lame neuve à chaque client</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Coloration barbe</h3>
              <p className="text-red-600 font-medium">6 000 FCFA</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Épilation nez/oreilles</h3>
              <p className="text-red-600 font-medium">2 500 FCFA</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Soin complet barbe</h3>
              <p className="text-red-600 font-medium">8 000 FCFA</p>
              <p className="text-gray-600 text-sm">Shampoing + huile + brushing</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-black text-white py-4 px-6">
            <h2 className="text-2xl font-bold">Soins Esthétiques</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Nettoyage visage</h3>
              <p className="text-red-600 font-medium">7 500 FCFA</p>
              <p className="text-gray-600 text-sm">Masque + serviette chaude</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Lissage Brésilien</h3>
              <p className="text-red-600 font-medium">15 000 - 25 000 FCFA</p>
              <p className="text-gray-600 text-sm">Selon longueur</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Détox capillaire</h3>
              <p className="text-red-600 font-medium">10 000 FCFA</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold">Massage crânien</h3>
              <p className="text-red-600 font-medium">5 000 FCFA</p>
              <p className="text-gray-600 text-sm">15 minutes</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Forfait VIP</h3>
              <p className="text-red-600 font-medium">25 000 FCFA</p>
              <p className="text-gray-600 text-sm">Coupe + barbe + soin visage</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        * Les prix peuvent varier selon la complexité de la prestation
      </div>
    </div>
  )
}