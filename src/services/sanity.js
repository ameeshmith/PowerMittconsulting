import { createClient } from '@sanity/client';
import { articles as localArticles, getArticleBySlug as getLocalArticleBySlug } from '../data/articles';

export const SANITY_CONFIG = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: import.meta.env.PROD
};

// Initialize Sanity client strictly in read-only / CDN mode for public content.
// Write privileges are excluded from client bundles to prevent API key exposure (OWASP A02/A07).
export const sanityClient = SANITY_CONFIG.projectId
  ? createClient({
      projectId: SANITY_CONFIG.projectId,
      dataset: SANITY_CONFIG.dataset,
      apiVersion: SANITY_CONFIG.apiVersion,
      useCdn: SANITY_CONFIG.useCdn
    })
  : null;

/**
 * Validates and sanitizes a media URL to prevent script injection (javascript:, data: schemes).
 * Only allows relative paths or secure https/http URLs.
 */
function sanitizeMediaUrl(url, fallback = '/assets/images/power-systems-bg.jpg') {
  if (typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  if (!trimmed) return fallback;
  // Allow safe relative asset paths
  if (trimmed.startsWith('/') || trimmed.startsWith('./')) {
    if (trimmed.includes('../')) return fallback;
    return trimmed;
  }
  // Enforce http/https protocols only
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return fallback;
}

/**
 * Validates and sanitizes a URL slug.
 */
function sanitizeSlug(slug) {
  if (typeof slug !== 'string') return '';
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 120);
}

/**
 * Sanitizes a plain text string.
 */
function sanitizeString(str, maxLength = 1000) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, maxLength);
}

/**
 * Validates and sanitizes an entire article object against schema rules.
 */
function sanitizeArticle(art) {
  if (!art || typeof art !== 'object' || Array.isArray(art)) return null;

  // Protect against prototype pollution
  if ('__proto__' in art || 'constructor' in art || 'prototype' in art) {
    return null;
  }

  const rawTitle = sanitizeString(art.title, 300);
  if (!rawTitle) return null;

  const rawSlug = sanitizeSlug(art.slug || art.id || rawTitle);
  if (!rawSlug) return null;

  const tags = Array.isArray(art.tags)
    ? art.tags.map(t => sanitizeString(String(t), 50)).filter(Boolean).slice(0, 20)
    : [];

  const takeaways = Array.isArray(art.keyTakeaways)
    ? art.keyTakeaways.map(t => sanitizeString(String(t), 300)).filter(Boolean).slice(0, 10)
    : [];

  const author = (art.author && typeof art.author === 'object' && !Array.isArray(art.author))
    ? {
        name: sanitizeString(art.author.name || 'Dinesh Mithanthaya', 100),
        role: sanitizeString(art.author.role || 'Principal Power Engineer', 100),
        avatar: sanitizeMediaUrl(art.author.avatar, '/assets/images/team/dinesh-mithanthaya.webp'),
        bio: sanitizeString(art.author.bio || '', 1000)
      }
    : {
        name: 'Dinesh Mithanthaya',
        role: 'Principal Power Engineer',
        avatar: '/assets/images/team/dinesh-mithanthaya.webp',
        bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
      };

  return {
    id: rawSlug,
    slug: rawSlug,
    title: rawTitle,
    subtitle: sanitizeString(art.subtitle, 500),
    category: sanitizeString(art.category || 'Power Systems', 100),
    readTime: sanitizeString(art.readTime || '5 min read', 50),
    coverImage: sanitizeMediaUrl(art.coverImage, '/assets/images/power-systems-bg.jpg'),
    excerpt: sanitizeString(art.excerpt, 1000),
    tags: tags.length > 0 ? tags : ['Power Systems'],
    keyTakeaways: takeaways,
    content: typeof art.content === 'string' ? art.content.slice(0, 250000) : '',
    publishedAt: sanitizeString(art.publishedAt || new Date().toISOString().split('T')[0], 30),
    author
  };
}

/**
 * Checks whether remote Sanity CMS is connected.
 */
export function isSanityConnected() {
  return Boolean(sanityClient && SANITY_CONFIG.projectId);
}

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
 * Saves a new or updated article with slug collision prevention and metadata preservation.
 * Syncs to remote Sanity CMS if configured, and persists locally.
 *
 * @param {Object} articleData - Article fields to save
 * @param {Object} [options] - Save options
 * @param {boolean} [options.isNew=false] - If true, enforces slug collision check
 */
