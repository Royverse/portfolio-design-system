import React from 'react';
import { ECOSYSTEM_PROJECTS } from '../../tokens/projects';

export const ColorPalette: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h1 style={{ margin: '0 0 8px', fontSize: '28px', fontWeight: 700 }}>
          Ecosystem Color Systems
        </h1>
        <p style={{ margin: 0, color: 'var(--project-muted-color)', fontSize: '15px' }}>
          Canonical theme palettes, accent borders, and surface tones across all 14 Roy Mootsana ecosystem projects.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}
      >
        {Object.values(ECOSYSTEM_PROJECTS).map((p) => (
          <div
            key={p.id}
            style={{
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: p.surfaceBg,
              border: `1px solid ${p.borderColor}`,
              boxShadow: `0 8px 24px rgba(0,0,0,0.4)`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent Corner Glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: p.textColor }}>
                  {p.name}
                </h3>
                <span style={{ fontSize: '12px', color: p.mutedColor }}>{p.category}</span>
              </div>
              <span
                style={{
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  backgroundColor: p.tagBg,
                  color: p.tagColor,
                  border: `1px solid ${p.themeColor}44`,
                }}
              >
                {p.id}
              </span>
            </div>

            {/* Color Swatch Bars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
              <div>
                <div
                  style={{
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: p.themeColor,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <span style={{ display: 'block', fontSize: '10px', marginTop: '4px', color: p.mutedColor }}>
                  Theme
                </span>
                <code style={{ fontSize: '10px', color: p.textColor }}>{p.themeColor}</code>
              </div>

              <div>
                <div
                  style={{
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: p.accentColor,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <span style={{ display: 'block', fontSize: '10px', marginTop: '4px', color: p.mutedColor }}>
                  Accent
                </span>
                <code style={{ fontSize: '10px', color: p.textColor }}>{p.accentColor}</code>
              </div>

              <div>
                <div
                  style={{
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: p.surfaceBg,
                    border: `1px solid ${p.borderColor}`,
                  }}
                />
                <span style={{ display: 'block', fontSize: '10px', marginTop: '4px', color: p.mutedColor }}>
                  Surface
                </span>
                <code style={{ fontSize: '10px', color: p.textColor }}>{p.surfaceBg}</code>
              </div>

              <div>
                <div
                  style={{
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: p.bgColor,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                />
                <span style={{ display: 'block', fontSize: '10px', marginTop: '4px', color: p.mutedColor }}>
                  Background
                </span>
                <code style={{ fontSize: '10px', color: p.textColor }}>{p.bgColor}</code>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: '12px', color: p.mutedColor, lineHeight: 1.5 }}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
