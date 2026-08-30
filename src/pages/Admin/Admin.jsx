import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit3, Trash2, CheckCircle, Lock, ArrowLeft, RefreshCw, Eye, Tag, Calendar, Clock } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import { getAllArticles, saveArticle, deleteArticle } from '../../services/sanity';
import { categories } from '../../data/articles';
import { getAssetUrl } from '../../utils/assetPath';
import './Admin.css';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState('');

  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [editingSlug, setEditingSlug] = useState(null);
  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    category: 'Power Systems',
    readTime: '5 min read',
    coverImage: '/assets/images/renewable-bess-bg.jpg',
    excerpt: '',
    tags: '',
    takeaway1: '',
    takeaway2: '',
    takeaway3: '',
    content: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Check if passcode previously entered
    const storedAuth = sessionStorage.getItem('powermitt_admin_authed');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  async function loadData() {
    setLoading(true);
    try {
      const data = await getAllArticles();
      setArticlesList(data);
    } catch (err) {
      console.error('Failed to load articles:', err);
    } finally {
      setLoading(false);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() === 'powermitt2026' || passcode.trim() === 'admin' || passcode.trim() === 'dinesh') {
      setIsAuthenticated(true);
      sessionStorage.setItem('powermitt_admin_authed', 'true');
      setPassError('');
    } else {
      setPassError('Incorrect passcode. Please try again.');
    }
  };

  const handleCreateNew = () => {
    setForm({
      title: '',
      subtitle: '',
      category: 'Power Systems',
      readTime: '5 min read',
      coverImage: '/assets/images/renewable-bess-bg.jpg',
      excerpt: '',
      tags: 'Power Systems, Infrastructure, Electrification',
      takeaway1: '',
      takeaway2: '',
      takeaway3: '',
      content: '## Introduction\n\nWrite your technical introduction here...\n\n---\n\n## Key Analysis\n\nDetail your engineering findings, standards, and recommendations...\n\n- Point 1\n- Point 2'
    });
    setEditingSlug(null);
    setIsEditing(true);
    window.scrollTo(0, 300);
  };

  const handleEdit = (art) => {
    setForm({
      title: art.title || '',
      subtitle: art.subtitle || '',
      category: art.category || 'Power Systems',
      readTime: art.readTime || '5 min read',
      coverImage: art.coverImage || '/assets/images/power-systems-bg.jpg',
      excerpt: art.excerpt || '',
      tags: art.tags ? art.tags.join(', ') : '',
      takeaway1: art.keyTakeaways?.[0] || '',
      takeaway2: art.keyTakeaways?.[1] || '',
      takeaway3: art.keyTakeaways?.[2] || '',
      content: art.content || art.excerpt || ''
    });
    setEditingSlug(art.slug);
    setIsEditing(true);
    window.scrollTo(0, 300);
  };

  const handleDelete = (art) => {
    if (window.confirm(`Are you sure you want to delete "${art.title}"?`)) {
      deleteArticle(art.slug);
      setSuccessMessage(`Article "${art.title}" was deleted.`);
      loadData();
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert('Please enter an Article Title.');
      return;
    }

    const slug = editingSlug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tagsArray = form.tags.split(',').map(t => t.trim()).filter(Boolean);
    const takeaways = [form.takeaway1, form.takeaway2, form.takeaway3].filter(Boolean);

    const articleData = {
      id: slug,
      slug: slug,
      title: form.title,
      subtitle: form.subtitle,
      category: form.category,
      readTime: form.readTime,
      coverImage: form.coverImage,
      excerpt: form.excerpt || form.subtitle,
      tags: tagsArray.length > 0 ? tagsArray : [form.category],
      keyTakeaways: takeaways,
      content: form.content
    };

    saveArticle(articleData);
    setIsEditing(false);
    setSuccessMessage(`Article "${form.title}" successfully published!`);
    loadData();
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <main className="admin-page">
      <SEO
        title="Author Portal & Article Manager | PowerMitt Consulting"
        description="Private publishing portal for Dinesh Mithanthaya to write, edit, and delete technical articles."
        path="/admin"
      />

      <Hero
        variant="compact"
        label="Author Portal"
        title="Article Management Dashboard"
        subtitle="Write, edit, and publish technical insights for PowerMitt Consulting."
      />

      <section className="admin-section">
        <div className="container">
          {/* LOGIN SCREEN */}
          {!isAuthenticated ? (
            <div className="admin-card admin-login-card">
              <div className="admin-card__icon">
                <Lock size={32} />
              </div>
              <h2>Dinesh Mithanthaya — Author Login</h2>
              <p>Enter the author passcode to unlock the article editor.</p>

              <form onSubmit={handleLogin} className="admin-login-form">
                <input
                  type="password"
                  placeholder="Enter passcode (e.g. powermitt2026)"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="admin-input"
                  autoFocus
                />
                {passError && <span className="admin-error">{passError}</span>}
                <button type="submit" className="btn btn--primary btn--large" style={{ width: '100%' }}>
                  Unlock Dashboard <Lock size={16} />
                </button>
              </form>
            </div>
          ) : (
            /* AUTHENTICATED MANAGER INTERFACE */
            <div className="admin-dashboard">
              {/* Header Bar */}
              <div className="admin-topbar">
                <div>
                  <h2>Published Insights ({articlesList.length})</h2>
                  <p>All live articles on PowerMitt Consulting website.</p>
                </div>
                <div className="admin-topbar-actions">
                  {!isEditing && (
                    <button onClick={handleCreateNew} className="btn btn--primary">
                      <Plus size={18} /> Write New Article
                    </button>
                  )}
                  <button onClick={() => setIsAuthenticated(false)} className="btn btn--outline" style={{ fontSize: 'var(--text-xs)' }}>
                    Lock Portal
                  </button>
                </div>
              </div>

              {/* Notification Banner */}
              {successMessage && (
                <div className="admin-alert admin-alert--success">
                  <CheckCircle size={20} />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* FORM: CREATE / EDIT ARTICLE */}
              {isEditing && (
                <div className="admin-card admin-form-card">
                  <div className="admin-form-header">
                    <h3>{editingSlug ? '✏️ Edit Article' : '➕ Write New Article'}</h3>
                    <button onClick={() => setIsEditing(false)} className="btn btn--outline" style={{ fontSize: 'var(--text-xs)' }}>
                      Cancel
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="admin-editor-form">
                    <div className="admin-form-grid">
                      <div className="admin-field admin-field--full">
                        <label>Article Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. High-Voltage Substation Design in Pilbara Mining Operations"
                          value={form.title}
                          onChange={(e) => setForm({ ...form, title: e.target.value })}
                          className="admin-input"
                        />
                      </div>

                      <div className="admin-field admin-field--full">
                        <label>Subtitle / One-Line Summary</label>
                        <input
                          type="text"
                          placeholder="e.g. Key technical strategies for managing thermal stress and insulation integrity."
                          value={form.subtitle}
                          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                          className="admin-input"
                        />
                      </div>

                      <div className="admin-field">
                        <label>Category</label>
                        <select
                          value={form.category}
                          onChange={(e) => setForm({ ...form, category: e.target.value })}
                          className="admin-input"
                        >
                          {categories.filter(c => c !== 'All').map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div className="admin-field">
                        <label>Read Time Estimate</label>
                        <input
                          type="text"
                          placeholder="e.g. 5 min read"
                          value={form.readTime}
                          onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                          className="admin-input"
                        />
                      </div>

                      <div className="admin-field admin-field--full">
                        <label>Cover Image URL / Path</label>
                        <input
                          type="text"
                          placeholder="/assets/images/renewable-bess-bg.jpg"
                          value={form.coverImage}
                          onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                          className="admin-input"
                        />
                      </div>

                      <div className="admin-field admin-field--full">
                        <label>Short Excerpt (Card Preview)</label>
                        <textarea
                          rows="2"
                          placeholder="Short summary for the article preview card..."
                          value={form.excerpt}
                          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                          className="admin-input"
                        />
                      </div>

                      <div className="admin-field admin-field--full">
                        <label>Topic Tags (Comma separated)</label>
                        <input
                          type="text"
                          placeholder="BESS, Grid Connection, Harmonics, Power Quality"
                          value={form.tags}
                          onChange={(e) => setForm({ ...form, tags: e.target.value })}
                          className="admin-input"
                        />
                      </div>

                      {/* Executive Summary Takeaways */}
                      <div className="admin-field admin-field--full">
                        <label>Executive Summary / Key Takeaways (3 Bullet Points)</label>
                        <input
                          type="text"
                          placeholder="Takeaway 1: Inverter-based resources require EMT modeling..."
                          value={form.takeaway1}
                          onChange={(e) => setForm({ ...form, takeaway1: e.target.value })}
                          className="admin-input"
                          style={{ marginBottom: '8px' }}
                        />
                        <input
                          type="text"
                          placeholder="Takeaway 2: Active harmonic filtering should be designed during FEED..."
                          value={form.takeaway2}
                          onChange={(e) => setForm({ ...form, takeaway2: e.target.value })}
                          className="admin-input"
                          style={{ marginBottom: '8px' }}
                        />
                        <input
                          type="text"
                          placeholder="Takeaway 3: Early NSP engagement prevents connection delays..."
                          value={form.takeaway3}
                          onChange={(e) => setForm({ ...form, takeaway3: e.target.value })}
                          className="admin-input"
                        />
                      </div>

                      {/* Full Article Content */}
                      <div className="admin-field admin-field--full">
                        <label>Full Technical Article Content</label>
                        <span className="admin-field-hint">Use <code>## Section Header</code> for subheadings and <code>- Bullet point</code> for lists.</span>
                        <textarea
                          rows="12"
                          placeholder="Write your article content here..."
                          value={form.content}
                          onChange={(e) => setForm({ ...form, content: e.target.value })}
                          className="admin-input admin-textarea-code"
                        />
                      </div>
                    </div>

                    <div className="admin-form-actions">
                      <button type="submit" className="btn btn--primary btn--large">
                        <CheckCircle size={18} /> {editingSlug ? 'Update Article' : 'Publish Article'}
                      </button>
                      <button type="button" onClick={() => setIsEditing(false)} className="btn btn--outline">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* LIST OF ARTICLES */}
              {loading ? (
                <p>Loading articles...</p>
              ) : (
                <div className="admin-articles-list">
                  {articlesList.map((art) => (
                    <div key={art.slug} className="admin-article-item">
                      <div 
                        className="admin-article-thumb"
                        style={{ backgroundImage: `url(${getAssetUrl(art.coverImage || '/assets/images/power-systems-bg.jpg')})` }}
                      />
                      <div className="admin-article-details">
                        <div className="admin-article-meta">
                          <span className="admin-article-cat">{art.category}</span>
                          <span>•</span>
                          <span>{art.readTime || '5 min read'}</span>
                          <span>•</span>
                          <span>Published {art.publishedAt}</span>
                        </div>
                        <h3 className="admin-article-title">{art.title}</h3>
                        <p className="admin-article-excerpt">{art.excerpt}</p>
                      </div>

                      <div className="admin-article-item-actions">
                        <Link to={`/insights/${art.slug}`} target="_blank" className="btn btn--outline" style={{ padding: '6px 12px', fontSize: '12px' }} title="Preview Article">
                          <Eye size={14} /> View
                        </Link>
                        <button onClick={() => handleEdit(art)} className="btn btn--primary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                          <Edit3 size={14} /> Edit
                        </button>
                        <button onClick={() => handleDelete(art)} className="admin-btn-delete" title="Delete Article">
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
