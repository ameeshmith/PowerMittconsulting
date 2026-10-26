import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import CTABanner from '../../components/CTABanner/CTABanner';
import { getAllArticles } from '../../services/sanity';
import { categories } from '../../data/articles';
import { getAssetUrl } from '../../utils/assetPath';
import { formatPublishedDate } from '../../utils/dateFormat';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Insights.css';

export default function Insights() {
  const [articlesList, setArticlesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useScrollReveal([articlesList.length]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAllArticles();
        setArticlesList(data);
      } catch (err) {
        console.error('Failed to load articles:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredArticles = useMemo(() => {
    return articlesList.filter(article => {
      return selectedCategory === 'All' || article.category === selectedCategory;
    });
  }, [articlesList, selectedCategory]);

  const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const standardArticles = filteredArticles.length > 1 ? filteredArticles.slice(1) : [];

  return (
    <main className="insights-page">
      <SEO
        title="Engineering Insights & Technical Articles | PowerMitt Consulting"
        description="Specialist engineering insights on electrical power systems, BESS grid integration, industrial electrification, and Owner's Engineering by Dinesh Mithanthaya."
        path="/insights"
      />

      <Hero
        variant="compact"
        label="Knowledge & Perspectives"
        title="Engineering Insights & Technical Perspectives"
        subtitle="Specialist perspectives, case studies, and engineering analysis across electrical power systems, energy transition, and heavy industrial infrastructure."
        bgImage="/assets/images/hero-nature-energy.jpg"
      />

      <section className="insights-hub">
        <div className="container">
          {/* Controls Bar: Category Filters (Shown when articles exist) */}
          {articlesList.length > 0 && (
            <div className="insights-controls reveal">
              <div className="insights-categories" role="tablist">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    className={`insights-category-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="insights-empty">
              <p>Loading technical insights...</p>
            </div>
          )}

          {/* Empty State: No articles published yet */}
          {!loading && articlesList.length === 0 && (
            <div className="insights-empty reveal">
              <BookOpen size={48} className="insights-empty__icon" />
              <h3>Technical Perspectives Coming Soon</h3>
              <p>Our engineering leadership is currently preparing in-depth technical analyses, case studies, and industry perspectives. Check back soon or connect directly with our advisory team.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/contact" className="btn btn--primary">
                  Start a Conversation <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}

          {/* Empty Filter State: Category has no matches */}
          {!loading && articlesList.length > 0 && filteredArticles.length === 0 && (
            <div className="insights-empty reveal">
              <BookOpen size={40} className="insights-empty__icon" />
              <h3>No articles found</h3>
              <p>No engineering insights match your selected category filter.</p>
              <button
                className="btn btn--outline"
                onClick={() => setSelectedCategory('All')}
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Featured Article Card */}
          {!loading && featuredArticle && (
            <div className="insights-featured reveal">
              <Link to={`/insights/${featuredArticle.slug}`} className="insights-featured__card">
                <div 
                  className="insights-featured__image"
                  style={{ backgroundImage: `url(${getAssetUrl(featuredArticle.coverImage || '/assets/images/renewable-bess-bg.jpg')})` }}
                >
                  <span className="insights-featured__badge">{featuredArticle.category}</span>
                </div>
                <div className="insights-featured__content">
                  <div className="insights-card__meta">
                    <span className="insights-card__meta-item">
                      <Calendar size={14} />
                      {formatPublishedDate(featuredArticle.publishedAt, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="insights-card__meta-item">
                      <Clock size={14} />
                      {featuredArticle.readTime || '5 min read'}
                    </span>
                  </div>
                  <h2 className="insights-featured__title">{featuredArticle.title}</h2>
                  <p className="insights-featured__excerpt">{featuredArticle.excerpt}</p>
                  
                  {featuredArticle.tags && (
                    <div className="insights-card__tags">
                      {featuredArticle.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="insights-tag">
                          <Tag size={10} /> {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="insights-featured__footer">
                    <span className="insights-card__author">
                      By {featuredArticle.author?.name || 'Dinesh Mithanthaya'}
                    </span>
                    <span className="insights-read-link">
                      Read Full Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Standard Articles Grid */}
          {!loading && standardArticles.length > 0 && (
            <div className="insights-grid">
              {standardArticles.map((art, index) => (
                <article
                  key={art.slug}
                  className={`insights-card reveal reveal--delay-${Math.min(index + 1, 4)}`}
                >
                  <Link to={`/insights/${art.slug}`} className="insights-card__link">
                    <div 
                      className="insights-card__image"
                      style={{ backgroundImage: `url(${getAssetUrl(art.coverImage || '/assets/images/power-systems-bg.jpg')})` }}
                    >
                      <span className="insights-card__category">{art.category}</span>
                    </div>
                    <div className="insights-card__body">
                      <div className="insights-card__meta">
                        <span className="insights-card__meta-item">
                          <Calendar size={13} />
                          {formatPublishedDate(art.publishedAt, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="insights-card__meta-item">
                          <Clock size={13} />
                          {art.readTime || '5 min read'}
                        </span>
                      </div>
                      <h3 className="insights-card__title">{art.title}</h3>
                      <p className="insights-card__excerpt">{art.excerpt}</p>
                      <div className="insights-card__footer">
                        <span className="insights-read-link">
                          Read Article <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Need Technical Guidance on Your Power Infrastructure?"
        subtitle="Discuss your power systems, BESS connection, or decarbonisation requirements directly with Principal Power Engineer Dinesh Mithanthaya."
      />
    </main>
  );
}
