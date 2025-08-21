import { Users, Code, Zap } from 'lucide-react';

export const features = [
  {
    icon: Users,
    title: 'Approche humaine',
    description: "Un accompagnement personnalisé tout au long de votre projet",
  },
  {
    icon: Code,
    title: 'Solutions sur mesure',
    description: 'Des sites web adaptés à vos besoins et à votre activité',
  },
  {
    icon: Zap,
    title: 'Performance optimisée',
    description: 'Sites rapides, sécurisés et optimisés pour le référencement',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sophie Martinez',
    role: 'Consultante indépendante',
    content:
      "Web&Moi a parfaitement compris mes besoins. Mon site reflète exactement mon image professionnelle.",
    rating: 5,
  },
  {
    name: 'Thomas Dubois',
    role: 'Artisan boulanger',
    content:
      "Grâce à mon nouveau site, j'ai doublé mes commandes en ligne. Un investissement rentable !",
    rating: 5,
  },
];
