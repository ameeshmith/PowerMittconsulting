import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Timeline from '../../components/Timeline/Timeline';
import CTABanner from '../../components/CTABanner/CTABanner';
import { industries } from '../../data/industries';
import { services, engineeringLifecycle } from '../../data/services';
import '../IndustryDetail.css';

const ind = industries.find(i => i.id === 'energy-utilities');
const relatedServices = services.filter(s => ind.relatedServices.includes(s.id));

export default function EnergyUtilities() {
  return (
    <main>
      <SEO title="Energy & Utilities Engineering | PowerMitt Consulting" description="Engineering for renewable generation, battery storage, grid connections, transmission, distribution, and utility infrastructure supporting the energy transition." path="/industries/energy-utilities" image="/assets/images/renewable-bess-bg.jpg" />
      <Hero
        variant="industry"
        bgImage="/assets/images/renewable-bess-bg.jpg"
        label="Industries / Utility & Power Industry"
        title="Utility & Power Industry"
        subtitle="Decades of leadership across utility, power generation, transmission, distribution, grid management, and renewable integration — concept to commissioning."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label label--teal">Utility Leadership</span>
              <h2>Utility & Power Industry Experience</h2>
              <hr className="divider" />
              <p>
                PowerMitt's leadership team combines several decades of experience across utility, power generation, transmission, distribution, industrial, grid management and renewable energy sectors.
              </p>
              <p>
                The PowerMitt team has successfully supported utility operators, energy developers, mining companies and industrial clients in developing robust and reliable power systems that comply with regulatory and network requirements.
              </p>
              <p>
                <strong>Concept to Commissioning:</strong> Our end-to-end delivery experience spans conventional power generation, renewable energy projects, battery energy storage systems (BESS), microgrids, industrial power systems and large-scale grid-connected infrastructure.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Concept to Commissioning</h4>
              <ul>
                <li>Conventional Power Generation</li>
                <li>Utility-Scale Renewables (Solar & Wind)</li>
                <li>Battery Energy Storage Systems (BESS)</li>
                <li>Microgrids & Islanded Networks</li>
                <li>Transmission & Distribution Grids</li>
                <li>AEMO / WEM Grid Compliance</li>
                <li>EPC Support & Optimised Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Utility Capabilities Grid */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Expertise" title="Key Areas of Expertise" subtitle="Comprehensive power industry and grid compliance capabilities delivering optimised, regulatory-compliant solutions." />
          <div className="industry-detail__challenges" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {ind.capabilities.map((cap, i) => (
              <div key={i} className="industry-detail__challenge" style={{ borderLeft: '3px solid var(--color-green)' }}>
                <p style={{ fontWeight: 600, color: 'var(--color-midnight)', margin: 0 }}>{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Challenges" title="Energy Sector Engineering Challenges" />
          <div className="industry-detail__challenges">
            {ind.challenges.map((c, i) => (
              <div key={i} className="industry-detail__challenge">
                <AlertTriangle size={18} className="industry-detail__challenge-icon" />
                <p>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark">
        <div className="container">
          <SectionHeader label="Relevant Services" title="How PowerMitt Supports Energy Projects" light />
          <div className="industry-detail__services">
            {relatedServices.map(s => (
              <Link key={s.id} to={s.slug} className="industry-detail__service-card">
                <h3>{s.title}</h3>
                <p>{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeader label="Technologies" title="Energy Technologies" />
          <div className="industry-detail__techs">
            {ind.technologies.map((t, i) => <span key={i} className="industry-detail__tech-tag">{t}</span>)}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <SectionHeader label="Engineering Lifecycle" title="Full Project Lifecycle Support" align="center" />
            <Timeline stages={engineeringLifecycle} />
          </div>
        </div>
      </section>

      <CTABanner title="Have an Energy Project?" subtitle="Talk to us about your grid connection or renewable energy requirements." variant="teal" />
    </main>
  );
}
