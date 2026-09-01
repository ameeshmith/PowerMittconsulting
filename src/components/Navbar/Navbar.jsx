import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({ Services: true });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer and reset scroll on page navigation
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
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

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleMobileSub = (label) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`navbar-modern ${scrolled ? 'navbar-modern--scrolled' : ''}`}>
      <div className="navbar-modern__container">
        {/* Brand */}
        <Link to="/" className="navbar-modern__brand" onClick={() => setMobileOpen(false)}>
          <span className="navbar-modern__brand-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#brand-grad)" />
              <defs>
                <linearGradient id="brand-grad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00E5FF" />
                  <stop offset="1" stopColor="#00C9A7" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="navbar-modern__brand-text">
            <span className="navbar-modern__brand-name">POWERMITT</span>
            <span className="navbar-modern__brand-sub">ENGINEERING CONSULTANCY</span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="navbar-modern__nav" role="navigation" aria-label="Main navigation">
          {navigation.links.map((link) => (
            <div
              key={link.label}
              className="navbar-modern__item"
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={() => link.dropdown && handleMouseLeave()}
            >
              <Link
                to={link.path}
                className={`navbar-modern__link ${isActive(link.path) ? 'navbar-modern__link--active' : ''}`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={13}
                    className={`navbar-modern__chevron ${activeDropdown === link.label ? 'navbar-modern__chevron--open' : ''}`}
                  />
                )}
              </Link>

              {link.dropdown && activeDropdown === link.label && (
                <div
                  className="navbar-modern__dropdown"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="navbar-modern__dropdown-menu">
                    {link.dropdown.map((item) => (
                      <Link key={item.path} to={item.path} className="navbar-modern__dropdown-item">
                        <span className="navbar-modern__dropdown-title">{item.label}</span>
                        <span className="navbar-modern__dropdown-desc">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="navbar-modern__actions">
          <Link to="/contact" className="navbar-modern__cta-btn">
            Get a Quote
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
            {navigation.links.map((link) => {
              const hasDropdown = link.dropdown && link.dropdown.length > 0;
              const isSubExpanded = mobileExpanded[link.label] ?? false;

              return (
                <div key={link.label} className="navbar-modern__mobile-item">
                  <div className="navbar-modern__mobile-header-row">
                    <Link
                      to={link.path}
                      className={`navbar-modern__mobile-link ${isActive(link.path) ? 'navbar-modern__mobile-link--active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {hasDropdown && (
                      <button
                        type="button"
                        className="navbar-modern__mobile-expand-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileSub(link.label);
                        }}
                        aria-label={`Toggle ${link.label} submenu`}
                      >
                        <ChevronDown
                          size={18}
                          className={`navbar-modern__mobile-chevron ${isSubExpanded ? 'navbar-modern__mobile-chevron--open' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasDropdown && isSubExpanded && (
                    <div className="navbar-modern__mobile-sub">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`navbar-modern__mobile-sublink ${isActive(sub.path) ? 'navbar-modern__mobile-sublink--active' : ''}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="navbar-modern__mobile-sub-title">{sub.label}</span>
                          {sub.description && (
                            <span className="navbar-modern__mobile-sub-desc">{sub.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="navbar-modern__mobile-cta-wrap">
              <Link
                to="/contact"
                className="navbar-modern__mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

