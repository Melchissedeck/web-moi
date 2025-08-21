import React from 'react';
import { testimonials } from './data';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ils me font confiance
        </h2>
        <p className="text-xl text-gray-600">
          Découvrez les témoignages de mes clients satisfaits
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-xl">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star aria-hidden="true" key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "{testimonial.content}"
            </p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
