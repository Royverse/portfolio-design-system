import React, { useState } from 'react';

export interface ColorSwatchPickerProps {
  colors?: Array<{ name: string; hex: string }>;
  selectedColor?: string;
  onSelectColor?: (hex: string) => void;
  size?: number;
}

const DEFAULT_SWATCHES = [
  { name: 'Neon Purple', hex: '#7F77DD' },
  { name: 'Emerald Green', hex: '#10B981' },
  { name: 'Cyan Sky', hex: '#06B6D4' },
  { name: 'Amber Gold', hex: '#F59E0B' },
  { name: 'Crimson Rose', hex: '#E11D48' },
  { name: 'Pure White', hex: '#FFFFFF' },
];

export const ColorSwatchPicker: React.FC<ColorSwatchPickerProps> = ({
  colors = DEFAULT_SWATCHES,
  selectedColor: controlledColor,
  onSelectColor,
  size = 36,
}) => {
  const [internalColor, setInternalColor] = useState(DEFAULT_SWATCHES[0].hex);
  const activeColor = controlledColor !== undefined ? controlledColor : internalColor;

  const handleSelect = (hex: string) => {
    setInternalColor(hex);
    if (onSelectColor) onSelectColor(hex);
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px', borderRadius: '9999px', backgroundColor: '#14141E', border: '1px solid rgba(255,255,255,0.08)' }}>
      {colors.map((c) => {
        const isSelected = activeColor.toLowerCase() === c.hex.toLowerCase();
        return (
          <button
            key={c.hex}
            type="button"
            aria-label={`Select ${c.name}`}
            aria-pressed={isSelected}
            onClick={() => handleSelect(c.hex)}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: c.hex,
              border: isSelected ? '3px solid #FFFFFF' : '2px solid transparent',
              boxShadow: isSelected ? `0 0 14px ${c.hex}` : 'none',
              cursor: 'pointer',
              outline: 'none',
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              transform: isSelected ? 'scale(1.15)' : 'scale(1)',
              padding: 0,
            }}
          />
        );
      })}
    </div>
  );
};
