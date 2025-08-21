import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage: React.FC = () => (
  <div className="py-20 text-center">
    <Helmet>
      <title>Page non trouvée | Web&Moi</title>
      <meta name="description" content="La page demandée est introuvable." />
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
    <p className="mb-8 text-gray-600">
      La page que vous recherchez n'existe pas.
    </p>
    <Link to="/" className="text-blue-600 hover:underline">
      Retour à l'accueil
    </Link>
  </div>
);

export default NotFoundPage;
