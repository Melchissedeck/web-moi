import React from 'react';
import { features } from './data';

const FeaturesSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Pourquoi choisir Web&Moi ?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une expertise technique combinée à une approche humaine pour créer
          le site web qui vous ressemble.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <feature.icon aria-hidden="true" className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
