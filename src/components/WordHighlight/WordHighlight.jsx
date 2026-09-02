import React from 'react';
import './WordHighlight.css';

/**
 * WordHighlight Component (Eternal-inspired)
 * Highlights key terms with an architectural hand-drawn vector SVG loop / oval ring
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The highlighted word or phrase
 * @param {'blue' | 'green' | 'teal'} [props.color='blue'] - Highlight accent color
 * @param {'oval' | 'circle' | 'underline'} [props.variant='oval'] - Loop style
 * @param {string} [props.className=''] - Additional classes
 */
export default function WordHighlight({
  children,
  color = 'blue',
  variant = 'oval',
  className = ''
}) {
  return (
    <span className={`word-highlight word-highlight--${color} word-highlight--${variant} ${className}`}>
      <span className="word-highlight__text">{children}</span>
      {variant === 'oval' && (
        <svg
          className="word-highlight__svg"
          viewBox="0 0 260 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Authentic hand-drawn multi-pass continuous architectural stroke */}
          <path
            d="M 12 40 C 22 14, 115 5, 232 16 C 256 19, 258 54, 204 68 C 122 81, 24 74, 10 46 C 4 30, 48 10, 142 8 C 218 7, 252 26, 242 48"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {variant === 'circle' && (
        <svg
          className="word-highlight__svg word-highlight__svg--circle"
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 20 60 C 20 25, 60 10, 100 12 C 145 15, 155 55, 140 90 C 120 115, 45 118, 22 92 C 10 75, 25 35, 75 18 C 115 5, 150 30, 148 68"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {variant === 'underline' && (
        <svg
          className="word-highlight__svg word-highlight__svg--underline"
          viewBox="0 0 200 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 4 14 C 45 6, 120 4, 196 12 C 160 17, 85 20, 20 18"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}
