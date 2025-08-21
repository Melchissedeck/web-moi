import React, { useState } from 'react';
import { CheckCircle, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Site vitrine",
      subtitle: "Présentez votre activité",
      price: "À partir de 890€",
      popular: false,
      description: "Site professionnel pour présenter votre activité, vos services et rassurer vos prospects.",
      features: [
        "Design responsive (mobile, tablette, desktop)",
        "5-10 pages personnalisées",
        "Optimisation SEO de base",
        "Formulaire de contact sécurisé",
        "Intégration réseaux sociaux",
        "Certificat SSL inclus",
        "1 mois de maintenance offert",
        "Formation à la gestion du contenu"
      ],
      duration: "2-3 semaines",
      ideal: "Indépendants, consultants, artisans, professions libérales"
    },
    {
      title: "E-commerce",
      subtitle: "Vendez en ligne",
      price: "À partir de 1 490€",
      popular: true,
      description: "Boutique en ligne complète avec gestion des commandes, paiements sécurisés et suivi des stocks.",
      features: [
        "Catalogue produits illimité",
        "Panier et tunnel de commande optimisé",
        "Paiement sécurisé (CB, PayPal, etc.)",
        "Gestion des stocks et variantes",
        "Outil de gestion des commandes",
        "Système de livraison paramétrable",
        "Analytics e-commerce",
        "Formation complète incluse",
        "2 mois de maintenance offerts"
      ],
      duration: "4-6 semaines",
      ideal: "Artisans, créateurs, boutiques, distributeurs"
    },
    {
      title: "Refonte",
      subtitle: "Modernisez votre site",
      price: "À partir de 690€",
      popular: false,
      description: "Remise à neuf complète de votre site existant avec amélioration des performances et du design.",
      features: [
        "Audit complet du site existant",
        "Nouveau design moderne",
        "Optimisation des performances",
        "Amélioration du référencement",
        "Migration sécurisée des données",
        "Adaptation mobile",
        "Redirection des anciennes URLs",
        "Formation aux nouveautés"
      ],
      duration: "2-4 semaines",
      ideal: "Sites obsolètes, performances dégradées, design vieillissant"
    }
  ];

  const addons = [
    { name: "Logo personnalisé", price: "250€" },
    { name: "Rédaction de contenu (par page)", price: "80€" },
    { name: "Séance photo produits", price: "300€" },
    { name: "Formation approfondie (2h)", price: "150€" },
    { name: "Maintenance mensuelle", price: "49€/mois" },
    { name: "Référencement avancé", price: "390€" }
  ];

  const faqs = [
    {
      question: "Combien de temps dure un projet ?",
      answer: "La durée varie selon le type de projet : 2-3 semaines pour un site vitrine, 4-6 semaines pour un e-commerce, et 2-4 semaines pour une refonte. Je vous donne un planning précis après notre premier échange."
    },
    {
      question: "Que se passe-t-il après la livraison ?",
      answer: "Je vous forme à la gestion de votre site et reste disponible pour vos questions. Une maintenance préventive est incluse (1-2 mois selon l'offre), puis vous pouvez souscrire à un forfait maintenance ou faire appel à moi ponctuellement."
    },
    {
      question: "Mon site sera-t-il visible sur Google ?",
      answer: "Oui, j'optimise systématiquement le référencement de base (SEO) : structure du code, vitesse de chargement, balises meta, sitemap. Pour un référencement avancé, je propose un service dédié."
    },
    {
      question: "Puis-je modifier mon site moi-même ?",
      answer: "Absolument ! Je conçois tous mes sites avec un système de gestion de contenu (CMS) facile à utiliser. Je vous forme à son utilisation pour que vous soyez autonome dans la mise à jour de vos contenus."
    },
    {
      question: "Quels sont les frais récurrents ?",
      answer: "Les frais d'hébergement et de nom de domaine (environ 100-150€/an). La maintenance est optionnelle mais recommandée (49€/mois) pour les mises à jour de sécurité et le support technique."
    },
    {
      question: "Proposez-vous un paiement échelonné ?",
      answer: "Oui, le paiement se fait généralement en 3 fois : 40% à la commande, 40% à la validation de la maquette, et 20% à la livraison. D'autres modalités sont possibles selon votre situation."
    },
    {
      question: "Que comprend la maintenance ?",
      answer: "Mises à jour de sécurité, sauvegardes automatiques, monitoring de la disponibilité, corrections de bugs mineurs, et support technique prioritaire. Tout ce qui assure le bon fonctionnement de votre site."
    },
    {
      question: "Travaillez-vous avec tous les secteurs ?",
      answer: "Je travaille avec la plupart des secteurs d'activité, en particulier les services, l'artisanat, le commerce et les professions libérales. Chaque projet est étudié pour s'assurer de ma capacité à répondre à vos besoins spécifiques."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes <span className="text-blue-600">services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Des solutions web adaptées à chaque besoin et chaque budget. 
            Découvrez l'offre qui correspond à votre projet.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${service.popular ? 'border-orange-200 transform scale-105' : 'border-gray-200'}`}>
                {service.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.subtitle}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <p className="text-sm text-gray-500">Livré en {service.duration}</p>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Inclus dans cette offre :</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Idéal pour :</h4>
                  <p className="text-sm text-gray-600">{service.ideal}</p>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                    service.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services complémentaires
            </h2>
            <p className="text-xl text-gray-600">
              Personnalisez votre projet avec ces options supplémentaires
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                  <span className="text-blue-600 font-bold">{addon.price}</span>
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
              Comment ça se passe ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et transparent du premier contact à la livraison
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Premier contact",
                description: "Échange sur vos besoins, vos objectifs et votre budget. Devis personnalisé sous 48h."
              },
              {
                step: "02", 
                title: "Conception",
                description: "Création de la maquette et validation avec vous. Aller-retour jusqu'à satisfaction complète."
              },
              {
                step: "03",
                title: "Développement",
                description: "Codage de votre site avec des points d'étapes réguliers. Vous suivez l'avancement en temps réel."
              },
              {
                step: "04",
                title: "Livraison",
                description: "Mise en ligne, formation à la gestion et accompagnement pour vos premiers pas."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Les réponses aux questions que vous vous posez sûrement
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Une question sur mes services ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de votre projet. 
            Devis gratuit et sans engagement.
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

export default ServicesPage;