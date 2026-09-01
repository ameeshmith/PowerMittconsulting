import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import CTABanner from '../../components/CTABanner/CTABanner';
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
        label="Our Services"
        title="Specialist Engineering Services for Complex Energy & Industrial Projects"
        subtitle="From power system studies and renewable integration to carbon capture engineering and independent technical advisory — we provide the expertise complex projects demand."
        bgImage="/assets/images/power-systems-bg.jpg"
      />

      <section className="services-section">
        <div className="container">
          <SectionHeader
            label="Specialist Capabilities"
            title="End-to-End Engineering Across Project Lifecycle"
            subtitle="Supporting clients across resources, energy, utilities, and heavy industrial facilities."
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
        title="Need Specialist Engineering Support?"
        subtitle="Talk to our principal power engineers about your technical requirements."
        buttonText="Contact PowerMitt"
        buttonLink="/contact"
      />
    </main>
  );
}
