import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20">
      {/* À propos */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">À propos</h1>
        <p className="text-lg text-gray-700 mb-4">
          Je m'appelle <span className="font-semibold">Melchissedeck Afoudah</span>, fondateur de <span className="font-semibold">Web&amp;moi</span>, une agence spécialisée dans la création de sites web modernes et performants.
        </p>
        <p className="text-lg text-gray-700">
          Passionné par le développement et le design digital, j'accompagne entrepreneurs, indépendants et petites entreprises à construire leur présence en ligne grâce à des sites esthétiques, rapides et pensés pour leurs objectifs.
        </p>
      </section>

      {/* Mon parcours */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Mon parcours</h2>
        <p className="text-lg text-gray-700 mb-4">
          Formé en développement web à Hetic, j'ai acquis une solide base en développement front-end et back-end, en conception technique et en gestion de projets digitaux.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          À travers différents projets, j'ai développé une expertise dans la création de sites vitrines et e-commerce, en intégrant des technologies modernes comme HTML, CSS, JavaScript, ReactJS et PHP.
        </p>
        <p className="text-lg text-gray-700">
          Je maîtrise également l'expérience utilisateur (UX/UI) et les bonnes pratiques du responsive design, afin que chaque site soit aussi agréable sur mobile que sur ordinateur.
        </p>
      </section>

      {/* Ce que je propose */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ce que je propose avec mon agence</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            <span className="font-semibold">Sites vitrines professionnels :</span> une vitrine digitale unique pour
            présenter votre activité et convaincre vos prospects.
          </li>
          <li>
            <span className="font-semibold">Sites e-commerce :</span> une boutique en ligne clé en main, ergonomique et
            sécurisée, prête à booster vos ventes.
          </li>
          <li>
            <span className="font-semibold">Design moderne &amp; UX optimisée :</span> des interfaces simples, intuitives et attrayantes, adaptées à vos clients.
          </li>
          <li>
            <span className="font-semibold">Maintenance &amp; évolutivité :</span> je vous accompagne après la mise en ligne pour faire évoluer votre site selon vos besoins.
          </li>
        </ul>
      </section>

      {/* Mes valeurs */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Mes valeurs</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            <span className="font-semibold">Créativité :</span> proposer des designs modernes et attractifs qui reflètent votre identité.
          </li>
          <li>
            <span className="font-semibold">Rigueur &amp; professionnalisme :</span> livrer des sites performants et optimisés.
          </li>
          <li>
            <span className="font-semibold">Accompagnement personnalisé :</span> comprendre vos besoins pour créer une solution sur-mesure.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-gray-700">
          👉 Avec Web&amp;moi, je ne me contente pas de créer un site : je conçois un outil digital
          puissant qui met en valeur votre marque et attire vos futurs clients.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
