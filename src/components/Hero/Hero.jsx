import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      {/* Dark overlay for text legibility if background image is present */}
      {imageUrl && <div className="hero__image-overlay" />}

      {/* Technical SVG background */}
      <div className="hero__pattern" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="rgba(25,181,216,0.15)" />
              <path d="M0 40h80M40 0v80" stroke="rgba(25,181,216,0.04)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
          <circle cx="15%" cy="30%" r="3" fill="rgba(8,126,164,0.3)">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="75%" cy="45%" r="2.5" fill="rgba(25,181,216,0.25)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="hero__content container">
        {label && <span className="label">{label}</span>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        <div className="hero__actions">
          {primaryCTA && (
            <Link to={primaryLink || '/services'} className="btn btn--primary btn--large">
              {primaryCTA}
            </Link>
          )}
          {secondaryCTA && (
            <Link to={secondaryLink || '/contact'} className="btn btn--secondary btn--large">
              {secondaryCTA}
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>

      <div className="hero__gradient-line" aria-hidden="true" />
    </section>
  );
}
