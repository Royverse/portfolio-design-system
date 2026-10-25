import React from 'react';

export interface SentimentMeterProps {
  score?: number; // 0..100 (0=Extreme Bear, 50=Neutral, 100=Extreme Bull)
  ticker?: string;
  sentimentText?: string;
  narrativeSummary?: string;
}

export const SentimentMeter: React.FC<SentimentMeterProps> = ({
  score = 78,
  ticker = 'NVDA',
  sentimentText = 'BULLISH',
  narrativeSummary = 'Institutional flow and AI chip demand accelerating into earnings.',
}) => {
  const isBull = score >= 60;
  const isBear = score <= 40;
  const statusColor = isBull ? '#10B981' : isBear ? '#EF4444' : '#F59E0B';

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '6px',
        backgroundColor: '#030D07',
        border: '1px solid #1D9E75',
        boxShadow: '0 0 20px rgba(29,158,117,0.15)',
        fontFamily: "'DM Mono', monospace",
        maxWidth: '380px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
          ${ticker}
        </span>
        <span
          style={{
            fontSize: '12px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: `${statusColor}22`,
            color: statusColor,
            border: `1px solid ${statusColor}`,
          }}
        >
          {sentimentText}
        </span>
      </div>

      {/* Sentiment Gauge Bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#1D9E75', marginBottom: '6px' }}>
          <span>BEARISH (0)</span>
          <span className="tabular-nums" style={{ fontWeight: 700, color: statusColor }}>
            INDEX: {score}/100
          </span>
          <span>BULLISH (100)</span>
        </div>

        <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#071A10', border: '1px solid #1D9E75', position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${score}%`,
              backgroundColor: statusColor,
              boxShadow: `0 0 10px ${statusColor}`,
              transition: 'width var(--transition-base)',
            }}
          />
        </div>
      </div>

      {/* Terminal Narrative Output */}
      <p style={{ margin: 0, fontSize: '12px', color: '#5DCAA5', lineHeight: 1.5, borderTop: '1px dashed #1D9E7544', paddingTop: '10px' }}>
        &gt; AI READ: {narrativeSummary}
      </p>
    </div>
  );
};
