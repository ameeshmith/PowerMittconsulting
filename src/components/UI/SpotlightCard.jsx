import { useRef, useCallback } from 'react';
import './SpotlightCard.css';

/**
 * High-performance Spotlight Card inspired by Framer & CreoIT.
 * Tracks cursor position within the card and updates CSS variables (--mouse-x, --mouse-y)
 * via direct DOM mutation (avoiding React re-renders for fluid 60fps interaction).
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 102, 255, 0.18)',
  borderColor = 'rgba(0, 102, 255, 0.35)',
  as: Component = 'div',
  ...props
}) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--spotlight-opacity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--spotlight-opacity', '0');
  }, []);

  return (
    <Component
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--spotlight-color': spotlightColor,
        '--spotlight-border-color': borderColor
      }}
      {...props}
    >
      <div className="spotlight-card__border" aria-hidden="true" />
      <div className="spotlight-card__glow" aria-hidden="true" />
      <div className="spotlight-card__content">
        {children}
      </div>
    </Component>
  );
}
