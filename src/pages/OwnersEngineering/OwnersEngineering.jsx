import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';

export default function OwnersEngineering() {
  return (
    <main>
      <SEO
        title="Owner's Engineering | PowerMitt Consulting"
        description="Independent technical advisory, due diligence, design verification, vendor evaluation, risk assessment, and project execution support for asset owners."
        path="/services/owners-engineering"
        image="/assets/images/owners-engineering-bg.jpg"
      />
      <Hero
        variant="service"
        bgImage="/assets/images/owners-engineering-hero.jpg"
        label="Services / Owner's Engineering"
        title="Owner's Engineering"
        subtitle="Independent technical advisory services for asset owners — providing due diligence, design verification, vendor evaluation, and project execution support."
      />

      {/* Section 1: Overview */}
      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>Independent Technical Advisory</h2>
              <hr className="divider" />
              <p>Asset owners need independent technical expertise to protect their interests during project development and execution. Whether evaluating a potential investment, reviewing a contractor's design, or overseeing construction and commissioning — having an independent engineer on your side ensures technical risks are identified and managed.</p>
              <p>PowerMitt provides Owner's Engineer services, acting as a trusted technical advisor. We are independent of equipment vendors, contractors, and developers — ensuring our recommendations are objective and aligned solely with our client's interests.</p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Our Position</h4>
              <ul>
                <li>Independent of vendors</li>
                <li>Independent of contractors</li>
                <li>Independent of developers</li>
                <li>Objective technical advice</li>
                <li>Aligned with owner interests</li>
                <li>Commercially aware</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Owner's Engineering Capabilities */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="Services"
            title="Owner's Engineering Capabilities"
            subtitle="Objective, rigorous technical advisory that safeguards capital investments and operational integrity."
          />

          <div className="mt-12">
            {/* 2-Column Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">

              {/* CARD 01: Independent Design Verification */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Blueprint Viewfinder Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">01 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Independent Design Verification
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Rigorous third-party engineering review of contractor deliverables, single-line diagrams, and equipment specifications to validate code compliance and operational fitness.
                    </p>
                  </div>
                  {/* Schematic: 3rd Party Stamp / Engineering Deliverable Audit */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      {/* Document Sheet */}
                      <rect x="24" y="20" width="70" height="80" rx="2" stroke="#0f172a" strokeWidth="1.4" fill="#ffffff" />
                      <line x1="32" y1="32" x2="68" y2="32" stroke="#0284c7" strokeWidth="1.8" />
                      <line x1="32" y1="42" x2="84" y2="42" stroke="#cbd5e1" strokeWidth="1.2" />
                      <line x1="32" y1="50" x2="78" y2="50" stroke="#cbd5e1" strokeWidth="1.2" />
                      <line x1="32" y1="58" x2="82" y2="58" stroke="#cbd5e1" strokeWidth="1.2" />
                      {/* Review Stamp Overlay */}
                      <rect x="58" y="56" width="78" height="38" rx="2" stroke="#0284c7" strokeWidth="1.6" fill="#ffffff" strokeDasharray="3 1.5" />
                      <text x="64" y="70" fontSize="7.5" fill="#0284c7" fontWeight="800" fontFamily="monospace">VERIFIED 3RD-P</text>
                      <line x1="64" y1="74" x2="130" y2="74" stroke="#0284c7" strokeWidth="1" />
                      <text x="64" y="85" fontSize="6.5" fill="#0f172a" fontFamily="monospace">PASS: IEC / IEEE</text>
                      <circle cx="124" cy="65" r="4" stroke="#0284c7" strokeWidth="1.2" />
                      <path d="M 122 65 L 123.5 67 L 126.5 63.5" stroke="#0284c7" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 02: Technical Due Diligence & Feasibility */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Blueprint Viewfinder Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">02 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Technical Due Diligence & Feasibility
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Unbiased technical audits, asset condition assessments, and technical risk scoring to support project financing, mergers, acquisitions, and major capital allocations.
                    </p>
                  </div>
                  {/* Schematic: Asset Risk Matrix & Scoring Gauge */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      {/* Risk Scoring 3x3 Matrix Grid */}
                      <rect x="22" y="24" width="72" height="72" rx="2" stroke="#0f172a" strokeWidth="1.2" fill="#ffffff" />
                      <line x1="46" y1="24" x2="46" y2="96" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="70" y1="24" x2="70" y2="96" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="22" y1="48" x2="94" y2="48" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="22" y1="72" x2="94" y2="72" stroke="#e2e8f0" strokeWidth="1" />
                      {/* Risk Points */}
                      <circle cx="34" cy="84" r="3" fill="#0284c7" />
                      <circle cx="58" cy="60" r="3.5" fill="#0284c7" />
                      <circle cx="82" cy="36" r="4" stroke="#0f172a" strokeWidth="1.4" fill="#ffffff" />
                      <path d="M 80 36 L 84 36 M 82 34 L 82 38" stroke="#0284c7" strokeWidth="1.2" />
                      {/* TDD Health Score Indicator */}
                      <rect x="104" y="28" width="38" height="64" rx="2" stroke="#e2e8f0" strokeWidth="1" fill="#ffffff" />
                      <text x="110" y="42" fontSize="7" fill="#64748b" fontFamily="monospace">AUDIT</text>
                      <text x="108" y="60" fontSize="12" fill="#0284c7" fontWeight="800" fontFamily="monospace">AA+</text>
                      <line x1="110" y1="70" x2="136" y2="70" stroke="#cbd5e1" strokeWidth="1" />
                      <text x="110" y="82" fontSize="6" fill="#0f172a" fontWeight="700" fontFamily="monospace">FEASIBLE</text>
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 03: Vendor Technical Evaluation & FAT */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Blueprint Viewfinder Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">03 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Vendor Technical Evaluation & FAT
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Detailed bid evaluations, supplier pre-qualification, technical query management, and factory acceptance test (FAT) representation worldwide.
                    </p>
                  </div>
                  {/* Schematic: Precision Inspection Caliper & Equipment Skid */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      {/* Inspected Equipment Enclosure */}
                      <rect x="35" y="44" width="70" height="48" rx="2" stroke="#0f172a" strokeWidth="1.4" fill="#ffffff" />
                      <rect x="43" y="52" width="22" height="22" stroke="#0284c7" strokeWidth="1.2" />
                      <rect x="73" y="52" width="24" height="32" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="2 2" />
                      {/* Caliper / Micrometer Gauge */}
                      <path d="M 22 28 L 122 28" stroke="#0284c7" strokeWidth="2" />
                      <path d="M 22 28 L 22 46" stroke="#0284c7" strokeWidth="2" />
                      <path d="M 122 28 L 122 46" stroke="#0284c7" strokeWidth="2" />
                      {/* Dimension tolerance tick marks */}
                      <line x1="45" y1="28" x2="45" y2="34" stroke="#0284c7" strokeWidth="1" />
                      <line x1="68" y1="28" x2="68" y2="34" stroke="#0284c7" strokeWidth="1" />
                      <line x1="91" y1="28" x2="91" y2="34" stroke="#0284c7" strokeWidth="1" />
                      <text x="50" y="22" fontSize="7.5" fill="#0284c7" fontWeight="700" fontFamily="monospace">FAT WITNESS</text>
                      {/* Acceptance Tag */}
                      <rect x="94" y="80" width="46" height="18" rx="1.5" stroke="#0284c7" strokeWidth="1.2" fill="#ffffff" />
                      <text x="98" y="92" fontSize="6.5" fill="#0284c7" fontWeight="700" fontFamily="monospace">ACCEPT: OK</text>
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 04: Interface & Multi-Discipline Risk Management */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Blueprint Viewfinder Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">04 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Interface & Multi-Discipline Risk Management
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Proactive interface coordination between grid utilities, engineering contractors, and OEM suppliers to eliminate scope gaps and schedule friction.
                    </p>
                  </div>
                  {/* Schematic: Multi-Stakeholder Interface Boundary Map */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      {/* Three stakeholder boundary circles */}
                      {/* Grid Utility */}
                      <circle cx="50" cy="42" r="22" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="3 1.5" />
                      <text x="36" y="44" fontSize="6.5" fill="#0284c7" fontWeight="700" fontFamily="monospace">UTILITY</text>
                      {/* EPC / Contractor */}
                      <circle cx="110" cy="42" r="22" stroke="#0f172a" strokeWidth="1.4" />
                      <text x="101" y="44" fontSize="6.5" fill="#0f172a" fontWeight="700" fontFamily="monospace">EPC</text>
                      {/* OEM / Client */}
                      <circle cx="80" cy="80" r="22" stroke="#64748b" strokeWidth="1.4" />
                      <text x="71" y="82" fontSize="6.5" fill="#64748b" fontWeight="700" fontFamily="monospace">OEM</text>
                      {/* Central Interface Node */}
                      <circle cx="80" cy="54" r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                      <line x1="68" y1="46" x2="92" y2="62" stroke="#0284c7" strokeWidth="1.2" />
                      <line x1="92" y1="46" x2="68" y2="62" stroke="#0284c7" strokeWidth="1.2" />
                      <text x="44" y="108" fontSize="6.5" fill="#0284c7" fontWeight="700" fontFamily="monospace">BATTERY LIMITS</text>
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 05: EPC Scope & Capital Value Engineering */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Blueprint Viewfinder Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">05 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      EPC Scope & Capital Value Engineering
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Technical scope definition, design rationalisation, and CAPEX value engineering that protects long-term reliability while removing unnecessary cost.
                    </p>
                  </div>
                  {/* Schematic: Cost Optimization & Rationalisation Vector */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      {/* Chart Axes */}
                      <line x1="25" y1="20" x2="25" y2="95" stroke="#cbd5e1" strokeWidth="1.2" />
                      <line x1="25" y1="95" x2="140" y2="95" stroke="#cbd5e1" strokeWidth="1.2" />
                      {/* Unoptimized CAPEX Baseline */}
                      <path d="M 28 35 Q 75 42, 138 52" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
                      <text x="96" y="44" fontSize="6.5" fill="#94a3b8" fontFamily="monospace">ORIGINAL</text>
                      {/* Value Engineered CAPEX Frontier */}
                      <path d="M 28 35 Q 70 70, 138 78" stroke="#0284c7" strokeWidth="2" />
                      {/* Savings Delta Arrow Bracket */}
                      <line x1="128" y1="52" x2="128" y2="76" stroke="#0284c7" strokeWidth="1.5" />
                      <path d="M 125 72 L 128 77 L 131 72" stroke="#0284c7" strokeWidth="1.4" />
                      <text x="78" y="70" fontSize="7" fill="#0284c7" fontWeight="700" fontFamily="monospace">Δ CAPEX</text>
                      <text x="28" y="16" fontSize="6.5" fill="#64748b" fontFamily="monospace">COST VS LIFE</text>
                    </svg>
                  </div>
                </div>
              </article>

              {/* CARD 06: Commissioning & Handover Assurance */}
              <article className="group relative bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300">
                {/* Blueprint Viewfinder Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-sky-600 transition-all duration-200 group-hover:w-3.5 group-hover:h-3.5"></span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-6 items-center">
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 tracking-wider">06 —</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 mb-2">
                      Commissioning & Handover Assurance
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      On-site energisation oversight, punch-item resolution, regulatory compliance documentation verification, and seamless operational handover.
                    </p>
                  </div>
                  {/* Schematic: Commissioning Signoff & Energisation Checklist */}
                  <div className="w-full flex justify-center items-center">
                    <svg viewBox="0 0 160 120" className="w-full max-w-[140px] h-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="150" height="110" rx="3" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
                      {/* Checklist Clipboard Frame */}
                      <rect x="25" y="18" width="110" height="84" rx="2" stroke="#0f172a" strokeWidth="1.4" fill="#ffffff" />
                      <rect x="62" y="14" width="36" height="8" rx="1.5" stroke="#0f172a" strokeWidth="1.2" fill="#e2e8f0" />
                      {/* Punch-list rows with checked statuses */}
                      <rect x="34" y="32" width="10" height="10" rx="1.5" stroke="#0284c7" strokeWidth="1.2" />
                      <path d="M 36 37 L 38.5 39.5 L 42 34" stroke="#0284c7" strokeWidth="1.4" />
                      <line x1="50" y1="37" x2="120" y2="37" stroke="#0f172a" strokeWidth="1.2" />
                      <rect x="34" y="50" width="10" height="10" rx="1.5" stroke="#0284c7" strokeWidth="1.2" />
                      <path d="M 36 55 L 38.5 57.5 L 42 52" stroke="#0284c7" strokeWidth="1.4" />
                      <line x1="50" y1="55" x2="114" y2="55" stroke="#0f172a" strokeWidth="1.2" />
                      <rect x="34" y="68" width="10" height="10" rx="1.5" stroke="#0284c7" strokeWidth="1.2" />
                      <path d="M 36 73 L 38.5 75.5 L 42 70" stroke="#0284c7" strokeWidth="1.4" />
                      <line x1="50" y1="73" x2="105" y2="73" stroke="#0f172a" strokeWidth="1.2" />
                      {/* Ready for Energisation Ribbon */}
                      <rect x="34" y="86" width="92" height="12" rx="1" stroke="#0284c7" strokeWidth="1" fill="#f0f9ff" />
                      <text x="44" y="94.5" fontSize="6.5" fill="#0284c7" fontWeight="700" fontFamily="monospace">ENERGISED & SIGNED OFF</text>
                    </svg>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Value-Driven Engineering */}
      <section className="section--ice">
        <div className="container">
          <SectionHeader
            label="Philosophy"
            title="Value-Driven Engineering"
            subtitle="Maximising asset value while upholding uncompromising safety, reliability, and regulatory compliance."
            align="center"
          />
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-charcoal)' }}>
            <p>
              PowerMitt works collaboratively with owners, EPC contractors and vendors to identify practical engineering solutions that maximise value while maintaining safety, reliability, operability and compliance.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--color-steel)' }}>
              Our team's extensive cross-sector experience across <strong>Offshore Oil & Gas, Mining, Utilities, Renewable Energy,</strong> and <strong>Industrial Infrastructure</strong> projects enables us to develop optimised solutions that de-risk execution and support successful project delivery.
            </p>
          </div>
        </div>
      </section>

      <CTABanner title="Need Independent Engineering or EPC Delivery Support?" subtitle="Talk to us about your Owner's Engineering and project delivery requirements." />
    </main>
  );
}
