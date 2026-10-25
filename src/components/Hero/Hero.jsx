import { useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import InteractiveGridCanvas from '../UI/InteractiveGridCanvas';
import NebulaHeroCanvas from '../UI/NebulaHeroCanvas';
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
  variant = 'default',
  useNebula
}) {
  const badgeText = badge || label;
  const isCompact = variant === 'compact' || variant === 'service' || variant === 'industry';
  const hasNebula = useNebula === true;
  const defaultBg = isCompact ? '/assets/images/hero-about.jpg' : '/assets/images/hero-modern-skyline.jpg';
  const imageUrl = getAssetUrl(bgImage || defaultBg);
  const heroRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty('--hero-mouse-x', `${x}px`);
    heroRef.current.style.setProperty('--hero-mouse-y', `${y}px`);
  }, []);

  // Track global cursor coordinates for ambient spotlight follower
  useEffect(() => {
    if (hasNebula) return;
    const handleGlobalMouseMove = (e) => {
      document.documentElement.style.setProperty('--global-mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--global-mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [hasNebula]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className={`hero-modern ${isCompact ? 'hero-modern--compact' : 'hero-modern--editorial'} ${hasNebula ? 'hero-modern--nebula' : ''}`}
      style={hasNebula ? { backgroundColor: '#09090b' } : { backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dynamic Background: WebGL Nebula on Landing Page, Interactive Grid on other pages */}
      {hasNebula ? (
        <NebulaHeroCanvas />
      ) : (
        <>
          <InteractiveGridCanvas />
          <div className="hero-modern__cursor-spotlight" aria-hidden="true" />
          <div className="grid_bg hero-modern__grid" />
          <div className="hero-modern__overlay" />
        </>
      )}

      <div className="container hero-modern__container">
        <div className="hero-modern__center-wrap">
          <h1 className="hero-modern__title">
            {title || (
              <>
                WHERE POWER <br />
                <span className="hero-modern__serif-accent">meets precision.</span>
              </>
            )}
          </h1>

          {/* Sequence Item 3: Statistics bar directly below title with no big gaps */}
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

          {/* Sequence Item 4: Subtitle & Action buttons on the right */}
          {(subtitle || primaryCTA || secondaryCTA) && (
            <div className="hero-modern__bottom-row">
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
            </div>
          )}

          {/* Founder Authority Note if requested */}
          {showFounderNote && (
            <div className="hero-modern__founder-card">
              <div className="hero-modern__founder-icon">
                <UserCheck size={22} className="text-[#38BDF8]" />
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
      </div>
    </section>
  );
}
