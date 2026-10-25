import React, { useState, useEffect } from 'react';

export interface TaskbarProps {
  activeWindows?: Array<{ id: string; title: string; icon: string; isActive: boolean }>;
  onStartClick?: () => void;
  onWindowClick?: (id: string) => void;
}

const DEFAULT_WINDOWS = [
  { id: 'notepad', title: 'Notepad', icon: '📝', isActive: true },
  { id: 'browser', title: 'Web Browser', icon: '🌐', isActive: false },
  { id: 'synth', title: 'Roy\'s Atelier', icon: '🎹', isActive: false },
];

export const Taskbar: React.FC<TaskbarProps> = ({
  activeWindows = DEFAULT_WINDOWS,
  onStartClick,
  onWindowClick,
}) => {
  const [time, setTime] = useState('12:00 PM');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      aria-label="Desktop Taskbar"
      style={{
        width: '100%',
        height: '38px',
        backgroundColor: '#27272A',
        borderTop: '2px solid #52525B',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4px',
        boxSizing: 'border-box',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Start Button & Window Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button
          type="button"
          onClick={onStartClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            height: '28px',
            backgroundColor: '#3F3F46',
            borderTop: '2px solid #71717A',
            borderLeft: '2px solid #71717A',
            borderRight: '2px solid #18181B',
            borderBottom: '2px solid #18181B',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          <span>❖</span>
          <span>START</span>
        </button>

        {/* Running Windows */}
        {activeWindows.map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => onWindowClick && onWindowClick(w.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              height: '28px',
              backgroundColor: w.isActive ? '#18181B' : '#27272A',
              borderTop: w.isActive ? '2px solid #09090B' : '2px solid #52525B',
              borderLeft: w.isActive ? '2px solid #09090B' : '2px solid #52525B',
              borderRight: w.isActive ? '2px solid #52525B' : '2px solid #09090B',
              borderBottom: w.isActive ? '2px solid #52525B' : '2px solid #09090B',
              color: w.isActive ? '#FFFFFF' : '#A1A1AA',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
              maxWidth: '140px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{w.icon}</span>
            <span>{w.title}</span>
          </button>
        ))}
      </div>

      {/* System Tray Clock */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '2px 8px',
          height: '24px',
          backgroundColor: '#18181B',
          borderTop: '1px solid #09090B',
          borderLeft: '1px solid #09090B',
          borderRight: '1px solid #52525B',
          borderBottom: '1px solid #52525B',
          fontSize: '11px',
          color: '#E4E4E7',
        }}
      >
        <span>🔊</span>
        <span className="tabular-nums" style={{ fontWeight: 600 }}>
          {time}
        </span>
      </div>
    </nav>
  );
};
