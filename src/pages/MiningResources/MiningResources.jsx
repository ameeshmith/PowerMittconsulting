import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../IndustryDetail.css';

export default function MiningResources() {
  return (
    <main>
      <SEO title="Mining & Resources Engineering | PowerMitt Consulting" description="Power system engineering for surface and underground mining, mineral processing, remote infrastructure electrification, and mining electrical systems." path="/industries/mining-resources" image="/assets/images/mining-bg.jpg" />
      <Hero
        variant="industry"
        bgImage="/assets/images/mining-bg.jpg"
        label="Industries / Mining & Resources"
        title="Mining & Resources"
        subtitle="Specialist electrical and infrastructure engineering for greenfield developments and brownfield expansion projects — proven technical leadership supporting major iron ore operations."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Sector Capability</span>
              <h2>Specialist Electrical & Infrastructure Engineering</h2>
              <hr className="divider" />
              <p>
                PowerMitt provides specialist electrical and infrastructure engineering services to the mining and resources sector, supporting both greenfield developments and brownfield expansion projects.
              </p>
              <p>
                Our team has extensive experience supporting major mining clients, including technical advisory, design management, engineering coordination and project delivery support. This includes engineering support for large-scale mining developments, infrastructure upgrades, brownfield modifications, operational improvement projects and stakeholder management activities.
              </p>
              <p>
                <strong>Major Iron Ore Track Record:</strong> Through recent consulting engagements supporting major iron ore operations, our team has delivered design management, technical assurance and engineering coordination services across multiple electrical infrastructure projects, ensuring safe, reliable and efficient project outcomes.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Mining Sectors</h4>
              <ul>
                <li>Major Iron Ore Operations</li>
                <li>Surface Mining Developments</li>
                <li>Underground Mining Systems</li>
                <li>Mineral Processing Plants</li>
                <li>Mine Site Electrification</li>
                <li>HV Submissions & Audits</li>
                <li>Substations & Switchyards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Have a Mining Project?" subtitle="Talk to us about your mining electrical engineering requirements." />
    </main>
  );
}

