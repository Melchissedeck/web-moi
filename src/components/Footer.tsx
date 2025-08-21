import React from 'react';
import { Code, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Code aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Web&Moi</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Développeur web freelance spécialisé dans la création de sites sur mesure 
              pour entrepreneurs, indépendants et petites entreprises.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/webmoi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/webmoi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Site vitrine</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refonte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail aria-hidden="true" className="h-4 w-4" />
                <span className="text-gray-400">contact@webmoi.fr</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span className="text-gray-400">06 12 34 56 78</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                <span className="text-gray-400">France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Web&Moi. Tous droits réservés. Développé avec ❤️ pour les entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;