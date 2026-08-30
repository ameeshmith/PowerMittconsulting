import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import CTABanner from '../../components/CTABanner/CTABanner';
import { getArticle } from '../../services/sanity';
import { getRelatedArticles } from '../../data/articles';
import { getAssetUrl } from '../../utils/assetPath';
import useScrollReveal from '../../hooks/useScrollReveal';
import './InsightDetail.css';

export default function InsightDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useScrollReveal();

  useEffect(() => {
    async function loadArticle() {
      setLoading(true);
      try {
        const data = await getArticle(slug);
        if (data) {
          setArticle(data);
        }
      } catch (err) {
        console.error('Error loading article:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <main className="insight-detail-loading">
        <div className="container text-center" style={{ padding: 'var(--space-32) 0' }}>
          <p>Loading engineering insight...</p>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="insight-detail-404">
        <div className="container text-center" style={{ padding: 'var(--space-32) 0' }}>
          <h2>Article Not Found</h2>
          <p>The technical insight you are looking for does not exist or has been moved.</p>
          <Link to="/insights" className="btn btn--primary" style={{ marginTop: 'var(--space-6)' }}>
            <ArrowLeft size={16} /> Return to All Insights
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = getRelatedArticles(article.slug, 2);

  return (
    <main className="insight-detail">
      <SEO
        title={`${article.title} | PowerMitt Insights`}
        description={article.excerpt || article.subtitle}
        path={`/insights/${article.slug}`}
      />

      {/* Header / Hero Section */}
      <header className="insight-header">
        <div className="container container--narrow">
          {/* Breadcrumb */}
          <nav className="insight-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="insight-breadcrumb-link">Home</Link>
            <span className="insight-breadcrumb-sep">/</span>
            <Link to="/insights" className="insight-breadcrumb-link">Insights</Link>
            <span className="insight-breadcrumb-sep">/</span>
            <span className="insight-breadcrumb-current">{article.category}</span>
          </nav>

          <span className="insight-category-badge">{article.category}</span>
          <h1 className="insight-title">{article.title}</h1>
          {article.subtitle && <p className="insight-subtitle">{article.subtitle}</p>}

          {/* Meta & Share bar */}
          <div className="insight-meta-bar">
            <div className="insight-meta-left">
              <span className="insight-meta-item">
                <Calendar size={14} />
                {new Date(article.publishedAt).toLocaleDateString('en-AU', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="insight-meta-item">
                <Clock size={14} />
                {article.readTime || '5 min read'}
              </span>
              <span className="insight-meta-item">
                By {article.author?.name || 'Dinesh Mithanthaya'}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="insight-share-btn"
              title="Copy article link"
              aria-label="Share article"
            >
              <Share2 size={15} />
              {copied ? 'Link Copied!' : 'Share'}
            </button>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      {article.coverImage && (
        <div className="container container--narrow">
          <div 
            className="insight-cover-image"
            style={{ backgroundImage: `url(${getAssetUrl(article.coverImage)})` }}
          />
        </div>
      )}

      {/* Article Body */}
      <article className="insight-body-section">
        <div className="container container--narrow">
          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="insight-takeaways reveal">
              <div className="insight-takeaways__header">
                <CheckCircle size={20} className="insight-takeaways__icon" />
                <h3>Executive Summary & Key Takeaways</h3>
              </div>
              <ul className="insight-takeaways__list">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx}>{takeaway}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Markdown / HTML Content Renderer */}
          <div className="insight-content reveal">
            {article.content ? (
              <div className="insight-prose">
                {article.content.split('\n\n').map((block, i) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;

                  if (trimmed.startsWith('## ')) {
                    return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
                  }
                  if (trimmed.startsWith('### ')) {
                    return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
                  }
                  if (trimmed.startsWith('---')) {
                    return <hr key={i} className="insight-divider" />;
                  }
                  if (trimmed.startsWith('- ')) {
                    const items = trimmed.split('\n').filter(l => l.startsWith('- '));
                    return (
                      <ul key={i} className="insight-list">
                        {items.map((it, itemIdx) => {
                          const text = it.replace('- ', '');
                          return <li key={itemIdx}>{text}</li>;
                        })}
                      </ul>
                    );
                  }
                  if (trimmed.match(/^\d+\.\s/)) {
                    const items = trimmed.split('\n').filter(l => l.match(/^\d+\.\s/));
                    return (
                      <ol key={i} className="insight-ordered-list">
                        {items.map((it, itemIdx) => (
                          <li key={itemIdx}>{it.replace(/^\d+\.\s/, '')}</li>
                        ))}
                      </ol>
                    );
                  }
                  return <p key={i}>{trimmed}</p>;
                })}
              </div>
            ) : (
              <p>{article.excerpt}</p>
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="insight-tags-bar reveal">
              <span className="insight-tags-label"><Tag size={14} /> Topic Tags:</span>
              <div className="insight-tags-list">
                {article.tags.map((t, idx) => (
                  <span key={idx} className="insight-tag-item">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Card */}
          <div className="insight-author-card reveal">
            <div className="insight-author-card__photo">
              <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
                <rect width="80" height="80" rx="40" fill="rgba(8,126,164,0.1)"/>
                <circle cx="40" cy="30" r="12" stroke="rgba(8,126,164,0.4)" strokeWidth="2.5"/>
                <path d="M20 65C20 53.954 28.954 45 40 45C51.046 45 60 53.954 60 65" stroke="rgba(8,126,164,0.4)" strokeWidth="2.5"/>
              </svg>
            </div>
            <div className="insight-author-card__info">
              <h4>{article.author?.name || 'Dinesh Mithanthaya'}</h4>
              <span className="insight-author-card__role">{article.author?.role || 'Principal Power Engineer'}</span>
              <p className="insight-author-card__bio">
                {article.author?.bio || 'Specialist power systems and energy engineering consultant with 20+ years delivering complex industrial, mining, and utility projects across Australia.'}
              </p>
              <div className="insight-author-card__links">
                <a href="mailto:dmithanthaya@gmail.com" className="insight-author-link">
                  <Mail size={14} /> dmithanthaya@gmail.com
                </a>
                <a href="tel:+61409346958" className="insight-author-link">
                  <Phone size={14} /> +61 409 346 958
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Insights Section */}
      {relatedArticles.length > 0 && (
        <section className="insight-related section--ice">
          <div className="container">
            <h3 className="insight-related__heading">Related Technical Insights</h3>
            <div className="insight-related__grid">
              {relatedArticles.map((rel) => (
                <Link key={rel.slug} to={`/insights/${rel.slug}`} className="insight-related__card">
                  <div 
                    className="insight-related__image"
                    style={{ backgroundImage: `url(${getAssetUrl(rel.coverImage)})` }}
                  />
                  <div className="insight-related__content">
                    <span className="insight-related__category">{rel.category}</span>
                    <h4>{rel.title}</h4>
                    <span className="insight-related__more">
                      Read Article <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <CTABanner
        title="Have Questions on This Technical Topic?"
        subtitle="Speak directly with Dinesh Mithanthaya to discuss how these principles apply to your project."
        buttonText="Contact PowerMitt"
        buttonLink="/contact"
      />
    </main>
  );
}
