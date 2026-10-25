import React from 'react';

export interface TerminalHeaderProps {
  promptTitle?: string;
  systemStatus?: string;
  liveLatencyMs?: number;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  promptTitle = 'NFA.TERMINAL v2.5',
  systemStatus = 'GEMINI-2.0 LIVE FEED',
  liveLatencyMs = 14.2,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        backgroundColor: '#030A07',
        borderBottom: '1px solid #1D9E75',
        fontFamily: "'DM Mono', monospace",
        color: '#10B981',
        fontSize: '12px',
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }} />
        <span style={{ fontWeight: 700, color: '#E1F5EE' }}>&gt; {promptTitle}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '11px', color: '#5DCAA5' }}>
        <span>{systemStatus}</span>
        <span className="tabular-nums" style={{ color: '#10B981' }}>
          {liveLatencyMs.toFixed(1)}ms
        </span>
      </div>
    </div>
  );
};
