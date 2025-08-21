import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServicesPreviewSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mes services</h2>
        <p className="text-xl text-gray-600">
          Des solutions adaptées à chaque étape de votre croissance
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Site vitrine</h3>
          <p className="text-gray-600 mb-6">
            Présentez votre activité avec un site professionnel et attractif
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Design responsive
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              SEO optimisé
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Maintenance incluse
            </li>
          </ul>
          <p className="text-gray-700 font-semibold mb-4">
            Contactez-moi pour un devis personnalisé
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-orange-200">
          <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            Le plus populaire
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce</h3>
          <p className="text-gray-600 mb-6">
            Vendez en ligne avec une boutique sécurisée et performante
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Paiement sécurisé
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Gestion des stocks
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Formation incluse
            </li>
          </ul>
          <p className="text-gray-700 font-semibold mb-4">
            Contactez-moi pour un devis personnalisé
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refonte</h3>
          <p className="text-gray-600 mb-6">
            Modernisez votre site existant pour de meilleures performances
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Audit complet
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Nouveau design
            </li>
            <li className="flex items-center text-gray-600">
              <CheckCircle aria-hidden="true" className="h-4 w-4 text-green-500 mr-2" />
              Migration sécurisée
            </li>
          </ul>
          <p className="text-gray-700 font-semibold mb-4">
            Contactez-moi pour un devis personnalisé
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesPreviewSection;
