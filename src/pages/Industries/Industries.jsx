import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import WordHighlight from '../../components/WordHighlight/WordHighlight';
import { industries } from '../../data/industries';
import './Industries.css';

export default function Industries() {
  return (
    <main>
      <SEO
        title="Industries We Serve | PowerMitt Consulting"
        description="Specialist electrical power system and energy engineering for oil & gas, mining & resources, energy & utilities, and industrial infrastructure sectors."
        path="/industries"
      />
      
      <Hero 
        variant="compact" 
        label="Critical Sectors" 
        title={
          <>
            ENGINEERING FOR DEMANDING <br />
            <span className="hero-modern__serif-accent">heavy sectors.</span>
          </>
        }
        subtitle="Specialist electrical power systems and energy engineering expertise tailored for the resources, energy transition, oil & gas, and heavy infrastructure sectors across Australia." 
        bgImage="/assets/images/industrial-bg.jpg"
      />

      <section className="industries-section">
        <div className="container">
          <SectionHeader
            label="CRITICAL SECTORS"
            title={
              <>
                TAILORED SOLUTIONS FOR <span className="serif-accent">heavy industry</span>
              </>
            }
            subtitle="Each sector presents unique power stability and grid compliance challenges. Our specialist expertise ensures dependable delivery."
          />

          <div className="industries-grid">
            {industries.map((ind) => (
              <IndustryCard
                key={ind.id}
                id={ind.id}
                title={ind.title}
                description={ind.shortDescription}
                slug={ind.slug}
                capabilities={ind.technologies}
                bgImage={ind.bgImage}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title={
          <>
            DE-RISK YOUR <br />
            <span className="serif-accent">sector infrastructure</span>
          </>
        }
        subtitle="Connect directly with our engineering team to review power system compliance, reliability, and decarbonisation strategies."
        buttonText="START A CONVERSATION"
        buttonLink="/contact"
      />
    </main>
  );
}
