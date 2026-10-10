import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './DarkHalftoneBackground.css';

/**
 * DarkHalftoneBackground — Three.js WebGL Halftone & Grid Matrix
 * Inspired by Aegis Security dark bento visual architecture.
 * Renders an animated undulating halftone dot matrix with electric blue/white accents,
 * blueprint grid lines, and subtle film noise.
 * Pauses automatically via IntersectionObserver when off-screen to preserve 60fps performance.
 */
export default function DarkHalftoneBackground({
  className = '',
  accentColor = 0x38BDF8, // Electric Sky Cyan / Power Blue
  showHalftone = true
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!showHalftone) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const resize = () => {
      if (!container || !renderer) return;
      const width = Math.max(1, container.clientWidth || window.innerWidth);
      const height = Math.max(1, container.clientHeight || window.innerHeight);
      renderer.setSize(width, height, false);
      const aspect = width / height;
      camera.left = -aspect;
      camera.right = aspect;
      camera.bottom = -1;
      camera.top = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Generate Halftone Grid Points
    const gridSize = 26;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const scales = [];

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        positions.push(x * 0.14, y * 0.14, 0);
        scales.push(1);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(accentColor) },
        color2: { value: new THREE.Color(0xFFFFFF) }
      },
      vertexShader: `
        attribute float scale;
        varying vec2 vUv;
        varying float vScale;
        uniform float time;

        void main() {
          vUv = position.xy;
          float dist = length(position.xy);
          float animatedScale = scale * (sin(dist * 5.5 - time * 2.2) * 0.5 + 0.5);
          vScale = animatedScale;

          gl_PointSize = animatedScale * 5.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying float vScale;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          if (length(coord) > 0.5) discard;

          vec3 finalColor = mix(color2, color1, (vUv.y + 1.0) * 0.5);
          gl_FragColor = vec4(finalColor, vScale * 0.75);
        }
      `,
      transparent: true,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Render loop with IntersectionObserver optimization
    const clock = new THREE.Clock();
    let animId = null;
    let isVisible = true;

    const render = () => {
      if (!isVisible) {
        animId = null;
        return;
      }
      animId = requestAnimationFrame(render);
      material.uniforms.time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (animId === null && isVisible) {
        animId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animId !== null) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        startAnimation();
      } else {
        stopAnimation();
      }
    }, { threshold: 0.02 });

    observer.observe(container);
    startAnimation();

    return () => {
      observer.disconnect();
      stopAnimation();
      window.removeEventListener('resize', resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [showHalftone, accentColor]);

  return (
    <div ref={containerRef} className={`dark-halftone-bg ${className}`} aria-hidden="true">
      {showHalftone && <canvas ref={canvasRef} className="dark-halftone-bg__canvas" />}
      <div className="dark-halftone-bg__grid" />
      <div className="dark-halftone-bg__noise" />
      <div className="dark-halftone-bg__radial" />
    </div>
  );
}
