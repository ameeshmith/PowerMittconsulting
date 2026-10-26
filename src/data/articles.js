/**
 * PowerMitt Consulting — Engineering Insights & Technical Articles
 * Written & curated by Dinesh Mithanthaya, Principal Power Engineer.
 * 
 * NOTE: For reference template and sample articles, see `src/data/articles.sample.js`.
 */

export const categories = [
  'All',
  'Power Systems',
  'Energy Transition',
  'Mining & Resources',
  'Owner\'s Engineering'
];

export const articles = [];

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(currentSlug, limit = 2, category = '', tags = []) {
  const current = articles.find(a => a.slug === currentSlug || a.id === currentSlug);
  const targetCategory = (category || current?.category || '').toLowerCase().trim();
  const targetTags = (Array.isArray(tags) && tags.length > 0 ? tags : (current?.tags || []))
    .map(t => String(t).toLowerCase().trim())
    .filter(Boolean);

  const candidates = articles.filter(a => a.slug !== currentSlug && a.id !== currentSlug);
  const scored = candidates.map(article => {
    let score = 0;
    const artCat = (article.category || '').toLowerCase().trim();
    if (targetCategory && artCat && artCat === targetCategory) {
      score += 3;
    }
    if (Array.isArray(article.tags) && targetTags.length > 0) {
      const artTags = article.tags.map(t => String(t).toLowerCase().trim());
      for (const t of targetTags) {
        if (artTags.includes(t)) {
          score += 1;
        }
      }
    }
    return { article, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(item => item.article);
}
