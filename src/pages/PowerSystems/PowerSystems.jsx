import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

export default function PowerSystems() {
  return (
    <main>
      <SEO
        title="Electrical Power Systems Engineering | PowerMitt Consulting"
        description="Specialist power system engineering including load flow, short circuit, protection coordination, arc flash analysis, HV/LV design, substations, and grid integration."
        path="/services/power-systems"
      />

      <Hero
        variant="service"
        bgImage="/assets/images/power-systems-bg.jpg"
        label="Services / Electrical Power Systems"
        title="Electrical Power Systems Engineering"
        subtitle="Specialist power system engineering for complex industrial and energy projects — from system studies and design through to grid integration and reliability assessment."
      />

      {/* Introduction */}
      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>Power System Engineering Expertise</h2>
              <hr className="divider" />
              <p>
                PowerMitt provides specialist electrical power system engineering services for complex industrial, mining, energy, and infrastructure projects. Our capabilities cover the full spectrum of power system engineering — from early-stage studies and concept development through to detailed design, equipment specification, and commissioning support.
              </p>
              <p>
                We deliver technically rigorous power system analysis and design solutions that address the real challenges of industrial power systems — including high-fault-level networks, large motor loads, complex protection schemes, and grid integration requirements.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Key Technologies</h4>
              <ul>
                <li>HV/LV Switchgear</li>
                <li>Transformers</li>
                <li>Motor Control Centres</li>
                <li>Protection Relays</li>
                <li>SCADA Systems</li>
                <li>Power Quality Equipment</li>
                <li>Generation Systems</li>
                <li>Grid Connection Equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Power System Studies */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="01"
            title="Power System Studies"
            subtitle="Comprehensive power system analysis to inform design, verify performance, and ensure compliance."
          />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Analysis & Studies</h3>
              <ul>
                <li>Load flow analysis</li>
                <li>Short circuit analysis</li>
                <li>Motor starting studies</li>
                <li>Protection coordination studies</li>
                <li>Harmonic analysis</li>
                <li>Arc flash hazard assessment</li>
                <li>Power quality analysis</li>
                <li>Transient stability studies</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Compliance & Performance</h3>
              <ul>
                <li>Grid compliance studies</li>
                <li>Generator performance studies</li>
                <li>Voltage regulation analysis</li>
                <li>Capacitor bank sizing</li>
                <li>Cable sizing and voltage drop</li>
                <li>Earthing system design verification</li>
                <li>Relay setting calculations</li>
                <li>Protection system reviews</li>
              </ul>
            </div>
          </div>

          {/* Technical visual */}
          <div className="service-detail__visual">
            <svg width="600" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Single-line diagram representation */}
              <line x1="50" y1="60" x2="150" y2="60" stroke="#19B5D8" strokeWidth="2"/>
              <rect x="150" y="40" width="40" height="40" rx="4" stroke="#087EA4" strokeWidth="2" fill="none"/>
              <text x="170" y="65" fill="#19B5D8" fontSize="12" textAnchor="middle">T1</text>
              <line x1="190" y1="60" x2="260" y2="60" stroke="#19B5D8" strokeWidth="2"/>
              <circle cx="280" cy="60" r="20" stroke="#087EA4" strokeWidth="2" fill="none"/>
              <text x="280" y="65" fill="#19B5D8" fontSize="12" textAnchor="middle">G</text>
              <line x1="300" y1="60" x2="370" y2="60" stroke="#19B5D8" strokeWidth="2"/>
              <rect x="370" y="40" width="40" height="40" rx="4" stroke="#087EA4" strokeWidth="2" fill="none"/>
              <text x="390" y="65" fill="#19B5D8" fontSize="12" textAnchor="middle">T2</text>
              <line x1="410" y1="60" x2="480" y2="60" stroke="#19B5D8" strokeWidth="2"/>
              <rect x="480" y="45" width="60" height="30" rx="4" stroke="#087EA4" strokeWidth="2" fill="none"/>
              <text x="510" y="65" fill="#19B5D8" fontSize="12" textAnchor="middle">Load</text>
              {/* Bus bars */}
              <line x1="50" y1="60" x2="50" y2="30" stroke="#19B5D8" strokeWidth="2"/>
              <text x="50" y="22" fill="rgba(245,248,250,0.5)" fontSize="10" textAnchor="middle">Grid</text>
              {/* Nodes */}
              <circle cx="150" cy="60" r="4" fill="#19B5D8"/>
              <circle cx="260" cy="60" r="4" fill="#19B5D8"/>
              <circle cx="370" cy="60" r="4" fill="#19B5D8"/>
              <circle cx="480" cy="60" r="4" fill="#19B5D8"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Power System Design */}
      <section>
        <div className="container">
          <SectionHeader
            label="02"
            title="Power System Design"
            subtitle="Electrical infrastructure design for industrial facilities, from primary distribution through to end-use equipment."
          />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Distribution & Equipment</h3>
              <ul>
                <li>HV and LV distribution design</li>
                <li>Substation design and specification</li>
                <li>Switchgear selection and specification</li>
                <li>Transformer specification</li>
                <li>Motor Control Centre (MCC) design</li>
                <li>Cable system design</li>
                <li>Earthing and lightning protection</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Generation & Supply</h3>
              <ul>
                <li>Generation system design</li>
                <li>Standby and emergency power</li>
                <li>UPS system specification</li>
                <li>Power factor correction</li>
                <li>Variable speed drive selection</li>
                <li>Electrical equipment specifications</li>
                <li>Single-line diagram development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Integration */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="03"
            title="Grid Integration"
            subtitle="Connecting industrial facilities and generation assets to the electricity grid."
          />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Grid Connection</h3>
              <ul>
                <li>Utility connection assessments</li>
                <li>Grid connection applications</li>
                <li>Grid impact studies</li>
                <li>Grid compliance verification</li>
                <li>Renewable energy grid integration</li>
                <li>Network augmentation studies</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Reliability & Performance</h3>
              <ul>
                <li>Reliability assessments</li>
                <li>Availability analysis</li>
                <li>Maintainability reviews</li>
                <li>Electrical infrastructure upgrades</li>
                <li>Condition assessment</li>
                <li>Life extension studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Power System Engineering Support?"
        subtitle="Talk to us about your power system challenges."
      />
    </main>
  );
}
