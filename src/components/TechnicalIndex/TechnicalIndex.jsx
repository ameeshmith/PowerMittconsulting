import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './TechnicalIndex.css';

const practices = [
  {
    id: "power-systems",
    index: "01",
    title: "Electrical Power Systems",
    shortDesc: "Grid compliance, studies & HV/LV distribution",
    specRef: "PRACTICE SPECIFICATION // REF: EPS-01",
    statusBadge: "STATUS: ACTIVE CAPABILITY",
    fullTitle: "Electrical Power Systems Engineering",
    fullDescription: "Comprehensive high-voltage power system studies, utility substation design, and full-lifecycle regulatory connection compliance across Australia's NEM and WEM networks.",
    frameworks: ["AEMO NER CH 5", "WEM RULES", "PSCAD / EMTDC", "DIgSILENT PowerFactory", "PSS/E"],
    deliverables: [
      "Grid connection compliance packages (R1/R2 generator performance standards & GPS)",
      "Load flow, short circuit fault level, arc flash, and harmonic compliance studies",
      "HV/MV substation protection coordination, relay setting calculation & single-line diagrams",
      "Dynamic stability assessments & model validation via PSCAD and PowerFactory"
    ],
    route: "/services/power-systems"
  },
  {
    id: "renewable-storage",
    index: "02",
    title: "Renewable Energy & Storage",
    shortDesc: "Utility solar, BESS & wind integration",
    specRef: "PRACTICE SPECIFICATION // REF: RES-02",
    statusBadge: "STATUS: ACTIVE CAPABILITY",
    fullTitle: "Renewable Generation & Storage Integration",
    fullDescription: "Utility-scale Solar PV, wind, and battery energy storage system (BESS) integration. Specialized network constraint, curtailment modeling, and hybrid plant electrification strategies.",
    frameworks: ["NSP RULES", "IEEE 1547", "PSCAD", "PSS/E", "HOMER"],
    deliverables: [
      "Utility-scale solar PV & BESS plant topology design and balance of plant (BOP)",
      "Grid constraint, curtailment modeling, and network transfer capacity analysis",
      "Inverter-based resource (IBR) grid compliance benchmarking",
      "Hybrid plant battery degradation & dispatch simulation"
    ],
    route: "/services/energy-transition"
  },
  {
    id: "ccs-offshore",
    index: "03",
    title: "Carbon Capture & Storage (CCS)",
    shortDesc: "Mega-compressor drives & offshore power",
    specRef: "PRACTICE SPECIFICATION // REF: CCS-03",
    statusBadge: "STATUS: ACTIVE CAPABILITY",
    fullTitle: "CCS & Offshore Electrical Engineering",
    fullDescription: "Specialist electrical engineering for mega-compressor motor drives, medium-voltage VSD topologies, offshore power, and heavy subsea/brownfield infrastructure.",
    frameworks: ["IEC 61892", "AS/NZS 3000", "API RP 500/505", "HAZOP / LOPA"],
    deliverables: [
      "Mega-watt compressor motor drives and medium-voltage VSD topology engineering",
      "Offshore unattended facilities (NUF) electrical power system design",
      "Subsea & brownfield power integration and life-extension assessments",
      "Hazardous area classification and explosive atmosphere electrical auditing"
    ],
    route: "/services/carbon-capture"
  },
  {
    id: "industrial-mining",
    index: "04",
    title: "Industrial & Mining Power",
    shortDesc: "Underground & open-cut power infrastructure",
    specRef: "PRACTICE SPECIFICATION // REF: IMP-04",
    statusBadge: "STATUS: ACTIVE CAPABILITY",
    fullTitle: "Industrial, Mining & Processing Infrastructure",
    fullDescription: "Underground and open-pit mining power distribution, mineral processing plant design, trailing cable management, and extensive brownfield upgrades and expansion.",
    frameworks: ["AS/NZS 4871", "AS/NZS 3007", "ETAP", "DIgSILENT"],
    deliverables: [
      "Underground & open-cut mine reticulation network architecture",
      "Mineral processing plant heavy power distribution & motor starting dynamics",
      "Trailing cable and substation earthing / neutral grounding design",
      "Brownfield switchyard upgrades and switchgear modernisation"
    ],
    route: "/services/industrial-infrastructure"
  },
  {
    id: "owners-eng",
    index: "05",
    title: "Owner's Engineering & EPC Delivery",
    shortDesc: "Technical due diligence & design verification",
    specRef: "PRACTICE SPECIFICATION // REF: EPC-05",
    statusBadge: "STATUS: ACTIVE CAPABILITY",
    fullTitle: "Owner's Engineering & EPC Technical Advisory",
    fullDescription: "Independent technical due diligence, design verification, value engineering, and EPC delivery support for tier-1 utilities, developers, and infrastructure investors.",
    frameworks: ["AS 4000", "FIDIC", "IEC STANDARDS", "ISO 55001"],
    deliverables: [
      "Independent technical due diligence & design verification for investors/utilities",
      "EPC contract scope formulation, technical specifications, and vendor tender review",
      "Factory Acceptance Testing (FAT) & Site Acceptance Testing (SAT) oversight",
      "Commissioning support, energisation sequencing, and regulatory sign-off"
    ],
    route: "/services/owners-engineering"
  }
];

