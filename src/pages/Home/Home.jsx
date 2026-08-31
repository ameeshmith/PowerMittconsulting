import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Factory, HardHat, Shield } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import TechnicalGrid from '../../components/TechnicalGrid/TechnicalGrid';
import { industries } from '../../data/industries';
import { getAssetUrl } from '../../utils/assetPath';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Home.css';

const coreCapabilities = [
  { title: 'Electrical Power Systems', desc: 'Power system studies, HV/LV distribution, substation design & grid compliance.', link: '/services/power-systems', icon: Zap },
  { title: 'Renewable Energy & Decarbonisation', desc: 'Solar, BESS, hydrogen, electrification & net-zero pathway engineering.', link: '/services/energy-transition', icon: Sun },
  { title: 'Carbon Capture & Storage', desc: 'Electrical engineering support for CCS compressor drives & grid interface.', link: '/services/carbon-capture', icon: Factory },
  { title: 'Industrial & Mining Infrastructure', desc: 'Surface/underground mining systems, MCCs, SCADA & brownfield upgrades.', link: '/services/industrial-infrastructure', icon: HardHat },
  { title: "Owner's Engineering", desc: 'Independent technical due diligence, design verification & execution support.', link: '/services/owners-engineering', icon: Shield }
];

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <SEO
        title="PowerMitt Consulting | Electrical Power Systems & Energy Engineering"
        description="Specialist electrical power systems and energy engineering consultancy supporting complex industrial, resources and energy projects across Australia."
        path="/"
      />

      <Hero
        label="PowerMitt Consulting"
        title={<>Engineering Power.<br />Enabling Industry.<br />Accelerating the Energy Transition.</>}
        subtitle="Specialist electrical power systems and energy engineering consultancy based in Perth, Western Australia."
        primaryCTA="Explore Our Services"
        primaryLink="/services"
        bgImage="/assets/images/hero-nature-energy.jpg"
      />


      {/* === CORE ENGINEERING SERVICES === */}
      <section className="section--ice home-services">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              label="Engineering Services"
              title="Specialist Expertise Across the Project Lifecycle"
              subtitle="Explore our specialist service categories."
            />
          </div>
          <div className="home-services__summary-grid">
            {coreCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Link key={i} to={cap.link} className={`home-services__summary-card reveal reveal--delay-${Math.min(i + 1, 5)}`}>
                  <div className="home-services__summary-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                  <span className="home-services__summary-link">
                    Explore Service <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="home-services__cta reveal">
            <Link to="/services" className="btn btn--outline">
              View All Services Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* === KEY INDUSTRIES === */}
      <section className="section--dark home-industries">
        <TechnicalGrid variant="dark" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal">
            <SectionHeader
              label="Industries We Serve"
              title="Engineering for Demanding Industrial Sectors"
              subtitle="Delivering specialist power and energy engineering for Australia's industrial infrastructure."
              light
            />
          </div>
          <div className="home-industries__summary-grid">
            {industries.map((ind, i) => (
              <Link
                key={ind.id}
                to={ind.slug}
                className={`home-industries__summary-card reveal reveal--delay-${Math.min(i + 1, 4)}`}
                style={{ backgroundImage: `url(${getAssetUrl(ind.bgImage)})` }}
              >
                <div className="home-industries__summary-overlay" />
                <div className="home-industries__summary-content">
                  <h3>{ind.title}</h3>
                  <p>{ind.shortDescription}</p>
                  <span className="home-industries__summary-link">
                    Explore Industry <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTACT CTA === */}
      <CTABanner
        title="Have a Complex Engineering Challenge?"
        subtitle="Let's discuss how PowerMitt can support your project."
        buttonText="Contact PowerMitt"
        buttonLink="/contact"
      />
    </main>
  );
}
