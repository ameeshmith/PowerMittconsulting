import './ProjectCard.css';

export default function ProjectCard({ title, industry, location, service, description, technologies, stage, placeholder = false }) {
  if (placeholder) {
    return (
      <div className="project-card project-card--placeholder">
        <div className="project-card__image-placeholder">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="8" fill="rgba(8,126,164,0.08)"/>
            <path d="M14 34L22 24L28 30L34 22" stroke="rgba(8,126,164,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="18" r="3" stroke="rgba(8,126,164,0.3)" strokeWidth="2"/>
          </svg>
        </div>
        <div className="project-card__body">
          <span className="project-card__badge">Coming Soon</span>
          <h3 className="project-card__title">{title || 'Project Experience'}</h3>
          <p className="project-card__desc">
            {description || 'Detailed project case studies and experience will be available here. Check back for updates on our engineering project portfolio.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card">
      <div className="project-card__image-placeholder">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="rgba(8,126,164,0.08)"/>
          <path d="M14 34L22 24L28 30L34 22" stroke="rgba(8,126,164,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="18" r="3" stroke="rgba(8,126,164,0.3)" strokeWidth="2"/>
        </svg>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          {industry && <span className="project-card__tag">{industry}</span>}
          {stage && <span className="project-card__tag project-card__tag--outline">{stage}</span>}
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        {location && <p className="project-card__location">{location}</p>}
        {technologies && technologies.length > 0 && (
          <div className="project-card__techs">
            {technologies.map((t, i) => (
              <span key={i} className="project-card__tech">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
