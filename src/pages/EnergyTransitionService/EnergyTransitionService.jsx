import { Factory, Zap, Sun } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTABanner from '../../components/CTABanner/CTABanner';
import '../ServiceDetail.css';
import './EnergyTransitionService.css';

// SVG 01: Renewable Integration (Solar, Wind, Substation, Pylon, Sun)
function RenewableIntegrationVisual() {
  return (
    <svg className="et-card__svg" viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solar array, wind turbines, substation, and transmission line">
      {/* Background Sun */}
      <circle cx="265" cy="50" r="18" stroke="#94A3B8" strokeWidth="0.9" fill="none" opacity="0.6" />

      {/* Ground Contour */}
      <path d="M 10 148 Q 110 142 210 146 Q 280 148 330 145" stroke="#CBD5E1" strokeWidth="1" />

      {/* ── Solar PV Panel Array ── */}
      {/* Solar Table 1 (Left Front) */}
      <polygon points="25,145 105,145 125,122 45,122" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.2" />
      {/* Solar Cells / Grid lines */}
      <line x1="65" y1="122" x2="45" y2="145" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      <line x1="85" y1="122" x2="65" y2="145" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      <line x1="105" y1="122" x2="85" y2="145" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      <line x1="35" y1="133" x2="115" y2="133" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      {/* Solar Frame Legs */}
      <line x1="35" y1="145" x2="35" y2="154" stroke="#475569" strokeWidth="1.2" />
      <line x1="115" y1="145" x2="115" y2="154" stroke="#475569" strokeWidth="1.2" />
      <line x1="45" y1="122" x2="45" y2="135" stroke="#475569" strokeWidth="1" />
      <line x1="125" y1="122" x2="125" y2="135" stroke="#475569" strokeWidth="1" />

      {/* Solar Table 2 (Adjacent Right) */}
      <polygon points="108,145 178,145 194,124 124,124" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="143" y1="124" x2="128" y2="145" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      <line x1="162" y1="124" x2="147" y2="145" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      <line x1="178" y1="124" x2="163" y2="145" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      <line x1="116" y1="134" x2="186" y2="134" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      <line x1="118" y1="145" x2="118" y2="154" stroke="#475569" strokeWidth="1.2" />
      <line x1="184" y1="145" x2="184" y2="154" stroke="#475569" strokeWidth="1.2" />

      {/* ── Substation Transformer / Enclosure ── */}
      <rect x="200" y="125" width="22" height="21" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="205" y1="128" x2="205" y2="142" stroke="#0284C7" strokeWidth="0.8" />
      <line x1="211" y1="128" x2="211" y2="142" stroke="#0284C7" strokeWidth="0.8" />
      <line x1="217" y1="128" x2="217" y2="142" stroke="#0284C7" strokeWidth="0.8" />
      {/* Bushings */}
      <line x1="206" y1="125" x2="206" y2="120" stroke="#0284C7" strokeWidth="1" />
      <circle cx="206" cy="119" r="1.5" fill="#0284C7" />
      <line x1="216" y1="125" x2="216" y2="120" stroke="#0284C7" strokeWidth="1" />
      <circle cx="216" cy="119" r="1.5" fill="#0284C7" />

      {/* Auxiliary Transformer Bay */}
      <rect x="226" y="121" width="18" height="25" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="230" y1="121" x2="230" y2="115" stroke="#0284C7" strokeWidth="1" />
      <line x1="235" y1="121" x2="235" y2="114" stroke="#0284C7" strokeWidth="1" />
      <line x1="240" y1="121" x2="240" y2="115" stroke="#0284C7" strokeWidth="1" />

      {/* ── Wind Turbines ── */}
      {/* Wind Turbine 1 (Main / Tall) */}
      <line x1="184" y1="144" x2="180" y2="60" stroke="#0284C7" strokeWidth="1.5" />
      <circle cx="180" cy="60" r="3.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
      {/* Blade Up */}
      <path d="M 180 57 C 178 40, 179 26, 180 18 C 182 26, 182 40, 180 57" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.1" />
      {/* Blade Bottom Left */}
      <path d="M 177 62 C 162 72, 149 80, 142 86 C 151 83, 165 77, 177 62" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.1" />
      {/* Blade Bottom Right */}
      <path d="M 183 62 C 196 73, 208 82, 216 88 C 208 83, 196 75, 183 62" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.1" />

      {/* Wind Turbine 2 (Perspective / Background) */}
      <line x1="222" y1="144" x2="219" y2="80" stroke="#00A3E0" strokeWidth="1.2" opacity="0.85" />
      <circle cx="219" cy="80" r="2.5" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="1.2" opacity="0.85" />
      <path d="M 219 78 C 217 65, 218 55, 219 48 C 220 55, 221 65, 219 78" fill="#F0F9FF" stroke="#00A3E0" strokeWidth="1" opacity="0.85" />
      <path d="M 217 81 C 205 89, 195 95, 190 99 C 197 97, 208 92, 217 81" fill="#F0F9FF" stroke="#00A3E0" strokeWidth="1" opacity="0.85" />
      <path d="M 221 81 C 231 90, 240 97, 246 102 C 240 98, 230 92, 221 81" fill="#F0F9FF" stroke="#00A3E0" strokeWidth="1" opacity="0.85" />

      {/* ── Transmission Pylon ── */}
      <g stroke="#0284C7" strokeWidth="1.2" fill="none">
        <line x1="270" y1="146" x2="284" y2="65" />
        <line x1="300" y1="146" x2="288" y2="65" />
        <line x1="284" y1="65" x2="286" y2="52" />
        <line x1="288" y1="65" x2="286" y2="52" />
        {/* Crossarms */}
        <line x1="268" y1="78" x2="304" y2="78" />
        <line x1="264" y1="92" x2="308" y2="92" />
        <line x1="270" y1="108" x2="302" y2="108" />
        {/* Bracing */}
        <line x1="284" y1="78" x2="288" y2="92" />
        <line x1="288" y1="78" x2="284" y2="92" />
        <line x1="282" y1="92" x2="290" y2="108" />
        <line x1="290" y1="92" x2="282" y2="108" />
        <line x1="278" y1="108" x2="294" y2="128" />
        <line x1="294" y1="108" x2="278" y2="128" />
        <line x1="274" y1="128" x2="298" y2="146" />
        <line x1="298" y1="128" x2="274" y2="146" />
        {/* Conductors */}
        <path d="M 268 78 Q 248 88 226 90" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
        <path d="M 304 78 Q 320 84 336 84" stroke="#00A3E0" strokeWidth="0.8" opacity="0.7" />
      </g>
    </svg>
  );
}

