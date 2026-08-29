import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Factory, HardHat, Shield } from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  Zap, Sun, Factory, HardHat, Shield
};

export default function ServiceCard({ number, title, description, capabilities, icon, slug, bgImage, variant = 'default' }) {
  const Icon = iconMap[icon] || Zap;

  return (
    <Link
      to={slug}
      className={`service-card service-card--${variant} ${bgImage ? 'service-card--has-bg' : ''}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {bgImage && <div className="service-card__overlay" />}
      <div className="service-card__content">
        <div className="service-card__header">
          <div className="service-card__icon-wrap">
            <Icon size={24} />
          </div>
          {number && <span className="service-card__number">{number}</span>}
        </div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{description}</p>
        {capabilities && capabilities.length > 0 && (
          <ul className="service-card__caps">
            {capabilities.slice(0, 4).map((cap, i) => (
              <li key={i}>{cap}</li>
            ))}
          </ul>
        )}
        <span className="service-card__link">
          Learn More <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
