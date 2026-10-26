import { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './ProjectCard.css';

// Minimalist isometric / schematic line-art drawings matching technical styling
function SchematicIllustration({ type }) {
  switch (type) {
    case 'ccs':
      return (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="42" width="36" height="34" rx="2" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5" />
          <path d="M25 42L43 30L61 42" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <rect x="70" y="24" width="18" height="52" rx="4" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.5"/>
          <line x1="70" y1="36" x2="88" y2="36" stroke="var(--color-midnight, #0B192C)" strokeWidth="1"/>
          <line x1="70" y1="48" x2="88" y2="48" stroke="var(--color-midnight, #0B192C)" strokeWidth="1"/>
          <line x1="70" y1="60" x2="88" y2="60" stroke="var(--color-midnight, #0B192C)" strokeWidth="1"/>
          <path d="M61 58H70" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <path d="M88 40H100V76" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.2" strokeDasharray="3 3"/>
          <line x1="12" y1="76" x2="108" y2="76" stroke="var(--color-border, #E2E8F0)" strokeWidth="2"/>
        </svg>
      );
    case 'substation':
      return (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 76L46 22L62 76" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.5"/>
          <line x1="36" y1="52" x2="56" y2="52" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <line x1="32" y1="66" x2="60" y2="66" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <line x1="46" y1="22" x2="46" y2="76" stroke="var(--color-midnight, #0B192C)" strokeWidth="1"/>
          <rect x="74" y="44" width="28" height="32" rx="2" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <circle cx="82" cy="38" r="4" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.2"/>
          <circle cx="94" cy="38" r="4" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.2"/>
          <line x1="12" y1="76" x2="108" y2="76" stroke="var(--color-border, #E2E8F0)" strokeWidth="2"/>
        </svg>
      );
    case 'bess':
      return (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="38" width="32" height="38" rx="2" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.5"/>
          <line x1="22" y1="50" x2="54" y2="50" stroke="var(--color-border, #E2E8F0)" strokeWidth="1"/>
          <path d="M34 58H42M38 54V62" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <rect x="62" y="38" width="32" height="38" rx="2" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.5"/>
          <line x1="62" y1="50" x2="94" y2="50" stroke="var(--color-border, #E2E8F0)" strokeWidth="1"/>
          <path d="M74 58H82" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <line x1="54" y1="68" x2="62" y2="68" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <line x1="12" y1="76" x2="108" y2="76" stroke="var(--color-border, #E2E8F0)" strokeWidth="2"/>
        </svg>
      );
    default:
      return (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="36" width="30" height="40" rx="2" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.5"/>
          <polygon points="24,36 39,26 54,36" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5" fill="none"/>
          <rect x="62" y="24" width="14" height="52" rx="2" stroke="var(--color-midnight, #0B192C)" strokeWidth="1.5"/>
          <rect x="82" y="44" width="18" height="32" rx="2" stroke="var(--color-accent, #0066FF)" strokeWidth="1.5"/>
          <line x1="12" y1="76" x2="108" y2="76" stroke="var(--color-border, #E2E8F0)" strokeWidth="2"/>
        </svg>
      );
  }
}

export default function ProjectCard({ 
  title, 
  category = 'industrial', 
  industry, 
  location, 
  service, 
  description,
  fullText,
  highlights,
  stage, 
  schematicType,
  image
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="project-card">
      {image ? (
        <div className="project-card__media">
          <img
            src={getAssetUrl(image)}
            alt={title}
            className="project-card__img"
            loading="lazy"
            decoding="async"
          />
          <div className="project-card__media-overlay" />
          <span className="project-card__badge-on-media">{industry || 'Engineering'}</span>
        </div>
      ) : (
        <div className="project-card__schematic">
          <SchematicIllustration type={schematicType || category} />
        </div>
      )}

      <div className="project-card__body">
        {!image && (
          <div className="project-card__meta">
            <span className="project-card__badge">{industry || 'Engineering'}</span>
          </div>
        )}

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {highlights && highlights.length > 0 && (
          <div className="project-card__highlights">
            <span className="project-card__highlights-title">Key Scope & Engineering Deliverables:</span>
            <ul className="project-card__highlights-list">
              {highlights.map((h, i) => (
                <li key={i} className="project-card__highlight-item">
                  <CheckCircle2 size={14} className="project-card__check-icon" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {fullText && (
          <div className="project-card__expandable">
            <button
              type="button"
              className="project-card__expand-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Hide Detailed Advisory Scope' : 'Read Full Engineering Scope'}</span>
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {isExpanded && (
              <div className="project-card__full-text">
                <p>{fullText}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
