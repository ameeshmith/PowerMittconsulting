/**
 * PowerMitt Consulting — Date Formatting Utilities
 * Provides safe date formatting with fallbacks to avoid "Invalid Date" outputs on malformed data.
 */

/**
 * Safely formats an ISO date string or timestamp into a localized human-readable date.
 * Returns a fallback string if the date string is null, empty, or unparseable.
 *
 * @param {string | number | Date | null | undefined} dateInput - Raw date string or object
 * @param {Intl.DateTimeFormatOptions} [options] - Intl format options (default: { month: 'short', day: 'numeric', year: 'numeric' })
 * @param {string} [fallback='Recently published'] - Fallback label for invalid or missing dates
 * @returns {string} Formatted date string
 */
export function formatPublishedDate(
  dateInput,
  options = { month: 'short', day: 'numeric', year: 'numeric' },
  fallback = 'Recently published'
) {
  if (!dateInput) return fallback;

  try {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) {
      return fallback;
    }
    return d.toLocaleDateString('en-AU', options);
  } catch {
    return fallback;
  }
}
