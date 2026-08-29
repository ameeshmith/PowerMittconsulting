import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Lightbulb, Settings, Users, Zap, Sun, Factory, HardHat, Flame } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import TechnicalGrid from '../../components/TechnicalGrid/TechnicalGrid';
import { whyPowerMitt } from '../../data/services';
import { industries } from '../../data/industries';
import { getAssetUrl } from '../../utils/assetPath';
import './Home.css';

const whyIcons = { Cpu, Shield, Lightbulb, Settings, Users };

const coreCapabilities = [
  { title: 'Electrical Power Systems', desc: 'Power system studies, HV/LV distribution, substation design & grid compliance.', link: '/services/power-systems', icon: Zap },
  { title: 'Renewable Energy & Decarbonisation', desc: 'Solar, BESS, hydrogen, electrification & net-zero pathway engineering.', link: '/services/energy-transition', icon: Sun },
  { title: 'Carbon Capture & Storage', desc: 'Electrical engineering support for CCS compressor drives & grid interface.', link: '/services/carbon-capture', icon: Factory },
  { title: 'Industrial & Mining Infrastructure', desc: 'Surface/underground mining systems, MCCs, SCADA & brownfield upgrades.', link: '/services/industrial-infrastructure', icon: HardHat },
  { title: 'Owner\'s Engineering', desc: 'Independent technical due diligence, design verification & execution support.', link: '/services/owners-engineering', icon: Shield }
];

export default function Home() {
  return (
    <main>
      <SEO
        title="PowerMitt Consulting | Electrical Power Systems & Energy Engineering"
        description="Specialist electrical power systems and energy engineering consultancy supporting complex industrial, resources and energy projects across Australia."
        path="/"
      />

      {/* === HERO === */}
      <Hero
        label="PowerMitt Consulting"
        title={<>Engineering Power.<br />Enabling Industry.<br />Accelerating the Energy Transition.</>}
        subtitle="Specialist electrical power systems and energy engineering consultancy supporting complex industrial, resources and energy projects across Australia."
        primaryCTA="Explore Our Services"
        primaryLink="/services"
        secondaryCTA="Discuss Your Project"
        secondaryLink="/contact"
      />

      {/* === WHO WE ARE === */}
      <section className="home-intro">
        <div className="container">
          <div className="home-intro__grid">
            <div className="home-intro__content">
              <span className="label">Who We Are</span>
              <h2>Specialist Engineering for Complex Energy & Industrial Projects</h2>
              <hr className="divider" />
              <p>
                PowerMitt Consulting is an Australian engineering consultancy based in Perth, Western Australia, providing specialist electrical power systems and energy engineering expertise to the resources, energy, and industrial sectors.
              </p>
              <p>
                We support our clients across the full project lifecycle — from early-stage concept development through FEED, detailed engineering, commissioning, and into operations. Our focus is on delivering technically rigorous, practical engineering solutions that address the real challenges of complex industrial power systems and the energy transition.
              </p>
              <Link to="/about" className="btn btn--primary" style={{ marginTop: 'var(--space-4)' }}>
                About PowerMitt <ArrowRight size={16} />
              </Link>
            </div>

            <div className="home-intro__visual">
              <div className="home-intro__stat-grid">
                <div className="home-intro__stat">
                  <Zap size={28} className="home-intro__stat-icon" />
                  <span className="home-intro__stat-label">Power Systems</span>
                </div>
                <div className="home-intro__stat">
                  <Sun size={28} className="home-intro__stat-icon" />
                  <span className="home-intro__stat-label">Energy Transition</span>
                </div>
                <div className="home-intro__stat">
                  <Factory size={28} className="home-intro__stat-icon" />
                  <span className="home-intro__stat-label">Industrial</span>
                </div>
                <div className="home-intro__stat">
                  <Shield size={28} className="home-intro__stat-icon" />
                  <span className="home-intro__stat-label">Owner's Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CORE ENGINEERING SERVICES (Clean High-Level Summary) === */}
      <section className="section--ice home-services">
        <div className="container">
          <SectionHeader
            label="Engineering Services"
            title="Specialist Expertise Across the Project Lifecycle"
            subtitle="Explore our specialist service categories."
          />
          <div className="home-services__summary-grid">
            {coreCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Link key={i} to={cap.link} className="home-services__summary-card">
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
          <div className="home-services__cta">
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
          <SectionHeader
            label="Industries We Serve"
            title="Engineering for Demanding Industrial Sectors"
            subtitle="Delivering specialist power and energy engineering for Australia's industrial infrastructure."
            light
          />
          <div className="home-industries__summary-grid">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                to={ind.slug}
                className="home-industries__summary-card"
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

      {/* === WHY POWERMITT === */}
      <section className="section--ice home-why">
        <div className="container">
          <SectionHeader
            label="Why PowerMitt"
            title="Engineering You Can Rely On"
            align="center"
          />
          <div className="home-why__grid">
            {whyPowerMitt.map((item, i) => {
              const Icon = whyIcons[item.icon] || Cpu;
              return (
                <div key={i} className="home-why__item">
                  <div className="home-why__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
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
