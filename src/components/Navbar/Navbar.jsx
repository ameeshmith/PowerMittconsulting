import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { getAssetUrl } from '../../utils/assetPath';
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

  const handleItemFocus = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleItemBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActiveDropdown(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setActiveDropdown(null);
      const parentLink = e.currentTarget.querySelector('.navbar-modern__link');
      parentLink?.focus();
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isExactActive = (path) => location.pathname === path;

  return (
    <header className={`navbar-modern ${scrolled ? 'navbar-modern--scrolled' : ''} ${mobileOpen ? 'navbar-modern--open' : ''}`}>
      <div className="navbar-modern__container">
        {/* Brand */}
        <Link to="/" className="navbar-modern__brand" onClick={() => setMobileOpen(false)} aria-label="PowerMitt Consulting Home">
          <img
            src={getAssetUrl(scrolled || mobileOpen ? '/assets/images/logo-dark.png' : '/assets/images/logo-light.png')}
            alt="PowerMitt Consulting"
            className="navbar-modern__logo"
            height="44"
          />
        </Link>

        {/* Center Nav Links */}
        <nav className="navbar-modern__nav" role="navigation" aria-label="Main navigation">
          {navigation.links.map((link) => (
            <div
              key={link.label}
              className="navbar-modern__item"
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={() => link.dropdown && handleMouseLeave()}
              onFocus={() => link.dropdown && handleItemFocus(link.label)}
              onBlur={link.dropdown ? handleItemBlur : undefined}
              onKeyDown={link.dropdown ? handleKeyDown : undefined}
            >
              <Link
                to={link.path}
                className={`navbar-modern__link ${isActive(link.path) ? 'navbar-modern__link--active' : ''}`}
                aria-haspopup={link.dropdown ? 'true' : undefined}
                aria-expanded={link.dropdown ? activeDropdown === link.label : undefined}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={13}
                    className={`navbar-modern__chevron ${activeDropdown === link.label ? 'navbar-modern__chevron--open' : ''}`}
                    aria-hidden="true"
                  />
                )}
              </Link>

              {link.dropdown && activeDropdown === link.label && (
                <div
                  className="navbar-modern__dropdown"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                  aria-label={`${link.label} submenu`}
                >
                  <div className="navbar-modern__dropdown-menu">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        role="menuitem"
                        className={`navbar-modern__dropdown-item ${isExactActive(item.path) ? 'navbar-modern__dropdown-item--active' : ''}`}
                        onClick={() => setActiveDropdown(null)}
                      >
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
            LET'S DISCUSS
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
                          className={`navbar-modern__mobile-sublink ${isExactActive(sub.path) ? 'navbar-modern__mobile-sublink--active' : ''}`}
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

