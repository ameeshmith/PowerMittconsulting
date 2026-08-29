import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

export default function CarbonCapture() {
  return (
    <main>
      <SEO
        title="Carbon Capture & Storage Engineering | PowerMitt Consulting"
        description="Electrical engineering expertise for CCS projects including compressor drive systems, grid connection, equipment selection, and detailed design."
        path="/services/carbon-capture"
      />
      <Hero variant="service" bgImage="/assets/images/carbon-capture-bg.jpg" label="Services / Carbon Capture & Storage" title="Carbon Capture & Storage Engineering" subtitle="Specialist electrical engineering supporting CCS projects — from large compressor drive systems and grid connections through to FEED and detailed design." />

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

      <section className="section--ice">
        <div className="container">
          <SectionHeader label="Capabilities" title="CCS Electrical Engineering Services" />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Engineering & Design</h3>
              <ul>
                <li>Electrical engineering support for CCS facilities</li>
                <li>Large compressor drive system engineering</li>
                <li>VSD and soft-starter selection for large motors</li>
                <li>Grid connection studies and applications</li>
                <li>Power system studies for CCS loads</li>
                <li>Equipment selection and specification</li>
                <li>Electrical single-line diagram development</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Technical Evaluation & Interfaces</h3>
              <ul>
                <li>Technical evaluation of CCS technologies</li>
                <li>FEED electrical engineering</li>
                <li>Detailed electrical design</li>
                <li>Utility interface coordination</li>
                <li>Stakeholder interface management</li>
                <li>Risk assessment and mitigation</li>
                <li>Vendor technical evaluation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--dark">
        <div className="container">
          <SectionHeader label="Project Lifecycle" title="CCS Engineering Support Across All Phases" light />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3 style={{ color: '#fff', borderColor: '#19B5D8' }}>Early Phase</h3>
              <ul>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Technical feasibility assessment</li>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Power demand estimation</li>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Grid connection pre-assessment</li>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Technology comparison</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3 style={{ color: '#fff', borderColor: '#19B5D8' }}>FEED & Detailed Design</h3>
              <ul>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Electrical FEED deliverables</li>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Detailed electrical design packages</li>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Equipment procurement support</li>
                <li style={{ color: 'rgba(245,248,250,0.65)' }}>Construction and commissioning support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need CCS Engineering Support?" subtitle="Talk to us about your carbon capture project." />
    </main>
  );
}
