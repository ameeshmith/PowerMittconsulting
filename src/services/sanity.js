import { articles as localArticles, getArticleBySlug as getLocalArticleBySlug } from '../data/articles';

export const SANITY_CONFIG = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '2q7wrg2u',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true
};

const CUSTOM_ARTICLES_KEY = 'powermitt_custom_articles';
const DELETED_ARTICLES_KEY = 'powermitt_deleted_articles';

/**
 * Gets custom articles stored in browser LocalStorage.
 */
export function getCustomArticles() {
  try {
    const saved = localStorage.getItem(CUSTOM_ARTICLES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

/**
 * Gets deleted article IDs/slugs.
 */
export function getDeletedArticleSlugs() {
  try {
    const saved = localStorage.getItem(DELETED_ARTICLES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

/**
 * Saves a new or updated article.
 */
export function saveArticle(articleData) {
  const custom = getCustomArticles();
  const deleted = getDeletedArticleSlugs();
  
  // If restoring a deleted slug, remove from deleted list
  const newDeleted = deleted.filter(s => s !== articleData.slug);
  localStorage.setItem(DELETED_ARTICLES_KEY, JSON.stringify(newDeleted));

  const index = custom.findIndex(a => a.slug === articleData.slug || a.id === articleData.id);
  if (index >= 0) {
    custom[index] = { ...custom[index], ...articleData, publishedAt: articleData.publishedAt || new Date().toISOString().split('T')[0] };
  } else {
    custom.unshift({
      ...articleData,
      id: articleData.slug || `art-${Date.now()}`,
      publishedAt: articleData.publishedAt || new Date().toISOString().split('T')[0],
      author: articleData.author || {
        name: 'Dinesh Mithanthaya',
        role: 'Principal Power Engineer',
        avatar: '/assets/images/hero-nature-energy.jpg',
        bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
      }
    });
  }
  localStorage.setItem(CUSTOM_ARTICLES_KEY, JSON.stringify(custom));
  return custom;
}

/**
 * Deletes an article by slug.
 */
export function deleteArticle(slug) {
  const custom = getCustomArticles();
  const updatedCustom = custom.filter(a => a.slug !== slug && a.id !== slug);
  localStorage.setItem(CUSTOM_ARTICLES_KEY, JSON.stringify(updatedCustom));

  const deleted = getDeletedArticleSlugs();
  if (!deleted.includes(slug)) {
    deleted.push(slug);
    localStorage.setItem(DELETED_ARTICLES_KEY, JSON.stringify(deleted));
  }
  return true;
}

/**
 * Fetches all published articles (combines local starter articles + user-created articles, excluding deleted articles).
 */
export async function getAllArticles() {
  const custom = getCustomArticles();
  const deletedSlugs = getDeletedArticleSlugs();

  // Combine custom articles and default articles
  const allMap = new Map();
  custom.forEach(a => allMap.set(a.slug, a));
  localArticles.forEach(a => {
    if (!allMap.has(a.slug) && !deletedSlugs.includes(a.slug)) {
      allMap.set(a.slug, a);
    }
  });

  const merged = Array.from(allMap.values());
  return merged.filter(a => !deletedSlugs.includes(a.slug));
}

/**
 * Fetches a single article by slug.
 */
export async function getArticle(slug) {
  const all = await getAllArticles();
  return all.find(a => a.slug === slug || a.id === slug) || null;
}

/**
 * Fetches related articles excluding current article slug.
 */
export async function getRelatedArticles(currentSlug, limit = 2) {
  const all = await getAllArticles();
  return all.filter(a => a.slug !== currentSlug && a.id !== currentSlug).slice(0, limit);
}

/**
 * Exports all custom articles and deleted slugs as a backup JSON object.
 */
export function exportArticlesBackup() {
  const custom = getCustomArticles();
  const deleted = getDeletedArticleSlugs();
  return {
    version: 1,
    app: 'PowerMitt Consulting',
    exportedAt: new Date().toISOString(),
    customArticles: custom,
    deletedArticles: deleted
  };
}

/**
 * Imports articles from backup JSON.
 * @param {Object} backupData - Parsed JSON object from a backup file
 * @param {'merge' | 'replace'} mode - Whether to merge or replace existing local storage
 */
export function importArticlesBackup(backupData, mode = 'merge') {
  if (!backupData || typeof backupData !== 'object') {
    throw new Error('Invalid backup file: content is not a valid JSON object.');
  }

  const incomingCustom = Array.isArray(backupData.customArticles) 
    ? backupData.customArticles 
    : (Array.isArray(backupData) ? backupData : []);
  const incomingDeleted = Array.isArray(backupData.deletedArticles) ? backupData.deletedArticles : [];

  if (mode === 'replace') {
    localStorage.setItem(CUSTOM_ARTICLES_KEY, JSON.stringify(incomingCustom));
    localStorage.setItem(DELETED_ARTICLES_KEY, JSON.stringify(incomingDeleted));
    return { count: incomingCustom.length };
  }

  // Merge mode (default)
  const currentCustom = getCustomArticles();
  const currentDeleted = getDeletedArticleSlugs();

  const customMap = new Map();
  currentCustom.forEach(a => customMap.set(a.slug || a.id, a));
  incomingCustom.forEach(a => customMap.set(a.slug || a.id, a));

  const mergedCustom = Array.from(customMap.values());
  const mergedDeleted = Array.from(new Set([...currentDeleted, ...incomingDeleted]));

  localStorage.setItem(CUSTOM_ARTICLES_KEY, JSON.stringify(mergedCustom));
  localStorage.setItem(DELETED_ARTICLES_KEY, JSON.stringify(mergedDeleted));

  return { count: mergedCustom.length };
}
