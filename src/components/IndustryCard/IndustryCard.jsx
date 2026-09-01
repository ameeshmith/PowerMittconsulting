import { Link } from 'react-router-dom';
import { ArrowRight, Flame, HardHat, Zap, Factory } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './IndustryCard.css';

const iconComponents = {
  'oil-gas': Flame,
  'mining-resources': HardHat,
  'energy-utilities': Zap,
  'industrial': Factory,
};

export default function IndustryCard({ id, title, description, slug, capabilities, bgImage }) {
  const imageUrl = getAssetUrl(bgImage);
  const Icon = (id && iconComponents[id]) ? iconComponents[id] : Zap;

  return (
    <Link to={slug} className="industry-card">
      {imageUrl && (
        <div className="industry-card__image-wrap">
          <img src={imageUrl} alt={title} className="industry-card__img" />
          <div className="industry-card__overlay" />
          <div className="industry-card__badge-icon">
            <Icon size={18} />
          </div>
        </div>
      )}

      <div className="industry-card__body">
        <h3 className="industry-card__title">{title}</h3>
        <p className="industry-card__desc">{description}</p>

        {capabilities && (
          <div className="industry-card__tags">
            {capabilities.slice(0, 3).map((c, i) => (
              <span key={i} className="industry-card__tag">{c}</span>
            ))}
          </div>
        )}

        <span className="industry-card__link">
          Explore Industry <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
