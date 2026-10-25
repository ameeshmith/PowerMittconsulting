import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Timeline from '../../components/Timeline/Timeline';
import CTABanner from '../../components/CTABanner/CTABanner';
import { industries } from '../../data/industries';
import { services, engineeringLifecycle } from '../../data/services';
import '../IndustryDetail.css';

const ind = industries.find(i => i.id === 'oil-gas');
const relatedServices = services.filter(s => ind.relatedServices.includes(s.id));

export default function OilGas() {
  return (
    <main>
      <SEO title="Oil & Gas Engineering | PowerMitt Consulting" description="Electrical engineering for offshore facilities, LNG plants, processing facilities, and brownfield modifications in complex and hazardous industrial environments." path="/industries/oil-gas" image="/assets/images/oil-rig-bg.jpg" />
      <Hero
        variant="industry"
        bgImage="/assets/images/oil-rig-bg.jpg"
        label="Industries / Offshore Oil & Gas"
        title="Offshore Oil & Gas"
        subtitle="Practical offshore electrical engineering experience gained through support of major offshore developments and modifications in Australia and internationally — delivering robust, fit-for-purpose solutions."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Offshore Capability</span>
              <h2>Practical Offshore Electrical Engineering</h2>
              <hr className="divider" />
              <p>
                PowerMitt Consulting brings practical offshore electrical engineering experience gained through support of major offshore developments and modifications in Australia and internationally.
              </p>
              <p>
                PowerMitt understands the technical, operational and safety challenges associated with offshore facilities and delivers practical fit-for-purpose solutions that align with project objectives and operational requirements.
              </p>
              <p>
                Recent experience includes engineering support associated with offshore developments including power system integration studies, electrical infrastructure assessments, switchgear and transformer evaluations, utility system optimisation, renewable integration concepts and decarbonisation opportunities.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Offshore Specialisations</h4>
              <ul>
                <li>Normally Unattended Facilities (NUF)</li>
                <li>Offshore processing & utilities</li>
                <li>Brownfield life extension</li>
                <li>Gas compression drives & export</li>
                <li>Power generation & distribution</li>
                <li>RAM improvement initiatives</li>
                <li>Decarbonisation & renewables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offshore Services */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Capabilities" title="Offshore Engineering Services" subtitle="Specialist engineering tailored to the stringent safety and operational requirements of offshore assets." />
          <div className="industry-detail__challenges" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {ind.capabilities.map((cap, i) => (
              <div key={i} className="industry-detail__challenge" style={{ borderLeft: '3px solid var(--color-blue)' }}>
                <p style={{ fontWeight: 600, color: 'var(--color-midnight)', margin: 0 }}>{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Challenges" title="Oil & Gas Electrical Engineering Challenges" />
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
          <SectionHeader label="Relevant Services" title="How PowerMitt Supports Oil & Gas Projects" light />
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
          <SectionHeader label="Technologies" title="Key Technologies" />
          <div className="industry-detail__techs">
            {ind.technologies.map((t, i) => (
              <span key={i} className="industry-detail__tech-tag">{t}</span>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-12)' }}>
            <SectionHeader label="Engineering Lifecycle" title="Full Project Lifecycle Support" align="center" />
            <Timeline stages={engineeringLifecycle} />
          </div>
        </div>
      </section>

      <CTABanner title="Have an Oil & Gas Project?" subtitle="Talk to us about your electrical engineering requirements." />
    </main>
  );
}
