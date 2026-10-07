import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import WordHighlight from '../../components/WordHighlight/WordHighlight';
import { services } from '../../data/services';
import './Services.css';

export default function Services() {
  return (
    <main>
      <SEO
        title="Engineering Services | PowerMitt Consulting"
        description="Specialist electrical power system engineering, energy transition, CCS, industrial infrastructure, and owner's engineering services for complex industrial projects."
        path="/services"
      />

      <Hero
        variant="compact"
        label="Capabilities Portfolio"
        title={
          <>
            SPECIALIST <span className="hero-modern__serif-accent">capabilities</span> <br />
            FOR COMPLEX POWER INFRASTRUCTURE.
          </>
        }
        subtitle="From high-voltage power system studies and renewable grid connection to carbon capture mega-drives and independent owner's engineering advisory across Australia."
        bgImage="/assets/images/power-systems-bg.jpg"
      />

      <section className="services-section">
        <div className="container">
          <SectionHeader
            label="DISCIPLINES & PRACTICES"
            title={
              <>
                END-TO-END <span className="serif-accent">engineering</span> ACROSS ASSET LIFECYCLES
              </>
            }
            subtitle="Specialist engineering advisory supporting clients across heavy industry, mining resources, and utility-scale grids."
          />

          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                number={s.number}
                title={s.title}
                description={s.description}
                capabilities={s.capabilities}
                icon={s.icon}
                slug={s.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            NEED SPECIALIST <br />
            <span className="serif-accent">engineering support?</span>
          </>
        }
        subtitle="Connect directly with our principal engineers to discuss your technical specifications and connection studies."
        buttonText="START A CONVERSATION"
        buttonLink="/contact"
      />
    </main>
  );
}
