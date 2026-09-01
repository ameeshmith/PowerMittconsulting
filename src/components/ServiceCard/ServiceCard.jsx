import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Factory, HardHat, Shield } from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  Zap, Sun, Factory, HardHat, Shield
};

// Map each service to either green (energy transition/sustainability) or blue (power systems/mining)
const sectorThemeMap = {
  'power-systems': 'blue',
  'energy-transition': 'green',
  'carbon-capture': 'green',
  'industrial-infrastructure': 'blue',
  'owners-engineering': 'blue'
};

export default function ServiceCard({ number, title, description, capabilities, icon, slug }) {
  const Icon = iconMap[icon] || Zap;
  const serviceKey = slug?.split('/services/')[1] || 'power-systems';
  const sectorTheme = sectorThemeMap[serviceKey] || (icon === 'Sun' || icon === 'Factory' ? 'green' : 'blue');

  return (
    <Link to={slug} className={`service-card service-card--${sectorTheme}`}>
      <div className="service-card__top">
        <div className={`service-card__icon-wrap service-card__icon-wrap--${sectorTheme}`}>
          <Icon size={22} />
        </div>
        {number && <span className="service-card__number">{number}</span>}
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{description}</p>
        
        {capabilities && capabilities.length > 0 && (
          <ul className={`service-card__caps service-card__caps--${sectorTheme}`}>
            {capabilities.slice(0, 4).map((cap, i) => (
              <li key={i}>{cap}</li>
            ))}
          </ul>
        )}

        <span className={`service-card__link service-card__link--${sectorTheme}`}>
          Explore Capabilities <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
