import { Link } from 'react-router-dom';
import { Lock, ArrowRight, BookOpen, Edit3, Trash2, CheckCircle, ExternalLink } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import './Admin.css';

export default function Admin() {
  const sanityManageUrl = "https://sanity.io/manage";

  return (
    <main className="admin-page">
      <SEO
        title="Admin Portal | PowerMitt Consulting"
        description="Private publishing portal for PowerMitt Consulting team members."
        path="/admin"
      />

      <Hero
        variant="compact"
        label="Author Portal"
        title="Engineering Insights Publishing Portal"
        subtitle="Manage, publish, edit, and delete technical articles for PowerMitt Consulting."
      />

      <section className="admin-section">
        <div className="container container--narrow">
          <div className="admin-card">
            <div className="admin-card__header">
              <div className="admin-card__icon">
                <Lock size={28} />
              </div>
              <h2>Dinesh Mithanthaya — Publishing Portal</h2>
              <p>Welcome to the PowerMitt content management system. Only authorized administrators can log in to publish or modify technical articles.</p>
            </div>

            <div className="admin-card__actions">
              <a
                href={sanityManageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large admin-launch-btn"
              >
                Open Article Editor Dashboard <ExternalLink size={18} />
              </a>
            </div>

            <div className="admin-guide">
              <h3>What you can do in the Editor:</h3>
              <div className="admin-guide__grid">
                <div className="admin-guide__item">
                  <div className="admin-guide__item-icon">
                    <Edit3 size={20} />
                  </div>
                  <div>
                    <h4>Write & Publish Articles</h4>
                    <p>Create new technical insights with rich formatting, tags, key takeaways, and cover images.</p>
                  </div>
                </div>

                <div className="admin-guide__item">
                  <div className="admin-guide__item-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4>Edit Existing Posts</h4>
                    <p>Update existing technical analysis, fix typos, or revise conclusions in real-time.</p>
                  </div>
                </div>

                <div className="admin-guide__item">
                  <div className="admin-guide__item-icon">
                    <Trash2 size={20} />
                  </div>
                  <div>
                    <h4>Delete or Unpublish</h4>
                    <p>Remove articles permanently or temporarily save them as private drafts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-footer-note">
              <BookOpen size={16} />
              <span>Published articles update on <Link to="/insights">PowerMitt Insights</Link> within seconds.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
