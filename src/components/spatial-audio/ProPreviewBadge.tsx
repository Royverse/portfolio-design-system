import React from 'react';

export interface ProPreviewBadgeProps {
  secondsLeft?: number;
  isPro?: boolean;
  onUpgradeClick?: () => void;
}

export const ProPreviewBadge: React.FC<ProPreviewBadgeProps> = ({
  secondsLeft = 45,
  isPro = false,
  onUpgradeClick,
}) => {
  if (isPro) {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          borderRadius: '9999px',
          backgroundColor: '#064E3B',
          border: '1px solid #10B981',
          color: '#A7F3D0',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        <span>★ PRO STUDIO UNLOCKED</span>
      </div>
    );
  }

  const isUrgent = secondsLeft <= 15;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '6px 12px',
        borderRadius: '9999px',
        backgroundColor: isUrgent ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.15)',
        border: `1px solid ${isUrgent ? '#EF4444' : '#F59E0B'}`,
        color: isUrgent ? '#FCA5A5' : '#FDE68A',
        fontSize: '11px',
        fontWeight: 700,
      }}
    >
      <span className="tabular-nums">
        PRO PREVIEW: 0:{secondsLeft.toString().padStart(2, '0')}
      </span>

      <button
        type="button"
        onClick={onUpgradeClick}
        style={{
          padding: '2px 8px',
          borderRadius: '9999px',
          backgroundColor: isUrgent ? '#EF4444' : '#F59E0B',
          color: '#000000',
          fontSize: '10px',
          fontWeight: 800,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        UNLOCK ($29)
      </button>
    </div>
  );
};
