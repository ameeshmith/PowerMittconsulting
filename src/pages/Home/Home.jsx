import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Factory, HardHat, Shield, CheckCircle2, Award, Activity } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import WordHighlight from '../../components/WordHighlight/WordHighlight';
import { industries } from '../../data/industries';
import { getAssetUrl } from '../../utils/assetPath';
import './Home.css';

const heroStats = [
  { value: '30+', label: 'Years Experience', subtext: 'Heavy Power & Industrial' },
  { value: '100%', label: 'Independent Advisory', subtext: 'Vendor-Neutral Engineering' },
  { value: 'AEMO / WEM', label: 'Grid Compliance', subtext: 'Connection & Compliance Studies' },
  { value: 'National Reach', label: 'Perth, WA HQ', subtext: 'Australia-Wide Delivery' }
];

const coreCapabilities = [
  { 
    title: 'Electrical Power Systems', 
    desc: 'Comprehensive power system studies, HV/LV distribution design, substation engineering & grid connection compliance.', 
    link: '/services/power-systems', 
    icon: Zap, 
    theme: 'blue',
    tag: 'Grid & Transmission'
  },
  { 
    title: 'Renewable Energy & Decarbonisation', 
    desc: 'Utility-scale Solar PV, BESS integration, wind, hydrogen, and industrial electrification strategies within grid constraints.', 
    link: '/services/energy-transition', 
    icon: Sun, 
    theme: 'green',
    tag: 'Renewables & Storage'
  },
  { 
    title: 'Carbon Capture & Storage (CCS)', 
    desc: 'Specialist electrical engineering for mega-compressor motor drives, medium-voltage VSD topologies & power infrastructure.', 
    link: '/services/carbon-capture', 
    icon: Factory, 
    theme: 'green',
    tag: 'Clean Transition'
  },
  { 
    title: 'Industrial & Mining Infrastructure', 
    desc: 'Underground & open-pit mining power distribution, mineral processing design, trailing cables, and brownfield upgrades.', 
    link: '/services/industrial-infrastructure', 
    icon: HardHat, 
    theme: 'blue',
    tag: 'Heavy Industry'
  },
  { 
    title: "Owner's Engineering & Advisory", 
    desc: 'Independent technical due diligence, design verification, vendor evaluation & capital project execution advisory.', 
    link: '/services/owners-engineering', 
    icon: Shield, 
    theme: 'blue',
    tag: 'Independent Advisory'
  }
];

export default function Home() {
  return (
    <main className="home-page">
      <SEO
        title="PowerMitt Consulting | Electrical Power Systems & Energy Engineering"
        description="Specialist electrical power systems and energy engineering consultancy supporting complex industrial, resources and energy projects across Australia."
        path="/"
      />

      {/* === HERO SECTION WITH ETERNAL-STYLE EDITORIAL HIGHLIGHTS === */}
      <Hero
        badge="ENGINEERING CONSULTANCY"
        title={
          <>
            Engineering{' '}
            <WordHighlight color="blue" variant="oval">
              excellence
            </WordHighlight>{' '}
            from concept to{' '}
            <WordHighlight color="green" variant="oval">
              execution
            </WordHighlight>
            .
          </>
        }
        subtitle="PowerMitt Consulting delivers independent electrical power systems, grid connection, and energy transition engineering for heavy industry, mining, and renewable infrastructure across Australia."
        primaryCTA="Explore Services"
        primaryLink="/services"
        secondaryCTA="View Projects"
        secondaryLink="/projects"
        stats={heroStats}
        bgImage="/assets/images/hero-modern-skyline.jpg"
      />

      {/* === CAPABILITIES SHOWCASE (Eternal-inspired Interactive Cards) === */}
      <section className="home-services">
        <div className="container">
          <div className="home-services__header-row">
            <div className="home-services__title-block">
              <span className="label">Specialist Capabilities</span>
              <h2 className="home-services__title">
                Powering Australia’s{' '}
                <WordHighlight color="blue" variant="oval">
                  energy
                </WordHighlight>{' '}
                infrastructure.
              </h2>
              <span className="section-title-line section-title-line--gradient" />
            </div>
            <p className="home-services__subtitle">
              At the core of PowerMitt is engineering rigour, independent integrity, and deep technical depth across both legacy high-voltage systems and modern clean energy transitions.
            </p>
          </div>

          <div className="home-services__grid">
            {coreCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Link
                  key={i}
                  to={cap.link}
                  className={`home-capability-card home-capability-card--${cap.theme}`}
                >
                  <div className="home-capability-card__header">
                    <span className="home-capability-card__tag">{cap.tag}</span>
                    <div className="home-capability-card__icon">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="home-capability-card__title">{cap.title}</h3>
                  <p className="home-capability-card__desc">{cap.desc}</p>
                  <div className="home-capability-card__footer">
                    <span>Explore Capability</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="home-services__footer text-center">
            <Link to="/services" className="btn btn--outline">
              View Complete Services Portfolio <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* === ABOUT SECTION (Blueprint Coordinate Grid & Minimalist Two-Column) === */}
      <section className="home-about section--ice grid_bg">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__content">
              <span className="label label--green">Engineering Advisory</span>
              <h2>
                Independent{' '}
                <WordHighlight color="green" variant="oval">
                  rigour
                </WordHighlight>{' '}
                & sustainable engineering.
              </h2>
              <hr className="divider" />
              <p>
                PowerMitt Consulting Pty Ltd is an independent electrical power systems consultancy based in Perth, Western Australia. Founded by <strong>Dinesh Mithanthaya</strong>, our consultancy brings over 20+ years of high-calibre technical expertise to complex industrial and utility-scale projects.
              </p>
              <p>
                We do not sell equipment or maintain vendor exclusivity. Our recommendations are driven solely by engineering physics, reliability, regulatory compliance, and life-cycle asset value.
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
                <Link to="/about" className="btn btn--primary">
                  About Dinesh & PowerMitt <ArrowRight size={15} />
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

      {/* === INDUSTRIES SECTION (Dark Executive Grid) === */}
      <section className="section--dark home-industries">
        <div className="container">
          <SectionHeader
            label="Industries We Serve"
            title="Engineering for Australia’s Heavy Industries"
            subtitle="Delivering specialist power and energy transition engineering for demanding resources, utilities, and infrastructure."
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
                      {isGreenSector ? 'Energy Transition' : 'Heavy Industry'}
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
        title="Ready to De-Risk Your Electrical Power Infrastructure?"
        subtitle="Connect directly with Dinesh Mithanthaya and the PowerMitt engineering team."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}
