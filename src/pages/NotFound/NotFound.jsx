import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
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
      </div>
    </main>
  );
}
