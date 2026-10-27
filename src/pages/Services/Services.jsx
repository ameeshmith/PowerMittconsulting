import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import CTABanner from '../../components/CTABanner/CTABanner';
import { getAssetUrl } from '../../utils/assetPath';
import './Services.css';

const servicesList = [
  {
    num: '01',
    title: 'Electrical Power Systems',
    slug: '/services/power-systems',
    image: '/assets/images/power-systems-bg.jpg'
  },
  {
    num: '02',
    title: 'Renewable Energy & Decarbonisation',
    slug: '/services/energy-transition',
    image: '/assets/images/renewable-bess-bg.jpg'
  },
  {
    num: '03',
    title: 'Carbon Capture & Storage',
    slug: '/services/carbon-capture',
    image: '/assets/images/carbon-capture-bg.jpg'
  },
  {
    num: '04',
    title: 'Industrial & Mining Infrastructure',
    slug: '/services/industrial-infrastructure',
    image: '/assets/images/industrial-bg.jpg'
  },
  {
    num: '05',
    title: "Owner's Engineering & EPC Support",
    slug: '/services/owners-engineering',
    image: '/assets/images/owners-engineering-bg.jpg'
  },
  {
    num: '06',
    title: 'Power System Studies & Modeling',
    slug: '/services/power-systems#power-system-studies',
    image: '/assets/images/hero-nature-energy.jpg'
  }
];

export default function Services() {
  return (
    <main className="services-soe-page">
      <SEO
        title="Engineering Services | PowerMitt Consulting"
        description="Specialist electrical power system engineering, energy transition, CCS, industrial infrastructure, and owner's engineering services for complex industrial projects."
        path="/services"
        image="/assets/images/power-systems-bg.jpg"
      />

      <section className="services-soe-section" id="services-portfolio" aria-label="Our Services">
        {/* Substation background image ("let it be visible but not that much") */}
        <div 
          className="services-soe-bg"
          style={{
            backgroundImage: `url(${getAssetUrl('/assets/images/power-systems-bg.jpg')})`
          }}
          aria-hidden="true"
        />
        <div className="services-soe-bg-overlay" aria-hidden="true" />

        <div className="container relative z-10">
          <div className="services-soe-header">
            <span className="services-soe-label">Capabilities Portfolio</span>
            <h1 className="services-soe-title">Our Services</h1>
            <p className="services-soe-subtitle">
              Specialist electrical engineering advisory supporting clients across heavy industry, mining resources, energy transition, and utility-scale networks.
            </p>
          </div>

          <div className="services-soe-grid" role="list">
            {servicesList.map((service) => (
              <Link 
                key={service.title} 
                to={service.slug} 
                className="services-soe-card group"
                role="listitem"
                aria-label={`Explore ${service.title}`}
              >
                <div className="services-soe-card__media">
                  <img 
                    src={getAssetUrl(service.image)} 
                    alt={service.title}
                    className="services-soe-card__img"
                    loading="lazy"
                  />
                  <div className="services-soe-card__overlay" />
                </div>

                <div className="services-soe-card__content">
                  <span className="services-soe-card__num">{service.num}</span>
                  <h2 className="services-soe-card__title">{service.title}</h2>
                  <div className="services-soe-card__link">
                    <span>Explore Practice</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Specialist Engineering Support?"
        subtitle="Connect directly with our principal engineers to discuss your technical specifications and connection studies."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </main>
  );
}
