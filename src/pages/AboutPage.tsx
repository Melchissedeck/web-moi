import React from 'react';
import { Code, Heart, Users, Lightbulb, Award, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Approche humaine",
      description: "Chaque projet est unique, comme chaque entrepreneur. Je prends le temps de comprendre vos besoins et votre vision."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Pédagogie",
      description: "Je vous accompagne et vous forme pour que vous soyez autonome dans la gestion de votre site web."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Partenariat",
      description: "Plus qu'un prestataire, je deviens votre partenaire digital sur le long terme."
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Qualité",
      description: "Code propre, performances optimisées, sécurité renforcée : je ne transige pas sur la qualité."
    }
  ];

  const journey = [
    {
      year: "2018",
      title: "Début de l'aventure",
      description: "Première formation en développement web et premiers projets personnels."
    },
    {
      year: "2020",
      title: "Freelance",
      description: "Lancement de mon activité freelance avec mes premiers clients entrepreneurs."
    },
    {
      year: "2022",
      title: "Spécialisation",
      description: "Focus sur les PME et indépendants avec une approche sur mesure."
    },
    {
      year: "2024",
      title: "Web&Moi",
      description: "Création de la marque Web&Moi et expansion de mes services."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bonjour, je suis <span className="text-blue-600">Alexandre</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Développeur web freelance passionné, je crée des sites web sur mesure 
                pour entrepreneurs et indépendants depuis plus de 5 ans.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <Coffee className="h-5 w-5" />
                <span>Basé en France • Travail à distance</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <Code className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ma mission</h3>
                  <p className="text-blue-100">
                    Démocratiser le web en rendant la technologie accessible à tous les entrepreneurs, 
                    quelle que soit leur taille ou leur secteur d'activité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ma vision du métier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le développement web n'est pas qu'une question de code. C'est créer des ponts 
              entre votre vision et vos clients, avec la technologie comme moyen, pas comme fin.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  🎯 Ce qui me guide
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1 mr-3 flex-shrink-0">✓</span>
                    <span>Comprendre avant de créer : chaque projet commence par une écoute attentive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1 mr-3 flex-shrink-0">✓</span>
                    <span>Simplicité et efficacité : des solutions qui marchent vraiment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1 mr-3 flex-shrink-0">✓</span>
                    <span>Accompagnement sur le long terme : je reste à vos côtés après la livraison</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  💡 Ma différence
                </h3>
                <p className="text-gray-600 mb-6">
                  Contrairement aux grandes agences, je privilégie la relation humaine et 
                  l'accompagnement personnalisé. Vous avez un interlocuteur unique qui 
                  comprend votre métier et vos enjeux.
                </p>
                <p className="text-gray-600">
                  Mon objectif : que vous soyez fier de votre site et autonome dans sa gestion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mes valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui fait la différence dans ma façon de travailler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mon parcours
            </h2>
            <p className="text-xl text-gray-600">
              6 années d'évolution au service des entrepreneurs
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>
            <div className="space-y-12">
              {journey.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                      <div className="text-blue-600 font-bold text-lg mb-2">{step.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md z-10 my-4 md:my-0"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mes compétences techniques
            </h2>
            <p className="text-xl text-gray-600">
              Une expertise complète pour tous vos projets web
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PHP', 'Python', 'MySQL', 'MongoDB', 'WordPress'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Outils</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Figma', 'Adobe XD', 'Analytics', 'SEO', 'Performance'].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;