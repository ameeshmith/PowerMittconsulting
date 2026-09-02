import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, UserCheck } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import WordHighlight from '../WordHighlight/WordHighlight';
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
  showFounderNote = false,
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
      {/* Blueprint Grid & Atmospheric Vignette */}
      <div className="grid_bg hero-modern__grid" />
      <div className="hero-modern__overlay" />
      <div className="hero-modern__glow" />

      <div className="container hero-modern__container">
        <div className="hero-modern__main-row">
          <div className="hero-modern__content">
            {badgeText && (
              <div className="hero-modern__badge">
                <span className="hero-modern__badge-dot" />
                <span>{badgeText}</span>
              </div>
            )}

            <h1 className="hero-modern__title">
              {title || (
                <>
                  Engineering{' '}
                  <WordHighlight color="blue" variant="oval">
                    excellence
                  </WordHighlight>{' '}
                  from concept to{' '}
                  <WordHighlight color="green" variant="oval">
                    execution
                  </WordHighlight>
                  .
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

          {/* Eternal-style Founder Authority Note */}
          {showFounderNote && (
            <div className="hero-modern__founder-card">
              <div className="hero-modern__founder-icon">
                <UserCheck size={22} className="text-[#0066FF]" />
              </div>
              <div className="hero-modern__founder-info">
                <span className="hero-modern__founder-tag">Principal Power Engineer</span>
                <h4 className="hero-modern__founder-name">Dinesh Mithanthaya</h4>
                <p className="hero-modern__founder-desc">
                  20+ years specialist leadership across Australian power systems, mining, and heavy grid integration.
                </p>
                <Link to="/about" className="hero-modern__founder-link">
                  Read Founder Profile <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          )}
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
