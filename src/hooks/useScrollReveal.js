import { useEffect } from 'react';

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Add className="reveal" (or "reveal reveal--delay-1", etc.) to any element.
 * When it scrolls into view, the class "revealed" is added, triggering CSS animations.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
