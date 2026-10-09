import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Factory, HardHat, Shield, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import SpotlightCard from '../../components/UI/SpotlightCard';
import { industries } from '../../data/industries';
import { getAssetUrl } from '../../utils/assetPath';
import './Home.css';

const heroStats = [
  { value: '30+', label: 'Years Experience', subtext: 'Heavy Power & Industrial' },
  { value: '100%', label: 'Independent Advisory', subtext: 'Vendor-Neutral Engineering' },
  { value: 'AEMO / WEM', label: 'Grid Compliance', subtext: 'Connection & Compliance Studies' },
  { value: 'National', label: 'Perth, WA HQ', subtext: 'Australia-Wide Delivery' }
];

const coreCapabilities = [
  {
    id: '01',
    title: 'Electrical Power Systems',
    desc: 'Comprehensive power system studies, HV/LV distribution design, substation engineering & grid connection compliance.',
    link: '/services/power-systems',
    icon: Zap,
    category: 'grid',
    theme: 'blue',
    tag: 'Grid & Transmission'
  },
  {
    id: '02',
    title: 'Renewable Energy & Storage',
    desc: 'Utility-scale Solar PV, BESS integration, wind, hydrogen, and industrial electrification strategies within grid constraints.',
    link: '/services/energy-transition',
    icon: Sun,
    category: 'transition',
    theme: 'green',
    tag: 'Renewables & Storage'
  },
  {
    id: '03',
    title: 'Carbon Capture & Storage (CCS)',
    desc: 'Specialist electrical engineering for mega-compressor motor drives, medium-voltage VSD topologies & power infrastructure.',
    link: '/services/carbon-capture',
    icon: Factory,
    category: 'transition',
    theme: 'green',
    tag: 'Clean Transition'
  },
  {
    id: '04',
    title: 'Industrial & Mining Power',
    desc: 'Underground & open-pit mining power distribution, mineral processing design, trailing cables, and brownfield upgrades.',
    link: '/services/industrial-infrastructure',
    icon: HardHat,
    category: 'industry',
    theme: 'blue',
    tag: 'Heavy Industry'
  },
  {
    id: '05',
    title: "Owner's Engineering & EPC Delivery",
    desc: 'Independent technical due diligence, design verification, value engineering & EPC delivery support across major capital projects.',
    link: '/services/owners-engineering',
    icon: Shield,
    category: 'advisory',
    theme: 'blue',
    tag: 'Advisory & EPC Delivery'
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCapabilities = activeCategory === 'all'
    ? coreCapabilities
    : coreCapabilities.filter(c => c.category === activeCategory);

  return (
    <main className="home-page">
      <SEO
        title="PowerMitt Consulting | Electrical Power Systems & Energy Engineering"
        description="Specialist electrical power systems and energy engineering consultancy supporting complex industrial, resources and energy projects across Australia."
        path="/"
      />

      {/* === EPIKO STUDIOS EDITORIAL OPENING HERO === */}
      <Hero
        badge="Independent Power & Energy Consultancy"
        title={
          <>
            WHERE POWER <br />
            <span className="hero-modern__serif-accent">meets precision.</span>
          </>
        }
        subtitle="PowerMitt delivers independent electrical power systems, grid compliance, and energy transition engineering for heavy industry, mining, and utility grids across Australia. 30+ years of high-calibre technical leadership."
        primaryCTA="Start a Project"
        primaryLink="/contact"
        secondaryCTA="Explore Services"
        secondaryLink="/services"
        stats={heroStats}
        bgImage="/assets/images/hero-modern-skyline.jpg"
      />

      {/* === CAPABILITIES SHOWCASE (Epiko Filter Pills & Serial Cards) === */}
      <section className="home-services">
        <div className="container">
          <div className="home-services__header-row">
            <div className="home-services__title-block">
              <span className="epiko-badge">
                <span className="epiko-status-dot" />
                <span>CAPABILITIES</span>
              </span>
              <h2 className="home-services__title">
                Core Capabilities & Services
              </h2>
              <p className="home-services__subtitle">
                Five core specialisations de-risking high-voltage power systems, heavy industrial assets, and modern renewable energy grids across Australia.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="home-services__filters" role="group" aria-label="Filter capabilities">
              <button
                type="button"
                className={`epiko-filter-pill ${activeCategory === 'all' ? 'epiko-filter-pill--active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Services
              </button>
              <button
                type="button"
                className={`epiko-filter-pill ${activeCategory === 'grid' ? 'epiko-filter-pill--active' : ''}`}
                onClick={() => setActiveCategory('grid')}
              >
                Grid & Power
              </button>
              <button
                type="button"
                className={`epiko-filter-pill ${activeCategory === 'transition' ? 'epiko-filter-pill--active-green' : ''}`}
                onClick={() => setActiveCategory('transition')}
              >
                Energy Transition
              </button>
              <button
                type="button"
                className={`epiko-filter-pill ${activeCategory === 'industry' ? 'epiko-filter-pill--active' : ''}`}
                onClick={() => setActiveCategory('industry')}
              >
                Heavy Industry
              </button>
            </div>
          </div>

          <div className="home-services__grid">
            {filteredCapabilities.map((cap) => {
              const Icon = cap.icon;
              const isGreen = cap.theme === 'green';
              return (
                <SpotlightCard
                  key={cap.id}
                  as={Link}
                  to={cap.link}
                  spotlightColor={isGreen ? 'rgba(5, 150, 105, 0.08)' : 'rgba(31, 95, 214, 0.08)'}
                  borderColor={isGreen ? 'rgba(5, 150, 105, 0.3)' : 'rgba(31, 95, 214, 0.3)'}
                  className={`epiko-capability-card ${isGreen ? 'epiko-capability-card--green' : ''}`}
                >
                  <div className="epiko-capability-card__top">
                    <span className={`epiko-capability-card__tag ${isGreen ? 'epiko-capability-card__tag--green' : ''}`}>
                      {cap.tag}
                    </span>
                  </div>

                  <div className={`epiko-capability-card__icon-box ${isGreen ? 'epiko-capability-card__icon-box--green' : ''}`}>
                    <Icon size={20} />
                  </div>

                  <h3 className="epiko-capability-card__title">
                    {cap.title}
                  </h3>
                  <p className="epiko-capability-card__desc">
                    {cap.desc}
                  </p>

                  <div className="epiko-capability-card__footer">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="epiko-arrow" />
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          <div className="home-services__footer text-center">
            <Link to="/services" className="epiko-outline-btn">
              View Complete Services Directory <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* === ABOUT / ENGINEERING RIGOUR SECTION === */}
      <section className="home-about section--ice grid_bg">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__content">
              <span className="epiko-badge">
                <span className="epiko-status-dot epiko-status-dot--green" />
                <span>ENGINEERING RIGOUR</span>
              </span>
              <h2 className="home-about__title">
                Independent Engineering Rigour & Integrity
              </h2>
              <p className="home-about__lead">
                PowerMitt Consulting Pty Ltd is an independent electrical power engineering advisory based in Perth, Western Australia. Founded by <strong>Dinesh Mithanthaya</strong>, our leadership combines several decades of technical depth across utility, power generation, transmission, industrial, mining, and renewable energy sectors.
              </p>
              <p>
                We do not sell hardware, represent OEMs, or maintain vendor exclusivity. Working collaboratively with owners, EPC contractors and equipment vendors, our recommendations are driven strictly by engineering physics, system reliability, regulatory compliance, and total lifecycle asset value.
              </p>

              <div className="home-about__checklist">
                <div className="home-about__check-item">
                  <CheckCircle2 size={18} className="text-[#1F5FD6] shrink-0" />
                  <span>100% vendor-neutral power systems analysis & verified models</span>
                </div>
                <div className="home-about__check-item">
                  <CheckCircle2 size={18} className="text-[#059669] shrink-0" />
                  <span>Pragmatic energy transition, storage & decarbonisation pathways</span>
                </div>
                <div className="home-about__check-item">
                  <CheckCircle2 size={18} className="text-[#1F5FD6] shrink-0" />
                  <span>Deep Australian grid connection (AEMO / WEM / NSP) governance</span>
                </div>
              </div>

              <div className="home-about__action">
                <Link to="/about" className="epiko-pill-btn-blue">
                  About Dinesh & PowerMitt <ArrowRight size={14} />
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
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="home-about__img-overlay" />
                </div>
                <div className="home-about__stats">
                  <div className="home-about__stat">
                    <span className="home-about__stat-num font-serif italic">30+</span>
                    <span className="home-about__stat-label">Years Track Record</span>
                  </div>
                  <div className="home-about__stat-sep" />
                  <div className="home-about__stat">
                    <span className="home-about__stat-num font-serif italic text-[#059669]">100%</span>
                    <span className="home-about__stat-label">Independent Advice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === INDUSTRIES / SECTORS SECTION (Executive Dark Contrast) === */}
      <section className="home-industries">
        <div className="container">
          <SectionHeader
            label="CRITICAL SECTORS"
            light={true}
            title="Critical Sectors We Serve"
            subtitle="Delivering specialised power system studies, design verification, and grid integration for demanding resources, utilities, and infrastructure."
          />

          <div className="home-industries__grid">
            {industries.map((ind) => {
              const isGreenSector = ind.id === 'energy-utilities';
              return (
                <Link
                  key={ind.id}
                  to={ind.slug}
                  className="home-industries__card"
                >
                  <div
                    className="home-industries__bg"
                    style={{ backgroundImage: `url(${getAssetUrl(ind.bgImage)})` }}
                  />
                  <div className="home-industries__overlay" />
                  <div className="home-industries__card-header">
                    <span className={`home-industries__tag ${isGreenSector ? 'home-industries__tag--green' : ''}`}>
                      {isGreenSector ? 'Energy Transition' : 'Heavy Industry'}
                    </span>
                  </div>
                  <div className="home-industries__content">
                    <h3>{ind.title}</h3>
                    <p>{ind.shortDescription}</p>
                    <span className={`home-industries__link ${isGreenSector ? 'home-industries__link--green' : ''}`}>
                      Explore Sector <ArrowRight size={14} className="epiko-arrow" />
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
        title="Ready to De-Risk Your Electrical Infrastructure?"
        subtitle="Connect directly with Dinesh Mithanthaya and the PowerMitt engineering team for independent advice and project verification."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </main>
  );
}
