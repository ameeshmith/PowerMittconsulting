import './TechnicalGrid.css';

export default function TechnicalGrid({ variant = 'default' }) {
  return (
    <div className={`tech-grid tech-grid--${variant}`} aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`techPattern-${variant}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Grid lines */}
            <path d="M0 50h100M50 0v100" stroke="currentColor" strokeWidth="0.3" opacity="0.07" />
            {/* Cross nodes */}
            <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.08" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.05" />
            <circle cx="100" cy="0" r="1.5" fill="currentColor" opacity="0.05" />
            <circle cx="0" cy="100" r="1.5" fill="currentColor" opacity="0.05" />
            <circle cx="100" cy="100" r="1.5" fill="currentColor" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#techPattern-${variant})`} />
      </svg>
    </div>
  );
}
