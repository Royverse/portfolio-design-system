import React, { useState } from 'react';

export interface WindowFrameProps {
  title?: string;
  icon?: string;
  isActive?: boolean;
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  title = 'Notepad - Untitled',
  icon = '📝',
  isActive = true,
  width = 440,
  height = 280,
  children,
  onClose,
  onMinimize,
  onMaximize,
}) => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: minimized ? 'auto' : typeof height === 'number' ? `${height}px` : height,
        borderRadius: '3px',
        backgroundColor: '#27272A',
        borderTop: '2px solid #52525B',
        borderLeft: '2px solid #52525B',
        borderRight: '2px solid #09090B',
        borderBottom: '2px solid #09090B',
        boxShadow: isActive ? '6px 6px 0px rgba(0,0,0,0.6)' : '3px 3px 0px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Title Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4px 8px',
          backgroundColor: isActive ? '#3F3F46' : '#27272A',
          borderBottom: '1px solid #18181B',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '13px' }}>{icon}</span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: isActive ? '#FFFFFF' : '#A1A1AA' }}>
            {title}
          </span>
        </div>

        {/* 3 Window Buttons */}
        <div style={{ display: 'flex', gap: '3px' }}>
          <button
            type="button"
            aria-label="Minimize"
            onClick={() => setMinimized(!minimized)}
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#27272A',
              borderTop: '1px solid #71717A',
              borderLeft: '1px solid #71717A',
              borderRight: '1px solid #09090B',
              borderBottom: '1px solid #09090B',
              color: '#FFFFFF',
              fontSize: '10px',
              lineHeight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            _
          </button>
          <button
            type="button"
            aria-label="Maximize"
            onClick={onMaximize}
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#27272A',
              borderTop: '1px solid #71717A',
              borderLeft: '1px solid #71717A',
              borderRight: '1px solid #09090B',
              borderBottom: '1px solid #09090B',
              color: '#FFFFFF',
              fontSize: '10px',
              lineHeight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            □
          </button>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#7F1D1D',
              borderTop: '1px solid #DC2626',
              borderLeft: '1px solid #DC2626',
              borderRight: '1px solid #450A0A',
              borderBottom: '1px solid #450A0A',
              color: '#FFFFFF',
              fontSize: '10px',
              lineHeight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Content Canvas */}
      {!minimized && (
        <div style={{ flex: 1, padding: '16px', backgroundColor: '#18181B', overflow: 'auto', boxSizing: 'border-box' }}>
          {children || (
            <div style={{ fontSize: '13px', color: '#D4D4D8', lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 10px' }}>Midnight OS Workspace v2.0</p>
              <p style={{ margin: 0, color: '#A1A1AA' }}>
                Filesystem initialized. Persistent LocalStorage database synced.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
