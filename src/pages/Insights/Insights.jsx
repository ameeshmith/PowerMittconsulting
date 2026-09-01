import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import CTABanner from '../../components/CTABanner/CTABanner';
import { getAllArticles } from '../../services/sanity';
import { categories } from '../../data/articles';
import { getAssetUrl } from '../../utils/assetPath';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Insights.css';

export default function Insights() {
  const [articlesList, setArticlesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
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
    const queryLower = searchQuery.toLowerCase();
    return articlesList.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        (article.title?.toLowerCase().includes(queryLower) ?? false) ||
        (article.excerpt?.toLowerCase().includes(queryLower) ?? false) ||
        (Array.isArray(article.tags) && article.tags.some(t => t?.toLowerCase().includes(queryLower)));
      return matchesCategory && matchesSearch;
    });
  }, [articlesList, selectedCategory, searchQuery]);

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
        label="Knowledge & Analysis"
        title="Engineering Insights & Technical Articles"
        subtitle="Specialist perspectives, case studies, and engineering analysis across electrical power systems, energy transition, and heavy industrial infrastructure."
        bgImage="/assets/images/hero-nature-energy.jpg"
      />

      <section className="insights-hub">
        <div className="container">
          {/* Controls Bar: Search & Category Filters */}
          <div className="insights-controls reveal">
            <div className="insights-search">
              <Search size={18} className="insights-search__icon" />
              <input
                type="text"
                placeholder="Search topics, keywords (e.g. BESS, Harmonics, Due Diligence)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="insights-search__input"
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  className="insights-search__clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

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

          {/* Loading State */}
          {loading && (
            <div className="insights-empty">
              <p>Loading technical insights...</p>
            </div>
          )}

          {/* No Results State */}
          {!loading && filteredArticles.length === 0 && (
            <div className="insights-empty reveal">
              <BookOpen size={40} className="insights-empty__icon" />
              <h3>No articles found</h3>
              <p>No engineering insights match your current search or category filter.</p>
              <button
                className="btn btn--outline"
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              >
                Reset Filters
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
                      {new Date(featuredArticle.publishedAt).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}
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
                          {new Date(art.publishedAt).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}
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
