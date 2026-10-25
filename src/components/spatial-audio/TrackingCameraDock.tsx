import React from 'react';

export interface TrackingCameraDockProps {
  status?: 'idle' | 'tracking' | 'calibrating' | 'error';
  fps?: number;
  label?: string;
  showSkeleton?: boolean;
}

export const TrackingCameraDock: React.FC<TrackingCameraDockProps> = ({
  status = 'tracking',
  fps = 60,
  label = 'MediaPipe 1-Euro Kinematics',
  showSkeleton = true,
}) => {
  const statusColor = {
    tracking: '#10B981',
    calibrating: '#F59E0B',
    idle: '#94A3B8',
    error: '#EF4444',
  }[status];

  return (
    <div
      style={{
        width: '240px',
        borderRadius: '12px',
        backgroundColor: '#090A0D',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Video / Skeleton Canvas Mock */}
      <div
        style={{
          height: '135px',
          backgroundColor: '#0F1117',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {showSkeleton && (
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
            {/* Hand Skeleton Wireframe */}
            <path
              d="M60 75L60 45M60 45L40 30M60 45L52 20M60 45L68 18M60 45L80 25"
              stroke={statusColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            {/* Landmarks */}
            <circle cx="60" cy="75" r="4" fill={statusColor} />
            <circle cx="60" cy="45" r="3" fill="#FFFFFF" />
            <circle cx="40" cy="30" r="3" fill={statusColor} />
            <circle cx="52" cy="20" r="3" fill={statusColor} />
            <circle cx="68" cy="18" r="3" fill={statusColor} />
            <circle cx="80" cy="25" r="3" fill={statusColor} />
          </svg>
        )}

        {/* FPS Badge */}
        <span
          className="tabular-nums"
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            fontSize: '10px',
            fontWeight: 700,
            padding: '2px 6px',
            borderRadius: '4px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {fps} FPS
        </span>
      </div>

      {/* Dock Status Bar */}
      <div
        style={{
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: statusColor,
              boxShadow: `0 0 8px ${statusColor}`,
            }}
          />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#E2E8F0' }}>
            {label}
          </span>
        </div>
        <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase' }}>
          {status}
        </span>
      </div>
    </div>
  );
};
