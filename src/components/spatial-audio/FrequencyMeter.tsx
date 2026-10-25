import React, { useEffect, useState } from 'react';

export interface FrequencyMeterProps {
  label?: string;
  activeFrequencyHz?: number;
  noteName?: string;
  barCount?: number;
  color?: string;
  isSimulated?: boolean;
}

export const FrequencyMeter: React.FC<FrequencyMeterProps> = ({
  label = 'Acoustic Field Spectrum',
  activeFrequencyHz = 440.0,
  noteName = 'A4',
  barCount = 18,
  color = 'var(--project-theme-color)',
  isSimulated = true,
}) => {
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: barCount }, () => 20 + Math.random() * 50)
  );

  useEffect(() => {
    if (!isSimulated) return;
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((_, i) => {
          const center = barCount / 2;
          const dist = Math.abs(i - center);
          const base = Math.max(10, 90 - dist * 8);
          return Math.max(10, Math.min(100, base + (Math.random() - 0.5) * 35));
        })
      );
    }, 100);
    return () => clearInterval(interval);
  }, [barCount, isSimulated]);

  return (
    <div
      style={{
        padding: '16px 20px',
        borderRadius: '12px',
        backgroundColor: '#12141C',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '280px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--project-muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {label}
        </span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color }}>{noteName}</span>
          <span className="tabular-nums" style={{ fontSize: '12px', color: 'var(--project-muted-color)' }}>
            {activeFrequencyHz.toFixed(1)} Hz
          </span>
        </div>
      </div>

      {/* Visualizer Bar Stream */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '56px' }}>
        {bars.map((heightPct, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              height: `${heightPct}%`,
              backgroundColor: color,
              borderRadius: '2px',
              opacity: 0.35 + (heightPct / 100) * 0.65,
              boxShadow: heightPct > 70 ? `0 0 8px ${color}` : 'none',
              transition: 'height 80ms ease-out',
            }}
          />
        ))}
      </div>
    </div>
  );
};
