import React from 'react';

export interface StatDisplayProps {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  delta?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StatDisplay: React.FC<StatDisplayProps> = ({
  label,
  value,
  unit,
  trend = 'neutral',
  delta,
  size = 'md',
}) => {
  const trendColor = {
    up: '#10B981',
    down: '#EF4444',
    neutral: 'var(--project-muted-color)',
  }[trend];

  const sizeStyle = {
    sm: { value: 18, label: 11 },
    md: { value: 26, label: 12 },
    lg: { value: 36, label: 14 },
  }[size];

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '12px 16px',
        borderRadius: '8px',
        backgroundColor: 'var(--project-surface-bg)',
        border: '1px solid var(--project-border-color)',
      }}
    >
      <span style={{ fontSize: `${sizeStyle.label}px`, color: 'var(--project-muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span
          className="tabular-nums"
          style={{
            fontSize: `${sizeStyle.value}px`,
            fontWeight: 700,
            color: 'var(--project-text-color)',
            fontFamily: 'var(--project-font)',
          }}
        >
          {value}
        </span>
        {unit && (
          <span style={{ fontSize: '13px', color: 'var(--project-muted-color)' }}>
            {unit}
          </span>
        )}
        {delta && (
          <span style={{ fontSize: '12px', fontWeight: 600, color: trendColor, marginLeft: '6px' }}>
            {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '•'} {delta}
          </span>
        )}
      </div>
    </div>
  );
};
