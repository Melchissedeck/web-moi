import React, { useState } from 'react';
import { ExternalLink, Github, Star, Filter } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'vitrine', label: 'Sites vitrines' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'refonte', label: 'Refontes' }
  ];

  const projects = [
    {
      id: 1,
      title: "Sophie Conseil",
      category: "vitrine",
      description: "Site vitrine pour une consultante en ressources humaines indépendante",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      features: ["Design responsive", "Formulaire de contact", "Blog intégré", "Optimisation SEO"],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "Web&Moi a parfaitement capturé l'essence de mon activité. Mon site reflète mon professionnalisme et me génère de nouveaux contacts chaque semaine.",
        author: "Sophie Martinez",
        role: "Consultante RH",
        rating: 5
      }
    },
    {
      id: 2,
      title: "Boulangerie Dubois",
      category: "ecommerce",
      description: "Boutique en ligne pour une boulangerie artisanale avec commande et click & collect",
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["WordPress", "WooCommerce", "Stripe"],
      features: ["Catalogue produits", "Commande en ligne", "Click & collect", "Gestion des stocks"],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "Depuis le lancement de notre site e-commerce, nos ventes ont doublé ! L'interface est simple et nos clients adorent commander en ligne.",
        author: "Thomas Dubois",
        role: "Artisan boulanger",
        rating: 5
      }
    },
    {
      id: 3,
      title: "Cabinet Legrand",
      category: "refonte",
      description: "Refonte complète du site d'un cabinet d'avocat pour améliorer le référencement",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      features: ["Nouveau design", "SEO optimisé", "Performance améliorée", "Accessibilité"],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "Notre nouveau site nous positionne enfin comme le cabinet moderne que nous sommes. Les nouveaux clients nous trouvent plus facilement.",
        author: "Maître Legrand",
        role: "Avocat",
        rating: 5
      }
    },
    {
      id: 4,
      title: "Atelier Créatif",
      category: "vitrine",
      description: "Site portfolio pour une artiste créatrice de bijoux avec galerie et boutique",
      image: "https://images.pexels.com/photos/1927574/pexels-photo-1927574.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Nuxt.js", "Sass"],
      features: ["Galerie interactive", "Portfolio", "Boutique intégrée", "Blog créatif"],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "Mon site web est devenu ma meilleure vitrine ! Il met parfaitement en valeur mes créations et attire une clientèle qualifiée.",
        author: "Marie Créative",
        role: "Artiste bijoutière",
        rating: 5
      }
    },
    {
      id: 5,
      title: "TechStart Solutions",
      category: "vitrine",
      description: "Site corporate pour une startup tech avec présentation des services B2B",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Next.js", "TypeScript"],
      features: ["Design moderne", "Animations", "Formulaires avancés", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "Un site qui correspond parfaitement à notre image d'innovation. Nous avons gagné en crédibilité auprès de nos prospects B2B.",
        author: "Alexandre Tech",
        role: "CEO TechStart",
        rating: 5
      }
    },
    {
      id: 6,
      title: "Green Shop Bio",
      category: "ecommerce",
      description: "Marketplace de produits biologiques locaux avec système de livraison",
      image: "https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      features: ["Multi-vendeurs", "Géolocalisation", "Paiement sécurisé", "Livraison locale"],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "Notre marketplace connecte parfaitement producteurs et consommateurs locaux. L'interface est intuitive et les fonctionnalités correspondent exactement à nos besoins.",
        author: "Claire Verte",
        role: "Fondatrice Green Shop",
        rating: 5
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "3 ans", label: "Expérience moyenne" },
    { number: "24h", label: "Support réactif" }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mon <span className="text-blue-600">portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations et les témoignages 
            de clients qui me font confiance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Filter className="h-5 w-5 text-gray-400 mr-3" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                        title="Voir le site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Voir le code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Fonctionnalités clés :</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex mb-2">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "{project.testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {project.testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ma méthode de travail
            </h2>
            <p className="text-xl text-gray-600">
              Une approche structurée pour garantir votre satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyse</h3>
              <p className="text-gray-600">
                Étude approfondie de vos besoins, votre secteur et vos objectifs 
                pour définir la stratégie optimale.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Création</h3>
              <p className="text-gray-600">
                Conception du design et développement avec validation à chaque 
                étape pour s'assurer de votre satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lancement</h3>
              <p className="text-gray-600">
                Mise en ligne, formation à la gestion et accompagnement 
                pour assurer le succès de votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Summary */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pourquoi mes clients me recommandent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapidité</h3>
              <p className="text-blue-100">Projets livrés dans les délais convenus</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-2">Écoute</h3>
              <p className="text-blue-100">Accompagnement personnalisé et humain</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-2">Qualité</h3>
              <p className="text-blue-100">Solutions techniques robustes et durables</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;