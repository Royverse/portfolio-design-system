import React, { useState } from 'react';

export interface ScaleSelectorProps {
  selectedScale?: string;
  onSelectScale?: (scaleKey: string) => void;
  isProUnlocked?: boolean;
}

const SCALE_OPTIONS = [
  { key: 'chromatic', name: 'Chromatic', subtitle: 'Continuous Theremin', pro: false },
  { key: 'major', name: 'Major', subtitle: 'Ionian Mode', pro: false },
  { key: 'dorian', name: 'Dorian', subtitle: 'Cinematic Ambient', pro: true },
  { key: 'hirajoshi', name: 'Hirajoshi', subtitle: 'Cristal / Handpan', pro: true },
  { key: 'phrygian_dominant', name: 'Phrygian Dom.', subtitle: 'Sci-Fi / Dune', pro: true },
  { key: 'minor_pentatonic', name: 'Pentatonic', subtitle: 'Organic Solo', pro: true },
];

export const ScaleSelector: React.FC<ScaleSelectorProps> = ({
  selectedScale: controlledScale,
  onSelectScale,
  isProUnlocked = false,
}) => {
  const [internalScale, setInternalScale] = useState('dorian');
  const activeScale = controlledScale !== undefined ? controlledScale : internalScale;

  const handleSelect = (key: string, pro: boolean) => {
    if (pro && !isProUnlocked) return;
    setInternalScale(key);
    if (onSelectScale) onSelectScale(key);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '320px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--project-muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Harmonic Scale Quantizer
        </span>
        {!isProUnlocked && (
          <span style={{ fontSize: '10px', color: '#F59E0B', fontWeight: 700 }}>
            PRO TIER REQUIRED FOR MODAL SCALES
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
        {SCALE_OPTIONS.map((s) => {
          const isSelected = activeScale === s.key;
          const isLocked = s.pro && !isProUnlocked;

          return (
            <button
              key={s.key}
              type="button"
              disabled={isLocked}
              onClick={() => handleSelect(s.key, s.pro)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '10px 12px',
                borderRadius: '8px',
                backgroundColor: isSelected ? 'rgba(249, 115, 22, 0.2)' : isLocked ? '#0E1017' : '#161922',
                border: `1px solid ${isSelected ? '#F97316' : isLocked ? '#1A1D28' : '#272B38'}`,
                cursor: isLocked ? 'not-allowed' : 'pointer',
                opacity: isLocked ? 0.45 : 1,
                transition: 'all var(--transition-fast)',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: isSelected ? '#F97316' : '#FFFFFF' }}>
                  {s.name}
                </span>
                {s.pro && (
                  <span style={{ fontSize: '9px', fontWeight: 700, padding: '1px 4px', borderRadius: '3px', backgroundColor: '#D97706', color: '#000000' }}>
                    PRO
                  </span>
                )}
              </div>
              <span style={{ fontSize: '11px', color: 'var(--project-muted-color)', marginTop: '2px' }}>
                {s.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
