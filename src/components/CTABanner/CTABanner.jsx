import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CTABanner.css';

export default function CTABanner({
  title = 'Have a Complex Engineering Challenge?',
  subtitle = "Let's discuss how PowerMitt can support your project.",
  buttonText = 'Contact PowerMitt',
  buttonLink = '/contact',
  variant = 'default'
}) {
  return (
    <section className={`cta-banner cta-banner--${variant}`}>
      <div className="cta-banner__pattern" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>
      <div className="cta-banner__inner container">
        <h2 className="cta-banner__title">{title}</h2>
        <p className="cta-banner__subtitle">{subtitle}</p>
        <Link to={buttonLink} className="btn btn--primary btn--large">
          {buttonText}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
