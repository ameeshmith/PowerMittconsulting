import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
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
      />

      <section className="services-overview">
        <div className="container">
          <div className="services-overview__intro">
            <p>
              PowerMitt provides specialist engineering services across five core areas, supporting clients in the resources, energy, oil and gas, and industrial sectors. Our services span the full project lifecycle — from early concept studies through to detailed design, commissioning support, and operational engineering.
            </p>
          </div>
          <div className="services-overview__grid">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                number={s.number}
                title={s.title}
                description={s.description}
                capabilities={s.capabilities}
                icon={s.icon}
                slug={s.slug}
                bgImage={s.bgImage}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Specialist Engineering Support?"
        subtitle="Talk to us about your project requirements."
      />
    </main>
  );
}
