import React from 'react';

export const TypographySpecimen: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      <div>
        <h1 style={{ margin: '0 0 8px', fontSize: '28px', fontWeight: 700 }}>
          Ecosystem Typography Systems
        </h1>
        <p style={{ margin: 0, color: 'var(--project-muted-color)', fontSize: '15px' }}>
          Typography pairings tailored per project personality, from classical acoustic serif to financial monospace.
        </p>
      </div>

      {/* Font Families Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* Cinzel */}
        <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'var(--project-surface-bg)', border: '1px solid var(--project-border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--project-theme-color)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Classical Acoustic Serif · Roy's Atelier & Overtone
            </span>
            <code style={{ fontSize: '12px', color: 'var(--project-muted-color)' }}>font-family: 'Cinzel', serif</code>
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '32px', fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1.3 }}>
            Roy’s Atelier of Spatial Instruments
          </div>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '16px', color: 'var(--project-muted-color)', margin: '8px 0 0' }}>
            Theremin · Ondes Martenot · Cristal Baschet · Swiss Handpan · Laser Harp
          </p>
        </div>

        {/* DM Mono */}
        <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'var(--project-surface-bg)', border: '1px solid var(--project-border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Financial Terminal Monospace · not financial advice.
            </span>
            <code style={{ fontSize: '12px', color: 'var(--project-muted-color)' }}>font-family: 'DM Mono', monospace</code>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '24px', fontWeight: 500, color: '#5DCAA5' }}>
            &gt; VIBE CHECK: BULLISH · SPY +1.24% · BTC $94,230.15
          </div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', color: 'var(--project-muted-color)', margin: '8px 0 0' }}>
            Markets move on numbers and narratives. Continuous real-time sentiment stream.
          </p>
        </div>

        {/* JetBrains Mono */}
        <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'var(--project-surface-bg)', border: '1px solid var(--project-border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Procedural & Dev Metrics · Cold Wake & milkyway.ai
            </span>
            <code style={{ fontSize: '12px', color: 'var(--project-muted-color)' }}>font-family: 'JetBrains Mono', monospace</code>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 500, color: '#7DD3FC' }} className="tabular-nums">
            DEPTH: 4,820m // HULL: 98.4% // O2: 02:44:12 // LATENCY: 16.6ms
          </div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'var(--project-muted-color)', margin: '8px 0 0' }}>
            Tabular numeral alignments prevent layout jitter during 60fps telemetry sweeps.
          </p>
        </div>

        {/* Epilogue */}
        <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'var(--project-surface-bg)', border: '1px solid var(--project-border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#E11D48', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Affective Display Sans · Mood Support
            </span>
            <code style={{ fontSize: '12px', color: 'var(--project-muted-color)' }}>font-family: 'Epilogue', sans-serif</code>
          </div>
          <div style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '28px', fontWeight: 400, letterSpacing: '-0.02em', color: '#FBEAF0' }}>
            "A quiet breath before the next wave begins."
          </div>
          <p style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '15px', color: 'var(--project-muted-color)', margin: '8px 0 0' }}>
            Soft expressive typography tuned for wellness and emotional presence.
          </p>
        </div>

        {/* Plus Jakarta Sans */}
        <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'var(--project-surface-bg)', border: '1px solid var(--project-border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Modern UI Sans · Portfolio Hub & Ecosystem Default
            </span>
            <code style={{ fontSize: '12px', color: 'var(--project-muted-color)' }}>font-family: 'Plus Jakarta Sans', sans-serif</code>
          </div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '26px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Kinetic interfaces, touchless computing, and sensory web experiences.
          </div>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', color: 'var(--project-muted-color)', margin: '8px 0 0', lineHeight: 1.6 }}>
            Crisp, highly legible geometric sans tailored for high-density interfaces, documentation, and accessible HUDs.
          </p>
        </div>
      </div>
    </div>
  );
};
