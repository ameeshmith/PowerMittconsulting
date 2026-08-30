/**
 * PowerMitt Consulting — Engineering Insights & Technical Articles
 * Written & curated by Dinesh Mithanthaya, Principal Power Engineer.
 */

export const categories = [
  'All',
  'Power Systems',
  'Energy Transition',
  'Mining & Resources',
  'Owner\'s Engineering'
];

export const articles = [
  {
    id: 'bess-grid-compliance-harmonics',
    slug: 'bess-grid-compliance-harmonics',
    title: 'Grid Compliance & Power Quality Challenges in Large-Scale BESS Connections',
    subtitle: 'Practical strategies for managing harmonic distortion, voltage stability, and NEM/WEM connection standards in utility battery storage.',
    category: 'Energy Transition',
    author: {
      name: 'Dinesh Mithanthaya',
      role: 'Principal Power Engineer',
      avatar: '/assets/images/hero-nature-energy.jpg',
      bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
    },
    publishedAt: '2026-08-15',
    readTime: '6 min read',
    coverImage: '/assets/images/renewable-bess-bg.jpg',
    excerpt: 'Connecting multi-megawatt Battery Energy Storage Systems (BESS) to Australian transmission and distribution networks requires navigating rigorous Generator Performance Standards (GPS) and complex power quality constraints.',
    tags: ['BESS', 'Grid Connection', 'Harmonics', 'Power Quality', 'WEM / NEM'],
    keyTakeaways: [
      'Inverter-based resources (IBR) introduce unique harmonic interactions that require detailed electromagnetic transient (EMT) and RMS modelling.',
      'Active harmonic filtering and tuned passive filter design must be evaluated early during FEED to prevent costly connection delays.',
      'Early engagement with Network Service Providers (NSPs) on System Strength Impact Assessments is critical to project timeline certainty.'
    ],
    content: `
## Introduction

The rapid acceleration of renewable generation across Australia has positioned Battery Energy Storage Systems (BESS) as essential infrastructure for grid stabilization, frequency control (FCAS), and energy arbitrage. However, integrating multi-megawatt battery storage facilities into existing transmission and distribution networks presents profound electrical engineering challenges.

Unlike traditional synchronous generators, BESS installations rely on power electronics converters (Inverter-Based Resources, or IBR). This fundamental difference alters the fault behavior, system strength dynamics, and power quality characteristics of the connection point.

---

## 1. Navigating Inverter Harmonics & Resonance

Grid-scale battery inverters operate at high switching frequencies, inherently generating harmonic currents. While modern Pulse Width Modulation (PWM) techniques significantly reduce lower-order harmonics, high-order harmonics and resonance risks remain prevalent.

When connected to weak networks or long transmission feeders, the capacitive elements of the facility (such as underground medium-voltage cable networks and harmonic filter capacitors) can interact with grid inductances. This interaction creates parallel resonance points that magnify harmonic voltages beyond the limits prescribed by **AS/NZS 61000.3.6** and national grid codes.

### Recommended Mitigation Approach:
- **Comprehensive Background Harmonic Measurements**: Perform continuous 7-day harmonic logging at the proposed Point of Connection (POC) prior to finalising equipment specifications.
- **Harmonic Impedance Loci Modeling**: Develop complete harmonic impedance envelopes using tools such as PSCAD/EMTDC to assess resonance risk across all credible network configurations (including N-1 contingency states).
- **Hybrid Filter Topology**: Combine passive C-type damped filters with inverter active damping algorithms to suppress harmonic resonance without excessive reactive power penalties.

---

## 2. System Strength and Weak Grid Stability

A significant proportion of new renewable and storage projects in Western Australia (SWIS) and the National Electricity Market (NEM) are located in remote areas with low Short Circuit Ratios (SCR < 2.0).

In weak network conditions, phase-locked loop (PLL) instability in conventional grid-following inverters can lead to voltage oscillation and potential trip events during transient faults.

### The Role of Grid-Forming (GFM) Inverters
Transitioning from standard grid-following to advanced **grid-forming (Virtual Synchronous Machine)** control architectures is rapidly becoming a standard requirement for major network connections. Grid-forming inverters provide:
- Instantaneous synthetic inertia response during rate-of-change-of-frequency (RoCoF) events.
- Direct voltage and frequency control, acting as an active voltage source behind an impedance.
- Damping of sub-synchronous control interactions (SSCI).

---

## 3. Streamlining the Generator Performance Standard (GPS) Process

Achieving connection agreement (under Chapter 5 of the National Electricity Rules or Western Australian WEM Rules) represents one of the largest technical hurdles in the project lifecycle.

To minimize iteration cycles between the developer, Owner's Engineer, and Network Service Provider:
1. **Unify the Model Delivery**: Ensure benchmarked RMS (PSS®E / PowerFactory) and EMT (PSCAD) models are aligned directly with the original equipment manufacturer (OEM) firmware versions.
2. **Prioritize Fault-Ride-Through (FRT) Tuning**: Tune reactive current injection during symmetrical and asymmetrical faults to ensure continuous uninterrupted operation without exceeding converter current limits.
3. **Conduct Rigorous Hardware-in-the-Loop (HIL) Testing**: Pre-validate control cubicles against simulated network conditions before site mobilization.

---

## Conclusion & Practical Takeaway

Successful BESS grid integration is not merely an equipment procurement exercise—it is a sophisticated power systems engineering discipline. Engaging specialist power engineering expertise during the feasibility and pre-FEED phases ensures that harmonic mitigation, reactive power compensation, and grid compliance requirements are architected accurately into the project scope from day one.
    `
  },
  {
    id: 'owners-engineering-industrial-decarbonisation',
    slug: 'owners-engineering-industrial-decarbonisation',
    title: 'The Critical Role of Owner\'s Engineering in Industrial Decarbonisation',
    subtitle: 'How independent technical verification protects capital investment and ensures operational continuity in complex electrification projects.',
    category: 'Owner\'s Engineering',
    author: {
      name: 'Dinesh Mithanthaya',
      role: 'Principal Power Engineer',
      avatar: '/assets/images/hero-nature-energy.jpg',
      bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
    },
    publishedAt: '2026-08-02',
    readTime: '5 min read',
    coverImage: '/assets/images/owners-engineering-bg.jpg',
    excerpt: 'As heavy industry and mining operations transition from fossil fuels to electrified power systems, independent Owner\'s Engineering provides the technical due diligence necessary to derisk multi-million dollar investments.',
    tags: ['Owner\'s Engineer', 'Decarbonisation', 'Due Diligence', 'Electrification', 'Capex Optimization'],
    keyTakeaways: [
      'Owner\'s Engineers serve as an objective technical advocate, eliminating vendor bias during technology selection and equipment sizing.',
      'Integrating large-scale electrical loads into brownfield industrial facilities requires rigorous brownfield interface verification.',
      'Independent design verification before EPC contract execution significantly reduces variation claims and commissioning disputes.'
    ],
    content: `
## The Decarbonisation Challenge in Heavy Industry

Mining, refining, and manufacturing enterprises across Australia are under increasing pressure to achieve aggressive Scope 1 and Scope 2 emissions reduction targets. Achieving these goals requires replacing fossil-fuel-driven equipment—such as gas boilers, diesel haul trucks, and gas turbine compressors—with high-voltage electric alternatives, onsite renewables, and battery storage.

However, industrial electrical networks were not originally designed for the dynamic, high-density power demands of full-scale electrification.

---

## Why Independent Technical Due Diligence Matters

When asset owners engage turnkey Engineering, Procurement, and Construction (EPC) contractors or equipment vendors, technical trade-offs are often made that favor procurement convenience or standardized catalog designs rather than long-term asset reliability.

An independent **Owner's Engineer (OE)** acts as the asset owner's technical conscience, providing specialized expertise that bridges the gap between executive strategy and detailed technical execution:

### 1. Vendor-Neutral Technology Evaluation
Evaluating whether to deploy medium-voltage Variable Speed Drives (VSDs), direct-on-line motors, or hybrid power architectures requires impartial technical analysis. An OE validates OEM claims against actual operational duty cycles and ambient environmental extremes (such as Pilbara heat conditions).

### 2. Brownfield Interface Verification
Brownfield integration is notoriously prone to unbudgeted cost overruns. An OE scrutinizes:
- Existing switchboard fault level withstand ratings against increased fault contribution from new grid ties.
- Cable tray capacities, duct bank thermal ratings, and substation spatial constraints.
- Protection relay compatibility and SCADA communication protocols.

### 3. Construction & Commissioning Oversight
During factory acceptance testing (FAT) and site commissioning, the Owner's Engineer verifies that testing procedures rigorously adhere to specified standards, verifying protection trip times, insulation integrity, and emergency shutdown interlocks before project sign-off.

---

## Summary

In the capital-intensive world of industrial decarbonisation, an experienced Owner's Engineer is an essential partner that safeguards asset integrity, ensures safety compliance, and maximizes the return on engineering investment.
    `
  },
  {
    id: 'remote-mining-microgrids-electrification',
    slug: 'remote-mining-microgrids-electrification',
    title: 'Electrification of Remote Mining Infrastructure: Overcoming Network Constraints',
    subtitle: 'Engineering high-penetration renewable microgrids and heavy electric haulage charging systems in isolated mining environments.',
    category: 'Mining & Resources',
    author: {
      name: 'Dinesh Mithanthaya',
      role: 'Principal Power Engineer',
      avatar: '/assets/images/hero-nature-energy.jpg',
      bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
    },
    publishedAt: '2026-07-20',
    readTime: '7 min read',
    coverImage: '/assets/images/mining-bg.jpg',
    excerpt: 'Remote mine sites are transitioning from diesel generators to high-penetration hybrid microgrids. We examine the electrical power system architecture needed to support megawatt-scale haul truck charging and process plant reliability.',
    tags: ['Mining', 'Microgrids', 'Heavy Electrification', 'Diesel Displacement', 'Pilbara'],
    keyTakeaways: [
      'Dynamic load profiles from megawatt-scale battery electric haul truck charging require dedicated fast-response energy storage buffers.',
      'Spinning reserve reduction requires advanced microgrid controllers with predictive solar forecasting and automated load shedding.',
      'Trailing cable management and harmonic mitigation are critical for underground electrical distribution reliability.'
    ],
    content: `
## The Transformation of Remote Mining Power

Historically, isolated mining operations in Western Australia and regional Australia have relied exclusively on diesel or reciprocating gas generation. With sustainability commitments and escalating fuel logistics costs, mining operators are rapidly deploying large-scale solar PV, wind generation, and battery storage to create autonomous hybrid microgrids.

The ultimate frontier of this transition is the **electrification of heavy mining equipment**—replacing diesel haul fleets with battery-electric trucks requiring multi-megawatt dynamic charging infrastructure.

---

## 1. Managing Severe Load Dynamics

A modern battery-electric haul truck requires charging power between 1 MW and 6 MW during rapid dynamic cycles. When multiple trucks connect simultaneously, the resulting step-load demand can destabilize an isolated power system:

- **Voltage Dip & Frequency Drop**: Sudden step loads cause rapid frequency deviations if synchronous generators cannot ramp up fast enough.
- **Solution — Fast-Acting Battery Energy Buffers**: Deploying dedicated utility-scale BESS with sub-cycle power response (virtual synchronous machine response) acts as a dynamic cushion, maintaining system frequency while diesel/gas units adjust their governor outputs smoothly.

---

## 2. High-Penetration Renewable Integration (Reaching 80%+ Renewable Fraction)

Achieving intermittent renewable penetration beyond 50% without compromising mineral processing plant uptime requires sophisticated power system engineering:

- **Automated Generation & Load Management**: Implementing high-speed Microgrid Control Systems (MCS) capable of executing under-frequency load shedding within 100 milliseconds.
- **Dynamic Voltage Control**: Utilizing STATCOMs or BESS 4-quadrant inverter capabilities to absorb or inject reactive power instantly during cloud transients over large PV arrays.

---

## 3. Underground Mining Electrical Distribution

Underground operations demand unique safety and operational rigor:
- Ground-fault monitoring with rapid neutral grounding resistor (NGR) protection.
- High-voltage trailing cable protection for continuous mobile mining equipment.
- Substation modularization designed for restricted underground drifts.

---

## Practical Engineering Outlook

Mining electrification is no longer an experimental concept—it is an engineering imperative. Developing robust, resilient electrical architectures ensures mining companies achieve decarbonisation milestones while maintaining 99.9% power availability for production-critical processes.
    `
  },
  {
    id: 'carbon-capture-electrical-engineering',
    slug: 'carbon-capture-electrical-engineering',
    title: 'Carbon Capture & Storage: Electrical Engineering Considerations for Mega-Compressors',
    subtitle: 'Key technical factors in high-voltage motor selection, VSD drive topologies, and substation design for commercial CCS facilities.',
    category: 'Power Systems',
    author: {
      name: 'Dinesh Mithanthaya',
      role: 'Principal Power Engineer',
      avatar: '/assets/images/hero-nature-energy.jpg',
      bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
    },
    publishedAt: '2026-07-05',
    readTime: '5 min read',
    coverImage: '/assets/images/carbon-capture-bg.jpg',
    excerpt: 'Commercial-scale Carbon Capture and Storage (CCS) projects involve massive high-voltage motor drives operating in dense industrial facilities. Here is how specialist electrical engineering ensures operational success.',
    tags: ['Carbon Capture', 'High Voltage Motors', 'VSD Drives', 'Substations', 'Gas Compression'],
    keyTakeaways: [
      'CO2 compression trains demand motor drive systems typically ranging from 10 MW to over 40 MW per unit.',
      'Medium-voltage multi-level VSD configurations minimize harmonic feedback to upstream utility networks.',
      'Substation and switchgear footprint optimization is crucial in hazardous coastal and offshore CCS terminal locations.'
    ],
    content: `
## Electrical Demands of Commercial CCS Infrastructure

Carbon Capture, Utilization, and Storage (CCUS) is a vital technological pathway for abating emissions in hard-to-abate sectors such as LNG processing, ammonia production, and steel manufacturing. 

From an electrical engineering standpoint, the capture and liquefaction of carbon dioxide (CO2) represents an exceptionally energy-intensive process. The compression stage requires dense multi-stage centrifugal compressors powered by large medium-voltage electric motors.

---

## 1. Motor & Variable Speed Drive (VSD) Selection

Compressing CO2 to supercritical pressures (often exceeding 100–150 bar for pipeline transportation and geological injection) demands motor ratings from **10 MW to 45 MW**:

- **Synchronous vs. Induction Motors**: For ratings exceeding 15 MW, high-efficiency synchronous motors with brushless excitation systems are generally preferred to maximize power factor and operating efficiency.
- **Voltage Level Optimization**: Selecting 6.6 kV, 11 kV, or 13.8 kV distribution levels is critical to balance cable sizing, switchgear interrupting capacity, and motor starting torque characteristics.
- **Multi-Level Medium-Voltage VSDs**: Employing Cascaded H-Bridge (CHB) or Neutral Point Clamped (NPC) VSD topologies eliminates the need for output harmonic filters, protecting motor insulation from destructive $dV/dt$ stress and reflected wave overvoltages.

---

## 2. Grid Connection and Starting Studies

Starting a 20+ MW electric drive direct-on-line (DOL) would cause unacceptable voltage sag across regional utility feeders. Utilizing Variable Frequency Drives (VFDs) enables soft starting with starting currents limited to 100% of full load current (FLC), preventing network disturbances and mechanical strain on compressor shafts.

---

## Summary

As carbon capture facilities expand across Australia, early electrical engineering involvement during FEED ensures optimal motor drive selection, substation layout efficiency, and seamless grid compliance.
    `
  }
];

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(currentSlug, limit = 2) {
  return articles.filter(a => a.slug !== currentSlug).slice(0, limit);
}
