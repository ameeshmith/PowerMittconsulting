import { useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  // Track global cursor coordinates for whole-page ambient spotlight follower
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

  useEffect(() => {
    if (!hasNebula) return;
    let ticking = false;
    const updateScrollBlend = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      const linear = Math.min(Math.max(scrollY / 180, 0), 1);
      const progress = linear * (2 - linear);
      if (heroRef.current) {
        heroRef.current.style.setProperty('--hero-scroll-blend', progress.toFixed(3));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollBlend);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollBlend();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [hasNebula, isCompact]);

  return (
    <>
      {/* Whole-page photographic image background + mouse tracking constellation for all non-landing pages */}
      {!hasNebula && typeof document !== 'undefined' && createPortal(
        <div className="page-atmospheric-backdrop" aria-hidden="true">
          <div
            className="page-atmospheric-backdrop__image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="page-atmospheric-backdrop__overlay" />
          <div className="grid_bg page-atmospheric-backdrop__grid" />
          <div className="page-atmospheric-backdrop__spotlight" />
          <InteractiveGridCanvas trackGlobalMouse={true} nodeCount={44} />
        </div>,
        document.body
      )}

      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className={`hero-modern ${isCompact ? 'hero-modern--compact' : 'hero-modern--editorial'} ${hasNebula ? 'hero-modern--nebula' : 'hero-modern--has-backdrop'}`}
        style={hasNebula ? { backgroundColor: '#09090b' } : { backgroundColor: 'transparent' }}
      >
        {/* Dynamic Background: WebGL Nebula on Landing Page only */}
        {hasNebula && (
          <>
            <NebulaHeroCanvas />
            <div className="hero-modern__bottom-blend" aria-hidden="true" />
          </>
        )}

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
  </>
);
}
