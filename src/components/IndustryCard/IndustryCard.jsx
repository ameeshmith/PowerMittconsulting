import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetPath';

const industryTagsMap = {
  'oil-gas': 'SECTOR // OFFSHORE',
  'mining-resources': 'SECTOR // MINING',
  'energy-utilities': 'SECTOR // UTILITIES',
  'industrial': 'SECTOR // INDUSTRIAL'
};

export default function IndustryCard({ id, title, description, slug, bgImage }) {
  const imageUrl = getAssetUrl(bgImage);
  const sectorTag = industryTagsMap[id] || `SECTOR // ${title?.toUpperCase() || 'SECTOR'}`;

  return (
    <Link 
      to={slug} 
      className="group bg-white border border-slate-200 hover:border-sky-500 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full"
    >
      {/* Image Container */}
      <div className="h-60 w-full relative overflow-hidden bg-slate-100">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
          loading="lazy"
        />
        
        {/* Image Header Strip */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="bg-slate-900/80 backdrop-blur-xs text-white font-mono text-[11px] font-semibold px-2.5 py-1 rounded border border-white/10">
            {sectorTag}
          </span>
          <span className="bg-white/90 backdrop-blur-xs text-slate-900 w-7 h-7 flex items-center justify-center rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors text-xs font-bold shadow-xs">
            ↗
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight font-heading">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-2 mb-5 font-body">
            {description}
          </p>
        </div>

        {/* Bottom Action Button */}
        <div className="pt-4 mt-auto border-t border-slate-100">
          <div className="w-full py-2.5 px-4 rounded-lg bg-slate-50 text-slate-800 group-hover:bg-sky-600 group-hover:text-white transition-all text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border border-slate-200 group-hover:border-sky-600 shadow-xs">
            <span>Explore Sector</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
