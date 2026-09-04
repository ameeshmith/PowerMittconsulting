import { useState } from 'react';
import { Cpu } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import WordHighlight from '../../components/WordHighlight/WordHighlight';
import { projectCategories } from '../../data/projects';
import './Projects.css';

const figmaProjectSamples = [
  {
    title: 'CCS Compression Plant Grid Interface',
    category: 'ccs',
    categories: ['ccs', 'energy'],
    industry: 'Carbon Capture & Storage',
    location: 'Pilbara, Western Australia',
    description: 'High-voltage power system studies, harmonic filter design and dynamic compressor motor starting analysis for major carbon capture facility.',
    technologies: ['ETAP', 'Harmonic Filters', 'HV Switchgear', 'Motor Starting'],
    schematicType: 'ccs',
    date: '2024–2025'
  },
  {
    title: 'Project IG3 — 132kV Substation & Grid Interconnect',
    category: 'power-systems',
    categories: ['power-systems', 'energy'],
    industry: 'Power Systems & Grid',
    location: 'South West Interconnected System (SWIS)',
    description: 'Detailed primary and secondary electrical design, protection coordination and connection compliance studies for 132kV transmission substation.',
    technologies: ['Protection Settings', 'Substation Design', 'PSCAD', 'Grid Code'],
    schematicType: 'substation',
    date: '2024'
  },
  {
    title: 'Mining Hybrid Microgrid & 50MW BESS Integration',
    category: 'bess',
    categories: ['mining', 'bess', 'energy'],
    industry: 'Mining & Resources',
    location: 'Goldfields, Western Australia',
    description: 'Electrification and microgrid stability modeling for remote mine site integrating 50MW battery storage with gas turbine generation.',
    technologies: ['BESS', 'Microgrid Controller', 'Electrification', 'Dynamic Stability'],
    schematicType: 'bess',
    date: '2023–2024'
  },
  {
    title: 'Heavy Industrial Gas Processing Facility Electrification',
    category: 'industrial',
    categories: ['industrial', 'energy'],
    industry: 'Industrial Infrastructure',
    location: 'Kwinana Industrial Area, WA',
    description: "Owner's engineering advisory, brownfield electrical switchroom upgrade and FEED verification for critical processing facility.",
    technologies: ["Owner's Engineer", 'FEED Verification', 'Brownfield Arc Flash', 'SCADA'],
    schematicType: 'industrial',
    date: '2023'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const displayProjects = figmaProjectSamples.filter(p => {
    if (activeFilter === 'all') return true;
    if (p.category === activeFilter) return true;
    if (Array.isArray(p.categories) && p.categories.includes(activeFilter)) return true;
    if (activeFilter === 'mining' && p.industry?.toLowerCase().includes('mining')) return true;
    if (activeFilter === 'energy' && (p.category === 'bess' || p.category === 'ccs' || p.industry?.toLowerCase().includes('energy') || p.categories?.includes('energy'))) return true;
    return false;
  });

  return (
    <main>
      <SEO
        title="Projects & Experience | PowerMitt Consulting"
        description="Engineering project experience across power systems, mining, energy, BESS, industrial, and CCS sectors."
        path="/projects"
      />
      <Hero
        variant="compact"
        label="Projects & Experience"
        title={
          <>
            Engineering{' '}
            <WordHighlight color="blue" variant="oval">
              track record
            </WordHighlight>{' '}
            & case studies.
          </>
        }
        subtitle="Specialist expertise delivered across power systems, energy transition, resources, and heavy industrial facilities."
        bgImage="/assets/images/hero-about.jpg"
      />

      <section className="projects-section">
        <div className="container">
          <SectionHeader
            label="Portfolio"
            title="Demonstrated Engineering Track Record"
            subtitle="Selected case studies and project experience across critical Australian infrastructure."
          />

          {/* Filter Pills */}
          <div className="projects__filters">
            {projectCategories.map(cat => (
              <button
                key={cat.id}
                className={`projects__filter ${activeFilter === cat.id ? 'projects__filter--active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 2x2 Grid */}
          <div className="projects__grid">
            {displayProjects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>

          {displayProjects.length === 0 && (
            <div className="projects__coming-soon">
              <Cpu size={40} className="projects__coming-icon" />
              <h3>Projects in this category coming soon</h3>
              <p>
                Our engineering team is actively documenting ongoing projects in this sector. Contact us directly for confidential project references.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Similar Project Requirement?"
        subtitle="Talk to our engineers about tailoring a high-integrity power solution for your facility."
        buttonText="Contact PowerMitt"
        buttonLink="/contact"
      />
    </main>
  );
}
