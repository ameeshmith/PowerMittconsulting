import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './IndustryCard.css';

export default function IndustryCard({ title, description, slug, capabilities, icon, bgImage }) {
  return (
    <Link
      to={slug}
      className={`industry-card ${bgImage ? 'industry-card--has-bg' : ''}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <div className="industry-card__overlay" />
      <div className="industry-card__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="industry-card__content">
        <h3 className="industry-card__title">{title}</h3>
        <p className="industry-card__desc">{description}</p>
        {capabilities && (
          <ul className="industry-card__caps">
            {capabilities.slice(0, 3).map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        )}
        <span className="industry-card__link">
          Explore <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
