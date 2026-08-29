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
      <SEO title="Energy & Utilities Engineering | PowerMitt Consulting" description="Engineering for renewable generation, battery storage, grid connections, transmission, distribution, and utility infrastructure supporting the energy transition." path="/industries/energy-utilities" />
      <Hero variant="industry" bgImage="/assets/images/renewable-bess-bg.jpg" label="Industries / Energy & Utilities" title="Energy & Utilities" subtitle="Engineering for renewable generation, battery energy storage, grid connections, and utility infrastructure — supporting the transition to a lower-carbon energy system." />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label label--teal">Industry Overview</span>
              <h2>Engineering for the Energy Sector</h2>
              <hr className="divider" />
              <p>The energy and utilities sector is undergoing fundamental transformation. The integration of large-scale renewable generation, battery energy storage, and distributed energy resources is creating new engineering challenges across the electricity grid — from generation through transmission and distribution to end use.</p>
              <p>PowerMitt provides electrical engineering services for energy and utility clients, with particular expertise in grid connection, renewable integration, BESS, and the technical challenges of connecting new generation and storage assets to the electricity network.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Energy Sectors</h4>
              <ul>
                <li>Renewable generation</li>
                <li>Battery energy storage</li>
                <li>Transmission networks</li>
                <li>Distribution networks</li>
                <li>Hybrid energy systems</li>
                <li>Grid connections</li>
              </ul>
            </div>
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
