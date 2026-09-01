import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Factory, HardHat, Shield, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import { industries } from '../../data/industries';
import { getAssetUrl } from '../../utils/assetPath';
import './Home.css';

const heroStats = [
  { value: '30+', label: 'Years of Experience', subtext: 'Industrial & Power Leadership' },
  { value: '100%', label: 'Independent Advisory', subtext: 'Vendor-Neutral Solutions' },
  { value: 'AEMO / WEM', label: 'Grid Compliance', subtext: 'Full Lifecycle Modeling' },
  { value: 'National Reach', label: 'Perth, WA HQ', subtext: 'Australia-Wide Delivery' }
];

const coreCapabilities = [
  { title: 'Electrical Power Systems', desc: 'Power system studies, HV/LV distribution, substation design & grid compliance.', link: '/services/power-systems', icon: Zap, theme: 'blue' },
  { title: 'Renewable Energy & Decarbonisation', desc: 'Solar, BESS, hydrogen, electrification & net-zero pathway engineering.', link: '/services/energy-transition', icon: Sun, theme: 'green' },
  { title: 'Carbon Capture & Storage', desc: 'Electrical engineering support for CCS compressor drives & grid interface.', link: '/services/carbon-capture', icon: Factory, theme: 'green' },
  { title: 'Industrial & Mining Infrastructure', desc: 'Surface/underground mining systems, MCCs, SCADA & brownfield upgrades.', link: '/services/industrial-infrastructure', icon: HardHat, theme: 'blue' },
  { title: "Owner's Engineering", desc: 'Independent technical due diligence, design verification & execution support.', link: '/services/owners-engineering', icon: Shield, theme: 'blue' }
];

export default function Home() {
  return (
    <main>
      <SEO
        title="PowerMitt Consulting | Engineering Excellence from Concept to Execution"
        description="Specialist electrical power systems and energy engineering consultancy supporting complex industrial, resources and energy projects across Australia."
        path="/"
      />

      {/* === HERO SECTION MATCHING REFERENCE DESIGN === */}
      <Hero
        badge="ENGINEERING CONSULTANCY"
        title={
          <>
            Engineering <span className="hero-modern__highlight">excellence</span><br />
            from concept to execution.
          </>
        }
        subtitle="PowerMitt Consulting delivers independent power systems, grid connection, and energy transition engineering for landmark projects across Mining, Energy, Oil & Gas, and Heavy Infrastructure — built on technical rigour, efficiency and ISO standards."
        primaryCTA="Explore Services"
        primaryLink="/services"
        secondaryCTA="View Projects"
        secondaryLink="/projects"
        stats={heroStats}
        bgImage="/assets/images/hero-modern-skyline.jpg"
      />

      {/* === ABOUT SECTION (Minimalist Two-Column) === */}
      <section className="home-about section--ice">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__content">
              <span className="label">About PowerMitt Consulting</span>
              <h2>Independent Engineering Rigour & Sustainable Innovation</h2>
              <hr className="divider" />
              <p>
                PowerMitt Consulting is an independent electrical power systems and energy engineering consultancy based in Perth, Western Australia. We partner with heavy industrial, resources, and utility clients to deliver robust power infrastructure and accelerate the energy transition.
              </p>
              <p>
                Our engineering approach combines technical depth, practical site experience, and forward-looking decarbonisation strategies to de-risk capital projects and optimize operational efficiency.
              </p>
              
              <div className="home-about__checklist">
                <div className="home-about__check-item">
                  <CheckCircle2 size={18} className="home-about__check-icon home-about__check-icon--blue" />
                  <span>Independent, vendor-neutral power systems advisory</span>
                </div>
                <div className="home-about__check-item">
                  <CheckCircle2 size={18} className="home-about__check-icon home-about__check-icon--green" />
                  <span>Practical energy transition & decarbonisation pathways</span>
                </div>
                <div className="home-about__check-item">
                  <CheckCircle2 size={18} className="home-about__check-icon home-about__check-icon--blue" />
                  <span>Deep Australian grid connection & compliance expertise</span>
                </div>
              </div>

              <div className="home-about__action">
                <Link to="/about" className="btn btn--outline">
                  Learn More About Us <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="home-about__media">
              <div className="home-about__card">
                <div className="home-about__img-wrap">
                  <img 
                    src={getAssetUrl('/assets/images/hero-about.jpg')} 
                    alt="PowerMitt Consulting Engineering Team"
                    className="home-about__img"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="home-about__img-overlay" />
                </div>
                <div className="home-about__stats">
                  <div className="home-about__stat">
                    <span className="home-about__stat-num home-about__stat-num--blue">30+</span>
                    <span className="home-about__stat-label">Years Experience</span>
                  </div>
                  <div className="home-about__stat-sep" />
                  <div className="home-about__stat">
                    <span className="home-about__stat-num home-about__stat-num--green">100%</span>
                    <span className="home-about__stat-label">Client-Centric</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION (Clean Blue & Green Grid) === */}
      <section className="home-services">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Specialist Expertise Across the Project Lifecycle"
            subtitle="End-to-end electrical engineering solutions tailored for complex power generation, mining, and energy transition assets."
            align="center"
          />

          <div className="home-services__grid">
            {coreCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Link key={i} to={cap.link} className={`home-services__card home-services__card--${cap.theme}`}>
                  <div className={`home-services__icon-badge home-services__icon-badge--${cap.theme}`}>
                    <Icon size={20} />
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                  <span className={`home-services__link home-services__link--${cap.theme}`}>
                    Explore Service <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="home-services__footer text-center">
            <Link to="/services" className="btn btn--outline">
              View All Services Details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* === INDUSTRIES SECTION (Dark Executive Grid) === */}
      <section className="section--dark home-industries">
        <div className="container">
          <SectionHeader
            label="Industries We Serve"
            title="Engineering for Demanding Industrial Sectors"
            subtitle="Delivering specialist power and energy engineering for Australia's industrial infrastructure."
            light
          />

          <div className="home-industries__grid">
            {industries.map((ind) => {
              const isGreenSector = ind.id === 'energy-utilities';
              return (
                <Link
                  key={ind.id}
                  to={ind.slug}
                  className="home-industries__card"
                  style={{ backgroundImage: `url(${getAssetUrl(ind.bgImage)})` }}
                >
                  <div className="home-industries__overlay" />
                  <div className="home-industries__content">
                    <span className={`home-industries__tag ${isGreenSector ? 'home-industries__tag--green' : ''}`}>
                      Sector
                    </span>
                    <h3>{ind.title}</h3>
                    <p>{ind.shortDescription}</p>
                    <span className={`home-industries__link ${isGreenSector ? 'home-industries__link--green' : ''}`}>
                      Explore Industry <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* === CTA BANNER === */}
      <CTABanner
        title="Have a Complex Engineering Challenge?"
        subtitle="Let's discuss how PowerMitt can support your project."
        buttonText="Contact PowerMitt"
        buttonLink="/contact"
      />
    </main>
  );
}
