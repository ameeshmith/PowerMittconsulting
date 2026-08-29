import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

export default function IndustrialInfrastructure() {
  return (
    <main>
      <SEO
        title="Industrial & Mining Infrastructure Engineering | PowerMitt Consulting"
        description="HV/LV distribution, substations, MCCs, SCADA, mining electrical systems, underground mining, and infrastructure upgrades for industrial and mining operations."
        path="/services/industrial-infrastructure"
      />
      <Hero variant="service" bgImage="/assets/images/industrial-bg.jpg" label="Services / Industrial & Mining Infrastructure" title="Industrial & Mining Infrastructure" subtitle="Electrical infrastructure engineering for mining, processing, and heavy industrial facilities — including underground mining systems, HV/LV distribution, and infrastructure upgrades." />

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

      <section className="section--ice">
        <div className="container">
          <SectionHeader label="01" title="Distribution & Equipment" subtitle="Primary and secondary electrical distribution design for industrial and mining facilities." />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Power Distribution</h3>
              <ul>
                <li>HV reticulation design (11kV, 22kV, 33kV, 66kV)</li>
                <li>LV distribution design (415V, 690V, 1000V)</li>
                <li>Substation layout and design</li>
                <li>Switchgear selection and specification</li>
                <li>Transformer sizing and specification</li>
                <li>Cable routing and cable management</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Equipment & Systems</h3>
              <ul>
                <li>MCC design and specification</li>
                <li>Switchboard design</li>
                <li>VSD and soft-starter applications</li>
                <li>Power factor correction systems</li>
                <li>Standby generation systems</li>
                <li>Emergency and essential power systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeader label="02" title="SCADA & Communications" subtitle="Monitoring, control, and communications systems for industrial and mining operations." />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>SCADA Systems</h3>
              <ul>
                <li>SCADA system architecture design</li>
                <li>Remote monitoring and control</li>
                <li>PLC and RTU specification</li>
                <li>HMI design and development</li>
                <li>Network design and cybersecurity</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Mining Electrical</h3>
              <ul>
                <li>Underground mining electrical design</li>
                <li>Surface mining electrical systems</li>
                <li>Trailing cable systems</li>
                <li>Mining regulations compliance</li>
                <li>Hazardous area classification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--ice">
        <div className="container">
          <SectionHeader label="03" title="Infrastructure Upgrades & Reliability" subtitle="Improving the performance and extending the life of existing electrical infrastructure." />
          <div className="service-detail__capabilities">
            <div className="service-detail__cap-group">
              <h3>Upgrades</h3>
              <ul>
                <li>Electrical infrastructure audits</li>
                <li>Capacity augmentation studies</li>
                <li>Equipment replacement engineering</li>
                <li>Protection system upgrades</li>
                <li>Arc flash mitigation strategies</li>
              </ul>
            </div>
            <div className="service-detail__cap-group">
              <h3>Reliability & Maintenance</h3>
              <ul>
                <li>Reliability centred maintenance analysis</li>
                <li>Equipment criticality assessment</li>
                <li>Spare parts strategy development</li>
                <li>Condition monitoring integration</li>
                <li>Maintainability reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need Industrial Electrical Engineering?" subtitle="Talk to us about your infrastructure requirements." />
    </main>
  );
}
