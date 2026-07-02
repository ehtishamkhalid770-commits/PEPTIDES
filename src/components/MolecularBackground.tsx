import { useEffect, useRef } from "react";

export default function MolecularBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background faint glow gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      gradient.addColorStop(0, "#050b18");
      gradient.addColorStop(1, "#02050b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw connection lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles and update positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = "rgba(34, 211, 238, 0.4)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra cyan pulse glow for particles close to the mouse
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (distToMouse < 150) {
          ctx.fillStyle = `rgba(6, 182, 212, ${(1 - distToMouse / 150) * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + 3, 0, Math.PI * 2);
          ctx.fill();

          // Pull slightly towards mouse
          p.x += (mouse.x - p.x) * 0.01;
          p.y += (mouse.y - p.y) * 0.01;
        }

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      id="molecular-background-canvas"
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}
