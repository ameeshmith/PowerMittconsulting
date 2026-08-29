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
      <SEO title="Mining & Resources Engineering | PowerMitt Consulting" description="Power system engineering for surface and underground mining, mineral processing, remote infrastructure electrification, and mining electrical systems." path="/industries/mining-resources" />
      <Hero variant="industry" bgImage="/assets/images/mining-bg.jpg" label="Industries / Mining & Resources" title="Mining & Resources" subtitle="Electrical power system engineering for surface and underground mining operations, mineral processing plants, and remote site infrastructure — focused on reliability, safety, and electrification." />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Industry Overview</span>
              <h2>Power Systems for Mining Operations</h2>
              <hr className="divider" />
              <p>Mining and resources operations demand robust electrical infrastructure capable of powering some of the heaviest industrial loads in existence. From large SAG mills and crushers drawing tens of megawatts to underground mining systems requiring intrinsically safe equipment — the electrical engineering challenges in mining are significant and highly specialised.</p>
              <p>PowerMitt provides electrical power system engineering for mining clients across surface operations, underground mines, and mineral processing plants. We focus on the specific challenges of mining electrical systems: high-power loads, remote locations, harsh environments, and the growing imperative to electrify and decarbonise operations.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Mining Sectors</h4>
              <ul>
                <li>Surface mining operations</li>
                <li>Underground mining</li>
                <li>Mineral processing plants</li>
                <li>Mine site infrastructure</li>
                <li>Remote power supply</li>
                <li>Mining electrification</li>
              </ul>
            </div>
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
