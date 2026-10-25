import React from 'react';
import { ECOSYSTEM_PROJECTS } from '../../tokens/projects';

export interface ProjectBadgeProps {
  /** Project identifier from ecosystem registry */
  projectId?: string;
  /** Size variant of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to render the project name beside the icon */
  showLabel?: boolean;
  /** Custom accent border color override */
  accentColorOverride?: string;
  /** Interactive hover elevation */
  interactive?: boolean;
}

export const ProjectBadge: React.FC<ProjectBadgeProps> = ({
  projectId = 'portfolio-v1',
  size = 'md',
  showLabel = true,
  accentColorOverride,
  interactive = true,
}) => {
  const project = ECOSYSTEM_PROJECTS[projectId] || ECOSYSTEM_PROJECTS['portfolio-v1'];
  const accent = accentColorOverride || project.themeColor;

  const sizeMap = {
    sm: { box: 32, icon: 16, fontSize: 13, gap: 8 },
    md: { box: 44, icon: 22, fontSize: 15, gap: 12 },
    lg: { box: 60, icon: 30, fontSize: 18, gap: 16 },
  }[size];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${sizeMap.gap}px`,
        cursor: interactive ? 'pointer' : 'default',
        transition: 'transform var(--transition-fast)',
      }}
    >
      {/* Signature Icon Container on #111 with Accent Border */}
      <div
        style={{
          width: `${sizeMap.box}px`,
          height: `${sizeMap.box}px`,
          borderRadius: '12px',
          backgroundColor: '#111111',
          border: `2px solid ${accent}`,
          boxShadow: `0 0 16px ${accent}44`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'box-shadow var(--transition-base), border-color var(--transition-base)',
        }}
      >
        {/* Signature Stylized RM Monogram */}
        <svg
          width={sizeMap.icon}
          height={sizeMap.icon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4V20M4 4H14C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12H4M13 12L20 20"
            stroke={project.accentColor || '#FFFFFF'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showLabel && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: `${sizeMap.fontSize}px`, fontWeight: 600, color: 'var(--project-text-color)' }}>
            {project.name}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--project-muted-color)' }}>
            {project.category}
          </span>
        </div>
      )}
    </div>
  );
};
