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
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${mobileOpen ? 'navbar--mobile-open' : ''}`} ref={navRef}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#0E352E" stroke="rgba(163,216,20,0.3)" strokeWidth="1"/>
              <path d="M8 22L16 8L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17H20" stroke="#A3D814" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="12" r="2" fill="#A3D814"/>
            </svg>
          </span>
          <span className="navbar__brand-text">{navigation.brand}</span>
        </Link>

        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          {navigation.links.map((link) => (
            <div
              key={link.label}
              className={`navbar__item ${link.dropdown ? 'navbar__item--has-dropdown' : ''}`}
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={() => link.dropdown && handleMouseLeave()}
            >
              <Link
                to={link.path}
                className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} className={`navbar__chevron ${activeDropdown === link.label ? 'navbar__chevron--open' : ''}`} />}
              </Link>
              {link.dropdown && activeDropdown === link.label && (
                <div className="navbar__dropdown" onMouseEnter={() => handleMouseEnter(link.label)} onMouseLeave={handleMouseLeave}>
                  <div className="navbar__dropdown-inner">
                    {link.dropdown.map((item) => (
                      <Link key={item.path} to={item.path} className="navbar__dropdown-item">
                        <span className="navbar__dropdown-label">{item.label}</span>
                        <span className="navbar__dropdown-desc">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link to={navigation.cta.path} className="navbar__cta btn btn--primary">
          {navigation.cta.label}
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="navbar__hamburger"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          {navigation.links.map((link) => (
            <div key={link.label} className="navbar__mobile-group">
              <Link
                to={link.path}
                className="navbar__mobile-link"
                onClick={() => !link.dropdown && setMobileOpen(false)}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`navbar__chevron ${activeDropdown === link.label ? 'navbar__chevron--open' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === link.label ? null : link.label);
                    }}
                  />
                )}
              </Link>
              {link.dropdown && activeDropdown === link.label && (
                <div className="navbar__mobile-dropdown">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="navbar__mobile-sublink"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to={navigation.cta.path}
            className="navbar__mobile-cta btn btn--primary btn--large"
            onClick={() => setMobileOpen(false)}
          >
            {navigation.cta.label}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
