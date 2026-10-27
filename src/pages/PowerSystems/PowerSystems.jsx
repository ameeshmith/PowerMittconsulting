import {
  Building2,
  Network,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';
import './PowerSystems.css';

// SVG Diagram 01: Load Flow & Network Modeling
function DiagramLoadFlow() {
  return (
    <svg className="pss-card__svg" viewBox="0 0 170 125" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="132kV to 11kV Single Line Diagram">
      {/* 132 kV incomer */}
      <text x="25" y="16" fill="#0F172A" fontSize="9" fontWeight="700">132 kV</text>
      <line x1="45" y1="22" x2="45" y2="36" stroke="#0F172A" strokeWidth="1.25" />
      <line x1="30" y1="22" x2="60" y2="22" stroke="#0F172A" strokeWidth="1.5" />

      {/* Transformer interlocking circles */}
      <circle cx="45" cy="44" r="8" stroke="#0284C7" strokeWidth="1.25" fill="#FFFFFF" />
      <circle cx="45" cy="54" r="8" stroke="#0284C7" strokeWidth="1.25" fill="#FFFFFF" />

      {/* Vertical link to 11kV bus */}
      <line x1="45" y1="62" x2="45" y2="76" stroke="#0F172A" strokeWidth="1.25" />

      {/* 11 kV Busbar */}
      <line x1="15" y1="76" x2="155" y2="76" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <text x="145" y="66" textAnchor="end" fill="#0F172A" fontSize="8.5" fontWeight="700">11 kV Bus</text>

      {/* Feeder 1 */}
      <line x1="35" y1="76" x2="35" y2="88" stroke="#0F172A" strokeWidth="1" />
      <rect x="30" y="88" width="10" height="12" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
      <line x1="30" y1="88" x2="40" y2="100" stroke="#0284C7" strokeWidth="1" />
      <line x1="35" y1="100" x2="35" y2="114" stroke="#0F172A" strokeWidth="1" />
      <polygon points="35,116 32,111 38,111" fill="#0284C7" />

      {/* Feeder 2 */}
      <line x1="85" y1="76" x2="85" y2="88" stroke="#0F172A" strokeWidth="1" />
      <rect x="80" y="88" width="10" height="12" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
      <line x1="80" y1="88" x2="90" y2="100" stroke="#0284C7" strokeWidth="1" />
      <line x1="85" y1="100" x2="85" y2="114" stroke="#0F172A" strokeWidth="1" />
      <polygon points="85,116 82,111 88,111" fill="#0284C7" />

      {/* Feeder 3 */}
      <line x1="135" y1="76" x2="135" y2="88" stroke="#0F172A" strokeWidth="1" />
      <rect x="130" y="88" width="10" height="12" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
      <line x1="130" y1="88" x2="140" y2="100" stroke="#0284C7" strokeWidth="1" />
      <line x1="135" y1="100" x2="135" y2="114" stroke="#0F172A" strokeWidth="1" />
      <polygon points="135,116 132,111 138,111" fill="#0284C7" />
    </svg>
  );
}

// SVG Diagram 02: Short Circuit & Fault Analysis
function DiagramShortCircuit() {
  return (
    <svg className="pss-card__svg" viewBox="0 0 170 125" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3-phase and 1-phase Fault Current Waveform">
      {/* Legend */}
      <line x1="105" y1="12" x2="117" y2="12" stroke="#0284C7" strokeWidth="1.5" />
      <text x="121" y="14" fill="#64748B" fontSize="7.5" fontWeight="600">3ϕ Fault</text>
      <line x1="105" y1="22" x2="117" y2="22" stroke="#EF4444" strokeWidth="1.5" />
      <text x="121" y="24" fill="#64748B" fontSize="7.5" fontWeight="600">1ϕ Fault</text>

      {/* Axes */}
      <line x1="28" y1="28" x2="28" y2="102" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="28" y1="65" x2="162" y2="65" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Y Ticks */}
      <text x="24" y="32" textAnchor="end" fill="#64748B" fontSize="7.5">50</text>
      <text x="24" y="67" textAnchor="end" fill="#64748B" fontSize="7.5">0</text>
      <text x="24" y="102" textAnchor="end" fill="#64748B" fontSize="7.5">-50</text>

      {/* X Ticks & Label */}
      <text x="28" y="112" textAnchor="middle" fill="#64748B" fontSize="7">0</text>
      <text x="70" y="112" textAnchor="middle" fill="#64748B" fontSize="7">0.1</text>
      <text x="112" y="112" textAnchor="middle" fill="#64748B" fontSize="7">0.2</text>
      <text x="154" y="112" textAnchor="middle" fill="#64748B" fontSize="7">0.3</text>
      <text x="110" y="122" textAnchor="middle" fill="#64748B" fontSize="7.5" fontWeight="600">Time (s)</text>

      {/* Blue 3-Phase Fault Damped Waveform */}
      <path d="M 28 65 
               C 32 30, 36 28, 42 30 
               C 48 32, 50 96, 56 94 
               C 62 92, 66 42, 72 45 
               C 78 48, 80 82, 86 80 
               C 92 78, 96 54, 102 56 
               C 108 58, 112 74, 118 73 
               C 124 72, 128 60, 134 61 
               C 140 62, 144 68, 150 67 
               C 154 66, 158 64, 162 65"
        stroke="#0284C7" strokeWidth="1.5" fill="none" />

      {/* Red 1-Phase Fault Damped Waveform */}
      <path d="M 28 65 
               C 34 85, 38 88, 44 85 
               C 50 82, 52 45, 58 48 
               C 64 51, 68 78, 74 75 
               C 80 72, 84 55, 90 57 
               C 96 59, 100 70, 106 69 
               C 112 68, 116 62, 122 63 
               C 128 64, 132 67, 138 66 
               C 144 65, 152 64, 162 65"
        stroke="#EF4444" strokeWidth="1.25" fill="none" />
    </svg>
  );
}

