import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Timeline from '../../components/Timeline/Timeline';
import CTABanner from '../../components/CTABanner/CTABanner';
import { engineeringLifecycle } from '../../data/services';
import './About.css';

const approachItems = [
  { title: 'Practical Engineering', desc: 'Solutions that work in real operational environments, not just on paper. We understand the practical constraints of industrial power systems.' },
  { title: 'Technical Rigour', desc: 'Thorough analysis, robust design, and engineering excellence. Our work is underpinned by deep technical expertise in electrical power systems.' },
  { title: 'Client-Focused Solutions', desc: 'We listen, understand objectives, and deliver engineering solutions tailored to each client\'s specific requirements and constraints.' },
  { title: 'Independent Advice', desc: 'As an independent consultancy, we provide objective, vendor-neutral technical recommendations aligned with our clients\' best interests.' },
  { title: 'Safety & Reliability', desc: 'Safety is embedded in our engineering approach. We design reliable electrical systems that protect people, equipment, and operations.' },
  { title: 'Sustainability', desc: 'Supporting the energy transition through practical engineering solutions that enable lower-carbon operations without compromising reliability.' }
];

export default function About() {
  return (
    <main>
      <SEO
        title="About PowerMitt Consulting | Perth Engineering Consultancy"
        description="PowerMitt Consulting is an Australian engineering consultancy based in Perth, Western Australia, providing specialist electrical power systems and energy engineering expertise."
        path="/about"
      />

      <Hero
        variant="compact"
        label="About"
        title="Engineering Excellence for Australia's Complex Energy Challenges"
        subtitle="An independent specialist engineering consultancy focused on electrical power systems, energy transition, and industrial infrastructure."
        bgImage="/assets/images/hero-about.jpg"
      />

      {/* Company Overview */}
      <section className="about-overview">
        <div className="container">
          <div className="about-overview__grid">
            <div className="about-overview__content">
              <span className="label">Company Overview</span>
              <h2>Specialist Electrical Power Systems & Energy Engineering</h2>
              <hr className="divider" />
              <p>
                PowerMitt Consulting Pty Ltd is an Australian engineering consultancy headquartered in Perth, Western Australia. We provide specialist electrical power systems and energy engineering expertise to clients across the resources, energy, oil and gas, and industrial sectors.
              </p>
              <p>
                Our core expertise lies in the intersection of electrical power system engineering and the energy transition — helping industrial clients navigate the shift towards lower-carbon operations while maintaining the reliability and performance their operations demand.
              </p>
              <p>
                We work collaboratively with our clients, providing independent technical advice and practical engineering solutions across the full project lifecycle — from early-stage concept development through to detailed design, commissioning support, and operational engineering.
              </p>
            </div>
            <div className="about-overview__aside">
              <div className="about-aside-card">
                <h4>Areas of Expertise</h4>
                <ul>
                  <li>Electrical Power Systems</li>
                  <li>Renewable Energy Integration</li>
                  <li>Energy Transition & Decarbonisation</li>
                  <li>Carbon Capture & Storage</li>
                  <li>Battery Energy Storage (BESS)</li>
                  <li>Industrial & Mining Infrastructure</li>
                  <li>Grid Connection & Compliance</li>
                  <li>Owner's Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section--ice about-approach">
        <div className="container">
          <SectionHeader
            label="Our Approach"
            title="How We Work"
            subtitle="Our engineering philosophy is built on practical delivery, technical depth, and client partnership."
          />
          <div className="about-approach__grid">
            {approachItems.map((item, i) => (
              <div key={i} className="about-approach__item">
                <div className="about-approach__icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Lifecycle */}
      <section className="about-lifecycle">
        <div className="container">
          <SectionHeader
            label="Engineering Lifecycle"
            title="Full Project Lifecycle Support"
            subtitle="PowerMitt supports projects from concept through to operations, providing continuity and depth across every engineering phase."
            align="center"
          />
          <Timeline stages={engineeringLifecycle} />
          <div className="about-lifecycle__detail">
            <p>
              Our ability to support projects across the full engineering lifecycle means our clients benefit from continuity of knowledge and consistent technical approach. Whether we are engaged at concept stage to assess feasibility, during FEED to define scope and estimates, or during detailed engineering to develop construction-ready deliverables — we bring the same rigorous, practical approach to every phase.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section--ice about-leadership">
        <div className="container">
          <SectionHeader
            label="Leadership"
            title="Our Team"
          />
          <div className="about-leader">
            <div className="about-leader__photo">
              <div className="about-leader__placeholder">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="40" fill="rgba(8,126,164,0.08)"/>
                  <circle cx="40" cy="30" r="12" stroke="rgba(8,126,164,0.3)" strokeWidth="2"/>
                  <path d="M20 65C20 53.954 28.954 45 40 45C51.046 45 60 53.954 60 65" stroke="rgba(8,126,164,0.3)" strokeWidth="2"/>
                </svg>
                <span>Professional photograph</span>
              </div>
            </div>
            <div className="about-leader__info">
              <h3>Dinesh Mithanthaya</h3>
              <span className="about-leader__role">Principal Power Engineer</span>
              <span className="about-leader__location"><MapPin size={14} /> Perth, Western Australia</span>
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

      {/* Vision */}
      <section className="section--dark about-vision">
        <div className="container text-center">
          <span className="label">Our Vision</span>
          <blockquote className="about-vision__quote">
            "To be a trusted engineering partner supporting the energy transition and enabling sustainable industrial development through innovative electrical power solutions."
          </blockquote>
        </div>
      </section>

      <CTABanner
        title="Let's Work Together"
        subtitle="Talk to us about your engineering challenges."
      />
    </main>
  );
}