// SVG 02: Battery Energy Storage (BESS Container Units & Trees)
function BatteryStorageVisual() {
  return (
    <svg className="et-card__svg" viewBox="0 0 150 110" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BESS containerized battery storage enclosures">
      {/* Background container (offset perspective) */}
      <polygon points="30,42 70,42 82,32 42,32" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      <rect x="30" y="42" width="40" height="42" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <polygon points="70,42 82,32 82,74 70,84" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      <line x1="50" y1="42" x2="50" y2="84" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Main Front Container */}
      <polygon points="75,34 125,34 138,24 88,24" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.2" />
      <rect x="75" y="34" width="50" height="52" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <polygon points="125,34 138,24 138,76 125,86" fill="#F8FAFC" stroke="#0284C7" strokeWidth="1.2" />

      {/* Container Doors and Details */}
      <line x1="100" y1="34" x2="100" y2="86" stroke="#0284C7" strokeWidth="1" />
      <rect x="80" y="38" width="16" height="5" fill="none" stroke="#00A3E0" strokeWidth="0.8" />
      <rect x="104" y="38" width="16" height="5" fill="none" stroke="#00A3E0" strokeWidth="0.8" />

      {/* Lightning Bolt Symbol on Left Door */}
      <path d="M 112 50 L 109 58 L 113 58 L 110 68 L 116 57 L 112 57 Z" fill="#0284C7" />

      {/* Base Foundation Plinth */}
      <rect x="72" y="86" width="68" height="4" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Eco Shrub / Tree */}
      <circle cx="22" cy="74" r="5" stroke="#10B981" strokeWidth="1" fill="#F0FDF4" />
      <line x1="22" y1="79" x2="22" y2="88" stroke="#64748B" strokeWidth="1" />
      <circle cx="140" cy="72" r="4" stroke="#10B981" strokeWidth="0.9" fill="#F0FDF4" />
      <line x1="140" y1="76" x2="140" y2="88" stroke="#64748B" strokeWidth="0.9" />
    </svg>
  );
}

