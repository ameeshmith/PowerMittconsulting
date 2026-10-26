import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import { projects, strategicAdvisoryOverview } from '../../data/projects';
import './Projects.css';

export default function Projects() {

  return (
    <main>
      <SEO
        title="Projects & Experience | PowerMitt Consulting"
        description="Specialist electrical engineering & energy transition advisory across green power import, CCS, dynamic power system modelling, offshore electrification, mining infrastructure, and dewatering."
        path="/projects"
      />
      <Hero
        variant="compact"
        label="Track Record & Case Studies"
        title="Demonstrated Track Record & Case Studies"
        subtitle="Specialist electrical engineering delivered across critical Australian power systems, mining operations, and utility grid connections."
        bgImage="/assets/images/hero-projects-drawing.jpg"
      />

      <section className="projects-section">
        <div className="container">
          <SectionHeader
            label="PROJECT PORTFOLIO"
            title="Featured Case Studies & Deliveries"
            subtitle="Selected case studies and verified project experience across critical Australian power infrastructure."
          />

          {/* Strategic Advisory Overview Callout */}
          {strategicAdvisoryOverview && (
            <div className="projects-advisory-callout">
              <div className="projects-advisory-callout__badge">
                <span className="projects-advisory-callout__dot"></span>
                <span>Specialist Advisory Capability</span>
              </div>
              <h2 className="projects-advisory-callout__title">
                {strategicAdvisoryOverview.title}
              </h2>
              <p className="projects-advisory-callout__lead">
                {strategicAdvisoryOverview.lead}
              </p>
              <p className="projects-advisory-callout__body">
                {strategicAdvisoryOverview.body}
              </p>
            </div>
          )}

          {/* Projects Grid */}
          <div className="projects__grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Similar Project Requirement?"
        subtitle="Connect directly with our engineering team about tailoring a high-integrity power solution for your facility."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </main>
  );
}
