import './SectionHeader.css';

export default function SectionHeader({ label, title, subtitle, align = 'left', light = false, greenDot = false }) {
  return (
    <div className={`section-header section-header--${align} ${light ? 'section-header--light' : ''}`}>
      {label && (
        <span className={`section-header__badge ${greenDot ? 'section-header__badge--green' : ''}`}>
          <span className="section-header__dot" />
          <span>{label}</span>
        </span>
      )}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}
