import React from 'react';
import { ECOSYSTEM_PROJECTS, ProjectToken } from '../../tokens/projects';

export interface ProjectCardProps {
  projectId?: string;
  projectOverride?: Partial<ProjectToken>;
  onExplore?: () => void;
  interactive?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectId = 'air-canvas',
  projectOverride,
  onExplore,
  interactive = true,
}) => {
  const base = ECOSYSTEM_PROJECTS[projectId] || ECOSYSTEM_PROJECTS['air-canvas'];
  const project = { ...base, ...projectOverride };

  return (
    <div
      style={{
        maxWidth: '380px',
        borderRadius: '16px',
        backgroundColor: project.surfaceBg,
        border: `1px solid ${project.borderColor}`,
        boxShadow: `0 12px 32px rgba(0,0,0,0.5)`,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base)',
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '4px 10px',
            borderRadius: '9999px',
            backgroundColor: project.tagBg,
            color: project.tagColor,
            border: `1px solid ${project.themeColor}33`,
          }}
        >
          {project.tag}
        </span>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '12px',
              color: project.mutedColor,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Live Demo ↗
          </a>
        )}
      </div>

      {/* Title & Category */}
      <div>
        <h3
          style={{
            margin: '0 0 4px',
            fontSize: '22px',
            fontWeight: 700,
            color: project.textColor,
            fontFamily: project.displayFont,
          }}
        >
          {project.name}
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: project.mutedColor, lineHeight: 1.5 }}>
          {project.description}
        </p>
      </div>

      {/* Decorative Mock Canvas Preview */}
      <div
        style={{
          height: '110px',
          borderRadius: '10px',
          backgroundColor: project.bgColor,
          border: `1px solid ${project.borderColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${project.glowColor} 0%, transparent 70%)`,
          }}
        />
        <span style={{ fontSize: '12px', color: project.mutedColor, zIndex: 1, fontFamily: project.fontFamily }}>
          Procedural Engine Active
        </span>
      </div>

      {/* Action Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px' }}>
        <button
          type="button"
          onClick={onExplore}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: `1px solid ${project.themeColor}`,
            backgroundColor: `${project.themeColor}1A`,
            color: project.textColor,
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color var(--transition-fast)',
          }}
        >
          Explore Architecture
        </button>

        <span style={{ fontSize: '12px', color: project.mutedColor }}>
          60fps Kinematics
        </span>
      </div>
    </div>
  );
};
