import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../IndustryDetail.css';

export default function OilGas() {
  return (
    <main>
      <SEO title="Oil & Gas Engineering | PowerMitt Consulting" description="Electrical engineering for offshore facilities, LNG plants, processing facilities, and brownfield modifications in complex and hazardous industrial environments." path="/industries/oil-gas" image="/assets/images/oil-rig-bg.jpg" />
      <Hero
        variant="industry"
        bgImage="/assets/images/oil-rig-bg.jpg"
        label="Industries / Offshore Oil & Gas"
        title="Offshore Oil & Gas"
        subtitle="Practical offshore electrical engineering experience gained through support of major offshore developments and modifications in Australia and internationally — delivering robust, fit-for-purpose solutions."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Offshore Capability</span>
              <h2>Practical Offshore Electrical Engineering</h2>
              <hr className="divider" />
              <p>
                PowerMitt Consulting brings practical offshore electrical engineering experience gained through support of major offshore developments and modifications in Australia and internationally.
              </p>
              <p>
                PowerMitt understands the technical, operational and safety challenges associated with offshore facilities and delivers practical fit-for-purpose solutions that align with project objectives and operational requirements.
              </p>
              <p>
                Recent experience includes engineering support associated with offshore developments including power system integration studies, electrical infrastructure assessments, switchgear and transformer evaluations, utility system optimisation, renewable integration concepts and decarbonisation opportunities.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Offshore Specialisations</h4>
              <ul>
                <li>Normal Unattended Facilities (NUF)</li>
                <li>Offshore processing & utilities</li>
                <li>Brownfield life extension</li>
                <li>Gas compression drives & export</li>
                <li>Power generation & distribution</li>
                <li>RAM improvement initiatives</li>
                <li>Decarbonisation & renewables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Have an Oil & Gas Project?" subtitle="Talk to us about your electrical engineering requirements." />
    </main>
  );
}

