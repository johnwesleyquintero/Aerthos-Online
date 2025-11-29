import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  color?: string; // Hex or RGB string (e.g., "100, 200, 255" for customization with alpha)
  count?: number; // Number of particles
  className?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  color = "56, 189, 248", // Default Cyan-400 equivalent
  count = 50,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Helper to parse color if it's hex, otherwise assume rgb string
    const parseColor = (c: string) => {
        // Very basic check, mainly relies on the user providing 'r,g,b' string or handling standard CSS colors
        // For this specific effect, passing "r, g, b" strings allows us to control opacity easily in rgba()
        return c; 
    };
    
    const rgbColor = parseColor(color);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5; // Size between 0.5 and 2.5
        this.speedY = Math.random() * 0.5 + 0.2; // Upward speed
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
      }

      update(w: number, h: number) {
        this.y -= this.speedY;
        
        // Wrap around vertically
        if (this.y < 0) {
          this.y = h;
          this.x = Math.random() * w;
          this.opacity = 0; // Start invisible when resetting
        }

        // Pulse opacity
        this.opacity += this.fadeSpeed;
        if (this.opacity > 0.8 || this.opacity < 0.1) {
            this.fadeSpeed = -this.fadeSpeed;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${rgbColor}, ${Math.abs(this.opacity)})`;
        context.fill();
      }
    }

    const init = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      init();
    };

    // Initial setup
    handleResize();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, count]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`block pointer-events-none ${className}`}
    />
  );
};
