import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Add className="reveal" (or "reveal reveal--delay-1", etc.) to any element.
 * When it scrolls into view, the class "revealed" is added, triggering CSS animations.
 *
 * @param {Array} deps — Optional dependency values. When any value changes the observer
 *   re-scans the DOM for new .reveal elements. Pass values that change when async content
 *   renders (e.g. an articles list length) to ensure dynamically-added cards are picked up.
 */
export default function useScrollReveal(deps = []) {
  const observerRef = useRef(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

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

    observerRef.current = observer;

    // Observe all un-revealed .reveal elements
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
        observer.observe(el);
      });
    };

    // Small delay to ensure React has flushed the DOM
    requestAnimationFrame(() => {
      observeAll();
    });

    // Also watch for dynamically-added .reveal elements
    const mutation = new MutationObserver(() => {
      observeAll();
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

