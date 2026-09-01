import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, ShieldCheck, Zap, Lightbulb, Compass, Award } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Timeline from '../../components/Timeline/Timeline';
import CTABanner from '../../components/CTABanner/CTABanner';
import { getAssetUrl } from '../../utils/assetPath';
import './About.css';

const companyMilestones = [
  { year: '1990', stage: 'Foundations', description: 'Early roots in high-voltage industrial electrical engineering & advisory.' },
  { year: '1995', stage: 'Power Specialization', description: 'Transition into specialized heavy power systems & substation design.' },
  { year: '2000', stage: 'Mining & Subsea', description: 'Expansion across Western Australian mining, resources & offshore infrastructure.' },
  { year: '2010', stage: 'Grid Leadership', description: 'Recognized leadership in utility grid compliance & dynamic power modeling.' },
  { year: '2025', stage: 'Energy Transition', description: 'Accelerating decarbonisation, BESS integration & next-gen power solutions.' }
];

const valuesList = [
  { title: 'Technical Rigour', desc: 'Thorough analytical modeling, robust design principles, and uncompromising engineering quality.', icon: Zap },
  { title: 'Practical Engineering', desc: 'Real-world solutions built for harsh operational environments, minimizing downtime and risk.', icon: ShieldCheck },
  { title: 'Client-Focused Partnership', desc: 'We align deeply with client objectives to deliver tailor-made technical and commercial value.', icon: Lightbulb },
  { title: 'Independent Advice', desc: 'Objective, vendor-neutral advisory focused strictly on client safety, performance and cost.', icon: Compass },
  { title: 'Safety & Reliability', desc: 'Zero-compromise protection for personnel, mission-critical assets, and network security.', icon: Award },
  { title: 'Sustainable Future', desc: 'Empowering heavy industry to achieve net-zero targets without sacrificing reliability.', icon: Zap }
];

export default function About() {
  return (
    <main>
      <SEO
        title="About Us | PowerMitt Consulting"
        description="PowerMitt Consulting is an Australian engineering consultancy based in Perth, Western Australia, providing specialist electrical power systems and energy engineering expertise."
        path="/about"
      />

      <Hero
        variant="compact"
        label="About Us"
        title="Engineering Excellence for Australia's Complex Energy Challenges"
        subtitle="An independent specialist engineering consultancy focused on electrical power systems, energy transition, and industrial infrastructure."
        bgImage="/assets/images/hero-about.jpg"
      />

      {/* === MILESTONES & HISTORY (Figma Page 2 Top) === */}
      <section className="about-milestones section--ice">
        <div className="container">
          <SectionHeader
            label="Our Journey"
            title="A Legacy of Engineering Excellence"
            subtitle="Decades of technical leadership navigating Australia's power systems evolution."
            align="center"
          />
          <Timeline stages={companyMilestones} />
        </div>
      </section>

      {/* === COMPANY OVERVIEW (Figma Page 2 Split Layout) === */}
      <section className="about-overview">
        <div className="container">
          <div className="about-overview__grid">
            <div className="about-overview__content">
              <span className="label">About PowerMitt Consulting</span>
              <h2>Specialist Electrical Power Systems & Energy Advisory</h2>
              <hr className="divider" />
              <p>
                PowerMitt Consulting Pty Ltd is an Australian engineering consultancy headquartered in Perth, Western Australia. We provide specialist electrical power systems and energy engineering expertise to clients across the resources, energy, oil and gas, and industrial sectors.
              </p>
              <p>
                Our core expertise lies in the intersection of electrical power system engineering and the energy transition — helping industrial clients navigate the shift towards lower-carbon operations while maintaining the absolute reliability and performance their operations demand.
              </p>
              <p>
                We work collaboratively with our clients, providing independent technical advice and practical engineering solutions across the full project lifecycle — from early-stage concept development through to detailed design, commissioning support, and operational engineering.
              </p>
            </div>

            <div className="about-overview__media">
              <div className="about-media-card">
                <img 
                  src={getAssetUrl('/assets/images/hero-about.jpg')} 
                  alt="PowerMitt Consulting Team"
                  className="about-media-img"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="about-media-badge">
                  <h4>Key Capabilities</h4>
                  <ul>
                    <li>Electrical Power Systems & Modeling</li>
                    <li>Renewable Energy & BESS Integration</li>
                    <li>Energy Transition & Decarbonisation</li>
                    <li>Carbon Capture & Compression Support</li>
                    <li>Grid Connection & AEMO / WEM Compliance</li>
                    <li>Owner's Engineering & Independent Audit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === VALUES SECTION (Figma Page 2 Dark Board) === */}
      <section className="section--dark about-values">
        <div className="container">
          <SectionHeader
            label="Our Values"
            title="Guiding Principles in Every Project"
            subtitle="Our engineering philosophy is built on practical delivery, technical depth, and trusted partnership."
            light
            align="center"
          />
          <div className="about-values__grid">
            {valuesList.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="about-values__card">
                  <div className="about-values__icon">
                    <Icon size={22} />
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === LEADERSHIP === */}
      <section className="section--ice about-leadership">
        <div className="container">
          <SectionHeader
            label="Leadership"
            title="Principal Leadership"
            align="center"
          />
          <div className="about-leader">
            <div className="about-leader__photo">
              <div className="about-leader__placeholder">
                <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="40" fill="currentColor" className="text-midnight opacity-10"/>
                  <circle cx="40" cy="30" r="14" stroke="var(--color-accent)" strokeWidth="2.5"/>
                  <path d="M18 66C18 52 28 44 40 44C52 44 62 52 62 66" stroke="var(--color-accent)" strokeWidth="2.5"/>
                </svg>
              </div>
            </div>
            <div className="about-leader__info">
              <h3>Dinesh Mithanthaya</h3>
              <span className="about-leader__role">Principal Power Engineer</span>
              <span className="about-leader__location"><MapPin size={14} /> Perth, Western Australia</span>
              <p className="about-leader__bio">
                Leading specialist in high-voltage power system studies, grid compliance, industrial power generation, and energy transition engineering for major Australian resource projects.
              </p>
              <div className="about-leader__contact">
                <a href="tel:+61409346958" className="about-leader__contact-item">
                  <Phone size={14} /> +61 409 346 958
                </a>
                <a href="mailto:dmithanthaya@gmail.com" className="about-leader__contact-item">
                  <Mail size={14} /> dmithanthaya@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === VISION STATEMENT === */}
      <section className="about-vision">
        <div className="container text-center">
          <span className="label">Our Vision</span>
          <blockquote className="about-vision__quote">
            "To be Australia's most trusted engineering partner in accelerating the energy transition, delivering robust electrical power systems that ensure industrial resilience."
          </blockquote>
        </div>
      </section>

      <CTABanner
        title="Let's Work Together"
        subtitle="Talk to our principal engineering team about your project challenges."
      />
    </main>
  );
}
