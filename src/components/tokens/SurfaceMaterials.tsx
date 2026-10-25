import React from 'react';

export const SurfaceMaterials: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h1 style={{ margin: '0 0 8px', fontSize: '28px', fontWeight: 700 }}>
          Surface Paradigms & Materials
        </h1>
        <p style={{ margin: 0, color: 'var(--project-muted-color)', fontSize: '15px' }}>
          The five distinct tactile finishes deployed across Roy Mootsana's portfolio ecosystem.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {/* 1. Neumorphic Acoustic Glass */}
        <div
          style={{
            padding: '24px',
            borderRadius: '16px',
            backgroundColor: '#12141C',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 12px 28px rgba(0,0,0,0.6), 0 0 20px rgba(249,115,22,0.15)',
            border: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            01 · Neumorphic Luxury
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: '18px', color: '#FEF3C7', fontFamily: "'Cinzel', serif" }}>
            Acoustic Field Glass
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#9CA3AF', lineHeight: 1.5 }}>
            Subtle inset highlights, deep tactile shadows, and amber glow accents from Roy's Atelier & Theremin.
          </p>
        </div>

        {/* 2. Dark Brutalist Terminal */}
        <div
          style={{
            padding: '24px',
            borderRadius: '6px',
            backgroundColor: '#030D07',
            border: '1px solid #1D9E75',
            boxShadow: '0 0 16px rgba(29,158,117,0.2)',
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            02 · Brutalist Terminal
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: '18px', color: '#5DCAA5' }}>
            [CRT Matrix Surface]
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#10B981', opacity: 0.8, lineHeight: 1.5 }}>
            Scanlines, high-contrast monochrome emerald, zero blur, and rigid monospace borders from not financial advice.
          </p>
        </div>

        {/* 3. Retro Desktop OS */}
        <div
          style={{
            padding: '24px',
            borderRadius: '2px',
            backgroundColor: '#27272A',
            borderTop: '2px solid #52525B',
            borderLeft: '2px solid #52525B',
            borderRight: '2px solid #09090B',
            borderBottom: '2px solid #09090B',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.5)',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#A1A1AA', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            03 · Retro WebOS
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: '18px', color: '#F4F4F5' }}>
            Midnight Bevel Frame
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#A1A1AA', lineHeight: 1.5 }}>
            Classic 90s-inspired dual-tone 3D bevel edges, solid window borders, and tactile depression states from Midnight OS.
          </p>
        </div>

        {/* 4. Cyber Telemetry HUD */}
        <div
          style={{
            padding: '24px',
            borderRadius: '12px',
            backgroundColor: 'rgba(6, 17, 31, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 0 16px rgba(6, 182, 212, 0.1)',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#06B6D4', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            04 · Cyber Telemetry
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: '18px', color: '#E6F1FB' }}>
            Spatial HUD Glass
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#38BDF8', opacity: 0.85, lineHeight: 1.5 }}>
            High-transparency floating glass, cyan neon rim lights, and sub-pixel corner bracket borders from Luminary & AR Portal.
          </p>
        </div>

        {/* 5. Minimal Kinetic Glass */}
        <div
          style={{
            padding: '24px',
            borderRadius: '16px',
            backgroundColor: 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            05 · Minimal Kinetic
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: '18px', color: '#FFFFFF' }}>
            Portfolio Base Glass
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#888888', lineHeight: 1.5 }}>
            Deep neutral dark backdrop with pristine white boundary lines and buttery kinetic hover transitions.
          </p>
        </div>
      </div>
    </div>
  );
};
