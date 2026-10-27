import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import CTABanner from '../../components/CTABanner/CTABanner';
import { industries } from '../../data/industries';
import { getAssetUrl } from '../../utils/assetPath';
import './Industries.css';

const sectorNumberMap = {
  'oil-gas': '01',
  'mining-resources': '02',
  'energy-utilities': '03',
  'industrial': '04'
};

const sectorTagMap = {
  'oil-gas': 'OFFSHORE // OIL & GAS',
  'mining-resources': 'MINING // RESOURCES',
  'energy-utilities': 'UTILITIES // GRID',
  'industrial': 'HEAVY INFRASTRUCTURE'
};

export default function Industries() {
  return (
    <main className="industries-soe-page">
      <SEO
        title="Industries We Serve | PowerMitt Consulting"
        description="Specialist electrical power system and energy engineering for oil & gas, mining & resources, energy & utilities, and industrial infrastructure sectors."
        path="/industries"
        image="/assets/images/industries-hero.jpg"
      />

      <section className="industries-soe-section" id="industries-portfolio" aria-label="Industries We Serve">
        {/* Subtly visible industrial background image behind the entire section and cards */}
        <div 
          className="industries-soe-bg"
          style={{
            backgroundImage: `url(${getAssetUrl('/assets/images/industries-hero.jpg')})`
          }}
          aria-hidden="true"
        />
        <div className="industries-soe-bg-overlay" aria-hidden="true" />

        <div className="container relative z-10">
          <div className="industries-soe-header">
            <span className="industries-soe-label">Critical Sectors</span>
            <h1 className="industries-soe-title">Engineering for Demanding Heavy Sectors</h1>
            <p className="industries-soe-subtitle">
              Specialist electrical power systems and energy engineering expertise tailored for the resources, energy transition, oil & gas, and heavy infrastructure sectors across Australia.
            </p>
          </div>

          <div className="industries-soe-grid" role="list">
            {industries.map((ind) => (
              <Link 
                key={ind.id} 
                to={ind.slug} 
                className="industries-soe-card group"
                role="listitem"
                aria-label={`Explore ${ind.title}`}
              >
                <div className="industries-soe-card__media">
                  <img 
                    src={getAssetUrl(ind.bgImage)} 
                    alt={ind.title}
                    className="industries-soe-card__img"
                    loading="lazy"
                  />
                  <div className="industries-soe-card__overlay" />
                </div>

                <div className="industries-soe-card__content">
                  <div className="industries-soe-card__top">
                    <span className="industries-soe-card__num">{sectorNumberMap[ind.id] || '01'}</span>
                    <span className="industries-soe-card__tag">{sectorTagMap[ind.id] || ind.title.toUpperCase()}</span>
                  </div>
                  <h2 className="industries-soe-card__title">{ind.title}</h2>
                  <p className="industries-soe-card__desc">{ind.shortDescription}</p>
                  <div className="industries-soe-card__link">
                    <span>Explore Sector</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="De-Risk Your Sector Infrastructure"
        subtitle="Connect directly with our engineering team to review power system compliance, reliability, and decarbonisation strategies."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </main>
  );
}