// SVG 03: Hydrogen (Pressure Vessels, H2 Symbol, Buffer Tank, Piping)
function HydrogenVisual() {
  return (
    <svg className="et-card__svg" viewBox="0 0 150 110" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydrogen storage vessel and processing piping">
      {/* Left Buffer Tank */}
      <path d="M 32 45 C 32 38, 48 38, 48 45 L 48 82 C 48 85, 32 85, 32 82 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="32" y1="48" x2="48" y2="48" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="32" y1="78" x2="48" y2="78" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="36" y1="82" x2="36" y2="90" stroke="#475569" strokeWidth="1.2" />
      <line x1="44" y1="82" x2="44" y2="90" stroke="#475569" strokeWidth="1.2" />

      {/* Main Center H2 Storage Bullet */}
      <path d="M 68 38 C 68 22, 114 22, 114 38 L 114 80 C 114 85, 68 85, 68 80 Z" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.3" />
      {/* Top nozzle / safety valve */}
      <line x1="91" y1="23" x2="91" y2="16" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="87" y1="16" x2="95" y2="16" stroke="#0284C7" strokeWidth="1.5" />
      <circle cx="91" cy="14" r="2" fill="#0284C7" />

      {/* H2 Label */}
      <text x="91" y="60" textAnchor="middle" fill="#0284C7" fontSize="15" fontWeight="800" fontFamily="sans-serif">H₂</text>

      {/* Storage Tank Support Legs */}
      <line x1="74" y1="82" x2="74" y2="92" stroke="#475569" strokeWidth="1.5" />
      <line x1="108" y1="82" x2="108" y2="92" stroke="#475569" strokeWidth="1.5" />

      {/* Interconnecting Piping & Manifold */}
      <path d="M 48 58 L 68 58" stroke="#00A3E0" strokeWidth="1.2" />
      <path d="M 114 70 L 136 70 L 136 90" stroke="#00A3E0" strokeWidth="1.2" />
      <circle cx="125" cy="70" r="2" fill="#0284C7" />
      <path d="M 22 75 L 32 75" stroke="#00A3E0" strokeWidth="1.2" />

      {/* Ground Reference */}
      <line x1="18" y1="92" x2="142" y2="92" stroke="#CBD5E1" strokeWidth="1" />
    </svg>
  );
}

