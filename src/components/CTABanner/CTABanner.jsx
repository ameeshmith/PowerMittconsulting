import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CTABanner.css';

export default function CTABanner({
  badge = "Get In Touch",
  title = (
    <>
      Ready to De-Risk <br />
      Your Electrical Infrastructure?
    </>
  ),
  subtitle = "Connect directly with Principal Power Engineer Dinesh Mithanthaya and the PowerMitt team for independent engineering and connection advisory.",
  buttonText = 'Start a conversation',
  buttonLink = '/contact',
  variant = 'default'
}) {
  return (
    <section className={`cta-banner cta-banner--${variant}`}>
      <div className="cta-banner__glow cta-banner__glow--left" aria-hidden="true" />
      <div className="cta-banner__glow cta-banner__glow--right" aria-hidden="true" />
      <div className="grid_bg cta-banner__grid" aria-hidden="true" />

      <div className="cta-banner__inner container">
        {badge && (
          <div className="cta-banner__badge">
            <span className="cta-banner__badge-dot" />
            <span>{badge}</span>
          </div>
        )}
        <h2 className="cta-banner__title font-display">{title}</h2>
        <p className="cta-banner__subtitle">{subtitle}</p>
        <Link to={buttonLink} className="cta-banner__btn">
          {buttonText}
          <ArrowRight size={16} className="cta-banner__btn-arrow" />
        </Link>
      </div>
    </section>
  );
}
