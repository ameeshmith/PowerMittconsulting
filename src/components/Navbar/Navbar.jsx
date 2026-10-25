import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { getAssetUrl } from '../../utils/assetPath';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on page navigation
  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === '/' || location.pathname === '';
  const isLight = !isHome || scrolled;

  return (
    <header className={`navbar-modern ${isLight ? 'navbar-modern--light' : ''} ${scrolled ? 'navbar-modern--scrolled' : ''} ${mobileOpen ? 'navbar-modern--open' : ''}`}>
      <div className="navbar-modern__container">
        {/* Brand — Dynamic Logo for Hero vs Scrolled Light Navbar */}
        <Link to="/" className="navbar-modern__brand" onClick={() => setMobileOpen(false)} aria-label="PowerMitt Consulting Home">
          <img
            src={getAssetUrl('/assets/images/logo-light.png')}
            alt="PowerMitt Consulting"
            className="navbar-modern__logo navbar-modern__logo--light"
            height="44"
          />
          <img
            src={getAssetUrl('/assets/images/logo-dark.png')}
            alt="PowerMitt Consulting"
            className="navbar-modern__logo navbar-modern__logo--dark"
            height="44"
          />
        </Link>

        {/* Center Nav Links — Direct Links, Clean & Minimal */}
        <nav className="navbar-modern__nav" role="navigation" aria-label="Main navigation">
          {navigation.links.map((link) => (
            <div key={link.label} className="navbar-modern__item">
              <Link
                to={link.path}
                className={`navbar-modern__link ${isActive(link.path) ? 'navbar-modern__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="navbar-modern__actions">
          <Link to="/contact" className="navbar-modern__cta-btn">
            Let's Discuss
          </Link>

          <button
            type="button"
            className="navbar-modern__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="navbar-modern__mobile-drawer">
          <div className="navbar-modern__mobile-nav">
            {navigation.links.map((link) => (
              <div key={link.label} className="navbar-modern__mobile-item">
                <Link
                  to={link.path}
                  className={`navbar-modern__mobile-link ${isActive(link.path) ? 'navbar-modern__mobile-link--active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <div className="navbar-modern__mobile-cta-wrap">
              <Link
                to="/contact"
                className="navbar-modern__mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Let's Discuss <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


