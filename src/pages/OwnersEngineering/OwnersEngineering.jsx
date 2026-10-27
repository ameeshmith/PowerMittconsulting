import {
  ShieldCheck,
  FileCheck,
  Briefcase,
  GitMerge,
  TrendingUp,
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

const ownersEngineeringCapabilities = [
  {
    icon: <ShieldCheck size={26} />,
    title: 'Independent Design Verification',
    desc: 'Rigorous third-party engineering review of contractor deliverables, single-line diagrams, and equipment specifications to validate code compliance and operational fitness.'
  },
  {
    icon: <FileCheck size={26} />,
    title: 'Technical Due Diligence & Feasibility',
    desc: 'Unbiased technical audits, asset condition assessments, and technical risk scoring to support project financing, mergers, acquisitions, and major capital allocations.'
  },
  {
    icon: <Briefcase size={26} />,
    title: 'Vendor Technical Evaluation & FAT',
    desc: 'Detailed bid evaluations, supplier pre-qualification, technical query management, and factory acceptance test (FAT) representation worldwide.'
  },
  {
    icon: <GitMerge size={26} />,
    title: 'Interface & Multi-Discipline Risk Management',
    desc: 'Proactive interface coordination between grid utilities, engineering contractors, and OEM suppliers to eliminate scope gaps and schedule friction.'
  },
  {
    icon: <TrendingUp size={26} />,
    title: 'EPC Scope & Capital Value Engineering',
    desc: 'Technical scope definition, design rationalisation, and CAPEX value engineering that protects long-term reliability while removing unnecessary cost.'
  },
  {
    icon: <Award size={26} />,
    title: 'Commissioning & Handover Assurance',
    desc: 'On-site energisation oversight, punch-item resolution, regulatory compliance documentation verification, and seamless operational handover.'
  }
];

export default function OwnersEngineering() {
  return (
    <main>
      <SEO
        title="Owner's Engineering | PowerMitt Consulting"
        description="Independent technical advisory, due diligence, design verification, vendor evaluation, risk assessment, and project execution support for asset owners."
        path="/services/owners-engineering"
        image="/assets/images/owners-engineering-bg.jpg"
      />
      <Hero
        variant="service"
        bgImage="/assets/images/owners-engineering-hero.jpg"
        label="Services / Owner's Engineering"
        title="Owner's Engineering"
        subtitle="Independent technical advisory services for asset owners — providing due diligence, design verification, vendor evaluation, and project execution support."
      />

      {/* Section 1: Overview */}
      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>Independent Technical Advisory</h2>
              <hr className="divider" />
              <p>Asset owners need independent technical expertise to protect their interests during project development and execution. Whether evaluating a potential investment, reviewing a contractor's design, or overseeing construction and commissioning — having an independent engineer on your side ensures technical risks are identified and managed.</p>
              <p>PowerMitt provides Owner's Engineer services, acting as a trusted technical advisor. We are independent of equipment vendors, contractors, and developers — ensuring our recommendations are objective and aligned solely with our client's interests.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Our Position</h4>
              <ul>
                <li>Independent of vendors</li>
                <li>Independent of contractors</li>
                <li>Independent of developers</li>
                <li>Objective technical advice</li>
                <li>Aligned with owner interests</li>
                <li>Commercially aware</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Owner's Engineering Capabilities */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="Services"
            title="Owner's Engineering Capabilities"
            subtitle="Objective, rigorous technical advisory that safeguards capital investments and operational integrity."
          />
          <div className="service-tech-grid">
            {ownersEngineeringCapabilities.map((cap, i) => (
              <div key={i} className="service-tech-card">
                <div className="service-tech-card__icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Value-Driven Engineering */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="Philosophy"
            title="Value-Driven Engineering"
            subtitle="Maximising asset value while upholding uncompromising safety, reliability, and regulatory compliance."
            align="center"
          />
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-charcoal)' }}>
            <p>
              PowerMitt works collaboratively with owners, EPC contractors and vendors to identify practical engineering solutions that maximise value while maintaining safety, reliability, operability and compliance.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--color-steel)' }}>
              Our team's extensive cross-sector experience across <strong>Offshore Oil & Gas, Mining, Utilities, Renewable Energy,</strong> and <strong>Industrial Infrastructure</strong> projects enables us to develop optimised solutions that de-risk execution and support successful project delivery.
            </p>
          </div>
        </div>
      </section>

      <CTABanner title="Need Independent Engineering or EPC Delivery Support?" subtitle="Talk to us about your Owner's Engineering and project delivery requirements." />
    </main>
  );
}
