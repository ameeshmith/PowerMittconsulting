import './PageLoader.css';

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page content" aria-busy="true">
      <div className="page-loader__spinner">
        <div className="page-loader__ring"></div>
        <div className="page-loader__core"></div>
      </div>
      <span className="page-loader__text">Loading...</span>
    </div>
  );
}
