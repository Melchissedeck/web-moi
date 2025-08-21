import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => (
  <section className="bg-gradient-to-br from-blue-50 to-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Sites web <span className="text-blue-600">sur mesure</span>
          <br />
          pour entrepreneurs et indépendants
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Développeur web freelance, je crée votre présence digitale avec une approche
          humaine et des solutions techniques adaptées à votre activité.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
          >
            Voir mes services
            <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
