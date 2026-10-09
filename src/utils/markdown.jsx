import React from 'react';

/**
 * Lightweight inline markdown and notation formatter.
 * Safely parses inline markdown elements into React components:
 * - [Link label](url) -> <a> tag with external security attributes
 * - `code` -> <code className="insight-inline-code"> tag
 * - $math$ -> <span className="insight-math-token"><em>formula</em></span>
 * - **bold** -> <strong> tag
 * - *italic* -> <em> tag
 *
 * @param {string} text - Raw prose string
 * @returns {React.ReactNode} React nodes with inline formatting applied
 */
export function renderInlineMarkdown(text) {
  if (!text || typeof text !== 'string') return text;

  // Regex token pattern with capturing group to preserve matched tokens in String.prototype.split
  // - Links: [label](url)
  // - Code: `code`
  // - Math: $formula$ (supports spaces, decimals, commas e.g. $E = mc^2$, $1.5 \times 10^3$)
  // - Bold: **text**
  // - Italic: *text* (uses flanking delimiter rules to avoid greedy matching across multiplication e.g. 10 * 20 MW)
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|`[^`\r\n]+`|\$[^\$\r\n]+?\$|\*\*[^*\r\n]+?\*\*|(?<!\*)\*(?!\s|\*)[^*\r\n]+?(?<!\s|\*)\*(?!\*))/g;

  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // 1. Hyperlink: [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, rawHref] = linkMatch;
      const href = rawHref.trim();
      // Security: validate that href begins with safe protocols (prevent javascript: or data: URIs)
      const isSafe = /^(https?:\/\/|\/|mailto:)/i.test(href);
      if (!isSafe) {
        return part;
      }
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      return (
        <a
          key={index}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="insight-inline-link"
        >
          {label}
        </a>
      );
    }

    // 2. Inline Code: `code`
    const codeMatch = part.match(/^`([^`\r\n]+)`$/);
    if (codeMatch) {
      return (
        <code key={index} className="insight-inline-code">
          {codeMatch[1]}
        </code>
      );
    }

    // 3. Mathematical Notation: $formula$ (e.g. $dV/dt$, $E = mc^2$, $1.5 \times 10^3$)
    const mathMatch = part.match(/^\$([^\$\r\n]+)\$$/);
    if (mathMatch) {
      return (
        <span key={index} className="insight-math-token" title="Mathematical notation">
          <em>{mathMatch[1]}</em>
        </span>
      );
    }

    // 4. Bold: **text**
    const boldMatch = part.match(/^\*\*([^*\r\n]+)\*\*$/);
    if (boldMatch) {
      return <strong key={index}>{boldMatch[1]}</strong>;
    }

    // 5. Italic: *text* (flanking delimiter match)
    const italicMatch = part.match(/^\*(?!\s|\*)([^*\r\n]+?)(?<!\s|\*)\*$/);
    if (italicMatch) {
      return <em key={index}>{italicMatch[1]}</em>;
    }

    return part;
  });
}
