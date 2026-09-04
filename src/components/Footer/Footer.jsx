import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container container--wide">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand-col">
            <div className="footer__brand">
              <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
                <rect width="34" height="34" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <path d="M19 6L9 19H17L15 28L25 15H17L19 6Z" fill="var(--color-accent)"/>
              </svg>
              <div className="footer__brand-titles">
                <span className="footer__brand-name">POWERMITT</span>
                <span className="footer__brand-desc">CONSULTING PTY LTD</span>
              </div>
            </div>
            <p className="footer__tagline">
              Powering Sustainable Industry Through Engineering Excellence. Specialist electrical power systems & energy transition advisory.
            </p>
            <div className="footer__contact-info">
              <a href="tel:+61409346958" className="footer__contact-item">
                <Phone size={14} className="footer__contact-icon" />
                +61 409 346 958
              </a>
              <a href="mailto:dmithanthaya@gmail.com" className="footer__contact-item">
                <Mail size={14} className="footer__contact-icon" />
                dmithanthaya@gmail.com
              </a>
              <span className="footer__contact-item">
                <MapPin size={14} className="footer__contact-icon" />
                Perth, Western Australia
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li><Link to="/services/power-systems">Electrical Power Systems</Link></li>
              <li><Link to="/services/energy-transition">Renewable Energy & Decarbonisation</Link></li>
              <li><Link to="/services/carbon-capture">Carbon Capture & Storage</Link></li>
              <li><Link to="/services/industrial-infrastructure">Industrial & Mining Infrastructure</Link></li>
              <li><Link to="/services/owners-engineering">Owner's Engineering</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer__col">
            <h4 className="footer__heading">Industries</h4>
            <ul className="footer__links">
              <li><Link to="/industries/oil-gas">Oil & Gas</Link></li>
              <li><Link to="/industries/mining-resources">Mining & Resources</Link></li>
              <li><Link to="/industries/energy-utilities">Energy & Utilities</Link></li>
              <li><Link to="/industries/industrial">Industrial Infrastructure</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects & Experience</Link></li>
              <li><Link to="/insights">Engineering Insights</Link></li>
              <li><Link to="/services/energy-transition">Energy Transition</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} PowerMitt Consulting Pty Ltd. All rights reserved.</p>
          <p className="footer__subtext">Specialist Power Systems Consultancy — Perth, WA</p>
        </div>
      </div>
    </footer>
  );
}
