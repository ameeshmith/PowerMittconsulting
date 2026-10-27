import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './NebulaHeroCanvas.css';

/**
 * NebulaHeroCanvas — Three.js WebGL FBM Nebula with pointer drift
 * Inspired by ThreeUI "Nebula - Structure Flow"
 * Creates an organic fluid electric sapphire & indigo nebula with smooth pointer tracking,
 * subtle breathing pulse, and film grain overlay.
 */
const glslNoiseCommon = `
  vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  float fbm(vec2 p){
    float v = 0.0; float a = 0.55;
    for(int i=0;i<4;i++){ v += a*snoise(p); p *= 2.05; a *= 0.5; }
    return v;
  }
`;

const heroFragmentShader = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  ${glslNoiseCommon}

  void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv;
    p.x *= u_resolution.x / u_resolution.y;

    float t = u_time * 0.05;
    vec2 drift = (u_mouse - 0.5) * 0.14;

    vec2 st = p * 0.85 + drift;
    st += vec2(fbm(st + t), fbm(st - t)) * 0.35;

    vec3 col = vec3(0.004, 0.005, 0.012);

    vec2 c1 = vec2(u_resolution.x / u_resolution.y * 0.72, 0.85) + drift;
    float d1 = length(p - c1);
    float n1 = fbm(st * 1.4 + t * 2.0);
    float mass = smoothstep(1.15, 0.05, d1 + n1 * 0.32);

    float tongue = smoothstep(0.55, 0.02, abs(p.x - (u_resolution.x/u_resolution.y * 0.68) - n1 * 0.22)) * smoothstep(1.2, 0.1, abs(uv.y - 0.55));

    vec2 c2 = vec2(u_resolution.x / u_resolution.y * 1.12, 0.5);
    float d2 = length(p - c2);
    float mass2 = smoothstep(0.9, 0.0, d2 + fbm(st * 1.1 - t) * 0.25);

    vec3 deepForest = vec3(0.008, 0.045, 0.030);
    vec3 emerald = vec3(0.025, 0.28, 0.16);
    vec3 electricMint = vec3(0.08, 0.52, 0.34);

    col = mix(col, deepForest, clamp(mass * 0.85 + mass2 * 0.65, 0.0, 1.0));
    col = mix(col, emerald, clamp(mass * mass * 0.95 + mass2 * 0.45, 0.0, 1.0));
    col += electricMint * tongue * mass * 0.45;

    float pulse = 0.95 + 0.05 * sin(u_time * 0.4);
    col *= pulse;

    float vig = smoothstep(1.6, 0.35, length(uv - vec2(0.45, 0.5)));
    col *= mix(0.5, 1.0, vig);

    float centerDist = length((uv - vec2(0.48, 0.52)) * vec2(1.1, 1.6));
    float textSafeZone = smoothstep(0.12, 0.55, centerDist);
    col *= mix(0.4, 1.0, textSafeZone);
    col *= mix(0.35, 1.0, smoothstep(0.0, 0.65, uv.x));

    col *= 0.72;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const footerFragmentShader = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  ${glslNoiseCommon}

  void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float aspect = u_resolution.x / max(u_resolution.y, 1.0);

    // Coordinates normalized to footer container, maintaining fluid scale regardless of zoom or aspect ratio
    vec2 p = vec2((uv.x - 0.5) * min(aspect, 3.2), (uv.y - 0.5) * 1.25);

    float t = u_time * 0.05;
    vec2 drift = (u_mouse - 0.5) * 0.16;

    // Fluid noise coordinates
    vec2 st = p * 0.85 + drift;
    st += vec2(fbm(st + t), fbm(st - t)) * 0.38;

    // Deep midnight navy base
    vec3 col = vec3(0.005, 0.008, 0.016);

    // Left nebula mass: illuminates brand and left columns (uv.x ~ 0.28)
    vec2 c1 = vec2(-0.55, 0.08) + drift * 0.5;
    float d1 = length(p - c1);
    float n1 = fbm(st * 1.35 + t * 1.5);
    float mass1 = smoothstep(1.15, 0.05, d1 + n1 * 0.32);

    // Right nebula mass: illuminates services, industries and links (uv.x ~ 0.68)
    vec2 c2 = vec2(0.55, -0.06) + drift * 0.5;
    float d2 = length(p - c2);
    float n2 = fbm(st * 1.25 - t * 1.3);
    float mass2 = smoothstep(1.10, 0.05, d2 + n2 * 0.32);

    // Central flowing aurora ribbon linking left and right across the entire footer
    float ribbon = smoothstep(0.52, 0.02, abs(uv.y - 0.52 + sin(uv.x * 3.8 + t * 1.2) * 0.11 - n1 * 0.2));

    // Rich emerald and mint green palette (radiant liquid energy beneath glass)
    vec3 deepForest = vec3(0.014, 0.075, 0.048); // Deep midnight viridian
    vec3 emerald = vec3(0.045, 0.44, 0.26);     // Vibrant emerald energy
    vec3 electricMint = vec3(0.14, 0.78, 0.50);  // Luminous aurora/mint green accent

    float combinedMass = clamp(mass1 * 0.9 + mass2 * 0.9 + ribbon * 0.55, 0.0, 1.0);
    col = mix(col, deepForest, combinedMass);
    col = mix(col, emerald, clamp(combinedMass * combinedMass * 1.15, 0.0, 1.0));
    col += electricMint * (mass1 * mass1 * 0.45 + mass2 * mass2 * 0.48 + ribbon * 0.42);

    // Gentle breathing pulse
    float pulse = 0.95 + 0.05 * sin(u_time * 0.45);
    col *= pulse;

    // Soft atmospheric vignette
    float vig = smoothstep(1.8, 0.25, length((uv - vec2(0.5, 0.5)) * vec2(1.1, 1.5)));
    col *= mix(0.65, 1.0, vig);

    // Soft edge fade at top & bottom borders of the footer for clean integration
    float borderFade = smoothstep(0.0, 0.06, uv.y) * smoothstep(1.0, 0.94, uv.y);
    col = mix(vec3(0.005, 0.008, 0.016), col, borderFade);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function NebulaHeroCanvas({ className = '', variant = 'hero' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Initialize Three.js renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    // Balanced pixel ratio (1.35 max) prevents GPU thermal throttling on retina/4K displays
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
    };

    const fragmentShader = variant === 'footer' ? footerFragmentShader : heroFragmentShader;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: 'void main(){ gl_Position = vec4(position, 1.0); }',
      fragmentShader,
      depthWrite: false,
      depthTest: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse tracking with smooth lerp
    const mouseTarget = { x: 0.5, y: 0.5 };
    const handlePointerMove = (e) => {
      if (variant === 'footer') {
        const rect = container.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          mouseTarget.x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          mouseTarget.y = Math.max(0, Math.min(1, 1.0 - (e.clientY - rect.top) / rect.height));
        }
      } else {
        mouseTarget.x = e.clientX / window.innerWidth;
        mouseTarget.y = 1.0 - (e.clientY / window.innerHeight);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Responsive resize handler with ResizeObserver
    const updateSize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      if (newWidth > 0 && newHeight > 0) {
        renderer.setSize(newWidth, newHeight, false);
        uniforms.u_resolution.value.set(newWidth, newHeight);
      }
    };

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateSize();
      });
      resizeObserver.observe(container);
    }

    window.addEventListener('resize', updateSize, { passive: true });

    // Performance Optimization: IntersectionObserver pauses render loop when scrolled off-screen
    const clock = new THREE.Clock();
    let animId = null;
    let isVisible = true;

    const render = () => {
      if (!isVisible) {
        animId = null;
        return;
      }
      animId = requestAnimationFrame(render);
      uniforms.u_time.value = clock.getElapsedTime();
      // Smooth lerp pointer drift
      uniforms.u_mouse.value.x += (mouseTarget.x - uniforms.u_mouse.value.x) * 0.035;
      uniforms.u_mouse.value.y += (mouseTarget.y - uniforms.u_mouse.value.y) * 0.035;
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
      if (resizeObserver) resizeObserver.disconnect();
      observer.disconnect();
      stopAnimation();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', updateSize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [variant]);

  return (
    <div ref={containerRef} className={`nebula-canvas-container ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="nebula-canvas" />
      {/* Analog film grain overlay */}
      <div className="nebula-grain-overlay" />
      {/* Soft central focus vignette */}
      <div className="nebula-vignette-overlay" />
    </div>
  );
}
