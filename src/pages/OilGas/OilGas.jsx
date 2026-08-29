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
      <SEO title="Oil & Gas Engineering | PowerMitt Consulting" description="Electrical engineering for offshore facilities, LNG plants, processing facilities, and brownfield modifications in complex and hazardous industrial environments." path="/industries/oil-gas" />
      <Hero variant="industry" bgImage="/assets/images/oil-rig-bg.jpg" label="Industries / Oil & Gas" title="Oil & Gas" subtitle="Electrical power system engineering for offshore facilities, LNG plants, onshore processing, and brownfield modifications — delivering reliable solutions in complex, hazardous environments." />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Industry Overview</span>
              <h2>Electrical Engineering for Oil & Gas</h2>
              <hr className="divider" />
              <p>The oil and gas industry operates some of the most complex and demanding electrical power systems in the world. Offshore platforms, LNG facilities, and onshore processing plants require highly reliable power systems that must operate safely in hazardous classified areas.</p>
              <p>PowerMitt provides specialist electrical power system engineering for oil and gas clients, with experience across offshore facilities, LNG plants, gas processing, and brownfield modification projects. We understand the unique challenges of designing and operating electrical systems in these demanding environments.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Sectors</h4>
              <ul>
                <li>Offshore facilities</li>
                <li>LNG plants</li>
                <li>Gas processing</li>
                <li>Onshore production</li>
                <li>Brownfield modifications</li>
                <li>Decommissioning support</li>
              </ul>
            </div>
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