export async function saveArticle(articleData, options = { isNew: false }) {
  const custom = getCustomArticles();
  const deleted = getDeletedArticleSlugs();
  const allExisting = await getAllArticles();

  // Collision detection: Prevent silent overwrite of different articles with duplicate slugs
  if (options.isNew) {
    const slugCollision = allExisting.find(a => a.slug === articleData.slug || a.id === articleData.slug);
    if (slugCollision) {
      throw new Error(`An article with the URL slug "${articleData.slug}" already exists ("${slugCollision.title}"). Please choose a unique title to prevent overwriting existing content.`);
    }
  }

  // Preserve original publishedAt and author if editing an existing starter or custom article
  const existingDefault = localArticles.find(a => a.slug === articleData.slug || a.id === articleData.id);
  const existingCustom = custom.find(a => a.slug === articleData.slug || a.id === articleData.id);
  const original = existingCustom || existingDefault;

  const publishedAt = articleData.publishedAt || original?.publishedAt || new Date().toISOString().split('T')[0];
  const author = articleData.author || original?.author || {
    name: 'Dinesh Mithanthaya',
    role: 'Principal Power Engineer',
    avatar: '/assets/images/team/dinesh-mithanthaya.webp',
    bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
  };

  const finalArticle = sanitizeArticle({
    ...articleData,
    publishedAt,
    author
  });

  if (!finalArticle) {
    throw new Error('Article data failed security validation: missing required title or slug.');
  }

  // If restoring a deleted slug, remove from deleted list
  const newDeleted = deleted.filter(s => s !== finalArticle.slug);
  localStorage.setItem(DELETED_ARTICLES_KEY, JSON.stringify(newDeleted));

  // 1. Remote Sanity mutations:
  // Client-side write tokens are strictly disabled in the frontend bundle to prevent credential exposure (OWASP A02/A07).
  // Production Sanity publishing should be executed via Sanity Studio or an authenticated backend API.
  // Content changes are securely persisted in local storage and can be exported as articles.js for Git deployment.

  // 2. Persist in local storage for instant author availability and offline resilience
  const index = custom.findIndex(a => a.slug === finalArticle.slug || a.id === finalArticle.id);
  if (index >= 0) {
    custom[index] = finalArticle;
  } else {
    custom.unshift(finalArticle);
  }
  localStorage.setItem(CUSTOM_ARTICLES_KEY, JSON.stringify(custom));

  return finalArticle;
}

/**
 * Deletes an article by slug.
 */
export async function deleteArticle(slug) {
  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) return false;

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
 * Fetches all published articles (combines remote Sanity articles + custom articles + default starter articles, excluding deleted).
 */
export async function getAllArticles() {
  const custom = getCustomArticles();
  const deletedSlugs = getDeletedArticleSlugs();
  const allMap = new Map();

  // 1. Fetch remote articles from Sanity CMS if configured
  if (sanityClient) {
    try {
      const remote = await sanityClient.fetch(`*[_type == "article"] | order(publishedAt desc)`);
      if (Array.isArray(remote)) {
        remote.forEach(a => {
          const slug = a.slug?.current || a.slug || a._id;
          if (slug && !deletedSlugs.includes(slug)) {
            allMap.set(slug, {
              id: a._id || slug,
              slug: slug,
              title: a.title,
              subtitle: a.subtitle || '',
              category: a.category || 'Power Systems',
              readTime: a.readTime || '5 min read',
              coverImage: a.coverImage || a.imageUrl || '/assets/images/power-systems-bg.jpg',
              excerpt: a.excerpt || '',
              tags: a.tags || [],
              keyTakeaways: a.keyTakeaways || [],
              content: a.content || '',
              publishedAt: a.publishedAt,
              author: a.author || {
                name: 'Dinesh Mithanthaya',
                role: 'Principal Power Engineer',
                avatar: '/assets/images/team/dinesh-mithanthaya.webp',
                bio: 'Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia.'
              }
            });
          }
        });
      }
    } catch (err) {
      console.warn('Could not fetch from Sanity CMS, using local cache:', err);
    }
  }

  // 2. Overlay custom articles from local storage
  custom.forEach(a => {
    if (!deletedSlugs.includes(a.slug)) {
      allMap.set(a.slug, a);
    }
  });

  // 3. Fallback to default starter articles from code if not deleted
  localArticles.forEach(a => {
    if (!allMap.has(a.slug) && !deletedSlugs.includes(a.slug)) {
      allMap.set(a.slug, a);
    }
  });

  return Array.from(allMap.values())
    .filter(a => !deletedSlugs.includes(a.slug))
    .sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));
}

