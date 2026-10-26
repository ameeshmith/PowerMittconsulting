import { 
  Cpu, 
  Sliders, 
  FileText, 
  Network, 
  Activity, 
  ShieldCheck, 
  Compass, 
  Layers, 
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
          <div className="service-tech-grid">
            {ccsCapabilities.map((cap, i) => (
              <div key={i} className="service-tech-card">
                <div className="service-tech-card__icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lifecycle Flow Diagram */}
      <section className="section--dark">
        <div className="container text-center">
          <SectionHeader
            label="Project Lifecycle"
            title="CCS Engineering Support Across All Phases"
            subtitle="From concept and preliminary connection studies through to turnkey execution and commissioning."
            light
            align="center"
          />
          <div className="service-flow">
            <div className="service-flow__step">
              <div className="service-flow__box">
                <Compass size={32} />
                <span>Early Phase & Screening</span>
              </div>
            </div>
            <div className="service-flow__arrow">→</div>
            <div className="service-flow__step">
              <div className="service-flow__box service-flow__box--accent">
                <Layers size={32} />
                <span>FEED & Detailed Design</span>
              </div>
            </div>
            <div className="service-flow__arrow">→</div>
            <div className="service-flow__step">
              <div className="service-flow__box service-flow__box--teal">
                <CheckCircle2 size={32} />
                <span>Commissioning & Handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need CCS Engineering Support?" subtitle="Talk to us about your carbon capture project." />
    </main>
  );
}
