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
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|`[^`]+`|\$[a-zA-Z\d_\^\/\+\-\=\(\)\\]+\$|\*\*[^*]+\*\*|\*[^*]+\*)/g;

  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // 1. Hyperlink: [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
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
    const codeMatch = part.match(/^`([^`]+)`$/);
    if (codeMatch) {
      return (
        <code key={index} className="insight-inline-code">
          {codeMatch[1]}
        </code>
      );
    }

    // 3. Mathematical Notation: $formula$ (e.g. $dV/dt$, $X/R$)
    const mathMatch = part.match(/^\$([a-zA-Z\d_\^\/\+\-\=\(\)\\]+)\$$/);
    if (mathMatch) {
      return (
        <span key={index} className="insight-math-token" title="Mathematical notation">
          <em>{mathMatch[1]}</em>
        </span>
      );
    }

    // 4. Bold: **text**
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={index}>{boldMatch[1]}</strong>;
    }

    // 5. Italic: *text*
    const italicMatch = part.match(/^\*([^*]+)\*$/);
    if (italicMatch) {
      return <em key={index}>{italicMatch[1]}</em>;
    }

    return part;
  });
}
