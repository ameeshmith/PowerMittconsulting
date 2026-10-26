import { 
  Building2, 
  Cpu, 
  Pickaxe, 
  Monitor, 
  Zap, 
  RefreshCw, 
  Network, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2 
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

const distributionCapabilities = [
  {
    icon: <Building2 size={26} />,
    title: 'Primary HV/LV Reticulation & Substations',
    desc: 'Turnkey engineering for 66kV, 33kV, 22kV, and 11kV distribution networks, modular packaged substations, switchyards, and transformer yards.'
  },
  {
    icon: <Cpu size={26} />,
    title: 'Motor Control Centres & Switchboards',
    desc: 'Intelligent MCC design, Form 4 arc-fault contained switchgear, busway systems, and integrated motor protection & management relays.'
  },
  {
    icon: <Pickaxe size={26} />,
    title: 'Underground & Surface Mining Power',
    desc: 'Heavy-duty 1000V reticulation, trailing cable systems, mobile substations, and compliance with statutory mining electrical regulations.'
  },
  {
    icon: <Monitor size={26} />,
    title: 'SCADA, Automation & Telemetry',
    desc: 'Industrial network architecture, PLC/RTU specification, remote telemetry, plant-wide SCADA integration, and human-machine interfaces.'
  },
  {
    icon: <Zap size={26} />,
    title: 'Standby & Emergency Generation',
    desc: 'Critical diesel/gas generator systems, auto-synchronising transfer schemes, and uninterruptible power supplies (UPS) for continuous uptime.'
  },
  {
    icon: <RefreshCw size={26} />,
    title: 'Brownfield Audits & Plant Modernisation',
    desc: 'Condition assessments, capacity augmentation studies, arc flash hazard mitigation, and phased equipment replacement in operating plants.'
  }
];

const scadaMiningCapabilities = [
  {
    icon: <Network size={26} />,
    title: 'SCADA & Industrial Communications',
    desc: 'Robust communication backbones, industrial Ethernet, remote telemetry units (RTUs), and cyber-secure supervisory control architectures designed for harsh operating environments.'
  },
  {
    icon: <Pickaxe size={26} />,
    title: 'Specialised Mining Systems & Safety',
    desc: 'Surface and underground mining reticulation, trailing cable protection, earth leakage monitoring, hazardous area classification, and compliance with AS/NZS 4871 standards.'
  }
];

const reliabilityCapabilities = [
  {
    icon: <Wrench size={26} />,
    title: 'Infrastructure Audits & Upgrades',
    desc: 'Comprehensive electrical asset health assessments, thermal imaging analysis, fault level validation, and engineering designs for capacity augmentation and switchgear replacement.'
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Reliability-Centred Maintenance (RCM)',
    desc: 'Criticality ranking of electrical plant, condition monitoring integration, spare parts optimisation strategies, and maintenance procedure development to minimise unplanned downtime.'
  }
];

export default function IndustrialInfrastructure() {
  return (
    <main>
      <SEO
        title="Industrial & Mining Infrastructure Engineering | PowerMitt Consulting"
        description="HV/LV distribution, substations, MCCs, SCADA, mining electrical systems, underground mining, and infrastructure upgrades for industrial and mining operations."
        path="/services/industrial-infrastructure"
        image="/assets/images/industrial-bg.jpg"
      />
      <Hero
        variant="service"
        bgImage="/assets/images/industrial-bg.jpg"
        label="Services / Industrial & Mining Infrastructure"
        title="Industrial & Mining Infrastructure"
        subtitle="Electrical infrastructure engineering for mining, processing, and heavy industrial facilities — including underground mining systems, HV/LV distribution, and infrastructure upgrades."
      />

      {/* Section 1: Overview */}
      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>Electrical Infrastructure for Industrial Operations</h2>
              <hr className="divider" />
              <p>Industrial and mining operations depend on reliable, well-designed electrical infrastructure. From primary HV distribution networks through to individual motor control centres, the electrical infrastructure underpins every aspect of operational performance.</p>
              <p>PowerMitt provides specialist electrical infrastructure engineering for mining operations, mineral processing plants, and heavy industrial facilities. Our experience covers surface and underground mining electrical systems, brownfield modifications, infrastructure upgrades, and new-build projects — always focused on reliability, maintainability, and operational practicality.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Infrastructure Systems</h4>
              <ul>
                <li>HV Distribution Networks</li>
                <li>LV Distribution Systems</li>
                <li>Substations</li>
                <li>Motor Control Centres</li>
                <li>Switchboards</li>
                <li>SCADA & Control Systems</li>
                <li>Communication Networks</li>
                <li>Earthing & Lightning Protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Distribution & Equipment (Capability Cards) */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="DISTRIBUTION & EQUIPMENT"
            title="Distribution & Equipment Capabilities"
            subtitle="Primary and secondary electrical distribution design engineered for heavy industrial and mining facilities."
          />
          <div className="service-detail__cards-grid">
            {distributionCapabilities.map((item, i) => (
              <div key={i} className="service-detail__card">
                <div className="service-detail__card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: SCADA & Communications */}
      <section>
        <div className="container">
          <SectionHeader
            label="SCADA & AUTOMATION"
            title="SCADA & Communications"
            subtitle="Monitoring, control, and communication systems designed for mission-critical operations."
          />
          <div className="service-detail__cards-grid service-detail__cards-grid--2col">
            {scadaMiningCapabilities.map((item, i) => (
              <div key={i} className="service-detail__card">
                <div className="service-detail__card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Upgrades & Reliability */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="UPGRADES & RELIABILITY"
            title="Infrastructure Upgrades & Reliability"
            subtitle="Extending asset operating life and de-risking brownfield facilities with proven engineering methodologies."
          />
          <div className="service-detail__cards-grid service-detail__cards-grid--2col">
            {reliabilityCapabilities.map((item, i) => (
              <div key={i} className="service-detail__card">
                <div className="service-detail__card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need Industrial Electrical Engineering?" subtitle="Talk to us about your infrastructure requirements." />
    </main>
  );
}
