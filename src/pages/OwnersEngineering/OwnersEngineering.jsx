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

      <section>
        <div className="container">
          <SectionHeader label="Support" title="Project & Asset Support" />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Project Execution</h3>
              <ul>
                <li>Project execution oversight</li>
                <li>Construction monitoring</li>
                <li>Commissioning planning and witness</li>
                <li>Performance testing oversight</li>
                <li>Defect identification and resolution</li>
                <li>Handover and close-out support</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Asset Management</h3>
              <ul>
                <li>Asset condition assessment</li>
                <li>Asset management strategy</li>
                <li>Life cycle cost analysis</li>
                <li>Replacement and refurbishment planning</li>
                <li>Operational performance review</li>
                <li>Maintenance strategy development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need Independent Engineering Advice?" subtitle="Talk to us about your Owner's Engineering requirements." />
    </main>
  );
}
