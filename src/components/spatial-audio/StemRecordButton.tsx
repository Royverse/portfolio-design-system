import React, { useState, useEffect } from 'react';

export interface StemRecordButtonProps {
  isRecording?: boolean;
  onToggleRecord?: (recording: boolean) => void;
  formatLabel?: string;
}

export const StemRecordButton: React.FC<StemRecordButtonProps> = ({
  isRecording: controlledRec,
  onToggleRecord,
  formatLabel = '32-Bit Float WAV + MIDI',
}) => {
  const [internalRec, setInternalRec] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const recording = controlledRec !== undefined ? controlledRec : internalRec;

  useEffect(() => {
    let timer: number;
    if (recording) {
      setSeconds(0);
      timer = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(timer);
  }, [recording]);

  const handleToggle = () => {
    const next = !recording;
    setInternalRec(next);
    if (onToggleRecord) onToggleRecord(next);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <button
        type="button"
        onClick={handleToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '9999px',
          backgroundColor: recording ? '#DC2626' : '#1C1F2B',
          border: `1px solid ${recording ? '#EF4444' : 'rgba(255,255,255,0.12)'}`,
          color: '#FFFFFF',
          fontSize: '13px',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: recording ? '0 0 16px rgba(239, 68, 68, 0.6)' : 'none',
          transition: 'all var(--transition-fast)',
        }}
      >
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: recording ? '2px' : '50%',
            backgroundColor: recording ? '#FFFFFF' : '#EF4444',
            boxShadow: recording ? 'none' : '0 0 8px #EF4444',
          }}
        />
        {recording ? `RECORDING ${formatTime(seconds)}` : 'REC STEM'}
      </button>

      <span style={{ fontSize: '11px', color: 'var(--project-muted-color)' }}>
        {formatLabel}
      </span>
    </div>
  );
};
