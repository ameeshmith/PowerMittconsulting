import { 
  Activity, 
  ShieldAlert, 
  ShieldCheck, 
  Zap, 
  Sliders, 
  Radio, 
  Building2, 
  Cpu, 
  GitBranch, 
  BatteryCharging, 
  Network, 
  CheckCircle2, 
  FileCheck, 
  Layers 
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

const powerSystemStudies = [
  {
    icon: <Activity size={26} />,
    title: 'Load Flow & Network Modeling',
    desc: 'Steady-state voltage regulation, active/reactive power dispatch, and thermal loading simulations to identify constraints and optimise asset utilisation.'
  },
  {
    icon: <ShieldAlert size={26} />,
    title: 'Short Circuit & Fault Analysis',
    desc: 'Comprehensive symmetrical and asymmetrical fault current calculations (IEC 60909 / ANSI) to verify switchgear withstand ratings and duty cycles.'
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Protection Coordination & Arc Flash',
    desc: 'Relay setting grading, discrimination reviews, and IEEE 1584 arc flash hazard assessments to protect personnel and prevent cascading outages.'
  },
  {
    icon: <Zap size={26} />,
    title: 'Motor Starting & Dynamic Stability',
    desc: 'Direct-on-line (DOL) and VSD starting impact analysis, transient stability simulations, and critical clearing time evaluation under severe system disturbances.'
  },
  {
    icon: <Sliders size={26} />,
    title: 'Harmonic & Power Quality Analysis',
    desc: 'Harmonic distortion simulations, resonant frequency identification, and active/passive filter design in strict accordance with IEEE 519 standards.'
  },
  {
    icon: <Radio size={26} />,
    title: 'AEMO & WEM Grid Compliance',
    desc: 'Generator Performance Standards (GPS) assessments, utility interface modeling, and compliance studies for high-voltage transmission and distribution networks.'
  }
];

const powerSystemDesign = [
  {
    icon: <Building2 size={26} />,
    title: 'HV & MV Substation Engineering',
    desc: 'Primary layout design, switchyard architecture, equipment specification, earthing grids, and lightning protection systems.'
  },
  {
    icon: <Cpu size={26} />,
    title: 'Switchgear & MCC Specification',
    desc: 'Detailed engineering for primary/secondary switchboards, motor control centres (MCCs), and variable speed drive integration.'
  },
  {
    icon: <GitBranch size={26} />,
    title: 'Cabling & Reticulation Architecture',
    desc: 'Cable sizing, tray routing, voltage drop mitigation, and duct bank design for complex heavy industrial facilities.'
  },
  {
    icon: <BatteryCharging size={26} />,
    title: 'Emergency Power & UPS Systems',
    desc: 'Standby diesel/gas generation, static UPS sizing, transfer schemes, and continuous power solutions for critical operational loads.'
  }
];

const gridIntegrationCapabilities = [
  {
    icon: <Network size={26} />,
    title: 'Utility Grid Interconnection Studies',
    desc: 'Grid connection applications, interface coordination, network planning, and statutory submissions across NEM and WEM networks.'
  },
  {
    icon: <CheckCircle2 size={26} />,
    title: 'Protection, Control & SCADA',
    desc: 'Utility-grade protection schemes, telemetry, remote monitoring, and automated synchronisation architecture.'
  },
  {
    icon: <FileCheck size={26} />,
    title: 'Statutory Compliance & Submissions',
    desc: 'Preparation and engineering sign-off for NSP technical negotiations, regulatory filings, and connection agreements.'
  },
  {
    icon: <Layers size={26} />,
    title: 'EPC Delivery & Scope Optimisation',
    desc: 'Independent engineering support helping EPC contractors de-risk scopes and deliver compliant turnkey installations.'
  }
];

export default function PowerSystems() {
  return (
    <main>
      <SEO
        title="Electrical Power Systems Engineering | PowerMitt Consulting"
        description="Specialist power system engineering including load flow, short circuit, protection coordination, arc flash analysis, HV/LV design, substations, and grid integration."
        path="/services/power-systems"
        image="/assets/images/power-systems-bg.jpg"
      />

      <Hero
        variant="service"
        bgImage="/assets/images/power-systems-bg.jpg"
        label="Services / Electrical Power Systems"
        title="Electrical Power Systems Engineering"
        subtitle="Specialised power systems engineering for complex industrial and energy infrastructure — from analytical modeling and detailed design to grid integration and asset reliability."
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
            label="STUDIES & MODELING"
            title="Power System Studies"
            subtitle="Advanced electrical network analysis and simulation to optimise engineering design, validate operational performance, and ensure statutory compliance."
          />
          <div className="service-detail__cards-grid">
            {powerSystemStudies.map((study, i) => (
              <div key={i} className="service-detail__card">
                <div className="service-detail__card-icon">{study.icon}</div>
                <h3>{study.title}</h3>
                <p>{study.desc}</p>
              </div>
            ))}
          </div>

          {/* Technical visual */}
          <div className="service-detail__visual" style={{ marginTop: '2.5rem' }}>
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
            label="ENGINEERING DESIGN"
            title="Power System Design"
            subtitle="Electrical infrastructure design for industrial facilities, from primary distribution through to end-use equipment."
          />
          <div className="service-detail__cards-grid service-detail__cards-grid--2col">
            {powerSystemDesign.map((item, i) => (
              <div key={i} className="service-detail__card">
                <div className="service-detail__card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Integration */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="GRID INTEGRATION"
            title="Grid Integration"
            subtitle="Connecting industrial facilities and generation assets to the electricity grid."
          />
          <div className="service-detail__cards-grid service-detail__cards-grid--2col">
            {gridIntegrationCapabilities.map((item, i) => (
              <div key={i} className="service-detail__card">
                <div className="service-detail__card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
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
