import { Link } from 'react-router-dom';
import {
  Compass,
  Layers,
  CheckCircle2
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

export default function CarbonCapture() {
  return (
    <main>
      <SEO
        title="Carbon Capture & Storage Engineering | PowerMitt Consulting"
        description="Electrical engineering expertise for CCS projects including compressor drive systems, grid connection, equipment selection, and detailed design."
        path="/services/carbon-capture"
        image="/assets/images/carbon-capture-bg.jpg"
      />
      <Hero
        variant="service"
        bgImage="/assets/images/carbon-capture-bg.jpg"
        label="Services / Carbon Capture & Storage"
        title="Carbon Capture & Storage Engineering"
        subtitle="Specialist electrical engineering supporting CCS projects — from large compressor drive systems and grid connections through to FEED and detailed design."
      />

      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>CCS Electrical Engineering Services</h2>
              <hr className="divider" />
              <p className="text-justify leading-relaxed">Carbon Capture and Storage (CCS) projects present significant electrical engineering challenges. The high power demands of CO₂ compression systems, the requirement for reliable grid connections, and the complexity of integrating CCS facilities with existing industrial infrastructure all require specialist electrical power system expertise.</p>
              <p className="text-justify leading-relaxed">PowerMitt provides electrical engineering support for CCS projects across all phases — from early-stage technical evaluation and FEED through to detailed design. Our focus is on the practical electrical engineering challenges of making CCS work within real industrial power system constraints.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Key Challenges</h4>
              <ul>
                <li>High-power compressor drive systems</li>
                <li>Grid connection capacity requirements</li>
                <li>Large motor starting & VSD selection</li>
                <li>Electrical infrastructure augmentation</li>
                <li>Power system stability</li>
                <li>Equipment qualification</li>
                <li>Utility interface coordination</li>
              </ul>
            </div>
          </div>

          {/* Capabilities Section — Asymmetric Bento Grid */}
          <div id="layout-asymmetric" className="mt-12">
            {/* Bento Grid Arrangement */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large Feature Card 01 (Span 7 cols) */}
              <div className="md:col-span-7 bg-white border border-slate-200 border-t-2 border-t-brand-blue p-8 flex flex-col justify-between rounded-lg shadow-subtle transition-all duration-300 hover:shadow-card">
                <div>
                  <span className="font-mono text-sm font-bold text-brand-blue block mb-2">01 —</span>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Large Compressor Drive Systems</h3>
                  <p className="text-base text-brand-body leading-relaxed max-w-md">
                    Electrical engineering, motor selection, and equipment specifications for multi-megawatt CO₂ compression trains and export booster stations.
                  </p>
                </div>

                <div className="mt-8 flex justify-center py-4 bg-slate-50/50 rounded border border-slate-100">
                  <svg className="w-full max-w-md h-36" viewBox="0 0 320 120" fill="none">
                    {/* Large Motor */}
                    <rect x="30" y="35" width="60" height="50" rx="3" stroke="#0284c7" strokeWidth="2" fill="#f0f9ff" />
                    <text x="60" y="65" fontFamily="Public Sans, sans-serif" fontSize="14" fontWeight="700" fill="#0284c7" textAnchor="middle">M</text>
                    <text x="60" y="80" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0284c7" textAnchor="middle">&gt;15 MW</text>
                    {/* Heavy Shaft */}
                    <line x1="90" y1="60" x2="130" y2="60" stroke="#0f172a" strokeWidth="3" />
                    <rect x="105" y="52" width="8" height="16" fill="#0f172a" />
                    {/* Compression Stage 1 */}
                    <polygon points="130,25 190,40 190,80 130,95" stroke="#0284c7" strokeWidth="2" fill="#ffffff" />
                    <text x="160" y="64" fontFamily="Public Sans, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">STAGE 1</text>
                    {/* Intercooler line */}
                    <path d="M190 60 L220 60" stroke="#0f172a" strokeWidth="3" />
                    {/* Booster Stage 2 */}
                    <polygon points="220,32 270,44 270,76 220,88" stroke="#0284c7" strokeWidth="2" fill="#f0f9ff" />
                    <text x="245" y="64" fontFamily="Public Sans, sans-serif" fontSize="10" fontWeight="700" fill="#0284c7" textAnchor="middle">BOOSTER</text>
                  </svg>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-mono text-slate-400">APPLICATION: SUPERCRITICAL CO₂</span>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:underline">
                    Explore service →
                  </Link>
                </div>
              </div>

              {/* Stacked Right Cards (Span 5 cols) */}
              <div className="md:col-span-5 flex flex-col gap-6">
                {/* Card 02 */}
                <div className="bg-white border border-slate-200 p-6 rounded-lg flex-1 flex flex-col justify-between shadow-subtle transition-all duration-300 hover:border-brand-blue hover:shadow-card">
                  <div>
                    <span className="font-mono text-sm font-bold text-brand-blue block mb-1">02 —</span>
                    <h3 className="text-lg font-bold text-brand-navy">Multi-Level VSD &amp; Soft Starting</h3>
                    <p className="mt-2 text-sm text-brand-body leading-relaxed">
                      Drive topology selection, starting current limitation, and harmonic mitigation for massive compressor motor starting.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs font-mono text-slate-400">IEEE 519 COMPLIANT</span>
                    <Link to="/contact" className="text-xs font-semibold text-brand-blue hover:underline">Explore service →</Link>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="bg-white border border-slate-200 p-6 rounded-lg flex-1 flex flex-col justify-between shadow-subtle transition-all duration-300 hover:border-brand-blue hover:shadow-card">
                  <div>
                    <span className="font-mono text-sm font-bold text-brand-blue block mb-1">03 —</span>
                    <h3 className="text-lg font-bold text-brand-navy">FEED &amp; Detailed Electrical Design</h3>
                    <p className="mt-2 text-sm text-brand-body leading-relaxed">
                      End-to-end electrical design deliverable packages from FEED through to single-lines, cable schedules, and layouts.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs font-mono text-slate-400">FULL EPC PACKAGES</span>
                    <Link to="/contact" className="text-xs font-semibold text-brand-blue hover:underline">Explore service →</Link>
                  </div>
                </div>
              </div>

              {/* Bottom 3 Column Cards */}
              {/* Card 04 */}
              <div className="md:col-span-4 bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between shadow-subtle transition-all duration-300 hover:border-brand-blue hover:shadow-card">
                <div>
                  <span className="font-mono text-sm font-bold text-brand-blue block mb-1">04 —</span>
                  <h3 className="text-lg font-bold text-brand-navy">High-Voltage Grid Interconnections</h3>
                  <p className="mt-2 text-sm text-brand-body leading-relaxed">
                    Utility connection studies, network capacity evaluations, and substation design for high energy loads.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-xs font-mono text-slate-400">66kV TO 330kV</span>
                  <Link to="/contact" className="text-xs font-semibold text-brand-blue hover:underline">Explore service →</Link>
                </div>
              </div>

              {/* Card 05 */}
              <div className="md:col-span-4 bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between shadow-subtle transition-all duration-300 hover:border-brand-blue hover:shadow-card">
                <div>
                  <span className="font-mono text-sm font-bold text-brand-blue block mb-1">05 —</span>
                  <h3 className="text-lg font-bold text-brand-navy">Power System &amp; Starting Dynamics</h3>
                  <p className="mt-2 text-sm text-brand-body leading-relaxed">
                    Transient stability and voltage sag modeling during large compressor acceleration to protect plant reliability.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-xs font-mono text-slate-400">PSCAD &amp; ETAP</span>
                  <Link to="/contact" className="text-xs font-semibold text-brand-blue hover:underline">Explore service →</Link>
                </div>
              </div>

              {/* Card 06 */}
              <div className="md:col-span-4 bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between shadow-subtle transition-all duration-300 hover:border-brand-blue hover:shadow-card">
                <div>
                  <span className="font-mono text-sm font-bold text-brand-blue block mb-1">06 —</span>
                  <h3 className="text-lg font-bold text-brand-navy">Hazardous Area &amp; Safety Compliance</h3>
                  <p className="mt-2 text-sm text-brand-body leading-relaxed">
                    Hazardous area classification, Ex equipment qualification, earthing, and strict compliance with AS/NZS &amp; IEC standards.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-xs font-mono text-slate-400">AS/NZS &amp; IECEx</span>
                  <Link to="/contact" className="text-xs font-semibold text-brand-blue hover:underline">Explore service →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lifecycle Flow Diagram */}
      <section className="section--dark">
        <div className="container text-center">
          <SectionHeader
            label="Project Lifecycle"
            title="CCS Engineering Support Across All Phases"
            subtitle="From concept and preliminary connection studies through to turnkey execution and commissioning."
            light
            align="center"
          />
          <div className="service-flow">
            <div className="service-flow__step">
              <div className="service-flow__box">
                <Compass size={32} />
                <span>Early Phase & Screening</span>
              </div>
            </div>
            <div className="service-flow__arrow">→</div>
            <div className="service-flow__step">
              <div className="service-flow__box service-flow__box--accent">
                <Layers size={32} />
                <span>FEED & Detailed Design</span>
              </div>
            </div>
            <div className="service-flow__arrow">→</div>
            <div className="service-flow__step">
              <div className="service-flow__box service-flow__box--teal">
                <CheckCircle2 size={32} />
                <span>Commissioning & Handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need CCS Engineering Support?" subtitle="Talk to us about your carbon capture project." />
    </main>
  );
}
