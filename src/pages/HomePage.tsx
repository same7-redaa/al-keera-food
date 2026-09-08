import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedDish } from '../components/FeaturedDish';
import { FeaturedMenuPreview } from '../components/FeaturedMenuPreview';
import { WhyUs } from '../components/WhyUs';
import { Offers } from '../components/Offers';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { SocialProofGallery } from '../components/SocialProofGallery';
import { LocationHours } from '../components/LocationHours';

interface HomePageProps {
  onNavigateToMenu: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToMenu }) => {
  return (
    <div>
      <Hero onExploreMenu={onNavigateToMenu} />
      <FeaturedDish />
      <FeaturedMenuPreview onOpenFullMenu={onNavigateToMenu} />
      <WhyUs />
      <Offers />
      <About />
      <Testimonials />
      <SocialProofGallery />
      <LocationHours />
    </div>
  );
};
