import React, { useState } from 'react';

export interface SoloMapToggleProps {
  axisId: string;
  axisLabel: string;
  channel: number;
  ccNumber: number;
  isSoloed?: boolean;
  value?: number; // 0..127
  onToggleSolo?: (axisId: string, soloState: boolean) => void;
}

export const SoloMapToggle: React.FC<SoloMapToggleProps> = ({
  axisId = 'RH_Y',
  axisLabel = 'Right Hand Y (Filter Cutoff)',
  channel = 1,
  ccNumber = 74,
  isSoloed: controlledSolo,
  value = 84,
  onToggleSolo,
}) => {
  const [internalSolo, setInternalSolo] = useState(false);
  const solo = controlledSolo !== undefined ? controlledSolo : internalSolo;

  const handleToggle = () => {
    const next = !solo;
    setInternalSolo(next);
    if (onToggleSolo) onToggleSolo(axisId, next);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '10px 16px',
        borderRadius: '8px',
        backgroundColor: solo ? 'rgba(249, 115, 22, 0.15)' : '#161922',
        border: `1px solid ${solo ? '#F97316' : '#272B38'}`,
        transition: 'all var(--transition-fast)',
        minWidth: '340px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--project-text-color)' }}>
          {axisLabel}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--project-muted-color)' }}>
          Ch {channel} · CC {ccNumber} · Value: <strong className="tabular-nums">{value}</strong>
        </span>
      </div>

      <button
        type="button"
        onClick={handleToggle}
        aria-pressed={solo}
        style={{
          padding: '6px 12px',
          borderRadius: '6px',
          border: `1px solid ${solo ? '#F97316' : 'rgba(255,255,255,0.12)'}`,
          backgroundColor: solo ? '#F97316' : 'transparent',
          color: solo ? '#000000' : 'var(--project-text-color)',
          fontSize: '11px',
          fontWeight: 700,
          cursor: 'pointer',
          letterSpacing: '0.06em',
          transition: 'all var(--transition-fast)',
        }}
      >
        {solo ? '● SOLO ACTIVE' : 'SOLO MAP'}
      </button>
    </div>
  );
};
