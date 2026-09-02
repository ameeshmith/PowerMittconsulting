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
        label="Industries We Serve" 
        title={
          <>
            Engineering for demanding{' '}
            <WordHighlight color="blue" variant="oval">
              industrial
            </WordHighlight>{' '}
            sectors.
          </>
        }
        subtitle="Specialist electrical power systems and energy engineering expertise tailored for the resources, energy, oil & gas, and industrial infrastructure sectors." 
        bgImage="/assets/images/industrial-bg.jpg"
      />

      <section className="industries-section">
        <div className="container">
          <SectionHeader
            label="Sectors"
            title="Tailored Solutions for Australia's Heavy Industry"
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
        title="Working in a Complex Industrial Sector?" 
        subtitle="Talk to our power systems team about your technical requirements." 
        buttonText="Contact PowerMitt"
        buttonLink="/contact"
      />
    </main>
  );
}
