import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors rounded-md ${
      isActive
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }`;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-blue-500 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
              <Code aria-hidden="true" className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Web&Moi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.slice(0, -1).map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Devis gratuit
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={linkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
