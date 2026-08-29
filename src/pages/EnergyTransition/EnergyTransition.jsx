import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Battery, Zap, Droplets, Factory, Wind, Globe } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import './EnergyTransition.css';

const topics = [
  { icon: <Sun size={32} />, title: 'Renewable Integration', desc: 'Integrating solar, wind, and hybrid renewable generation into existing industrial power systems. This includes grid connection, power system impact studies, protection design, and energy management.', link: '/services/energy-transition' },
  { icon: <Battery size={32} />, title: 'Battery Energy Storage', desc: 'BESS provides grid stability, peak shaving, and renewable firming. Engineering challenges include sizing, grid connection, power conversion system specification, protection, and integration with existing infrastructure.', link: '/services/energy-transition' },
  { icon: <Zap size={32} />, title: 'Industrial Electrification', desc: 'Replacing diesel and gas-powered equipment with electrical alternatives. This requires power supply augmentation, distribution network upgrades, and integration with renewable and grid supply.', link: '/services/energy-transition' },
  { icon: <Droplets size={32} />, title: 'Hydrogen', desc: 'Green hydrogen production requires large-scale electrolyser power supply, renewable energy integration, and fuel cell systems for power generation or industrial use.', link: '/services/energy-transition' },
  { icon: <Factory size={32} />, title: 'Carbon Capture & Storage', desc: 'CCS facilities require significant electrical infrastructure for CO₂ compression, processing, and transport. Power demands are substantial and grid connections must be carefully engineered.', link: '/services/carbon-capture' },
  { icon: <Wind size={32} />, title: 'Decarbonisation Strategy', desc: 'Developing engineering roadmaps for industrial decarbonisation. Evaluating technology options, quantifying power system impacts, and developing implementable transition strategies.', link: '/services/energy-transition' },
  { icon: <Globe size={32} />, title: 'Grid Integration', desc: 'Connecting new generation and storage assets to the electricity grid. Managing the technical requirements of grid compliance, protection, and power quality.', link: '/services/power-systems' }
];

export default function EnergyTransition() {
  return (
    <main>
      <SEO
        title="Energy Transition | PowerMitt Consulting"
        description="Engineering the path to lower-carbon industry — renewable integration, BESS, hydrogen, electrification, CCS, and decarbonisation within real industrial power-system constraints."
        path="/energy-transition"
      />
      <Hero
        variant="compact"
        label="Energy Transition"
        title="Engineering the Energy Transition Within Industrial Reality"
        subtitle="Decarbonisation must work within real industrial power-system constraints. PowerMitt provides the engineering expertise to make it happen."
      />

      {/* Perspective */}
      <section>
        <div className="container">
          <div className="et-overview__intro">
            <span className="label label--teal">Our Perspective</span>
            <h2>Decarbonisation Requires Engineering, Not Just Ambition</h2>
            <hr className="divider" />
            <p>
              The energy transition is fundamentally an engineering challenge. Aspirations for net-zero and decarbonisation are important, but achieving them in complex industrial environments — mines, processing plants, offshore facilities, heavy industry — requires deep understanding of how new energy technologies interact with existing power system infrastructure.
            </p>
            <p>
              PowerMitt's approach is grounded in this reality. We bring specialist electrical power system engineering expertise to the energy transition, ensuring that renewable integration, battery storage, hydrogen, electrification, and carbon capture solutions are not just technically feasible, but practically implementable within the constraints of operating industrial power systems.
            </p>
            <p>
              This is not about theoretical studies or aspirational roadmaps. It's about the detailed engineering work required to actually connect, integrate, protect, and operate new energy technologies alongside existing industrial infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="Technologies"
            title="Energy Transition Technologies"
            subtitle="Engineering expertise across the key technologies driving industrial decarbonisation."
          />
          <div className="et-topics__grid">
            {topics.map((topic, i) => (
              <div key={i} className="et-topic-card">
                <div className="et-topic-card__icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{topic.desc}</p>
                <Link to={topic.link} className="btn btn--ghost">
                  Learn More <ArrowRight size={14} className="btn-arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Message */}
      <section className="section--dark et-integration">
        <div className="container text-center">
          <span className="label label--teal">Key Message</span>
          <h2 style={{ color: '#fff', maxWidth: '700px', margin: '0 auto var(--space-6)' }}>
            New Energy Technologies Must Integrate With Existing Industrial Power Systems
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-md)' }}>
            Every renewable installation, battery system, or electrification project connects to an existing power system. Understanding that power system — its capacity, its constraints, its protection requirements — is essential to making the energy transition work.
          </p>
        </div>
      </section>

      <CTABanner
        title="Planning Your Energy Transition?"
        subtitle="Talk to us about the engineering challenges of decarbonising your operations."
        variant="teal"
      />
    </main>
  );
}
