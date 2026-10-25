import React, { useEffect, useRef } from 'react';

export interface ElectricBorderProps {
  children?: React.ReactNode;
  color?: string;
  speed?: number;
  borderRadius?: number;
  glowIntensity?: number;
  style?: React.CSSProperties;
}

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = 'var(--project-theme-color)',
  speed = 1,
  borderRadius = 16,
  glowIntensity = 0.5,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      const w = (canvas.width = canvas.offsetWidth);
      const h = (canvas.height = canvas.offsetHeight);
      ctx.clearRect(0, 0, w, h);

      // Draw kinetic electric spark segments around perimeter
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12 * glowIntensity;

      const perim = 2 * (w + h);
      const sparkLen = perim * 0.15;
      const offset = (t * speed * 300) % perim;

      // Draw rounded rect path
      ctx.beginPath();
      ctx.roundRect(1, 1, w - 2, h - 2, borderRadius);
      ctx.setLineDash([sparkLen, perim - sparkLen]);
      ctx.lineDashOffset = -offset;
      ctx.stroke();

      ctx.restore();
      t += 0.016;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [color, speed, borderRadius, glowIntensity]);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: `${borderRadius}px`,
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          borderRadius: `${borderRadius}px`,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, borderRadius: `${borderRadius}px` }}>
        {children}
      </div>
    </div>
  );
};
