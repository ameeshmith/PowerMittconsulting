import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './Hero.css';

export default function Hero({
  badge = 'ENGINEERING CONSULTANCY',
  title,
  subtitle,
  primaryCTA = 'Explore Services',
  primaryLink = '/services',
  secondaryCTA = 'View Projects',
  secondaryLink = '/projects',
  stats,
  bgImage = '/assets/images/hero-modern-skyline.jpg',
  variant = 'home'
}) {
  const imageUrl = getAssetUrl(bgImage);

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
          {badge && (
            <div className="hero-modern__badge">
              <span>{badge}</span>
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

          <p className="hero-modern__subtitle">
            {subtitle || (
              "PowerMitt Consulting delivers specialist electrical power systems, grid connection, and decarbonisation engineering for landmark projects across Mining, Energy, Oil & Gas, and Heavy Infrastructure."
            )}
          </p>

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
        </div>

        {/* Bottom Floating Stats Bar */}
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
