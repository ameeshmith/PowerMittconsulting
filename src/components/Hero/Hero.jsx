import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck } from 'lucide-react';
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
  showFounderNote = false,
  variant = 'default'
}) {
  const badgeText = badge || label;
  const isCompact = variant === 'compact';
  const defaultBg = isCompact ? '/assets/images/hero-about.jpg' : '/assets/images/hero-modern-skyline.jpg';
  const imageUrl = getAssetUrl(bgImage || defaultBg);

  return (
    <section
      className={`hero-modern ${isCompact ? 'hero-modern--compact' : 'hero-modern--editorial'}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Blueprint Grid & Atmospheric Ambient Lighting */}
      <div className="grid_bg hero-modern__grid" />
      <div className="hero-modern__overlay" />
      <div className="hero-modern__radial-glow hero-modern__radial-glow--left" />
      <div className="hero-modern__radial-glow hero-modern__radial-glow--right" />

      <div className="container hero-modern__container">
        <div className="hero-modern__center-wrap">
          {badgeText && (
            <div className="hero-modern__badge">
              <span className="hero-modern__badge-dot" />
              <span>{badgeText}</span>
            </div>
          )}

          <h1 className="hero-modern__title">
            {title || (
              <>
                WHERE POWER <br />
                <span className="hero-modern__serif-accent">meets precision.</span>
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
                <Link to={primaryLink} className="hero-modern__btn-primary">
                  {primaryCTA} <ArrowRight size={15} />
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryLink} className="hero-modern__btn-secondary">
                  {secondaryCTA}
                </Link>
              )}
            </div>
          )}

          {/* Founder Authority Note if requested */}
          {showFounderNote && (
            <div className="hero-modern__founder-card">
              <div className="hero-modern__founder-icon">
                <UserCheck size={22} className="text-[#00E5FF]" />
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

        {/* Epiko Studios Bento Statistics Bar */}
        {stats && stats.length > 0 && (
          <div className="hero-modern__stats-bar">
            <div className="hero-modern__stats-inner">
              {stats.map((stat, i) => (
                <div key={i} className="hero-modern__stat-item">
                  <span className="hero-modern__stat-value">{stat.value}</span>
                  <span className="hero-modern__stat-label">{stat.label}</span>
                  {stat.subtext && <span className="hero-modern__stat-sub">{stat.subtext}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
