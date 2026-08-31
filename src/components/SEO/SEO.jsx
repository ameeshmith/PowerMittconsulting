import { useEffect } from 'react';

const SITE_URL = 'https://ameeshmith.github.io/PowerMittconsulting';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/hero-nature-energy.jpg`;

export default function SEO({ 
  title = 'PowerMitt Consulting | Electrical Power Systems & Energy Engineering',
  description = 'Specialist electrical power systems and energy engineering consultancy based in Perth, Western Australia. Supporting complex industrial, resources, and energy projects.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website'
}) {
  useEffect(() => {
    // 1. Set Title
    document.title = title;

    const fullUrl = `${SITE_URL}${path === '/' ? '' : path}`;

    // Helper to create or update meta tags
    const setMeta = (attrName, attrValue, content) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set link tags (e.g. canonical)
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setLink('canonical', fullUrl);

    // 3. Open Graph / Facebook / LinkedIn
    setMeta('property', 'og:site_name', 'PowerMitt Consulting');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:locale', 'en_AU');

    // 4. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // 5. JSON-LD Structured Data for Professional Service / Organization
    const schemaId = 'powermitt-json-ld';
    let scriptEl = document.getElementById(schemaId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = schemaId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'PowerMitt Consulting Pty Ltd',
      'alternateName': 'PowerMitt Consulting',
      'url': SITE_URL,
      'logo': `${SITE_URL}/assets/images/hero-nature-energy.jpg`,
      'image': image,
      'description': description,
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

    scriptEl.textContent = JSON.stringify(structuredData);

  }, [title, description, path, image, type]);

  return null;
}
