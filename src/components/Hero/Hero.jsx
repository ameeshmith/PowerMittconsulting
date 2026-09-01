import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './Hero.css';

export default function Hero({
  badge,
  label,
  title,
  subtitle,
  primaryCTA,
  primaryLink = '/services',
  secondaryCTA,
  secondaryLink = '/projects',
  stats,
  bgImage,
  variant = 'default'
}) {
  const badgeText = badge || label;
  const isHome = variant === 'home' || !variant || variant === 'default';
  const defaultBg = isHome ? '/assets/images/hero-modern-skyline.jpg' : '/assets/images/hero-about.jpg';
  const imageUrl = getAssetUrl(bgImage || defaultBg);

  return (
    <section
      className={`hero-modern ${variant === 'compact' ? 'hero-modern--compact' : ''}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark teal & cyan atmospheric vignette */}
      <div className="hero-modern__overlay" />
      <div className="hero-modern__glow" />

      <div className="container hero-modern__container">
        <div className="hero-modern__content">
          {badgeText && (
            <div className="hero-modern__badge">
              <span>{badgeText}</span>
            </div>
          )}

          <h1 className="hero-modern__title">
            {title || (
              <>
                Engineering <span className="hero-modern__highlight">excellence</span><br />
                from concept to execution.
              </>
            )}
          </h1>

          {subtitle && (
            <p className="hero-modern__subtitle">
              {subtitle}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="hero-modern__actions">
              {primaryCTA && (
                <Link to={primaryLink} className="btn-modern-primary">
                  {primaryCTA} <ArrowRight size={16} />
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryLink} className="btn-modern-secondary">
                  {secondaryCTA}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Bottom Floating Stats Bar (Only on pages that provide stats) */}
        {stats && stats.length > 0 && (
          <div className="hero-modern__stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="hero-modern__stat-card">
                <span className="hero-modern__stat-value">{stat.value}</span>
                <span className="hero-modern__stat-label">{stat.label}</span>
                {stat.subtext && <span className="hero-modern__stat-sub">{stat.subtext}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
