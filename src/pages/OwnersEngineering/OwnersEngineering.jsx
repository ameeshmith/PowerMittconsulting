import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

export default function OwnersEngineering() {
  return (
    <main>
      <SEO
        title="Owner's Engineering | PowerMitt Consulting"
        description="Independent technical advisory, due diligence, design verification, vendor evaluation, risk assessment, and project execution support for asset owners."
        path="/services/owners-engineering"
        image="/assets/images/owners-engineering-bg.jpg"
      />
      <Hero variant="service" bgImage="/assets/images/owners-engineering-bg.jpg" label="Services / Owner's Engineering" title="Owner's Engineering" subtitle="Independent technical advisory services for asset owners — providing due diligence, design verification, vendor evaluation, and project execution support." />

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

      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Services" title="Owner's Engineering Capabilities" />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Due Diligence & Review</h3>
              <ul>
                <li>Technical due diligence</li>
                <li>Independent engineering review</li>
                <li>Design verification and validation</li>
                <li>Basis of design review</li>
                <li>Technical specifications review</li>
                <li>Compliance assessment</li>
                <li>Code and standards compliance checks</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Vendor & Risk Management</h3>
              <ul>
                <li>Vendor evaluation and selection support</li>
                <li>Technical bid evaluation</li>
                <li>Risk identification and assessment</li>
                <li>Risk mitigation strategy development</li>
                <li>Technical negotiation support</li>
                <li>Interface management</li>
                <li>Scope of work development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EPC Project Delivery Support (dmithanthaya Capability) */}
      <section className="section--dark">
        <div className="container">
          <SectionHeader
            label="EPC Partnership"
            title="EPC Project Delivery Support"
            subtitle="Specialist engineering and technical advisory services to EPC contractors — delivering projects safely, efficiently, and cost-effectively."
            light
          />
          <div className="service-detail__capabilities" style={{ marginTop: '2rem' }}>
            <div className="service-detail__cap-group" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: '#00E5FF' }}>Design & Technical Assurance</h3>
              <ul>
                <li>Scope definition and scope optimisation</li>
                <li>Technical assurance and independent design reviews</li>
                <li>Value engineering and capital cost optimisation</li>
                <li>Electrical system architecture development</li>
                <li>Equipment selection and technical bid evaluations</li>
              </ul>
            </div>
            <div className="service-detail__cap-group" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: '#10B981' }}>Project Execution & Commissioning</h3>
              <ul>
                <li>Interface management and multi-discipline stakeholder coordination</li>
                <li>Constructability and operability reviews</li>
                <li>Risk identification, quantification and mitigation</li>
                <li>Support across Concept, FEED, Detailed Design & Commissioning</li>
                <li>Optimised solutions strictly aligned with scope, schedule and budget</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value-Driven Engineering */}
      <section>
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
