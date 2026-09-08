import { useEffect } from 'react';

export const useScrollReveal = (dependency?: any) => {
  useEffect(() => {
    // Check IntersectionObserver support
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback for environments without observer
      document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
        el.classList.add('reveal-active');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '120px 0px 60px 0px',
      }
    );

    // Eagerly observe immediately without delay
    const elements = document.querySelectorAll('.reveal, .reveal-scale');
    elements.forEach((el) => {
      // If already in top viewport, activate immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('reveal-active');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [dependency]);
};