// SVG 04: Electrification (Industrial Switchgear / MCC Cubicles)
function ElectrificationVisual() {
  return (
    <svg className="et-card__svg" viewBox="0 0 140 105" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Industrial switchgear and motor control center cubicles">
      {/* Left Back Sub-panel */}
      <polygon points="18,36 42,36 48,28 24,28" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      <rect x="18" y="36" width="24" height="46" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <polygon points="42,36 48,28 48,74 42,82" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      <line x1="22" y1="42" x2="34" y2="42" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="22" y1="46" x2="34" y2="46" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Main Switchgear Lineup (3 Bays) */}
      <polygon points="46,28 106,28 116,18 56,18" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.2" />
      <rect x="46" y="28" width="60" height="56" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <polygon points="106,28 116,18 116,74 106,84" fill="#F8FAFC" stroke="#0284C7" strokeWidth="1.2" />

      {/* Bay Dividers */}
      <line x1="66" y1="28" x2="66" y2="84" stroke="#0284C7" strokeWidth="1" />
      <line x1="86" y1="28" x2="86" y2="84" stroke="#0284C7" strokeWidth="1" />

      {/* Door Features */}
      {/* Bay 1: Vents & Handle */}
      <rect x="50" y="32" width="12" height="4" fill="none" stroke="#00A3E0" strokeWidth="0.8" />
      <rect x="50" y="38" width="12" height="4" fill="none" stroke="#00A3E0" strokeWidth="0.8" />
      <line x1="62" y1="56" x2="62" y2="62" stroke="#475569" strokeWidth="1.2" />

      {/* Bay 2: Breaker Incomer */}
      <rect x="70" y="34" width="12" height="14" fill="#F0F9FF" stroke="#0284C7" strokeWidth="0.9" />
      <circle cx="76" cy="41" r="2" fill="#0284C7" />
      <line x1="82" y1="56" x2="82" y2="62" stroke="#475569" strokeWidth="1.2" />

      {/* Bay 3: Outgoing Feeders */}
      <rect x="90" y="32" width="12" height="4" fill="none" stroke="#00A3E0" strokeWidth="0.8" />
      <circle cx="94" cy="45" r="1.5" fill="#0284C7" />
      <line x1="102" y1="56" x2="102" y2="62" stroke="#475569" strokeWidth="1.2" />

      {/* Base Plinth */}
      <rect x="42" y="84" width="76" height="5" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="0.8" />
    </svg>
  );
}

// SVG 05: Carbon Capture (Absorption Column & Process Piping)
function CarbonCaptureVisual() {
  return (
    <svg className="et-card__svg" viewBox="0 0 140 105" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carbon capture absorption column and industrial piping">
      {/* Main Vertical Stripper / Absorber Column */}
      <path d="M 68 20 C 68 12, 92 12, 92 20 L 92 84 L 68 84 Z" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.3" />
      {/* Column Trays Seams */}
      <line x1="68" y1="34" x2="92" y2="34" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="68" y1="48" x2="92" y2="48" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="68" y1="62" x2="92" y2="62" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="68" y1="76" x2="92" y2="76" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Column Skirt Base */}
      <line x1="66" y1="84" x2="66" y2="92" stroke="#475569" strokeWidth="1.2" />
      <line x1="94" y1="84" x2="94" y2="92" stroke="#475569" strokeWidth="1.2" />

      {/* Auxiliary Knockout Vessel on Left */}
      <path d="M 38 48 C 38 42, 52 42, 52 48 L 52 82 L 38 82 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="45" y1="82" x2="45" y2="90" stroke="#475569" strokeWidth="1.2" />

      {/* Pipe Network and Elbows */}
      {/* Vapor Overhead Line */}
      <path d="M 80 14 L 80 8 L 112 8 L 112 86" stroke="#00A3E0" strokeWidth="1.2" fill="none" />
      {/* Liquid Recycle Line */}
      <path d="M 52 64 L 68 64" stroke="#00A3E0" strokeWidth="1.1" />
      <path d="M 92 54 L 104 54 L 104 86" stroke="#00A3E0" strokeWidth="1.1" fill="none" />
      <path d="M 28 72 L 38 72" stroke="#00A3E0" strokeWidth="1.1" />

      {/* Valve symbols */}
      <circle cx="80" cy="8" r="1.5" fill="#0284C7" />
      <circle cx="104" cy="54" r="1.5" fill="#0284C7" />

      {/* Ground Reference */}
      <line x1="20" y1="92" x2="125" y2="92" stroke="#CBD5E1" strokeWidth="1" />
    </svg>
  );
}