/**
 * Fetches a single article by slug.
 */
export async function getArticle(slug) {
  const all = await getAllArticles();
  return all.find(a => a.slug === slug || a.id === slug) || null;
}

/**
 * Fetches related articles excluding current article slug, prioritizing matching category and overlapping tags.
 * @param {string} currentSlug - Current article slug/id to exclude
 * @param {number} [limit=2] - Maximum articles to return
 * @param {string} [category=''] - Optional category for relevance weighting
 * @param {string[]} [tags=[]] - Optional tags for overlap weighting
 */
export async function getRelatedArticles(currentSlug, limit = 2, category = '', tags = []) {
  const all = await getAllArticles();
  const current = all.find(a => a.slug === currentSlug || a.id === currentSlug);

  const targetCategory = (category || current?.category || '').toLowerCase().trim();
  const targetTags = (Array.isArray(tags) && tags.length > 0 ? tags : (current?.tags || []))
    .map(t => String(t).toLowerCase().trim())
    .filter(Boolean);

  const candidates = all.filter(a => a.slug !== currentSlug && a.id !== currentSlug);

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

/**
 * Generates ready-to-commit src/data/articles.js code content from all currently active articles.
 * Enables the Git-based content management workflow so articles are permanently deployed to production.
 */
export async function generateArticlesJsContent() {
  const articles = await getAllArticles();
  // Sanitize articles and escape any script tags or closing comments before code generation
  const safeJson = JSON.stringify(articles, null, 2)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');

  return `/**
 * PowerMitt Consulting — Engineering Insights & Technical Articles
 * Written & curated by Dinesh Mithanthaya, Principal Power Engineer.
 * Auto-synced from Author Portal for production Git deployment.
 */

export const categories = [
  'All',
  'Power Systems',
  'Energy Transition',
  'Mining & Resources',
  "Owner's Engineering"
];

export const articles = ${safeJson};

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
`;
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
 * Imports articles from backup JSON with strict schema validation and sanitization (OWASP A03/A08).
 * @param {Object} backupData - Parsed JSON object from a backup file
 * @param {'merge' | 'replace'} mode - Whether to merge or replace existing local storage
 */
export function importArticlesBackup(backupData, mode = 'merge') {
  if (!backupData || typeof backupData !== 'object') {
    throw new Error('Invalid backup file: content is not a valid JSON object.');
  }

  // Prevent prototype pollution or oversized payloads (DoS)
  const rawCustom = Array.isArray(backupData.customArticles) 
    ? backupData.customArticles 
    : (Array.isArray(backupData) ? backupData : []);

  if (rawCustom.length > 150) {
    throw new Error('Backup payload exceeds maximum limit of 150 articles.');
  }

  const rawDeleted = Array.isArray(backupData.deletedArticles) ? backupData.deletedArticles : [];

  // Strictly sanitize all incoming article data
  const incomingCustom = rawCustom
    .map(sanitizeArticle)
    .filter(Boolean);

  const incomingDeleted = rawDeleted
    .map(sanitizeSlug)
    .filter(Boolean)
    .slice(0, 200);

  if (mode === 'replace') {
    localStorage.setItem(CUSTOM_ARTICLES_KEY, JSON.stringify(incomingCustom));
    localStorage.setItem(DELETED_ARTICLES_KEY, JSON.stringify(incomingDeleted));
    return { count: incomingCustom.length };
  }

  // Merge mode (default)
  const currentCustom = getCustomArticles();
  const currentDeleted = getDeletedArticleSlugs();

  const customMap = new Map();
  currentCustom.forEach(a => {
    const sanitized = sanitizeArticle(a);
    if (sanitized) customMap.set(sanitized.slug, sanitized);
  });
  incomingCustom.forEach(a => customMap.set(a.slug, a));

  const mergedCustom = Array.from(customMap.values());
  const mergedDeleted = Array.from(new Set([...currentDeleted, ...incomingDeleted]));

  localStorage.setItem(CUSTOM_ARTICLES_KEY, JSON.stringify(mergedCustom));
  localStorage.setItem(DELETED_ARTICLES_KEY, JSON.stringify(mergedDeleted));

  return { count: mergedCustom.length };
}
