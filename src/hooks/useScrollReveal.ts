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
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Give DOM a frame to settle
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-scale');
      elements.forEach((el) => observer.observe(el));
    }, 80);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [dependency]);
};
