import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';
import './ServiceCard.css';

const serviceDataMap = {
  'power-systems': {
    num: '01',
    ref: 'REF: EPS-01',
    image: '/assets/images/power-systems-bg.jpg',
    desc: 'Specialist engineering across the full project lifecycle, from system studies to network design and reliability assessments.'
  },
  'energy-transition': {
    num: '02',
    ref: 'REF: RES-02',
    image: '/assets/images/renewable-bess-bg.jpg',
    desc: 'Practical engineering solutions for renewable integration, battery storage, hydrogen infrastructure and net-zero pathways.'
  },
  'carbon-capture': {
    num: '03',
    ref: 'REF: CCS-03',
    image: '/assets/images/carbon-capture-bg.jpg',
    desc: 'Engineering support for CCS electrical infrastructure, including compressor drives, grid connections and equipment selection.'
  },
  'industrial-infrastructure': {
    num: '04',
    ref: 'REF: IMP-04',
    image: '/assets/images/industrial-bg.jpg',
    desc: 'Electrical infrastructure engineering for mining operations, processing plants, and heavy industrial facilities.'
  },
  'owners-engineering': {
    num: '05',
    ref: 'REF: EPC-05',
    image: '/assets/images/owners-engineering-bg.jpg',
    desc: "Independent Owner's Engineer and EPC support to deliver safe, efficient and cost-effective infrastructure."
  }
};

export default function ServiceCard({ id, number, title, description, slug }) {
  const serviceKey = id || slug?.split('/services/')[1] || 'power-systems';
  const meta = serviceDataMap[serviceKey] || {
    num: number || '01',
    ref: `REF: ${number || '01'}`,
    image: '/assets/images/power-systems-bg.jpg',
    desc: description
  };

  return (
    <Link to={slug} className="service-card-editorial group">
      <div className="service-card-editorial__content">
        {/* Header: 01 // REF: EPS-01 and ↗ icon */}
        <div className="service-card-editorial__header">
          <div className="service-card-editorial__meta">
            <span className="service-card-editorial__num">{meta.num}</span>
            <span className="service-card-editorial__sep">//</span>
            <span className="service-card-editorial__ref">{meta.ref}</span>
          </div>
          <div className="service-card-editorial__corner-btn" aria-hidden="true">
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Title */}
        <h3 className="service-card-editorial__title">
          {title}
        </h3>

        {/* Description */}
        <p className="service-card-editorial__desc">
          {meta.desc}
        </p>

        {/* Bottom Link */}
        <div className="service-card-editorial__footer">
          <span className="service-card-editorial__link">
            <span>Explore Service</span>
            <ArrowRight size={14} className="service-card-editorial__arrow" />
          </span>
        </div>
      </div>

      {/* Right Image with Curved Inset & Cyan Glow */}
      <div className="service-card-editorial__media-wrap">
        <img 
          src={getAssetUrl(meta.image)} 
          alt={title}
          className="service-card-editorial__image"
          loading="lazy"
        />
        <div className="service-card-editorial__media-glow" aria-hidden="true" />
      </div>
    </Link>
  );
}
