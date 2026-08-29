import './SectionHeader.css';

export default function SectionHeader({ label, title, subtitle, align = 'left', light = false }) {
  return (
    <div className={`section-header section-header--${align} ${light ? 'section-header--light' : ''}`}>
      {label && <span className="label">{label}</span>}
      <h2 className="section-header__title">{title}</h2>
      <hr className="divider" />
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}
