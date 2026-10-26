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
        title="Engineering for Demanding Heavy Sectors"
        subtitle="Specialist electrical power systems and energy engineering expertise tailored for the resources, energy transition, oil & gas, and heavy infrastructure sectors across Australia." 
        bgImage="/assets/images/industrial-bg.jpg"
      />

      <section className="industries-section">
        <div className="container">
          <SectionHeader
            label="CRITICAL SECTORS"
            title="Tailored Solutions for Heavy Industry"
            subtitle="Each sector presents unique power stability and grid compliance challenges. Our specialist expertise ensures dependable delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind) => (
              <IndustryCard
                key={ind.id}
                id={ind.id}
                title={ind.title}
                description={ind.shortDescription}
                slug={ind.slug}
                bgImage={ind.bgImage}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="De-Risk Your Sector Infrastructure"
        subtitle="Connect directly with our engineering team to review power system compliance, reliability, and decarbonisation strategies."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </main>
  );
}