export default function TechnicalIndex() {
  const [activeId, setActiveId] = useState(practices[0].id);
  const activePractice = practices.find(p => p.id === activeId) || practices[0];

  return (
    <section className="technical-index-section">
      <div className="technical-index__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section Header */}
        <div className="technical-index__header mb-10">
          <div className="label">
            PRACTICE DISCIPLINES & SCOPES
          </div>
          <h2 className="technical-index__title">
            Core Capabilities & Engineering Practices
          </h2>
          <p className="technical-index__subtitle">
            Five dedicated practice disciplines providing technical advisory, simulation, and regulatory connection compliance across Australia's energy networks.
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Index Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3" role="tablist" aria-label="Practice Disciplines">
            {practices.map((practice) => {
              const isActive = practice.id === activeId;
              return (
                <button
                  key={practice.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`spec-sheet-${practice.id}`}
                  id={`tab-${practice.id}`}
                  onClick={() => setActiveId(practice.id)}
                  className={`technical-index__tab ${isActive ? 'technical-index__tab--active' : ''}`}
                >
                  <div className="technical-index__tab-left">
                    <span className="technical-index__tab-index">
                      {practice.index}
                    </span>
                    <div className="technical-index__tab-text">
                      <h3 className="technical-index__tab-title">
                        {practice.title}
                      </h3>
                      <p className="technical-index__tab-desc">
                        {practice.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="technical-index__tab-chevron" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Split Spec Sheet (7 cols) */}
          <div 
            className="lg:col-span-7 technical-index__spec-sheet"
            role="tabpanel"
            id={`spec-sheet-${activePractice.id}`}
            aria-labelledby={`tab-${activePractice.id}`}
          >
            {/* Spec Sheet Meta Bar */}
            <div className="technical-index__spec-meta">
              <span className="technical-index__spec-ref">
                {activePractice.specRef}
              </span>
              <span className="technical-index__spec-status">
                <span className="technical-index__pulse-dot" />
                {activePractice.statusBadge}
              </span>
            </div>

            <hr className="technical-index__spec-divider" />

            {/* Spec Title & Description */}
            <div className="mb-6">
              <h3 className="technical-index__spec-title">
                {activePractice.fullTitle}
              </h3>
              <p className="technical-index__spec-desc">
                {activePractice.fullDescription}
              </p>
            </div>

            {/* Technical Frameworks & Standards */}
            <div className="mb-6">
              <div className="technical-index__section-eyebrow">
                REGULATORY & SIMULATION FRAMEWORKS
              </div>
              <div className="flex flex-wrap gap-2">
                {activePractice.frameworks.map((fw, idx) => (
                  <span key={idx} className="technical-index__framework-tag">
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Scope Deliverables */}
            <div className="mb-8">
              <div className="technical-index__section-eyebrow">
                PRIMARY ENGINEERING DELIVERABLES
              </div>
              <ul className="technical-index__deliverables">
                {activePractice.deliverables.map((del, idx) => (
                  <li key={idx} className="technical-index__deliverable-item">
                    <span className="technical-index__deliverable-marker" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spec Sheet Action Footer */}
            <div className="technical-index__spec-footer">
              <Link 
                to={activePractice.route}
                className="technical-index__cta-primary"
              >
                <span>Explore Full {activePractice.title} Capability</span>
                <ArrowRight size={15} />
              </Link>
              <Link 
                to="/contact"
                className="technical-index__cta-secondary"
              >
                Consult Principal Engineers →
              </Link>
            </div>

          </div>

        </div>

        {/* Directory Footer Link */}
        <div className="technical-index__directory-link mt-12 text-center">
          <Link to="/services" className="epiko-outline-btn">
            View Complete Services Directory <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
