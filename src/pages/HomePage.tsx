import React from 'react';
import { ArrowRight, Users, Code, Zap, CheckCircle, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Approche humaine",
      description: "Un accompagnement personnalisé tout au long de votre projet"
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Solutions sur mesure",
      description: "Des sites web adaptés à vos besoins et à votre activité"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Performance optimisée",
      description: "Sites rapides, sécurisés et optimisés pour le référencement"
    }
  ];

  const testimonials = [
    {
      name: "Sophie Martinez",
      role: "Consultante indépendante",
      content: "Web&Moi a parfaitement compris mes besoins. Mon site reflète exactement mon image professionnelle.",
      rating: 5
    },
    {
      name: "Thomas Dubois",
      role: "Artisan boulanger",
      content: "Grâce à mon nouveau site, j'ai doublé mes commandes en ligne. Un investissement rentable !",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sites web <span className="text-blue-600">sur mesure</span><br />
              pour entrepreneurs et indépendants
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Développeur web freelance, je crée votre présence digitale avec une approche 
              humaine et des solutions techniques adaptées à votre activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Voir mes services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                  {feature.icon}
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

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mes services
            </h2>
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
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Design responsive
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  SEO optimisé
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Maintenance incluse
                </li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                À partir de 890€
              </div>
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
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Paiement sécurisé
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Gestion des stocks
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Formation incluse
                </li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                À partir de 1 490€
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refonte</h3>
              <p className="text-gray-600 mb-6">
                Modernisez votre site existant pour de meilleures performances
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Audit complet
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Nouveau design
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Migration sécurisée
                </li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                À partir de 690€
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble le site web qui fera 
            décoller votre activité.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors group"
          >
            Obtenir un devis gratuit
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;