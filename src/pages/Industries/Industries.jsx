import { Link } from 'react-router-dom';
import { Flame, HardHat, Zap, Factory, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import { industries } from '../../data/industries';
import './Industries.css';

const icons = {
  'oil-gas': <Flame size={64} />,
  'mining-resources': <HardHat size={64} />,
  'energy-utilities': <Zap size={64} />,
  'industrial': <Factory size={64} />
};

export default function Industries() {
  return (
    <main>
      <SEO
        title="Industries We Serve | PowerMitt Consulting"
        description="Specialist electrical power system and energy engineering for oil & gas, mining & resources, energy & utilities, and industrial infrastructure sectors."
        path="/industries"
      />
      <Hero variant="compact" label="Industries" title="Engineering for Australia's Most Demanding Industrial Sectors" subtitle="Specialist electrical power system and energy engineering expertise for the resources, energy, oil and gas, and industrial infrastructure sectors." />

      <section>
        <div className="container">
          <div className="industries-intro">
            <p>PowerMitt provides engineering services to clients across four major industrial sectors. Each sector presents unique power system challenges, and our specialist expertise ensures we deliver solutions tailored to the specific requirements of each industry.</p>
          </div>
          <div className="industries-grid">
            {industries.map((ind) => (
              <IndustryCard
                key={ind.id}
                title={ind.title}
                description={ind.shortDescription}
                slug={ind.slug}
                capabilities={ind.technologies}
                icon={icons[ind.id]}
                bgImage={ind.bgImage}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Working in a Complex Industrial Sector?" subtitle="Talk to us about your engineering requirements." />
    </main>
  );
}
