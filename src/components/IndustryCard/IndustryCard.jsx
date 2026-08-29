import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './IndustryCard.css';

export default function IndustryCard({ title, description, slug, capabilities, icon, bgImage }) {
  const imageUrl = getAssetUrl(bgImage);

  return (
    <Link to={slug} className="industry-card">
      {imageUrl && (
        <div className="industry-card__image-banner">
          <img src={imageUrl} alt={title} className="industry-card__img" />
          <div className="industry-card__img-overlay" />
          <div className="industry-card__icon" aria-hidden="true">
            {icon}
          </div>
        </div>
      )}
      <div className="industry-card__body">
        {!imageUrl && (
          <div className="industry-card__icon" aria-hidden="true">
            {icon}
          </div>
        )}
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
