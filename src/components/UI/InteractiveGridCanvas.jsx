import { useEffect, useRef } from 'react';
import './InteractiveGridCanvas.css';

/**
 * InteractiveGridCanvas — CreoIT & High-Craft Interactive Mouse Tracking
 * Renders an electrical power grid constellation that dynamically tracks
 * cursor position, forming reactive linkages and glowing substation nodes.
 */
export default function InteractiveGridCanvas({
  nodeCount = 42,
  connectionDistance = 130,
  mouseRadius = 180,
  colorScheme = 'electric', // 'electric' | 'emerald' | 'monochrome'
  className = ''
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, isHovered: false });
  const animFrameRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Re-initialize or clamp nodes
      if (nodesRef.current.length === 0) {
        initNodes();
      } else {
        nodesRef.current.forEach(node => {
          node.x = Math.min(node.x, width);
          node.y = Math.min(node.y, height);
        });
      }
    };

    const initNodes = () => {
      const count = Math.floor((width * height) / 50000) || nodeCount;
      const nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.2 + 1.2,
          baseAlpha: Math.random() * 0.25 + 0.25,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03
        });
      }
      nodesRef.current = nodes;
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Track mouse on parent
    const parent = canvas.parentElement;
    const handleMouseMove = (e) => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    // Colors: Luminous Sky/Cyan for high visibility on dark hero
    const primaryRGB = colorScheme === 'emerald' ? '16, 185, 129' : '56, 189, 248'; // Sky 400
    const secondaryRGB = colorScheme === 'emerald' ? '52, 211, 153' : '125, 211, 252'; // Sky 300
    const highlightRGB = '224, 242, 254'; // Sky 100

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse coordinates
      const mouse = mouseRef.current;
      if (mouse.isHovered) {
        mouse.x += (mouse.targetX - mouse.x) * 0.14;
        mouse.y += (mouse.targetY - mouse.y) * 0.14;
      } else {
        mouse.x += (-1000 - mouse.x) * 0.08;
        mouse.y += (-1000 - mouse.y) * 0.08;
      }

      const nodes = nodesRef.current;

      // Update node positions
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;

        // Bounce on boundary
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        else if (n.x > width) { n.x = width; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        else if (n.y > height) { n.y = height; n.vy *= -1; }

        // Mouse reactive repulsion/attraction
        if (mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 1) {
            const force = (1 - dist / mouseRadius) * 0.8;
            n.x -= (dx / dist) * force;
            n.y -= (dy / dist) * force;
          }
        }
      }

      // Draw connection lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(${secondaryRGB}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw mouse interactive connections
      if (mouse.x > 0 && mouse.y > 0) {
        // Connect cursor to nearby nodes with clean, non-distracting hairline linkages
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(${primaryRGB}, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();

            // Subtle highlight on node in cursor range
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.radius + 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${highlightRGB}, ${Math.min(0.85, alpha + 0.25)})`;
            ctx.fill();
          }
        }

        // Clean, crisp cursor target reticle without overwhelming blur
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 11, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${primaryRGB}, 0.5)`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // Draw all nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulseAlpha = n.baseAlpha + Math.sin(n.pulse) * 0.12;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${secondaryRGB}, ${Math.max(0.2, pulseAlpha)})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [nodeCount, connectionDistance, mouseRadius, colorScheme]);

  return (
    <canvas
      ref={canvasRef}
      className={`interactive-grid-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
