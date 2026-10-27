import SEO from '../../components/SEO/SEO';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import { projects } from '../../data/projects';
import { getAssetUrl } from '../../utils/assetPath';
import './Projects.css';

export default function Projects() {
  return (
    <main className="projects-soe-page">
      <SEO
        title="Projects & Experience | PowerMitt Consulting"
        description="PowerMitt Consulting provides specialist electrical engineering and energy transition advisory services to major energy operators undertaking decarbonisation, reliability enhancement, and large scale infrastructure expansion projects."
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

            <h1 className="projects-soe-title">Demonstrated Track Record & Case Studies</h1>
            <p className="projects-soe-subtitle">
              PowerMitt Consulting provides specialist electrical engineering and energy transition advisory services to major energy operators undertaking decarbonisation, reliability enhancement, and large scale infrastructure expansion projects.            </p>
          </div>

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
