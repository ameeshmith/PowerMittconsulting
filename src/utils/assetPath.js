export function getAssetUrl(path) {
  if (!path || typeof path !== 'string') return '';
  const trimmed = path.trim();
  // Allow secure external HTTPS/HTTP URLs or safe image data URIs
  if (/^https?:\/\//i.test(trimmed) || /^data:image\/(png|jpe?g|webp|svg\+xml);base64,/i.test(trimmed)) {
    return trimmed;
  }
  // Block any dangerous protocols (e.g. javascript:, vbscript:, arbitrary data:)
  if (/^[a-z0-9+.-]+:/i.test(trimmed)) {
    return '';
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
