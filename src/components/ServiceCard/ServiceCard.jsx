import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Factory, HardHat, Shield } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './ServiceCard.css';

const iconMap = {
  Zap, Sun, Factory, HardHat, Shield
};

export default function ServiceCard({ number, title, description, capabilities, icon, slug, bgImage, variant = 'default' }) {
  const Icon = iconMap[icon] || Zap;
  const imageUrl = getAssetUrl(bgImage);

  return (
    <Link
      to={slug}
      className={`service-card service-card--${variant} ${imageUrl ? 'service-card--has-bg' : ''}`}
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      {imageUrl && <div className="service-card__overlay" />}
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
