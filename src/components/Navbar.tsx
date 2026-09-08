import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ShoppingBag, Menu as MenuIcon, X, Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'menu' | 'cart';
  onNavigate: (page: 'home' | 'menu' | 'cart', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Real-time ScrollSpy to highlight the active section
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = [
      { id: 'hero' },
      { id: 'featured-menu' },
      { id: 'offers' },
      { id: 'about' },
      { id: 'testimonials' },
      { id: 'gallery' },
      { id: 'location' },
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [currentPage]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'الرئيسية', page: 'home' as const, sectionId: 'hero' },
    { label: 'المنيو', page: 'home' as const, sectionId: 'featured-menu' },
    { label: 'العروض', page: 'home' as const, sectionId: 'offers' },
    { label: 'عن الكيرة', page: 'home' as const, sectionId: 'about' },
    { label: 'الآراء', page: 'home' as const, sectionId: 'testimonials' },
    { label: 'معرض الصور', page: 'home' as const, sectionId: 'gallery' },
    { label: 'فروعنا', page: 'home' as const, sectionId: 'location' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    onNavigate(link.page, link.sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-[#FAF8F5] py-3.5 shadow-none border-b border-[#A48F64]/20'
            : isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-xl py-3 shadow-md border-b border-[#A48F64]/25'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Right: Brand Logo */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home', 'hero');
            }}
            className="flex items-center transition-transform hover:scale-105"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </button>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/95 backdrop-blur-md border border-[#A48F64]/30 rounded-full px-2.5 py-1 shadow-sm transition-all duration-300">
            {navLinks.map((link) => {
              const isLinkActive =
                currentPage === 'home' && link.sectionId === activeSection;

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 flex items-center justify-center ${
                    isLinkActive
                      ? 'bg-[#A48F64] text-white shadow-md'
                      : 'text-[#241E17] hover:text-[#A48F64] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Left: Cart & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('cart');
              }}
              className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full font-black text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${
                currentPage === 'cart'
                  ? 'bg-[#8A764D] text-white shadow-gold-glow'
                  : 'bg-[#A48F64] text-white hover:bg-[#8A764D]'
              }`}
              aria-label="السلة"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>السلة</span>
              {totalItems > 0 && (
                <span className="bg-brand-redBadge text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#241E17] hover:text-[#A48F64] transition-colors focus:outline-none flex items-center justify-center"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#A48F64]" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Streamlined Mobile Hamburger Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#FAF8F5] pt-20 pb-6 px-5 flex flex-col justify-between overflow-y-auto animate-fadeIn select-none">
          
          {/* Main Navigation Links List */}
          <div className="flex flex-col gap-2 mt-2">
            {navLinks.map((link) => {
              const isLinkActive =
                currentPage === 'home' && link.sectionId === activeSection;

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className={`w-full py-3 px-4 text-sm font-black text-right rounded-xl transition-all flex items-center justify-between ${
                    isLinkActive
                      ? 'bg-[#A48F64] text-white shadow-sm'
                      : 'text-[#241E17] hover:bg-[#F5EFE6] bg-white border border-[#A48F64]/20'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`text-xs ${isLinkActive ? 'text-white' : 'text-[#A48F64]'}`}>←</span>
                </button>
              );
            })}
          </div>

          {/* Quick Actions Footer (Side by Side WhatsApp, Call & Socials) */}
          <div className="pt-4 mt-4 border-t border-[#A48F64]/20 space-y-3">
            
            {/* Quick Contact Buttons Side by Side */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="py-2.5 px-3 bg-[#A48F64] text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال هاتفي</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={RESTAURANT_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="فيسبوك"
                className="w-9 h-9 rounded-xl bg-white border border-[#A48F64]/30 flex items-center justify-center text-[#241E17] shadow-xs hover:text-[#A48F64]"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="إنستغرام"
                className="w-9 h-9 rounded-xl bg-white border border-[#A48F64]/30 flex items-center justify-center text-[#241E17] shadow-xs hover:text-[#A48F64]"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      )}
    </>
  );
};
