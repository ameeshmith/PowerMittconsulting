import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../IndustryDetail.css';

export default function Industrial() {
  return (
    <main>
      <SEO title="Industrial Infrastructure Engineering | PowerMitt Consulting" description="Electrical infrastructure engineering for manufacturing, water treatment, heavy industry, and critical infrastructure — delivering reliable, efficient power systems." path="/industries/industrial" image="/assets/images/industrial-bg.jpg" />
      <Hero variant="industry" bgImage="/assets/images/industrial-bg.jpg" label="Industries / Industrial Infrastructure" title="Industrial Infrastructure" subtitle="Electrical infrastructure engineering for manufacturing, water treatment, heavy industry, and critical infrastructure projects — focused on reliability, efficiency, and modernisation." />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Industry Overview</span>
              <h2>Electrical Infrastructure for Industry</h2>
              <hr className="divider" />
              <p>Industrial infrastructure projects — from manufacturing facilities and water treatment plants to heavy industrial operations — require reliable, well-designed electrical power systems. As operational demands increase and sustainability requirements tighten, many facilities face the dual challenge of modernising ageing infrastructure while improving energy efficiency.</p>
              <p>PowerMitt provides electrical infrastructure engineering for industrial clients, supporting projects ranging from new-build facility design through to infrastructure upgrades, capacity augmentation, and energy efficiency improvements.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Industrial Sectors</h4>
              <ul>
                <li>Manufacturing facilities</li>
                <li>Water & wastewater treatment</li>
                <li>Heavy industrial operations</li>
                <li>Critical infrastructure</li>
                <li>Food & beverage processing</li>
                <li>Port and logistics infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Have an Industrial Project?" subtitle="Talk to us about your infrastructure engineering requirements." />
    </main>
  );
}