// SVG 06: Net-Zero Pathways (Road, Clean City Skyline, Globe & Leaf)
function NetZeroVisual() {
  return (
    <svg className="et-card__svg" viewBox="0 0 140 105" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Winding road to net-zero sustainable city skyline with leaf">
      {/* Sustainable City Skyline Silhouettes */}
      <rect x="22" y="60" width="8" height="24" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
      <rect x="32" y="52" width="10" height="32" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
      <line x1="37" y1="52" x2="37" y2="44" stroke="#94A3B8" strokeWidth="0.8" />
      <rect x="44" y="58" width="12" height="26" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
      <rect x="58" y="64" width="8" height="20" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
      <rect x="68" y="55" width="11" height="29" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
      <circle cx="73" cy="50" r="2" fill="#0284C7" />

      {/* Globe Circle Outline */}
      <circle cx="94" cy="46" r="26" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="3 2" fill="none" opacity="0.6" />
      <ellipse cx="94" cy="46" rx="26" ry="11" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="2 2" fill="none" opacity="0.4" />
      <line x1="94" y1="20" x2="94" y2="72" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4" />

      {/* Clean Green Leaf Emblem */}
      <path d="M 92 48 C 92 34, 110 32, 114 30 C 114 44, 98 56, 92 48 Z" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.3" />
      <path d="M 92 48 Q 102 42 114 30" stroke="#10B981" strokeWidth="1" fill="none" />

      {/* Smooth Winding Road */}
      <path d="M 15 92 Q 60 90 85 82 Q 105 76 112 70" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
      <path d="M 30 92 Q 68 91 92 84 Q 110 78 116 70" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
      {/* Dashed Center Road Line */}
      <path d="M 22 92 Q 64 90.5 88 83 Q 107 77 114 70" stroke="#00A3E0" strokeWidth="0.9" strokeDasharray="3 3" fill="none" />

      {/* Tree Silhouette */}
      <circle cx="20" cy="84" r="3.5" fill="#DCFCE7" stroke="#10B981" strokeWidth="0.8" />
      <line x1="20" y1="87.5" x2="20" y2="92" stroke="#64748B" strokeWidth="0.8" />
    </svg>
  );
}

