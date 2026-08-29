import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Lightbulb, Settings, Users, Droplets, Battery, Wind, Flame, Zap, Sun, Factory, HardHat } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import Timeline from '../../components/Timeline/Timeline';
import CTABanner from '../../components/CTABanner/CTABanner';
import TechnicalGrid from '../../components/TechnicalGrid/TechnicalGrid';
import { services, engineeringLifecycle, whyPowerMitt } from '../../data/services';
import { industries } from '../../data/industries';
import './Home.css';

const industryIcons = {
  'oil-gas': <Flame size={64} />,
  'mining-resources': <HardHat size={64} />,
  'energy-utilities': <Zap size={64} />,
  'industrial': <Factory size={64} />
};

const whyIcons = { Cpu, Shield, Lightbulb, Settings, Users };

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
              <Link to="/about" className="btn btn--ghost">
                About PowerMitt <ArrowRight size={16} className="btn-arrow" />
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

      {/* === SERVICES === */}
      <section className="section--ice home-services">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Engineering Expertise Across the Energy Lifecycle"
            subtitle="Specialist capabilities spanning power system engineering, energy transition, and industrial infrastructure."
          />
          <div className="home-services__grid">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                number={s.number}
                title={s.title}
                description={s.shortDescription}
                capabilities={s.capabilities}
                icon={s.icon}
                slug={s.slug}
                bgImage={s.bgImage}
              />
            ))}
          </div>
          <div className="home-services__cta">
            <Link to="/services" className="btn btn--outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* === INDUSTRIES === */}
      <section className="section--dark home-industries">
        <TechnicalGrid variant="dark" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionHeader
            label="Industries We Serve"
            title="Engineering for Complex Industrial Sectors"
            subtitle="Supporting Australia's most demanding industries with specialist power system and energy engineering expertise."
            light
          />
          <div className="home-industries__grid">
            {industries.map((ind) => (
              <IndustryCard
                key={ind.id}
                title={ind.title}
                description={ind.shortDescription}
                slug={ind.slug}
                capabilities={ind.technologies}
                icon={industryIcons[ind.id]}
                bgImage={ind.bgImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === ENGINEERING LIFECYCLE === */}
      <section className="home-lifecycle">
        <div className="container">
          <SectionHeader
            label="Engineering Lifecycle"
            title="Supporting Projects From Concept to Operations"
            subtitle="PowerMitt provides engineering support across the full project lifecycle."
            align="center"
          />
          <Timeline stages={engineeringLifecycle} />
          <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
            <Link to="/about" className="btn btn--outline">
              Our Engineering Approach <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* === ENERGY TRANSITION === */}
      <section className="home-energy section--navy">
        <div className="container">
          <div className="home-energy__grid">
            <div className="home-energy__content">
              <span className="label label--teal">Energy Transition</span>
              <h2>Engineering the Path to Lower-Carbon Industry</h2>
              <hr className="divider" />
              <p>
                The energy transition requires practical engineering solutions that work within the constraints of existing industrial power systems. PowerMitt helps clients navigate this transition through renewable integration, battery energy storage, hydrogen infrastructure, electrification, carbon capture, and decarbonisation strategies.
              </p>
              <Link to="/energy-transition" className="btn btn--teal">
                Explore Energy Transition <ArrowRight size={16} />
              </Link>
            </div>
            <div className="home-energy__visual">
              <div className="home-energy__tech-grid">
                {[
                  { icon: <Sun size={24} />, label: 'Renewable Integration' },
                  { icon: <Battery size={24} />, label: 'Battery Storage' },
                  { icon: <Zap size={24} />, label: 'Electrification' },
                  { icon: <Droplets size={24} />, label: 'Hydrogen' },
                  { icon: <Factory size={24} />, label: 'Carbon Capture' },
                  { icon: <Wind size={24} />, label: 'Decarbonisation' }
                ].map((tech, i) => (
                  <div key={i} className="home-energy__tech-item">
                    <div className="home-energy__tech-icon">{tech.icon}</div>
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PROJECTS === */}
      <section className="home-projects">
        <div className="container">
          <SectionHeader
            label="Projects & Experience"
            title="Engineering Experience Across Complex Projects"
            subtitle="Our portfolio demonstrates specialist expertise across power systems, energy, mining, and industrial sectors."
          />
          <div className="home-projects__categories">
            {['Power Systems', 'Mining', 'Energy', 'BESS', 'Industrial', 'CCS'].map((cat) => (
              <span key={cat} className="home-projects__cat">{cat}</span>
            ))}
          </div>
          <div className="home-projects__placeholder">
            <div className="home-projects__placeholder-inner">
              <Cpu size={40} />
              <h3>Project Portfolio</h3>
              <p>Detailed project case studies and experience will be available here.</p>
              <Link to="/projects" className="btn btn--outline">
                View Projects & Experience <ArrowRight size={16} />
              </Link>
            </div>
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
      <CTABanner />
    </main>
  );
}
