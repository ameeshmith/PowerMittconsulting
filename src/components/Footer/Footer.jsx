import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container--wide">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand-col">
            <div className="footer__brand">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#0E352E" stroke="rgba(163,216,20,0.3)" strokeWidth="1"/>
                <path d="M8 22L16 8L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H20" stroke="#A3D814" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="12" r="2" fill="#A3D814"/>
              </svg>
              <span>POWERMITT CONSULTING</span>
            </div>
            <p className="footer__tagline">
              Powering Sustainable Industry Through Engineering Excellence
            </p>
            <div className="footer__contact-info">
              <a href="tel:+61409346958" className="footer__contact-item">
                <Phone size={14} />
                +61 409 346 958
              </a>
              <a href="mailto:dmithanthaya@gmail.com" className="footer__contact-item">
                <Mail size={14} />
                dmithanthaya@gmail.com
              </a>
              <span className="footer__contact-item">
                <MapPin size={14} />
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
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects & Experience</Link></li>
              <li><Link to="/insights">Engineering Insights</Link></li>
              <li><Link to="/energy-transition">Energy Transition</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} PowerMitt Consulting Pty Ltd. All rights reserved.</p>
          <p>ABN pending</p>
        </div>
      </div>
    </footer>
  );
}
