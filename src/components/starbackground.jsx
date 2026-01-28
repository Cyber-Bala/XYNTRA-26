import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    const starCount = 200;

    class Star {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.08 + 0.02;
        this.opacity = Math.random();
        this.flickerSpeed = Math.random() * 0.015 + 0.005;
      }

      update(width, height) {
        this.y -= this.speed;
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }

        this.opacity += this.flickerSpeed;
        if (this.opacity > 1 || this.opacity < 0.1) {
          this.flickerSpeed = -this.flickerSpeed;
        }
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        if (this.opacity > 0.8) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'white';
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from(
        { length: starCount },
        () => new Star(canvas.width, canvas.height)
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update(canvas.width, canvas.height);
        star.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'transparent',
      }}
    />
  );
};

export default StarBackground;

