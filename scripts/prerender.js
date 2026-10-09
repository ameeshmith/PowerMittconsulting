import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Canonical site URL (can be customized via environment or fallback)
const SITE_URL = process.env.VITE_SITE_URL || 'https://ameeshmith.github.io/PowerMittconsulting';
const BASE_PATH = '/PowerMittconsulting';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/og-preview.jpg`;

const ORG_SCHEMA = {
  '@type': 'ProfessionalService',
  'name': 'PowerMitt Consulting Pty Ltd',
  'alternateName': 'PowerMitt Consulting',
  'url': SITE_URL,
  'logo': `${SITE_URL}/assets/images/og-preview.jpg`,
  'image': `${SITE_URL}/assets/images/og-preview.jpg`,
  'description': 'Specialist electrical power systems and energy engineering consultancy based in Perth, Western Australia.',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Perth',
    'addressRegion': 'WA',
    'addressCountry': 'AU'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -31.9505,
    'longitude': 115.8605
  },
  'telephone': '+61409346958',
  'email': 'dmithanthaya@gmail.com',
  'founder': {
    '@type': 'Person',
    'name': 'Dinesh Mithanthaya',
    'jobTitle': 'Principal Power Engineer'
  },
  'areaServed': [
    'Western Australia',
    'Perth',
    'Pilbara',
    'Australia'
  ],
  'priceRange': '$$$'
};

// Route registry with metadata and semantic crawler content
const routes = [
  {
    path: '/',
    title: 'PowerMitt Consulting | Electrical Power Systems & Energy Engineering',
    description: 'Specialist electrical power systems and energy engineering consultancy supporting complex industrial, resources and energy projects across Australia.',
    image: `${SITE_URL}/assets/images/og-preview.jpg`,
    type: 'website',
    heading: 'Engineering Rigour for Complex Power Challenges',
    content: 'Specialist electrical power systems, grid compliance (NEM/WEM), and energy transition engineering for heavy industry, mining, and utility grids across Australia. Led by Principal Power Engineer Dinesh Mithanthaya.'
  },
  {
    path: '/about',
    title: 'About Us | PowerMitt Consulting',
    description: 'PowerMitt Consulting is an Australian engineering consultancy based in Perth, Western Australia, providing specialist electrical power systems and energy engineering expertise.',
    image: `${SITE_URL}/assets/images/og-preview.jpg`,
    type: 'website',
    heading: 'Engineering Rigour for Complex Power Challenges',
    content: 'Founded by Dinesh Mithanthaya (Principal Power Engineer, 20+ years specialist experience), PowerMitt delivers independent technical leadership, due diligence, and high-voltage power engineering.'
  },
  {
    path: '/services',
    title: 'Engineering Services | PowerMitt Consulting',
    description: 'Specialist electrical power system engineering, energy transition, CCS, industrial infrastructure, and owner\'s engineering services for complex industrial projects.',
    image: `${SITE_URL}/assets/images/og-preview.jpg`,
    type: 'website',
    heading: 'Specialist Engineering Capabilities',
    content: 'Comprehensive capabilities portfolio spanning Electrical Power Systems, Renewable Energy & Decarbonisation, Carbon Capture & Storage (CCS), Industrial & Mining Infrastructure, and Owner\'s Engineering.'
  },
  {
    path: '/services/power-systems',
    title: 'Electrical Power Systems Engineering | PowerMitt Consulting',
    description: 'Specialist power system engineering including load flow, short circuit, protection coordination, arc flash analysis, HV/LV design, substations, and grid integration.',
    image: `${SITE_URL}/assets/images/power-systems-bg.jpg`,
    type: 'website',
    heading: 'Electrical Power Systems Engineering',
    content: 'Power system studies (load flow, short circuit, protection coordination, arc flash, harmonics), HV/LV distribution, substation engineering, and grid integration compliance (AEMO / WEM).'
  },
  {
    path: '/services/energy-transition',
    title: 'Renewable Energy & Decarbonisation | PowerMitt Consulting',
    description: 'Engineering solutions for renewable integration, BESS, hydrogen, electrification, and industrial decarbonisation within real power-system constraints.',
    image: `${SITE_URL}/assets/images/renewable-bess-bg.jpg`,
    type: 'website',
    heading: 'Renewable Energy & Decarbonisation',
    content: 'Specialist engineering for renewable integration, utility battery energy storage systems (BESS), microgrids, hydrogen infrastructure, and industrial decarbonisation.'
  },
  {
    path: '/services/carbon-capture',
    title: 'Carbon Capture & Storage Engineering | PowerMitt Consulting',
    description: 'Electrical engineering expertise for CCS projects including compressor drive systems, grid connection, equipment selection, and detailed design.',
    image: `${SITE_URL}/assets/images/carbon-capture-bg.jpg`,
    type: 'website',
    heading: 'Carbon Capture & Storage Engineering',
    content: 'High-voltage electric drive systems (10 MW to 45 MW), multi-level medium-voltage VSD topologies, hazardous area substation design, and utility grid interconnection for commercial CCUS facilities.'
  },
  {
    path: '/services/industrial-infrastructure',
    title: 'Industrial & Mining Infrastructure Engineering | PowerMitt Consulting',
    description: 'HV/LV distribution, substations, MCCs, SCADA, mining electrical systems, underground mining, and infrastructure upgrades for industrial and mining operations.',
    image: `${SITE_URL}/assets/images/industrial-bg.jpg`,
    type: 'website',
    heading: 'Industrial & Mining Infrastructure',
    content: 'Electrical infrastructure engineering for mining, mineral processing, and heavy industrial facilities — underground mining distribution, trailing cable protection, MCCs, and substation modularization.'
  },
  {
    path: '/services/owners-engineering',
    title: 'Owner\'s Engineering | PowerMitt Consulting',
    description: 'Independent technical advisory, due diligence, design verification, vendor evaluation, risk assessment, and project execution support for asset owners.',
    image: `${SITE_URL}/assets/images/owners-engineering-bg.jpg`,
    type: 'website',
    heading: 'Owner\'s Engineering & Technical Advisory',
    content: 'Independent technical due diligence, vendor-neutral technology evaluation, EPC contractor oversight, brownfield interface verification, and commissioning validation.'
  },
  {
    path: '/industries',
    title: 'Industries We Serve | PowerMitt Consulting',
    description: 'Specialist electrical engineering across Oil & Gas, Mining & Resources, Energy & Utilities, and Heavy Industrial Infrastructure.',
    image: `${SITE_URL}/assets/images/og-preview.jpg`,
    type: 'website',
    heading: 'Industries We Serve',
    content: 'Tailored electrical engineering and technical advisory for Offshore Oil & Gas, Mining & Mineral Processing, Energy & Utilities, and Heavy Industrial Manufacturing across Australia.'
  },
  {
    path: '/industries/oil-gas',
    title: 'Oil & Gas Engineering | PowerMitt Consulting',
    description: 'Electrical engineering for offshore facilities, LNG plants, processing facilities, and brownfield modifications in complex and hazardous industrial environments.',
    image: `${SITE_URL}/assets/images/oil-rig-bg.jpg`,
    type: 'website',
    heading: 'Offshore Oil & Gas Engineering',
    content: 'Practical offshore electrical engineering across major developments, Normally Unattended Facilities (NUF), gas compression drives, and brownfield life extension in hazardous environments.'
  },
  {
    path: '/industries/mining-resources',
    title: 'Mining & Resources Engineering | PowerMitt Consulting',
    description: 'Power system engineering for surface and underground mining, mineral processing, remote infrastructure electrification, and mining electrical systems.',
    image: `${SITE_URL}/assets/images/mining-bg.jpg`,
    type: 'website',
    heading: 'Mining & Resources Engineering',
    content: 'Electrical power engineering for Pilbara iron ore, gold, and critical minerals: autonomous haul fleet electrification, remote hybrid microgrids, and underground high-voltage distribution.'
  },
  {
    path: '/industries/energy-utilities',
    title: 'Energy & Utilities Engineering | PowerMitt Consulting',
    description: 'Engineering for renewable generation, battery storage, grid connections, transmission, distribution, and utility infrastructure supporting the energy transition.',
    image: `${SITE_URL}/assets/images/renewable-bess-bg.jpg`,
    type: 'website',
    heading: 'Energy & Utilities Engineering',
    content: 'Grid connection studies, Generator Performance Standards (GPS / Chapter 5), system strength assessments, and transmission substation engineering for utility-scale solar and BESS.'
  },
  {
    path: '/industries/industrial',
    title: 'Industrial Infrastructure Engineering | PowerMitt Consulting',
    description: 'Electrical infrastructure engineering for manufacturing, water treatment, heavy industry, and critical infrastructure — delivering reliable, efficient power systems.',
    image: `${SITE_URL}/assets/images/industrial-bg.jpg`,
    type: 'website',
    heading: 'Industrial Infrastructure Engineering',
    content: 'Reliable, safe, and energy-efficient electrical systems for chemical processing plants, water treatment facilities, ports, and heavy manufacturing.'
  },
  {
    path: '/projects',
    title: 'Projects & Experience | PowerMitt Consulting',
    description: 'Engineering project experience across power systems, mining, energy, BESS, industrial, and CCS sectors.',
    image: `${SITE_URL}/assets/images/og-preview.jpg`,
    type: 'website',
    heading: 'Demonstrated Engineering Track Record',
    content: 'Proven track record of high-stakes electrical engineering delivery across Australian mining, LNG, renewable microgrids, and utility transmission systems.'
  },
  {
    path: '/insights',
    title: 'Engineering Insights & Technical Articles | PowerMitt Consulting',
    description: 'Specialist engineering insights on electrical power systems, BESS grid integration, industrial electrification, and Owner\'s Engineering by Dinesh Mithanthaya.',
    image: `${SITE_URL}/assets/images/og-preview.jpg`,
    type: 'website',
    heading: 'Engineering Insights & Technical Knowledge',
    content: 'In-depth engineering articles on utility BESS harmonic compliance, weak-grid stability, remote mine microgrids, and mega-compressor electrical topologies.'
  },
  {
    path: '/insights/bess-grid-compliance-harmonics',
    title: 'Grid Compliance & Power Quality Challenges in Large-Scale BESS Connections | PowerMitt Insights',
    description: 'Practical strategies for managing harmonic distortion, voltage stability, and NEM/WEM connection standards in utility battery storage.',
    image: `${SITE_URL}/assets/images/renewable-bess-bg.jpg`,
    type: 'article',
    heading: 'Grid Compliance & Power Quality Challenges in Large-Scale BESS Connections',
    content: 'Connecting multi-megawatt Battery Energy Storage Systems (BESS) to Australian transmission and distribution networks requires navigating rigorous Generator Performance Standards (GPS) and complex power quality constraints. Written by Dinesh Mithanthaya.'
  },
  {
    path: '/insights/owners-engineering-industrial-decarbonisation',
    title: 'The Critical Role of Owner\'s Engineering in Industrial Decarbonisation | PowerMitt Insights',
    description: 'How independent technical verification protects capital investment and ensures operational continuity in complex electrification projects.',
    image: `${SITE_URL}/assets/images/owners-engineering-bg.jpg`,
    type: 'article',
    heading: 'The Critical Role of Owner\'s Engineering in Industrial Decarbonisation',
    content: 'As heavy industry and mining operations transition from fossil fuels to electrified power systems, independent Owner\'s Engineering provides the technical due diligence necessary to derisk multi-million dollar investments. Written by Dinesh Mithanthaya.'
  },
  {
    path: '/insights/remote-mining-microgrids-electrification',
    title: 'Electrification of Remote Mining Infrastructure: Overcoming Network Constraints | PowerMitt Insights',
    description: 'Engineering high-penetration renewable microgrids and heavy electric haulage charging systems in isolated mining environments.',
    image: `${SITE_URL}/assets/images/mining-bg.jpg`,
    type: 'article',
    heading: 'Electrification of Remote Mining Infrastructure: Overcoming Network Constraints',
    content: 'Remote mine sites are transitioning from diesel generators to high-penetration hybrid microgrids. We examine the electrical power system architecture needed to support megawatt-scale haul truck charging and process plant reliability. Written by Dinesh Mithanthaya.'
  },
  {
    path: '/insights/carbon-capture-electrical-engineering',
    title: 'Carbon Capture & Storage: Electrical Engineering Considerations for Mega-Compressors | PowerMitt Insights',
    description: 'Key technical factors in high-voltage motor selection, VSD drive topologies, and substation design for commercial CCS facilities.',
    image: `${SITE_URL}/assets/images/carbon-capture-bg.jpg`,
    type: 'article',
    heading: 'Carbon Capture & Storage: Electrical Engineering Considerations for Mega-Compressors',
    content: 'Commercial-scale Carbon Capture and Storage (CCS) projects involve massive high-voltage motor drives operating in dense industrial facilities. Key technical factors in motor selection, VSD drive topologies, and substation design. Written by Dinesh Mithanthaya.'
  },
  {
    path: '/contact',
    title: 'Contact Us | PowerMitt Consulting',
    description: 'Get in touch with PowerMitt Consulting for specialist electrical power systems engineering, technical advisory, and project inquiries in Perth and across Australia.',
    image: `${SITE_URL}/assets/images/og-preview.jpg`,
    type: 'website',
    heading: 'Contact PowerMitt Consulting',
    content: 'Consult with Principal Power Engineer Dinesh Mithanthaya for specialist electrical studies, grid connections, and engineering due diligence. Located in Perth, Western Australia. Phone: +61 409 346 958 | Email: dmithanthaya@gmail.com'
  }
];

function generateHtml(template, route) {
  const fullUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const image = route.image.startsWith('http') ? route.image : `${SITE_URL}${route.image}`;

  // 1. Construct Structured Data
  let structuredData;
  if (route.type === 'article') {
    structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        ORG_SCHEMA,
        {
          '@type': 'TechArticle',
          'headline': route.title,
          'description': route.description,
          'image': image,
          'url': fullUrl,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': fullUrl
          },
          'author': {
            '@type': 'Person',
            'name': 'Dinesh Mithanthaya',
            'jobTitle': 'Principal Power Engineer'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'PowerMitt Consulting Pty Ltd',
            'logo': {
              '@type': 'ImageObject',
              'url': `${SITE_URL}/assets/images/og-preview.jpg`
            }
          }
        }
      ]
    };
  } else {
    structuredData = {
      '@context': 'https://schema.org',
      ...ORG_SCHEMA,
      'description': route.description
    };
  }

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`);

  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/s,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/s,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/s,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta property="og:type" content=".*?" \/>/s,
    `<meta property="og:type" content="${route.type}" />`
  );
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/s,
    `<meta property="og:image" content="${image}" />`
  );

  // Ensure og:url is present
  if (!html.includes('property="og:url"')) {
    html = html.replace(
      /<\/head>/,
      `    <meta property="og:url" content="${fullUrl}" />\n  </head>`
    );
  } else {
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/s,
      `<meta property="og:url" content="${fullUrl}" />`
    );
  }

  // Replace Twitter Tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/s,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/s,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/s,
    `<meta name="twitter:image" content="${image}" />`
  );

  // Inject Canonical link & JSON-LD schema into <head>
  const headAdditions = `
    <link rel="canonical" href="${canonicalUrl}" />
    <script id="powermitt-json-ld" type="application/ld+json">
      ${JSON.stringify(structuredData, null, 2)}
    </script>
  </head>`;
  html = html.replace(/<\/head>/, headAdditions);

  // Inject Crawler / Fallback HTML into <div id="root">
  // When JS runs, React replaces or hydrates this container.
  // When a crawler or bot reads raw HTML, it finds real content!
  const semanticFallback = `
    <div id="root">
      <noscript>
        <div style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: sans-serif; line-height: 1.6;">
          <h1>${escapeHtml(route.heading)}</h1>
          <p>${escapeHtml(route.content)}</p>
          <hr />
          <nav>
            <a href="${BASE_PATH}/">Home</a> | 
            <a href="${BASE_PATH}/about">About</a> | 
            <a href="${BASE_PATH}/services">Services</a> | 
            <a href="${BASE_PATH}/industries">Industries</a> | 
            <a href="${BASE_PATH}/projects">Projects</a> | 
            <a href="${BASE_PATH}/insights">Insights</a> | 
            <a href="${BASE_PATH}/contact">Contact</a>
          </nav>
        </div>
      </noscript>
    </div>`;
  html = html.replace(/<div id="root"><\/div>/, semanticFallback);

  return html;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function runPrerender() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('[Prerender] Error: dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  console.log(`[Prerender] Starting static prerendering for ${routes.length} routes...`);

  let count = 0;
  for (const route of routes) {
    const renderedHtml = generateHtml(template, route);

    let targetDir;
    if (route.path === '/') {
      targetDir = DIST_DIR;
    } else {
      // Remove leading slash
      const cleanPath = route.path.replace(/^\//, '');
      targetDir = path.join(DIST_DIR, cleanPath);
    }

    fs.mkdirSync(targetDir, { recursive: true });
    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, renderedHtml, 'utf8');
    count++;
    console.log(`  ✓ Prerendered [${route.path}] -> ${path.relative(DIST_DIR, targetFile)}`);
  }

  console.log(`[Prerender] Successfully generated ${count} static HTML routes in dist/!`);
}

runPrerender();