export default function EnergyTransitionService() {
  return (
    <main>
      <SEO
        title="Renewable Energy & Decarbonisation | PowerMitt Consulting"
        description="Engineering solutions for renewable integration, BESS, hydrogen, electrification, and industrial decarbonisation within real power-system constraints."
        path="/services/energy-transition"
        image="/assets/images/renewable-bess-bg.jpg"
      />

      <Hero
        variant="service"
        bgImage="/assets/images/renewable-bess-bg.jpg"
        label="Services / Renewable Energy & Decarbonisation"
        title="Renewable Energy & Decarbonisation"
        subtitle="Practical engineering solutions for renewable integration, energy storage, electrification, and industrial decarbonisation — working within the constraints of real power systems."
      />

      {/* Overview Section */}
      <section>
        <div className="container">
          <div className="service-detail__intro">
            <div className="service-detail__intro-text">
              <span className="label label--teal">Overview</span>
              <h2>Engineering the Energy Transition</h2>
              <hr className="divider" />
              <p>
                The energy transition presents both opportunity and complexity for industrial operators. Integrating renewable energy, battery storage, hydrogen, and electrification technologies into existing industrial power systems requires specialist engineering expertise that understands both the new technologies and the existing infrastructure they must connect to.
              </p>
              <p>
                PowerMitt provides practical energy transition engineering services that bridge the gap between sustainability ambitions and operational reality. We help clients develop technically robust, implementable strategies for decarbonising their operations.
              </p>
            </div>
            <div className="service-detail__sidebar">
              <h4>Capabilities</h4>
              <ul>
                <li>Renewable integration studies</li>
                <li>BESS engineering &amp; sizing</li>
                <li>Green power import strategies</li>
                <li>Hydrogen infrastructure</li>
                <li>Industrial electrification</li>
                <li>Net-zero pathway development</li>
                <li>Carbon footprint reduction</li>
                <li>Energy transition studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Energy Transition Technologies Section */}
      <section className="et-tech-section" id="energy-transition-technologies" aria-label="Energy Transition Technologies">
        <div className="container">
          <SectionHeader
            label="Technologies"
            title="Energy Transition Technologies"
            subtitle="Specialist engineering across the key technologies enabling industrial decarbonisation."
          />

          <div className="et-tech-layout">

            {/* Top Row: Hero Card (01) + Right Stack (02, 03) */}
            <div className="et-tech-top-row">

              {/* Card 01: Renewable Integration (Featured Hero Card) */}
              <article className="et-card et-card--hero">
                <div className="et-card__body">
                  <div className="et-card__content">
                    <span className="et-card__num">01 —</span>
                    <h3 className="et-card__title">Renewable Integration</h3>
                    <p className="et-card__desc">
                      Study and design renewable integration into existing power systems, including grid connection and system impact assessment.
                    </p>
                  </div>
                  <div className="et-card__visual">
                    <RenewableIntegrationVisual />
                  </div>
                </div>
              </article>

              {/* Right Stack: Card 02 & Card 03 */}
              <div className="et-tech-right-stack">

                {/* Card 02: Battery Energy Storage */}
                <article className="et-card et-card--compact">
                  <div className="et-card__body">
                    <div className="et-card__content">
                      <span className="et-card__num">02 —</span>
                      <h3 className="et-card__title">Battery Energy Storage</h3>
                      <p className="et-card__desc">
                        Engineering studies and design for battery energy storage systems, including grid connection, system integration, and operational assessment.
                      </p>
                    </div>
                    <div className="et-card__visual">
                      <BatteryStorageVisual />
                    </div>
                  </div>
                </article>

                {/* Card 03: Hydrogen */}
                <article className="et-card et-card--compact">
                  <div className="et-card__body">
                    <div className="et-card__content">
                      <span className="et-card__num">03 —</span>
                      <h3 className="et-card__title">Hydrogen</h3>
                      <p className="et-card__desc">
                        Electrical infrastructure for green hydrogen production, including power supply, control systems, and integration with industrial facilities.
                      </p>
                    </div>
                    <div className="et-card__visual">
                      <HydrogenVisual />
                    </div>
                  </div>
                </article>

              </div>

            </div>

            {/* Bottom Row: 3 Equal Columns (04, 05, 06) */}
            <div className="et-tech-bottom-row">

              {/* Card 04: Electrification */}
              <article className="et-card et-card--compact">
                <div className="et-card__body">
                  <div className="et-card__content">
                    <span className="et-card__num">04 —</span>
                    <h3 className="et-card__title">Electrification</h3>
                    <p className="et-card__desc">
                      Design and integration of electrical systems for industrial electrification, including power supply, augmentation, and distribution.
                    </p>
                  </div>
                  <div className="et-card__visual">
                    <ElectrificationVisual />
                  </div>
                </div>
              </article>

              {/* Card 05: Carbon Capture */}
              <article className="et-card et-card--compact">
                <div className="et-card__body">
                  <div className="et-card__content">
                    <span className="et-card__num">05 —</span>
                    <h3 className="et-card__title">Carbon Capture</h3>
                    <p className="et-card__desc">
                      Electrical engineering for carbon capture facilities, including power system design, connections, and integration with plant systems.
                    </p>
                  </div>
                  <div className="et-card__visual">
                    <CarbonCaptureVisual />
                  </div>
                </div>
              </article>

              {/* Card 06: Net-Zero Pathways */}
              <article className="et-card et-card--compact">
                <div className="et-card__body">
                  <div className="et-card__content">
                    <span className="et-card__num">06 —</span>
                    <h3 className="et-card__title">Net-Zero Pathways</h3>
                    <p className="et-card__desc">
                      Engineering roadmaps for industrial decarbonisation, evaluating options and developing practical implementation strategies.
                    </p>
                  </div>
                  <div className="et-card__visual">
                    <NetZeroVisual />
                  </div>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

      <CTABanner
        title="Planning Your Energy Transition?"
        subtitle="Let's discuss how PowerMitt can support your decarbonisation strategy."
        variant="teal"
      />
    </main>
  );
}
