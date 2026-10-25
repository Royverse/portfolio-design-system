import React, { useState } from 'react';

export interface DesktopIconProps {
  label?: string;
  icon?: string;
  isSelected?: boolean;
  onDoubleClick?: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  label = 'Roy\'s Atelier',
  icon = '🎹',
  isSelected: controlledSelected,
  onDoubleClick,
}) => {
  const [internalSelected, setInternalSelected] = useState(false);
  const isSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setInternalSelected(!isSelected)}
      onDoubleClick={onDoubleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (onDoubleClick) onDoubleClick();
        }
      }}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        width: '74px',
        padding: '6px 4px',
        borderRadius: '4px',
        backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.35)' : 'transparent',
        border: `1px dotted ${isSelected ? '#60A5FA' : 'transparent'}`,
        cursor: 'pointer',
        userSelect: 'none',
        outline: 'none',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '8px',
          backgroundColor: '#1E293B',
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          boxShadow: isSelected ? '0 0 12px rgba(96, 165, 250, 0.5)' : '0 4px 8px rgba(0,0,0,0.4)',
        }}
      >
        {icon}
      </div>

      <span
        style={{
          fontSize: '11px',
          fontWeight: 600,
          color: '#FFFFFF',
          textShadow: '0 1px 2px rgba(0,0,0,0.9)',
          lineHeight: 1.2,
          wordBreak: 'break-word',
        }}
      >
        {label}
      </span>
    </div>
  );
};
