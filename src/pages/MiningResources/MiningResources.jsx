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

const ind = industries.find(i => i.id === 'mining-resources');
const relatedServices = services.filter(s => ind.relatedServices.includes(s.id));

export default function MiningResources() {
  return (
    <main>
      <SEO title="Mining & Resources Engineering | PowerMitt Consulting" description="Power system engineering for surface and underground mining, mineral processing, remote infrastructure electrification, and mining electrical systems." path="/industries/mining-resources" image="/assets/images/mining-bg.jpg" />
      <Hero
        variant="industry"
        bgImage="/assets/images/mining-bg.jpg"
        label="Industries / Mining & Resources"
        title="Mining & Resources"
        subtitle="Specialist electrical and infrastructure engineering for greenfield developments and brownfield expansion projects — proven technical leadership supporting major iron ore operations."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Sector Capability</span>
              <h2>Specialist Electrical & Infrastructure Engineering</h2>
              <hr className="divider" />
              <p>
                PowerMitt provides specialist electrical and infrastructure engineering services to the mining and resources sector, supporting both greenfield developments and brownfield expansion projects.
              </p>
              <p>
                Our team has extensive experience supporting major mining clients, including technical advisory, design management, engineering coordination and project delivery support. This includes engineering support for large-scale mining developments, infrastructure upgrades, brownfield modifications, operational improvement projects and stakeholder management activities.
              </p>
              <p>
                <strong>Major Iron Ore Track Record:</strong> Through recent consulting engagements supporting major iron ore operations, our team has delivered design management, technical assurance and engineering coordination services across multiple electrical infrastructure projects, ensuring safe, reliable and efficient project outcomes.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Mining Sectors</h4>
              <ul>
                <li>Major Iron Ore Operations</li>
                <li>Surface Mining Developments</li>
                <li>Underground Mining Systems</li>
                <li>Mineral Processing Plants</li>
                <li>Mine Site Electrification</li>
                <li>HV Submissions & Audits</li>
                <li>Substations & Switchyards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Capabilities Grid */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Capabilities" title="Mining Sector Capabilities" subtitle="Comprehensive electrical engineering spanning mine power system design through to operational assurance." />
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
          <SectionHeader label="Challenges" title="Mining Electrical Engineering Challenges" />
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
          <SectionHeader label="Relevant Services" title="How PowerMitt Supports Mining Projects" light />
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
          <SectionHeader label="Technologies" title="Mining Electrical Technologies" />
          <div className="industry-detail__techs">
            {ind.technologies.map((t, i) => <span key={i} className="industry-detail__tech-tag">{t}</span>)}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <SectionHeader label="Engineering Lifecycle" title="Full Project Lifecycle Support" align="center" />
            <Timeline stages={engineeringLifecycle} />
          </div>
        </div>
      </section>

      <CTABanner title="Have a Mining Project?" subtitle="Talk to us about your mining electrical engineering requirements." />
    </main>
  );
}
