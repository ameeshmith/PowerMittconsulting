import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, ShieldCheck, Zap, Lightbulb, Compass, Award } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Timeline from '../../components/Timeline/Timeline';
import CTABanner from '../../components/CTABanner/CTABanner';
import WordHighlight from '../../components/WordHighlight/WordHighlight';
import SpotlightCard from '../../components/UI/SpotlightCard';
import { getAssetUrl } from '../../utils/assetPath';
import './About.css';

const companyMilestones = [
  { year: '1990', stage: 'Foundations', description: 'Early roots in high-voltage industrial electrical engineering & advisory.' },
  { year: '1995', stage: 'Power Specialization', description: 'Transition into specialized heavy power systems & substation design.' },
  { year: '2000', stage: 'Mining & Subsea', description: 'Expansion across Western Australian mining, resources & offshore infrastructure.' },
  { year: '2010', stage: 'Grid Leadership', description: 'Recognized leadership in utility grid compliance & dynamic power modeling.' },
  { year: '2025', stage: 'Energy Transition', description: 'Accelerating decarbonisation, BESS integration & next-gen power solutions.' }
];

function ValueIllustration({ type }) {
  switch (type) {
    case 'rigour':
      return (
        <svg width="90" height="85" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 68C18 68 15 72 17 76C19 80 24 80 27 77C29 80 34 80 36 77C38 80 43 78 43 74C43 70 38 67 34 68" stroke="#0F172A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" />
          <path d="M28 58C26 55 20 57 21 62" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M38 52L24 64C28 61 31 63 32 67C34 62 37 63 39 65L48 50Z" fill="#00A3E0" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M35 55L29 61C31 59 33 60 33 63L41 53Z" fill="#38BDF8" />
          <path d="M42 46L36 54L48 57L54 49L42 46Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M42 46C40 35 48 20 68 14C74 34 59 42 48 44L42 46Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
          <path d="M62 16C64 15 66 14 68 14C68 16 67 18 66 20L62 16Z" fill="#059669" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M40 38L28 42C30 46 33 50 38 52L43 45" fill="#0284C7" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M52 26L60 36C63 33 64 28 64 24L52 26Z" fill="#0284C7" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <circle cx="54" cy="28" r="4.5" fill="#059669" stroke="#0F172A" strokeWidth="1.75" />
          <circle cx="53" cy="27" r="1.5" fill="#FFFFFF" />
        </svg>
      );
    case 'practical':
      return (
        <svg width="90" height="85" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 78C44 76 56 76 62 78" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 82C46 81 54 81 58 82" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 77V54" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 68C42 66 40 58 41 54C46 54 50 60 50 68Z" fill="#ECFDF5" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M50 62C58 60 61 52 59 48C54 48 50 54 50 62Z" fill="#ECFDF5" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <rect x="46" y="48" width="8" height="3" rx="1" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="47" y="51" width="6" height="2" rx="1" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.2" />
          <path d="M46 48C43 45 40 40 40 33C40 23 44 18 50 18C56 18 60 23 60 33C60 40 57 45 54 48H46Z" fill="#059669" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
          <path d="M47 34C47 28 49 24 50 24C51 24 53 28 53 34" stroke="#A7F3D0" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="33" y1="26" x2="30" y2="24" stroke="#00A3E0" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="50" y1="12" x2="50" y2="9" stroke="#00A3E0" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="67" y1="26" x2="70" y2="24" stroke="#00A3E0" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case 'partnership':
      return (
        <svg width="90" height="85" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left sleeve (Green) */}
          <path d="M14 74L22 64L29 70L21 80Z" fill="#059669" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M22 64L34 50C36 48 39 49 41 51L45 55L34 66L26 67" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M37 53L43 47C44 46 46 47 47 48L44 54" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right sleeve (Blue) */}
          <path d="M86 16L78 26L71 20L79 10Z" fill="#00A3E0" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M78 26L66 40C64 42 61 41 59 39L55 35L66 24L74 23" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M63 37L57 43C56 44 54 43 53 42L56 36" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />

          {/* Central handshake link / spark */}
          <circle cx="50" cy="45" r="5" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
          <circle cx="50" cy="45" r="2" fill="#00A3E0" />
        </svg>
      );
    case 'independent':
      return (
        <svg width="90" height="85" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="46" r="28" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <circle cx="50" cy="46" r="23" stroke="#E2E8F0" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="50" y1="20" x2="50" y2="24" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="68" x2="50" y2="72" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="46" x2="28" y2="46" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <line x1="72" y1="46" x2="76" y2="46" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <polygon points="50,23 54,46 50,43 46,46" fill="#00A3E0" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <polygon points="50,69 54,46 50,49 46,46" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <circle cx="50" cy="46" r="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <path d="M72 20L74 14L76 20L82 22L76 24L74 30L72 24L66 22Z" fill="#059669" />
        </svg>
      );
    case 'safety':
      return (
        <svg width="90" height="85" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 50L50 62L72 50L50 38Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M28 50V68L50 80V62Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M72 50V68L50 80V62Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M28 50L18 42L40 32L50 38" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" fill="#FFFFFF" />
          <path d="M72 50L82 42L60 32L50 38" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" fill="#FFFFFF" />
          <path d="M50 34C48 24 36 22 36 30C36 38 48 46 50 48C52 46 64 38 64 30C64 22 52 24 50 34Z" fill="#059669" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
          <path d="M42 27C40 27 38 29 38 31" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="28" cy="24" r="1.5" fill="#00A3E0" />
          <circle cx="70" cy="22" r="2" fill="#00A3E0" />
        </svg>
      );
    case 'sustainability':
      return (
        <svg width="90" height="85" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 78C38 72 62 72 74 78" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <path d="M48 74L49 38H51L52 74" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" />
          <circle cx="50" cy="38" r="3" fill="#00A3E0" stroke="#0F172A" strokeWidth="1.75" />
          <path d="M50 35C48 23 52 14 50 14C48 14 50 23 50 35Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M52 39C63 43 71 42 71 40C71 38 62 37 52 39Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M48 40C39 49 33 54 32 52C31 50 38 44 48 40Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M68 22C72 26 74 32 74 38" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
          <path d="M38 73C34 69 34 63 38 61C40 65 38 71 38 73Z" fill="#059669" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

const valuesList = [
  { id: 'rigour', title: 'Technical Rigour', desc: 'Thorough analytical modeling, robust design principles, and uncompromising engineering quality.' },
  { id: 'practical', title: 'Practical Engineering', desc: 'Real-world solutions built for harsh operational environments, minimizing downtime and risk.' },
  { id: 'partnership', title: 'Client-Focused Partnership', desc: 'We align deeply with client objectives to deliver tailor-made technical and commercial value.' },
  { id: 'independent', title: 'Independent Advice', desc: 'Objective, vendor-neutral advisory focused strictly on client safety, performance and cost.' },
  { id: 'safety', title: 'Safety & Reliability', desc: 'Zero-compromise protection for personnel, mission-critical assets, and network security.' },
  { id: 'sustainability', title: 'Sustainable Future', desc: 'Empowering heavy industry to achieve net-zero targets without sacrificing reliability.' }
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
        variant="about"
        label="About PowerMitt"
        title={
          <>
            Engineering Rigour <br />
            For Complex Power Challenges
          </>
        }
        subtitle="An independent specialist engineering consultancy delivering high-calibre electrical power systems, utilities, energy transition, and industrial infrastructure advisory services across Australia."
        bgImage="/assets/images/hero-about.jpg"
      />

      {/* === MILESTONES & HISTORY === */}
      <section className="about-milestones section--ice">
        <div className="container">
          <SectionHeader
            label="OUR JOURNEY"
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
                PowerMitt Consulting Pty Ltd is an Australian engineering consultancy headquartered in Perth, Western Australia. Founded by <strong>Dinesh Mithanthaya</strong>, our leadership combines several decades of deep technical experience across utility, power generation, transmission, distribution, industrial, grid management, mining, and renewable energy sectors.
              </p>
              <p>
                Our team has successfully supported utility operators, energy developers, tier-one mining companies, and industrial clients in developing robust and reliable power systems that comply with regulatory and network requirements.
              </p>
              <p>
                <strong>Value-Driven Engineering:</strong> We work collaboratively with asset owners, EPC contractors, and equipment vendors to identify practical engineering solutions that maximise capital value while maintaining uncompromised safety, reliability, operability, and compliance.
              </p>
            </div>

            <div className="about-overview__media">
              <div className="about-media-card">
                <img
                  src={getAssetUrl('/assets/images/hero-about.jpg')}
                  alt="PowerMitt Consulting Team"
                  className="about-media-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="about-media-badge">
                  <h4>Core Capabilities</h4>
                  <ul>
                    <li>Utility Grid Connection & AEMO / WEM Compliance</li>
                    <li>Major Iron Ore & Mining Power Infrastructure</li>
                    <li>Offshore Normal Unattended Facilities (NUF)</li>
                    <li>Renewable Energy, Microgrids & BESS Integration</li>
                    <li>Protection, Control & Synchronisation Systems</li>
                    <li>Owner's Engineering & EPC Delivery Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === VALUES SECTION (HubSpot DNA Style) === */}
      <section className="about-values">
        <div className="container text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-slate-100 text-slate-700 border border-slate-200 mb-4 font-mono">
            The PowerMitt DNA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Our Core Values
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-16 font-body">
            Our engineering philosophy is built on practical delivery, technical depth, and trusted partnership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            {valuesList.map((val) => (
              <div key={val.id} className="flex flex-col items-center text-center group">
                <div className="h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <ValueIllustration type={val.id} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5 font-heading">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs font-body">
                  {val.desc}
                </p>
              </div>
            ))}
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
          <div className="about-leaders-stack">
            {/* Dinesh Mithanthaya */}
            <div className="about-leader">
              <div className="about-leader__photo">
                <div className="about-leader__placeholder">
                  <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
                    <rect width="80" height="80" rx="40" fill="currentColor" className="text-midnight opacity-10" />
                    <circle cx="40" cy="30" r="14" stroke="#00A3E0" strokeWidth="2.5" />
                    <path d="M18 66C18 52 28 44 40 44C52 44 62 52 62 66" stroke="#00A3E0" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
              <div className="about-leader__info">
                <h3>Dinesh Mithanthaya</h3>
                <span className="about-leader__role">Principal Power Engineer</span>
                <span className="about-leader__location"><MapPin size={14} /> Perth, Western Australia</span>
                <p className="about-leader__bio">
                  Dinesh Mithanthaya is a Principal Power Engineer with over 25 years of international experience across Oil &amp; Gas, LNG, Carbon Capture &amp; Storage (CCS), Mining, Utilities, and Renewable Energy sectors. He specialises in power systems, grid integration, HV substations, SCADA, protection systems, BESS, renewable energy integration, and electrical infrastructure strategy. His experience spans utility asset management, network planning, operational improvement, and major capital projects. Dinesh provides technical leadership for energy transition, decarbonisation, reliability, and growth initiatives across Australia&apos;s energy and resources industries.
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

            {/* Anuja */}
            <div className="about-leader">
              <div className="about-leader__photo">
                <div className="about-leader__placeholder">
                  <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
                    <rect width="80" height="80" rx="40" fill="currentColor" className="text-midnight opacity-10" />
                    <circle cx="40" cy="30" r="14" stroke="#059669" strokeWidth="2.5" />
                    <path d="M18 66C18 52 28 44 40 44C52 44 62 52 62 66" stroke="#059669" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
              <div className="about-leader__info">
                <h3>Anuja Mithanthaya</h3>
                <span className="about-leader__role">Strategic Engineering Advisor — Utility &amp; Mining Networks</span>
                <span className="about-leader__location"><MapPin size={14} /> Perth, Western Australia</span>
                <p className="about-leader__bio">
                  With more than two decades of electrical engineering experience, Anuja brings deep expertise in utility networks, mining infrastructure, power system operations, and industrial automation. Her background includes senior technical roles within Western Power (Australia) and Power Grid Corporation of India, covering transmission systems, network operations, substations, SCADA, asset management, and grid reliability. She provides strategic engineering advisory, design assurance, commissioning support, and operational readiness services, strengthening PowerMitt&apos;s capability to deliver complex mining, energy transition, and utility infrastructure projects.
                </p>
                <div className="about-leader__contact">
                  <Link to="/contact" className="about-leader__contact-item">
                    <Mail size={14} /> Contact Engineering Advisory
                  </Link>
                </div>
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
