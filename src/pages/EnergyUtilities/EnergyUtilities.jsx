import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../IndustryDetail.css';

export default function EnergyUtilities() {
  return (
    <main>
      <SEO title="Energy & Utilities Engineering | PowerMitt Consulting" description="Engineering for renewable generation, battery storage, grid connections, transmission, distribution, and utility infrastructure supporting the energy transition." path="/industries/energy-utilities" image="/assets/images/renewable-bess-bg.jpg" />
      <Hero
        variant="industry"
        bgImage="/assets/images/renewable-bess-bg.jpg"
        label="Industries / Utility & Power Industry"
        title="Utility & Power Industry"
        subtitle="Decades of leadership across utility, power generation, transmission, distribution, grid management, and renewable integration — concept to commissioning."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label label--teal">Utility Leadership</span>
              <h2>Utility & Power Industry Experience</h2>
              <hr className="divider" />
              <p>
                PowerMitt's leadership team combines several decades of experience across utility, power generation, transmission, distribution, industrial, grid management and renewable energy sectors.
              </p>
              <p>
                The PowerMitt team has successfully supported utility operators, energy developers, mining companies and industrial clients in developing robust and reliable power systems that comply with regulatory and network requirements.
              </p>
              <p>
                <strong>Concept to Commissioning:</strong> Our end-to-end delivery experience spans conventional power generation, renewable energy projects, battery energy storage systems (BESS), microgrids, industrial power systems and large-scale grid-connected infrastructure.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Concept to Commissioning</h4>
              <ul>
                <li>Conventional Power Generation</li>
                <li>Utility-Scale Renewables (Solar & Wind)</li>
                <li>Battery Energy Storage Systems (BESS)</li>
                <li>Microgrids & Islanded Networks</li>
                <li>Transmission & Distribution Grids</li>
                <li>AEMO / WEM Grid Compliance</li>
                <li>EPC Support & Optimised Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Have an Energy Project?" subtitle="Talk to us about your grid connection or renewable energy requirements." variant="teal" />
    </main>
  );
}

