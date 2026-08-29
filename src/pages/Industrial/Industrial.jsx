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

const ind = industries.find(i => i.id === 'industrial');
const relatedServices = services.filter(s => ind.relatedServices.includes(s.id));

export default function Industrial() {
  return (
    <main>
      <SEO title="Industrial Infrastructure Engineering | PowerMitt Consulting" description="Electrical infrastructure engineering for manufacturing, water treatment, heavy industry, and critical infrastructure — delivering reliable, efficient power systems." path="/industries/industrial" />
      <Hero variant="industry" bgImage="/assets/images/industrial-bg.jpg" label="Industries / Industrial Infrastructure" title="Industrial Infrastructure" subtitle="Electrical infrastructure engineering for manufacturing, water treatment, heavy industry, and critical infrastructure projects — focused on reliability, efficiency, and modernisation." />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Industry Overview</span>
              <h2>Electrical Infrastructure for Industry</h2>
              <hr className="divider" />
              <p>Industrial infrastructure projects — from manufacturing facilities and water treatment plants to heavy industrial operations — require reliable, well-designed electrical power systems. As operational demands increase and sustainability requirements tighten, many facilities face the dual challenge of modernising ageing infrastructure while improving energy efficiency.</p>
              <p>PowerMitt provides electrical infrastructure engineering for industrial clients, supporting projects ranging from new-build facility design through to infrastructure upgrades, capacity augmentation, and energy efficiency improvements.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Industrial Sectors</h4>
              <ul>
                <li>Manufacturing facilities</li>
                <li>Water & wastewater treatment</li>
                <li>Heavy industrial operations</li>
                <li>Critical infrastructure</li>
                <li>Food & beverage processing</li>
                <li>Port and logistics infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Challenges" title="Industrial Infrastructure Challenges" />
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
          <SectionHeader label="Relevant Services" title="How PowerMitt Supports Industrial Projects" light />
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
          <SectionHeader label="Technologies" title="Industrial Electrical Technologies" />
          <div className="industry-detail__techs">
            {ind.technologies.map((t, i) => <span key={i} className="industry-detail__tech-tag">{t}</span>)}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <SectionHeader label="Engineering Lifecycle" title="Full Project Lifecycle Support" align="center" />
            <Timeline stages={engineeringLifecycle} />
          </div>
        </div>
      </section>

      <CTABanner title="Have an Industrial Project?" subtitle="Talk to us about your infrastructure engineering requirements." />
    </main>
  );
}
