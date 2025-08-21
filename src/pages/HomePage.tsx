import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ServicesPreviewSection from '../components/home/ServicesPreviewSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => (
  <div>
    <Helmet>
      <title>Accueil | Web&Moi</title>
      <meta
        name="description"
        content="Sites web sur mesure pour entrepreneurs et indépendants."
      />
    </Helmet>
    <HeroSection />
    <FeaturesSection />
    <ServicesPreviewSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
);

export default HomePage;
