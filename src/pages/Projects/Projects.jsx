import SEO from '../../components/SEO/SEO';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import { projects, strategicAdvisoryOverview } from '../../data/projects';
import { getAssetUrl } from '../../utils/assetPath';
import './Projects.css';

export default function Projects() {
  return (
    <main className="projects-soe-page">
      <SEO
        title="Projects & Experience | PowerMitt Consulting"
        description="Specialist electrical engineering & energy transition advisory across green power import, CCS, dynamic power system modelling, offshore electrification, mining infrastructure, and dewatering."
        path="/projects"
        image="/assets/images/hero-projects-drawing.jpg"
      />

      <section className="projects-soe-section" id="projects-portfolio" aria-label="Projects and Track Record">
        {/* Slightly visible engineering blueprint background behind cards */}
        <div 
          className="projects-soe-bg"
          style={{
            backgroundImage: `url(${getAssetUrl('/assets/images/hero-projects-drawing.jpg')})`
          }}
          aria-hidden="true"
        />
        <div className="projects-soe-bg-overlay" aria-hidden="true" />

        <div className="container relative z-10">
          <div className="projects-soe-header">
            <span className="projects-soe-label">TRACK RECORD & CASE STUDIES</span>
            <h1 className="projects-soe-title">DEMONSTRATED TRACK RECORD & CASE STUDIES</h1>
            <p className="projects-soe-subtitle">
              Specialist electrical engineering delivered across critical Australian power systems, mining operations, and utility grid connections.
            </p>
          </div>

          {/* Strategic Advisory Overview Callout */}
          {strategicAdvisoryOverview && (
            <div className="projects-soe-advisory">
              <div className="projects-soe-advisory__badge">
                <span className="projects-soe-advisory__dot" />
                <span>Specialist Advisory Capability</span>
              </div>
              <h2 className="projects-soe-advisory__title">
                {strategicAdvisoryOverview.title}
              </h2>
              <p className="projects-soe-advisory__lead">
                {strategicAdvisoryOverview.lead}
              </p>
              <p className="projects-soe-advisory__body">
                {strategicAdvisoryOverview.body}
              </p>
            </div>
          )}

          {/* Projects Grid directly in front of background */}
          <div className="projects-soe-grid" role="list">
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
