import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Brand */}
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#0066FF" />
            </svg>
          </span>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">POWERMITT</span>
            <span className="navbar__brand-sub">CONSULTING PTY LTD</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          {navigation.links.map((link) => (
            <div
              key={link.label}
              className="navbar__item"
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={() => link.dropdown && handleMouseLeave()}
            >
              <Link
                to={link.path}
                className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={13} className={`navbar__chevron ${activeDropdown === link.label ? 'navbar__chevron--open' : ''}`} />}
              </Link>

              {link.dropdown && activeDropdown === link.label && (
                <div className="navbar__dropdown" onMouseEnter={() => handleMouseEnter(link.label)} onMouseLeave={handleMouseLeave}>
                  <div className="navbar__dropdown-menu">
                    {link.dropdown.map((item) => (
                      <Link key={item.path} to={item.path} className="navbar__dropdown-item">
                        <span className="navbar__dropdown-title">{item.label}</span>
                        <span className="navbar__dropdown-desc">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions (CTA Button) */}
        <div className="navbar__actions">
          <Link to="/contact" className="navbar__cta-btn btn btn--primary">
            Discuss a Project
            <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile-drawer">
          <div className="navbar__mobile-nav">
            {navigation.links.map((link) => (
              <div key={link.label} className="navbar__mobile-item">
                <Link
                  to={link.path}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="navbar__mobile-sub">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="navbar__mobile-sublink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="navbar__mobile-cta btn btn--primary btn--large"
              onClick={() => setMobileOpen(false)}
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
