import React, { useEffect, useRef } from 'react';

/**
 * Ambient flowing waves canvas inspired by Odysseus #hero-flow
 * Automatically samples the theme colors from CSS variables
 */
export default function FlowCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (canvas) {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    // Read colors from document root CSS variables
    const getThemeColors = () => {
      const style = getComputedStyle(document.documentElement);
      const accent = style.getPropertyValue('--color-accent').trim() || '#FE7F2D';
      const panel = style.getPropertyValue('--color-panel').trim() || '#233D4D';
      return { accent, panel };
    };

    const { accent, panel } = getThemeColors();

    let step = 0;
    const lines = [
      { speed: 0.003, amplitude: 35, wavelength: 0.0012, color: accent, alpha: 0.15, offset: 0 },
      { speed: 0.004, amplitude: 45, wavelength: 0.0016, color: panel, alpha: 0.25, offset: 2 },
      { speed: 0.002, amplitude: 25, wavelength: 0.0009, color: accent, alpha: 0.1, offset: 4 },
      { speed: 0.005, amplitude: 55, wavelength: 0.002, color: panel, alpha: 0.2, offset: 1.5 },
    ];

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);
      step += 1;

      lines.forEach((line) => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.alpha;
        ctx.lineWidth = 1.5;

        const baseHeight = height * 0.45;

        for (let x = 0; x < width; x += 10) {
          const y =
            baseHeight +
            Math.sin(x * line.wavelength + step * line.speed + line.offset) * line.amplitude +
            Math.cos(x * line.wavelength * 0.5 + step * line.speed * 0.7) * (line.amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause rendering when tab is hidden to save CPU and battery/RAM
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial start if visible
    if (!document.hidden) {
      render();
    }

    return () => {
      isRunning = false;
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
}
