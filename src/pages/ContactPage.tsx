import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, Calendar, Linkedin, Github, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    consent: false,
    website: '' // honeypot
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    if (!formData.projectType) newErrors.projectType = 'Veuillez sélectionner un type de projet';
    if (formData.website) newErrors.website = 'Spam détecté';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur serveur');
      }

      setIsSubmitted(true);
      setTimeout(() => navigate('/'), 3000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        consent: false,
        website: ''
      });
    } catch {
      setErrors({ form: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail aria-hidden="true" className="h-6 w-6" />,
      title: "Email",
      content: "contact@webmoi.fr",
      action: "mailto:contact@webmoi.fr"
    },
    {
      icon: <Phone aria-hidden="true" className="h-6 w-6" />,
      title: "Téléphone",
      content: "06 12 34 56 78",
      action: "tel:+33612345678"
    },
    {
      icon: <MapPin aria-hidden="true" className="h-6 w-6" />,
      title: "Localisation",
      content: "France • Travail à distance",
      action: null
    },
    {
      icon: <Clock aria-hidden="true" className="h-6 w-6" />,
      title: "Disponibilité",
      content: "Lun-Ven 9h-18h",
      action: null
    }
  ];

  const projectTypes = [
    { value: '', label: 'Sélectionnez votre projet' },
    { value: 'vitrine', label: 'Site vitrine' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'refonte', label: 'Refonte de site existant' },
    { value: 'maintenance', label: 'Maintenance et support' },
    { value: 'autre', label: 'Autre projet' }
  ];

  const budgetRanges = [
    { value: '', label: 'Votre budget prévisionnel' },
    { value: '500-1000', label: '500€ - 1 000€' },
    { value: '1000-2000', label: '1 000€ - 2 000€' },
    { value: '2000-5000', label: '2 000€ - 5 000€' },
    { value: '5000+', label: 'Plus de 5 000€' },
    { value: 'discuter', label: 'À discuter' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center p-8">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle aria-hidden="true" className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message envoyé !</h2>
          <p className="text-xl text-gray-600 mb-6">
            Merci pour votre message. Je vous répondrai dans les 24h.
          </p>
          <p className="text-gray-500">
            Redirection automatique vers l'accueil...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Parlons de votre <span className="text-blue-600">projet</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Racontez-moi votre vision, je vous propose une solution sur mesure. 
            Devis gratuit et réponse sous 24h garantie.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Formulaire de contact
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                {errors.form && (
                  <p className="text-red-600 text-sm mb-4">{errors.form}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom et prénom"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-red-600 text-sm mt-1">{errors.projectType}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Parlez-moi de votre projet, vos objectifs, vos contraintes, vos inspirations..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                    J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande. 
                    Elles ne seront ni vendues ni transmises à des tiers. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send aria-hidden="true" className="h-5 w-5 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Réponse garantie sous 24h • Devis gratuit et sans engagement
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Mes coordonnées
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RDV Button */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <Calendar aria-hidden="true" className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Préférez un appel ?
              </h3>
              <p className="text-orange-100 mb-6">
                Réservez directement un créneau pour discuter de votre projet par téléphone.
              </p>
              <a
                href="https://calendly.com/webmoi/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                <Calendar aria-hidden="true" className="h-5 w-5 mr-2" />
                Prendre RDV
              </a>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Suivez-moi
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/webmoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-blue-600 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Linkedin aria-hidden="true" className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/webmoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-600 p-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Github aria-hidden="true" className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Retrouvez mes actualités, conseils et projets sur mes réseaux professionnels.
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-semibold text-green-800">Disponible</span>
              </div>
              <p className="text-green-700 text-sm">
                Je réponds généralement sous 2h en journée et sous 24h maximum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Quick */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions avant de me contacter ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Délais</h3>
              <p className="text-gray-600 text-sm">2-6 semaines selon le projet</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Devis</h3>
              <p className="text-gray-600 text-sm">Gratuit et personnalisé</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Paiement</h3>
              <p className="text-gray-600 text-sm">En 3 fois sans frais</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">Formation et maintenance incluses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;