import React from 'react';

export interface SkipLinkProps {
  href?: string;
  label?: string;
  color?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  href = '#main-content',
  label = 'Skip to main content',
  color = 'var(--project-theme-color)',
}) => {
  return (
    <a
      href={href}
      className="skip-link"
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '10px 16px',
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: '13px',
        borderRadius: '6px',
        border: `2px solid ${color}`,
        boxShadow: `0 0 16px ${color}66`,
        outline: 'none',
        transition: 'transform var(--transition-fast)',
      }}
    >
      {label}
    </a>
  );
};
