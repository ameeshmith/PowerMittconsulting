import { 
  Cpu, 
  Sliders, 
  FileText, 
  Network, 
  Activity, 
  ShieldCheck, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

const ccsCapabilities = [
  {
    icon: <Cpu size={26} />,
    title: 'Large Compressor Drive Systems',
    desc: 'Electrical engineering, motor selection, and equipment specifications for multi-megawatt CO₂ compression trains and export booster stations.'
  },
  {
    icon: <Sliders size={26} />,
    title: 'Multi-Level VSD & Soft Starting',
    desc: 'Drive topology selection, starting current limitation, and harmonic mitigation for massive compressor motor starting under weak network conditions.'
  },
  {
    icon: <FileText size={26} />,
    title: 'FEED & Detailed Electrical Design',
    desc: 'End-to-end electrical design deliverable packages from front-end engineering design (FEED) through to single-lines, cable schedules, and layouts.'
  },
  {
    icon: <Network size={26} />,
    title: 'High-Voltage Grid Interconnections',
    desc: 'Utility connection studies, network capacity evaluations, and substation design required to reliably power energy-intensive carbon capture units.'
  },
  {
    icon: <Activity size={26} />,
    title: 'Power System & Starting Dynamics',
    desc: 'Transient stability and voltage sag modeling during large compressor acceleration to protect plant reliability and prevent network tripping.'
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Hazardous Area & Safety Compliance',
    desc: 'Hazardous area classification, Ex equipment qualification, earthing, and strict compliance with AS/NZS and IEC safety standards.'
  }
];

const ccsLifecycle = [
  {
    icon: <Clock size={24} />,
    phase: 'Early Phase & Screening',
    items: [
      'Technical feasibility assessment & technology screening',
      'Power demand estimation & connection capacity evaluation',
      'Grid connection pre-assessment with network service providers',
      'Motor starting methodology & drive architecture comparison'
    ]
  },
  {
    icon: <CheckCircle2 size={24} />,
    phase: 'FEED & Detailed Design',
    items: [
      'Comprehensive electrical FEED deliverable packages',
      'Detailed single-line diagrams, substation layouts & schematics',
      'Vendor technical bid evaluations & FAT attendance',
      'Commissioning oversight, energisation & operational handover'
    ]
  }
];

export default function CarbonCapture() {
  return (
    <main>
      <SEO
        title="Carbon Capture & Storage Engineering | PowerMitt Consulting"
        description="Electrical engineering expertise for CCS projects including compressor drive systems, grid connection, equipment selection, and detailed design."
        path="/services/carbon-capture"
        image="/assets/images/carbon-capture-bg.jpg"
      />
      <Hero
        variant="service"
        bgImage="/assets/images/carbon-capture-bg.jpg"
        label="Services / Carbon Capture & Storage"
        title="Carbon Capture & Storage Engineering"
        subtitle="Specialist electrical engineering supporting CCS projects — from large compressor drive systems and grid connections through to FEED and detailed design."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>Electrical Engineering for CCS</h2>
              <hr className="divider" />
              <p>Carbon Capture and Storage (CCS) projects present significant electrical engineering challenges. The high power demands of CO₂ compression systems, the requirement for reliable grid connections, and the complexity of integrating CCS facilities with existing industrial infrastructure all require specialist electrical power system expertise.</p>
              <p>PowerMitt provides electrical engineering support for CCS projects across all phases — from early-stage technical evaluation and FEED through to detailed design. Our focus is on the practical electrical engineering challenges of making CCS work within real industrial power system constraints.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Key Challenges</h4>
              <ul>
                <li>High-power compressor drive systems</li>
                <li>Grid connection capacity requirements</li>
                <li>Large motor starting & VSD selection</li>
                <li>Electrical infrastructure augmentation</li>
                <li>Power system stability</li>
                <li>Equipment qualification</li>
                <li>Utility interface coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="Capabilities"
            title="CCS Electrical Engineering Services"
            subtitle="Specialist engineering across large-scale motor drives, power infrastructure, and grid connections for carbon capture."
          />
          <div className="service-detail__cards-grid">
            {ccsCapabilities.map((cap, i) => (
              <div key={i} className="service-detail__card">
                <div className="service-detail__card-icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lifecycle Section */}
      <section className="section--dark">
        <div className="container">
          <SectionHeader
            label="Project Lifecycle"
            title="CCS Engineering Support Across All Phases"
            subtitle="From concept and preliminary connection studies through to turnkey execution and commissioning."
            light
          />
          <div className="service-detail__cards-grid service-detail__cards-grid--2col" style={{ marginTop: '2.5rem' }}>
            {ccsLifecycle.map((stage, i) => (
              <div 
                key={i} 
                className="service-detail__card"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF'
                }}
              >
                <div 
                  className="service-detail__card-icon"
                  style={{
                    background: 'rgba(2, 132, 199, 0.15)',
                    borderColor: 'rgba(2, 132, 199, 0.3)',
                    color: '#38BDF8'
                  }}
                >
                  {stage.icon}
                </div>
                <h3 style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>{stage.phase}</h3>
                <ul className="service-detail__card-points">
                  {stage.items.map((point, idx) => (
                    <li key={idx} style={{ color: 'rgba(241, 245, 249, 0.85)' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need CCS Engineering Support?" subtitle="Talk to us about your carbon capture project." />
    </main>
  );
}
