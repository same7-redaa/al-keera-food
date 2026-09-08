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
import { SectionDivider } from '../components/SectionDivider';

interface HomePageProps {
  onNavigateToMenu: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToMenu }) => {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero (#FAF8F5) */}
      <Hero onExploreMenu={onNavigateToMenu} />

      {/* Wave Transition: #FAF8F5 -> #FFFFFF */}
      <div className="bg-[#FAF8F5] section-divider-wrapper">
        <SectionDivider type="wave" fillColor="#FFFFFF" />
      </div>

      {/* 2. Featured Dish (#FFFFFF) */}
      <FeaturedDish />

      {/* Slant Transition: #FFFFFF -> #F6F2EA */}
      <div className="bg-white section-divider-wrapper">
        <SectionDivider type="slant" fillColor="#F6F2EA" />
      </div>

      {/* 3. Featured Menu Preview (#F6F2EA) */}
      <FeaturedMenuPreview onOpenFullMenu={onNavigateToMenu} />

      {/* Curve Transition: #F6F2EA -> #FFFFFF */}
      <div className="bg-[#F6F2EA] section-divider-wrapper">
        <SectionDivider type="curve" fillColor="#FFFFFF" />
      </div>

      {/* 4. Why Us (#FFFFFF) */}
      <WhyUs />

      {/* Split Transition: #FFFFFF -> #FAF8F5 */}
      <div className="bg-white section-divider-wrapper">
        <SectionDivider type="split" fillColor="#FAF8F5" />
      </div>

      {/* 5. Offers (#FAF8F5) */}
      <Offers />

      {/* Wave Transition: #FAF8F5 -> #F6F2EA */}
      <div className="bg-[#FAF8F5] section-divider-wrapper">
        <SectionDivider type="wave" fillColor="#F6F2EA" />
      </div>

      {/* 6. About (#F6F2EA) */}
      <About />

      {/* Slant Transition: #F6F2EA -> #FFFFFF */}
      <div className="bg-[#F6F2EA] section-divider-wrapper">
        <SectionDivider type="slant" fillColor="#FFFFFF" />
      </div>

      {/* 7. Testimonials (#FFFFFF) */}
      <Testimonials />

      {/* Curve Transition: #FFFFFF -> #FAF8F5 */}
      <div className="bg-white section-divider-wrapper">
        <SectionDivider type="curve" fillColor="#FAF8F5" />
      </div>

      {/* 8. Social Proof Gallery (#FAF8F5) */}
      <SocialProofGallery />

      {/* Split Transition: #FAF8F5 -> #FFFFFF */}
      <div className="bg-[#FAF8F5] section-divider-wrapper">
        <SectionDivider type="split" fillColor="#FFFFFF" />
      </div>

      {/* 9. Location & Hours (#FFFFFF) */}
      <LocationHours />

      {/* Wave Transition: #FFFFFF -> #1C1814 (Footer) */}
      <div className="bg-white section-divider-wrapper">
        <SectionDivider type="wave" fillColor="#1C1814" />
      </div>
    </div>
  );
};

