import React from 'react';

export interface SurvivalGaugeProps {
  label?: string;
  value?: number; // 0..100
  unit?: string;
  criticalThreshold?: number;
  color?: string;
}

export const SurvivalGauge: React.FC<SurvivalGaugeProps> = ({
  label = 'OXYGEN RESERVES',
  value = 34,
  unit = '%',
  criticalThreshold = 25,
  color = '#38BDF8',
}) => {
  const isCritical = value <= criticalThreshold;
  const activeColor = isCritical ? '#EF4444' : color;

  return (
    <div
      style={{
        padding: '16px 20px',
        borderRadius: '8px',
        backgroundColor: '#020C14',
        border: `1px solid ${isCritical ? '#EF4444' : 'rgba(56, 189, 248, 0.3)'}`,
        boxShadow: isCritical ? '0 0 20px rgba(239, 68, 68, 0.4)' : '0 8px 24px rgba(0,0,0,0.6)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        fontFamily: "'JetBrains Mono', monospace",
        minWidth: '260px',
        animation: isCritical ? 'pulseCritical 1s infinite alternate' : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: isCritical ? '#EF4444' : '#7DD3FC' }}>
          {isCritical ? '⚠️ CRITICAL ALERT' : label}
        </span>
        <span className="tabular-nums" style={{ fontSize: '18px', fontWeight: 700, color: activeColor }}>
          {value}{unit}
        </span>
      </div>

      {/* Progress Bar */}
      <div style={{ height: '6px', borderRadius: '3px', backgroundColor: '#051928', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${Math.max(0, Math.min(100, value))}%`,
            backgroundColor: activeColor,
            boxShadow: `0 0 10px ${activeColor}`,
            transition: 'width var(--transition-base), background-color var(--transition-base)',
          }}
        />
      </div>
    </div>
  );
};
