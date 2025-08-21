import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => (
  <section className="py-20 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Prêt à lancer votre projet ?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Discutons de vos besoins et créons ensemble le site web qui fera
        décoller votre activité.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors group"
      >
        Obtenir un devis gratuit
        <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
);

export default CtaSection;
