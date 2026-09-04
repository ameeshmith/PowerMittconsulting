import { Link } from 'react-router-dom';
import { Home, Search, Briefcase, BookOpen, Mail, Compass } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found__container">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__subtitle">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            <Home size={16} />
            Back to Home
          </Link>
          <Link to="/services" className="btn btn--outline">
            <Search size={16} />
            Explore Services
          </Link>
        </div>

        <div className="not-found__hub">
          <span className="not-found__hub-title">
            <Compass size={14} /> Quick Navigation
          </span>
          <div className="not-found__quick-links">
            <Link to="/projects" className="not-found__quick-link">
              <Briefcase size={14} /> Projects
            </Link>
            <Link to="/insights" className="not-found__quick-link">
              <BookOpen size={14} /> Insights
            </Link>
            <Link to="/about" className="not-found__quick-link">
              About Us
            </Link>
            <Link to="/contact" className="not-found__quick-link">
              <Mail size={14} /> Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
