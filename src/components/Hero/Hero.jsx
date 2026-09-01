import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './Hero.css';

export default function Hero({
  label,
  title,
  subtitle,
  primaryCTA,
  primaryLink,
  secondaryCTA,
  secondaryLink,
  variant = 'default',
  bgImage
}) {
  const imageUrl = getAssetUrl(bgImage);

  return (
    <section
      className={`hero hero--${variant} ${imageUrl ? 'hero--has-bg' : ''}`}
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Subtle radial glow */}
      <div className="hero__glow" />

      {/* Technical subtle grid */}
      <div className="hero__grid-pattern" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">
          {label && (
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span className="hero__badge-text">{label}</span>
            </div>
          )}

          <h1 className="hero__title">{title}</h1>

          {subtitle && <p className="hero__subtitle">{subtitle}</p>}

          <div className="hero__actions">
            {primaryCTA && (
              <Link to={primaryLink || '/services'} className="btn btn--primary btn--large">
                {primaryCTA}
                <ArrowRight size={16} />
              </Link>
            )}
            {secondaryCTA && (
              <Link to={secondaryLink || '/contact'} className="btn btn--secondary btn--large">
                {secondaryCTA}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
