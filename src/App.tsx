import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CartPage } from './pages/CartPage';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { Toast } from './components/Toast';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'cart'>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#cart')) return 'cart';
    if (hash.startsWith('#menu')) return 'menu';
    return 'home';
  });

  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll reveal on page render
  useScrollReveal(currentPage);

  // Initial site load splash screen & scroll to top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Helper to scroll accurately to target section or top
  const scrollToSectionOrTop = (sectionId?: string) => {
    if (sectionId && sectionId !== 'hero') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 75;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'instant'
        });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Sync hash routing & back button
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#/, '');
      if (rawHash === 'cart') {
        setCurrentPage('cart');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } else if (rawHash === 'menu') {
        setCurrentPage('menu');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
        if (rawHash && rawHash !== 'hero') {
          setTimeout(() => {
            scrollToSectionOrTop(rawHash);
          }, 60);
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'menu' | 'cart', sectionId?: string) => {
    setIsLoading(true);
    setCurrentPage(page);

    // Update URL hash smoothly
    const targetHash = page === 'cart' ? '#cart' : page === 'menu' ? '#menu' : (sectionId && sectionId !== 'hero' ? `#${sectionId}` : '');
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash || window.location.pathname);
    }

    setTimeout(() => {
      if (page === 'cart' || page === 'menu') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } else {
        scrollToSectionOrTop(sectionId);
      }

      // Smoothly hide splash screen after page and scroll position are fully aligned
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 380);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-deep text-brand-offWhite font-arabic selection:bg-brand-gold selection:text-brand-black flex flex-col relative overflow-x-hidden">
        {/* Splash Screen */}
        <SplashScreen isLoading={isLoading} />

        {/* Sticky Header */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        {/* Main Content View (Home, Menu, or Cart Page) */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <HomePage onNavigateToMenu={() => handleNavigate('menu')} />
          )}
          {currentPage === 'menu' && (
            <MenuPage />
          )}
          {currentPage === 'cart' && (
            <CartPage onNavigateToMenu={() => handleNavigate('menu')} />
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Overlays */}
        <Toast />
      </div>
    </CartProvider>
  );
};

export default App;
