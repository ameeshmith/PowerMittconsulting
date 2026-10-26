import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceSpecs = {
  'power-systems': 'PRACTICE // REF: EPS-01',
  'energy-transition': 'PRACTICE // REF: RES-02',
  'carbon-capture': 'PRACTICE // REF: CCS-03',
  'industrial-infrastructure': 'PRACTICE // REF: IMP-04',
  'owners-engineering': 'PRACTICE // REF: EPC-05'
};

export default function ServiceCard({ id, number, title, description, slug }) {
  const serviceKey = id || slug?.split('/services/')[1] || 'power-systems';
  const specRef = serviceSpecs[serviceKey] || `PRACTICE // REF: ${number || '01'}`;

  return (
    <Link 
      to={slug} 
      className="group bg-white border border-slate-200 hover:border-sky-500 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full"
    >
      <div>
        {/* Top row */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {specRef}
          </span>
          <span className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm font-bold">
            ↗
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-950 transition-colors font-heading tracking-tight">
          {title}
        </h3>

        {/* Body Description */}
        <p className="text-sm text-slate-600 leading-relaxed mt-2 mb-5 font-body">
          {description}
        </p>
      </div>

      {/* Bottom Action Button */}
      <div className="pt-4 mt-auto border-t border-slate-100">
        <div className="w-full py-2.5 px-4 rounded-lg bg-slate-50 text-slate-800 group-hover:bg-sky-600 group-hover:text-white transition-all text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border border-slate-200 group-hover:border-sky-600 shadow-xs">
          <span>Explore Service</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
