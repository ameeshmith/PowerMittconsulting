import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import DarkHalftoneBackground from '../../components/UI/DarkHalftoneBackground';
import { industries } from '../../data/industries';
import { getAssetUrl } from '../../utils/assetPath';
import './Home.css';

const heroStats = [
  { value: '30+', label: 'Years Experience', subtext: 'Heavy Power & Industrial' },
  { value: '100%', label: 'Independent Advisory', subtext: 'Vendor-Neutral Engineering' },
  { value: 'AEMO / WEM', label: 'Grid Compliance', subtext: 'Connection & Compliance Studies' },
  { value: 'National', label: 'Perth, WA HQ', subtext: 'Australia-Wide Delivery' }
];

export default function Home() {

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
        stats={heroStats}
        useNebula={true}
      />

      {/* === ABOUT / ENGINEERING RIGOUR SECTION === */}
      <section className="home-about">
        <DarkHalftoneBackground showHalftone={false} />
        <div className="container relative z-10">
          <div className="home-about__grid">
            <div className="home-about__content">
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
                    <span className="home-about__stat-num">132kV+</span>
                    <span className="home-about__stat-label">HV Network Studies</span>
                  </div>
                  <div className="home-about__stat-sep" />
                  <div className="home-about__stat">
                    <span className="home-about__stat-num home-about__stat-num--green">Vendor-Neutral</span>
                    <span className="home-about__stat-label">Zero Hardware Sales</span>
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
            label="Critical Sectors"
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
                  <div className="home-industries__media">
                    <img
                      src={getAssetUrl(ind.bgImage)}
                      alt={ind.title}
                      className="home-industries__img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="home-industries__media-overlay" />
                    <span className={`home-industries__tag ${isGreenSector ? 'home-industries__tag--green' : ''}`}>
                      {isGreenSector ? 'Energy Transition' : 'Heavy Industry'}
                    </span>
                  </div>

                  <div className="home-industries__panel">
                    <h3 className="home-industries__title">{ind.title}</h3>
                    <p className="home-industries__desc">{ind.shortDescription}</p>
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
