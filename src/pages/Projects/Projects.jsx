import { useState } from 'react';
import { Cpu } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import { projectCategories, projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const placeholderCards = [
    { title: 'Power Systems Project', category: 'power-systems', description: 'Electrical power system engineering project experience to be added.' },
    { title: 'Mining Infrastructure Project', category: 'mining', description: 'Mining and resources electrical infrastructure project experience to be added.' },
    { title: 'Energy Project', category: 'energy', description: 'Renewable energy and grid integration project experience to be added.' },
    { title: 'BESS Project', category: 'bess', description: 'Battery energy storage system project experience to be added.' },
    { title: 'Industrial Project', category: 'industrial', description: 'Industrial infrastructure electrical engineering project experience to be added.' },
    { title: 'CCS Project', category: 'ccs', description: 'Carbon capture and storage electrical engineering project experience to be added.' }
  ];

  const filtered = activeFilter === 'all'
    ? placeholderCards
    : placeholderCards.filter(p => p.category === activeFilter);

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
        title="Engineering Project Portfolio"
        subtitle="Our project experience demonstrates specialist expertise across power systems, energy, mining, and industrial sectors."
      />

      <section>
        <div className="container">
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

          {projects.length > 0 ? (
            <div className="projects__grid">
              {projects.map((p, i) => (
                <ProjectCard key={i} {...p} />
              ))}
            </div>
          ) : (
            <>
              <div className="projects__grid">
                {filtered.map((p, i) => (
                  <ProjectCard key={i} placeholder title={p.title} description={p.description} />
                ))}
              </div>
              <div className="projects__coming-soon">
                <Cpu size={48} />
                <h3>Project Portfolio Coming Soon</h3>
                <p>
                  Detailed project case studies and experience documentation is currently being developed.
                  Our project portfolio will showcase engineering experience across power systems, mining,
                  energy, industrial, BESS, and CCS sectors.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <CTABanner
        title="Want to Discuss a Project?"
        subtitle="Talk to us about how our experience can support your project."
      />
    </main>
  );
}
