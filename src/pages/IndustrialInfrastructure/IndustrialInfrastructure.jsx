import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

export default function IndustrialInfrastructure() {
  return (
    <main>
      <SEO
        title="Industrial & Mining Infrastructure Engineering | PowerMitt Consulting"
        description="HV/LV distribution, substations, MCCs, SCADA, mining electrical systems, underground mining, and infrastructure upgrades for industrial and mining operations."
        path="/services/industrial-infrastructure"
        image="/assets/images/industrial-bg.jpg"
      />
      <Hero
        variant="service"
        bgImage="/assets/images/industrial-infra-hero.jpg"
        label="Services / Industrial & Mining Infrastructure"
        title="Industrial & Mining Infrastructure"
        subtitle="Electrical infrastructure engineering for mining, processing, and heavy industrial facilities — including underground mining systems, HV/LV distribution, and infrastructure upgrades."
      />

      {/* Section 1: Overview */}
      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>Electrical Infrastructure for Industrial Operations</h2>
              <hr className="divider" />
              <p>Industrial and mining operations depend on reliable, well-designed electrical infrastructure. From primary HV distribution networks through to individual motor control centres, the electrical infrastructure underpins every aspect of operational performance.</p>
              <p>PowerMitt provides specialist electrical infrastructure engineering for mining operations, mineral processing plants, and heavy industrial facilities. Our experience covers surface and underground mining electrical systems, brownfield modifications, infrastructure upgrades, and new-build projects — always focused on reliability, maintainability, and operational practicality.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Infrastructure Systems</h4>
              <ul>
                <li>HV Distribution Networks</li>
                <li>LV Distribution Systems</li>
                <li>Substations</li>
                <li>Motor Control Centres</li>
                <li>Switchboards</li>
                <li>SCADA & Control Systems</li>
                <li>Communication Networks</li>
                <li>Earthing & Lightning Protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Distribution & Equipment Capabilities */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="DISTRIBUTION & EQUIPMENT"
            title="Distribution & Equipment Capabilities"
            subtitle="Primary and secondary electrical distribution design engineered for heavy industrial and mining facilities."
          />

          <div className="mt-12">
            {/* 2-Column Grid matching reference blueprint layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">

              {/* CARD 01: HV/LV Reticulation & Substations */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Viewfinder Corners */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">01 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Primary HV/LV Reticulation & Substations
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Turnkey engineering for 66kV, 33kV, 22kV, and 11kV distribution networks, modular packaged substations, switchyards, and transformer yards.
                    </p>

                  </div>
                  {/* Substation Schematic SVG */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      <line x1="20" y1="26" x2="140" y2="26" stroke="#0284c7" strokeWidth="2" />
                      <text x="22" y="20" fontSize="8" fill="#0284c7" fontWeight="700" fontFamily="monospace">66kV BUS</text>
                      <line x1="80" y1="26" x2="80" y2="38" stroke="#0284c7" strokeWidth="1.5" />
                      <rect x="74" y="38" width="12" height="12" stroke="#0f172a" strokeWidth="1.5" fill="#ffffff" />
                      <line x1="80" y1="50" x2="80" y2="60" stroke="#0284c7" strokeWidth="1.5" />
                      <circle cx="80" cy="69" r="11" stroke="#0284c7" strokeWidth="1.5" />
                      <circle cx="80" cy="83" r="11" stroke="#0284c7" strokeWidth="1.5" />
                      <line x1="80" y1="94" x2="80" y2="102" stroke="#0284c7" strokeWidth="1.5" />
                      <line x1="40" y1="102" x2="120" y2="102" stroke="#0284c7" strokeWidth="2" />
                      <text x="42" y="112" fontSize="7.5" fill="#64748b" fontFamily="monospace">11kV RETIC</text>
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 02: Switchboards & MCC */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Viewfinder Corners */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">02 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Motor Control Centres & Switchboards
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Intelligent MCC design, Form 4 arc-fault contained switchgear, busway systems, and integrated motor protection & management relays.
                    </p>

                  </div>
                  {/* Form 4 Switchboard SVG */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      <rect x="25" y="20" width="110" height="82" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="#ffffff" />
                      <line x1="62" y1="20" x2="62" y2="102" stroke="#cbd5e1" strokeWidth="1.5" />
                      <line x1="98" y1="20" x2="98" y2="102" stroke="#cbd5e1" strokeWidth="1.5" />
                      <rect x="30" y="27" width="26" height="18" rx="1" stroke="#0284c7" strokeWidth="1.2" />
                      <circle cx="36" cy="33" r="1.5" fill="#0284c7" />
                      <rect x="30" y="51" width="26" height="18" rx="1" stroke="#0284c7" strokeWidth="1.2" />
                      <circle cx="36" cy="57" r="1.5" fill="#0284c7" />
                      <rect x="30" y="75" width="26" height="20" rx="1" stroke="#0284c7" strokeWidth="1.2" />
                      <rect x="67" y="27" width="26" height="42" rx="1" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="2 2" />
                      <text x="70" y="50" fontSize="7" fill="#0284c7" fontWeight="700" fontFamily="monospace">FORM 4</text>
                      <rect x="67" y="75" width="26" height="20" rx="1" stroke="#0284c7" strokeWidth="1.2" />
                      <rect x="103" y="27" width="26" height="32" rx="1" stroke="#0284c7" strokeWidth="1.2" />
                      <rect x="103" y="65" width="26" height="30" rx="1" stroke="#0284c7" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 03: Mining Power */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Viewfinder Corners */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">03 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Underground & Surface Mining Power
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Heavy-duty 1000V reticulation, trailing cable systems, mobile substations, and compliance with statutory mining electrical regulations.
                    </p>

                  </div>
                  {/* Mining Power / Trailing Sled SVG */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      <line x1="18" y1="36" x2="142" y2="36" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                      <text x="20" y="30" fontSize="7" fill="#64748b" fontFamily="monospace">SURFACE 11kV</text>
                      <line x1="45" y1="36" x2="45" y2="78" stroke="#0284c7" strokeWidth="2" />
                      <rect x="35" y="78" width="40" height="24" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="#ffffff" />
                      <line x1="32" y1="104" x2="78" y2="104" stroke="#0f172a" strokeWidth="2" />
                      <text x="38" y="93" fontSize="7" fill="#0284c7" fontWeight="700" fontFamily="monospace">1000V SLED</text>
                      <path d="M 75 90 C 95 90, 95 72, 115 72 C 125 72, 128 85, 140 85" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2 1.5" />
                      <circle cx="140" cy="85" r="4" stroke="#0f172a" strokeWidth="1.2" fill="#e2e8f0" />
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 04: SCADA & Automation */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Viewfinder Corners */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">04 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      SCADA, Automation & Telemetry
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Industrial network architecture, PLC/RTU specification, remote telemetry, plant-wide SCADA integration, and human-machine interfaces.
                    </p>

                  </div>
                  {/* Industrial Network / PLC Topology SVG */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      <rect x="62" y="18" width="36" height="22" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="#ffffff" />
                      <line x1="68" y1="34" x2="92" y2="34" stroke="#0284c7" strokeWidth="1.2" />
                      <text x="67" y="28" fontSize="7" fill="#0284c7" fontWeight="700" fontFamily="monospace">SCADA</text>
                      <path d="M 80 40 L 80 54 M 35 54 L 125 54" stroke="#0284c7" strokeWidth="1.5" />
                      <line x1="35" y1="54" x2="35" y2="70" stroke="#0284c7" strokeWidth="1.2" />
                      <line x1="80" y1="54" x2="80" y2="70" stroke="#0284c7" strokeWidth="1.2" />
                      <line x1="125" y1="54" x2="125" y2="70" stroke="#0284c7" strokeWidth="1.2" />
                      <rect x="22" y="70" width="26" height="20" rx="2" stroke="#0f172a" strokeWidth="1.2" fill="#ffffff" />
                      <text x="26" y="83" fontSize="6.5" fill="#64748b" fontFamily="monospace">PLC 01</text>
                      <rect x="67" y="70" width="26" height="20" rx="2" stroke="#0f172a" strokeWidth="1.2" fill="#ffffff" />
                      <text x="73" y="83" fontSize="6.5" fill="#0284c7" fontFamily="monospace">RTU</text>
                      <rect x="112" y="70" width="26" height="20" rx="2" stroke="#0f172a" strokeWidth="1.2" fill="#ffffff" />
                      <text x="115" y="83" fontSize="6.5" fill="#64748b" fontFamily="monospace">PLC 02</text>
                      <text x="50" y="104" fontSize="6.5" fill="#94a3b8" fontFamily="monospace">DNP3 / IEC 61850</text>
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 05: Emergency Generation & UPS */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Viewfinder Corners */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">05 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Standby & Emergency Generation
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Critical diesel/gas generator systems, auto-synchronising transfer schemes, and uninterruptible power supplies (UPS) for continuous uptime.
                    </p>

                  </div>
                  {/* ATS & Synchronising Gen Scheme SVG */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      <text x="18" y="26" fontSize="7" fill="#64748b" fontFamily="monospace">MAINS</text>
                      <line x1="45" y1="23" x2="70" y2="23" stroke="#94a3b8" strokeWidth="1.5" />
                      <circle cx="34" cy="62" r="13" stroke="#0284c7" strokeWidth="1.5" fill="#ffffff" />
                      <text x="29" y="66" fontSize="11" fill="#0284c7" fontWeight="700" fontFamily="sans-serif">G</text>
                      <line x1="47" y1="62" x2="70" y2="62" stroke="#0284c7" strokeWidth="1.5" />
                      <rect x="70" y="15" width="30" height="62" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="#ffffff" />
                      <text x="75" y="48" fontSize="7.5" fill="#0284c7" fontWeight="700" fontFamily="monospace">ATS</text>
                      <circle cx="85" cy="30" r="2" fill="#94a3b8" />
                      <line x1="85" y1="30" x2="80" y2="40" stroke="#0f172a" strokeWidth="1.5" />
                      <circle cx="85" cy="55" r="2" fill="#0284c7" />
                      <line x1="100" y1="46" x2="135" y2="46" stroke="#0284c7" strokeWidth="2" />
                      <rect x="135" y="30" width="12" height="32" rx="1" stroke="#0f172a" strokeWidth="1.2" fill="#0f172a" />
                      <text x="58" y="96" fontSize="6.5" fill="#64748b" fontFamily="monospace">N+1 REDUNDANCY</text>
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 06: Brownfield Audits & Plant Modernisation */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Viewfinder Corners */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">06 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Brownfield Audits & Plant Modernisation
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Condition assessments, capacity augmentation studies, arc flash hazard mitigation, and phased equipment replacement in operating plants.
                    </p>

                  </div>
                  {/* Plant Life & Capacity Curve SVG */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      <line x1="25" y1="20" x2="25" y2="95" stroke="#cbd5e1" strokeWidth="1.2" />
                      <line x1="25" y1="95" x2="140" y2="95" stroke="#cbd5e1" strokeWidth="1.2" />
                      <path d="M 28 32 C 60 35, 90 60, 135 92" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2.5 2" />
                      <path d="M 28 32 C 55 35, 75 42, 90 44 L 90 28 C 110 29, 125 32, 138 36" stroke="#0284c7" strokeWidth="2" />
                      <line x1="90" y1="44" x2="90" y2="95" stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="90" cy="44" r="3" fill="#0284c7" />
                      <text x="64" y="108" fontSize="7" fill="#0284c7" fontWeight="700" fontFamily="monospace">AUGMENTATION</text>
                      <text x="28" y="16" fontSize="6.5" fill="#64748b" fontFamily="monospace">ASSET INTEGRITY</text>
                    </svg>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>



      <CTABanner title="Need Industrial Electrical Engineering?" subtitle="Talk to us about your infrastructure requirements." />
    </main>
  );
}