// SVG Diagram 03: Protection Coordination & Arc Flash
function DiagramProtection() {
  return (
    <svg className="pss-card__svg" viewBox="0 0 170 125" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Protection Coordination Time-Current Characteristic Curves">
      {/* Axes */}
      <line x1="32" y1="12" x2="32" y2="98" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="32" y1="98" x2="162" y2="98" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Y Axis: Time (s) */}
      <text x="10" y="55" transform="rotate(-90 10 55)" fill="#64748B" fontSize="7.5" fontWeight="600" textAnchor="middle">Time (s)</text>
      <text x="28" y="16" textAnchor="end" fill="#64748B" fontSize="6.5">1000</text>
      <text x="28" y="36" textAnchor="end" fill="#64748B" fontSize="6.5">100</text>
      <text x="28" y="56" textAnchor="end" fill="#64748B" fontSize="6.5">10</text>
      <text x="28" y="76" textAnchor="end" fill="#64748B" fontSize="6.5">1</text>
      <text x="28" y="96" textAnchor="end" fill="#64748B" fontSize="6.5">0.1</text>

      {/* X Axis: Current (A) */}
      <text x="48" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">1k</text>
      <text x="96" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">10k</text>
      <text x="144" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">100k</text>
      <text x="100" y="119" textAnchor="middle" fill="#64748B" fontSize="7.5" fontWeight="600">Current (A)</text>

      {/* Protection Curves */}
      {/* Upstream Curve (Red) */}
      <path d="M 64 14 C 68 35, 78 60, 98 68 L 108 68 L 108 92 L 158 92" stroke="#EF4444" strokeWidth="1.5" fill="none" />

      {/* Mid Curve (Teal/Cyan) */}
      <path d="M 54 14 C 58 40, 70 70, 88 78 L 98 78 L 98 95 L 140 95" stroke="#00A3E0" strokeWidth="1.25" fill="none" />

      {/* Downstream Curve (Blue) */}
      <path d="M 44 20 C 48 50, 60 78, 80 86 L 90 86 L 90 98" stroke="#0284C7" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// SVG Diagram 04: Motor Starting & Dynamic Stability
function DiagramMotorStarting() {
  return (
    <svg className="pss-card__svg" viewBox="0 0 170 125" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Motor Starting DOL vs VSD Current Curves">
      {/* Title */}
      <text x="85" y="11" textAnchor="middle" fill="#0F172A" fontSize="7.5" fontWeight="700">Motor Starting Current</text>

      {/* Legend */}
      <line x1="120" y1="20" x2="130" y2="20" stroke="#0284C7" strokeWidth="1.5" />
      <text x="134" y="22" fill="#64748B" fontSize="7" fontWeight="600">DOL</text>
      <line x1="120" y1="28" x2="130" y2="28" stroke="#10B981" strokeWidth="1.5" />
      <text x="134" y="30" fill="#64748B" fontSize="7" fontWeight="600">VSD</text>

      {/* Axes */}
      <line x1="28" y1="18" x2="28" y2="98" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="28" y1="98" x2="162" y2="98" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Y Axis: Current (pu) */}
      <text x="8" y="58" transform="rotate(-90 8 58)" fill="#64748B" fontSize="7" fontWeight="600" textAnchor="middle">Current (pu)</text>
      <text x="24" y="24" textAnchor="end" fill="#64748B" fontSize="6.5">8</text>
      <text x="24" y="44" textAnchor="end" fill="#64748B" fontSize="6.5">6</text>
      <text x="24" y="64" textAnchor="end" fill="#64748B" fontSize="6.5">4</text>
      <text x="24" y="84" textAnchor="end" fill="#64748B" fontSize="6.5">2</text>
      <text x="24" y="100" textAnchor="end" fill="#64748B" fontSize="6.5">0</text>

      {/* X Axis: Time (s) */}
      <text x="28" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">0</text>
      <text x="72" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">5</text>
      <text x="116" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">10</text>
      <text x="160" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">15</text>
      <text x="100" y="119" textAnchor="middle" fill="#64748B" fontSize="7.5" fontWeight="600">Time (s)</text>

      {/* DOL Starting Curve (High Inrush Decaying to 1.0 pu) */}
      <path d="M 28 26 C 30 32, 34 68, 48 84 C 62 90, 90 90, 162 90" stroke="#0284C7" strokeWidth="1.5" fill="none" />

      {/* VSD Starting Curve (Soft Start Ramp to 1.0 pu) */}
      <path d="M 28 76 C 32 76, 40 82, 54 87 C 70 89, 100 90, 162 90" stroke="#10B981" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// SVG Diagram 05: Harmonic & Power Quality Analysis
function DiagramHarmonic() {
  return (
    <svg className="pss-card__svg" viewBox="0 0 170 125" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Harmonic Spectrum Order vs Magnitude Bar Chart">
      {/* Title */}
      <text x="85" y="11" textAnchor="middle" fill="#0F172A" fontSize="7.5" fontWeight="700">Harmonic Spectrum</text>

      {/* Axes */}
      <line x1="30" y1="18" x2="30" y2="98" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="30" y1="98" x2="162" y2="98" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Y Axis: Magnitude (%) */}
      <text x="8" y="58" transform="rotate(-90 8 58)" fill="#64748B" fontSize="6.5" fontWeight="600" textAnchor="middle">Magnitude (%)</text>
      <text x="26" y="24" textAnchor="end" fill="#64748B" fontSize="6.5">50</text>
      <text x="26" y="40" textAnchor="end" fill="#64748B" fontSize="6.5">40</text>
      <text x="26" y="55" textAnchor="end" fill="#64748B" fontSize="6.5">30</text>
      <text x="26" y="70" textAnchor="end" fill="#64748B" fontSize="6.5">20</text>
      <text x="26" y="85" textAnchor="end" fill="#64748B" fontSize="6.5">10</text>
      <text x="26" y="100" textAnchor="end" fill="#64748B" fontSize="6.5">0</text>

      {/* X Axis: Harmonic Order */}
      <text x="30" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">0</text>
      <text x="56" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">5</text>
      <text x="82" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">10</text>
      <text x="108" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">15</text>
      <text x="134" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">20</text>
      <text x="158" y="108" textAnchor="middle" fill="#64748B" fontSize="6.5">25</text>
      <text x="96" y="119" textAnchor="middle" fill="#64748B" fontSize="7.5" fontWeight="600">Harmonic Order</text>

      {/* Harmonic Bars (h=1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25) */}
      <rect x="36" y="26" width="5" height="72" fill="#0284C7" />
      <rect x="46" y="56" width="5" height="42" fill="#0284C7" />
      <rect x="56" y="68" width="5" height="30" fill="#0284C7" />
      <rect x="66" y="76" width="5" height="22" fill="#0284C7" />
      <rect x="76" y="82" width="5" height="16" fill="#0284C7" />
      <rect x="86" y="86" width="5" height="12" fill="#0284C7" />
      <rect x="96" y="89" width="5" height="9" fill="#0284C7" />
      <rect x="106" y="91" width="5" height="7" fill="#0284C7" />
      <rect x="116" y="93" width="5" height="5" fill="#0284C7" />
      <rect x="126" y="94" width="5" height="4" fill="#0284C7" />
      <rect x="136" y="95" width="5" height="3" fill="#0284C7" />
      <rect x="146" y="96" width="5" height="2" fill="#0284C7" />
      <rect x="154" y="96.5" width="5" height="1.5" fill="#0284C7" />
    </svg>
  );
}

// SVG Diagram 06: AEMO & WEM Grid Compliance
function DiagramGridCompliance() {
  return (
    <svg className="pss-card__svg" viewBox="0 0 170 125" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Generator to Point of Connection Grid Schematic">
      {/* Generator */}
      <text x="24" y="24" textAnchor="middle" fill="#0F172A" fontSize="7.5" fontWeight="700">Generator</text>
      <circle cx="24" cy="42" r="11" stroke="#0F172A" strokeWidth="1.25" fill="#FFFFFF" />
      <text x="24" y="45" textAnchor="middle" fill="#0284C7" fontSize="9.5" fontWeight="800">G</text>

      {/* Line to TX */}
      <line x1="35" y1="42" x2="48" y2="42" stroke="#0F172A" strokeWidth="1" />

      {/* Transformer */}
      <circle cx="54" cy="42" r="6" stroke="#0284C7" strokeWidth="1.25" fill="#FFFFFF" />
      <circle cx="62" cy="42" r="6" stroke="#0284C7" strokeWidth="1.25" fill="#FFFFFF" />

      {/* Line to Breaker */}
      <line x1="68" y1="42" x2="78" y2="42" stroke="#0F172A" strokeWidth="1" />
      <polygon points="78,37 83,42 78,47" fill="#0F172A" stroke="#0F172A" strokeWidth="0.5" />
      <polygon points="88,37 83,42 88,47" fill="#0F172A" stroke="#0F172A" strokeWidth="0.5" />

      {/* Line through POC */}
      <line x1="88" y1="42" x2="135" y2="42" stroke="#0F172A" strokeWidth="1" />

      {/* Dotted Grid Connection (Point of Connection) Box */}
      <rect x="42" y="62" width="70" height="24" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="0.9" strokeDasharray="2 2" />
      <text x="77" y="73" textAnchor="middle" fill="#0F172A" fontSize="6.5" fontWeight="700">Grid Connection</text>
      <text x="77" y="81" textAnchor="middle" fill="#64748B" fontSize="5.5">(Point of Connection)</text>

      {/* Grid Network Bus */}
      <line x1="135" y1="28" x2="135" y2="56" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <text x="135" y="22" textAnchor="middle" fill="#0F172A" fontSize="7.5" fontWeight="700">Grid Network</text>

      {/* Compliance Requirements Box */}
      <line x1="135" y1="56" x2="135" y2="92" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="2 2" />
      <rect x="110" y="92" width="50" height="24" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="0.9" />
      <text x="135" y="103" textAnchor="middle" fill="#0F172A" fontSize="6.5" fontWeight="700">Compliance</text>
      <text x="135" y="111" textAnchor="middle" fill="#64748B" fontSize="5.5">Requirements</text>
    </svg>
  );
}

// Transmission Pylon Technical Illustration for Center Column
function TransmissionPylonGraphic() {
  return (
    <svg viewBox="0 0 280 90" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrical Grid Transmission Pylons and Connecting Traces">
      {/* Center Circuit connecting nodes */}
      <line x1="20" y1="25" x2="60" y2="25" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="20" cy="25" r="3" fill="#0284C7" />

      <line x1="220" y1="25" x2="260" y2="25" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="260" cy="25" r="3" fill="#0284C7" />

      {/* Main Center Transmission Tower (Pylon) */}
      <g stroke="#0284C7" strokeWidth="1.25" fill="none" strokeLinecap="round">
        {/* Legs / Mast */}
        <line x1="125" y1="85" x2="137" y2="18" />
        <line x1="155" y1="85" x2="143" y2="18" />

        {/* Peak */}
        <line x1="137" y1="18" x2="140" y2="10" />
        <line x1="143" y1="18" x2="140" y2="10" />

        {/* Crossbars / Crossarms */}
        <line x1="118" y1="30" x2="162" y2="30" />
        <line x1="112" y1="45" x2="168" y2="45" />
        <line x1="120" y1="62" x2="160" y2="62" />

        {/* Internal Bracing */}
        <line x1="136" y1="30" x2="144" y2="45" />
        <line x1="144" y1="30" x2="136" y2="45" />
        <line x1="134" y1="45" x2="146" y2="62" />
        <line x1="146" y1="45" x2="134" y2="62" />
        <line x1="132" y1="62" x2="148" y2="85" />
        <line x1="148" y1="62" x2="132" y2="85" />
      </g>

      {/* Smaller Side Towers */}
      <g stroke="#94A3B8" strokeWidth="1" fill="none" opacity="0.6">
        {/* Left Tower */}
        <line x1="68" y1="85" x2="76" y2="32" />
        <line x1="88" y1="85" x2="80" y2="32" />
        <line x1="64" y1="42" x2="92" y2="42" />
        <line x1="60" y1="55" x2="96" y2="55" />

        {/* Right Tower */}
        <line x1="192" y1="85" x2="200" y2="32" />
        <line x1="212" y1="85" x2="204" y2="32" />
        <line x1="188" y1="42" x2="216" y2="42" />
        <line x1="184" y1="55" x2="220" y2="55" />
      </g>

      {/* Sagging Overhead Transmission Lines */}
      <path d="M 10 32 Q 44 42 78 42 Q 109 44 140 30 Q 171 44 202 42 Q 236 42 270 32" stroke="#00A3E0" strokeWidth="1" fill="none" opacity="0.8" />
      <path d="M 10 46 Q 44 56 78 55 Q 109 58 140 45 Q 171 58 202 55 Q 236 56 270 46" stroke="#00A3E0" strokeWidth="1" fill="none" opacity="0.8" />

      {/* Ground Reference Line */}
      <line x1="30" y1="85" x2="250" y2="85" stroke="#E2E8F0" strokeWidth="1.5" />
    </svg>
  );
}

export default function PowerSystems() {
  return (
    <main>
      <SEO
        title="Electrical Power Systems Engineering | PowerMitt Consulting"
        description="Specialist power system engineering including load flow, short circuit, protection coordination, arc flash analysis, HV/LV design, substations, and grid integration."
        path="/services/power-systems"
        image="/assets/images/power-systems-bg.jpg"
      />

      <Hero
        variant="service"
        bgImage="/assets/images/power-systems-hero.jpg"
        label="Services / Electrical Power Systems"
        title="Electrical Power Systems Engineering"
        subtitle="Specialised power systems engineering for complex industrial and energy infrastructure — from analytical modeling and detailed design to grid integration and asset reliability."
      />

      {/* Introduction */}
      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label">Overview</span>
              <h2>Power System Engineering Expertise</h2>
              <hr className="divider" />
              <p>
                PowerMitt provides specialist electrical power system engineering services for complex industrial, mining, energy, and infrastructure projects. Our capabilities cover the full spectrum of power system engineering — from early-stage studies and concept development through to detailed design, equipment specification, and commissioning support.
              </p>
              <p>
                We deliver technically rigorous power system analysis and design solutions that address the real challenges of industrial power systems — including high-fault-level networks, large motor loads, complex protection schemes, and grid integration requirements.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Key Technologies</h4>
              <ul>
                <li>HV/LV Switchgear</li>
                <li>Transformers</li>
                <li>Motor Control Centres</li>
                <li>Protection Relays</li>
                <li>SCADA Systems</li>
                <li>Power Quality Equipment</li>
                <li>Generation Systems</li>
                <li>Grid Connection Equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Power System Studies Section: Hub & Schematic Grid */}
      <section className="pss-section" id="power-system-studies" aria-label="Power System Studies Hub">
        <div className="pss-container">
          <div className="pss-hub-grid">

            {/* Left Column: 01, 03, 05 */}
            <div className="pss-hub-col pss-hub-col--left">

              {/* Card 01 */}
              <article className="pss-card">
                <span className="pss-corner pss-corner--tl" />
                <span className="pss-corner pss-corner--tr" />
                <span className="pss-corner pss-corner--bl" />
                <span className="pss-corner pss-corner--br" />

                <div className="pss-card__body">
                  <div className="pss-card__content">
                    <h3 className="pss-card__title">Load Flow &amp; Network Modeling</h3>
                    <p className="pss-card__desc">Analyse power flow and network performance to ensure reliable and efficient operation.</p>
                  </div>
                  <div className="pss-card__visual">
                    <DiagramLoadFlow />
                  </div>
                </div>
              </article>

              {/* Card 03 */}
              <article className="pss-card">
                <span className="pss-corner pss-corner--tl" />
                <span className="pss-corner pss-corner--tr" />
                <span className="pss-corner pss-corner--bl" />
                <span className="pss-corner pss-corner--br" />

                <div className="pss-card__body">
                  <div className="pss-card__content">
                    <h3 className="pss-card__title">Protection Coordination &amp; Arc Flash</h3>
                    <p className="pss-card__desc">Optimise protection settings and assess arc flash risks to improve safety and system reliability.</p>
                  </div>
                  <div className="pss-card__visual">
                    <DiagramProtection />
                  </div>
                </div>
              </article>

              {/* Card 05 */}
              <article className="pss-card">
                <span className="pss-corner pss-corner--tl" />
                <span className="pss-corner pss-corner--tr" />
                <span className="pss-corner pss-corner--bl" />
                <span className="pss-corner pss-corner--br" />

                <div className="pss-card__body">
                  <div className="pss-card__content">
                    <h3 className="pss-card__title">Harmonic &amp; Power Quality Analysis</h3>
                    <p className="pss-card__desc">Identify harmonics and power quality issues to improve equipment performance and reduce risks.</p>
                  </div>
                  <div className="pss-card__visual">
                    <DiagramHarmonic />
                  </div>
                </div>
              </article>

            </div>

            {/* Center Column: Hub Card + Transmission Graphic */}
            <div className="pss-hub-col pss-hub-col--center">
              <div className="pss-center-card">
                <span className="pss-corner pss-corner--tl" />
                <span className="pss-corner pss-corner--tr" />
                <span className="pss-corner pss-corner--bl" />
                <span className="pss-corner pss-corner--br" />

                <span className="pss-center-card__label">SERVICES</span>
                <h2 className="pss-center-card__title">Power System Studies</h2>
                <p className="pss-center-card__desc">
                  Advanced electrical network analysis and simulation to optimise engineering design, validate operational performance, and ensure statutory compliance.
                </p>
              </div>

              {/* Transmission Grid Graphic */}
              <div className="pss-center-visual" aria-hidden="true">
                <TransmissionPylonGraphic />
              </div>
            </div>

            {/* Right Column: 02, 04, 06 */}
            <div className="pss-hub-col pss-hub-col--right">

              {/* Card 02 */}
              <article className="pss-card">
                <span className="pss-corner pss-corner--tl" />
                <span className="pss-corner pss-corner--tr" />
                <span className="pss-corner pss-corner--bl" />
                <span className="pss-corner pss-corner--br" />

                <div className="pss-card__body">
                  <div className="pss-card__content">
                    <h3 className="pss-card__title">Short Circuit &amp; Fault Analysis</h3>
                    <p className="pss-card__desc">Calculate fault levels and assess equipment ratings to ensure safe and reliable design.</p>
                  </div>
                  <div className="pss-card__visual">
                    <DiagramShortCircuit />
                  </div>
                </div>
              </article>

              {/* Card 04 */}
              <article className="pss-card">
                <span className="pss-corner pss-corner--tl" />
                <span className="pss-corner pss-corner--tr" />
                <span className="pss-corner pss-corner--bl" />
                <span className="pss-corner pss-corner--br" />

                <div className="pss-card__body">
                  <div className="pss-card__content">
                    <h3 className="pss-card__title">Motor Starting &amp; Dynamic Stability</h3>
                    <p className="pss-card__desc">Assess motor starting impact and system stability to ensure smooth and reliable operation.</p>
                  </div>
                  <div className="pss-card__visual">
                    <DiagramMotorStarting />
                  </div>
                </div>
              </article>

              {/* Card 06 */}
              <article className="pss-card">
                <span className="pss-corner pss-corner--tl" />
                <span className="pss-corner pss-corner--tr" />
                <span className="pss-corner pss-corner--bl" />
                <span className="pss-corner pss-corner--br" />

                <div className="pss-card__body">
                  <div className="pss-card__content">
                    <h3 className="pss-card__title">AEMO &amp; WEM Grid Compliance</h3>
                    <p className="pss-card__desc">Support grid connection requirements and compliance for safe and efficient integration with the grid.</p>
                  </div>
                  <div className="pss-card__visual">
                    <DiagramGridCompliance />
                  </div>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

      {/* Power Systems Delivery Flow */}
      <section className="section--dark">
        <div className="container text-center">
          <SectionHeader
            label="Engineering Approach"
            title="From Network Studies to Grid Energisation"
            subtitle="Advanced electrical modeling, substation design, and statutory compliance across NEM and WEM networks."
            light
            align="center"
          />
          <div className="service-flow">
            <div className="service-flow__step">
              <div className="service-flow__box">
                <Activity size={32} />
                <span>Power System Studies &amp; Modeling</span>
              </div>
            </div>
            <div className="service-flow__arrow">→</div>
            <div className="service-flow__step">
              <div className="service-flow__box service-flow__box--accent">
                <Building2 size={32} />
                <span>Substation &amp; Detailed Design</span>
              </div>
            </div>
            <div className="service-flow__arrow">→</div>
            <div className="service-flow__step">
              <div className="service-flow__box service-flow__box--teal">
                <Network size={32} />
                <span>Grid Integration &amp; Energisation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Power System Engineering Support?"
        subtitle="Talk to us about your power system challenges."
      />
    </main>
  );
}
