import React from 'react';

export interface FlightTelemetryRingProps {
  speedMach?: number;
  altitudeMeters?: number;
  boostActive?: boolean;
  ringsCleared?: number;
}

export const FlightTelemetryRing: React.FC<FlightTelemetryRingProps> = ({
  speedMach = 2.4,
  altitudeMeters = 1840,
  boostActive = true,
  ringsCleared = 14,
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '20px',
        borderRadius: '16px',
        backgroundColor: 'rgba(3, 20, 22, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(13, 148, 136, 0.4)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        fontFamily: "'JetBrains Mono', monospace",
        minWidth: '220px',
      }}
    >
      {/* Concentric Telemetry Reticle */}
      <div
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          border: '2px dashed rgba(45, 212, 191, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: `2px solid ${boostActive ? '#2DD4BF' : 'rgba(45, 212, 191, 0.2)'}`,
            boxShadow: boostActive ? '0 0 16px rgba(45, 212, 191, 0.6)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <span className="tabular-nums" style={{ fontSize: '18px', fontWeight: 800, color: '#E0F2F1' }}>
            {speedMach.toFixed(1)}
          </span>
          <span style={{ fontSize: '9px', color: '#2DD4BF', letterSpacing: '0.08em' }}>
            MACH
          </span>
        </div>
      </div>

      {/* Flight Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%', textAlign: 'center' }}>
        <div style={{ padding: '6px', backgroundColor: 'rgba(13, 148, 136, 0.15)', borderRadius: '6px' }}>
          <span style={{ fontSize: '9px', color: '#5EEAD4', display: 'block' }}>ALTITUDE</span>
          <span className="tabular-nums" style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>
            {altitudeMeters}m
          </span>
        </div>

        <div style={{ padding: '6px', backgroundColor: 'rgba(13, 148, 136, 0.15)', borderRadius: '6px' }}>
          <span style={{ fontSize: '9px', color: '#5EEAD4', display: 'block' }}>RINGS</span>
          <span className="tabular-nums" style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>
            {ringsCleared}
          </span>
        </div>
      </div>
    </div>
  );
};
