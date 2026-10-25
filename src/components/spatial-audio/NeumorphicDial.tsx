import React, { useState } from 'react';

export interface NeumorphicDialProps {
  label: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  color?: string;
  size?: number;
  onChange?: (val: number) => void;
}

export const NeumorphicDial: React.FC<NeumorphicDialProps> = ({
  label,
  value: controlledVal,
  min = 0,
  max = 100,
  step = 1,
  unit = '%',
  color = 'var(--project-theme-color)',
  size = 120,
  onChange,
}) => {
  const [internalVal, setInternalVal] = useState(controlledVal ?? 50);
  const val = controlledVal !== undefined ? controlledVal : internalVal;

  const pct = (val - min) / (max - min);
  const angle = -135 + pct * 270; // -135 deg to +135 deg

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setInternalVal(v);
    if (onChange) onChange(v);
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--project-muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </span>

      {/* Rotary Dial Visual Container */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: '#12141C',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.08), 0 10px 24px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Arc Track Ring */}
        <svg width={size} height={size} style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size * 0.4}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size * 0.4}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={2 * Math.PI * (size * 0.4)}
            strokeDashoffset={2 * Math.PI * (size * 0.4) * (1 - pct)}
            strokeLinecap="round"
          />
        </svg>

        {/* Knob Core with Indicator Line */}
        <div
          style={{
            width: `${size * 0.65}px`,
            height: `${size * 0.65}px`,
            borderRadius: '50%',
            backgroundColor: '#1C1F2B',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '6px',
            boxSizing: 'border-box',
            transform: `rotate(${angle}deg)`,
            transition: 'transform 80ms ease-out',
          }}
        >
          {/* Indicator Dot */}
          <div
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        </div>
      </div>

      {/* Accessible Slider Input for Touch & Mouse */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        aria-label={label}
        onChange={handleSliderChange}
        style={{
          width: `${size}px`,
          accentColor: color,
          cursor: 'pointer',
        }}
      />

      <span className="tabular-nums" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--project-text-color)' }}>
        {val} {unit}
      </span>
    </div>
  );
};
