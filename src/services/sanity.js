import { articles as localArticles, getArticleBySlug as getLocalArticleBySlug } from '../data/articles';

/**
 * Sanity.io CMS Integration Configuration
 * 
 * To connect Dinesh's private publishing workspace:
 * 1. Create a free project at https://sanity.io (takes 1 minute).
 * 2. Set the projectId and dataset in your environment or below.
 * 3. Dinesh logs into https://[projectId].sanity.studio to publish articles.
 */
export const SANITY_CONFIG = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '2q7wrg2u',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true
};

/**
 * Fetches all published articles.
 * Falls back seamlessly to curated local articles if Sanity credentials are not set.
 */
export async function getAllArticles() {
  if (!SANITY_CONFIG.projectId) {
    return localArticles;
  }

  const query = encodeURIComponent(`*[_type == "article"] | order(publishedAt desc) {
    _id,
    "id": slug.current,
    "slug": slug.current,
    title,
    subtitle,
    category,
    "publishedAt": publishedAt,
    "readTime": readTime,
    "coverImage": mainImage.asset->url,
    excerpt,
    tags,
    keyTakeaways,
    content,
    "author": {
      "name": author->name,
      "role": author->role,
      "avatar": author->image.asset->url,
      "bio": author->bio
    }
  }`);

  const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sanity query failed with status: ${res.status}`);
    const data = await res.json();
    if (data.result && data.result.length > 0) {
      return data.result;
    }
    return localArticles;
  } catch (err) {
    console.warn('Could not fetch from Sanity CMS, using bundled technical articles:', err);
    return localArticles;
  }
}

/**
 * Fetches a single article by its URL slug.
 */
export async function getArticle(slug) {
  if (!SANITY_CONFIG.projectId) {
    return getLocalArticleBySlug(slug);
  }

  const query = encodeURIComponent(`*[_type == "article" && slug.current == "${slug}"][0] {
    _id,
    "id": slug.current,
    "slug": slug.current,
    title,
    subtitle,
    category,
    "publishedAt": publishedAt,
    "readTime": readTime,
    "coverImage": mainImage.asset->url,
    excerpt,
    tags,
    keyTakeaways,
    content,
    "author": {
      "name": author->name,
      "role": author->role,
      "avatar": author->image.asset->url,
      "bio": author->bio
    }
  }`);

  const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`);
    const data = await res.json();
    return data.result || getLocalArticleBySlug(slug);
  } catch (err) {
    console.warn('Sanity fetch error for slug, fallback to local:', err);
    return getLocalArticleBySlug(slug);
  }
}
