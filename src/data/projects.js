export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'energy', label: 'Energy Transition' },
  { id: 'ccs', label: 'Carbon Capture (CCS)' },
  { id: 'power-systems', label: 'Power Systems' },
  { id: 'bess', label: 'BESS & Storage' },
  { id: 'mining', label: 'Mining' },
  { id: 'industrial', label: 'Industrial' }
];

export const strategicAdvisoryOverview = {
  title: 'Strategic Power Systems & Energy Transition Advisory',
  lead: 'PowerMitt Consulting provides specialist electrical engineering and energy transition advisory services to major energy operators undertaking decarbonisation, reliability enhancement, and large-scale infrastructure expansion projects.',
  body: 'Our expertise spans grid integration, high-voltage power systems, renewable energy connectivity, battery energy storage systems (BESS), carbon capture and storage (CCS), dynamic power system modelling, and concept-to-FEED stage project development.'
};

export const projects = [
  {
    id: 'green-power-import-hvdc',
    title: 'Green Power Import Strategy & Large-Scale Electrification',
    category: 'energy',
    categories: ['energy', 'power-systems', 'ccs'],
    industry: 'Energy Transition & Electrification',
    location: 'Western Australia',
    clientType: 'Major Energy & Industrial Operator',
    date: '2024–2025',
    image: '/assets/images/projects/hvdc-green-power.jpg',
    description: 'Strategic advisory supporting future load growth for Carbon Capture and Storage (CCS) developments and industrial electrification programs. Included evaluation of green power import pathways, third-party power generation, and High Voltage Direct Current (HVDC) Back-to-Back network architectures for controlled power exchange.',
    fullText: 'PowerMitt Consulting has provided strategic advisory services supporting future load growth associated with Carbon Capture and Storage (CCS) developments and industrial electrification programs. Our work included the evaluation of multiple green power import pathways, assessment of third-party power generation solutions, and development of innovative network architectures capable of enabling reliable integration of large external power sources into existing industrial power systems. A key outcome was the introduction and assessment of High Voltage Direct Current (HVDC) Back-to-Back technology as a strategic option for controlled power exchange between dissimilar power systems. This approach enables improved system stability, enhanced controllability of power flows, and greater operational flexibility while supporting future decarbonisation objectives. Through detailed technical evaluation and option selection studies, PowerMitt helped establish practical pathways for integrating renewable and low-carbon energy sources into large industrial operations while maintaining system reliability and operational resilience.',
    highlights: [
      'Evaluation of multiple green power import pathways & third-party generation',
      'HVDC Back-to-Back technology assessment for dissimilar power exchange',
      'Network architecture enabling large external power into industrial systems',
      'Enhanced system stability, controllability, and operational resilience'
    ],
    technologies: ['HVDC Back-to-Back', 'Green Power Import', 'Industrial Electrification', 'Grid Integration', 'System Stability']
  },
  {
    id: 'ccs-electrical-infrastructure',
    title: 'Carbon Capture & Storage (CCS) Electrical Infrastructure',
    category: 'ccs',
    categories: ['ccs', 'power-systems', 'industrial'],
    industry: 'Carbon Capture & Storage',
    location: 'Pilbara, Western Australia',
    clientType: 'Critical Energy Infrastructure Operator',
    date: '2024–2025',
    image: '/assets/images/projects/ccs-electrical-infrastructure.jpg',
    description: 'Specialist electrical infrastructure engineering for CCS developments from concept selection and FEED through detailed design. Encompassing 132 kV GIS substation extensions, multi-megawatt synchronous CO₂ compressor drives, and innovative IEC 61850 merging unit protection architectures.',
    fullText: 'PowerMitt Consulting provides specialist expertise in electrical infrastructure associated with Carbon Capture and Storage developments, supporting projects through concept selection, FEED, and detailed design phases. Our services have included the development of solutions for the extension of 132 kV Gas Insulated Switchgear (GIS) substations, integration of large transformer loads, and implementation of modern protection and control philosophies (IEC 61850 based) suitable for critical energy infrastructure. Our CCS capabilities extend to the electrical engineering and grid integration of large synchronous motor-driven compressor systems, including main CO₂ injection and export compressors. We support concept selection, electrical system design, equipment specification, power system modelling, grid compliance studies, and operational reliability assessments for multi-megawatt compression facilities. A notable contribution involved the development of innovative protection schemes for remotely located power transformers through the application of merging unit technology and digital substation principles. This approach improves system flexibility, reduces cabling requirements, and supports future adoption of IEC 61850-based architectures while maintaining high levels of protection system reliability.',
    highlights: [
      '132 kV Gas Insulated Switchgear (GIS) substation extension & transformer loads',
      'Multi-megawatt synchronous motor-driven CO₂ injection & export compressors',
      'Innovative protection for remote transformers via merging units & IEC 61850',
      'Power system modelling, equipment specification & grid compliance studies'
    ],
    technologies: ['132kV GIS Substation', 'IEC 61850 & Merging Units', 'Synchronous Compressors', 'Power System Modelling', 'Grid Compliance']
  },
  {
    id: 'dynamic-power-modelling-digital-twins',
    title: 'Dynamic Power System Modelling & Digital Network Twins',
    category: 'power-systems',
    categories: ['power-systems', 'energy'],
    industry: 'Power Systems & Digital Twins',
    location: 'Western Australia',
    clientType: 'Industrial Power Network Operator',
    date: '2023–2024',
    image: '/assets/images/projects/digital-network-twins.jpg',
    description: 'Consolidation, validation, and expansion of complex industrial network models into an enterprise-level ETAP platform. Upgraded steady-state models into dynamic machine, protection, and control twins, validated against independent multi-vendor studies.',
    fullText: 'PowerMitt Consulting specialises in the development, validation, and enhancement of power system models used for operational studies, expansion planning, and network compliance assessments. Our work has included the consolidation and validation of complex industrial power system models into a single enterprise-level ETAP platform, eliminating reliance on multiple independent and often inconsistent network models. Through a structured model enhancement program, steady-state network representations were expanded to incorporate dynamic machine, protection, and control system characteristics. The resulting dynamic network model enabled advanced transient and stability studies while providing a common engineering reference for future project development. The model validation process involved benchmarking simulation results against independent studies developed by multiple equipment vendors using different software platforms. This approach ensured confidence in the model\'s predictive capability and established a robust digital foundation for future system planning and operational decision-making.',
    highlights: [
      'Consolidation of disparate models into single enterprise ETAP platform',
      'Incorporation of dynamic machine, protection, and control systems',
      'Benchmark simulation validation against independent multi-vendor studies',
      'Robust digital foundation for operational planning and transient studies'
    ],
    technologies: ['ETAP Enterprise Platform', 'Dynamic Stability Modelling', 'Digital Twin', 'Transient Analysis', 'Multi-Vendor Benchmarking']
  },
  {
    id: 'offshore-electrification-bess',
    title: 'Offshore Electrification, BESS & Future Energy Concepts',
    category: 'bess',
    categories: ['bess', 'energy', 'industrial'],
    industry: 'Offshore Energy & Decarbonisation',
    location: 'North West Shelf, Western Australia',
    clientType: 'Major Offshore Operator',
    date: '2023–2024',
    image: '/assets/images/projects/offshore-electrification-bess.jpg',
    description: 'Concept development for electrified offshore platforms, FPUs, FPSOs, and Normal Unmanned Facility (NUF) architectures. Evaluated Medium Voltage GIS, electric compression, electric cranes, and Battery Energy Storage Systems (BESS) for spinning reserve and remote operability.',
    fullText: 'PowerMitt Consulting provides concept development expertise for offshore facilities, supporting the evaluation of fixed platforms, Floating Production Units (FPUs), Floating Production Storage and Offloading (FPSO) facilities, and next-generation electrified production concepts. Our experience includes the development and assessment of the Normal Unmanned Facility (NUF) concept, where increased electrification was utilised to improve operational efficiency, reduce emissions, and simplify long-term facility operations. Key technologies assessed and integrated into the concept included: Medium Voltage Gas Insulated Switchgear (MV GIS), Electrically driven compression systems, Electric-driven offshore cranes, Battery Energy Storage Systems (BESS), Advanced power management systems, UPS replacement and optimisation strategies, Generator spinning reserve support using BESS, Remote monitoring and digital operational architectures, and Condition monitoring and asset life improvement strategies. PowerMitt guided the electrical system architecture and concept-level engineering activities, ensuring technical feasibility while supporting future low-carbon operational strategies.',
    highlights: [
      'Normal Unmanned Facility (NUF) concept evaluation & low-emission design',
      'BESS integration for generator spinning reserve & fuel burn reduction',
      'Medium Voltage GIS, electric compression & electric-driven cranes',
      'Advanced power management & remote digital operational architectures'
    ],
    technologies: ['Offshore Electrification', 'BESS Spinning Reserve', 'Medium Voltage GIS', 'Normal Unmanned Facility (NUF)', 'Power Management (PMS)']
  },
  {
    id: 'mining-infrastructure-waio',
    title: 'Mining Infrastructure & WAIO Automation Projects',
    category: 'mining',
    categories: ['mining', 'industrial', 'power-systems'],
    industry: 'Iron Ore Mining & Heavy Infrastructure',
    location: 'Pilbara Iron Ore Operations, WA',
    clientType: 'Major Australian Mining Operator',
    date: '2023–2024',
    image: '/assets/images/projects/mining-infrastructure-iron-ore.jpg',
    description: 'Portfolio engineering and design management across high-voltage power systems, substations, process plant infrastructure, water treatment, robotic automation, and dust suppression adhering to WAIO and Australian standards.',
    fullText: 'Delivered engineering and project solutions across a broad portfolio of mining, energy, water, and industrial infrastructure projects. Experience includes high-voltage power systems, substations, electrical distribution networks, process plant infrastructure, water treatment facilities, Robot automation systems, dust suppression, fuel farm automation and decarbonisation initiatives. Work has encompassed feasibility studies, design management, technical assurance, brownfield modifications, asset renewals, commissioning support, and stakeholder engagement, with a focus on safe, practical, and reliable project outcomes. The projects were based at Iron Ore mine sites. The services included end to end design management, design reviews and technical support during tendering, installation and execution phases. Focus was towards providing Minimum Viable solutions without compromising on safety, quality, with designs adhering to appropriate WAIO and Australian standards.',
    highlights: [
      'End-to-end design management and technical assurance across iron ore sites',
      'Substations, HV distribution, process plant, water treatment & fuel farms',
      'Robot automation systems & dust suppression engineering solutions',
      'Minimum Viable solutions adhering to strict WAIO and Australian standards'
    ],
    technologies: ['HV Substations', 'WAIO Standards', 'Robotic Automation', 'Dust Suppression', 'Plant Infrastructure', 'Brownfield Upgrades']
  },
  {
    id: 'underground-mine-dewatering-nickel',
    title: 'Western Australian Nickel Operations – Underground Mine Dewatering',
    category: 'mining',
    categories: ['mining', 'industrial'],
    industry: 'Underground Nickel Mining',
    location: 'Goldfields, Western Australia',
    clientType: 'Major WA Nickel Operation',
    date: '2024',
    image: '/assets/images/projects/underground-mine-dewatering.jpg',
    description: 'Electrical engineering and control system design for underground mine dewatering at a major WA nickel operation. Covered key equipment selection, power distribution, automated pumping integration, and technical assurance delivered via a cost-effective collaborative model.',
    fullText: 'Delivered electrical engineering and control system design services for an underground mine dewatering project at a major Western Australian nickel operation. Services included participation in key equipment selection and technical evaluations, development of electrical power distribution and control system designs, design reviews and technical assurance throughout project delivery, and support for integration of pumping, monitoring, and automation systems. The project was delivered through a collaborative execution model combining PowerMitt\'s Australian engineering leadership and compliance expertise with specialist overseas engineering support, ensuring compliance with Australian Standards and client requirements while providing a cost-effective and efficient design solution.',
    highlights: [
      'Underground mining power distribution and high-pressure pumping design',
      'Key equipment selection, technical evaluations & automation integration',
      'Rigorous design management, reviews & Australian Standards assurance',
      'Cost-effective collaborative execution with Australian engineering leadership'
    ],
    technologies: ['Underground Mining', 'Dewatering Systems', 'Motor Control Centers', 'Automation & Telemetry', 'Australian Standards (AS/NZS)']
  }
];
