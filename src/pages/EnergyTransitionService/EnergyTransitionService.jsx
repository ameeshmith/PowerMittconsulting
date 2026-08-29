import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Battery, Zap, Droplets, Factory, Wind } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';
import './EnergyTransitionService.css';

const technologies = [
  { icon: <Sun size={28} />, title: 'Renewable Integration', desc: 'Solar PV and wind integration into existing industrial power systems, including grid connection and power system impact assessment.' },
  { icon: <Battery size={28} />, title: 'Battery Energy Storage', desc: 'BESS engineering including sizing, technology selection, grid connection, power system integration, and protection design.' },
  { icon: <Droplets size={28} />, title: 'Hydrogen', desc: 'Electrical infrastructure for green hydrogen production, including electrolyser power supply and fuel cell integration.' },
  { icon: <Zap size={28} />, title: 'Electrification', desc: 'Replacement of fossil-fuel-driven equipment with electrical alternatives, including power supply augmentation and distribution.' },
  { icon: <Factory size={28} />, title: 'Carbon Capture', desc: 'Electrical engineering for CCS facilities including compressor drives, grid connections, and power system design.' },
  { icon: <Wind size={28} />, title: 'Net-Zero Pathways', desc: 'Engineering roadmaps for industrial decarbonisation, evaluating options and developing implementation strategies.' }
];

export default function EnergyTransitionService() {
  return (
    <main>
      <SEO
        title="Renewable Energy & Decarbonisation | PowerMitt Consulting"
        description="Engineering solutions for renewable integration, BESS, hydrogen, electrification, and industrial decarbonisation within real power-system constraints."
        path="/services/energy-transition"
      />

      <Hero
        variant="service"
        bgImage="/assets/images/renewable-bess-bg.jpg"
        label="Services / Renewable Energy & Decarbonisation"
        title="Renewable Energy & Decarbonisation"
        subtitle="Practical engineering solutions for renewable integration, energy storage, electrification, and industrial decarbonisation — working within the constraints of real power systems."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label label--teal">Overview</span>
              <h2>Engineering the Energy Transition</h2>
              <hr className="divider" />
              <p>
                The energy transition presents both opportunity and complexity for industrial operators. Integrating renewable energy, battery storage, hydrogen, and electrification technologies into existing industrial power systems requires specialist engineering expertise that understands both the new technologies and the existing infrastructure they must connect to.
              </p>
              <p>
                PowerMitt provides practical energy transition engineering services that bridge the gap between sustainability ambitions and operational reality. We help clients develop technically robust, implementable strategies for decarbonising their operations.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Capabilities</h4>
              <ul>
                <li>Renewable integration studies</li>
                <li>BESS engineering & sizing</li>
                <li>Green power import strategies</li>
                <li>Hydrogen infrastructure</li>
                <li>Industrial electrification</li>
                <li>Net-zero pathway development</li>
                <li>Carbon footprint reduction</li>
                <li>Energy transition studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="Technologies"
            title="Energy Transition Technologies"
            subtitle="Specialist engineering across the key technologies enabling industrial decarbonisation."
          />
          <div className="et-tech-grid">
            {technologies.map((tech, i) => (
              <div key={i} className="et-tech-card">
                <div className="et-tech-card__icon">{tech.icon}</div>
                <h3>{tech.title}</h3>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Flow Visual */}
      <section className="section--dark">
        <div className="container text-center">
          <SectionHeader
            label="Engineering Approach"
            title="From Existing Operations to Lower-Carbon Future"
            light
            align="center"
          />
          <div className="et-flow">
            <div className="et-flow__step">
              <div className="et-flow__box">
                <Factory size={32} />
                <span>Existing Industrial Infrastructure</span>
              </div>
            </div>
            <div className="et-flow__arrow">→</div>
            <div className="et-flow__step">
              <div className="et-flow__box et-flow__box--accent">
                <Zap size={32} />
                <span>Engineering Strategy</span>
              </div>
            </div>
            <div className="et-flow__arrow">→</div>
            <div className="et-flow__step">
              <div className="et-flow__box et-flow__box--teal">
                <Sun size={32} />
                <span>Lower-Carbon Energy System</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Planning Your Energy Transition?"
        subtitle="Let's discuss how PowerMitt can support your decarbonisation strategy."
        variant="teal"
      />
    </main>
  );
}
